---
title: "From Vapi to LiveKit: Hard-Won Lessons Building Production Voice AI Agents"
date: "2026-03-26T09:00:00.000Z"
description: "Hard-won production lessons from migrating voice AI agents from Vapi + n8n to LiveKit Agents, with practical guidance on latency, IVR, prompts, and post-call extraction."
keywords:
  - vapi vs livekit
  - livekit voice agents
  - production voice ai agents
  - healthcare voice ai automation
  - ivr navigation ai agent
  - voice ai latency optimization
  - post call extraction pipeline
canonical: "https://xagi.in/blog/from-vapi-to-livekit-hard-won-lessons-building-production-voice-ai-agents"
author: "xAGI Labs"
category: "Voice AI"
---

# From Vapi to LiveKit: Hard-Won Lessons Building Production Voice AI Agents

*After running inbound voice agents in production first on Vapi + n8n, then rebuilding on LiveKit, here is what I would tell my past self.*

![Notion-style illustration showing migration from a managed voice AI stack to a custom LiveKit stack](/images/blog/vapi-to-livekit/01-vapi-livekit-hero.png)

We have been building AI voice agents for a while now. The use case: automated outbound calls to insurance companies to verify patient eligibility and benefits, which currently eats hours of staff time every week at healthcare providers across the country.

Our first production stack was Vapi + n8n. It got us to market fast. But as we pushed it harder, we kept hitting the same walls: latency we could not control, black-box infrastructure we could not debug, and orchestration logic that got tangled the moment call flows got complex. After enough production incidents, we made the call to rebuild on LiveKit Agents.

This post is about both journeys and the concrete trade-offs.

## TL;DR

- Vapi + n8n is excellent for speed to first production call.
- LiveKit Agents gives deeper control over latency, IVR handling, and reliability.
- End-to-end response latency is the product in voice AI.
- Prompt engineering and post-call extraction are infrastructure, not polish.
- Owning the stack unlocks optimization, but infrastructure complexity becomes yours.

## Table of Contents

1. Why we started with Vapi + n8n
2. Lesson 1: latency is the product
3. Lesson 2: IVR navigation is first-class
4. Lesson 3: prompt engineering is infrastructure
5. Lesson 4: post-call pipeline is half the product
6. Lesson 5: infrastructure complexity compounds invisibly
7. What Vapi got right
8. What we are still working on
9. FAQ: Vapi vs LiveKit for production voice AI
10. Final thoughts

---

## Why We Started with Vapi + n8n

Vapi is genuinely impressive for getting a voice agent live quickly. STT, TTS, LLM routing, SIP handling: all managed for you. n8n gave us a visual orchestration layer to wire up webhooks, route call data into CRMs, and trigger Google Calendar bookings without writing a full backend.

For inbound calls in particular, the Vapi + n8n combo worked well for straightforward flows: caller asks a question, agent answers from a knowledge base, call ends, summary lands in the CRM. When the happy path is the only path, it is a solid stack.

The real lessons came when production traffic started exposing the edges.

---

## Lesson 1: Latency Is the Product

End-to-end response latency (from caller finishing a sentence to the agent's first word) is the single most important UX metric in voice AI.

- Above roughly 1.5 seconds, callers start feeling machine delay.
- Above 2 to 3 seconds, they start talking over the agent.
- Above 4 seconds, hangups increase sharply.

With Vapi, we had limited visibility into where latency was actually coming from. The pipeline is STT -> LLM -> TTS, and each stage compounds. We could tune prompts to reduce LLM output length (shorter answers = less TTS synthesis time), but we could not tune the underlying infrastructure deeply enough for our use case.

When we rebuilt on LiveKit Agents, we got full control over every stage of the pipeline.

![Notion-style illustration of the voice AI latency pipeline from speech capture to synthesis](/images/blog/vapi-to-livekit/02-latency-pipeline.png)

### STT (Deepgram)

Streaming transcription with phone-optimized models makes a meaningful difference. Deepgram's `nova-2-phonecall` is tuned for telephone audio characteristics (compressed, noisy SIP audio) and was noticeably faster and more accurate than general-purpose models on phone conversations.

### LLM (Azure OpenAI)

One key architecture decision was separating the *live-call model* from the *post-call extraction model*.

- Live-call model: optimized for speed.
- Extraction model: optimized for quality where latency does not matter.

These were previously coupled. Decoupling dropped average first-response time significantly.

### TTS (Rime)

TTS synthesis latency is easy to underestimate. We initially used a Rime model that could take near-audio-length time to synthesize. Switching to `mistv2` cut synthesis time dramatically. We also pinned a single speaker (`luna`) for consistency across calls.

### VAD (Silero)

Originally we loaded VAD fresh per call, adding about one second of startup overhead. Moving to a `prewarm_fnc` pattern (load once at worker startup, keep in process memory) eliminated that overhead.

### Turn Detection

Silence-only endpointing is too blunt. We layered in an ML turn detector (`MultilingualModel` from `livekit-plugins-turn-detector`) so end-of-turn can be inferred from linguistic signal, not just silence duration.

This reduced two failure modes:

- agent interrupting callers mid-sentence
- agent waiting too long after callers were done

We also tuned endpointing aggressively from default sluggishness to 350ms minimum and 500ms maximum in our production profile.

### Latency Outcome

The cumulative result: first-response latency dropped from 8 to 16 seconds (worst Vapi days) to consistently 2 to 4 seconds from call pickup to first agent word.

---

## Lesson 2: IVR Navigation Is a First-Class Problem

For outbound insurance verification, the agent often talks to IVR first, not a human. IVR might ask for member ID, DOB, provider NPI, then put the call on hold for several minutes.

Our first approach was a `do_nothing()` tool plus LLM reasoning to decide whether it was IVR or live rep. This was a mistake.

- The LLM sometimes called `do_nothing` at call start before hearing enough context.
- Some calls looped through unnecessary no-op tool calls.
- First response got delayed by an extra round trip.

LiveKit Agents ships native `ivr_detection` using deterministic signal analysis rather than LLM guessing. Enabling it and removing `do_nothing()` cleaned up call starts immediately.

![Notion-style illustration of IVR branching and deterministic routing to a live representative](/images/blog/vapi-to-livekit/03-ivr-navigation.png)

The rule we internalized:

**Do not use an LLM for decisions that do not require reasoning.**

Signal-based detection beats LLM-based detection for deterministic binary classifications.

---

## Lesson 3: Prompt Engineering Is Infrastructure

This sounds obvious until the agent asks 13 verification questions in one breath and the rep hangs up.

### One question at a time

Prompt must enforce this explicitly. LLMs naturally batch for efficiency. On phone calls, batched questioning is hard to follow.

### Explicit word budgets

We constrain replies to under 25 words in most verification phases. TTS synthesis time scales with response length; verbosity costs real seconds.

### Phase-based structure

We split prompts into:

- Phase 1: IVR navigation
- Phase 2: live rep verification

Clear transition rules prevent mode confusion after transfer events.

### Identity anchoring

Without explicit rules, agents sometimes reply "I am an AI assistant" when asked for name. We inject deterministic identity anchors in system prompts for every call.

### Prompt refresh on long calls

Long calls drift. We re-apply the system prompt every 4 user turns (configurable) to keep policy adherence stable during 10 to 15+ turn calls.

### Template variables over hardcoding

All member/provider fields are runtime templates (`{{ member_name }}`, `{{ provider_npi }}`) rather than hardcoded prompt content. This keeps prompts reusable, versionable, and testable.

---

## Lesson 4: The Post-Call Pipeline Is Half the Product

The call is 5 to 10 minutes. The value is in what happens after.

Our post-call pipeline runs three stages:

1. Transcript assembly: collect utterances in timestamp order.
2. Speaker identification: map speakers to `user`/`assistant` roles.
3. Structured extraction: generate JSON for each verification field.

![Notion-style illustration of transcript assembly, speaker mapping, and structured extraction pipeline](/images/blog/vapi-to-livekit/04-post-call-pipeline.png)

The extracted outputs (effective date, network status, deductible, coverage percentage, prior auth requirements, vendor mandates) are what teams actually need in patient records.

### What made this pipeline reliable

- Separate extraction model from live-call model.
- Remove unnecessary reasoning traces in extraction prompts.
- Treat empty transcript as first-class signal, not opaque error.
- Surface stage-level failures directly in call detail UI, not only logs.

This sharply reduced debugging time and lowered silent pipeline failures.

---

## Lesson 5: Infrastructure Complexity Compounds Invisibly

Owning a LiveKit stack brings observability and control, but operations complexity shows up quickly.

### Examples that bit us

- Celery + Redis TLS quirks (`rediss://` plus required SSL parameters)
- cold-start overhead from model downloads (fixed by baking artifacts into images)
- stale worker pipes after idle windows (`BrokenPipeError` class incidents)
- proxy header config issues causing CSRF failures behind managed ingress

These are solvable, but they are your responsibility on custom infrastructure.

---

## What Vapi Got Right (and We Appreciate More Now)

Rebuilding on LiveKit gave us control and also new respect for Vapi abstractions:

- SIP trunking and number provisioning
- reliable webhook handling
- SDK version management at platform layer
- faster team-level iteration for simple flows

n8n also enabled non-engineers to modify integrations and routing quickly without backend code changes.

The trade-off is real:

- Managed platform -> speed and simplicity, less deep control.
- Custom stack -> optimization and observability, more ownership burden.

For us, where latency and extraction quality were core differentiators, owning the stack was the right call.

---

## What We Are Still Working On

### Multi-turn memory in long calls

Insurance calls can run 15 to 30 minutes with holds, transfers, and context switches. We are exploring Redis-backed persistent call memory to preserve state across long interruptions.

### Graceful fallbacks under uncertainty

When audio quality is poor or responses are ambiguous, fallback behavior still needs to feel natural. We are improving multi-turn recovery to avoid awkward repetition loops.

### Confidence scoring for extraction

We are adding confidence signals so uncertain extractions can be routed for human review rather than written directly into records.

---

## FAQ: Vapi vs LiveKit in Production Voice AI

### Is Vapi or LiveKit better for voice AI agents?

It depends on your goal. Vapi is excellent for fast launch and lower ops load. LiveKit is stronger when you need low-level tuning, observability, and custom runtime control.

### What matters most for phone-call AI UX?

Latency and turn-taking quality. If your first response is slow or interruption timing is off, user trust drops quickly.

### Should post-call extraction use the same model as live conversation?

Usually no. Split models by job: speed-optimized for live turn handling, quality-optimized for extraction.

### Is IVR handling mainly an LLM problem?

Not primarily. Deterministic signal-based classification often works better than LLM reasoning for IVR vs human detection.

### Is moving from managed voice stacks to custom infra always worth it?

No. It is worth it when control over latency, reliability, and workflow logic materially affects business outcomes.

---

## Final Thoughts

If you are building production voice AI agents, treat latency, prompt design, and post-call extraction as core architecture, not implementation details.

If you are building voice AI agents and want help shipping faster with production-grade reliability, **[contact us](/contact)** and **book a call**. You can also explore our **[Voice AI work](/voice-ai)** and **[AI services](/services)**.

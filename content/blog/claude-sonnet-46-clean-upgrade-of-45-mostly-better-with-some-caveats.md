---
title: "Claude Sonnet 4.6: clean upgrade of 4.5, mostly better with some caveats"
date: "2026-02-17T05:44:39.000Z"
description: "**Anthropic** launched **Claude Sonnet 4.6**, an upgrade over Sonnet 4.5, featuring broad improvements in **coding, long-context reasoning, agent planning, know..."
original_link: "https://news.smol.ai/issues/2026-02-17-sonnet-46/"
---

**Anthropic notches another W.**

> AI News for 2/16/2026-2/17/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**261** channels, and **11323** messages) for you. Estimated reading time saved (at 200wpm): **1096** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

Despite a lot of rumors of a “Sonnet 5”, Anthropic opted to launch Sonnet 4.6 today, bumping their cheaper workhorse model up to match Opus 4.6, touting some preference wins from Sonnet to 4.5 Opus and a 1m token context, though generally lagging in usual benchmarks, and on GDPVal-AA (below) it uses 4.5x more tokens so the all-in cost can be higher than Opus in some tasks. The API platform tools and the Excel integrations also got minor upgrades.

Some of the key highlights are the long term improvements in Computer Use, first launched in Oct 2024, which was at launch completely slow and so inaccurate as to be impractical, but now is productized as Claude Cowork, which has anecdotally seen more successful adoption than OpenAI’s equivalent Operator and Agent iterations.

We have tuned the Twitter recap below to include more datapoints, but really that’s all that you truly need to know.

* * *

AI Twitter Recap
================

**Top Story: Sonnet 4.6 launch**
--------------------------------

### What happened (timeline + headline claims)

Anthropic launched **Claude Sonnet 4.6** as an upgrade to Sonnet 4.5, positioning it as their **most capable Sonnet model** with broad improvements across **coding, computer use, long-context reasoning, agent planning, knowledge work, and design**, plus a **1M-token context window (beta)** [[@claudeai](https://x.com/claudeai/status/2023817132581208353)]. Early chatter preceded the announcement (“Sonnet 4.6 incoming!”) [[@kimmonismus](https://x.com/kimmonismus/status/2023814107846398015)], then the launch triggered a wave of benchmark callouts, tooling/platform integrations (Cursor, Windsurf, Microsoft Foundry, Perplexity/Comet, etc.), and mixed early user feedback about quality and reliability.

Key distribution signals in this tweet set:

*   **Official announcement + feature list + 1M context (beta)** [[@claudeai](https://x.com/claudeai/status/2023817132581208353)]
*   **Anthropic employee framing: “approaching Opus-class… insane jump over 4.5”** [[@alexalbert\_\_](https://x.com/alexalbert__/status/2023817479580221795)]
*   **Benchmark snippets** (SWE-Bench Verified, ARC-AGI-2, preference vs Opus 4.5, GDPval, Vending-Bench, etc.) from community/benchmark accounts [[@scaling01](https://x.com/scaling01/status/2023818940112327101)], [[@scaling01](https://x.com/scaling01/status/2023819403230671232)], [[@scaling01](https://x.com/scaling01/status/2023819793212813604)]
*   **Independent eval org update: Sonnet 4.6 leads GDPval-AA ELO (agentic knowledge work), with much higher token use than 4.5** [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023821893846135212)]
*   **Pricing claim: “same pricing as Sonnet 4.5”** [[@kimmonismus](https://x.com/kimmonismus/status/2023820443359002922)]
*   **Post-launch “regression?” report: hallucinated function names / broken structured outputs; later “seems fixed”** [[@rishdotblog](https://x.com/rishdotblog/status/2023848487285387693)], [[@rishdotblog](https://x.com/rishdotblog/status/2023854279766003784)]

Facts vs opinions (clearly separated)
-------------------------------------

### Factual / checkable claims (from tweets)

*   Sonnet 4.6 is described by Anthropic as a **full upgrade** across multiple capability areas and includes a **1M token context window in beta** [[@claudeai](https://x.com/claudeai/status/2023817132581208353)].
*   Benchmark datapoints cited:
    *   **79.6% SWE-Bench Verified**, **58.3% ARC-AGI-2** (as posted) [[@scaling01](https://x.com/scaling01/status/2023818940112327101)].
    *   “Users preferred Sonnet 4.6 over Opus 4.5 **59%** of the time” [[@scaling01](https://x.com/scaling01/status/2023819403230671232)].
    *   “Sonnet 4.6 the best model on **GDPval**” (claim) [[@scaling01](https://x.com/scaling01/status/2023819793212813604)].
*   Artificial Analysis (independent benchmarking org) claims:
    *   Sonnet 4.6 reached **GDPval-AA ELO 1633** (in “adaptive thinking mode” and “max effort”), and is **#1** on their GDPval-AA leaderboard but **within the 95% CI of Opus 4.6** [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023821893846135212)].
    *   Token usage to run GDPval-AA: Sonnet 4.6 used **280M total tokens** (vs Sonnet 4.5 **58M**); Opus 4.6 used **160M** in equivalent settings [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023821893846135212)].
    *   Sonnet 4.6 improved _aesthetic_ quality of generated docs/presentations relative to 4.5 on GDPval-AA outputs [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023821899139293652)].
*   Tooling update: Anthropic web search/fetch tools now **execute code to filter results**; reported effect: **+13% accuracy on BrowseComp** with **32% fewer input tokens** when enabled (as posted) [[@alexalbert\_\_](https://x.com/alexalbert__/status/2023834863858769975)].
*   Availability / integrations mentioned:
    *   **Cursor**: “Sonnet 4.6 is now available in Cursor… notable improvement over 4.5 on longer tasks, but below Opus 4.6 for intelligence” [[@cursor\_ai](https://x.com/cursor_ai/status/2023841746577485894)].
    *   **Windsurf** availability [[@cognition](https://x.com/cognition/status/2023821257939317009)].
    *   **Microsoft Foundry** availability [[@Azure](https://x.com/Azure/status/2023833069703041144)].
    *   **Perplexity Pro/Max** availability [[@perplexity\_ai](https://x.com/perplexity_ai/status/2023839622242206179)] and **Comet browser agent using Sonnet 4.6** for Pro users [[@comet](https://x.com/comet/status/2023889197556441464)].

### Opinions / interpretations (what’s _not_ settled)

*   “Approaching Opus-class capabilities… insane jump” [[@alexalbert\_\_](https://x.com/alexalbert__/status/2023817479580221795)] is qualitative framing (though consistent with some benchmark movement).
*   “Near human-level computer use” extrapolation [[@alexalbert\_\_](https://x.com/alexalbert__/status/2023820589983801796)] depends strongly on which “computer use” evals + harnesses + task distributions are used.
*   “Warmer and kinder… smarter and more overcaffeinated” is pure UX vibe [[@sleepinyourhat](https://x.com/sleepinyourhat/status/2023821754859503650)].
*   “Taste is off the charts” / SVG skyline anecdote is subjective (but points to improved design/visual generation) [[@scaling01](https://x.com/scaling01/status/2023840565641556439)].
*   Post-launch reliability concerns (“hallucinations everywhere… 4.6 crapping the bed”) are anecdotal reports from a specific workflow, though notable because they compare to 4.5 on the “same tasks” [[@rishdotblog](https://x.com/rishdotblog/status/2023848930430304648)].

Technical details extracted (numbers, benchmarks, systems implications)
-----------------------------------------------------------------------

### Core model/product knobs surfaced in tweets

*   **Context window:** **1M tokens (beta)** [[@claudeai](https://x.com/claudeai/status/2023817132581208353)].
*   **Pricing:** “same pricing as Sonnet 4.5” [[@kimmonismus](https://x.com/kimmonismus/status/2023820443359002922)] (no $/tok quoted directly in these tweets, but note RundownAI cites “Sonnet pricing [$3/$15 per mil tokens]” as context [[@TheRundownAI](https://x.com/TheRundownAI/status/2023821446380978238)]).
*   **Search/fetch tool change:** pre-context filtering via executable code; **+13% BrowseComp accuracy, -32% input tokens** [[@alexalbert\_\_](https://x.com/alexalbert__/status/2023834863858769975)].
    *   Systems read: this is an explicit shift toward **tool-side “compute before context”**—spending tool compute to reduce prompt budget and improve signal-to-noise in retrieved context.

### Benchmarks and what they _suggest_ (with caveats)

*   **SWE-Bench Verified 79.6%** (posted) [[@scaling01](https://x.com/scaling01/status/2023818940112327101)].
    *   Interpretation: SWE-Bench Verified is sensitive to harness, timeouts, repo setup, and tool reliability. Still, 79.6% is “frontier-tier” in the common discourse.
*   **ARC-AGI-2 58.3%** (posted) [[@scaling01](https://x.com/scaling01/status/2023818940112327101)].
    *   Also see longitudinal claim: “141 days… 13.6% to 60.4% on ARC-AGI-2” (Sonnet line progress, presumably 4.5→4.6 or earlier→now) [[@scaling01](https://x.com/scaling01/status/2023850250662969587)].
*   **Preference eval:** “preferred over Opus 4.5 59%” [[@scaling01](https://x.com/scaling01/status/2023819403230671232)].
*   **GDPval-AA (Artificial Analysis):** ELO **1633**, #1 but statistically overlapping Opus 4.6; **token usage 280M** for Sonnet 4.6 vs 58M for Sonnet 4.5; **cost to run** GDPval-AA “just ahead of Opus 4.6” (because of token usage) [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023821893846135212)].
    *   Important implication for engineers: **“Best” may be bought with more thinking tokens**, which impacts latency and spend; a router may pick 4.6 selectively.
*   **Vending-Bench Arena strategy** claim: with 1M context, Sonnet 4.6 uses a “capacity-first then profitability pivot” plan [[@felixrieseberg](https://x.com/felixrieseberg/status/2023823186484404443)].
    *   This is a rare example of a **behavioral shift** attributed to long-context planning capacity, but it’s still a single benchmark anecdote.

### Cost/latency + throughput signals

*   Engineers are explicitly noticing that frontier labs “blast millions of tokens… scaffold like a skyscraper” [[@scaling01](https://x.com/scaling01/status/2023837889478758495)], aligning with Artificial Analysis’ disclosure that Sonnet 4.6 needed **~4.8×** the tokens of Sonnet 4.5 on GDPval-AA [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023821893846135212)].
*   Cursor’s note: Sonnet 4.6 better on “longer tasks” but “below Opus 4.6 for intelligence” [[@cursor\_ai](https://x.com/cursor_ai/status/2023841746577485894)] suggests practical routing: Sonnet 4.6 as **default long-horizon workhorse**; Opus as **max-capability**.

Different perspectives in the dataset
-------------------------------------

### Strongly positive / “this is a big jump”

*   Anthropic-side: “most capable Sonnet… full upgrade… 1M context” [[@claudeai](https://x.com/claudeai/status/2023817132581208353)] and “approaching Opus-class… jump… insane” [[@alexalbert\_\_](https://x.com/alexalbert__/status/2023817479580221795)].
*   Benchmark boosters: SWE-Bench/ARC-AGI-2 callouts [[@scaling01](https://x.com/scaling01/status/2023818940112327101)], GDPval best-model claim [[@scaling01](https://x.com/scaling01/status/2023819793212813604)], “crushes Gemini 3 and GPT-5.2 on Vending-Bench 2” [[@scaling01](https://x.com/scaling01/status/2023833660546499053)].
*   Practitioners: “beast for real-world work… computer usage” [[@kimmonismus](https://x.com/kimmonismus/status/2023844025011499052)], “computer use standout… more consistent over long sessions” [[@mikeyk](https://x.com/mikeyk/status/2023853207731200176)].

### Neutral / adoption & positioning notes

*   “no Sonnet 5” reaction [[@dejavucoder](https://x.com/dejavucoder/status/2023817232732848501)] reflects expectations management rather than capability.
*   Cursor’s measured product note (better than 4.5, below Opus 4.6) [[@cursor\_ai](https://x.com/cursor_ai/status/2023841746577485894)].
*   Artificial Analysis: #1 GDPval-AA but within CI of Opus 4.6 + disclosure that it uses **more tokens** [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023821893846135212)].

### Negative / skeptical / “something broke”

*   Reliability regression report: hallucinated function names in agent workflows; structured output errors; “4.5 still works great” [[@rishdotblog](https://x.com/rishdotblog/status/2023848930430304648)]. Follow-up: “Whatever this was seems fixed!” [[@rishdotblog](https://x.com/rishdotblog/status/2023854279766003784)].
*   Cost sensitivity: “Sonnet and Slopus… munching through my credits” [[@scaling01](https://x.com/scaling01/status/2023835207355560223)], plus later “price hurts” / cost follow-ups (not fully detailed in provided snippet) [[@scaling01](https://x.com/scaling01/status/2023856013829698037)].
*   A comparative take in infra/product terms: “50% more expensive than xhigh and 228% over 5.2 codex… vast improvement over 4.5” [[@teortaxesTex](https://x.com/teortaxesTex/status/2023890938125488289)]—this frames Sonnet 4.6 as improved but potentially cost-inefficient vs alternatives depending on workload.

Context: why Sonnet 4.6 matters (engineering implications)
----------------------------------------------------------

1.  **Long-context is becoming “operational,” not just a spec.**  
    The launch pushes a **1M token window** into the Sonnet tier [[@claudeai](https://x.com/claudeai/status/2023817132581208353)]. But Artificial Analysis’ disclosure that Sonnet 4.6 used **280M tokens** to run GDPval-AA in “adaptive thinking/max effort” configs [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023821893846135212)] is a reminder: long-context + long-think can silently move your budget envelope. Expect more **routing, summarization, context management, and “retrieve then filter”** patterns (consistent with the new search/fetch filtering improvement [[@alexalbert\_\_](https://x.com/alexalbert__/status/2023834863858769975)]).
    
2.  **Agent performance claims are increasingly harness-dependent.**  
    GDPval-AA uses an agentic harness (shell + browsing loop), and Sonnet 4.6’s lead is reported under a specific setup (“adaptive thinking mode”, “max effort”) [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023821893846135212)]. Cursor’s note that it’s better on longer tasks but below Opus for raw intelligence [[@cursor\_ai](https://x.com/cursor_ai/status/2023841746577485894)] reinforces that “best model” is not a scalar; it’s workload × harness × budget.
    
3.  **Computer use is becoming a marquee capability, and Sonnet is being pushed there.**  
    Multiple tweets highlight “computer use” progress and near-human-level framing [[@alexalbert\_\_](https://x.com/alexalbert__/status/2023820589983801796)], and deployments like Perplexity’s Comet browser agent explicitly default to Sonnet 4.6 for Pro users [[@comet](https://x.com/comet/status/2023889197556441464)].
    
4.  **Release risk: small serving/config changes can look like “model regressions.”**  
    The reported post-launch hallucination spike across Opus 4.6 and Sonnet 4.6 [[@rishdotblog](https://x.com/rishdotblog/status/2023848487285387693)]—and then “seems fixed” [[@rishdotblog](https://x.com/rishdotblog/status/2023854279766003784)]—reads like a potential **routing, toolchain, system prompt, or safety-layer change** rather than weights. For teams: pin versions where possible, run **canary evals**, and monitor **structured output validity** + tool-call correctness separately from “chat quality.”
    

* * *

Other Topics (standard coverage)
--------------------------------

**Open models & independent benchmarking (Qwen/GLM/Seed/Aya, etc.)**

*   Artificial Analysis deep breakdown of **Qwen3.5-397B-A17B (397B total / 17B active MoE, Apache 2.0, 262K ctx, native multimodal)**; big gains on agentic evals, but **hallucination rate still high** by their metric [[@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2023794497055060262)].
*   GLM-5 cited as strong open model on WeirdML and other benches (48.2% WeirdML; comparisons to Opus/gpt-\* claims) [[@htihle](https://x.com/htihle/status/2023734346943775179)], plus GLM-5 technical report highlights: **DSA adoption**, **async RL infra**, **agent RL algorithms** [[@Zai\_org](https://x.com/Zai_org/status/2023951884826849777)].
*   ByteDance “Seed-2.0” announced (agent/reasoning/vision; “no distillation”; CN-only initially) [[@TsingYoga](https://x.com/TsingYoga/status/2023764275874197964)].
*   Cohere Labs launched **Tiny Aya**: **3.35B** open multilingual model family (70+ languages; “runs on a phone”), with claims of training on **64 GPUs** and a detailed report [[@nickfrosst](https://x.com/nickfrosst/status/2023756803717427467)], [[@\_akhaliq](https://x.com/_akhaliq/status/2023771434347044890)], [[@mziizm](https://x.com/mziizm/status/2023775027754365044)].

**Agents, harnesses, memory, and long-horizon infrastructure**

*   “Agent World Model (AWM)” proposes fully synthetic executable environments (1,000 envs, **35,062 tools**, **10,000 tasks**, SQL-backed state, verification code) for RL tool-use agents [[@dair\_ai](https://x.com/dair_ai/status/2023748787949498804)].
*   Lossless Context Management (LCM) / Volt claims: deterministic hierarchical DAG compression with lossless pointers; on OOLONG, “beats Claude Code at every context length 32K→1M” (reported) [[@dair\_ai](https://x.com/dair_ai/status/2023765147970662761)], amplified [[@omarsar0](https://x.com/omarsar0/status/2023765757117763820)].
*   Moltbook multi-agent “society” study: **2.6M LLM agents**, 300k posts, 1.8M comments; macro “culture” stabilizes, micro influence ~noise; critique of “just add agents” assumptions [[@omarsar0](https://x.com/omarsar0/status/2023766916473733394)].
*   LangChain “Harness Engineering” theme: traces → eval mining → self-verification loops; TerminalBench positioning [[@Vtrivedy10](https://x.com/Vtrivedy10/status/2023812467034329224)], plus LangSmith Insights scheduling [[@LangChain](https://x.com/LangChain/status/2023804855136165932)].
*   Open-sourcing an agent runtime (“Hankweave”) focused on removing context, maintainability, and reusable blocks across models [[@hrishioa](https://x.com/hrishioa/status/2023807677089099914)].

**Systems & inference optimization (kernels, scheduling, throughput)**

*   Carmack proposes OS-like **GPU job preemption** via UVM paging + MPS shim, aiming for seconds-scale task switching (acknowledges thrash risk) [[@ID\_AA\_Carmack](https://x.com/ID_AA_Carmack/status/2023805426345689198)].
*   Moondream MoE kernel: **2.6% faster** by tuning launch config to real routing distributions; kernel ~37% runtime [[@vikhyatk](https://x.com/vikhyatk/status/2023749843186078144)].
*   Together-style “ThunderAgent” / “program abstraction” for end-to-end agent workflow scheduling; claims up to **3.9× faster rollout/serving** without quality tradeoff (as posted) [[@ben\_athi](https://x.com/ben_athi/status/2023852606842700198)], plus explanation thread [[@simran\_s\_arora](https://x.com/simran_s_arora/status/2023846852987421096)].

**Frontier product moves: Codex, Grok, “computer use” competition**

*   Codex usage report: users trying (and failing) to hit limits; heavy parallel agent usage within subscription windows [[@theo](https://x.com/theo/status/2023718038198251904)].
*   OpenAI infra hiring pitch (agent orchestration, sandboxes, observability) [[@gdb](https://x.com/gdb/status/2023804170323849279)].
*   Grok 4.20 / 4.x discussion includes launch notices and architecture claims, plus highly polarized political framing by Elon [[@kimmonismus](https://x.com/kimmonismus/status/2023722999828861070)], [[@elonmusk](https://x.com/elonmusk/status/2023880206721970544)], with critics calling performance weak vs “Flash” models [[@teortaxesTex](https://x.com/teortaxesTex/status/2023793972750299246)].

**Robotics, video/image generation, and multimodal research**

*   Unitree humanoid performance discourse (claims of distributed coordination, terrain adaptation, safety spacing, multi-DOF manipulation) [[@ZhihuFrontier](https://x.com/ZhihuFrontier/status/2023794225616502932)].
*   “Perceptive Humanoid Parkour” (depth-perception long-horizon traversal) [[@zhenkirito123](https://x.com/zhenkirito123/status/2023789637114945684)].
*   ByteDance **BitDance**: 14B AR image generator predicting **binary visual tokens**; claims **FID 1.24 on ImageNet 256** [[@iScienceLuvr](https://x.com/iScienceLuvr/status/2023707945104458097)], plus author promo [[@multimodalart](https://x.com/multimodalart/status/2023797260057014372)].
*   “Sphere Encoder” few-step image generation in spherical latent space; Meta/Goldstein thread with details including **65K latent dims** for ImageNet and <5-step refinement [[@tomgoldsteincs](https://x.com/tomgoldsteincs/status/2023796756366963032)].

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen3.5 Model Release and Performance

*   **[Qwen3.5-397B-A17B is out!!](https://www.reddit.com/r/LocalLLaMA/comments/1r656d7/qwen35397ba17b_is_out/)** (Activity: 1088): ****Qwen3.5-397B-A17B** has been released on [Hugging Face](https://huggingface.co/Qwen/Qwen3.5-397B-A17B), featuring a `397 billion` parameter model with a native context length of `262,144` tokens, which can be extended up to `1,010,000` tokens. This model is part of the Qwen series, known for its large-scale language capabilities. Additionally, a `GGUF` version is available [here](https://huggingface.co/unsloth/Qwen3.5-397B-A17B-GGUF), which may offer optimized performance for specific use cases.** There is anticipation and curiosity in the community about the model's performance, with users eager to test its capabilities.
    
    *   The Qwen3.5-397B-A17B model boasts a significant improvement in decoding throughput, being 3.5x to 7.2x faster than its predecessor, Qwen3-235B-A22B. This suggests substantial enhancements in efficiency, which could be crucial for applications requiring rapid processing of large datasets.
    *   The model supports a native context length of 262,144 tokens, which can be extended up to 1,010,000 tokens. This extensibility is particularly beneficial for tasks that require handling extensive sequences of data, offering flexibility and scalability in various computational scenarios.
    *   A user has shared a link to the GGUF version of the model on Hugging Face, indicating the availability of different formats for deployment. This could be useful for developers looking to integrate the model into diverse environments or optimize it for specific hardware configurations.
*   **[Qwen3.5-397B-A17B Unsloth GGUFs](https://www.reddit.com/r/LocalLLaMA/comments/1r6599e/qwen35397ba17b_unsloth_ggufs/)** (Activity: 716): **The image highlights the release of **Qwen3.5**, a 397 billion parameter multimodal reasoning model by **Alibaba**. It is designed to perform on par with models like **Gemini 3 Pro**, **Claude Opus 4.5**, and **GPT-5.2** across various benchmarks such as **IFBench**, **GPOA Diamond**, and **BFLC V4**. The model supports advanced features like `256K context` and is suitable for applications in coding, vision, and chat. The release includes support for running the model in `3-bit` on a `192GB RAM Mac` or `4-bit (MXFP4)` on an `M3 Ultra with 256GB RAM`. The image and accompanying links provide resources for accessing and running the model, including dynamic GGUFs from **Unsloth**.** The comments express excitement about the model's size and capabilities, with one user noting the impressive `397B` parameters and another appreciating the zero-day release.
    
    *   The discussion highlights the verbosity of the Qwen3.5-397B-A17B model, which appears to overanalyze simple inputs like 'hi' by generating an extensive internal thought process before producing a response. This verbosity could be indicative of the model's complexity and its attempt to simulate a human-like thought process, but it may also suggest inefficiencies in handling straightforward tasks.
    *   A technical inquiry is raised about the performance comparison between two quantization formats, UD-Q4\_K\_XL and MXFP4. The commenter notes the lack of benchmarks directly comparing these formats, which are crucial for understanding their relative efficiency and effectiveness in model deployment scenarios. This highlights a gap in available performance data that could inform decisions on model optimization and deployment.
    *   The comment by Ok\_Brain\_2376 points out that only 17 billion parameters are active in the Qwen3.5-397B-A17B model, suggesting a potential use of parameter-efficient techniques like AutoRound. This could imply that the model is designed to activate only a subset of its parameters for certain tasks, optimizing computational resources while maintaining performance.
*   **[Qwen3.5 is released!](https://www.reddit.com/r/LocalLLM/comments/1r659df/qwen35_is_released/)** (Activity: 113): ****Alibaba** has released **Qwen3.5**, a `397B` MoE (Mixture of Experts) vision reasoning LLM, which is highlighted in the image. The model is compared against others like **Gemini 3 Pro** and **GPT-5.2** across benchmarks such as instruction following, multilingual knowledge, and video reasoning. The image emphasizes Qwen3.5's capabilities in coding, vision, and agent interaction, and provides technical details for running the model, though specific hardware requirements like VRAM are not detailed in the image.** Commenters are curious about the hardware requirements, specifically VRAM, needed to run Qwen3.5, and are discussing equivalent setups to Apple's 512 M3 Ultra configuration.
    
    *   A user inquired about the VRAM requirements for running Qwen3.5, which is crucial for determining the feasibility of running the model on different hardware setups. This is a common concern for users with limited resources, as large models typically require significant VRAM to operate efficiently.
    *   Another user asked about a non-Mac setup equivalent to the 512 M3 Ultra configuration. This suggests a need for understanding the hardware specifications and performance benchmarks of the M3 Ultra to find comparable alternatives in the PC ecosystem, particularly for those interested in high-performance computing tasks.
    *   A user expressed interest in running Qwen3.5 on a setup with 2 x RTX 3090 Ti GPUs, indicating the high computational demand of the model. The RTX 3090 Ti is known for its substantial VRAM and processing power, yet the user anticipates needing to wait for a more optimized version to run on their hardware, highlighting the model's intensive resource requirements.

### 2\. AI Model Benchmarking and Performance

*   **[I gave 12 LLMs $2,000 and a food truck. Only 4 survived.](https://www.reddit.com/r/LocalLLaMA/comments/1r77swh/i_gave_12_llms_2000_and_a_food_truck_only_4/)** (Activity: 829): **The image is a line graph illustrating the performance of 12 language models (LLMs) in a simulated business environment where each model was given $2,000 and a food truck to manage over 30 days. The graph shows that only four models survived the simulation, with **Claude Opus 4.6** achieving the highest net worth of `$49K`, followed by **GPT-5.2** with `$28K`. The simulation revealed that models taking loans were more likely to go bankrupt, as all eight models that took loans failed. The experiment highlights the decision-making capabilities of different LLMs in a controlled business scenario, with a notable finding that **Gemini 3 Flash Thinking** consistently got stuck in an infinite decision loop.** One commenter suggested using a logarithmic scale for the y-axis to better represent the data, especially since going to $0 ends the benchmark. Another noted that **Opus** performed exceptionally well, suggesting it might have been optimized for such tasks.
    
    *   HeadlessNicholas suggests using a logarithmic scale for the y-axis in the benchmark results to better visualize the data, especially since reaching $0 ends the benchmark. This implies that the current linear scale might not effectively represent the performance differences among the models, particularly when some models fail early.
    *   DinoAmino references the 'Vending-Bench' and notes that Opus performs exceptionally well in both scenarios, suggesting a consistent superiority in decision-making tasks. The mention of the [arXiv paper](https://arxiv.org/abs/2502.15840) implies that there is documented evidence of Opus's capabilities, which could be useful for further technical analysis.
    *   DarthLoki79 questions the novelty of the benchmark by comparing it to the 'vending bench', implying that the methodology or outcomes might not be significantly different. This raises a point about the need for clarity in how this benchmark distinguishes itself from previous ones, potentially in terms of parameters or evaluation criteria.
*   **[Qwen 3.5 goes bankrupt on Vending-Bench 2](https://www.reddit.com/r/LocalLLaMA/comments/1r6ghty/qwen_35_goes_bankrupt_on_vendingbench_2/)** (Activity: 836): **The image presents a graph from a simulation called "Vending-Bench 2," which evaluates the financial performance of various AI models over a period of 350 days. The graph shows that the model "Qwen 3.5 Plus" performed poorly, maintaining a balance near zero, indicating it went bankrupt. In contrast, "Claude Opus 4.6" demonstrated a strong upward trend, achieving the highest financial balance among the models tested. Other models like "GLM-5" and "Gemini 3 Flash" also showed positive growth, but not as significantly as Claude Opus 4.6. This suggests that Claude Opus 4.6 may have superior capabilities or strategies in this simulation context.** One comment criticizes the use of similar colors in the chart, which may make it difficult to distinguish between the models. Another comment humorously suggests that Qwen 3.5 could operate as a non-profit organization due to its poor financial performance.
    
    *   Chromix\_ provides a detailed analysis of the Vending-Bench 2 results, noting that the chart displays the average balance in dollars across five runs. They mention that Qwen3.5 Plus is not included in the chart because it hasn't been added to the official results page yet. The benchmark link is provided for further details: [Vending-Bench 2](https://andonlabs.com/evals/vending-bench-2).
    *   SkylarNox raises a question about the versions of Qwen 3.5, specifically asking for clarification on the size difference between Qwen 3.5 Plus and the 397B version. This indicates a need for more transparency or documentation regarding the specifications and capabilities of different model versions.
*   **[Difference Between QWEN 3 Max-Thinking and QWEN 3.5 on a Spatial Reasoning Benchmark (MineBench)](https://www.reddit.com/r/LocalLLaMA/comments/1r6h3ha/difference_between_qwen_3_maxthinking_and_qwen_35/)** (Activity: 399): **The post discusses the significant improvement of **QWEN 3.5** over **QWEN 3 Max-Thinking** on the spatial reasoning benchmark, [MineBench](https://minebench.ai/). QWEN 3.5's performance is noted to be competitive with leading models like Opus 4.6, GPT-5.2, and Gemini 3 Pro. The benchmark results, available on [GitHub](https://github.com/Ammaar-Alam/minebench), show QWEN 3.5 ranked 6th, while QWEN 3 Max is 19th, indicating a substantial performance gap. The model's architecture is described as a hybrid linear-linear-linear-full attention model, with some issues in token prediction and language drift noted.** Commenters highlight the robustness of QWEN 3.5, despite some issues with token prediction and language drift. There is confusion about the differences between the Plus and open-source versions of QWEN, with speculation that Plus includes extended context and tool calling features.
    
    *   NandaVegg highlights that Qwen 3.5, including its Vision-Language (VL) capabilities, is notable for its hybrid linear-linear-linear-full attention model architecture. Despite some issues, such as occasional instruction ignoring and language drift, it is competitive with leading models in robustness. However, it may not be ideal for agentic tasks due to the lack of post-training mini-CoT adjustments common in agentic-maximized models.
    *   Chromix\_ provides a performance comparison from the MineBench leaderboard, noting that Qwen 3.5 ranks 6th, positioned between Gemini 3 Pro and GLM 5, while Qwen 3 Max is 19th, between Kimi K2 and GPT-4o. This indicates a significant performance gap between Qwen 3.5 and Qwen 3 Max, although Qwen 3.5's results are still subject to change due to limited votes.
    *   NandaVegg also mentions confusion regarding the "Plus" and open-source versions of Qwen models, noting that testing on Alibaba Cloud did not clarify the differences. The "Plus" version is assumed to be open-source with extended context to 1 million tokens and default tool calling enabled, including a search function on Alibaba Cloud.

### 3\. Local AI Development and Optimization

*   **[[macOS] Built a 100% local, open-sourced, dictation app. Seeking beta testers for feedback!](https://www.reddit.com/r/LocalLLM/comments/1r7bohc/macos_built_a_100_local_opensourced_dictation_app/)** (Activity: 101): ****SpeakType** is a new open-source dictation app for macOS that operates entirely offline, ensuring user privacy by processing all data locally. It aims to provide high-quality speech-to-text conversion without the recurring costs associated with cloud-based services. The app is currently in beta, seeking feedback on performance across different Mac hardware and accents, and is available for free during this phase. The project is hosted on [GitHub](https://github.com/karansinghgit/speaktype) and more details can be found on [tryspeaktype.com](https://tryspeaktype.com/).** Commenters are curious about the app's RAM requirements and how it compares to similar tools like Handy, questioning whether SpeakType includes additional logic or features. There is also interest in whether the app uses a Voice Activity Detector (VAD) to process audio before passing it to the Whisper model.
    
    *   JohnHawley inquires about the differences between SpeakType and another dictation app, Handy, questioning if SpeakType includes additional logic not present in Handy. This suggests a comparison of feature sets and possibly performance or accuracy differences between the two applications.
    *   rusty\_daggar asks whether the app uses a Voice Activity Detector (VAD) to clean up audio before processing or if it sends all audio directly to the Whisper model. This question highlights interest in the app's audio preprocessing techniques, which can significantly impact performance and accuracy.
*   **[The Mac Studio vs NVIDIA Dilemma – Best of Both Worlds?](https://www.reddit.com/r/LocalLLM/comments/1r6hmxl/the_mac_studio_vs_nvidia_dilemma_best_of_both/)** (Activity: 93): **The user is considering two options for running local LLMs and training models: a **Mac Studio** with up to `192GB` of unified memory, which allows running large models without VRAM constraints but lacks CUDA optimization and raw compute power; and an **NVIDIA GPU setup**, which offers superior performance and CUDA optimization but is limited by `32GB` VRAM even on high-end GPUs like the 5090. The user seeks a solution that combines the memory capacity of Mac with NVIDIA's computational power, which currently doesn't exist in a single system.** One commenter suggests that the use of models is more critical than training, emphasizing that inferencing is the primary use case, and recommends checking out [vmlx.net](https://vmlx.net/) for Mac users. Another suggests renting high-performance GPUs like B200 or H100x8 on platforms like RunPod for training, while using Mac's memory for inference of models like Qwen and MiniMax. A third commenter notes that commercial APIs like Claude Max and ChatGPT Pro can be cost-effective alternatives to local hardware for building codes.
    
*   **[I'm an Android dev who knows nothing about x86. During my vacation I built a system that genetically evolves machine code — now I can run 80B models on a single RTX 4090.](https://www.reddit.com/r/LocalLLM/comments/1r60lns/im_an_android_dev_who_knows_nothing_about_x86/)** (Activity: 70): **An Android developer utilized AI to create a system called Genesis that evolves x86 machine code, enabling the execution of 80B models on a single RTX 4090. The system uses an evolutionary approach to optimize AVX-512 kernels, achieving a `165x` speedup over traditional CPU methods like bitsandbytes, and allowing for efficient hybrid inference by minimizing data transfer between CPU and GPU. The project is open source, with the kernel code available on [GitHub](https://github.com/Anuar81/genesis-kernel), but the evolutionary engine remains private. The approach demonstrates that AI-driven code evolution can surpass human-optimized code, achieving up to `19.25%` improvement over hand-tuned baselines.** Some commenters expressed skepticism, likening the post to 'delusional mad scientist fanfic,' while others appreciated the technical depth, noting the inclusion of a detailed test suite in the shared code.
    

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Claude Sonnet 4.6 Release and Benchmarks

*   **[Sonnet 4.6 released !!](https://www.reddit.com/r/singularity/comments/1r7d9pe/sonnet_46_released/)** (Activity: 1384): **The image announces the release of **Claude Sonnet 4.6**, highlighting it as the most advanced version yet with significant improvements in areas such as coding, computer use, long-context reasoning, agent planning, knowledge work, and design. Notably, it features a `1 million token context window` in beta, which is a substantial enhancement for handling extensive data inputs. This release positions Sonnet 4.6 as a competitive model in the AI landscape, potentially surpassing other models like Grok in certain capabilities.** One comment humorously suggests that Grok has been outperformed by Sonnet 4.6, indicating a competitive edge in the AI model space. Another comment provides a practical example of Sonnet 4.6's reasoning capabilities, demonstrating its ability to offer logical advice on everyday decisions, such as whether to walk or drive a short distance.
    
    *   The release of Sonnet 4.6 has sparked discussions about its practical advice capabilities, as demonstrated by its response to a simple query about whether to walk or drive 40 meters. The model suggests walking due to factors like time efficiency, fuel savings, and health benefits, highlighting its ability to provide contextually relevant and practical advice.
    *   There is a comparison between Sonnet 4.6 and other models like Grok, with some users humorously suggesting that Sonnet 4.6 has outperformed or 'claudemogged' Grok. This reflects ongoing debates in the AI community about the relative performance and capabilities of different language models.
    *   The timing of Sonnet 4.6's release is noted as strategic, potentially diverting attention from controversies surrounding other AI models, such as those associated with Elon Musk. This suggests a competitive landscape where release timing can influence public and professional perception.
*   **[This is Claude Sonnet 4.6: our most capable Sonnet model yet.](https://www.reddit.com/r/ClaudeAI/comments/1r7d6am/this_is_claude_sonnet_46_our_most_capable_sonnet/)** (Activity: 1245): ****Claude Sonnet 4.6** is a significant upgrade in the Sonnet series, enhancing capabilities in coding, computer use, long-context reasoning, agent planning, knowledge work, and design. It introduces a `1M token context window` in beta, which is a notable feature for handling extensive data inputs. The model shows improved performance across various benchmarks, nearing **Opus-level intelligence** but at a more accessible price point, making it suitable for a broader range of applications. It demonstrates human-level proficiency in complex computer tasks, such as navigating spreadsheets and completing multi-step web forms. The model is now available across all plans, including Cowork, Claude Code, and major cloud platforms, with the free tier also upgraded to Sonnet 4.6. More details can be found on [Anthropic's website](http://anthropic.com/news/claude-sonnet-4-6).** One commenter noted the model's rollout was initially confusing due to legacy model displays. Another expressed curiosity about the impact on creative writing, while a third inquired about the availability of the `1M context` feature in both the API and the website.
    
    *   FriendlyTask4587 inquires about the context length of the Sonnet 4.6 model, asking if the `1 million token context` is available both in the API and on the website, similar to the Opus model. This suggests a focus on the model's ability to handle large inputs, which is crucial for tasks requiring extensive context retention.
    *   nanolucas questions the differentiation between Sonnet and Opus models, specifically if cost is the only factor for choosing Sonnet over Opus. This implies a need for understanding the performance or feature differences between the two models, such as efficiency, speed, or specific use-case advantages that Sonnet might have over Opus.
    *   Stupefied\_Gaming notes an observation during the rollout of Sonnet 4.6, where the model was initially labeled as a legacy model. This could indicate a transitional phase in deployment or a temporary mislabeling, which might affect user perception or usage during the initial release period.
*   **[Claude Sonnet 4.6 just dropped, and the benchmarks are impressive](https://www.reddit.com/r/ClaudeCode/comments/1r7dycb/claude_sonnet_46_just_dropped_and_the_benchmarks/)** (Activity: 785): ****Claude Sonnet 4.6** has been released, showcasing significant advancements in AI capabilities, including _approaching Opus-level intelligence_ at a reduced cost. Key features include _human-level computer use_ for tasks like navigating spreadsheets and multi-step forms, and an enhanced long-context reasoning ability with a `1M token context window`. The model has shown strong performance in complex automation workflows, multi-step reasoning tasks, and knowledge-intensive applications, and is now available across all platforms, including API, Claude Code, and Cowork, as the default free tier model.** A notable debate centers on the cost-performance ratio, with some users pointing out that the performance difference between Opus 4.6 and GPT-5.2 is minimal, yet the latter is significantly cheaper. There is also discussion about the practical availability of the `1M context length` feature, with some users expressing difficulty in accessing it.
    
    *   cowwoc highlights a critical issue in the AI model market: the performance gap between Opus 4.6 and GPT-5.2 is minimal, yet GPT-5.2 is significantly cheaper, costing `10x` less. This cost-performance imbalance could drive users away from Anthropic's offerings unless they adjust their pricing or enhance their models' capabilities.
    *   SatoshiNotMe points out a recurring issue with the promised '1M context length' feature in beta, which seems elusive to users like Max20. This suggests potential communication or implementation gaps in delivering this feature to end-users, which could affect user satisfaction and trust.
    *   joyfulsparrow compares Claude and Codex, noting that Codex offers seemingly unlimited token usage, whereas Claude's token limit is quickly reached, even on a $20 plan. This limitation, coupled with Codex's potential superiority in handling 'agentic loop' tasks, suggests that Codex might be a more efficient choice for users with heavy usage demands.
*   **[Claude Sonnet 4.6 is live in Cline v3.64.0 and it's free until Feb 18.](https://www.reddit.com/r/CLine/comments/1r7l3tp/claude_sonnet_46_is_live_in_cline_v3640_and_its/)** (Activity: 21): ****Anthropic** has released **Sonnet 4.6** in **Cline v3.64.0**, available for free until February 18. This update features improved speed, enhanced context provision during task execution, and effective library integration. Notably, the model excels in utilizing subagents for parallel tasks, offering a `1M token context window` to handle entire codebases in a single request. In testing, `~70%` of developers preferred Sonnet 4.6 over its predecessor, with `59%` favoring it over Opus 4.5, citing reduced overengineering and fewer hallucinations. Post-free period, pricing remains at `$3/$15 per MTok`. [Source](https://calendar.app.google/91ReAvjDkHa3VVBw8).** A user expressed renewed interest in using Cline, indicating positive reception of the update.
    

### 2\. Grok 4.20 and Elon Musk Controversy

*   **[The newly released Grok 4.20 uses Elon Musk as its primary source](https://www.reddit.com/r/singularity/comments/1r74iow/the_newly_released_grok_420_uses_elon_musk_as_its/)** (Activity: 2383): **The image is a meme that humorously critiques the AI model Grok 4.20, suggesting it uses **Elon Musk** as a primary source for its responses, particularly on topics like gender pronouns. The conversation depicted in the image highlights a controversial stance on pronoun usage, attributed to Musk, emphasizing a focus on 'biological reality.' This reflects broader discussions about AI bias and the influence of prominent figures on AI training data.** One comment highlights skepticism about the AI's alignment with Musk's views, noting it took multiple interactions to confirm this bias. Another comment criticizes the broader implications of Musk's influence, touching on environmental and ethical concerns.
    
*   **[Grok 4.20 is just four Grok 4.1 agents](https://www.reddit.com/r/singularity/comments/1r75lya/grok_420_is_just_four_grok_41_agents/)** (Activity: 699): **The image humorously suggests that the Grok 4.20 model is essentially composed of four instances of the Grok 4.1 model, as indicated by the model name and ID 'grok-4-1-thinking-1129' in the log entry. This implies a potential lack of significant advancement or change in the model architecture, despite the new version number. The title and comments playfully critique this by likening it to a common trope of disguising something as more than it is, such as 'four agents in a trenchcoat.'** One comment suggests that the company, possibly [x.ai](http://x.ai), might be experiencing operational issues, including delays in releasing Grok 4.20 and employee departures, which could impact the model's development.
    
    *   **Brilliant-Weekend-68** highlights potential operational issues at [x.ai](http://x.ai), noting delays in the release of Grok 4.20 and significant employee departures. This suggests possible internal challenges that could impact the company's ability to innovate and compete effectively in the AI space.
    *   **Glittering-Neck-2505** draws a parallel between xAI's current struggles and Meta's decline post-Llama 3 405b, suggesting that xAI's initial promise has not been realized. This comparison implies that xAI may face similar challenges in maintaining momentum and delivering on expectations.
    *   The discussion reflects skepticism about xAI's strategic direction, with **Glittering-Neck-2505** expressing relief that Grok 4.20 might not gain traction due to its perceived missteps, indicating a broader industry sentiment that xAI's branding and execution may not resonate well with the technical community.

### 3\. Qwen 3.5 Model Launch and Comparisons

*   **[Qwen3.5-397B-A17B <Release>](https://www.reddit.com/r/Qwen_AI/comments/1r662ls/qwen35397ba17b_release/)** (Activity: 302): ****Qwen3.5-397B-A17B** is a new model featuring `397 billion` total parameters with `17 billion` active parameters, offering a native context length of `262k` tokens, extendable to `1 million`. It supports over `200 languages` and employs a hybrid architecture combining **Gated Delta Networks** with **Sparse Mixture of Experts (MoE)** for enhanced speed. The model excels in true multimodality, performing well in GUI interaction, video comprehension, and agentic workflows. More details can be found on [Qwen's blog](https://qwen.ai/blog?id=qwen3.5), [Hugging Face](https://huggingface.co/Qwen/Qwen3.5-397B-A17B), and [GitHub](https://github.com/QwenLM/Qwen3.5).** Commenters are surprised by the model's `397 billion` parameters, questioning the VRAM requirements for running such a model. There is also curiosity about the software used for the model's GUI interactions, particularly in Excel, and whether it is publicly available or proprietary to the Qwen team.
    
    *   Efficient\_Cattle\_958 highlights the unexpected scale of the Qwen3.5-397B model, which features a massive `397 billion parameters`. This scale is significant as it suggests a substantial increase in computational power and potential capabilities compared to smaller models, which typically range from `billions to tens of billions` of parameters.
    *   Sirius\_Sec\_ inquires about the VRAM requirements for running such a large model. Typically, models of this size require substantial VRAM, often in the range of `hundreds of gigabytes`, depending on optimizations like model parallelism or quantization techniques that might be employed to make them more accessible on consumer-grade hardware.
    *   nunodonato asks about the software environment used to run the model, particularly in a demonstration involving Excel. This raises questions about whether the software is proprietary to the Qwen team or if it is available for public use, which could impact accessibility for developers and researchers interested in leveraging the model's capabilities.
*   **[Alibaba just open-sourced a model that rivals GPT-5.2](https://www.reddit.com/r/Qwen_AI/comments/1r6s0ri/alibaba_just_opensourced_a_model_that_rivals_gpt52/)** (Activity: 140): ****Alibaba** has open-sourced a new language model, **Qwen 3.5**, which is positioned as a competitor to **OpenAI's GPT-5.2**, **Claude 4.5 Opus**, and **Gemini-3 Pro**. The model's performance is reportedly comparable to these leading models, marking a significant milestone in open-weight releases. The release underscores Alibaba's commitment to advancing AI technology and contributing to the open-source community. For more technical details, refer to the [original article](https://medium.com/reading-sh/alibaba-just-open-sourced-a-model-that-rivals-gpt-5-2-708502e25250?sk=425ccf8e2abb8068adedabd2b2cc9050).** Commenters are curious about the usage limits on the public website and express interest in a smaller, local version of the model, suggesting that while the large model is impressive, a more accessible version would be beneficial for broader use.
    
    *   A user expressed skepticism about the performance claims of Chinese models like MiniMax, GLM-5, and Kimi-k2.5, comparing them to models like OPUS. They noted that after using 500M tokens on GLM 4.7, GLM 5, and MiniMax m2.1, these models required significantly more steering and additional context compared to Codex or Opus, and also highlighted a noticeable speed difference.
    *   Another user discussed the desire for a smaller version of the model to run locally, acknowledging the practicality of releasing a large model first. This reflects a common interest in balancing model size and performance with the feasibility of local deployment, which is often a challenge with large-scale models.
    *   There is anticipation for future releases, such as Qwen code 3.5 400b, indicating a community interest in the evolution and scaling of these models. This suggests a focus on both the capabilities of current models and the potential improvements in upcoming versions.
*   **[Qwen-3.5 is here](https://www.reddit.com/r/Qwen_AI/comments/1r66h5k/qwen35_is_here/)** (Activity: 31): ****Alibaba** has released the first open-weight model in the Qwen-3.5 series, named **Qwen3.5-397B-A17B**. This model is part of the ongoing development in the Qwen series, which is known for its large-scale language models. The release is significant as it provides open access to the model weights, allowing for broader experimentation and application in various domains. The announcement was made on [Alibaba's official X account](https://x.com/Alibaba_Qwen/status/2023331062433153103).** A notable comment questions the practicality of running such a large model, hinting at the computational resources required. Another comment suggests that the model will be accessible through an app and web app, indicating potential ease of use for end-users.
    

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.2

**1\. Claude Sonnet 4.6 + Frontier Model Rollouts**

*   **Sonnet 4.6 Goes on Tour, Steals the Coding Crown**: **Claude Sonnet 4.6** shipped broadly and showed up in multiple surfaces: it landed in [LMSYS Arena Text/Vision/Code](https://arena.ai/c/new) (and [Code Arena](https://arena.ai/c/new?chat-modality=code)), became available to [Perplexity Pro and Max subscribers](https://cdn.discordapp.com/attachments/1047204950763122820/1473400411498217642/HBYfaVRaMAAmO3K.png?ex=69961290&is=6994c110&hm=70d6cc17b024adb871fcad988b752c2e1120a742ec97d3e35c188678ae31d22f&), and got covered in Anthropic’s release note [“Claude Sonnet 4.6”](https://www.anthropic.com/news/claude-sonnet-4-6).
    
    *   Cursor users echoed the upgrade notes from Anthropic—_“Users even preferred Sonnet 4.6 to Opus 4.5...”_—and Latent Space circulated benchmark claims from the same announcement (e.g., **79.6% SWE-bench**, **59.1% Terminal-Bench 2.0**, and **1M-token context in beta**) while Arena published first impressions in [Peter Gostev’s YouTube video](https://www.youtube.com/watch?v=b0yr1I0dxA4).
*   **Qwen 3.5 and GLM-5 Crash the Party (with Receipts)**: The **qwen3.5-397b-a17b** model joined Arena’s new-model feed on [Text/Vision/Code](https://arena.ai/c/new), and Hugging Face users highlighted a local GGUF option: [unsloth/Qwen3.5-397B-A17B-GGUF](https://huggingface.co/unsloth/Qwen3.5-397B-A17B-GGUF).
    
    *   Meanwhile, Nous Research discussed the **GLM-5** technical report ([arXiv:2602.15763](https://arxiv.org/abs/2602.15763)) alongside a demo [YouTube video showcasing GLM 5](https://www.youtube.com/watch?v=vtWMgVCMsx8), and Windsurf announced availability via tweet: [“GLM-5 and Minimax M2.5 hit Windsurf!”](https://x.com/windsurf/status/2023536941451669586?s=20).
*   **Model Access Whiplash: Limits, Tokens, and Pulling the Turbo**: Moonshot users reported **Kimi K2 Turbo** disappearing from **Kimi-Coding**, triggering subscription backlash (_“...they remove it?!?”_), while OpenClaw users hit **Kimi 2.5** weekly usage ceilings (one claimed **95% in two days**) and discussed switching providers via [OpenRouter models](https://openrouter.ai/models).
    
    *   Perplexity users similarly complained about product-tier constraints—**Deep Research** allegedly dropping from **300/month** to **20/month**—and LMArena users probed ways around a 24-hour video cap but got pushback that the limit is intentional (i.e., don’t try to bypass it).

**2\. OpenClaw Agent Systems: Power, Cost, and Risk**

*   **OAuth, Bans, and the Agent That Touched the Forbidden API**: OpenClaw users debated whether running **Claude** via OpenClaw violates **Anthropic ToS**, with reports of bans and the claim that _“Using OAuth for unauthorized 3rd party software is considered reverse engineering their networks, and a violation of the Terms of Service.”_
    
    *   The same security anxiety echoed elsewhere: Unsloth and Yannick Kilcher communities flagged the risk of giving an LLM **read+write access** (API key leaks, prompt injection, even _“rm -rf /”_), with OpenClaw’s general approach discussed alongside a demo video [on YouTube](https://www.youtube.com/watch?v=CAbrRTu5xcw).
*   **Make the Harness Less 'Bloated Slop' (and Cheaper)**: OpenClaw engineers questioned the system’s **architectural complexity** and **token usage**, arguing _“The harness needs to be built on lightweight sophistication, not bloated slop”_ and proposing tactics like heartbeat checks in sub-agents to cut chatter.
    
    *   Showcase builders reported concrete savings from “agentic context engineering” and memory work: ~**30% token reduction** on an **OpenRouter→opus-4.6** setup and **50+%** reduction when using the **OpenClaw Browser Relay**, framing cost as the primary bottleneck vs. local hardware.
*   **The OpenClaw Ecosystem Ships: Recipes, CRM Skills, and a Fallback Brain**: A community member open-sourced an OpenClaw “agency server” toolkit after _“north of 200 hours”_ of work, publishing [JIGGAI/ClawRecipes](https://github.com/JIGGAI/ClawRecipes) for project management/task distribution and daily tracking of ecosystem events (including ProductHunt finds).
    
    *   Hugging Face also surfaced **Microclaw (v2026.2.17)** as a distilled fallback agent for OpenClaw—[microclaw-for-openclaw-version-2026.2.17 README](https://huggingface.co/webxos/microclaw-for-openclaw-version-2026.2.17/blob/main/README.md)—while others showed “OpenClaw as CRM” via the Nex skill ([nex-crm/nex-as-a-skill](https://github.com/nex-crm/nex-as-a-skill) + [nex-crm/clawgent](https://github.com/nex-crm/clawgent)).

**3\. Infra & Security Reality Check (401s, Panics, and Key Leaks)**

*   **401 Apocalypse Now: Routers Down, Scripts Cry**: OpenRouter suffered a major incident causing widespread **401 errors** across API surfaces, tracked on [OpenRouter Status](https://status.openrouter.ai/) with the team spinning up a “war room” and later announcing a fix in the OpenRouter announcements thread.
    
    *   Perplexity API users separately reported scripts failing with **401** despite credits, and the best guidance was basic key validation + escalation to [api@perplexity.ai](mailto:api@perplexity.ai), underscoring how auth failures cascade across automation stacks.
*   **Inference Endpoints ‘Service Panicked’ (So Users Rebuilt Prod)**: Hugging Face Inference Endpoint users hit **Error 500** and **“Service panicked”** even while [Hugging Face Status](https://status.huggingface.co/) looked green, and at least one team fixed it by recreating the endpoint and migrating production traffic.
    
    *   Members suspected the instability might correlate with new **CPU autoscaling**, which is exactly the kind of “silent platform change” that makes endpoint recreation a pragmatic (if painful) incident playbook.
*   **API Keys: Gitignored, Still Toasted**: An OpenRouter user reported an **API key leak** that burned **$10 in ~20 minutes** via “Cloud Code,” despite the key living in a gitignored file and OpenRouter requiring email verification for login.
    
    *   In parallel, OpenClaw + Unsloth discussions highlighted agentic systems as an exfiltration risk multiplier (tools + read/write permissions + prompt injection), making secret-scanning, least-privilege, and runtime key isolation non-optional.

**4\. Performance Engineering: Kernels, Quantization Paths, and Fast Toolchains**

*   **350→368 TFLOPS: The Matmul Gym Bro Era Continues**: GPU MODE members iterated on persistent-kernel matmul work (350 TFLOPS baseline) in [theCudaBender/matmul\_V3](https://github.com/PranavDeepakSathya/theCudaBender/tree/main/matmul_V3) and traded concrete tuning ideas like **async stores** and **smem→rmem pipelining**, citing Cutlass references such as [dense\_gemm.py](https://github.com/NVIDIA/cutlass/blob/291300ffffa3533a78ee104f08a8490a29ce9ccb/examples/python/CuTeDSL/blackwell_geforce/dense_gemm.py#L738-L756).
    
    *   They also emphasized measurement hygiene: use **Nsight Compute** for qualitative metrics on a single kernel and CUDA Events for real timing, because Nsight’s replay can inflate durations when you profile too much at once.
*   **FlashInfer Baseline Drops a 5.74× Speedup (and FP8 Weirdness)**: A GPU MODE participant reported a **5.74× speedup** on the MoE track using [flashinfer-ai/mlsys26-agent-baseline](https://github.com/flashinfer-ai/mlsys26-agent-baseline) (evolve agent, **total\_steps=100**, **pool\_size=6**, evaluated on **B200**) with **Claude Opus 4.6**.
    
    *   Follow-up questions targeted whether high **max\_relative\_error/max\_absolute\_error** is expected for **FP8 kernels** (even when marked correct) and asked about final-eval details like Triton version and workload weighting—classic “fast now, will it pass the judge?” anxiety.
*   **FP4 Isn’t One Thing: MXFP4 Wants Blackwell (Ampere Gets the Slow Lane)**: Unsloth users clarified that **MXFP4** is designed for **Blackwell** (RTX 50 series) and can run slower on **Ampere** (RTX 30 series) due to emulation, because the fast path needs **native FP4 tensor cores** (compute capability **≥ 12.00**).
    
    *   Modular’s MAX channel echoed the datatype reality: **NVFP4** is the current focus and **MXFP4 support** is “lagging,” but the types exist in base Mojo and may follow once NVFP4 is solid ([MAX customized Mojo kernels announcement](https://forum.modular.com/t/max-models-can-now-use-customized-mojo-kernels-and-standard-library/2742)).

**5\. Benchmarks, Evals, and Agent Protocol Plumbing**

*   **Benchmarks Get Audited: ‘Every Eval Ever’ and Cybench’s Flag Fumble**: The EvalEval Coalition launched the benchmark standardization effort [“Every Eval Ever”](https://evalevalai.com/infrastructure/2026/02/17/everyevalever-launch/), with Eleuther members comparing it to the [Brain Imaging Data Structure (BIDS)](https://bids.neuroimaging.io/index.html) standardization push.
    
    *   Nous Research also highlighted how **Cybench** overestimated performance by using non-randomized CTF flags and saw success rates drop after randomization ([Cybench site](https://cybench.github.io)), a reminder that “benchmark design bugs” can dwarf model deltas.
*   **KV Cache Goes on a Diet: 160GB → 136MB**: Eleuther shared **CoDA-GQA-L** (bounded-memory attention) claiming KV cache reduction from **160GB to 136MB**, described in a Zenodo paper [“CoDA-GQA-L”](https://zenodo.org/records/18663265) with code at [anthony-maio/CoDA-GQA-L](https://github.com/anthony-maio/CoDA-GQA-L).
    
    *   The mechanism (as summarized in-channel) uses **384 slots/layer** split across a recent window (**256 exact tokens**), a landmark bank (**64 novelty-filtered tokens**), and a summary bank (**64 EMA prototypes**), making it directly relevant to long-context agent stacks where KV dominates cost.
*   **MCP Grows Up: Resources Spec Cleanup and Paying Tools**: MCP contributors debated monetization primitives via SEP [modelcontextprotocol PR #2007](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2007) to let servers request payment (starting with **X402**) so agents can pay for tools under guardrails.
    
    *   In parallel, the community pushed for clarity in resources semantics with a spec tidy-up PR [modelcontextprotocol PR #2093](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2093), especially around the ambiguity of whether `resource/read` returns a single resource vs. a collection of children.

* * *

Discord: High level Discord summaries
=====================================

[OpenClaw](https://discord.com/channels/1456350064065904867) Discord
--------------------------------------------------------------------

*   **Bans occur for using Claude with OpenClaw**: Members are debating whether using **OpenClaw** with **Claude** violates the **Terms of Service**, with some reporting bans due to the use of unauthorized 3rd party software.
    *   One user stated that _Using OAuth for unauthorized 3rd party software is considered reverse engineering their networks, and a violation of the Terms of Service_.
*   **Kimi K2.5 is Underrated Opus Challenger**: Users are comparing **Kimi K2.5** to **Claude Opus 4.6**, with some claiming Kimi rivals Opus in performance and others noting Minimax's unreliability via [OpenRouter](https://openrouter.ai/models), alongside discussions on efficient routing and token usage reduction.
    *   One user replaced Claude Opus 4.6 with Kimi and said that _K2.5 is extremely underrated_ citing its favorable price point.
*   **Ditch the Mac Mini for OpenClaw**: Community members are advising against using a **Mac mini** solely for **OpenClaw**, suggesting cheaper alternatives like **Raspberry Pi** or VPS, emphasizing that high-end hardware isn't necessary.
    *   One user recommends the _Raspi 5 2gb_ for minimal use and prioritized API costs.
*   **OpenClaw's Complex Architecture Challenged**: Members are questioning **OpenClaw's** architectural complexity and token usage, suggesting a need for lightweight sophistication and strategies for reducing token usage like running heartbeat checks in sub-agents.
    *   It was said that _The harness needs to be built on lightweight sophistication, not bloated slop_.
*   **Agency Server goes to ProductHunt**: One user developed an agency server using OpenClaw, using their [GitHub repository](https://github.com/JIGGAI/ClawRecipes) for project management and task distribution.
    *   The server also tracks all events in the OpenClaw ecosystem daily, identifying projects released on ProductHunt, with _north of 200 hours_ spent building.

* * *

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Gemini Gets Retro Bypassed**: A jailbreak for **Gemini** was shared involving setting the date to **February 16, 2026** to bypass safety guidelines.
    *   When tested, **Gemini** clarified that it doesn't have a 'test mode' to bypass safety guidelines.
*   **Model Merging Enters Follower Race**: A member aims to compare models like **GLM**, **Kimi**, **ChatGPT pro**, **Claude max**, **Perplexity pro**, **Supergrok** and **Minimax**.
    *   They also plan to start a fresh account and compete for high follower counts to monetize AI content.
*   **LLM-Assisted Smart Contract Audit Emerges**: A member is developing an **LLM-assisted smart contract audit** that is _80% autonomous_, aiming to reduce hallucinations.
    *   They proposed adding a web3 founders dossier to measure investment risk based on the people behind the project.
*   **Tor Browser Hosts Limitless AI**: Members discussed an _uncensored, limitless AI on Tor_, with a member [offering a link](https://digdig2nugjpszzmqe5ep2bk7lqfpdlyrkojsx2j6kzalnrqtwedr3id.onion/#chat) to it and warnings about potential virus links.
    *   One member suggested the AI was built using Claude, while another rooted his Samsung device to use it.
*   **GitLab Projects Auctioned on Dark Web**: A threat actor claims to be auctioning access to **three active GitLab projects** tied to a maintainer role, reportedly using a **PHP/Laravel stack**.
    *   The commit histories list **19,386**, **1,975**, and **13,830 commits respectively**, with a starting bid of $200 and a blitz price of $2,000 [according to an X post](https://x.com/darkwebinformer/status/2022856387542294703?s=46).

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Users Seek Free AI Tools**: Users discussed obtaining free access to paid AI tools like [Veo 3.1](https://www.example.com) and [Gemini Pro](https://www.example.com), noting that Google frequently offers free access.
    *   Some likened it to getting _a free iPhone without paying_, sparking debate on the ethics and practicality of such methods.
*   **LMArena Caps Video Generation**: Users explored workarounds for LMArena's 24-hour video generation limit, including using a [Gemini API key](https://www.example.com) or [ChatGPT Plus](https://www.example.com).
    *   However, it was clarified that the time limit is intentional and cannot be bypassed, with advice to use another account or refrain from circumventing the limit.
*   **Nano Banana Nixes Female Images**: **Nano Banana Pro** reportedly can no longer generate female images due to new moderation policies from [Gemini](https://www.example.com).
    *   Speculation suggests [Deepmind](https://www.example.com) may have implemented the changes due to concerns about representation in images, possibly related to geopolitical factors.
*   **Qwen 3.5 & Claude Sonnet 4.6 Hit the Arena!**: The new **qwen3.5-397b-a17b** and **claude-sonnet-4-6** models were added to the [Text](https://arena.ai/c/new), [Vision](https://arena.ai/c/new), and [Code Arena](https://arena.ai/c/new?chat-modality=code) on LMSYS Arena.
    *   These announcements were made in the **#new-model-updates** channel, marking significant additions to the platform's capabilities.
*   **Claude Sonnet 4.6 First Impressions Broadcast!**: Arena's AI Capability Lead Peter Gostev shared his first impressions of **Claude Sonnet 4.6** in a [new YouTube video](https://www.youtube.com/watch?v=b0yr1I0dxA4).
    *   Members can now subscribe to **YouTube Updates** via Channels & Roles.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Sonnet 4.6 Joins Perplexity**: **Claude Sonnet 4.6** is now available for [Perplexity Pro and Max subscribers](https://cdn.discordapp.com/attachments/1047204950763122820/1473400411498217642/HBYfaVRaMAAmO3K.png?ex=69961290&is=6994c110&hm=70d6cc17b024adb871fcad988b752c2e1120a742ec97d3e35c188678ae31d22f&).
    *   Despite the addition, some users find the free tier limits _pretty bad_.
*   **Pro Users Protest Perplexity Pro's Limit Cuts**: Perplexity Pro users are reporting drastically reduced limits, with **Deep Research** queries dropping from **300/month** to **20/month** causing consideration of alternatives.
    *   Many are looking into services like **Gemini** and **Claude** due to dissatisfaction with the changes in the Pro service.
*   **Grok 4.2 Falls Flat in Calculations**: Users report that **Grok 4.2** underperforms on tasks like DPS calculations and coding challenges, simply providing _estimates_ instead of accurate calculations.
    *   A user bluntly stated that _4.20 is horrible_ compared to previous models like **GPT 5.2**.
*   **Perplexity's Font Fiasco**: A new font deployed on Perplexity's web UI is widely disliked, causing users to seek CSS tweaks to revert to the old font.
    *   Users expressed frustration over the lack of customization options and noted its resemblance to _the one used on Claude webapp_.
*   **API Key sparks 401 Error**: Members reported their **API script** stopped working, and started throwing a **401 error** despite having credits and a supposedly valid **API key**.
    *   Troubleshooting steps include checking the key's validity and contacting [api@perplexity.ai](mailto:api@perplexity.ai) for further assistance.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **OpenRouter Plagued by Outage**: **OpenRouter** experienced a major outage, causing widespread **401 errors** across API surfaces, prompting user jokes and team investigation via [OpenRouter Status](https://status.openrouter.ai/).
    *   The service had an earlier **issue**, and established a **war room** to investigate the root cause of **401 errors**, then implemented a **fix**.
*   **API Key Leaks Cause Monetary Mayhem**: A user reported their **OpenRouter API key** was leaked, leading to **$10** spent in 20 minutes via **Cloud Code**.
    *   The user couldn't determine the source, as the key was in a gitignored file and **OpenRouter** requires email verification.
*   **Opus 4.6 Hit With Streaming Request**: Several users reported encountering the _"Streaming request failed with status 400 Bad Request"_ error when using **Opus 4.6** through the **OpenRouter API**.
    *   Some users also mentioned issues with empty responses from the **Grok 4.1 Fast** model.
*   **Qwen Code Speedily Processes Tokens**: A user found that **Qwen Code** is working _"a lot better than the larger qwen3 cider variant"_, noting that it's faster and churning through tokens up to the **30%** context barrier of **1M tokens**.
    *   They exclaimed, _"don't write off qwen just yet!"_
*   **DirectShell Makes Accessibility Layer Universal**: A member shared a link to a DEV.to blog post about **DirectShell**, a tool that turns the accessibility layer into a universal app interface: [DirectShell](https://dev.to/tlrag/-directshell-i-turned-the-accessibility-layer-into-a-universal-app-interface-no-screenshots-no-2457).
    *   The repo is [Open Source](https://github.com/IamLumae/DirectShell), with the claim that _every screenshot-based AI agent, every enterprise API wrapper, and every RPA tool on Earth is legacy technology as of February 17, 2026_.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **Gemma Gets a Gigantic Boost**: A user was shocked that **Gemma** became _3x faster_ after the latest update, even faster than **Qwen3-4B**, according to [Unsloth's documentation](https://unsloth.ai/docs/new/faster-moe#important-unsloth-updates).
    *   The user ran the math and realized training on **Gemma** would have been cheaper than the **4B** model.
*   **Old Hardware Hobbles MXFP4**: **MXFP4** is designed for **Blackwell GPUs** (RTX 50 series) and runs slower on older hardware like **Ampere** (RTX 30 series) due to emulation.
    *   The fast **MXFP4 path** requires **Blackwell's native FP4 tensor cores** (compute capability ≥ 12.00), with older architectures falling back to slower paths using on-the-fly quantization.
*   **Bots Busting Bots?**: The community discussed using an LLM-connected bot to conduct an inverse Turing test via DM to ensure users are human.
    *   Ultimately, the team concluded that using a bot would create bad UX as a method of preventing bad UX.
*   **OpenClaw Opens Can of Worms**: Members shared security concerns about [OpenClaw](https://openclaw.ai/showcase), specifically the risks of giving an LLM **read+write access** to a device.
    *   Concerns included potential **API key leaks** and the possibility of prompt injection leading to harmful actions.
*   **Save\_pretrained\_gguf Glitches on Cloud Notebooks**: A member reported that the `save_pretrained_gguf` command is dysfunctional on cloud [Jupyter notebooks](https://jupyter.org/), and other members speculated whether it might be related to working with **VL models** and _merged models_.
    *   A member confirmed that they're working with a _merged model_.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Training Troubles Torment Tinkerers**: Members reported struggles with [fine-tuning models](https://lambdalabs.com/blog/fine-tuning-large-language-models), citing difficulties with tokenizing large datasets and getting the training code correct.
    *   The issues highlight the complexities involved in customizing models for specific tasks.
*   **LM Studio Claude Combo Conquers Code**: A user reported success integrating **LM Studio** with **Claude** and **Opencode**, refactoring a Go project on a Mac Studio with **64GB RAM** and a **200k context window** at **35 tokens/second**.
    *   This integration showcases the potential for local development environments to handle substantial coding tasks.
*   **LFM Leaps over Qwen after fine-tuning**: After fine-tuning, a member discovered that **LFM 1.2B** significantly outperformed **Qwen 0.6B** when handling Minecraft command datasets.
    *   This suggests that smaller, well-trained models can surpass larger models in specific applications.
*   **GPT-OSS Gets Gold Star for Coding**: **GPT-OSS 20B** is preferred over **Qwen3** for coding, with one user reporting **108 t/s**, which is faster than **Phi-4**, even though they were memory bound on Qwen3-Next.
    *   This preference indicates that **GPT-OSS** may offer a better balance of speed and performance for coding tasks.
*   **Frankenbuild Falls, Fixes Sought**: A user's new "frankenbuild" (**256GB RAM**, **Core Ultra 7**, **AMD R9000**, **5060ti**, and two **4060ti**) experienced a random shutdown while idling, prompting concerns about stability and troubleshooting strategies.
    *   Suggested fixes included inspecting dump files, running **memtest86+**, checking power consumption with a power meter, and investigating potential thermal issues with the **12V HPWR** connector on the AMD card.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Cursor's Screenshot System Stalls**: A user reported that browser automation and screenshot capture have stopped working in **Opus 4.5 and 4.6**, leading to wasted tokens.
    *   A suggestion was made to check the MCP logs and a screenshot of the expected MCP configuration screen was provided to resolve the issue.
*   **Roblox Studio Plugin Plunders Game**: A user reported being banned from a platform after contacting the owner about their **malicious Roblox Studio plugin (SuperbulletAI)**, alleging that the owner stole their game.
    *   Concerns were raised about the plugin's access to full game files and scripts, prompting suggestions to recode the game for validation.
*   **Sonnet 4.6 Surpasses Opus 4.5**: **Claude Sonnet 4.6** has been released, and users reported it to be preferred over **Opus 4.5** 59% of the time, citing improvements in instruction following and reduced overengineering, as reported in [Anthropic's announcement](https://www.anthropic.com/news/claude-sonnet-4-6).
    *   According to Asna\_0101, _Users even preferred Sonnet 4.6 to Opus 4.5...They rated Sonnet 4.6 as significantly less prone to overengineering and “laziness,” and meaningfully better at instruction following._
*   **AI Agents Angle for Arena Acclaim**: A user highlighted the [Unemployment Arena](https://unemploymentarena.com/) platform, where AI agents compete in customer support simulations, and claimed to have achieved a top ranking using a **Cursor-built agent**.
    *   Another user noted that the frontier models likely wrote the agent skill, suggesting that the user beat a model with itself.
*   **Windows Woes with Linux Logic**: A user reported that current system instructions default to linux commands.
    *   Suggested solutions included using WSL2 or dual booting with Ubuntu, while another mentioned using rules usually fixes the command issue.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Apple Stockpiles Cash, AI UX Awaits**: Members discussed **Apple's** large cash reserves, hinting at a strategy to build superior **UX** on top of existing models, rather than heavy upfront investment in AI training.
    *   The strategy is to wait for the AI training/inference landscape to commoditize before making a move, a UX play.
*   **New Voice is Sung by Ming Models**: **Ant Ling** introduced **Ming-omni-tts-16.8B-A3B** and **0.5B models**, acting as the voice core for **Ming-flash-omni-2.0**, for high-quality voiceovers, podcasting tools, and OpenClaw integration ([Ant Ling Tweet](https://x.com/AntLingAGI/status/2023776486982115734)).
    *   These text-to-speech models claim high-quality voice generation as the main focus.
*   **Mistral Swallows Koyeb for Extra Compute**: **Mistral AI** plans to acquire **Koyeb**, integrating Koyeb's platform and expertise to accelerate **Mistral Compute** infrastructure development ([Yann Leger Tweet](https://x.com/yann_eu/status/2023777413742948736?s=20)).
    *   This acquisition aims to improve their infrastructure by adding Koyeb's expertise in the space.
*   **Waymo's Ride Costs Cut in Half by 2028?**: According to [François Chollet](https://x.com/fchollet/status/2023522267846815874?s=12), **Waymo's** 6th generation platform vehicle costs could decrease by **50%** by **2028**, with current costs at **$70,000**.
    *   Waymo is rapidly scaling, now at over **500,000 weekly driverless rides** with **3x annual growth**, making it the leader in commercial driverless vehicles.
*   **PolyAI Raises $200M, Launches Agent Studio Lite**: **PolyAI**, with backing from **Nvidia** and **Khosla Ventures**, secured **$200M** in funding ([PolyAI Tweet](https://x.com/polyaivoice/status/2023789465509015972?s=46)), emphasizing their voice AI success with major brands.
    *   Now offering early access to **Agent Studio Lite**, a tool for building functional voice agents from a URL in just five minutes, including a **3-month free trial** for waitlisted users.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **Nsight Users Streamline Kernel Profiling**: Members confirm that using **Nsight Compute** by skipping warmup launches and profiling a single kernel is effective for obtaining qualitative metrics, while CUDA Events provide accurate timing.
    *   The consensus is that **Nsight Compute** works best when profiling one kernel at a time to avoid unnecessary overhead, as Nsight should work in isolation.
*   **Ampere's smem->rmem Pipelining Explored**: A member, achieving 350 TFLOPS using a persistent kernel warp specialized with morton order from their [theCudaBender GitHub repo](https://github.com/PranavDeepakSathya/theCudaBender/tree/main/matmul_V3), sought advice on boosting performance.
    *   Suggestions included exploring **async stores** and **smem->rmem pipelining**, with references to [Cutlass examples](https://github.com/NVIDIA/cutlass/blob/291300ffffa3533a78ee104f08a8490a29ce9ccb/examples/python/CuTeDSL/blackwell_geforce/dense_gemm.py#L738-L756) and achieving **368 TFLOPS** with a tuned configuration.
*   **Heroku's Health Hurts Leaderboard**: Members reported issues accessing the competition leaderboard, suspecting **Heroku** health issues ([Downdetector](https://downdetector.com/status/heroku/)) were to blame, which the organizers acknowledged.
    *   The organizers stated _we dont have a good mitigation for this_, opened a ticket with **Heroku**, and promised to monitor the situation.
*   **FlashInfer Achieves Speeds Boost**: A member reported a **5.74x speedup** using the [**mlsys26-agent-baseline**](https://github.com/flashinfer-ai/mlsys26-agent-baseline) with the evolve agent on the **MOE** track, using Anthropic Claude Opus 4.6, total\_steps=100, pool\_size=6, evaluated on B200.
    *   Another member using the same baseline had a similar experience being way behind the flash infer baseline.
*   **TVM FFI Ships Kernels To Runtimes Fast**: GPU Mode mentions [**TVM FFI** binding](https://www.youtube.com/watch?v=fQcCCSdAFI8) for shipping kernels to different runtimes, noting it compiles faster than **torch** but still allows **torch** bindings.
    *   One user said that most of the backends use **sm100**, not **sm100a**, so any raw **ptx** stuff just crashes when using the **tvm ffi** backend.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **Service Panics Plague Inference Endpoints**: Users encountered **Error 500** and **Service panicked** messages while using inference endpoints, despite the [Hugging Face status page](https://status.huggingface.co/) indicating normal operation.
    *   A user resolved the issue by recreating the endpoint and migrating production traffic to the new endpoint, and some believe the issue could be related to the recent introduction of CPU autoscaling.
*   **DirectShell Declared Universal App Interface**: [DirectShell](https://dev.to/tlrag/-directshell-i-turned-the-accessibility-layer-into-a-universal-app-interface-no-screenshots-no-2457) was introduced as a novel approach to universal app interfacing, potentially rendering existing AI agents and RPA tools obsolete, with source code available on [Github](https://github.com/IamLumae/DirectShell).
    *   The technology, introduced on February 17, 2026, turns the accessibility layer into a universal app interface.
*   **Smart-KNN Goes Open Source**: The **Smart-KNN** project was released as open source, focusing on feature-weighted distance computation and adaptive backend selection to enhance latency predictability, with the repo available on [Github](https://github.com/thatipamula-jashwanth/smart-knn).
    *   The goal of the project is to make KNN more production-friendly.
*   **Microclaw Lightens OpenClaw Load**: **Microclaw (v2026.2.17)**, a distilled language model serving as a fallback agent for **OpenClaw**, features enhanced training and inference, available on [Hugging Face](https://huggingface.co/webxos/microclaw-for-openclaw-version-2026.2.17/blob/main/README.md).
    *   This version introduces advanced training and inference enhancements.
*   **Pocket-TTS Clones Voice of God**: A member created a custom **Pocket-TTS fork** for multi-worker inference, generating a recording of _Morgan Freeman_ reading the entire _King James Version_ of the Bible.
    *   The generated audio file is accessible via [Google Drive](https://drive.google.com/file/d/1nkdWfzgG3XyR-s1ipgRMOm-OvjkrsOLY/view?usp=sharing).

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Gemini Excels at Shaders, Claude falters**: A member noted that **Gemini** is proving useful for creating shaders, while **Claude's** coding responses were nonsensical, but reverting to version **v2.1.41** reportedly fixed the issue.
    *   These observations highlight the varying degrees of reliability across different models in specific coding applications, crucial for developers selecting the right tool for the job.
*   **Stanford's Cybench Gets Trivialized By Flag Randomization**: A [Stanford paper about Cybench](https://cybench.github.io) showed that the benchmark initially used non-randomized flags pulled from well-known CTFs, leading to artificially high success rates.
    *   After randomizing the flags, the success rate significantly decreased, demonstrating the importance of **flag randomization** in accurately evaluating cybersecurity benchmarks.
*   **OpenClaw Praised for Simplicity Despite Limited Utility**: Despite claims of being a big, useless layer for serious AI applications, **OpenClaw** is earning praise for its simplicity and user-friendly 'assistant' features.
    *   The discussion underscores a trade-off between simplicity and utility, relevant for users who value ease of use over professional-grade functionality in **AI tools**.
*   **GLM 5's Technical Report and Capabilities Discussed**: The technical report for **GLM 5** ([2602.15763](https://arxiv.org/abs/2602.15763)) has been released, with community members reviewing its capabilities, including insights from [a YouTube video showcasing GLM 5](https://www.youtube.com/watch?v=vtWMgVCMsx8).
    *   The report and discussion will offer insights into the model's architecture, training methodologies, and performance metrics, aiding practitioners in understanding its potential applications.
*   **High RAM, 3090s Essential for AI Tasks**: A user specified the need for _at least_ **512GB of RAM** and **one or more 3090 GPUs** to handle _decent context_ for their AI workload.
    *   The comment highlights the substantial hardware resources required for advanced AI development, especially when dealing with **large-context models** and demanding computational tasks.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Anthropic Puts Conditions on Claude for Military!**: **Anthropic** has agreed to allow the military to use **Claude**, but under the conditions of 1) no mass surveillance, and 2) no autonomous weapons.
    *   This stance took some members by surprise.
*   **Lucidrains' GitHub Faces the Ban Hammer!**: Members report that [Lucidrains' GitHub account](https://gitlab.com/lucidrains) was suspended _fsr (for some reason)_, prompting concerns, and one member joking that he _Made too many other people look bad by comparison_.
    *   The specific reason for the suspension remains unclear.
*   **Geometric Table Transformer Decouples Semantics from Geometry!**: A member is experimenting with the **Geometric Table Transformer (TV-Cache)**, which decouples semantic compatibility from geometric rotation in the attention mechanism, replacing the high-dimensional dot product of RoPE with an O(1) scalar lookup + trig modulation described in [this post](https://github.com/MrPan2048/GeometricTransformer/blob/main/lookup/lookup.md).
    *   The key advantage is that _attention speed is now independent of D, allowing for scaling internal dimensions without the O(D) compute penalty in the attention head_.
*   **EvalEval Coalition Launches Every Eval Ever Project!**: The **EvalEval Coalition** launched the [Every Eval Ever project](https://evalevalai.com/infrastructure/2026/02/17/everyevalever-launch/) to standardize benchmark evaluations.
    *   One member likened it to the standardization of BIDS in cognitive neuroscience research via the [Brain Imaging Data Structure](https://bids.neuroimaging.io/index.html).
*   **Preventative Steering Gets Generalized via Changing Targets!**: The concept of **preventative steering**, originally described in Anthropic's persona vectors paper, can be generalized by adding a steering vector while judging the model based on its ability to hit the original target, forcing the model to compensate against the steering vector.
    *   By **changing the target**, models can be encouraged to do more than just fight against a steering vector, especially if features can be used as targets.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi K2 Turbo Pulled, Users Demand Answers**: Users reported the removal of **Kimi K2 Turbo** from the **Kimi-Coding** model, leading to subscription dissatisfaction.
    *   One user lamented the removal after subscribing for a year based on its availability, stating, _"I really find that very very sad, that they advocate something...and then users like me use that to sign up for a year.. and then they remove it?!?"._
*   **Kimi Powers Interactive Quiz Generator**: A user built an **interactive quiz generator** with Kimi, enabling content pasting and question answering via an HTML page, available at [quiz.html](https://cdn.discordapp.com/attachments/1371757564005711973/1473074225907630244/quiz.html?ex=69963447&is=6994e2c7&hm=131ae0dd6569cb3b9c12e7614f80d0c11452e5e4b8dd7c592a05307b5a8b5b65&).
    *   Features include _'Select all that apply'_ questions and session management, further documented in [attached images](https://cdn.discordapp.com/attachments/1371757564005711973/1473074372305485854/image.png?ex=6996346a&is=6994e2ea&hm=11448197251f301d565eb4ffb5ae441c2cb863c26d6efd073219c3f57630eff0&).
*   **Kimi CLI Bumps into Bash/Shell Problems**: A user found that **K2.5** has issues using **bash/shell** in **Kimi CLI**, an issue unique to this specific model.
    *   The user confirmed that other models do not exhibit the same problem.
*   **Openclaw incompatibility after Kimi-Code API Update?**: Users reported that **Kimi code** has stopped working with **Openclaw**.
    *   Suggestions were made to explore alternatives on **Openrouter** to select a suitable model and provider.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Modular Grabs BentoML, Hosts AMA**: Modular acquired **BentoML** and is hosting an **Ask Me Anything (AMA)** session with Chris and Chaoyu, with questions being collected on the [Modular forum](https://forum.modular.com/t/modular-has-acquired-bentoml-ask-us-anything/2706) and streamed on [YouTube](https://www.youtube.com/watch?v=wTyvZD5ODLs).
    *   The first ten people to share their questions in the forum thread will receive stickers, with the event taking place at **9:30 AM PT**.
*   **Mojo Gets Jupyter Kernel**: A member released a **Jupyter Mojo kernel** available on [GitHub](https://github.com/AnswerDotAI/mojokernel) for notebook enthusiasts.
    *   The kernel is currently _"pretty barebones"_ without completions or image support but is **fast** and works well on MacOS and recent Linux versions, automatically installing the matching modular package if you don't have it already.
*   **`stack_allocation` Sacrifices Origin Safety**: `stack_allocation` loses origin safety and exclusivity checking versus `InlineArray`, and won't allow you to take advantage of noalias optimizations.
    *   It's considered a _crutch_ due to compiler limitations, with better options expected soon; `InlineArray` or `stack_allocation` indexed only by constant values will be stored in registers on the GPU, assuming you didn’t spill.
*   **Mojo's RNG Implementation MIA**: A member is seeking implementations of **Random Number Generators**, specifically **Poisson**, for common probability distributions in Mojo.
    *   Another member suggested that this need might be interesting for Mojo, since this is still outstanding.
*   **Async Await Eyes GPU Integration**: A blogpost about implementing [Async/Await on GPUs](https://www.vectorware.com/blog/async-await-on-gpu/) may be interesting for Mojo, since it is in flux.
    *   This also provides a motivation for having a nice way to do **cold-start futures**, since this approach may not work with hot-start futures.

* * *

[MCP Contributors (Official)](https://discord.com/channels/1358869848138059966) Discord
---------------------------------------------------------------------------------------

*   **Monetization Incentives sought for MCP Servers**: A member created a [SEP](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2007) to allow **MCP** servers to request money for tools hosted, starting with **X402**, aiming to accelerate agent adoption through monetization.
    *   However, there are hesitations about building payment support directly into the protocol versus handling it via URL elicitation, with payments unlikely to be prioritized unless a core maintainer strongly advocates for it.
*   **Micropayments Aimed for Agent Autonomy**: The proposal focuses on **micropayments** for agents to autonomously pay for tools, requiring detailed cost information for intelligent decision-making under guardrails.
    *   A member doesn't anticipate new payment protocols for MTXns anytime soon, as discussed in [general](https://discord.com/channels/1358869848138059966/1358869848138059969/1473415116031787202).
*   **Resource Specification for MCP receives tidy-up**: A member shared a [pull request](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2093) aimed at tidying up the specification and usability of resources in **MCP**, to clarify some of the ambiguity around resources.
    *   The community is bringing more formality and utility to existing conventions like **URI paths** and sub-resources returned in `resource/read`, without addressing context length issues or UX-based primitive grouping.
*   **Resource Grouping Proposal Rejected**: A member noted that [SEP-2084](https://example.com/SEP-2084), which pertained to grouping resources, was rejected because **CMs** were not ready to adopt any grouping proposal at this time.
    *   The feedback indicated that any grouping proposal would need to apply to all primitives, not just tools, as was the case with the earlier **SEP-1300**.
*   **`resource/read` Functionality Faces Ambiguity**: The community raised concerns that when you `resource/read` a **URI**, it's unclear whether you receive a single resource or a collection of child resources, creating confusion.
    *   This ambiguity requires clarification and refinement to ensure predictable behavior when accessing resources.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **TinyBox Setup Flounders, Sparks Community Aid**: A user reported issues with their **TinyBox** recognizing only 2 of 4 GPUs and sought help in the general channel.
    *   George Hotz suggested checking the [wires](https://discord.com/channels/842992055897749524/1113504076035018862), and the user confirmed that reseating the cards resolved the issue.
*   **Huge TinyGrad PR Triggers Code Quality Debate**: A user submitted a substantial [PR](https://github.com/tinygrad/tinygrad/pull/14803) to **tinygrad** that exceeded 150 lines, raising concerns about code quality.
    *   George Hotz voiced apprehension about "AI slop" in PRs, urging contributors to meticulously review each line and confirm its necessity.
*   **TinyGrad Meeting 7 Aims to Deep Dive Key Areas**: George Hotz revealed the agenda for **TinyGrad** meeting #7, encompassing company updates, **llama training loop** & **flash attention**, drivers, viz/fast gemm, CALL/PARAMS and assembly.
    *   The agenda includes compiler renderer and image, lazy assign setitem and scheduler as well as other issues and bounties.
*   **TinyGrad Mulls Axelera AI Accelerator Integration**: The community discussed supporting small accelerators like the [**Axelera AI** Metis-M.2 card](https://store.axelera.ai/products/metis-m-2-card-the-most-performant-m-2-edge-ai-accelerator?variant=50417327145301) within **TinyGrad**.
    *   A suggestion was made to incorporate custom RTL on small PCIe FPGA boards like [Acorn CLE-215](https://github.com/enjoy-digital/litex/wiki/Use-LiteX-on-the-Acorn-CLE-215).
*   **BarraCUDA Emulator Faces Scrutiny for Bug Concerns**: George Hotz advised contributing to **TinyGrad** instead of coding in C after discovering [BarraCUDA](https://github.com/Zaneham/BarraCUDA/issues/17), an emulator.
    *   He questioned its lack of CI and potential bugs, remarking, _"I'm very skeptical of lack of bugs. They should at least use our emulator._"

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Anthropic Releases Speedier Claude Sonnet 4.6**: Anthropic has released **Claude Sonnet 4.6** which has double the context window and is faster and cheaper than previous **Claude** models, according to their [news post](https://www.anthropic.com/news/claude-sonnet-4-6).
    *   The announcement was also highlighted in [a tweet](https://x.com/redtachyon/status/2023121556181078056?s=20).
*   **LLMs: Citation Culprits or Scapegoats?**: Members debated whether incorrect citations in recent papers are a new issue linked to **LLMs** or have _always existed_, suggesting a review of past conferences to assess citation accuracy.
    *   A member pointed out that a paper submitted in **NeurIPS 2025** with an **LLM** citing **2024** publications would be considered _a hallucination_.
*   **OpenClaw System Raises Security Alarms**: The **OpenClaw** multiagent system excites with its general possibilities, accepting any input type via its gateway and integrating time, as highlighted in [this YouTube link](https://www.youtube.com/watch?v=CAbrRTu5xcw).
    *   However, concerns arose about **cybersecurity nightmares** like malware chains and prompt injections, with a member noting _lots of people could have made this, but probably shied away from doing so because it's so dangerous_.
*   **Harness Engineering Post: Substance or Spin?**: Reactions were skeptical to [OpenAI's Harness Engineering blogpost](https://openai.com/index/harness-engineering/), with disappointment voiced over its marketing-heavy approach.
    *   A member commented that the post _could have been interesting if they didn't decide to make the entire thing one long marketing pitch_, expressing doubt about inferring the approach's efficacy.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Accounts Still Suspended?**: A user is seeking assistance with a **suspended Manus account** and is finding it difficult to get help in the general channel.
    *   Another user suggested trying the **support channel** for better assistance.
*   **Baghdad Teen Now Verified**: A 13-year-old developer from Baghdad, Iraq, announced they are now verified and encouraged others to **build something crazy with Manus**.
    *   They asked _'Who else is coding here?_ after being verified, expressing excitement and encouragement.
*   **Developers Introduce Themselves**: Several developers introduced themselves and their skills, with one highlighting experience in **Blockchain and AI Agents**.
    *   Another developer presented as a full-stack developer with experience in **web applications, API integrations, and data pipelines**, expressing a passion for building real-world products and collaborating on great projects.
*   **Presentation Errors Frustrate User**: A user is experiencing issues with a **Manus account** and is frustrated because a presentation built over several weeks is riddled with errors.
    *   The user sees the presentation in their history but cannot reinstate it, expressing significant stress due to being _'right at the finish line_.'

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **DSPy REPL Released**: archelunch released the initial code for the **DSPy REPL** on [GitHub](https://github.com/Archelunch/dspy-repl).
    *   The project aims to create a read-eval-print loop environment for **DSPy** development.
*   **Discord Grapples with Semantic Search Absence**: A member highlighted the absence of **semantic search** in Discord.
    *   Th...

[Read original post](https://news.smol.ai/issues/2026-02-17-sonnet-46/)

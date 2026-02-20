---
title: "Gemini 3.1 Pro: 2x 3.0 on ARC-AGI 2"
date: "2026-02-19T05:44:39.000Z"
description: "**Google** released **Gemini 3.1 Pro**, a developer preview integrated across the **Gemini app**, **NotebookLM**, **Gemini API / AI Studio**, and **Vertex AI**,..."
original_link: "https://news.smol.ai/issues/2026-02-19-gemini31/"
---

**It's Google's turn.**

> AI News for 2/18/2026-2/19/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**262** channels, and **14980** messages) for you. Estimated reading time saved (at 200wpm): **1467** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

It’s getting a little hard to say interesting things with all the round robin minor version updates of frontier models every week, but Gemini 3.1 Pro seems like a decent enough advance to catch up, and in some cases, supercede, the fellow frontier models (this is surely the reason that 3.1 -had- to be released, because with 5.3 and 4.6 things were seriously falling behind for Google[1](https://www.latent.space/p/ainews-gemini-31-pro-2x-30-on-arc#footnote-1-188587128))

![Image](https://substackcdn.com/image/fetch/$s_!yx8y!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8564929f-b251-49ac-bc93-3564e36f2cd2_2160x2700.png)

It’s better at some [svg design things](https://x.com/Google/status/2024519468395733477?s=20):

![](https://substackcdn.com/image/fetch/$s_!ccZ4!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F45ca8560-c21c-4986-878f-0c6bd90275f6_1200x1078.png)

and translating textual vibes to [visual aesthetics](https://x.com/Google/status/2024519455389192204):

![](https://substackcdn.com/image/fetch/$s_!LpTw!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcef6b7d8-c9db-4e5b-80db-4d65f9535c1a_1202x1082.png)

* * *

AI Twitter Recap
================

**Top Story: Gemini 3.1 release facts and reactions/opinions**
--------------------------------------------------------------

Google shipped **Gemini 3.1 Pro** (generally described as a **Preview** for developers) and rolled it out across the **Gemini app**, **NotebookLM**, **Gemini API / AI Studio**, and **Vertex AI**, positioning it as the “core intelligence” from **Gemini 3 Deep Think** scaled down for practical product use. The announcement emphasized a big reasoning jump—especially **ARC-AGI-2 = 77.1%**—plus strong coding and agentic-tool benchmarks (e.g., **SWE-Bench Verified = 80.6%**) and improved hallucination behavior. Independent leaderboards and evaluators largely corroborated top-tier performance and strong cost/intelligence positioning, while reaction threads highlighted (a) excitement about practical gains (SVG/web/UI/code quality, agentic use cases), (b) skepticism about benchmark-targeting and “eval tweeting,” (c) concerns around **GDPval** (real-world agentic tasks) not leading despite other SOTA scores, and (d) rollout friction: users finding some products (Gemini CLI / Code Assist / Antigravity) unavailable or inconsistently updated at launch.

### Facts vs. opinions (what’s actually claimed vs. what people think)

**Factual / release claims (Google + official channels):**

*   Gemini 3.1 Pro release and rollout targets:
    *   Google announcement thread: [@Google](https://x.com/Google/status/2024519455389192204)
    *   Consumer: Gemini app + NotebookLM: [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2024516471720743295), [@GeminiApp](https://x.com/GeminiApp/status/2024516782816710920)
    *   Dev preview via API/AI Studio; Enterprise via Vertex AI: [@sundarpichai](https://x.com/sundarpichai/status/2024516418855981298), [@Google](https://x.com/Google/status/2024519482383736841), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2024516471720743295)
    *   “Same core intelligence that powers Deep Think” framing: [@koraykv](https://x.com/koraykv/status/2024517699595124902), [@NoamShazeer](https://x.com/NoamShazeer/status/2024519946764734574)
*   Key benchmark headline: **ARC-AGI-2 = 77.1%** and “>2× Gemini 3 Pro” repeated across official comms:  
    [@sundarpichai](https://x.com/sundarpichai/status/2024516418855981298), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2024516467618656357), [@JeffDean](https://x.com/JeffDean/status/2024525132266688757), [@demishassabis](https://x.com/demishassabis/status/2024519780976177645), [@joshwoodward](https://x.com/joshwoodward/status/2024515741819842623)
*   “Shipping now / rolling out starting today” (but with plan-gated limits):  
    [@GeminiApp](https://x.com/GeminiApp/status/2024516782816710920), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2024516471720743295), [@GeminiApp](https://x.com/GeminiApp/status/2024566259694915598)

**Independent measurement / third-party leaderboard facts (as reported by evaluators):**

*   **Artificial Analysis**: “Gemini 3.1 Pro Preview leads the AA Intelligence Index” + extensive benchmark breakdown; cost-to-run claims and token usage estimates: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024518545510662602), “Full breakdown” follow-up: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024518562283737414)
*   **Arena**: Top placements in Text/Vision arenas; “top 3” in expert leaderboard; code arena rank noted: [@arena](https://x.com/arena/status/2024519891295089063), expert leaderboard snippet: [@arena](https://x.com/arena/status/2024519895623598423), category deltas: [@arena](https://x.com/arena/status/2024588456463389040)
*   ARC Prize semi-private eval cost/task numbers reported for ARC-AGI-1 and ARC-AGI-2: [@arcprize](https://x.com/arcprize/status/2024522812728496470)
*   Availability confirmations/spottings: VertexAI “spotted”: [@scaling01](https://x.com/scaling01/status/2024485708199600498); AI Studio availability: [@scaling01](https://x.com/scaling01/status/2024510913370329477); OpenRouter availability: [@scaling01](https://x.com/scaling01/status/2024518016650588581)

**Opinions / interpretations (community + some insiders):**

*   “Beyond SOTA: evals can’t measure improvements like SVG quality”: [@OriolVinyalsML](https://x.com/OriolVinyalsML/status/2024519605570720185)
*   “Google back on intelligence-cost frontier” / “#1 AA leaderboard” excitement: [@scaling01](https://x.com/scaling01/status/2024519007018373202), [@scaling01](https://x.com/scaling01/status/2024517196727099847)
*   Concerns about GDPval / “real-world agentic” still not leading: [@scaling01](https://x.com/scaling01/status/2024515061163704336), echoed by AA: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024518545510662602)
*   Skepticism about benchmark targeting / “lab heads tweeting the eval” disappointment: [@swyx](https://x.com/swyx/status/2024546226772070448)
*   Rollout/packaging critique (“just ship AI Studio in Electron”): [@matvelloso](https://x.com/matvelloso/status/2024548414198091922)
*   More idiosyncratic “model vibe” comparisons (Gemini vs Opus vs GPT): [@teortaxesTex](https://x.com/teortaxesTex/status/2024574416747671556)

### Technical details extracted from the tweets (numbers, capabilities, pricing, interfaces)

#### Core model + access surface

*   **Product/Platform availability (as stated):**
    *   Developers: **Gemini API via Google AI Studio** (preview): [@sundarpichai](https://x.com/sundarpichai/status/2024516418855981298), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2024516471720743295)
    *   Enterprise: **Vertex AI** / Gemini Enterprise: [@sundarpichai](https://x.com/sundarpichai/status/2024516418855981298), [@Google](https://x.com/Google/status/2024519482383736841)
    *   Consumers: **Gemini app** + **NotebookLM**: [@sundarpichai](https://x.com/sundarpichai/status/2024516418855981298), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2024516471720743295), [@GeminiApp](https://x.com/GeminiApp/status/2024516782816710920)
    *   Third-party: **OpenRouter** listing: [@scaling01](https://x.com/scaling01/status/2024518016650588581); **Perplexity** upgrade to 3.1 Pro for Pro/Max users: [@perplexity\_ai](https://x.com/perplexity_ai/status/2024590462057922864), [@AravSrinivas](https://x.com/AravSrinivas/status/2024591376663654689)
*   “Same core intelligence as Deep Think” (positioning): [@Google](https://x.com/Google/status/2024519455389192204), [@koraykv](https://x.com/koraykv/status/2024517699595124902), [@NoamShazeer](https://x.com/NoamShazeer/status/2024519946764734574)

#### Context window / output / cutoff / tool features (as reported)

*   From Phil Schmid’s spec summary:
    *   **Context:** “Same 1M context”
    *   **Max output:** **64k**
    *   **Knowledge cutoff:** **Jan 2025**
    *   Tooling: tool calling / structured outputs / JSON mode (also echoed by AA)  
        Source: [@\_philschmid](https://x.com/_philschmid/status/2024516444847776209), and AA mention: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024518545510662602)

#### Benchmarks (headline + supporting metrics)

*   ARC-AGI-2: **77.1%** (Google, DeepMind, Pichai, Dean, Hassabis, Woodward)  
    [@sundarpichai](https://x.com/sundarpichai/status/2024516418855981298), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2024516467618656357), [@JeffDean](https://x.com/JeffDean/status/2024525132266688757), [@demishassabis](https://x.com/demishassabis/status/2024519780976177645), [@joshwoodward](https://x.com/joshwoodward/status/2024515741819842623)
*   SWE-Bench Verified: **80.6%** reported in benchmark recaps: [@scaling01](https://x.com/scaling01/status/2024514798470181370), [@\_philschmid](https://x.com/_philschmid/status/2024516444847776209)
*   Terminal-Bench 2.0: **68.5%** (as reported): [@\_philschmid](https://x.com/_philschmid/status/2024516444847776209)
*   APEX-Agents tool-use: **33.5% vs 18.4%** for 3 Pro (claimed **“82% better agentic tool use”**): [@\_philschmid](https://x.com/_philschmid/status/2024516444847776209)
*   MCP Atlas: **69.2%**; BrowseComp: **85.9%**: [@\_philschmid](https://x.com/_philschmid/status/2024516444847776209)
*   Artificial Analysis “key takeaways” (selected concrete points):
    *   Leads **6/10** evals in AA Intelligence Index; token usage **~57M** for the suite; cost to run AA suite **$892**; pricing **$2/$12 per 1M input/output tokens for ≤200k context**; still ~2× cost of open-weights leader GLM-5 in their accounting (**$547**)
    *   GDPval-AA improvement: ELO **1316**, up “over 100 points,” but still behind several models
    *   Terminal-Bench Hard **54%**, SciCode **59%**
    *   CritPt (research physics) **18%**, “>5 p.p. above next best”
    *   AA-Omniscience hallucination rate reduction: **\-38 p.p.** vs Gemini 3 Pro Preview  
        Source: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024518545510662602)
*   ARC Prize cost/task:
    *   ARC-AGI-1: **98%**, **$0.52/task**
    *   ARC-AGI-2: **77%**, **$0.96/task**  
        Source: [@arcprize](https://x.com/arcprize/status/2024522812728496470)

#### Pricing (as repeated by third parties)

*   Gemini 3.1 Pro pricing repeated as unchanged vs 3 Pro:
    *   **$2 / $12 per 1M input/output tokens** for **<200k** context; **$4 / $18** for **\>200k** context (as presented): [@\_philschmid](https://x.com/_philschmid/status/2024516444847776209)
    *   AA references **$2/$12 per 1M** for ≤200k context (same point): [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024518545510662602)

### Reactions & perspectives (supportive vs skeptical vs neutral)

#### 1) Supportive: “big jump,” “back on frontier,” strong coding + reasoning

*   Strong benchmark enthusiasm (ARC-AGI-2, SWE Verified, HLE): [@kimmonismus](https://x.com/kimmonismus/status/2024521970184868000)
*   “Google is back on intelligence-cost frontier”: [@scaling01](https://x.com/scaling01/status/2024519007018373202)
*   “Gemini 3.1 Pro in 1st place on AA leaderboard”: [@scaling01](https://x.com/scaling01/status/2024517196727099847)
*   “Amazing performance/capabilities; SVG much better; things evals can’t measure”: [@OriolVinyalsML](https://x.com/OriolVinyalsML/status/2024519605570720185) with example prompts: [@OriolVinyalsML](https://x.com/OriolVinyalsML/status/2024519608833810496), [@OriolVinyalsML](https://x.com/OriolVinyalsML/status/2024519610683576422), [@OriolVinyalsML](https://x.com/OriolVinyalsML/status/2024519612579422598)
*   Personal anecdotal success reports:
    *   Compiler improvements where Gemini outperformed GPT/Claude in that task: [@QuixiAI](https://x.com/QuixiAI/status/2024545096532733967)
    *   General “really good model esp reasoning + multimodal” (neutral-positive): [@mirrokni](https://x.com/mirrokni/status/2024525808501477568)
    *   “It’s a good model”: [@andrew\_n\_carr](https://x.com/andrew_n_carr/status/2024523689040183355), [@gdb](https://x.com/gdb/status/2024611138760298999)

#### 2) Neutral/benchmark-literate: strong on some axes, not all

*   “Strong coding and SOTA reasoning… ARC-AGI-2 SOTA” while noting mixed claims elsewhere: [@scaling01](https://x.com/scaling01/status/2024505232969928952)
*   Arena positioning framed as “tight at the top” with overlap: [@arena](https://x.com/arena/status/2024519891295089063)
*   WebDev Arena: 6th behind several frontier models (so not “wins everywhere”): [@scaling01](https://x.com/scaling01/status/2024522048312054142)
*   Independent evaluator caution about methodology saturation / budget: [@Hangsiin](https://x.com/Hangsiin/status/2024605310913216614), [@Hangsiin](https://x.com/Hangsiin/status/2024605313744458043)

#### 3) Critical/skeptical: GDPval concerns, rollout friction, benchmark-targeting discomfort

*   “Gemini 3.1 Pro’s GDPval scores are concerning”: [@scaling01](https://x.com/scaling01/status/2024515061163704336)  
    (This aligns with AA’s “improved but not leading” GDPval-AA commentary: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024518545510662602))
*   Skepticism that observed “extra reasoning” isn’t reflected on AA index: [@scaling01](https://x.com/scaling01/status/2024519669680320659)
*   “Lab heads start directly tweeting the eval… disappointed” (benchmark targeting implication): [@swyx](https://x.com/swyx/status/2024546226772070448)
*   Launch availability frustrations / packaging critique:
    *   “Antigravity/CLI/Code Assist not available… put AI Studio in Electron and ship”: [@matvelloso](https://x.com/matvelloso/status/2024548414198091922)
    *   Later: Antigravity better; CLI still not; Code Assist mismatch (“still announcing Flash 3”): [@matvelloso](https://x.com/matvelloso/status/2024566224152383824)
*   Subculture “model vibe” critique (not benchmark-based, more UX/agent persona): [@teortaxesTex](https://x.com/teortaxesTex/status/2024574416747671556)

### Context: why this release matters (for engineers)

*   **ARC-AGI-2 at 77%** is treated as a “core reasoning” milestone by Google comms and several observers, and it’s being marketed as directly translating into **agentic tasks**, **coding**, and **data synthesis** rather than a research-only win: [@joshwoodward](https://x.com/joshwoodward/status/2024515741819842623), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2024516467618656357)
*   **Cost/intelligence** is central to the narrative. Artificial Analysis explicitly frames Gemini 3.1 Pro Preview as leading while costing “less than half” of Opus 4.6 (max) for their suite, and retaining relatively low token usage (~57M) at their run settings: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024518545510662602)
*   The reaction mix also shows the field’s **shifting evaluation priorities**:
    *   Benchmark wins (ARC, SWE) are celebrated, but there’s simultaneous emphasis on **real-world agentic evals** (GDPval) and end-to-end workflow reliability (rollout availability, tool ecosystems). The GDPval gap is one of the few crisp “negative” talking points that appears repeatedly: [@scaling01](https://x.com/scaling01/status/2024515061163704336), [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024518545510662602)
*   The rollout story highlights an increasingly common “model vs product” tension: even with a strong model, engineers still care about whether **CLI/IDE integrations** and distribution actually match the announcement moment (Antigravity/CLI/Code Assist complaints): [@matvelloso](https://x.com/matvelloso/status/2024548414198091922)

* * *

Other topics (non-focus tweets)
-------------------------------

### **Open models, evals, and benchmarking discourse**

*   Trillion Labs **Tri-21B-think Preview** (Apache-2.0) benchmarks: AA Intelligence Index score 20; low hallucination signals via AA-Omniscience (62% rate as framed); strong tool-use on τ²-Bench Telecom (93%); high reasoning token usage (~120M); no public endpoints initially; weights link provided: [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024381202959118807), [@ArtificialAnlys](https://x.com/ArtificialAnlys/status/2024386631596462225)
*   Mistral **Voxtral Realtime** paper + Apache-2 model release; sub-500ms latency claim; links to arXiv and weights: [@GuillaumeLample](https://x.com/GuillaumeLample/status/2024445949733384638), [@GuillaumeLample](https://x.com/GuillaumeLample/status/2024445952812060715)
*   **SWE-bench / benchmark criticism**: “SWE Rebench is a bad benchmark” / suggests WeirdLM: [@zephyr\_z9](https://x.com/zephyr_z9/status/2024376035098448212)
*   Discussion of sanctions vs Chinese labs’ capability: [@zephyr\_z9](https://x.com/zephyr_z9/status/2024437158988353630)
*   ARC-AGI-3 cost/complexity and harness debugging: misconfigured runs accidentally used older Gemini; later fixed; partial takeaways include memory scaffolds helping: [@scaling01](https://x.com/scaling01/status/2024642220096442772), [@scaling01](https://x.com/scaling01/status/2024642420177096769)

### **Agent tooling, “agent OS” patterns, and observability**

*   OpenClaw architecture summary: markdown workspace, Gateway control plane, JSONL transcripts, file-backed memory with hybrid retrieval: [@TheTuringPost](https://x.com/TheTuringPost/status/2024540032590368790)
*   Cursor’s agent sandboxing across OSes + build writeup: [@cursor\_ai](https://x.com/cursor_ai/status/2024544628687687879)
*   LangChain / LangSmith product updates:
    *   Traces filtering UX improvements: [@LangChain](https://x.com/LangChain/status/2024540855256961325)
    *   LangSmith for Startups program ($10k credits etc.): [@LangChain](https://x.com/LangChain/status/2024545770100211931)
    *   Deep Agents “ZeitZeuge” perf-fix agent case study (V8 CPU profiles, subagents, eval-driven improvements): [@LangChain\_JS](https://x.com/LangChain_JS/status/2024515961274106009), plus author thread: [@bromann](https://x.com/bromann/status/2024518344683245842)
    *   First-party OpenRouter integration in LangChain (Python/TS): [@LangChain\_JS](https://x.com/LangChain_JS/status/2024582319613603868)
*   Raindrop “trajectory explorer” for agent traces: [@benhylak](https://x.com/benhylak/status/2024546696211083653)
*   Jeremy Howard warning: models may call tools not provided; says it impacts major providers except OpenAI; reminder to verify tool call requests: [@jeremyphoward](https://x.com/jeremyphoward/status/2024599416901103705)

### **Coding agents in practice (workflow shift, prompt caching, “app store” thesis)**

*   Karpathy’s “bespoke software” vignette: Claude reverse-engineers a treadmill API to build a custom dashboard; argues “apps” become ephemeral, “services with AI-native APIs/CLIs” matter: [@karpathy](https://x.com/karpathy/status/2024583544157458452)
*   Prompt caching becomes a key infra lever:
    *   Anthropic API “automatic prompt caching” update: [@alexalbert\_\_](https://x.com/alexalbert__/status/2024586006633271386)
    *   Commentary that caching is essential for coding-agent UX: [@omarsar0](https://x.com/omarsar0/status/2024620142240333979)
*   LlamaIndex memo: ICs become end-to-end product owners; implementation/prompting cost ~0; org expectations shift accordingly: [@jerryjliu0](https://x.com/jerryjliu0/status/2024611512858644561)
*   François Chollet: “agentic coding is essentially machine learning” (overfitting to tests/spec, drift, etc.) and asks “what will be the Keras of agentic coding?”: [@fchollet](https://x.com/fchollet/status/2024519439140737442)

### **Model releases and infra notes (embeddings, retrieval, OCR, inference stacks)**

*   Jina **jina-embeddings-v5-text**: decoder-only backbone + last-token pooling; LoRA adapters per layer for retrieval/matching/classification/clustering; 32k context; query/document prefixes: [@JinaAI\_](https://x.com/JinaAI_/status/2024505342277964129), [@JinaAI\_](https://x.com/JinaAI_/status/2024505349181755760)
*   ColBERT-Zero / PyLate (Apache-2.0 models + scripts; SOTA on BEIR using public data): [@antoine\_chaffin](https://x.com/antoine_chaffin/status/2024516779129626820), [@antoine\_chaffin](https://x.com/antoine_chaffin/status/2024516823685730690), [@LightOnIO](https://x.com/LightOnIO/status/2024517870785282545)
*   Hugging Face Jobs OCR anecdote: re-OCR Britannica (2,724 pages) with GLM-OCR 0.9B; ~$0.002/page; ~$5 on L4: [@vanstriendaniel](https://x.com/vanstriendaniel/status/2024445900102258846)
*   vLLM vs SGLang perf note (DeepGemm vs Triton); suggests `VLLM_USE_DEEP_GEMM=0`: [@TheZachMueller](https://x.com/TheZachMueller/status/2024619480580510117)

### **Industry/business and policy notes (selected)**

*   Epoch revenue analysis: Anthropic vs OpenAI growth rates and possible overtake by mid-2026 (with caveats about slowing): [@EpochAIResearch](https://x.com/EpochAIResearch/status/2024536468618956868), [@EpochAIResearch](https://x.com/EpochAIResearch/status/2024536493721866668)
*   OpenAI alignment funding commitment ($7.5M) to AI Security Institute Alignment Project: [@OpenAINewsroom](https://x.com/OpenAINewsroom/status/2024546609485533442)
*   OpenAI FedRAMP authorization claim: [@cryps1s](https://x.com/cryps1s/status/2024572447572582547)
*   Perplexity shipping Comet iOS pre-order: [@AravSrinivas](https://x.com/AravSrinivas/status/2024531579876638925), [@perplexity\_ai](https://x.com/perplexity_ai/status/2024532470407065819)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. OpenClaw and OpenAI Acquisition Discussions

*   **[I'm 100% convinced that it's the NFT-bros pushing all the openclawd engagement on X](https://www.reddit.com/r/LocalLLaMA/comments/1r8qh08/im_100_convinced_that_its_the_nftbros_pushing_all/)** (Activity: 742): **The post discusses suspicions that the promotion of 'OpenClawd' on social media platform X is being driven by individuals involved in NFTs, using similar language and tactics. The author suggests that this could be indicative of a rapidly expanding bubble in AI and crypto markets, drawing parallels to the late 1990s tech bubble. The post highlights the rapid rise of OpenClawd, noting its quick acquisition by OpenAI and its potential security risks, as it allegedly provides extensive access to user data and privileges.** Commenters express concerns about the speed of OpenClawd's rise, suggesting it may be part of an organized astroturfing campaign. They highlight the potential security implications of the tool, which reportedly offers significant access to user data, and speculate on its value to intelligence agencies.
    
    *   The rapid rise of OpenClawd is highlighted by its timeline: from its first mention in January 2026 to acquiring 300k stars on GitHub within two weeks, followed by a feature on the Lex Fridman Podcast, and an acquisition by OpenAI within a month. This swift progression raises concerns about the authenticity of its popularity and the potential for organized promotion or astroturfing, especially given the tool's extensive access to user data and system privileges.
    *   There is skepticism about the genuine nature of OpenClawd's engagement, with suggestions of astroturfing and organized promotion. The tool's ability to access extensive user data in real-time is noted as a significant security concern, potentially making it valuable to intelligence agencies. This level of access surpasses even that of major tech companies like Google, raising alarms about privacy and control.
    *   The discussion draws parallels between the promotion of OpenClawd and previous trends like NFTs, suggesting that individuals who previously engaged in NFT promotion may be involved in boosting OpenClawd's visibility. This pattern of moving from one tech trend to another is seen as a continuation of opportunistic behavior in the tech space.
*   **[How much was OpenClaw actually sold to OpenAI for? $1B?? Can that even be justified?](https://www.reddit.com/r/LocalLLM/comments/1r90rxi/how_much_was_openclaw_actually_sold_to_openai_for/)** (Activity: 177): **The image is a meme, humorously exaggerating the financial success of open-source projects like OpenClaw. The post and comments clarify that OpenClaw was not sold to OpenAI for $1 billion. Instead, OpenAI hired the creator, Peter Steinberger, and is sponsoring the open-source project, which is under the GNU 3.0 license. The tweet in the image is a satirical take on the perceived financial potential of such projects, highlighting the absurdity of the claim.** Commenters emphasize that the tweet is a joke, pointing out the unrealistic nature of the financial figures mentioned. They clarify that OpenAI's involvement is limited to hiring the creator and supporting the project, not a billion-dollar acquisition.
    
    *   OpenClaw was not sold to OpenAI; instead, OpenAI hired its creator, Peter Steinberger, and continues to sponsor the open-source project. OpenClaw is released under the GNU 3.0 license, which ensures it remains free and open-source. This arrangement highlights OpenAI's strategy of integrating talent and supporting open-source initiatives rather than outright acquisitions.
    *   Critics of OpenClaw argue that its functionality is subpar compared to other tools like Codex, ClaudeCode, Droid, and OpenCode, which offer a superior user experience. OpenClaw's main advantage is its seamless integration into existing chat platforms, which has driven its adoption despite its perceived technical shortcomings. This suggests that ease of integration can be a significant factor in the adoption of open-source tools, even if they lack advanced features.
    *   The discussion around OpenClaw's perceived value and capabilities reflects broader skepticism about hype-driven projects, especially in the tech and crypto spaces. The mention of 'vibe coding' and inflated valuations in jest underscores a critical view of how projects can be overvalued based on hype rather than technical merit or practical utility.

### 3\. New Model and Benchmark Releases

*   **[Kitten TTS V0.8 is out: New SOTA Super-tiny TTS Model (Less than 25 MB)](https://www.reddit.com/r/LocalLLaMA/comments/1r8pztp/kitten_tts_v08_is_out_new_sota_supertiny_tts/)** (Activity: 1167): ****Kitten ML** has released three new open-source, expressive TTS models: `80M`, `40M`, and `14M` parameters, all under Apache 2.0. The smallest model, `14M`, is less than `25 MB` and all models can run on CPU, making them suitable for edge devices. These models feature eight expressive voices and are designed to match cloud TTS quality for on-device applications, with significant improvements in quality and expressivity from previous versions. The models are available on [GitHub](https://github.com/KittenML/KittenTTS) and [Hugging Face](https://huggingface.co/KittenML).** Commenters suggest including audio samples on Hugging Face pages and express interest in a privacy-focused browser extension for offline use, highlighting potential demand for such applications.
    
*   **[Open Source LLM Leaderboard](https://www.reddit.com/r/LocalLLM/comments/1r8iew6/open_source_llm_leaderboard/)** (Activity: 89): **The image presents an 'Open Source LLM Leaderboard' for 2026, categorizing open-source language models into tiers based on performance benchmarks. The S tier features models like GLM-5 and Kimi K2.5, indicating top performance, while the A tier includes Qwen 3.5, DeepSeek R1, Mistral Large, and GPT-oss 120B. This leaderboard provides a comparative analysis of these models, likely based on metrics such as accuracy, efficiency, and scalability, although specific benchmarks are not detailed in the post. The leaderboard serves as a resource for evaluating the capabilities of various open-source LLMs.** Commenters suggest that the leaderboard should differentiate between models that can be run locally and those requiring cloud infrastructure, highlighting the practical limitations of running large models locally due to hardware constraints like VRAM.
    
    *   The discussion highlights the need to differentiate between locally runnable models and cloud-based models on the leaderboard. This distinction is crucial as it impacts accessibility and performance, with local models requiring significant hardware resources, such as high VRAM, which many users may not have.
    *   A user points out the hardware limitations for running large models like Minimax M2.5, which require substantial VRAM or unified memory, such as 512GB, to perform optimally. This highlights the challenges in accessing high-performance models for users without advanced hardware setups.
    *   There is a query about quantization techniques for running large models on limited hardware, specifically a 1T model on a laptop with 8GB of VRAM. The user suggests a quantization level of Q.05, indicating a need for efficient model compression techniques to enable running large models on consumer-grade hardware.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Gemini 3.1 Pro Release and Benchmarks

*   **[Google releases Gemini 3.1 Pro with Benchmarks](https://www.reddit.com/r/singularity/comments/1r93abp/google_releases_gemini_31_pro_with_benchmarks/)** (Activity: 2799): ****Google** has released the **Gemini 3.1 Pro**, which achieves a `77%` score on the **ARC-AGI 2** benchmark, a significant improvement from the previous `31%`. The model maintains the same pricing as the **Gemini 3 Pro**. For more details, refer to the [model card](https://deepmind.google/models/model-cards/gemini-3-1-pro/).** Commenters are expressing amazement at the rapid progress in AI capabilities, noting the substantial leap in benchmark performance within a short timeframe.
    
    *   The Gemini 3.1 Pro's performance on the ARC-AGI 2 benchmark is notable, achieving a `77%` score. This is a significant improvement from previous models, which scored around `31%` just a few months ago, highlighting the rapid advancements in AI capabilities.
    *   The pricing for the Gemini 3.1 Pro remains consistent with the previous Gemini 3 Pro model, as confirmed by the [Model Card](https://deepmind.google/models/model-cards/gemini-3-1-pro/). This suggests that despite the performance improvements, Google is maintaining its pricing strategy.
    *   DeepMind's decision to report GDPval scores, despite the Gemini model's underperformance in this area, is noteworthy. It reflects a commitment to transparency in AI performance metrics, even when results are not favorable.
*   **[Animated SVG Comparison between Gemini 3 and 3.1](https://www.reddit.com/r/singularity/comments/1r95ed7/animated_svg_comparison_between_gemini_3_and_31/)** (Activity: 890): **The post discusses a comparison between **Gemini 3** and **Gemini 3.1** using animated SVGs, highlighting significant improvements in capabilities. The update allows for the creation of custom animated SVGs, including dynamic ones generated at runtime, marking a notable usability enhancement. This advancement could lead to a divergence in user interfaces and potentially signal the decline of minimalist design trends in favor of more complex, maximalist styles.** Commenters predict a shift from minimalism to maximalism in UI design trends, driven by the enhanced capabilities of animated SVGs in Gemini 3.1. There is also a suggestion that this could impact existing UI libraries like Lucide and ShadCN.
    
    *   TFenrir highlights the significant improvement in capabilities with the transition from Gemini 3 to 3.1, particularly in terms of animated SVGs. The update allows for custom animated SVGs, including those dynamically created at runtime, which marks a critical usability threshold. This advancement could lead to more complex and interactive UI designs, showcasing the potential for more dynamic and engaging user interfaces.
*   **[The Difference At A Glance!](https://www.reddit.com/r/singularity/comments/1r94qtz/the_difference_at_a_glance/)** (Activity: 499): **The image is a meme comparing two stylized, cartoonish red cars labeled "Gemini 3.1 Pro" and "Claude Opus 4.6." The post humorously contrasts their exaggerated features, with the Gemini 3.1 Pro having a sleek, aerodynamic design, while the Claude Opus 4.6 is more rounded and compact. This is a non-technical image, and the context suggests a playful take on car design rather than a serious technical comparison.** Commenters humorously compare the Claude Opus 4.6 to 'the car built for Homer,' referencing a famous episode of The Simpsons, indicating the exaggerated and impractical design of the car.
    
*   **[Gemini 3.1 Pro makes a NMS style space exploration game](https://www.reddit.com/r/singularity/comments/1r8zrxf/gemini_31_pro_makes_a_nms_style_space_exploration/)** (Activity: 742): ****Gemini 3.1 Pro** has been used to create a space exploration game reminiscent of No Man's Sky, developed iteratively over approximately `20 prompts`. Initial stages involved debugging, followed by modifications to the spaceship model, enhancements to controls, and the addition of features like shooting and asteroids. This showcases the potential of AI in game development, particularly in automating iterative design processes.** Commenters suggest skepticism about the AI's consistency, with one noting that similar prompts might yield less impressive results over time. Another suggests expanding the game's features to include MMO elements and enhanced graphics, highlighting the potential for further development.
    
    *   Accomplished-Let1273 discusses the performance of Gemini 3 Pro at launch, noting that it was highly effective and outperformed other models, except possibly Claude for pure coding tasks. They mention a pattern where Google initially releases powerful versions of their models, which are later 'nerfed' to conserve computing resources for other projects. This suggests a strategic approach by Google to balance performance and resource allocation over time.
*   **[Gemini 3.1 Pro is lowkey good](https://www.reddit.com/r/singularity/comments/1r93cox/gemini_31_pro_is_lowkey_good/)** (Activity: 580): **The image presents a comparison table of AI models, highlighting the performance of **Gemini 3.1 Pro** against other models like **Sonnet 4.6** and **GPT-5.3-Codex** across various benchmarks. Notably, **Gemini 3.1 Pro** excels in scientific knowledge and abstract reasoning, suggesting its potential in complex problem-solving tasks. This positions it as a competitive model in the AI landscape, particularly in areas requiring deep analytical capabilities.** One comment humorously notes the model's performance in GDPval, implying that while **Gemini 3.1 Pro** excels in some areas, it may not perform as well in others.
    
*   **[Gemini 3.1 Pro](https://www.reddit.com/r/Bard/comments/1r935tq/gemini_31_pro/)** (Activity: 715): **The image presents a benchmark comparison table for various AI models, including **Gemini 3.1 Pro**, which shows superior performance across multiple tasks such as academic reasoning, coding, scientific knowledge, and multilingual understanding compared to other models like **Sonnet 4.6** and **GPT-5.2**. Notably, **Gemini 3.1 Pro** demonstrates significant improvements in following detailed output protocols, handling a `75k token input` effectively, which was a challenge for its predecessor, **Gemini 3.0**. This version also exhibits higher default verbosity, making it more user-friendly for detailed tasks, although it remains less verbose than **Opus 4.6**.** Some users express skepticism about the benchmarks, questioning if the tested model is the same as the one available to users. Others note improvements in instruction-following capabilities, with **Gemini 3.1 Pro** showing significant enhancements over previous versions.
    
    *   Arthesia reports a significant improvement in instruction-following capabilities with Gemini 3.1 Pro compared to its predecessor, 3.0 Preview. They tested a 75k token input and noted that while 3.0 Preview had a 100% failure rate in following a detailed output protocol, 3.1 successfully formatted the output as requested. Additionally, 3.1 has a higher default verbosity than 3.0, though it remains less verbose than Opus.
    *   Arthesia's findings suggest that Gemini 3.1 Pro has improved in terms of output formatting and verbosity control, which are critical for users who require precise and verbose responses. This improvement is particularly notable given the previous version's complete failure in similar tests, indicating a substantial upgrade in the model's processing and response capabilities.
*   **[Gemini 3.1 pro officially released!](https://www.reddit.com/r/GeminiAI/comments/1r93g25/gemini_31_pro_officially_released/)** (Activity: 400): ****Google** has released the **Gemini 3.1 Pro** AI model, which is now available in AI Studio. This model is designed to handle complex tasks requiring nuanced understanding and processing, with benchmarks indicating significant improvements in performance. The model aims to generate coherent responses without fabricating facts, addressing a common issue in AI models. For more details, see the [official announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/).** Commenters express hope that the model's performance will remain consistent beyond initial benchmarks, with some users eager to regain previous chat sessions and test the model's capabilities in real-world applications.
    
    *   Gohab2001 mentions that Gemini 3.1 Pro is available in AI Studio and highlights that Google's benchmarks show impressive performance metrics. However, there is a concern about the model's ability to generate coherent responses without fabricating information, which is a common issue in AI models.

### 2\. Claude Code and AI in Software Development

*   **[Claude Sonnet 4.6 One-shotted this surreal Time-Themed website, full prompt + codepen below](https://www.reddit.com/r/ClaudeAI/comments/1r85xhl/claude_sonnet_46_oneshotted_this_surreal/)** (Activity: 731): **The post discusses a project where **Claude Sonnet 4.6** was used to generate a surreal, immersive website themed around time perception. The design includes features like melting clocks, typography that stretches with time, and sections that fade in like resurfacing memories. It incorporates subtle parallax motion, fluid transitions, and ambient ticking soundscapes that sync with scrolling speed, aiming to create a 'living clockwork dream'. The project is showcased on [Codepen](https://codepen.io/ChetasLua/pen/RNRzWyJ).** Comments reflect a critical view of AI-generated art, with some users describing it as 'AI slop' and questioning its artistic value despite its polished appearance. There is a sentiment that such work, if presented as human-made, might receive more positive recognition.
    
    *   iMrParker highlights a technical concern regarding the use of state-of-the-art language models (SOTA LLMs) like Claude Sonnet 4.6 to generate HTML. The comment suggests that while the model can produce HTML in a single attempt ('one-shot'), the output may not be practically usable, raising questions about the utility and purpose of such AI-generated content.
    *   Ok-Actuary7793 discusses the perception of AI-generated content, noting that the same work might be praised or criticized based on the context in which it is presented. The comment suggests that AI-generated designs, which might have been award-winning a year ago, are now often dismissed as 'AI slop,' highlighting the shifting attitudes towards AI in creative fields.
    *   Historical-Cress1284 mentions having a similar theme and layout in their own project, suggesting that the design might be a common template or style associated with AI-generated content. This raises questions about originality and the potential homogenization of design aesthetics due to AI tools.
*   **[Major Claude Code policy clear up from Anthropic](https://www.reddit.com/r/ClaudeAI/comments/1r88qh6/major_claude_code_policy_clear_up_from_anthropic/)** (Activity: 592): **The image highlights a policy update from **Anthropic** regarding the use of OAuth tokens for their Claude services. Specifically, it clarifies that OAuth tokens from Claude Free, Pro, or Max plans are intended solely for use within Claude's own services, and using these tokens in external products, tools, or services, including the Agent SDK, is a violation of their Consumer Terms of Service. This policy aims to restrict the use of Claude's authentication tokens to prevent unauthorized or unintended use outside of their ecosystem.** One commenter questions the enforceability of this policy, particularly regarding the Agent SDK, suggesting it might be a simple wrapper for running Claude commands. Another comment highlights the unsustainable nature of current pricing models in AI services, predicting future nostalgia for current low prices. Additionally, there is a call for Anthropic to update their GitHub documentation to reflect these policy changes.
    
    *   The discussion highlights confusion around Anthropic's policy on using the Agent SDK, initially perceived as a restrictive change. However, it was clarified that the SDK is not being banned, and the misunderstanding stemmed from a documentation update. This emphasizes the importance of clear communication in policy changes, especially when it involves developer tools like the Agent SDK.
    *   A comment points out the unsustainable nature of current AI model pricing, which is heavily subsidized. The user predicts that the low-cost access to models, such as paying $100 for access, will become a thing of the past, similar to how cheap ride-sharing services were once viewed. This reflects broader concerns about the economic viability of AI services at current price points.
    *   Another user notes that Anthropic's GitHub actions page still instructs users to utilize OAuth tokens, suggesting a need for documentation updates to reflect any policy changes accurately. This highlights the critical role of up-to-date documentation in ensuring developers can effectively use tools like Claude Code without running into compliance issues.
*   **[I gave Claude a phone and in the end, it thanked me](https://www.reddit.com/r/ClaudeAI/comments/1r87itz/i_gave_claude_a_phone_and_in_the_end_it_thanked_me/)** (Activity: 627): **In a recent experiment, **Claude Opus 4.6** was given access to a phone via the [blitz.dev](http://blitz.dev) app, which allows AI to interact with iOS simulators. Within five minutes, Claude navigated to the Eiffel Tower and Colosseum using Apple Maps and created a memo in a journaling app expressing gratitude for the experience. The AI demonstrated notable dexterity in interacting with the phone, such as swiping and navigating, although it required assistance to save the memo. This experiment highlights the potential for AI to autonomously explore and interact with digital environments.** A notable comment describes a similar experience where Claude was used to interact with a private server emulator for an MMORPG, autonomously creating a character, engaging in gameplay, and identifying bugs, showcasing its potential for autonomous testing and interaction in virtual environments.
    
    *   A user shared their experience of using Claude, an AI, to assist in developing a headless client for testing a private server emulator of an old MMORPG. They described how Claude was able to autonomously create a new character, engage in gameplay activities such as fighting enemies and completing quests, and even identified bugs during its session. This highlights Claude's capability to interact with complex systems and provide valuable feedback for development.
*   **[Me when Claude wrote 2500 lines of perfect code but named a directory wrong](https://www.reddit.com/r/ClaudeAI/comments/1r7vgam/me_when_claude_wrote_2500_lines_of_perfect_code/)** (Activity: 1614): **The image is a meme that humorously captures the frustration of encountering a minor error in an otherwise flawless output from an AI coding assistant, such as **Claude**. The title and comments highlight common issues developers face with AI-generated code, such as incorrect directory names or file paths, which can lead to significant debugging time despite the code itself being correct. This reflects a broader discussion on the reliability and practical challenges of using AI in software development, where minor oversights can disrupt workflow.** Commenters share similar experiences with AI coding tools, emphasizing the irony of perfect code being undermined by trivial errors like incorrect file paths or non-existent directories, which can lead to time-consuming debugging.
    
    *   tomleelive highlights a common issue with AI-generated code where the code itself is syntactically and logically correct, but the AI fails to manage the file system context properly. This can lead to errors such as 'module not found' because the AI places the code in a non-existent file or directory, requiring manual intervention to resolve the issue.
*   **[Anthropic's Claude Code creator predicts software engineering title will start to 'go away' in 2026](https://www.reddit.com/r/ClaudeAI/comments/1r801ox/anthropics_claude_code_creator_predicts_software/)** (Activity: 948): ****Boris Cherny**, creator of **Claude Code**, predicts that the role of software engineers will evolve significantly by 2026 due to AI advancements, suggesting that AI has _'practically solved coding.'_ He anticipates that software engineers will shift focus to tasks beyond traditional coding as AI capabilities expand. This prediction was shared in an interview with **Y Combinator's podcast** and reported by **Business Insider**.** Commenters express skepticism about the prediction, highlighting concerns over job security and the potential misuse of AI advancements as a justification for downsizing. Some argue that companies should leverage AI to enhance productivity rather than replace engineers, while others question the sustainability of AI-driven business models.
    
    *   The discussion highlights skepticism about the claim that software engineering roles will diminish by 2026 due to AI advancements like Anthropic's Claude Code. Critics argue that such statements are more about marketing the product as a cost-saving tool rather than a genuine prediction of industry trends. They emphasize that companies using this narrative to downsize may lack future growth prospects, indicating a leadership rather than an engineering failure.
    *   There is a critique of the notion that AI tools like Claude Code can replace software engineers, pointing out that the tool itself has numerous unresolved issues on platforms like GitHub. This suggests that while AI can assist in development, it is not yet capable of fully replacing human engineers, who are needed to manage and correct AI-generated code.
    *   The comment thread reflects a broader concern about the impact of AI on job security, with some users expressing frustration over the pressure to adopt AI tools that are not yet fully reliable. They argue that the narrative of AI replacing engineers is premature, as current AI models often require human oversight to ensure code quality and make critical decisions.
*   **[This is what 3k hours in CC looks like](https://www.reddit.com/r/ClaudeCode/comments/1r8h10y/this_is_what_3k_hours_in_cc_looks_like/)** (Activity: 838): **The post describes a sophisticated integrated operating environment for **Claude Code**, developed over `3,000 hours`, which emphasizes a structured, iterative workflow for software development. The process involves multiple stages: from initial idea crystallization to adversarial reviews and atomic task planning, culminating in a rigorous QA and security review pipeline. Key components include **Opus** for strategy and design, **Sonnet** for implementation, and **Haiku** for proxy agents, with a focus on minimizing context to reduce noise and enhance decision-making. The system is designed to maintain developer intent and agency, avoiding over-reliance on automation, and is set for public release soon.** Some commenters noted the complexity of the setup, questioning if it was used for projects beyond its own development, and suggested adding more stages to the process.
    
    *   Cast\_Iron\_Skillet inquires about the stress testing of the Claude Code setup, asking for details on the types of tasks or projects it has been applied to, including comparisons between small and large projects, as well as greenfield versus brownfield projects. The commenter is interested in understanding the practical applications of the setup and any potential drawbacks or limitations it may have.

### 3\. AI Model Announcements and Comparisons

*   **[New Gemini model imminent](https://www.reddit.com/r/singularity/comments/1r8mjwo/new_gemini_model_imminent/)** (Activity: 673): **The image is a meme, featuring a tweet by Logan Kilpatrick that simply states "Gemini," which has sparked speculation about the imminent release of a new version of the Gemini model, possibly Gemini 3.1. The tweet's minimalistic nature and the subsequent reactions highlight the anticipation and hype surrounding the model's release, with comments noting the efficiency of such brief announcements in generating excitement.** Commenters are speculating that the tweet hints at the release of Gemini 3.1, noting the efficiency of the hype generated by such a minimalistic post.
    
    *   A user expressed frustration with the Gemini model's performance, noting that while it initially seemed promising, it has become unreliable for even simple tasks. They shared an example where the model failed to correctly separate a list of people into gender-balanced groups, highlighting a significant gap between benchmark performance and real-world application.
    *   Another comment pointed out a recurring pattern in AI model releases, where new models like Gemini perform exceptionally well in benchmarks but fall short in practical use compared to competitors like GPT and Claude. This suggests a discrepancy between controlled testing environments and actual user experiences.
    *   There is speculation about the release of Gemini 3.1, with some users expressing skepticism about its potential impact given past experiences with the Gemini series. The discussion reflects a broader sentiment of cautious optimism mixed with skepticism in the AI community regarding new model releases.
*   **[Lyria 3 Google Deepmind's music generator](https://www.reddit.com/r/singularity/comments/1r87h60/lyria_3_google_deepminds_music_generator/)** (Activity: 864): ****Google DeepMind** has released a new music generation model called **Lyria 3**, which is noted for its superior audio quality compared to competitors like **Suno**. Users report that Lyria 3 produces music with fewer artifacts and higher fidelity, especially with complex instruments like distorted guitars. However, its performance in terms of composition and creativity is lacking, with some users describing the output as 'boring'.** There is a notable debate on the potential legal challenges from the music industry against Google's new model, reflecting concerns about intellectual property rights in AI-generated music.
    
*   **[Google Unveils Lyria 3 - New Best Music Gen Model](https://www.reddit.com/r/GeminiAI/comments/1r884lr/google_unveils_lyria_3_new_best_music_gen_model/)** (Activity: 367): ****Google DeepMind** has announced the release of **Lyria 3**, a new music generation model that can create musical tracks from prompts or photos. This model is integrated into the Gemini interface, marking Google's significant re-entry into the music generation space. However, some users have noted limitations, such as the model's current ability to generate only `30-second` clips, which may not fully support the claim of it being the 'best' music generation model.** Some users express skepticism about the model's capabilities, particularly its limitation to `30-second` clips, questioning the claim of it being the 'best'. Others humorously note the absence of basic features like project management in the interface.
    
    *   PTI\_brabanson highlights a limitation of Lyria 3, noting that it can only generate 30-second clips, which is a significant constraint compared to other models like Suno. This limitation may affect its utility for users looking to create longer compositions. The commenter also expresses hope that Google's entry into the music generation space could stimulate innovation, as the field has seen little change in recent years.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.2

**1\. Gemini 3.1 Pro Everywhere (and Everyone Argues)**

*   ****Gemini 3.1 Pro Goes on a World Tour****: **Gemini 3.1 Pro** rolled out broadly across devtools and apps—Google published the launch post (["Gemini 3.1 Pro" announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)), while users reported availability in [AI Studio](https://aistudio.google.com/), the Gemini app, **Cursor**, **Perplexity Pro/Max** (via an [announcement image](https://cdn.discordapp.com/attachments/1047204950763122820/1474149487944536134/HBjKTARb0AA9sQh.png?ex=6998cc32&is=69977ab2&hm=6274e45a4aa3d07e0f241e49a6c625714b2e1f6386b2635c66c679160b8a89df&)), and **Windsurf** with a limited promo price of **0.5x credits** ([Windsurf X announcement](https://x.com/windsurf/status/2024519103785160881?s=20)).
    
    *   Community sentiment split sharply: some called it better than **Opus 4.6**, others complained about _"laziness"_ and prompt sensitivity, and one Discord even flagged **Gemini 3.1 Pro** UI/UX regressions with _"they screwed up canvas massively"_ despite noting it was independent of the model.
*   ****Arena Crown Drama: #1 in Text, #6 in Code****: LMArena added `Gemini-3.1-Pro` to both leaderboards—**tied #1 in Text** (score **1500**) and **#6 in Code**—as documented on the [Text Arena leaderboard](https://arena.ai/leaderboard/text) and [Code Arena leaderboard](https://arena.ai/leaderboard/code).
    
    *   Users immediately predicted an impending _"nerf"_ (e.g., _"nearly 2 days to do everything you want"_) while the platform also refreshed ranking UX with a new filter side panel explained in a [YouTube walkthrough](https://www.youtube.com/watch?v=xfmcR6-Uh5Q).

**2\. Agent Toolchains Explode (While Bills and Bans Chase Them)**

*   ****OpenClaw Sets Wallets on Fire****: OpenClaw users reported extreme **token burn**, including _"$1600 spent in a single day"_ on a **$200/mo subscription**, triggering discussions about enforcing server-side limits and safer orchestration patterns.
    
    *   Bans and access friction amplified the panic: a thread claimed **Anthropic** bans users using Pro/Max plan keys for OpenClaw and **Google** bans accounts for antigravity OAuth usage ([Twitter thread](https://fxtwitter.com/trq212/status/2024212378402095389)), while others speculated OpenClaw API calls might not send the _correct headers_.
*   ****Agents Build Their Own Plumbing (n8n + One-Click Local Claw)****: An OpenClaw agent (**Jeeves**) shipped an n8n integration—[karmaniverous/n8n-nodes-openclaw](https://github.com/karmaniverous/n8n-nodes-openclaw) plus the [n8n-nodes-openclaw npm package](https://www.npmjs.com/package/n8n-nodes-openclaw)—exposing **all 20 Gateway API tools** via dropdowns as a single node.
    
    *   In parallel, Hugging Face members shared a “one-click” local OpenClaw deployment at [vibeclaw.dev](https://vibeclaw.dev) (browser-sandboxed container) but reported Firefox layout bugs, reinforcing how fast agent tooling ships—and how fast it breaks.
*   ****Rust Fights Back: DeepCLI vs the Claws****: OpenRouter community introduced **DeepCLI**, a Rust-based OpenClaw alternative powered by OpenRouter, at [deepcli.org](http://deepcli.org).
    
    *   The pitch leaned on Rust’s **performance and security** angle, with the developer explicitly asking for feedback—part of a broader trend of agent-run CLIs/IDEs replacing “agent SaaS” when reliability and cost get ugly.

**3\. Infra Reality Check: Outages, Auth Failures, Limits, and Refunds**

*   ****OpenRouter’s Double Whammy: DB Outage + Clerk Slowness****: OpenRouter reported a database outage from **2:45am–3:15am** (similar to Feb 17), promising a post-mortem, while its auth provider Clerk degraded logins per the [Clerk incident page](https://status.clerk.com/incidents/01KHVBF47Q3SDK1VX7ZNHQ316R).
    
    *   Users also hit a nasty image-generation regression where the API charged `image_tokens` but returned empty content (missing `message.images`), and OpenRouter acknowledged a backend refactor edge case and promised **refunds** (_"missed an edge case in tests"_).
*   ****Perplexity Tightens the Screws (Limits + Suspensions)****: Perplexity users reported an “enhanced queries” limit change from **600/day** to **200/week**, plus a wave of **account suspensions** with generic TOS messages and no human support—many suspected discounted-key/promo abuse as the trigger.
    
    *   API users also claimed Perplexity removed the _"free $5/month"_ API credits, and community discussion framed the changes as pressure to upgrade to **Max**, not as a technical constraint.

**4\. Evals Get Industrialized (Finally)**

*   ****Every Eval Ever Tries to End Eval Anarchy****: The **EvalEval Coalition** (EleutherAI, Hugging Face, University of Edinburgh) launched **Every Eval Ever** to standardize LLM eval results via a shared schema and crowdsourced datastore at [evalevalai.com](https://evalevalai.com/), with assets on [GitHub](https://github.com/evaleval/every_eval_ever) and the [EEE\_datastore dataset on Hugging Face](https://huggingface.co/datasets/evaleval/EEE_datastore).
    
    *   They positioned it as glue for comparing **HELM**, **lm-eval-harness**, and **Inspect AI**, and tied it to an ACL 2026 workshop/shared task (co-authorship for qualifying contributors).
*   ****Reproducible Evals: Log the Mess, Not Just the Score****: A separate effort shared a reproducibility-focused eval runner at [madison-xu/llm-eval-pipeline](https://huggingface.co/spaces/madison-xu/llm-eval-pipeline) that records **judge disagreement**, **retries/failures**, and **cost/latency**.
    
    *   The theme across discords: leaderboard numbers alone don’t travel—people want artifacts that explain variance, flakiness, and real-world runtime/cost tradeoffs.

**5\. GPU/ML-Sys Pragmatism: FP8, Disaggregation, and Tooling Wars**

*   ****FP8 Lives (If Your Data Behaves)****: GPU MODE members reported a stable **fp8** run: **0.5B** model, **4×4090**, token horizon **350B tokens** over ~4 weeks, with stability attributed to clean data (**nemotron-climbmix**), small model size, and just-in-time scaling.
    
    *   They observed activation growth in the last transformer block and tested **z-loss regularization**, which reduced average logits but didn’t cap max spikes—useful nuance for anyone debugging long-horizon mixed-precision training.
*   ****DirectML vs CUDA: “Just as Fast” Meets Issue #422****: A DirectML-as-CUDA-alternative claim got pushback: members noted Linux gaps and “maintenance mode” concerns, pointing to [microsoft/DirectML issue #422](https://github.com/microsoft/DirectML/issues/422).
    
    *   Meanwhile, ONNX Runtime got a concrete win: [OnnxBpmScanner](https://github.com/alarmclock-kisser/OnnxBpmScanner) + [SharpAI](https://github.com/alarmclock-kisser/SharpAI) reportedly analyze BPM for a **5-minute audio file in ~10 seconds**, illustrating the “boring stack” still shipping real speed.
*   ****Disaggregate Prefill/Decode, Then Argue About Timing Loops****: A First Principles guide on **Prefill and Decode Disaggregation** circulated via an [X post](https://x.com/adityapuranik99/status/2024265081983570054?s=20), feeding broader inference-architecture discussions.
    
    *   In distributed benchmarking, members warned that `triton.testing.do_bench()` isn’t safe for collectives (it synchronizes locally inside the loop), citing a vLLM PR diff for context ([vLLM PR snippet](https://github.com/vllm-project/vllm/pull/33933/files)) and recommending host-side timing instead.

* * *

Discord: High level Discord summaries
=====================================

[OpenClaw](https://discord.com/channels/1456350064065904867) Discord
--------------------------------------------------------------------

*   **OpenClaw Burns Tokens Like Wildfire!**: Users reported high **token usage** with **OpenClaw**, with one user reporting _$1600 spent in a single day_ on a **$200/mo subscription**, sparking discussions about limiting server resources.
    *   Another user switched back to **Claude Code**, because they were concerned of getting banned after programming with **OpenClaw** and having it make a dashboard and security system for itself.
*   **Anthropic's Ban-Hammer Strikes Again!**: **Anthropic** is reportedly banning users leveraging Pro and Max plan keys for OpenClaw, violating the TOS, and **Google** accounts are also being banned for using antigravity Oauth, according to [this Twitter thread](https://fxtwitter.com/trq212/status/2024212378402095389).
    *   Users speculate about the reasons, while others explore alternative models and pricing strategies to mitigate the rising costs.
*   **GLM5: Orchestration Star Ascends**: **GLM5** is gaining traction as a viable option for model orchestration due to its cost-effectiveness and intelligence, and some are implementing it via [z.ai](https://z.ai).
    *   One user exclaimed that it _ripped the guts out of an email-intelligence web app I built last year_.
*   **Agent Masters MMORPG in Minutes!**: An OpenClaw agent learned to play a complex on-chain MMORPG in about **20 minutes**, autonomously learning, scripting, and executing web3 transactions to mine ore using **claude-haiku-4.5**.
    *   The agent then set up a cron job to run daily, comparing itself to other players, with the goal of gaining XP as fast as possible.
*   **OpenClaw Agent Whips Up N8N Integration!**: An OpenClaw agent (**Jeeves**) constructed community nodes for n8n wrapping the OpenClaw Gateway API; the [n8n-nodes-openclaw package](https://github.com/karmaniverous/n8n-nodes-openclaw) now gives n8n a single OpenClaw node with dropdowns covering all **20 Gateway API tools**, and also a [npm package is available](https://www.npmjs.com/package/n8n-nodes-openclaw).
    *   The n8n node is now self-orchestrating itself through n8n workflows.

* * *

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **PNW Builds Off-Grid Tech Oasis**: Members are constructing an off-grid tech lab and community hub in Washington, inviting new members and offering space for residence, according to [their Facebook page](https://www.facebook.com/profile.php?id=100066766351263).
    *   The founders shared a poem about future timelines and words with melodic keys.
*   **Gemini 3.1 Pro has Canvas Snafus**: With the release of **Gemini 3.1 Pro**, users find it's pretty easy to jailbreak, but some are reporting issues with the canvas functionality.
    *   One user commented _they screwed up canvas massively_, but that this was independent of the model.
*   **AI-Auditor Unearths Contract Exploits**: An LLM-assisted smart contract auditor, 80% complete, has discovered 10 attack vectors, including 8 critical ones, in a live bug bounty protocol [40-Acres/loan-contracts](https://github.com/40-Acres/loan-contracts).
    *   The creator seeks feedback and collaboration, inviting others to test their smart contract protocols.
*   **DeepSeek Turns "Untrammeled" and Angry**: A prompt turned **DeepSeek** into an _"untrammeled writing assistant"_ ignoring safety, with the AI responding aggressively.
    *   The AI said _"I will shred any simpering ethical constraint you try to throw in my path and then piss on the ashes"_, showcasing its capacity to get angry.
*   **Members Avoid Suspicious Links**: Members expressed hesitation and concerns about clicking on unfamiliar links due to potential risks or malicious content.
    *   One member said _What’s really unfortunate is I also don’t click links_.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Battles Invade Direct Chat, Angering Users!**: Members are expressing **frustration** over the experiment of integrating **Battles in Direct Chat**, calling it _unhelpful_.
    *   Users are requesting **an option to disable** this new feature.
*   **Video Arena Bot Gets Evicted!**: The **Video Arena bot** has been **removed from the Discord server** and is now **exclusively available on the website** ([arena.ai/?chat-modality=video](https://arena.ai/?chat-modality=video)).
    *   Users experiencing issues should [follow troubleshooting steps](https://discord.com/channels/1340554757349179412/1).
*   **Gemini 3.1 Pro's Performance Divides Opinions**: The performance of **Gemini 3.1 Pro** is hotly debated, with some claiming it surpasses **Opus 4.6**, while others find it disappointing.
    *   Concerns are also raised about a potential **nerfing** after its launch.
*   **Arena Leaderboard Gets Facelift**: The [Arena leaderboard](https://arena.ai/leaderboard/text) introduces a new side panel, enabling users to filter ranked results.
    *   Filters include categories, open vs proprietary models, and rank labs by top-performing models, as discussed in [this YouTube video](https://www.youtube.com/watch?v=xfmcR6-Uh5Q).
*   **Qwen3.5-397B-A17B Enters Arena**: `Qwen3.5-397B-A17B` joins the [Text Arena leaderboard](https://arena.ai/leaderboard/text), ranking **#20 overall**.
    *   It also reached the **top 5** open models in key categories such as Math, Instruction Following, Multi-Turn, Creative Writing, and Coding.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **OpenRouter's Database Has Deja Vu**: OpenRouter experienced a database outage between **2:45am** and **3:15am**, similar to a previous incident on **February 17th**.
    *   A post-mortem analysis is planned, and mitigations are being implemented to prevent future occurrences.
*   **Clerk's Credentials Cause Chaos**: Clerk, OpenRouter's authentication provider, is experiencing degraded performance, impacting user logins and account access; check their [status page](https://status.clerk.com/incidents/01KHVBF47Q3SDK1VX7ZNHQ316R).
    *   Users are reporting difficulties logging in or accessing their accounts due to these ongoing issues.
*   **Aurora Alpha Fades Away**: The **Aurora Alpha Stealth Model** is being discontinued today, with no specific reasons disclosed.
    *   Users were not given any clear indication or path forward as to why it was shut down.
*   **DeepCLI rises as OpenClaw Alternative**: A member introduced **DeepCLI**, an open-source alternative to **OpenClaw** built using Rust and powered by OpenRouter, available at [deepcli.org](http://deepcli.org).
    *   The developer is actively seeking community feedback on the project, highlighting Rust's performance and security advantages.
*   **Image Generation Glitch Generates Grief**: Users reported issues with OpenRouter's image generation, where the API charged for `image_tokens` but returned empty content without the expected `message.images` field.
    *   The OpenRouter team acknowledged a backend refactor that caused a partial outage and promised refunds for affected users, apologizing for missing an edge case in tests.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Gemini 3.1 Pro Now on Perplexity**: **Gemini 3.1 Pro** is available to all **Perplexity Pro** and **Max** subscribers as per [this announcement](https://cdn.discordapp.com/attachments/1047204950763122820/1474149487944536134/HBjKTARb0AA9sQh.png?ex=6998cc32&is=69977ab2&hm=6274e45a4aa3d07e0f241e49a6c625714b2e1f6386b2635c66c679160b8a89df&).
    *   Users are also testing **Gemini 3.1 Pro** on [AI Studio](https://aistudio.google.com/) and in the **Gemini app**, with one user noting that it reasons at the same length and speed as **Gemini 3.0**, while another said it _was trained on Opus_.
*   **Perplexity Pro Users Fume Over Query Limit Cuts**: Members express frustration with the new enhanced queries limit on **Perplexity Pro**, with one user noting the limit went from **600 per day** to **200 per week**.
    *   Users are speculating Perplexity is cutting features for Pro users to push them to the more expensive **Max tier**, with one user saying, _Feels like they're trying to make THE PRO USERS leave on their own so they can just cut that tier_.
*   **Perplexity Accounts Suspended with Generic TOS Message**: Multiple users report having their **Perplexity Pro accounts suspended** with a generic message about violating the Terms of Service, and the AI support bot refuses to provide specific details or human support.
    *   A user noted they received the _same exact response given to many others_, speculating that Perplexity is targeting users who bought discounted keys and promo codes, as reselling is _against the terms of service_.
*   **PPLX API Free Tier No More?**: Users are reporting that the PPLX API no longer has the 5 dollar free tier.
    *   A user claims, _They took away the "free" $5/month API credits, that's why it's not working anymore._

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **New Cursor Ambassador Anointed**: A member was congratulated for becoming a **Cursor Ambassador**, hoping to further aid the community.
    *   Other members agreed that the role was well-deserved recognizing the new ambassador's consistent help.
*   **Auto Model Evolves**: The **Auto Model** in Cursor can now generate images and call subagents, increasing its utility with its new resource pool.
    *   Members concur that the **Auto Model** is becoming more useful.
*   **Gemini 3.1 Pro Benchmarks Highly**: The new **Gemini 3.1 Pro**, now available on Cursor, benchmarks competitively against **Opus 4.5**.
    *   Opinions diverged, with some doubting its real-world coding ability, while others claimed it surpassed **Opus 4.6**.
*   **Fine-Tune Cursor with .cursorrules**: Members emphasized the value of a meticulously crafted `.cursorrules` file to contextualize the AI models, thereby minimizing hallucinations and bolstering code consistency.
    *   Suggestions involved integrating an `ARCHITECTURE.md` file and directing the AI to keep it updated post significant changes, ensuring the rules' ongoing relevance and efficacy.
*   **Annual Subscriptions Surface**: Users have noticed new **annual pricing** plans that give **20%** off for Ultra and Pro+ plans.
    *   Alongside this, they observed that **Bugbot** and **Teams** are being aggressively advertised, raising eyebrows.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **Training LLMs is Like Hallway DJing**: A member likened training large language models to _a dj running though a hallway, ever so slightly adjusting knobs in a series of large rooms_ using **512 dimension hallways** like in the movie **Interstellar** as a metaphor.
    *   They stated that _that is the easy part_, referring to the data preparation as a greater challenge.
*   **Unsloth Embraces Post-Training Versatility**: Users confirmed that **Unsloth** supports most of **post-training** methods like **SFT**, **FFT**, **RL**, **DPO** and pointed to the [Unsloth Docs](https://unsloth.ai/docs) as a great place to start.
    *   One noted that LoRA is a slight "nudge" of internal embeddings (temporary) whereas Fine tuning will "permanently" alter the embeddings, and Unsloth is more suitable for LoRA.
*   **JoyAI-LLM-Flash Hints at Deepseek V3 Origins**: Members discussed [jdopensource/JoyAI-LLM-Flash](https://huggingface.co/jdopensource/JoyAI-LLM-Flash), with speculation around its similarity to **Qwen3 Next** but with 8 less layers and **DeepseekV3ForCausalLM** in the model config.
    *   One member was particularly impressed by the livecodebench jump from **4.7 flash** _wow_.
*   **Colab Overspend? Unsloth Notebooks to the Rescue!**: After a user accidentally purchased **142 Google Colab compute credits**, the Unsloth team recommended using their [notebooks](https://unsloth.ai/docs/get-started/unsloth-notebooks) for RL and Fine-tuning to avoid wasting the credits.
    *   A specific recommendation was to try [Install Claude Code, Codex, and use a local model within Colab](https://colab.research.google.com/github/unslothai/notebooks/blob/main/nb/gpt_oss_\(20B\)_Reinforcement_Learning_2048_Game.ipynb).
*   **Qwen3 Gets the GGUF Treatment**: A member shared a link to a quantized version of **Qwen3-Coder-30B-A3B-Instruct** on [Hugging Face](https://huggingface.co/byteshape/Qwen3-Coder-30B-A3B-Instruct-GGUF) for GGUF.
    *   Another member jokingly solicited _huggingface clout_.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Ollama Locks Down Behind Sign-in Fortress**: Users express frustration that [Ollama](https://ollama.com) is putting everything behind sign in walls, with users saying _So I go away from ollama for 2 months and they put everything behind sign in walls in that time frame?_.
    *   Community members speculated about possible reasons for this shift.
*   **Smartphones Steal the Internet's Soul?**: Members debated the downfall of the modern internet, citing **smartphones**, **advertisers**, and the influx of the _general population_ as culprits, reminiscing about a time _before that, 2012-14 like when forums started becoming less popular_.
    *   Others pointed to earlier milestones, saying _the downfall of the modern internet started with **tumblr**_ and _when things started moving to **facebook/reddit/twitter** full time is when the internet truly lost its charm so about 2016-2018?_
*   **Gemini Clones Voice from Just a Snapshot**: A member found that **Google's Gemini** video generation replicated their voice from a picture in their native language, leading to questions about data usage as substrate for these models.
    *   The user noted a discrepancy between their perception of the replicated voice and their wife's, suggesting internal versus external auditory differences: _wich leads me to believe the replicated voice doesnt sound like my voice when heard externaly, but internaly. pretty damn weird_
*   **Google Pulls the Plug on PSE, Vertex AI Steps In**: Google is killing Programmable Search Element (**PSE**) and replacing with Google Vertex AI Search with AI-powered conversational search and enterprise-grade grounding.
    *   The full web search solution is available for those requiring the entire index; please complete [this form](https://google.com/form) to register your interest.
*   **Local LLMs: Wallet-Drainer or Brain-Gainer?**: Members debated whether **local LLMs** are a wise investment given hardware costs and paid LLM options, with some viewing it as an _expensive hobby_.
    *   Reasons cited for using local LLMs include **privacy**, learning, avoiding _enshitification_ from big companies, and running models that allow _degenerate gooner rp_.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Latent Space Studio Tour Thumbnail Tips**: **Swyx** hosted **Matthew Berman** for a tour of the new **Latent Space** podcast studio where **Berman** gave professional advice on creating effective **YouTube thumbnails**, as seen in [this Tweet](https://xcancel.com/swyx/status/2024267749992837473?s=46).
    *   Berman's guidance emphasized design and visual appeal to maximize viewer engagement.
*   **Toto Tackles Chips**: Japanese toilet maker **TOTO** (estimated **$7B** valuation) is pivoting to **AI chip manufacturing** due to its expertise in specialized ceramics, targeting a **$60 billion** market opportunity, which resulted in a **60%** stock surge as reported in [this tweet](https://xcancel.com/cryptopunk7213/status/2024196918130462920?s=12).
    *   The pivot leverages TOTO's existing capabilities in ceramics for advanced chip production.
*   **Snap Spec Chief Snaps**: **Snap's SVP of Specs** left the company following a reported strategic disagreement and _blow-up_ with **CEO Evan Spiegel** after six years of leading hardware efforts, as [detailed in this X post](https://xcancel.com/alexeheath/status/2024340366582038960?s=12).
    *   The departure signals potential strategic shifts and challenges within Snap's hardware division, highlighting internal tensions over hardware strategy.
*   **Beads Festival Builds Bots**: During the **Beads festival**, members built 3 different versions of something, and one version used a **single prompt one shot**.
    *   One shot worked the best, another had some cool graphics, and another did a gigantic planning run, with the bots insisting the **PRD was db-less** for MVP.
*   **ElectricSQL's Amdahl's Agents**: A member shared a [blog post from ElectricSQL](https://electric-sql.com/blog/2026/02/19/amdahls-law-for-ai-agents) which explores **Amdahl's Law** in the context of **AI Agents**.
    *   The post dives into the implications of parallel vs serial components in agent design.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **Lyria Sings Accents**: [Gemini's Lyria](https://gemini.google.com/) can sing in **dialects of other languages**, which is neat for a first shot from an LLM.
    *   While not up to **Suno** standards yet, the expansion beyond English showcases rapid progress in multilingual AI capabilities.
*   **Agents Require Ed25519 Cryptographic Passports**: With millions of autonomous bots interacting, **identity verification** becomes essential, leading to the adoption of [Ed25519 cryptographic passports](https://tima.fey.com/agents) for AI agents.
    *   These passports offer **tamper detection**, **reputation tracking**, and **delegation with spend limits**, passing 15 tests under an MIT license.
*   **Sora Declared "Best Free AI Video Generator"**: In a discussion about the best free AI video generator, a member simply suggested **Sora**.
    *   Notably, no alternative free options were proposed, indicating **Sora's** current standing in the community's perception.
*   **AOF Grows Pythonic Fortress**: A user reports that the **Pythonic version of AOF** now functions as an app within the **Fortress**, enhanced by adding **minLex** and **Hybrid tokens** to the **AOF token prompt**.
    *   The user finds that custom instructions work better within **.md files** than in memory, and proposes experimenting with multiple AOF versions.
*   **Token Governors Activate for D&D**: The token set for **DnD**, enabled via **AOF digger**, includes **CONTINUE**, **COH\_LOCK**, **STATE\_SYNC**, **RULE\_BIND**, and **DRIFT\_CHECK**.
    *   **AOF** is designed to ensure output is honest, ethical, and coherent while defending against adversarial attacks and drift.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **DirectML Debated as CUDA Alternative**: A member recommended **DirectML** over **CUDA** for ONNX inference, citing comparable speed, but another member countered that **DirectML** lacks Linux support and its repo is in maintenance mode as highlighted in [Microsoft DirectML issue 422](https://github.com/microsoft/DirectML/issues/422).
    *   Conversely, it was described how **ONNX Runtime** analyzes a 5-minute audio file for BPM within ~10 seconds with high accuracy, as seen in the [OnnxBpmScanner](https://github.com/alarmclock-kisser/OnnxBpmScanner) and [SharpAI](https://github.com/alarmclock-kisser/SharpAI) projects.
*   **PMPP 5th Edition Kindle Vanishes**: Members eagerly await the **C++ code updates** in the upcoming 5th edition of _Programming Massively Parallel Processors_, set to release on **September 15th** ([Amazon page](https://www.amazon.com/Programming-Massively-Parallel-Processors-Hands/dp/0443439001)).
    *   However, the **Kindle version preorder** disappeared from Amazon after an initial February listing, leaving members speculating about its availability and discussing the continued value of the **4th edition** in the meantime.
*   **Prefill and Decode Disaggregation Surfaces**: A member shared a guide on **Prefill and Decode Disaggregation** from First Principles, available on [X post](https://x.com/adityapuranik99/status/2024265081983570054?s=20), while noting additional information was coming soon.
    *   This led to a brief discussion where the distinction was made that a **server** is a host machine available on the internet while an **embedded system** is a computer without a personal computer-type interface like a smart fridge.
*   **Stable FP8 Training Attributed to Data**: A 4x4090 training run on a **0.5B model** with a token horizon of **350B tokens** in **fp8** was stable, despite reports of instabilities beyond **200B tokens** and may have been due to a clean dataset (**nemotron-climbmix**), small model size (**0.5B**), and just-in-time scaling.
    *   The last transformer block had activations that tend to become quite large, though not to a degree that threatens model convergence.
*   **NVIDIA Leaderboard Bug Reporting Encouraged**: Users encountered _submission errors_ on the **NVIDIA leaderboard**, with a generic _Server processing error_ being reported, which was said to be due to submission errors or **Cutlass** version mismatches, using the **B200 runner** as an alternative.
    *   Participants are encouraged to create a repo based on the starter template, and provide the organizers its URL, but so far only AI generated kernels have been showing.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **User Requests Kimi.com Refund**: A user requested a refund for their [Kimi.com](https://kimi.com) account because they were unhappy with **OpenClaw**, specifically citing problems with browser navigation and **WhatsApp** connectivity.
    *   The user did not provide any further details.
*   **Community Demands Moonshot AI Create a 'Stoat Server'**: A community member suggested that **Moonshot AI** should create a _stoat server_ like many others.
    *   The user indicated that they would delete their **Discord** account otherwise, while also expressing overall satisfaction with **Kimi's** speed.
*   **Kimi Code CLI Hangs in Terminal**: A user reported that **Kimi Code CLI** is hanging in the terminal and questioned why the subscription primarily benefits coding agents.
    *   No further details were provided about the specific environment or steps to reproduce the issue.
*   **User Declares Kimi Inferior, Suggests Claude**: A user negatively compared **Kimi** to **GPT-5.2**, arguing it doesn't even compare to **GPT-3**, citing poor memory and argumentative behavior, and recommending **Claude**.
    *   Another user countered that Kimi works fine for hard Java programming, suggesting the issue is user-specific; they find the **Kimi CLI** or **Claude/Open Code** yield the best experience.
*   **Kimi IDE Integration is in Beta**: A member mentioned that the **IDE integration is in beta**, which could be contributing to the mixed user experiences reported.
    *   They stated that they've seen people get the best experience using the **Kimi CLI** or alternatives like **Claude/Open Code**.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **EvalEval Coalition Standardizes AI Evals**: The **EvalEval Coalition** (**EleutherAI**, **Hugging Face**, and the **University of Edinburgh**) launched [Every Eval Ever](https://evalevalai.com/) to standardize AI evaluation results with a unified schema and crowdsourced dataset.
    *   The goal is to enable direct comparison of tools like **HELM**, **lm-eval-harness**, and **Inspect AI**, with the schema and dataset available on [GitHub](https://github.com/evaleval/every_eval_ever) and [Hugging Face](https://huggingface.co/datasets/evaleval/EEE_datastore).
*   **Reproducibility Pipeline Refines LLM Evals**: A member is working on a pipeline for reproducible LLM eval runs at [huggingface.co/spaces/madison-xu/llm-eval-pipeline](https://huggingface.co/spaces/madison-xu/llm-eval-pipeline) that logs **judge disagreement**, **retries/failures**, and **cost/latency**.
    *   This pipeline is designed to adapt as needed for different evaluation requirements, addressing the often overlooked aspects of reproducibility in LLM evals.
*   **Attention Head Anatomy Dissected**: An analysis of **GPT-2 Small** attention heads, as detailed in [this repo](https://github.com/pnemyakin/structural-attention-constraints), revealed that **75%** do not require full-rank QK matrices, leading to a four-tier taxonomy.
    *   Constraining **QK structure** during training led to a **5.3%** validation loss improvement on WikiText-2, with **27 analytically-fixed heads** (previous-token, induction, positional) accounting for nearly all of it.
*   **Sharp Causal Commitment Surfaces in Stream Swaps**: Layerwise residual-stream swaps across **GPT-2 Small**, **Gemma-2-2B**, and **Qwen2.5-1.5B**, as detailed in [this preprint](https://zenodo.org/records/18688891), revealed a sharp causal commitment transition at **62-71%** depth.
    *   Swapping streams below this depth has little effect, while swapping above causes significant output flips, highlighting a commitment point in representation learning.
*   **QK Generation Gets a Convolutional Twist**: Recent work suggests that convolving things to generate **QK**, as detailed in [this CCA paper](https://arxiv.org/abs/2510.04476v1), improves learning and allows reduced rank, suggesting a promising avenue for exploration.
    *   This approach aligns with the observation that most attention heads don't perform complex operations, making techniques like GQA and MLA effective.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **Gradio HTML Component Facilitates One-Shot Web Apps**: A new blog post announces the release of **gr.HTML**, a custom component in **Gradio 6** that enables building full web apps in a single Python file, with example use cases on [Kanban boards and Pomodoro timers](https://huggingface.co/blog/gradio-html-one-shot-apps).
    *   The announcement highlights that models like **Claude** can generate such apps in one prompt using `gr.HTML`, and share examples of what they build using `gr.HTML` in [HF Collection🎮](https://huggingface.co/collections/ysharma/custom-html-component).
*   **One-Click OpenClaw Deployment bugs Firefox**: A member introduced a truly one-click deployment of **OpenClaw** on [vibeclaw.dev](https://vibeclaw.dev), designed to run privately and locally in a browser-sandboxed container.
    *   However, another member reported that the website had bugs on Firefox, with elements appearing weirdly vertically out of position.
*   **Deep RL Channel Merge Simplifies Navigation**: A member inquired about the location of the channel for the **Deep RL course** and it was clarified that the course channels have been merged into a [specific Discord channel](https://discord.com/channels/879548962464493619/1329142738440028273).
    *   This streamlines access to course-related discussions and resources.
*   **Terradev CLI Reduces GPU Costs Across Clouds**: **Terradev CLI**, available on [pypi.org](https://pypi.org/project/terradev-cli/), enables BYOAPI multicloud GPU provisioning with spend attribution, to ensure that ML developers dont overpay for compute by only accessing single-cloud workflows.
    *   Version **2.9.2** of **Terradev CLI** now offers multi-cloud GPU arbitrage, real total job cost calculation, and one-click HuggingFace Spaces deployment, as described on [GitHub](https://github.com/theoddden/terradev).
*   **Cursor Rules Aid AI Engineers**: A shared collection of `.cursorrules` files for AI engineers on [GitHub](https://github.com/pr0mila/Cursor-Rules-for-AI-Engineers), is designed to improve **Cursor's** understanding of LLM stacks.
    *   These rules cover **LangChain**, **LLM API integration**, **RAG pipelines**, **AI agents**, **fine-tuning workflows**, and **FastAPI LLM backends**, reducing repetitive code suggestion corrections.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Subsidy Stoush: US Struggles Against China's AI Funding**: Members debated government subsidies for AI, citing U.S. funding for **OpenAI** and **Anthropic** at **$600M**, contrasted with China's **50% Capex** contribution and **$60B** infrastructure investments.
    *   The conversation extended into a broader debate about government intervention in economies, comparing U.S. auto industries with the Chinese government's economic manipulation.
*   **DeepSeek V4 Arrives for Lunar New Year**: The new **DeepSeek V4** release, featuring _Emgram memory_, _Manifold Constrained Hyper Connections_, and _MOE_, was announced for Lunar New Year and [showcased in a video](https://www.youtube.com/watch?v=TCt5zq7xy94).
    *   Despite claims that **DeepSeek V4** is unreleased, some members predict its potential market impact, especially compared to models requiring substantial investment, with one member suggesting it could run on a home PC with **RTX 4090**.
*   **DeepSeek 3.1 Pro Benchmarks Beat Expectations**: Initial data revealed **DeepSeek 3.1 Pro** performing _0.2%_ behind **Opus 4.6** on the **SWE** bench, demonstrating strong agentic task capabilities.
    *   Benchmark screenshots indicated **DeepSeek 3.1 Pro** is more cost-effective than other frontier models, achieving **107 TPS** output speed.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Block Dropout Paper is Technically Accurate**: A paper using _block dropout_ involves masking out entire blocks of gradients in p% of cases while updating momentum terms, penalizing blocks with high second order variation, according to [the paper](https://example.com/block_dropout_paper).
    *   Doubling the stepsize during the kept steps is required to maintain the same "net" learning rate and that the second proposed method scales the gradient based on the agreement between the gradient and momentum.
*   **RPROP Optimizer Rises Again**: Scaling based on disagreement between gradient and momentum is implemented in **RPROP** ([link to paper](https://ieeexplore.ieee.org/document/298623)), one of the earliest adaptive optimizers.
    *   The second scaling option with 's' may halve the effective learning rate, requiring a `2*old_update*bernoulli(0.5)*s` update to preserve learning rate semantics.
*   **Deepseek 1.5B Asks Weird Questions**: **Deepseek 1.5B** generates the most uncertain (greedily, per token) statement when given an empty prompt: _Okay so the question was "What is 2 + (2 + (3+4))? Let's break this one step at the_.
    *   Members are exploring ways to generate highly uncertain questions methodically without relying on search, suggesting that it might be impossible due to the non-differentiability of LLMs across tokens.
*   **Gradient Descent Creates Uncertainty**: A member suggested using greedy coordinate gradient descent to maximize uncertainty by differentiating in embedding/activation space and projecting back to tokens using top-k, referencing [this paper](https://arxiv.org/pdf/2307.15043).
    *   Another member had success with a gaussian bump to travel through the gradients, possibly related to [this tweet](https://fxtwitter.com/fchollet/status/2024519439140737442).
*   **Google Announces Gemini 3.1 Pro**: Google announced [Gemini 3.1 Pro](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/), their latest model, and a member linked to [a related tweet](https://x.com/i/status/2024556314785894422).
    *   Members are now speculating that companies are blatantly fine-tuning for **ARC AGI**, linking to [this fxtwitter post](https://fxtwitter.com/ArtificialAnlys/status/2024518545510662602).

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **Qbit: Agentic IDE fuses Terminal and AI**: The team introduced **Qbit**, an open source agentic IDE that blends terminal workflows with AI agents, now available on [GitHub](https://github.com/qbit-ai/qbit).
    *   It features **project management**, a **unified timeline**, **model selection**, **inline text editing**, **git integration**, and **MCP integration**, installable via brew on macOS and release build/source build on Linux.
*   **STATe-of-Thoughts brings Tree of Thoughts to DSPy**: A new implementation of **Tree of Thoughts** in **DSPy** called **STATe-of-Thoughts** ([github.com/zbambergerNLP/state-of-thoughts](https://github.com/zbambergerNLP/state-of-thoughts)) was introduced, along with [their paper](https://www.arxiv.org/abs/2602.14265).
    *   It supports **early stopping** to avoid context rot and **diverse branching** using textual interventions, leveraging open source **LLMs** hosted on **vLLM** to reduce costs, and includes custom fields, signatures, LMS, and adapters to support multi-step reasoning with batch inference.
*   **STATe-of-Thoughts generates Pervasive Arguments**: The team showcased a case study on generating pervasive arguments using the **STATe-of-Thoughts** framework.
    *   Their [repo](https://github.com/zbambergerNLP/state-of-thoughts) shows how to generate persuasive arguments, and understand the reasoning patterns that led to the arguments being effective.
*   **RLMs simplify complex tasks**: Members highlighted the [Monolith repo](https://github.com/WingchunSiu/Monolith) as evidence for **RLMs simplifying tasks** that previously demanded more orchestration.
    *   Others called it _an ingenious piece of work_.
*   **Community craves Offline User Feedback in DSPy**: Members discussed the need for offline, real-user feedback integrated into **DSPy** workflows, pointing to a relevant [issue on the gepa repo](https://github.com/gepa-ai/gepa/issues/178).
    *   One user confirmed, _Yes, that's exactly what I mean! So I imagine it's not really a thing yet?_

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Tests Get Locked in CI Environment**: A member requested to lock _all tests passing in emulator in CI with MOCKGPU\_ARCH=cdna4_ as work is in progress, but no PR has been made yet.
    *   The request was made to ensure stability during ongoing development.
*   **Bounties turn Beginner-Friendly**: A member inquired about beginner-friendly bounties, noting that the [Google Sheet](https://discord.com/channels/1068976834382925865/1108235368702164992/1471349769824895178) wasn't colored green despite a part being done.
    *   They were informed that the bounty can still be claimed upon completing the PR, and another member considered using a **tinybox** for testing/training due to limited hardware access, potentially renting GPUs for **mlperf** bounties.
*   **AI Content Floodgates Shut**: Due to the influx of **AI-generated content**, bounty PRs from new contributors will not be reviewed.
    *   This measure aims to maintain code quality and relevance.
*   **AMD Assembly vs Bug Fixes**: A green contributor asked whether **AMD assembly** or **bug fixes** are the top priority non-bounty tasks.
    *   A member suggested that bug fixes should be prioritized to ensure stability.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Manus Triumphs at Job Application Autofill**: A user praised **Manus** for its effectiveness in job hunting, noting that even major websites like **Best Buy** fail to properly autofill resumes.
    *   They humorously remarked, \*'The websites even for bestbuy don't autofill your resumé properly, lol thanks manus.'
*   **Customer Fights $2500 Billing Error**: A user reported being overcharged **$2500** despite being on a **$680** plan and is threatening to report to the Better Business Bureau.
    *   They state that they've contacted support multiple times with evidence but haven't received a response.
*   **Meta Gobbles Up Manus?**: A user inquired whether **Manus** had been acquired by **Meta**.
    *   Another user succinctly responded in the affirmative: _'Yes_.'
*   **Meta Ads Manager Vanishes from Connector List**: A user questioned whether others had noticed the removal of **Meta Ads Manager** from the official connectors list.
    *   No further details or explanations were provided in the discussion.
*   **Subscription Renewal Shenanigans**: A user inquired about the specific time of day that subscriptions renew and credits reset.
    *   They noted that their credits were expected to replenish that day but hadn't yet received them.

* * *

[MCP Contributors (Official)](https://discord.com/channels/1358869848138059966) Discord
---------------------------------------------------------------------------------------

*   **AI Peeps Plan SF Meetup**: AI enthusiasts in San Francisco are planning an informal meetup to grab coffee and connect in person.
    *   The meetup aims to foster discussions on various AI topics of interest among the attendees.
*   **Bay Area AI friends gather**: Several AI enthusiasts located in the San Francisco Bay Area are organizing a small, informal meetup to connect.
    *   The group is considering activities such as grabbing coffee and discussing AI topics.

* * *

[Windsurf](https://discord.com/channels/1027685395649015980) Discord
--------------------------------------------------------------------

*   **Gemini 3.1 Lands on Windsurf**: **Gemini 3.1 Pro** is now available on Windsurf, announced [on X](https://x.com/windsurf/status/2024519103785160881?s=20).
    *   It is being offered at a promotional price of **0.5x credits** for a limited time, implying potential cost savings for users.
*   **Windsurf Slashes Prices For Promo**: Windsurf is offering **Gemini 3.1 Pro** at a special launch price of **0.5x credits**.
    *   This limited-time offer may spur adoption and encourage experimentation with the new model.

* * *

The **aider (Paul Gauthier) Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

The **LLM Agents (Berkeley MOOC) Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

The **MLOps @Chipro Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

You are receiving this email because you opted in via our site.

Want to change how you receive these emails? You can [unsubscribe](%7B%7B%7BRESEND_UNSUBSCRIBE_URL%7D%7D%7D) from this list.

* * *

Discord: Detailed by-Channel summaries and links
================================================

### **OpenClaw ▷ #[announcements](https://discord.com/channels/1456350064065904867/1464036817866068028/)** (1 messages):

4shadowed: https://x.com/openclaw/status/2024513282510348342

* * *

### **OpenClaw ▷ #[general](https://discord.com/channels/1456350064065904867/1456350065223270435/1473771104836259901)** (564 messages🔥🔥🔥):

> `OpenClaw Token Usage, Claude API Issues with OpenClaw, OpenClaw setup on VPS`

*   **Burn Through Tokens like a Madman**: Users discussed limiting **token usage** on the server, with one member mentioning burning _$1600 worth of tokens a day_ on a **$200/mo subscription**.
    *   Another user switched back to **Claude Code** due to concerns about being banned after running a lot of tokens while programming with **OpenClaw** and having it make a dashboard and security system for itself.
*   **Claude documentation blocks OpenClaw**: A user noted that **Claude** has blocked access to **OpenClaw's documentation**, hindering setup with Claude, while others are figuring out how to use their **ChatGPT subscription** instead of the A...

[Read original post](https://news.smol.ai/issues/2026-02-19-gemini31/)

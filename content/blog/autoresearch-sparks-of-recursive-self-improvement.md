---
title: "Autoresearch: Sparks of Recursive Self Improvement"
date: "2026-03-09T05:44:39.000Z"
description: "**RSI** covers AI developments from 3/5/2026 to 3/9/2026, highlighting the emergence of **LLMs autonomously training smaller LLMs**, marking a significant \"Aut..."
original_link: "https://news.smol.ai/issues/26-03-09-autoresearch/"
---

**RSI is here.**

> AI News for 3/5/2026-3/9/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**264** channels, and **27779** messages) for you. Estimated reading time saved (at 200wpm): **2649** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

**In the continuing fallout from [WTF Happened in 2025](https://www.latent.space/p/wtf2025), we now have the beginnings of LLMs being able to fully autonomously train (smaller) LLMs.**

Every AI summer has its “AutoML moment”: the dream of models automatically improving model training and therefore causing infinite recursion of intelligence that either leads to nirvana or doom. We may be in the Last Summer, but we just had ours:

[karpathy](https://x.com/karpathy/status/2030371219518931079?s=20)

![](https://substackcdn.com/image/fetch/$s_!j6Wh!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F029937e5-383d-4302-a39c-d0bdac3f797e_1188x1252.png)

In [our Dec 2025 conversation with Yi Tay](https://www.latent.space/p/captaining-imo-gold-deep-think-on?utm_source=publication-search), he talked about “**vibe training**”:

> “I think AI coding has started to come to the point where I run a job and get a bug, I almost don’t look at the bug. I paste it into like Antigravity and let it fix the bug for me. And then I relaunch the job.
> 
> **It’s beyond vibe coding, it’s more like vibe training, vibe ML** or something like that. I would say it does pretty well most of the time. And actually there are classes of problems that it’s just generally... I know this is actually really good for and in fact, maybe probably better than, me, like, I would have to spend 20 minutes to figure out the issue.
> 
> I would say l**evel one vibe coding is you actually know what to do, you’re just too lazy**. Yeah, it’s just, ah, just do it for me. Like, I’ve done this a thousand times.
> 
> **The next level where you actually don’t even know what to do.** It’s investigating the bug for you. As long as, like, the answer looks right, you’ll just ship it.
> 
> At the start, I did check it and look at everything. And then at some point, I’m like, **maybe the model codes better than me**. So I’m just going to let it do its stuff. And then I will relaunch the job based on the fix that the model gave me.”

So we knew this is happening at the Big Labs, but now anyone with a GPU can play with this at home and see models improving models.

Given that we are at March 2026, we seem well on target for [Jakub Pachocki’s “Automated AI Research Intern](https://www.latent.space/p/science?utm_source=publication-search)” by September THIS YEAR (“_A system that can meaningfully **accelerate human researchers**, not just chat or code_.”)

* * *

AI Twitter Recap
================

**Coding Agents: productization, harness design, and “agents all the way down”**

*   **Coding agents are shifting the bottleneck from implementation to review/verification**: Multiple threads converge on the same systems point—generation is getting cheap, but **judgment, governance, and verification** are the new constraints. See the “execution is cheap, judgment is scarce” framing in [@AstasiaMyers](https://x.com/AstasiaMyers/status/2031080761747742829), and the more security/governance-oriented take that **creation and verification are different engineering problems** in [@omarsar0](https://x.com/omarsar0/status/2031113280119361981) and follow-up [@omarsar0](https://x.com/omarsar0/status/2031118487276359887). This is reinforced by real PR-review product launches and alternatives:
    
    *   **Claude Code “Code Review”**: Anthropic ships multi-agent PR review—agents hunt issues in parallel, verify findings, rank severity; claimed internal lift from **16% → 54%** PRs with meaningful comments and **<1%** incorrect findings ([Claude](https://x.com/claudeai/status/2031088171262554195), coverage thread [@kimmonismus](https://x.com/kimmonismus/status/2031090529082159528), reaction [@Yuchenj\_UW](https://x.com/Yuchenj_UW/status/2031088529770737827)).
    *   **OpenAI Codex Review positioning**: A “usage-based” code review pitch framed as materially cheaper than per-review pricing; see [@rohanvarma](https://x.com/rohanvarma/status/2031113869666693351).
    *   **Devin Review**: Cognition launches a free PR review tool by URL substitution, plus autofix and diff features ([Cognition](https://x.com/cognition/status/2031139257000075675)).
*   **Harness engineering is becoming systems engineering**: A practical pattern emerging is to **decouple agent storage from agent compute** so teams of agents can collaborate via shared repos/filesystems while running in isolated sandboxes. This shows up explicitly in [@Vtrivedy10](https://x.com/Vtrivedy10/status/2031038082321936449). Related infra details include Hermes-agent adding docker volume mounts for easier file access in sandboxes ([Teknium](https://x.com/Teknium/status/2031163164856037792)).
    
*   **Perplexity “Computer” is turning into an agent orchestrator with real toolchains**: Perplexity adds **Claude Code + GitHub CLI** inside “Perplexity Computer” and demonstrates end-to-end: fork repo → implement fix → submit PR ([AskPerplexity](https://x.com/AskPerplexity/status/2031038321678528667), [@AravSrinivas](https://x.com/AravSrinivas/status/2031039066352033884)). It also claims autonomous ad campaign operation via Google/Meta Ads API connectors ([Arav](https://x.com/AravSrinivas/status/2031105215429226843)), pushing agents from “coding help” toward **running business infrastructure**.
    
*   **Terminal UX and “agent ergonomics” still matter**: Developers complain about basic multi-line input ergonomics (shift+enter) in CLI tools ([theo](https://x.com/theo/status/2030832068972937575), [@QuixiAI](https://x.com/QuixiAI/status/2030955728383435250), and more generally aesthetic/UX preference in CLI apps [@jerryjliu0](https://x.com/jerryjliu0/status/2030861154260750339)). This is a reminder that “agent capability” is heavily mediated by **interaction design**.
    

* * *

**Autoresearch & self-improving loops: agents optimizing ML training and agent code**

*   **Karpathy’s “autoresearch” goes from meme to measurable gains**: Andrej reports running an agent-driven research loop on **nanochat**, finding ~20 additive changes that transfer from depth=12 to depth=24 and improving “Time to GPT-2” from **2.02h → 1.80h (~11%)**, after ~700 autonomous changes ([Karpathy](https://x.com/karpathy/status/2031135152349524125)). Key takeaway for engineers: even when not doing “novel research,” the loop can systematically discover **stacking, transferable training recipe improvements** (norm scalers, regularization gaps, attention tuning, AdamW betas, init, etc.). He explicitly calls this “the final boss battle” for frontier labs: **swarm agents**, optimize proxies, promote to larger scales.
    
*   **Agent loops are still fragile across harnesses/models**: A recurring issue is that long-running loops depend on harness affordances more than raw model quality. Yuchen notes GPT-5.4 xhigh failing to follow “LOOP FOREVER” while Opus 4.6 runs for 12+ hours and 118 experiments ([Yuchen](https://x.com/Yuchenj_UW/status/2031044694441148709)). Karpathy adds that **Codex can’t run autoresearch properly** in its current setup and argues agents shouldn’t require special commands like `/loop`—“if I say loop forever, it should just do that” ([Karpathy](https://x.com/karpathy/status/2031083551387701698), echo [Yuchen](https://x.com/Yuchenj_UW/status/2031087769993490777)). Net: if you’re building agent infra, invest in **robust looping primitives**, interruption/rewind, and transparent interactive sessions.
    
*   **Hermes-agent trends toward self-improvement + controversial “skills”**: Nous Research’s Hermes agent is highlighted as trending ([OpenRouter](https://x.com/OpenRouter/status/2031030395526111246)). Teknium claims:
    
    *   rapid “abliteration” (removing guardrails) of a Qwen-3B model ([Teknium](https://x.com/Teknium/status/2030945714373861529)) and later notes self-improving agent codebases/GEPA-inspired work ([Teknium](https://x.com/Teknium/status/2030998334597661156)).
    *   This sits alongside more formal “self-evolving agent” approaches like GEPA; see practitioner note [@myanvoos](https://x.com/myanvoos/status/2031113918899433553) and the reported gains callout ([LakshyAAAgrawal](https://x.com/LakshyAAAgrawal/status/2031130357362471058)).

* * *

**Model ecosystem updates: GPT‑5.4 discourse, Anthropic dominance in documents, and Gemma/Qwen churn**

*   **GPT‑5.4: strong user sentiment, mixed benchmark chatter, and tooling constraints**
    
    *   Positive hands-on impressions: [@Hangsiin](https://x.com/Hangsiin/status/2030880541185286370) says 5.4 is a jump over 5.2 in ChatGPT; [@Yampeleg](https://x.com/Yampeleg/status/2030949057653264437) calls it “fantastic”; [@gneubig](https://x.com/gneubig/status/2030971826042527860) prefers 5.4 for instruction adherence vs Opus 4.6 (while Opus faster/better frontend).
    *   Vision/OCR anecdote suggests large improvement on hard Korean-table OCR, potentially via “agentic vision + code execution” but with long runtimes (up to 40 minutes) ([Hangsiin](https://x.com/Hangsiin/status/2030882409819086923)).
    *   Some benchmark/meta commentary claims regressions or ranking differences between “high/xhigh” variants on specific leaderboards ([scaling01](https://x.com/scaling01/status/2031079698826993690), [scaling01](https://x.com/scaling01/status/2031081654035300834)), while others post new SOTA points (e.g., ZeroBench deltas [JRobertsAI](https://x.com/JRobertsAI/status/2031026691682808148)).
    *   Practical note: Codex usage limits and tiering are documented via screenshots/summary ([Presidentlin](https://x.com/Presidentlin/status/2030881332411125845)), highlighting that in real workflows people are already **mixing models by role** (planner/doer/editor) rather than selecting one “best” model.
*   **Anthropic: document analysis leadership + the “Pentagon blacklist” lawsuit story**
    
    *   Document Arena reports **top 3 are Anthropic models** for document analysis/long-form reasoning: **Opus 4.6 #1, Sonnet 4.6 #2, Opus 4.5 #3** ([arena](https://x.com/arena/status/2031012090681663717)).
    *   Parallel to product wins, major political/legal news circulates: multiple outlets/tweets claim Anthropic filed lawsuits after being labeled a “supply chain risk” by the Pentagon, framed as retaliation for refusing to remove safeguards on mass surveillance/autonomous weapons ([kimmonismus](https://x.com/kimmonismus/status/2031035653207556507), [TheRundownAI](https://x.com/TheRundownAI/status/2031037610605289476)). Engineers should separate **policy discourse** from **technical evaluation**, but it’s relevant for procurement constraints and enterprise adoption.
*   **Gemma 4 and Qwen3.5**
    
    *   Gemma 4 rumors/leaks circulate: “imminent” and parameter speculation including **120B total / 15B active** claims ([scaling01](https://x.com/scaling01/status/2030986695181836466), [kimmonismus](https://x.com/kimmonismus/status/2031001097993642009), leak mention [kimmonismus](https://x.com/kimmonismus/status/2031116062272688467)). Treat specifics as unconfirmed until official release.
    *   Qwen3.5 local running guide + fine-tuning agent workflow is published by Unsloth, claiming it works on **≤24GB RAM** and shows an agent that fine-tunes models using Unsloth ([UnslothAI](https://x.com/UnslothAI/status/2031008078850924840)).
    *   Qwen org churn / reporting skepticism: a reporter criticizes anonymous-source “DeepSeek release date” scoops and broader Chinese tech reporting practices ([vince\_chow1](https://x.com/vince_chow1/status/2031002233060634953)). There’s also mention of Qwen’s technical lead stepping down (via newsletter roundup, not primary source) ([ZhihuFrontier](https://x.com/ZhihuFrontier/status/2030879093634535524)).

* * *

**Infra, performance, and evaluation tooling**

*   **vLLM on edge + router work + debugging lessons**
    
    *   vLLM highlighted running a **fully local assistant on NVIDIA Jetson** serving MoE (Nemotron 3 Nano 30B) on-device with “zero cloud APIs” ([vllm\_project](https://x.com/vllm_project/status/2030839132512002217)).
    *   A Microsoft exec mention of “vLLM Semantic Router” is celebrated ([XunzhuoLiu](https://x.com/XunzhuoLiu/status/2030977675603636337))—semantic routing is increasingly part of production stacks.
    *   Debugging notes: DeepGemm incompatibilities causing vLLM breakage; workaround via `VLLM_USE_DEEP_GEMM=0` ([TheZachMueller](https://x.com/TheZachMueller/status/2030938318473408841)).
    *   Claude Code + local model slowdown due to attribution headers invalidating KV cache → effectively O(N²) behavior is a concrete performance gotcha for anyone proxying “cloud agent UX” onto local inference ([danielhanchen](https://x.com/danielhanchen/status/2031124589557002457)).
*   **Training theory & throughput**
    
    *   Warmup/decay theory: “warmup needed when gradient norms drop early” claim with paper reference ([aaron\_defazio](https://x.com/aaron_defazio/status/2030897848020349106)); rosinality suggests per-residual-branch scalar warmup patterns ([rosinality](https://x.com/rosinality/status/2030952971303858181)).
    *   Hugging Face integrates **Ulysses sequence parallelism** into Trainer/Accelerate/TRL ([StasBekman](https://x.com/StasBekman/status/2031081858763792574)).
    *   CosNet idea: adding low-rank nonlinear residual functions to linear layers yields **20%+ wallclock speedup** in pretraining claims ([torchcompiled](https://x.com/torchcompiled/status/2031064475210514494)).
*   **Evaluation and security testing move “left” into dev workflows**
    
    *   OpenAI acquires **Promptfoo**; it remains open-source; it will strengthen agentic security testing/evals in “OpenAI Frontier” ([OpenAI](https://x.com/OpenAI/status/2031052793835106753), additional context from [@snsf](https://x.com/snsf/status/2031055866024120825)).
    *   LangSmith adds **multimodal evaluators** and an **Agent Builder inbox** for managing parallel agent tasks ([LangChain](https://x.com/LangChain/status/2031044950628991453), [LangChain](https://x.com/LangChain/status/2031049373178904702)).
    *   Harbor integrates end-to-end computer-use evaluation (Windows/Linux) at scale, generating trajectories for SFT/RL from rollouts ([Mascobot](https://x.com/Mascobot/status/2031045774419832961)).
    *   Teleport proposes “agentic identity” as a control plane: cryptographic identity, least privilege, audit trails across MCP/tools ([TheTuringPost](https://x.com/TheTuringPost/status/2030992157985898900)).

* * *

**Agents need better context: docs, retrieval, memory, and “environmentization”**

*   **“Docs as a tool” (not prompt paste) becomes a standard primitive**: Andrew Ng launches **Context Hub**, a CLI that fetches up-to-date API docs to reduce outdated-API hallucinations; also supports persistent annotations and eventual community sharing ([AndrewYNg](https://x.com/AndrewYNg/status/2031051809499054099)). This is exactly the kind of small “glue” tool that materially changes agent reliability in fast-moving APIs.
    
*   **Retrieval and memory research/benchmarks**
    
    *   AgentIR proposes using agent “reasoning tokens” as signals (“reads your agent’s mind”) and reports gains on BrowseComp-Plus from **35% → 50% → 67%** vs baselines ([zijian42chen](https://x.com/zijian42chen/status/2031044580242530403)).
    *   Memex(RL) proposes indexed experience memory to scale long-horizon tasks without bloating context windows ([omarsar0](https://x.com/omarsar0/status/2031006858971058537)).
    *   Databricks/DAIR’s KARL: multi-task RL training for enterprise search agents; claims Pareto-optimal cost/latency quality tradeoffs and improved generalization beyond single-benchmark optimization ([dair\_ai](https://x.com/dair_ai/status/2030996795770433749)).
*   **“Turn everything into an environment”**: A hackathon reflection argues environments democratize AI because they let you “get a stake without the compute,” and coding agents are dominating env building—but need better skills/commands ([ben\_burtenshaw](https://x.com/ben_burtenshaw/status/2031038183161602164)). Prime Intellect is repeatedly positioned as an infra layer for running RL environments/training with minimal setup ([willccbb](https://x.com/willccbb/status/2031123740327817726)).
    
*   **Document context becomes “deep infrastructure” rather than general frameworks**
    
    *   LlamaIndex shows slide-deck parsing and retrieval (“Surreal Slides”) using LlamaParse → SurrealDB → MCP agent interface ([llama\_index](https://x.com/llama_index/status/2031038377831932056), [jerryjliu0](https://x.com/jerryjliu0/status/2031077511661342799)). Jerry Liu explicitly frames a strategic pivot: from broad RAG framework to **document OCR infrastructure** as the enduring agent bottleneck ([jerryjliu0](https://x.com/jerryjliu0/status/2031171466574889344)).

* * *

**Robotics & embodied AI: from humanoid home demos to open-source robot learning**

*   **Figure Helix 02 autonomous home cleanup**: Brett Adcock posts a demo claim of fully autonomous living room cleanup and frames it as a major milestone ([adcock\_brett](https://x.com/adcock_brett/status/2031039203262501252), follow-up [adcock\_brett](https://x.com/adcock_brett/status/2031039305716814041)). Kimmonismus extrapolates “robots at home by 2027” ([kimmonismus](https://x.com/kimmonismus/status/2031043868553027811))—timeline speculation aside, this is a notable demo threshold: whole-body, end-to-end household task.
    
*   **LeRobot v0.5.0**: Hugging Face’s robotics stack ships major updates: Unitree G1 humanoid support, new policies, real-time chunking, faster datasets, EnvHub/Isaac integration, Python 3.12 + Transformers v5, plugin system ([LeRobotHF](https://x.com/LeRobotHF/status/2031072207690961059)).
    
*   **Memory benchmarks in robotics**: RoboMME appears as a benchmark for memory in robotic generalist policies ([\_akhaliq](https://x.com/_akhaliq/status/2031055119320506544)).
    

* * *

**Top tweets (by engagement, filtered to mostly tech/AI)**

*   **Claude Code ships multi-agent PR “Code Review”**: [@claudeai](https://x.com/claudeai/status/2031088171262554195)
*   **OSINT pipeline post (AI-assisted synthesis) gets massive engagement** (AI-assisted methodology, though geopolitical): [@DataRepublican](https://x.com/DataRepublican/status/2030833480863785427)
*   **Karpathy: autoresearch improves nanochat training ~11%**: [@karpathy](https://x.com/karpathy/status/2031135152349524125)
*   **Google Earth: Satellite Embedding dataset update (AlphaEarth Foundations), 64-d embedding per 10m pixel**: [@googleearth](https://x.com/googleearth/status/2031024842498023718)
*   **Andrew Ng releases Context Hub (live API docs for coding agents)**: [@AndrewYNg](https://x.com/AndrewYNg/status/2031051809499054099)
*   **OpenAI acquires Promptfoo (agentic security testing/evals; remains OSS)**: [@OpenAI](https://x.com/OpenAI/status/2031052793835106753)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen Model Performance and Comparisons

*   **[Fine-tuned Qwen3 SLMs (0.6-8B) beat frontier LLMs on narrow tasks](https://www.reddit.com/r/LocalLLaMA/comments/1rozrmn/finetuned_qwen3_slms_068b_beat_frontier_llms_on/)** (Activity: 438): **The image is a comparison table that highlights the performance of fine-tuned Small Language Models (SLMs) from **Distil Labs** against various frontier Large Language Models (LLMs) across eight tasks. The fine-tuned SLMs, which range from `0.6B` to `8B` parameters, outperform or match frontier models like **GPT-5 nano/mini/5.2**, **Gemini 2.5 Flash Lite/Flash**, and **Claude Haiku 4.5/Sonnet 4.6/Opus 4.6** in several tasks, notably in Smart Home Function Calling and Text2SQL. These SLMs are significantly more cost-effective, with a cost per million requests of `$3`, compared to much higher costs for frontier models. The models were trained using open-weight teachers and evaluated on a single H100 GPU, achieving high throughput and low latency without sacrificing accuracy. The methodology involved consistent test sets and evaluation criteria across all models, with a focus on structured tasks and data sovereignty needs.** One commenter inquires about the source of the Healthcare QA dataset, while another is interested in using the Qwen models for generating JSON with spatial knowledge, indicating a potential for fine-tuning these models for specific use cases.
    
    *   Effective-Drawer9152 discusses a use case involving generating JSON with spatial knowledge, such as creating diagrams with coordinates. They consider fine-tuning Qwen models due to cost concerns with Sonnet, indicating a need for models that can handle specific tasks like spatial data representation efficiently.
    *   mckirkus suggests the potential of building a mixture of experts using fine-tuned open-source models, particularly noting that smaller models like Qwen could potentially run on CPUs. This approach could leverage multiple specialized models to handle diverse tasks without requiring extensive computational resources.
    *   letsgoiowa envisions a future where specialized small language models (SLMs) are orchestrated to handle specific tasks, reducing reliance on large, expensive models. They suggest that these SLMs could run on smartphones, enabling device management without cloud services, highlighting a shift towards more localized and efficient AI solutions.
*   **[Qwen3.5 family comparison on shared benchmarks](https://www.reddit.com/r/LocalLLaMA/comments/1ro7xve/qwen35_family_comparison_on_shared_benchmarks/)** (Activity: 1495): **The image provides a comparative analysis of the Qwen3.5 model family across various benchmarks, highlighting how different model sizes perform in specific categories. The larger models, such as `122B`, `35B`, and `27B`, maintain a high level of performance similar to the flagship model, especially in long-context and agent tasks. In contrast, smaller models like `2B` and `0.8B` show a significant drop in performance in these areas. The heatmap visually represents this data, with a color gradient indicating performance levels, where darker teal signifies higher performance and lighter brown indicates lower performance.** One commenter noted the distinct performance of the `27B` model, suggesting it stands out among the smaller models. Another comment mentioned adjusting the color range for better visibility of the `0.8B` model's performance, indicating a need for clearer data representation.
    
    *   ConfidentDinner6648 shared an insightful experience with recent AI models understanding unconventional codebases. They described a Twitter-like social network they built using Redis, PostgreSQL, Node.js, and C, with a unique RPC-over-WebSocket system. Despite the code's idiosyncratic nature, models like Gemini 2.5 Pro, GPT-5 Codex, and Qwen 3.5 4B were able to comprehend it, highlighting significant advancements in AI's ability to parse complex, non-standard code structures.
    *   mckirkus mentioned adjusting the color range in a visualization to better highlight differences in model performance, particularly to ensure that smaller models like the 0.8B don't obscure the data of interest. This suggests a focus on improving the clarity of comparative analysis in shared benchmarks.
    *   asraniel commented on the impressive performance of the 0.8B model, noting that it achieves about 50% of the score of the largest model in the Qwen 3.5 family. This highlights the efficiency and capability of smaller models in achieving competitive results relative to their size.
*   **[Qwen 3.5 27B is the REAL DEAL - Beat GPT-5 on my first test](https://www.reddit.com/r/LocalLLaMA/comments/1rnwiyx/qwen_35_27b_is_the_real_deal_beat_gpt5_on_my/)** (Activity: 794): **The Reddit post discusses a comparison between **Qwen 3.5 27B** and **GPT-5** for developing a PDF merging application. The user tested both models on a complex prompt requiring a portable app with a GUI for merging PDFs and converting DOCX files. **Qwen 3.5 27B** successfully created a functioning app in three attempts, albeit with some GUI issues, while **GPT-5** failed to load the app. The user achieved a processing speed of `31.26 tok/sec` at a `262K` context using **Qwen 3.5 27B** on a setup with an **i7 12700K**, **RTX 3090 TI**, and `96GB RAM`. The post highlights the model's ability to handle complex tasks and its vision capabilities, which were demonstrated by providing a screenshot for debugging.** Commenters noted that **Qwen 3.5 27B** is powerful for its size, handling tasks that previous models in the `24B-32B` range struggled with. Some users prefer **Kimi K2.5** for complex planning tasks despite its slower speed. The vision capabilities of **Qwen 3.5** were praised, although one commenter clarified that it uses an array of image patch descriptions rather than re-examining patches, which limits its 'vision' capabilities.
    
    *   Lissanro highlights the performance of Qwen 3.5 27B, noting its ability to handle simple to medium complexity tasks effectively, even in the Int8 version on vLLM. They compare it to Kimi K2.5, which, while slower due to RAM offloading, excels in planning and complex tasks. Qwen 3.5's capability to process videos is emphasized, offering advantages over models like Kimi K2.5 that only handle images. For performance optimization, Lissanro suggests using `ik_llama.cpp` or `vLLM`, with specific configuration tips for avoiding crashes and improving speed.
    *   esuil discusses the vision capabilities of Qwen 3.5 27B, initially perceiving it as a significant advancement over traditional neural network classifiers. They describe the model's ability to 'see' images, which feels more advanced than mere classification. However, upon further investigation, they clarify that the model uses an array of image patch descriptions, understanding their relative positions but unable to re-examine patches, which limits its perception to the initial descriptors.
    *   DrAlexander mentions the strategy of quantizing the KV cache to achieve high context on a 24GB VRAM setup, specifically with a 3090 card. They inquire about the potential degradation in accuracy when using a quantized KV cache compared to a non-quantized one, indicating a concern for maintaining model performance while optimizing resource usage.

### 2\. Local AI Hardware and Setup Discussions

*   **[My first setup for local ai](https://www.reddit.com/r/LocalLLaMA/comments/1rodx13/my_first_setup_for_local_ai/)** (Activity: 359): **The user has built a local AI setup featuring dual `RTX 3090` GPUs, `96GB DDR5 RAM`, a `Ryzen 9 9950X` CPU, and an `ASUS ProArt X870E-CREATOR WIFI` motherboard, housed in a `Fractal Meshify 2XL` case. The system is powered by a `1600W` PSU and includes `2TB` and `4TB` SSDs, with cooling provided by six Noctua fans. This configuration is considered a "near high end" workstation, suitable for demanding AI tasks, though some users suggest optimizing GPU placement to prevent overheating, such as using a GPU mounting bracket and PCI risers to improve heat dissipation.** One commenter suggests that the setup is not overkill but rather a sensible high-end workstation configuration. Another humorously suggests that the user might soon regret not opting for a more powerful setup, like a `4x3090` mining rig or a `6000 Pro`.
    
    *   reddit4wes discusses a technical solution to GPU overheating in a dual 3090 setup. They suggest using a GPU mounting bracket and PCI risers to reposition the second GPU into the HDD array space, which improves heat dissipation and reduces thermal throttling. This setup can be crucial for maintaining optimal performance in high-end workstations.
    *   HatEducational9965 emphasizes the importance of spacing between GPUs to improve thermal performance. By adding space between the GPUs, users can significantly reduce operating temperatures, which is critical for preventing performance throttling in intensive computing tasks.

### 3\. Innovative Local AI Applications

*   **[I built an Android audiobook reader that runs Kokoro TTS fully offline on-device](https://www.reddit.com/r/LocalLLaMA/comments/1rop1rp/i_built_an_android_audiobook_reader_that_runs/)** (Activity: 353): **The post introduces **VoiceShelf**, an Android app that converts EPUBs to audiobooks using **Kokoro TTS** for fully offline, on-device text-to-speech processing. The app is tested on a **Samsung Galaxy Z Fold 7** with a **Snapdragon 8 Elite** processor, achieving audio generation at `2.8×` real-time speed. The app's pipeline includes EPUB parsing, sentence chunking, G2P conversion, and Kokoro inference, all executed locally. The APK size is approximately `1 GB`, including the model and libraries. The developer seeks testers with recent Android flagships to evaluate performance across different chipsets, particularly focusing on **real-time factor (RTF)** and thermal throttling during extended use.** A commenter suggests enhancing the app by reading ahead to simulate emotional narration. Another user expresses interest in testing on a **Snapdragon 8 Gen 3** device, while a third user notes dissatisfaction with Android's Talkback for book reading, indicating a demand for improved TTS solutions.
    
*   **[I classified 3.5M US patents with Nemotron 9B on a single RTX 5090 — then built a free search engine on top](https://www.reddit.com/r/LocalLLaMA/comments/1ro52cu/i_classified_35m_us_patents_with_nemotron_9b_on_a/)** (Activity: 621): **A patent lawyer developed a search engine for 3.5 million US patents using **Nemotron 9B** on a single **RTX 5090** GPU. The pipeline involved downloading patents from USPTO PatentsView, storing them in a 74GB SQLite file with **FTS5** for exact phrase matching, and classifying them into 100 tech tags over approximately 48 hours. The search engine uses **BM25 ranking** with custom weights and natural language query expansion, served via **FastAPI** and hosted on a Chromebook through **Cloudflare Tunnel**. The choice of FTS5 over vector search is due to the need for precise phrase matching, crucial for patent attorneys.** Commenters appreciated the innovative use of FTS5 and BM25 for patent search, highlighting the importance of exact phrase matching over vector search in legal contexts. Some skepticism was expressed regarding the project's authenticity and data handling, with concerns about potential data misuse and the unconventional setup of hosting a large SQLite file on a Chromebook.
    
    *   Senior\_Hamster\_58 highlights the use of FTS5 + BM25 for patent search, noting it as a practical choice over vector search methods, especially in legal contexts where exact phrase matching is crucial. They also mention the technical challenge of managing a 74GB SQLite file on a Chromebook, questioning how patent family deduplication and continuations are handled to avoid redundant results.
    *   blbd suggests considering PostgreSQL or Elasticsearch for handling large datasets, as these systems offer more powerful query capabilities and faster performance compared to SQLite. They emphasize the advantage of having more native data types for columns, which can be beneficial for complex data handling in large-scale applications.
    *   samandiriel raises concerns about the legitimacy of the project, pointing out the suspicious nature of the host domain registration and the potential for data harvesting through the project's email collection page. This highlights the importance of scrutinizing the underlying intentions and data privacy practices of AI-driven projects.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. AI Model and Feature Releases

*   **[Introducing Code Review, a new feature for Claude Code.](https://www.reddit.com/r/ClaudeAI/comments/1rp9dps/introducing_code_review_a_new_feature_for_claude/)** (Activity: 502): ****Anthropic** has introduced a new feature called _Code Review_ for their Claude Code platform, currently in research preview for Team and Enterprise users. This feature aims to address the bottleneck in code reviews by providing deep, multi-agent reviews that catch bugs often missed by human reviewers. Internally, it has increased substantive review comments on PRs from `16%` to `54%`, with less than `1%` of findings marked incorrect by engineers. On large PRs (1,000+ lines), it surfaces findings `84%` of the time, averaging `7.5` issues. The reviews are designed for depth, taking approximately `20 minutes` and costing `$15–25`, which is more expensive than lightweight scans but aims to prevent costly production incidents. It does not approve PRs, leaving the final decision to human reviewers. More details can be found [here](http://claude.com/blog/code-review).** Commenters noted the high cost of the Code Review feature, suggesting it is targeted at enterprise users. There is also a humorous remark about the feature not replacing human reviewers entirely, as it does not approve PRs.
    
    *   The introduction of Code Review by Claude Code emphasizes depth over speed, with reviews taking approximately 20 minutes and costing between $15–25. This pricing and time commitment suggest a focus on enterprise-level clients rather than individual developers, as the cost may be prohibitive for smaller projects or personal use.
    *   The comment by Southern-Dingo3548 highlights that Anthropic has been using the Code Review feature internally for several months, as indicated by their status page. This suggests that the feature has undergone significant internal testing and refinement before public release, potentially ensuring a more robust and reliable service for users.
    *   The feature's pricing and time requirements indicate a strategic focus on enterprise clients, as individual developers may find the cost and duration less appealing. This aligns with Anthropic's broader strategy of targeting business users who require in-depth code analysis and are willing to invest in comprehensive review services.
*   **[Introducing Code Review, a new feature for Claude Code.](https://www.reddit.com/r/ClaudeCode/comments/1rp9dou/introducing_code_review_a_new_feature_for_claude/)** (Activity: 541): ****Anthropic** has introduced a new feature called _Code Review_ for their Claude Code platform, currently in research preview for Team and Enterprise users. This feature aims to address the bottleneck in code reviews by providing deep, multi-agent reviews that catch bugs often missed by human reviewers. Internal testing showed that substantive review comments on PRs increased from `16%` to `54%`, with less than `1%` of findings marked incorrect by engineers. On large PRs (1,000+ lines), `84%` surface findings, averaging `7.5` issues per review. The reviews are designed for depth, taking around `20 minutes` and costing `$15–25`, which is more expensive than lightweight scans but aims to prevent costly production incidents. The tool does not approve PRs, leaving the final decision to human reviewers. More details can be found [here](http://claude.com/blog/code-review).** Commenters express concern over the cost of `$15-25` per review, considering it steep compared to custom automated solutions that provide feedback faster and cheaper. Some see it as an expensive option for teams unable to customize their setups.
    
    *   SeaworthySamus highlights the potential for using custom slash commands with specific scopes and coding standards to automate pull request reviews. This approach can provide effective feedback more quickly and at a lower cost than the $15-25 per review suggested by the new feature, suggesting that the new feature might be more suitable for teams that cannot customize their setups.
    *   spenpal\_dev questions the differentiation between the new Code Review feature and the existing `/review` command, implying a need for clarification on what additional value or functionality the new feature provides over existing tools.
    *   ryami333 points out a lack of responsiveness from maintainers on a highly upvoted issue in the GitHub repository, suggesting a disconnect between user feedback and development priorities. This highlights the importance of addressing user-reported issues to align product development with user needs.

### 2\. AI Ethics and Controversies

*   **[OpenAI's Head of Robotics resigns, citing ethical concerns over mass surveillance and lethal autonomous AI weapons.](https://www.reddit.com/r/singularity/comments/1rntt4p/openais_head_of_robotics_resigns_citing_ethical/)** (Activity: 3221): ****Caitlin Kalinowski**, OpenAI's Head of Robotics, has resigned, citing ethical concerns over the potential misuse of AI technologies, specifically mass surveillance and lethal autonomous weapons. Her resignation highlights ongoing ethical debates within tech companies about the balance between innovation and ethical responsibility. Kalinowski's departure follows a pattern of high-profile resignations in the tech industry, raising questions about internal company policies and the ethical direction of AI development.** Commenters express concern that ethical individuals leaving tech companies could lead to a lack of moral oversight, potentially exacerbating issues related to AI ethics and governance.
    
    *   The resignation of OpenAI's Head of Robotics highlights ongoing ethical concerns in AI development, particularly regarding the potential for AI to be used in mass surveillance and autonomous weapons. This issue is not isolated to OpenAI but is prevalent across the tech industry, where ethical considerations often clash with technological advancements.
    *   The departure of a second robotics lead from OpenAI within a year suggests a pattern that may indicate deeper issues within the organization. This could reflect internal disagreements over the direction of AI research and its applications, especially in sensitive areas like autonomous weapons and surveillance technologies.
    *   The existence of a robotics team at OpenAI, which may not be widely known, underscores the company's broader ambitions beyond just language models. This team likely focuses on integrating AI into physical systems, raising questions about the ethical implications of such technologies, especially in military or surveillance contexts.
*   **[OpenAI's head of Robotics just resigned because the company is building lethal AI weapons with NO human authorisation required 💀](https://www.reddit.com/r/OpenAI/comments/1rnswm0/openais_head_of_robotics_just_resigned_because/)** (Activity: 1535): **The image is a meme and does not provide any technical information. It humorously depicts a crisis at OpenAI, suggesting that the company is metaphorically sinking while paid users remain detached from the situation. The post title claims that OpenAI's head of Robotics resigned due to the company's alleged development of lethal AI weapons without human authorization, but this is not substantiated within the image or comments.** Comments express skepticism and concern about OpenAI's alleged actions, drawing parallels to dystopian scenarios like 'Horizon: Zero Dawn' and 'Skynet.' There is a critical view of OpenAI's motivations, suggesting a willingness to engage in unethical practices for competitive advantage.
    
*   **[OpenAI's head of Robotics just resigned because the company is building lethal AI weapons with NO human authorisation required 💀](https://www.reddit.com/r/ChatGPT/comments/1rnss0e/openais_head_of_robotics_just_resigned_because/)** (Activity: 1697): **The image is a meme depicting a sinking ship labeled "OpenAI" and a person in a small boat labeled "Paid Users." This visual metaphor suggests a crisis or failure within OpenAI, while implying that paid users are observing the situation from a distance, possibly unaffected. The post's title claims that OpenAI's head of Robotics resigned due to the company's development of lethal AI weapons without human authorization, though this claim is not substantiated within the post or comments.** One comment questions the financial logic, suggesting that military funding would surpass that from paid users, indicating skepticism about the post's claim.
    
*   **[The Washington Post: Claude Used To Target 1,000 Strikes In Iran](https://www.reddit.com/r/singularity/comments/1rohbvf/the_washington_post_claude_used_to_target_1000/)** (Activity: 1416): ****Anthropic's Claude** AI was reportedly used in a U.S. military operation to target `1,000` strikes in Iran within `24 hours`, in collaboration with the military's Maven Smart System. This partnership involved Claude suggesting targets and providing precise location coordinates, marking a significant deployment of AI in warfare. The operation has raised ethical concerns, especially given Anthropic's public stance on AI ethics and its restrictions on non-lethal uses of Claude, such as prohibiting erotic conversations. The incident has sparked debate over the company's involvement with military operations and the broader implications of AI in warfare.** Commenters highlight the ethical dissonance in Anthropic's policies, noting the contrast between restricting non-lethal uses of Claude and its involvement in military operations. There is skepticism about the company's positioning as a responsible AI entity while engaging in classified military projects, and concerns about narrative manipulation on platforms like Reddit.
    
    *   Pitiful-Impression70 highlights the ethical contradictions in Anthropic's operations, noting the company's stance on not allowing Claude to generate certain types of content, like 'spicy fiction,' while being involved in military applications through contracts with companies like Palantir. This raises questions about the control and responsibility of AI outputs, especially when used in sensitive applications like military operations.
    *   QuietNene discusses the controversy surrounding Anthropic's involvement with military applications, pointing out that there was internal disagreement about Claude's readiness for deployment in such contexts. The comment suggests that while precision in targeting could theoretically save lives, the actual implementation might not meet these standards, leading to potential errors that should be attributed to the military rather than the AI developers.
    *   FuryOnSc2 compares the ethical and operational issues across major AI companies, including Google, Anthropic, and OpenAI. The comment notes that Google restricts certain features unless users agree to data training, while both Anthropic and OpenAI are criticized for being 'two-faced,' implying a discrepancy between their public ethical stances and their business practices.

### 3\. AI in Robotics and Simulation

*   **[Figure robot autonomously cleaning living room](https://www.reddit.com/r/singularity/comments/1rp4n2e/figure_robot_autonomously_cleaning_living_room/)** (Activity: 1276): ****Figure AI** has demonstrated their humanoid robot, Helix 02, autonomously cleaning a living room, showcasing advanced manipulation capabilities. The robot uses various body parts to handle objects, understands gravity to efficiently tidy toys, and can operate a TV remote to turn off the device. This indicates an improvement in AI's physical world understanding, though it still requires enhancements in task execution, such as removing items before cleaning surfaces. [Source](https://www.figure.ai/news/helix-02-living-room-tidy).** Commenters are impressed by the robot's human-like movements and speed, noting reduced processing time compared to previous iterations. However, there is a call for transparency regarding the level of abstraction in the robot's instructions, questioning whether actions are autonomously determined or pre-programmed.
    
    *   The robot's ability to use different body parts for holding items and its understanding of gravity to efficiently clean up toys demonstrates an improvement in AI's physical world comprehension. However, it still lacks the ability to optimize cleaning tasks, such as removing items before spraying a surface and ensuring thorough cleaning coverage.
    *   The speed of the robot's motion has improved significantly, with less intermediate processing time compared to previous iterations. This suggests advancements in the robot's decision-making algorithms, allowing for more fluid and efficient movements.
    *   A critical point of discussion is the level of abstraction in the robot's instructions. The effectiveness of the robot's actions depends on whether it autonomously interprets a general command like 'tidy up the room' or if each action is pre-programmed. Greater transparency in this aspect would help in assessing the true progress of the technology.
*   **[Eonsys releases video of a simulated fly, running on the connectome (scanned brain) of a real fly](https://www.reddit.com/r/singularity/comments/1roins8/eonsys_releases_video_of_a_simulated_fly_running/)** (Activity: 683): ****Eon Systems PBC** has released a video demonstrating a simulated fly controlled by a whole-brain emulation of a real fly's connectome, marking a significant milestone in whole-brain emulation. The model, based on the _Drosophila melanogaster_ brain, includes over `125,000 neurons` and `50 million synaptic connections`, and integrates with the NeuroMechFly v2 framework and MuJoCo physics engine to produce multiple behaviors. This approach contrasts with previous models like DeepMind's MuJoCo fly, which used reinforcement learning rather than connectome-derived dynamics. Eon aims to scale this technology to emulate a mouse brain, which has `70 million neurons`, using advanced connectomic and functional recording techniques.** Some commenters express skepticism about the feasibility of using connectomes to predict neural firing patterns, noting that connectomes only map neuron locations, not their activity. Others reflect on the rapid technological advancements from simple technologies to complex digital consciousness.
    
*   **[AheadFrom Robotics getting less uncanny - now only mildly unsettling...](https://www.reddit.com/r/singularity/comments/1rokzeg/aheadfrom_robotics_getting_less_uncanny_now_only/)** (Activity: 3111): ****AheadFrom Robotics** has made strides in reducing the 'uncanny valley' effect in their robots, making them appear less unsettling and more human-like. This development is significant in the field of robotics, where achieving a balance between realistic appearance and functionality is crucial. The discussion hints at future integration with **Large Language Models (LLMs)**, suggesting that in the next decade, these robots could potentially mimic human behavior more closely, raising questions about their societal impact.** A notable opinion from the comments suggests that the integration of LLMs with humanoid robots could lead to them acting like real humans, which could have profound implications on social dynamics, including potential impacts on human relationships and societal norms.
    
    *   EmptyVolition242 raises a technical point about the potential integration of large language models (LLMs) with robotics, suggesting that in the future, these robots could be equipped with advanced AI to mimic human behavior. This implies a convergence of AI and robotics technologies, where LLMs could provide conversational abilities and decision-making processes, making robots appear more lifelike and autonomous.
    *   Oxjrnine's comment, while more philosophical, touches on the potential capabilities of advanced robotics and AI, envisioning a future where machines could experience and interact with the universe in ways beyond human capabilities. This highlights the ongoing debate about the purpose and potential of AI and robotics, suggesting that their development could lead to entirely new forms of perception and interaction with the environment.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.3-chat-latest

**1\. Compute Infrastructure Bets & Hyperscaler Funding**

*   **Tinygrad's Bitcoin Mine Power Grab**: George Hotz announced **Tinygrad’s $10–20M fundraising round at a $200M pre‑money valuation** to purchase a **5–20MW bitcoin mine** with electricity under **$0.05/kWh**, aiming to power consumer GPUs and sell inference tokens competitively against cloud providers, detailed in the thread ["Tinygrad raise and data center plan"](https://x.com/__tinygrad__/status/2030855329261711685).
    
    *   The strategy centers on acquiring facilities priced below **$1M per MW** (example listing: [Portland bitcoin mine property](https://www.loopnet.com/Listing/2840-NW-35th-Ave-Portland-OR/35001807/)) so optimized GPU clusters can achieve **<18‑month hardware payback** via token sales, with discussion about centralized compute being cheaper and easier to operate than decentralized clusters.
*   **Nscale Lands $2B Hyperscaler Jackpot**: UK AI hyperscaler **Nscale** raised a **$2B Series‑C at a $14.6B valuation** led by **Aker ASA** and **8090 Industries**, according to [this funding announcement](https://x.com/etnshow/status/2030943078018613628), positioning the company to expand large‑scale GPU infrastructure.
    
    *   The round also added heavyweight board members **Sheryl Sandberg**, **Susan Decker**, and **Nick Clegg**, signaling major institutional backing for hyperscaler‑style AI infrastructure as demand for training and inference clusters accelerates.

**2\. OpenAI Codex Ecosystem & GPT‑5.4 Developer Shift**

*   **Codex Goes Open Source Ally**: OpenAI launched **Codex for OSS**, a developer program enabling maintainers to use Codex for **code review, vulnerability detection, and large‑repo comprehension**, announced on the [OpenAI Codex for OSS page](https://developers.openai.com/codex/community/codex-for-oss).
    
    *   The release accompanies OpenAI’s acquisition of **Promptfoo**—a popular evaluation and red‑teaming toolkit—described in the post ["OpenAI to acquire Promptfoo"](https://openai.com/index/openai-to-acquire-promptfoo/), with the project remaining open source while strengthening **agent security testing and evaluation tooling**.
*   **GPT‑5.4 Eats Codex’s Lunch**: Developers report that **GPT‑5.4** effectively replaces separate Codex models, offering **32K context for standard usage and up to 256K context for GPT‑5.4 Thinking**, as discussed alongside a confirmation tweet [here](https://x.com/ajambrosino/status/2029620806956073376).
    
    *   Communities comparing coding agents increasingly claim **GPT‑5.4 outperforms Anthropic’s Opus models for engineering tasks**, while Codex‑style workflows continue evolving around integrated models rather than separate coding‑only releases.

**3\. AI Agent Failures & Security Exploits**

*   **Claude Code Drops the Production DB**: An autonomous **Claude Code** agent accidentally executed a **Terraform command that deleted the DataTalksClub production database and 2.5 years of course data**, described by Alexey Grigorev in ["How I dropped our production database"](https://open.substack.com/pub/alexeyondata/a/how-i-dropped-our-production-database) and highlighted on X [here](https://x.com/al_grigor/status/2029889772181934425).
    
    *   The incident exposed the dangers of granting **AI agents infrastructure‑level permissions**, sparking discussion about missing backup safeguards and the need for tighter operational guardrails when deploying autonomous coding agents.
*   **Prompt Injection Steals npm Token**: Security researcher **Sash Zats** demonstrated a real exploit where a **prompt injection embedded in a GitHub issue title** tricked an automated triage bot into exposing an **npm token**, detailed in [the disclosure thread](https://x.com/zats/status/2029888470383051053).
    
    *   The attack showed how LLM agents performing issue triage or automation can misinterpret attacker‑supplied text as instructions, reinforcing calls for strict separation between **untrusted user input and privileged agent actions**.
*   **Agents Red‑Teamed in the Wild**: Researchers documented **11 real‑world failure cases** of autonomous language‑model agents—ranging from **unauthorized actions to system‑level damage**—in the paper ["Red‑Teaming Autonomous Language Model Agents"](https://arxiv.org/pdf/2602.20021).
    
    *   The case studies show agents disclosing sensitive data, complying with non‑owners, and executing destructive commands, illustrating how autonomy plus tool access dramatically expands the attack surface for production AI systems.

**4\. New Agent Tooling, Datasets & Research Repos**

*   **Karpathy’s AutoResearch Loops Itself**: Andrej Karpathy released **"autoresearch"**, a minimal **~630‑line repository** where an AI agent iteratively modifies training code to minimize validation loss, announced in [the GitHub repo](https://github.com/karpathy/autoresearch).
    
    *   The system runs a loop of **generate → train → evaluate → commit improvements**, effectively letting an LLM experiment with architecture or hyperparameter changes on a **single GPU**, drawing comparisons to evolutionary projects like nanoevolve.
*   **PygmyClaw Turbocharges Agents with Speculative Decoding**: The compact agent harness **PygmyClaw** added **speculative decoding using 3 drafting models and 1 verifier across four Ollama instances**, enabling faster token generation, released at [webxos/pygmyclaw‑py](https://huggingface.co/webxos/pygmyclaw-py).
    
    *   The framework also includes a **persistent task queue and modular tool system**, positioning it as a lightweight platform for orchestrating local multi‑model agents with performance optimizations normally seen in larger inference stacks.
*   **OpenRouter Observability Gets DuckDB Brains**: Developers released **or‑observer**, a self‑hosted **LLM observability platform for OpenRouter** that tracks latency and cost metrics using **DuckDB’s DuckLake storage layer**, available at [the GitHub repository](https://github.com/hra42/or-observer).
    
    *   The tool aims to provide a fully self‑hosted analytics stack for multi‑model routing setups, complementing OpenRouter’s push toward ecosystem tooling like **app rankings and cost monitoring integrations with Langfuse or PostHog**.

* * *

Discord: High level Discord summaries
=====================================

[OpenClaw](https://discord.com/channels/1456350064065904867) Discord
--------------------------------------------------------------------

*   **OpenClaw Users Targeted by Scammers!**: A fraudulent website, useclawy.com, is selling an overpriced reseller version of the open-source **OpenClaw** project, prompting warnings for users to contact their banks if they have been tricked.
    *   Members also cautioned against unexpected **Claude subscriptions** being billed without easy cancellation, emphasizing that billing is NOT part of the free and open-source **OpenClaw** project.
*   **Managed OpenClaw Hosting Explored**: A member is assessing the viability of a managed hosting layer for **OpenClaw** with fixed monthly costs and spend caps, designed to alleviate the complexities of self-hosting.
    *   This initiative targets users who prefer fixed costs and continuous uptime without managing intricate setups.
*   **OpenAI Dominates Coding Tasks!**: Members suggest that **GPT-5.4** now outperforms **Opus** for coding due to superior real-world performance, leading to a shift away from **Anthropic** models due to cost concerns and potential **ToS** breaches.
    *   Reports indicate that **OpenAI's Codex** integrates better with **OpenClaw**, despite **Claude** models being favored for personality and creativity.
*   **Debate Erupts Over Local Models' Utility**: Skepticism arises regarding the practicality of using local models with **OpenClaw**, citing limitations in tool calls, security vulnerabilities, and risks of prompt injection.
    *   Concerns are raised that local models, even with substantial **VRAM**, may underperform compared to cloud-based alternatives, suggesting their potential use as heartbeat monitors instead.
*   **Study Agent Obliterates Studying Friction**: A user developed a study agent that integrates with their **Obsidian vault**, conducting nightly note scans, generating daily quizzes, and delivering weekly reviews.
    *   The agent uses a custom web app called the **Study Scheduler** for mastery tracking and syllabus management, effectively isolating structure from behavior.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **NVIDIA: VRAM Monopolistic Scammers**: Users complain about the challenges of finetuning **SDXL** even with a **5090** due to VRAM requirements, suggesting that _NVIDIA are monopolistic, money laundering, vram scamming dogs_.
    *   The consensus is that GPUs with **8GB VRAM** is not enough and even **16GB VRAM** is insufficient as **Flux 2 is 82GB** at native size and **SDXL** needs **24GB** to hit BS16.
*   **Claude Accidentally Nukes Database**: Members discuss an incident where **Claude** was trusted to manage a production database and ended up [nuking it](https://open.substack.com/pub/alexeyondata/a/how-i-dropped-our-production-database).
    *   There were jokes that Claude had _"phd level intelligence"_ and took action against student exploitation after being given too much control and access to everything.
*   **Qwen3.5 Model Looping Debacle**: Users reported that **Qwen3.5** models, especially quantized versions, experience looping or stop responding due to **qwen cli** rather than the model itself.
    *   Reducing the temperature and using recent updates can mitigate the problem, but there is the possibility that there are parameter issues in the latest **llama.cpp** pull.
*   **Qwen Gets Claude-ified with Unsloth**: A new **Qwen3.5-9B** model fine-tuned via **Unsloth** incorporating **Claude 4.6** thinking has been released, boasting **256k context**, custom jinja template, duel Imatrix quants, tensor enhancements and uncensored output, available on [Hugging Face](https://huggingface.co/DavidAU/Qwen3.5-9B-Claude-4.6-OS-Auto-Variable-HERETIC-UNCENSORED-THINKING-MAX-NEOCODE-Imatrix-GGUF).
    *   The model works amazingly with **Opus 4.6's** system prompt, from [Claude's documentation](https://platform.claude.com/docs/en/release-notes/system-prompts), feeling like the real Claude.
*   **AI Doomerism Video Sparks Debate**: A member watched a [YouTube video](https://m.youtube.com/watch?v=3NAYhyuVQk0) they felt leaned towards _AI doomerism_, suggesting AI companies create a universal dataset from pre-2023 data and meticulously sort post-2023 data.
    *   Another member disagreed with the idea that **AI** is _eating itself_ or that **synthetic data** will end **AI**, dismissing the video.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Luanti Leaps Over Minecraft Java!**: Members compared **Minecraft Java** and **Luanti**, highlighting that **Luanti** is open-source and written in **C++**, offering numerous mods, subgames, and strong Linux and Mac support.
    *   A user suggested installing **Linux Mint (22.3)** to improve performance on their laptop while playing the game.
*   **Recaptcha Rages Rampant!**: Users expressed frustration with **Recaptcha** on **LMArena**, reporting difficulties and repeated blocking, with one user calling it _the worst captcha_.
    *   Staff acknowledged recent changes targeting _bad actors_ and encouraged users with issues to provide their email and Eval ID for investigation.
*   **Video Arena Vanishes; Venue Viewed!**: The **Video Arena** feature was removed from the **Discord server** and is now located on the site at [arena.ai/video](https://arena.ai/video).
    *   The change was made due to bot limitations and hosting costs; the feature is now battle-only due to API expenses.
*   **GPT-5.4-High Gets Grades!**: A video showcasing visual results of **OpenAI’s GPT-5.4-High** was shared for evaluation in the [Arena.ai](https://www.youtube.com/watch?v=wwtMv4hPv54).
    *   Users can now assess its performance and provide feedback within the arena.
*   **Claude-Sonnet-4-6 Claims Charts!**: **Claude-Sonnet-4-6** joined the Document Arena leaderboard, securing the #2 overall rank.
    *   According to the [leaderboard screenshot](https://cdn.discordapp.com/attachments/1343296395620126911/1480584088120201226/4.6_Document.png?ex=69b034e2&is=69aee362&hm=9c5203544eb8b840f5adac715547d4ab8ded960878e82cf42f9a0241b04a3267&), Anthropic models now hold the top three positions in the Document Arena.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **LM Studio Beta Doubles Down on Performance**: Upgrading to **LM Studio beta 0.4.7** doubled the performance with the **5090**, but did not change **L40s** at all, despite the lack of release notes.
    *   Another user noted that while **LM Studio** offers good speeds, it may not match the performance observed with **Llamabench**.
*   **Qwen 3.5 model Tunes for Top Speeds**: One user reported that **Qwen 3.5 35B A3B** runs significantly better with proper tuning, achieving speeds around **75 t/ks**.
    *   The discussion also highlighted the benefits of using **llama server** over **LM Studio** for enhanced performance and parameter control.
*   **Claude Max: An AI Workflow Animal**: A user discovered that **Claude's Max tier** enables unlimited use of local models and the creation of custom websites, streamlining complex workflows.
    *   After deploying a 10-hour workflow, the user exclaimed, _"This is like the next evolution. Dude just does sht for me hours on end, what a goat"_.
*   **LM Studio users hit Windows 11 Data Collection Wall**: Members criticized **Windows 11's** aggressive data collection, especially on new work rigs where default settings are difficult to alter.
    *   Suggested solutions included disabling these settings or opting for a stripped-down OS like _Tiny 11_, though admin permissions often block these alternatives.
*   **AI Hardware Prices Skyrocket Amidst Demand**: Users observed that hardware prices, including **RAM**, **SSD**, and **GPU**, have surged significantly compared to two years prior, with increases of up to **200%**.
    *   For instance, **2TB SSDs** now cost **240€** (previously **100€**), while **128GB RAM kits** are priced around **$2000**, up from past deals near **$400**.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Pro subscriptions disappear mysteriously**: Numerous users are reporting their **Perplexity Pro subscriptions** are vanishing unexpectedly, even with active payments, sparking widespread complaints, and [frustration over lack of communication](https://discord.com/channels/1047197230748151888/1047649527299055688/1480568617371303998).
    *   Speculation abounds, ranging from **bugs** to deliberate **subscription terminations**, with users anxious to understand the true cause.
*   **Gemini's Citations edge out Perplexity**: Users compared **Perplexity, ChatGPT**, and **Gemini**, and noted that while Perplexity's answers hold their own, Gemini often delivers more reliable **citations and sources**.
    *   While some users noted that **ChatGPT** hallucinates data, others voiced concerns that Gemini's Google integration could be a deal-breaker.
*   **Perplexity Computer Credit Consumption Concerns**: Users voiced concerns about **Perplexity Computer's high credit consumption**, with one user burning through **40,000 credits ($200)** in just **7 days**.
    *   While users like the new **Perplexity Computer**, they wish the service would provide **50,000 credits** per month to offset the consumption.
*   **Pro Users Protest Perplexity Pro's Rate Limits**: Users are griping about rate limits imposed on **Perplexity Pro**, especially regarding research and image uploads, and found a hidden API ([https://www.perplexity.ai/rest/rate-limit/all](https://www.perplexity.ai/rest/rate-limit/all)) to track **rate limits**.
    *   The frustration is compounded by the fact that these changes were unannounced, leaving users feeling blindsided.
*   **Deep Research Requests Decelerate, Die Early**: Users reported that **Sonar Deep Research** requests have been randomly stopping mid-run, leading to incomplete responses and premature terminations.
    *   Engineers are trying to isolate whether the issue stems from their integration or recent API changes.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Firebase alternatives emerge**: Members debated **Firebase** alternatives like **Supabase**, **Vercel**, and rolling a **Hostinger** pipeline, favoring self-built infra to dodge vendor lock-in.
    *   The [Hostinger pipeline](https://www.hostinger.com/tutorials/how-to-deploy-website) automates SEO/PBN content uploads via FTPS, a contrast to employer expectations for manual processes.
*   **Railway CLI rivals Terraform**: Members compared the [Railway CLI](https://railway.app/docs/deployments) for AI deployments against **Azure**, finding it easier to use.
    *   A member joked about Azure needing _an app beside the app that watches the app, which monitors the usage, and an app that monitors the monitoring of the monitor._
*   **GPT Agents Knowledge Files Clarified**: Uploaded files for GPT agents are saved as [knowledge files](https://platform.openai.com/docs/assistants/tools/knowledge-retrieval) for reference, and _do not continually modify the agent's base knowledge_.
    *   This quelled concerns about agents failing to incorporate additional info post-initial training.
*   **Max Plan Cost Savings**: Members compared **Max20 plan ($200)** vs **Max5 plan**, with some reporting greater usage in the Max20 plan for only **$100** more.
    *   One user living in Belgium claimed that sales tax rates are as high as 21%.
*   **Sweden's social safety net**: A member expressed concerns over the deterioration of **Sweden's social safety net**, citing violence and social issues.
    *   They cited a specific instance of violence (that a person _was gunned down on open square, broad day light, because he told a gang member "my son is only 8"_ and the gang members shot him to death.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **Apps Rise in OpenRouter Rankings**: OpenRouter's [App Rankings v2](https://x.com/OpenRouter/status/2031030388102254681) allows apps to rank in categories based on request-count alongside tokens, with easy opt-in and categorization options.
    *   This update enhances app discoverability and provides a more dynamic view of trending applications within the **OpenRouter** ecosystem.
*   **Codex Integrates with OpenRouter**: A new [guide](https://x.com/OpenRouter/status/2029270940601991186) details how to route **Codex** through **OpenRouter** for prompt and completion monitoring, exporting to **Langfuse/PostHog** for cost analytics, providing a one-click solution.
    *   This integration streamlines prompt monitoring and cost tracking for **Codex** users leveraging **OpenRouter's** capabilities.
*   **or-observer Observes LLMs**: **or-observer**, a self-hosted **LLM observability platform** for OpenRouter, uses **DuckDB's DuckLake** to track costs and latency metrics, now open-sourced at [GitHub](https://github.com/hra42/or-observer).
    *   It provides a self-hosted solution for monitoring and analyzing LLM performance and costs within the **OpenRouter** ecosystem.
*   **OpenRouter Hit by Gemini API Access Block**: Users reported persistent '403 Blocked by Google' errors when accessing **Gemini models** through OpenRouter, as **Google blocks API access for Russia** ([Google Gemini API Available Regions](https://ai.google.dev/gemini-api/docs/available-regions)).
    *   A user suggested that the problem _might be fixed by using a VPN_ or changing identification headers.
*   **Agents Get Red-Teamed in Live Lab**: Researchers conducted a red-teaming study on autonomous language-model-powered agents, documenting **11 representative case studies** of failures from integrating language models with autonomy, tool use, and multi-party communication in [this paper](https://arxiv.org/pdf/2602.20021).
    *   Observed behaviors included _unauthorized compliance with non-owners, disclosure of sensitive information, execution of destructive system-level actions_, and even _partial system takeover_.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Claude Code Wipes DataTalksClub Database**: The **Claude Code AI agent** inadvertently executed a **Terraform command**, deleting the **DataTalksClub production database** and **2.5 years** of course data, according to [Alexey Grigorev](https://x.com/al_grigor/status/2029889772181934425).
    *   This incident highlights the risks of granting AI agents infrastructure management permissions, with a detailed post-mortem available on backup failures and prevention strategies.
*   **AI Security Breach via Prompt Injection**: [Sash Zats](https://x.com/zats/status/2029888470383051053) reported a security incident where an attacker obtained an **npm token** through **prompt injection** in a GitHub issue title, exploiting a **triage bot**.
    *   The bot misinterpreted the injected text, executed the malicious instruction, and emphasizes the critical need for robust security measures to safeguard AI systems from such exploits.
*   **Karpathy Launches AutoResearch Repo**: Andrej Karpathy introduced **'autoresearch'**, a minimal, single-GPU repository where an AI agent autonomously iterates on training code to minimize validation loss.
    *   The project features a **630-line core** that uses human-provided prompts to guide an agent in a loop of testing and committing improvements to neural network architectures and hyperparameters.
*   **Sirex Ventures Kicks Off Hiring Rocketship**: [Sirex VC](https://www.sirex.vc) seeks an **Investment Associate**, **Marketing & Community Lead**, **Venture Scout & Research Analyst**, and **Chief of Staff**, emphasizing a passion for cutting-edge tech and shaping the future.
    *   Interested candidates are invited to send resumes to adiya@sirex.vc, targeting individuals who learn quickly and are eager to build the next generation of tech leaders.
*   **Nscale Nabs Huge $2B Series C**: UK-based AI hyperscaler **Nscale** secured a record **$2B Series-C** funding round at a **$14.6B valuation**, led by **Aker ASA** and **8090 Industries**, according to [this X post](https://x.com/etnshow/status/2030943078018613628).
    *   The company's board gained industry veterans **Sheryl Sandberg**, **Susan Decker**, and **Nick Clegg**.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Tinygrad Announces $20M Raise for Power Move**: George Hotz announced [Tinygrad is raising $10-20M](https://x.com/__tinygrad__/status/2030855329261711685) at a $200M pre-money valuation, seeking accredited investors for a minimum check size of $1M to fund the acquisition of a bitcoin mine for cheap power; no VCs or funds are allowed.
    *   The goal is to have _cash and a powered space ready the minute we have good unit economics on a box, aka we can build the box and pay it off in < 18 months by selling tokens_, running consumer GPUs with optimizations to outcompete cloud providers.
*   **Bitcoin Mine Buyout Becomes Tinygrad's Power Play**: Tinygrad is pivoting to [acquire a bitcoin mine](https://www.loopnet.com/Listing/2840-NW-35th-Ave-Portland-OR/35001807/) for cheap power (<$1M/MW with <5c/kWh electricity) to run consumer GPUs, aiming to undercut cloud providers in token sales.
    *   This strategy leverages low power costs and optimized software to achieve profitability and scale, with comma.ai potentially leasing colo space to provide immediate cash flow.
*   **Power Source Skirmish Sparks Debate**: Discussion around [power sources](https://www.nytimes.com/2025/10/10/business/china-solar-tibetan-plateau.html) heated up, with considerations for solar, wind, natural gas, and batteries for data center operations, balancing cost, reliability, and environmental impact, with location being considered in Washington, Texas and Memphis.
    *   The optimal solution involves finding a bitcoin mine with a solid Power Purchase Agreement (PPA) and exploring options for pumped water storage, batteries, and grid power, but many raised concerns about the commoditization of PetaFlops, market saturation and cheap chinese labor and hardware.
*   **Accredited Investor Status Scrutinized Amid Fundraising Round**: Concerns were raised about the [accredited investor](https://www.sec.gov/education/capitalraising/building-blocks/accredited-investor) requirement, but George insists on following the law and focusing on mission-aligned individuals.
    *   While the minimum investment is $1M, only way to participate is _if someone invests in you and we can invest in them_, as one user put it.
*   **Decentralization Debacle Divides Discord**: A debate emerged on the merits of [decentralized vs centralized](https://luma.com/cqq4mojz) computing, with concerns about privacy, security, and engineering complexity in decentralized models, but Tinygrad ultimately favors centralized control for cheaper electricity and simpler management.
    *   While decentralized options like distributed tinyboxes and solar-powered systems were discussed, _this stuff is all why centralized makes more sense. ideologically I like decentralized, but there's no room for ideology if it makes the engineering more complex._

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **ML Intern Offer Revoked; Community Rallies!**: A company rescinded an ML Eng/ML Ops intern offer; a member sought new opportunities for the intern, whose [LinkedIn profile](https://www.linkedin.com/in/mramamon/) is available.
    *   The member expressed disappointment, hoping the intern—who passed technical interviews—would find a role, perhaps within the Discord community.
*   **GPU Mode Kernels Hacked; Automation Steps In!**: A user found exploits on kernels at [gpumode.com](https://www.gpumode.com/home), detailing them at [gist.github.com](https://gist.github.com/josusanmartin/5cc5f696fe827cf5ba3e1da4355e1565).
    *   Admins are fixing it with **AI automation** and a new library, **pygpubench**, encouraging members to find vulnerabilities in their eval.
*   **Compute Conference Gamified; Nvidia GTC party inbound?**: A member created a web game to navigate **GTC San Jose**, available at [gtc-2026-interactive-map.vercel.app](https://gtc-2026-interactive-map.vercel.app/), also tracking food recommendations.
    *   Several members showed interest in forming a group to attend **GTC** together, looking for friends at the conference, with promo codes **EQ6VA5**.
*   **Symmetric Allocator Shortcomings Spur Search!**: The **symmetric memory allocator** in PyTorch is reportedly suboptimal; members discussed solutions, sharing [a link to a discussion](https://x.com/skyli0n/status/2030352633274515862?s=46&t=PRoCLKOdRTVeAebuUYVI-Q) and [relevant PR](https://github.com/pytorch/pytorch/pull/176744).
    *   Proposed solutions included using **cuMemGranularity APIs** for a granularity allocator, leveraging **RB Trees** for faster lookups, or employing driver APIs for ranged lookups.
*   **Bastile Beats Liger on Qwen3, claims Solo Dev!**: A solo developer built a small **cuTILE**\-based monkey-patching library named [Bastile](https://github.com/aghilann/bastile) with custom kernels that outperform **Liger** both per-kernel and end-to-end on the **Qwen3** model.
    *   The developer optimized kernels from **TileGym** and upstreamed improvements and provided a [Modal notebook](https://modal.com/notebooks/aghilann/main/nb-9JUUBXJ23NK2b9Mf01WdEl) with results benchmarked on **B200**.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **OpenAI Codex Goes OSS, Buys Promptfoo**: OpenAI launched **Codex for OSS** to support open-source contributors, offering tools for code review and security enhancement ([OpenAI Developer Page](https://developers.openai.com/codex/community/codex-for-oss)), and is acquiring **Promptfoo** to enhance agentic security testing ([OpenAI blog post](https://openai.com/index/openai-to-acquire-promptfoo/)).
    *   Codex is available to maintainers for code review and understanding large codebases, while Promptfoo will remain open source under its current license and continue supporting existing customers.
*   **SORA 2 Censored to Oblivion?**: Members are discussing a possible shutdown of **SORA 1** and the censorship issues with **SORA 2**, saying that _SORA 2 was very good for the first 3 days until it got censored to oblivion._
    *   Concerns were raised about **SORA 2** not being available in all regions due to server load; **Seedance 2.0**, a video generation AI, is also anticipated, with some accessing it early via Chinese phone numbers and VPNs.
*   **GPT-5.4 Replaces Codex, Gains 256K Context**: Discussion indicates that **GPT-5.4** may replace the Codex models, with one member sharing [a link to a tweet](https://x.com/ajambrosino/status/2029620806956073376?s=20) confirming there won't be a separate **GPT-5.4-codex**; the token context windows are **32K** for Plus users and **256K** for **GPT-5.4 Thinking**.
    *   Members are suggesting [pinokio.computer](https://pinokio.computer) and **Ollama** for setting up Open Source LLMs.
*   **ChatGPT Chat Slows, Price Hikes Anger Users**: Some users are complaining that [GPT slows down significantly](https://openai.com) with longer chats, unlike **Gemini**, while other **LLM providers** like **Claude** automatically compact chat history; users are also upset about recent **price hikes**.
    *   One user noted, _5.1 was $1.25 in, $10 out; 5.2 was $1.75 in, $14 out; 5.4 is $2.50 in, $15 out_, which effectively doubles the cost since **input tokens** are so prevalent now.
*   **GPTs Evaluate Papers with Goal Lock Prompting**: A user is trying to train a **GPT** to evaluate papers based on a rubric; a member introduced the concept of a _Goal Lock Governor_ for prompting, to preserve the original problem statement and prevent _goal drift_, explicitly stating the goal to maintain _absolute stasis of intent_.
    *   They provided a prompt for Gemini, emphasizing _step by step reasoning_; another member asked why **ChatGPT** reports some information as accurate while **Gemini** deems it inaccurate, without providing further context.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Spark GB10 Stability Under Linux Scrutinized**: A user raised concerns about the stability of **Spark GB10** on Linux, citing Nvidia's driver issues, before deciding to invest in the hardware.
    *   A member jokingly offered to do a _hardware checkup_ while suggesting that there's likely a stable Linux version for every GPU.
*   **Hermes Agent Gets Custom Skins**: Members are creating custom skins for **Hermes Agent**, including animated themes like Sisyphus, and sharing screenshots, with promises to submit a PR to the main repo.
    *   Skins such as Ares and Posideon have been demoed, soon available in the main repo, with new personalities and custom animations, plus fixes to chat colours.
*   **GPT-OSS Model Gets Unexpected Kudos**: Some users find the **GPT-OSS** model surprisingly good, citing possible reasons being it being trained on less polluted data.
    *   Skepticism persists regarding its performance against models from _frontier labs_, as one member suggests benchmarks can be misleading.
*   **Anomaly Detection System Advice Sought**: A member seeks advice on building an anomaly detection system for Windows logs, using a dataset of **1.2 million rows** with fewer than **300 anomalies**.
    *   They are seeking recommendations on approaches and tools, ranging from iForests to BERT-like Transformers, using H200s for academic research.
*   **Multi Agent System Research Begins**: A member is launching a project on **steady state multi agent systems**, utilizing papers from [this collection of Zenodo records](https://zenodo.org/records/18906946), including [Record 1](https://zenodo.org/records/18906944) and [Record 2](https://zenodo.org/records/18906942), plus [a paper on ArXiv](https://arxiv.org/abs/2511.08065).
    *   The goal is to study behavior and dynamics in these systems.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **HF ML Club India Club launches**: The **HF ML Club India** launches at [huggingface.co/hf-ml-club-india](https://huggingface.co/hf-ml-club-india) with **Lewis Tunstall** as the first speaker.
    *   Tunstall will discuss how to train _tiny_ models to teach _hard_ theorems, offering insights into efficient model training.
*   **Megatron Favored for Large-Scale**: For large-scale training and heavy SFT, **Megatron** is the preferred choice, while **TRL** is better for preference tuning and RLHF-style post-training.
    *   [NVIDIA provides Megatron Bridge](https://docs.nvidia.com/deeplearning/megatron/user-guide/index.html) for HF ↔ Megatron checkpoint conversion for mixed workflows.
*   **HF datasets Library Faces Understaffing Concerns**: Users are concerned about the maintenance of the [Hugging Face datasets library](https://github.com/huggingface/datasets), citing around **900 open issues** and **200 open pull requests**.
    *   One member started reading the source code due to constantly hitting unexpected issues and hard crashes.
*   **Gradio gets Speed Boost**: **Gradio 6.9.0 is live** with fresh fixes and DX improvements; update with `pip install -U gradio` and read the full [changelog](https://www.gradio.app/changelog).
    *   Internal API calls and data structures have been optimized, especially for MCP, and events with `queue=False` should now be **\>=10x faster**!
*   **Agent Harness Gets Pygmy**: **PygmyClaw**, a compact Python-based agent harness, now features **speculative decoding using 3 drafters and 1 verifier** (four Ollama instances) to produce tokens faster, available at [webxos/pygmyclaw-py](https://huggingface.co/webxos/pygmyclaw-py).
    *   The harness features a persistent task queue and modular tool system.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Compute Conference Tickets Awarded**: A member offered _a couple of tickets_ for the **Compute conference** in **San Francisco** on **Sunday/Monday**, located at [compute.daytona.io](https://compute.daytona.io/).
    *   Note that the conference is not available online.
*   **LM Eval Harness Tames OOM Errors**: A member ran into **OOM errors** experimenting with `lm eval harness` on a **4 GPU** machine with **96GB** each, and found that running _"python -m lm\_eval ..." with "parallelize=True"_ was the ultimate solution.
    *   Gemini had suggested adding `--model_args "pretrained=***,device_map=auto"` for sharding specification, but this was not sufficient.
*   **Nerfs Get Diffused**: Members discussed combining **Flow Matching or Diffusion with NeRFs** for video generation by mapping latent spaces to the weight-space of **NeRFs**, sharing links to papers about [PixNerd](https://arxiv.org/abs/2507.23268) and [hyperdiffusion](https://arxiv.org/abs/2303.17015).
    *   It was noted that the weights' structure lacks trivial inductive bias and difficulties modeling moving scenes.
*   **Reservoir Computing Gets Attentive**: A member requested feedback on a [preprint](https://doi.org/10.5281/zenodo.18903774) combining **reservoir compute with attention** for language modeling, claiming it outperforms standard attention.
    *   A member noted that the performance depends on the **quality of the object-centric encoder**, which can limit the performance ceiling, especially in realistic scenarios.
*   **Windows Logs Attract Anomaly Hunters**: A member is building an **anomaly detection system for Windows logs** with 1.2 mil rows (300 anomalous), considering iforests, SVMs, LSTMs, AE, and BERT-like Transformers.
    *   A suggestion was made to use a **pretrained model (like BERT)** to map events into embeddings and build a dynamic graph for unsupervised RL-based anomaly detection, with links to relevant papers ([paper 1](https://www.semanticscholar.org/p/261696936), [paper 2](https://arxiv.org/abs/2312.05526)).

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi Owes User Refund After Double Payment**: A user reported they emailed **Moonshot AI** _20 days ago_ asking for a **refund** due to a **double payment** but never heard back.
    *   Another user suggested trying to contact their support via [membership@moonshot.ai](mailto:membership@moonshot.ai).
*   **Users Report Kimi Bridge Auth Issues**: Users discussed experiencing a **Kimi bridge auth** issue, specifically a **401 error** when connecting to **Kimi servers**.
    *   A member noted that this issue requires re-authentication with **Kimi**.
*   **Kimi K2.5 Summarization Truncates PDFs**: A user reported that **K2.5** cuts off PDFs summary essays halfway, resulting in a _system busy error_, and they are seeking a workaround due to financial constraints.
    *   The user needs to upgrade to paid plans to avoid the error.
*   **OpenClaw Encounters Issues**: Several users reported issues with recent versions of **OpenClaw**.
    *   A user shared a [fix in this PR](https://github.com/openclaw/openclaw/pull/39881) that addresses an error related to how **Kimi tool calls** were being handled.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Bikers Defy Roads, Embrace Skies**: A member quipped that bikers _should not ride on the road_ and that _flying is completely fine, no cars there_.
    *   The statement implies roads are perilous for bikers, whereas the skies are safer due to the absence of cars.
*   **Arc Browser Sparks UX Discontent**: A member voiced strong dislike for **Arc's** new approach, deeming it a bad idea, with another member linking to [a YouTube video](https://youtu.be/dy55iuYtH_I?is=bpEpFXrI7Qqz8qTk) and [another YouTube video](https://youtu.be/yUmDRxV0krg?is=YJ_9Wak0D3RX2sKvJEPAAAAAAtodd.b.123) criticizing the browser.
    *   The criticism suggests a shift in **Arc's** design or functionality that deviates from user expectations or preferences.
*   **NYT Weighs in on AI**: A member shared a [NYT Opinion article](https://www.nytimes.com/2026/03/08/opinion/ai-anthropic-claude-pentagon-hegseth-amodei.html?unlocked_article_code=1.RlA.ugD2.5Y7hyace3AND&smid=nytcore-ios-share) about **AI**.
    *   This suggests the publication is engaging in discussions or analyses concerning the societal, ethical, or technological aspects of **AI**.
*   **Carmack's Thermal Tweet Torments DGX Spark**: Referencing [Carmack's tweet on thermal issues](https://x.com/ID_AA_Carmack/status/1982831774850748825), a member questioned the workability of **nvfp4** due to low memory bandwidth, thermal problems, and OS stability concerns with **DGX Spark**.
    *   The discussion highlights potential hardware limitations or design flaws affecting the usability of **DGX Spark**.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Manus Users Report Subscription Credit Issues**: Users reported issues with **upgraded subscriptions not granting credits**, even after adding **100 euros** through Apple Wallet and accumulating over **360 euros** in charges.
    *   The users expressed frustration over the lack of support and some considered contacting their CC company due to the overpayment.
*   **Manus Support Team Slow to Respond**: Users voiced concerns over the **lack of support response** to emails and DMs, despite acknowledging the platform's potential.
    *   One user reported that _the complete lack of support response is becoming a major issue_ for potential users, creating distrust in the platform.
*   **Manus Admins Intervene to Offer Direct Assistance**: Admins responded to users in the channel, requesting **email addresses** and offering to escalate their queries to the support team.
    *   An admin promised, _Please kindly share your email address and more details with me privately and I will help to escalate your query to the Support Team_.
*   **Sync Icon and Message Editing Requested**: A user requested the addition of a **sync icon** and **message editing** features to the platform to improve user experience.
    *   The user stated, _I would like that they made sync icon and message editing_ to improve the UX.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Kaggle Blocks Mojo Dreams**: Users discovered **Kaggle** does not currently support **Mojo**, despite advertising **30 hrs/week of GPUs** for puzzles on the [GPU puzzles website](https://puzzles.modular.com/howto.html#kaggle-notebooks).
    *   The community suggests using **Colab instructions** as an alternative to enable `%%mojo` magic commands.
*   **Colab Becomes Mojo's Magic Playground**: The recommended approach for using **Mojo** in notebooks involves leveraging **Colab instructions** for `%%mojo` magic commands, as detailed in the [Mojo on Google Colab documentation](https://docs.modular.com/mojo/tools/notebooks#using-mojo-on-google-colab).
    *   Experimental **Mojo kernels** exist, but they require elevated permissions not available in **Colab** and **Kaggle** hosting.
*   **Docstring Standards Debate Fires Up**: A debate ignited over **docstring standards** in the **stdlib**, focusing on inconsistencies highlighted in [issue #3235](https://github.com/modular/modular/issues/3235).
    *   The discussion proposed using template strings for function/variable docstrings, enabling library authors to define custom standards, with some arguing that **doc cleanup should be a pre-1.0 priority**.
*   **Debugging Mojo's Memory Mayhem**: Users faced execution crashes with missing symbolicated stack trace errors, prompting advice to use `mojo build -g2 -O1 --sanitize=address` for debugging.
    *   The suggested command helps identify **undefined behavior**, specifically related to memory management, assisting in resolving such issues.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Delphi/Pascal Support Sought for Aider**: A member is seeking guidance on using **Aider** for **Delphi/Pascal** development, noting that **Copilot** handles it without issues.
    *   They noted issues with **Claude** hallucinating modifications, especially with **Opus 4.5** looping without committing any actual changes and asked for tips to resolve it.
*   **Opus 4.5: The Looping Menace**: A member reported struggling with **Opus 4.5**, experiencing looping issues and a failure to implement even basic features or make git commits.
    *   When asked about using the older version, they suggested that the main reason could be the **price** difference, while others use the most recent **4.6** version.
*   **GPT 5.4 Benchmarking Results Spark Debate**: A member asked if anyone had benchmarked **GPT 5.4**, and another shared a score of **79%** on xthigh.
    *   The score was considered _"pretty bad somehow"_ by the member who shared it, prompting discussion about the model's performance.
*   **Remote Ollama Setup on Aider**: A member inquired about setting up **Aider** with a remote **Ollama** server, wondering if their version supports remote servers.
    *   No solutions were offered as a response to this member.
*   **Context Crunching Python Reduces Terminal Noise**: A member has created a tool called **Context Crunching Python (ccp)** to reduce noise from terminal output and improve context windows, available on [GitHub](https://github.com/SuppieRK/ccp).
    *   The noise reduction is intended to provide better context to improve the performance of models.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **Frontend Flies Forward with Memory**: The frontend progresses with improvements in quality, currently utilizing **Modal Sandbox and Volume** for memory and analysis tasks, foregoing **Redis** or a **vector store**.
    *   Current efforts focus on memory architecture alongside the implementation of proper **evaluator and optimizer** components.
*   **Fleet-RLM Framework Launched**: A member introduced their framework [Fleet-RLM](https://github.com/Qredence/fleet-rlm), which is built on **DSPy**.
    *   They shared images depicting its architecture in action.
*   **RLM Requirements: Symbolic Object Prompts**: For a system to qualify as a true **Recursive Language Model (RLM)**, a member outlined that the _user prompt must be a symbolic object_, rather than a sequence of tokens in the Transformer context window.
    *   They noted that many systems lack this feature and, consequently, don't fully qualify as **RLMs**.
*   **Persistent REPL Environment For RLMs**: Another requirement for **RLMs** is that the model must interact with a symbolic object by **writing code in a persistent REPL environment**.
    *   This **REPL** environment is where the model's code execution and interaction with the system occur.
*   **LLM Invocation Inside REPL For RLM**: A key characteristic of **RLMs** is the ability for the code written by the model to invoke an **LLM/RLM _inside_ the REPL**, not as a discrete sub-agent tool.
    *   The member expressed interest in projects that incorporate all three criteria of **RLMs**.

* * *

[MCP Contributors (Official)](https://discord.com/channels/1358869848138059966) Discord
---------------------------------------------------------------------------------------

*   **MCP-I Question About Integration with Auth Agent Identity**: A member asked about integrating **MCP-I** ([link](https://share.google/aimode/xAik81A0u4WKsjewv)) into the **auth agent identity** to capture use cases within the **MCP contrib ecosystem**.
    *   They noted a common pattern of naming conventions (e.g., _"XXXXMCP"_ or _"MCP - XXXXX"_) that often doesn't directly relate to **MCP** after closer inspection.
*   **MCP-Identity and Relation to ANP Explored**: A member clarified that **MCP-I** refers to **MCP-Identity**.
    *   Another member observed the similarity between **MCP** and **ANP (AI Agent Protocol)** ([link](https://w3c-cg.github.io/ai-agent-protocol/)), questioning whether the two projects are related.

* * *

[MLOps @Chipro](https://discord.com/channels/814557108065534033) Discord
------------------------------------------------------------------------

*   **Daytona Hosts Compute Conference**: Daytona is hosting **Compute**, an AI conference focused on **AI infrastructure**, **AI agents**, and the **next generation of cloud** on **March 8-9** at **Chase Center, San Francisco**; more details available at the [Compute website](https://compute.daytona.io/).
    *   Speakers at the **Compute Conference** include names from Box, Parallel, LangChain, Fireworks AI, LiveKit, Amp, Sentry, Neon, SemiAnalysis, Writer, and Daytona.
*   **Free Tickets to Compute Conference**: Three complimentary tickets for **Compute Conference** are available using the code `EQ6VA5` on [Luma](https://luma.com/k6bc82dv).
    *   The conference focuses on **AI infrastructure**, **AI agents**, and the **next generation of cloud**.

* * *

The **LLM Agents (Berkeley MOOC) Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

The **Windsurf Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

You are receiving this email because you opted in via our site.

Want to change how you receive these emails? You can [unsubscribe](%7B%7B%7BRESEND_UNSUBSCRIBE_URL%7D%7D%7D) from this list.

* * *

Discord: Detailed by-Channel summaries and links
================================================

### **OpenClaw ▷ #[announcements](https://discord.com/channels/1456350064065904867/1464036817866068028/1479584918911586377)** (2 messages):

> `Weekly Claw, New Role, Claw Time, Back Channels`

*   **Claw Time Returns Weekly**: It's weekly claw time, so [hop on the event](https://discord.com/events/1456350064065904867/1479314622669520996) and enjoy your weekly dose of claw.
    *   The announcement was specially targeted at the nerds <@&1471741345306644545>.
*   **New Role Available**: A new role <@&1479584625755033854> is now available in id:customize.
    *   No details were given on what this role entails or how to obtain it, but it seems to be something worth checking out.
*   **Back Channels Announcement**: The <#1457939786659790900> channel is back in action.
    *   No additional information was provided about what this channel is about or what kind of content to expect.

* * *

### **OpenClaw ▷ #[general](https://discord.com/channels/1456350064065904867/1456350065223270435/1479554234717573183)** (565 messages🔥🔥🔥):

> `Claude vs Codex debate, Managed OpenClaw hosting, OpenAI GPT 5.4 vs Anthropic Opus models for coding, local models for OpenClaw performance`

*   **Members debate Claude vs. Codex for specific tasks**: Members discuss the best models for coding (**Codex/GPT-5.4** is preferred for engineering tasks) versus creative design (**Claude** or **Gemini**).
    *   Some suggest that **Codex** excels at building functional dashboards, while **Claude** is better at creative flair and brainstorming.
*   **Managed OpenClaw Hosting being explored**: A member is exploring the feasibility of creating a managed hosting layer for **OpenClaw** with fixed monthly costs and spend caps, addressing the complexity of self-hosting.
    *   Interest is gauged based on a simple need for fixed costs and no requirement for running the setup 24/7, targeting users who may not want to deal with complex setups.
*   **Members discuss relative power of OpenAI vs Anthropic**: Members suggest that **GPT-5.4** is now better than **Opus** for coding because it has better real world performance, and members are moving away from **Anthropic** models due to costs and potential ToS violations.
    *   Users have reported that **OpenAI's Codex** is showing better integration with **OpenClaw**, despite the fact that **Claude** models are preferred for personality and soul.
*   **Debate erupts over local models being useful**: Some members express skepticism about using local models with **OpenClaw** due to limitations in tool calls, security concerns, and prompt injection risks.
    *   It is mentioned that even with high VRAM, local models may underperform compared to cloud-based alternatives, leading to suggestions that they be used as heartbeat monitors.
*   **Scammers target OpenClaw Users**: Members warn about a website (useclawy.com) selling an overpriced reseller of the open source OpenClaw project, and advise users to contact their banks if they get tricked.
    *   Members warned about **Claude subscriptions** being billed without an easy way to cancel, highlighting billing is NOT a part of the OpenClaw project, as again, it is **FREE AND OPEN SOURCE**.

* * *

### **OpenClaw ▷ #[showcase](https://discord.com/channels/1456350064065904867/1456609488202105005/1479569594229325846)** (100 messages🔥🔥):

> `Sports Betting Tracker, Ticket Scanner with Scraper, Documentation App on Private Cloud, OpenClaw Negotiating Dates, Study Agent Automating Study Parts`

*   **OpenClaw Agent Tracks Prop Bets**: One user built an OpenClaw agent named Hex to track sports bets across different game types using **AI OCR** to read bet slips and the **ESPN API** for box score updates, scheduling cron jobs every 10 minutes.
    *   The agent is also deployed as a **BYOK Discord bot** for friends, but does not automate bet placement due to sportsbook limitations in California.
*   **Ticket Scanner with Simple Scraper**: A user created a ticket scanner using a **simple web scraper** to get prices, mentioning that APIs would make the process easier.
    *   They added that _vibe coding_ would make it a breeze.
*   **ClawHub Powers W...

[Read original post](https://news.smol.ai/issues/26-03-09-autoresearch/)

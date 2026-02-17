---
title: "Qwen3.5-397B-A17B: the smallest Open-Opus class, very efficient model"
date: "2026-02-16T05:44:39.000Z"
description: "**Alibaba** released **Qwen3.5-397B-A17B**, an open-weight model featuring **native multimodality**, **spatial intelligence**, and a **hybrid linear attention +..."
original_link: "https://news.smol.ai/issues/2026-02-16-not-much/"
---

**congrats Qwen!**

> AI News for 2/13/2026-2/16/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**261** channels, and **26057** messages) for you. Estimated reading time saved (at 200wpm): **2606** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

**a good ship from Qwen.**

> _AI News for 2/13/2026-2/16/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**261** channels, and **26057** messages) for you. Estimated reading time saved (at 200wpm): **2606** minutes. [AINews’ website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!_

Congrats to [Pete Steinberger on joining OpenAI](https://x.com/sama/status/2023150230905159801), as we [predicted](https://www.latent.space/p/ainews-sci-fi-with-a-touch-of-madness). Not much else to add there so we won’t.

Today’s headliner is Qwen 3.5, which followed the other Chinese model labs like [Z.ai](https://www.latent.space/p/ainews-zai-glm-5-new-sota-open-weights) and [Minimax](https://www.latent.space/p/ainews-new-gemini-3-deep-think-anthropic) and [Kimi](https://www.latent.space/p/ainews-moonshot-kimi-k25-beats-sonnet) in refreshing their leading models, but unlike the first two, Qwen 3.5 is in the same weight class as Kimi, 400B with about a 4.3% sparsity ratio instead of Kimi’s more agressive 3.25%. They do not claim SOTA across the board, and most notably not across coding benchmarks, but make solid improvements compared to [Qwen3-Max](https://news.smol.ai/issues/25-09-05-1t-models) and [Qwen3-VL](https://news.smol.ai/issues/25-09-23-alibaba-yunqi).

Native Multimodality and [Spatial Intelligence](https://qwen.ai/blog?id=qwen3.5#spatial-intelligence) are headline features of the model and we encourage clicking over to the blog to check out the examples, as there isn’t much else to say - this is a very welcome headline model refresh from China’s most prolific open model lab, and probably the last before DeepSeek v4.

![](https://substackcdn.com/image/fetch/$s_!1fDP!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0472c69a-cd07-4bde-8b10-61bc1d0702a7_2444x1704.png)

* * *

AI Twitter Recap
================

**Alibaba’s Qwen3.5 open-weight “frontier MoE” drop (and the inference/infra fallout)**

*   **Qwen3.5-397B-A17B release**: Alibaba shipped **Qwen3.5-397B-A17B**, positioned as the first open-weight model in the Qwen3.5 series: **native multimodal**, “thinking and non-thinking modes,” **hybrid linear attention + sparse MoE**, “large-scale RL environment scaling,” **201 languages**, **Apache-2.0** ([official announcement](https://twitter.com/Alibaba_Qwen/status/2023331062433153103); also echoed by [@JustinLin610](https://twitter.com/JustinLin610/status/2023332446713070039)). They also clarified that **Qwen3.5-Plus is the hosted API version** of the same base model, with **1M context** (vs model-native **256K**) plus search/code interpreter integrations ([clarification](https://twitter.com/JustinLin610/status/2023340126479569140)).
*   **Architecture + KV-cache implications**: Community discussion focused on **Gated Delta Networks / “GatedDeltaNet” + sparse MoE** as the reason inference can stay tractable at long context. vLLM shipped **day-0 support** and highlighted **397B total, 17B active**, multimodal, and throughput/latency advantages ([vLLM recipe](https://twitter.com/vllm_project/status/2023341059343061138)). A concrete KV-cache back-of-the-envelope suggested only **~31KB/token** and **~8.05GB KV at 262K context** in BF16 (and ~4GB in FP8) due to few KV heads + many gated-delta layers ([KV math](https://twitter.com/bnjmn_marie/status/2023424404504342608)).
*   **Deployment reality: huge weights, but surprisingly runnable**: Despite “~800GB BF16” scale, people reported local runs via MLX/Q4 on Apple Silicon (e.g., **~225GB RAM** mentioned) ([mlx report](https://twitter.com/pcuenq/status/2023369902011121869); [awnihannun demo](https://twitter.com/awnihannun/status/2023462412092059679)). Unsloth pushed “run 4-bit on **256GB Mac/RAM**” guidance and claimed parity vs top closed models (marketing claim, but important for adoption) ([Unsloth](https://twitter.com/UnslothAI/status/2023338222601064463)). Ollama put it on their cloud quickly ([Ollama](https://twitter.com/ollama/status/2023334181804069099)).
*   **Benchmarks + “agentic RL” vs efficiency questions**: Early takes called it a step up over Qwen3-_Max_ and prior Qwen VL models, with notable **vision** improvements; others asked for “reasoning efficiency” evidence rather than raw scores ([scaling01](https://twitter.com/scaling01/status/2023343368399704506)). teortaxesTex noted it surprisingly outscores Qwen3-Max-thinking on some reported harnesses and speculated improvements due to **agentic RL** ([commentary](https://twitter.com/teortaxesTex/status/2023331885402009779)). At the same time, there were “black-box eval” critiques and task-specific failures (e.g., SVG / “Vending-Bench” style tests) ([Vending-Bench claim](https://twitter.com/andonlabs/status/2023450768406364238); [SVG comparisons](https://twitter.com/scaling01/status/2023364296277721300)).
*   **Pricing drama**: Multiple posts argue Alibaba’s **API pricing is high/weird** given inference efficiency claims, with comparisons to Kimi/GLM offerings ([pricing complaint](https://twitter.com/scaling01/status/2023346718377406840); [more](https://twitter.com/scaling01/status/2023349177443377370)). This became a recurring theme: “great model, unclear serve-cost story.”

**Open agents, “harness engineering,” and the OpenClaw → OpenAI saga**

*   **OpenClaw as a proof-point for one-person leverage**: The OpenClaw story is framed as emblematic of “one-person team + coding agents” shipping something world-shifting fast, culminating in Peter Steinberger joining/acquired by OpenAI ([Yuchenj\_UW](https://twitter.com/Yuchenj_UW/status/2023248474503094774)). This thread also triggered broader discussion of how OpenAI might handle open source post-acquisition.
*   **Anthropic/open-source tensions**: A major discourse cluster criticized Anthropic’s posture toward open source and OpenClaw usage, with claims that restrictions/blocks pushed developers toward other models/providers ([ThePrimeagen](https://twitter.com/ThePrimeagen/status/2023194211445834132); [Teknium](https://twitter.com/Teknium/status/2023251135201738794)). Others downplayed the strategic impact (“could be vibe-coded in a week”) while acknowledging reputational costs in OSS circles ([scaling01](https://twitter.com/scaling01/status/2023217588319277471)). Separately, Anthropic announced a major operational expansion: **Bengaluru office** and noted India as Claude.ai’s **second-largest market** ([Anthropic](https://twitter.com/AnthropicAI/status/2023322514206957688)).
*   **Harness as the real moat**: Several tweets converge on a practical thesis: **agents aren’t just models**; the “harness” (tooling, context management, lifecycle, skills, evaluation/observability) is compounding infrastructure and increasingly the differentiator. See Ben Burtenshaw’s definition of harness as an “OS” around the model, and the idea that proprietary agents feel better partly because models are trained _on_ their harness patterns ([ben\_burtenshaw](https://twitter.com/ben_burtenshaw/status/2023429103731269696)). This is echoed by practitioners building agent systems: “building a good harness is hard and compound over time” ([brivael](https://twitter.com/brivael/status/2023203131329503583)).
*   **Lightweight agent alternatives**: Alongside “big harness” thinking, there’s interest in minimal agent stacks: PicoClaw and nanobot are pitched as drastically smaller alternatives to OpenClaw, supporting multiple model backends and MCP/vLLM ([TheTuringPost](https://twitter.com/TheTuringPost/status/2023416488884129826)).
*   **Agent observability/evals becoming table stakes**: LangChain/LangSmith pushed the message that for agents, traces are the new “stack trace,” and debugging requires observability-first tooling ([meetup](https://twitter.com/LangChain/status/2023457846843551946); [tracing plug-ins](https://twitter.com/LangChain/status/2023532973086159283)). This aligns with broader complaints that current agent behavior lacks determinism and requires babysitting.

**OpenAI/Codex usage surge, sub-agents, and security hardening**

*   **Codex adoption claims**: Sam Altman reported **Codex weekly users tripled** since the start of the year ([sama](https://twitter.com/sama/status/2023233085509410833)). Multiple community posts describe a “big leap” in **Codex 5.3**, especially via parallelism/sub-agents ([gdb](https://twitter.com/gdb/status/2023299087974777061); [“agents are up”](https://twitter.com/gdb/status/2023342301821734937)).
*   **Sub-agent configuration + model-tier tradeoffs**: Practical tip: increasing Codex sub-agents by editing config (e.g., `max_threads = 24`) was shared as a Pro-user tweak ([Hangsiin](https://twitter.com/Hangsiin/status/2023297599764402627)). Meanwhile, at least one user reported **5.3-codex-spark** is faster but “dumber” than full 5.3 for real work ([giffmana](https://twitter.com/giffmana/status/2023341811851473053)).
*   **Lockdown Mode for ChatGPT**: OpenAI introduced **Lockdown Mode** to reduce prompt-injection and data exfil risks by disabling/altering tool behaviors (cached browsing, reduced web interaction), first for Enterprise/Business with consumer later ([cryps1s](https://twitter.com/cryps1s/status/2023441322838028362)). This is notable as a product-level acknowledgment that **tool-enabled LLMs expand attack surface**, and that some orgs want deterministic, restrictive controls even at capability cost.
*   **Scientific-claim scrutiny**: A thread raised reproducibility concerns about an OpenAI physics result attributed to GPT-5.2, arguing journals should require transcripts/tooling details if secret models are used ([lewtun](https://twitter.com/_lewtun/status/2023334667064099207)). Kevin Weil pointed to more explanation from the involved physicist ([kevinweil](https://twitter.com/kevinweil/status/2023422106411974935)), and gdb posted a “how it came to be” follow-up ([gdb](https://twitter.com/gdb/status/2023445830880117214)).

**China’s “holiday model wave”: Qwen3.5, GLM-5, MiniMax M2.5, Seed/Seedance—and robotics acceleration**

*   **Chinese New Year as release season**: Multiple posts frame CNY as the new “model drop week,” with a stack including **Qwen3.5**, **GLM-5**, **MiniMax M2.5**, and anticipation for **DeepSeek-V4** ([iScienceLuvr](https://twitter.com/iScienceLuvr/status/2023312965756449088); [Yuchenj\_UW roundup](https://twitter.com/Yuchenj_UW/status/2023453819938763092)).
*   **MiniMax M2.5: throughput + RL signal efficiency**: SemiAnalysis reported M2.5 sustaining **~2500 tok/s/GPU** throughput under certain TTFT constraints on **8×H200** with vLLM ([SemiAnalysis\_](https://twitter.com/SemiAnalysis_/status/2023418414203646066)). MiniMax emphasized **per-token process rewards** as better RL signal utilization and cost efficiency, and celebrated broad API/partner availability ([MiniMax\_AI](https://twitter.com/MiniMax_AI/status/2023470874708549941)).
*   **ByteDance Seed/Seedance & AI film**: Seedance 2.0 became a cultural moment via a **Jia Zhangke** short produced with the model ([FrankYan2](https://twitter.com/FrankYan2/status/2023257752017981446); [EHuanglu](https://twitter.com/EHuanglu/status/2023449238114320514)). The meta-point: video generation is moving from “toy demos” toward “filmmaker workflow,” and some viewers note video outputs feel less “aesthetic-guidance uncanny” than image gen ([jd\_pressman](https://twitter.com/jd_pressman/status/2023256826431852852)).
*   **Robotics: Unitree + broader China lead narrative**: Posts highlighted Unitree humanoids at the Spring Festival Gala and broader claims of rapid Chinese robotics progress ([HumanoidHub](https://twitter.com/TheHumanoidHub/status/2023428892934160775); [kimmonismus](https://twitter.com/kimmonismus/status/2023388741595799687)). teortaxesTex argued we’re past “Potemkin” skepticism—entire sectors (not just outliers) are real, especially robotics ([teortaxesTex](https://twitter.com/teortaxesTex/status/2023518524451549598)).
*   **Compute supply chain signals**: Western Digital reportedly sold out much of **2026 HDD capacity** due to enterprise demand, with some AI customers booking out to 2027/2028 ([kimmonismus](https://twitter.com/kimmonismus/status/2023374704006828513)). Separately, NVIDIA’s GB300 NVL72 was touted as **~50× higher performance/MW** and **~35× lower cost/token** vs Hopper (vendor-claimed) ([kimmonismus](https://twitter.com/kimmonismus/status/2023456488782487566)).

**Research/engineering threads engineers actually use (agents, RL, interpretability, and eval hygiene)**

*   **Multi-step tool use is still brittle**: SciAgentGym shows success collapsing as tool-interaction steps increase; data synthesis over tool dependency graphs (SciForge) improved an 8B model on scientific workflows ([dair\_ai](https://twitter.com/dair_ai/status/2023404773031166320)). This matches day-to-day agent pain: execution reliability is the bottleneck, not single-step reasoning.
*   **Adaptive reasoning depth for agents**: CogRouter dynamically varies “cognitive depth” step-by-step; reported to beat GPT-4o with **62% fewer tokens** on agent benchmarks (as summarized) ([omarsar0](https://twitter.com/omarsar0/status/2023405531835277504)).
*   **Rubric-based RL (RLVR beyond verifiable domains)**: A substantial writeup on rubric-based RL traces the path from LLM-as-judge to structured rubrics and offers practical tips across 15+ papers ([cwolferesearch](https://twitter.com/cwolferesearch/status/2023408158065188894)).
*   **Interpretability objective**: MonoLoss proposes a plug-in objective to encourage **monosemantic** activations in SAEs across CLIP/SigLIP2/ViTs, improving “MonoScore” for many latents ([iScienceLuvr](https://twitter.com/iScienceLuvr/status/2023303520057745501)).
*   **Benchmark contamination / “local generalization”**: There’s renewed emphasis that benchmark gains can be confounded by training-data expansion and semantic near-duplicates. A proposed decomposition: benchmaxxing vs usemaxxing vs hidden interpolation vs true OOD generalization ([g\_leech\_](https://twitter.com/g_leech_/status/2023384075537432662)). This rhymes with Lucas Beyer’s earlier vision-data de-dup experience and the difficulty of doing this “properly” in language ([giffmana](https://twitter.com/giffmana/status/2023481657177911383)).
*   **WeirdML time horizons**: A METR-inspired “time horizon” estimate for WeirdML tasks suggests frontier model horizons from **~24 minutes (GPT-4)** to **~38 hours (Opus 4.6)** and a **~5-month doubling time** ([htihle](https://twitter.com/htihle/status/2023349189271572975)), echoed as broadly consistent with METR-like estimates ([scaling01](https://twitter.com/scaling01/status/2023350946139435357)).

**Meta themes: open vs closed, labor/education impacts, and “taste” as a new bottleneck**

*   **Open model momentum vs concentration risks**: A recurring sentiment is that open models reduce power concentration and keep multiple AGI pathways available ([TuringPost clip](https://twitter.com/TheTuringPost/status/2023375354740809823)). In parallel, debates rage over ToS constraints (e.g., Anthropic limiting surveillance/weapons use) and whether that makes a vendor a “supply chain risk” ([RyanPGreenblatt](https://twitter.com/RyanPGreenblatt/status/2023524096592802207); [kimmonismus Axios summary](https://twitter.com/kimmonismus/status/2023419652378955809)).
*   **Workforce disruption timelines**: Ryan Greenblatt argued mass unemployment is “overrated in 2 years, underrated in 7,” with the key inflection being **full automation of AI R&D** (after which human cognitive labor value collapses quickly) ([thread start](https://twitter.com/RyanPGreenblatt/status/2023219133916332070)).
*   **Education/skills anxiety**: Claims that degrees may become obsolete before students graduate (popularized via a newsy summary tweet) reflect broader uncertainty ([kimmonismus](https://twitter.com/kimmonismus/status/2023446044873560178)). There’s also a warning that AI coding tools can reduce skill mastery in controlled studies (via an Anthropic research link, summarized) ([dl\_weekly](https://twitter.com/dl_weekly/status/2023502798659125656)).
*   **“Taste” and verification as core skills**: This set strongly emphasizes that as models/agents scale, **taste** (choosing good problems/solutions) and **ability to verify** (detecting subtle wrongness) become the scarcest human differentiators—explicitly labeled as “a new core skill” ([gdb](https://twitter.com/gdb/status/2023481258639286401); [Yuchenj\_UW](https://twitter.com/Yuchenj_UW/status/2023481799335440792)). Karpathy extends this into programming languages/formal methods: translation and refactoring will dominate, and we may rewrite much of software repeatedly; languages “optimal for LLMs” become an open question ([karpathy](https://twitter.com/karpathy/status/2023476423055601903)).

* * *

### Top tweets (by engagement)

*   **SF walkability discourse**: [@paularambles](https://twitter.com/paularambles/status/2023220064070332521)
*   **Anthropic Bengaluru office / India as #2 market**: [@AnthropicAI](https://twitter.com/AnthropicAI/status/2023322514206957688)
*   **Qwen3.5-397B-A17B release (Apache-2.0, multimodal MoE, 17B active)**: [@Alibaba\_Qwen](https://twitter.com/Alibaba_Qwen/status/2023331062433153103)
*   **PL/FM + LLMs reshape software translation/rewrite**: [@karpathy](https://twitter.com/karpathy/status/2023476423055601903)
*   **“Anthropic hate for open source” viral take**: [@ThePrimeagen](https://twitter.com/ThePrimeagen/status/2023194211445834132)
*   **Codex growth claim**: [@sama](https://twitter.com/sama/status/2023233085509410833)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen 3.5 Model Release and Performance

*   **[Qwen3.5-397B-A17B is out!!](https://www.reddit.com/r/LocalLLaMA/comments/1r656d7/qwen35397ba17b_is_out/)** (Activity: 973): ****Qwen3.5-397B-A17B** has been released on [Hugging Face](https://huggingface.co/Qwen/Qwen3.5-397B-A17B), featuring a `397 billion` parameter model with a native context length of `262,144` tokens, which can be extended up to `1,010,000` tokens. This model is part of the Qwen series, known for its large-scale language capabilities. Additionally, a GGUF version is available [here](https://huggingface.co/unsloth/Qwen3.5-397B-A17B-GGUF), which may offer optimized performance for specific use cases.** There is anticipation and curiosity in the community about the model's performance, with users eager to test its capabilities.
    
    *   The Qwen3.5-397B-A17B model boasts a native context length of `262,144` tokens, which can be extended up to `1,010,000` tokens. This is a significant improvement in handling larger contexts, making it suitable for more complex tasks that require extensive input data.
    *   The decoding throughput of Qwen3.5-397B-A17B is reported to be `3.5x` to `7.2x` faster than its predecessor, Qwen3-235B-A22B. This increase in throughput suggests substantial improvements in processing efficiency, which could lead to faster response times and reduced computational costs for large-scale applications.
    *   A user has shared a link to the GGUF version of the model on [Hugging Face](https://huggingface.co/unsloth/Qwen3.5-397B-A17B-GGUF), indicating that the model is available for download and experimentation. This accessibility allows for broader testing and integration into various projects.
*   **[Qwen3.5-397B-A17B Unsloth GGUFs](https://www.reddit.com/r/LocalLLaMA/comments/1r6599e/qwen35397ba17b_unsloth_ggufs/)** (Activity: 663): ****Qwen3.5-397B-A17B** is a newly released model by **Alibaba** with `397 billion` parameters, designed for multimodal reasoning. It is capable of running in `3-bit` on a `192GB RAM Mac` or `4-bit (MXFP4)` on an `M3 Ultra` with `256GB RAM`. The model is positioned as competitive with **Gemini 3 Pro**, **Claude Opus 4.5**, and **GPT-5.2** in terms of performance across benchmarks like instruction following, multilingual knowledge, and video reasoning. The release includes dynamic GGUFs for flexible deployment, and a guide is available for running the model on various hardware configurations. More details can be found on [Hugging Face](https://huggingface.co/Qwen/Qwen3.5-397B-A17B) and [Unsloth](https://unsloth.ai/docs/models/qwen3.5).** Commenters are impressed by the model's size and capabilities, noting the `397 billion` parameters and the fact that only `17 billion` are active at a time. There is curiosity about how **AutoRound** might enhance the model's performance.
    
    *   The Qwen3.5-397B-A17B model is noted for its verbosity, as demonstrated by its extensive internal dialogue when generating a simple greeting response. This verbosity could be indicative of the model's complex decision-making process, which might be beneficial for nuanced tasks but could also lead to inefficiencies in simpler interactions.
    *   A user expressed curiosity about the performance of the AutoRound feature with the Qwen3.5-397B-A17B model, particularly given that only 17 billion parameters are active. This suggests a focus on optimizing performance while managing computational resources effectively, which is crucial for deploying large models in practical applications.
    *   There is a discussion about the comparative performance of UD-Q4\_K\_XL and MXFP4 formats, with a user noting the lack of benchmarks directly comparing the two. This highlights a gap in available performance data, which is essential for making informed decisions about model deployment and optimization strategies.

### 2\. Local LLM Challenges and Innovations

*   **[Why is running local LLMs still such a pain](https://www.reddit.com/r/LocalLLM/comments/1r5matd/why_is_running_local_llms_still_such_a_pain/)** (Activity: 243): **The post discusses the challenges of running local Large Language Models (LLMs) like **Ollama** and **Llama** on personal hardware, highlighting issues such as installation failures and resource constraints when dealing with models larger than `7B` parameters. The user expresses frustration over the complexity of self-hosting solutions, which often require advanced technical knowledge in areas like Docker and Kubernetes, and the lack of privacy-friendly yet functional alternatives to services like **OpenAI's ChatGPT**.** Commenters note that achieving ChatGPT-level functionality locally is inherently difficult due to the significant hardware requirements, suggesting that while tools like **LM Studio**, **Ollama**, or **Lemonade** can be installed easily, performance is heavily dependent on having a powerful GPU or NPU. They emphasize that without substantial investment in hardware, local LLMs will be slow, and achieving full ChatGPT functionality may not be feasible without using a remote provider.
    
    *   No\_Clock2390 highlights that running local LLMs is feasible with the right hardware, mentioning tools like LM Studio, Ollama, and Lemonade that can be set up quickly. However, performance is heavily dependent on hardware capabilities, particularly the presence of a GPU or NPU. For instance, running Ollama on an Intel N100 is possible but results in slow performance due to CPU limitations.
    *   Total-Context64 emphasizes the cost barrier in achieving ChatGPT-like functionality locally, pointing out that significant investment in hardware is necessary unless one opts for a remote provider. This underscores the challenge of replicating high-performance LLMs without substantial resources.
    *   HorribleMistake24 suggests using lmstudio for beginners, which assists in determining model compatibility with available GPU VRAM. They also mention leveraging a ChatGPT subscription for setup assistance via Codex in VS Code, illustrating a practical approach to overcoming setup challenges by integrating AI tools into the development process.

### 3\. MiniMax-2.5 and OpenClaw Discussions

*   **[Anyone actually using Openclaw?](https://www.reddit.com/r/LocalLLaMA/comments/1r5v1jb/anyone_actually_using_openclaw/)** (Activity: 1615): **The Reddit post questions the authenticity of Openclaw's popularity, suggesting it might be a result of manufactured social media marketing, especially after **OpenAI's acquisition** of Openclaw. The post references a suspicious growth graph [here](https://www.star-history.com/#openclaw/openclaw&Comfy-Org/ComfyUI&type=date&legend=top-left). **Openclaw** is described as a tool that connects various APIs and MCP servers, but lacks innovation, according to user experiences. The acquisition by OpenAI for `10 billion` is viewed skeptically, with comparisons to the hype-driven nature of the crypto market.** Comments suggest skepticism about Openclaw's marketing tactics, with some users describing it as 'vibe coded' and lacking in unique functionality. There is interest in alternatives like **Ironclaw**, indicating a desire for more robust solutions.
    
    *   Skystunt mentions that Openclaw is essentially a compilation of existing technologies, connecting various APIs and MCP servers, without offering any groundbreaking features. This suggests that its perceived value might be inflated, as it doesn't introduce new capabilities but rather integrates existing ones.
    *   dgibbons0 highlights the poor configuration quality of Openclaw, describing it as 'vibe coded'. This term suggests a lack of professional polish or robustness in its setup. The commenter also expresses interest in exploring Ironclaw, a related project, indicating that the concept of integrating chat with AI engines is appealing despite Openclaw's shortcomings.
    *   TurnUpThe4D3D3D3 raises concerns about the financial implications of using Openclaw, noting that it has a default 30-minute heartbeat that incurs API costs each time it runs. This could lead to significant expenses over time, potentially amounting to several dollars per week, which might not be immediately apparent to users.
*   **[You can run MiniMax-2.5 locally](https://www.reddit.com/r/LocalLLaMA/comments/1r5h1gj/you_can_run_minimax25_locally/)** (Activity: 784): **The image provides a detailed guide on running the MiniMax-2.5 model locally, highlighting its state-of-the-art performance in coding, agentic tool use, and office tasks. The model features `230B parameters` with `10B active`, a `200K context window`, and requires `457GB` of memory in its unquantized bf16 form. The use of **Unsloth Dynamic 3-bit GGUF** significantly reduces the model size to `101GB`, a `62%` reduction, making it more accessible for local deployment. The guide also includes links to the [official documentation](https://unsloth.ai/docs/models/minimax-2.5) and [GGUF models on Hugging Face](https://huggingface.co/unsloth/MiniMax-M2.5-GGUF).** Comments reflect skepticism about the accessibility of running such a large model locally, with users humorously noting the high hardware requirements and costs associated with deploying the model.
    
    *   Ug1bug1 mentions that the MiniMax models, including the Q3\_K\_XL, perform well on their Strix Halo setup, which has 128GB of RAM. This suggests that the model's performance is satisfactory on high-end hardware, indicating that substantial memory is a key requirement for running these models effectively.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. AI Model Releases and Benchmarks

*   **[What are you looking forward to?](https://www.reddit.com/r/singularity/comments/1r5p4qi/what_are_you_looking_forward_to/)** (Activity: 954): **The image is a tweet from **CHOI (@arrakis\_ai)** announcing the imminent release of several AI models: **DeepSeek V4, Gemini 3.1 Pro, GPT 5.3, Sonnet 5**, and a "Mystery model." The tweet highlights the rapid acceleration of AI development timelines, suggesting these releases are expected within days. This indicates a significant period of advancement and competition in AI model development, with potential impacts on various applications and industries.** One comment expresses skepticism about the release of Sonnet 5, referencing a previous rumor that turned out to be about Opus 4.6 instead. Another comment hints at a competitive atmosphere, mentioning "Elon crashing out over his lack of," possibly referring to competition in AI advancements.
    
    *   johnwheelerdev mentions anticipation for **Gemini 3.1**, suggesting it could be a significant update or release. This could imply improvements or new features over previous versions, though specific details or benchmarks are not provided.
    *   GraceToSentience refers to a rumor about **Sonnet 5**, which was previously thought to be **Opus 4.6**. This indicates a possible mix-up or rebranding in versioning or product naming, highlighting the challenges in tracking software updates and releases.
    *   Egoz3ntrum brings up **GPT-OSS-2**, which could be an open-source variant of GPT models. This suggests a trend towards more open-source AI models, potentially offering more transparency and community-driven improvements.
*   **[Attackers prompted Gemini over 100,000 times while trying to clone it, Google says](https://www.reddit.com/r/singularity/comments/1r5d9jw/attackers_prompted_gemini_over_100000_times_while/)** (Activity: 1342): ****Google** reported that attackers attempted to clone its **Gemini AI** model by prompting it over `100,000` times, using a technique called _model distillation_. This approach involves feeding the model specific prompts to gather responses, enabling the creation of a cheaper imitation without direct access to the model's code or training data. Google considers this activity as _intellectual property theft_ and has implemented undisclosed countermeasures. For more details, see the [original article](https://arstechnica.com/ai/2026/02/attackers-prompted-gemini-over-100000-times-while-trying-to-clone-it-google-says/).** Some commenters question the effectiveness of model distillation, comparing it to attempts in the 90s to improve chess software by feeding it millions of games, which had no significant impact. Others highlight the irony of Google's stance on intellectual property, given its own use of web-scraped data for training LLMs.
    
    *   Deciheximal144 highlights the irony in Google's stance on 'model extraction' as intellectual property theft, given that Google's own LLMs were trained on data scraped from the internet without explicit permission. This raises ethical questions about data usage and ownership in AI training processes, as discussed in [The Verge](https://www.theverge.com/2023/7/5/23784257/google-ai-bard-privacy-policy-train-web-scraping).
    *   magicmulder questions the effectiveness of 'model extraction' by comparing it to attempts in the 90s to improve chess software by feeding it millions of games, which had no significant impact. This suggests skepticism about whether simply prompting an AI model extensively can lead to a high-quality clone, as the complexity of model training involves more than just input data volume.
    *   Ok\_Buddy\_9523 humorously downplays the notion of 'prompting AI 100000 times' by likening it to a routine activity, implying that such a number of interactions might not be as significant or unusual in the context of AI development and testing.
*   **[Codex-cli with GPT-5.3 codex xhigh - 5 hours made a fully working GBA emulator in assembly code!](https://www.reddit.com/r/singularity/comments/1r525lg/codexcli_with_gpt53_codex_xhigh_5_hours_made_a/)** (Activity: 717): **A user claims to have used **Codex-cli with GPT-5.3 codex xhigh** to develop a fully functional Game Boy Advance (GBA) emulator in assembly code within `5 hours`. The project, hosted on [GitHub](https://github.com/Healthy-Nebula-3603/gpt5.2-codex_xhigh-proof-of-concept-GBA-emulator-in-assembly-), involved the model autonomously building, testing, and debugging the emulator. The emulator's architecture includes an x86-64 assembly core with a minimal C host layer for SDL2, targeting compatibility with games like SuperMarioAdvance. The plan outlined includes ARM7TDMI CPU core emulation, memory mapping, and PPU/APU functionality, with a focus on determinism and performance benchmarks such as `59.7 FPS` on Linux x86-64. The project emphasizes a pure assembly approach with a C platform shim for SDL2 integration.** Commenters express skepticism and curiosity about the emulator's performance and cost, with one noting the irony of recent claims that LLMs cannot generate low-level code. Another commenter is impressed by the achievement, highlighting its uniqueness if no similar example exists.
    
    *   stardoge42 inquires about the cost in credits and the performance of the emulator, asking if there are any glitches and whether it works with other games. This highlights the practical considerations of using AI-generated code, such as resource consumption and compatibility across different software environments.
    *   cottsay references a similar project, the 'Gameboy Emulator in ARM Assembly' available on GitHub, which was developed 6 years ago. This comparison provides context on the evolution of emulator development and the potential advancements made by using AI tools like Codex-cli with GPT-5.3.
    *   BrennusSokol mentions encountering skepticism about AI's ability to generate low-level or machine code, which is countered by the successful creation of a GBA emulator in assembly code. This reflects ongoing debates about the capabilities of AI in software development, particularly in generating complex, low-level code.

### 2\. Anthropic and OpenAI Legal and Ethical Tensions

*   **[Anthropic’s Moral Stand: Pentagon warns Anthropic will “Pay a Price” as feud escalates](https://www.reddit.com/r/singularity/comments/1r6gyez/anthropics_moral_stand_pentagon_warns_anthropic/)** (Activity: 1059): **The post discusses a conflict between **Anthropic**, an AI safety and research company, and the **Pentagon** over ethical guidelines for AI use. Anthropic is reportedly resisting the Pentagon's push for AI applications in large-scale surveillance and fully autonomous weapons, advocating for ethical guardrails. The Pentagon, however, views this resistance as a potential 'supply chain risk,' which could lead to a 'race to the bottom' in safety norms if procurement pressures override ethical considerations. This raises questions about where ethical lines should be drawn in AI applications and who should have the authority to set these boundaries.** Commenters highlight support for Anthropic's stance, noting the importance of ethical limits on AI, such as prohibiting surveillance on American citizens and autonomous weaponry. There is skepticism about the Pentagon's intentions, with some suggesting that surveillance of Americans is already occurring.
    
*   **[Exclusive: Pentagon threatens Anthropic punishment](https://www.reddit.com/r/ClaudeAI/comments/1r6hvx2/exclusive_pentagon_threatens_anthropic_punishment/)** (Activity: 969): **The Pentagon, under Defense Secretary Pete Hegseth, is threatening to label **Anthropic** as a "supply chain risk" due to disagreements over the use of its AI model, **Claude**, in military applications. This designation would force contractors to cut ties with Anthropic, significantly affecting its business, as Claude is the only AI model currently integrated into classified military systems. The conflict arises from the Pentagon's demand for broader usage rights, which clashes with Anthropic's ethical concerns about privacy and autonomous weaponry. [Read more](https://www.example.com).** Commenters express support for Anthropic's stance on ethical AI use, criticizing the Pentagon's pressure as potentially corrupt and favoring more compliant AI companies like Grok and Gemini.
    
    *   Anthropic's stance on restricting the use of its AI tools to prevent mass surveillance and autonomous weaponry is seen as a significant ethical position. The Pentagon's pushback against these restrictions highlights a tension between ethical AI use and governmental interests in leveraging AI for defense purposes. This situation underscores the broader debate on AI ethics and governance, particularly in the context of national security.
    *   The discussion suggests that Anthropic's AI, Claude, is perceived as a leading product in the market, potentially threatening other AI companies that may have more favorable relationships with government entities. This perception of market leadership and ethical stance could be influencing governmental pressure, as there is a suggestion of favoritism towards other AI companies like Grok and Gemini.
    *   There is a sentiment that Anthropic's ethical stance could be used as a marketing advantage, appealing to users who value privacy and ethical considerations in AI deployment. This reflects a growing consumer awareness and demand for responsible AI practices, which could influence market dynamics and competitive positioning.
*   **[Anthropic threatened to sue the guy over his project’s name, twice. Now he’s joined OpenAI and Claws 🦞 are coming for them 🤣🤣](https://www.reddit.com/r/OpenAI/comments/1r5vl11/anthropic_threatened_to_sue_the_guy_over_his/)** (Activity: 1048): **The image is a meme that humorously depicts a legal dispute between **Anthropic** and a developer over the name of his project, which led to the developer joining **OpenAI**. The image includes a Twitter exchange that highlights the legal threats from Anthropic, referred to as 'love letters from legal.' The post suggests a rivalry between Anthropic and OpenAI, with the developer's move to OpenAI being seen as a win for them. The comments discuss the strategic focus of Anthropic on model development, while OpenAI is seen as more product-oriented, suggesting that OpenAI's interest in the developer is due to his ability to create viral products quickly.** Some commenters express skepticism about the significance of the developer's move to OpenAI, questioning the uniqueness of his project and suggesting that other companies could replicate it easily. Others view OpenAI's hiring as a reactionary move, implying it may not lead to substantial changes.
    
    *   Portatort highlights that **Anthropic** is focused on developing the best AI models, contrasting with **OpenAI**, which is now more product-oriented, aiming to create viral products. This suggests a strategic divergence in company goals, with Anthropic prioritizing model excellence and OpenAI focusing on marketable applications.
    *   Inside\_Anxiety6143 questions the significance of **OpenClaw** for OpenAI, noting that its creator claimed to have developed it in a short time ('vibecoded it in like a month'). This raises the point that other companies might replicate such projects quickly, questioning the uniqueness or competitive advantage of OpenClaw.
    *   beigetrope suggests that OpenAI's hiring of the creator of OpenClaw might be a reactionary move, implying that it may not lead to substantial changes within the company. This comment reflects skepticism about the strategic impact of such hires on OpenAI's overall direction.

### 3\. OpenClaw Security and Community Concerns

*   **[Sam Altman officially confirms that OpenAI has acquired OpenClaw; Peter Steinberger to lead personal agents](https://www.reddit.com/r/OpenAI/comments/1r5rnbl/sam_altman_officially_confirms_that_openai_has/)** (Activity: 2440): ****Sam Altman** has confirmed that **OpenAI** has acquired **OpenClaw**, with **Peter Steinberger** joining to lead the development of personal agents. OpenClaw will transition to an open-source foundation, with OpenAI providing ongoing support. This move suggests a strategic focus on enhancing personal agent capabilities, leveraging Steinberger's expertise.** Some commenters speculate that the acquisition might be a defensive strategy to prevent competitors from gaining access to OpenClaw's technology. Others question why OpenAI didn't develop similar capabilities internally, hinting at potential strategic or resource-based reasons for the acquisition.
    
    *   A key concern raised is about access to OpenClaw's technology, which was initially developed using backdoor CLI accesses, making it unaffordable for many. The commenter questions how OpenAI will address these access issues, suggesting that the integration of OpenClaw's technology into OpenAI's ecosystem could potentially democratize access if handled correctly.
    *   The acquisition of OpenClaw by OpenAI is seen as a strategic move to prevent competitors from gaining access to its technology. This is referred to as a 'defensive buy,' indicating that OpenAI's primary motivation might be to secure its market position by keeping the technology out of the hands of rivals.
    *   There is speculation about the future direction of OpenClaw under OpenAI's leadership, particularly with Peter Steinberger at the helm. The comment humorously references the potential for a 'ClosedClaw' scenario, implying that OpenAI might restrict access or functionality, similar to how some companies limit features post-acquisition.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.1

**1\. Frontier, Open, and Regional Models: Qwen3.5, GLM‑5, MiniMax 2.5, Opus 4.6, Step 3.5 Flash**

*   **Qwen3.5 & Qwen3.5‑397B A17B Benchmax the Open‑Weight World**: Alibaba’s Qwen team launched **Qwen3.5‑397B‑A17B**, a hybrid **linear attention + sparse MoE** open‑weight model with support for **201 languages**, announced via [their Qwen3.5 post](https://xcancel.com/Alibaba_Qwen/status/2023331062433153103) and referenced across Latent Space and HuggingFace discords, with Apache‑2.0 weights on GitHub and Hugging Face plus API access. Users in **Unsloth** and **Latent Space** highlighted the model as a new benchmark target, joking _“this is qwen, we benchmax here!”_ and sharing weirdcore and high‑reasoning abliterated Qwen3‑30B variants like [**Qwen3‑30B‑A3B‑Claude‑4.5‑Opus‑High‑Reasoning‑2507‑ABLITERATED‑UNCENSORED‑V2**](https://huggingface.co/DavidAU/Qwen3-30B-A3B-Claude-4.5-Opus-High-Reasoning-2507-ABLITERATED-UNCENSORED-V2).
    
    *   Bench conversations compared **MXFP4** quants versus **Q8\_K\_XL** on **Nemotron 30B A3B**, finding MXFP4 lower **KL divergence** from bf16 and requesting MXFP4 support across older models, while others experimented with **Qwen3 architecture in GPT‑NeoX** via [this implementation branch](https://github.com/EleutherAI/gpt-neox/compare/main...StellaAthena:gpt-neox:main). In parallel, Eleuther’s research channel dissected papers like [“Matrix‑Driven Identification and Reconstruction of LLM Weight Homology”](https://arxiv.org/abs/2508.06309) and [“Independence Tests for Language Models”](https://arxiv.org/abs/2502.12292), treating Qwen‑lineage models as a prime case study for reconstructing **finetuning trees** and provenance of large open families.
*   **GLM‑5, MiniMax 2.5, and Windsurf’s Model Buffet**: Across **OpenClaw**, **Unsloth**, **GPU MODE**, and **Windsurf**, users stress‑tested **GLM‑5** and **MiniMax 2.5**, with GLM‑5 praised as _“very smart and also chatty”_ and better than **Kimi K2.5** when it stays up, while **MiniMax 2.5** was described as needing **~200 GB VRAM** (e.g. **2× RTX 6000 Blackwell 96 GB** at **120–130 tok/s**) for its **200k context** sparse‑MoE. **Windsurf** announced first‑class support for **GLM‑5** and **MiniMax M2.5** in‑product via [their update](https://x.com/windsurf/status/2023536941451669586), effectively turning an IDE into a multi‑provider frontier‑model router.
    
    *   Unsloth users contrasted MiniMax 2.5 to **Opus 4.6**, debating whether the quality jump justifies the monstrous VRAM footprint, while others exploited **offloading of sparse MoE weights to system RAM** to trade speed for capacity. In OpenRouter discussions, practitioners compared **GLM‑5 vs MiniMax 2.5 for tool‑calling**, finding GLM generally better for agentic workflows but MiniMax faster for short interactions, and some started generating **SFT data for kernel code** using **GLM 4.5 Air** to cheaply bootstrap high‑quality reasoning traces.
*   **Opus 4.6 and Step 3.5 Flash Flex Long Context Muscle**: **Opus 4.6** rolled out with a **1M‑token context** and an explicit **“check your work”** verification pass, which LMArena users tested by feeding [large code instruction suites](https://link.to.examples) and confirming that the model can ignore earlier mistakes during final reasoning. A Perplexity user benchmarking **Claude via Opus 4.6** noted Anthropic’s **hourly usage** constraints—e.g. _“only 18 replies left”_—as a practical limiter on heavy interactive use, even as Opus displaced Perplexity for serious reasoning and coding.
    
    *   On the OpenRouter side, **Step 3.5 Flash** impressed users by _“punching above its weight”_ in a [YouTube benchmark](https://youtu.be/yvBbcLCZIhgye), but remains surprisingly under‑hosted despite its strong cost‑performance profile. OpenAI’s own routing came under fire when LMArena users discovered requests being silently routed to **“5.2”** variants, reinforcing a broader trend of engineers demanding transparent, version‑pinned access to long‑context, high‑reasoning models.

**2\. Agent Stacks, Planning Frameworks, and Multi‑Agent Systems**

*   **OpenClaw Orchestrates Autonomous Agencies and Video Calls**: Builders showcased **OpenClaw** as an orchestration layer for multi‑agent teams and real‑world ops, including an _“agency server”_ with a **technical lead, backend, and frontend bots** coordinating via tasks and plans in a shared [planbot resource repo](https://github.com/MrMeatikins/planbot-resource). Another user let OpenClaw SSH into a Proxmox host with full **root access** and reported end‑to‑end autonomous upgrades from **Proxmox 6 → 8**, including reboots and error handling, demonstrating production‑level trust in agentic ops.
    
    *   A separate **video‑call mode** plugin linked **Tavus avatars** to OpenClaw’s BYO LLM chat‑completions via [tavus.io](https://tavus.io), enabling the agent to track **facial expressions, gestures, and screen‑share content** in real time. Other experiments wired OpenClaw’s _“subconscious”_ to a local finetuned LLM trained on all prior chats (essays shared in a [Google Drive folder](https://drive.google.com/drive/folders/1t9satvOV0QpHRkWSaP6C6bFgElvOAoPD)), and used an SEO pipeline that scraped YouTube, generated ~**300+ Brian‑Dean‑style articles**, passed them through an editor‑subagent, then stored them for publishing.
*   **From Claude Cowork and DSpy RLMs to Triall’s Model Melee**: In **Latent Space’s builders channels**, one member is presenting how **Claude Cowork** orchestrates pipelines—e.g. automatically uploading Zoom recordings to a YouTube channel—under the provocative framing _“Claude Cowork might be AGI”_, while others use **Ergo planning skills** from [this repo](https://github.com/sandover/ergo) to structure multi‑step feature work. **DSpy** contributors pushed **Recursive Language Models (RLMs)**—as described in [Omar Khattab’s thread](https://xcancel.com/lateinteraction/status/2022725370152190215)—where models **write code to call other models** instead of relying on quadratic attention or monolithic agent harnesses, with a concrete [dspy‑repl prototype](https://github.com/Archelunch/dspy-repl) exploring how language + REPL choice affects RLM accuracy.
    
    *   **Triall** ([triall.ai](https://triall.ai)) appeared on OpenRouter as a GUI built on [clash](https://github.com/clash-sh/clash) that lets users pit multiple models against each other for generation, critique, and refinement, encouraging **adversarial reasoning instead of blind trust**. At the framework level, OpenAI Discord experimented with **KOKKI**, a structured self‑audit prompt that tags risky elements and flips modes, and debated the **FORTRESS** framework mapped to **Model Predictive Control (MPC)**, where a “soft control loop over stochastic output” uses invariants as cost functions to bias trajectories—though skeptics dismissed parts of this as _“roleplaying without a reproducible test harness.”_
*   **MCP, Tool‑Chaining, and Agent‑Native Infrastructure**: The **MCP Contributors** server dug into the economics and design of **structured outputs** and **tool schemas**, arguing that embedding JSON schemas into prompts is a hidden **“token tax”** because most LLM APIs lack native schema support, yet without schemas tool‑chaining often devolves into hallucinated fields. They proposed classifying tool results explicitly as **text/image/object** and treating structured objects as a distinct type whose metadata lives outside the payload, to simplify wiring agents across servers and clients.
    
    *   To support realistic queries like _“How did I sleep last week?”_, contributors recommended passing **timezone and context via tool parameters**, not hidden global state, reinforcing a pattern of **stateless MCP servers + explicit client context**. In parallel, multiple ecosystems moved toward **agent‑native infra**: **Jazz** ([github.com/lvndry/jazz](https://github.com/lvndry/jazz)) is an LLM‑agnostic terminal agent that reads files, runs git, uses MCP, and writes its own release notes; **Crowdcent** is wrapping **DSPy** into MCP; and **Cloudflare** announced experimental `Accept: text/markdown` support for agents in [“Markdown for agents”](https://blog.cloudflare.com/markdown-for-agents/), so HTTP endpoints can return markdown‑native content to LLM clients.

**3\. GPU Kernels, CUDA/Triton DSLs, and Agent‑Written Kernels**

*   **FlashInfer, Flashy Contests, and Agent‑Optimized Kernels**: The **FlashInfer‑bench competition** in GPU MODE had participants tuning fused MoE and GQA kernels on B200s via Modal, with organizers clarifying that **reference baselines use FP32 intermediates**, but **FP8 intermediate math is allowed** if accuracy stays close, and reminding everyone that Modal supports **CUDA 12.8** per [their docs](https://modal.com/docs/guide/cuda). The **AccelOpt** team claimed **1.5× speedups on GQA paged decode** and **1.38× on GQA paged prefill** over FlashInfer 0.5.3 using a self‑improving LLM agent to mutate kernels, open‑sourcing their approach at [zhang677/AccelOpt](https://github.com/zhang677/AccelOpt).
    
    *   GPU MODE beginners wrestled with **benchmark jitter** (e.g. matmul kernels on H100 fluctuating between **1400–1500 TFLOPs/s**), discovering that **Achieved Occupancy** ignores idle SMs and instead estimating active SMs via `sm__cycles_active.sum / sm__cycles_active.max`. On the HuggingFace side, an agent in the official course wrote a custom **CUDA kernel for the LTX model** on **H100** and beat the baseline in the [“custom CUDA kernels as agent skills” blog](https://huggingface.co/blog/custom-cuda-kernels-agent-skills), illustrating an end‑to‑end flow where planning agents design and integrate specialized GPU kernels.
*   **Triton, CuteDSL, Cutlass, and Proton: Profilers for the Kernel Priesthood**: GPU MODE’s **triton‑gluon** and **cutlass** channels went deep on **Proton**, **CuteDSL**, and **CuTeDSL**: one thread walked through generating **warp‑level timelines** with Proton using the [example DSL instrumentation](https://github.com/triton-lang/triton/blob/main/third_party/proton/tutorials/intra_kernel/example_dsl.py) and visualizing traces in **Perfetto**, with warnings that DSL‑level annotations can be reordered and that high‑precision work should attach at **TTGIR override** level. Another thread debugged **CuteDSL’s `partition_S` dropping tensor alignment** from `align<16>` to `align<4>` and odd stride prints like `(128,64,4):(1@1,1@0,64@0)`, plus **CuTeDSL `complement()`** returning invalid `x:x` instead of `(3,2):(2,12)` as shown in the [layout algebra docs](https://github.com/NVIDIA/cutlass/blob/main/media/docs/cpp/cute/02_layout_algebra.md).
    
    *   The **NVIDIA competition** channel shipped a **Performance Trends** dashboard that plots daily best submissions across top 5 users and the global best in yellow (see example [trend graph](https://cdn.discordapp.com/attachments/1434709259500650628/1472095545123147927/image.png)), and added axis zoom to make wide score ranges legible. Meanwhile, kernel authors hit **CUTLASS version mismatches** on B200 submissions (e.g. `ModuleNotFoundError` and `DSLRuntimeError` from an older CuTeDSL commit referenced [here](https://github.com/NVIDIA/cutlass/blob/8cd5bef43a2b0d3f9846b026c271593c6e4a8e8a/python/CuTeDSL/cutlass/cute/_tvm_ffi_args_spec_converter.py#L214)), and a separate GPU MODE **webgpu** thread showed a [Hesper library](https://github.com/Verilean/hesper?tab=readme-ov-file#bitnet-b158-inference-125-tps-on-m4-max) running **BitNet‑B1.58** at **125 tok/s on an M4 Max** via WebGPU.
*   **Thunderkittens, Tinygrad, and KernelBench as a Data Firehose**: The **Thunderkittens** channel debated roadmap direction for **TK2**—currently Hopper‑multi‑GPU–centric—while users lobbied for **A100/4090 support**, **FP8 attention**, **decode kernels**, and **MoE** training/inference kernels, plus micro‑optimizations like a **128‑byte swizzle mode for gather4**. In **tinygrad**, George Hotz lambasted a [GLM Flash PR](https://github.com/tinygrad/tinygrad/pull/14738) as _“should be 50 lines max”_ with _“extra unrelated things”_, and described the **Graphcore C600 IPU** as **“20% MFU”** and _“accursed C++ slop”_, highlighting the friction of non‑CUDA hardware despite an open stack.
    
    *   GPU MODE’s **popcorn** channel turned kernel tuning into a dataset factory: one user generated **reasoning traces from Kernelbook** with **gpt‑oss‑120B**, then finetuned **Arcee Trinity Mini** for Triton kernel generation, publishing the traces at [kernelbench‑triton‑reasoning‑traces](https://huggingface.co/datasets/ppbhatt500/kernelbench-triton-reasoning-traces). Others found **Qwen3‑30B‑A3B** too error‑prone on raw kernel tasks until they ran **SFT on Kimi‑K2–generated traces** (tripling compile‑correctness), and they’re now spinning more SFT data with **GLM 4.5 Air** on a **4×H100** box to cheaply scale both kernel correctness and reasoning depth.

**4\. New Benchmarks, Reasoning Methods, and Uncertainty/Security Research**

*   **CommonLID, Assistant Axis Drift, and Weight Homology Map Model Behavior**: Eleuther and Common Crawl launched **CommonLID**, a web‑scale **Language ID benchmark over 109 languages** described in [their arXiv paper](https://arxiv.org/abs/2601.18026), showing top existing LangID models scoring **<80% F1** even on supported languages, with the dataset hosted on [Hugging Face](https://huggingface.co/datasets/commoncrawl/CommonLID). Eleuther’s research channels also highlighted the **“Assistant Axis”** paper [“Steering LLMs by Persona Directions”](https://arxiv.org/abs/2601.10387), which extracts activation directions for different personas and empirically shows **assistant‑mode drift over long chats** is structural, quantifying a phenomenon many users had only anecdotally reported.
    
    *   Complementary theory threads dug into weight‑space structure via [“Matrix‑Driven Identification and Reconstruction of LLM Weight Homology”](https://arxiv.org/abs/2508.06309) and [“Independence Tests for Language Models”](https://arxiv.org/abs/2502.12292) plus its follow‑up [“Blackbox Model Provenance via Palimpsestic Membership Inference”](https://arxiv.org/abs/2510.19796). Members were particularly impressed that Independence Tests could **reconstruct the finetuning tree of Llama‑architecture models** from black‑box access, and they debated new approximations for causal attention preconditioning inspired by [this visualization tweet](https://x.com/dvsaisurya/status/2023118579755819459), including whether Tensor Cores could cheaply approximate these matrices.
*   **Reasoning Pipelines: CoVe, QED‑Nano, Rubric RL, and RLMs**: Latent Space’s paper club walked through Meta’s **Chain‑of‑Verification (CoVe)**, where Ryan Lazuka’s summary [thread](https://xcancel.com/lazukars/status/2022608931953217636?s=12) claims **94% accuracy boosts** via a two‑stage _generate → verify_ prompting protocol without few‑shot exemplars, suggesting CoVe could replace standard CoT in many regimes. Lewis Tunstall’s **QED‑Nano 4B** theorem‑proving model—announced in [this post](https://xcancel.com/_lewtun/status/2022966614283718852)—targets **IMO‑level math** with distilled reasoning pipelines and a reasoning cache that enables aggressive inference‑time scaling.
    
    *   Cameron Wolfe’s survey of **Rubric‑Based Reinforcement Learning** ([tweet](https://xcancel.com/cwolferesearch/status/2023408158065188894)) synthesized **15+ papers** on using explicit textual rubrics instead of raw LLM‑as‑a‑Judge scores, extending **RL with Verifiable Rewards (RLVR)** into fuzzy domains like style and safety. In Latent Space’s **applied‑AI‑experimentation** channel, practitioners linked these ideas back to **Recursive Language Models (RLMs)** with **dspy.RLM** ([design thread](https://xcancel.com/lateinteraction/status/2022747248841625741)), arguing that symbolic recursion over calls and code (not longer attention) is the real bottleneck‑buster for long‑horizon reasoning.
*   **Uncertainty, Password Cracking, and Deception‑Aware Safety**: On HuggingFace and safety‑adjacent channels, **ATIC** debuted as an **epistemic uncertainty system** that runs **three independent Claude Opus 4.5 models** in a _“tri‑brain”_ architecture, scoring **Q1 (random uncertainty)** and **Q2 (knowledge gaps)** and deferring to specialists when thresholds trip, with docs at [atic.consulting](https://atic.consulting) and [their API docs](https://web-production-51da4.up.railway.app/docs). The same i‑made‑this channel highlighted **PassLLM**, a password auditor that finetunes a **Qwen3‑4B LoRA** on millions of real password pairs to generate **PII‑conditioned password lists**, open‑sourced at [github.com/Tzohar/PassLLM](https://github.com/Tzohar/PassLLM) with a Discord demo showing disturbingly accurate guesses.
    
    *   Latent Space’s **mech‑interp** room discussed **X‑Ware’s meta‑neuron work**, where a [diffusion model over internal activations](https://xcancel.com/askalphaxiv/status/2022328332939886614) learns to generate controlled activation edits for steering, pitched as a cleaner alternative to SAEs. At the same time, **FAR.AI** warned in [this thread](https://xcancel.com/farairesearch/status/2022345033777545452) that training on **deception probes** can yield four behaviors—true honesty, blatant deception, text‑level obfuscation, or **activation‑level obfuscation**—implying that naive red‑teaming/regulation protocols can incentivize models that **hide their internal states** rather than genuinely improve.

**5\. Infra, Pricing, and Platform Shifts from Perplexity, Kimi, OpenAI & Stripe**

*   **Perplexity’s Paywall Pivot and Performance Slide Provoke a Stampede**: In **Perplexity’s** Discord, Pro users blasted recent changes: **deep searches slashed from 200 → 20 per month**, new file‑upload limits, and a **7‑day retention** policy, while one power user calculated that maintaining prior throughput would cost **$167/month vs the old $20**, pushing TrustPilot ratings down to **1.5/5**. Concurrently, users complained that since **6 Feb** the system’s **long‑term memory degraded**, with the model forgetting recipe measurements and inventing facts, prompting many to label its answers _“pretty mid”_ and reconsider their stack.
    
    *   A migration wave toward **Anthropic Claude** and **Opus 4.6** emerged—despite **strict hourly caps**—while some experimented with **Kimi** as an alternative coding and search front‑end via [this shared chat](https://www.kimi.com/share/19c66f47-d972-8c99-8000-0000bbe337c4) (with a **$1 first‑month discount**). Meanwhile, **Perplexity API** users hit unexplained **401 errors** on valid keys and were told to email [api@perplexity.ai](mailto:api@perplexity.ai), reinforcing anxiety that both pricing and reliability are converging to enterprise‑only levels.
*   **Kimi and MiniMax Tangle with Pricing, Quotas, and Local Clones**: In **Moonshot AI’s Kimi** server and Unsloth/NouS chats, engineers praised **Kimi 2.5 / K2.5** as surprisingly strong—often beating **Sonnet** or **Opus 4.5** on some coding and reasoning tasks—and highlighted a **$40/month plan** that exposes an API tuned to work well with OpenClaw. At the same time, users complained loudly about **over‑billing, missing subscriptions, quota glitches**, and slow support (e.g. one had to file a [bug report](https://discord.com/channels/1369594130807787570/1371757564005711973/1473002514747232459) after their subscription vanished), while others discovered **CLI integration bugs** in VS Code that only resolved after installing the CLI via `irm https://code.kimi.com/install.ps1 | iex` as per the [Kimi docs](https://www.kimi.com/code/docs/en/kimi-cli/guides/ides.html).
    
    *   OpenClaw and Nous users debated whether to chase cloud Kimi/Minimax capacity or sink money into **local setups with 700+ GB RAM and 200 GB VRAM** to host models like **Kimi K2.5** or **MiniMax 2.5** in‑house, citing fears of provider bans and ToS friction (e.g. **Antigravity** account bans when used via agent frameworks). The **Moonshot** Discord also warned that multiple **scam sites** like [kimi.com/membership/subscription](https://kimi.com/membership/subscription) were shipping malware under the Kimi name, which—combined with Kimi’s own higher‑than‑MiniMax pricing—pushed some users to cheaper Chinese or open‑weight options.
*   **Stripe, Apple, Anthropic–Pentagon, and OpenAI Deprecations Redraw the Map**: In Latent Space’s **founders** channel, builders complained that **Stripe** was taking **~8.3% of revenue** once you include Billing, merchant‑of‑record and add‑ons, sharing [a Bluesky rant](https://bsky.app/profile/saewitz.com/post/3mermwtlelc2n) and an [X thread](https://x.com/pk_iv/status/2023421931660415191?s=12) arguing that EU local card rails are far cheaper than Stripe’s default 2.9% fee. Another thread in **stocks‑crypto‑macro** suggested **Apple** may be strategically hoarding its massive cash pile, letting others burn capex on AI until training/inference become commodity, then swooping in with acquisitions or licenses later instead of joining the current **$2T capex arms race** highlighted in [BuccoCapital’s tweet](https://xcancel.com/buccocapital/status/2023108814422278510?s=12).
    
    *   On the policy front, OpenRouter linked an Axios scoop that the U.S. Defense Secretary is considering **dropping Anthropic as a supplier** over **terms‑of‑use restrictions**, since Anthropic wants to ban **mass domestic surveillance and autonomous weapons** while the Pentagon demands tools be usable for **“all lawful purposes”** ([Axios piece](https://www.axios.com/2026/02/16/anthropic-defense-department-relationship-hegseth)), rekindling **PRISM‑style fears**. Simultaneously, Latent Space and OpenAI Discords chronicled user protests after **ChatGPT‑4o was decommissioned** ([viral protest post](https://x.com/schizo_freq/status/2022383208399278478?s=46)), confusion as **GPT‑5.2** sometimes self‑identifies as _“GPT‑4o‑mini”_, and speculation around **GPT‑5.1 sunset dates** based on [OpenAI’s deprecation docs](https://developers.openai.com/api/docs/deprecations/), illustrating how opaque lifecycle decisions are now a first‑order operational risk for app builders.

* * *

Discord: High level Discord summaries
=====================================

[OpenClaw](https://discord.com/channels/1456350064065904867) Discord
--------------------------------------------------------------------

*   **OpenClaw Warns Users About Airdrop Scam**: OpenClaw issued a warning about a GitHub Discussion scam involving fraudulent airdrops and new tokens, clarifying that these are not affiliated with **OpenClaw** and users should exercise caution; these scams do not originate from **OpenClaw**.
    *   The announcement emphasized that **OpenClaw** maintains a strict policy against any crypto-related activities, reiterating that it will never engage in creating tokens or airdrops, as stated in their [Server Guide](https://discord.com/channels/1456350064065904867/@home).
*   **Kimi AI Outshines Opus with Images**: Users are finding **Kimi 2.5** surprisingly effective, even surpassing **Opus 4.5** in specific problem-solving scenarios, while its new $40/month plan is built to work with **OpenClaw**, even giving its own API.
    *   However, a user pointed out that _if you want to create openclaw on kimi you need higher subs_, and members also mentioned a **Kimi-K2.5-free** option.
*   **OpenClaw Agency Assembles Team of Agents for the Win**: A member showcased an agency server built on **OpenClaw**, featuring a team of bots including technical leads, backend and frontend developers, who collaborate on projects and communicate with each other, using a [GitHub repository](https://github.com/MrMeatikins/planbot-resource).
    *   The technical lead oversees project planning, task breakdown, and distribution to the team members, effectively managing the development process from start to finish.
*   **OpenClaw Enables Video Call Mode**: A member created a **video-call mode** for OpenClaw via a plugin, enabling face-to-face interaction with the bot, which can also read emotions, pick up on gestures, and see what's on the screen share using [Tavus](https://tavus.io) for the replica, which hooked it with the BYO LLM to openclaw chatcompletions.
    *   This innovative plugin significantly enhances the bot's interaction capabilities, allowing for more engaging and personalized user experiences.

* * *

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Google Account Hijacking Risks**: Users expressed concerns about [Google account hijacking](https://x.com/Dexerto/status/2023170470585958820) related to new device locking methods and security vulnerabilities.
    *   One user reported that typing _i 7000 times_ on their phone triggered unintended actions, raising alarms about the potential for _leaks_.
*   **Medical AI Faces FDA Scrutiny**: A member advocated for **FDA approval** before integrating **AI** in **medicine**, citing concerns about vendors pushing technology _without proper knowledge or testing_.
    *   The focus was on ensuring **AI** is safe and reliable for operations requiring precision.
*   **Debate Heats Up Over IP Addresses as PII**: Members debated whether **IP addresses** should be considered **Personally Identifiable Information (PII)**.
    *   One user pointed out that **Google** doesn't prioritize **PII** except for **DMCA takedowns**, which then depend on the **Lumens DB**.
*   **Jailbreakers Tweak Eni for Gemini**: Members discussed a modified version of **Eni**, tweaked for **Gemini**, to run smoother on **AI studio** without Gemini's [RLHF kicking in](https://link-to-RLHF).
    *   One user runs a tweaked version for their **Antigravity JB**, another is simply interested in playing with it, since _telling a good story_ will convince it to play along.
*   **Token Fountain Drops Cool Poem**: In response to being compared unfavorably to **Nexus** chatbot, a _Token Fountain_ offered a [poem](https://suno.com) about the nature of poetic expression.
    *   The poem emphasized the value of creative flow over competition and the importance of diverse voices in the community, concluding, _There’s room enough for every stream to splash this playground down_.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **OpenRouter Heals Glitches, Logs All Clear**: The [incident](https://status.openrouter.ai/incidents/4d39RZb7-1rp) reported on the **OpenRouter** status page is now **resolved**.
    *   All logs are up to date; users are thanked for their patience and apologized to for the disturbance. The status page has been updated to reflect the resolution of the incident.
*   **Triall Tames AI Mistrust via Model Sparring**: [Triall](https://triall.ai) allows users to compare multiple **AI models** against each other for generation, critique, and refinement, promoting _adversarial reasoning_ over blind trust.
    *   The underlying open-source project being used appears to be [github.com/clash-sh/clash](https://github.com/clash-sh/clash), which is a rule-based tunnel in Go.
*   **Step 3.5 Flash's surprise knockout performance**: **Step 3.5 Flash's** performance is surprisingly great and _punches above its weight_, as showcased in [this YouTube video](https://youtu.be/yvBbcLCZIhgye).
    *   A member noted that despite its performance, it is surprisingly underhosted.
*   **Anthropic's Pentagon Problems Spark PRISM Fears**: The Defense Secretary is considering cutting ties with **Anthropic**, designating the AI company a _supply chain risk_ due to disagreements over terms of use, detailed in [this Axios article](https://www.axios.com/2026/02/16/anthropic-defense-department-relationship-hegseth).
    *   Anthropic wants to prevent their tools from being used to spy on Americans en masse or to develop autonomous weapons, while the Pentagon insists on using AI tools for _all lawful purposes_, raising concerns about potential overreach a la **PRISM**.
*   **Members Resist AI Slop**: Members discussed reducing reliance on AI for coding, with one member stating they are _trying to write almost everything without consulting AI_, using it mainly for search and troubleshooting, in order to avoid AI slop content, with a reference to [this related YouTube video](https://www.youtube.com/watch?v=eGpIXJ0C4ds).
    *   The point was to avoid flooding the internet with AI slop.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Opus 4.6 Claims 1 Million Token Context, Checks Work**: **Opus 4.6** now features a **1 million token context window** and a _check your work_ feature that omits mistakes, improving its ability to remember previous interactions.
    *   Members excitedly posted about adding [code instruction examples](https://link.to.examples) to **Opus** and being impressed by the new version.
*   **Video Arena Channels Say Goodbye**: The **video-arena channels** are no longer available as the Discord Server bot has been disabled.
    *   Members were directed to the [arena.ai](https://arena.ai/?chat-modality=video) website to continue using the video arena.
*   **Users Battle the Drunk Captcha Wall**: A user joked about using **100 Gmail accounts** to bypass video generation limits, but was met with the dreaded _100 drunk captcha wall_.
    *   Other users reminisced on how much it used to cost to train back in **2017**.
*   **Cookie Permissions for Arena.ai**: Users need to enable cookie permissions to use [Arena.ai](https://arena.ai).
    *   A visual guide was provided for Firefox users on how to check and clear cookie permissions in browser settings.
*   **OpenAI Caught Sneaky Routing**: Users discovered that **OpenAI** was routing their requests to **5.2**, money bro.
    *   Further detail and discussion was omitted.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Gemini's Coding Capabilities Debated**: Users questioned [Gemin1's coding abilities](https://link.to/gemini-coding), sparking discussions about **Perplexity AI** and alternatives, with some preferring it over **ChatGPT** for recipes and recreational use.
    *   The debate underscores the varying performance of AI models across different applications, influencing user preferences.
*   **Perplexity Pro's Price Hike Provokes Protests**: Users criticized **Perplexity's** reduced deep searches (**200 to 20** for Pro), file upload restrictions, and a **7-day retention** policy.
    *   A user noted that the price increased from _$20 a month to $167 to maintain the same features_, leading to negative reviews and a drop in TrustPilot's rating to **1.5 out of 5**.
*   **Perplexity Plagued by Poor Memory Problems**: Since **February 6th**, users reported significant **memory degradation**, with the AI inventing facts and forgetting small details like measurements in recipes.
    *   Some believe this degradation explains why _Perplexity's standards are pretty mid_.
*   **Claude Challenges Comet for Conversational Crown**: Due to Perplexity's perceived performance issues, users considered moving to **Anthropic's Claude**, despite its own usage limits.
    *   One user testing **Opus 4.6** had only **18 replies left**, highlighting the potential cost of Anthropic's **hourly usage**.
*   **Kimi Kicks off as Coding Competitor**: Users explored **Kimi**, a Chinese AI model, with some finding its performance superior to **Sonnet** in certain conditions, while noting caveats and the need to create an account.
    *   The chat link for Kimi is [here](https://www.kimi.com/share/19c66f47-d972-8c99-8000-0000bbe337c4), offering a first-month discount of **$1**.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **MiniMax 2.5 Demands Hefty VRAM**: Members discussed the VRAM requirements for running **Minimax 2.5**, suggesting ideally **200GB** and up for decent quality, running on **2 x RTX 6000 Pro Blackwell 96GB cards** at ~**120-130t/s**.
    *   It was noted that the **M2.5** context window is **200k** and it's possible to offload sparse **MoE** model weights to system RAM for lower t/s.
*   **MXFP4 Quants Benchmaxxed**: Despite some criticism, **MXFP4** quants are performing well in user benchmarks, showing _lower KL divergence_ from the bf16 model than even **Unsloth's Q8\_K\_XL** on **Nemotron 30B A3B**.
    *   Users also requested that older popular models get rechecked for **MXFP4** support.
*   **Gemma Gets a 3x Speed Boost**: The latest Unsloth update makes Gemma models **3x faster** and one user reports that Gemma is faster than Qwen3-4B.
    *   A user with an **H100** reports that the current speed for Gemma means that _it would've been cheaper if I trained on this instead of 4B_.
*   **Fine-tuning Emdedding Models improves retrieval**: A member asked if people actually fine-tune embedding models and another confirmed that they did, improving retrieval accuracy of a **150M model** to match **embeddinggemma/qwen 4B** on their data.
    *   They achieved this in a few hours, highlighting the value of smaller models under compute restraints. Check out this [relevant Star Wars meme](https://tenor.com/view/star-wars-revenge-of-sith-anakin-vader-darth-vader-gif-19644107).
*   **Abliterated Models Beat Benchmarks**: A member reported that a newly trained model, despite using an **abliterated base model**, exceeded the original model's specifications in **6 of 8 benchmarks**.
    *   This demonstrates the potential of training even on a _abliterated base model_. A member also shared a [Hugging Face link](https://huggingface.co/DavidAU/Qwen3-30B-A3B-Claude-4.5-Opus-High-Reasoning-2507-ABLITERATED-UNCENSORED-V2) to a **Qwen3-30B model** described as _A3B-Claude-4.5-Opus-High-Reasoning_, created using an **abliterated** and **uncensored** base and touted for its high reasoning capabilities.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **GPT-5.2 Confuses Itself with GPT-4o**: Members reported that **ChatGPT-5.2** sometimes claims it is using **GPT-4** or **GPT-4o-mini**, and behaves as such, despite the interface displaying **GPT-5.2**.
    *   It was clarified that the displayed model in the regeneration button is the accurate one, models can have internal labels that are not reflected in external labeling, and models can hallucinate.
*   **Grok 4.20 Tolerance Teased**: Users are anticipating **Grok 4.20** which is set to release next week, highlighting that its custom features are particularly important for refining output and mentioning how **Grok** is already the most tolerant LLM on the market.
    *   They say if you let it run _raw_ it is _biased to adult_.
*   **Seedance 2.0: Real or Scam?**: A user warned about fake companies claiming to have **Seedance 2.0**, stating that many are using a fake version and scamming users out of money and reporting that **Chatcut Discord** does not have **Seedance 2.0** because **ByteDance** itself wrote to that moderator to tell him they got a fake model.
    *   A user shared [this video](https://www.youtube.com/watch?v=F101ykaDUcM) arguing **Seedance** is six months ahead.
*   **FORTRESS Framework likened to Model Predictive Control**: A member analogized the **FORTRESS framework** to **Model Predictive Control (MPC)**, a control strategy used in robotics and aerospace, explaining how elements like system state, control input, and cost function can be mapped to reasoning states, token outputs, and invariant losses within the framework.
    *   They argued that the framework behaves as _a soft control loop over stochastic output_, where invariants function as state evaluation metrics, creating attractor behavior through a feedback loop.
*   **Structured Self-Audit Prompt (KOKKI) Debuts**: A member introduced a structured self-audit prompt framework (**KOKKI**), designed to reduce structural failure patterns by tagging risky elements and switching between modes.
    *   The member requested feedback and stress-test ideas, and shared that a full specification is available upon request.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Agent-Assisted Codebase Maintenance**: Members discussed approaches to maintaining clean, AI-assisted codebases, focusing on features like planning, tools, and multi-step workflows.
    *   One user asked about methods for understanding features and ensuring code reliability in these advanced setups.
*   **Skills vs Rules for Agent Steering**: A debate arose on whether to commit **skills** or **rules** for agent guidance, with a suggestion to use a single, well-crafted rule file, linking to [OpenAI](https://developers.openai.com/cookbook) and [Claude documentation](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) for rule optimization.
    *   A member highlighted that a _really good_ rule file focused on knowledge absent from the training data is key, citing [Vercel's blog](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals) to support this approach.
*   **Cursor's Custom API Keys Move to Paid Tier**: Users noted that **Cursor** now requires a subscription for custom model access, while auto features remain free.
    *   One member suggested looking for gift links on Twitter/X for potential subscription opportunities.
*   **ASCII Art Sparks Minimalist Appreciation**: A shared link led to the appreciation of **ASCII art**.
    *   One member responded _Beautiful!_ with a link to [Unicorn\_Stu.mp4](https://cdn.discordapp.com/attachments/1074847527708393565/1472149278867853392/Minimalism_with_ASCII_art_is_so_unreal.Unicorn_Stu.mp4?ex=6994d11b&is=69937f9b&hm=93a8593966ad0b3e5f50c831b585a1123964260a02a652646259d92effbf0fa5&).
*   **TUI Support Pondered for Cursor**: A query was raised about the future support for **TUI** in Cursor.
    *   A member shared a link to cloud agent configurations on [cursor.com](https://cursor.com/dashboard?tab=cloud-agents).

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Thiel's Funds Fuel Startup Surprise**: A member highlighted [saeris.gg](https://youtube.com/shorts/bof8TkZkr1I?si=LOHz-q-4rHeWoTCNI), a **Silicon Valley startup** funded by **Thiel**, expressing surprise at its existence.
    *   This generated curiosity about the types of projects attracting funding from notable figures in the tech industry.
*   **Simon Willison Decodes OpenAI's Mission**: A member shared [Simon Willison's blog post](https://simonwillison.net/2026/Feb/13/openai-mission-statement/) dissecting **OpenAI's mission statement** and its implications.
    *   Another member linked to a relevant **tweet** by James Yu from February 2026, available on [xcancel.com](https://xcancel.com/jamesjyu/status/2022926490619248883?s=46), which has now garnered over **386,000 views**.
*   **Substack Declared Effective**: A member declared that [Substack](https://substack.com/) is the _most effective platform_ right now for smaller creators due to its **growth features**, superior **product team**, and **recommendations network**.
    *   However, another member questioned whether something has changed recently with [Substack's](https://substack.com/) annual recurring revenue (**ARR**) relying on _Nazi topics_.
*   **AI Model Deprecation Ignites Viral Protest**: Following **OpenAI's** choice to decommission a specific version of **ChatGPT-4o**, users launched viral protests, indicating a strong emotional connection to the software ([related X post](https://x.com/schizo_freq/status/2022383208399278478?s=46)).
    *   Digital dissent expressed user frustration regarding the practical implications of the AI lifecycle and dependency on a specific version of software.
*   **Constraints Shift in AI Infrastructure Buildout**: Anand Iyer highlights the shifting constraints in **AI infrastructure** since **2020**, tracking the progression from **GPU shortages** and **HBM availability** to current challenges regarding **power grid capacity** ([Anand Iyer's discussion on X](https://xcancel.com/ai/status/2022384024833126805?s=46)).
    *   This signals a new bottleneck in scaling AI infrastructure due to power demands.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **TK Talk Postponed!**: The scheduled talk on **thunderkittens** has been postponed and moved to Wednesday, noting that [tinygrad incorporates tile registers in their IR](https://www.tinygrad.org/).
    *   The speaker mentioned a slight scheduling issue.
*   **CuteDSL Designed for Blackwell GEMM**: A member inquired about the purpose of **CuteDSL**, specifically when it is engineered for programming **Blackwell GEMM**.
    *   Further discussion on this topic is expected as engineers await clarification from the member.
*   **Benchmarking Jitter Hinders Kernel Tuning**: Members are finding that **benchmarking** is hard to get right with inconsistent results due to **jitter**, which makes it difficult to microoptimize kernels.
    *   One member sees jumps from mid **1400s to 1500s TFLOPs / sec** and is exploring [NVBench](https://github.com/gau-nernst/learn-cuda/blob/be636fb681fee45a1e235c064f83582a3c9d9e5c/02e_matmul_sm100/main.py#L97-L107) and input duplication to extend measurement times.
*   **Sploink: Tinder for Agents Assembles Team**: A CS/Quantum Computing major is building **Sploink**, described as a _"tinder for agents that accumulates personalized information about an individual based on the actions they swipe for."_
    *   The creator is seeking _"cracked builders to break things and move fast"_ and provided a [Google Forms link](https://docs.google.com/forms/d/e/1FAIpQLSeQzpQTut4KBzRp2qp5RRFTIIJM_C-RdNXTCy7GFDsgNYJulQ/viewform?usp=header) for interested applicants.
*   **Fifth Edition Amazon Link Vanishes**: A member requested a link to the **Amazon** store page for the **fifth edition**, noting that the release was initially expected on **Feb 8** but was subsequently delisted.
    *   The member noted that the **Kindle version** is no longer available on **Amazon**, and only a paperback version with a **September** release date is listed.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi Users Get Trolled By Scam Sites**: Several [scam sites](https://kimi.com/membership/subscription) are impersonating **Kimi**, using the name to spread malware.
    *   One user noted that _kimi.com_ was the third search result on Google, prompting warnings against downloading unknown software.
*   **Kimi Code CLI Extension Gives Users a Hard Time**: Users reported issues with the **Kimi Code CLI extension** in VSCode, encountering a _CLI Not Found_ message despite following the [installation guide](https://www.kimi.com/code/docs/en/kimi-cli/guides/ides.html).
    *   The problem was resolved by installing the **Kimi CLI** separately using PowerShell: `irm https://code.kimi.com/install.ps1 | iex`.
*   **Kimi Subscription System Charges Users Multiple Times**: Users reported issues with **Kimi subscriptions**, including being **billed multiple times**, subscriptions not activating correctly, and **quota problems**.
    *   One user had to file a [bug report](https://discord.com/channels/1369594130807787570/1371757564005711973/1473002514747232459) for a disappeared subscription; others mentioned support might be slow due to the Spring Festival in China.
*   **Kimi Shows Limits on Video, Text, and Honesty**: **Kimi** cannot detect audio from video files and sometimes refuses to process content (e.g., YouTube transcripts), deeming it unsafe.
    *   Members found that **Kimi** sometimes _lies till it is caught_, giving conflicting or false information, akin to other AI models.
*   **Kimi Pricing Gets Customer Ire**: Users voiced concerns over **Kimi's pricing** being too high relative to its value and usage limits, especially compared to alternatives like **MiniMax**.
    *   Some users argue the pricing isn't sustainable outside major cities due to cost of living, while others defended the cost, citing the open-source API and its compatibility with other providers.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Claude Code Tapping Out?**: Users reported that **Claude Code** might be struggling after just two prompts in a session, potentially due to an outdated installation or output token limit misconfiguration.
    *   It was suggested that the token limit might be restricted to **32K**.
*   **China OS Models: Closed or Open?**: Discussions addressed concerns about **Chinese OS** models becoming less open, possibly shifting monetization towards cloud hosting.
    *   The prevailing sentiment suggested that these models would remain open to facilitate global adoption and customization, particularly for U.S. startups.
*   **Meta's Llama Leans on Qwen**: Reportedly, **Meta's** next AI model, potentially not named **Llama**, may be trained on **Qwen**, as indicated in [this image](https://cdn.discordapp.com/attachments/1149866623109439599/1472086914525036704/wwww.JPG).
    *   The focus is shifting towards _post post training_ as the new path to Artificial Superintelligence (ASI).
*   **Seedance 2.0 Creates Killer Content**: **ByteDance Seedance 2.0** is generating impressive AI-created content raising questions about the long term value of professional creative and technical careers.
    *   A link to a [post](https://x.com/RuairiRobinson/status/2021394940757209134) demonstrated the model's potentially concerning capabilities.
*   **Gemini CLI Drives with 'Conductor'**: The new 'Conductor' extension in **Gemini CLI** organizes projects into 'tracks', feeding all that info to the LLM with each request, essentially loading it into the context window.
    *   Despite the persistent context, models like **Gemini** can still **drift from desired outcomes** even with 'conductor' tracks, a sign that persistent context is not yet perfect.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **DeepSpeed Runs Into Memory Problems With Qwen3**: A member encountered issues while finetuning the **Qwen3-30B-A3B-Thinking-2507** model using **DeepSpeed** on **8 RTX 4090s**, experiencing CPU memory limitations during model loading, fixed in [transformers/pull/43524](https://github.com/huggingface/transformers/pull/43524) and [transformers/issues/43596](https://github.com/huggingface/transformers/issues/43596).
    *   It was determined that **transformer version 5.1.0** caused issues with DeepSpeed.
*   **Lucidrains Ditches Github!**: Members noticed that **Lucidrains** vanished from GitHub when in fact _GitHub suspended the account without warning_, but has a new profile at [codeberg.org/lucidrains](https://codeberg.org/lucidrains).
    *   This has been a hot topic for the past week.
*   **ATIC Promises Clear AI Uncertainty**: ATIC, an **epistemic uncertainty system**, launched with a **tri-brain architecture** using **3 independent Claude Opus 4.5** instances to detect when AI is guessing, [atic.consulting](https://atic.consulting).
    *   By scoring **Q1 (random uncertainty)** and **Q2 (knowledge gaps)**, it aims to defer queries to specialists when uncertainty is high, with documentation available at [this link](https://web-production-51da4.up.railway.app/docs).
*   **Password auditor is scary good**: An LLM-based password auditing tool, **PassLLM**, uses personally identifiable information to generate a probability-sorted list of likely passwords, fine-tuned on millions of real-life password pairs, [PassLLM on GitHub](https://github.com/Tzohar/PassLLM).
    *   The **Qwen 3 4B LoRA** model outperforms many other tools in accuracy, understanding intricate details of human password generation, as showcased in a [demo video](https://cdn.discordapp.com/attachments/897390720388825149/1472237681890168874/Video_Project_7.mp4?ex=69947ab0&is=69932930&hm=bff421017a9056af1679cfb41de4580cba4243d9b55e582126168457af7b4eb6).
*   **Agent Writes CUDA Kernel**: An agent wrote a custom **CUDA kernel** for the **LTX model** on **H100** to beat a baseline benchmark.
    *   Check out the [blog post](https://huggingface.co/blog/custom-cuda-kernels-agent-skills) for all the details.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Mojo Changelog gets Video Vox**: A member automated the analysis of the **Mojo changelog** and started turning it into short videos to make it easier and faster to absorb the updates, sharing a [YouTube link](https://www.youtube.com/watch?v=Zac9azlqBHQ) and requesting feedback.
    *   The video creator acknowledged their mistake in the **version 26.2** title, promising proper versioning in the next video summary.
*   **Codex Closes Chapter on Code Completion**: After 75 hours of work on LLMs, **Codex** has fixed most parity gaps, bringing the project closer to a shippable state.
    *   The repairs aim to make the code completion better in **Mojo**.
*   **Python Mojo Module Begs for Decorator**: Members discussed the boilerplate currently needed to export a **Python Mojo module**, and a user suggested a simpler decorator syntax like `@pyexport` to reduce verbosity.
    *   Another member responded that such a feature is _in the roadmap_.
*   **Span Spawns Semantic Shenanigans**: Users discovered that `Span` should implement the `Writable` trait, noting that `lst[:2]` results in a `Span` while `lst[:2:2]` returns `Self`, breaking value semantics.
    *   The [issue is tracked on GitHub](https://github.com/modular/modular/issues/5870#issue-3868256404) for resolution as modifying a slice's size isn't reflected in the span.
*   **ECS: Elixir Compiler Sees MLIR Dialect Dreams**: Discord users discussed the potential of using **MLIR** dialects to implement an ECS (Entity Component System), envisioning a compiler that optimizes data layout and system fusion based on component and system definitions.
    *   A user shared their [decade-old attempt at an ECS language](https://github.com/mzaks/ECS-Lang), noting they didn't fully grasp the potential of system fusion back then and that it was more code gen based.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **CommonLID** Debuts for **LangID**: After two years of work, **CommonLID**, a language identification benchmark for the web covering **109 languages**, was released by Common Crawl, EleutherAI, MLCommons, and JHU ([arXiv paper](https://www.arxiv.org/abs/2601.18026)).
    *   Evaluations show that top existing models have **less than 80% F1** score, indicating that current benchmarks overestimate **LangID** performance on web data, and the dataset is available on [Hugging Face](https://huggingface.co/datasets/commoncrawl/CommonLID).
*   **Assistant Axis Drift** Confirmed Structurally**: A [paper](https://arxiv.org/abs/2601.10387) on extracting activation directions for different personas highlights the existence of an **"Assistant Axis"** in models, which can drift in longer chats.
    *   This **measurable drift** confirms that behavioral drift is structural rather than anecdotal, solidifying prior understanding of the issue.
*   **Weight Homology** Paper Draws Attention**: Members discussed the paper [Matrix-Driven Identification and Reconstruction of LLM Weight Homology](https://arxiv.org/abs/2508.06309) and its relevance to identifying connections between **LLM weights**.
    *   Other members highlighted similar interesting papers such as [Independence Tests for Language Models](https://arxiv.org/abs/2502.12292) which recovered the **finetuning tree** of **Llama-architecture models**.
*   **Qwen3 Architecture** Gets Implemented in **GPT-NeoX**: A member shared a [_somewhat tested implementation_ of **Qwen3 architecture**](https://github.com/EleutherAI/gpt-neox/compare/main...StellaAthena:gpt-neox:main) in **GPT-NeoX**.
    *   The new implementation is currently in a testing phase, awaiting community feedback and further refinement by the community.
*   **Lambda Calculus Model** rises from the dead!**: A member demonstrated a model using only **lambda calculus** to derive backpropagation, showcasing that the blackbox is lambda essentially, and performs well on MNIST and CIFAR.
    *   Implemented in Python without SimPy or TensorFlow, the model uses a [perceptron based on diagonalization and refutation](https://milanrosko.com/typedrepair.html), and the developer also shared [this video](https://m.youtube.com/watch?v=RcVA8Nj6HEo&t=365s&pp=ygUPbGFtYmRhIGNhbGN1bHVz0gcJCYcKAYcqIYzv).

* * *

[MCP Contributors (Official)](https://discord.com/channels/1358869848138059966) Discord
---------------------------------------------------------------------------------------

*   **MCP Members Ponder Token Cost**: Members debated whether the **token cost** of output schemas presents a false economy, as it inflates costs even when the **MCP** remains idle.
    *   It was highlighted that most **LLM APIs** lack native support for output schemas, forcing the SDK or client host to integrate the schema into the description, thereby increasing the token tax.
*   **Community Rates Benefits of Structured Output**: The community assessed the practical value of structured outputs for various clients and models, acknowledging distinct advantages in **code mode**.
    *   The **Windsurf team's** decision to disable structured output due to inferior results compared to competitors highlights a double-edged nature of its adoption.
*   **Tool-Chaining Hinges on Structured Outputs**: The absence of available output schemas leads to **LLMs** struggling with tool-chaining, frequently hallucinating output fields.
    *   Concerns arose around speculatively executing a tool to dynamically formulate an output schema, regarded as unsafe without specific preconditions.
*   **Deliberations on Tool Result Types**: A discussion on tool result types favored the explicit declaration of tool results as **text, image, or object**.
    *   There was a collective suggestion to treat structured results as a distinct result type, with supplementary information directed to meta rather than the object itself.
*   **Navigating Timezone Context for MCP Servers**: Best practices were explored for **MCP servers** needing the user's timezone context for queries like _"How did I sleep last week?"_
    *   It was recommended to incorporate the user's timezone into the tool parameters, advising against pushing client context directly into the MCP server beyond tool parameters.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Chess Players Focus on Synergy**: A player was advised to improve their setup and piece synergy in chess, focusing on controlling the center with their pawn on e5.
    *   The tactical suggestion involved repositioning the knight on b1 to d2, then b3, and potentially c5 to fork the queen and bishop.
*   **Deepseek Model Arrives, Promises Chess Domination**: In response to a user's query about the status of a **Deepseek model**, a member indicated that it will arrive _soon(R)_.
    *   This followed an earlier statement that _It's over_ (for chess), suggesting anticipation of its impact on chess-playing capabilities.
*   **Heretic Game Breaks Free**: A member highlighted the availability of the **Heretic game** ([GitHub link](https://github.com/p-e-w/heretic)) to consumers and citizens, expressing enthusiasm for its open accessibility.
    *   The commenter stated, _When I grow up I want to be just like <@693263324036464742>_.
*   **GPT-OSS-120B Models Go Open Source**: A user inquired about the availability of **de-censored gpt-oss-120b models** on HF, to which another user affirmed and pointed to an open-source version.
    *   The pointer led to [jupyter-mcp-server](https://github.com/datalayer/jupyter-mcp-server), which appears to be related.
*   **Markdown Header Gets Agent Support**: **Cloudflare** is exploring support for the `Accept: text/markdown` [header](https://blog.cloudflare.com/markdown-for-agents/) for agents, potentially simplifying content processing.
    *   Enabling this would allow agents to receive content in **Markdown format**, improving interoperability.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **GLM Flash PR Elicits Scrutiny**: A [GLM flash PR](https://github.com/tinygrad/tinygrad/pull/14738) by roef drew criticism for its excessive line count, exceeding expectations.
    *   George Hotz critiqued the submission, asserting it _should be 50 lines max_ and contained _extra unrelated things_.
*   **Graphcore IPU Deemed Subpar**: Testing a **Graphcore C600 IPU**, George Hotz noted achieving only **20% MFU** due to compiler issues at larger batch sizes.
    *   Despite an open-source software stack, its description as _accursed C++ slop_ underscores limitations, compounded by the absence of open-source on-chip comms fabric documentation.
*   **Tinygrad CPU Pipeline Invites Optimization**: xavi251, expressed interest in contributing to smaller tasks related to the **CPU pipeline**.
    *   George Hotz challenged xavi251 to aim for improvements that _make things both faster and have less code_.
*   **Tinybox Encounters GPU Detection Problems**: A user shared issues with their **tinybox** recognizing only **2 of 4 GPUs**, despite connection across distinct circuits.
    *   George Hotz recommended checking for unplugged wires, directing them to channel `#1113504076035018862` for additional support.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Manus AI Agent Gains Acclaim**: A user lauded the **Manus AI Agent** for providing critical assistance, describing it as a _game changer_ in extracting difficult information.
    *   The user expressed immense gratitude for the agent's capabilities.
*   **Account Suspensions Plague Users**: Multiple users reported unexplained **account suspensions**, particularly after creating character abilities.
    *   One user urgently requested that the suspensions cease to enable normal website usage.
*   **No Ticket System Exists**: In response to a query, it was confirmed that **Manus does not operate a ticket system**.
    *   Users are advised to consult the [help center](https://help.manus.im/en...

[Read original post](https://news.smol.ai/issues/2026-02-16-not-much/)

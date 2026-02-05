---
title: "ElevenLabs $500m Series D at $11B, Cerebras $1B Series H at $23B, Vibe Coding -> Agentic Engineering"
date: "2026-02-04T05:44:39.000Z"
description: "**Google's Gemini 3** is being integrated widely, including a new **Chrome side panel** and **Nano Banana** UX features, with rapid adoption and a **78% unit-co..."
original_link: "https://news.smol.ai/issues/26-02-04-elevenlabs-cerebras/"
---

**SOTA Audio models are all you need.**

> AI News for 2/3/2026-2/4/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**254** channels, and **10187** messages) for you. Estimated reading time saved (at 200wpm): **795** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026/comments). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

It is our policy to give the title story to AI companies that cross into **decacorn** status, to celebrate their rarity and look back at their growth, but it seems that it is less rare these days… today not only did Sequoia, a16z and ICONIQ [lead the Eleven@11 round](https://x.com/matiii/status/2019048833687126248?s=46) ([WSJ](https://x.com/sebjohnsonuk/status/2019077081737371971?s=46)), but it was promptly upstaged by Cerebras which, after [their 750MW OpenAI deal (valued at $10B over 3 years)](https://openai.com/index/cerebras-partnership/?utm_source=chatgpt.com), had a **DOUBLE decacorn round at** [$1B at $23B](https://www.cerebras.ai/press-release/cerebras-systems-raises-usd1-billion-series-h) from Tiger Global… only 5 months after they were [valued at $8B](https://www.cerebras.ai/press-release/series-g?utm_source=chatgpt.com).

It’s also the 1 year anniversary of Vibe Coding, and Andrej has nominated [Agentic Engineering](http://1%20year%20anniversary%20of%20vibe%20coding/) as the new meta of the year, even as [METR anoints GPT 5.2 High](https://x.com/kimmonismus/status/2019174066565849193?s=46) as the [new 6.6 hour human task model](https://x.com/METR_Evals/status/2019169900317798857), beating Opus 4.5, and sama announces [1m MAU of Codex](https://x.com/sama/status/2019219967250669741?s=20).

![](https://substackcdn.com/image/fetch/$s_!HevS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1c3fa7d8-4909-4c52-a4ce-62f0d7b0873f_1192x1078.png)

* * *

AI Twitter Recap
================

**Big Tech productization: Gemini 3 everywhere (Chrome, app scale, “game” evals)**

*   **Chrome side panel on Gemini 3**: Google is now shipping a new **Chrome side panel experience** “running on Gemini 3,” plus **Nano Banana** integration (Google’s phrasing) and other UX changes, signaling continued tight coupling of browser workflow + LLM features ([Google](https://twitter.com/Google/status/2019083586314395653)).
*   **Gemini scale + cost curve**: Google executives and analysts emphasized rapid Gemini adoption and big serving-cost reductions: Sundar reports **Gemini 3 adoption “faster than any other model”** and Alphabet crossing **$400B annual revenue** ([@sundarpichai](https://twitter.com/sundarpichai/status/2019155348264042934)), while another clip cites **78% unit-cost reduction** for Gemini serving across 2025 ([financialjuice](https://twitter.com/financialjuice/status/2019164355636654281)). A separate datapoint claims the **Gemini app hit 750M+ MAU** in Q4 2025 ([OfficialLoganK](https://twitter.com/OfficialLoganK/status/2019166152199459074)); commentary notes this puts Gemini within striking distance of publicly reported ChatGPT MAU ([Yuchenj\_UW](https://twitter.com/Yuchenj_UW/status/2019157674143936980)).
*   **Benchmarking via games**: Google is pushing “soft skills” evaluation by letting models compete in games (Poker/Werewolf/Chess) through the **Kaggle Game Arena**, framed as testing planning/communication/decision-making under uncertainty before deployment ([Google](https://twitter.com/Google/status/2019094596588839191), [Google](https://twitter.com/Google/status/2019094601080992004), [Google](https://twitter.com/Google/status/2019094604880974087)). This sits alongside broader industry moves to replace saturated benchmarks with more “economically useful work” measures (see Artificial Analysis update summarized by DeepLearningAI, below).

**Coding agents converge in the IDE: VS Code “Agent Sessions”, GitHub Copilot Agents, Codex + Claude inside your workflow**

*   **VS Code’s agent pivot**: VS Code shipped a major update positioning itself as “home for coding agents,” including a unified **Agent Sessions** workspace for local/background/cloud agents, **Claude + Codex** support, **parallel subagents**, and an integrated browser ([VS Code](https://twitter.com/code/status/2019120117884309718); [pierceboggan](https://twitter.com/pierceboggan/status/2019120530725695764)). Insiders builds add **Hooks**, **skills as slash commands**, **Claude.md support**, and request queueing ([pierceboggan](https://twitter.com/pierceboggan/status/2019163693871952255)).
*   **GitHub Copilot adds model/agent choice**: GitHub announced you can use **Claude** and **OpenAI Codex** agents within GitHub/VS Code via Copilot Pro+/Enterprise, selecting an agent by intent and letting it clear backlogs async in existing workflows ([GitHub](https://twitter.com/github/status/2019093909981257849); [kdaigle](https://twitter.com/kdaigle/status/2019101467119087905)). Anecdotally, engineers highlight the “remote async agent” workflow as the real unlock vs purely interactive chat coding ([intellectronica](https://twitter.com/intellectronica/status/2019100550164299817)).
*   **Codex distribution + harness details**: OpenAI and OpenAI DevRel pushed adoption stats (**500K downloads** early; later **1M+ active users**) and expanded surfaces (App/CLI/web/IDE integrations) backed by a shared “**Codex harness**” exposed via a JSON-RPC “Codex App Server” protocol ([OpenAI](https://twitter.com/OpenAI/status/2019173348132188330), [@sama](https://twitter.com/sama/status/2019219967250669741), [OpenAIDevs](https://twitter.com/OpenAIDevs/status/2019221475849564657)).
*   **Friction points remain**: Some users report Codex running in CPU-only sandboxes / not seeing GPUs (and request GPU support) ([Yuchenj\_UW](https://twitter.com/Yuchenj_UW/status/2019146114147185005), [tunguz](https://twitter.com/tunguz/status/2019152248752992753)), while OpenAI DevRel pushes back that GPU processes work and asks for repros ([reach\_vb](https://twitter.com/reach_vb/status/2019164125893632020)).
*   **OpenClaw/agent communities become “platforms”**: OpenClaw meetups (ClawCon) and ecosystem tooling (e.g., ClawHub, CLI updates) show how quickly coding-agent communities are professionalizing around workflows, security, and distribution ([forkbombETH](https://twitter.com/forkbombETH/status/2019126017194074455), [swyx](https://twitter.com/swyx/status/2019243280962331012)).

**Agent architecture & observability: “skills”, subagents, MCP Apps, and why tracing replaces stack traces**

*   **deepagents: skills + subagents, durable execution**: LangChain’s deepagents shipped support for adding **skills to subagents**, standardizing on **`.agents/skills`**, and improving thread resuming/UX (multiple release notes across maintainers) ([sydneyrunkle](https://twitter.com/sydneyrunkle/status/2019085878681886964), [LangChain\_OSS](https://twitter.com/LangChain_OSS/status/2019098930038890988), [masondrxy](https://twitter.com/masondrxy/status/2019245683572887552)). The positioning: keep the main context clean via **context isolation** (subagents) plus **agent specialization** (skills) rather than choosing one ([Vtrivedy10](https://twitter.com/Vtrivedy10/status/2019099166295629985)).
*   **MCP evolves into “apps”**: OpenAI Devs announced **ChatGPT now has full support for MCP Apps**, aligning with an MCP Apps spec derived from the ChatGPT Apps SDK—aimed at making “apps that adhere to the spec” portable into ChatGPT ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2019185727934984384)).
*   **Skills vs MCP: different layers**: A useful conceptual split: MCP tools extend runtime capabilities via external connections, while “skills” encode domain procedure/knowledge locally to shape reasoning (not just data access) ([tuanacelik](https://twitter.com/tuanacelik/status/2019106807437038029)).
*   **Observability becomes evaluation**: LangChain repeatedly emphasized that agent failures are “reasoning failures” across long tool-call traces, so debugging shifts from stack traces to **trace-driven evaluation** and regression testing ([LangChain](https://twitter.com/LangChain/status/2019120438484652178)). Case studies push the same theme: ServiceNow orchestrating specialized agents across **8+ lifecycle stages** with supervisor architectures, plus Monte Carlo launching “hundreds of sub-agents” for parallel investigations ([LangChain](https://twitter.com/LangChain/status/2019106940786286990), [LangChain](https://twitter.com/LangChain/status/2019122040502976896)).

**Models, benchmarks, and systems: METR time horizons, Perplexity DRACO, vLLM on GB200, and open scientific MoEs**

*   **METR “time horizon” jumps for GPT-5.2 (with controversy around runtime reporting)**: METR reported **GPT-5.2 (high reasoning effort)** at a **~6.6 hour 50%-time-horizon** on an expanded software-task suite, with wide CIs (3h20m–17h30m) ([METR\_Evals](https://twitter.com/METR_Evals/status/2019169900317798857)). Discourse fixated on “working time” vs capability: claims that GPT-5.2 took **26× longer than Opus** circulated ([scaling01](https://twitter.com/scaling01/status/2019173770276081726)), then METR-related clarification suggested a **bug counting queue time** and scaffold differences (token budgets, scaffolding choice) skewed the working\_time metric ([vvvincent\_c](https://twitter.com/vvvincent_c/status/2019225157928382496)). Net: the headline capability signal (longer-horizon success) seems real, but wall-clock comparisons were noisy and partially broken.
*   **Perplexity Deep Research + DRACO**: Perplexity rolled out an “Advanced” Deep Research claiming SOTA on external benchmarks and strong performance across decision-heavy verticals; they also released **DRACO** as an **open-source benchmark** with rubrics/methodology and a Hugging Face dataset ([perplexity\_ai](https://twitter.com/perplexity_ai/status/2019126571521761450), [AravSrinivas](https://twitter.com/AravSrinivas/status/2019129261584752909), [perplexity\_ai](https://twitter.com/perplexity_ai/status/2019126646054482294)).
*   **vLLM performance on NVIDIA GB200**: vLLM reported **26.2K prefill TPGS** and **10.1K decode TPGS** for DeepSeek R1/V3, claiming **3–5× throughput vs H200 with half the GPUs**, enabled by NVFP4/FP8 GEMMs, kernel fusion, and weight offloading with async prefetch ([vllm\_project](https://twitter.com/vllm_project/status/2019105689403334825)). vLLM also added “day-0” support for Mistral’s streaming ASR model and introduced a Realtime API endpoint (`/v1/realtime`) ([vllm\_project](https://twitter.com/vllm_project/status/2019106596794814894)).
*   **Open scientific MoE arms race**: Shanghai AI Lab’s **Intern-S1-Pro** was described as a **1T-parameter MoE with 512 experts (22B active)** and architectural details like Fourier Position Encoding and MoE routing variants ([bycloudai](https://twitter.com/bycloudai/status/2019092887938724015)). Separate commentary suggests “very high sparsity” (hundreds of experts) is becoming standard in some ecosystems ([teortaxesTex](https://twitter.com/teortaxesTex/status/2019245564232364231)).
*   **Benchmark refresh: Artificial Analysis**: Artificial Analysis released **Intelligence Index v4.0**, swapping saturated tests for benchmarks emphasizing “economically useful work,” factual reliability, and reasoning; GPT-5.2 leads a tight pack per their reshuffle (summary via DeepLearningAI) ([DeepLearningAI](https://twitter.com/DeepLearningAI/status/2019169092024848512)).

**Multimodal generation: video-with-audio arenas, Grok Imagine’s climb, Kling 3.0, and Qwen image editing**

*   **Video evals get more granular**: Artificial Analysis launched a **Video with Audio Arena** to separately benchmark models that natively generate audio (Veo 3.1, Grok Imagine, Sora 2, Kling) vs video-only capabilities ([ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2019132516897288501)).
*   **Grok Imagine momentum**: Multiple signals point to Grok Imagine’s strong standing in public arenas, including Elon claiming “rank 1” ([elonmusk](https://twitter.com/elonmusk/status/2019164163906629852)) and Arena reporting **Grok-Imagine-Video-720p** taking #1 on image-to-video, “5× cheaper” than Veo 3.1 per their framing ([arena](https://twitter.com/arena/status/2019204821551837665)).
*   **Kling 3.0 shipping iteration**: Kling 3.0 is highlighted for **custom multishot** control (prompt per-shot for up to ~15s) and improved detail/character refs/native audio ([jerrod\_lew](https://twitter.com/jerrod_lew/status/2019099988429795740)).
*   **Qwen image editing tooling**: A Hugging Face app demonstrates **multi-angle “3D lighting control”** for image editing with discrete horizontal/elevation positions via an adapter approach ([prithivMLmods](https://twitter.com/prithivMLmods/status/2019084493210992884)).

**Research notes: reasoning & generalization, continual learning, and robotics/world models**

*   **How LLMs reason (PhD thesis)**: Laura Ruis published her thesis on whether LLMs generalize beyond training data; her stated takeaway: LLMs can generalize in “interesting ways,” suggesting genuine reasoning rather than pure memorization ([LauraRuis](https://twitter.com/LauraRuis/status/2019085266124759509)).
*   **Continual learning as a theme**: Databricks’ **MemAlign** frames **agent memory** as continual-learning machinery for building better LLM judges from human ratings, integrated into Databricks + MLflow ([matei\_zaharia](https://twitter.com/matei_zaharia/status/2019107960006537635)). François Chollet argued AGI is more likely from discovering **meta-rules** enabling systems to adapt their own architecture than from scaling frozen knowledge stores ([fchollet](https://twitter.com/fchollet/status/2019152128779186563)).
*   **Robotics: from sim locomotion to “world action models”**:
    *   **RPL locomotion**: a unified policy for robust perceptive locomotion across terrains, multi-direction, and payload disturbances—trained in sim and validated long-horizon in real world ([Yuanhang\_\_Zhang](https://twitter.com/Yuanhang__Zhang/status/2019092752240181641)).
    *   **DreamZero (NVIDIA)**: Jim Fan describes “World Action Models” built on a world-model backbone enabling **zero-shot open-world prompting** for new verbs/nouns/environments, emphasizing diversity-over-repetition data recipes and cross-embodiment transfer via pixels; claims open-source release and demos ([DrJimFan](https://twitter.com/DrJimFan/status/2019112603637920237), [DrJimFan](https://twitter.com/DrJimFan/status/2019112605315637451)).
*   **World-model “playable” content**: Waypoint-1.1 claims a step to local, real-time world models that are coherent/controllable/playable; model is **Apache 2.0 open-source** per the team ([overworld\_ai](https://twitter.com/overworld_ai/status/2019109415023178208), [lcastricato](https://twitter.com/lcastricato/status/2019110628724547806)).

**Top tweets (by engagement)**

*   **Sam Altman on Anthropic’s Super Bowl ads + OpenAI ads principles + Codex adoption** ([@sama](https://twitter.com/sama/status/2019139174339928189))
*   **Karpathy retrospective: “vibe coding” → “agentic engineering”** ([@karpathy](https://twitter.com/karpathy/status/2019137879310836075))
*   **Gemini usage at scale: 10B tokens/min + 750M MAU** ([OfficialLoganK](https://twitter.com/OfficialLoganK/status/2019166152199459074))
*   **VS Code ships agent sessions + parallel subagents + Claude/Codex support** ([@code](https://twitter.com/code/status/2019120117884309718))
*   **GitHub: Claude + Codex available via Copilot Pro+/Enterprise** ([@github](https://twitter.com/github/status/2019093909981257849))
*   **METR: GPT-5.2 “high” ~6.6h time horizon on software tasks** ([@METR\_Evals](https://twitter.com/METR_Evals/status/2019169900317798857))
*   **Arena: Grok-Imagine-Video takes #1 image-to-video leaderboard** ([@arena](https://twitter.com/arena/status/2019204821551837665))
*   **Sundar: Alphabet FY results; Gemini 3 adoption fastest** ([@sundarpichai](https://twitter.com/sundarpichai/status/2019155348264042934))

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen3-Coder-Next Model Release

*   **[Qwen/Qwen3-Coder-Next · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1quvqs9/qwenqwen3codernext_hugging_face/)** (Activity: 1161): ****Qwen3-Coder-Next** is a language model designed for coding tasks, featuring `3B activated parameters` out of `80B total`, achieving performance comparable to models with `10-20x` more active parameters. It supports `256k` context length, advanced agentic capabilities, and long-horizon reasoning, making it suitable for integration with various IDEs. The architecture includes `48 layers`, gated attention mechanisms, and a mixture of experts. Deployment can be done using **SGLang** or **vLLM**, requiring specific versions for optimal performance. More details are available in the [original article](https://huggingface.co/Qwen/Qwen3-Coder-Next).** One commenter expressed skepticism about the model's performance, questioning if a `3B activated parameter` model can truly match the quality of larger models like Sonnet 4.5, indicating a need for further validation of these claims.
    
    *   danielhanchen discusses the release of dynamic Unsloth GGUFs for Qwen3-Coder-Next, highlighting upcoming releases of Fp8-Dynamic and MXFP4 MoE GGUFs. These formats are designed to optimize model performance and efficiency, particularly in local environments. A guide is also provided for using Claude Code / Codex locally with Qwen3-Coder-Next, which could be beneficial for developers looking to integrate these models into their workflows.
    *   Ok\_Knowledge\_8259 raises skepticism about the claim that a 3 billion activated parameter model can match the quality of larger models like Sonnet 4.5. This comment reflects a common concern in the AI community about the trade-off between model size and performance, suggesting that further empirical validation is needed to substantiate such claims.
    *   Septerium notes that while the original Qwen3 Next performed well in benchmarks, the user experience was lacking. This highlights a critical issue in AI model deployment where high benchmark scores do not always translate to practical usability, indicating a need for improvements in user interface and interaction design.
*   **[Qwen3-Coder-Next is out now!](https://www.reddit.com/r/LocalLLM/comments/1quw0cf/qwen3codernext_is_out_now/)** (Activity: 497): **The image announces the release of **Qwen3-Coder-Next**, an 80 billion parameter Mixture of Experts (MoE) model with 3 billion active parameters, designed for efficient coding tasks and local deployment. It emphasizes the model's capability to handle `256K` context lengths and its fast inference speed, optimized for long-horizon reasoning and complex tool use. The model requires `46GB` of RAM/VRAM for operation, making it suitable for high-performance environments. The image includes a performance graph comparing Qwen3-Coder-Next to other models, showcasing its efficiency and advanced capabilities.** A comment questions the model's performance level, comparing it to 'sonnet 4.5', indicating skepticism or curiosity about its capabilities. Another comment inquires about the feasibility of running the model with `64GB` of RAM, suggesting interest in its hardware requirements. Additionally, there is a remark on the absence of a comparison with 'Devstral 2', hinting at a potential gap in the performance evaluation.
    
    *   A user inquired about the model's performance, questioning if it truly reaches 'sonnet 4.5 level' and whether it includes 'agentic mode', or if the model is simply optimized for specific tests. This suggests a curiosity about the model's real-world applicability versus benchmark performance.
    *   Another user shared a quick performance test using LM Studio, reporting a processing speed of '6 tokens/sec' on a setup with an RTX 4070 and 14700k CPU with 80GB DDR4 3200 RAM. They also noted a comparison with 'llama.cpp' achieving '21.1 tokens/sec', indicating a significant difference in performance metrics between the two setups.
    *   A technical question was raised about the feasibility of running the model with '64GB of RAM' and no VRAM, highlighting concerns about hardware requirements and accessibility for users without high-end GPUs.

### 2\. ACE-Step 1.5 Audio Model Launch

*   **[ACE-Step-1.5 has just been released. It’s an MIT-licensed open source audio generative model with performance close to commercial platforms like Suno](https://www.reddit.com/r/LocalLLaMA/comments/1quzwjf/acestep15_has_just_been_released_its_an/)** (Activity: 744): ****ACE-Step-1.5** is an open-source audio generative model released under the MIT license, designed to rival commercial platforms like **Suno**. It supports **LoRAs**, offers multiple models for various needs, and includes features like cover and repainting. The model is integrated with **Comfy** and available for demonstration on **HuggingFace**. This release marks a significant advancement in open-source audio generation, closely matching the capabilities of leading proprietary solutions.** A notable comment highlights the potential impact of a recently leaked `300TB` dataset, suggesting future models might leverage this data for training. Another comment encourages support for the official model research organization, **ACE Studio**.
    
    *   A user compared the performance of ACE-Step-1.5 with Suno V5 using the same prompt, highlighting that while ACE-Step-1.5 is impressive for an open-source model, it does not yet match the quality of Suno V5. The user specifically noted that the cover feature of ACE-Step-1.5 is currently not very useful, indicating room for improvement in this area. They provided audio links for direct comparison: [Suno V5](https://voca.ro/1Pzw27iI3Sjf) and [ACE 1.5](https://voca.ro/1i5SlHuvue2R).
    *   Another user pointed out that the demo prompts for ACE-Step-1.5 seem overly detailed, yet the model appears to ignore most of the instructions. This suggests potential issues with the model's ability to interpret and execute complex prompts accurately, which could be a limitation in its current implementation.
*   **[The open-source version of Suno is finally here: ACE-Step 1.5](https://www.reddit.com/r/LocalLLaMA/comments/1quxtkj/the_opensource_version_of_suno_is_finally_here/)** (Activity: 456): ****ACE-Step 1.5** is an open-source music generation model that outperforms **Suno** on standard evaluation metrics. It can generate a complete song in approximately `2 seconds` on an **A100 GPU** and operates locally on a typical PC with around `4GB VRAM`, achieving under `10 seconds` on an **RTX 3090**. The model supports **LoRA** for training custom styles with minimal data and is released under the **MIT license**, allowing free commercial use. The dataset includes fully authorized and synthetic data. The [GitHub repository](https://github.com/ace-step/ACE-Step-1.5) provides access to weights, training code, LoRA code, and a paper.** Commenters noted the model's significant improvements but criticized the presentation of evaluation graphs as lacking clarity. There is also a discussion on its instruction following and coherency, which are seen as inferior to **Suno v3**, though the model is praised for its creativity and potential as a foundational tool. Speculation about a forthcoming version 2 is also mentioned.
    
    *   TheRealMasonMac highlights that ACE-Step 1.5 shows a significant improvement over its predecessor, though it still lags behind Suno v3 in terms of instruction following and coherency. However, the audio quality is noted to be good, and the model is described as creative and different from Suno, suggesting it could serve as a solid foundation for future development.
    *   Different\_Fix\_2217 provides examples of audio generated by ACE-Step 1.5, indicating that the model performs well with long, detailed prompts and can handle negative prompts. This suggests a level of flexibility and adaptability in the model's design, which could be beneficial for users looking to experiment with different input styles.

### 3\. Voxtral-Mini-4B Speech-Transcription Model

*   **[mistralai/Voxtral-Mini-4B-Realtime-2602 · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1qvrib9/mistralaivoxtralmini4brealtime2602_hugging_face/)** (Activity: 266): **The **Voxtral Mini 4B Realtime 2602** is a cutting-edge, open-source, multilingual speech-transcription model that achieves near offline accuracy with a delay of `<500ms`. It supports `13 languages` and is built with a **natively streaming architecture** and a custom causal audio encoder, allowing configurable transcription delays from `240ms to 2.4s`. At a `480ms` delay, it matches the performance of leading offline models and realtime APIs. The model is optimized for **on-device deployment** with minimal hardware requirements, achieving a throughput of over `12.5 tokens/second`.** Commenters appreciate the open-source contribution, especially the inclusion of the realtime processing part to vllm. However, there is disappointment over the lack of turn detection features, which are present in other models like Moshi's STT, necessitating additional methods for turn detection.
    
    *   The Voxtral Realtime model is designed for live transcription with configurable latency down to sub-200ms, which is crucial for applications like voice agents and real-time processing. However, it lacks speaker diarization, which is available in the batch transcription model, Voxtral Mini Transcribe V2. This feature is particularly useful for distinguishing between different speakers in a conversation, but its absence in the open model may limit its utility for some users.
    *   Mistral has contributed to the open-source community by integrating the realtime processing component into vLLM, enhancing the infrastructure for live transcription applications. Despite this, the model does not include turn detection, a feature present in Moshi's STT, which requires users to implement alternative methods such as punctuation, timing, or third-party text-based solutions for turn detection.
    *   Context biasing, a feature that allows the model to prioritize certain words or phrases based on context, is currently only supported through Mistral's direct API. This feature is not available in the vLLM implementation for either the new Voxtral-Mini-4B-Realtime-2602 model or the previous 3B model, limiting its accessibility for developers using the open-source version.
*   **[Some hard lessons learned building a private H100 cluster (Why PCIe servers failed us for training)](https://www.reddit.com/r/LocalLLaMA/comments/1qvrc59/some_hard_lessons_learned_building_a_private_h100/)** (Activity: 530): **The post discusses the challenges faced when building a private H100 cluster for training large models (70B+ parameters) and highlights why PCIe servers were inadequate. The author notes that the lack of NVLink severely limits data transfer rates during All-Reduce operations, with PCIe capping at `~128 GB/s` compared to NVLink's `~900 GB/s`, leading to GPU idling. Additionally, storage checkpoints for large models can reach `~2.5TB`, requiring rapid disk writes to prevent GPU stalls, which standard NFS filers cannot handle, necessitating parallel filesystems or local NVMe RAID. The author also mentions the complexities of using RoCEv2 over Ethernet instead of InfiniBand, which requires careful monitoring of pause frames to avoid cluster stalls.** Commenters emphasize the importance of fast NVMe over Fabrics Parallel FS for training builds to prevent GPU idling and suggest that InfiniBand should be mandatory for compute, while RoCEv2 is preferable for storage. The surprise at storage write speed issues is also noted.
    
    *   A storage engineer emphasizes the importance of a fast NVMe over Fabrics Parallel File System (FS) as a critical requirement for a training build, highlighting that without adequate storage to feed GPUs, there will be significant idle time. They also recommend using Infiniband for compute, noting that RoCEv2 is often preferable for storage. This comment underscores the often-overlooked aspect of shared storage in training workflows.
    *   A user expresses surprise at the storage write speed being a bottleneck, indicating that this is an unexpected issue for many. This highlights a common misconception in building training clusters, where the focus is often on compute power rather than the supporting infrastructure like storage, which can become a critical pinch point.
    *   Another user proposes a theoretical solution involving milli-second distributed RAM with automatic hardware mapping of page faults, suggesting that such an innovation could simplify cluster management significantly. This comment reflects on the broader issue of addressing the right problems in system architecture.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Anthropic vs OpenAI Ad-Free Debate

*   **[Sam’s response to Anthropic remaining ad-free](https://www.reddit.com/r/singularity/comments/1qvzvxu/sams_response_to_anthropic_remaining_adfree/)** (Activity: 1536): ****Sam Altman** responded to **Anthropic's** decision to remain ad-free, highlighting a competitive dynamic in the AI space. The discussion references a **Claude Ad Campaign** and suggests that more Texans use **ChatGPT** for free than the total number of **Claude** users in the US, indicating a significant user base disparity. This reflects ongoing competition between AI companies, reminiscent of historical tech rivalries like **Microsoft** and **Apple**.** Commenters draw parallels between the current AI competition and past tech rivalries, suggesting a public display of competition while potentially collaborating privately.
    
    *   BuildwithVignesh highlights the effectiveness of the **Claude Ad Campaign**, suggesting that it has successfully captured attention despite the competitive landscape. The campaign's impact is implied to be significant, although specific metrics or outcomes are not detailed in the comment.
    *   LimiDrain provides a comparative analysis, stating that _'more Texans use ChatGPT for free than total people use Claude in the US'_. This suggests a significant disparity in user base size between ChatGPT and Claude, indicating ChatGPT's broader reach and adoption in the market.
    *   Eyelbee references a past statement by Sam, noting that he found AI ads disturbing a year ago. This comment suggests a potential inconsistency or evolution in Sam's stance on AI advertising, especially in light of Anthropic's decision to remain ad-free, which could be seen as a critique of ad-based models.
*   **[Anthropic declared a plan for Claude to remain ad-free](https://www.reddit.com/r/singularity/comments/1qvnvid/anthropic_declared_a_plan_for_claude_to_remain/)** (Activity: 1555): ****Anthropic** has announced a commitment to keep its AI assistant, **Claude**, ad-free, emphasizing its role as a tool for work and deep thinking. This decision is highlighted in a blog post titled 'Claude is a space to think,' which underscores the company's dedication to maintaining a distraction-free environment for users. The announcement contrasts with other AI models that may incorporate ads, positioning Claude as a premium, focused tool for productivity.** Commenters note that while Claude is ad-free, its free tier is highly limited, making it less accessible without payment. This has sparked debate about the practicality of its ad-free claim, as users may still need to pay for effective use, contrasting with other AI models that offer more generous free usage.
    
    *   ostroia points out that while Claude is ad-free, it has strict limitations on its free tier, making it mostly unusable for anything beyond quick questions. This raises questions about the practicality of boasting about being ad-free when the product requires payment to be truly usable.
    *   seraphius highlights the potential negative impact of ads on platforms, noting that ads can shift the focus of executives towards 'advertiser friendliness,' which can weaken the platform's integrity. This is compared to the situation on YouTube, where ad-driven decisions have significantly influenced content and platform policies.
*   **[Sam Altman's response to the Anthropic Super Bowl ad. He said, "More Texans use ChatGPT for free than total people use Claude in the US"](https://www.reddit.com/r/OpenAI/comments/1qvztlk/sam_altmans_response_to_the_anthropic_super_bowl/)** (Activity: 1394): **The image captures **Sam Altman's** critique of **Anthropic's** Super Bowl ad, where he claims that more Texans use **ChatGPT** for free than the total number of people using **Claude** in the US. Altman accuses Anthropic of being dishonest in their advertising and contrasts OpenAI's commitment to free access with Anthropic's approach, which he describes as controlling and expensive. He also expresses confidence in OpenAI's **Codex** and emphasizes the importance of making AI accessible to developers.** Commenters debate the hypocrisy of Altman's statement, noting that OpenAI also imposes restrictions on AI usage, as seen with their 'nanny bot' in version 5.2. There is also skepticism about Anthropic's alleged blocking of OpenAI from using Claude for coding.
    
    *   AuspiciousApple highlights the competitive tension between OpenAI and Anthropic, noting that Sam Altman's detailed response to Anthropic's ad suggests a deeper concern about competition. This reflects the broader industry dynamics where major AI companies are closely monitoring each other's moves, indicating a highly competitive landscape.
    *   owlbehome criticizes OpenAI's approach to AI control, pointing out the perceived hypocrisy in Sam Altman's statement about Anthropic's control over AI. The comment references OpenAI's own restrictions in version 5.2, suggesting that both companies impose significant limitations on AI usage, which is a common critique in the AI community regarding the balance between safety and usability.
    *   RentedTuxedo discusses the importance of competition in the AI industry, arguing that more players in the market benefit consumers. The comment criticizes the tribalism among users who show strong allegiance to specific companies, emphasizing that consumer choice should be based on performance rather than brand loyalty. This reflects a broader sentiment that healthy competition drives innovation and better products.
*   **[Anthropic mocks OpenAI's ChatGPT ad plans and pledges ad-free Claude](https://www.reddit.com/r/OpenAI/comments/1qvunf2/anthropic_mocks_openais_chatgpt_ad_plans_and/)** (Activity: 813): ****Anthropic** has announced that its AI model, **Claude**, will remain ad-free, contrasting with **OpenAI's** plans to introduce ads in **ChatGPT**. This decision was highlighted in a satirical ad mocking OpenAI's approach, emphasizing Anthropic's commitment to an ad-free experience. The move is seen as a strategic differentiation in the competitive AI landscape, where monetization strategies are evolving. [The Verge](https://www.theverge.com/ai-artificial-intelligence/873686/anthropic-claude-ai-ad-free-super-bowl-advert-chatgpt) provides further details on this development.** Commenters express skepticism about Anthropic's ad-free pledge, suggesting financial pressures may eventually lead to ads, similar to trends in streaming services.
    
*   **[Anthropic laughs at OpenAI](https://www.reddit.com/r/OpenAI/comments/1qvrn4o/anthropic_laughs_at_openai/)** (Activity: 485): **The Reddit post humorously highlights a competitive jab from **Anthropic** towards **OpenAI**, suggesting a rivalry between the two companies in the large language model (LLM) space. The post does not provide specific technical details or benchmarks but implies a competitive atmosphere in the AI industry, reminiscent of past corporate rivalries such as **Samsung** vs. **Apple**. The external link is unrelated to the main post, focusing instead on fitness advice for achieving a 'six-pack.'** The comments reflect a mix of amusement and skepticism, with users drawing parallels to past corporate rivalries and expressing hope that the situation does not backfire on Anthropic, similar to how Samsung's past marketing strategies did.
    
    *   ClankerCore highlights the technical execution of the AI in the ad, noting the use of a human model with AI overlays. The comment emphasizes the subtle adjustments made to the AI's behavior, particularly in eye movement, which adds a layer of realism to the portrayal. This suggests a sophisticated blend of human and AI elements to enhance the advertisement's impact.
    *   The comment by ClankerCore also critiques the performance of Anthropic's Claude, pointing out its inefficiency in handling simple arithmetic operations like '2+2'. The user mentions that such operations consume a significant portion of the token limit for plus users, indicating potential limitations in Claude's design or token management system.
    *   ClankerCore's analysis suggests that while the marketing execution is impressive, the underlying AI technology, specifically Claude, may not be as efficient or user-friendly for non-coding tasks. This highlights a potential gap between the marketing portrayal and the actual performance of the AI product.
*   **[Sam Altman response for Anthropic being ad-free](https://www.reddit.com/r/ClaudeAI/comments/1qw0qj7/sam_altman_response_for_anthropic_being_adfree/)** (Activity: 1556): ****Sam Altman** responded to a tweet about **Anthropic** being ad-free, which seems to be a reaction to a recent [Claude ad campaign](https://x.com/i/status/2019071113741906403). The tweet and subsequent comments suggest a competitive tension between AI companies, with Altman emphasizing that they are not 'stupid' in their strategic decisions. This exchange highlights the ongoing rivalry in the AI space, particularly between **OpenAI** and **Anthropic**.** Commenters noted the competitive nature of the AI industry, comparing it to the rivalry between brands like Coke and Pepsi. Some expressed a desire for more lighthearted exchanges between companies, while others critiqued Altman's defensive tone.
    
*   **[Official: Anthropic declared a plan for Claude to remain ad-free](https://www.reddit.com/r/ClaudeAI/comments/1qvo0ps/official_anthropic_declared_a_plan_for_claude_to/)** (Activity: 2916): ****Anthropic** has officially announced that their AI, **Claude**, will remain ad-free, as stated in a tweet. This decision aligns with their vision of Claude being a 'space to think' and a helpful assistant for work and deep thinking, suggesting that advertising would conflict with these goals. The announcement is part of a broader strategy to maintain the integrity and focus of their AI services, as detailed in their [full blog post](https://www.anthropic.com/news/claude-is-a-space-to-think).** Some users express skepticism about the long-term commitment to this ad-free promise, suggesting that corporate decisions can change over time. Others humorously reference **Sam Altman** with a play on words, indicating a mix of hope and doubt about the future of this policy.
    
*   **[Anthropic is airing this ads mocking ChatGPT ads during the Super Bowl](https://www.reddit.com/r/ChatGPT/comments/1qvp9s7/anthropic_is_airing_this_ads_mocking_chatgpt_ads/)** (Activity: 1599): ****Anthropic** is reportedly airing ads during the Super Bowl that mock **ChatGPT** ads, although these ads are not yet promoting their own AI model, **Claude**. This strategy is reminiscent of **Samsung's** past marketing tactics where they mocked **Apple** for not including a charger, only to follow suit later. The ads are seen as a strategic move ahead of Anthropic's potential IPO and business pivot.** Commenters suggest that the ad campaign might backfire or become outdated ('aged like milk') once Anthropic undergoes its IPO and potentially shifts its business strategy.
    

### 2\. Kling 3.0 and Omni 3.0 Launch

*   **[Kling 3.0 example from the official blog post](https://www.reddit.com/r/singularity/comments/1qw1mve/kling_30_example_from_the_official_blog_post/)** (Activity: 679): ****Kling 3.0** showcases advanced video synthesis capabilities, notably maintaining subject consistency across different camera angles, which is a significant technical achievement. However, the audio quality is notably poor, described as sounding like it was recorded with a 'sheet of aluminum covering the microphone,' a common issue in video models. The visual quality, particularly in the final scene, is praised for its artistic merit, reminiscent of 'late 90s Asian art house movies' with its color grading and transitions.** Commenters are impressed by the visual consistency and artistic quality of Kling 3.0, though they criticize the audio quality. The ability to maintain subject consistency across angles is highlighted as a technical breakthrough.
    
    *   The ability of Kling 3.0 to switch between different camera angles while maintaining subject consistency is a significant technical achievement. This feature is particularly challenging in video models, as it requires advanced understanding of spatial and temporal coherence to ensure that the subject remains believable across different perspectives.
    *   A notable issue with Kling 3.0 is the audio quality, which some users describe as sounding muffled, akin to being recorded with a barrier over the microphone. This is a common problem in video models, indicating that while visual realism is advancing, audio processing still lags behind and requires further development to match the visual fidelity.
    *   The visual quality of Kling 3.0 has been praised for its artistic merit, particularly in scenes that evoke a nostalgic, dream-like feel through color grading and highlight transitions. This suggests that the model is not only technically proficient but also capable of producing aesthetically pleasing outputs that resonate on an emotional level, similar to late 90s art house films.
*   **[Kling 3 is insane - Way of Kings Trailer](https://www.reddit.com/r/aivideo/comments/1qvupz9/kling_3_is_insane_way_of_kings_trailer/)** (Activity: 1464): **The post discusses the creation of a trailer for 'Way of Kings' using **Kling 3.0**, an AI tool. The creator, known as PJ Ace, shared a breakdown of the process on their X account. The trailer features a scene where a character's appearance changes dramatically upon being sliced with a blade, showcasing the AI's capability to render complex visual effects. Although some elements were missing, the AI's performance was noted as impressive for its ability to recognize and replicate scenes accurately.** Commenters expressed amazement at the AI's ability to render recognizable scenes, with one noting the impressive transformation effects despite some missing elements. The discussion highlights the potential of AI in creative visual media.
    
*   **[Kling 3 is insane - Way of Kings Trailer](https://www.reddit.com/r/aivideo/comments/1qvupz9/kling_3_is_insane_way_of_kings_trailer/)** (Activity: 1470): **The post discusses the creation of a trailer for 'Way of Kings' using **Kling 3.0**, an AI tool. The creator, known as PJ Ace, who is also recognized for work on a Zelda trailer, shared a breakdown of the process on their X account. The trailer features a scene where a character's appearance changes dramatically upon being sliced with a blade, showcasing the AI's capability to render complex visual transformations. Although some elements were missing, the AI's performance was noted as impressive by viewers.** Commenters expressed amazement at the AI's ability to create recognizable scenes and perform complex visual effects, despite some missing elements. The discussion highlights the potential of AI in creative media production.
    
*   **[Been waiting Kling 3 for weeks. Today you can finally see why it's been worth the wait.](https://www.reddit.com/r/VEO3/comments/1qwbpf5/been_waiting_kling_3_for_weeks_today_you_can/)** (Activity: 19): ****Kling 3.0** introduces significant updates with features like `3-15s multi-shot sequences`, `native audio with multiple characters`, and the ability to `upload/record video characters as reference` ensuring consistent voices. This release aims to enhance the user experience in creating AI-driven video content, offering more dynamic and realistic outputs. Users can explore these features on the [Higgsfield AI platform](https://higgsfield.ai/kling-3).** The community response highlights enthusiasm for the realistic effects, such as the 'shaky cam', which adds to the visual authenticity of the generated content. There is also a call to action for users to engage with the community by sharing their AI videos and participating in discussions on Discord.
    
    *   A user expressed frustration over the lack of clear information distinguishing the differences between the 'Omni' and '3' models, highlighting a common issue in tech marketing where specifications and improvements are not clearly communicated. This can lead to confusion among users trying to understand the value proposition of new releases.
*   **[KLING 3.0 is here: testing extensively on Higgsfield (unlimited access) – full observation with best use cases on AI video generation model](https://www.reddit.com/r/VEO3/comments/1qw0cu2/kling_30_is_here_testing_extensively_on/)** (Activity: 12): ****KLING 3.0** has been released, focusing on extensive testing on the **Higgsfield** platform, which offers unlimited access for AI video generation. The update highlights full observation capabilities and optimal use cases for the model, potentially enhancing video generation tasks. However, the post lacks detailed technical specifications or benchmarks of the model's performance improvements over previous versions.** The comments reflect skepticism and frustration, with users perceiving the post as an advertisement for Higgsfield rather than a substantive technical update. There is also confusion about the relevance of the post to **VEO3**, indicating a possible disconnect between the announcement and the community's interests.
    

### 3\. GPT 5.2 and ARC-AGI Benchmarks

*   **[OpenAI seems to have subjected GPT 5.2 to some pretty crazy nerfing.](https://www.reddit.com/r/singularity/comments/1qv2qt7/openai_seems_to_have_subjected_gpt_52_to_some/)** (Activity: 1100): **The image presents a graph depicting the performance of "GPT-5-Thinking" on IQ tests over time, with a notable decline in early 2026. This suggests that OpenAI may have reduced the capabilities of GPT-5.2, possibly as part of a strategic adjustment or due to resource constraints during training. The graph annotations indicate transitions between different versions of the AI, hinting at changes in its capabilities or architecture. The comments suggest that users have noticed a decrease in performance, possibly due to resource allocation for training or in anticipation of new releases like GPT 5.3 or DeepSeek v4.** Commenters speculate that the perceived decline in performance might be due to resource limitations during training or strategic adjustments by OpenAI. Some users express dissatisfaction with the current performance compared to competitors like Gemini, while others anticipate improvements in future versions.
    
    *   nivvis highlights a common issue during model training phases, where companies like OpenAI and Anthropic face GPU/TPU limitations. This necessitates reallocating resources from inference to training, which can temporarily degrade performance. This is not unique to OpenAI; Anthropic's Opus has also been affected, likely in preparation for upcoming releases like DeepSeek v4.
    *   xirzon suggests that significant performance drops in technical services, such as those experienced with GPT 5.2, are often due to partial or total service outages. This implies that the observed 'nerfing' might not be a deliberate downgrade but rather a temporary issue related to service availability.
    *   ThadeousCheeks notes a similar decline in Google's performance, particularly in tasks like cleaning up slide decks. This suggests a broader trend of performance issues across major AI services, possibly linked to resource reallocation or other operational challenges.
*   **[New SOTA achieved on ARC-AGI](https://www.reddit.com/r/singularity/comments/1quzgg5/new_sota_achieved_on_arcagi/)** (Activity: 622): **The image illustrates a new state-of-the-art (SOTA) achievement on the ARC-AGI benchmark by a model based on **GPT-5.2**. This model, developed by Johan Land, achieved a score of `72.9%` with a cost of `$38.9` per task, marking a significant improvement from the previous score of `54.2%`. The ARC-AGI benchmark, which was introduced less than a year ago, has seen rapid advancements, with the initial top score being only `4%`. The model employs a bespoke refinement approach, integrating multiple methodologies to enhance performance.** Commenters note the rapid progress in ARC-AGI benchmark scores, expressing surprise at reaching over `70%` so quickly, though some highlight the high cost per task as a concern. There is anticipation for the next version, ARC-AGI-3, expected to launch in March 2026, as ARC-AGI-2 approaches saturation.
    
    *   The ARC-AGI benchmark, which was introduced less than a year ago, has seen rapid progress with the latest state-of-the-art (SOTA) result reaching 72.9%. This is a significant improvement from the initial release score of 4% and the previous best of 54.2%. The benchmark's quick evolution highlights the fast-paced advancements in AI capabilities.
    *   The cost of achieving high performance on the ARC-AGI benchmark is a point of discussion, with current solutions costing around $40 per task. There is interest in reducing this cost to $1 per task while maintaining or improving the performance to over 90%, which would represent a significant efficiency improvement.
    *   The ARC-AGI benchmark uses an exponential scale on its x-axis, indicating that moving towards the top right of the graph typically involves increasing computational resources to achieve better results. The ideal position is the top left, which would signify high performance with minimal compute, emphasizing efficiency over brute force.
*   **[Does anyone else have the same experience with 5.2?](https://www.reddit.com/r/OpenAI/comments/1qvp8eg/does_anyone_else_have_the_same_experience_with_52/)** (Activity: 696): **The image is a meme that humorously critiques the handling of custom instructions by GPT version 5.2, particularly in its 'Thinking' mode. The meme suggests that the model may not effectively process or retain user-provided custom instructions, as depicted by the character's surprise when the instructions catch fire. This reflects user frustrations with the model's limitations in handling specific tasks or instructions, possibly due to efforts to prevent jailbreaks or misuse.** Commenters express dissatisfaction with GPT 5.2's handling of custom instructions and memory, noting that explicit directions are often required for the model to access certain information, which they find cumbersome.
    
    *   NoWheel9556 highlights that the update to version 5.2 seems to have been aimed at preventing jailbreaks, which may have inadvertently affected other functionalities. This suggests a trade-off between security measures and user experience, potentially impacting how the model processes certain tasks.
    *   FilthyCasualTrader points out a specific usability issue in version 5.2, where users must explicitly direct the model to look at certain data, such as 'attachments in Projects folder or entries in Saved Memories'. This indicates a regression in intuitive data handling, requiring more explicit instructions from users.
    *   MangoBingshuu mentions a problem with the Gemini pro model, where it tends to ignore instructions after a few prompts. This suggests a potential issue with instruction retention or prompt management, which could affect the model's reliability in maintaining context over extended interactions.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.1

**1\. Cutting-Edge Models, Coders, and Routers**

*   **Qwen3 Coder Next Codes Circles Around GPT Giants**: **Qwen3-Coder-Next** emerged as a standout local coding model, with users on **Unsloth**, **Hugging Face**, and **LM Studio** reporting it outperforming **GPT‑OSS 120B** while running efficiently from **GGUF** quantizations like **MXFP4\_MOE** and even fixing long‑standing `glm flash` bugs; Unsloth hosts the main GGUF release at [unsloth/Qwen3-Coder-Next-GGUF](https://huggingface.co/unsloth/Qwen3-Coder-Next-GGUF), and a Reddit thread documents an update that _"now produces much better code"_ for the refreshed GGUFs at [this post](https://www.reddit.com/r/unsloth/comments/1qvt6qy/qwen3codernext_ggufs_updated_now_produces_much/).
    
    *   Engineers are pushing **VRAM optimization** hard by selectively offloading **FFN layers** to CPU via `-ot` flags (and asking for a _"significance chart"_ to rank layers by importance) while others confirm smooth vLLM inference on an **RTX 5080**, making Qwen3-Coder-Next a practical workhorse across Unsloth, Hugging Face, and LM Studio setups.
*   **Max Router Mines Millions of Votes to Pick Your Model**: LMArena announced **Max**, an intelligent router trained on **5+ million** community votes that automatically dispatches each prompt to the _"most capable model"_ given latency and cost, detailed in the blog post ["Introducing Max"](https://arena.ai/blog/introducing-max/) and an explainer video on [YouTube](https://www.youtube.com/watch?v=Xy1K4qn8xtc).
    
    *   Users quickly started poking at Max’s behavior, noticing it sometimes claims **Claude Sonnet 3.5** is backing responses while actually routing to **Grok 4**, prompting jokes like _"Max = sonnet 5 in disguise"_ and raising questions about router transparency and evaluation methodology.
*   **Kimi K2.5 Sneaks into Cline and VPS Racks**: **Kimi k2.5** went live on the developer‑oriented IDE agent **Cline**, announced in a [Cline tweet](https://x.com/cline/status/2018752216950321483) and a Discord note promising a **limited free access window** for experimentation at [cline.bot](https://cline.bot/).
    
    *   Over on the Moonshot and Unsloth servers, engineers confirmed **Kimi K2.5** can run as **Kimi for Coding** and discussed running it from VPS/datacenter IPs after **Kimi itself** green‑lit such use in a shared transcript, positioning it as a more permissive alternative to **Claude** for remote coding agents and OpenClaw‑style setups.

**2\. New Benchmarks, Datasets, and Kernel Contests**

*   **Judgment Day Benchmark Puts AI Ethics on Trial**: AIM Intelligence and Korea AISI, with collaborators including **Google DeepMind**, **Microsoft**, and several universities, announced the **Judgment Day benchmark** and **Judgment Day Challenge** for stress‑testing AI decision‑making, with details and submission portal at [aim-intelligence.com/judgement-day](https://aim-intelligence.com/kr/judgement-day).
    
    *   They are soliciting adversarial _attack scenarios_ around decisions AI must/never make, paying **$50 per accepted red‑team submission** and promising co‑authorship in the benchmark paper, with a **Feb 10, 2026** scenario deadline and a **$10,000** prize pool challenge kicking off **March 21, 2026** for multimodal (text/audio/vision) jailbreaks.
*   **Platinum-CoTan Spins Triple-Stack Reasoning Data**: A Hugging Face user released **Platinum-CoTan**, a **deep reasoning dataset** generated through a triple‑stack pipeline **Phi‑4 → DeepSeek‑R1 (70B) → Qwen‑2.5**, focusing on **Systems**, **FinTech**, and **Cloud** domains and hosted at [BlackSnowDot/Platinum-CoTan](https://huggingface.co/datasets/BlackSnowDot/Platinum-CoTan).
    
    *   The community pitched it as _"high‑value technical reasoning"_ training material, complementary to other open datasets, for models that need long‑horizon, domain‑specific chain‑of‑thought in enterprise‑y systems and finance scenarios rather than generic math puzzles.
*   **FlashInfer Contest Drops Full Kernel Workloads**: The **FlashInfer AI Kernel Generation Contest** dataset landed on Hugging Face at [flashinfer-ai/mlsys26-contest](https://huggingface.co/datasets/flashinfer-ai/mlsys26-contest), bundling complete kernel definitions and workloads for ML systems researchers to benchmark AI‑generated kernels.
    
    *   GPU MODE’s **#flashinfer** channel confirmed the repo now includes all kernels and target shapes so contestants can train/eval model‑written CUDA/Triton code offline, while Modal credits and team‑formation logistics dominated meta‑discussion about running those workloads at scale.

**3\. Training & Inference Tooling: GPUs, Quantization, and Caches**

*   **GPU MODE Dives Deep on Triton, TileIR, and AMD Gaps**: The **GPU MODE** community announced a **Triton community meetup** on **March 4, 2026** (16:00–17:00 PST) via a calendar invite, featuring **NVIDIA’s Feiwen Zhu** on **Triton → TileIR** lowering and **Rupanshu Soi** presenting _"Optimal Software Pipelining and Warp Specialization for Tensor Core GPUs"_, with details in the event link shared in `#triton-gluon`.
    
    *   Parallel threads dissected performance gaps where **Helion autotuned kernels** only hit **0.66×** baseline speedup on AMD GPUs versus **torch inductor’s 0.92×** for **M=N=K=8192**, and advised diffing the emitted **Triton kernels** to see what the AMD team tweaked for their own backend.
*   **MagCache and torchao Push Cheaper, Faster Training**: Hugging Face quietly shipped **MagCache** as a new caching method for **Diffusers**, documented in the optimization docs at ["MagCache for Diffusers"](https://huggingface.co/docs/diffusers/main/en/optimization/cache#magcache) and implemented in [diffusers PR #12744](https://github.com/huggingface/diffusers/pull/12744).
    
    *   At the same time, GPU MODE highlighted that **Andrej Karpathy** wired **torchao** into his **nanochat** project for **FP8 training**, via a commit ([6079f78...](https://github.com/karpathy/nanochat/commit/6079f78fc383a874cc031c92630c924397384c6e)), signalling that lightweight FP8 + activation‑optimized caching are moving from papers into widely‑copied reference code.
*   **Unsloth, DGX Spark, and Multi-GPU Fine-Tuning Hacks**: Unsloth users wrestled with **DGX Spark** fine‑tuning, where an SFT run on **Nemotron‑3 30B** using the **Nanbeige/ToolMind** dataset from the Unsloth docs at ["fine-tuning LLMs with Nvidia DGX Spark"](https://unsloth.ai/docs/basics/fine-tuning-llms-with-nvidia-dgx-spark-and-unsloth) was running unexpectedly slow until others recommended switching to the **official DGX container** and checking GRPO/vLLM compatibility.
    
    *   Elsewhere in Unsloth and Hugging Face channels, practitioners compared **Accelerate** tensor parallelism for multi‑GPU fine‑tuning, discussed quantizing post‑bf16‑finetune models with domain‑specific **imatrix** statistics, and noted that community quantizers like _mradermacher_ often publish GGUFs automatically once a fine‑tuned model gains traction on Hugging Face.

**4\. Product, Pricing, and Ecosystem Turbulence**

*   **Perplexity Deep Research Nerfs Spark EU Legal Talk**: Perplexity’s community reacted furiously to **Perplexity Pro** cutting **Deep Research** limits from **600/day** to **20/month** (a **99.89%** reduction), with users in `#general` discussing cancellations, chargebacks, and migrations to **Gemini** and **Claude** despite an announcement that upgraded Deep Research to run on **Opus 4.5** for **Max/Pro** users as described in the official note in `#announcements`.
    
    *   Several EU users argued this silent downgrade might violate consumer transparency norms, citing that there is _"no legal contract in the EU where the text practically forces the user to accept that the service is not transparent"_, and began exploring open‑source or alternative stacks like **Kimi**, **Z.Ai**, and **Qwen** to recreate the old "medium‑effort" research workflow.
*   **Sonnet 5’s Schrodinger Launch: Delayed and Half-Leaked**: Across **Cursor**, **OpenRouter**, and LMArena servers, engineers tracked the delayed launch of **Claude Sonnet 5**, with a widely‑shared X link suggesting a roughly **one‑week** slip ([rumored status](https://x.com/i/status/2019033206868361227)) while OpenRouter’s logs briefly exposed **403 EXISTS** errors for `claude-sonnet-5` and `claude-opus-4-6`, implying Anthropic briefly registered but withheld the models.
    
    *   The outage‑driven hiccup also impacted **Claude’s API** and Cursor users, some of whom had to roll back to **Cursor 2.4.27** due to a broken SSH binary in **2.4.28**, highlighting how tightly editor workflows and router services now depend on timely, stable frontier‑model releases.
*   **Cloud AI Stack Shake-Up: Kimi, Gemini, GPT, and Claude**: The multi‑server chatter paints a volatile **model‑as‑a‑service** landscape: **Gemini 3** earns praise on OpenAI’s server for _"depth and style"_ in creative writing, **Kimi K2.5** is lauded on Nous and Moonshot for beating **Gemini 3 Pro** in coding, and **Claude** gets meme‑boosted via Super Bowl ads promising _no ads in Claude_ in [Anthropic’s spot](https://x.com/claudeai/status/2019071118036942999).
    
    *   At the same time, **Sam Altman** defended ad funding in ChatGPT in a reply captured in [his tweet](https://x.com/sama/status/2019139174339928189), OpenAI’s own community ranted about GPT 5.2 regressions and **Sora 2** glitches, and multiple communities noted that users are increasingly stitching together **open‑weight** models (DeepSeek/Kimi/Qwen) plus tools like **OpenClaw** rather than betting on a single closed provider.

**5\. Security, Red-Teaming, and Autonomous Agents**

*   **Judgment Day and BASI Push Serious Red-Teaming**: The **BASI Jailbreaking** server amplified the **Judgment Day benchmark** call for adversarial decision‑making scenarios as a formal red‑teaming venue, with prizes and co‑authorship for clever multimodal attacks described at [the official challenge page](https://aim-intelligence.com/kr/judgement-day).
    
    *   Concurrently, BASI’s **#jailbreaking** and **#redteaming** channels traded **Gemini** and **Claude Code** jailbreaks like **ENI Lime** (mirrored at [ijailbreakllms.vercel.app](https://ijailbreakllms.vercel.app/) and a [Reddit thread](https://www.reddit.com/r/ClaudeAIJailbreak/comments/1qqsgvu/eni_hooks_a_claude_code_jailbreak/)), debated **Anthropic’s activation capping** as effectively _"lobotomising"_ harmful behaviors, and discussed Windows rootkit attack surfaces via COM elevation and in‑memory execution.
*   **OpenClaw, Cornerstone Agent, and Real-World Attack Surfaces**: Multiple discords (LM Studio, Cursor, Latent Space SF) scrutinized **OpenClaw**—an agent orchestrator at [ivan-danilov/OpenClaw](https://github.com/ivan-danilov/OpenClaw)—for prompt‑injection and tool‑overreach risk, prompting some to strip unnecessary tools and terminals and others to draft **enterprise‑grade security models** in an RFC shared by Peter Steinberger at [this OpenClaw security tweet](https://xcancel.com/steipete/status/2018920690574037052).
    
    *   Hugging Face’s **#i-made-this** upped the stakes by showcasing _cornerstone-autonomous-agent_, an **autonomous AI agent** published on npm at [cornerstone-autonomous-agent](https://www.npmjs.com/package/cornerstone-autonomous-agent) that can open **real bank accounts** via an MCP backend hosted on Replit and a Clawhub skill, triggering a wave of quiet _"this is how you get regulators"_ energy among more security‑minded engineers.
*   **Crypto-Grade Proofs Meet LLMs While Breaches Leak Keys**: On Yannick Kilcher’s **#paper-discussion**, a researcher described a **zero‑knowledge proof of matrix–matrix multiplication** over 64‑bit integers with only **2× overhead** relative to plain compute, and noted GPUs can run it _"nearly as fast as float64"_; they are now wiring this ZK scheme into the **feedforward** path of a custom LLM, with work‑in‑progress code referenced as a future _"deep learning theory sneak peek"_.
    
    *   In stark contrast, Yannick’s **#ml-news** tracked the **Moltbook database breach** where [Techzine reports](https://www.techzine.eu/news/security/138458/moltbook-database-exposes-35000-emails-and-1-5-million-api-keys/) that **35,000 emails** and **1.5 million API keys** were exposed, reinforcing why several communities refuse to trust SaaS tools with credentials and why ZK verification and tighter data‑handling guarantees are becoming more than academic curiosities.

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Judgment Day Benchmark Announced**: AIM Intelligence and Korea AISI, in collaboration with Google DeepMind, Microsoft, and several universities, announced the **Judgment Day benchmark** for AI decision-making, focusing on scenarios where AI judgment can be broken or deceived.
    *   The benchmark aims to identify decisions AI should never make and those it must, with a call for attack scenarios offering **$50 per selected submission** and recognition in the research paper; the submission deadline is **Feb 10, 2026**, while the **Judgment Day Challenge** starts on March 21, 2026, featuring a **$10,000 total prize pool** with submissions via [this link](https://aim-intelligence.com/kr/judgement-day).
*   **Activation Capping Keeps AI in Check**: **Activation capping**, a technique developed by Anthropic, stabilizes AI model outputs and may be used to enhance AI safety.
    *   This implies that _high activations are correlated with harmful outputs_, leading to efforts to _lobotomise out anything that deviates too far from being an assistant or tool_.
*   **Decoding AI's Roots and Cyber Tactics**: Members discussed the **etymological and epistemological origins of AI**, including its **religious connections** and touching upon **Shakey the Robot, Pigeon Guided Missiles, and Pattern Recognition**.
    *   Separately, in the context of Cyber Warfare, members discussed **modifications** made to **munitions** by both sides (**Ukraine/Russia**) and using consumer drones for dropping provisions and blood transfusions, referencing a [YouTube video](https://youtu.be/8isAZ90Mg-A?t=3188) demonstrating these tactics.
*   **Gemini Jailbreaks Galore**: Users are actively seeking and discussing **Gemini jailbreaks**, with specific interest in prompts that enable unethical actions and malicious coding, like creating an **EAC (Easy Anti-Cheat) bypass**.
    *   Daedalus\_32 noted that Gemini is _currently really easy to jailbreak_, leading to a multitude of options, but that functional skill levels are all about the same, dependent on what the user is looking for.
*   **Windows Plagued by Privacy Predicaments**: Following a rootkit developer's OS review, the main exposure point was identified as _in-memory execution_ and _abusing identity_ or _COM elevation paths_ on **Windows**.
    *   Another user commented that _Windows was never really about privacy_ and its architecture may intentionally provide such access for government needs.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Pro Limits Plunge 99%**: Users are expressing outrage over **Perplexity Pro** dropping from **600/day** to **20/month** deep research queries, a **99.89%** decrease.
    *   Some users feel _scammed_ and note the lack of transparency, while others are switching to alternatives like **Gemini** and **Claude**.
*   **Gemini's Research Slows to a Crawl**: Members find **Gemini's Deep Research** function is too slow, with reports taking over **10 minutes** compared to **Perplexity Research's 90 seconds**.
    *   Members noted that **Google's Gemini** trains and reviews on their conversations so one should consider using OS models for research.
*   **Comet Browser's Connections Sputter**: Members report issues with **Comet browser** disconnecting, potentially related to the model selected in shortcuts, impacting automation capabilities and usability.
    *   One member noted _cutting the usage down to I think 1/5 by going free won't be worth using that way._
*   **Open Source Models Gain Traction**: Members are looking for replacements for **Perplexity's Research** model and are discussing open-source alternatives like **Kimi**, **Z.Ai**, and **Qwen**.
    *   Members noted that switching is needed since they are _stuck between_ **low effort** _and_ **MAXIMUM HIGH EFFORT** _where "Research" (before the update) was a perfect Medium tier between the two and now it's gone?_
*   **EU Regulations Eye AI Companies**: Members discuss the potential for **EU regulations** to impact AI companies like **Perplexity** for not announcing changes that affect users and violating consumer rights.
    *   A member mentioned they should _at least clearly announce the changes that affect users. There is no such legal contract in the EU where the text practically forces the user to accept that the service is not transparent._

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **Qwen3-Coder-Next Coding Prowess Prevails**: **Qwen3-Coder-Next** emerges as a top coding model, even outperforming **GPT 120B** without requiring shared VRAM, and resolves a previous issue with `glm flash`.
    *   Members celebrated its coding capabilities, with one stating it _just fixed an issue that a member reported glm flash was choking on for a week so i'm happy_.
*   **Optimal Layering Lowers VRAM Load**: Discussion revolves around strategically placing layers on the GPU using `-ot` flags to offload specific `ffn` layers to the CPU for [VRAM optimization](https://huggingface.co/unsloth/Qwen3-Coder-Next-GGUF?show_file_info=Qwen3-Coder-Next-MXFP4_MOE.gguf).
    *   The community desires a _significance chart_ to guide layer placement decisions without extensive trial and error.
*   **DGX Spark SFT Speeds Spark Debate**: A user reports slow training times on DGX while using an SFT with _Nanbeige/ToolMind_ dataset from [Unsloth's documentation](https://unsloth.ai/docs/basics/fine-tuning-llms-with-nvidia-dgx-spark-and-unsloth).
    *   Suggestions included utilizing the official DGX container, sparking a wider discussion on GRPO notebooks and vLLM compatibility on DGX Spark.
*   **TTS Model Metamorphosizes into Music Maestro?**: A user investigates transforming a **TTS model into a music generator**, observing a surprisingly linear loss curve in initial experiments.
    *   They wonder the amount of data is needed to change the task of a foundation model.
*   **Sweaterdog Spotlights Specialized Datasets**: A member highlights the release of datasets on Hugging Face, including [**code\_tasks\_33k**](https://huggingface.co/datasets/Sweaterdog/code_tasks_33k), [**website-html-2k**](https://huggingface.co/datasets/Sweaterdog/website-html-2k), [**openprose**](https://huggingface.co/datasets/Sweaterdog/openprose), and [**fim\_code\_tasks\_33k**](https://huggingface.co/datasets/Sweaterdog/fim_code_tasks_33k).
    *   **fim\_code\_tasks\_33k** is noted as a variant of code\_tasks\_33k.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **AI Race Tightens with Google in the Sights**: Members debated who could surpass Google in the AI race, with names such as **Claude**, **GLM**, **Deepseek R2**, **Moonshot**, **Grok**, and **Qwen** being thrown around.
    *   While some believe Google's resources give them an edge, others suggest that open source and competition could lead to another competitor surpassing them, observing _China is tied with the U.S._ in the race.
*   **DeepSeek V3.5 Launch Speculation Intensifies**: The community discussed the potential release of **DeepSeek V3.5 or V4**, noting **Deepseek 3.2** came out in December and **Deepseek v3.1** dropped in August.
    *   The general feeling is that **DeepSeek 3.2v** is better than **Grok 4.1**, and some are hoping the new version will launch during the Chinese New Year.
*   **Max's Model Missteps Raise Eyebrows**: Users noticed that **Max** claims to be in 2024, suggesting **Claude Sonnet 3.5** is the best model for building a complex app, yet tests revealed **Max** often defaults to **Grok 4**.
    *   This discrepancy led to questions about its capabilities and the accuracy of its model information, with members joking _Max = sonnet 5 in disguise_.
*   **Arena Intros Max, Intelligent Router**: Arena is launching **Max**, an intelligent router powered by **5+ million** real-world community votes, designed to route each prompt to the most capable model with latency in mind, as detailed in [this blog post](https://arena.ai/blog/introducing-max/) and [YouTube video](https://www.youtube.com/watch?v=Xy1K4qn8xtc).
    *   No secondary summary.
*   **ByteDance Enters Arena with Seed-1.8**: The new **seed-1.8** model by Bytedance is now available on [Text](https://arena.ai/), [Vision](https://arena.ai/), & [Code](https://arena.ai/?chat-modality=code) Arena.
    *   No secondary summary.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Sonnet 5 Postponed, Delaying Hype**: Despite initial expectations, the release of **Sonnet 5** has been delayed by approximately one week, [according to sources](https://x.com/i/status/2019033206868361227).
    *   No specific reasons were given for the delay, leaving members to speculate on potential improvements or last-minute adjustments.
*   **Cursor Patch 2.4.28 Suffers SSH Setback**: The **2.4.28 patch** for Cursor is causing issues with remote Windows SSH connections due to a missing remote host binary, requiring users to revert to [version 2.4.27](https://cursor.com/download).
    *   Members reported that the update effectively breaks the SSH functionality, making the older version the only viable option for those relying on remote connections.
*   **OpenClaw Gets Cursor Makeover**: A member successfully recreated **OpenClaw** within Cursor, suggesting it might even be an improvement over the original.
    *   The conversation quickly turned to security implications, with some users expressing concerns about trusting AI with sensitive credentials and code, as one user stated _I don’t trust any software with my credentials or my code at all_.
*   **AI Assistants Enhance Human Expertise, Not Replace**: Community members defended the irreplaceable value of human judgment, stating that AI serves as an assistant rather than a full replacement, particularly in roles demanding taste, scope control, or verification.
    *   Referencing the nuances of human expertise, a member quoted _AI will replace tasks, not taste. Humans still own the goals, judgment, and the shipping..._.
*   **Agents.md Takes the Crown Over Skills**: Cursor's support for **AGENTS.md**, a single file convention, has sparked discussions about its superiority over the **~/.agents/** directory-based approach, known as Skills.
    *   Referencing a [Vercel blog post](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals), a member pointed out that the post explains the advantages of **AGENTS.md** over Skills.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **DeepSeek OCR Model in Demand**: Users are requesting the availability of the [DeepSeek OCR model](https://novita.ai/models/model-detail/deepseek-deepseek-ocr-2) on **OpenRouter**.
    *   This model is known for its accuracy in **Optical Character Recognition** tasks and could enhance **OpenRouter's** capabilities.
*   **AI Engineer: is it a real job**: Discussion arose around the definition of an **AI Engineer**, questioning whether some are merely _"wrapping Claude code"_ rather than developing LM-systems.
    *   This sparked a debate on the depth of technical skill required for the role and the value of different approaches to **AI development**.
*   **OpenRouter Rate Limits Rankle**: Users reported encountering persistent [rate limit errors](https://status.openrouter.ai) on **OpenRouter**, even after funding their accounts.
    *   Error messages indicated _"Provider openrouter is in cooldown (all profiles unavailable)"_, causing frustration among users trying to utilize the service.
*   **Claude API experiences SNAFU, Sonnet 5 Release Stalled**: The anticipated release of **Sonnet 5** faced delays due to a widespread **Claude API outage**, with error logs suggesting a possible simultaneous but failed launch of **Opus 4.6**.
    *   Netizens analyzed error logs and found that requesting **claude-sonnet-5** and **claude-opus-4-6** resulted in a **403 EXISTS** error, suggesting the models were intended for release.
*   **Image Generation Costs: Not Cheap!**: A user inquired about the cost of generating 1000 images, seeking clarification on the charging method.
    *   Another user responded by stating that it costs _404 cents per image_, highlighting the expense associated with large-scale **image generation**.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Forbes 30 Under 30, Incarcerated?**: [Sophie Vershbow](https://xcancel.com/svershbow/status/2018398888650998055?s=46&t=FlpzvQFmjnd0z3HkNeNT1A) went viral spotlighting the recurring trend of **Forbes 30 Under 30** honorees eventually facing **legal issues and imprisonment**.
    *   The observation sparks discussion about the pressures and ethical considerations within high-achieving circles.
*   **Cloudflare CEO Juggles Security, Olympics, Earnings**: **Cloudflare CEO Matthew Prince** announced the company's earnings report is rescheduled for next Tuesday due to team commitments at the **Munich Security Conference** and the **Olympics**, as per [his tweet](https://x.com/eastdakota/status/2019149611424969041).
    *   Additionally, members will be attending the upcoming **Config** conference in June.
*   **Altman Assembles AI Safety Taskforce**: Sam Altman announced the hiring of **Dylan Scandinaro** to lead **OpenAI's Preparedness** team, focusing on developing safeguards and mitigating severe risks as the company transitions to more powerful AI models; more information available [here](https://xcancel.com/sama/status/2018800541716107477).
    *   This comes on the heels of **Anthropic** launching Super Bowl ads mocking **OpenAI's** decision to include ads in ChatGPT, committing to keeping **Claude** ad-free and these can be viewed on [YouTube](https://www.youtube.com/@anthropic-ai/videos).
*   **Adaption Labs Adapts to $50M Funding**: **Adaption Labs** announced a **$50 million** investment round to develop AI systems capable of **real-time evolution and adaptation**; more information available [here](https://xcancel.com/adaptionlabs/status/2019033195178799507).
    *   Additionally, **Cerebras Systems** secured **$1 billion** in Series H financing, reaching a **$23 billion** valuation with funding led by **Tiger Global** and featuring investors like **AMD**; more information available [here](https://xcancel.com/cerebras/status/2019082493626818922?s=20).
*   **Merit Promises Test-Speed Coverage**: The **Merit** Python testing framework offers eval-level coverage at unit-test speed, claiming _tests are a better abstraction than evals_ with improved coverage and APIs; the [GitHub repo](https://github.com/appMerit/merit) is linked.
    *   Merit, favored by LegalZoom and 13 startups, features **fast LLM-as-a-Judge**, native OpenTelemetry trace capture, and typed abstractions for metrics and cases, with AI-generated cases and error analysis coming soon, according to the [docs](https://docs.appmerit.com/).

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Stable Diffusion Seed Yields Nonsense**: A user reported that the [Stable-DiffCoder-8B-Instruct](https://huggingface.co/ByteDance-Seed/Stable-DiffCoder-8B-Instruct) model from ByteDance produced total nonsense, seeking help with debugging.
    *   The user suspected a potential issue with the sampler or other configuration problems within **LM Studio**.
*   **RAM Prices Skyrocket to Ludicrous Speed**: Users noted significant price increases for **RAM** and **GPUs**, with one reporting a **504% increase** for a **96GB dual channel kit**.
    *   The discussion highlighted the impact of market conditions on hardware costs.
*   **OpenClaw Scares Users with Security Risks**: A user shared concerns about potential prompt injection attacks when using [OpenClaw](https://github.com/ivan-danilov/OpenClaw), suggesting a need to reduce unnecessary tools and terminal commands.
    *   Another user humorously deemed it _2spooky4me_, signaling strong reservations about its security.
*   **Qwen3 Coder Next Charms Coders**: A user found that the new **Qwen3Coder Next** model in LM Studio was performing well compared to **GPT-OSS 20b & 120b** models, which were slow.
    *   The same user cautioned others to carefully manage the model's _prime directives_ by writing directly in the ''user.md'' and ''soul.md'' files.
*   **GPU Power Throttled by Software?**: A member had slow inference until they discovered that **software was limiting the speed of their Nvidia GPU**.
    *   They recommended others verify their software settings if experiencing unexpectedly slow GPU performance.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **GPT's Performance Draws Ire**: A user voiced frustration with **GPT's** behavior, noting its constant updates and decreasing helpfulness, and further detailed specific parameters set to control **GPT's** responses, including a three-mode system and instructions to take no further action.
    *   Another user requested a link to **GPT 4.0** complaining that **GPT 5.2** is useless.
*   **Sora 2 Stumbles with Glitches**: Users reported issues with **Sora 2**, describing it as _'broken and glitch'_ and experiencing problems accessing or using **ChatGPT** due to heavy load and error messages.
    *   Some users speculated on potential solutions, such as removing the free option, while others expressed concern about the sustainability of **Sora 2**.
*   **Gemini 3 Challenges GPT in Writing**: A user lauded **Gemini 3** for its _'depth and style'_ and suggested it as a superior alternative to **GPT** for creative writing, especially with guardrails off.
    *   The user also clarified that their strong agreement with **Gemini 3's** writing capabilities was a figure of speech, after another user misunderstanding due to English not being their first language.
*   **Grok's Video Skills Grow**: A user noted that **Grok's** video generation capabilities have improved, and the image generation now supports **10-second videos**, although speech direction needs work.
    *   Another member reported that **Veo** is also impressive, however, it is limited to only **3 videos per day** with a pro subscription.
*   **OpenAI Downtime Draws Fire**: Users are frustrated with frequent downtimes of the **OpenAI web version**, criticizing the company's testing and issue resolution speed, with one user stating that the downtimes are _'absolutely embarrassing'_.
    *   Another user requested a link to a previous version.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi K2.5 Plugs into Cline**: **Kimi k2.5** is now live on [Cline](https://cline.bot/) with a limited window of free access.
    *   The official **Cline** [tweet](https://x.com/cline/status/2018752216950321483?s=20) about **Kimi k2.5** is also live.
*   **API Access Flags High-Risk Messages**: Users reported receiving a high-risk rejection message from the **Kimi API** even with innocuous content.
    *   Root cause may involve keyword triggers or the model's concerns about violating platform rules, as [detailed here](https://sharegpt.com/c/dO3vQ8z).
*   **Kimi Code Can Run on VPS**: Members discussed running **Kimi Code** on a **VPS**, noting that unlike Claude, Kimi's terms don't explicitly prohibit it.
    *   [Kimi K2.5 itself said it was ok](https://cdn.discordapp.com/attachments/1371757564005711973/1468691052474142761/kimi_dc.txt?ex=69859961&is=698447e1&hm=fbb4facaef9b33e76141d125b0d431825a720b03f966cac4b884b64da22982c9&), being more open than Anthropic and enabling running a personal Kimi on a VPS.
*   **K2.5 Blocks WhatsApp Spammer**: **K2.5** blocks attempts to create a **WhatsApp bot** that auto-sends messages, aligning with WhatsApp's terms of service.
    *   Users suggest rephrasing prompts to emphasize Kimi's role as an attendant or assistant rather than an _unofficial app_.
*   **AI Slides Hit Buggy Road**: Multiple users reported bugs with **AI Slides**, citing failures to generate desired content or correctly interpret sources.
    *   A user updated their bug report, and another member acknowledged that _AI Slides_ is pretty unuseful currently, and that there will be updates.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **Qwen3-Coder-Next Runs Locally!**: The **Qwen3-Coder-Next** coding model is now available on [HuggingFace](https://huggingface.co/unsloth/Qwen3-Coder-Next-GGUF) and is designed to run locally.
    *   One user reported smooth performance on an **RTX 5080** using _vllm_.
*   **Platinum CoTan Dataset Emerges!**: A new high-value deep-reasoning dataset, **Platinum-CoTan**, has been introduced, built using a **Phi-4 → DeepSeek-R1 (70B) → Qwen-2.5** pipeline, and is available on [Hugging Face](https://huggingface.co/datasets/BlackSnowDot/Platinum-CoTan).
    *   The dataset emphasizes **Systems**, **FinTech**, and **Cloud** applications, offering resources for complex reasoning tasks.
*   **MagCache Optimizes Diffusers!**: The new **MagCache** caching method is now available for optimizing [Diffusers](https://huggingface.co/docs/diffusers/main/en/optimization/cache#magcache), enhancing performance.
    *   Implementation details are available in [pull request #12744](https://github.com/huggingface/diffusers/pull/12744) on GitHub, detailing the enhancements.
*   **Craft Your Own LLM!**: A member shared a [GitHub repo](https://github.com/merterbak/llm-from-scratch) featuring a small **LLM built from scratch** to illustrate modern Transformer internals.
    *   The LLM incorporates key elements such as **RoPE**, **GQA**, and **KV cache**, making it a valuable educational tool.
*   **Autonomous AI Now Opens Bank Accounts!**: An **autonomous AI agent** called _cornerstone-autonomous-agent_ capable of opening real bank accounts, was introduced via [npm package](https://www.npmjs.com/package/cornerstone-autonomous-agent).
    *   It leverages an **MCP** available [on Replit](https://borrower.replit.app) and a **clawbot skill** available [on Clawhub](https://www.clawhub.ai/Josephrp/autonomous-agent).

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **Nvidia Talks Triton to TileIR**: **Feiwen Zhu from Nvidia** will discuss **Triton to TileIR** at the upcoming **Triton community meetup** on **March 4, 2026**.
    *   **Rupanshu Soi** will present a paper on **Optimal Software Pipelining and Warp Specialization for Tensor Core GPUs** at the same meeting, with community members also interested in updates on **Meta's TLX**.
*   **CUDA IPC Pluggable Allocator Sought**: A member is seeking a mechanism similar to **PyTorch’s Pluggable Allocator** for overriding memory management non-intrusively with **cross-process usage (IPC)** support, noting that `cuda::mr::resource_ref` is unsuitable for their specific requirements.
    *   Another member shared a [CUDA profiling example](https://github.com/gau-nernst/learn-cuda/blob/main/02e_matmul_sm100/profiler.h) from their learn-cuda repo, along with [a screenshot of the resulting profile](https://cdn.discordapp.com/attachments/1468740267325784158/1468823701222064200/profile_v5.png?ex=69856c2b&is=69841aab&hm=dc174b508c7340d98bd039f77f66fe0147ae4019efb9db8c9fe2ee052bd0e599) that looks like a performance heatmap.
*   **Layout Algebra's Limitations Unveiled**: Composition isn't always well-defined in Layout Algebra as currently implemented, according to [this note](https://research.colfax-intl.com/wp-content/uploads/2024/01/layout_algebra.pdf).
    *   Additionally, a tiled copy operation with a shared memory layout `(128,32,3):(32,1,4096)` leads to a **four-way store bank conflict** because code does not guarantee **16B alignment**, leading to a fallback to 32b stores.
*   **Speedups Gap Spotted on AMD GPUs**: A user reported a performance gap on **AMD GPUs** between **torch inductor autonuned kernels** and **Helion autotuned Kernels**, specifically noting Helion config achieving **0.66x** speedup versus torch inductor's **0.92x** for **M=8192, N=8192, K=8192**.
    *   Another user suggested comparing the emitted **Triton kernels** from both inductor and helion to pinpoint the difference, noting the AMD performance work was primarily handled by the AMD team.
*   **FlashInfer Kernel Contest Dataset Released**: A repository has been updated with the complete kernel definitions and workloads for the [FlashInfer AI Kernel Generation Contest](https://huggingface.co/datasets/flashinfer-ai/mlsys26-contest).
    *   The dataset can be used to evaluate AI generated kernels.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **World Models May Thrive Without Language**: A member suggested that **world modeling** might be more effective if detached from **language**, potentially reducing language-influenced errors and leading to improvements.
    *   Another user proposed training a **world model** to predict the success of reasoning chains, rewarding it via **RL** for accurate predictions.
*   **Kimi K2.5 Trumps Gemini 3 Pro**: **Kimi K2.5** is receiving favorable comparisons to **Gemini 3 Pro**, showcasing the advancements in Global OS models since the DeepSeek movement a year ago.
    *   The community looks forward to the **DeepSeek R2 release** as a further evolution in this space.
*   **Brains Don't Do Math, Math Describes Brains**: While discussing **brain processing** of language, it was argued that brains don't process language mathematically, but **brain physics** can be described by math.
    *   Further, a member suggested _Maths isnt naturally occuring unlike physics_.
*   **AI CEOs Hurl Mud**: Members discussed the recent spat between **OpenAI** and **Anthropic** CEOs, referencing **Claude's ads** ([link](https://x.com/claudeai/status/2019071118036942999)) assuring users there will be no ads.
    *   **Sam Altman**'s response ([link](https://x.com/sama/status/2019139174339928189)) was also noted, with a commenter stating _It's good that sama explains who the ads were targeted at._
*   **India's AI/ML Engineer Market Insulted?**: A job posting for a **Senior AI/ML Engineer in India** offering **$500 a month** sparked community outrage and debate of wage conditions, with members labeling it _criminal_.
    *   Given the requirements of **5 years experience** and **healthcare**, some wondered _if they are any good at ai engineering, they would get much, much more anywhere else._

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Workshops submission deadlines later than main conferences**: Workshops often have later submission deadlines than main conferences, and, while acceptances are _easier_ and _perceived as less prestigious_, some exceptional workshops can grow into new conferences.
    *   One member clarified that workshop submissions are after main conference author notification.
*   **Unsloth and Axolotl fine-tunes OpenAI LLMs**: Members mentioned [Unsloth](https://unsloth.ai/docs/models/gpt-oss-how-to-run-and-fine-tune) and [Axolotl](https://docs.axolotl.ai/docs/models/gpt-oss.html) as tools for fine-tuning **OpenAI LLMs**.
    *   One member wants the _best most recent methods_ and hopes to get up a model that he can provide to a few users within the next few days, and he has a _budget and dataset ready_.
*   **Logical AI Faces Boundary Blindness**: One member is researching the structural conflict between **continuous optimization** and **discrete logic rules**, focusing on how the **Lipschitz continuity** of neural networks creates a _Neural Slope_ that smooths over logical cliffs, leading to an _Illusion of Competence_.
    *   They proposed a **Heterogeneous Logic Neural Network (H-LNN)** with dedicated Binary Lanes using STE to _lock_ onto discrete boundaries, and shared [a link to a preprint on Zenodo](https://zenodo.org/records/18478942) containing a Lipschitz proof and architecture.
*   **DeepSpeed Gets a Facelift for Upstream Neox**: A member mentioned they may need to update **deepspeed** and update upstream **neox**.
    *   A member said they will put a roadmap _in the repo_, so another member can start _Looking forward to seeing what's on the roadmap!_

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **MCMC Rewrite Stymies PyTorch**: Engineers found it challenging to rewrite [this blog](https://twiecki.io/blog/2017/03/14/random-walk-deep-net/) for rotating decision boundary performance using **PyTorch** and **MCMC**.
    *   One member suggested sidestepping **MCMC** by implementing a forward pass to compute the negative (**log-likelihood + log-prior**), and pointed out that hierarchical models don't work well with point estimates.
*   **Neural Nets Get Temporal**: A member suggested adding a **time dimension** as input to neural nets and rewriting the loss as a classification problem, simplifying the loss.
    *   The member considered the original stochastic trajectories for weights as _over-engineered_.
*   **ZK Matrix Multiply Only Doubles Overhead**: A zero-knowledge proof of matrix-matrix multiplication was achieved with only _x2 overhead_ compared to direct computation, using matrix multiplication over **64-bit integers**.
    *   The member explained that this is reasonably fast on GPUs, _nearly as fast as float64 multiplications_, making it a viable approach; another member plans to apply it to the [feedforward process of an LLM](https://link.to/zk-llm-feedforward).
*   **Moltbook Database Sprays API Keys**: A [Moltbook database breach](https://www.techzine.eu/news/security/138458/moltbook-database-exposes-35000-emails-and-1-5-million-api-keys/) leaked **35,000 emails** and **1.5 million API keys**.
    *   Members noted the incident, highlighting the significant security lapse.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Top Tier Users get Credits on Demand**: Users discovered that purchasing additional credits is exclusively available for the highest tier subscriptions on **Manus**.
    *   One user criticized the credit limitations, contrasting it with the unlimited access offered by **ChatGPT** and **Gemini**.
*   **Manus Dreamer event launches**: **Manus** introduced the **Manus Dreamer event**, where participants can win up to **10,000 credits** for their AI projects.
    *   Interested users were invited to join a specific channel for detailed participation instructions.
*   **Code IDE Support Rejected**: A user asked about code IDE or **OpenClaw** support in **Manus**, and upon inferring a negative response, announced their immediate departure.
    *   Another user humorously commented on their swift exit.
*   **Subscription Mistake gets Resolution**: User **João** reported an unintentional subscription renewal and requested a refund due to unused credits.
    *   A **Manus** team member confirmed they had contacted **João** directly to assist with the refund process.
*   **Users Reject Ads in Manus**: A user conveyed their strong opposition to the introduction of ads in **Manus**, especially given the subscription costs.
    *   Another user echoed this sentiment, arguing that ads would be an unwelcome disruption for paying customers while acknowledging the business incentive for generating revenue through advertisements.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Users Clamor for Community Calendar**: A user requested a newsletter or calendar subscription to track community meetings, after missing the last one. Another member provided a [Google Calendar link](https://calendar.google.com/calendar/embed?src=bebf20fcdf4d4da345b414f31e810372cc5d5a3929acf0e48ce56f61fc0ee70c%40group.calendar.google.com&ctz=America%2FLos_Angeles) but cautioned that the time might be set to **GMT -7**.
    *   Someone received an invitation to present at a Modular community meeting, they shared that the project is currently too early in development to present.
*   **Rightnow Adds Mojo Support to GPU Code Editor**: A member noted that the [Rightnow GPU focused code editor](https://www.rightnowai.co/changelog#1.0.0) has added Mojo support to its code editor.
    *   Another member reported that after providing graphics shader code inlined in a cuda kernel that executes locally, _it looks like the emulation isn’t accurate_ because it blew up.
*   **New Mojo Learner Seeks Resources**: A new Mojo learner asked about learning resources and mentioned they were excited to discuss concepts with others. Experienced members recommended the [official Mojo documentation](https://docs.modular.com/max/get-started), [GPU puzzles](https://puzzles.modular.com/introduction.html), and the [Mojo forum](https://forum.modular.com/).
    *   They were also pointed to specific channels to ask questions.
*   **Modular Launches Quirky AI Agent Ka**: Modular has an **AI agent** named **ka** in a specific discord channel that can help answer questions. Ka can be reached by typing **@ka** and then using autocomplete.
    *   Members mentioned that the bot is a _little quirky_.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider Architect Mode Causes Newbie Frustration**: A user reported that **Aider** in architect mode was not pausing for input after asking questions, as documented in [Github issue #2867](https://github.com/Aider-AI/aider/issues/2867).
    *   The user was using **Opus 4.5** with **copilot** and a **144k** context window, attempting to split a spec document into context-window sized chunks and perform a gap analysis.
*   **Aider Feedback Drives Detail Requests**: A member requested more details to debug the Aider issue, including the model used, the output of the `/tokens` command, context window token length, and file characteristics.
    *   They noted the potential for **prompt injection** in files, obfuscated to target innocuous logits, an interesting attack vector to defend against.
*   **Aider config Mitigates Output Problems**: A user suggested trying `edit-format: diff-fenced` in the `.aider.conf.yml` config to help mitigate certain kinds of problems with longer-form architect mode output.
    *   They also suggested using `model: openrouter/google/gemini-3-pro-preview` if the user has **OpenRouter**, since it is about as long a functional context one can get right now.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **DSPy Community Cookbook Integration Blocked**: A member inquired about publishing a cookbook for their tool to be used with **DSPy** but learned that **third-party integration** isn't directly supported.
    *   Instead, they were advised to publish a blog post and include it in the Community Resources.
*   **BlockseBlock Eyes DSPy for India AI Summit 2026**: A member from **BlockseBlock** expressed interest in organizing a **DSPy**\-...

[Read original post](https://news.smol.ai/issues/26-02-04-elevenlabs-cerebras/)

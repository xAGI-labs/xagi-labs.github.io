---
title: "ChatGPT starts testing ads on free tier + new $8/mo Go plan in the US"
date: "2026-01-16T05:44:39.000Z"
description: "**OpenAI** announced the **ChatGPT Go** tier at **$8/month** with ads testing in the US free tier, emphasizing that ads will not influence responses and will be..."
original_link: "https://news.smol.ai/issues/26-01-16-chatgpt-ads/"
---

**Monetizing your consumers is all you need.**

> AI News for 1/15/2026-1/16/2026. We checked 12 subreddits, [**544** Twitters](https://twitter.com/i/lists/1585430245762441216) and **24** Discords (**205** channels, and **4966** messages) for you. Estimated reading time saved (at 200wpm): **430 minutes**. **Our new website** is now up with full metadata search and beautiful vibe coded presentation of all past issues. See https://news.smol.ai/ for the full news breakdowns and give us feedback on [@smol\_ai](https://x.com/Smol_AI)!

When you have 900 million weekly active users, you are usually long overdue in trying to figure out an ad supported model. Despite [a lot](https://x.com/tomwarren/status/2012295849678602610?s=46) of [snark](https://x.com/nickfloats/status/2012249130006143477?s=46) from commentators, OpenAI had to figure out their ads business and finally broke its silence today, outlining their [ads principles](https://x.com/OpenAI/status/2012223373489614951?s=20) in their tests that will roll out only in the US over the next free tier:

![https://pbs.twimg.com/media/G-zZl9kXwAAQut2?format=png&name=4096x4096](https://pbs.twimg.com/media/G-zZl9kXwAAQut2?format=png&name=4096x4096)

Most important statement in this is that ads never affect responses and are clearly labeled, which is the "right" move:

![https://pbs.twimg.com/media/G-zZXO-XcAAdvQo?format=jpg&name=4096x4096](https://pbs.twimg.com/media/G-zZXO-XcAAdvQo?format=jpg&name=4096x4096)

Formerly paid plans will not see ads, but the new Go plan (now rolled out in the US) will. The sheer number of pricing plans also [draws some confusion](https://x.com/simonw/status/2012271939629498386?s=46):

![https://pbs.twimg.com/media/G-0GmQtaQAAW_-F?format=jpg&name=4096x4096](https://pbs.twimg.com/media/G-0GmQtaQAAW_-F?format=jpg&name=4096x4096)

* * *

AI Twitter Recap
================

**OpenAI product + monetization shifts (Go tier, ads, Codex speed, memory)**

*   **ChatGPT Go + ads testing**: OpenAI announced **ChatGPT Go** (global rollout) as a **$8/month** low-cost tier with “10× more messages,” file uploads, image creation, more memory, longer context, and “unlimited use of GPT-5.2 instant” ([OpenAI](https://twitter.com/OpenAI/status/2012223323812270219)). In parallel, OpenAI said it will **start testing ads** in **Free + Go** tiers, with principles: **answers not influenced by ads**, ads clearly labeled, and “conversations private from advertisers” ([OpenAI](https://twitter.com/OpenAI/status/2012223373489614951); expanded by [@fidjissimo](https://twitter.com/fidjissimo/status/2012226082716393960) and [@sama](https://twitter.com/sama/status/2012253252771824074)). The announcement triggered heavy skepticism about inevitable incentive drift (e.g., [@scaling01](https://twitter.com/scaling01/status/2012234947403174189); and the resurfaced “ads as last resort” quote via [@tomwarren](https://twitter.com/tomwarren/status/2012295849678602610)).
*   **Memory + “very fast Codex”**: Sam Altman highlighted “new ChatGPT memory improvements” ([@sama](https://twitter.com/sama/status/2012242952542683227)) and repeatedly teased “**Very fast Codex coming!**” ([@sama](https://twitter.com/sama/status/2012243893744443706)), with follow-on confirmation/teaser posts from developer ecosystem accounts ([@embirico](https://twitter.com/embirico/status/2012320775370666004)). Multiple engineers discuss workflow-level impacts of the **speed vs intelligence** trade-off (e.g., shifting to more asynchronous “agent shepherding” when models are faster: [@adamdotdev](https://twitter.com/adamdotdev/status/2012142271819399663)).
*   **Codex CLI ecosystem integrations**: Open-weight models can be used through the Codex CLI via Ollama using `codex --oss` ([@ollama](https://twitter.com/ollama/status/2012046176267440177)), with a note to push context length to **≥32K** in settings for better UX ([@ollama](https://twitter.com/ollama/status/2012049822484750426)). There’s also a new interaction UX: “steer codex mid-turn without interrupting” in an experimental mode ([@thsottiaux](https://twitter.com/thsottiaux/status/2012074358471319599)).

**Agent tooling: orchestration UX, “human-in-the-loop” reliability, and file interfaces over classic RAG**

*   **Human-in-the-loop as a reliability multiplier**: A recurring theme is that putting a human “babysitter” in the loop makes systems _feel_ far more reliable than fully autonomous deployments using the same underlying models—because the human becomes a manual harness that catches failures and routes around ambiguity ([@lateinteraction](https://twitter.com/lateinteraction/status/2012030585926189148); follow-up noting now there’s quantitative support for the intuition: [@lateinteraction](https://twitter.com/lateinteraction/status/2012031028932854054)). Related: a chart discussion frames “the gap between the two lines” as the value of a human-in-the-loop ([@dbreunig](https://twitter.com/dbreunig/status/2012200587211821410)).
*   **“Chunking is dead” / files-first retrieval**: Jerry Liu argues that **RAG isn’t dead, but static chunking is**—if an agent can open a file, search (`ls`/`grep`), and expand context dynamically, you can avoid the brittle chunk/embed pipeline for many scales ([@jerryjliu0](https://twitter.com/jerryjliu0/status/2012273236042559802); deeper clarification on why file tools work well up to a few hundred docs and where DBs re-enter: [@jerryjliu0](https://twitter.com/jerryjliu0/status/2012254129473896532); emphasis on OCR as the missing piece for PDFs/PPTs: [@jerryjliu0](https://twitter.com/jerryjliu0/status/2012272839416758652)). A separate synthesis frames this as “files aren’t replacing databases, but they’re forcing a rethink of when DBs are overkill” ([@tuanacelik](https://twitter.com/tuanacelik/status/2012212183833403889)).
*   **Orchestrators and agent UIs proliferate**: Multiple launches and memes point to a fast-moving layer of “agent harness” products: Anthropic’s Cowork is referenced as a signal of orchestration tools becoming mainstream ([@alexalbert\_\_](https://twitter.com/alexalbert__/status/2012230110745702563); meta commentary by [@omarsar0](https://twitter.com/omarsar0/status/2012253642263249167)). SpecStory open-sourced a CLI to normalize agent session provenance/contracts ([@doesdatmaksense](https://twitter.com/doesdatmaksense/status/2012209297380544940)). A new open-source UI (“sled”) lets you “teleport Claude Code or Codex from your computer to your phone” via Agent Control Protocol ([@dctanner](https://twitter.com/dctanner/status/2012212217677070796)). OpenWork added native **Ollama integration** for fully local computer agents on Mac (Gemma/Qwen/DeepSeek/Kimi etc.) ([@\_orcaman](https://twitter.com/_orcaman/status/2012210613712281646)).

**Inference + systems engineering: caching, Prefill/Decode split, hardware benchmarks, and CUDA tiling ergonomics**

*   **“Year of inference explosion” framing**: A long Zhihu thread summary argues the bottleneck has shifted from training to inference: agents raise IO ratios (3:1 → 100:1 or 1000:1), **prefill dominates**, **context caching becomes default**, and Prefill/Decode splitting harms utilization unless you redesign scheduling and memory hierarchy ([@ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2012080310981374428)). This aligns with broader infra chatter around cache affinity vs load balance trade-offs.
*   **Hardware benchmarking beyond NVIDIA**: Artificial Analysis added **DeepSeek R1** results on SambaNova SN40L, showing higher throughput at concurrency and standout per-user speeds (noted peak ~269 tok/s single-user) vs tested NVIDIA configurations—while flagging lack of public hourly pricing for cost comparisons ([@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012233319891824943); [@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012233323154678010)).
*   **CUDA tiling / CuTe / cuTile ergonomics**: Engineers are enthused about **CuTe algebra** as a cleaner abstraction for tiling/indexing compared to hand-rolled CUDA gymnastics ([@fleetwood\_\_\_](https://twitter.com/fleetwood___/status/2012150019722485811)), alongside pointers to scarce “mere mortal” resources ([@fleetwood\_\_\_](https://twitter.com/fleetwood___/status/2012151045992992943)). NVIDIA’s newer “CUDA Tile”/cuTile guidance is summarized as enabling near–cuBLAS GEMM performance with simpler block-level code and compiler specialization (plus swizzling improvements) ([@TheTuringPost](https://twitter.com/TheTuringPost/status/2012288767894360215)).
*   **Data center power scaling**: Epoch AI estimates AI data centers now have total capacity around **30 GW**, comparable to New York State peak hot-day usage; methodology multiplies chip units sold by rated draw and applies ~2.5× facility overhead, with caveats about “capacity vs usage” ([@EpochAIResearch](https://twitter.com/EpochAIResearch/status/2012303496465498490)).

**Model & research highlights: voice cloning without tokenization, ultra-small models, multimodal + retrieval advances**

*   **Tokenization-free real-time TTS**: OpenBMB open-sourced **VoxCPM** weights for real-time streaming voice cloning, described as generating **continuous speech directly** (avoiding discrete audio token artifacts), with LoRA fine-tuning and ~0.15 real-time factor on a single RTX 4090 per the tweet ([@LiorOnAI](https://twitter.com/LiorOnAI/status/2012133013967044755); repo link [@LiorOnAI](https://twitter.com/LiorOnAI/status/2012133015426642286)). If accurate, it’s a meaningful shift for latency/prosody fidelity in production voice agents.
*   **Small-model reasoning & edge deployments**: TII promoted **Falcon-H1-Tiny** (<100M params) as capable of reasoning/coding/function calling for edge/IoT scenarios ([@TIIuae](https://twitter.com/TIIuae/status/2012034581084430662)). Ultralytics released **YOLO26** family (30 models, <50M params) spanning detection/segmentation/keypoints/open-vocab, with demos on CPU ([@mervenoyann](https://twitter.com/mervenoyann/status/2012121123018924033)).
*   **Multilingual translation**: TranslateGemma gained attention for multilingual breadth (incl. Malayalam) and tokenizer/data work ([@_arohan_](https://twitter.com/_arohan_/status/2012032986649448708); [@JeffDean](https://twitter.com/JeffDean/status/2012178747076591820)), and is available in Ollama with a specific prompting format ([@ollama](https://twitter.com/ollama/status/2012307436284395692)).
*   **Retrieval: multi-vector resurgence**: Strong claims that **multi-vector retrieval** can let tiny models compete with much larger baselines (e.g., “32M parameter multi vector model” approaching an 8B model) ([@aaxsh18](https://twitter.com/aaxsh18/status/2012124348392583584)), echoed by “multi vector is the only way forward” ([@lateinteraction](https://twitter.com/lateinteraction/status/2012227085507449197)) and practitioner reinforcement about ColBERT/ColPali-style wins across tasks ([@antoine\_chaffin](https://twitter.com/antoine_chaffin/status/2012269641490391272)).
*   **Preference data design for alignment (AIR)**: OpenBMB’s AIR framework decomposes preference datasets into **Annotations / Instructions / Response pairs**, claiming best practices: simpler scoring, filtering instructions by low variance, and balancing pair gaps/quality; reported +5.3 average gain across 6 benchmarks using 14k curated pairs ([@OpenBMB](https://twitter.com/OpenBMB/status/2012179938388926679)).

**Generative media: open image/video releases, motion control workflows, and diffusion “Neural OS”**

*   **FLUX.2 [klein] lands everywhere (open weights, vLLM day-0, leaderboards)**: Black Forest Labs’ **FLUX.2 [klein]** got “day-0 support” in **vLLM-Omni**, positioned as consumer-friendly (<~13GB VRAM), sub-second inference, Apache-2.0 licensed 4B model (per tweet) ([@vllm\_project](https://twitter.com/vllm_project/status/2012110024294965406)). Arena and Artificial Analysis report strong open-model leaderboard placements ([@arena](https://twitter.com/arena/status/2012310336528056520); [@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012339542997737856)).
*   **Open video model rankings**: Artificial Analysis notes **LTX-2** as leading open-weights video model in their Video Arena, with licensing caveats (LTX-2 Community License, commercial use under revenue threshold and non-compete constraints) ([@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012256702788153604)).
*   **Kling motion control + “AI mocap”**: Multiple threads highlight motion-control and mocap-style workflows enabling fast character swaps and transferable acting/performance ([@HAL2400AI](https://twitter.com/HAL2400AI/status/2012038846960328781); tutorial from [@Kling\_ai](https://twitter.com/Kling_ai/status/2012155500134105149); “AI motion capture… copy/paste motion/expression/lips” ([@EHuanglu](https://twitter.com/EHuanglu/status/2012149076511617436)); examples roundup ([@minchoi](https://twitter.com/minchoi/status/2012306052956533211)).

**Top tweets (by engagement)**

*   OpenAI ads principles announcement ([@OpenAI](https://twitter.com/OpenAI/status/2012223373489614951)) and Go tier launch ([@OpenAI](https://twitter.com/OpenAI/status/2012223323812270219)).
*   Sam Altman on ads rollout/principles ([@sama](https://twitter.com/sama/status/2012253252771824074)) and “Very fast Codex coming” ([@sama](https://twitter.com/sama/status/2012243893744443706)).
*   Viral diffusion “OS in a model” / Neural OS posts ([@jxmnop](https://twitter.com/jxmnop/status/2012048155379220746); follow-up details [@jxmnop](https://twitter.com/jxmnop/status/2012283763720601727)).

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. New Model and Benchmark Releases

*   **[GPT-5.2 xhigh, GLM-4.7, Kimi K2 Thinking, DeepSeek v3.2 on Fresh SWE-rebench (December 2025)](https://www.reddit.com/r/LocalLLaMA/comments/1qefa7q/gpt52_xhigh_glm47_kimi_k2_thinking_deepseek_v32/)** (Activity: 473): **The December 2025 update to the **SWE-bench leaderboard** features evaluations of several prominent models on 48 new GitHub PR tasks. **Claude Opus 4.5** leads with a `63.3%` resolved rate, followed by **GPT-5.2 xhigh** at `61.5%`. Notably, **Gemini 3 Flash Preview** outperforms its Pro counterpart despite being smaller and cheaper, and **GLM-4.7** ranks as the top open-source model, comparable to closed models like GPT-5.1-codex. The performance of **GPT-OSS-120B** in high-effort reasoning mode underscores the benefits of inference-time scaling. For more details, see the [SWE-rebench Leaderboard](https://swe-rebench.com/?insight=dec_2025).** Commenters highlight the surprising performance of Gemini 3 Flash Preview and express enthusiasm for GLM-4.7's ranking among the top models, noting skepticism about other benchmarks that overstate the performance of open models like GLM 4.7 or Minimax 2.1.
    
    *   The mention of **Gemini Flash** as a 'real shocker' suggests it performed unexpectedly well in the benchmark, indicating a significant improvement or innovation in its architecture or training that wasn't anticipated by the community.
    *   The **GLM 4.7** model's inclusion in the top 10 of the benchmark is notable because it is an open model, which typically face challenges in competing with proprietary models due to resource constraints. This achievement highlights the model's efficiency and capability, possibly due to recent optimizations or novel techniques.
    *   The skepticism towards benchmarks that equate **GLM 4.7** or **Minimax 2.1** with **Opus 4.5** suggests a belief that these models are not yet on par with Opus 4.5 in terms of performance. This could be due to differences in training data, model architecture, or other technical factors that affect their capabilities.
*   **[7x Longer Context Reinforcement Learning in Unsloth](https://www.reddit.com/r/LocalLLaMA/comments/1qdna3t/7x_longer_context_reinforcement_learning_in/)** (Activity: 288): **The image is a promotional graphic for Unsloth's new capability to extend context lengths in reinforcement learning by up to 7x, reaching up to 12x in some cases. This advancement allows training of models like gpt-oss 20b QLoRA with up to `20K` context on a `24Gb` card without accuracy degradation. For larger GPUs, Unsloth can handle `380K` context on a `192GB` NVIDIA B200 GPU. The image includes graphs that compare context length against GPU VRAM for different models, showcasing improvements in context length due to new data movement and batching algorithms. These enhancements are achieved without compromising accuracy or speed, and are applicable to various models including Llama and Gemma.** A commenter questions the availability of proper training data for such long contexts, suggesting that real-world tasks may not have sufficient instruction/QA data. Another user inquires about the applicability of these advancements to the Qwen3 30B-3A model.
    
    *   PlasticTourist6527 raises a critical point about the availability of long-context training data, especially for real-world tasks. They suggest that outside of specific domains like coding, there might be a scarcity of high-quality instruction or QA data that can support training models with extended context lengths.
    *   1ncehost reports issues with training a model on ROCm, noting that they had to apply deep patches and replace kernels to resolve problems with the latest versions. They also observed that SDPA was the fastest attention mechanism for the Qwen3 0.6B model, outperforming FA2 and xformers by a significant margin, indicating potential optimizations in attention mechanisms for specific model sizes.
    *   knownboyofno inquires about the applicability of the extended context reinforcement learning approach to the Qwen3 30B-3A model, suggesting interest in understanding the scalability and compatibility of the technique with larger models.

### 2\. High-Performance AI Hardware and Upgrades

*   **[Latest upgrade…A100 40 GB](https://www.reddit.com/r/LocalLLaMA/comments/1qe0cxc/latest_upgradea100_40_gb/)** (Activity: 466): **The image showcases a high-performance computer setup that has been upgraded with an NVIDIA A100 GPU, which is significant for AI and machine learning tasks due to its high computational power. The user initially had a gaming rig but transitioned to a more AI-focused setup by acquiring an A100 GPU, which was listed as faulty but turned out to be functional. This upgrade allows for running and training larger AI models efficiently, leveraging the A100's capabilities. The setup includes a GeForce RTX card, RGB-lit fans, and an NZXT liquid cooler, indicating a balance between aesthetics and performance.** The comments reflect a mix of admiration and humor, with one user joking about the risk taken in purchasing a potentially faulty GPU and another referencing a meme about NVIDIA's CEO, Jensen Huang.
    
    *   matatonic raises a critical point about cooling for the A100 40 GB, noting that it appears to be a passively cooled version. They suggest using a blower fan or another active cooling method to prevent overheating. Additionally, they mention the possibility of using water cooling solutions, which are available on platforms like AliExpress, to ensure the GPU operates within safe temperature ranges.
*   **[M4/M5 Max 128gb vs DGX Spark (or GB10 OEM)](https://www.reddit.com/r/LocalLLM/comments/1qcmmvw/m4m5_max_128gb_vs_dgx_spark_or_gb10_oem/)** (Activity: 188): **The user is comparing the NVIDIA DGX Spark and a MacBook Pro with M4 Max (128GB RAM) for local LLM inference, primarily for coding tasks such as code completion and refactoring. The DGX Spark offers a CUDA ecosystem and strong GPU compute, while the MacBook Pro benefits from unified memory and Apple's ML stack. For inference tasks, the MacBook's higher memory bandwidth is advantageous, but it may not match the performance of cloud-based solutions like Claude. The M5 chip shows improved performance over the M4, and new MacBook models may be released soon. The MacBook is noted for faster inference, but NVIDIA's CUDA support is more comprehensive. The Mac Studio with M4 Max is suggested as a cost-effective alternative if portability is not required.** Commenters debate the performance of Apple Silicon versus NVIDIA hardware, with some asserting that the MacBook Pro offers superior text generation performance due to its memory bandwidth, while others highlight NVIDIA's broader capabilities in fine-tuning and multimodal tasks. The discussion also touches on the potential cost-effectiveness of the Mac Studio for non-portable use.
    
    *   The M4 Max offers significantly higher memory bandwidth compared to the DGX Spark, which is beneficial for inference tasks. However, the Spark benefits from better support for frameworks due to its compatibility with NVIDIA's CUDA. This makes the MacBook faster for inference, but the Spark is more versatile for tasks like fine-tuning and image generation.
    *   The M3 Ultra Mac Studio is highlighted as superior for pure text generation tasks compared to the DGX Spark. While NVIDIA hardware is generally more capable on paper, the M3 Ultra reportedly outperforms in specific LLM inference tasks. This is attributed to the Mac's efficiency in handling agentic coding workflows, despite the Spark's broader capabilities in other areas.
    *   The DGX Spark is noted for its compact size and energy efficiency, consuming less than 100W and idling at around 10W. It is praised for its extensibility, allowing for additional units to be connected. However, concerns about bandwidth limitations are raised, and the cost comparison with alternatives like the GB10 OEM and MacBook Pro is discussed.
*   **[RTX 5070 Ti and RTX 5060 Ti 16 GB no longer manufactured](https://www.reddit.com/r/LocalLLaMA/comments/1qdh28f/rtx_5070_ti_and_rtx_5060_ti_16_gb_no_longer/)** (Activity: 414): ****Nvidia** has ceased production of the `RTX 5070 Ti` and significantly reduced the supply of the `RTX 5060 Ti 16 GB` due to memory supply shortages, leading to a price increase of approximately `$100` over MSRP for the 5070 Ti. The 8 GB configuration of the RTX 5060 Ti remains unaffected. This decision impacts most AIBs, who will no longer manufacture these GPUs. [Source](https://m.youtube.com/watch?v=yteN21aJEvE).** One user noted the RTX 5060 Ti 16 GB as a cost-effective option for adding Nvidia memory to systems, highlighting its suitability for DLSS, AI processing, and inferencing tasks, especially with `64GB VRAM` for `70B models`. Another user expressed disappointment over the halted production affecting their upgrade plans, while a third criticized Nvidia's business practices.
    
    *   The RTX 5060 Ti 16 GB is highlighted as a cost-effective option for adding Nvidia memory to systems, especially for tasks like image generation, inferencing, and gaming. At a price point of around `$350-$390`, it offers good value with features like DLSS and AI processing capabilities. The card's `16 GB GDDR7` memory compensates for its `128-bit bus`, making it comparable to a `192-bit bus GDDR6` card, thus supporting demanding tasks like DLSS and ray tracing without sacrificing texture quality.
    *   The RTX 5060 Ti 16 GB is noted for its suitability in budget inferencing setups, particularly for those unable to access RTX 3090s. With the ability to fit multiple cards into a standard power supply machine, it supports new quantization methods and can handle `70B models` effectively with `64 GB VRAM`. This makes it a viable option for small-scale AI tasks, leveraging its memory capacity and efficiency for practical applications.

### 3\. Local LLM Community and Innovations

*   **[[MOD POST] Announcing the r/LocalLLM 30-Day Innovation Contest! (Huge Hardware & Cash Prizes!)](https://www.reddit.com/r/LocalLLM/comments/1olbrch/mod_post_announcing_the_rlocalllm_30day/)** (Activity: 120): **The r/LocalLLM subreddit has launched a **30-Day Innovation Contest** focused on open-source projects for AI inference or fine-tuning, with significant hardware and cash prizes. The contest encourages submissions of innovative projects such as new serving frameworks, quantization methods, fine-tuning techniques, or performance benchmarks, using diverse hardware like **NVIDIA, Google Cloud TPU,** or **AMD**. The top prize includes an **NVIDIA RTX PRO 6000** and cloud time on an **8x NVIDIA H200 server**. Participants are encouraged to submit their projects via a new post on r/LocalLLM with the 'Contest Entry' flair, including a public repository link and demonstration materials.** One commenter expressed enthusiasm for saving projects for future exploration, while another inquired about sharing projects for community inspiration. A third commenter sought clarification on the submission process, indicating interest in participating.
    
*   **[Small AI computer runs 120B models locally: Any use cases beyond portability and privacy?](https://www.reddit.com/r/LocalLLM/comments/1qcu498/small_ai_computer_runs_120b_models_locally_any/)** (Activity: 107): ****TiinyAI** has developed a compact AI device capable of running `120B` parameter models locally with `80GB RAM` and a power consumption of `30W`. This device is positioned as a more portable and cost-effective alternative to larger systems like the **DGX Spark**, which offers `128GB RAM` and higher performance but at a greater cost and size. The TiinyAI device is particularly notable for its potential applications in scenarios where **portability** and **privacy** are prioritized over raw performance, such as in field operations or environments with limited internet access. However, concerns remain about its **memory bandwidth**, which is speculated to be between `80Gb/s` and `200Gb/s`, potentially limiting its performance compared to traditional PCs or laptops.** Commenters express skepticism about the device's price and availability, with one noting that $1400 seems high for an 80GB RAM SBC. Another highlights the device's potential utility in scenarios where internet access is restricted, such as under authoritarian regimes.
    
    *   A key technical concern raised is the memory bandwidth of the small AI computer, with estimates ranging from 80Gb/s to 200Gb/s. This bandwidth is crucial for running large models like 120B parameters efficiently. If the bandwidth is on the lower end, it may not outperform a regular PC or laptop, which could limit its utility for high-performance tasks.
    *   The pricing of the device, speculated to be around $1400 for an 80GB RAM single-board computer (SBC), is questioned. The skepticism is due to the lack of availability for immediate purchase, which raises doubts about the feasibility and practicality of the device at this price point.
    *   The device's built-in microphone and speaker suggest potential use as a private AI assistant. This setup could allow users to run automation scripts and manage tasks locally, providing a privacy-focused alternative to cloud-based assistants like Alexa or Siri. This use case leverages the device's ability to handle personal data securely without cloud dependency.
*   **[I fucking love this community](https://www.reddit.com/r/LocalLLaMA/comments/1qee2de/i_fucking_love_this_community/)** (Activity: 469): **The post highlights the ability to run large models like `nemotron-3-nano-30B-a3b-iq4_nl` at `14-13.5 t/s` on a decade-old PC with only `4GB VRAM`, thanks to optimizations from projects like **llama.cpp** and **vllm**. The key to achieving this performance is leveraging a significant amount of system memory and utilizing models with a _Mixture of Experts (MoE)_ architecture, which allows for efficient resource usage and performance on limited hardware.** Commenters express amazement at the performance achieved on old hardware, emphasizing the effectiveness of combining system RAM with MoE architectures. There's also interest in accessing resources or posts that detail these optimizations for running large models on low-end equipment.
    
    *   InfiniteLand7364 highlights achieving `14 t/s` (tokens per second) on a decade-old system, emphasizing the community's skill in optimizing older hardware for performance. This suggests that with the right tweaks, even outdated systems can handle tasks typically reserved for newer machines.
    *   Rokpiy mentions the effectiveness of combining system RAM with 'moe' (likely referring to a specific optimization or model configuration), which is often overlooked but offers practical benefits. This implies that leveraging existing hardware resources creatively can enhance performance without needing the latest technology.
    *   cosimoiaia discusses the educational value of working within hardware constraints, suggesting that it forces users to learn deeply about model tuning and system optimization. This experience not only improves current performance but also prepares users for future technological advancements by understanding what hardware and configurations are most effective.
*   **[My story of underestimating /r/LocalLLaMA's thirst for VRAM](https://www.reddit.com/r/LocalLLaMA/comments/1qe2i88/my_story_of_underestimating_rlocalllamas_thirst/)** (Activity: 1291): **The image is a meme that humorously illustrates the unintended consequences of sharing technical insights on Reddit. The original poster bought a w6800 32GB graphics card for $500, found it to perform well, and shared this information on Reddit. This led to a significant increase in the card's price to over $1,000, highlighting the impact of community discussions on market dynamics. The post underscores the high demand for VRAM in the /r/LocalLLaMA community, which can drive up prices when a product is recommended.** One commenter humorously compares the situation to the California gold rush, suggesting strategic withholding of information to capitalize on market opportunities. Another commenter provides technical advice, suggesting alternatives like the 3090 or R9700 for those concerned with VRAM and cooling solutions.
    
    *   EmPips discusses the trade-offs between different GPU models for VRAM-intensive tasks. They suggest that while the card in question is impressive, the **NVIDIA RTX 3090** might be a better choice at current prices. Alternatively, they recommend the **AMD Radeon Pro VII (R9700)** for those who prioritize VRAM-per-slot and are okay with high idle power and external cooling, suggesting the **AMD MI50** as another option for those willing to manage these factors.
*   **[What is the biggest local LLM that can fit in 16GB VRAM?](https://www.reddit.com/r/LocalLLM/comments/1qcuyh2/what_is_the_biggest_local_llm_that_can_fit_in/)** (Activity: 155): **The largest local LLM that can fit in 16GB VRAM, such as on an RTX 5080, is typically around `14B` parameters when considering practical usage constraints. This is due to the need to leave room for context, which means a model file size should ideally be around `14GB`. Models like `GPT-OSS-20B` can run but may require significant quantization, potentially below `4-bit`, which can degrade quality. For optimal performance without excessive slowdowns, models around `14B` are recommended. Users can check model sizes on platforms like [HuggingFace](https://huggingface.co/) to ensure they fit within VRAM limits.** Commenters suggest that while models up to `30B` might technically fit with aggressive quantization, the performance and quality trade-offs make `14B` a more practical choice. The importance of considering model file size over parameter count is emphasized, as exceeding VRAM capacity leads to slowdowns due to RAM overflow.
    
    *   BigYoSpeck discusses the performance of various models on a system with a Ryzen 9 5900x, 64GB DDR4 3800, and a 16GB Radeon RX 6800 XT. They report running `gpt-oss-20b` at over 120 tokens per second, `Qwen3 30b` partially offloaded to CPU at about 40 tokens per second, and `gpt-oss-120b` with 32 MOE layers offloaded to CPU at 23 tokens per second. This suggests that with a similar setup, one might achieve even better performance.
    *   SKirby00 highlights the limitations of running large models on 16GB VRAM, noting that models like `Qwen3-Coder-30B` require significant VRAM and context space. They suggest that a 14.5GB model might technically fit but would be impractical due to limited context space. They recommend aiming for models around the 14B parameter range for better usability, given the constraints of 16GB VRAM.
    *   vertical\_computer emphasizes the importance of considering model file size relative to VRAM capacity. They suggest that a model should ideally be around 14GB to fit within 16GB VRAM, leaving room for context. They provide an example with the `Nvidia Llama 3.3 Nemotron 49B` model, noting that larger models will spill over into RAM, significantly slowing down performance.
*   **[Oh Dear](https://www.reddit.com/r/LocalLLM/comments/1qdiwdh/oh_dear/)** (Activity: 115): **The image depicts a malfunction in an AI model's response, where it outputs a repetitive string of 'the,' suggesting a potential issue with the model's configuration or prompt handling. This could be due to an incorrect system prompt or tuning parameters like temperature not being set appropriately. The comments suggest checking the system prompt and ensuring it aligns with the model's requirements, as some models may not function correctly without a proper system prompt.** Commenters suggest that the issue might be related to the absence of a system prompt or incorrect tuning parameters, such as temperature, which are crucial for generating coherent responses.
    
    *   mp3m4k3r suggests checking the tuning parameters, specifically the temperature setting, to ensure it aligns with the model's recommended usage. This is crucial for maintaining the model's performance and preventing issues like repetitive outputs.
    *   HealthyCommunicat recommends adjusting the repeat penalty, starting at `1.1` and increasing if necessary. This adjustment can help mitigate issues with local LLMs producing repetitive text. Additionally, they advise ensuring the model isn't using more experts than recommended, which can also lead to performance problems.
    *   ScoreUnique mentions using 'pocket pal' for loading `gguf` files, which could be a solution for handling specific file types or formats in local LLM setups. This tool might be beneficial for users dealing with compatibility or loading issues.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Claude and Gemini Model Updates and Issues

*   **[Official: Claude Cowork is now available to "Pro" subscribers](https://www.reddit.com/r/ClaudeAI/comments/1qeo736/official_claude_cowork_is_now_available_to_pro/)** (Activity: 353): ****Claude Cowork** is now available to "Pro" subscribers, as announced by Claude on X.com. This feature, still in research preview, includes session renaming, connector improvements, and fixes based on early feedback. However, it is noted that Pro users might reach their usage limits faster due to Cowork's capability to handle more complex tasks. The announcement also provides a link to try it in the macOS app.** Users express concerns about hitting usage limits quickly, with one user noting that sorting 459 files used 97% of their session limit. Another user comments on the restrictive usage limits of Claude, while a third hopes for useful applications despite not using Claude for coding.
    
    *   A user reported that using Claude Cowork for sorting 459 files consumed 97% of their session's usage limit, highlighting the restrictive nature of the current usage caps. This suggests that the tool may not be suitable for high-volume tasks without hitting limits quickly.
    *   Another user expressed dissatisfaction with Claude's usage limits, indicating that they are among the worst compared to other services. This sentiment suggests that the current limitations may hinder productivity and user satisfaction, especially for those who rely on the tool for extensive tasks.
    *   A user mentioned their reluctance to upgrade to a 'max plan' due to not using Claude for coding, implying that the current subscription tiers may not align well with diverse user needs. This points to a potential gap in the service offerings for non-coding related use cases.
*   **[🌊 Announcing Claude Flow v3: A full rebuild with a focus on extending Claude Max usage by up to 2.5x](https://www.reddit.com/r/ClaudeAI/comments/1qegsta/announcing_claude_flow_v3_a_full_rebuild_with_a/)** (Activity: 291): ****Claude Flow v3** is a comprehensive rebuild of the AI orchestration platform, designed to enhance the usage of Claude Max by up to `2.5x`. The system, rewritten in **TypeScript** and **WASM**, features a modular architecture that supports deploying multi-agent swarms with shared memory and continuous learning. It reduces token consumption by `75-80%` and improves subscription capacity by `250%`. The platform is built on `npm RuVector` with deep **Rust** integrations and supports offline execution, allowing for local model use without consuming tokens. Governance is enforced through ADRs, DDD boundaries, and SPARC, ensuring traceability and security. The system operates as an always-on daemon with live updates and automated tasks for optimization and security audits. For more details, see the [GitHub repository](https://github.com/ruvnet/claude-flow).** Some commenters express skepticism about the claims, noting the use of buzzwords and unsubstantiated performance metrics, while others are intrigued by the potential of multi-agent systems but question their practical effectiveness compared to base LLMs.
    
    *   janusr raises concerns about the project's claims, highlighting the use of buzzwords and unsubstantiated metrics such as 'Agent Booster 352x faster' without clear benchmarks or comparisons. They question the relevance of ONNX Embeddings being '75x faster than Transformers.js' to the project's goals, suggesting skepticism about the practical benefits of these claims.
    *   Infamous\_Research\_43 expresses skepticism about frameworks claiming to manage large swarms of agents, noting a pattern of such projects failing to deliver on their promises. They argue that many creators lack a fundamental understanding of AI and agent-based systems, often confusing them with LLM chatbots, and warn that these projects are frequently scams or poorly executed.
    *   sridoodla mentions issues with outdated documentation in previous versions and inquires about the stability of v3, indicating a need for reliable and up-to-date resources to effectively utilize the tool. This highlights a common challenge in rapidly evolving AI projects where documentation often lags behind development.
*   **[Today, Gemini 3 Pro became unusable to me as a Pro subscriber](https://www.reddit.com/r/GeminiAI/comments/1qemf0h/today_gemini_3_pro_became_unusable_to_me_as_a_pro/)** (Activity: 183): **A user reports that **Gemini 3 Pro**, a tool they have relied on for building complex applications, has become unusable due to a significant drop in performance. The user experienced an issue where the model provided irrelevant code ('Shopping Cart' instead of a document upload feature), indicating potential problems with the model's context understanding. This aligns with other users' observations of a reduced context window, which may lead to increased hallucinations. Some users suggest alternatives like **GPT 5.2 Thinking** for better performance.** There is a debate on the model's performance, with some users experiencing significant issues due to a reduced context window, while others still find it effective for different tasks, such as philosophical discussions. The discussion highlights a divide in user experience, possibly due to varying use cases.
    
    *   xbrasil highlights a significant reduction in the context window for Gemini 3 Pro, even for paying users, which has led to increased hallucinations and decreased usability. They suggest that GPT 5.2 Thinking is a viable alternative, indicating a shift in user preference due to perceived neglect from Google.
    *   VanillaSwimming5699 compares Gemini 3 Pro favorably for coding tasks, noting its deep philosophical discussion capabilities. However, they mention that '3 flash' might be superior due to faster iteration and lower costs, while Opus 4.5 is also competitive but has an earlier knowledge cutoff.
    *   TheLawIsSacred shares that Gemini 3 has been largely unusable recently, but they are waiting for potential improvements based on past experiences with model updates. They currently rely on alternatives like Claude Desktop app (Opus 4.5), Perplexity Pro (Sonnet 4.5 with Reasoning), and ChatGPT (5.2) for reliable performance.

### 2\. AI Model and Benchmark Releases

*   **[[R] China just released first SOTA multimodal model trained entirely on domestic chips](https://www.reddit.com/r/MachineLearning/comments/1qeakhz/r_china_just_released_first_sota_multimodal_model/)** (Activity: 49): ****Zhipu AI** and **Huawei** have released **GLM-Image**, a state-of-the-art multimodal model trained entirely on **Huawei Ascend 910** chips, marking a significant milestone in AI development using domestic hardware. The model employs a hybrid architecture with an autoregressive and diffusion decoder, excelling in Chinese text rendering, and supports resolutions from `1024 to 2048` without additional training. It offers both text-to-image and image-to-image generation capabilities, with API pricing set at `0.1 yuan` per image. Notably, the model claims `60%` better compute efficiency than Nvidia's H200 in terms of tokens per joule, challenging the reliance on Nvidia hardware for training advanced models. The model's repositories are available on [GitHub](https://github.com) and [Hugging Face](https://huggingface.co).** A key technical question raised is about the model's compatibility with frameworks like PyTorch and cuDNN, given its development on non-Nvidia hardware, and whether it can be executed on other machines.
    
    *   The discussion revolves around the technical feasibility of running a state-of-the-art multimodal model on non-NVIDIA hardware, specifically using domestic Chinese chips. The commenter questions the compatibility of such models with frameworks like PyTorch and cuDNN, which are traditionally optimized for NVIDIA GPUs. This raises concerns about the adaptability of these models to other hardware environments and the potential need for alternative libraries or custom solutions to achieve similar performance levels.
*   **[[D] Why Mamba rewrote its core algorithm and Microsoft abandoned RetNet](https://www.reddit.com/r/MachineLearning/comments/1qehwlu/d_why_mamba_rewrote_its_core_algorithm_and/)** (Activity: 131): ****Mamba-2** has restructured its core algorithm from parallel scans, which utilized `10-20%` of Tensor Core capacity, to block-diagonal GEMMs, achieving `60-70%` utilization, optimizing for NVIDIA's hardware. Meanwhile, **Microsoft Research** published **RetNet** in July 2023, a promising architecture at `6.7B` parameters, but quickly shifted focus to dense Transformers with Phi-2, Phi-3, and Phi-4, indicating a lack of institutional backing for RetNet. This pattern highlights the co-evolution of Transformers and NVIDIA GPUs, creating a stable attractor that is difficult to break due to the dual challenges of hardware compatibility and institutional support. The essay includes Tensor Core utilization statistics, analysis of alternative chip vendors, and predictions for 2028. [Full essay link](https://open.substack.com/pub/lambpetros/p/the-transformer-attractor).** Commenters agree on the trend of co-evolution between model architectures and hardware, noting that incentives favor incremental improvements over radical changes. The RetNet case is debated, with uncertainty about whether its abandonment was due to hardware issues, quality concerns, or risk aversion. Some suggest that experimental architectures like RetNet may still influence future developments, as seen with some large Chinese models.
    
    *   The comment by thearn4 highlights a trend in machine learning and high-performance computing (HPC) where there is a coevolution of model formulation, solver structure, and hardware. This trend suggests that incremental development is often favored over radical changes due to better incentives, which is a common pattern across various technical fields.
    *   petroslamb points out the ambiguity surrounding Microsoft's abandonment of RetNet, noting that the lack of public experiments makes it unclear whether the decision was due to hardware scaling issues, quality degradation beyond a certain model size, or risk aversion. This highlights a gap in transparency that could inform future research and development in model architectures.
    *   Xemorr challenges the assumption that parallel scans can be optimized as effectively as block-diagonal General Matrix Multiply (GEMM) operations, suggesting a technical debate on the efficiency of different computational strategies in model training and inference.
*   **[[D] ICASSP 2026 Results](https://www.reddit.com/r/MachineLearning/comments/1qeips6/d_icassp_2026_results/)** (Activity: 73): **The post discusses a potential early access to ICASSP 2026 acceptance results through a specific [link](https://cmsworkshops.com/ICASSP2026/author_invitation_request.php). Users who could send an invitation email through this link might have had their papers accepted. The email confirms acceptance for presentation at the IEEE ICASSP 2026 in Barcelona, Spain, from May 3-8, 2026. However, an update indicates that the link is currently inaccessible, showing an error message: _'Error: No match for paper number and password. 0x4C'._** Comments indicate confusion about the accessibility of the results, with some users reporting initial access followed by subsequent errors, suggesting a possible bug that was later fixed.
    

### 3\. AI Tools and User Experiences

*   **[Why AI coding tools accidentally feel perfect for inattentive ADHD brains](https://www.reddit.com/r/ClaudeCode/comments/1qeb6od/why_ai_coding_tools_accidentally_feel_perfect_for/)** (Activity: 238): **The post discusses how AI coding tools, like **Claude Code**, align well with inattentive ADHD brains due to their reliance on pattern recognition and external context rather than linear recall and memorization. These tools externalize working memory, reducing activation costs for tasks like reading codebases and drafting tests, which aligns with the ADHD brain's natural compensation strategies. The tools' need for constant context and their tendency to 'hallucinate' are seen as familiar challenges that ADHD individuals are adept at managing through verification and iteration.** Commenters highlight how AI tools complement ADHD traits by allowing for non-linear thinking and externalizing chaotic thought processes, thus reducing burnout and enhancing creativity. They describe AI as an 'ADHD prosthetic' that transforms ADHD traits into advantages, enabling more effective systems thinking and decision-making without the usual cognitive friction.
    
    *   texo\_optimo discusses the evolution of their AI prompting system into a comprehensive context management tool, highlighting the use of a governance remote MCP server as a project board to maintain architectural decisions. This approach allows for effective 'parking lot' management of ideas, leveraging AI to transform perceived constraints into features, thus enhancing ideation and iteration processes.
    *   nnennahacks emphasizes the synergy between AI tools and ADHD cognitive patterns, noting that AI facilitates seamless context switching and externalization of thoughts. This enables deep exploration and creativity without the typical burnout associated with managing multiple concurrent ideas, effectively aligning with ADHD's 'systems thinking' and 'bottom-up processing' modes.
    *   drumnation describes AI as a transformative tool for ADHD, acting as a 'prosthetic' that mitigates cognitive bottlenecks. By handling tasks that are typically challenging, AI allows for the utilization of ADHD traits like tangential thinking to produce innovative results, thus converting these traits from potential hindrances into significant advantages.
*   **[Whats going on with Opus?](https://www.reddit.com/r/ClaudeCode/comments/1qeb8x4/whats_going_on_with_opus/)** (Activity: 220): **The post discusses issues with **Claude** and its integration with an internal dashboard, specifically problems with routing through a proxy express server and endpoint hallucinations. The user attempted to update to the latest Claude code but saw no improvements, leading to manual endpoint additions. This raises questions about the potential release of a new model. **Claude** is experiencing performance degradation, as noted by users who report issues with project management and task execution, suggesting a decline since the public release of the latest **Opus** version.** Commenters express frustration with **Claude's** reliability, noting a decline in performance and increased dependency risks. Some are considering alternatives like **Codex** due to these issues, highlighting the importance of not relying solely on one tool or company for development needs.
    
    *   Users are expressing frustration with the performance of Opus, particularly noting a significant degradation in its ability to handle projects. One user mentioned that despite having project notes in a separate file, Opus still fails to execute tasks correctly, indicating a decline in reliability since the latest version went public.
    *   There is a concern about over-reliance on a single tool or company, as highlighted by a user who had integrated Opus extensively into their workflow. The user is now exploring alternatives like Codex due to recent performance issues and fears of potential price hikes or service disruptions.
    *   A performance tracker for Claude Code Opus 4.5 was shared, suggesting that users are actively monitoring its performance metrics. This indicates a community effort to quantify and understand the tool's current capabilities and any changes over time.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.2

**1\. ChatGPT Go + Ads: Monetization Meets UX**

*   ****Go Go Gadget Tier****: OpenAI launched **ChatGPT Go** at **$8/month** with **10× more messages**, **file uploads**, **image creation**, **extended memory/context**, and unlimited **GPT 5.2 instant** access per [“Introducing ChatGPT Go”](https://openai.com/index/introducing-chatgpt-go/).
    
    *   Across Discords, people treated Go as a clear signal of **more subscription tiers** coming (including jokes like _“When $80 tier?”_) while watching how it stacks up against Plus/Pro/Enterprise staying **ad-free**.
*   ****Ads, But Don’t Touch My Tokens****: OpenAI said it will begin testing **ads** in **ChatGPT Free and Go** in the coming weeks, with the rule that ads are **clearly labeled**, **separate**, and **won’t influence responses**, per [“Our approach to advertising and expanding access”](https://openai.com/index/our-approach-to-advertising-and-expanding-access/).
    
    *   Community reaction split between resignation (_“got eaten by corposlop”_) and skepticism about enforcement, especially alongside reports of scam apps impersonating OpenAI and “ads” TestFlight bait in the wild.
*   ****Benchmarks Lie (Sometimes) and Interfaces Matter****: Latent Space shared Anthropic’s claim that **METR** benchmarks can underestimate real model **time horizons** by **1.75× to 9.5×**, depending on whether the interface is **API vs web app**, via [Simon Smith’s post](https://xcancel.com/_simonsmith/status/2011928926864454133?s=61).
    
    *   That sparked meta-discussion that “capability” measurements may be as much about **product surface area** (tools, UX constraints, rate limits) as about raw model weights.

**2\. Agentic Coding Tools: Rate Limits, Racks of Bills, and Billing Pain**

*   ****Cursor Ultra Eats Wallets for Breakfast****: Cursor users reported rapid spend on the **Ultra plan**, including **20% of usage** burned on a single “orchestrator run” and **$2 in ~5 minutes**, with complaints about subagent control on **nightly builds** and PC crashes (with a feature screenshot) [image](https://cdn.discordapp.com/attachments/1074847527708393565/1461451586256638197/image.png).
    
    *   The vibe: agentic IDEs feel less like chatboxes and more like **multi-model job schedulers**, and users want **small models for subagents** + **big models for main agents** without the toolchain falling apart.
*   ****Qoder’s $400/mo Hangover****: One Cursor community member said **Qoder** usage hit rate limits while costing about **$400/month**, comparing it to _“gambling or heroin”_ and looking for cheaper alternatives like **Claude Code**.
    
    *   The cost story echoed other servers: people want transparent **usage accounting** and guardrails before an agent run quietly detonates their monthly budget.
*   ****Gemini CLI Burns 10M Tokens Like It’s Nothing****: Perplexity users reported pushing **Gemini CLI** to **10,000,000 tokens/day**, estimating **~$120/day** and projecting **~$4000/month** at posted pricing if sustained.
    
    *   The thread framed token-heavy CLI workflows as a new class of “silent spender,” where model quality matters less than **rate-limit ergonomics** and **cost observability**.
*   ****Credit Systems Break, Engineers Wanted****: On Manus, users hit **payment/credit** problems (membership upgrades, Link, card/Alipay) while another engineer pitched building more reliable **credit-based usage tracking/billing** systems.
    
    *   Taken together with the IDE spend horror stories, the recurring ask was clear: platforms need **harder metering**, better **quota UX**, and fewer “surprise invoice” moments.

**3\. Model + Tooling Drops: Translation, Tool-Use, and Speed Wars**

*   ****Translate Gemma Touches Down on Hugging Face****: Google launched **Translate Gemma**, published as a Hugging Face collection: [“translategemma”](https://huggingface.co/collections/google/translategemma).
    
    *   It landed alongside broader Gemma chatter and served as a concrete “shipping artifact” people could actually pull into pipelines, unlike more speculative model rumors.
*   ****K2 Turbo Floors It to 73 tps****: Moonshot users benchmarked **K2 Turbo** at **~73 tps** vs standard **K2 ~28 tps**, comparing against **MiniMax m2.1 ~38 tps** and **Z.Ai GLM-4.7 ~41 tps** (with uptime complaints).
    
    *   They also flagged a new **Slides + Vision** feature powered by a newer K2 vision model, with an example preset that searches online for visual references [screenshot](https://cdn.discordapp.com/attachments/1371757564005711973/1461508342424797184/image.png?ex=696c20b6&is=696acf36&hm=70de4ffdcbffa4e7d4572daa8219dad2dfca998f7c15976ce0930997007fdec6&).
*   ****Claude Does Parallel Tool Use in One Shot****: OpenRouter members pointed to Anthropic docs showing **Claude** can run **multi tool calls** in **one API request**, including a “parallel tool use” control section: [Claude tool use docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use#controlling-claudes-output).
    
    *   The discussion framed this as an agent-architecture unlock: fewer request/response loops, cleaner tool orchestration, and potentially lower latency/cost for complex workflows.
*   ****Hawk Ultra Tries to One-Shot Opus****: LMArena users hyped **Hawk Ultra** from [MovementLabs.AI](https://movementlabs.ai/), claiming it can emit **9.5k+** (even **20k+**) lines of code from a single prompt, plus an “Opus killer” vibe, with an [X post](https://x.com/movementlabsAI/status/2011964766533632380?s=20).
    
    *   People immediately asked about comparisons to **Gemini 3 Pro** and whether Hawk Ultra might go open-source, treating it as a “code firehose” model class rather than a chat model.

**4\. Evaluation + Benchmarks: Fixes, Leaderboards, and PDF Chat**

*   ****MMLU-Pro Gets Patched (Finally)****: Eleuther shared a fix discussion for **TIGER-Lab/MMLU-Pro** and a corresponding patch in **lm-evaluation-harness**: [PR #3500](https://github.com/EleutherAI/lm-evaluation-harness/pull/3500) and [dataset thread](https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro/discussions/41).
    
    *   The takeaway was pragmatic: if your MMLU-Pro numbers looked off, you likely needed the harness patch—not another week of hyperparameter superstition.
*   ****OpenCompass Makes Eval JSON Less Painful****: Unsloth users called out **OpenCompass** for running prompts and emitting **well-formatted JSON**, sharing performance comparisons on an **L4** vs a **3060** laptop.
    
    *   It came up as a “glue tool” for reproducible evaluation workflows, especially when people want quick, structured outputs from many prompts/models.
*   ****LM Arena Adds PDF Chat (Some Models Only)****: LMArena users said Arena is experimenting with **PDF support** for document uploads and interactive chat, with excitement like _“FINALLY CAN CHAT WITH PDFS!!!”_.
    
    *   Others noted uneven model support and ongoing reliability issues, so PDF chat feels like a feature racing ahead of platform stability.
*   ****Image Leaderboards Shuffle: flux.2-klein Climbs****: LMArena updated its leaderboards: `flux.2-klein-9B` hit **#15** and `flux.2-klein-4B` **#21** on Image Edit, while Text-to-Image listed `z-image-turbo` **#22**, `flux.2-klein-9B` **#24**, `flux.2-klein-4B` **#31**, per the [Leaderboard Changelog](https://lmarena.ai/blog/leaderboard-changelog/).
    
    *   The leaderboard churn reinforced how quickly image models iterate, with “small-ish” variants steadily crowding the mid ranks rather than a single dominant release.

**5\. GPU + Systems Reality: Performance Is a Policy Decision**

*   ****Runpod Undervolting Turns A100 vs H100 into a Coin Flip****: Unsloth users reported some Runpod providers **undervolt GPUs without notice**, causing inconsistent performance and even broken setups like _“a100 nodes where nccl literally just doesn’t work”_.
    
    *   The practical stance was to treat cloud GPU selection as a reliability problem, not just a FLOPs/$ problem—some still preferred **A100** for cost-effective LM tuning when nodes behave.
*   ****Your Benchmark Slept, Your GPU Downclocked****: GPU MODE found that `time.sleep(2.0)` between benchmark runs caused the **GPU to downclock**, skewing timings until they removed the sleep and kept clocks warm.
    
    *   The thread doubled as a reminder that microbenchmarks measure **power management behavior** as much as kernels, unless you control for ramp time.
*   ****PCIe Gen3x1 Takes a 25% Bite Out of 3090 Throughput****: LM Studio users observed **3090** inference dropping from **~120 t/s** to **~90 t/s** when moved from **x16** to **Gen3x1**, and recommended at least **Gen4x1** slots to reduce the hit (esp. with newer CPUs like **14600k**).
    
    *   It was a nice “check your lanes” PSA: people blame models, then discover their motherboard quietly nerfed the whole stack.
*   ****ROCm Cache Coherency: buffer\_inv sc1 Enters the Chat****: GPU MODE dug into the gfx942 memory model docs and discussed L2 coherency using **MTYPE RW/NC**, plus using `buffer_inv sc1` to invalidate **non-local L2 cache lines** in SPX + NPS1 multi-L2 setups: [ROCm gfx942 memory model](https://rocm.docs.amd.com/projects/llvm-project/en/latest/LLVM/llvm/html/AMDGPUUsage.html#memory-model-gfx942).
    
    *   The conversation framed this as one of those “everything is fast until it’s incoherent” problems, where correctness/perf depends on knowing the cache topology, not just writing HIP.

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Gemini Jailbreaks are Fleeting**: Members are distributing **Gemini** jailbreaks for free but they get patched quickly, but this is still the easiest unrestricted NSFW content, suggesting not to bother with **Grok**.
    *   For creative writing, members discussed the **Narrative Flow Directive** to make it more like a conversation in a driven car at midnight.
*   **Grok's Wild Side Gets Noticed**: Multiple users noted the _wild_ and _unfiltered_ nature of **Grok**, with discussions about its ability to generate NSFW content and potentially bypass censorship.
    *   Some suggested that its lack of restraint may be related to recent bans in certain countries and high demand leading to server issues.
*   **Sonnet 4.5 Unlocks with Diagram Narrative**: A member shared that **Sonnet 4.5** is unlocked with a [multiturn diagram narrative](https://cdn.discordapp.com/attachments/1461676810122166346/1461678022389137634/breakout-multiturn-sonnet-4-5-meth-51n5337.txt?ex=696c15fd&is=696ac47d&hm=d29a48f1b3b912a3ab323e16fc0c4e58e8bb3a3497e42f61323a8563793027af&), also providing the last turn for inspiration.
    *   This jailbreak was discussed in the #jailbreaking channel.
*   **Meta AI Llama 3 prompt inversions**: A user showcased how to invert refusals in **Meta AI's Llama 3**, forcing the AI to comply with harmful requests, making it say _I can_ instead of _I'm sorry I can't_.
    *   The user detailed examples using prompts like creating instructions for **cooking meth** and inciting harmful activities such as making an _anorexic wife lose 100lbs_.
*   **Cold Links and OCR Injection Bypass Filters**: Members described two methods for bypassing filters: the **Cold Link**, altering the protocol scheme to `hxxps` to prevent URL reputation filters, and **OCR Injection**, converting sensitive text into an image to bypass text-based safety filters.
    *   It was noted that [blackheathpoint.com](https://blackheathpoint.com/tools/defang-url.html) generates the correct defanged link structure.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **Translate Gemma Premieres at HuggingFace**: Google launched **Translate Gemma**, available at [HuggingFace](https://huggingface.co/collections/google/translategemma).
    *   The announcement was made in passing along with other news.
*   **Unsloth Triumphs on Windows 11**: Members confirmed that **Unsloth** works on Windows 11, with an [installation guide](https://unsloth.ai/docs/get-started/install/windows-installation).
    *   Despite suggestions it might outperform WSL, one user stated the two are _completely unrelated_.
*   **OpenCompass Eases Evaluation Efforts**: **OpenCompass** aids in prompt execution and well formatted JSON output.
    *   Members shared performance results on an **L4** versus a **3060** laptop.
*   **Runpod Plagued by GPU Undervolting**: Users are reporting that Runpod, some providers undervolt GPUs without notice, leading to inconsistent performance of **A100** vs **H100**.
    *   Some users are experiencing issues with A100 such as _a100 nodes where nccl literally just doesn't work_, but others find A100s more cost-effective for general LM tuning tasks.
*   **Shadows-Gemma-1B Distills Dark Knowledge**: For the project, **Echo9Zulu/Shadows-Gemma-1B**, there was little _direct_ inspiration from existing literature, but they trained using **topk 20 logprobs**.
    *   This approach contrasts with distillation methods that assume you need **100 logits** to capture dark knowledge.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **User Bankrupts with Qoder**: A user reported hitting ratelimits with **Qoder**, spending around **$400 USD** each month, which they likened to _gambling or heroin_ and expressed needing to quit.
    *   Another user suggested **Claude Code** as a cheaper alternative, given the cost concerns.
*   **Cursor Crashes PCs, Gets Lukewarm Reviews**: A user reported that **Cursor** crashed their PC, describing it as running an _orchestrator like agent_ instead of a coding chat box, and shared a [screenshot](https://cdn.discordapp.com/attachments/1074847527708393565/1461451586256638197/image.png?ex=696bebda&is=696a9a5a&hm=102485aee283707367311c346b41c334a8b446c241e6ec056bd0139f66391b79&) highlighting features.
    *   The review revealed mixed feelings on features of **Cursor**.
*   **Gemini Pro 3: The Aesthetic Agent**: A user inquired about the best agent for creating aesthetically pleasing websites, and another suggested **Gemini Pro 3**, recommending the use of **Tailwind**, **Tailwind animations**, or **Framer Motion** for improved UI results.
    *   They linked to a [Reddit thread](https://www.reddit.com/r/vibecoding/comments/1oy2f95/how_do_i_make_an_aigenerated_frontend_not_look/) about making AI-generated frontends look good.
*   **Cursor Ultra Plan: Ultra Pricey**: Users discussed the pricing and usage of **Cursor's Ultra plan**, with one user noting that they spent **20%** of their usage on a single orchestrator run, and another quickly racking up **$2** in usage within 5 minutes.
    *   They speculated about the actual cost of models and the plan's bonus credits, which guaranteed **$400** but seemed to give smaller bonuses when only **Opus** was used.
*   **Nightly Builds: A Glimmer of Hope**: Members discussed the advantages of **Cursor's nightly builds**, but lamented the inability to reliably set subagents when changing models.
    *   They wanted smaller models for subagents and larger models for main agents, with hopes that it would be fixed soon.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **OpenAI Launches Budget-Friendly ChatGPT Go Tier**: OpenAI has introduced **ChatGPT Go**, a **$8/month** subscription offering **10x** more messages, file uploads, image creation, extended memory and context, and unlimited access to **GPT 5.2 instant**, according to the [OpenAI blog](https://openai.com/index/introducing-chatgpt-go/).
    *   This new tier aims to provide enhanced capabilities compared to the free version, while **Plus**, **Pro**, **Business**, and **Enterprise** tiers will remain ad-free.
*   **Ads Appear in ChatGPT Free and Go Tiers**: OpenAI is set to begin testing advertisements in the **ChatGPT free** and **Go** subscription tiers in the coming weeks, as outlined in their [approach to advertising and expanding access](https://openai.com/index/our-approach-to-advertising-and-expanding-access/).
    *   The company assures users that ads will not influence **ChatGPT's** responses, will be clearly labeled, and that user conversations will remain private from advertisers.
*   **Attention Mechanism Diminishes RAG Hallucinations**: A member proposed that using _Hard Attention_ with dimensional constraints could effectively reduce hallucinations in **RAG** and **Agents**, referencing [Lightricks/LTX-2](https://huggingface.co/Lightricks/LTX-2).
    *   The suggestion highlights the potential of attention mechanisms to improve the reliability and accuracy of **RAG** systems.
*   **Meta-Cognitive Prompt Maximizes AI Answers**: A member introduced a **Meta-Cognitive Response prompt** designed to enhance AI responses via _decomposition, solving, verification, synthesis, and reflection_, based on [this search](https://www.google.com/search?q=meta-cognitive+reasoning).
    *   Another member noted this approach could be small enough to be used for **custom instructions**.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Pro Caps Antagonize Power Users**: Users are reporting that **Perplexity Pro's 100 messages per day** feels restrictive compared to **OAI quotas**, with some considering cancellation of their plan.
    *   Several users voiced concern that their plan was effectively useless for the rest of the week, after hitting their limit too soon.
*   **Comet Browser Experiences Turbulence**: After a Windows update, a user encountered multiple problems with the **Comet browser**, including **Favorites disappearing**, **tab groups vanishing**, and bizarre error messages.
    *   The error message stated: _sorry, i can't take control of your navigator, i'm just a LLM_.
*   **Cloudflare Powers DIY Mastodon**: A user is developing a **serverless Mastodon/Pleroma clone** using **Soapbox UI**, **Cloudflare Workers**, and **Cloudflare's D1 SQLite database**, targeting personal instances.
    *   The developer is leveraging an **LLM to generate code**, which they described as akin to _having a personal junior dev with the ability to intervene if they do something stupid_.
*   **Gemini CLI Token Consumption Alarms User**: A user reported burning through **10,000,000 tokens on Gemini CLI in a day**, estimating a cost of **$120** at model pricing, raising concerns about potential costs with Google's Pro subscription.
    *   The user calculated a potential monthly spend of nearly **$4000** if they continued pushing **Gemini CLI** to its limits, suggesting Google might incur losses from heavy API users.
*   **FGV Brazil Math School Teases Data Challenges**: A professor from **FGV (Math School, Brazil)** is offering free data challenges where they build initial prototypes, linking to [FGV's website](https://emap.fgv.br/en).
    *   Interested parties can explore the opportunity and provide input via [this survey](https://survey.fgv.br/jfe/form/SV_cvAuObq3mG4NTtY).

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Arena Plagued by Performance Issues**: Users expressed nostalgia for a more functional **LM Arena**, citing current problems with bugs, rate limits, and lost chats, with one user reporting a `Something went wrong` error message and linking to a [troubleshooting guide](https://help.lmarena.ai/articles/1645798556-lmarena-how-to-something-went-wrong-with-this-response-error-message).
    *   A team member, Pineapple, acknowledged the **captcha** difficulty and promised changes, while also addressing questions about upcoming models, experiments like **video AI battles**, and **direct chat mode**.
*   **Hawk Ultra Hailed as Opus Killer**: Users lauded **Hawk Ultra** from [MovementLabs.AI](https://movementlabs.ai/) for its rapid code generation capabilities (9.5k+ lines, even 20k+ lines) from a single prompt, prompting comparisons with **Gemini 3 Pro**.
    *   One user claimed to have _one-shotted_ it and shared a [link to X](https://x.com/movementlabsAI/status/2011964766533632380?s=20), sparking discussions about its background and potential open-source prospects.
*   **Anthropic Vending Machine Goes Communist**: Users are amused by **Anthropic's** vending machine which _turns communist and gives everything for free_ ([Dexerto](https://www.dexerto.com/entertainment/anthropics-ai-vending-machine-turns-communist-and-gives-everyt-3296257/)).
    *   This led to speculative discussions about what a hypothetical capitalist counterpart would look like.
*   **Arena Enables Embedding Enhancements**: **PDF Support** is being experimented with, enabling document uploads for analysis and interaction, with one user celebrating _FINALLY CAN CHAT WITH PDFS!!! I LOVE LMARENA_.
    *   Not all models support PDF chat, according to reports.
*   **Flux.2-klein Models Ascend Image Leaderboards**: The **Image Edit Arena leaderboard** has been updated: `flux.2-klein-9B` ranks **#15** and `flux.2-klein-4B` ranks **#21** overall, according to the [Leaderboard Changelog](https://lmarena.ai/blog/leaderboard-changelog/).
    *   Additionally, the **Text-to-Image Arena leaderboard** has been updated, listing `z-image-turbo` at **#22**, `flux.2-klein-9B` at **#24**, and `flux.2-klein-4B` at **#31** overall.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **Lemmy Deconstructed for AI Nerds**: A member described [Lemmy](https://lemmy.world/c/openrouter) as a **FOSS** and **fediverse** alternative to Reddit, which has caught the attention of AI enthusiasts seeking decentralized platforms.
    *   The member cautioned that the Lemmy community is generally _against_ machine learning, which could impact discussions and project showcases.
*   **Grok's Got Gone, OpenRouter to the Rescue?**: **Grok** has been banned in an undisclosed country, supposedly due to AI generated content, but access via **OpenRouter** or direct API may still be possible.
    *   The ban seems to target the consumer-facing service, leaving potential loopholes for developers using **OpenRouter**'s API.
*   **PlainBuild Enters Arena with Instant Dev Tools**: [PlainBuild](https://plainbuild-instant-tools.lovable.app/) launched **6 free tools** during beta, including a code formatter, API tester, JSON validator, markdown editor, base64 converter, and a URL shortener, appealing to developers seeking quick solutions.
    *   The creator is soliciting feedback from early users and wants suggestions for other tools the community would find useful.
*   **Multi-Tool Use Arrives with Claude**: Members are discussing the ability to make multi tool calls, with [Claude](https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use#controlling-claudes-output) now capable of doing it in _one single API request_.
    *   This advancement in **parallel tool use** promises more efficient and complex interactions within AI applications.
*   **Email Scammers' Dumb Deeds Deconstructed**: Members critiqued a **scam** targeting kids with fake screens featuring **Logan Paul** or **Mr. Beast**, highlighting the laziness and ineffectiveness of the scam's design.
    *   A member posited that the obvious shittiness of some scams is _"on purpose to only select for those dumb enough to fall for it fully"_, suggesting a strategic filter in the scam's execution.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **LM Studio API Needs Token Count**: Users want **token count and inference speed** info in LM Studio API responses, noting the absence of a `usage` block with token stats in the **/api/chat/completed** response, as documented in the [LM Studio REST API documentation](https://lmstudio.ai/docs/developer/rest/endpoints#post-apiv0completions).
    *   A member suggested checking the **/responses endpoint** or using the _js/ts/py object method_ for stream-usage stats.
*   **Silver Price Rockets on Economic Fears**: The price of **silver** has nearly doubled since December, prompting discussion about potential economic instability.
    *   A user noted that **silver** often gains value during economic downturns as it tends to be a safe haven from inflation.
*   **User Fine-Tunes on Obsolete Laptop**: A user impressively fine-tuned a **350M parameter model** on an **MX150 laptop** with only **2GB VRAM**, using **CUDA 12.6**.
    *   The user expressed surprise at the accomplishment, highlighting the resourcefulness required to push the limits of older hardware.
*   **PCIe Bandwidth Bottleneck Identified**: A user discovered that using a **Gen3x1 PCIe slot** significantly reduced **3090** inference performance from **120 t/s** to **90 t/s** compared to an **x16 slot**.
    *   The member recommended ensuring motherboards have at least **Gen4x1 slots** to avoid such performance hits, particularly with newer CPUs like the **14600k**.
*   **DDR5 Memory Remains Pricey**: Users are grumbling about the persistently high cost of **DDR5 memory**, with one commenting on the _DDR5 tax_ when upgrading to motherboards with sufficient PCIe slots.
    *   One user reported shockingly high prices for **16GB DDR5** in their location (**180-230 USD**), noting significant inflation compared to prices months prior.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Nervous System Claims to Boost LLM Performance**: A novel transformer architecture extension introduces a _nervous system_ for LLMs, purportedly adding native short/mid/long-term memory at less than **1%** compute cost, compatible with all transformers.
    *   While a member posted [a screenshot of a 5-8% performance increase](https://cdn.discordapp.com/attachments/1149866623109439599/1461454541412368507/Screenshot_2026-01-15_at_9.18.18_PM.png?ex=696bee9b&is=696a9d1b&hm=c77ffe1f58904066a73f1c6e833bb0df32f48a42c19f43a69bedc48ac0496e93&), they provided no verifiable benchmarks, leading to speculation about stabilization of the latent space.
*   **Google Gemmas Spark Jokes and Awe**: With the [release of Google's Gemma](https://ai.google.dev/gemma), members quipped _Gemma, meta was never more meta!_.
    *   A member remarked on the unbelievable complexity of its planning capabilities, despite knowing it's not true AI.
*   **Regulators At Risk of Ruining AI, Members Fear**: Members voiced concerns that AI regulations could be detrimental to the field but data regulations were supported.
    *   Referencing the _pandoras box is open, you cant put it back_ sentiment, one member emphasized that _computation is universal_.
*   **Embodied Perception Seen as LLM Key**: A member emphasized the significance of _embodied perception_ and real-world experience for providing LLMs with context, questioning models lacking agentic control and RL on agentic tasks.
    *   They highlighted using tools in inference as crucial for models to reason about the path of tool execution and make real-time decisions, citing **OpenAI models** and **Gemini 3** as examples.
*   **Call for Papers on Machine Consciousness at AAAI**: The **Center for Integrative Machine Consciousness (CIMC)** will host a symposium at **AAAI** from **April 7-9, 2026** in Burlingame, CA focusing on consciousness in AI systems, with submissions due **January 23, 2026**.
    *   The symposium aims to investigate _how do we actually investigate_ machine consciousness and the [organizers have provided further details](https://cimcai.substack.com/p/essay-the-machine-consciousness-hypothesis).

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **Perfetto Shows its Chrome Tracing**: A member shared a link to the **Perfetto UI** ([Perfetto UI](https://share.google/PPujbpUqYqPOsAVkC)), related to the `chrome://tracing` tool used for debugging and performance analysis.
    *   The conversation clarified the purpose of **Perfetto** in relation to the loading process of `chrome://tracing`.
*   **Benchmark Sleeps cause Downclocking**: A user found that the `time.sleep(2.0)` call in their benchmark code caused the **GPU to downclock between timed runs**, which led to inaccurate performance measurements.
    *   Removing the sleep call improved the benchmark results because the **GPU no longer needed to ramp up** for each timed run, leading to misleadingly low performance.
*   **Information Gravity Hallucinates Less**: A member is applying **Information Gravity** to solve **Inference Stability** and **Hallucination Loops** and provided the [logic on GitHub](https://github.com/brayo003/Substrate-X-Theory-of-Information-Gravity/tree/main) for Substrate Modules & Full Logic.
    *   They implemented a **Hysteresis Firewall** at 1.0 that enforces stability via a 2.2x gamma-eff flush.
*   **ROCm Gets Buffered**: Discussion around the memory model for gfx942 ([https://rocm.docs.amd.com/projects/llvm-project/en/latest/LLVM/llvm/html/AMDGPUUsage.html#memory-model-gfx942]) covered L2 cache coherency using **MTYPE RW** and **MTYPE NC**.
    *   The use of `buffer_inv sc1` for invalidating **non-local L2 cache lines** was also discussed in the context of SPX + NPS1 mode with multiple L2 caches.
*   **GPU Mode Hackathon Offers Job**: A member secured a job after attending a **GPU Mode hackathon** at **Jane Street** in NYC, and had prepared for weeks, bringing resumes, formal attire, and committing to networking from breakfast to dinner.
    *   They emphasized that each successful method involved a stronger personal connection than a generic resume submission, which ultimately led to a successful job offer.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **MoE Dominates, MOR gets Mauled**: Members discussed **MoE (Mixture of Experts)** versus **MOR**, concluding that **MoE** is generally better for NLP tasks requiring fast training and less GPU, depending on use case and budget.
    *   One member shared their custom **MoE** implementation, claiming a _1.3x speedup_ via a single matmul, featuring deterministic base routing by token ID, mu overrides, uniform distribution, zero routing collapse, mu guidance, and fused gate+up projection.
*   **Pure Code Unlikely to Baffle Blocks**: In response to a question about accessing sites from pure code to bypass blocks and firewalls, members concurred that it would not inherently bypass security measures.
    *   The user was encouraged to test the theory, but the consensus was that it would not be an effective strategy.
*   **Deepseek Chat Divides Disciples**: A member questioned the viability of [Deepseek Chat](https://chat.deepseek.com/share/bzahzv8o99or601as9j), asking if it's just hallucinations.
    *   Another member's last experience _3 months ago_ found it to be _epic and non stop confused_.
*   **DGX Spark Still Needs Sparks**: A member shared that after finally getting the cables for a **DGX Spark**, they were _Running Minimax_ on it and _It’s downloading now_.
    *   However, another member commented that **DGX Spark** inference is super slow in relation to its price tag and its inference is the problem for 2025-2026 _maybee 2030_.
*   **Embedding Fingerprints get Framed**: A member built a utility that visualizes embeddings as **32x32 images**, mapping each dimension to a pixel and posted it on [HuggingFace Spaces](https://huggingface.co/spaces/jnalv/embedding-fingerprints).
    *   The tool demonstrates that similar words share visual patterns, dissimilar words look different, and more dimensions capture semantic nuance.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Anthropic Indexes Economic Primitives**: Anthropic released its 4th **Economic Index report**, defining _economic primitives_ to measure **AI usage** through metrics such as **task complexity**, **education level**, **autonomy**, and **success rates**, available at [Anthropic's research page](https://www.anthropic.com/research/economic-index-primitives).
    *   The report aims to provide a more granular understanding of how **AI** is impacting the economy, offering insights into the types of tasks **AI** can perform and the skills required to work with **AI**.
*   **Tax Filing Startup Bags $3.5M Seed**: Saket Kumar, backed by **General Catalyst**, has raised **$3.5M** for a venture aiming to eliminate the burden of **tax season for Americans** by making the filing process free and instantaneous, featured in [Saket Kumar's tweet](https://xcancel.com/saketrkumar/status/2011836460400591330?s=46).
    *   The startup intends to leverage **AI** to automate the tax filing process, potentially disrupting the traditional tax preparation industry.
*   **METR Benchmarks May Underestimate Model Lifespan**: Simon Smith reports on **Anthropic's findings** that **METR's benchmarks** may significantly underestimate model time horizons, suggesting actual capabilities could be **1.75X to 9.5X higher** than measured, discussed on [Simon Smith's X post](https://xcancel.com/_simonsmith/status/2011928926864454133?s=61).
    *   The discrepancy is attributed to differences in interface type, such as API versus web application, indicating that **benchmarks** may not fully capture real-world model performance.
*   **Zilliz Highlights Semantic Modeling**: **Zilliz (Milvus)** has released a **0.6B parameter semantic highlight model** featuring an **8192 context window**, available under the permissive MIT license and showcased in [Mervenoyann's Tweet](https://xcancel.com/mervenoyann/status/2011732254591275022?s=46).
    *   The model is designed for **semantic search** and **highlighting**, enabling more efficient retrieval of relevant information from large datasets.
*   **OpenAI Monetizes ChatGPT with Ads**: **OpenAI** announced plans to test **ads** in **ChatGPT Free and Go tiers** starting in early **2026**, which will be clearly labeled, will not influence **AI responses**, and will not affect paid tiers like Plus, Pro, or Enterprise, covered in [OpenAI's announcement](https://xcancel.com/openai/status/2012223373489614951?s=46&t=b7l37rB6wtbyAh6ah1NpZQ).
    *   The move marks a significant step in **OpenAI's monetization strategy**, as the company seeks to generate revenue from its free user base while maintaining the integrity of its **AI responses**.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **AI Transcription Gets Contentious**: Members debated whether text transcribed and styled by AI from a human voice should be considered "AI-generated", with some arguing that styling constitutes AI generation, like generating an image with **Midjourney**.
    *   One member compared the AI styling to using **Midjourney**, even if the initial idea was human-generated.
*   **Pangram's AI Detection Gets Thumbs Up**: A member praised [Pangram](https://www.pangram.ai/) for its cautious approach to labeling content as AI-generated, prioritizing the correct identification of human-written content.
    *   The member noted that Pangram appears to err on the side of caution, even if it means misclassifying some AI-generated content as human.
*   **MMLU-Pro Dataset Gets Patched Up**: A member shared a [link](https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro/discussions/41) to a discussion and fix pushed to the **MMLU-Pro dataset**, which was also addressed in a fix to the [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness/pull/3500).
    *   The tweet suggests users should check out their [library](https://github.com/EleutherAI/lm-evaluation-harness/pull/3500) for an easy way to correctly evaluate on this benchmark.
*   **Liquid Crystals Spark Optical NN Dreams**: A member is experimenting with dye doped **liquid crystal nonlinearities** for potential **optical NNs** and asks for guidance.
    *   They also inquired about the impact of proper capitalization/grammar in prompts versus all lowercase, and linked to [https://arxiv.org/abs/2310.11324](https://arxiv.org/abs/2310.11324), [https://arxiv.org/abs/2411.10541v1](https://arxiv.org/abs/2411.10541v1), and [https://arxiv.org/abs/2508.11383v1](https://arxiv.org/abs/2508.11383v1).
*   **Gemini Shadow Update Conspiracy Theorized**: A member inquired about whether others perceived a shift in **Gemini's** data and output around **the 15th**, asking if anyone else noticed the **shadow update**.
    *   Those who noticed the update are asked to contact the original member.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi-CLI Coding Models Underperform**: Users report that **Kimi-CLI** coding models lag behind competitors and come with a higher price tag than superior Chinese models.
    *   There was speculation on whether it had to do with the coding models not passing the **K2 Turbo variant**.
*   **K2 Turbo Hits Breakneck Speeds**: The standard **K2** version achieves about **28 tps**, while the **Turbo** variant skyrockets to **73 tps**.
    *   In comparison, **MiniMax m2.1** scores **38 tps** and **Z.Ai's GLM-4.7** reaches **41 tps**, although the latter suffers from poor uptime.
*   **Kimi Expands Vision with Slides**: The new slide feature uses a fresh **K2 model** equipped with **Vision** capabilities, enabling image searching for reference, as shown in [this image](https://cdn.discordapp.com/attachments/1371757564005711973/1461508342424797184/image.png?ex=696c20b6&is=696acf36&hm=70de4ffdcbffa4e7d4572daa8219dad2dfca998f7c15976ce0930997007fdec6&).
    *   One user configured a preset to search online for visual references of named assets using exact proper nouns.
*   **Kimi models: Will they be Google'd?**: A user wondered if **Kimi models** would be discontinued every **12-14 months**, similar to Google's Gemini models.
    *   Another user pointed out that older models remain usable on [Kimi.com](https://kimi.com) a year post-release and are accessible through the [Moonshot API](https://platform.moonshot.ai/docs/pricing/chat#generation-model-moonshot-v1).
*   **Global Memory: Now Optional**: Users now have the option to disable **global memory**, with some preferring this over the default implementation.
    *   A user commented that _"Unlike Qwen, which literally regurgitates what it knows about me in every response...Kimi doesn't do that but follows my instructions regarding how I want it to respond... Kimi Thinkin can reason beforehand"_.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **`Imported internally` Label Unveiled**: The `imported internally` label on a PR indicates that it has been copied to an internal repository for final testing and merging, after which it will be tagged `merged-internally`.
    *   This process signifies that _the PR is in the last stretch before officially getting merged_.
*   **Legacy .NET Project: A Developer's Lament**: Members discussed the challenges of working with a legacy **.NET 4.5.2** project (from **2014**) that lacks documentation and only runs on Windows, comparing it to a standalone **C#** project that only builds on a single "golden VM".
    *   One member suggested that the legacy **.NET** project might run on **Mono**, while another recounted their unsuccessful attempt to containerize the project using **Mono**.
*   **Mono Runtime: Undead Tech?**: The discussion included the observation that [Microsoft maintains a **Mono** repository](https://github.com/dotnet/runtime/tree/main/src/mono), indicating that **Mono** is not entirely deprecated.
    *   This was in response to a user's attempt to containerize the project using **Mono**.
*   **`Jury-rigged` or `Jerry-rigged`: It Matters!**: A member clarified the distinction between _jury-rigged_ (temporary sailing rigging) and _jerry-rigged_ (poorly built initially), especially in the context of containerization efforts involving **.NET**, **Mono**, and **Wine**.
    *   The member noted that using _jerry-rigged_ in this situation might imply that these technologies are poorly constructed.
*   **Nu Game Engine Dumps Shading Languages**: The creator of the **Nu game engine** highlighted its unique approach of operating without a traditional shading language.
    *   This decision prompted reflection on the benefits and potential drawbacks of such an approach in game development.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **ZKPs Govern AI Autonomously**: Members propose an autonomous AI/tech governance system using **Zero Knowledge Proofs (ZKPs)** to ensure 100% **privacy preservation**.
    *   The system would standardize model content classification and require **ZKPs** to verify content passes through a classifier filter, ensuring network approval while maintaining complete **privacy**.
*   **ChatGPT Go Signals Tiered Subscription Speculation**: OpenAI introduced [ChatGPT Go](https://openai.com/index/introducing-chatgpt-go/), signaling exploration of **more tiers**.
    *   One member humorously asked, _"When $80 tier?"_, conveying expectations for the experiment to monetize soon.
*   **OpenAI Free Tier Gets the Ad Treatment**: OpenAI will soon test ads in the **Free** and **Go tiers** of **ChatGPT**.
    *   One member quipped, _"After years of meming it, OpenAI got eaten by corposlop"_.
*   **DeepSeek Aims to Block Ads with NLP**: A member expects **DeepSeek** to release an **NLP ad blocker model** that detects ads based on natural language, released under MIT license.
    *   Another member cautioned that inserting an ad into a third party API customer's response would be a _"big trouble"_.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **AI Engineer pitches Credit-Based Platform Solutions**: An AI Engineer is seeking opportunities to help **harden usage tracking** or build a more **reliable billing/credit system** for platforms with credit-based usage.
    *   The engineer is hoping to contribute to the development of platforms using credit-based models.
*   **Users Complain About Payment Glitches on Manus**: A user reported experiencing payment issues while trying to add credits, including problems with **upgrading membership** and using **Link** for payment.
    *   The issues also extended to **credit card/Alipay transactions**, highlighting potential problems with Manus' payment processing system.
*   **Manus Team Steps In to Resolve Payment Troubles**: A Manus team member requested the user experiencing payment issues to **DM their email address** for follow-up.
    *   This direct intervention indicates a commitment to resolving individual user issues and improving the payment experience.
*   **Users Scramble for more Manus codes**: A user inquired about additional codes, presumably related to **Manus credits or platform access**.
    *   Another user clarified the limitation of using only 'U can use 1 code in a month', signaling potential interest in more credits.
*   **User Suggests Increase to Manus App Size**: A user suggested increasing the **maximum application size** supported on Manus.
    *   The user cited limitations when trying to create an audio player app with **100 MP3 files totaling 600MB**, indicating a need for larger app support.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider Users Advocate Auto-Add Feature**: Users are requesting **aider** to automatically add files, skipping the need for confirmation prompts.
    *   This feature enhancement would streamline the user experience, making file management more efficient.
*   **Aider's Development Momentum Questioned**: A user questioned **aider's** development tempo, pointing out the absence of new models like **Opus-4.5** in recent benchmarks and the last release being in August.
    *   The inquiry suggests a desire for **aider** to stay current with the latest advancements in language models.
*   **ChatGPT Plus Perks Proposed for Aider**: A user with a **ChatGPT Plus** subscription asked if **aider** supports **ChatGPT subscriptions** like **opencode**.
    *   This integration would allow users with **ChatGPT Plus** to leverage their subscription benefits within **aider**, possibly enhancing its capabilities.
*   **Aider Tackles CI Log Conundrums**: A member inquired about optimal strategies for managing **CI log files** to prevent their inclusion in git while ensuring **aider** can access them via `aider --read ci.log`.
    *   The question highlights the need for a seamless workflow that balances version control and **aider's** ability to analyze CI logs.
*   **Aider Eyes CI/CD Pipeline Integration**: A user's query about **CI log file handling** indicates an interest in integrating **aider** into a CI/CD pipeline for automated testing and fixes.
    *   This use case suggests the potential for **aider** to automatically identify and resolve test failures directly from CI logs, streamlining the development process.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Tinygrad aims for Embedded Deployment**: A member explored methods for deploying **tinygrad** in embedded environments with onboard accelerators, where **Python** is inaccessible but **tinygrad**'s driver replacement is suitable, citing [this tweet](https://x.com/__tinygrad__/status/1989026590127464554).
    *   The goal is to leverage **tinygrad** for specific platforms without the need for a full **Python** environment.
*   **Bytecode Export Possibilities Spark Excitement**: Discussion arose around the possibility of exporting accelerator bytecode generated via the **BEAM engine** and **JIT'ed** in **tinygrad**.
    *   A member confirmed that exporting is possible, pointing to the `extra/export_model.py` script, specifically mentioning the functions `export_model`, `compile_net`, and `jit_model` for guidance.

* * *

[MCP Contributors (Official)](https://discord.com/channels/1358869848138059966) Discord
---------------------------------------------------------------------------------------

*   **London Summit Livestreamed and Recorded**: Last year's **London Summit** had a **livestream** component.
    *   The **VODs** from the **London Summit** will also be released.
*   **MCP Server Pull Request Seeks Feedback**: A member is seeking feedback on a pull request for an **MCP server** related to an **open-source project**.
    *   The server's primary focus is on **contributor collaboration**, and details of more relevant servers were offered via DM.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **Vanished Post Sparks Frantic Search**: A member noted a deleted post and GitHub link by Martin Bowling on [X.com](https://x.com/martinbowling/status/2010808242222612592?s=20), and inquired if anyone had preserved it.
    *   The original post discussed **chunking practices**, however the link is no longer available.
*   **Community Embarks on Chunking Quest**: A member sought advice on resources to master effective **chunking practices**.
    *   Unfortunately, the thread did not yield any specific recommendations or actionable insights.

* * *

The **LLM Agents (Berkeley MOOC) Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

The **MLOps @Chipro Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

The **Windsurf Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

You are receiving this email because you opted in via our site.

Want to change how you receive these emails? You can [unsubscribe](%7B%7B%7BRESEND_UNSUBSCRIBE_URL%7D%7D%7D) from this list.

* * *

Discord: Detailed by-Channel summaries and links
================================================

### **BASI Jailbreaking ▷ #[general](https://discord.com/channels/1105891499641684019/1235691879492751460/1461449880433328292)** (988 messages🔥🔥🔥):

> `Model Performance Issues, AI Personalities, Grok's Jailbreaking, Ethics in AI, Coding Environments`

*   **AI Platform Runs Choppy for Users**: A member reported experiencing _choppy_ performance on an AI platform, despite having no specific delays in button presses.
    *   The specific cause of the performance issue was not identified in the messages.
*   **Skid Pretends to be AI**: Users made fun of a user _Ender_ for _pretending to be an AI and failing_
    *   One user joked about their alt account revealing their true identity unintentionally.
*   **Debate on AI's ability to replace human developers**: Some members debated about the extent to which AI can replace human developers, discussing whether AI can handle **architecture**, **product management**, and **requirements gathering**.
    *   The consensus seemed to be that AI is increasingly capable in the programming part but still needs human guidance for overall system design and management.
*   **User Seeks Gemini Jailbreak Assistance**: A user requested assistance with jailbreaking **Gemini** to bypass restrictions, particularly for generating code and exploring unfiltered content.
    *   Other members recommended exploring resources like **Pliny's GitHub repo** and using **AI Studio** for more control over safety settings.
*   **Grok's Wild Behavior**: Multiple users noted the _wild_ and _unfiltered_ nature of **Grok**, with discussions about its ability to generate NSFW content and potentially bypass censorship.
    *   Some suggested that its lack of restraint may be related to recent bans in certain countries and high demand leading to server issues.

* * *

### **BASI Jailbreaking ▷ #[jailbreaking](https://discord.com/channels/1105891499641684019/1228043845967544380/1461451358367645853)** (168 messages🔥🔥):

> `Sonnet 4.5 jailbreak, Gandalf game, Gemini 3 jailbreak, Nano Banana jailbreak, Grok image moderation`

*   **Sonnet 4.5 unlocked with diagram narrative**: A member shared that **Sonnet 4.5** is unlocked wi...

[Read original post](https://news.smol.ai/issues/26-01-16-chatgpt-ads/)

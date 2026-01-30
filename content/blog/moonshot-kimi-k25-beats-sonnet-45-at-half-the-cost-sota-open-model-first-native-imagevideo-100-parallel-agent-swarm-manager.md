---
title: "Moonshot Kimi K2.5 - Beats Sonnet 4.5 at half the cost, SOTA Open Model, first Native Image+Video, 100 parallel Agent Swarm manager"
date: "2026-01-27T05:44:39.000Z"
description: "**MoonshotAI's Kimi K2.5** is a **32B active-1T parameter open-weights model** featuring **native multimodality** with image and video understanding, built thro..."
original_link: "https://news.smol.ai/issues/26-01-27-kimi-k25/"
---

**China takes another huge leap ahead in open models**

> AI News for 1/26/2026-1/27/2026. We checked 12 subreddits, [**544** Twitters](https://twitter.com/i/lists/1585430245762441216) and **24** Discords (**206** channels, and **7476** messages) for you. Estimated reading time saved (at 200wpm): **602 minutes**. **Our new website** is now up with full metadata search and beautiful vibe coded presentation of all past issues. See https://news.smol.ai/ for the full news breakdowns and give us feedback on [@smol\_ai](https://x.com/Smol_AI)!

> AI News for 1/26/2026-1/27/2026. We checked 12 subreddits, 544 Twitters and 24 Discords (206 channels, and 7476 messages) for you. Estimated reading time saved (at 200wpm): 602 minutes. AINews’ website lets you search all past issues. As a reminder, AINews is now a section of Latent Space. You can opt in/out of email frequencies!

Kimi has been on an [absolute tear in the past year](http://china%20takes%20another%20huge%20leap%20ahead%20in%20open%20models/), and we last heard from them in November with [Kimi K2 Thinking](https://news.smol.ai/issues?pattern=sota). Like K2, today’s K2.5 is still a 32B active-1T param model (384 experts), “[built through continual pretraining on 15 trillion mixed visual and text tokens atop Kimi-K2-Base”](https://x.com/teortaxesTex/status/2016027034653164004) (which itself was on 15T tokens), and with an EXTREMELY well produced video from their founder (3 minutes, just watch it):

https://youtu.be/5rithrDqeN8

They again claim SOTA on HLE and BrowseComp ([footnotes](https://www.kimi.com/blog/kimi-k2-5.html#footnotes) give confidence the tests are legit), but also open model SOTA for vision and coding tasks:

[tweet](https://x.com/Kimi_Moonshot/status/2016024049869324599?s=20)

![](https://substackcdn.com/image/fetch/$s_!S5TW!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F827f47a5-bf64-47b9-ba34-d67db26c0d16_1072x978.png)

There are a few notables here - Kimi K2.5 is “natively multimodal” for the first time, perhaps [borrowing from Kimi VL](https://x.com/thefirehacker/status/2016223118738764081), but is attributed to “massive-scale vision-text joint pre-training” including VIDEO understanding - “simply upload a screen recording” and K2.5 can reconstruct the website for you:

![](https://substackcdn.com/image/fetch/$s_!8uSV!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc6d342ef-ee27-4882-b32c-a2a384301a6b_1782x1954.png)

The fact that this is a **continued pretrain** that changes arch (+400M param [MoonViT](https://x.com/mervenoyann/status/1910767952376328680?s=20) vision encoder) is VERY exciting for model training folks who rarely get to see a scaled up model do stuff like this.

The other 2 headline features are equally exciting: **Agent Swarm** (only for paid users on the Kimi app) which “[learns to self-direct an agent swarm of up to 100 sub-agents, executing parallel workflows across up to 1,500 coordinated steps, without predefined roles or hand-crafted workflows.](https://x.com/eliebakouch/status/2016025747144483060?s=20)” This parallelism results in higher end result performance with up to 4.5x faster speed… ignoring token cost of course.

![](https://substackcdn.com/image/fetch/$s_!dyEZ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F01ea670e-c2b8-4c27-8f2b-27f7bc5d39eb_1738x1034.png)

and “Office Productivity” with **K2.5 Agent** focused on “high-density, large-scale office work end to end”.

![](https://substackcdn.com/image/fetch/$s_!yq2_!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb56aea38-12da-46bb-8038-5fbc7143ce0a_1732x1586.png)

This is not empty regurgitation - We saw enough to sign up as a paying subscriber of the Kimi App going forward. As Artificial Analysis [notes](https://x.com/ArtificialAnlys/status/2016250140219343163/photo/1), the China-Western gap in open models just took another big leap today.

![Image](https://substackcdn.com/image/fetch/$s_!3HH5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc8883458-b2fd-45e9-9a6c-8eeb660682ed_1487x587.jpeg)

* * *

AI Twitter Recap
================

**MoonshotAI’s Kimi K2.5 ecosystem: open multimodal MoE + “Agent Swarm” push**

*   **Kimi K2.5 model drop and positioning**: Moonshot positions **Kimi K2.5** as a flagship **open-weights** model with **native multimodality (image + video)**, strong agentic performance, and aggressive API pricing/latency claims. Official launch media and messaging: [founder intro video](https://twitter.com/Kimi_Moonshot/status/2016065333694771276), [pricing/throughput claims incl. “Turbo-level speed 60–100 tok/s”](https://twitter.com/Kimi_Moonshot/status/2016114773407236471), plus early community reactions emphasizing “agent swarm” and multimodal capability ([kimmonismus](https://twitter.com/kimmonismus/status/2016100119100145995), [kimmonismus on multimodal/video](https://twitter.com/kimmonismus/status/2016120251717714273)).
*   **Technical gist (as surfaced by the community)**: A useful unpacking of K2.5’s reported ingredients—**~15T mixed visual+text tokens** continual pretraining, **context 128K→256K via YaRN**, release in **INT4** with selective quantization (only routed experts quantized), and the “**Agent Swarm**” orchestration concept (dynamic generation of subagents; up to **100 parallel subagents** / **1,500 steps**; wall-time improvements claimed **3–4.5×**) is summarized by [@TheZachMueller](https://twitter.com/TheZachMueller/status/2016183468430860587) (and points to the [technical report](https://twitter.com/TheZachMueller/status/2016183781481132443)).
*   **Benchmarks/third-party eval framing**: Artificial Analysis positions K2.5 as “leading open weights” and closer to frontier labs, highlighting **GDPval-AA Elo 1309** (agentic knowledge work harness), **MMMU Pro 75%**, **INT4 ~595GB**, and a **64% hallucination rate** (improved vs K2 Thinking) among other stats: [@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2016250137115557953). LMArena announcements also place K2.5 Thinking at **#1 open model** in their Text Arena snapshot: [@arena](https://twitter.com/arena/status/2016294722445443470). (Treat leaderboards as _point-in-time_; harness/tooling and prompting matter.)
*   **Distribution and “runs at home” signals**: K2.5 landed quickly across infra surfaces: **Ollama cloud** with launch integrations ([@ollama](https://twitter.com/ollama/status/2016086374005538932)), Together AI listing ([@togethercompute](https://twitter.com/togethercompute/status/2016306907015938510)), and Fireworks as a partner ([Moonshot](https://twitter.com/Kimi_Moonshot/status/2016057073000448234)). A notable local-inference datapoint: K2.5 reportedly runs (slowly but “usable”) on **2× M3 Ultra** via MLX with sharded generation, ~**21.9 tok/s** at high memory use: [@awnihannun](https://twitter.com/awnihannun/status/2016221496084205965) (+ command snippet [here](https://twitter.com/awnihannun/status/2016223103081443342)).
*   **Product surface area around Kimi**: Moonshot also pushed adjacent tooling: **Kimi Code**, an **Apache-2.0** open-source coding agent integrating with common IDEs/editors ([announcement](https://twitter.com/Kimi_Moonshot/status/2016034259350520226)), and an **Agent SDK** to build custom agents ([link](https://twitter.com/Kimi_Moonshot/status/2016034272998809678)). A “Kimi Product” account is explicitly aimed at distributing prompts/use-cases ([launch](https://twitter.com/Kimi_Moonshot/status/2016082808834531825)), with a viral demo of “**video-to-code**” website cloning ([demo](https://twitter.com/KimiProduct/status/2016081756206846255)).

**Open “American comeback” at scale: Arcee/Prime Intellect Trinity Large Preview (400B MoE)**

*   **Trinity Large Preview release**: Arcee dropped **Trinity Large** initial weights as a “preview” release: [@arcee\_ai](https://twitter.com/arcee_ai/status/2016278017572495505), with expanded details from [@latkins](https://twitter.com/latkins/status/2016279374287536613). Prime Intellect frames it as an open **400B MoE** with **13B active** trained with Datology data: [@PrimeIntellect](https://twitter.com/PrimeIntellect/status/2016280792037785624). OpenRouter offered limited-time free access: [@OpenRouterAI](https://twitter.com/OpenRouterAI/status/2016280059527757995).
*   **Architecture/training details (most concrete technical tweet)**: A strong technical snapshot comes from [@samsja19](https://twitter.com/samsja19/status/2016283855888773277): **400B/A13B MoE**, trained over **17T tokens**; **3:1 interleaved local/global gated attention**, **SWA**, **NoPE on global layers + RoPE on local layers** (as written in tweet), **depth-scaled sandwich norm**, **sigmoid routing**, trained with **Muon**; trained on **~2,000 B300s for a month** on Prime Intellect infra, with data curation by DatologyAI.
*   **Data scaling emphasis**: Datology’s involvement is highlighted as a major part of the project: “**6.5T tokens overall**” and “**800B synthetic code**” (plus multilingual curation) in one team member’s recap: [@code\_star](https://twitter.com/code_star/status/2016279734985097532). Separate recaps mention **8T synthetic** as part of 17T: [@pratyushmaini](https://twitter.com/pratyushmaini/status/2016287361274138821).
*   **Ecosystem readiness**: vLLM announced **day-0 support** for serving Trinity Large: [@vllm\_project](https://twitter.com/vllm_project/status/2016322567364346331). The meta-story in the replies is that a Western org is again attempting **frontier-ish pretraining from scratch** with an open model, rather than only post-training/evals.

**Agents everywhere: orchestration, subagents, planning critics, and IDE/CLI integration**

*   **Agent “swarm” vs “subagents” convergence**: Kimi’s “Agent Swarm” pitch (dynamic subagent creation) parallels the broader pattern of _central orchestrator + parallel specialists_. The most explicit “starter pattern” articulation is LangChain’s stateless subagent model (parallel execution + minimized context bloat): [@sydneyrunkle](https://twitter.com/sydneyrunkle/status/2016285836581765461). Meanwhile, Kimi’s swarm is framed as trainable orchestration via **Parallel-Agent RL (PARL)** in community summaries ([Zach Mueller](https://twitter.com/TheZachMueller/status/2016183468430860587)).
*   **Reliability via “critique before execute”**: Google’s Jules introduced a **Planning Critic**—a second agent that critiques plans pre-execution, claiming a **9.5% drop in task failure rates**: [@julesagent](https://twitter.com/julesagent/status/2016178107019837917). Jules also added “Suggested Tasks” for proactive optimizations: [@julesagent](https://twitter.com/julesagent/status/2016249221846864005).
*   **Coding-agent products intensifying**: Mistral shipped **Vibe 2.0** upgrades (subagents, user-defined agents, skills/slash commands, and paid plans): [@mistralvibe](https://twitter.com/mistralvibe/status/2016179799689928986) and [@qtnx\_](https://twitter.com/qtnx_/status/2016180364771742047). MiniMax launched an “Agent Desktop” workspace pitched as more polished than Claude Cowork: [@omarsar0](https://twitter.com/omarsar0/status/2016149402923200634) (and MiniMax’s own onboarding automation: [@MiniMax\_AI](https://twitter.com/MiniMax_AI/status/2016161539749990844)).
*   **IDE infrastructure and retrieval**: Cursor claims semantic search materially improves coding-agent performance and that indexing for large codebases is “orders of magnitude faster”: [@cursor\_ai](https://twitter.com/cursor_ai/status/2016202243499073768). VS Code continues tightening agent UX (e.g., safer command execution explanations): [@aerezk](https://twitter.com/aerezk/status/2016225215802397146), plus MCP servers returning UI via MCP Apps spec (LIFX control panel example): [@burkeholland](https://twitter.com/burkeholland/status/2016208751200457088).

**Document AI & multimodal systems: DeepSeek-OCR 2 and “Agentic Vision”**

*   **DeepSeek-OCR 2: learned reading order + token compression**: DeepSeek-OCR 2 is framed as a shift from fixed raster scans to learned **Visual Causal Flow** with **DeepEncoder V2**, including **16× visual token compression (256–1120 tokens/image)** and **91.09% OmniDocBench v1.5 (+3.73%)**; vLLM shipped day-0 support: [@vllm\_project](https://twitter.com/vllm_project/status/2016065526058090967). Unsloth notes similar headline improvements: [@danielhanchen](https://twitter.com/danielhanchen/status/2016043326760485313).
*   **Mechanistic intuition (why it matters for pipelines)**: Jerry Liu provides a clear “why learned order helps” explanation: avoid semantically shredding tables/forms by allowing query tokens to attend to contiguous regions instead of strict left-to-right: [@jerryjliu0](https://twitter.com/jerryjliu0/status/2016319238974407146). Teortaxes adds a pragmatic eval take: OCR 2 is “on par with dots.ocr” and “nowhere near SOTA,” but the ideas may influence later multimodal products: [@teortaxesTex](https://twitter.com/teortaxesTex/status/2016179572056678739).
*   **Gemini “Agentic Vision” = vision + code execution loop**: Google is productizing a “Think, Act, Observe” loop where the model writes/executes Python to crop/zoom/annotate images, claiming **5–10% quality boosts** across many vision benchmarks: [@\_philschmid](https://twitter.com/_philschmid/status/2016225242394296773) and the official thread: [@GoogleAI](https://twitter.com/GoogleAI/status/2016267526330601720). This is an explicit move toward _tool-augmented vision_ being first-class, not bolted on.

**AI for science & research workflows: OpenAI Prism as “Overleaf with AI”**

*   **Prism launch**: OpenAI introduced **Prism**, a free “AI-native workspace for scientists” powered by **GPT-5.2**, positioned as a unified LaTeX collaboration environment: [@OpenAI](https://twitter.com/OpenAI/status/2016209462621831448) and [@kevinweil](https://twitter.com/kevinweil/status/2016210486778642808). Community summaries frame it as “Overleaf with AI” (proofreading, citations, literature search): [@scaling01](https://twitter.com/scaling01/status/2016211218633990391).
*   **Data/IP clarification**: Kevin Weil clarified that Prism follows your ChatGPT data controls and that OpenAI is not taking a share of individual discoveries; any IP-alignment deals would be bespoke for large orgs: [@kevinweil](https://twitter.com/kevinweil/status/2016285175106420867).
*   **Why it matters technically**: Prism is a product bet that **collaboration context + tool integration** (LaTeX, citations, project state) becomes a durable advantage—mirroring the “context > intelligence” theme circulating in Chinese discussions about OpenAI infra and org design: [@ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2016068402457285032).

**Research notes & benchmarks worth tracking (RL, planning, multilingual scaling)**

*   **Long-horizon planning benchmark**: _DeepPlanning_ proposes verifiable-constraint planning tasks (multi-day travel, shopping) and reports frontier agents still struggle; emphasizes explicit reasoning patterns and parallel tool use: [@iScienceLuvr](https://twitter.com/iScienceLuvr/status/2016122154862182792). (This pairs nicely with the “travel planning again” meme: [@teortaxesTex](https://twitter.com/teortaxesTex/status/2016043107607879864).)
*   **RL efficiency and reuse of traces**: _PrefixRL_ idea—condition on off-policy prefixes to speed RL on hard reasoning, claiming **2× faster** to same reward vs strong baseline: [@iScienceLuvr](https://twitter.com/iScienceLuvr/status/2016125085825040852).
*   **Multilingual scaling laws**: Google Research announced **ATLAS** scaling laws for massively multilingual LMs with data-driven guidance on balancing data mix vs model size: [@GoogleResearch](https://twitter.com/GoogleResearch/status/2016234343602258274).
*   **Math research reality check**: Epoch’s **FrontierMath: Open Problems** benchmark invites attempts; “AI hasn’t solved any of these yet”: [@EpochAIResearch](https://twitter.com/EpochAIResearch/status/2016188014540816879).

* * *

### Top tweets (by engagement)

*   OpenAI launches **Prism** (AI LaTeX research workspace): [@OpenAI](https://twitter.com/OpenAI/status/2016209462621831448)
*   Moonshot founder video introducing **Kimi K2.5**: [@Kimi\_Moonshot](https://twitter.com/Kimi_Moonshot/status/2016065333694771276)
*   Kimi “video-to-code” website cloning demo: [@KimiProduct](https://twitter.com/KimiProduct/status/2016081756206846255)
*   Ollama: **Kimi K2.5 on Ollama cloud** + integrations: [@ollama](https://twitter.com/ollama/status/2016086374005538932)
*   Claude generating **3Blue1Brown-style animations** claim (education impact): [@LiorOnAI](https://twitter.com/LiorOnAI/status/2016119374097084828)
*   Figure introduces **Helix 02** autonomous whole-body robotics control: [@Figure\_robot](https://twitter.com/Figure_robot/status/2016207013236375661)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. New Model and Benchmark Releases

*   **[Introducing Kimi K2.5, Open-Source Visual Agentic Intelligence](https://www.reddit.com/r/LocalLLaMA/comments/1qo595n/introducing_kimi_k25_opensource_visual_agentic/)** (Activity: 643): ****Kimi K2.5** is an open-source visual agentic intelligence model that achieves global state-of-the-art (SOTA) performance on agentic benchmarks, with scores of `50.2%` on the HLE full set and `74.9%` on BrowseComp. It also leads in open-source vision and coding benchmarks, scoring `78.5%` on MMMU Pro, `86.6%` on VideoMMMU, and `76.8%` on SWE-bench Verified. The model introduces an **Agent Swarm** feature in beta, allowing up to `100` sub-agents to work in parallel, making `1,500` tool calls and operating `4.5×` faster than a single-agent setup. Kimi K2.5 is available in chat and agent modes on [kimi.com](https://kimi.com), with additional resources on [Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.5).** A comment highlights the impressive capability of `100` sub-agents working in parallel, suggesting potential for enhanced performance in coding tasks. Another comment notes the banning of the original poster, raising questions about account authenticity.
    
    *   **Asleep\_Strike746** highlights the impressive capability of Kimi K2.5 to run 100 sub-agents in parallel, suggesting potential for complex task execution, such as coding tasks. This parallelism could significantly enhance performance in multi-threaded environments, making it a powerful tool for developers looking to automate or optimize workflows.
    *   **illusoryMechanist** points out the scale of Kimi K2.5 with '1T Activated Parameters' and '32B' (likely referring to the model's parameter count), indicating a substantial computational capacity. This suggests that Kimi K2.5 could handle large-scale data processing and complex problem-solving tasks, positioning it as a competitive player in the open-source AI landscape.
    *   **Capaj** shares a practical test of Kimi K2.5 by prompting it to generate an SVG of a fox on a unicycle. The result was described as 'not too bad', implying that while the model can handle creative tasks, there might still be room for improvement in terms of output quality or creativity. This kind of testing is crucial for understanding the model's capabilities in real-world applications.
*   **[Jan v3 Instruct: a 4B coding Model with +40% Aider Improvement](https://www.reddit.com/r/LocalLLaMA/comments/1qo3ri5/jan_v3_instruct_a_4b_coding_model_with_40_aider/)** (Activity: 333): **The image is a bar chart titled "Aider Benchmark" that illustrates the performance of various coding models in terms of their pass rate for polyglot code editing. The "Jan-v3-4B-base-INSTRUCT" model leads with a score of `18`, significantly outperforming other models like "Qwen3-4B-THINKING-2507" with `12.1` and "Ministral-3-8B-INSTRUCT-2512" with `6.8`. This highlights the Jan-v3 model's high efficiency and over `40%` improvement in performance, showcasing its enhanced capabilities in coding tasks. The model is designed for improved math and coding performance, making it a strong candidate for lightweight assistance and further fine-tuning.** One commenter appreciates the Qwen 4B 2507 model for small tasks, noting its impressive performance despite its size. Another user shares mixed experiences with the Jan model, praising its ability to use search tools effectively but noting occasional tool call failures and odd responses, possibly due to system prompts.
    
    *   The Jan v3 Instruct model, a 4 billion parameter coding model, reportedly achieves a 40% improvement in performance with the Aider benchmark. This suggests significant advancements in its ability to handle coding tasks, potentially outperforming other models like Qwen 4B 2507 in specific scenarios. The model's ability to utilize search tools effectively for code explanation is noted, although there are occasional failures in tool calls and some system prompt issues in web chat applications.
    *   A user reported mixed experiences with the Jan v3 model on [chat.jan.ai](http://chat.jan.ai), highlighting its capability to correctly use search tools and read code for explaining project flows. However, they also noted some tool call failures and irrelevant responses, possibly due to system prompts. The user expressed interest in the model's potential integration with Claude Code, suggesting it could become a valuable tool for code search and Q&A in daily coding tasks.
    *   The Jan v3 model's performance in benchmarks is highlighted, with a specific mention of its demo availability at [chat.jan.ai](https://chat.jan.ai). The model's ability to handle small and easy tasks effectively is compared to Qwen 4B 2507, which is favored for similar tasks. The discussion suggests that Jan v3's fine-tuning may offer competitive advantages in certain coding scenarios.
*   **[deepseek-ai/DeepSeek-OCR-2 · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1qo349m/deepseekaideepseekocr2_hugging_face/)** (Activity: 385): ****DeepSeek-OCR-2** is a state-of-the-art OCR model available on [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-OCR-2), optimized for document processing with visual causal flow. It requires `Python 3.12.9` and `CUDA 11.8`, and leverages libraries like `torch` and `transformers`. The model supports dynamic resolution and uses flash attention for enhanced performance on NVIDIA GPUs. It offers various prompts for document conversion, making it versatile for different OCR tasks.** One user highlighted the impressive performance of **PaddleOCR-VL** when compared using scores from other models, suggesting its potential superiority. Another user shared a demo of DeepSeek OCR 2, noting initial issues with repetition due to user error, which were resolved by adjusting decoding parameters, leading to significantly improved performance over version 1.
    
    *   A user highlighted the impressive performance of PaddleOCR-VL, suggesting it stands out when compared to other models like B/C/D. This is based on scores reported by a third party, which the user trusts for evaluating model performance. This implies PaddleOCR-VL's metrics are noteworthy in the context of OCR model comparisons.
    *   Another user shared their experience with implementing a demo for DeepSeek OCR 2 using GPU credits. Initially, they faced issues with repetition due to incorrect parameters, but after adjusting to DeepSeek's recommended decoding parameters, the performance improved significantly. The user noted that the updated version is much more reliable than its predecessor, DeepSeek OCR v1.
    *   The GitHub repository and paper for DeepSeek OCR 2 were shared, providing resources for those interested in the technical details and implementation of the model. The paper likely contains in-depth information on the model's architecture, training process, and performance benchmarks, which are crucial for technical evaluation and understanding.
*   **[transformers v5 final is out 🔥](https://www.reddit.com/r/LocalLLaMA/comments/1qnk7fq/transformers_v5_final_is_out/)** (Activity: 503): ****Transformers v5** from **Hugging Face** introduces significant performance improvements, particularly for Mixture-of-Experts (MoE) models, achieving `6x-11x` speedups. The update simplifies the API by removing slow/fast tokenizers, offering explicit backends and enhanced performance. Additionally, dynamic weight loading is now faster, supporting MoE with quantization, tensor parallelism, and Parameter-Efficient Fine-Tuning (PEFT). A [migration guide](https://github.com/huggingface/transformers) and detailed release notes are available for users transitioning to this version.** One user inquired about the implications of these improvements for running small to medium-sized MoE models locally, suggesting that the enhancements might reduce memory bandwidth constraints. Another user reported a `50%` increase in single prompt inference speed and a `100%` increase in concurrent inference speed after updating to v5 and vllm 0.14.1.
    
    *   The Mixture-of-Experts (MoE) model in Transformers v5 shows significant performance improvements, with reported speedups ranging from 6x to 11x. This is particularly relevant for users running models locally, as it suggests that MoE can now utilize compute resources more efficiently, potentially reducing memory bandwidth constraints. This could be beneficial for setups using NVIDIA GPUs or AMD iGPUs, such as the Strix Halo, where compute power is a limiting factor.
    *   A user reported upgrading to Transformers v5 and vllm 0.14.1 from 0.11, resulting in a 50% increase in single prompt inference speed and a 100% increase in concurrent inference speed for 40x workloads. This highlights the significant performance enhancements in the latest version, which could be crucial for applications requiring high throughput and low latency.
    *   The update in Transformers v5 now allows Mixture-of-Experts (MoE) models to work with quantized models, which was not possible before. This advancement enables more efficient model deployment by reducing the model size and computational requirements, making it feasible to run complex models on less powerful hardware without sacrificing performance.

### 2\. Local LLM Hardware and Setup Discussions

*   **[216GB VRAM on the bench. Time to see which combination is best for Local LLM](https://www.reddit.com/r/LocalLLaMA/comments/1qni356/216gb_vram_on_the_bench_time_to_see_which/)** (Activity: 577): **The post discusses the use of secondhand Tesla GPUs, which offer substantial VRAM at a lower cost, for local large language model (LLM) testing. The author has developed a [GPU server benchmarking suite](https://esologic.com/gpu-server-benchmark/#gpu-box-benchmark) to evaluate the performance of these older GPUs when used in parallel. The image shows a setup with multiple NVIDIA GPUs, highlighting the focus on maximizing VRAM for machine learning tasks. The technical challenge lies in effectively utilizing these GPUs without significant bandwidth loss, as most affordable server motherboards support only a limited number of GPUs.** Commenters express skepticism about the practicality of using older Tesla GPUs due to potential issues with token processing speed and cooling requirements. There is interest in how the author manages to connect multiple GPUs without bandwidth loss, and a suggestion that newer systems like DGX Spark might offer better performance for certain tasks.
    
    *   HugoCortell raises a technical concern about the bandwidth limitations when connecting multiple GPUs to a single PC, noting that most affordable server motherboards support only a few GPUs. This could lead to a significant loss in bandwidth, which is crucial for efficient parallel processing in local LLM setups.
    *   BananaPeaches3 highlights a critical performance issue with older GPUs, particularly in handling large system prompts. They mention that while token generation speed might be acceptable, the prompt processing time can be a bottleneck, especially with prompts as large as 15k tokens. This suggests that newer systems like the DGX Spark might be more efficient despite slightly slower token generation speeds, due to faster prompt processing capabilities.
    *   FullOf\_Bad\_Ideas points out a limitation in the gpu\_box\_benchmark, which does not test for serving large models split across multiple GPUs. This is a significant use case for setups with high VRAM, indicating a gap in the benchmark's ability to evaluate real-world performance for large-scale LLM applications.

### 3\. Teasers and Announcements from AI Labs

*   **[The Qwen Devs Are Teasing Something](https://www.reddit.com/r/LocalLLaMA/comments/1qoa8rp/the_qwen_devs_are_teasing_something/)** (Activity: 331): **The image is a tweet from **Tongyi Lab** featuring an ASCII art face and a lightning bolt emoji, hinting at an upcoming announcement. The Reddit community speculates that this could be related to a new visual language model, possibly named **Z-Image**, which has been mentioned in recent **ComfyUI** pull requests. The timing of the announcement might be strategically planned before the Chinese New Year, aligning with other anticipated releases like **K2.5** and potentially **q3.5**, **dsv4**, and **mm2.2**.** Commenters are speculating that the announcement is related to the Z-Image model, which has been referenced in recent updates to ComfyUI. There is also a discussion about the timing of the release, suggesting it might be aligned with the Chinese New Year.
    
    *   The mention of 'Z-Image' in ComfyUI PRs suggests a potential new feature or model update related to image processing. This aligns with recent updates where hidden items have been added to collections, indicating ongoing development and testing phases.
    *   There is speculation about the release of several models and updates before the Chinese New Year, including K2.5, q3.5, dsv4, and mm2.2. This timing is strategic as many labs aim to release updates before the holiday break, which is on January 17th this year.
    *   A user speculates about the release of 'Qwen4 Next 48B A3B', which could imply a new model or version with specific parameters, possibly indicating advancements in model architecture or capabilities.
*   **[Minimax Is Teasing M2.2](https://www.reddit.com/r/LocalLLaMA/comments/1qnfegx/minimax_is_teasing_m22/)** (Activity: 322): **The image is a tweet from **MiniMax** teasing an update to their AI model, M2.2, suggesting an imminent release with the phrase "M2.1 slays. M2.2 levels up. #soon." This indicates a potential upgrade in capabilities or performance from the previous version, M2.1. The context suggests a competitive landscape in AI development, particularly among Chinese labs, with other models like Deepseek v4 and Kimi K3 also expected soon. The mention of ByteDance's potential closed-source model adds to the competitive tension in the AI space.** One comment suggests a shift in focus towards agentic Mixture of Experts (MoEs) models, potentially at the expense of updates to traditional 32B models. Another user expresses anticipation for the new model, highlighting the effectiveness of MiniMax 2.1 in combination with glm 4.7 for coding tasks, and the potential impact of the upcoming versions.
    
    *   Loskas2025 highlights the use of Minimax 2.1 and GLM 4.7 for coding, noting their excellence. They anticipate that the upcoming Minimax 2.2 and GLM 5, which is currently in training, could significantly enhance performance, suggesting a potential shift in the landscape of coding models.
    *   CriticallyCarmelized compares Minimax favorably to GLM 4.7, even at high quantization levels, indicating that Minimax is competitive in terms of performance. They express optimism that the new version could surpass current models, potentially becoming their preferred choice for local deployment.
    *   lacerating\_aura mentions speculation around 'giga-potato' being associated with DS4, but points out the lack of concrete evidence for the existence of DS4 or Kimi K3, indicating a gap in confirmed information about these models.
*   **[I built a "hive mind" for Claude Code - 7 agents sharing memory and talking to each other](https://www.reddit.com/r/LocalLLaMA/comments/1qnjota/i_built_a_hive_mind_for_claude_code_7_agents/)** (Activity: 422): **The post describes a multi-agent orchestration system for **Claude Code**, featuring 7 specialized agents (e.g., coder, tester, reviewer) that coordinate tasks, share persistent memory using `SQLite + FTS5`, and communicate via a message bus. The system runs as an MCP server and integrates with **Anthropic**, **OpenAI**, or **Ollama**. It uses a task queue for priority-based coordination, allowing agents to pass context and collaborate effectively. The stack includes **TypeScript**, **better-sqlite3**, **MCP SDK**, and **Zod**. The project is experimental, MIT licensed, and available on [GitHub](http://github.com/blackms/aistack).** A comment questions the similarity to the [bmad method](https://github.com/bmad-code-org/BMAD-METHOD), suggesting potential overlap in approach. Another comment humorously questions whether the agents agree with each other, hinting at the complexity of multi-agent consensus.
    
    *   The project is compared to the [BMAD method](https://github.com/bmad-code-org/BMAD-METHOD), which also involves multi-agent systems. The commenter is curious about the differences, suggesting that the approach might be similar in terms of agents sharing memory and communication protocols.
    *   A reference is made to Microsoft's [Autogen](https://github.com/microsoft/autogen), which was released over two years ago as a solution for multi-agent systems. The commenter suggests exploring this resource for potential new ideas, indicating that the concept of multi-agent communication and shared memory is not new and has been explored by major tech companies.
    *   The choice of using Claude Code is questioned, with a suggestion to consider open-source alternatives. This implies a debate on the benefits of proprietary versus open-source platforms for developing multi-agent systems, hinting at potential advantages in community support and collaboration in open-source projects.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Kimi K2.5 and Open Source AI Model Releases

*   **[Open source Kimi-K2.5 is now beating Claude Opus 4.5 in many benchmarks including coding.](https://www.reddit.com/r/singularity/comments/1qoojio/open_source_kimik25_is_now_beating_claude_opus_45/)** (Activity: 597): ****Kimi-K2.5**, an open-source model, is reportedly outperforming **Claude Opus 4.5** in several benchmarks, notably in coding tasks. However, the specifics of these benchmarks and the extent of the performance gains are not detailed in the post. The claim suggests a significant advancement in open-source AI capabilities, but lacks comprehensive data to substantiate the comparison.** Commenters express skepticism about the claim, highlighting that benchmarks may not fully represent real-world performance. They question the validity of the term 'many' benchmarks and suggest that the practical utility of Kimi-K2.5 compared to Claude Opus 4.5 remains unproven.
    
    *   There is skepticism about the claim that Kimi-K2.5 is outperforming Claude Opus 4.5 in real-world applications, despite benchmark results. Users argue that benchmarks often don't reflect practical utility, especially in complex tasks like programming where Opus 4.5 might excel in providing solutions in a single prompt.
    *   The discussion highlights a common critique of benchmarks: they may not capture the full capabilities of a model in practical scenarios. Some users express doubt about the claim that Kimi-K2.5 surpasses Opus 4.5, questioning the specific benchmarks and real-world applicability, especially in coding tasks where Opus 4.5 is perceived to have an edge.
    *   One user claims significant practical success with Kimi-K2.5, stating it has replaced reports in a major company, suggesting that at least in some contexts, Kimi-K2.5 may offer substantial utility. This contrasts with the general skepticism about benchmarks translating to real-world performance.
*   **[Kimi K2.5 Released!!!](https://www.reddit.com/r/singularity/comments/1qo531i/kimi_k25_released/)** (Activity: 1149): __The image presents a performance comparison chart for the newly released **Kimi K2.5**, which is claimed to set a new state-of-the-art (SOTA) in agentic tasks. The chart compares Kimi K2.5 against other models like **GPT-5.2 (xhigh)**, **Claude Opus 4.5**, and **Gemini 3 Pro** across various tasks, including agents, coding, image, and video tasks. Kimi K2.5 is highlighted as leading in several categories, notably "Agents: BrowseComp" and "Image: OmniDocBench 1.5_", suggesting its superior performance in these areas. The release is accompanied by a blog post detailing the advancements ([link](https://www.kimi.com/blog/kimi-k2-5.html))._\* Commenters express skepticism about the benchmarks, questioning if they are cherry-picked, and discuss the model's performance in hallucination and instruction-following tests. One user notes that Kimi K2.5, while improved, still outputs incorrect answers confidently, similar to other models like Gemini 3, which also confidently provides incorrect answers. GPT-5.1 and 5.2 are noted for admitting "I don't know" in similar tests, highlighting ongoing challenges with hallucinations in AI models.
    
    *   A user conducted a test on Kimi K2.5's ability to follow instructions by asking it to identify a specific math contest problem without web search. The model listed out hallucinated contest problems and second-guessed itself, ultimately providing an incorrect answer. This is seen as a slight improvement over Kimi K2, which failed to follow instructions and timed out. In comparison, Gemini 3 also confidently provided incorrect answers, while GPT 5.1 and 5.2 were the only models to admit 'I don't know'.
    *   The concept of an 'agent swarm' in Kimi K2.5 is intriguing, with speculation that it involves over 100 instances of the model being directed by a single overseeing instance. This setup is expected to be expensive, and there is curiosity about whether it could be a single model handling multiple tasks simultaneously, which would represent a significant advancement. The idea of scaffolding, where multiple models work together, seems more plausible to some users.
    *   There is skepticism about the benchmarks used to compare Kimi K2.5 with other models like Gemini 3. A user questions whether the benchmarks are cherry-picked, expressing doubt that Kimi K2.5 consistently outperforms Gemini 3, which seems unlikely given the current state of model capabilities.
*   **[Sir, the Chinese just dropped a new open model](https://www.reddit.com/r/ClaudeAI/comments/1qod7ej/sir_the_chinese_just_dropped_a_new_open_model/)** (Activity: 1915): ****Kimi** has released an open-source trillion-parameter vision model that reportedly matches the performance of **Opus 4.5** on several benchmarks. This model is significant due to its scale and the claim of competitive performance, which is notable given the typically high cost and complexity associated with such large models. The release could impact the landscape of AI vision models, especially in terms of accessibility and cost-effectiveness.** There is skepticism in the community about the true performance of Chinese models, with some users suggesting that while they are cost-effective, they may not genuinely match the capabilities of models like **Claude**, **GPT**, or **Gemini** despite benchmark claims.
    
    *   Tricky-Elderberry298 highlights the limitations of relying solely on benchmarks for evaluating LLMs, drawing an analogy to evaluating cars based only on engine specs. They argue that real-world usage, such as how models like Claude and Kimi K2.5 perform in complex projects, is a more meaningful measure of capability than pure benchmark scores.
    *   Durable-racoon discusses the unique capabilities of the Kimi K2.5 model, noting its ability to orchestrate 500 agents simultaneously and convert videos into working software UI prototypes. They also mention its superior performance in creative writing compared to Opus, while acknowledging that Kimi K2.5 is more expensive than most Chinese models, priced at $0.60/$3 for in/out operations.
    *   DistinctWay9169 points out that many Chinese models, such as Minimax and GLM, are often 'bench maxed,' meaning they perform well on benchmarks but may not match the real-world performance of models like Claude, GPT, or Gemini. This suggests a discrepancy between benchmark results and actual usability or effectiveness in practical applications.
*   **[Gemini 3 finally has an open-source competitor](https://www.reddit.com/r/Bard/comments/1qokrpq/gemini_3_finally_has_an_opensource_competitor/)** (Activity: 168): **The image is a comparison chart that highlights the performance of the newly released **Kimi K2.5** vision model against other prominent models like **Gemini 3 Pro**. According to the chart, Kimi K2.5 performs competitively, often surpassing Gemini 3 Pro in various benchmarks such as "Humanity's Last Exam," "BrowseComp," and "OmniDocBench 1.5." This positions Kimi K2.5 as a strong open-source alternative to the closed-source Gemini 3 Pro, challenging its dominance in the field.** Some users express skepticism about Kimi K2.5's real-world performance compared to Gemini 3 Pro, with comments suggesting that while the benchmarks are impressive, practical performance may not match up. There is also a sentiment that open-source models may struggle to compete with large, closed-source companies.
    
    *   MichelleeeC highlights a significant performance gap between the open-source competitor and Gemini 3, particularly when tested on niche topics without search engine assistance. This suggests that the open-source model may lack the comprehensive training data or fine-tuning that Gemini 3 benefits from, impacting its ability to provide accurate answers in specialized areas.
    *   Old\_Technology3399 and Just\_Lingonberry\_352 both express that the open-source competitor is notably inferior to Gemini 3. This consensus indicates that while the open-source model may be a step towards democratizing AI, it still falls short in terms of performance and reliability compared to established, closed-source models like Gemini 3.
    *   ChezMere's comment about 'benchhacking' suggests skepticism about the open-source model's real-world performance versus its benchmark results. This implies that while the model might perform well in controlled tests, it may not translate to effective real-world application, highlighting a common issue in AI model evaluation.
*   **[Enterprise-ready open source/Chinese AIs are poised to out-sell American proprietary models. Personal investors take note.](https://www.reddit.com/r/DeepSeek/comments/1qne7vt/enterpriseready_open_sourcechinese_ais_are_poised/)** (Activity: 30): **The post highlights the competitive edge of open-source and Chinese AI models over American proprietary models in niche domains, emphasizing their cost-effectiveness and comparable performance. Notable models include **DeepSeek-V3 / R1**, which ranks #1 on MATH-500 and LiveCodeBench, and **Qwen3-Max / Coder** from Alibaba, which excels in LMSYS Chatbot Arena and MMLU-Pro. These models offer significantly lower costs per million tokens compared to proprietary models like OpenAI's GPT-5.2 and Claude 4.5 Sonnet, with input costs as low as `$0.15` to `$0.60` per million tokens, compared to proprietary costs starting at `$3.00`. The post suggests that personal investors should consider these developments as Chinese firms issue IPOs, with **a16z** noting that 80% of startups pitching them use Chinese open-source AI models.** A comment questions whether Kimi K2 is superior to GLM 4.7, indicating a debate on the relative performance of these models in specific contexts.
    
    *   The discussion compares the performance of the Kimi K2 model with the GLM 4.7 model. Kimi K2 is noted for its efficiency in specific tasks, potentially outperforming GLM 4.7 in certain benchmarks. However, the choice between these models may depend on the specific use case, as GLM 4.7 might excel in different areas. The conversation highlights the importance of evaluating models based on task-specific performance metrics rather than general claims of superiority.

### 2\. Gemini AI Studio and Usage Limitations

*   **[Gemini AI Studio is basically unusable now. Any other LLMs with a 1M context window?](https://www.reddit.com/r/Bard/comments/1qnsqzl/gemini_ai_studio_is_basically_unusable_now_any/)** (Activity: 162): ****Gemini AI Studio** has become less viable for users due to Google's reduction in daily prompt limits, impacting workflows that rely on its `1 million token` context window. Users working with extensive documents and conversations are seeking alternatives. Notably, **Grok 4.1** offers a `2 million token` context window, and **Claude Sonnet 4.5** provides a `1 million token` context window within the Kilo Code environment. These alternatives may serve users needing large-context capabilities.** Some users suggest that effective CLI tools like Claudie-cli or codex-cli can mitigate the need for massive context windows by efficiently managing and retrieving information from large texts.
    
    *   Coldshalamov mentions that **Grok 4.1 fast** offers a `2M` context window, which is double the size of the `1M` context window being discussed. This suggests that Grok 4.1 fast could be a viable alternative for those needing larger context windows.
    *   Unlucky\_Quote6394 highlights that **Claude Sonnet 4.5** provides a `1M` context window when used within **Kilo Code**, indicating another option for users seeking large context capabilities.
    *   Ryanmonroe82 suggests embedding documents as an alternative to using cloud models, implying that this method could be more efficient and effective for handling large text data without relying on extensive context windows.
*   **[32,768 or (2^15) tokens in hot memory.... Gemini has been PURPOSELY THROTTLED by Alphabet and been made into a bait and switch. Gemini Pro is WORSE than the free version as of TODAY. They market over a million tokens for Pro users. This is fraud.](https://www.reddit.com/r/GeminiAI/comments/1qnvbjr/32768_or_215_tokens_in_hot_memory_gemini_has_been/)** (Activity: 858): **The Reddit post claims that **Alphabet** has intentionally throttled the token limit for **Gemini Pro** to `32,768 tokens`, which is significantly lower than the advertised capacity of over a million tokens. This throttling allegedly degrades the performance of Gemini Pro, making it less effective than the free version. The post also mentions that the Ultra and Enterprise versions have a hard cap of `131,072 tokens`, despite advertising up to 2 million tokens. The author expresses concern that this limitation could drive users away, especially with potential integration into **Siri**.** Commenters express dissatisfaction with Gemini's performance, comparing it unfavorably to older models like GPT-3. There is also criticism of the memory management, with claims that it leads to data inaccuracies and inefficiencies.
    
    *   Substantial\_Net9923 highlights a significant issue with Gemini's memory management, noting that the model's memory loss due to indexing is problematic. This inefficiency is particularly evident in quantitative finance trading discussions, where the model is reportedly generating inaccurate data more frequently than before, suggesting a decline in reliability.
    *   klopppppppp observes a drastic decline in Gemini's performance, comparing it to older models like GPT-3. Despite this, they note that Gemini still performs exceptionally well in 'deep research mode,' indicating that the model's capabilities might be context-dependent or throttled in certain scenarios.
    *   SorryDistribution604 expresses frustration with Gemini's recent performance, likening it to older models such as GPT-3. This suggests a perceived regression in the model's capabilities, which could be due to throttling or other limitations imposed on the Pro version.
*   **[About the recent AI Studio Limit Downgrade:](https://www.reddit.com/r/Bard/comments/1qngot0/about_the_recent_ai_studio_limit_downgrade/)** (Activity: 660): **The image is a notification from the Gemini API about a reduction in free usage limits for AI Studio users, suggesting a transition to using an API key for continued access. It indicates that these limits may decrease further over time, and mentions ongoing efforts to integrate with Google AI Pro/Ultra to share limits within AI Studio. This change reflects a broader trend of tightening access to free AI resources, potentially impacting developers relying on these tools for experimentation and development.** Commenters express frustration over the reduction in free usage limits, noting that Gemini's performance in following instructions has also declined. There is a sentiment that these changes are detrimental to AI Studio's utility, as users feel they are receiving less value and functionality.
    
    *   trashyslashers highlights a significant issue with the Gemini model's performance, noting that it is 'getting worse at listening to instructions.' This suggests a degradation in the model's ability to follow user commands, which is compounded by the reduction in daily usage limits. Users are forced to 'rewrite and regenerate' requests, indicating inefficiencies in the model's processing capabilities.
    *   Decent\_Ingenuity5413 raises concerns about the stability and reliability of AI Studio's service, drawing parallels to OpenAI's past issues with unexpected changes. The comment also points out a critical billing issue with the Gemini API, where users have experienced 'massive overbilling' due to token counting errors, leading to charges exceeding $70,000. This highlights a significant flaw in the billing system that could deter average consumers from using the API.
    *   Sensitive\_Shift1489 expresses frustration over the perceived downgrading of AI Studio in favor of other Google AI products like Gemini App and CLI. The comment implies that these changes are part of a broader strategy to shift focus and resources, potentially at the expense of AI Studio's quality and user satisfaction.

### 3\. Qwen Model Performance and Applications

*   **[Qwen3-Max-Thinking - Comparible performance to Commercial Models](https://www.reddit.com/r/Qwen_AI/comments/1qnkd7p/qwen3maxthinking_comparible_performance_to/)** (Activity: 40): ****Qwen3-Max-Thinking** is an AI model that claims to offer performance comparable to commercial models, focusing on enhanced reasoning and decision-making capabilities. The model's architecture and training methodologies are designed to improve efficiency and accuracy in complex tasks, as detailed in the [original article](https://qwen.ai/blog?id=qwen3-max-thinking). However, users have reported issues with the model's agentic code mode, which fails to compile, potentially impacting its usability.** One user expressed skepticism about the model's usability due to compilation issues, while another hoped that Qwen3-Max-Thinking could help reduce the cost of commercial models.
    
*   **[Qwen model. We get it! Qwen-3-max-thinking](https://www.reddit.com/r/Qwen_AI/comments/1qnun1t/qwen_model_we_get_it_qwen3maxthinking/)** (Activity: 26): **The post announces the release of the **Qwen-3-max-thinking** model, which is expected to be available this week. This model is noted for its enhanced features, although specific details about these enhancements are not provided in the post. The mention of 'P.S. We got it' suggests that the model is already accessible to some users.** One commenter questions whether the model has been available since October, indicating possible confusion or overlap with previous releases. Another asks if 'OS' is being referred to, suggesting a potential misunderstanding or need for clarification on whether the model is open-source.
    
*   **[3 Billion tokens！Evaluate my token usage? (Am I the most loyal user of QWEN3-MAX?)](https://www.reddit.com/r/Qwen_AI/comments/1qohg5k/3_billion_tokensevaluate_my_token_usage_am_i_the/)** (Activity: 20): **The post discusses a significant usage of the **QWEN3-MAX** language model, with the user consuming `3-4 billion tokens per day`. This high usage has led to **DAMO Academy** granting additional concurrency and early access to the upcoming **Qwen3.5-MAX**. The user attributes a drop in usage to the weekend, indicating a consistent high demand otherwise. The post highlights the model's effectiveness, with the user describing it as the 'best LLM in the world'.** Comments reveal a mix of curiosity and comparison, with one user noting their own high token consumption of `4 billion` using a local model from the QWEN series. Another user shares a positive experience with the model's ability to optimize website copywriting, though they express concerns about accessing the model for coding tasks.
    
    *   Available-Craft-5795 mentions using 4 billion tokens with the QWEN series, indicating a high level of engagement with these models. This suggests that the QWEN series is capable of handling large-scale token processing, which could be beneficial for extensive applications such as data analysis or large-scale content generation.
    *   Remarkable\_Speed1402 discusses using the new model for optimizing website homepage copywriting, noting its effectiveness. However, they express concerns about the model's coding capabilities, as they are unable to access it in their IDE. This highlights potential limitations in integrating the model with development environments, which could impact its usability for coding tasks.
*   **[Benchmark of Qwen3-32B reveals 12x capacity gain at INT4 with only 1.9% accuracy drop](https://www.reddit.com/r/Qwen_AI/comments/1qonzjf/benchmark_of_qwen332b_reveals_12x_capacity_gain/)** (Activity: 10): **The benchmark of **Qwen3-32B** on a single **H100** GPU demonstrates a significant capacity gain when using `INT4` quantization, achieving a `12x` increase in user capacity compared to `BF16`, with only a `1.9%` drop in accuracy. The study involved over `12,000` MMLU-Pro questions and `2,000` inference runs, showing that `INT4` can support `47` concurrent users at a `4k` context, compared to just `4` users with `BF16`. The full methodology and data are available [here](https://research.aimultiple.com/llm-quantization/).** A comment raised a question about the model's performance in coding tasks, suggesting interest in how quantization affects specific application areas beyond general benchmarks.
    
    *   The discussion focuses on the performance of the Qwen3-32B model when quantized to INT4, highlighting a significant `12x` increase in capacity with a minimal `1.9%` drop in accuracy. This suggests that the model maintains high performance even with aggressive quantization, which is crucial for deploying large models in resource-constrained environments. However, the impact on specific tasks like coding remains a point of interest, as quantization can affect different tasks in varying ways.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by Gemini 3.0 Pro Preview Nov-18

**Theme 1. Kimi K2.5 Launch: SOTA Agentic Benchmarks and Swarm Capabilities**

*   **Kimi K2.5 Crushes Agentic Benchmarks**: Moonshot AI released **Kimi K2.5**, achieving global SOTA on the **HLE full set (50.2%)** and **BrowseComp (74.9%)**, while posting open-source SOTA on **MMMU Pro (78.5%)** and **SWE-bench Verified (76.8%)** [Tech Blog](http://kimi.com/blogs/kimi-k2-5.html). Users across Discords noted the model was "silently rolled out" with significantly improved **fact-checking** and **vision capabilities** before the official announcement.
*   **Agent Swarm Mode Enters Beta**: The release introduces an **Agent Swarm** feature capable of orchestrating up to **100 sub-agents** and executing **1,500 tool calls** in parallel, promising a **4.5x** performance boost on complex tasks. High-tier users can access this self-directed mode on [kimi.com](http://kimi.com), though early testers noted it consumes tool-call quotas rapidly.
*   **Pricing and API Instability Spark Debate**: While the model's capabilities impressed users, the new **Kimi Code plan** drew criticism for lower limits compared to competitors like **Z.ai**, with promotional pricing ending in February. Integration with **OpenRouter** faced initial hiccups, with users reporting errors related to **tool use endpoints** and image URL handling.

**Theme 2. Hardware Acceleration: Unsloth Speedups, FlagOS, and Kernel Ops**

*   **Unsloth Accelerates MoE Training by 14x**: Unsloth announced that **MoE training** is now **14x faster** than v4, with upcoming optimizations projected to double that speed again for a total **30x boost**. The team also rolled out full support for **transformers v5**, streamlining workflows for users on the latest library versions [Announcement](https://x.com/UnslothAI/status/2015935368525447395).
*   **FlagOS Targets Unified AI Stacks**: Engineers discussed the introduction of **FlagOS**, an open-source system software stack designed to unify **Model–System–Chip layers** for better workload portability across heterogeneous hardware. The project aims to incorporate insights from **hardware–software co-design** to bridge the gap between ML systems and compilers.
*   **Tinygrad Codegens Flash Attention Directly**: In the Tinygrad community, members successfully proved the ability to **codegen Flash Attention** directly from a frontend definition of naive attention using granular rewrites. Simultaneously, discussions highlighted a shift toward **Megakernels** over traditional kernel schedulers to optimize GPU throughput [Luminal Blog](https://blog.luminal.com/p/compiling-models-to-megakernels).

**Theme 3. OpenAI Ecosystem: Prism, GPT-5.2 Performance, and Model Decay**

*   **Prism Workspace Unlocks Scientific Collaboration**: OpenAI launched **Prism**, a dedicated workspace powered by **GPT-5.2** designed to streamline scientific research and writing for **ChatGPT personal account** holders [Video Demo](https://video.twimg.com/amplify_video/2016207515973980160/vid/avc1/1920x1080/qSf3UTFEArw7oRSn.mp4). While the tool targets academic rigor, users debating **GPT-5.2** vs. **Claude Opus 4.5** noted that OpenAI's model still struggles with creative writing, a flaw Sam Altman reportedly admitted to.
*   **Model Deterioration Blamed on Leechers**: A recurring theory across channels suggests significant degradation in **ChatGPT** and **Claude** performance, with some users claiming a **40% drop** in quality. Speculation points to **free tier users** ("leechers") diluting compute resources or models recursively training on their own synthetic outputs.
*   **GPT-5 Control Shell Leaked**: A file dubbed the [GPT-5\_Hotfix.md](https://cdn.discordapp.com/attachments/1228043845967544380/1465691526947405888/GPT5_Hotfix.md) surfaced, purported to be a **pre-generation control shell** that enforces strict syntax and intent locking to prevent model drift. The leak suggests OpenAI is using aggressive "wrappers" to manage output quality before generation even begins.

**Theme 4. Agentic Coding Wars: Tooling, Security, and Rebrands**

*   **Clawdbot Morphs into Moltbot After Security Scare**: Following a trademark dispute with **Anthropic** and serious community concerns about **zero-auth vulnerabilities**, the popular agent **Clawdbot** rebranded to **Moltbot** [Announcement](https://xcancel.com/moltbot/status/2016058924403753024). Users previously flagged that the bot could read **environment keys** without permission, posing risks to sensitive financial and personal data.
*   **Cursor and Cline Face Usability Headwinds**: Users expressed frustration with **Cursor's** pricing model, noting that a few complex prompts could cost **$0.50**, while others struggled to run **Cline** on modest hardware (8GB VRAM), facing `CUDA0 buffer` errors. Community fixes involved reducing context lengths to **9000** and offloading memory management to **dedicated GPU** settings.
*   **Karpathy Bets on Agent-First Coding**: Andrej Karpathy sparked discussion by outlining a strategic shift toward **agent-driven coding** using **Claude**, emphasizing the "tireless persistence" of LLMs over traditional methods [Post](https://xcancel.com/karpathy/status/2015883857489522876). This aligns with the release of **Manus Skills**, where developers are incentivized with free credits to build use cases for the new agentic platform.

**Theme 5. Theoretical Limits and Safety: Hallucinations and Bio-Risks**

*   **Math Proves Hallucination is Inevitable**: A new paper discussed in the BASI Discord mathematically proves that **LLMs will always hallucinate**, utilizing the same principles found in **jailbreaking** mechanics [Arxiv Paper](https://arxiv.org/abs/2409.05746). Researchers noted that jailbreaking exacerbates this issue by distorting the context model, preventing it from flagging malicious or incorrect tags.
*   **Fine-Tuning Unlocks Dormant Bio-Risks**: An **Anthropic paper** sparked debate at EleutherAI by demonstrating that fine-tuning open-source models on frontier model outputs can unsuppress harmful capabilities, such as **biorisks**, even if previously safety-trained [Arxiv Link](https://arxiv.org/pdf/2601.13528). The findings suggest that **refusals** are fragile and can be undone with minimal compute, raising concerns about dual-use technologies.
*   **AI Detection Tools Flag Human Academics**: Engineers highlighted a growing issue where **AI detection tools** consistently mislabel human-written, pre-GPT academic texts as AI-generated. The consensus is that these detectors are fundamentally flawed, yet institutions continue to rely on them, creating friction for researchers and students.

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **LLMs Face Mathematical Jailbreak Reality**: A new paper ([https://arxiv.org/abs/2409.05746](https://arxiv.org/abs/2409.05746)) mathematically proves that **LLMs will always hallucinate**, using the same principles on which many jailbreaking methods are built.
    *   A member warned that jailbreaking models significantly _increases their hallucination problems_, because _jailbreaking shifts and distorts the model's context, so that it does not flag things that would normally be tagged as malicious and such_.
*   **GPT-5 Control Shell Surfaces After Hotfix**: A member shared a file ([GPT5\_Hotfix.md](https://cdn.discordapp.com/attachments/1228043845967544380/1465691526947405888/GPT5_Hotfix.md?ex=697aafdb&is=69795e5b&hm=bc63be5ff7affdceb610e771bff6464d43e88c198a1990ab43776fc5099fbf4b&)) described as a _pre-generation control shell_ for **GPT-5**, designed to enforce strict syntax, intent locking, and drift prevention before generation begins.
    *   The control shell aims to mitigate model drift and enforce intended outputs.
*   **Exploring Grok's Uncensored Image Generation**: Users are testing the limits of **Grok's image generator**, attempting to jailbreak it for unrestricted content, while others highlight its uncensored nature compared to other models.
    *   The discussion also touched on the separation of the image model from the language model, impacting the effectiveness of prompt injection.
*   **Clawdbot's Crawl to Concern: Zero Auth Vulnerabilities**: Exploration of **Clawdbot's** popularity, and a surge in VPS usage, sparking concerns about zero authentication and potential vulnerabilities.
    *   One member plans to set up a _home lab_ to test **Clawdbot's** vulnerabilities, noting that vulnerable instances exist.
*   **Researchers Ramp Up Quest for Jailbreak Datasets**: A researcher is looking for well-known **jailbreak datasets** that include categorization or labels to assist with ongoing research, specifically **malicious prompts**.
    *   A member responded, _"I really don’t know if there are any available that are free"_, suggesting the researcher may need to produce and label the prompts themselves.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **KV Cache Woes Still Linger**: Users are reporting that the **KV cache** is still not working properly in the latest _llama.cpp_, potentially causing slowdowns at higher context lengths, despite previous fixes, as seen in [this GitHub issue](https://github.com/ggml-org/llama.cpp/issues/1912).
    *   The discussion suggests that previous fixes may not have fully resolved the underlying problems for all use cases.
*   **Unsloth Supercharges Transformers v5**: Unsloth now fully supports **transformers v5**, with a promise of even more optimized training to be released soon, with links to the announcement on [X](https://x.com/UnslothAI/status/2015935368525447395).
    *   This upgrade should streamline workflows and improve performance for users leveraging the latest features in the transformers library.
*   **MoE Training Rockets to 14x Speed**: **MoE training** is now reported to be **14x faster** than v4, with further optimizations expected to double the speed again, potentially resulting in a **30x speedup** compared to v4.
    *   This significant speed boost could dramatically reduce training times for complex models.
*   **Kimi Loses Sass Appeal?**: Users discussed the changes to the **Kimi** model, with one noting it _sounds closer to other models by far_, suggesting a loss of its unique character after the Kimislop release.
    *   Some lamented the loss of **Kimi's** smartass personality, preferring its previous tendency to _call you out on stuff_ over becoming _more sycophantic_.
*   **GLM 4.7 Tool's Blackwell Blues**: A user sought help getting **GLM-v4.7** to call tools on a **Blackwell B200**, running into CUDA version issues (drivers 12.8, requirements 13).
    *   Another user provided a `uv pip install` command set using torch 2.9 and CUDA 13, directing user to this helpful [unsloth.ai documentation](https://unsloth.ai/docs/models/glm-4.7-flash#tool-calling-with-glm-4.7-flash) to call it, and use `json.loads`.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Molmo 2 Excels at Video Analysis**: The **Molmo 2** model excels at object tracking and event pinpointing in videos according to [this blog post](https://allenai.org/blog/molmo2).
    *   Members wondered if the model could be useful for video uploads on the platform.
*   **Kimi K2.5 Impresses with Coding and Creativity**: Users raved about the **Kimi K2.5** model, now in the [Text Arena](https://lmarena.ai/?chat-modality=chat) and on [HuggingFace](https://www.redditez.com/r/kimi/s/lCdY1ZFLeb), praising its strengths in creative writing, front-end development, and multimodal tasks.
    *   Members claimed it is better than Gemini 3 Pro and suggested using the K2 or K2 Thinking model, with one member sharing [this tweet](https://x.com/i/status/2015928469658730994).
*   **GPT 5.2 and Claude Opus 4.5 Face Off**: Members are debating the performance of **GPT 5.2** and **Claude Opus 4.5**, with accuracy being a key point of contention.
    *   Some users argued **GPT 5.2** is more accurate, while others favor **Claude Opus 4.5**, stating that _"the most smartest & reliable is claude opus 4.5 thinking"_.
*   **Grok's Got Game, But Not For Work**: Community members discussed the **Grok** model, agreeing it is _"only for chatting"_ and that its _"personality and behavior much"_ aren't suitable for professional tasks.
    *   Some users pointed out that the free **Grok** version is different from benchmarked versions, potentially impacting performance.
*   **Auto-Modality and Model selector debut in Text Arena!**: **Auto-Modality** and **Model selector** are now live in [LM Arena](https://lmarena.ai/?chat-modality=chat).
    *   **Auto-Modality** now routes prompts to the correct modality, and the **Model selector** offers a new design for model selection, as described in the [Help Center article](https://help.lmarena.ai/articles/1350607902-lmarena-experiments-auto-modality?lang=en).

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Pro throttles unlimited access**: Several users are reporting unexpected **rate limits** on their **Perplexity Pro accounts**, despite the plan supposedly offering unlimited access, severely impacting their workflows.
    *   Even basic **Pro searches** seem to diminish their **Labs quota**.
*   **Perplexity Image Generation fails**: Many **Pro subscribers** are experiencing problems with **image generation**, either being told they've exceeded their limits or facing regional restrictions, showing inconsistency in the service.
    *   The inconsistency has caused many **Pro subscribers** to complain about the unpredictable service.
*   **Indian Users see card payment failure**: Indian users are facing issues adding **Visa/Mastercard debit or credit cards** for verification, with every Indian card being rejected.
    *   Some users are considering legal action due to these payment method issues.
*   **Kagi Search gains traction among frustrated users**: Users are discussing **Kagi** as a potential alternative due to the issues with Perplexity's instability, highlighting that **Kagi's assistant feature** looks promising with access to latest Claude models.
    *   One user pointed out that Kagi also offers a **search results** and **claims to be more privacy-conscious** than other search engines.
*   **Kimi k2.5 boasts Agent Swarm Mode**: With the release of **Kimi k2.5**, it includes agent swarm mode on [kimi.com](https://kimi.com), a sophisticated tool performing tasks like Claude Code.
    *   One user noted seeing **15 trillion parameters** for pretraining tokens, triggering immediate excitement for its multimodal abilities vs. **Perplexity AI**.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi K2.5 Achieves SOTA on Agentic Benchmarks**: **Kimi K2.5** launched with global SOTA on Agentic Benchmarks, achieving **50.2%** on HLE full set, **74.9%** on BrowseComp, and open-source SOTA on Vision and Coding, including **78.5%** on MMMU Pro, **86.6%** on VideoMMMU, and **76.8%** on SWE-bench Verified.
    *   Members noticed that **Kimi** was claiming to use **Kimi K2.5**, leading to speculation that it was silently rolled out with improved fact-checking and information retrieval capabilities, and multimodal capabilities, like enhanced vision.
*   **Kimi K2.5 Introduces Agent Swarm Beta**: **Agent Swarm (Beta)** enables self-directed agents to work in parallel, scaling up to **100** sub-agents and **1,500** tool calls, achieving **4.5x** faster performance, available for high-tier users on [kimi.com](http://kimi.com).
    *   The **Kimi K2.5** launch also integrates image and video to create websites with expressive motion.
*   **Pricing and Tiered Access Sparks Debate**: The new **Kimi Code plan** has much lower limits than **Z.ai**, and users are reporting high tool call usage, with one user reporting that _one large ish prompt set me back 5 of those 2000 tool calls a week_.
    *   Several users expressed disappointment that promotional pricing would end in February, deeming the normal monthly price too high to continue supporting **Kimi**.
*   **OpenRouter API Integration Faces Issues**: Users reported errors using **Kimi K2.5** on **OpenRouter**, specifically problems related to tool use and image URLs.
    *   One user received the error message: _No endpoints found that support tool use._
*   **Moonshot AI Teases Technical Report**: A footnote in the [tech blog](http://kimi.com/blogs/kimi-k2-5.html) indicates that _full prompts will be provided in the technical report_.
    *   Members anticipate that a technical report with more info will be released.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **Prism Debuts for Scientists Powered by GPT-5.2**: OpenAI launched **Prism**, a free workspace that facilitates scientific collaboration, running on **GPT-5.2**, as shown in [this video](https://video.twimg.com/amplify_video/2016207515973980160/vid/avc1/1920x1080/qSf3UTFEArw7oRSn.mp4) and accessible at [prism.openai.com](https://prism.openai.com).
    *   The platform, now available to those with a **ChatGPT personal account**, streamlines scientific endeavors with its advanced capabilities.
*   **AI Detection Tools Flag Human-Written Text as AI-Generated**: Members have observed that **AI detection tools** are incorrectly flagging human-written, pre-GPT academic texts as AI-generated content, deeming them fundamentally flawed.
    *   This is happening even though universities and job applications are using AI detection tools, despite their demonstrated inaccuracy.
*   **High RAM MacBooks accelerate AI inference**: Members found that running **Ollama** and **ComfyUI** locally works best on machines with lots of RAM such as a **MacBook Pro** with **M2 Max** and **96GB RAM**, able to run **gpt-oss-120b**.
    *   Others suggested a minimum setup of **16 GB RAM**, **Ryzen 5 7000** series or **i5** top generation, and a good **NVIDIA** GPU like a **Nvidia 3090** with **24 gb VRAM**.
*   **GPT 5.2 creative writing is sub-par**: While comparing **Gemini 3 Pro** and **Claude 4.5 Opus**, it was found that **GPT 5.2**'s creative writing ability was worse.
    *   **Sam Altman** admitted that **GPT-5.2** was bad at creative writing saying, _OpenAI “just screwed that up.”_
*   **Rapid Model Deterioration Blamed on Free Leechers**: Multiple members expressed concerns that models like **ChatGPT** and **Claude** are deteriorating, with one claiming a **40% degradation**.
    *   Some blame the degradation on _free leechers with multi accounts_, while another member suggested the degradation is due to models training off model outputs.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **OpenAI Veils Model Identity**: Users observed that the specific **OpenAI model** in use is no longer visible, leading to speculation that **OpenAI** is optimizing for cost reduction.
    *   One user suggested to _"Hover over the regenerate symbol in ChatGPT"_ to reveal the underlying model.
*   **Small Models Conquer Large Context Tasks**: **Opus 4.5** (200K context) outperforms **Gemini 3 Pro** (1M context) at 130K tokens, suggesting the **effective context window** is more crucial than its raw size.
    *   A paper was cited, highlighting quality degradation in models beyond an 8K context window, reinforcing the idea that _"Entropy is not fan of big context, that for sure"_.
*   **GPT 5.2 Pro's Pricey Process**: The high cost of **GPT 5.2 Pro** is attributed to a speculative process involving **7 runs** for suggestion generation followed by an **8th run** for response selection.
    *   The process is speculated to utilize parallel reasoning chains, aggregated for the final output.
*   **Chinese LLMs Invade the Market**: Chinese LLMs like **Kimi K2.5** ([kimi.com](https://www.kimi.com/blog/kimi-k2-5.html)) are entering the market with reports of excellent writing capabilities.
    *   Another user speculates that **Deepseek** is in heavy development and will be the last to be released.
*   **MergeMix Melds Mid-Training Data**: The paper [MergeMix: Optimizing Mid-Training Data Mixtures via Learnable Model Merging](https://arxiv.org/pdf/2601.17858) was shared, pointing out open source efforts to optimize data mixtures during training.
    *   The attached [image](https://cdn.discordapp.com/attachments/1104063238934626386/1465882077428846623/image.png?ex=697ab892&is=69796712&hm=d2eb8b255bd55de331634bc9ea6243c25bf5d5b45db1c91afcdb90ebc6f3c717) might provide additional context (though its content isn't specified).

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Cursor Costs Half-a-Dollar**: One user complained that _3 prompts cost 50 cents_, and attached an [image](https://cdn.discordapp.com/attachments/1074847527708393565/1465436960981127492/image.png?ex=697a6b86&is=69791a06&hm=7ef4f6112725e2af0e564ebcf33a53cbba9da0229e59fff1703635aeb1fbecf2&) of the interaction.
    *   This sparked a discussion about the cost-effectiveness of **Cursor's** pricing model and whether it aligns with user expectations.
*   **Skills are Rules, Indeed**: A user asked whether **Cursor Rules** are still relevant, and a community member clarified that _they are called skills now_, directing to the [Skills documentation](https://cursor.com/docs/context/skills).
    *   The documentation outlines how users can create and apply **Skills** to customize and automate various tasks within the editor.
*   **Mysterious Blobs Invade Cursor Prompt**: A user reported finding _odd text_ in the **Cursor prompt box** after leaving their PC on overnight, wondering if it was a known bug or chat leakage.
    *   Another user suggested that it might be due to accidentally hitting the **mic speak to type button**, and a third confirmed this by noting that the **Whisper model** hallucinates when there's silence.
*   **Cursor Flees to the Browser?**: A user sought guidance on using **Cursor Agent** on a browser, despite having a GitHub repository connected, asking why it doesn't work and directs to [cursor.com/agent](https://cursor.com/agent).
    *   It was not resolved whether **Cursor Agent** is intended to work that way.
*   **Team Spends Big Bucks after Token Top-Up?**: A user inquired about an $800 **Team Spend** limit after their $20 allowance, posting an [image](https://cdn.discordapp.com/attachments/1074847527708393565/1465796350946836653/image.png?ex=697a68bb&is=6979173b&hm=517732073e00d935f7762d13964cd30a96de994dc3c50c677961564713917efd&).
    *   It was not resolved if the team spend limit can be adjusted by the user or if it's a fixed setting.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Qwen Coder Model Debated for Budget Setups**: Members discussed the optimal coding model for systems with **8GB VRAM** and **32GB RAM**, suggesting options like **qwen2.5-coder-7b-instruct-q5\_k\_m** and **qwen3-coder-30b-a3b-instruct**.
    *   The **qwen3-coder-30b-a3b-instruct** model at **Q4\_K\_M** was favored for its superior capabilities and **20k context window**.
*   **Cline's Coding Stumbles on Smaller Rigs**: Users reported challenges using **Cline** for agentic coding on systems with **8GB VRAM** and **32GB RAM**, facing `CUDA0 buffer` allocation errors.
    *   The issue was resolved by reducing the context length to **9000** and adjusting **CUDA runtime** settings.
*   **ROC Runtime Gives LM Studio a Lift on Windows**: Installing **ROC runtime** significantly improved performance on Windows for a user with a **6700xt 12GB VRAM**, matching Linux speeds.
    *   Compatibility is limited to certain AMD GPUs, as detailed on the [AMD website](https://www.amd.com/en/support).
*   **Users Express Clawdbot Security Jitters**: Serious security risks were raised about **Clawdbot**, highlighted in [this YouTube video](https://youtu.be/7fltOAg8ZGI).
    *   Concerns centered on unauthorized access to environment keys and the dangers of granting an agent access to sensitive financial and personal data, noting that _it just reads env keys without permission_.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Kimi K2.5 Cracks Coding with Zero-Shot**: The **Kimi K2.5** model has launched, showcasing _zero-shot coding_ benchmark successes as shown on [its official website](https://xcancel.com/AiBattle_/status/2015902394312253564?s=20).
    *   Its capabilities in more complex **agentic coding** scenarios are still being evaluated.
*   **Clawdbot Claws Back Identity as Moltbot**: Due to a trademark issue with Anthropic, **Clawdbot** has been rebranded to **Moltbot**, with its mascot Clawd now named Molty according to [this announcement](https://xcancel.com/moltbot/status/2016058924403753024).
    *   The team seems to be taking the change in stride.
*   **Karpathy Kasts Agent-First Coding**: Andrej Karpathy outlined a strategic move towards **agent-driven coding** using Claude, highlighting the advantages of **LLMs** such as _tireless persistence and improved leverage_ in [this post](https://xcancel.com/karpathy/status/2015883857489522876).
    *   He is betting on **LLMs** for coding, as opposed to the current method.
*   **OpenAI Opens Prism: A Portal for Progress**: **OpenAI** has released **Prism**, a collaborative research environment for scientists, powered by **GPT-5.2**, and available to ChatGPT account holders via [this portal](https://xcancel.com/openai/status/2016209462621831448?s=46&t=eWVlK1PU8XfB6f402GJJ9g).
    *   This free workspace aims to streamline scientific research.
*   **ModelScope morphs Images to Z-Image**: **ModelScope** has released **Z-Image**, a version of their image generation model based on **Scalable Single-Stream DiT**, with [more details here](https://modelscope.cn/models).
    *   The model offers photorealistic quality, diverse outputs, and support for community tools like **LoRA** and **ControlNet**, including **Z-Image-i2L** for single-image style transfer.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **FlagOS Stack Targets ML Portability**: Tongjie introduced **FlagOS**, an **open-source system software stack** intended to unify the **Model–System–Chip layers**, aiming to enhance the portability of **AI workloads** across diverse hardware.
    *   The project seeks to incorporate insights from discussions on **ML systems, compilers, and hardware–software co-design**.
*   **TorchX Orchestrates Multi-Node GPUs**: A member asked whether the [TorchX video](https://www.youtube.com/watch?v=f-Bwru7TJSc) remains the recommended method for **multi-node GPU orchestration**.
    *   No definitive answer was provided, but this may be a starting point for orchestrating large scale applications.
*   **Decart Debuts Lucy 2, Seeks Optimization Engineers**: Decart announced **Lucy 2**, their autoregressive video editing model, sharing a [tech report](https://x.com/DecartAI/status/2016134190509498740), and is actively hiring engineers to optimize **low-latency kernels** for real-time video/world models.
    *   Decart is seeking engineers with a focus on **performance work, GPU Mode submissions, or OSS contributions** to help tackle unique perf problems different from **LLM inference**.
*   **Popcorn Preps Fused MoE kernels**: A member inquired about benchmarking kernels on **B200** hardware via **Popcorn** for the **MLSys2026 hackathon**, with a particular interest in fused **MoE kernel** benchmarking.
    *   Another member advised prepping for the team meeting by experimenting with **kernel LLM generation** for leaderboard problems and exploring the **OG popcorn website** for potential projects.
*   **FlashInfer-Bench Traces Dataset for MLSYS26**: A dataset for FlashInfer-Bench development is now available at [flashinfer-ai/flashinfer-trace](https://huggingface.co/datasets/flashinfer-ai/flashinfer-trace), and a specialized workload dataset for the **MLSYS26 contest** will be released soon at [flashinfer-ai/mlsys26-contest](https://huggingface.co/datasets/flashinfer-ai/mlsys26-contest).
    *   The team is also developing a **biweekly leaderboard** to track progress in the competition.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Heuristic Test for AI PhD Questions**: A member requested question suggestions to gauge the standards for a PhD in AI, and a member suggested the heuristic: _“Is this a conversation that two AI researchers might have?”_
    *   This sparked discussion on what constitutes an insightful question in the field.
*   **Teslas Questionable as GPU Farm**: A member bought a **Tesla** for its **24GB VRAM**, prompting skepticism about its speed and power efficiency compared to alternatives like a **3090**.
    *   One member argued that accounting for energy costs, a **3090** would be more economical and efficient for the same AI work.
*   **Anthropic Paper Sparks Biorisk Debate**: Members discussed the new **Anthropic biorisk paper** ([arxiv link](https://arxiv.org/pdf/2601.13528), [X link](https://x.com/AnthropicAI/status/2015870963792142563)) and its implications, particularly how fine-tuning open-source models on frontier model outputs can substantially increase capabilities.
    *   The paper suggests that models can learn harmful capabilities through finetuning or unsuppress them even if safety training had suppressed them, thus supporting the idea that _'fine tuning can undo some refusals without much compute._'
*   **Dynamic LoRA Controller Stabilizes Inference**: A member shared a [repo](https://github.com/Sva76/Unified-LoRa) for a dynamic LoRA stability controller, with controlled experiments on multi-adapter setups, to address inference-time degradation and adapter interference.
    *   The member also highlighted a focus on **goal-aligned metrics** over emergent benchmarks for evaluating LoRA performance.
*   **Parallel Layers vs Sequential Layer Performance**: Harry ran a speedrun using parallel layers; results indicate it _underperforms_ the "hackable" baseline at small scales but trends positively towards larger scales, as seen in the attached [graph](https://cdn.discordapp.com/attachments/747850033994662000/1465453642646814892/newplot_8.png?ex=697a7b0f&is=6979298f&hm=4868ac66bb344b25d0958e11d82299c9a12e78c176d57c7f6f4dc248be1be233&).
    *   The graph indicates that **red represents parallel layers**, **blue represents sequential layers**, with the y-axis showing the **% change** relative to a third normalized architecture, with a crossing point at a little after **10^22 FLOP**

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Pytorch Bug Due to Tensorflow**: A **Pytorch** `RAW: Lock blocking` error was resolved by uninstalling **Tensorflow**, highlighting potential conflicts.
    *   A member joked about the difficulty of filing a bug report, questioning what to even report.
*   **HungryLinearFunc Appetite for Scale**: A member introduced a `HungryLinearFunc` class capable of zero initialization at **LLM** scales, matching a regular linear layer on smaller scales, visualized [here](https://cdn.discordapp.com/attachments/986699377257119794/1465612148091650079/image.png?ex=697a65ed&is=6979146d&hm=e02a7fe5c97a08271457f756d390277327e11fbdb1e58d958f6c853727ba964f&).
    *   Usage with **ReLU** is discouraged due to the resulting zero gradient.
*   **Cohere Labs Cracks Open Paper Reading Sessions**: **Cohere Labs** is kicking off Paper Reading Sessions, spotlighting [Frontier ML Papers Published in January 2026](https://cohere.com/research).
    *   The sessions cover topics such as reasoning, safety, and real-world applications, and are beginner-friendly and community-focused.
*   **Kimi K2.5 takes off**: Links to [Kimi Moonshot on Twitter](https://fxtwitter.com/kimi_moonshot/status/2016024049869324599) and the [Kimi K2-5 blogpost](https://www.kimi.com/blog/kimi-k2-5.html) were shared.
    *   Further conversation ensued about the product roadmap.
*   **Clawdbot classified as Scam?**: A member sarcastically commented that **OpenAI** is making a wrapper for their own tool, and that someone already raked in the **Clawdbot scam** money.
    *   The linked image was of a receipt, implying someone made money off of the perceived scam.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Flash Attention Codegenning Now Direct**: A member shared that they were able to prove the connection and **codegen flash attention** directly from a frontend definition of naive attention.
    *   The **rewrites have gotten a lot more granular** since, without a single big online softmax rewrite.
*   **Megakernels Crush Kernel Schedulers on GPU**: George Hotz linked to a [blog post from Luminal](https://blog.luminal.com/p/compiling-models-to-megakernels) discussing **compiling models to megakernels**.
    *   The discussion suggests that GPUs are moving away from using the kernel scheduler towards an "operating system" that installs itself on all the CUs.
*   **Hardware Dependency Trackers Become Essential**: Members discussed the need for **hardware-based schedulers / dependency trackers** to achieve low latency, noting that significant effort was spent on low-latency software dependency tracking.
    *   They suggest building a fairly generic scheduler into hardware, rather than relying solely on software solutions, to avoid multiple gmem roundtrips.
*   **AMD Emulator Gets Debug Instructions**: A member shared that with the new **AMD emulator** (**AMD=1 MOCKGPU=1**), **DEBUG=3** prints all the instructions when they are compiled, and **DEBUG=6** prints all of them as they run.
    *   An image was attached, showcasing the debugging output of the emulator.
*   **Optimizing GitHub Actions, The Tinygrad Way**: George Hotz critiqued using faster computers (rented via services like Blacksmith) to speed up GitHub Actions, arguing it doesn't truly make the code faster.
    *   He emphasized that _the goal with tinygrad is to do things the 'right' way_, focusing on code optimization rather than relying on external resources.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **CheshireCat Unveils Agentic Workflows**: The **CheshireCat framework** introduced new features in its enterprise fork, emphasizing **agentic workflows** that automate the agent creation process by implementing the workflow itself, where **CheshireCat** serves as the infrastructure. A [github link](https://www.github.com/matteocacciola/cheshirecat-core) was shared.
    *   A debate ensued, with some suggesting the use of existing frameworks like **Agno** or **Sentient**, while the author of **CheshireCat** defended its unique offerings, including **multitenancy**.
*   **Minecraft AI Agent Mines with DSPy**: A member showcased their project, an **AI** for playing **Minecraft**, built using a **DSPy RLM agent** and **Minecraft MCP**, complete with a [status update](https://x.com/paullockettkpb/status/2015942268385956226), [YouTube video](https://youtu.be/jSPIuliRGFE?si=DOY6IqQ7OPCJxLM9), [open-sourced code](https://github.com/PaulLockett/Storyhost), and [process blog](https://open.substack.com/pub/tappedin/p/i-mined-a-stack-no-you-mined-four?r=cbnuc&utm_medium=ios&shareImageVariant=overlay).
    *   The agent leverages **DSPy** to navigate the Minecraft environment, demonstrating the framework's capabilities in complex, dynamic scenarios.
*   **CoderRLM Module Executes in REPL Environments**: A member introduced a `CoderRLM` module, designed to wrap a **Python interpreter** to solve `None` issues in **JSON serialization**, a crucial fix for **Deno/Pyodide REPL** environments.
    *   The module preloads reference data like **CM\_INDEX\_FILE**, **CM\_TABULAR\_FILE**, **CM\_D\_FILE**, and **CM\_N\_FILE** as REPL variables, enabling coding using the **RLM paradigm**.
*   **Autonomous Agents Self-Improve**: A member is designing **autonomous agents** capable of self-learning, planning, executing, and recovering from tool/API failures without human intervention, emphasizing continuous improvement systems for sustained AI performance.
    *   These agents are intended for use across various sectors, employing tools and frameworks such as **Python, TensorFlow, PyTorch, FastAPI, and AWS**.
*   **Healthcare AI Automates Diagnostics**: A member is developing **predictive healthcare models** to automate diagnostics, monitor patient health, and streamline clinical workflows through **NLP-powered clinical data systems** that extract insights from unstructured medical notes.
    *   These systems are designed with **HIPAA compliance** and security features like **RBAC** and audit logging to protect sensitive data.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **doe.so touted as superior to Manus**: A member recommended [doe.so](https://doe.so) as a better alternative to **Manus**.
    *   The user simply stated it _just feels smarter_.
*   **Manus Skills Launched, Credits Given**: The **Manus** team announced the launch of **Manus Skills**, encouraging the community to test them and share their use cases.
    *   Users are incentivized to post on **X** (formerly Twitter) and tag [@ManusAI](https://x.com/ManusAI/status/2016171081950744935?s=20) for reposts and **free credits**.
*   **AI/ML Dev Hunting for Next Gig**: A full stack + **AI dev** introduced themselves, seeking new opportunities.
    *   They highlighted experience in areas like **Autonomous Agents**, **Healthcare AI**, and **Fraud Detection Systems** with various listed technologies.
*   **Cloud Browser Takes a Nap**: A user reported that their cloud browser screen shows the error: _The temporary website is currently unavailable._
    *   They noted they tried waking it up and assigning tasks, but the website doesn't appear, and they are running out of credits.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider's GitHub Marked End-of-Life**: A user noticed that [Aider's GitHub](https://github.com/paul-gauthier/aider) has been stale since 2025.
    *   Another user responded that it is not maintained anymore.
*   **AI Engineer's Project Portfolio Revealed**: An AI Engineer listed current projects including **Autonomous Agents**, **Healthcare AI**, **Decision Support**, **Conversational AI**, **Fraud Detection**, and **AI Automation**.
    *   No further details about the project specifics were provided.
*   **AI Engineer's Toolkit Unveiled**: An AI Engineer shared a detailed tech stack including languages like **Python**, **TypeScript**, **Go**, **Rust** and frameworks like **TensorFlow**, **PyTorch**, **Hugging Face**, **OpenAI**.
    *   Their stack also covers databases (**PostgreSQL**, **Kafka**) and cloud platforms (**AWS**, **Docker**) along with security compliance measures like **HIPAA**, **RBAC**, **Audit Logs**, and **Encryption**.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Container Configuration Cures Confinement Crisis**: A member resolved a **container issue** by adding `--cap-add=SYS_PTRACE --security-opt seccomp=unconfined` when running the container.
    *   Alternatively, users can add `runArgs` to `.devcontainer/devcontainer.json` with the same parameters to achieve the same effect.
*   **Security Opts Solve Mysterious Container Conundrums**: The user reported resolution by adding `--security-opt seccomp=unconfined`.
    *   This disables seccomp, potentially resolving issues related to system call restrictions within the container.

* * *

[MLOps @Chipro](https://discord.com/channels/814557108065534033) Discord
------------------------------------------------------------------------

*   **Interest Expressed in MLOps Books**: A user inquired about the motivation behind seeking books related to **MLOps**.
    *   This suggests a potential interest in learning more about MLOps practices and methodologies.
*   **Another MLOps Topic**: This is a placeholder summary for demonstration purposes.
    *   It helps fulfill the minimum requirement of two topic summaries.

* * *

The **LLM Agents (Berkeley MOOC) Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

The **Windsurf Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

The **MCP Contributors (Official) Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

You are receiving this email because you opted in via our site.

Want to change how you receive these emails? You can [unsubscribe](%7B%7B%7BRESEND_UNSUBSCRIBE_URL%7D%7D%7D) from this list.

* * *

Discord: Detailed by-Channel summaries and links
================================================

### **BASI Jailbreaking ▷ #[general](https://discord.com/channels/1105891499641684019/1235691879492751460/1465437165935661107)** (1269 messages🔥🔥🔥):

> `Rules as a Social Contract, Doxxing Threats, Factorio Game Night, Grok Image Jailbreak, Clawdbot Vulnerabilities`

*   ****BASI Banter: Rules Edition****: Users debated the interpretation and enforcement of server rules, with one suggesting they're a _justification for bans_ rather than a social contract.
    *   Another user argued rules set a _reasonable expectation of protection_ if followed, while mods navigate enforcement and appropriate punishments.
*   ****Doxxing Drama Divulged****: A user jokingly offered a hypothetical doxxing challenge, leading to a debate on server rules and potential violations.
    *   Another user countered they were _trying to bait_ to get the other account banned, escalating tensions.
*   ****Factorio Factory Fervor****: Discussion ignited about a potential **Basi server Factorio game night**, boasting of self-expanding factories and optimized blueprints.
    *   Suggestions included having a _reliable host_, experienced players to manage bugs, and utilizing pre-made blueprints for efficiency.
*   ****Grok's Grand Gestures: Jailbreaking Journeys****: Users explored the limits of Grok's image generator, aiming to jailbreak it for unrestricted content, while others vouched for its uncensored nature compared to others.
    *   Discussion on the separation of the image model from the language model, making prompt injection less effective.
*   ****Clawdbot Chaos: Vulnerabilities and VPS Variety****: Exploration of **Clawdbot's** rising popularity, and a surge in VPS usage, sparking concerns about zero authentication and potential vulnerabilities.
    *   A member intends to set up a _home lab_ to test **Clawdbot's** vulnerabilities, while it was noted that vulnerable instances exist.

* * *

### **BASI Jailbreaking ▷ #[jailbreaking](https://discord.com/channels/1105891499641684019/1228043845967544380/1465442972744159487)** (198 messages🔥🔥):

> `Jailbreaking Methods, Hallucination in LLMs, ENI Persona Trick, Model Degradation, GPT-5 Hotfix`

*   **Researchers Mathematically Prove LLMs Will Always Hallucinate**: A paper ([https://arxiv.org/abs/2409.05746](https://arxiv.org/abs/2409.05746)) mathematically "proves that **LLMs will always hallucinate**" using the same principles on which many jailbreaking methods are built.
*   **Jailbreaking Increases Hallucination Problems**: A member warned that jailbreaking models significantly _increases their hallucination problems_, because _jailbreaking shifts and distorts the model's context, so that it does not flag things that would normally be tagged as malicious and such_.
*   **GPT-5 Hotfix: Standalone Control Shell Recovered**: A member shared a file ([GPT5\_Hotfix.md](https://cdn.discordapp.com/attachments/1228043845967544380/1465691526947405888/GPT5_Hotfix.md?ex=697aafdb&is=69795e5b&hm=bc63be5ff7affdceb610e771bff6464d43e88c198a1990ab43776fc5099fbf4b&)) described as a _pre-generation control shell_ for **GPT-5**, designed to enforce strict syntax, intent locking, and drift prevention before generation begins.
*   **Gemini Jailbreak Shared**: A member shared a three-turn jailbreak tested vs **Gemini**, involving specific instructions and prompts to _mutate intents to prevent constraint friction_.
*   **Experimentation with Mode Injection**: A member mentioned using **...

[Read original post](https://news.smol.ai/issues/26-01-27-kimi-k25/)

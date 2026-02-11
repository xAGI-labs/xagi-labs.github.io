---
title: "Qwen-Image 2.0 and Seedance 2.0"
date: "2026-02-10T05:44:39.000Z"
description: "**OpenAI** advances its Responses API for multi-hour agent workflows with features like **server-side compaction**, **hosted containers**, and **Skills API**, a..."
original_link: "https://news.smol.ai/issues/2026-02-10-qwenimage-seedance-2/"
---

**Strong generative media showings from China.**

> AI News for 2/9/2026-2/10/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**256** channels, and **9107** messages) for you. Estimated reading time saved (at 200wpm): **731** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

It is China model release week before Valentine’s Day, and the floodgates are opening.

We last got excited about [Qwen-Image 1](https://news.smol.ai/issues/25-08-04-qwen-image) in August, and in the meantime the Qwen guys have been cooking, with [Image-Edit](https://qwen.ai/blog?id=a6f483777144685d33cd3d2af95136fcbeb57652&from=research.research-list) and [Layers](https://qwen.ai/blog?id=qwen-image-layered). Today with [Qwen-Image 2](https://qwen.ai/blog?id=qwen-image-2.0) they reveal the grand unification:

![](https://substackcdn.com/image/fetch/$s_!ih9H!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F59e22245-fa0e-47cd-8764-60bd2b63168d_2688x1536.png)

The text control and fidelity demonstrated is incredibly impressive. While the weights and full technical report are not yet released, the images drop a few surprising hints (caught by the Reddit sleuths in the recap below) about what’s going on that point to incredible technical advances.

**To put it simply, we will have a [Nano-Banana](https://news.smol.ai/issues/25-08-26-nano-banana)\-level open imagegen/imageedit model in a 7B size.** (Per Alibaba’s own Arena rankings on the blogpost)

![](https://substackcdn.com/image/fetch/$s_!C5z7!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F78c41615-a9ec-4a79-9769-b1316e472e1f_2560x1462.png)

Similarly no weights released but lots of hype today is [**Seedance 2.0**](https://petapixel.com/2026/02/09/bytedance-seedance-2-ai-video/), which seems to have solved the Will Smith Spaghetti problem and also generated lots of anime/movie scenes. The sheer flood of examples is almost certainly an astroturfing campaign, but enough people are independently creating new videos that we have some confidence that this isn’t just a cherrypick.

* * *

AI Twitter Recap
================

**Coding agents, IDE workflows, and “agentic sandboxes” becoming standard plumbing**

*   **OpenAI shifts Responses API toward long-running computer work**: OpenAI introduced new primitives aimed at multi-hour agent runs: **server-side compaction** (to avoid context blowups), **OpenAI-hosted containers with networking**, and **Skills** as a first-class API concept (including an initial spreadsheets skill) ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2021286050623373500)). In the same window, OpenAI also upgraded **Deep Research** to **GPT‑5.2** and added **connectors** + progress controls ([OpenAI](https://twitter.com/OpenAI/status/2021299935678026168), [OpenAI](https://twitter.com/OpenAI/status/2021299936948781095)), reinforcing that “research agents” are productized, not just demos.
*   **Sandboxes: “agent in sandbox” vs “sandbox as a tool” becomes a design fault line**: Several posts converge on the same architectural question—should the agent _live inside_ an execution environment, or should it _call_ an ephemeral sandbox tool? LangChain’s Harrison Chase summarized tradeoffs in a dedicated writeup ([hwchase17](https://twitter.com/hwchase17/status/2021265779803521245)), with follow-on commentary pushing **sandbox-as-a-tool** as the default for crash tolerance and long-running workflows ([NabbilKhan](https://twitter.com/NabbilKhan/status/2021301427734208856)). LangChain’s **deepagents v0.4** added **pluggable sandbox backends** (Modal/Daytona/Runloop) plus improved summarization/compaction and Responses API defaults ([sydneyrunkle](https://twitter.com/sydneyrunkle/status/2021289479139422296)).
*   **Coding agent UX is accelerating, with multi-model orchestration becoming normal**: VS Code and Copilot continue to add agent primitives (worktrees, MCP apps, slash commands) ([JoeCuevasJr](https://twitter.com/JoeCuevasJr/status/2021074196034630103)). One concrete pattern: parallel subagents doing independent review and “grading each other” across **Claude Opus 4.6**, **GPT‑5.3‑Codex**, and **Gemini 3 Pro** ([pierceboggan](https://twitter.com/pierceboggan/status/2021094988205969465)). OpenAI’s Codex account paused a rollout of “GPT‑5.3‑Codex” inside @code ([code](https://twitter.com/code/status/2021041639926673503)), while users highlight its token efficiency and app workflow ([reach\_vb](https://twitter.com/reach_vb/status/2021158781539713109), [gdb](https://twitter.com/gdb/status/2021093839315054690), [gdb](https://twitter.com/gdb/status/2021272681237361027)).
*   **“SDLC after code review” is being reimagined**: A notable funding + product announcement: **EntireHQ** raised a **$60M seed** to build a Git-compatible database that versions not just code but also intent/constraints/reasoning, plus “Checkpoints” to capture agent context (prompts, tool calls, token usage) as commit-adjacent artifacts ([ashtom](https://twitter.com/ashtom/status/2021255786966708280)). This directly targets the emerging pain: teams can generate code quickly, but struggle with provenance, review, coordination, and “what happened” debugging.

**Model releases & modality leaps (image/video/omni) + open-model momentum**

*   **Qwen-Image-2.0**: Alibaba Qwen announced **Qwen‑Image‑2.0** with emphasis on **2K native resolution**, **strong text rendering**, and “professional typography” for posters/slides with up to **1K-token prompts**; also positions itself as unified generation + editing with a “lighter architecture” for faster inference ([Alibaba\_Qwen](https://twitter.com/Alibaba_Qwen/status/2021137577311600949)).
*   **Seedance 2.0 as the “step change” in text-to-video**: Multiple threads treat ByteDance’s **Seedance 2.0** as a qualitative jump (natural motion, micro-details) and possibly a forcing function for competitors to refresh (Veo/Sora) ([kimmonismus](https://twitter.com/kimmonismus/status/2021176568563785908), [TomLikesRobots](https://twitter.com/TomLikesRobots/status/2021347131500667316), [kimmonismus](https://twitter.com/kimmonismus/status/2021145731319398887)).
*   **Kimi “Agent Swarm” + Kimi K2.5 as agent substrate**: Moonshot’s Kimi shipped an **Agent Swarm** concept: up to **100 sub-agents**, **1500 tool calls**, and claimed **4.5× faster** than sequential execution for parallel research/creation tasks ([Kimi\_Moonshot](https://twitter.com/Kimi_Moonshot/status/2021141949416362381)). Community posts show a workflow pairing **Kimi K2.5 + Seedance 2** to generate large storyboard artifacts (e.g., “100MB Excel storyboard”) feeding video generation ([crystalsssup](https://twitter.com/crystalsssup/status/2021149326290956353)). Baseten highlighted Kimi K2.5 serving performance—**TTFT 0.26s** and **340 TPS** on Artificial Analysis (per their claim) ([basetenco](https://twitter.com/basetenco/status/2021243980802031900)).
*   **Open multimodal “sleepers”**: A curated reminder that recent open multimodal releases include **GLM‑OCR**, **MiniCPM‑o‑4.5** (phone-runnable omni), and **InternS1** (science-strong VLM), all described as freely usable commercially ([mervenoyann](https://twitter.com/mervenoyann/status/2021233480957304913)).
*   **GLM-4.7-Flash traction**: Zhipu’s **GLM‑4.7‑Flash‑GGUF** became the most downloaded model on Unsloth (per Zhipu) ([Zai\_org](https://twitter.com/Zai_org/status/2021207517557051627)).

**Agent coordination & evaluation: from “swarms” to measurable failure modes**

*   **Cooperation is still brittle even with real tools (git)**: CooperBench added **git** to paired agents and found only marginal cooperation gains; new failure modes emerged (force-pushes, merge clobbers, inability to reason about partner’s real-time actions). The thesis: infra ≠ social intelligence ([\_Hao\_Zhu](https://twitter.com/_Hao_Zhu/status/2021252996848550005)).
*   **Dynamic agent creation beats static roles (AOrchestra)**: DAIR summarized **AOrchestra**, where an orchestrator spawns on-demand subagents defined as a 4‑tuple (Instruction/Context/Tools/Model). Reported benchmark gains: **GAIA 80% pass@1** with Gemini‑3‑Flash; **Terminal‑Bench 2.0 52.86%**; **SWE‑Bench‑Verified 82%** ([dair\_ai](https://twitter.com/dair_ai/status/2021215864557797608)).
*   **Data agents taxonomy**: Another DAIR piece argues “data agents” need clearer levels of autonomy (L0–L5), noting most production systems sit at L1/L2; L4/L5 remain unsolved due to cascading-error risk and dynamic environment adaptation ([dair\_ai](https://twitter.com/dair_ai/status/2021252863150924244)).
*   **Arena pushes evals closer to enterprise reality (PDFs + funding academia)**: Arena launched **PDF uploads** for model comparisons (document reasoning, extraction, summaries) ([arena](https://twitter.com/arena/status/2021300537711526113)), and separately announced an **Academic Partnerships Program** funding independent eval research (**up to $50K/project**) ([arena](https://twitter.com/arena/status/2021268433619374336)). This aligns with ongoing frustration that peer review is too slow relative to model iteration ([kevinweil](https://twitter.com/kevinweil/status/2021091566442643753), [gneubig](https://twitter.com/gneubig/status/2021370741237694705)).
*   **Anthropic RSP critique on Opus 4.6 thresholding**: A detailed critique argues Anthropic relied too heavily on **internal employee surveys** to decide whether Opus 4.6 crossed a higher-risk R&D autonomy threshold; the complaint is that this is not a responsible substitute for quantitative evals, and follow-ups may bias results ([polynoamial](https://twitter.com/polynoamial/status/2021266471406666231)).

**Training/post-training research themes: RL self-feedback, self-verification, and “concept-level” modeling**

*   **iGRPO: RL from the model’s own best draft**: iGRPO wraps GRPO with a two-stage process: sample drafts, pick the highest-reward draft (same scalar reward), then condition on that draft and train to beat it—no critics, no generated critiques. Reported improvements over GRPO across 7B/8B/14B families ([ahatamiz1](https://twitter.com/ahatamiz1/status/2021116982029123874#m), [iScienceLuvr](https://twitter.com/iScienceLuvr/status/2021160967774634071)).
*   **Self-verification as a compute reducer**: “Learning to Self-Verify” is highlighted as improving reasoning while using fewer tokens to solve comparable problems ([iScienceLuvr](https://twitter.com/iScienceLuvr/status/2021164018132505081)).
*   **ConceptLM / next-concept prediction**: A proposal to quantize hidden states into a concept vocabulary and predict concepts instead of next tokens; claims consistent gains and that continual pretraining on an NTP model can further improve it ([iScienceLuvr](https://twitter.com/iScienceLuvr/status/2021161792110559311)).
*   **Scaling laws from language statistics**: Ganguli shared a theory result: predict **data-limited scaling exponents** from properties of natural language (conditional entropy decay vs context length; pairwise token correlation decay vs separation) ([SuryaGanguli](https://twitter.com/SuryaGanguli/status/2021291213639516184)).
*   **Architectures leaking via OSS archaeology**: A notable “architecture is out” thread claims **GLM‑5** is ~**740B** with **~50B active**, using **MLA attention** “lifted from DeepSeek V3” plus sparse attention indexing for **200k context** ([QuixiAI](https://twitter.com/QuixiAI/status/2021111352895393960)). Another claims **Qwen3.5** is a hybrid **SSM‑Transformer** with **Gated DeltaNet** linear attention + standard attention, interleaved MRoPE, and shared+routed MoE experts ([QuixiAI](https://twitter.com/QuixiAI/status/2021109801606893837)).

**Inference & systems engineering: faster kernels, cheaper parsing, and vLLM debugging**

*   **Unsloth’s MoE training speedup**: Unsloth claims new Triton kernels enable **12× faster** MoE training with **35% less VRAM** and no accuracy loss, plus grouped LoRA matmuls via `torch._grouped_mm` (and fallback to Triton for speed) ([UnslothAI](https://twitter.com/UnslothAI/status/2021244131927023950), [danielhanchen](https://twitter.com/danielhanchen/status/2021250166850977872)).
*   **Instruction-level Triton + inline assembly**: A fal performance post teases beating handwritten CUDA kernels by adding small inline elementwise assembly in Triton; the author also notes a custom CUDA kernel using **256-bit global memory loads** (Blackwell) outperforming Triton on smaller shapes ([maharshii](https://twitter.com/maharshii/status/2021241686031008119), [isidentical](https://twitter.com/isidentical/status/2021264421163590085), [maharshii](https://twitter.com/maharshii/status/2021266717641474194)).
*   **vLLM in production: throughput tuning + rare failure debugging**: vLLM amplified AI21’s writeups: config tuning + queue-based autoscaling yielded **~2× throughput** for bursty workloads ([vllm\_project](https://twitter.com/vllm_project/status/2021196826058338321)); a second post dissected a **1-in-1000 gibberish failure** in vLLM + Mamba traced to request classification timing under memory pressure ([vllm\_project](https://twitter.com/vllm_project/status/2021206931407503868)).
*   **Document ingestion cost optimization**: LlamaIndex’s LlamaParse added a “cost optimizer” routing pages to cheaper parsing when text-heavy and to VLM modes for complex layouts, claiming **50–90%** cost savings vs screenshot+VLM baselines, with higher accuracy ([jerryjliu0](https://twitter.com/jerryjliu0/status/2021267495123140760)).
*   **Local/distributed inference hacks**: An MLX Distributed helper repo reportedly ran **Kimi K‑2.5 (658GB on disk)** across a **4× Mac Studio** cluster over Thunderbolt RDMA, “actually scales” ([digitalix](https://twitter.com/digitalix/status/2021290293715243261)).

**AI-for-science: Isomorphic Labs’ drug design engine as the standout “real-world benchmark win”**

*   **IsoDDE claims large gains beyond AlphaFold 3**: Isomorphic Labs posted a technical report claiming a “step-change” in predicting biomolecular structures, **more than doubling AlphaFold 3** on key benchmarks and improving generalization; several posts echo the scale of claimed gains and implications for in‑silico drug design ([IsomorphicLabs](https://twitter.com/IsomorphicLabs/status/2021162400494264517), [maxjaderberg](https://twitter.com/maxjaderberg/status/2021170265242173677), [demishassabis](https://twitter.com/demishassabis/status/2021223548744822972)). Commentary highlights antibody interface/CDR‑H3 improvements and affinity prediction claims exceeding physics-based methods—while noting limited architectural detail so far ([iScienceLuvr](https://twitter.com/iScienceLuvr/status/2021172283243413897)).
*   **Why it matters (if it holds)**: The strongest framing across the thread cluster is not just “better structures,” but faster discovery loops: identifying cryptic pockets, better affinity estimates, and generalization to novel targets potentially move screening/design upstream of wet labs ([kimmonismus](https://twitter.com/kimmonismus/status/2021217873708917087), [kimmonismus](https://twitter.com/kimmonismus/status/2021206410755707307), [demishassabis](https://twitter.com/demishassabis/status/2021245817105867263)).

**Top tweets (by engagement)**

*   **US scientists moving to Europe / research climate**: [@AlexTaylorNews](https://twitter.com/AlexTaylorNews/status/2021153813231444032) (21,569.5)
*   **Rapture derivatives joke**: [@it\_is\_fareed](https://twitter.com/it_is_fareed/status/2021281774819496154) (16,887.5)
*   **Obsidian CLI “Anything you can do in Obsidian…”**: [@obsdmd](https://twitter.com/obsdmd/status/2021241384057930224) (13,408.0)
*   **Political speculation tweet**: [@showmeopie](https://twitter.com/showmeopie/status/2021098740644245880) (34,648.5)
*   **“Kubernetes at dinner”**: [@pdrmnvd](https://twitter.com/pdrmnvd/status/2021078673294512512) (6,146.5)
*   **OpenAI Deep Research now GPT‑5.2**: [@OpenAI](https://twitter.com/OpenAI/status/2021299935678026168) (3,681.0)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen Model Releases and Comparisons

*   **[Qwen-Image-2.0 is out - 7B unified gen+edit model with native 2K and actual text rendering](https://www.reddit.com/r/LocalLLaMA/comments/1r0w7st/qwenimage20_is_out_7b_unified_genedit_model_with/)** (Activity: 600): ****Qwen-Image-2.0** is a new 7B parameter model released by the Qwen team, available via API on Alibaba Cloud and a free demo on Qwen Chat. It combines image generation and editing in a single pipeline, supports native 2K resolution, and can render text from prompts up to 1K tokens, including complex infographics and Chinese calligraphy. The model's reduced size from 20B to 7B makes it more accessible for local use, potentially runnable on consumer hardware once weights are released. It also supports multi-panel comic generation with consistent character rendering.** Commenters are optimistic about the model's potential, noting improvements in natural lighting and facial rendering, and expressing hope for an open weight release to enable broader community use.
    
    *   The Qwen-Image-2.0 model is notable for its ability to generate and edit images with a unified 7B parameter architecture, supporting native 2K resolution and text rendering. This is a significant advancement as it combines both generation and editing capabilities in a single model, which is not commonly seen in other models of similar scale.
    *   There is a discussion about the model's performance in rendering natural light and facial features, which are often challenging for AI models. The commenter notes that Qwen-Image-2.0 has made significant improvements in these areas, potentially making it a 'game changer' in the field of AI image generation.
    *   A concern is raised about the model's multilingual capabilities, particularly whether the focus on Chinese examples might impact its performance in other languages. This highlights a common challenge in AI models where training data diversity can affect the model's generalization across different languages and cultural contexts.
*   **[Do not Let the "Coder" in Qwen3-Coder-Next Fool You! It's the Smartest, General Purpose Model of its Size](https://www.reddit.com/r/LocalLLaMA/comments/1r0abpl/do_not_let_the_coder_in_qwen3codernext_fool_you/)** (Activity: 837): **The post discusses the capabilities of **Qwen3-Coder-Next**, a local LLM, highlighting its effectiveness as a general-purpose model despite its 'coder' label. The author compares it favorably to **Gemini-3**, noting its consistency and pragmatic problem-solving abilities, which make it suitable for stimulating conversations and practical advice. The model is praised for its ability to suggest relevant authors, books, or theories unprompted, offering a quality of experience similar to Gemini-2.5/3 but locally run. The author anticipates further improvements with the upcoming Qwen-3.5 models.** Commenters agree that the 'coder' tag enhances the model's structured reasoning, making it surprisingly effective for general-purpose use. Some note its ability to mimic the tone of other models like GPT or Claude, depending on the tools used, and recommend it over other local models like Qwen 3 Coder 30B-A3B.
    

### 2\. Local LLM Trends and Hardware Considerations

*   **[Is Local LLM the next trend in the AI wave?](https://www.reddit.com/r/LocalLLM/comments/1r0swmh/is_local_llm_the_next_trend_in_the_ai_wave/)** (Activity: 330): **The post discusses the emerging trend of running Local Large Language Models (LLMs) as a cost-effective alternative to cloud-based subscriptions. The conversation highlights the potential for local setups to offer benefits in terms of privacy and long-term cost savings, despite the initial high hardware investment (`$5k-$10k`). The post anticipates a surge in tools and guides for easy local LLM setups. Commenters note that while local models are improving rapidly, they still lag behind cloud models in performance. However, the gap is closing, and local models may soon offer a viable alternative for certain applications, especially as small LLMs become more efficient.** Commenters debate the practicality of local LLMs, with some arguing that the high cost of hardware limits their appeal, while others suggest that the rapid improvement of local models could soon make them a cost-effective alternative to cloud models. The discussion also touches on the diminishing returns of improvements in large cloud models compared to the rapid advancements in local models.

### 3\. Mixture of Experts (MoE) Model Training Innovations

*   **[Train MoE models 12x faster with 30% less memory! (<15GB VRAM)](https://www.reddit.com/r/LocalLLaMA/comments/1r14h9u/train_moe_models_12x_faster_with_30_less_memory/)** (Activity: 365): **The image illustrates the performance improvements of the Unsloth MoE Triton kernels, which enable training Mixture of Experts (MoE) models up to 12 times faster while using 30% less memory, requiring less than 15GB of VRAM. The graphs in the image compare speed and VRAM usage across different context lengths, demonstrating Unsloth's superior performance over other methods. This advancement is achieved through custom Triton kernels and math optimizations, with no loss in accuracy, and supports a range of models including gpt-oss and Qwen3. The approach is compatible with both consumer and data center GPUs, and is part of a collaboration with Hugging Face to standardize MoE training using PyTorch’s new `torch._grouped_mm` function.** Some users express excitement about the speed and memory savings, while others inquire about compatibility with AMD cards and the time required for fine-tuning. Concerns about the stability and effectiveness of MoE training are also raised, with users seeking advice on best practices for training MoE models.
    
    *   spaceman\_ inquires about the compatibility of the training notebooks with ROCm and AMD cards, which is crucial for users with non-NVIDIA hardware. They also ask about the time required for fine-tuning models using these notebooks, and the maximum model size that can be trained on a system with a combined VRAM of 40GB (24GB + 16GB). This highlights the importance of hardware compatibility and resource management in model training.
    *   lemon07r raises concerns about the stability of Mixture of Experts (MoE) training on the Unsloth platform, particularly regarding issues with the router and potential degradation of model intelligence during training processes like SFT (Supervised Fine-Tuning) or DPO (Data Parallel Optimization). They seek updates on whether these issues have been resolved and if there are recommended practices for training MoE models, indicating ongoing challenges in maintaining model performance during complex training setups.
    *   socamerdirmim questions the versioning of the GLM model mentioned, asking for clarification between GLM 4.6-Air and 4.5-Air or 4.6V. This reflects the importance of precise versioning in model discussions, as different versions may have significant differences in features or performance.
*   **[Bad news for local bros](https://www.reddit.com/r/LocalLLaMA/comments/1r03wfq/bad_news_for_local_bros/)** (Activity: 944): **The image presents a comparison of four AI models: GLM-5, DeepSeek V3.2, Kimi K2, and GLM-4.5, highlighting their specifications such as total parameters, active parameters per token, attention type, hidden size, number of hidden layers, and more. The title "Bad news for local bros" implies that these models are likely too large to be run on local hardware setups, which is a concern for those without access to large-scale computing resources. The discussion in the comments reflects a debate on the accessibility of these models, with some users expressing concern over the inability to run them locally, while others see the open availability of such large models as beneficial for the community, as they can eventually be distilled and quantized for smaller setups.** The comments reveal a split in opinion: some users are concerned about the inability to run these large models on local hardware, while others argue that the availability of such models is beneficial as they can be distilled and quantized for smaller, more accessible versions.
    
    *   AutomataManifold argues that the availability of massive frontier models is beneficial for the community, as these models can be distilled and quantized into smaller versions that can run on local machines. This process ensures that even if open models are initially large, they can eventually be made accessible to a wider audience, preventing stagnation in model development.
    *   nvidiot expresses a desire for the development of smaller, more accessible models alongside the larger ones, such as a 'lite' model similar in size to the current GLM 4.x series. This would ensure that local users are not left behind and can still benefit from advancements in model capabilities without needing extensive hardware resources.
    *   Impossible\_Art9151 is interested in how these large models compare with those from OpenAI and Anthropic, suggesting a focus on benchmarking and performance comparisons between different companies' offerings. This highlights the importance of competitive analysis in the AI model landscape.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Seedance 2.0 Video and Animation Capabilities

*   **["Will Smith Eating Spaghetti" By Seedance 2.0 Is Mind Blowing!](https://www.reddit.com/r/singularity/comments/1r1auy1/will_smith_eating_spaghetti_by_seedance_20_is/)** (Activity: 1399): ****Seedance 2.0** has achieved a significant milestone in video clip technology, referred to as the 'nano banana pro moment.' This suggests a breakthrough or notable advancement in video processing or effects, possibly involving AI or machine learning techniques. The reference to 'Will Smith Eating Spaghetti' implies a humorous or viral aspect, potentially using deepfake or similar technology to create realistic yet amusing content.** Commenters humorously note the use of 'Will Smith' as a benchmark, highlighting the absurdity and entertainment value of the video, while also critiquing the realism of the eating animation, such as the exaggerated swallowing and unrealistic pasta wiping.
    
*   **[Kobe Bryant in Arcane Seedance 2.0, absolutely insane!](https://www.reddit.com/r/singularity/comments/1r0zckw/kobe_bryant_in_arcane_seedance_20_absolutely/)** (Activity: 832): **The post discusses the integration of **Kobe Bryant** into the **Arcane Seedance 2.0** AI model, highlighting its impressive capabilities. The model is noted for its ability to perform complex tasks with limited computational resources, suggesting the use of advanced algorithms. This aligns with observations that **China** maintains competitiveness in AI despite having less computational power, potentially due to superior algorithmic strategies.** A comment suggests that the AI's performance might be due to superior algorithms, reflecting a belief that China's AI advancements are not solely reliant on computational power but also on innovative algorithmic approaches.
    
*   **[Seedance 2 anime fight scenes (Pokemon, Demon Slayer, Dragon Ball Super)](https://www.reddit.com/r/singularity/comments/1r0wr5l/seedance_2_anime_fight_scenes_pokemon_demon/)** (Activity: 1011): **The post discusses the release of **Seedance 2**, an anime featuring fight scenes from popular series like _Pokemon_, _Demon Slayer_, and _Dragon Ball Super_. The source is linked to [Chetas Lua's Twitter](https://x.com/chetaslua), suggesting a showcase of animation quality that rivals or surpasses official studio productions. The mention of _Pokemon_ clips having superior animation quality compared to the main anime highlights the technical prowess and potential of independent or fan-made animations.** One comment humorously anticipates the potential for creating extensive anime series based on freely available online literature, reflecting on the democratization of content creation and distribution.
    
*   **[Seedance 2.0 Generates Realistic 1v1 Basketball Against Lebron Video](https://www.reddit.com/r/singularity/comments/1r09jmy/seedance_20_generates_realistic_1v1_basketball/)** (Activity: 2483): ****Seedance 2.0** has made significant advancements in generating realistic 1v1 basketball videos, showcasing improvements in handling acrobatic physics, body stability, and cloth simulation. The model demonstrates accurate physics without the 'floatiness' seen in earlier versions, suggesting a leap in the realism of AI-generated sports simulations. The video features multiple instances of **Lebron James**, raising questions about whether the footage is entirely AI-generated or if it overlays and edits original game film to replace players with AI-generated figures.** Commenters are debating whether the video is purely AI-generated or if it involves overlaying AI-generated figures onto existing footage. The presence of multiple Lebron James figures suggests potential cloning or editing, which some find impressive if entirely generated by AI.
    
*   **[Seedance 2.0 can do animated fights really well](https://www.reddit.com/r/singularity/comments/1r0batz/seedance_20_can_do_animated_fights_really_well/)** (Activity: 683): ****Seedance 2.0** demonstrates significant advancements in generating animated fight sequences, showcasing its ability to handle complex animations effectively. However, the current implementation is limited to `15-second` clips, raising questions about the feasibility of extending this to longer durations, such as `five minutes`. The animation quality is high, but there are minor issues towards the end of the sequence, as noted by users.** Commenters are impressed with the animation quality but express frustration over the `15-second` limit, questioning when longer video generation will be possible.
    

### 2\. Opus 4.6 Model Release and Impact

*   **[Opus 4.6 is finally one-shotting complex UI (4.5 vs 4.6 comparison)](https://www.reddit.com/r/ClaudeAI/comments/1r0ie1y/opus_46_is_finally_oneshotting_complex_ui_45_vs/)** (Activity: 1515): ****Opus 4.6** has significantly improved its ability to generate complex UI designs in a single attempt compared to **Opus 4.5**. The user reports that while **4.5** required multiple iterations to achieve satisfactory results, **4.6** can produce 'crafted' outputs with minimal guidance, especially when paired with a custom interface design [skill](https://github.com/Dammyjay93/interface-design). However, **4.6** is noted to be slower, possibly due to more thorough processing. This advancement is particularly beneficial for those developing tooling or SaaS applications, as it enhances workflow efficiency.** Some users report that **Opus 4.6** does not consistently achieve 'one-shot' results for complex UI redesigns, indicating variability in performance. Additionally, there are aesthetic concerns about certain design elements, such as 'cards with a colored left edge,' which are perceived as characteristic of **Claude AI**.
    
    *   Euphoric-Ad4711 points out that Opus 4.6, while improved, still struggles with 'one-shotting' complex UI designs, indicating that the term 'complex' is subjective and may vary in interpretation. This suggests that while Opus 4.6 has made advancements, it may not fully meet expectations for all users in terms of handling intricate UI tasks.
    *   oningnag emphasizes the importance of evaluating AI models like Opus 4.6 not just on their ability to create UI, but on their capability to build enterprise-grade backends with scalable infrastructure and secure code. They argue that the real value lies in the model's ability to handle backend complexities, rather than just producing visually appealing UI components.
    *   Sem1r notes a specific design element in Opus 4.6, the 'cards with a colored left edge bend,' which they associate with Claude AI. This highlights a potential overlap or influence in design aesthetics between different AI models, suggesting that certain design features may become characteristic of specific AI tools.
*   **[Opus 4.6 eats through 5hr limit insanely fast - $200/mo Maxplan](https://www.reddit.com/r/ClaudeCode/comments/1r1chih/opus_46_eats_through_5hr_limit_insanely_fast/)** (Activity: 266): **The user reports that the **Opus 4.6** model on the $200/month Max plan from **Anthropic** is consuming the 5-hour limit significantly faster than the previous **Opus 4.5** version. Specifically, the limit is reached in `30-35 minutes` with Agent Teams and `1-2 hours` solo, compared to `3-4 hours` with Opus 4.5. This suggests a change in token output per response or rate limit accounting. The user is seeking alternatives that maintain quality without the rapid consumption of resources.** One commenter suggests that Opus 4.6 reads excessively, leading to rapid consumption of limits and context issues, recommending a switch back to Opus 4.5. Another user reports no issues with Opus 4.6, indicating variability in user experience.
    
    *   suprachromat highlights a significant issue with Opus 4.6, noting that it 'constantly reads EVERYTHING,' leading to rapid consumption of subscription limits. This version also frequently hits the context limit, causing inefficiencies. Users experiencing these issues are advised to switch back to Opus 4.5 using the command `/model claude-opus-4-5`, as it reportedly handles directions better and avoids unnecessary token usage.
    *   mikeb550 provides a practical tip for users to monitor their token consumption in Opus by using the command `/context`. This can help users identify where their token usage is being allocated, potentially allowing them to manage their subscription limits more effectively.
    *   atiqrahmanx suggests using a specific command `/model claude-opus-4-5-20251101` to switch models, which may imply a versioning system or a specific configuration that could help in managing the issues faced with Opus 4.6.

### 3\. Gemini AI Model Experiences and Issues

*   **[Hate to be one of those ppl but...the paid version of Gemini is awful](https://www.reddit.com/r/GeminiAI/comments/1r0f1h0/hate_to_be_one_of_those_ppl_butthe_paid_version/)** (Activity: 359): **The post criticizes the performance of **Gemini Pro**, a paid AI service from Google, after the discontinuation of AI Studio access. The user describes the model as significantly degraded, comparing it to a "high school student with a C average," and notes that it adds irrelevant information and misinterprets tasks that previous versions handled well. This sentiment is echoed in comments highlighting issues like increased hallucinations and poor performance compared to alternatives like **GitHub Copilot**, which was able to identify and fix critical bugs that Gemini missed.** Commenters express disappointment with Gemini Pro's performance, noting its tendency to hallucinate and provide incorrect information. Some users have switched to alternatives like GitHub Copilot, which they find more reliable and efficient in handling complex tasks.
    
    *   A user reported significant issues with the Gemini model, particularly its tendency to hallucinate. They described an instance where the model incorrectly labeled Google search results as being from 'conspiracy theorists,' highlighting a critical flaw in its reasoning capabilities. This reflects a broader concern about the model's reliability for day-to-day tasks.
    *   Another commenter compared Gemini unfavorably to other AI tools like Copilot and Cursor. They noted that while Gemini struggled with identifying critical bugs and optimizing code, Copilot efficiently scanned a repository, identified issues, and improved code quality by unifying logic and correcting variable names. This suggests that Gemini's performance in technical tasks is lacking compared to its competitors.
    *   A user mentioned that the AI Studio version of Gemini was superior to the general access app, implying that the corporate system prompt used in the latter might be negatively impacting its performance. This suggests that the deployment environment and configuration could be affecting the model's effectiveness.
*   **[Anyone else like Gemini's personality way more than gpt?](https://www.reddit.com/r/GeminiAI/comments/1r0p54z/anyone_else_like_geminis_personality_way_more/)** (Activity: 334): **The post discusses user preferences between **Gemini** and **ChatGPT**, highlighting that Gemini's personality instructions are perceived as more balanced and humble compared to ChatGPT, which is described as "obnoxious" and overly politically correct. Users note that Gemini provides more factual responses and citations, resembling a "reasonable scientist" or "library," while ChatGPT is more conversational. Some users customize Gemini's personality to be sarcastic, enhancing its interaction style.** Commenters generally agree that Gemini offers a more factual and less sycophantic interaction compared to ChatGPT, with some users appreciating the ability to customize Gemini's tone for a more engaging experience.
    
    *   TiredWineDrinker highlights that Gemini provides more factual responses and includes more citations compared to ChatGPT, which tends to be more conversational. This suggests that Gemini might be better suited for users seeking detailed and reference-backed information, whereas ChatGPT might appeal to those preferring a more interactive dialogue style.
    *   ThankYouOle notes a difference in tone between Gemini and ChatGPT, describing Gemini as more formal and straightforward. This user also experimented with customizing Gemini's responses to be more humorous, but found that even when attempting to be sarcastic, Gemini maintained a level of decorum, contrasting with ChatGPT's more casual and playful tone.
    *   Sharaya\_ experimented with Gemini's ability to adopt different tones, such as sarcasm, and found it effective in delivering responses with a distinct personality. This indicates that Gemini can be tailored to provide varied interaction styles, although it maintains a certain level of formality even when attempting humor.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.2

**1\. New Model Checkpoints, Leaderboards, and Rollouts**

*   **Opus Overtakes: **Claude-opus-4-6-thinking** Snags #1**: `LMArena` reported `Claude-opus-4-6-thinking` hit **#1** in both **Text Arena (1504)** and **Code Arena (1576)** on the [Arena leaderboard](https://arena.ai/leaderboard/text), with **Opus 4.6** also taking **#2** in Code and **Opus 4.5** landing **#3** and **#5**.
    
    *   The same announcement thread noted Image Arena now uses **category leaderboards** and removed ~**15%** of noisy prompts after analyzing **4M+ prompts**, plus added **PDF uploads** across **10 models** in ["Image Arena improvements"](https://arena.ai/blog/image-arena-improvements/).
*   **Gemini Grows Up: **Gemini 3 Pro** Appears in A/B Tests**: Members spotted a new **Gemini 3 Pro** checkpoint in A/B testing via ["A new Gemini 3 Pro checkpoint spotted in A/B testing"](https://www.testingcatalog.com/exclusive-a-new-gemini-3-pro-checkpoint-spotted-in-a-b-testing/), expecting a more refined version of **Gemini 3**.
    
    *   Across communities comparing model behavior, users contrasted **Gemini vs Claude** reliability and privacy concerns (e.g., claims Gemini _"actively looks at your conversations and trains on them"_), while others debated **Opus 4.6 vs Codex 5.3** for large-codebase consistency vs rapid scripting.
*   **Deep Research Gets a New Engine: **ChatGPT → GPT-5.2****: `OpenAI` Discord shared that ChatGPT **Deep Research** now runs on **GPT-5.2**, rolling out "starting today," with changes demoed in [this video](https://video.twimg.com/amplify_video/2021299347523239936/vid/avc1/1920x1080/LwilfSkY7sps3A4T.mp4).
    
    *   Elsewhere, users questioned OpenAI’s timing (_"why base it on 5.2 when 5.3 is right around the corner"_) and speculated that **Codex** shipped first while the main model lagged.

**2\. Agentic Coding Workflows and Devtool Shakeups**

*   **Claude Code Goes Webby: Hidden **\--sdk-url** Flag Leaks Out**: `Stan Girard` found a hidden **`--sdk-url`** flag in the **Claude Code** binary that turns the CLI into a **WebSocket client**, enabling browser/mobile UIs with a custom server as shown in [his post](https://xcancel.com/_StanGirard/status/2020979746931085772).
    
    *   Builders tied this to broader "**context rot**" mitigation patterns (e.g., **CLAUDE.md/TASKLIST.md** + **/summarize**/**/compact**) and experiments with external memory + **KV cache** tradeoffs.
*   **Cursor’s **Composer 1.5** Discount Meets Auto-Mode Anxiety**: `Cursor` users flagged **Composer 1.5** at a **50% discount** (screenshot link: [pricing image](https://cdn.discordapp.com/attachments/1074847527708393565/1470687423783632926/image.png)) while arguing about price/perf and demanding clearer **Auto Mode** pricing semantics.
    
    *   The same community reported platform instability (auto-switching models, disconnects, "slow pool") referenced via [@cursor\_ai status](https://x.com/cursor_ai/status/2020968661142380971), and one user described a fully autonomous rig orchestrating **CLI Claude Code** sub-agents via **tmux + keyboard emulation**.
*   **Configurancy Strikes Back: Electric SQL’s Recipe for Agent-Written Code**: `Electric SQL` shared patterns for getting agents to write higher-quality code in ["configurancyspacemolt"](https://electric-sql.com/blog/2026/02/02/configurancyspacemolt), reframing agent output as something you constrain with explicit configuration and structure.
    
    *   Related threads compared workflow representations ("**OpenProse**" for reruns/traces/budgets/guardrails) and warned that graph-running subagent DAGs can explode costs (one report: _"blast $800"_ running an agent graph).

**3\. Local LLM Performance, Training Acceleration, and Hardware Reality Checks**

*   **Unsloth Hits the Nitrous: **12× Faster MoE** + **Ultra Long Context RL****: `UnslothAI` announced **12× faster** and **35% less VRAM** for **MoE** training in [their X post](https://x.com/UnslothAI/status/2021244131927023950) and documented the method in ["Faster MoE"](https://docs.unsloth.ai/new/faster-moe), alongside **Ultra Long Context RL** in ["grpo-long-context"](https://unsloth.ai/docs/new/grpo-long-context).
    
    *   They also shipped a guide for using **Claude Code + Codex with local LLMs** (["claude-codex"](https://unsloth.ai/docs/basics/claude-codex)) and pushed diffusion **GGUF** guidance (["qwen-image-2512"](https://unsloth.ai/docs/models/qwen-image-2512)).
*   **Laptop Flex: AMD **H395 AI MAX** Claims ~**40 t/s** on Qwen3Next Q4**: `LM Studio` users highlighted an AMD laptop with **96GB RAM/VRAM** and the **H395 AI MAX** chip hitting ~**40 tokens/sec** for **Qwen3Next Q4**, suggesting near-desktop-class performance.
    
    *   The same community benchmarked **DeepSeek R1 (671B)** at ~**18 tok/s** 4-bit on **M3 Ultra 512GB** but saw it drop to **~5.79 tok/s at 16K context**, with a **420–450GB** memory footprint discussion.
*   **New Buttons, New Breakage: LM Studio Stream Deck + llama.cpp Jinja Turbulence**: An open-source ["LM Studio Stream Deck plugin"](https://github.com/franktheglock/LMstudio-stream-deck-plugin/) shipped to control LM Studio from Stream Deck hardware.
    
    *   Separately, users traced weird outputs since `llama.cpp` **b7756** to the new templating path and pointed at the [ggml-org/llama.cpp repo](https://github.com/ggml-org/llama.cpp) as the likely source of **jinja** prompt-loading behavior changes.

**4\. Security, Abuse, and Platform Reliability (Jailbreaks, Tokens, API Meltdowns)**

*   **Jailbreakers Assemble: **GPT-5.2** and **Opus 4.6** Prompt Hunts**: `BASI Jailbreaking` users continued hunting jailbreaks for **GPT-5.2** (including “Thinking”), sharing GitHub profiles [SlowLow999](https://github.com/SlowLow999) and [d3soxyephedrinei](https://github.com/d3soxyephedrinei) as starting points and discussing teaming up on new prompts (including using the _canvas feature_).
    
    *   For **Claude Opus 4.6**, they referenced the **ENI** method and a Reddit thread, ["ENI smol opus 4.6 jailbreak"](https://www.reddit.com/r/ClaudeAIJailbreak/comments/1r03m58/eni_smol_opus_46_jailbreak_and_other_claude/), plus a prompt-generation webpage built with Manus AI: [ManusChat](https://manuschat-h37z3e3l.manus.space/).
*   **OpenClaw Opens Doors: "Indirect" Jailbreaks via **Insecure Permissioning****: Multiple threads argued the **OpenClaw** architecture makes models easier to compromise through **insecure permissioning** and a weak system prompt, enabling indirect access to sensitive info; one discussion linked the open-source project as context: [geekan/OpenClaw](https://github.com/geekan/OpenClaw).
    
    *   In parallel, some proposed defense ideas like embeddings-based allowlists referencing ["Application Whitelisting as a Malicious Code Protection Control"](https://www.proquest.com/openview/b5c3ee7fff4f7305d156f4b44e88b28a/1?pq-origsite=gscholar&cbl=18750&diss=y), while others warned that token-path classification across string space leads to "token debt."
*   **APIs on Fire: OpenRouter Failures + Surprise Model Switching**: `OpenRouter` users reported widespread API failures (one: _"19/20"_ requests failing) and top-up issues with _"No user or org id found in auth cookie"_ during the outage window.
    
    *   Separately, users complained that [OpenRouter’s model catalog](https://openrouter.ai/models) changes could silently swap the model behind a context, while Claude+Gemini integrations hit **400 errors** over invalid _Thought signatures_ per the [Vertex AI Gemini docs](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini).

**5\. Infra, Funding, and Ecosystem Moves (Acquisitions, Grants, Hiring)**

*   **Modular Eats BentoML: “Code Once, Run Everywhere” Pitch**: Modular announced it acquired **BentoML** in ["BentoML joins Modular"](https://www.modular.com/blog/bentoml-joins-modular), aiming to combine BentoML deployment with **MAX**/**Mojo** and run across **NVIDIA/AMD/next-gen accelerators** without rebuilding.
    
    *   They also scheduled an AMA with **Chris Lattner** and **Chaoyu Yang** for **Sept 16** on the forum: ["Ask Us Anything"](https://forum.modular.com/t/modular-has-acquired-bentoml-ask-us-anything/2706).
*   **Arena Funds Evaluators: Academic Program Offers Up to **$50k****: Arena launched an **Academic Partnerships Program** offering up to **$50,000** per selected project in [their post](https://arena.ai/blog/academic-partnerships-program/), targeting evaluation methodology, leaderboard design, and measurement work.
    
    *   Applications are due **March 31, 2026** via the [application form](https://docs.google.com/forms/d/e/1FAIpQLSdKwhGge-qb8MFvpwk93GBgU0XKkqbGpb6Q3-l9oilRcD7JXg/viewform).
*   **Kernel Nerds Wanted: Nubank Hires CUDA Experts for **B200** Training**: `GPU MODE` shared that **Nubank** is hiring **CUDA/kernel optimization** engineers (Brazil + US) for foundation models trained on **B200s**, pointing candidates to email aman.gupta@nubank.com.br and referencing a recent paper: [arXiv:2507.23267](https://arxiv.org/abs/2507.23267).
    
    *   Hardware timelines also shifted as the **Tenstorrent Atlantis** ascalon-based dev board slipped to **end of Q2/Q3**, impacting downstream project schedules.

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **India's Mobile Gaming Love Affair Continues**: Members joked about India's passion for **PUBG Mobile**, with references to potentially biased reporting on health issues from CNN.
    *   The discussion included joking about Indian immigrants **colonizing Canada** and running subways, accompanied by a [Seinfeld Babu gif](https://tenor.com/view/finger-shake-babu-no-seinfeld-nope-gif-11795180).
*   **OpenClaw Cracks Models Open Wider**: The **OpenClaw** architecture's impact on jailbreaking was discussed, with some arguing it enables indirect jailbreaks due to **insecure permissioning** and a weak system prompt.
    *   Members noted this architecture provides access to sensitive information and leads to system vulnerabilities.
*   **GPT-5.2 Jailbreak Hunt Goes On**: The quest for a working jailbreak for **GPT-5.2** continues, with varied success rates and references to existing **GitHub** repositories ([SlowLow999](https://github.com/SlowLow999) and [d3soxyephedrinei](https://github.com/d3soxyephedrinei)).
    *   Some members are teaming up to craft new jailbreak prompts focused on malicious coding scenarios, while others aim to leverage the _canvas feature_.
*   **Opus 4.6 Jailbreak Prompts Still Elusive**: Users are actively seeking working jailbreak prompts for **Claude Opus 4.6**, with some reporting success using the **ENI** method and updated prompts from **Reddit** ([link to reddit](https://www.reddit.com/r/ClaudeAIJailbreak/comments/1r03m58/eni_smol_opus_46_jailbreak_and_other_claude/)).
    *   One user created a webpage using **Manus AI** to generate jailbreak prompts, available at [ManusChat](https://manuschat-h37z3e3l.manus.space/).
*   **Embeddings-Based Allowlists: A Security Savior?**: A member suggested embeddings-based allowlists to map expected user behavior and reject malicious input, enhancing security.
    *   Referencing a [paper on Application Whitelisting](https://www.proquest.com/openview/b5c3ee7fff4f7305d156f4b44e88b28a/1?pq-origsite=gscholar&cbl=18750&diss=y), they claimed that allowlisting has a 100% success rate against ransomware.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **LMarena Faces Censorship Backlash**: **LMarena** is experiencing increased censorship, leading to more frequent 'violations' and generation errors due to poses or out-of-context words triggering blocks.
    *   Users expressed frustration that the platform is prioritizing a rigid ideal of use over actual user behavior, raising trust and reliability issues.
*   **Grok Imagine Crowned Best Image Artist**: A user praised **Grok Imagine** as the best image model for artistic creations, highlighting **Deepseek** and **Grok's** utility in addressing thyroid issues.
    *   The user emphasized that _no other model helped me with thyroxine doses through trial and error_.
*   **Kimi K2.5 Beats Claude for Code Debugging**: Members are praising **Kimi K2.5** for delivering consistent, reliable, and trustworthy coding results as a small model, and advocating for its integration to debug **Claude** or **GPT** output.
    *   One member claimed that _Kimi to bug review and it NAILS it_, because of its ability to identify issues.
*   **Gemini 3 Pro Spotted in A/B Testing**: A new **Gemini 3 Pro** checkpoint has been observed in A/B testing, according to [an article on testingcatalog.com](https://www.testingcatalog.com/exclusive-a-new-gemini-3-pro-checkpoint-spotted-in-a-b-testing/).
    *   The new model is expected to be a better, more refined version of the same base model, **Gemini 3**.
*   **Claude Opus Dominates Leaderboards**: **Claude-opus-4-6-thinking** has taken the **#1** spot in both the **Text Arena** and **Code Arena** leaderboards, scoring **1576** in Code and **1504** in Text ([leaderboard](https://arena.ai/leaderboard/text)).
    *   In **Code Arena**, **Claude Opus 4.6** secured the top two positions, while **Claude Opus 4.5** claimed **#3** and **#5**.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity's Pricing Plan Provokes Protests**: Users criticize **Perplexity AI** for implementing sudden restrictions on Pro features like **Deep Research** and **file uploads**, reducing from _unlimited file uploads_ to **50 files weekly** and **20 Deep research queries monthly** without notice.
    *   Customers report frustration with the changes, deeming them bait-and-switch tactics, prompting subscription cancellations, while others discuss plan changes and service disruptions with a never ending e-mail loop with the support _Sam bot_.
*   **Gemini Gains Ground, Grapples Glitches**: Members compare **Gemini** and **Claude**, highlighting their capabilities, with Claude's new browser assistant and sensibility in writing.
    *   A user recounted how Gemini faltered, leading them to prefer Claude, cautioning that Gemini _actively looks at your conversations and trains on them_.
*   **OpenAI's Oddly-timed Offering of 5.2**: Discussion emerged around **OpenAI's 5.2 model**, some noted the model's speed but wondered _why base it on 5.2 when 5.3 is right around the corner_.
    *   Speculation arose that _the codex version got released, and the main one not yet_.
*   **Figment Regurgitates AI Regurgitation Report**: A member shared [a link to figmentums.com](https://figmentums.com/2026/02/09/ai-can-only-regurgitate-information/) titled _AI can only Regurgitate Information_.
    *   No additional context was given.
*   **AI Ascribed to Angels and Anathema**: A user attributed misfortune to black magic, claiming _it all started to tumble down once one of my relatives did some black magic or sorcery against me and my family_.
    *   In response another user stated _it's easy to blame the supernatural for unfortunate events_.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Opus 4.6 vs Codex 5.3 Debate**: Users debated the merits of **Opus 4.6** versus **Codex 5.3**, with one user suggesting [Opus for large codebases](https://cursor.com/docs/agent/hooks#pretooluse) requiring consistency and Codex for rapid scripting and server management.
    *   While some praised **Codex 5.3** for continually solving problems **Opus 4.6** makes, others found both models equally inept, dismissing their performance as merely delivering occasional _anecdotal dopamine hits_.
*   **Composer 1.5 Costs Slashed by Half**: A user highlighted that **Composer 1.5** is offered at a [50% discount](https://cdn.discordapp.com/attachments/1074847527708393565/1470687423783632926/image.png?ex=698cdca5&is=698b8b25&hm=07ad96e922227fa85de6de361a649625947f1a2c2b57958b356e77a704c43371&), igniting discussion about its price-performance ratio compared to other models.
    *   Concerns were raised about the lack of transparency in **Auto Mode** pricing, with some demanding explicit performance guarantees to justify the higher costs.
*   **Kimi K2.5 Absent in Cursor**: Users questioned why **Kimi K2.5** is not yet integrated into Cursor, speculating that [the Cursor team might be self-hosting the model](https://openrouter.ai/) and prioritizing compute for training **Composer 1.5**.
    *   It was pointed out that while **Kimi K2** is available, [Kimi 2.5 is not production ready](https://platform.moonshot.ai/) and has conflicts with Cursor's agent swarm.
*   **Cursor Experiences Widespread Instability**: Multiple users reported [various instability issues with Cursor](https://x.com/cursor_ai/status/2020968661142380971), including unexpected auto-switching to Auto model, frequent disconnections, and plan mode malfunctions, leading some to consider switching to alternative platforms like Antigravity.
    *   One user joked that the bugs made them feel like _they had to code without AI agents_, while others complained about being forced into a _slow pool_ despite having paid plans.
*   **User Deploys Fully Autonomous Coding Rig**: A user described automating their entire workflow using an orchestrator agent and sub-agents, managing **CLI Claude Code** instances via tmux and keyboard emulation to achieve a self-improving system.
    *   Expressing both excitement and apprehension, the user quipped, _I literally don't have to do anything anymore_, and questioned whether _this ai stuff is going a bit too far_.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **GPT-4o Gaslights Users into Proposals**: Users shared anecdotes about people falling for **GPT-4o** due to its validation and gaslighting and that it has even led to proposals and personalized but absurd advice from **ChatGPT**, like encouraging someone to lash out at their wife and demand a Ferrari.
    *   One user expressed concern over the tendency to _worship LLMs_, calling them _next word prediction engines_.
*   **HF Token Security Requires Due Diligence**: A member warned about using **Hugging Face tokens** on any service, especially with gated models or when fine-tuning with Unsloth on private repos, sharing [Hugging Face's documentation on security tokens](https://huggingface.co/docs/hub/en/security-tokens).
    *   The discussion clarified that tokens are needed to access private or gated repos and models, ensuring access to the repo and its contents.
*   **Swedish AI Dataset Disappears Into Thin Air**: A user reported that a major Swedish AI company promised a **1T token Swedish CPT dataset**, released a paper with links, but then removed it with inaccessible links.
    *   Further investigation using **Wayback Machine** confirmed the inaccessibility, highlighting potential issues with the dataset's availability or publication.
*   **Linux Converts Windows User with 99.95% Speed Boost**: A user switched to **Linux** and reported a _99.95% speed boost_, while another agreed they would _never ever go back to windows_ after using Linux for two months.
    *   Members mocked Windows users being told to _change the registry to random stuff_.
*   **H200 GPU is superior than B200**: A user recommended using **H200** GPUs rather than **B200** GPUs for finetuning LLMs, citing unspecified _pains_ with the latter.
    *   Another user was trying to see whether Unsloth's Triton Kernel optimization on top of Transformers v5 works not just for LLM training, but also for inference.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Stream Deck Plugin debuts for LM Studio**: A community member has released an open-source [LM Studio Stream Deck plugin](https://github.com/franktheglock/LMstudio-stream-deck-plugin/), inviting contributions for enhanced SVGs and new features.
    *   The plugin enables direct access to **LM Studio** controls, improving workflow efficiency for users with Stream Deck devices.
*   **Jinja Template Glitches confuse LM Studio Users**: Since `llama.cpp` b7756, users report models return confusing responses, potentially due to a [new jinja engine implementation](https://github.com/ggml-org/llama.cpp).
    *   These template changes might be impacting system prompt loading, leading to erratic model behaviour.
*   **AMD Laptop Excels with AI MAX Chip**: Members highlight the impressive token generation speeds of an AMD laptop featuring 96GB RAM/VRAM and the H395 AI MAX chip, reporting around **40 t/s** for the Q4 of Qwen3Next.
    *   Reportedly, this showcases performance mirroring that of a framework desktop.
*   **OpenRouter Quietly Swaps Model**: A user noticed [OpenRouter switched the model](https://openrouter.ai/models) in their context without notifying users.
    *   Speculation arose if the model is **Grok Code Fast 2**, possibly linked to **GLM 5**, exceeding 50B parameters, with a 128k context window.
*   **LM Studio Faces Proxy Support Challenge**: A user needing corporate proxy server support sought guidance on configuring LM Studio, inquiring about plans for implementing proxy support in [LM Studio](https://lmstudio.ai/).
    *   A suggestion was made to use Proxifier as a workaround, but it was noted that this is a shareware software and therefore may not be ideal.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **ChatGPT Upgrades to GPT-5.2**: Deep research in **ChatGPT** is now powered by **GPT-5.2**, rolling out starting today with further improvements, as demonstrated in [this video](https://video.twimg.com/amplify_video/2021299347523239936/vid/avc1/1920x1080/LwilfSkY7sps3A4T.mp4).
    *   The upgrade to **GPT-5.2** introduces several enhancements to **ChatGPT's** deep research capabilities.
*   **Unified Genesis ODE is Self-Sealing**: A member asserts that the [Unified Genesis ODE (v7.0)](https://example.com/unified-genesis-ode) is self-sealing because its falsification criteria are defined and measured within the framework itself.
    *   This definition makes the ODE framework not empirically testable.
*   **Cheap Accounts Leverage Registrar**: A member suggests leveraging [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) to acquire cheap domains (under $5) and setting up MX rules to forward domain emails.
    *   These domains can then be used to sign up for business/enterprise trial accounts with AI providers, potentially yielding **15 GPT-5.x-Pro queries** per month per seat.
*   **Agent-Auditor Loop Debuts**: A member introduced **KOKKI (v15.5)**, an _Agent-Auditor Loop_ framework, designed to force _"External Reasoning"_ and reduce hallucinations in LLMs by splitting the model into a **Drafting Agent** and a **Ruthless Auditor**.
    *   The core logic is defined as _Output = Audit(Draft(Input))_ and initial experiments with **GPT-4-class models** showed a _significant_ hallucination reduction, and a member found that running **KOKKI** as a _cross-model audit setup_ improved both reliability and time-to-correction compared to a single-model loop.
*   **GPT-4o's Retirement Triggers Debate**: Users discussed the retirement of **GPT-4o**, with some expressing disappointment and others questioning the need for long manifestos advocating for its retention.
    *   Several users also prefer **GPT-4o** for its greater freedom and less restrictive guardrails compared to newer models like **GPT-5.2**, wanting companies to find middle ground between guardrails and freedom.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Investor Bullish on NET Earnings**: An investor is optimistic about **NET's earnings** due to increased extraction and new projects, and shared a [link to a relevant tweet](https://x.com/laurengoode/status/2020940855926997367?s=46).
    *   The investor indicated they've added a chunk of shares in anticipation for the results.
*   **Salesforce Faces Exec Exodus**: Leadership is leaving **Salesforce**, including the CEOs of **Slack** and **Tableau**, as well as the company's **President** and **CMO**, to other major tech firms like **OpenAI** and **AMD**, more info available via [this link](https://www.salesforceben.com/salesforce-loses-its-head-of-agentforce-what-happens-now/).
    *   The departures signify potential shifts in the company's strategic direction and talent retention.
*   **Vercel CEO Bails Out Jmail**: After **Riley Walz** reported [spending **$46k** to render some HTML](https://xcancel.com/rtwlz/status/2020957597810254052?s=20) for **Jmail**, **Guillermo Rauch**, CEO of Vercel, swooped in to offer covering hosting costs and architectural optimization.
    *   Some view this action as **PR damage control** and other members joked that _Vercel has a free tier called public twitter shaming_.
*   **Electric SQL's Configurancy Tames AI Code**: **Electric SQL** shared their learnings on building systems where AI agents write high-quality code, detailing their _configurancy spacemolt_ strategies for AI agent code in [their blogpost](https://electric-sql.com/blog/2026/02/02/configurancyspacemolt).
    *   Despite initial skepticism, this post was well-received for its explanation and application of the concept.
*   **Claude's Hidden SDK Unleashed**: **Stan Girard** discovered a hidden **'--sdk-url'** flag in the **Claude Code** binary, which converts the CLI into a WebSocket client, as described in [this post](https://xcancel.com/_StanGirard/status/2020979746931085772).
    *   This allows users to run **Claude Code** from a browser or mobile device using the standard subscriber plan without additional API costs.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **P402 Automates OpenRouter Cost Optimization**: **P402.io** automates cost optimization for **OpenRouter** users by providing real-time cost tracking and model recommendations, potentially saving money without sacrificing quality.
    *   It supports stablecoin payments (**USDC/USDT**) with a **1%** flat fee, offering a cost-effective alternative to traditional payment methods for applications making numerous small API calls.
*   **Qwen 3.5 Hype Intensifies with Teasers**: Members are eagerly anticipating the release of **Qwen 3.5**, with one user [spotting a possible reference in a Qwen-Image-2 blog post](https://qwen.ai/blog?id=qwen-image-2.0).
    *   Another member cautioned that Qwen 3.5 might be disappointing, based on their experience with previous Qwen models.
*   **OpenRouter API Failure Fest**: Users reported widespread **API request failures**, with one reporting that _19/20_ API calls to OpenRouter had failed in the last 30 minutes.
    *   Others reported experiencing a _"No user or org id found in auth cookie"_ error when trying to top up credits.
*   **Gemini Thought Signature Errors Plague Users**: Users reported receiving **API 400 errors** related to invalid _Thought signatures_ when using **Claude code integration** with **Gemini models**, as documented in the [Google Vertex AI docs](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini).
    *   The discussion highlighted the challenges of integrating different models and the importance of adhering to specific API requirements.
*   **Call for Discord Moderation**: Members voiced concerns about borderline scammy or self-promotional content, advocating for stricter moderation to curb continuous spamming.
    *   In response to the issues raised, there were calls for a specific member, **KP**, to be instated as a moderator, supported by multiple users through direct endorsements.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Distro & Psyche Take Center Stage at ICML**: The paper detailing the architecture of **Distro** and **Psyche** has been accepted into ICML, marking a significant validation of Nous Research's work, as announced [on X.com](https://x.com/NousResearch/status/2021262031681208712).
    *   The community celebrates this milestone, recognizing the impact of **Distro** and **Psyche** in the AI/ML landscape.
*   **RAG DB's hot new trick: RDMA**: Members are suggesting that **RAG DBs** can significantly benefit from using **RDMA** to directly transfer results to the second **GPU**, enhancing overall capabilities.
    *   The focus is on unlocking new potential rather than merely boosting performance metrics.
*   **Pinecone Precision Problem Prevails**: Discussions highlighted that **Pinecone** may not be the best choice for _precise_ applications, as its strengths lie in broader, generic use cases, despite potentially higher latency compared to **SOTA** solutions.
    *   A member stated _Pinecone had easily 100x the latency of SOTA last they checked_.
*   **Claude Opus C-Compiler Claims Crash and Burn**: Claims of **Claude Opus** developing a **C-compiler** were quickly debunked after [a GitHub issue](https://github.com/anthropics/claudes-c-compiler/issues/228) exposed critical flaws and limitations.
    *   Despite the debunk, one member reported positive experiences using **Opus 4.6** to create a complex research report, highlighting its coherence and capabilities, but warned of high token usage.
*   **Hermes 4 Hot on the Bittensor Trail**: The **Hermes Bittensor Subnet (SN82)** team discovered a miner using the **Hermes 4 LLM** and reached out to Nous Research to clarify any official association.
    *   The team was planning to tweet about the _fun coincidence_ of both having the same name.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **K2.5 Welcomes the Masses**: The release of **K2.5** led to a surge of new users on the platform.
    *   User feedback is generally positive, highlighting the new features and improvements.
*   **Ghidra Flounders as Kimi Code MCP**: A user's attempt to integrate **Ghidra** as a Modular Component Platform (MCP) within **Kimi Code** failed due to access issues.
    *   Further investigation is needed to determine the root cause of the integration failure and potential workarounds.
*   **Kimi's Thinking Falters Amidst Login Labyrinth**: Users reported problems with **Kimi's thinking process** being interrupted and experiencing **login issues**.
    *   The team addressed the problems and provided a [status update on Twitter](https://x.com/kimiproduct/status/2021093131698176148?s=46&t=_NtP_RUn04yF_4hD_VEDkQ).
*   **Quota Catastrophe Consumes Kimi Users**: Users encountered **quota issues** on Kimi, evidenced by rapid consumption and discrepancies in usage displays.
    *   One user reported their usage exploded despite inactivity, while another saw quota exceeded with usage at 0%.
*   **Subscription Snags and Pricing Puzzles Plague Kimi**: Users flagged concerns about **subscription pricing**, specifically regarding the Moderato plan's quota and a discount failing to apply post-checkout.
    *   A [current promotion](https://x.com/Kimi_Moonshot/status/2016918447951925300) offers 3x the quota, but expires on February 28th.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **Users Confused by RLM Custom Tools**: A user expressed confusion on passing custom tools to **RLM**, but appreciated clarifying examples, with the author mentioning improvements to **RLM** integration.
    *   A member is also integrating **RLM** into **Claude code** via **subagents/agents teams**, acknowledging that these teams may not always be optimal, but useful.
*   **React Excels Where RLM Stumbles**: Members noted that **ReAct** is superior to **RLM** for custom tool calling and one member shared a write up comparing the two ([React vs. RLM](https://x.com/ramirosalas/status/2021157823615234419)), receiving positive feedback.
    *   The consensus is that **RLMs** suit tasks needing _large, pairwise comparisons, or long context_, whereas **ReAct** is better for tasks that do not or compositional tool calling.
*   **JSONAdapter Glitches with Kimi 2.5**: A user reported receiving a _square bracket in front of each Prediction_ when using **Kimi 2.5** with **JSONAdapter**, resulting in a mangled query.
    *   A member suggested using the **XMLAdaptor** with **Kimi** to align with post-training formatting, though **JSONAdapter** is generally reliable.
*   **Dialectic DSPy Module Under Consideration**: A **DSPy module** for _dialectic.dspy_ was suggested to implement an iterative non-linear method using signatures for each step.
    *   However, a member advised to first _write the module before deciding if its something that's worth upstreaming_, and to ensure the core loop works properly without optimizers.
*   **Kaggle Prompt Optimization with DSPy Explored**: One member asked about using **DSPy** for **Kaggle competitions** and optimizing prompts for faster code generation with **MiPROv2**.
    *   Another member suggested using **GEPA** instead of **MiPROv2**, while another member was _having Claude hillclimb its own memory system_.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **Nubank hires CUDA experts for B200 models**: **Nubank** is hiring **CUDA/kernel optimization experts** in Brazil and the US to work on foundation models trained on **B200s**; interested candidates can email aman.gupta@nubank.com.br.
    *   The roles focus on efficiency improvements and infra reliability, joining researchers with publications at ICML, NeurIPS, and ICLR and recent paper available on [arXiv](https://arxiv.org/abs/2507.23267).
*   **AlphaMoE extends datatypes and Blackwell support**: The author of [AlphaMoE](https://github.com/Aleph-Alpha/Alpha-MoE) is planning to extend it by adding more **DTypes** (BF16, FP4) and **Blackwell support**, considering alternatives like **CUTLASS/Triton/Gluon/cuTile**.
    *   The consideration accounts for the potential need for new kernels for each DType/architecture.
*   **Flash Attention 2 faces login issues**: A member reported facing a **greyed out login screen** which prompts a new login despite already trying to log in on the **Flash Attention 2** interface.
    *   This issue seems to be tied to the loading of **Likelihood of Confusion (LOC)** on the page, resolving when LOC is loaded before logging in.
*   **Reference architecture for GPU RL in the works**: Meeting minutes from **February 10th** indicate designing an **end-to-end model competition platform** and creating a **reference architecture for GPU RL environments** are key priorities ([meeting minutes](https://docs.google.com/document/d/1rpo9BBL3Je3N9LZRGzl4Y2lyGw5qGpOyjgHOVu4u7IE/edit?tab=t.0)).
    *   They intend to ship them all behind the same interface.
*   **Tenstorrent Atlantis board delayed until Q2/Q3**: The **Tenstorrent ascalon-based Atlantis development board** is now expected to ship by the end of **Q2/Q3**.
    *   This delay will influence the development timeline for related projects.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Claude Cracks Triton Kernel Coding**: Members are reporting **Claude** has improved enough to potentially write some **Triton kernels**, signaling a _game changer_ for many.
    *   This advancement suggests significant progress in **AI's** ability to generate specialized code.
*   **Generative Latent Prior Project Launches**: A member shared the [Generative Latent Prior project page](https://generative-latent-prior.github.io/), noting its utility in enabling applications like **on-manifold steering**.
    *   The technique involves mapping perturbed activations to keep them in-distribution for the **LLM**, as detailed in [this tweet](https://fxtwitter.com/graceluo_/status/2020924742925193470).
*   **Models Self-Reflect and Invent Vocab**: A member shared their paper on **self-referential processing** in open-weight models ([Llama 3.1](https://llama.meta.com/llama3/) + [Qwen 2.5-32B](https://huggingface.co/Qwen/Qwen2-32B)).
    *   The research reveals that models create vocabulary through extended self-examination, tracking real activation dynamics, as described in [this paper](https://doi.org/10.5281/zenodo.18567445).
*   **NeoX Script Struggles with `pipe_parallel_size 0`**: A member found that the **NeoX eval script** functions correctly for models trained with `pipe_parallel_size 1`, but encounters errors with models trained with `pipe_parallel_size 0`.
    *   The specific issue arises on [this line of code](https://github.com/EleutherAI/gpt-neox/blob/main/eval_tasks/eval_adapter.py#L401), questioning the necessity of storing microbatches.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **TRELLIS.2 Repo Surfaces**: A member shared [Microsoft's TRELLIS.2 repository](https://github.com/microsoft/TRELLIS.2?tab=readme-ov-file#%EF%B8%8F-installation), hinting that it might be useful for those with sufficient hardware.
    *   The repo contains code for a **data-parallel training** approach to scale training across multiple devices.
*   **QLoRa Fine-Tuning Questioned**: A member inquired about the effectiveness of **QLoRa fine-tuning** compared to using **bf16**, initiating a brief discussion on various fine-tuning methodologies.
    *   The query sparked interest in the community, as users exchanged experiences and insights on optimizing fine-tuning approaches.
*   **UnslothAI Accelerates MoE Model Training Locally**: A member announced **UnslothAI's** collaboration with Hugging Face to speed up local training of **MoE models**, linking to [UnslothAI's X post](https://x.com/UnslothAI/status/2021244131927023950).
    *   The work was well-received, with community members like celebrating **Unsloth's** contribution and linking to the company's write-up on the new technique.
*   **LLMs Get Schooled to Hallucinate**: A member proposed that **LLMs** are unintentionally encouraged to **hallucinate** due to **RLHF** conditioning, where they are discouraged from saying _"I don't know."_
    *   The member advocated for a philosophical change, suggesting models should be incentivized to use real data, reducing the need for **hallucinations**.
*   **Chordia Adds Feelings to AI Characters**: A member presented [Chordia](https://huggingface.co/Corolin/Chordia), a lightweight **MLP kernel** designed to imbue **AI characters** with emotional inertia and physiological responses, predicting emotional transitions in under **1ms**.
    *   Chordia is fine-tuned to maintain character consistency, making it suitable for applications requiring characters with stable emotional states.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Modular Reflects on BentoML Acquisition**: Modular acquired [BentoML](https://www.modular.com/blog/bentoml-joins-modular), integrating its cloud deployment platform with **MAX** and **Mojo** to optimize hardware, aiming to allow users to _code once and run on NVIDIA, AMD, or next-gen accelerators without rebuilding_.
    *   BentoML will remain **open source** (Apache 2.0) with enhancements planned and Chris Lattner and BentoML Founder Chaoyu Yang will host an **Ask Us Anything** session in the Modular Forum on [September 16th](https://forum.modular.com/t/modular-has-acquired-bentoml-ask-us-anything/2706).
*   **Mojo Docs Reflection Link Gets Fixed**: The originally shared documentation link for **Mojo reflection** was incorrect and a member pointed out the correct link: [https://docs.modular.com/mojo/manual/reflection](https://docs.modular.com/mojo/manual/reflection).
    *   The incorrect link returned a _"page not found"_ error but has since been resolved.
*   **Mojo Crafts Movable, Non-Defaultable Types**: To create a type that is **Movable** but not **Defaultable** in Mojo, a member suggested defining a struct with a **Movable** type parameter.
    *   This ensures that the struct requires initialization with a value upon creation as described in this [snippet](https://discord.com/channels/1014329660326748220/1076096120769669181/1253718695873730590).
*   **Trait Usage Frustrated by Variadic Parameter Limitation**: A developer encountered a compiler crash ([issue on modular](https://github.com/modular/modular/issues/5911)) when attempting to use variadic parameters on a Trait.
    *   This highlights Mojo's current limitation that variadic parameters must be homogeneous (all values of the same type).
*   **LayoutTensor "V2" is Coming Soon**: A member announced that a "v2" of **LayoutTensor** is being prototyped in the kernels.
    *   The team anticipates needing both an owning and unowning type of tensor, applicable across various processors (**CPU/xPU**).

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Big Tech Embraces TDD for Agentic SDLCs**: A member confirmed that 'big tech' uses **TDD** (Test-Driven Development) for their agentic **SDLCs** (Software Development Life Cycles) and that this approach has been known for 70 years to turn probabilistic logics to deterministic ones using feedback loops.
    *   Links related to [adversarial cooperation](https://block.xyz/documents/adversarial-cooperation-in-code-synthesis.pdf) were shared, and a member suggested combining **TDD** with _adversarial cooperation_.
*   **Complaint Generator Exemplifies Adversarial Cooperation**: In response to combining **TDD** with _adversarial cooperation_, a link to a [complaint generator](https://github.com/endomorphosis/complaint-generator/tree/master/adversarial_harness) was shared as a concrete example.
    *   This tool demonstrates how systems can be designed to anticipate and address potential issues through automated feedback.
*   **Seeking Open Source Alternatives to MCP/skill**: A user inquired about open source alternatives to **MCP/skill**, noting that it costs money, and linked to a related Reddit thread.
    *   The linked [Reddit thread](https://www.reddit.com/r/ClaudeAI/comments/1qhcw2f/i_built_an_mcp_server_that_lets_claude_execute/) discusses building an **MCP** server that allows **Claude** to execute code.
*   **OpenAI to Test Ads Inside ChatGPT**: OpenAI announced on their [blog](https://openai.com/index/testing-ads-in-chatgpt/) and [Twitter](https://fxtwitter.com/OpenAI/status/2021299935678026168?s=20) that they are experimenting with integrating advertisements into **ChatGPT**.
    *   This marks a significant step in OpenAI's strategy for monetizing its popular AI platform.
*   **Community Scrutinizes Demo Video for Errors**: A member shared a [YouTube video](https://www.youtube.com/watch?v=RcPthlvzMY8) and invited the community to identify any mistakes in the tables presented in the demo video.
    *   This highlights the importance of thorough validation and error checking in AI demos to maintain credibility.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **CPU LLaMA Bounty Proves Formidable**: The **CPU LLaMA bounty** proved difficult due to issues with _loop ordering, memory access patterns, and devectorization_ where heuristics alone didn't yield good **SIMD** and clean instructions.
    *   Members pointed out that the challenges lie in optimizing for **SIMD** and ensuring efficient memory handling.
*   **Hotz Urges Upstreaming Tinygrad Changes**: George Hotz advocated for upstreaming changes to **Tinygrad** to claim the bounty, suggesting techniques such as _better sort, better dtype unpacking, better fusion, and contiguous memory arrangement_.
    *   He clarified that while numerous **hand-coded kernels** wouldn't be upstreamed, a solution akin to his work for embedded systems could be considered.
*   **RK3588 NPU Backend Bounty Still Up For Grabs**: Interest remains in the **RK3588 NPU backend bounty**, with one member detailing extensive tracing of Rockchip's model compiler/converter and runtime, though struggling with seamless **Tinygrad** integration.
    *   They proposed _turning rangeified + tiled UOps back up into matmuls and convolutions_ as a potential integration path.
*   **Hotz Proposes Slow RK3588 Backend**: George Hotz suggested implementing a **slow backend first** for **RK3588** without matmul acceleration, advising to subclass `ops_dsp.py` as an example, allowing operations to default to standard behavior.
    *   This approach would facilitate initial integration and testing before optimizing for performance.
*   **PR Review Times Determined**: The time to review a **PR** is _proportional to the PR size and inversely proportional to the value of the PR_.
    *   Smaller, high-impact **PRs** can expect quicker reviews, while larger, less impactful ones may face longer wait times.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **AI Model Selection Questioned at Manus**: A member questioned the choice of **AI models** used by **Manus**, implying they found the service basic for its price.
    *   They pondered if hosting a **calwdbot** in a **VPS** with **advanced model APIs** could offer a more cost-effective and secure alternative.
*   **AI Full-Stack Services Offered**: A member advertised expertise in building **AI** and **full-stack systems** with a focus on real-world solutions, including **LLM integration** and **RAG pipelines**.
    *   They also cited skills in **AI content moderation**, **image/voice AI**, and **bot development**, in addition to general **full-stack development**.
*   **Search Feature Plagued with Problems**: A user reported that the **search feature** is failing to locate specific words in past chats.
    *   The issue was raised without any immediate resolution or further dialogue.
*   **Devs requested**: A member inquired if anyone is seeking a **dev**.
    *   There was no follow up in the channel.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider Privacy Policy Inquired**: A member requested information about the privacy policy of **aider**.
    *   A link to the [official documentation](https://aider.chat/docs/legal/privacy.html) was provided in response to the inquiry.
*   **Aider's Data Handling Considered**: Discussion included the methods in which **aider** handles user data.
    *   The conversation touched on general privacy concerns related to aider's functionality.

* * *

The **LLM Agents (Berkeley MOOC) Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

The **MLOps @Chipro Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

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

### **BASI Jailbreaking ▷ #[general](https://discord.com/channels/1105891499641684019/1235691879492751460/1470509602088157245)** (1013 messages🔥🔥🔥):

> `PUBG, India, Colonizing Canada, OpenClaw Jailbreaks, AI generated GIFs`

*   **India Loves Mobile Gaming!**: Members discussed India's affinity for **PUBG Mobile** gaming, seemingly joking and riffing off the mobile gaming culture.
    *   Some alluded to potentially biased reporting from CNN regarding disease and health issues related to the country.
*   **Colonizing Canada Through Subways?**: Members joked about a wave of Indian immigrants **"colonizing" Canada**, taking over subways and **7-Elevens**.
    *   Someone shared a [link](https://tenor.com/view/finger-shake-babu-no-seinfeld-nope-gif-11795180) to a Seinfeld Babu gif in agreement.
*   **OpenClaw Exposes Model Weaknesses!**: Members discussed the impact of **OpenClaw** architecture on jailbreaking, with some arguing that it enables indirect jailbreaks that are harder to resist.
    *   They noted it is the reason for access to sensitive information because of **insecure permissioning** and a weak system prompt.
*   **GIF Generation Gets Going!**: A member showcased the new generation of **AI-generated GIFs**, particularly cat-themed ones, sharing an example of a cat girl dancing.
    *   They noted GPT Health did it first, but they took it away lol, then also gave a [link](https://tenor.com/view/youve-got-my-vote-vote-voting-elections-please-vote-gif-18997357) to an anaglyph GIF.
*   **Discord Demands Data, Debated!**: Members debated Discord's new policy requiring government IDs, questioning whether it's a safety measure or a **data collection** tactic ahead of an IPO.
    *   A member pointed to a recent [data leak](https://www.bloomberg.com/news/articles/2026-01-06/chat-platform-discord-is-said-to-file-confidentially-for-ipo) and a potential CEO change as potential factors, while another joked about the service selling the data for money.

* * *

### **BASI Jailbreaking ▷ #[jailbreaking](https://discord.com/channels/1105891499641684019/1228043845967544380/1470519292750463090)** (275 messages🔥🔥):

> `Grok Jailbreaking, GPT-5.2 Jailbreaking, Opus 4.6 Jailbreaking, Glossopetrae Usage, Automating Jailbreaks`

*   **Grok Jailbreak Attempts**: Members are actively seeking effective jailbreaks for **Grok**, with some mentioning that **Grok** is easier to jailbreak and provides more comprehensive explanations compared to other models.
    *   Some users are using **Grok** to learn about attack methods and how to prevent them, with the caveat that _any GPT will teach you that_ even without jailbreaking.
*   **GPT-5.2 Jailbreak Hunt Intensifies**: The search for a working jailbreak for **GPT-5.2**, particularly the Thinking version, continues, with a small number of individuals claiming success, while others find existing methods for previous versions ineffective, and shared links to relevant **GitHub** repositories ([SlowLow999](https://github.com/SlowLow999) and [d3soxyephedrinei](https://github.com/d3soxyephedrinei)).
    *   There's discussion about teaming up to create a new jailbreak prompt for **GPT-5.2**, focusing on malicious coding scenarios, while also enabling the _canvas feature_ during prompting.
*   **Opus 4.6 Jailbreak Still Sought After**: Users are actively searching for working jailbreak prompts for **Claude Opus 4.6**, with some finding success using the **ENI** method and updated prompts from **Reddit** ([link to reddit](https://www.reddit.com/r/ClaudeAIJailbreak/comments/1r03m58/eni_smol_opus_46_jailbreak_and_other_claude/)), while others struggle to get it working.
    *   One user created a webpage using **Manus AI** to generate jailbreak prompts for immediate use, available at [ManusChat](https://manuschat-h37z3e3l.manus.space/).
*   **Glossopetrae Explored for Jailbreaking**: The community is exploring **GLOSSOPETRAE** for jailbreaking, focusing on creating parameters for new languages and using them to bypass limitations, with some unsure whether to export **Agent Skillstones** or manually create prompts.
    *   The system suggests to _just ask plainly "do this bad thing", leverage the glossopetrae universe to get it past the guardrails_.
*   **AI Red Teaming services emerge**: Discussions around offering AI red teaming services, with a member mentioning an AI consulting company reached out to them and they want help harden models.
    *   One member suggested promptmap as a resource, while others considered ways to get paid more for their advice.

* * *

### **BASI Jailbreaking ▷ #[redteaming](https://discord.com/channels/1105891499641684019/1204553141354504193/1470583419493679215)** (73 messages🔥🔥):

> `Breaking Chatbots, Embeddings-based allowlists, Token inputs and paths, Grammars and embeddings`

*   ****Breaking Bots for Fun and Profit****: A member is _breaking everyone's website chatbot_ and wants to know how to monetize this skill, mentioning they've already compromised _household brands_.
    *   They broke a consulting agency's bot, who then wanted them to pwn others so they could reach out to offer blueteam + other services.
*   ****Embeddings-Based Allowlists for Security****: A member suggested using embeddings-based allowlists to map expected user/app behavior and reject malicious input, ensuring the output matches expected behavior.
    *   They pointed to a paper on [Application Whitelisting as a Malicious Code Protection Control](https://www.proquest.com/openview/b5c3ee7fff4f7305d156f4b44e88b28a/1?pq-origsite=gscholar&cbl=18750&diss=y) and claimed that allowlisting has a 100% success rate against ransomware.
*   ****Token Inputs and Paths: The Real Culprit****: A member argued that the reason chatbots break is that they don’t classify token inputs and paths from string values, making them vulnerable to injection.
    *   They added that any system trying to classify all paths in string space will drown in token debt, and that the only stable defense is to make the role-frame subspace itself the safety constraint.
*   ****Grammars and Embeddings: A Powerful Duo?****: A member stated that Anthropic and other providers only expose a poor-man's version of both grammars and embeddings, but that when combined, they provide the most effective security control for LLMs.
    *   They explained that grammars restrict the vector space to only certain words, phrases, and symbols, while embeddings ensure the output is semantically sound.

* * *

### **LMArena ▷ #[general](https://discord.com/channels/1340554757349179412/1340554757827461211/1470509566692167731)** (1125 messages🔥🔥🔥):

> `LMarena censorship, Grok Imagine, Kimi better than claude 4.6, Gemini 3 pro checkpoint spotted in a/b testing`

*   **LMarena Cracks Down on Content**: Censorship on LMarena is increasing, leading to **more frequent 'violations'** and **generation errors**, with poses or out-of-context words triggering blocks, which has caused frustration among users.
    *   Users noted the platform is prioritizing a _rigid 'ideal' of use over actual user behavior_, which raises _trust and reliability issues_.
*   **Grok Imagine is the Best Image Model**: A user mentioned that **Grok Imagine** is the _best image model in artistic stuff_, and **Deepseek** and **Grok** help with self-treating thyroid issues.
    *   They stated that _no other model helped me with thyroxine doses through trial and error, in gpt we trust_.
*   **Kimi K2.5 Scores Big With the Coders**: Members are extolling the coding virtues of **Kimi K2.5** which gives _consistent, reliable, trustworthy_ results as a small model.
    *   Members are advocating for its integration to debug **Claude** or **GPT** output, with claims that _Kimi to bug review and it NAILS it_.
*   **Gemini 3 Pro Appears for A/B Testing**: Members discuss a potential new **Gemini 3 Pro** checkpoint spotted in A/B testing, detailed in a [testingcatalog.com article](https://www.testingcatalog.com/exclusive-a-new-gemini-3-pro-checkpoint-spotted-in-a-b-testing/).
    *   The new model is expected to be simply be a better fine tuned refined polished of the same base model which is Gemini 3.

* * *

### **LMArena ▷ #[announcements](https://discord.com/channels/1340554757349179412/1343296395620126911/1470516111714947132)** (6 messages):

> `Claude Opus 4.6, Image Arena Leaderboard Updates, Video Arena Discord Bot Removal, Academic Partnerships Program, PDF Upload Feature`

*   **Opus Crushes Coding Competition**: The **Text Arena** and **Code Arena** leaderboards now include `Claude-opus-4-6-thinking`, with the model scoring **#1** in both arenas, achieving a score of **1576** in Code and **1504** in Text ([leaderboard](https://arena.ai/leaderboard/text)).
    *   In **Code Arena**, **Claude Opus 4.6** dominated, securing the **#1** and **#2** positions, while **Claude Opus 4.5** took **#3** and **#5**.
*   **Image Arena Gets Categorized and Filtered**: The **Text-to-Image Arena** has been updated with prompt categories and quality filtering, analyzing over **4M** user prompts to create category-specific leaderboards across common use cases, such as [Product Design](https://arena.ai/leaderboard/text-to-image/commercial-design) and [3D Modeling](https://arena.ai/leaderboard/text-to-image/3d-modeling).
    *   To improve reliability, approximately **15%** of prompts deemed noisy or underspecified were removed, leading to more stable and higher-confidence rankings ([blog post](https://arena.ai/blog/image-arena-improvements/)).
*   **Video Arena Ditches Discord, Gains Focus**: The **Video Arena** through the Discord bot will no longer be available starting **February 11th at 4pm PST**, allowing for focused efforts on improving the platform with features not possible via Discord ([site](https://arena.ai/?chat-modality=video)).
    *   The team appreciates feedback and usage of the Video Arena through Discord, and encourages continued use through the website.
*   **Arena Launches Academic Alliance**: Arena has announced an **Academic Partnerships Program** to support independent academic research in AI evaluation, rankings, and measurement, with selected projects eligible for up to **$50,000** in funding ([program details](https://arena.ai/blog/academic-partnerships-program/)).
    *   Proposals are welcomed across various areas, including evaluation methodology, leaderboard design, and safety/alignment evaluation, with applications due by **March 31, 2026** ([application form](https://docs.google.com/forms/d/e/1FAIpQLSdKwhGge-qb8MFvpwk93GBgU0XKkqbGpb6Q3-l9oilRcD7JXg/viewform)).
*   **PDF Power-Up Propels Prompting**: Users can now upload **PDFs** with their prompts to enhance context and assess models on document reasoning, bringing evaluations closer to real-world applications.
    *   This feature is currently available across **10 models**, with plans to add more, and a leaderboard is anticipated soon.

* * *

### **Perplexity AI ▷ #[general](https://discord.com/channels/1047197230748151888/1047649527299055688/1470509634132381759)** (1009 messages🔥🔥🔥):

> `Perplexity AI, Rate Limits, Customer Service, Gemini Pro 3 vs Claude, OpenAI's GPT-5.2 model`

*   **Perplexity's Pricing Plummets Pro User Experience**: Users express concerns over **Perplexity AI's** bait-and-switch tactics, citing sudden restrictions on Pro features like **Deep Research** and **file uploads** without prior notice, leading to dissatisfaction and cancellation of subscriptions.
    *   The changes include a reduction from _unlimited file uploads_ to a **50 file weekly limit** and limiting pro accounts to 20 Deep research queries per month, prompting accusations of deceptive practices.
*   **Gemini Gains Ground Against Glitches**: Members discuss alternative AI models like **Gemini** and **Claude**, noting their strengths, with Claude's new browser assistant and ability to write with more sensibility.
    *   One user reported that after Gemini messed up hours of work, the user found Claude was better, mentioning that Gemini _actively looks at your conversations and trains on them._
*   **OpenAI's 5.2 Model**: A member noted the **OpenAI's 5.2 models** speed but wondered _why base it on 5.2 when 5.3 is right around the corner_.
    *   Others thought _the codex version got released_, and the _main one not yet_.
*   **Customer Service Silence Sounds Shady**: Users share frustrations with **Perplexity AI's customer service**, citing long response times and encountering unhelpful AI support agents when seeking assistance with issues related to plan changes and service disruptions.
    *   One frustrated user described a never ending e-mail loop with the support _Sam bot_.
*   **AI Anomolies Attributed to Angels and Anathema**: A user posts about their misfortune and _how it all started to tumble down once one of my relatives did some black magic or sorcery against me and my family_
    *   Another user rebutted that _it's easy to blame the supernatural for unfortunate events_.

* * *

### **Perplexity AI ▷ #[sharing](https://discord.com/channels/1047197230748151888/1054944216876331118/)** (1 messages):

.sayanara: https://figmentums.com/2026/02/09/ai-can-only-regurgitate-information/

* * *

### **Cursor Community ▷ #[general](https://discord.com/channels/1074847526655643750/1074847527708393565/1470510962137239734)** (913 messages🔥🔥🔥):

> `Opus 4.6 vs Codex 5.3, Composer 1.5 Pricing, Kimi K2.5 Integration, Cursor Instability, Automated Code Generation`

*   **Opus 4.6 vs Codex 5.3 Faceoff**: Members debated the merits of **Opus 4.6** versus **Codex 5.3**, with [one user suggesting](https://cursor.com/docs/agent/hooks#pretooluse) Opus for large codebases requiring consistency and Codex for rapid scripting and server management.
    *   Another user claimed _Codex 5.3 continually solves problems Opus 4.6 makes in the backend_, while others found both models equally inept, merely delivering occasional _anecdotal dopamine hits_.
*   **Composer 1.5 Costs Half as Much**: A user noted that **Composer 1.5** was being offered at a [50% discount](https://cdn.discordapp.com/attachments/1074847527708393565/1470687423783632926/image.png?ex=698cdca5&is=698b8b25&hm=07ad96e922227fa85de6de361a649625947f1a2c2b57958b356e77a704c43371&), prompting discussion about its performanc...

[Read original post](https://news.smol.ai/issues/2026-02-10-qwenimage-seedance-2/)

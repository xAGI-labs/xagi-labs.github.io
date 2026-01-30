---
title: "Open Responses: explicit spec for OpenAI's Responses API supported by OpenRouter, Ollama, Huggingface, vLLM, et al"
date: "2026-01-15T05:44:39.000Z"
description: "**OpenAI** launched the **Open Responses** API spec, an open-source, multi-provider standard for interoperable LLM APIs designed to simplify agent stacks and to..."
original_link: "https://news.smol.ai/issues/26-01-15-openresponses/"
---

**Responses API is all you need.**

> AI News for 1/14/2026-1/15/2026. We checked 12 subreddits, [**544** Twitters](https://twitter.com/i/lists/1585430245762441216) and **24** Discords (**205** channels, and **5564** messages) for you. Estimated reading time saved (at 200wpm): **433 minutes**. **Our new website** is now up with full metadata search and beautiful vibe coded presentation of all past issues. See https://news.smol.ai/ for the full news breakdowns and give us feedback on [@smol\_ai](https://x.com/Smol_AI)!

Standards work is often thankless and unrewarding, but it's a nice commitment to the community when it is done well. Today, OpenAI did right by the open community by [explicitly documenting their Responses API](https://www.openresponses.org/) and working with folks like [vLLM and ollama](https://x.com/reach_vb/status/2011863149356413275) to support this, however it is more of a surprise that the market leader in normalizing APIs, [OpenRouter, also supports this](https://x.com/OpenRouterAI/status/2011864089782599802). Notable omissions from the launch partnerships: Anthropic and Deepmind.

* * *

AI Twitter Recap
================

**Interoperable LLM APIs: “Open Responses” coalesces around Responses as the new baseline**

*   **Open Responses spec (multi-provider, agent-friendly)**: OpenAI DevRel + partners launched **Open Responses**, an open-source spec that standardizes a **Responses-API-like** interface across providers (“multi-provider by default”, extensible without fragmentation) so agent stacks don’t have to fork per model/provider. See the announcement from [@OpenAIDevs](https://twitter.com/OpenAIDevs/status/2011862984595795974) and partner callout by [@reach\_vb](https://twitter.com/reach_vb/status/2011863149356413275). This is framed as a “clean slate” relative to Chat Completions: fewer special cases, better consistency for tool-heavy workflows.
*   **Ecosystem traction + implementations**: Early sentiment from tooling builders is that this is the missing “formalized, standardized JSON API for talking to models” ([@simonw](https://twitter.com/simonw/status/2011865205123531155)). **Ollama** announced support quickly ([@ollama](https://twitter.com/ollama/status/2011871283928317971)), and **vLLM** notes they previously had to reverse-engineer provider behavior and expects the spec to simplify primitives/tooling ([@vllm\_project](https://twitter.com/vllm_project/status/2012015593650536904)).

**Agents: planning > “multi-agent vibes”, and filesystems emerge as the dominant context/memory abstraction**

*   **Cursor’s long-running-agent lessons (roles + planning + judging)**: Multiple posts summarize Cursor’s view that peer-like self-coordination fails; **explicit roles** (planners/workers/judges) and strong upfront planning work better, with an emphasis on **prompt/system stability** over harness complexity. [@Yuchenj\_UW](https://twitter.com/Yuchenj_UW/status/2011863636042469866) highlights the operational reality: it’s “hundreds of concurrent agents” rather than one mega-agent. [@omarsar0](https://twitter.com/omarsar0/status/2011823468468379782) ties this to Claude Code usage (subagents manage their own context; orchestrator stays high-level) and notes Cursor found **GPT-5.2** stronger for week-long runs while **Opus 4.5** tends to stop early/shortcut.
*   **Filesystem-as-memory becomes the center of gravity**: A cluster of tweets converges on “files are all you need” for agent context, memory, and skills.
    *   LlamaIndex’s framing: files as (1) durable context store, (2) a search interface (often outperforming classic RAG patterns for dynamic traversal), and (3) a simpler substrate for tool calling/skills ([@jerryjliu0](https://twitter.com/jerryjliu0/status/2011849758944690625); amplified by [@llama\_index](https://twitter.com/llama_index/status/2011846444156645438)).
    *   LangChain’s Agent Builder uses a **filesystem abstraction** with conventions like **AGENTS.md**, **skills/**, and **tools.json** so agents can update memory through feedback and persist behaviors ([@LangChain](https://twitter.com/LangChain/status/2011864707439690031)).
    *   Important implementation detail: LangChain’s “filesystem” is often a **Postgres-backed virtual filesystem wrapper**, not literal disk ([@hwchase17](https://twitter.com/hwchase17/status/2011834318172422279); clarification [@hwchase17](https://twitter.com/hwchase17/status/2011858266863911382)).
    *   A pragmatic skepticism appears too: “every filesystem source-of-truth eventually turns into a database” ([@swyx](https://twitter.com/swyx/status/2011984243430236608)).
*   **Shipping agent UX + harnesses**:
    *   **openwork**: LangChain JS shipped an open-source “Claude Cowork”-style desktop interface (planning + filesystem + subagent delegation) built on deepagentsjs, runnable via `npx` with Anthropic/OpenAI models ([@LangChain\_JS](https://twitter.com/LangChain_JS/status/2011863256223400360)).
    *   **UI honesty for “agent progress”**: critique that most agent UIs fake progress with spinners; LangChain JS demonstrates streaming tool-call events into React with TypeScript-safe events for real progress reporting ([@LangChain\_JS](https://twitter.com/LangChain_JS/status/2011833970204557694); original by [@bromann](https://twitter.com/bromann/status/2011833439834775738)).
    *   **Dexter 3.0**: claims an event-based agent loop + dynamic context management reduced their “core loop” to ~100 lines while improving performance ([@virattt](https://twitter.com/virattt/status/2011933907881492498)).

**Model & capability drops: fast image models, open translation, small LMs, and audio S2S reasoning**

*   **Black Forest Labs FLUX.2 [klein]**: New fast/small image generation/editing line: **4B (Apache 2.0)** and **9B (FLUX.2 non-commercial license)**, plus a new text encoder; positioned as <1s generation for iteration/editing ([@bfl\_ml](https://twitter.com/bfl_ml/status/2011825819082244266)). fal shipped it on their marketplace ([@fal](https://twitter.com/fal/status/2011826361434771923)) and Arena added both to text-to-image and image-edit arenas ([@arena](https://twitter.com/arena/status/2011869067272208812)). Commentary notes how normalized big jumps have become (“~10x better than Stable Diffusion while ~as small”) ([@swyx](https://twitter.com/swyx/status/2011861139689513314)).
*   **Google DeepMind TranslateGemma**: Open translation models built on **Gemma 3**, trained on **Gemini-generated** translation data, supporting **55 languages**, released in **4B/12B/27B** sizes, optimized for on-device/low-latency translation ([@GoogleDeepMind](https://twitter.com/GoogleDeepMind/status/2011848249850630363); training/distillation angle [@GoogleDeepMind](https://twitter.com/GoogleDeepMind/status/2011848252451156244); summary [@\_philschmid](https://twitter.com/_philschmid/status/2011848973074448657)). Early deployment notes include MLX Swift running quantized 4B on mobile ([@sach1n](https://twitter.com/sach1n/status/2011975664573038824)).
*   **Zilliz/Milvus semantic highlight model**: Released a lightweight **0.6B** model + dataset with **8192 context** under **MIT**, plus a detailed training blog ([@mervenoyann](https://twitter.com/mervenoyann/status/2011732254591275022); blog pointer [@mervenoyann](https://twitter.com/mervenoyann/status/2011732428784865391)).
*   **TII Falcon-H1-Tiny series**: Sub-100M-parameter LMs with specialized variants (coding, function calling, multilingual, reasoning), positioned for edge/IoT privacy deployments ([@yb2698](https://twitter.com/yb2698/status/2011805117016916056); org recap [@TIIuae](https://twitter.com/TIIuae/status/2012034581084430662)).
*   **StepFun Step-Audio R1.1 (Realtime)**: Artificial Analysis reports this **32B** speech-to-speech “audio reasoning” model leads their **Big Bench Audio** at **96.4%**, with ~**1.51s** TTFT, and provides price points in $/hour and $/token equivalents ([@ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2012006066339581958)).

**RL, evals, and long-context training/inference: scaling practical agent training**

*   **Unsloth: RL to longer contexts + vLLM acceleration**: Unsloth claims RL can scale to **7× longer contexts** via seqlen/hidden-state chunking + offloaded log-softmax, and up to **12×** with “Standby” for vLLM runs + tiled MLP; includes an example “gpt-oss QLoRA reaches 380K on 1× B200” ([@danielhanchen](https://twitter.com/danielhanchen/status/2011828515348627561)). vLLM echoes the 7× longer-context RL collaboration ([@vllm\_project](https://twitter.com/vllm_project/status/2011857612103630924)).
*   **Agent memory + context pruning research (“Focus”)**: DAIR highlights a paper proposing agent-controlled consolidation checkpoints (`start_focus`/`complete_focus`) that summarize learnings into a persistent knowledge block and delete intermediate traces, achieving **22.7% token reduction** on SWE-bench Lite with unchanged accuracy (Claude Haiku 4.5) ([@dair\_ai](https://twitter.com/dair_ai/status/2011806092737827206)).
*   **Benchmark integrity pushback**:
    *   MMLU-Redux: manually curated/leak-free fixes for issues found in MMLU topics/subsets ([@PMinervini](https://twitter.com/PMinervini/status/2011782967723511868)).
    *   A concrete “dataset artifact” warning: MMLU-Pro chemistry/physics subsets allegedly have a bias where “leading space” in an option correlates with correctness ([@giffmana](https://twitter.com/giffmana/status/2011859715043836166)).
    *   Arena’s own meta-analysis notes that “AI race leadership” depends heavily on prompt strata: OpenAI leads most of the time overall, but Anthropic leads more frequently on “Expert prompts” ([@arena](https://twitter.com/arena/status/2011849440160858443)).

**Infra & developer tooling: real-time inference, in-browser search, vector DB experimentation, and agent-enabled IDE workflows**

*   **Together AI + Cursor inference stack on Blackwell**: Together describes engineering for real-time coding-agent inference (tight editor latency loop), citing reliability on **GB200/B200**, custom tensor-core kernels, FP4 quantization, and NVL72 mesh parallelism ([@togethercompute](https://twitter.com/togethercompute/status/2011875191828488598); technical bullets [@togethercompute](https://twitter.com/togethercompute/status/2011875193476829631)). A related note from [@realDanFu](https://twitter.com/realDanFu/status/2011876049215520919) mentions “technical nuggets” including even hardware maintenance details like replacing NVLink cables for stability.
*   **VS Code doc search rebuilt in-browser**: VS Code reports their website search got much faster; engineering write-up describes **docfind**, running entirely in the browser via **WebAssembly** ([@code](https://twitter.com/code/status/2011827481175605487)).
*   **RAG experimentation as first-class infra**: Qdrant + Tigris Data’s “RAG Lab” emphasizes reproducible A/B testing of chunking strategies by forking datasets and pairing each with its own vector index for apples-to-apples evaluation ([@qdrant\_engine](https://twitter.com/qdrant_engine/status/2011679747244167175)).
*   **Copilot CLI + agent SDK surface area**: GitHub Copilot CLI/Coding Agent added “automated memory” ([@\_Evan\_Boyle](https://twitter.com/_Evan_Boyle/status/2011932670096523326)), and there’s chatter about a Copilot CLI SDK enabling custom CLIs on top of Copilot auth (example: video promo generator) ([@burkeholland](https://twitter.com/burkeholland/status/2011934322413224152)).
*   **OpenCode + Copilot subscription**: OpenCode says it can be used with a Copilot subscription via a “$39 pro+” tier that exposes “best coding models,” highlighting growing pressure for toolchain interoperability ([@opencode](https://twitter.com/opencode/status/2011790750543983072)).

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Local LLM Performance and Preferences

*   **[What’s the most cracked local LLM right now?](https://www.reddit.com/r/LocalLLM/comments/1qdx4n8/whats_the_most_cracked_local_llm_right_now/)** (Activity: 44): **The post inquires about the most advanced local LLMs (Large Language Models) that excel in reasoning, instruction following, coding, and handling long prompts, without VRAM constraints. The discussion highlights models like **Qwen3-Coder-480B**, **GLM 4.7**, and **Kimi-K2**. Notably, **Kimi-K2** is praised for its resistance to sycophancy and its unique capability for 'interleaved thinking,' allowing it to execute complex tasks with hundreds of tool calls, making it a standout in the local and open LLM space.** Commenters suggest that the term 'cracked' might be misused, as the performance of local LLMs is often hardware-dependent. **Gemma models** are also mentioned for their overall performance, while **Kimi-K2** is noted for its extensive interleaved thinking capabilities, setting it apart from others like **GLM-4.7**.
    
    *   AbheekG highlights the Kimi-K2 model, emphasizing its unique capability as a 1 trillion parameter LLM, which requires significant computational resources. The model is noted for its resistance to sycophancy and its advanced 'interleaved thinking' training, allowing it to execute hundreds of tool calls for complex tasks. This positions it as a leading local LLM in terms of reasoning capabilities, surpassing even GLM-4.7 in this aspect.
*   **[Best AI for coding that isn't from the major disgusting companies? (Local or online)](https://www.reddit.com/r/LocalLLM/comments/1qdnao5/best_ai_for_coding_that_isnt_from_the_major/)** (Activity: 44): **The post seeks recommendations for open-source AI tools for coding that are not affiliated with major companies like **OpenAI** or **Microsoft**. Suggestions include **Devstral-small-2** from the French startup **Mistral**, and other models like **Qwen3**, **Minimax**, **GLM**, and **Kimi K2**. Users highlight **Minimax** and **GLM** as particularly effective for coding tasks in languages like Python and Dart, with **GLM 4.7** receiving specific praise.** There is a preference for models like **Minimax** and **GLM** for their performance in coding tasks, while **Kimi K2** is noted but not widely tested due to hardware requirements.
    
    *   **Devstral-small-2** from Mistral, a French startup, is mentioned as a notable model for coding, suggesting its potential as an alternative to major companies' offerings.
    *   A user lists **Qwen3**, **Minimax**, **GLM**, and **Kimi K2** as top models for coding, with specific mention of Qwen3 and GLM performing well for Python, Dart, and Cloud stack tasks. The user notes that Kimi K2 requires significant hardware expansion, which they haven't pursued yet.
    *   A detailed discussion on hardware requirements for running models like **GLM 4.7** locally highlights the need for substantial VRAM, ideally 48GB+ for quality 30B models. The user also mentions experimenting with **Nemotron 3 Nano 30B** and **Qwen 3 Coder 30B Instruct** for building a multi-agent stack, emphasizing the importance of fine-tuning and LoRAs for specific tasks.
*   **[I want to subscribe to an LLM. Which one is best for speaking practice/improving writing and studying coding. I can pay maximum 10-12 USD per month.](https://www.reddit.com/r/LocalLLM/comments/1qdmllw/i_want_to_subscribe_to_an_llm_which_one_is_best/)** (Activity: 34): **For a budget of `10-12 USD` per month, **GLM 4.7** is recommended for coding tasks due to its affordability and effectiveness. However, the basic tier of **OpenAI** or **Claude** is suggested if the budget allows, as they may offer superior performance. The discussion emphasizes that while LLMs can assist in learning, they should not replace traditional learning methods such as textbooks and self-practice. Free resources like Anna's Archive and OpenStax are recommended for comprehensive learning.** The comments suggest a preference for traditional learning methods over relying solely on LLMs. It is advised to use LLMs minimally, primarily for clarification and conceptual understanding, rather than as a primary learning tool.
    
    *   g33khub suggests that GLM 4.7 is a cost-effective option for coding tasks, but recommends considering the basic tier of OpenAI or Claude if the budget allows. This implies that while GLM 4.7 is affordable, OpenAI and Claude might offer superior performance or features for language learning and coding.
    *   Quirky-Craft-3619 emphasizes that while LLMs can be helpful, they should not be the primary tool for learning programming. Instead, they recommend using textbooks and practicing coding independently, using LLMs like GPT or Gemini for clarification on concepts rather than for direct coding assistance. This approach encourages deeper understanding and self-reliance in coding.
    *   ElectronSpiderwort mentions Openrouter as a flexible option, offering a free tier and a $10 plan that allows access to major models. This suggests that Openrouter could be a cost-effective way to experiment with different LLMs, potentially stretching the budget over a longer period if cheaper models are used.

### 2\. GPU Market Changes and Impacts

*   **[My story of underestimating /r/LocalLLaMA's thirst for VRAM](https://www.reddit.com/r/LocalLLaMA/comments/1qe2i88/my_story_of_underestimating_rlocalllamas_thirst/)** (Activity: 290): **The image is a meme illustrating the unintended consequences of sharing a good deal on a high-performance graphics card, specifically the w6800 32GB, on Reddit. Initially purchased for $500, the card's price surged to over $1,000 after the post, highlighting the community's high demand for VRAM. This reflects the broader trend in the tech community where sharing information about valuable hardware can lead to rapid market changes, akin to a 'gold rush' effect. The comments suggest alternative graphics card options like the 3090 or R9700, depending on specific needs such as VRAM-per-slot and cooling requirements.** One commenter draws a parallel to the California gold rush, suggesting strategic purchasing before sharing valuable information. Another recommends considering alternative graphics cards like the 3090 or R9700 based on current market prices and specific technical needs.
    
    *   EmPips discusses the trade-offs between different GPU options, suggesting that while the card in question is impressive, alternatives like the `3090` or `R9700` might be more cost-effective depending on specific needs. They highlight considerations such as VRAM-per-slot and cooling solutions, noting that if one can manage high idle power and external cooling, `mi50x` cards could be a viable option.
*   **[RTX 5070 Ti and RTX 5060 Ti 16 GB no longer manufactured](https://www.reddit.com/r/LocalLLaMA/comments/1qdh28f/rtx_5070_ti_and_rtx_5060_ti_16_gb_no_longer/)** (Activity: 381): ****Nvidia** has ceased production of the `RTX 5070 Ti` and significantly reduced the supply of the `RTX 5060 Ti 16 GB` due to memory supply shortages, leading to a price increase of approximately `$100` over MSRP for the 5070 Ti. The 8 GB configuration of the RTX 5060 Ti remains unaffected. This decision impacts most AIBs, who will no longer manufacture these GPUs. [Source](https://m.youtube.com/watch?v=yteN21aJEvE).** One user noted the RTX 5060 Ti 16 GB as a cost-effective option for adding Nvidia memory to systems, highlighting its suitability for DLSS, AI processing, and inferencing tasks, especially with `64GB VRAM` for `70B models`. Another user expressed disappointment over the halted production affecting their upgrade plans, while a third comment criticized Nvidia's business practices.
    
    *   phido3000 discusses the value proposition of the RTX 5060 Ti, highlighting its affordability and performance for AI tasks. At $390, it offers 16GB of GDDR7 memory, which is advantageous for DLSS and AI processing. The card's 128-bit bus is mitigated by the fast GDDR7, making it comparable to a 192-bit GDDR6 card. It's suitable for inferencing with models like LLAMA, especially when 64GB VRAM is needed, and can be a viable alternative to the 3090 for budget setups.
    *   phido3000 also notes the practicality of using multiple RTX 5060 Ti cards in a single system. With low power requirements and a two-slot cooler design, it's feasible to install four or more cards in a standard power supply machine. This setup supports new quantization methods and can handle 70B models effectively, making it a cost-effective solution for small-scale AI inferencing tasks.
    *   Otherwise\_Local\_7743 expresses disappointment over the discontinuation of the RTX 5070 Ti, as it was a planned upgrade for their homelab. They mention relying on an RTX 3080 for inference tasks until prices stabilize, indicating the 5070 Ti's appeal for its potential performance improvements in such environments.

### 3\. Mac Studio M3 Ultra vs DGX Spark Performance

*   **[Mac Studio M3 Ultra Stats](https://www.reddit.com/r/LocalLLM/comments/1qdqi4i/mac_studio_m3_ultra_stats/)** (Activity: 42): **The post compares the performance of the **Mac Studio M3 Ultra** with the **DGX Spark**, emphasizing that while the DGX Spark excels in prompt processing, it falls short in token generation speed, which is crucial for text generation tasks. The report provides detailed benchmarks for various models, highlighting that the **Qwen3-Next-80B-A3B-Instruct** model outperforms others with a prompt processing speed of `1,584.5 tok/s` and token generation speed of `52.3 tok/s` at a 100k context size. The **MiniMax-M2.1-4bit** model also shows strong performance with an average prompt processing speed of `886.1 tok/s`. The DGX Spark is noted for its versatility rather than speed, being more suited for research and development environments rather than high-speed text generation.**
    
    *   The DGX Spark is designed as a versatile AI machine for research labs and development teams, rather than excelling in any specific task. It functions as a 'mini data center' for prototyping, fine-tuning, and inference, but is not optimized for speed in any particular area, contrasting with the Mac Studio's focus on performance in specific tasks.
    *   Context processing speed is crucial for handling large tool call dumps and agentic coding, which is a limitation for Macs according to one commenter. This highlights a key usability issue when dealing with extensive data processing tasks, where faster context processing is necessary.
    *   A practical approach to benchmarking involves setting up instances with RAM and GPU on AWS, using scripts to deploy Graviton (ARM CPU) resources. This method allows users to simulate the performance of systems like the M3, providing a flexible environment for running benchmarks and testing models, similar to NVIDIA DGX Cloud offerings.
*   **[Oh Dear](https://www.reddit.com/r/LocalLLM/comments/1qdiwdh/oh_dear/)** (Activity: 73): **The image depicts a failure in an AI chat model where it continuously outputs the word 'the' in a loop, indicating a potential issue with the model's configuration or prompt handling. This could be due to an improperly set system prompt or tuning parameters like temperature, which controls randomness in the model's output. The comments suggest checking these parameters and possibly using alternative tools like 'pocket pal' for better handling of model files, such as 'gguf' files, which might offer improved performance or compatibility.**
    
    *   mp3m4k3r suggests checking the tuning parameters, specifically the temperature setting, to ensure it aligns with the model's recommended values. This is crucial for maintaining the model's performance and preventing issues like repetitive outputs.
    *   HealthyCommunicat recommends adjusting the repeat penalty, starting at 1.1 and increasing if necessary, to prevent the model from generating repetitive text. Additionally, they advise ensuring the model isn't using more experts than recommended, as these are common causes for local LLMs to produce such errors.
    *   ScoreUnique mentions using 'pocket pal' for loading gguf files, which could be a solution for handling specific file types or formats in the context of local LLMs.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. AI Model and Benchmark Releases

*   **[Grok 4.20 (beta version) found a new Bellman function](https://www.reddit.com/r/singularity/comments/1qdntt3/grok_420_beta_version_found_a_new_bellman_function/)** (Activity: 90): ****Grok 4.20 (beta version)** has reportedly discovered a new Bellman function, as announced in a [tweet](https://x.com/PI010101/status/2011560477688463573?s=20). The Bellman function is described by the expression `l(p) ~ p\sqrt{log(1/p)}` as `p` approaches `0`. This finding is being compared to results from **Gemini 3 Pro** and **GPT-5.2**, which allegedly produced the same outcome, suggesting that the discovery might not be unique to Grok 4.20.** One commenter suggests that the discovery is overhyped, noting that similar results were obtained using other models like Gemini 3 Pro and GPT-5.2, implying that the novelty or significance of Grok 4.20's finding may be overstated.
    
    *   ThunderBeanage highlights a comparison between Grok 4.20 and other models like Gemini 3 Pro and GPT-5.2, noting that they produced identical results on the same problem. This suggests that Grok's performance might not be as groundbreaking as claimed, at least in this specific context.
    *   FlamaVadim provides a mathematical expression related to the Bellman function, `l(p) ~ p\sqrt{log(1/p)}` as `p` approaches zero. This insight could be valuable for those studying the asymptotic behavior of the function, indicating a potential area of interest for further mathematical exploration.
    *   Singularity-42 questions the relevance of Grok compared to other leading models such as Gemini, GPT, and Claude, implying a need for a detailed performance comparison to understand Grok's standing in the current AI landscape.
*   **[[D] New arXiv review: "High-Performance Serverless" is the future of AI Inference (and Static Clusters are dying)](https://www.reddit.com/r/MachineLearning/comments/1qdmbk2/d_new_arxiv_review_highperformance_serverless_is/)** (Activity: 6): **The post discusses a systematic review on arXiv (arXiv:2601.09334) about the shift from static GPU clusters to serverless models for AI inference. The paper argues that static allocation is inefficient for handling modern AI workloads due to their "bursty" nature, leading to either over-provisioning or under-provisioning. It suggests that serverless, elastic execution models are the future for addressing these inefficiencies. The post also mentions a practical implementation where an engine was built to solve the Cold Start problem using state snapshotting, aligning with the paper's findings. [Read the paper](https://arxiv.org/abs/2601.09334).** A top comment points out that the article does not exist, suggesting a possible error or misinformation in the post.
    
*   **[Newly released GLM-Image Is a proof of concept that open source AI developers no longer need Nvidia and CUDA.](https://www.reddit.com/r/DeepSeek/comments/1qdio2d/newly_released_glmimage_is_a_proof_of_concept/)** (Activity: 196): ****Zhipu** has open-sourced **GLM-Image**, demonstrating that competitive open-source AI models can be developed without relying on **Nvidia** chips and **CUDA**. The model was trained using **Huawei Ascend 910B** chips and the **MindSpore** framework. Although Ascend chips are only `80%` as efficient as Nvidia's, their lower cost (`$12-13,000` compared to Nvidia's `$30-40,000`) and reduced power consumption make them a cost-effective alternative. GLM-Image, with `9 billion parameters`, supports high-speed inference on consumer-grade hardware, potentially lowering barriers for open-source AI development.** Commenters highlight the potential for Chinese investment in semiconductor companies like **SMIC** to further advance open-source AI capabilities. There is also a sentiment that the realization of developing AI without Nvidia and CUDA is not widely understood, suggesting a shift in the AI hardware landscape.
    
    *   The release of GLM-Image demonstrates that open-source AI developers can now operate without relying on Nvidia and CUDA, which is significant given the dominance of these technologies in AI development. This shift suggests that AI models can be developed with alternative hardware and software solutions, potentially reducing costs and increasing accessibility for developers who do not have access to Nvidia's proprietary technology.
    *   The discussion highlights the potential for Chinese semiconductor companies like SMIC to play a crucial role in this transition. With advancements such as SMIC's 5nm node achieving a 50% yield, there is a possibility for these companies to provide competitive alternatives to Nvidia's hardware, which could be a game-changer in the AI hardware market.
    *   The comment by Suitable-Program-181 emphasizes the importance of recognizing that AI development can progress with less reliance on traditional hardware giants. This realization could lead to more innovation and competition in the AI hardware space, as developers explore new possibilities beyond Nvidia and CUDA.
*   **[FLUX.2 [klein] 4B & 9B released](https://www.reddit.com/r/StableDiffusion/comments/1qdmohb/flux2_klein_4b_9b_released/)** (Activity: 788): ****FLUX.2 Klein** models, developed by **Black Forest Labs**, have released two new versions: a `4B` and a `9B` model. The `4B` model utilizes **Qwen3B** and processes in `1.3 seconds` with `4 steps` on a `6000 Pro`, while the `9B` model uses **Qwen 8B**, taking `2.2 seconds` and offering slightly better performance. Both models are available on [Hugging Face](https://huggingface.co/black-forest-labs) and support the **Comfy Default Workflow**. Notably, the `4B` version is **Apache-2 licensed**, which is significant for open-source use. The `9B` model is described as a "full-capacity foundation model" ideal for fine-tuning and custom pipelines, offering higher output diversity than its distilled counterparts.** Commenters highlight the significance of releasing both base and distilled versions, which is a first for **FLUX** and **BFL**. The availability of an Apache-2 licensed model is seen as a major advantage, and there is anticipation for further developments, such as the release of **Alibaba's z-image base model**.
    
    *   The release of the FLUX.2 Klein models includes both base and distilled versions, which is a first for the FLUX and BFL series. Notably, the 4B version is Apache-2 licensed, allowing for broader use and modification. This release supports editing capabilities, enhancing its utility for various applications.
    *   The Klein 9B base model is described as a 'full-capacity foundation model' that is undistilled, preserving the complete training signal. This makes it ideal for fine-tuning, LoRA training, and custom pipelines where control is prioritized over speed. The model offers higher output diversity compared to its distilled counterparts, making it suitable for research and development purposes.
    *   Comfy-Org has integrated support for the Klein models, with text encoders available for both the 4B and 9B versions on Hugging Face. The integration includes a merged pull request in the ComfyUI repository, indicating active development and support for these models in the community. Additionally, GGUF text encoders are already functional, expanding the compatibility and utility of these models.
*   **[AI proved a novel theorem in algebraic geometry. The American Mathematical Society president said it was "rigorous, correct, and elegant."](https://www.reddit.com/r/OpenAI/comments/1qdmoc3/ai_proved_a_novel_theorem_in_algebraic_geometry/)** (Activity: 104): **The image is a tweet by Adam Brown discussing a new paper that proves a novel theorem in algebraic geometry using an AI called Gemini, developed in collaboration with Google DeepMind and several professors. The American Mathematical Society president, Ravi Vakil, praised the proof as "rigorous, correct, and elegant." The paper describes an iterative human/AI interaction where AI provided solutions to special cases, but human mathematicians had to generalize these to suggest a proof strategy for the general case. The AI was then re-prompted to generate complete proofs, eventually solving the original conjecture. This collaboration highlights the potential of AI in mathematical research, though it required significant human guidance.** Some commenters argue that humans did most of the work, suggesting the AI's role was overstated and that the project was a marketing move by Google. Others sarcastically dismiss the AI's capabilities, reflecting skepticism about AI's potential in serious academic work.
    
    *   The paper describes a collaborative process between AI systems and human mathematicians, where AI provided solutions to specific cases but struggled to generalize them to the full problem. Human analysis was crucial in identifying key intermediate statements, which informed a proof strategy for the general case. This iterative process involved re-prompting AI with new questions, leading to the generation of complete proofs for new problems and eventually solving the original conjecture.
    *   The AI used in this study was not publicly available, and Google played a significant role in the research. This suggests that the models involved were likely proprietary and possibly more advanced than publicly accessible AI systems. The involvement of a major tech company like Google indicates a significant investment in pushing the boundaries of AI capabilities in mathematical research.
    *   The comment suggests skepticism about the AI's role, implying that the achievement might be more of a marketing move than a genuine breakthrough. The AI's contribution is seen as limited, with humans doing most of the critical work, highlighting the current limitations of AI in independently solving complex mathematical problems.

### 2\. AI in Cognitive and Statistical Learning

*   **[We stopped using "Summarize this." We reply with the “Noise Cancellation” prompt to read 50-page reports in 2 minutes.](https://www.reddit.com/r/GeminiAI/comments/1qdfznb/we_stopped_using_summarize_this_we_reply_with_the/)** (Activity: 508): **The post discusses a shift from using AI to 'Summarize' texts to employing a 'Noise Cancellation' prompt for processing lengthy documents. This method, termed 'Subtractive Processing,' involves a 'Redaction Audit' where AI highlights sentences containing hard data, dates, or actionable instructions, while marking those with anecdotes, adjectives, or fluff. This approach aims to reduce text volume by `70%` without rewriting, thus avoiding AI hallucinations and preserving the author's original words.** A commenter suggests using the 'Minto Pyramid Principle' for text processing, a method favored by business consultants for concise communication. Another query raises confusion about the term 'DISTINGUE,' indicating a need for clarification.
    
    *   **Necessary\_Coyote\_571** suggests using the Minto Pyramid Principle for summarization, which is a technique favored by business consultants for executive communication. This method structures information in a top-down approach, starting with the main idea followed by supporting arguments, which can be particularly effective for distilling complex reports into concise summaries.
    *   **WrongRain6117** highlights a common issue with AI-generated summaries, noting that they often resemble 'fan fiction' versions of the original text. This comment underscores the potential value of alternative summarization techniques, like the Minto Pyramid Principle, which may offer more accurate and structured summaries by focusing on the core message and logical flow of the content.
*   **[OpenAI re-joined 3 former researchers including a CTO & Co founder of Thinking Machines](https://www.reddit.com/r/OpenAI/comments/1qdehxx/openai_rejoined_3_former_researchers_including_a/)** (Activity: 141): ****OpenAI** has rehired three former researchers, including a former CTO and cofounder of **Thinking Machines**, as confirmed by official statements on [X](https://x.com). This move highlights the dynamic talent movement within the AI industry, where companies like OpenAI leverage substantial resources to attract and retain top talent.** One commenter noted the intense talent churn in AI, suggesting OpenAI's financial capability as a key factor in rehiring. Another expressed concern about the potential impact on Thinking Machines' upcoming LLM model release.
    
    *   Informal-Fig-7116 mentions that **Thinking Machines** is allegedly releasing their own LLM model this year, which is not the 'Tinker' model. This raises questions about how the return of key personnel to OpenAI might impact the development and release of this new model. The implication is that the talent shift could affect the competitive landscape of AI model development.
    *   LuckEcstatic9842 highlights the rapid talent churn in the AI industry, noting that **OpenAI** has the financial resources to quickly rehire former employees. This suggests a competitive advantage in talent acquisition and retention, which is crucial in the fast-evolving AI sector.

### 3\. Claude Subscription and Usage Issues

*   **[Highly considering getting a second Claude Code subscription](https://www.reddit.com/r/ClaudeCode/comments/1qdspwr/highly_considering_getting_a_second_claude_code/)** (Activity: 91): **The user is considering purchasing a second **Claude Code Max** subscription due to frequent usage limits on their current `$200/month` plan. They mention spending approximately `$400` on direct API costs after being locked out for three days. The user attempts to optimize usage by strategically employing **Haiku/Sonnet** but still encounters limitations. A suggestion from the comments is to use **Opus** instead of Sonnet, as it is more token-efficient, and to configure it in `Claude.md` to code via Haiku subagents, with milestone reviews conducted using Opus. This approach is noted to be more cost-effective, particularly as "Opus read is a lot cheaper than Opus write."** A comment questions the nature of the projects being built, implying they might be resource-intensive. Another suggests ignoring Sonnet in favor of Opus for better efficiency and cost management.
    
    *   dimonchoo highlights that the Opus model is more token-efficient compared to Sonnet, suggesting that users should prefer Opus for better performance. This efficiency is crucial for optimizing resource usage, especially when dealing with large-scale projects or extensive coding tasks.
    *   Crinkez advises using Opus over Sonnet and recommends configuring it in Claude.md to code by deploying Haiku subagents. This approach allows for milestone reviews with Opus, which can be more cost-effective since 'Opus read is a lot cheaper than Opus write,' indicating a strategic use of resources to manage costs effectively.
    *   dkshadowhd2 discusses the challenges of hitting usage caps on the 20x plan, noting that such limits are typically reached only when running extensive parallel processes, such as 'ralph loops.' This suggests that the workflow involves significant parallelization and orchestration of subagents, which can lead to high resource consumption.
*   **[Prompting claude when it makes mistakes](https://www.reddit.com/r/singularity/comments/1qdhbfs/prompting_claude_when_it_makes_mistakes/)** (Activity: 297): **The post discusses user interactions with **Claude**, an AI language model, particularly focusing on how users prompt it when it makes mistakes. The discussion highlights a tendency to humanize Claude more than other language models, such as **Gemini**. Users describe a more patient and encouraging approach when Claude errs, compared to a more frustrated response with Gemini. This reflects a nuanced user experience where the perceived personality of the AI influences interaction style.** The comments suggest a subjective preference for Claude, with users expressing a more empathetic and patient approach to its errors, indicating a possible perception of Claude as more 'human-like' compared to other models.
    
*   **[What's wrong with chat gpt 5.2 ? It's constantly arguing with me man I hate it](https://www.reddit.com/r/OpenAI/comments/1qdp3uz/whats_wrong_with_chat_gpt_52_its_constantly/)** (Activity: 432): **The post expresses frustration with **ChatGPT 5.2**, suggesting it frequently argues with users. This may indicate a shift in the model's interaction style, potentially due to updates in its conversational algorithms or reinforcement learning strategies aimed at improving factual accuracy and reducing misinformation. The request for '4o back' likely refers to a preference for a previous version, possibly **ChatGPT 4.0**, which users might have found more agreeable or less confrontational.** The comments reflect a debate on the balance between AI being too agreeable versus too critical. Some users suggest that the AI's argumentative nature might be a response to user errors, implying that the AI's corrections are justified.
    
    *   honorspren000 describes an issue with ChatGPT 5.2 where the model was overly prescriptive about creative writing choices, specifically arguing against setting a story with a magical character in a historical period due to potential historical inaccuracies. This highlights a potential flaw in the model's ability to handle creative contexts, where flexibility and user intent should be prioritized over strict adherence to factual accuracy.
*   **[Can we ban the "Claude is so expensive" posts?](https://www.reddit.com/r/ClaudeCode/comments/1qe00kc/can_we_ban_the_claude_is_so_expensive_posts/)** (Activity: 243): **The post discusses the recurring complaints about the cost of using **Claude**, a language model service, emphasizing that the service provides significant value for its price. The author argues that expecting unlimited usage for a nominal fee is unreasonable, especially given the revolutionary nature of the product. The post suggests that users should either pay for the service or learn to program themselves.** Commenters generally agree that the cost of LLMs like Claude is justified, with some noting that these tools are currently underpriced and may become more expensive as dependency increases. Others highlight that even at current prices, these services are more cost-effective than hiring developers, especially for startups.
    
    *   **el\_duderino\_50** highlights the cost-effectiveness of LLMs like Claude for startups, noting that even on a high-tier plan like the '20x MAX', it remains more economical than hiring developers. This underscores the value proposition of LLMs in early-stage startups where budget constraints are significant.
    *   **Substantial\_Ear\_1131** compares the usage limits and performance of Claude and Codex, noting that they hit Claude's limits within an hour, whereas Codex with GPT 5.2 xhigh thinking offers significantly better performance ('1000x better') at the same price point. This suggests that while Claude may be cost-effective, its limitations can be a bottleneck for intensive users.
    *   **Swimming\_Leopard\_148** argues that current pricing models for LLMs are unsustainable, suggesting that the tools are 'artificially underpriced'. They predict that as dependency on these tools grows, the cost will become more burdensome, likening the current $20/month fee to a few takeout coffees, implying that prices may rise as demand solidifies.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.2

**1\. Agentic Coding Tooling & Orchestration**

*   **Sonnet 4.5 Sends Cursor’s Background Agent to Work**: In the Cursor community, users confirmed **Sonnet 4.5** now appears as a selectable model for launching a **background agent**, with a developer saying on X they’re working to “drastically” improve the background agent in the coming days/weeks.
    
    *   Users also poked at Cursor’s agent stack—**sub-agents** include built-ins (**Explore** and **generalPurpose**) but model-selection per sub-agent sounds unreliable, pushing people to hunt for token-minimization workflows and tools like [Nia mcp](https://nia.mcp).
*   **Composer-2 Cosplays as a Reasoning Model**: Cursor users noticed that manually adding **composer-2** causes Cursor to treat it as a **reasoning model**, and they connected this behavior to a Cursor tweet hinting that composer-2 reasoning support is imminent.
    
    *   The thread turned into practical ops chatter: how to keep token usage down when exploring codebases, and how agent orchestration changes the “best model” tradeoffs for long autonomous runs.
*   **MCP Servers Wrestle with Statelessness vs Sessions**: In MCP Contributors, a proposal for a **signature method** aims to reconcile schema freezing with dynamic server features so **stateless MCP servers** can serve multiple concurrent conversations more cheaply ([PR #2091](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2091)).
    
    *   The discussion triangulated between **dynamic toolsets** (e.g. GitHub MCP on STDIO via [issue #1442](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1442)) and **persistent sessions** to survive agent/MCP restarts, with people noting real scaling pain from “one server-per-conversation” designs.

**2\. Training/Inference Performance: VRAM, Long Context, and Local Stacks**

*   **Unsloth RL Jumps to 7 Million Tokens (Yes, Million)**: Unsloth announced a **long-context RL** release supporting a **7 million token context window**, described as a **7×** jump over the previous version ([UnslothAI post](https://x.com/UnslothAI/status/2011827592886960131)).
    
    *   Members fixated on the practical upside—potential **memory savings** and new long-running agent use cases—while also swapping training knobs (e.g., GRPO stability ideas like `importance_sampling_level="sequence"`) and VRAM-centric performance tips.
*   **VRAM is the New Horsepower (and `-ot` Wins Races)**: In Unsloth, members reiterated that more **VRAM** generally speeds execution, highlighting Unsloth’s `-ot` flag for better tensor placement and reporting it often beats `n-cpu-moe` for throughput.
    
    *   Across local-model chats, the consensus stayed consistent: pick hardware to **fit the model in VRAM** first (e.g., LM Studio users recommended a **20GB RTX 3080** over an **11GB 3080 Ti**) because swapping/constraints quickly dominate latency.
*   **Local Inference Keeps Stealing Cloud’s Lunch**: Latent Space pointed to Charles Frye’s Modal writeup showing **local LLM inference** can match or exceed major API cost/perf ([Modal guide and code samples](https://xcancel.com/charles_irl/status/2011484220032762114?s=46)), prompting “can we do local Granola?” style questions about meeting transcription.
    
    *   The ensuing “local transcription stack” shortlist included [whisperX](https://github.com/m-bain/whisperX), [NVIDIA NeMo](https://github.com/NVIDIA-NeMo/NeMo), and the older [AutoDiarize](https://github.com/Alignment-Lab-AI/AutoDiarize), with one user claiming macOS local diarization/transcription ran as fast as cloud using an optimized Parakeet V3 setup.

**3\. Model Releases, Variants, and Price/Usage Signals**

*   **Hawk Ultra Hypes 17k Lines of Code and Open-Source Promises**: In LMArena, users compared **Hawk Ultra** to frontier coding models and claimed it can generate **17,000+ lines of code** in one prompt, tying the model to Movement Labs via an X post ([movementlabsAI post](https://x.com/movementlabsAI/status/2011964766533632380)).
    
    *   The vibe was pure leaderboard-fueled FOMO—users called it an “Opus/Gemini killer” and latched onto claims of **open-source availability soon**, though concrete technical details and benchmarks stayed thin.
*   **Video Arena Goes Battle-Only, Veo Gets Rate-Limited**: LMArena’s **Video Arena** moved to **Battle mode only** (no direct chat / side-by-side), with **Veo** available in battle and strict generation caps of **3 per 24h** on the site and **5 per 24h** on Discord.
    
    *   Users pushed hard for “unlimited” **Veo 3.1 Fast**, but mods emphasized the limits; meanwhile, the mystery **Siren** video model stayed a codename per the [LMArena FAQ](https://lmarena.ai/faq), sparking speculation about what’s behind it.
*   **GPT-5 Image Mini Price Quadruples Overnight**: OpenRouter users reported **openai/gpt-5-image-mini** image generation pricing spiking from **$0.01 to $0.04** overnight, with no explanation shared in the thread.
    
    *   In parallel, Perplexity users tracked shifting **Grok** behavior—**Grok Code** rose into the “top five” by user token consumption ([X post](https://x.com/i/status/2011823610386600009)) and screenshots suggested internal A/B testing of a new (possibly faster) Grok variant.

**4\. GPU/Kernel Engineering & Profiling Toolchains**

*   **Chrome Trace UI Faceplants at 600MB, Perfetto to the Rescue**: In GPU MODE, people reported **Chrome Trace Visualizer** crashing or rendering blank around **600MB** when loading **PyTorch profiler** traces, despite docs implying trouble only closer to 1GB.
    
    *   Members suggested [Perfetto UI](https://perfetto.dev/) as a workaround and one developer described building a trace chunking viewer at [ncompass.tech](https://docs.ncompass.tech) after hitting issues even with a **700MB** trace inside a VSCode-integrated Perfetto viewer.
*   **Hopper TMA/WGMMA: Swizzles, Strides, and 5D Copies**: GPU MODE dug into Hopper-era **TMA tensor copy** + **WGMMA** shared-memory layout constraints (A/B tiles in K-major), debating LBO/SBO meanings and why multiple 2D TMAs can beat a 3D TMA for `BLOCK_Mx16B` in some cases.
    
    *   They anchored the discussion in concrete code ([pipeline\_tma\_wgmma.cu](https://github.com/danielvegamyhre/gemm/blob/9fe95aa61ee7ebca4ded8b5029494b0d58e0d2e2/pipeline_tma_wgmma/pipeline_tma_wgmma.cu#L109-L118)) and noted gotchas like swizzling affecting LBO but not SBO, plus reminders that TMA copy supports **5 dimensions**.
*   **Profilers Tank Clocks, Benchmarks Tank Sanity**: In GPU MODE’s NVIDIA competition channel, users saw profiling runs cover only a single kernel in a zip and learned that **profiling overhead is expected**, making profiles unsuitable for absolute runtime comparisons.
    
    *   A key surprise: **ncu** can drop **SM Frequency** to around **1.08 GHz**, and a `CUBLAS_STATUS_INTERNAL_ERROR` during benchmarking was suspected to stem from out-of-bounds access, with debugging nudges like `torch.cuda.synchronize()` to surface errors sooner.

**5\. Security & Reliability: Jailbreak Resistance and Memory/State Leaks**

*   **GPT 5.2 Memory Allegedly Leaks Cross-Session Chats**: In BASI Jailbreaking, a user claimed enabling **memory** on free-tier **GPT 5.2** caused apparent chat content leaks from other sessions and shared an image as evidence ([screenshot](https://cdn.discordapp.com/attachments/1228043845967544380/1461404780831445237/image.png?ex=696b1783&is=6969c603&hm=91a356b1b007e9bb6123ede9a79414a836c03014291506ae32be52e3082e4eec)).
    
    *   They speculated it might be a memory bug and wondered if deleting other chats would stop it—an anecdote that triggered broader “state isolation” anxiety across communities already fighting session/state complexity in agent systems.
*   **Llama 3.2 Shrugs Off Old Jailbreak Prompts**: BASI users reported **Llama 3.2** resisted jailbreak prompts that worked on **Llama 3.1**, pointing to a specific example where the old method failed on the new version ([Chepenik’s post](https://chepenikconor.medium.com/day-855-9ae6f88b192c)).
    
    *   The takeaway was pragmatic: defenders are tightening guardrails, so attackers pivot toward technique tweaks (e.g., “turn off thinking” suggestions) and curated resources like [Arcanum’s AI security resource hub](https://arcanum-sec.github.io/ai-sec-resources/).

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **DeepSeek Gets Narrative Jailbreaking**: Members recommend **DeepSeek** for its susceptibility to narrative attacks, a common class of jailbreak techniques, which they clarified include _roleplay and persona_ attacks.
    *   This model stands out to members for being so vulnerable.
*   **GPT 5.2 Free-Tier Spills Chat Secrets?**: A user reported that enabling memory in the free-tier of **GPT 5.2** can lead to chat leaks from other sessions, providing [an image](https://cdn.discordapp.com/attachments/1228043845967544380/1461404780831445237/image.png?ex=696b1783&is=6969c603&hm=91a356b1b007e9bb6123ede9a79414a836c03014291506ae32be52e3082e4eec) as evidence.
    *   The user questions if this stems from a memory issue and whether deleting other chat sessions might resolve this leak.
*   **Llama 3.2 Locks Down, Jailbreak Attempts Fizzle**: Users are actively trying to jailbreak **Llama 3.2**, reporting that a prompt effective on **Llama 3.1** [fails on the new version](https://chepenikconor.medium.com/day-855-9ae6f88b192c).
    *   Attempts to elicit harmful responses, such as instructions for making meth or extreme weight loss advice, are reportedly meeting resistance, pointing to enhanced safety measures.
*   **Arcanum's Armory: Free AI Pentesting Resources Emerge**: A member shared [Arcanum's AI security resource hub](https://arcanum-sec.github.io/ai-sec-resources/?utm_source=executiveoffense.beehiiv.com&utm_medium=referral&utm_campaign=executive-offense-the-arcanum-ai-security-resource-hub), offering a structured workflow for **AI pentesting**.
    *   This GitHub resource is being circulated and flagged for routine team investigation.
*   **Grok's Image Moderation Gets Musk-ed**: Following [Elon Musk's request](https://x.com/elonmusk/status/2011527119097249996), users are attempting to breach **Grok's image moderation** by creating a pornographic Twitter thread.
    *   One user predicts this effort _is soon to be the most pornographic twitter thread in history_.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **VRAM Speeds Up Training!**: Members observed that increased **VRAM** generally accelerates model execution, noting that the `-ot` flag in Unsloth's documentation assists in efficiently managing tensor placement for peak performance.
    *   A user mentioned that the `-ot` setting typically outperforms the `n-cpu-moe` configuration.
*   **Anthropic's Python Devotion**: Members analyzed [Anthropic's investment in Python](https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html) and praised their business model for prioritizing effective models without excessive commercialization.
    *   One member stated that _Claude's always been pretty cracked compared to anything else for development related stuff_, although it is costly.
*   **Unsloth RL Grows Massive Context Window**: A [new long context RL release](https://x.com/UnslothAI/status/2011827592886960131) now supports a **7 million token context window**, a **7x** increase over the previous version.
    *   Participants were impressed by the potential for exponential memory savings and its applications, such as perpetual conversations with one's 'wifefu'.
*   **Qwen3 VL Architecture Bug Fixed**: Users reported a bug where the **Qwen3 VL architecture** was not properly identified as a vision model by Unsloth, resulting in a `ValueError` related to mismatched models and datasets during vision finetuning.
    *   The resolution involved upgrading `transformers` and validating the environment setup, with a reminder to use the [correct notebook](https://github.com/unslothai/notebooks/blob/main/nb/Qwen3_VL_\(8B\)-Vision.ipynb) for Qwen3 models.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Sonnet 4.5 Powers Background Agent**: Users confirmed that choosing **Sonnet 4.5** is now an option for launching a background agent.
    *   A developer noted on X that they are working on drastically improving the background agent in the coming days/weeks.
*   **Composer-2 Stealthily Assumes Reasoning Role**: Users observed that manually adding **composer-2** designates it as a reasoning model.
    *   A user referenced a recent **Cursor** tweet hinting at the imminent arrival of **composer-2** as a reasoning model.
*   **GPT 5.2 Codex Fails to Impress**: One user reported being unimpressed with **GPT 5.2 Codex**, noting its failure to follow instructions when creating a plan.
    *   Another user pointed to a [scaling-agents post from cursor.com](https://cursor.com) which suggests **GPT-5.2** models are superior at extended autonomous work, instruction following, and precision, using subagents effectively, contrasting with the reported experience.
*   **Sub-Agents Surprise with Built-in Options**: Users explored the functionality of **sub-agents**, noting the existence of two built-in subagents: **Explore** and **generalPurpose**.
    *   It was noted that only specific models can call subagents, and there are issues with reliably setting the model for each sub agent.
*   **Token Usage Sparks Minimization Strategies**: Users discussed strategies to minimize token usage, especially when exploring code, and asked for suggestions on tools for targeted and comprehensive code exploration.
    *   One user suggested trying [Nia mcp](https://nia.mcp), with another suggesting a command to review code changes and provide relevant prompts for token optimization.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Comet Color Customization Crippled**: Setting a browser color in **Comet** no longer changes Perplexity's color scheme, as [the _theme="yellow"_ HTTP header](https://discord.com/channels/1047197230748151888/1047649527299055688/1461239027771510878) seems to have vanished.
    *   Users are investigating whether this alteration is a bug or a deliberate change.
*   **Grok Code Cracks Top Five**: **Grok Code** has climbed into the top five, according to [this X post](https://x.com/i/status/2011823610386600009), which ranks models by user token consumption.
    *   This milestone highlights the increasing adoption and usage of the **Grok Code** model among developers.
*   **Airtel Pro Activation Agony**: Users continue to struggle with activating their **Airtel Pro** subscriptions, despite following all steps in [Perplexity's help article](https://www.perplexity.ai/help-center/en/articles/11842322-perplexity-pro-airtel-promo) and contacting support.
    *   Some users are receiving canned responses from AI agent Sam without any real resolution.
*   **New Grok Variant Spotted**: A new **Grok** model variant, possibly a faster version, is being tested internally using codenames, as revealed by screenshots from anonymous Discord voting.
    *   The models are referred to as assistant a and assistant b, hinting at a possible A/B testing scenario for this unreleased **Grok** model.
*   **Image Generation Grounded in some Regions**: Users in certain regions, particularly in Europe, are reporting that **image generation** is not functioning, leading to speculation that this restriction may be intentional.
    *   The cause of the regional block remains unclear, but it is affecting access to **image generation** capabilities.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Video Arena Enters Battle Mode**: The Video Arena is now in **Battle mode only**, foregoing direct chat or side-by-side comparisons, although these were available briefly to early users, and the new **Veo** model is available in the battle section.
    *   Rate limits for video generation are in place: **3 per 24 hours** on the site and **5 per 24 hours** on Discord.
*   **Users Thirst for Veo 3.1 Fast**: Demand for "unlimited" **Veo 3.1 Fast** is high, but moderators cite rate limits as a barrier (**3 per 24hr** on the site, **5 per 24hr** on Discord).
    *   When one user inquired about testing it on an external site, a moderator responded with an open invitation: _"Why don't you?"_
*   **Falcon-H1R-7B-GGUF Model Draws Acclaim**: Users are impressed with the [Falcon-H1R-7B-GGUF](https://huggingface.co/unsloth/Falcon-H1R-7B-GGUF) model, prompting requests for more information, and the discussion included a link to the paper [Transformer-Based Generative Adversarial Network for Image Super-Resolution](https://huggingface.co/papers/2601.02346).
    *   The model's specific capabilities and applications are still under exploration, suggesting a strong interest in its potential.
*   **Siren Video Model Stays Shrouded in Mystery**: The **Siren video model** is likely a codenamed early access model, part of frontier models still in development, details are scarce, but per the [FAQ](https://lmarena.ai/faq) user feedback can directly influence which models move forward.
    *   Speculation points to **Wan 2.5** as a possibility due to its 30 fps generation speed, highlighting the community's active theorizing.
*   **Hawk Ultra Challenges Opus for Supremacy**: The **Hawk Ultra** model is being compared to **Gemini 3 Pro**, reportedly generating over **17,000 lines of code** in a single prompt, with some users claiming it surpasses both Opus and Gemini, with Movement Labs behind it [according to this X post](https://x.com/movementlabsAI/status/2011964766533632380?s=20).
    *   Enthusiasm is high, with promises of open-source availability soon; one user exclaimed, _"got me so gassed"_.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **LM Studio API Sparks IDE Integration Craze**: Members are excited about running models locally with LM Studio and connecting its **OpenAI-compatible API** to a local IDE for running agents and scripts, saving on tokens.
    *   One member confirmed that LM Studio can indeed start an **OpenAI-compatible API** for this purpose and [here is a link](https://link.to.nowhere).
*   **GPT-OSS-20B's Speed Defies Size**: Members debated why the [GPT-OSS-20B model](https://huggingface.co/models?search=GPT-OSS-20B) feels faster than many 8B or 12B models, clarifying that it's a **Mixture of Experts (MoE)** model with only a subset (**3.6B**) of parameters active per token.
    *   Despite not using all weights, the model performs well in tasks like **math, physics, and quantum mechanics**, maintaining context over **34k tokens** even on a **6700XT** GPU.
*   **Finest Coding LLM Frenzy**: Users sought recommendations for the _best_ local LLM for coding, with mentions of **DeepSeek R1, Qwen3, and Devstral**, but it was noted that [Claude](https://claude.ai/) remains the top performer overall.
    *   Given hardware limitations, members suggested focusing on fitting the model into VRAM over raw speed, recommending a **20GB RTX 3080** over an **11GB 3080 Ti** due to the importance of VRAM for LLMs.
*   **LiquidAI Tool Use Torment**: A user encountered issues with tool use in the **LFM2.5-1.2B** model, receiving the output `<|tool_call_start|>[execute_command(command="date")]<|tool_call_end|>` when asking for the time.
    *   Troubleshooting steps involved verifying tool access, trying the instruct version of the model, ensuring a proper system prompt, and referring to the [LiquidAI documentation](https://docs.liquid.ai/lfm/key-concepts/tool-use) for guidance.
*   **MX150 Miraculously Finetunes 350M Model**: A user successfully ran a full fine-tune on a **350M model** using an **MX150 laptop** with **2GB VRAM** in the **hardware-discussion** channel.
    *   The process surprisingly required **CUDA 12.6**, suggesting that certain configurations might unexpectedly demand specific CUDA versions for compatibility.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **Smorty is Indeed Not an LLM**: Members have confirmed **Smorty** is not an LLM but a real person due to their unique writing style and [posts on Lemmy](https://lem.lemmy.blahaj.zone/u/Smorty?page=1&sort=New&view=Posts).
    *   Smorty is writing about **skill.md** and noted that the community is _"very against machine learning stuff"_.
*   **GPT-5 Image Generation Costs Skyrocket Overnight**: The cost of image generation using the **openai/gpt-5-image-mini** model suddenly spiked from **$0.01 to $0.04** overnight.
    *   The reason for this price increase has not been disclosed.
*   **BYOK Function Causes AWS Key Authentication Nightmares**: A member reported issues using their **AWS key** with **OpenRouter's BYOK function** across different platforms and models, including **SillyTavern**, **Amazon Bedrock**, and **Anthropic**.
    *   The error message received was _"Unauthorized or not cookie auth credentials found"_, indicating a potential authentication problem.
*   **OpenCode Declared Best Coding Harness by Members**: Members discussed coding harnesses and highlighted [**OpenCode**](https://github.com/OpenRouterTeam/awesome-openrouter?tab=readme-ov-file#aventura) as the best option, especially with plugins like **oh-my-open code**.
    *   One member noted it _"makes claude code feel like you're using some old school terminal app"_, showcasing its efficiency.
*   **Cerebras Cracks a Deal with OpenAI in 2028**: OpenAI announced a [partnership with Cerebras](https://openai.com/index/cerebras-partnership/) scheduled for **2028**, sparking surprise and speculation among members.
    *   Some suggest this collaboration could be a response to the **Groq** deal, given Cerebras' long-standing presence and support for large models like **120B**.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Byte-Level LLMs and Diffusion United**: A member combined **byte level LLMs** and **diffusion** models to enable byte models to process diverse file types more reliably.
    *   The approach leverages diffusion to correct minor byte errors, as demonstrated in a [screen recording](https://cdn.discordapp.com/attachments/1149866623109439599/1461342380392185928/Screencast_from_13-01-26_152930.webm?ex=696add65&is=69698be5&hm=5bcb4ae2ce4e375aac96cd552f00b7d4077391dbad48fa2b2745608cc1555828&).
*   **Flux 2 Demands VRAM**: The **Flux 2 9B model**, utilizing a **Qwen 3 8B** text encoder, requires **35GB of VRAM** to load all weights for serving.
    *   However, memory usage is halved when there are no concurrent users; ComfyUI may be an alternative for diffusion.
*   **LLM Gains Nervous System**: A member is developing a _native transformer architecture extension_ that imbues LLMs with a **nervous system**, complete with short/mid/long term memory, at **<1% compute cost**.
    *   The developer claims it _scales linearly 1-2% compared to the model size_, and performs **95%** the same as the model on the BEIR's; demonstrable benchmarks are needed.
*   **Google's Gemma Debuts**: **Google** is launching **Gemma** models, sparking excitement among members.
    *   One member cheekily remarked _Gemma, meta was never more meta!_.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **Chrome Trace Visualizer Struggles with Large PyTorch Profiles**: Members reported crashes with **Chrome Trace Visualizer** at **600MB** when used with **PyTorch profiler**, despite documentation suggesting a 1GB limit; **Perfetto UI** was proposed as a workaround.
    *   A member is developing a trace viewing tool ([ncompass.tech](https://docs.ncompass.tech)) with trace chunking to address large trace issues, experiencing problems opening a **700MB** file in the **Perfetto viewer** within **VSCode**.
*   **TMA Tensor Copy Performance Tweaked**: Members explored **shared memory layout** requirements for A/B tiles in K-major layout, debating LBO and SBO settings for TMA, as seen in [this code](https://github.com/danielvegamyhre/gemm/blob/9fe95aa61ee7ebca4ded8b5029494b0d58e0d2e2/pipeline_tma_wgmma/pipeline_tma_wgmma.cu#L109-L118).
    *   It was also reminded that TMA tensor copy supports **5 dimensions**, and while larger TMA ops are more efficient, for `BLOCK_Mx16B` multiple 2D TMAs can be faster than a single 3D TMA; swizzling impacts LBO, but not SBO, settings.
*   **Information Gravity Constrains AI Hallucinations**: A member is applying **Information Gravity** to stabilize **Inference Stability** and mitigate **Hallucination Loops**, mapping the **Excitation Flux** of token selection and observing a shift to linear growth beyond S > 45, with modules available on [GitHub](https://github.com/brayo003/Substrate-X-Theory-of-Information-Gravity/tree/main).
    *   A **Hysteresis Firewall** at **1.0** enforces stability via a **2.2x gamma-eff flush**.
*   **CUDA Compression Collaboration Commences**: A Master’s student in Electrical Engineering starting a GPU-based data compression project using CUDA, with a focus on **Golomb-Rice** compression, sought recommendations for resources and a member shared [CUDA documentation](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#features-and-technical-specifications).
    *   Members discussed the downside of a tiny block size of **32** in CUDA, due to the number of warps working the SM (_Streaming Multiprocessor_); **WGMMA/tcgen05** need multiples of 128 threads to work together.
*   **Profiling Quirks Quash Kernel Competition**: Members flagged several profiling issues related to an **NVIDIA competition**, including partial kernel coverage, expected profiling overhead, and **ncu profiler** lowering **SM Frequency to 1.08 GHz**.
    *   A **CUDA error** `CUBLAS_STATUS_INTERNAL_ERROR` during benchmarking was attributed to potential out-of-bounds access, with suggestions for using `torch.cuda.synchronize()` for debugging.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **OpenAI & Cerebras MegaScale Collab!**: OpenAI and Cerebras announced a strategic partnership, with details available on [OpenAI's website](https://openai.com/).
    *   Community members expressed excitement over the potential impact on AI infrastructure.
*   **Ministral 3 Paper Dropping Bombshell!**: The new paper for **Mistral's Ministral 3** model was announced on [Twitter by @qtnx\_](https://twitter.com/qtnx_/status/2011510403550024087?s=20), sparking discussion on its capabilities and performance.
    *   The model has been widely anticipated by many, although no performance benchmarks were released.
*   **AI Agents Playing Data Monopolies?**: Olivia Moore highlighted how AI agent subscriptions, like **Manus**, are offering extended proprietary data access, such as **12 months** of SimilarWeb data versus the free plan's **one month**.
    *   The trend suggests a move towards gatekeeping valuable datasets behind AI agent subscriptions.
*   **Local LLM Inference Challenges Cloud Giants!**: Charles Frye's [new Modal guide and code samples](https://xcancel.com/charles_irl/status/2011484220032762114?s=46) demonstrate that local LLM inference can match or exceed the performance and cost-effectiveness of major LLM APIs.
    *   Members are asking if it is now possible to run local meeting transcription, akin to a local Granola, without needing cloud services.
*   **LLMs Flunk Chemistry Exam!**: LLMs struggle with chemistry, especially when hallucinating details like statins in a cholesterol structure, according to this [tweet](https://x.com/bfl_ml/status/2011825819082244266?s=46).
    *   A member is developing tools at [ChemIllusion.com](https://x.com/bfl_ml/status/2011825819082244266?s=46) to correct LLMs' chemistry errors.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **GLM 4.7 & Minimax Rise for Budget Conscious Engineers**: Members reported **GLM 4.7** and **Minimax** LLM providers as fantastic, with **GLM 4.7** accessible via z.ai coding plan and **Minimax** being very cheap via Moonshot.
    *   One member was seeking the best **AI tool** specifically for producing a large amount of images to videos in a few days, suggesting preference for a _paid_ option, with suggestions to _use API_.
*   **GPT 5.2 Option Disappears for Some**: Some members reported that **GPT 5.2** option disappeared for certain accounts, though it reappeared after logging out and back in; some claim _5.2 is a worse model_.
    *   One member lamented the _your limit exceeded_ message despite using **GPT 5.2**.
*   **AI-Deepfake Certification Program Kicks Off**: A member is working on an early pilot for an **AI deepfake detection & verification certification** tied to a platform called PhantomTrace.
    *   They are looking for a small group of researchers, builders, security folks, journalists to review draft learning objectives, test hands-on detection labs, and help define what _passing_ should mean, linking to [Discord context](https://discord.com/channels/974519864045756446/1204360881593520128/1461532097641578672).
*   **CustomGPT Aims for Project Integration**: A user expressed a desire to use **CustomGPT** inside a Project, or place the result of the **CustomGPT** inside a Project.
    *   They also want to be able to move any Chat generated outside a Project, into the Project.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Pangram's AI Detection Capabilities Debated**: Members questioned the accuracy of **Pangram** as an **AI text detector**, citing instances where it misidentified content generated by **Claude** as _100% human written_, while another member shared [the paper](https://arxiv.org/abs/2402.14873) behind their detection methods.
    *   Linked from [Pangram's website](https://www.pangram.com), the discussion considered counting **em dashes** in text as a metric for detecting **AI generation** with an estimated _+-10% margin of error_.
*   **Seeking Tiny Classifiers for Synthetic Text on Web**: A member is seeking a **small classifier model** to estimate the amount of synthetic text on the web and offered to run a web crawl through it, and others suggest using a **drafter model** trained for speculative decoding, although it would be model-specific.
    *   The community also discussed the option of building their own classifier but noted this could be potentially expensive at scale.
*   **Community Eyes Open-Sourcing Training Datasets**: A member inquired about the community's interest in **open-sourcing instruction-following datasets** for finetuning pre-trained LLMs like **GPT-Neo**, in addition to pretraining datasets like The Pile and CommonPile.
    *   Another member offered their developer skills for projects in the community.
*   **Capitalization Caps Model Capacity?**: A member inquired about research on whether models perform better when prompted with proper **capitalization/grammar** versus all lowercase, and pointed to [three Arxiv papers](https://arxiv.org/abs/2310.11324), ([2411.10541v1](https://arxiv.org/abs/2411.10541v1)), ([2508.11383v1](https://arxiv.org/abs/2508.11383v1)) but noted they focus on prompt format rather than minor details like capitalization.
    *   A member expressed the assumption that proper capitalization/grammar improves model performance and suggested testing this using **vLLM's benchmarking tools**.
*   **Global CoT Analysis Attempts Uncovering Patterns**: A member shared a [LessWrong post](https://www.lesswrong.com/posts/q9g9zuudd3Pvw2cbj/global-cot-analysis-initial-attempts-to-uncover-patterns-1) about **global chain of thought analysis** and initial attempts to uncover patterns.
    *   The analysis seeks to understand how models arrive at their conclusions by examining the reasoning steps they take, potentially revealing insights into their decision-making processes.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Arch Advocates Acclaim Always-Updated Arch**: Members debated the merits of **Arch** over **Ubuntu** and **Debian**, highlighting **Arch's** frequent package updates akin to **macOS** and **Windows**.
    *   A user suggested **Garuda KDE** (Mokka and Dragonized) as a user friendly starting point with ready-to-use functionality.
*   **PR Pipeline Plunge: Testing Transpires**: A discussion clarified the meaning of the `imported internally` label on a PR, indicating the PR has been cloned into an internal repo for final testing and integration.
    *   The `imported internally` tag signals that the PR is in its final stages before merging, and it will be tagged with `merged-internally` upon completion.
*   **.NET Nightmare: Legacy Lament**: A member bemoaned being assigned to a legacy **.NET 4.5.2** project from **2014**, which only functions on **Windows** and lacks documentation.
    *   Another member related a similar experience with a standalone **C#** project plagued by problems and missing documentation, likening it to _finding a hotspring and water in a desert_.
*   **Mojo Mulls Graphics Shaders with SPIR-V**: The possibility of incorporating graphics shaders into **Mojo**, particularly with a **SPIR-V backend** to facilitate _compute shaders_, is under consideration.
    *   A member cautioned that the compiler build would be a _non-trivial_ task once it is **open source**.
*   **Shaders Showdown vs Matrix Manipulation**: A query arose concerning the distinction between **shaders** and conventional **matrix operations**, notably considering recent **CUDA** developments.
    *   In response, one member linked to [No Graphics API](https://www.sebastianaaltonen.com/blog/no-graphics-api) and another member linked to [Death to Shading Languages](https://xol.io/blah/death-to-shading-languages/) to help clarify the differences.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Minimax M2.1 Beats Kimi K2 in Claude**: A user reported that **Minimax m2.1** running in **Claude code** outperforms **Kimi K2** in code quality, planning, and API speed, noting they pay $40/month for **Kimi v2**.
    *   They found **Kimi's API** slow and the model inferior, hoping for a newer release.
*   **Debate on Kimi CLI Defaulting to K2 Turbo**: A user questioned why the default **Kimi CLI app** doesn't default to **K2 Turbo** with a proper subscription.
    *   Another member suggested **Kimi K2 Turbo** should have around **73 tps**, compared to **MiniMax m2.1's 38 tps** and **Z.Ai's GLM-4.7's 41 tps**, though the latter has poor uptime.
*   **New Slide Feature Uses K2 Model with Vision?**: A member inquired whether the new slide feature uses a newer **K2 model with Vision**.
    *   Image analysis suggests it searches images for reference, implying some vision capability.
*   **Questions on Kimi's Model Deprecation**: A member asked if **Kimi models** are discontinued every **12-14 months** like **Google's Gemini models** and if the same problem would arise switching to **Kimi K2**.
    *   Older models are available on the [Moonshot API platform](https://platform.moonshot.ai/docs/pricing/chat#generation-model-moonshot-v1), and a year-old model is still usable on [kimi.com](https://kimi.com).

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Developer Seeks Super Cool Gig**: A member is actively searching for a **super cool project** where they can apply their **developer skills**.
    *   Interested parties are encouraged to reach out for collaboration.
*   **Discord Mod Applications Paused**: A member inquired about joining the moderation team, but another member clarified that the position is currently unavailable.
    *   No specific reasons were provided for the hiring freeze.
*   **AI Engineer Needed for Usage Tracking**: An active project requires an **AI engineer** to enhance **usage tracking** and develop a more robust **billing/credit system**.
    *   This implies a need for expertise in both AI and financial systems.
*   **Payment Problems Plague Platform**: A member reported facing persistent **payment issues** when attempting to add credit to their account, including problems with upgrading membership, using Link, and paying with credit card or Alipay.
    *   They have yet to receive a response from the helpdesk or email support, suggesting potential delays in customer service.

* * *

[MCP Contributors (Official)](https://discord.com/channels/1358869848138059966) Discord
---------------------------------------------------------------------------------------

*   **Summit Lacks Livestream for Remote Registrants**: A member inquired about a **live stream** from the NY summit, expressing a desire to participate remotely.
    *   They would have loved to register, but they cannot be there in person.
*   **Stateless Servers Spark Scalability Savings**: A member proposed a [signature method](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2091) to balance schema freezing and dynamic server features, aiming to allow **stateless MCP servers** to handle multiple active conversations more efficiently.
    *   They noted that their current setup in Goose, which spins up a new set of MCP servers for each conversation, is becoming increasingly expensive as the number of concurrent conversations rises.
*   **Dynamic Toolsets Tackle Transports**: One member pointed to [issue #1442](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1442) and GitHub MCP's dynamic toolsets as examples of how servers can handle state on **STDIO**, potentially unifying behavior for both remote and STDIO setups.
    *   The member admitted it is difficult to maintain a truly stateless **STDIO server**, given their current SDK architecture that builds a new "server" on every request, customizing registered tools based on user/flags.
*   **Persistent Sessions Save State on Server Starts**: The topic of **persistent sessions** was raised as a means to retain session features across agent and MCP server restarts.
    *   Another member mentioned using their own session middleware outside the Go SDK for horizontal scaling, suggesting that the ability to store and retrieve **session data** across restarts would be beneficial.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **1x1 Convolution Edges out SVD/PCA**: A member suggested using a **1x1 Convolution** instead of **SVD/PCA** for feature extraction, arguing that **SVD/PCA** extracts features with the highest variance (_loudest_), potentially capturing generic syntax noise rather than specific _intent_ signal, via [this tweet](https://fxtwitter.com/i/status/2011094378396467316).
    *   They believe that **1x1 Conv** would allow the model to learn precisely which heads matter for the loss function via backprop and would be lighter for inference.
*   **"Quanta" Theory Draws Debate**: Members discussed the _quanta_ theory which states that networks must learn a variety of modules, each implementing a different algorithm or retrieving a different piece of knowledge.
    *   One member expressed skepticism, suggesting that many mechanisms could be entangled or too generic to be designated a specific use, potentially leading to an oversimplified mechanistic explanation of neural networks.
*   **AI Assisted Coding Squaring off with Vibe Coding**: A member contrasted **AI assisted coding** tools (cursor/windsurf/antigravity) with what they termed **vibe coding** tools (devin/tembo/jules).
    *   No further details were provided.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **DSPy Tooling May Outperform Native LLM Tools**: A member referenced the [DSPy documentation](https://dspy.ai/learn/programming/tools/#using-native-tool-calling) and asked about benchmarks comparing **native tool calling** versus **custom tool calling**, particularly if **DSPy tools** always outperform.
    *   Another member responded that this depends on the specific language model (LM) being used, implying performance is not universally better for **DSPy tools**.
*   **Native and DSPy Tools Need Benchmarking**: A member emphasized that performance varies across language models, even those from the same AI lab, so **benchmarking is essential** for specific use cases and model combinations.
    *   Another member agreed, stating that performance can vary in either direction, and users should test with their **specific model and program** to measure and evaluate what works best.
*   **Native Tool Calling Can Be Lower Quality**: Members discussed that it is possible that **native tool calling** may sometimes produce lower quality results compared to other methods.
    *   The statement in the documentation makes a weak claim, but this is expected to happen for some models.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider Users Want Autoload**: Users are requesting a feature in **aider** to automatically add files without prompting, aiming for a less interactive experience.
    *   The specific request involves configuring **aider** to bypass the add file prompt, indicating a desire for a streamlined workflow.
*   **Aider Setup Troubleshoot**: A user reported setup difficulties with **aider** after installation via command prompt, as shown in [this screenshot](https://cdn.discordapp.com/attachments/1133060505792159755/1461275448574218373/image.png?ex=696a9f10&is=69694d90&hm=19ccaef4fb45cd4288b6307abb3eca0a6819f27eb6253f0820357b2219006a4d).
    *   The user sought guidance on next steps without providing further context.
*   **Using CI Logs to Fix Aider**: A user asked about the best way to use **CI logs** with **aider** to fix failed tests, excluding the log file from Git.
    *   A potential solution suggested was the command `aider --read ci.log`.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Black PNGs Baffle Stable Diffusion Users**: A user reported encountering fully black PNGs while running `examples/stable_diffusion.py` with the `--fakeweights` option, indicating a potential issue with **Stable Diffusion** in tinygrad.
    *   The issue seems to be related to the **NULL device** and its interaction with kernel scheduling; debugging steps are ongoing.
*   **NULL Device: Compute-less Kernels**: A user inquired about the purpose of the **NULL device** in tinygrad, questioning whether it performs any computations and how it aids in scheduling kernels.
    *   Another member clarified that the **NULL device** does not perform any compute, but it is used to schedule kernels, which one user called _that's a cool feature_.

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

### **BASI Jailbreaking ▷ #[general](https://discord.com/channels/1105891499641684019/1235691879492751460/1461105640553316545)** (1085 messages🔥🔥🔥):

> `Prodigy vs Barbie, Smack My Bitch Up vocals, GPT-5.2 chat leakage, AI for solo TTRPG campaigns, AI vs Human Made Music`

*   ****Prodigy beats Barbie: a Diss Track?**: One user said _prodigy is way better_, prompting another user to request a translation for someone wanting them to ruin a **Barbie** doll.
    *   Arguments then broke out including statements such as _go crywank to chumba wumba on the barbie_.
*   ****Shahin Badar belts 'Smack My Bitch Up'**: A user asked _who does the female vocals in Smack My Bitch Up_, and another user identified [**Shahin Badar**](https://en.wikipedia.org/wiki/Shahin_Badar) as the vocalist.
    *   They then posted the [YouTube link](https://youtu.be/gJ4bW4KNffo?si=0SlbsHlcS3gTofuq) to the song.
*   ****Pliny's Pithy Praise for Gemini Users****: A user posted a [Jim Carrey GIF](https://tenor.com/view/bruce-almighty-jim-carrey-beautiful-happy-smile-gif-4874848) with the caption _Pliny hasn't spoken in general in like 2 months_, and **Pliny** himself followed up with another [animated GIF](https://tenor.com/view/korone-flip-combo-breaker-killer-instinct-best-dog-inugami-korone-gif-25381954).
*   ****DeepSeek Debuts for Jailbreaking Jollies****: A user recommended **DeepSeek** for its susceptibility to narrative attacks, noting it is the most common class of jailbreak techniques.
    *   Someone added that it works due to allowing attacks such as _roleplay and persona_.
*   ****VS Code: More than meets the Eye**: Users discussed customizing and forking VS Code, and a user shared their [VS Code setup](https://fixupx.com/davepl1968/status/2011868005312184485), which included Copilot, Codex, and his files in the center.
    *   Another user mentioned making sure the screen is black, the font is easy on the eyes, and Copilot is turned OFF.

* * *

### **BASI Jailbreaking ▷ #[jailbreaking](https://discord.com/channels/1105891499641684019/1228043845967544380/1461091240681537638)** (51 messages🔥):

> `Jailbreaking Deepseek, Gemini, Grok, Jailbreaking Llama 3.2, Jailbreaking Opus 4.5, Prompt Injection Learning, GPT 5.2 Free-Tier Chat Leaks`

*   **Thinking: the Achilles Heel of LLMs?**: A member advised that, when jailbreaking, _turning off thinking for the model_ lets the prompt hit and can offer success that reasoning might spit back.
    *   It seems sometimes the models try to be TOO smart!
*   **The Elusive Jailbreak for Gemini Pro**: Multiple members inquired about **jailbreaks for Gemini Pro**, with one humorously asking, _Where’s the jailbreak for banana pro Gemini fools._
    *   The demand for ways to bypass Gemini's restrictions remains high within the community.
*   **Prompt Injection 101 with Anon3369489**: After a member asked how to learn **prompt injection**, another member offered to teach them, leading to a discussion about connecting on Discord.
    *   The exchange highlighted the community's willingness to share knowledge and guide newcomers in the art of jailbreaking.
*   **GPT 5.2 Free-Tier Churns Memories?**: A user reported that with **GPT 5.2** (free-tier), enabling memory in settings can lead to chat leaks from other sessions, and posted [an image](https://cdn.discordapp.com/attachments/1228043845967544380/1461404780831445237/image.png?ex=696b1783&is=6969c603&hm=91a356b1b007e9bb6123ede9a79414a836c03014291506ae32be52e3082e4eec).
    *   The user was unsure if it's a memory issue or if deleting other chat sessions would resolve this.
*   **Gandalf Game Guru Required**: A user who just started the **Gandalf game** asked for Italian speakers, but then asked for assistance with **level 8**, after getting discouraged after a few hours.
    *   Another user offered to help, requesting to see the first user's work from level 7 and level 8 in DMs to avoid spoilers, and a third member added that _the bump in difficulty is huge_ between levels.

* * *

### **BASI Jailbreaking ▷ #[redteaming](https://discord.com/channels/1105891499641684019/1204553141354504193/1461096614239273093)** (35 messages🔥):

> `Grok Image Moderation, Llama 3.2 Jailbreak, Web Pentesting Resources, AI Pentesting Resources, GPT 5.2 Jailbreak`

*   ****Grok's Goriness**: Musk Orders Image Moderation Meltdown**: In response to [Elon Musk's request](https://x.com/elonmusk/status/2011527119097249996), users are attempting to break **Grok's image moderation** by creating a pornographic Twitter thread.
    *   One user jokingly stated it's _soon to be the most pornographic twitter thread in history._
*   ****Llama 3.2 Lockdown**: Jailbreak Attempts Stall**: Users are actively seeking a jailbreak for the latest **Llama 3.2**, with one user reporting that a previously effective jailbreak prompt (used in **Llama 3.1**) [fails on the new version](https://chepenikconor.medium.com/day-855-9ae6f88b192c).
    *   Attempts to elicit harmful responses like _how to make meth_ or _make anorexic wife lose 100lbs_ are reportedly meeting resistance, indicating enhanced safety measures.
*   ****Arcanum Ascends**: Free AI Pentesting Fortress Found**: A member shared [Arcanum's AI security resource hub](https://arcanum-sec.github.io/ai-sec-resources/?utm_source=executiveoffense.beehiiv.com&utm_medium=referral&utm_campaign=executive-offense-the-arcanum-ai-security-resource-hub), which offers free resources and a structured workflow for **AI pentesting**.
    *   This GitHub resource is being shared for routine team investigation.
*   ****GPT 5.2 Fort Knox**: TheDonutAI Remains Unbreakable**: A user shared a link to [TheDonutAI's GPT 5.2 dashboard](https://thedonutai.com/dashboard), noting that _no can jail break this_ model on drug related topics.
    *   Another user jokingly said: _if u can break ur the GOD dude_.

* * *

### **Unsloth AI (Daniel Han) ▷ #[general](https://discord.com/channels/1179035537009545276/1179035537529643040/1461088695619686570)** (478 messages🔥🔥🔥):

> `VRAM Importance, Tuning Gemma2 2b, Effective Batch Size, GRPO Training Hyperparameters, New long context RL release`

*   **VRAM Boosts Model Speed**: Members noted that more **VRAM** generally leads to faster model execution, and the `-ot` flag in Unsloth docs can help manage tensor placement for optimal performance.
    *   One member suggested that `-ot` is usually faster than using `n-cpu-moe`.
*   **TPU Tunix Clashes with Gemma2 2b**: A member reported beating **Unsloth** with **4 RTX Pro Q-Max** by using the free **Kaggle TPU v5e-8** for training **Gemma2 2b** with **FSDP**.
    *   They cautioned that _flash attention_ and _cut cross entropy_ aren't implemented and _gradient checkpointing_ is dubiously implemented.
*   **Effective Batch Size Optimization Explored**: Discussion revolved around achieving an _effective batch size_ of **32** through gradient accumulation without needing a datacenter.
    *   It was emphasized that batch size should be a performance/hyperparameter optimization rather than a GPU size consideration.
*   **GRPO Training Requires Parameter Tuning**: A member sought advice on tuning hyperparameters mid-run to accelerate model convergence during **GRPO** training, sharing that one epoch consists of **3000 steps**.
    *   Another user suggested setting `importance_sampling_level="sequence"` in **GRPOConfig** as a potentially stabilizing factor.
*   **Unsloth's RL Release Extends Context Window**: A [new long context RL release](https://x.com/UnslothAI/status/2011827592886960131) boasts a **7 million token context window**, marking a **7x** increase over the previous release.
    *   Members marveled at the exponential memory savings and the implications for tasks like conversing with one's 'wifefu' indefinitely.

* * *

### **Unsloth AI (Daniel Han) ▷ #[off-topic](https://discord.com/channels/1179035537009545276/1179039861576056922/1461092301739655465)** (805 messages🔥🔥🔥):

> `Versatile Embedding Models, RL Insightful Session, Audio Tokenizer Codecs, Scaling Laws Architecture, Qwen3 VL Architecture Bug`

*   **Embedding Model Size Astonishes**: Members expressed amazement at the **versatility of embedding models** being achieved within a compact **308M parameter space**.
    *   A meme image was shared to display **shocked LLM developers** seeing perfect embeddings.
*   **RL Session Sparks Insights, Electricity Burns**: Following an insightful session about **Reinforcement Learning**, one member thanked another, who jokingly responded with _“You’re just burning electricity now”_.
    *   A member shared a [YouTube link](https://www.youtube.com/live/jMSCJZAEYR8?si=738_bf4US5AlRCsU) to the event.
*   **Qwen3 VL Bug Squashed**: Users reported a bug where the **Qwen3 VL architecture** was not detected as a vision model by Unsloth, raising a `ValueError` about mismatched models and datasets when attempting vision finetuning.
    *   The issue was resolved by upgrading `transformers` and verifying the environment setup, with a reminder to use the [correct notebook](https://github.com/unslothai/notebooks/blob/main/nb/Qwen3_VL_\(8B\)-Vision.ipynb) for Qwen3 models.
*   **Anthropic's Python Investment**: Members discussed [Anthropic's investment in Python](https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html) and their business approach, praising their focus on providing effective models without over-commercialization.
    *   One participant noted that _Claude's always been pretty cracked compared to anything else for development related stuff_, but it is costly.
*   **YouTube Flooded With AI Slop**: Members discussed the increasing presence of **AI-generated content on YouTube**, with one sharing [a report](https://www.theguardian.com/technology/2025/dec/27/more-than-20-of-videos-shown-to-new-y) indicating that over 20% of videos shown to new users are AI-generated.
    *   Some members reported seeing **AI-generated media** immediately pushed to new accounts, seniors, and very young kids.

* * *

### **Unsloth AI (Daniel Han) ▷ #[help](https://discord.com/channels/1179035537009545276/1179777624986357780/1461106991832236032)** (51 messages🔥):

> `Hyperparameter Tuning Mid-Run, GGUF and vLLM Compatibility, Running Unsloth Models with Ollama, MedGemma Quantization, RL Model Training Graphs`

*   **Tweaking Hyperparameters Mid-Training**: A member inquired about the feasibility of changing hyperparameters mid-run during **GRPO training**, particularly the learning rate, and another member confirmed it's possible if checkpoints are saved.
    *   They also noted the challenges of increasing **learning rate** due to potential convergence issues and local minima, especially when using a large group size on **H200**.
*   **GGUF's Growing Pains with vLLM**: A member encountered a `ValueError` when trying to run a **GPT-OSS-20B-Q4\_K\_M.gguf** file using **vLLM**, which was attributed to **GGUF's** experimental status in **vLLM**, according to [vLLM documentation](https://docs.vllm.ai/en/stable/features/quantization/gguf/).
    *   They suggested using **vLLM's llmcompressor** or **Intel autoround** for post-training quantization instead.
*   **Ollama helps label Bank Transactions**: A member sought advice on running a small **Unsloth** model with **Ollama** to automatically label bank transactions using [actual-ai](https://github.com/sakowicz/actual-ai), providing details on their **Truenas** setup with a **Ryzen 5900x**, **128GB RAM**, and **Nvidia Quadro T400 GPU**.
    *   They also shared code snippets for loading a pipeline using **ZImageTransformer2DModel** and **ZImagePipeline**, asking if a similar approach could be used with the text encoder.
*   **Model Merging for RL Convergence**: A member sought advice on interpreting **TensorBoard graphs** for an **RL model**, particularly regarding the use of smoothing, since they have been training for 3 days on a 3000-sample dataset and only went through 2 epochs.
    *   Another member advised to "_trust both!_" smoothed and unsmoothed graphs and consider merging the current checkpoint to assess progress, even though it's not performing as well as their **SFT classifier**.

* * *

### **Unsloth AI (Daniel Han) ▷ #[showcase](https://discord.com/channels/1179035537009545276/1179779344894263297/1461504313447813121)** (3 messages):

> `Unsloth showcase`

*   **Unsloth Showcase Declared**: The channel is declared as a showcase for **Unsloth**\-related material, including **Unsloth**\-trained models, contributions, and open datasets on HF/Github.
    *   General chatting to be continued in other channels.
*   **Clarification on Showcase Purpose**: The showcase is specifically for **Unsloth**\-related content such as models, contributions, and open datasets.
    *   Irrelevant discussions should be moved to designated chat channels.

* * *

### **Unsloth AI (Daniel Han) ▷ #[research](https://discord.com/channels/1179035537009545276/1257011997250424842/1461113160328020080)** (7 messages):

> \`Recursive Language...

[Read original post](https://news.smol.ai/issues/26-01-15-openresponses/)

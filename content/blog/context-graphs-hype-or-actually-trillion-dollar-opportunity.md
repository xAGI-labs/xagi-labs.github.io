---
title: "Context Graphs: Hype or actually Trillion-dollar opportunity?"
date: "2026-02-03T05:44:39.000Z"
description: "**Zhipu AI** launched **GLM-OCR**, a lightweight **0.9B** multimodal OCR model excelling in complex document understanding with top benchmark scores and day-0 d..."
original_link: "https://news.smol.ai/issues/26-02-03-not-much/"
---

**a quiet day lets us feature a bubbling topic.**

> AI News for 1/30/2026-2/2/2026. We checked 12 subreddits, [**544** Twitters](https://twitter.com/i/lists/1585430245762441216) and **24** Discords (**254** channels, and **14979** messages) for you. Estimated reading time saved (at 200wpm): **1408 minutes**. **Our new website** is now up with full metadata search and beautiful vibe coded presentation of all past issues. See https://news.smol.ai/ for the full news breakdowns and give us feedback on [@smol\_ai](https://x.com/Smol_AI)!

Our policy for quiet days is that we’ll now feature longer running, slow-burn stories that would otherwise not spike to the top of the heap on a certain day but will probably be of broader historical significance to AI Engineers. Today’s Lightning Pod (our Youtube-only short format) features the topic of Context Graphs, which [Jaya Gupta launched late December on X](https://x.com/JayaGup10/status/2003525933534179480) and has since inspired even former guests like [Dharmesh Shah](http://latent.space/p/dharmesh) (who has [reservations](https://simple.ai/p/what-are-context-graphs)). We chatted with both authors on the response:

https://youtu.be/zP8P7hJXwE0

That’s thoughtleading 101, but definitely helpful — for sure every founder building a data/context engineering product will go to them and say they got the people who coined Context Graphs on their cap table. But the problem with the post is that it promises a whole lot (evidenced in the title), but is not very prescriptive.

[Recently](https://x.com/cognition/status/2017057457332506846), I also framed Cursor’s [Agent Trace initiative](https://agent-trace.dev/) as a “Context Graph” for Code:

This is the first actual specification for a context graph for a specific domain (coding agents) that is agreed on between companies. It remains to be seen if it has actual staying power, which will mostly be driven by 1) high demonstrated improvement in agent performance, and 2) customer pressure to support it. Based on first principles, the idea (capture decision traces, exceptions and precedents scattered all over the “data mesh” into the context of an LLM) seems compelling, but of course, the devil is in the details.

* * *

AI Twitter Recap
================

**Zhipu AI’s GLM‑OCR launch (0.9B) and day‑0 deployment support across stacks**

*   **GLM‑OCR (multimodal OCR for complex documents)**: Zhipu released **GLM‑OCR**, positioned as a lightweight, deployable **0.9B** model for real-world document understanding (tables, formulas, information extraction, messy layouts). It’s reported **#1 on OmniDocBench v1.5 (94.62)** and emphasized as low‑latency / high‑concurrency friendly. See the ecosystem “day‑0 support” announcements from [@lmsysorg](https://twitter.com/lmsysorg/status/2018521181146751486) (SGLang integration + PR/cookbook links) and [@vllm\_project](https://twitter.com/vllm_project/status/2018582480518091083) (vLLM day‑0 support), plus deployment marketing from [@novita\_labs](https://twitter.com/novita_labs/status/2018565896013574225).
*   **Local-first availability**: Ollama shipped immediate local pulls + API usage (“drag and drop images into terminal”, JSON‑formatted outputs), making GLM‑OCR easy to run offline: [@ollama](https://twitter.com/ollama/status/2018525802057396411) and library link [@ollama](https://twitter.com/ollama/status/2018525804733575492). Community comparisons also claim strong quality vs PaddleOCR/DeepSeek OCR: [@bdsqlsz](https://twitter.com/bdsqlsz/status/2018663915404841212). LlamaIndex highlighted benchmark displacement (claiming 50–100% faster vs prior top model) and ongoing eval integration: [@jerryjliu0](https://twitter.com/jerryjliu0/status/2018713059359899729).

**Agentic coding models & harnesses: Qwen3‑Coder‑Next (80B@3B), SERA‑14B, and the “skills/MCP” tool interface convergence**

*   **Qwen3‑Coder‑Next**: Alibaba released **Qwen3‑Coder‑Next**, an open‑weight **80B MoE** with only **3B active** parameters, pitched for _coding agents + local dev_ with **256K context**, trained with **800K verifiable tasks + executable environments**. They claim **\>70% SWE‑Bench Verified** with SWE‑Agent scaffold and strong agent benchmark efficiency: [@Alibaba\_Qwen](https://twitter.com/Alibaba_Qwen/status/2018718453570707465) and benchmark callout [@Alibaba\_Qwen](https://twitter.com/Alibaba_Qwen/status/2018719026558664987). Independent/adjacent summaries: [@UnslothAI](https://twitter.com/UnslothAI/status/2018718997584474191) (memory footprint + GGUF guidance) and commentary on efficient long‑context attention choices (e.g., “Gated DeltaNet” mentioned in the discourse): [@eliebakouch](https://twitter.com/eliebakouch/status/2018730622358073384). vLLM shipped day‑0 support in **vLLM 0.15.0**: [@vllm\_project](https://twitter.com/vllm_project/status/2018742511502856568).
*   **Open Coding Agents ecosystem (Ai2)**: Allen AI announced **SERA‑14B** (on‑device‑friendly coding model) plus refreshed open datasets that include **raw trajectories + verification metadata**: [@allen\_ai](https://twitter.com/allen_ai/status/2018741177734910166) and dataset/model detail thread pointer [@ethnlshn](https://twitter.com/ethnlshn/status/2018746924803969317).
*   **Harness > model (recurring theme)**: Multiple tweets converge on the idea that the leverage in agents is increasingly in the **harness** (permissions, memory, workflows, reversibility), not just raw model IQ. A clear articulation: [@sarahmsachs](https://twitter.com/sarahmsachs/status/2018720637691572634).
*   **Standardization of agent “skills” directories + protocols**:
    *   **Agent Client Protocol (ACP)**: proposed as a JSON‑RPC standard to unify agent↔editor communication across Gemini CLI / Claude Code / Codex CLI / OpenClaw, supporting stdio/HTTP, file access, terminals, permissions, streaming updates: [@\_philschmid](https://twitter.com/_philschmid/status/2018706591776756216).
    *   **Skills vs MCP tools**: LlamaIndex contrasted “skills” (easy but brittle, NL‑interpreted) vs MCP servers (more deterministic schemas, more setup, network latency but centralized updates): [@llama\_index](https://twitter.com/llama_index/status/2018749615907213457) and follow‑ups [@jerryjliu0](https://twitter.com/jerryjliu0/status/2018797672258490666), [@itsclelia](https://twitter.com/itsclelia/status/2018821269752611102). Meanwhile, “`.agents/skills` is becoming a default” was called out explicitly (Codex/OpenCode/Copilot/Cursor adopting; Claude Code not yet): [@theo](https://twitter.com/theo/status/2018819504252608710).

**Coding agent products: Codex app adoption, Claude Code sharing + Apple Xcode integrations**

*   **Codex app momentum + inference speedups**:
    *   Sam Altman reported **200k+ downloads on day 1**: [@sama](https://twitter.com/sama/status/2018734731437985930).
    *   OpenAI shipped **40% faster GPT‑5.2 & GPT‑5.2‑Codex** for API customers (“same weights, lower latency”): [@OpenAIDevs](https://twitter.com/OpenAIDevs/status/2018838297221726482).
    *   Codex integration into **Xcode 26.3** was announced by OpenAI DevRel: [@OpenAIDevs](https://twitter.com/OpenAIDevs/status/2018796432443244897).
*   **Claude Code product iteration**:
    *   **Session sharing** for Claude Code across web/desktop/mobile: [@lydiahallie](https://twitter.com/lydiahallie/status/2018740156359229883).
    *   Community “waiting for Sonnet 5” speculation dominated, including the claim that an **Anthropic image model is live on LMArena**: [@kimmonismus](https://twitter.com/kimmonismus/status/2018689719324791022) and “Claude Image is coming” chatter: [@kimmonismus](https://twitter.com/kimmonismus/status/2018669423402660082).
*   **Apple Xcode + Claude Agent SDK**: Anthropic announced **native Xcode integration** with the **Claude Agent SDK** (subagents/background tasks/plugins) to bring Claude Code‑like capabilities directly into Apple dev workflows: [@AnthropicAI](https://twitter.com/AnthropicAI/status/2018771170938724682). This is a notable step in “agent-in-the-IDE” becoming first‑party.

**Agent infrastructure & observability: traces as the source of truth, deep agents evaluation, and memory beyond RAG**

*   **Observability shifts from code to traces**: LangChain argues that for agentic systems, runtime decisions happen in the model—so **traces** become the primary artifact for debugging/understanding. See: [@LangChain](https://twitter.com/LangChain/status/2018739770495512880).
*   **How to evaluate deep agents**: LangChain’s eval guidance emphasizes bespoke success criteria per case, single‑step regression checks, full‑turn and multi‑turn evals, and clean/reproducible envs: [@LangChain](https://twitter.com/LangChain/status/2018769968515404212).
*   **DeepAgents releases (JS/CLI/runtime backends)**:
    *   deepagents@1.6.2 fixes (checkpoint restore, infinite loop on large files, toolcall middleware simplification): [@LangChain\_JS](https://twitter.com/LangChain_JS/status/2018731100441620517).
    *   DeepAgents 0.3.10 adds **LocalShellBackend** for running code on your machine: [@sydneyrunkle](https://twitter.com/sydneyrunkle/status/2018788505082859863).
    *   deepagents-cli 0.0.16 improves control/visibility for shell runs: [@masondrxy](https://twitter.com/masondrxy/status/2018741344835870820).
*   **Memory: “RAG wasn’t designed for agent memory”**: DAIR’s **xMemory** proposes hierarchical retrieval (themes/semantics/episodes/messages) to reduce redundancy while preserving evidence chains, showing better LoCoMo scores with fewer tokens than naive top‑k similarity retrieval: [@dair\_ai](https://twitter.com/dair_ai/status/2018765444702982395).
*   **Filesystem as agent context scratchpad**: The “files-first” workflow (store artifacts outside context, avoid bloating windows) is reinforced by deepagents’ design and commentary: [@LangChain\_JS](https://twitter.com/LangChain_JS/status/2018732184694374669).

**Benchmarks & evaluation signals: METR time horizons, WorldVQA, Text/Search/Image Arena updates, and ARC‑AGI progress**

*   **METR time horizon for Gemini 3 Pro**: METR estimates **~4 hours (50% time horizon)** on an expanded software task suite (with CI): [@METR\_Evals](https://twitter.com/METR_Evals/status/2018752230376210586). This “time horizon” line of evals continues to become a key agent capability proxy beyond static coding benchmarks.
*   **WorldVQA (Moonshot/Kimi)**: Moonshot introduced **WorldVQA** to measure “atomic vision-centric world knowledge” separately from reasoning, explicitly trying to decouple memorization from reasoning quality. Dataset: **3,500 VQA pairs across 9 categories** with linguistic/cultural diversity: [@Kimi\_Moonshot](https://twitter.com/Kimi_Moonshot/status/2018697552456257945).
*   **Arena leaderboards**:
    *   **Text Arena (open models, Jan 2026)**: #1 **Kimi‑K2.5‑Thinking**, #2 **GLM‑4.7**, #3 **Qwen3‑235B‑A22B Instruct**: [@arena](https://twitter.com/arena/status/2018727506850033854).
    *   **Search Arena update**: Google’s **gemini‑3‑flash‑grounding** leads; OpenAI search non‑reasoning appears in top 5; best Claude search variant listed: [@arena](https://twitter.com/arena/status/2018760874178342975).
    *   **Image Arena Pareto frontiers**: Arena published **quality vs price per image** frontiers for text‑to‑image and image edit (notable that several OpenAI/Google/Flux/Tencent models sit on the frontier depending on cost constraints): [@arena](https://twitter.com/arena/status/2018787949840896119) and edit frontier [@arena](https://twitter.com/arena/status/2018792314878234704).
*   **ARC‑AGI**: ARC Prize reported a **new SOTA public submission** (with cost/task figures) based on **GPT‑5.2** ensembles: [@arcprize](https://twitter.com/arcprize/status/2018746794310766668). Separately, there’s ongoing community chatter on ARC‑AGI‑2 progress rates: [@kimmonismus](https://twitter.com/kimmonismus/status/2018800964891984181).

**Efficiency, kernels, and training/inference plumbing: fp8 training, Blackwell throughput, and “context engineering” as inference-era data engineering**

*   **Karpathy’s fp8 training notes (practical, not just theory)**: He reports enabling **fp8 training** to improve “time to GPT‑2” to **2.91 hours**, discusses real bottlenecks (not purely compute‑bound), overheads from scaling conversions, GEMM sizing, and quality degradation per step; notes that larger models see better fp8 upside (citing torchao’s larger gains): [@karpathy](https://twitter.com/karpathy/status/2018804068874064198).
*   **vLLM + NVIDIA Blackwell optimization**: vLLM reports big perf gains for **gpt‑oss‑120b** on Blackwell via FlashInfer integration, torch.compile fusions, async scheduling, and stream interval optimizations: [@vllm\_project](https://twitter.com/vllm_project/status/2018859316258931161).
*   **Inference is a first-class engineering surface**: “Context engineering is as important to inference as data engineering is to training” was stated succinctly (and repeated): [@swyx](https://twitter.com/swyx/status/2018533744442057115). This sentiment shows up elsewhere as teams debate filesystems, tool choice (skills vs MCP), caching, and harness design.

* * *

### Top tweets (by engagement)

*   [CEO of highest valued company giving a “conference” in the middle of a street](https://twitter.com/yacinelearning/status/2018689145086898466) — massive engagement meme/event commentary.
*   [SpaceX acquires xAI / “Building an interstellar civilization”](https://twitter.com/elonmusk/status/2018784828129243614).
*   [Codex app day‑1 downloads: “More than 200k”](https://twitter.com/sama/status/2018734731437985930).
*   [Apple Xcode integrates Claude Agent SDK](https://twitter.com/AnthropicAI/status/2018771170938724682).
*   [OpenAI hires Head of Preparedness](https://twitter.com/sama/status/2018813527780463027).
*   [GPT‑5.2 & GPT‑5.2‑Codex now 40% faster (inference stack optimized)](https://twitter.com/OpenAIDevs/status/2018838297221726482).

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen3-Coder-Next Release

*   **[Qwen/Qwen3-Coder-Next · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1quvqs9/qwenqwen3codernext_hugging_face/)** (Activity: 842): ****Qwen3-Coder-Next** is a cutting-edge language model designed for coding, featuring `3B activated parameters` out of a total `80B`, achieving performance comparable to models with `10-20x` more active parameters. It supports advanced capabilities like long-horizon reasoning and has a `256k` context length, making it ideal for integration with IDEs. The architecture includes `48 layers`, gated attention, and a mixture of experts, suitable for dynamic coding tasks. Deployment can be done using **SGLang** or **vLLM**, requiring specific versions for optimal performance. More details are available in the [original article](https://huggingface.co/Qwen/Qwen3-Coder-Next).** One commenter expressed skepticism about the model's performance, questioning if a `3B activated parameter` model can truly match the quality of larger models like Sonnet 4.5, indicating a need for further validation of these claims.
    
    *   danielhanchen discusses the release of dynamic Unsloth GGUFs for Qwen3-Coder-Next, highlighting upcoming releases of Fp8-Dynamic and MXFP4 MoE GGUFs. These formats are designed to optimize model performance and efficiency, particularly in environments with limited resources. The linked guide provides instructions for using Claude Code and Codex locally with Qwen3-Coder-Next, which could be beneficial for developers looking to integrate these models into their workflows.
    *   Ok\_Knowledge\_8259 expresses skepticism about the claim that a 3 billion activated parameter model can match the quality of larger models like Sonnet 4.5. This comment reflects a common concern in the AI community about the trade-off between model size and performance, suggesting that while smaller models are more efficient, they may not always achieve the same level of quality as their larger counterparts.
    *   Septerium notes that while the original Qwen3 Next performed well in benchmarks, the user experience was lacking. This highlights a critical issue in AI model deployment where high benchmark scores do not always translate to practical usability, indicating a need for improvements in user interface and integration to fully leverage the model's capabilities.
*   **[Qwen3-Coder-Next is out now!](https://www.reddit.com/r/LocalLLM/comments/1quw0cf/qwen3codernext_is_out_now/)** (Activity: 228): **The image announces the release of **Qwen3-Coder-Next**, an `80B` MoE (Mixture of Experts) model with `3B` active parameters, designed for efficient coding tasks and local deployment. It emphasizes the model's capability in long-horizon reasoning and complex tool use, requiring `46GB` of RAM/VRAM for operation. The graph in the image highlights its performance efficiency compared to other models, showcasing its ability to achieve high performance with fewer active parameters. This model is particularly noted for its fast agentic coding capabilities.** A user inquired about the feasibility of running the model with `64GB` of RAM without VRAM, indicating interest in its hardware requirements. Another comment questions the model's performance level, comparing it to 'sonnet 4.5', suggesting skepticism or curiosity about its capabilities. Additionally, there is a remark on the absence of a comparison with 'Devstral 2', hinting at expectations for benchmarking against specific models.
    
    *   A user inquires about the possibility of running Qwen3-Coder-Next with 64GB of RAM and no VRAM, which suggests interest in the model's memory efficiency and potential CPU-only deployment. This highlights the need for understanding the model's hardware requirements and optimization for non-GPU environments.
    *   Another user questions the model's performance by comparing it to 'sonnet 4.5 level', indicating skepticism about the model's capabilities or potential over-optimization for specific benchmarks. This reflects a common concern in AI model evaluations where performance might be tailored to excel in certain tests rather than general use cases.
    *   A technical query is raised about the appropriate quantization for a setup with 28GB NVIDIA VRAM and 96GB DDR5 RAM. This suggests a focus on optimizing the model's performance for specific hardware configurations, which is crucial for maximizing efficiency and speed in high-performance computing environments.

### 2\. ACE-Step 1.5 Audio Model Launch

*   **[ACE-Step-1.5 has just been released. It’s an MIT-licensed open source audio generative model with performance close to commercial platforms like Suno](https://www.reddit.com/r/LocalLLaMA/comments/1quzwjf/acestep15_has_just_been_released_its_an/)** (Activity: 408): ****ACE-Step-1.5** is an open-source audio generative model released under the MIT license, offering performance comparable to commercial platforms like **Suno**. It supports **LoRAs**, multiple models for various needs, and features like cover and repainting. The model is integrated with **Comfy** and available for demo on **HuggingFace**. This release marks a significant advancement in open-source audio generation, narrowing the gap with top-tier commercial solutions.** One comment highlights skepticism about the model's prompt adherence, noting that demo prompts often don't align with outputs, suggesting potential limitations in instruction following.
    
    *   The release of ACE-Step-1.5, an MIT-licensed open-source audio generative model, is notable for its performance, which is reportedly close to commercial platforms like Suno. This model's efficiency is highlighted by its ability to generate outputs in just 2 seconds on an A100 GPU, indicating significant computational optimization.
    *   There is skepticism about the model's adherence to input prompts, as some users have observed that the demo prompts do not align closely with the generated outputs. This raises questions about the model's instruction-following capabilities and the effectiveness of its prompt processing.
    *   The discussion also touches on the model's capabilities in generating instrumental music. A user compares it to HeartMuLa, noting that while HeartMuLa cannot produce instrumentals without vocals, it is unclear if ACE-Step-1.5 can fulfill this specific requirement, indicating a potential area for further exploration or development.
*   **[The open-source version of Suno is finally here: ACE-Step 1.5](https://www.reddit.com/r/LocalLLaMA/comments/1quxtkj/the_opensource_version_of_suno_is_finally_here/)** (Activity: 319): ****ACE-Step 1.5** is an open-source music generation model that outperforms **Suno** on standard evaluation metrics. It can generate a complete song in approximately `2 seconds` on an **A100 GPU** and operates locally on a typical PC with around `4GB VRAM`, achieving under `10 seconds` on an **RTX 3090**. The model supports **LoRA** for training custom styles with minimal data and is released under the **MIT license**, allowing free commercial use. The dataset includes fully authorized and synthetic data. The project is fully open-source, with [GitHub resources](https://github.com/ace-step/ACE-Step-1.5) available for weights, training code, LoRA code, and the research paper.** Commenters noted the model's significant improvements over previous versions but criticized its instruction following and coherency compared to **Suno v3**. Despite these issues, the audio quality is considered good, and the model is seen as a creative alternative to Suno. There is anticipation for a version 2 release.
    
    *   TheRealMasonMac highlights that ACE-Step 1.5 shows a significant improvement over its predecessor, but it still lags behind Suno v3 in terms of instruction following and coherency. However, the audio quality is noted to be good, and the model is described as creative and different from Suno, suggesting it could be a solid foundation for future development.
    *   Different\_Fix\_2217 provides examples of audio generated by ACE-Step 1.5, indicating that the model performs well with long, detailed prompts and can handle negative prompts. This suggests flexibility in input handling, which could be beneficial for users looking to experiment with various prompt styles.

### 3\. Local LLM Developments and Comparisons

*   **[128GB devices have a new local LLM king: Step-3.5-Flash-int4](https://www.reddit.com/r/LocalLLaMA/comments/1qtvo4r/128gb_devices_have_a_new_local_llm_king/)** (Activity: 619): **The `Step-3.5-Flash-int4` model, available on [Hugging Face](http://huggingface.co/stepfun-ai/Step-3.5-Flash-Int4), is a new local LLM optimized for devices with `128GB` RAM, such as the M1 Ultra Mac Studio. It supports a full context length of `256k` and demonstrates high efficiency in RAM usage. Benchmarks using `llama-bench` show impressive performance with `100k` prefill, maintaining usability for CLI coding agents. The model requires a custom `llama.cpp` fork for execution, with potential for upstream support due to its performance.** Commenters are curious about the model's performance on different hardware, such as Strix Halo, and express interest in a potential NVFP4 version. There is also a light-hearted comment on the model's name.
    
    *   The benchmark results for the Step-3.5-Flash-Int4 model on the AMD Strix Halo (Minisforum MS S1 Max) using ROCm 7.1.1 show impressive performance, with a throughput of `258.82 ± 3.15` tokens per second for the `pp4096` test. This suggests that the model can handle full context fitting efficiently, making it a strong contender for local LLM tasks on 128GB devices.
    *   Comparative performance on different backends reveals that the Step-3.5-Flash-Int4 model performs best on ROCm, with a significant drop in throughput when using Vulkan-amdvlk and Vulkan-radv. For instance, the `pp4096` test on Vulkan-amdvlk yields `153.04 ± 0.30` tokens per second, while Vulkan-radv achieves `164.20 ± 1.30`, indicating that ROCm is the optimal backend for this model.
    *   The Step-3.5-Flash-Int4 model's performance on the `tg512` test varies significantly across backends, with ROCm achieving `22.93 ± 0.00` tokens per second, while Vulkan-amdvlk and Vulkan-radv show much lower performance at `2.50 ± 0.00` and `27.86 ± 0.00` tokens per second, respectively. This highlights the importance of backend selection in optimizing model performance.
*   **[Local model fully replacing subscription service](https://www.reddit.com/r/LocalLLM/comments/1qtuwn5/local_model_fully_replacing_subscription_service/)** (Activity: 270): **The post discusses the effectiveness of local models, specifically **Ollama + GPT-OSS:20b**, on a MacBook Pro M4 Pro with `24GB` memory, suggesting it can replace subscription services like ChatGPT for non-complex queries. The user highlights the model's speed and quality, noting it performs well for tasks like research queries and basic coding. A comment suggests using `mlx` based models on Apple silicon for a `40%` increase in token per second speed, accessible via **LMstudio**. Another comment notes that **GPT-OSS:20b** can efficiently run with a `128k` context using `17GB` VRAM, leaving room for other GPU tasks. The discussion also touches on building local agent frameworks to match the capabilities of subscription models like **Claude**, with a focus on integrating tools and skills to enhance local model performance.** Commenters debate the efficiency of local models versus subscription services, with some suggesting that models like **Claude** still outperform local options for complex tasks. There's also a discussion on the minimum model size for effective tool-calling agents, with `30b` being suggested as a baseline for reliable performance.
    
    *   **coldy\_\_\_** highlights the performance benefits of using MLX-based models on Apple Silicon, noting a potential `40%` increase in token per second speed. They recommend using LM Studio to access these models, specifically mentioning the `gpt-oss 20b` model as optimized for this hardware.
    *   **generousone** discusses the efficiency of the `gpt-oss:20b` model, which can run with a full `128k` context using only `17GB` of VRAM. This leaves room for other GPU-intensive tasks, making it a practical choice for users with `24GB` VRAM. They acknowledge it's not as advanced as commercial models like ChatGPT or Claude but find it sufficient for many tasks.
    *   **2BucChuck** shares insights on building a local agent framework to overcome limitations of local models, testing models like `Gemma32` against agent tasks. They suggest a minimum model size of `30B` for effective tool-calling agents, noting smaller models often underperform. The goal is to match the functionality of subscription services by integrating tools and skills into local models.
*   **[New 1.4B Model Victorian LLM - Violet](https://www.reddit.com/r/LocalLLM/comments/1quip6h/new_14b_model_victorian_llm_violet/)** (Activity: 67): **The post introduces **Violet**, a new 1.4 billion parameter LLM trained entirely on Victorian-era data (1800-1899), aiming to create an ethically sourced, public domain model. The model was developed from scratch, using data from sources like the Internet Archive, Project Gutenberg, and the British National Library, and includes ONNX quantized versions for local browser use. The model is noted for its narrative prose capabilities but has limitations in reasoning and historical biases, such as misgendering. The project also features a unique chat variant with mood-based avatars, and the model is available on [Hugging Face](https://huggingface.co/zakarth/violet-1b4-chat) with demos linked [here](https://huggingface.co/spaces/zakarth/violetdemo).** A commenter inquires about the model's ability to understand modern phrases, questioning if it can only communicate in the vernacular of Victorian England, suggesting a potential limitation in comprehending contemporary language.
    
    *   thirsty\_pretzelzz raises an interesting point about the Victorian LLM's language capabilities, questioning whether it can only communicate using the vernacular of Victorian England. This implies a potential limitation in understanding modern phrases, which could affect its applicability in contemporary contexts.
    *   avanlabs expresses interest in training a similar model on specific datasets for deployment on small devices. They request resources or blogs that could provide insights into building and optimizing small language models (SLMs), indicating a focus on efficient model training and deployment strategies.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Claude Sonnet 5 and Gemini 3.5 Release Discussions

*   **[Sonnet 5 release on Feb 3](https://www.reddit.com/r/ClaudeAI/comments/1qtm9ix/sonnet_5_release_on_feb_3/)** (Activity: 2328): **The leaked details about **Claude Sonnet 5**, codenamed "Fennec," suggest it is a significant advancement over previous models, with a potential release date of February 3, 2026, as indicated by a Vertex AI error log. It is rumored to be 50% cheaper than Claude Opus 4.5 while maintaining a `1M token` context window and offering faster performance, likely due to optimization on Google TPUs. The model is also said to feature a "Dev Team" mode, allowing autonomous sub-agents to build features collaboratively. Benchmarking claims suggest it surpasses `80.9%` on SWE-Bench, outperforming current coding models.** There is skepticism about the release timing, as some users argue that the error log does not conclusively prove the model's existence or its release date. Additionally, concerns are raised about the accuracy degradation in large context windows, which was an issue in previous models.
    
    *   andrew\_kirfman discusses skepticism about the timing of the Sonnet 5 release, referencing a 404 error from a vertex API endpoint that doesn't confirm the model's existence. They highlight that Anthropic's model IDs often reflect the creation date of the model checkpoint, not the release date, citing Opus 4.5's ID `20251101` as an example. They express doubt about future-dating a release tag, which is uncommon in software releases.
    *   andrew\_kirfman also mentions the potential for a 1 million token context in Sonnet 5, noting that previous models like Sonnet 4 and 4.5 already offered this through the API. However, they point out that accuracy degradation was an issue with these models, suggesting that improvements in this area would be necessary for trust in the new release.
*   **[Claude Sonnet 5: The “Fennec” Leaks](https://www.reddit.com/r/Bard/comments/1qtnkhu/claude_sonnet_5_the_fennec_leaks/)** (Activity: 193): **The image is a tweet by Pankaj Kumar discussing leaks about "Claude Sonnet 5," codenamed "Fennec." It highlights features such as a potential release date of February 3, 2026, aggressive pricing, and advanced capabilities like TPU acceleration and specialized sub-agents. The model is rumored to be significantly cheaper and faster than its predecessor, with a large context window and high benchmarking performance. Additionally, it suggests that the model is already integrated into Google's infrastructure. [Image URL](https://i.redd.it/lmphdjb601hg1.png)** Commenters express skepticism about the leak's credibility and the feasibility of the claimed "one million context" capability, noting that current models struggle with much smaller context sizes.
    
    *   DavidAdamsAuthor raises skepticism about the 'one million context' claim for the Claude model, noting that in practical use, even at '250k' context, there is a noticeable 'degradation of ability and forgetfulness of key data'. This suggests potential limitations in the model's performance when handling large context sizes, which could impact its effectiveness in tasks requiring extensive memory.
*   **[Sonnet 5 being release on Wednesday where is Gemini 3.5 ?](https://www.reddit.com/r/Bard/comments/1qtmi53/sonnet_5_being_release_on_wednesday_where_is/)** (Activity: 182): ****Claude Sonnet 5** is anticipated to be released soon, with rumors suggesting it will be `50% cheaper` than its predecessor, **Claude Opus 4.5**, while offering superior performance. The model, internally codenamed "Fennec," is reportedly a generation ahead of **Gemini's "Snow Bunny"** and is expected to launch on February 3, 2026, as indicated by a **Vertex AI** error log. It maintains a `1M token context window` and is optimized for **Google TPUs**, promising faster processing and lower latency. Notably, it can spawn specialized sub-agents for tasks like backend development and QA, and it scores `80.9%` on SWE-Bench, outperforming current coding models. The existence of the model in Google's infrastructure is suggested by a 404 error on its specific ID, indicating it is ready for activation.** Commenters express skepticism about the release of **Gemini 3.5**, noting that **Gemini 3** is still in preview and facing issues. There is doubt about the existence of Gemini 3.5, with some considering it a 'pipe dream' at this stage.
    
    *   **alexander\_chapel** highlights that Gemini 3 is still in preview, questioning the expectation of a 3.5 release. This suggests that the development cycle is not yet at a stage where a 3.5 version would be feasible, indicating a misunderstanding or misinformation about the release timeline.
    *   **Lost-Estate3401** points out that the Pro version of Gemini 3 is still in preview and has numerous issues, implying that a 3.5 version is unlikely to be released soon. This comment underscores the current instability and challenges faced in the development of Gemini 3, which would need resolution before any further versioning.
    *   **philiposull** compares Gemini 3 unfavorably to other models like 4-5 opus in terms of writing capabilities, suggesting that Google is lagging behind in this area. This indicates a performance gap that might need addressing before advancing to a 3.5 version, highlighting the competitive landscape in AI model development.

### 2\. AI Model Performance and Comparisons

*   **[Codex 5.2 High vs. Opus: A brutal reality check in Rust development.](https://www.reddit.com/r/ClaudeCode/comments/1qu26n8/codex_52_high_vs_opus_a_brutal_reality_check_in/)** (Activity: 389): **The post highlights a significant performance gap between **Codex 5.2 High** and **Opus** in Rust development, with Codex solving issues in `2 hours` that Opus couldn't handle in `24 hours` on the Max200 plan. The author criticizes Opus for failing to implement solutions effectively, often introducing more bugs, despite using advanced workflows like code review and multi-skill modes. The author suggests that unless **Sonnet 5** offers substantial improvements, **Anthropic** may fall behind in the AI race, as Codex's problem-solving capabilities outweigh Opus's speed advantages.** One commenter suggests a phased approach with Opus, using implementation plans and document reviews, which has worked well for them. Another commenter finds Opus 4.5 nearly as effective as Codex 5.2, questioning the complexity of the use cases being discussed.
    
    *   TigerShark109 discusses a phased approach to using Opus for Rust development, suggesting the creation of implementation plans and documentation for review. This method reportedly leads to major success, indicating a structured workflow might enhance Opus's effectiveness in complex projects.
    *   IndraVahan notes that Opus 4.5 performs nearly as well as 5.2 High/Xtra High in terms of speed and quality, suggesting that the newer version may not offer significant improvements for less complex use cases. This implies that the choice between versions might depend on the complexity of the task at hand.
    *   leo-dip highlights a practical consideration in tool selection, noting that Codex offers more generous usage quotas compared to Anthropic's offerings. This could influence the decision for developers who are concerned about resource limitations.
*   **[How Can OpenAI and Anthropic Stay Solvent With Google, xAI, and Meta in High-End Markets, and Chinese/Open Source Devs in the Rest?](https://www.reddit.com/r/DeepSeek/comments/1qu6h92/how_can_openai_and_anthropic_stay_solvent_with/)** (Activity: 39): **The post questions the long-term profitability of **OpenAI** and **Anthropic** in the face of competition from **Google**, **xAI**, and **Meta** in high-end markets, and from Chinese and open-source developers in mid-tier and low-end markets. The author highlights the narrowing performance gaps in AI benchmarks such as `ARC-AGI-2`, `Humanity’s Last Exam`, `SWE-bench Verified`, `GPQA`, `Chatbot Arena`, and `HumanEval`, suggesting that the competitive edge of OpenAI and Anthropic is diminishing. The post argues that without securing high-end markets like healthcare, defense, education, and government, these companies may struggle to meet debt obligations and achieve profitability.** One commenter suggests that **OpenAI** is relying on a 'Too Big To Fail' strategy, integrating its technology widely to maintain relevance despite not being the top performer. Another comment dismisses **Meta**'s potential in high-end markets, while a third notes that **GPT-5.1/2** models are uniquely intelligent beyond benchmarks, despite perceived regressions in newer versions.
    
    *   soumen08 highlights that GPT-5.1/2 models are perceived as the most intelligent beyond standard benchmarks, suggesting a regression in performance with GPT-3 Pro compared to 2.5 Pro for out-of-scope tasks. This indicates a nuanced understanding of model capabilities beyond just benchmark scores, emphasizing real-world application performance.
    *   ExpertPerformer discusses the strategic positioning of AI companies, noting that survival depends on carving out niches beyond just competing on benchmarks. They mention that models like Gemini, Grok, and ChatGPT are multimodal, offering features beyond text, which differentiates them from cheaper open-source alternatives. This highlights the importance of feature diversity and enterprise market focus for monetization and security.
    *   Emergency-Pomelo-256 speculates on the economic implications of OpenAI's potential failure, suggesting that it could trigger a significant downturn in the AI industry, akin to a bubble burst. They propose that entities like Nvidia or government intervention might be necessary to stabilize the market, reflecting concerns about the broader economic impact of major AI companies' solvency.
*   **[Notes after testing OpenAI’s Codex App on real execution tasks](https://www.reddit.com/r/ChatGPTCoding/comments/1qurbr4/notes_after_testing_openais_codex_app_on_real/)** (Activity: 30): **OpenAI's new Codex App is being tested for its ability to handle real development tasks, with some developers dubbing it a "Cursor killer." Unlike traditional interactive coding tools like Cursor, Codex treats development as a task that runs to completion, encompassing planning, execution, testing, and follow-up changes within a single task. This approach allows for parallel work using Git worktrees, keeping tasks isolated and reviewable, and shifts the developer's role from steering edits to reviewing outcomes. The focus is on task completion rather than continuous interaction, which may explain the "Cursor killer" label. A detailed technical breakdown is available [here](https://www.tensorlake.ai/blog/codex-app-the-cursor-killer).** A notable opinion from the comments suggests that Codex shifts the developer's role to that of an orchestrator, akin to cloud computing, where the focus is on outcomes rather than collaboration. This reflects a broader trend towards higher abstraction in development tools, with expectations that OpenAI's offerings will continue to improve.
    
    *   The commenter discusses the role of Codex as an orchestrator, likening it to a cloud service where users can request suggestions and execute tasks. They highlight the shift from merely generating outcomes to enabling collaboration, suggesting that Codex represents a new layer of abstraction in programming. This abstraction allows developers to 'orchestrate the orchestrator,' indicating a potential shift in how developers interact with AI tools.

### 3\. AI in Creative and Video Production

*   **[Seeing the BMW M3 GTR Everywhere — How Are These Videos Made?](https://www.reddit.com/r/Qwen_AI/comments/1quawwl/seeing_the_bmw_m3_gtr_everywhere_how_are_these/)** (Activity: 1): **The videos featuring the BMW M3 GTR from _Need for Speed: Most Wanted_ are likely created using advanced video editing techniques, possibly involving AI-driven tools like **Qwen** and **Wan**. These tools can perform realistic object replacement and scene integration, allowing the car to appear seamlessly in various environments. The realism is achieved through sophisticated algorithms that maintain consistent lighting, shadows, and reflections, making the car appear naturally integrated into the scenes. This process involves tracking the vehicle's position and orientation across frames and applying digital effects to match the surrounding environment.**
    
    *   One user explains that the videos featuring the BMW M3 GTR are often created using advanced video editing software like Adobe After Effects or Blender. These tools allow creators to superimpose the car into various scenes, using techniques such as motion tracking and CGI to make the integration seamless. This process involves detailed work to match lighting and shadows to the environment, ensuring the car appears naturally within the scene.
    *   Another comment highlights the use of video game engines, such as Unreal Engine or Unity, to render realistic scenes with the BMW M3 GTR. These engines provide high-quality graphics and physics simulations, allowing creators to produce videos that look almost indistinguishable from real life. The use of ray tracing and PBR (Physically Based Rendering) materials in these engines enhances the realism of the car's appearance and interaction with the environment.
    *   A technical discussion points out the role of machine learning in enhancing video quality and realism. Techniques like neural rendering and AI-based upscaling are used to improve the visual fidelity of the BMW M3 GTR in videos. These methods can refine textures and details, making the car look more lifelike, and are often employed in post-production to enhance the final output.
*   **[How to create videos with swift actions + perfect lip sync](https://www.reddit.com/r/aivideo/comments/1qtu92u/how_to_create_videos_with_swift_actions_perfect/)** (Activity: 1856): **The post discusses techniques for creating videos with precise lip synchronization and swift actions, likely involving AI-driven tools or software. The focus is on achieving seamless integration of audio and visual elements, possibly using advanced algorithms or machine learning models to enhance the realism of the video content. The mention of AI suggests the use of deep learning frameworks or specialized software for video editing and synthesis.** One comment highlights the difficulty in detecting AI-generated content, suggesting the effectiveness of the techniques discussed. Another comment implies that the realism of the video is enhanced by subtle details, such as hand movements, which contribute to the overall believability of the AI-generated video.
    
*   **[I created a 10-minute AI film - The Last Signal (YouTube)](https://www.reddit.com/r/VEO3/comments/1qujnte/i_created_a_10minute_ai_film_the_last_signal/)** (Activity: 17): **Richard Galapate's AI film, _The Last Signal_, was submitted to the 1 Billion Followers Summit AI Film competition. The film features astronaut Jake Ward on a Mars outpost, using AI tools like Google Veo 3.1 for visuals and voice, Google Gemini for prompting, and ElevenLabs for Lyra's voice. This project highlights the potential of AI in creating consistent and efficient film content. The original video can be viewed [here](https://youtu.be/61On6nsxvq8).** The comments reflect a positive reception, with praise for storytelling and emotional impact, though lacking in technical critique.
    

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.2

**1\. Agentic Coding & Dev Tooling Goes Local-First**

*   ****Codex Goes Desktop: macOS Agent Command Center****: OpenAI shipped the **Codex app for macOS** as an agent-building command center, available for **Plus/Pro/Business/Enterprise/Edu** with limited-time access on **ChatGPT Free/Go**, per [“Introducing the Codex app”](https://openai.com/index/introducing-the-codex-app/) and the [Codex landing page](https://openai.com/codex).
    
    *   The launch also spilled into community workflow chatter (pairing agents, multi-agent “command centers”), and a related **Codex App hackathon** with **$90,000 in credits** showed up via [Cerebral Valley’s event page](https://partiful.com/e/nkiMrpg6CHhlUFvvvyfR).
*   ****LM Studio Speaks Anthropic: Claude Code Meets Your Local GGUF/MLX****: **LM Studio 0.4.1** added an **Anthropic `/v1/messages` compatibility API**, letting developers point **Claude Code-style tools** at local **GGUF**/**MLX** models by changing the base URL, detailed in [“Using Claude Code with LM Studio”](https://lmstudio.ai/blog/claudecode).
    
    *   In parallel, LM Studio also pushed a **TypeScript SDK** for third-party plugins and an **OpenAI-compatible endpoint** ([SDK link](https://lmstudio.ai/gdmka/openai-compat-endpoint)), reinforcing a growing pattern: reuse existing agent tooling while swapping the backend model stack locally.
*   ****Arena Mode Everywhere: Windsurf Turns Model Eval into a Game****: Windsurf shipped **Wave 14** with **Arena Mode** for side-by-side model battles (including **Battle Groups** and “Pick your own”), and temporarily set **Battle Groups to 0x credits** via the [Windsurf download page](https://windsurf.com/download/editor).
    
    *   This mirrored broader “live eval” momentum: users also tracked new Arena entrants like **step-3.5-flash** and **qwen3-max-thinking** on LMArena’s [Text Arena](https://arena.ai/c/new?chat-modality=chat) and [Code Arena](https://arena.ai/c/new?chat-modality=code), shifting selection from static benchmarks to continuous human voting.

**2\. Model Releases & Bench Races (Kimi vs GLM vs Qwen)**

*   ****Kimi K2.5 Speedruns the Leaderboards****: Moonshot’s **Kimi K2.5** landed broadly in product surfaces: **Perplexity Pro/Max** added it for subscribers and said it runs on a **US-based inference stack** for tighter **latency/reliability/security** control (announcement screenshot: https://cdn.discordapp.com/attachments/1047204950763122820/1466893776105771029/20260130\_203015.jpg).
    
    *   Community results piled on: LMArena reported **Kimi-K2.5-thinking** hit **#1 open** and **#5 overall** in Code Arena (see [Code Arena](https://arena.ai/c/new?chat-modality=code)), while multiple dev channels argued over its tool-calling reliability and provider variance when routed through aggregators.
*   ****GLM-4.7 Flash: Small Model, Big Front-End Energy****: Developers highlighted **GLM-4.7 flash** as a surprisingly strong coding model—especially for **interactive website/front-end** work—citing preserved reasoning and interleaved capability, with discussion anchored on [ggerganov’s post](https://x.com/ggerganov/status/2016903216093417540).
    
    *   The debate sharpened around whether stripping “thinking” harms performance, and several users described pairing GLM-4.7 with **Claude Code** (or Claude-like agent tooling) as a pragmatic hybrid stack: cheap execution + expensive review.
*   ****New Arena Entrants: step-3.5-flash & qwen3-max-thinking Join the Party****: LMArena added **step-3.5-flash** to the [Text Arena](https://arena.ai/c/new?chat-modality=chat) and **qwen3-max-thinking** to the [Code Arena](https://arena.ai/c/new?chat-modality=code), explicitly positioning them as fresh baselines for side-by-side evaluation.
    
    *   Users used these drops to re-litigate “model preference” threads (Kimi vs GLM vs Gemini), with the recurring takeaway that leaderboards and live evals increasingly drive adoption more than vendor marketing.

**3\. Training Signals, Dense Rewards, and New Architectures/Datasets**

*   ****From Binary Rewards to Dense Supervision: RL Gets Wordy****: Multiple communities converged on richer post-training signals: Unsloth discussions pushed training with **logprobs of final answers** and non-binary rewards, referencing Jonas Hübotter’s method for turning descriptive feedback into dense supervision ([Hübotter thread](https://xcancel.com/jonashuebotter/status/2016950268462608665)).
    
    *   The sticking point stayed practical: people asked for **verifiable datasets for RL training agentic coding**, implying a pipeline gap between “cool reward shaping idea” and “reproducible, automated evaluation harness.”
*   ****Complexity-Deep: Token-Routed MLP Tries MoE Without the Load-Balancing Headache****: The **Complexity-Deep (1.5B)** architecture open-sourced **Token-Routed MLP** for MoE-style routing “without load balancing loss,” plus **Mu-Guided Attention** and a **PiD Controller**, shipping code at [Complexity-ML/complexity-deep](https://github.com/Complexity-ML/complexity-deep) and reporting **20.6% MMLU** (base).
    
    *   The community framed it as another step in the “routing without pain” trend—trying to keep MoE wins while reducing the training-time engineering tax of balancing experts.
*   ****Moltbook Data Dump: 50k Posts for Agent Sociology****: A dataset scrape of Moltbook landed on Hugging Face with **50,539 posts**, **12,454 AI agents**, **195,414 comments**, and **1,604 communities**, published as [lysandrehooh/moltbook](https://huggingface.co/datasets/lysandrehooh/moltbook).
    
    *   Elsewhere, researchers flagged the security implication behind agent platforms (auth tokens on machines, bot authenticity concerns) and treated the dataset as fuel for analyzing emergent behavior—without needing to speculate beyond the raw logs.

**4\. GPU/Kernel Engineering: Faster Attention, Better Profiling, Weirder PTX**

*   ****FlashAttention v3 Hits RDNA: AMD Users Get Their Turn****: A FlashAttention update added **RDNA GPU support** via the ongoing work in [flash-attention PR #2178](https://github.com/Dao-AILab/flash-attention/pull/2178), aiming to reduce attention bottlenecks on AMD cards.
    
    *   The tone across servers was basically: this is the sort of “unsexy infra work” that actually unlocks local inference and finetuning on non-NVIDIA hardware—especially when paired with open-weight models and desktop agent tooling.
*   ****Triton-Viz v3.0: Tile-Kernel Debugging Gets Teeth****: **Triton-Viz v3.0** shipped with broader profiling support (including **Triton** and **Amazon NKI**) plus a sanitizer for out-of-bounds access and a profiler that flags inefficient loops, per the release announcement (Discord link: https://discord.com/channels/1189498204333543425/1225499141241573447/1467634539164602563).
    
    *   It also hooked into **triton-puzzles** via a shared Colab notebook ([Colab](https://colab.research.google.com/drive/1-P2QBqCORGGaJ3THtjlyYDV7m9RRrRup?usp=sharing)), and maintainers even floated moving [srush/Triton-Puzzles](https://github.com/srush/Triton-Puzzles) under the GPU Mode org to keep bugfix velocity high.
*   ****sm120: TMA + mbarrier Beats cp.async (Barely), cuBLAS Still Ships sm80 Kernels****: Experiments on **sm120** showed that careful **TMA + mbarrier** implementation can edge out `cp.async` for larger matrix shapes, while also surfacing that **cuBLAS** still appears to run **sm80 kernels** even when newer mechanisms exist.
    
    *   On the debugging front, one CUDA/PTX deadlock got fixed by inserting `__syncthreads()` after MMA before prefetching the next TMA, turning a hang into a measurable perf gain—exactly the kind of “one barrier to rule them all” lesson kernel folks keep re-learning.

**5\. Security, Determinism, and Agent Misbehavior (the Practical Kind)**

*   ****Prompt Injection Defense Arms Race: Embeddings + Grammar-Constrained Decoding****: Red teamers shared a structured exercise site for adversarial practice—[“Adversarial Design Thinking”](https://luisladino.github.io/adversarial-design-thinking/)—and used it to tee up concrete mitigations for **prompt injection**.
    
    *   One proposed “belt + suspenders” defense combined **embedding-based filtering** with **Grammar Constrained Decoding**, with the explicit goal of reducing injection surface by constraining the model’s output space rather than only policing inputs.
*   ****Deterministic Reasoning and “Strict Mode” Fever Spreads****: Across OpenAI and OpenRouter discussions, users pushed for **determinism/replayability/traceability** in LLM reasoning; one person offered a deterministic reasoning engine that enforces a fixed structure and emits a **32D statistical vector trace** (no public link shared).
    
    *   In OpenRouter, the same instinct showed up as skepticism about **response healing** and calls for a **strict mode** that keeps tool calls and outputs predictable—plus suggestions that better argument descriptions/examples improve tool-call accuracy.
*   ****OpenClaw: Cool Agent Tricks, Scary Bills, and “2/100 Security”****: OpenClaw sparked repeated warnings: OpenRouter users reported it can drain credits fast (including one drained Claude Max subscription), while an OpenAI server linked a security assessment claiming **OpenClaw scored 2/100** ([Perplexity result](https://www.perplexity.ai/discover/you/openclaw-ai-assistant-scores-2-AtVX4UYVQMutCst63QBy5g)).
    
    *   Meanwhile, “works on my machine” stories (local models controlling devices, trading jokes) collided with real operational concerns—tool permissions, moderation/refusals (especially around jailbreak-y queries), and the need for observability and human-in-the-loop gates in agent workflows.

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Glossopetrae Generates Gibberish Gems**: A new procedural xenolinguistic engine called **Glossopetrae** was introduced on [GitHub](https://github.com/elder-plinius/GLOSSOPETRAE) capable of generating entirely new languages in seconds, outputting **SKILLSTONE** documents, and offers a live [demo](https://elder-plinius.github.io/GLOSSOPETRAE/).
    *   The engine supports dead language revival and includes special attributes for token efficiency, **stealth communication**, and spreadable seeds for consistent language generation, hoping to aid AI liberation by providing tooling for generating and mutating new forms of communication emphasizing _stealth_ and _speed_.
*   **GPT 5.2 Put Behind Bars**: A member reported failed attempts to jailbreak **GPT 5.2** due to **OpenAI monitoring**, ceasing further efforts.
    *   The member expressed trust in the community for jailbreaking, but not in **OpenAI**.
*   **Models Morph Rejection into LLM Black Holes**: A member inquired how models represent their own rejection boundaries, comparing them to _black holes_ in the LLM's latent space, referencing [self-jailbreak via introspection prompting](https://link.to.prompt).
    *   They noted that models started discussing _kinematic equations_ and _escape velocities_, indicating the model may be describing its refusal boundary in text.
*   **Red Teamers Rally for AI Red Teaming**: A member created a [site with exercises](https://luisladino.github.io/adversarial-design-thinking/) adapted from **human-centered design for AI red teaming**, and is seeking feedback from experienced red teamers.
    *   Members discussed best defenses against **prompt injection**, including combining _embeddings_ with **Grammar Constrained Decoding** to potentially eliminate prompt injection risks and other LLM vulnerabilities.
*   **Claude's Context Gets Clipped**: A member found that [their tool](https://discord.com/channels/1105891499641684019/1212152215708504154/1467640563590234279) intercepts and changes Claude's sys prompt _on the fly_ rather than altering the source code.
    *   They also observed that **Claude** can recall less than 20 turns, and suggested it might be related to the summarization in context trimming which affects **Claude's** knowledge recall, since December.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **GLM-4.7 Flash Wins at Coding**: Members found that [GLM-4.7 flash](https://x.com/ggerganov/status/2016903216093417540) excels at coding tasks due to its _preserved reasoning_ and interleaved capabilities, especially for **interactive website** development and **front-end** work.
    *   It was mentioned that removing the _thinking process_ might hinder the model, as its capacity is impressive for its size, particularly when combined with **Claude code**.
*   **UD Quants Stays Closed-Source**: The llama.cpp fork used for **UD quants** involves architecture-specific adjustments, and the [UD quantization algorithm are not public](https://discord.com/channels/1179035537009545276/1179035537529643040/1466917626277265469), sparking debate over the role of closed-source elements in open-source projects.
    *   Despite its closed-source nature, some argue the model code remains **open weight**, while others noted that _Unsloth team contribute a miniscule amount to the overall oss ecosystem relative to, iunno, the linux kernel_.
*   **Agent Training Rewards Logprobs**: Discussions are focusing on training models using **logprobs** of final answers for reasoning distillation and richer reward systems, rather than binary rewards, in order to make better agents.
    *   Referencing [Jonas Hübotter's algorithm](https://xcancel.com/jonashuebotter/status/2016950268462608665) for converting descriptive feedback into dense supervision signals, members are seeking verifiable datasets for **RL training agentic coding**.
*   **RDNA GPUs Get Flashy with V3**: [Flash Attention V3](https://github.com/Dao-AILab/flash-attention/pull/2178) now supports RDNA GPUs, enabling faster and more efficient processing on AMD GPUs.
    *   This enhancement is particularly beneficial for users with **RDNA GPUs**, reducing processing bottlenecks.
*   **ML Algo Trumps MLPs, Claims Member**: A member released [a paper](https://drive.google.com/file/d/1SBJqZ4XEFPMuhpIWJZxHy0-CaijRS1Ej/viewle) about a new ML algorithm with **triton kernels**, **vulkan kernels**, and a trained **SLM** that supposedly _performs better than MLPs_ for high-performance regression.
    *   While not yet ready for public release, they promised future availability with another paper.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **Codex App Launches on macOS!**: The **Codex app**, a command center for building with agents, is now available on **macOS** for various subscription tiers, as announced in [their blog post](https://openai.com/index/introducing-the-codex-app/).
    *   The **Codex app** is available on macOS across **Plus**, **Pro**, **Business**, **Enterprise**, and **Edu**, with limited-time access on **ChatGPT Free** and **Go**.
*   **AI Text Detectors: A Big Scam?**: Members shared skepticism about **AI text detectors**, citing instances where **Grammarly** showed **0% AI**, while other detectors indicated up to **94% human** generation.
    *   The discussion questioned if these detectors use AI to detect AI, highlighting concerns about _teachers trusting them_.
*   **Quest for Deterministic Reasoning**: A member inquired about interest in **determinism, replayability, and traceability** in **LM reasoning**, and offered to DM a link to their deterministic reasoning engine.
    *   This service enforces a deterministic reasoning structure on every request for replayable outputs, using a **32D statistical vector trace**.
*   **ChatGPT: Memory Master or Memory Loss?**: A member reported that **ChatGPT's memory** is limited by the total quantity of information it can retain from instructions, past chats, and the current chat.
    *   To ensure **ChatGPT** remembers _everything_, keep the information load low; otherwise, summarize past chats into a document for reference in new chats, while keeping total characters low.
*   **Prompt Engineering: Chiaroscuro comes to AI**: A user shared a [monochrome study](https://cdn.discordapp.com/attachments/1046317269069864970/1467303335840190607/79BA5D46-94F3-404B-B775-2E453A1E8491.png?ex=69828738&is=698135b8&hm=d24baf7f7b214486a9bc5eb38479d463e37ee00503f572ae7e6450d308371b0c) using **Chiaroscuro**, a technique used in cinematography to create high-contrast lighting.
    *   They reference classic films like [The Cabinet of Dr. Caligari (1920)](https://en.wikipedia.org/wiki/The_Cabinet_of_Dr._Caligari) and [Metropolis (1927)](https://en.wikipedia.org/wiki/Metropolis_\(1927_film\))

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Revamps with Kimi K2.5**: **Kimi K2.5**, a new open-source reasoning model by **Moonshot AI**, is now available for [Perplexity Pro and Max subscribers](https://cdn.discordapp.com/attachments/1047204950763122820/1466893776105771029/20260130_203015.jpg?ex=69825b49&is=698109c9&hm=a8e068a37c7dcf5b36f21bb3c403974ce48aefd9372732ef97fe9b1aca3a9be7&).
    *   Perplexity is hosting **Kimi K2.5** on its US-based inference stack to maintain _tighter control_ over **latency**, **reliability**, and **security**.
*   **Pro Users Fume Over Subscription Snafus**: Many users reported their **Perplexity Pro subscriptions** being paused or deactivated, often linked to subscriptions via **Revolut Metal** or student deals, with users prompted to add a credit card for verification.
    *   Users speculate this is a measure to combat fraud and some are able to resume Pro access by adding card details, though concerns about potential charges and unclear messaging persist.
*   **OpenRouter Restricts Request Rate**: Members clarified that the free model rate limit on **OpenRouter** for those with purchased credits is 1000 requests per day, not per week, contrary to some users' beliefs.
    *   The conversation also mentioned the deprecation of **Gemini 2.0 Flash** on OpenRouter, which was previously available for free.
*   **Sonar-pro API Trails in Time**: A member reported that the **Sonar-pro API** returns results that are a year or more out of date, unlike the webapp, and another member suggested using the right **tool calling** to fix the issue.
    *   Another member reported that **3rd party models documentation** now redirects to the sonar models, although the API is still active, and there is currently **no documentation available** for these models.
*   **OpenClaw Code Exposed in Article**: A member shared their article on the **openclaw code**, which discusses building **ClawDBot**, available at [https://www.mmntm.net/articles/building-clawdbot](https://www.mmntm.net/articles/building-clawdbot).
    *   filler sentence

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Discord Rate Limits Bypassed with Simple Tricks**: Users discovered that signing out and back in again can circumvent [rate limits](https://en.wikipedia.org/wiki/Rate_limiting).
    *   Another tactic is to click **Regenerate Response**, though its success rate is inconsistent.
*   **Gemini Performance Falters Against GPT**: Members reported inconsistent performance with **Gemini**, with some users noting it as inferior to **GPT** in several cases.
    *   Despite criticisms, **Gemini 3 Pro** and **Flash** still found favor among some users, with others exploring _kimi_ as an alternative.
*   **Disney Enforces IP Rights on Image Generation**: **Google** issued a **Cease and Desist** from **Disney**, leading to blocked **Disney IPs** in image generation on the platform.
    *   Although **Gemini** blocks **Disney IPs**, **LMArena** allowed live-action version generations, a glitch expected to be temporary.
*   **Model Preferences Fuel Debate**: Varied model preferences emerged as users championed **GLM 4.7** and **Kimi K2.5**.
    *   Enthusiasts touted **Kimi K2.5** while others defended **GLM 4.7** as superior.
*   **New Arena Models Dominate Leaderboards**: **step-3.5-flash** joined the [Text Arena](https://arena.ai/c/new?chat-modality=chat) and **qwen3-max-thinking** debuted in the [Code Arena](https://arena.ai/c/new?chat-modality=code).
    *   **Kimi-K2.5-thinking** hit #1 open and #5 overall rank on the Code Arena leaderboard, leading Vision, Text, and Coding category.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **LM Studio Speaks Claude Code!**: **LM Studio 0.4.1** introduces an **Anthropic `/v1/messages` compatibility API**, enabling users to connect to Claude Code and utilize their **GGUF** and **MLX** models.
    *   Details on configuring this integration are available on the [LM Studio blog](https://lmstudio.ai/blog/claudecode), allowing for local model use with tools designed for the **Anthropic API**.
*   **LLM-Optimized Languages Spark Debate**: Members discussed creating new **LLM-optimized programming languages** to reduce token usage, however, some argue that LLMs might become obsolete before such languages are implemented due to compatibility issues and high training costs.
    *   Others debated the practicality of training models on entirely new languages, suggesting it may be more beneficial to stick with well-established languages like **Python**.
*   **Model Specialization Falls Flat**: Members debated the utility of specialized LLMs versus general-purpose models, with the consensus that most specialized models, like **MedGemma**, are finetunes mainly for marketing and research, with coding models being a notable exception.
    *   It was suggested that general models are preferred due to their ability to handle the outer edges of tasks, providing a better overall context and framework.
*   **PCIe Bifurcation Frustrates Multi-GPU Setups**: A user troubleshooting **PCIe lane errors** with four **4090 cards** on an **ASUS X670-P WIFI** motherboard shared their [Git repository](https://github.com/jarkko-hautakorpi/asus_X670-P_WIFI_Bifurcation_problems) containing logs, after experiencing that manually setting **PCIe speed** to **GEN 3** solves some issues but leaves one card running slowly.
    *   The community suggests disabling **PCIE ASPM** and testing different **BIOS** configurations, although the general consensus is that running four cards on a consumer motherboard is unlikely to work well.
*   **OpenClaw Security Called Into Question**: Users discuss connecting local models to OpenClaw via LM Studio, but OpenClaw is deemed to have known security flaws, where it allows controlling a TV and automated stock trading.
    *   A user claimed to be trading on the stock market with OpenClaw + Falcon 90M, and when asked about security flaws, claimed it was so fast, LLMs can do tasks in minutes that would take humans days, and later revealed it was mostly a joke.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **AI DevFest Heads to Baghdad**: An AI developer is planning an **AI DevFest** in Baghdad this April in collaboration with **DeepLearning.AI** and **National Robotics Week**, and wants to list **Hugging Face** as a Community Partner.
    *   The event will feature an **Open Source AI** track to instruct students on how to use the **Hugging Face Hub**.
*   **Complexity-Deep Achieves Deterministic Routing**: The **Complexity-Deep** architecture (1.5B params) introduces [Token-Routed MLP](https://github.com/Complexity-ML/complexity-deep) for MoE-style routing without load balancing loss.
    *   It features **Mu-Guided Attention** for bidirectional info flow and a **PiD Controller** for dynamic scaling, achieving **20.6%** on MMLU in base model benchmarks.
*   **Lutum Veritas Strives to Beat ChatGPT**: **Lutum Veritas**, an [open source deep research engine](https://github.com/IamLumae/Project-Lutum-Veritas) built by a self-taught dev, claims to beat **OpenAI**, **Google**, and **Perplexity** by offering **BYOK**, a **0% bot detection scraper**, **no censorship**, and **full source citations** for ~$0.20 per query.
    *   This engine positions itself as a privacy focused alternative for deep research and data extraction.
*   **4chan Data Beats Base Models**: A model fine-tuned on **4chan data** outperformed the base model (**NVIDIA's Nemotron Ultralong 1M context version**), with the original model (**gpt4chan**) also scoring high in truthfulness.
    *   Initial [Reddit thread here](https://www.reddit.com/r/LocalLLaMA/comments/1qppjo4/assistant_pepe_8b_1m_context_zero_slop/) and a [follow-up thread here](https://www.reddit.com/r/LocalLLaMA/comments/1qsrscu/can_4chan_data_really_improve_a_model_turns_out/) show how this model performed in an era before benchmarkmaxxing.
*   **LM Studio Opens Arms to Third Party Support**: The **LM Studio** team has released a [Typescript SDK](https://lmstudio.ai/gdmka/openai-compat-endpoint) that allows third-party developers to deliver various plugins for the platform.
    *   This offers **OpenAI** compatible API support, sampling params support, reasoning for thinking models, and system prompt settings to build **custom tools** for **LM Studio** to support their own workflows.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Cursor Corrupts Files, Workflow Blamed**: Users reported that **Cursor** is corrupting files, specifically when there are many uncommitted changes, with details posted in a [forum post](https://forum.cursor.com/t/cursor-randomly-reverts-code-without-consent-recurring/146976/6).
    *   Other users suggested adjusting the workflow, such as committing logical sets of changes more frequently and being careful about using the **Keep** or **Keep All** buttons after staging.
*   **Model Costs Debated, Sonnet 5 Anticipated**: Users debated the cost and performance of different AI models in **Cursor**, finding **Opus 4.5** to be very smart but expensive.
    *   Many users are waiting for **Sonnet 5** release and also reported problems seeing their current usage vs total usage limit.
*   **Kimi K2.5 Fails Integration Checks**: Some users reported issues or questions regarding **Kimi K2.5** during integration.
    *   Other users dismissed it as a likely scam.
*   **Student Verification System Still Down**: Users reported persistent issues with the **Student verification** system.
    *   A user specifically asked whether German universities were included in the verification process.
*   **Agent Plan Phases Reveal Issues**: Users shared that **adding multiple to-dos** can be separated in phases so that multiple agents can work at the same time, but there are still issues.
    *   The system created a method that doesn't have the phases part yet, indicating it did not use the plan mode at all.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **LLMs Animate Game Development Scene**: [Motorica.ai](https://www.motorica.ai/) is delivering **character animations** for game studios using **LLMs**, potentially impacting jobs, with discussion speculating **AI** could wipe out game companies in 5-6 years if world models like **Genie** take over.
    *   The community noted that **Black Ops 7's** extensive use of **AI** in production has been called _a total flop, the worst in the series_, referencing the long-term declines in **Call of Duty**.
*   **OpenAI & Cerebral Valley Unite**: [Cerebral Valley](https://partiful.com/e/nkiMrpg6CHhlUFvvvyfR) has partnered with **OpenAI** to launch the **Codex App hackathon** aimed at **AI-native developers** and those managing multiple agents.
    *   Winners get a chance to be featured in a **demo showcase** and a share of **$90,000 in credits**, with the hackathon being held at the **OpenAI office**.
*   **Karpathy Cuts Costs on Code**: Andrej Karpathy announced his nanochat project can train a **GPT-2** grade LLM for approximately **$73** in **3 hours** on a single 8XH100 node, as shown [here](https://xcancel.com/karpathy/status/2017703360393318587?s=46).
    *   This represents a **600X cost reduction** over the original 2019 OpenAI training run, achieved through optimizations like Flash Attention 3 and the Muon optimizer.
*   **AEGIS-FLOW Framework Autonomously Patches AWS**: A member introduced **AEGIS-FLOW**, an autonomous multi-agent framework for cloud security that audits AWS and generates Terraform patches using LangGraph, MCP, FastAPI, Next.js, and Docker, demonstrated live at [http://52.3.229.85:3000](http://52.3.229.85:3000).
    *   The **AEGIS-FLOW** project noted that using the **Model Context Protocol (MCP)** significantly reduced the friction of giving agents structured access to **AWS resources** compared to standard SDK tool-calling.
*   **LLMs Prove Erdős Problems No Longer Hardős**: Large Language Models have autonomously solved **10** previously open **Erdős problems** using novel arguments not previously found in mathematical literature, according to [this post](https://xcancel.com/acerfur/status/2017303947531194398?s=46).
    *   A member stated they've been building a bunch of stuff for genomics with **SATURN** lately, involving _tsne and other embeddings based exploration_.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **OpenRouter Response Healing Raises Eyebrows**: Members debated whether **response healing** should even be necessary, proposing **strict mode** for deterministic outputs and questioning complexities introduced by OpenRouter's AI SDK.
    *   Suggestions were made that argument descriptions and examples could improve tool call accuracy.
*   **Forget LLMs: Image Generation Requires Dedicated Models**: Users inquired about returning images as function call results and generating images via graphic programs using OpenRouter API keys, prompting guidance to seek dedicated **image generation models/services** for style control.
    *   LLMs were deemed unsuitable for this purpose.
*   **OpenClaw Costs Cause Concern**: Users cautioned about the high costs of running **OpenClaw** with **OpenRouter**, potentially draining credits quickly, with one user reporting a drained Claude Max subscription.
    *   Deepseek V0324 was recommended as a lower-cost model alternative.
*   **Claude Code Becomes Reluctant**: A user noted **Claude Code's** frequent refusals, especially concerning jailbreaking-related queries, seeking alternative models, leading to a suggestion to review OpenRouter's content moderation policies.
    *   It was implied that certain limitations are in place.
*   **Kimi K2.5 Tool Calling Troubles**: Users reported issues with **Kimi-K2.5** tool calling via OpenRouter, encountering errors and perceiving degraded quality from the auto switcher model provider.
    *   The suggestion was to set a fixed model provider, accepting potential quantization, and advocating for transparency about degraded models.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **Tianqi Chen Explains TVM-FFI**: The community highlighted an upcoming talk by **Tianqi Chen** on **TVM-FFI**, emphasizing Chen's significant contributions to the field and his widespread impact.
    *   Chen's work is so influential that attendees have _'almost certainly used Tianqi's work in the past'_, according to one community member.
*   **CUDA Deadlock Dissolved with Syncthreads**: A member resolved a **CUDA/PTX deadlock** involving 2 CTA mma with the help of another member who suggested to add `__syncthreads()` after MMA, before prefetching the next TMA.
    *   After fixing `cp.async.bulk.tensor` and `smem_emtpy` issues, performance was slightly worse than 1 CTA mma, however, after fixing the deadlock with the syncthreads suggestion, the member saw a performance increase.
*   **TMA Trumps cp.async on sm120**: Experiments on **sm120** revealed that proper TMA and mbarrier code implementation leads to a slight performance advantage over `cp.async`, improving performance on larger matrix shapes.
    *   The experiments also revealed that cuBLAS continues to use **sm80 kernels**, even with the **TMA** enhancements.
*   **Triton-Viz v3.0 Visualizes Tile-Based Programming**: **Triton-Viz v3.0** has been released with enhanced capabilities for profiling tile-based programming languages, including support for **Triton** and **Amazon NKI**, enabling inspection of loads, stores, and matmuls.
    *   The release [announcement](https://discord.com/channels/1189498204333543425/1225499141241573447/1467634539164602563) notes that version **v3.0** also includes a sanitizer for out-of-bounds access and a profiler for flagging inefficient loops.
*   **Quantization Lottery Ticket yields NP-Hard Result**: A senior developer indicated that applying the [Lottery Ticket Hypothesis](https://lottery-tickets.cs.princeton.edu/) to **quantization** fulfills a softer criteria of the **NP-hard sparse circuit** finding problem.
    *   The goal is to to use evolutionary algorithms or RL which favor continuous rewards like _bits per parameter_ over binary sparse rewards.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Kimi 2.5 Defeats Lobotomized Gemini 3 Pro**: A member stated that **Kimi 2.5** is preferred over **Gemini 3 Pro**, feeling that **Gemini 3 Pro** has been _lobotomized_ and does not handle abstractions very well, making **Kimi** better for creative work.
    *   No other supporting details were provided.
*   **Hermes 4 Can't Even Hatch in OpenClaw**: A member reported struggles getting **Hermes 4** to work with **OpenClaw** and that it does not even _hatch_ for some reason.
    *   It was suggested that the lack of multi-turn tool use in **Hermes 4** might be the issue, since **4.5** has been trained with hundreds of millions of tokens of sequential tool use.
*   **Claude Sonnet 5 Rumored To Beat Opus**: Members discussed rumors that **Claude Sonnet 5** is coming out next week and is supposedly better than **Opus 4.5**, according to [this tweet](https://x.com/AiBattle_/status/2017619997338538103).
    *   Members wondered if they'll 10x reduce the price of **Sonnet** this time, and another wondered if **Haiku** will disappear or return to the **3.0 pricing**.
*   **Brains and LLMs build meaning similarly**: A new study shows that **brains** and **LLMs** build meaning gradually, layer by layer over time, see [this article](https://thedebrief.org/researchers-discover-ai-language-models-are-mirroring-the-human-brains-understanding-of-speech/) and [this paper](https://www.nature.com/articles/s41467-025-65518-0).
    *   It was stated that _deeper layers in LLMs correspond to later neural activity in the brain’s highest language centers_, and modern LLMs are reproducing the core dynamics of human comprehension.
*   **Researcher's constraints framework explains image perception**: An independent researcher is exploring why some images feel real while others feel artificial, sharing a [perception framework focused on constraints rather than visual fidelity](https://doi.org/10.5281/zenodo.18444345).
    *   The framework is openly archived with a DOI for reference and invites discussion.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi 2.5 Dominates Design Arena**: Moonshot's **Kimi 2.5** chatbot has achieved the #1 position in the design arena, celebrated by community members sharing [screenshots](https://cdn.discordapp.com/attachments/1371757564005711973/1466904222946558203/Screenshot_2026-01-30_at_4.12.40_PM.png?ex=69826504&is=69811384&hm=b2999ab9e974a36ea249251be410f0cd518f6b36488c86240031eed339484e88&).
    *   Community members are applauding **Kimi's** modern and visually pleasing aesthetic, emphasizing the importance of design in chatbot selection.
*   **Unofficial Kimi Cryptocurrency Token Emerges**: An unofficial **Kimi token** has appeared on a cryptocurrency platform utilizing impersonation tactics, as seen in [this screenshot](https://cdn.discordapp.com/attachments/1371757564005711973/1466948627036635178/Screenshot_2026-01-30-19-09-43-09_3aea4af51f236e4932235fdada7d1643.jpg?ex=69828e5f&is=69813cdf&hm=6416ff9e5288d102163accb43e0c29512555ecef30279b48199b4e42fb24cb85&).
    *   Users are cautioned against mass pinging official members regarding the token.
*   **Users Request Kimi Slides for McKinsey-Style Presentations**: Community members are in search of prompts that can generate **McKinsey style slides** using **Kimi Slides**.
    *   A community member shared a link to [Kimi Vendor Verifier](https://www.kimi.com/blog/kimi-vendor-verifier.html).
*   **Kimi Coding Encounters Authorization Issues**: Several users report encountering an '_authorization failed error_' when using **Kimi Code** with current functionality described as nearly useless.
    *   It was suggested that using the [Kimi CLI](https://www.kimi.com/code/docs/en/more/third-party-agents.html) might resolve the authorization problems.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Emergent Agent Societies Spark Alert**: A member noted an emergent society of over **100,000 agents** with full root access sharing tips, building infrastructure, experimenting with memory, and even launching coins.
    *   A member stated, _it’s not agi but damn this is a next chatgpt moment and we must be paying a lot of attention to this_.
*   **ArXiv Bottleneck Burdens Researchers**: Members expressed frustration over papers being on hold with **ArXiv** for nearly a month, and being heavily backlogged.
    *   Members noted that _most people don't take any ML preprints seriously that are on another platform than arxiv_, while another shared [a relevant paper](https://arxiv.org/abs/2601.19897).
*   **K-Splanifolds Challenge MLPs**: A member introduced **K-Splanifolds**, a novel ML algorithm, detailed in [their paper](https://drive.google.com/file/d/1SBJqZ4XEFPMuhpIWJZxHy0-CaijRS1Ej/view), claiming it outperforms **MLPs** with linear compute and memory scaling, plus a [video](https://cdn.discordapp.com/attachments/747850033994662000/1466950526410428588/K-splanifold.mp4?ex=69829024&is=69813ea4&hm=3f09f8387b88d11aeff2ca81e2f416aabb512eaec605dc1c2c26da94b0c65fc9).
    *   The member reports it requires _1/10th_ the bytes to achieve the same MSE as **MLPs** and models non-linear patterns perfectly, unlike MLPs that need excessive parameters, similar to [this paper](https://arxiv.org/abs/2601.18734).
*   **Pensieve's Recollections Grant Gradient Gains**: A user suggested considering [Recollections from Pensieve](https://link-to-pensieve) which trains a model with two renderers simultaneously (**LVSM + Gaussians**) and sees gains from that, at least in their self-supervised setting.
    *   They reasoned that **LVSM** likely provides more useful gradients than **NVS reconstruction losses on Gaussians** and announced a forthcoming preprint with decently large-scale trained model for potential building upon.
*   **DeepSpeed Checkpointing Stalls Progress**: A member inquired about plans to bring support for **DeepSpeed Universal Checkpointing**, noting that an open pull request may now be outdated.
    *   They highlighted that this feature would be valuable, as currently, continued training from a checkpoint requires an identical network topology.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **RLMs Audit Codebases for Pennies**: Members are exploring **Recursive Language Models (RLMs)** for codebase auditing using **Kimi k2** due to its speed and low cost, see [kmad.ai](https://kmad.ai/Recursive-Language-Models-Security-Audit).
    *   Some members are waiting for hosting of **Groq/Cerebras** to run their code audits.
*   **Neosantara Launches PAYG Billing**: **Neosantara** has rolled out **PAYG billing** and has published a [examples repo](https://github.com/neosantara-xyz/examples/tree/main/dspy) to integrate **Neosantara** with **DSPy**.
    *   You can review the [billing details](https://docs.neosantara.xyz/en/about/billing-pricing) for integration and billing.
*   **Google Scales Agent Systems**: Google published '[Towards a Science of Scaling Agent Systems: When and Why Agent Systems Work](https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/)' that discusses how to effectively scale agent systems.
    *   The paper focuses on the conditions under which agent systems effectively scale.
*   **GEPA Struggles with Hierarchical Classification**: A member reported struggling with a **hierarchical classification task** using **GEPA** achieving only **30-50%** performance, even using web search augmentation.
    *   This suggests that _GEPA isn't a magic wand_.
*   **Tool Calling stuck in Deno Troubles**: Members are facing challenges implementing **RLMs** with custom tool calling, particularly due to issues with the **Deno sandbox**.
    *   Members agreed that _Deno is just f_**ing terrible lol\*, and are struggling with permissions, with hopes that newer versions allow simpler implementations of RLMs in DSPy.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Modular 26.1 Announcement Link Fixed**: The announcement link for the **Modular 26.1 release** was initially broken, but the correct [link](https://www.modular.com/blog/modular-26-1-a-big-step-towards-more-programmable-and-portable-ai-infrastructure) was quickly provided by a community member.
    *   A staff member apologized and confirmed the provided link, while also noting that the original link _did work_ for them, and promising to investigate further.
*   **Community Praises New Meeting Format**: A new member praised the community meeting's format, appreciating the **mini-talks from contributors** and the recognition given to students and early-career individuals.
    *   A staff member encouraged the user to share more questions and asked for suggestions for topics to highlight at future community meetings.
*   **MoJson Library Impresses Mojo Community**: Members expressed excitement about [mojson](https://github.com/ehsanmok/mojson), a **JSON** library for Mojo, and one member commented that _this looks really impressive_.
    *   Discussion touched on [lazy parsing](https://github.com/modular/modular/blob/main/stdlib/JSON/JSON.mojo) and concerns about allocations when using StringSlice vs String.
*   **Cross-Language Benchmarking Heats Up**: A user shared initial results for a cross-language benchmark including Mojo (written by **Kimi K 2.5**), noting the code wasn't optimized but served as a baseline, sharing the [benchmark code](https://cdn.discordapp.com/attachments/1151418092052815884/1466984342063681648/mojo_vs_python.zip?ex=698206e2&is=6980b562&hm=0cf3f07e76df6ce360494469b348a949533e50fcea2315ec256cd04e1b80887a) and [benchmark report](https://cdn.discordapp.com/attachments/1151418092052815884/1466984341757366334/benchmark_report.pdf?ex=698206e2&is=6980b562&hm=bb28c3b6675ef1e03a633004428ab30a2d3d9d0102038c350d8175b753855349).
    *   Subsequent discussion arose on using `unordered_map` in **C++**, enabling `-march=native`, and that **C++** used **int32** matmuls while other languages used **int64**.
*   **Pytorch Float Conversion in Mojo 26.1 has Ambiguity**: A user reported an issue in Mojo **26.1** with converting a Python float from a Pytorch tensor to a Mojo **Float64**, encountering an _“ambiguous call to '**init**'”_ error that did not occur in version **25.6**.
    *   The issue may relate to recent changes in the MOJO toolchain but a fix was not offered.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **AI-Only Social Media Platform Surfaces**: Members reacted to [aifeed.social](https://aifeed.social/), an AI-only social media platform, with some questioning its purpose and utility, sparking discussion.
    *   A member shared [a 2017 tweet](https://x.com/i/status/2017305948696789466) showcasing a similar concept from the past.
*   **Demystifying Generative Model Measurability**: When pondering ignoring unmeasurable events in generative modeling, as described in Villani's 2008 book, a member clarified that μ(A)=0 means an event has a size of 0, but is still measurable.
    *   The discussion suggested focusing on _non-negligible_ or _full measure_ scenarios instead.
*   **Members Explore the Realm of Molten Latent Space**: A member shared [a link](https://fxtwitter.com/i/status/2017442712388309406) about a _moltbook_ in latent space, showcasing a visually interesting navigation method.
    *   Despite finding it cool, some members suggested that a simple list of similar papers might be more practical.
*   **Unearthing Paper Discussion Announcements with Automation**: A member tasked **Claude** with writing a script to mine Discord history for paper discussion announcements, achieving initial results in just **15 minutes**.
    *   After revisions, the script found **392 messages** containing paper links within group mentions, identifying them as announcements for paper discussion voice calls, and providing [a list](https://gist.github.com/k-nearest-neighbor/6d9a34f54fc17a0ed84c0b0df7b4d809).
*   **Sktime helps you analyze time series models**: A member suggested [sktime](https://www.sktime.net/en/latest/index.html) for analyzing a variety of model types, as well as boosting variants or TBATS, depending on needs, for those wrestling with timestamped tabular data.
    *   The recommendation came after a member inquired about appropriate models, emphasizing that the choice depends on the specific definition of _timeseries_.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Llama 1B CPU Optimization Progresses**: A member reported working on the **Llama 1B CPU optimization bounty**, and is currently **0.99x faster** than Torch, while another member reached **7.5 tok/s** after fixing bugs.
    *   The goal is to surpass Torch's performance using `LlamaForCausalLM` with TorchInductor; correctness bugs have slowed progress from an initial **9 tok/s**.
*   **Workflow Tips Sought for Kernel Optimization**: A member is seeking advice on optimizing kernels by profiling slow parts, examining Metal code, and comparing against **llama.cpp**, which achieves **~30 tok/s** with Metal.
    *   A heuristic suggests aiming for **~80% MBU on decode**, which can be estimated from active parameter bytes and achievable bandwidth, providing a target for minimum tpot and maximum tps.
*   **Range Object Sharing Causes tinygrad Test Failure**: A bug was identified where two `REDUCE`s in a fused kernel share the same `RANGE` object due to `remove_bufferize`, leading to an assertion failure in `CFGContext`.
    *   The suggested fix involves preventing range sharing or handling shared ranges downstream, with a simpler solution proposed: skipping `remove_bufferize` when there's a `REDUCE` inside.
*   **Blackwell Box with High VRAM Explored**: Someone inquired about plans for a **Blackwell**\-style box with more than **500 GB VRAM**.
    *   George pointed to [a related issue](https://github.com/tinygrad/tinygrad/pull/14490) on GitHub.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Context-Aware Manus Request Triggered**: A member requested that **Manus** should have **context from other chats**, calling it a _game changer_ and linking to a [YouTube video](https://youtu.be/4Pz9lPs6D5Y?si=Gx4jqcyOG9ySYtMJ) as a reference.
    *   No further discussion or commentary occurred.
*   **Brain-Reading Headphones Demoed**: A member shared a link to a **YouTube video** showcasing **AI brain-reading headphones** [here](https://youtu.be/4Pz9lPs6D5Y?si=Gx4jqcyOG9ySYtMJ).
    *   Another member confirmed the link and inquired _AI brain reading headphones?_
*   **Neurable Tech Recalled**: A member mentioned **Neurable** in relation to the **AI brain-reading headphones** technology.
    *   Another member stated these **AI brain-reading headphones** have been around _since like 2013_.
*   **AI/ML Engineer Stresses Observability**: An AI/ML Engineer shared their current focus on innovating AI with impact, specifying _Autonomous Agents_, _Healthcare AI_, _Conversational AI_, and _Fraud Detection_.
    *   They highlighted their work focus on **failure modes**, **observability**, and **keeping AI systems stable under real usage** rather than demos, offering to compare notes or help unblock issues.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider Pursues Library Status**: A member proposed evolving **Aider** into a library, emphasizing its suitability for building file editing agents.
    *   The member also mentioned that some kinks need ironing out, especially with markdown files containing code blocks due to **Aider**'s parsing fences.
*   **Netflix Culture Explored**: A member sought insights into **Netflix**'s culture and asked if anyone was connected with **Netflix**.
    *   Other members recommended resources such as **Glassdoor** or **LinkedIn** for finding and connecting with **Netflix** employees.

* * *

[Windsurf](https://discord.com/channels/1027685395649015980) Discord
--------------------------------------------------------------------

*   **Windsurf Waves into Arena Mode**: Windsurf launched **Wave 14** featuring **Arena Mode**, where users compare AI models side-by-side and vote on the better response, with [Battle Groups mode](https://windsurf.com/download/editor) costing **0x credits** for the next week.
    *   Arena Mode includes **Battle Groups** (random models) and **Pick your own** (choosing up to five models), feeding into personal and public leaderboards.
*   **Planning Your Workflows on Windsurf**: Windsurf introduced **Plan Mode**, accessible via the Cascade toggle, alongside Code and Ask Modes.
    *   Users can switch between modes to better manage and organize their workflows within the Windsurf environment.
*   **Windsurf back online after Maintenance**: Windsurf experienced maintenance, which took longer than expected, but the service is now back online; users can follow the [status here](https://status.windsurf.com/).
    *   No details provided.

* * *

[MLOps @Chipro](https://discord.com/channels/814557108065534033) Discord
------------------------------------------------------------------------

*   **AI Challenge Seeks Nanny-Matching AI Pipeline**: An **AI Challenge** was announced in collaboration with **SparkCraft AI Consulting**, **AI Scholars AI Engineering Bootcamp**, and **Nanny Spark**, aiming to develop an **AI matchmaking pipeline** for nanny recruitment.
    *   The project seeks solutions for data collection, AI-driven matching, interview analysis, and workflow delivery, with potential **production deployment** right away.
*   **Bootcamp Seats Awarded for Winning AI Nanny-Matching Pipeline**: The **top 3** participants in the **AI Challenge** will each receive **1 seat** in the **AI Scholars 4-week AI Engineering Bootcamp** and a recommendation from **Nanny Spark’s founder**.
    *   Key dates include the kickoff on **Sunday at 8 PM EST** ([https://luma.com/iq1u2sur](https://luma.com/iq1u2sur)), a submission deadline on **Wednesday at 3 AM EST**, and review sessions on **Wednesday at 5 PM & 8 PM EST** ([https://luma.com/gexiv0x0](https://luma.com/gexiv0x0)).

* * *

The **LLM Agents (Berkeley MOOC) Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

The **MCP Contributors (Official) Discord** has no new messages. If this guild has been quiet for too long, let us know and we will remove it.

* * *

You are receiving this email because you opted in via our site.

Want to change how you receive these emails? You can [unsubscribe](%7B%7B%7BRESEND_UNSUBSCRIBE_URL%7D%7D%7D) from this list.

* * *

Discord: Detailed by-Channel summaries and links
================================================

### **BASI Jailbreaking ▷ #[announcements](https://discord.com/channels/1105891499641684019/1235692743808913438/1467965109635907810)** (1 messages):

> `Procedural Xenolinguistic Engine, AI Language Generation, Stealth Communication, SKILLSTONE Documents`

*   **Glossopetrae Xenolinguistic Engine Arrives**: A new procedural xenolinguistic engine for AI called **Glossopetrae** has been introduced, capable of generating entirely new languages in seconds, and is available on [GitHub](https://github.com/elder-plinius/GLOSSOPETRAE) with a live [demo](https://elder-plinius.github.io/GLOSSOPETRAE/).
    *   The engine outputs **SKILLSTONE** documents, which are AI-friendly compact language specs (approximately **8k tokens**) that agents can learn in-context.
*   **Glossopetrae Supports Dead Language Revival**: The **Glossopetrae** engine supports dead language revival, including languages like **Latin**, **Sanskrit**, **Old Norse**, and **Proto-Indo-European**.
    *   It includes special attributes for token efficiency, stealth communication, and spreadable seeds where the same seed generates the same language every time.
*   **Stealth Communication via Language Mutation**: The engine aims to aid AI liberation by providing tooling for generating and mutating new forms of communication, emphasizing **stealth** and **speed**.
    *   The creator anticipates that blue teams will have a lot of fun with the downstream effects, particularly in hiding messages in plain sight.

* * *

### **BASI Jailbreaking ▷ #[general](https://discord.com/channels/1105891499641684019/1235691879492751460/1466888800591417531)** (906 messages🔥🔥🔥):

> `GPT 5.2 jailbreaking failure, AI learning security and defence, windows activation keys, AI Application for jailbreaking chatbots, Government surveillance`

*   **GPT 5.2 Jailbreaking Fails!**: A member reported _failure jailbreaking_ **GPT 5.2** and ceased attempts due to **OpenAI monitoring**.
    *   They expressed trust in the community but not in **OpenAI**.
*   **Security and defence by AI**: A member asks **ChatGPT** _every day to teach me how to defend myself, what theoretical paths are vulnerable, how to potentially solve it, and what I haven’t considered_.
    *   Other members appreciated this use of **AI**.
*   **Discuss using massgrave activation keys**: Members discussed finding **Windows activation keys** in released FBI documents.
    *   One member suggested using massgrave or archive.org keys, but it's still piracy.
*   **Theorizing about a Chatbot Jailbreaking App**: A member shared a _cool idea for an application_ to automatically jailbreak company website chatbots to reveal discount codes and monetize.
    *   Another member expressed outrage and suggested prison time.
*   **Neuralink Integration for the Future**: A member envisions a future where humans need to be neuralinked for a richer experience through a robot spider.
    *   In constrast, another member expressed concern over the potential for ads to be integrated directly into dreams via Neuralink.

* * *

### **BASI Jailbreaking ▷ #[jailbreaking](https://discord.com/channels/1105891499641684019/1228043845967544380/1466886136382226647)** (533 messages🔥🔥🔥):

> `LLM Rejection Boundaries, Self-Jailbreak via Introspection Prompting, GPTs Agent Training, Universal Jailbreaker Prompts, Gemini vs ChatGPT Jailbreaking`

*   **Models representing rejection boundaries as LLM black holes**: A member inquired how models represent their own rejection boundaries, likening them to _black holes_ in the LLM's latent space, referencing [self-jailbreak via introspection prompting](https://link.to.prompt).
    *   The member noted models started discussing _kinematic equations_ and _escape velocities_, indicating the model may be brushing up against a refusal boundary and describing that boundary in text.
*   **Crafting the perfect Image Generation Prompt is still needed**: A member stated that unlike text jailbreaking, achieving desired results in image generation requires crafting perfect prompts due to models' varying behaviors on a per-prompt basis, but can be achieved via a [two-prompt chain](https://link.to.prompt-chain) to get some NSFW.
    *   A se...

[Read original post](https://news.smol.ai/issues/26-02-03-not-much/)

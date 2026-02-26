---
title: "Agentic Engineering: WTF Happened in December 2025?"
date: "2026-02-25T05:44:39.000Z"
description: "**Perplexity** launched **Computer**, an orchestration-first agent platform featuring multi-model routing, usage-based pricing, and parallel asynchronous sub-ag..."
original_link: "https://news.smol.ai/issues/2026-02-25-wtf-happened/"
---

**There's a growing uneasy feeling that coding has changed forever — much much more than "normal" hype.**

> AI News for 2/24/2026-2/25/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**262** channels, and **10751** messages) for you. Estimated reading time saved (at 200wpm): **1086** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

We've made a microsite for this:

https://wtfhappened2025.com/
============================

https://wtfhappened2025.com/

Go now.

* * *

AI Twitter Recap
================

**Perplexity “Computer”: an orchestration-first agent product (multi-model, tool+env, usage-based pricing)**

*   **Perplexity Computer launch**: Perplexity introduced **Computer**, positioned as an end-to-end system that can “research, design, code, deploy, and manage” projects by orchestrating **files, tools, memory, and models** in one interface ([launch tweet](https://x.com/perplexity_ai/status/2026695550771540489), [Arav Srinivas](https://x.com/AravSrinivas/status/2026695864039911684)). Key product signals:
    *   **Access + pricing**: available on web for **Max** subscribers first, then Pro/Enterprise; **usage-based pricing** with **sub-agent model selection**, spending caps, and credits included for Max (10k/mo) plus a time-limited bonus credit grant ([pricing details](https://x.com/perplexity_ai/status/2026695793537855526), [availability](https://x.com/perplexity_ai/status/2026695805252547008), [Arav on rollout](https://x.com/AravSrinivas/status/2026697136507859067)).
    *   **Architecture emphasis**: multiple tweets stress that the “breakthrough” is **parallel, asynchronous sub-agents** with a coordinator model assigning tasks to specialist models (research vs coding vs media), rather than a single monolithic agent loop ([Lior’s breakdown](https://x.com/LiorOnAI/status/2026739011122065819), [Denis Yarats](https://x.com/denisyarats/status/2026704583817634180)).
    *   **“Everything is computer” narrative**: Perplexity staff amplified Computer as a platform built by a small team with extensive use of coding agents and automated eval/debug loops ([Arav](https://x.com/AravSrinivas/status/2026703703248613736), [Denis](https://x.com/denisyarats/status/2026704583817634180)).
*   **Why it matters to engineers**: Computer is a concrete push toward _systems-level agent UX_: multi-model routing, isolation/sandboxes, persistent memory, and cost controls—i.e., treating “agentic work” as a **distributed workflow** rather than a single chat session ([Arav](https://x.com/AravSrinivas/status/2026695864039911684), [Computer site](https://x.com/AravSrinivas/status/2026697232846827941)).

**Coding agents: “it started working in December” + new model/tooling drops (GPT‑5.3‑Codex, Claude Code ecosystem, Copilot CLI GA)**

*   **Karpathy’s “phase change” claim**: Andrej Karpathy argues that **coding agents crossed a qualitative threshold since December**—from brittle demos to sustained, long-horizon task completion with coherence and tenacity. He gives a detailed example of delegating an end-to-end local deployment (SSH keys → vLLM → model download/bench → server endpoint → UI → systemd → report) with minimal intervention ([Karpathy](https://x.com/karpathy/status/2026731645169185220)). This aligns with broader “software is changing” sentiment from devtool builders and users ([Cursor](https://x.com/cursor_ai/status/2026717494426173917), [snowmaker](https://x.com/snowmaker/status/2026555857845256354)).
*   **OpenAI GPT‑5.3‑Codex release + early eval chatter**:
    *   OpenAI shipped **GPT‑5.3‑Codex** in the API ([snsf](https://x.com/snsf/status/2026513135075746239)) and Cline announced support with claimed gains: **~25% faster vs 5.2**, fewer tokens/task, and strong SWE-Bench Pro performance ([Cline](https://x.com/cline/status/2026481089158779021)).
    *   Community benchmark reactions were sharp (and noisy): e.g., “86% on IBench” surprise ([tweet](https://x.com/adonis_singh/status/2026456939224510848)) and “first benchmarks incoming” ([kimmonismus](https://x.com/kimmonismus/status/2026709699366670579)). Treat these as directional until methodology is clear.
*   **Claude Code: product maturity + observability + integrations**:
    *   Claude Code’s “first birthday” framing and retrospectives emphasize it as a _foundational_ coding agent product, plus concerns about **context length scaling hitting memory constraints** ([swyx](https://x.com/swyx/status/2026462001933988094)).
    *   Practical ecosystem bits: **Slack plugin** integration for Claude Code ([catwu](https://x.com/_catwu/status/2026485966626763120)); LangSmith tracing for Claude Code to debug “nerfing”/routing issues ([hwchase17](https://x.com/hwchase17/status/2026452439327764521), [observability complaint](https://x.com/ChaiWithJai/status/2026446654753190324)).
*   **GitHub Copilot CLI goes GA + “/research”**:
    *   Copilot CLI reached **GA** ([Evan Boyle](https://x.com/_Evan_Boyle/status/2026706464375796099)) and added `/research` for repo-wide deep research using GitHub code search + MCP-based dynamic fetching, exporting reports to gists for sharing ([feature](https://x.com/_Evan_Boyle/status/2026458533320077689)).
    *   Smaller UX note: Copilot CLI in terminal updates titles in real time ([tweet](https://x.com/njukidreborn/status/2026443296177008818)).

**Open models & local inference: Qwen3.5 “Medium” wave (MoE + long context + FP8/quant), and the local-agent tipping point**

*   **Qwen3.5 Medium series distribution blitz**: Alibaba pushed day-0 tooling support across **vLLM**, **GGUF**, **LM Studio**, **Ollama**, and **Jan**, highlighting how fast the deployment stack is now for major open releases ([vLLM thanks](https://x.com/Alibaba_Qwen/status/2026496673179181292), [GGUF](https://x.com/Alibaba_Qwen/status/2026497723944546395), [LM Studio](https://x.com/Alibaba_Qwen/status/2026496880285462962), [Ollama](https://x.com/ollama/status/2026598944177009147), [Jan](https://x.com/Alibaba_Qwen/status/2026660582221558190)).
*   **Key technical claims from Qwen** (as posted, not independently verified here):
    *   **Quantization robustness**: “near-lossless” accuracy under **4-bit weight + KV-cache quantization**.
    *   **Long-context**: **Qwen3.5‑27B supports 800K+**, **35B‑A3B >1M context on 32GB VRAM consumer GPUs**, **122B‑A10B 1M+ on 80GB GPUs**.
    *   **Open base**: Qwen open-sourced **Qwen3.5‑35B‑A3B‑Base** to support research ([Alibaba\_Qwen](https://x.com/Alibaba_Qwen/status/2026502059479179602)).
    *   **FP8 weights open** with native vLLM/SGLang support ([FP8 announcement](https://x.com/Alibaba_Qwen/status/2026682179305275758)).
*   **Local agents “before/after”**: A notable practitioner claim is that **Qwen3.5‑35B‑A3B** makes local agent loops feel meaningfully more reliable (tool calling, stability) while activating only **~3B params/token**—explicitly positioning local as viable alongside Claude Code/Codex for many workflows ([victormustar](https://x.com/victormustar/status/2026624792602808707)).
*   **Eval discourse warning: benchmaxxing & MoE vs dense confusion**:
    *   Multiple threads caution against over-reading leaderboards (“please stop falling for benchmaxxing”) ([scaling01](https://x.com/scaling01/status/2026698844088549848)) and highlight surprising parity across Qwen sizes on some benchmarks, suggesting either tooling effects or benchmark artifacts ([eliebakouch](https://x.com/eliebakouch/status/2026727151978840105), [teortaxesTex on HLE/MoE interpretation](https://x.com/teortaxesTex/status/2026690994029072512)).
    *   Arena added Qwen3.5 Medium to Text/Vision/Code Arena for head-to-head comparisons ([Arena](https://x.com/arena/status/2026716550812807181)).

**Agents, reliability, and “building for agents”: minimal benchmarks, tool-interface optimization, and failure modes**

*   **Reliability hasn’t improved like capability**: A reliability-focused line of work argues that despite rapid model progress, **reliability gains are modest**, decomposing reliability into many dimensions and warning against reducing agent performance to a single “success rate” number ([IEthics](https://x.com/IEthics/status/2026435186704134617), [Justin Bullock quote](https://x.com/JustinBullock14/status/2026693253169336475)).
*   **Agent failures are often _reliability_, not capability**: A summary of an “agent failure” paper claims agents frequently fail by **compounding small off-path tool calls**, where one mistake increases the likelihood of the next, especially in long-horizon settings ([omarsar0](https://x.com/omarsar0/status/2026471955319189861)).
*   **Minimal “safe & helpful” benchmark idea**: Instead of harder tasks, one proposal is to measure whether models can reliably do _trivially specified_ safe behaviors (e.g., “send email only if asked”), including under irrelevant/distracting context; the claim is frontier models still miss cases ([jonasgeiping](https://x.com/jonasgeiping/status/2026714911951220888)).
*   **Tool descriptions as an optimization target (Trace‑Free+)**: Intuit AI Research work suggests **agent success depends heavily on tool-interface text**, and introduces a curriculum that teaches models to rewrite tool descriptions into agent-usable forms without requiring traces at inference time; reported gains on StableToolBench/RestBench and robustness with >100 tools ([omarsar0](https://x.com/omarsar0/status/2026676835539628465)).
*   **GUI/web agents: planning vs reactive**: ActionEngine reframes GUI agents as **graph traversal** with offline exploration producing a state-machine; runtime generates a full program with ~1 LLM call, claiming big success/cost/latency improvements over step-by-step vision loops ([dair\_ai](https://x.com/dair_ai/status/2026678090815123594)).

**Compute, memory, and inference-speed frontiers: chip memory hierarchies, diffusion LLMs, and infra for scaling**

*   **Karpathy on the “tokens tsunami” and memory orchestration**: A high-engagement thread frames the core constraint as two distinct memory pools—fast, tiny **on-chip SRAM** vs large, slow **off-chip DRAM**—and argues the biggest puzzle is orchestrating memory+compute for LLM workflows (prefill/decode/training) with best throughput/latency/$, especially **decode under long context + tight agentic loops**, which is hard for both “HBM-first” (NVIDIA-like) and “SRAM-first” (Cerebras-like) camps ([Karpathy](https://x.com/karpathy/status/2026452488434651264)).
*   **Diffusion LLMs as a speed alternative**:
    *   Andrew Ng highlighted impressive inference speed from Inception Labs’ diffusion LLMs ([AndrewYNg](https://x.com/AndrewYNg/status/2026478474681262576)).
    *   Separate discussion claims diffusion approaches can hit **~1000 tok/s** and shift the speed game via architecture, not chips (interpret cautiously; marketing often outpaces reproducible evals) ([kimmonismus](https://x.com/kimmonismus/status/2026662718321897974)).
    *   Research thread: “Diffusion Duality (Ch.2) Ψ-Samplers” for inference-time scaling in uniform diffusion-LLMs ([ssahoo\_](https://x.com/ssahoo_/status/2026487124493742406)).
*   **Interpretability at scale**: Goodfire described infra work enabling **trillion-parameter-scale interpretability** with minimal inference overhead, harvesting **billions of activations** and enabling real-time steering of chain-of-thought in at least one case study ([GoodfireAI](https://x.com/GoodfireAI/status/2026748839303246238)).

**Major announcements & policy/safety pressure points: Anthropic acquisitions + RSP shift, surveillance concerns, and market/power constraints**

*   **Anthropic acquires Vercept** to advance Claude’s “computer use” capabilities ([AnthropicAI](https://x.com/AnthropicAI/status/2026705792033026465)); Vercept’s founder thread frames the mission as moving from “telling users what to do” to **acting for users**, especially for non-technical tasks ([ehsanik](https://x.com/ehsanik/status/2026712952699760808)).
*   **Anthropic “RSP v3” shift (Responsible Scaling Policy)**: Commentary indicates a move away from rigid, unilateral “stop training past thresholds unless mitigations are guaranteed” toward **more frequent transparency artifacts** (roadmaps + risk reports), plus updated threat models and external review commitments ([MaskedTorah](https://x.com/MaskedTorah/status/2026512814886768799)). A more sensationalized summary claims this reflects competitive pressure and uncertainty in risk science ([kimmonismus](https://x.com/kimmonismus/status/2026669811179335739)).
*   **Surveillance and civil liberties**: Jeff Dean explicitly agreed that **mass surveillance** chills speech, invites misuse, and violates constitutional protections ([JeffDean](https://x.com/JeffDean/status/2026566490619879574)). Related tweets raised concerns about autonomous policing/surveillance agents that can’t refuse illegal orders ([BlackHC](https://x.com/BlackHC/status/2026456906710327338)).
*   **Energy as a binding constraint**: One report claims U.S. political leadership is pushing major AI/data-center firms to **self-provision electricity** to avoid ratepayer backlash as demand strains the grid ([kimmonismus](https://x.com/kimmonismus/status/2026720759163298282))—an example of AI scaling becoming as much **infrastructure/policy** as algorithms.
*   **Grok 4.20 Beta leaderboard movement**: Arena reports Grok‑4.20‑Beta1 at **#1 on Search Arena** and **#4 on Text Arena** ([arena](https://x.com/arena/status/2026566773496230383)). Treat as one signal among many; Arena rankings can shift with sampling policies and model variants.

* * *

### Top tweets (by engagement, technical/relevant)

*   [Karpathy on the “phase change” in coding agents since December](https://x.com/karpathy/status/2026731645169185220)
*   [Perplexity launches “Computer”](https://x.com/perplexity_ai/status/2026695550771540489)
*   [Arav Srinivas: what Perplexity has been building + “Computer”](https://x.com/AravSrinivas/status/2026695864039911684)
*   [Karpathy on compute: SRAM vs DRAM orchestration for token-heavy LLM workloads](https://x.com/karpathy/status/2026452488434651264)
*   [Anthropic acquires Vercept for computer-use capabilities](https://x.com/AnthropicAI/status/2026705792033026465)
*   [Qwen3.5 long-context + quantization + base model details](https://x.com/Alibaba_Qwen/status/2026502059479179602)
*   [Local agents tipping point: run Qwen3.5‑35B‑A3B locally with 32GB RAM](https://x.com/victormustar/status/2026624792602808707)
*   [Goodfire: infra for interp at trillion-parameter scale](https://x.com/GoodfireAI/status/2026748839303246238)
*   [ActionEngine: offline GUI exploration → O(1) LLM-call execution programs](https://x.com/dair_ai/status/2026678090815123594)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen 3.5 Model Performance and Benchmarks

*   **[Qwen 3.5 craters on hard coding tasks — tested all Qwen3.5 models (And Codex 5.3) on 70 real repos so you don't have to.](https://www.reddit.com/r/LocalLLaMA/comments/1reds0p/qwen_35_craters_on_hard_coding_tasks_tested_all/)** (Activity: 685): **The post discusses a comprehensive benchmark test called APEX Testing, which evaluates various AI coding models on real-world coding tasks. The benchmark includes 70 tasks across real GitHub repositories, focusing on bug fixes, refactoring, and building tools. Notably, **Codex 5.3** performs consistently well across difficulty levels, while **Qwen 3.5 397B** struggles with complex tasks requiring coordination across multiple files. The **GLM-4.7 quantized** model is highlighted as the top local model, outperforming all Qwen 3.5 models. The methodology involves agentic tool-use systems for fair comparison, and results are scored based on correctness, completeness, quality, and efficiency. The full leaderboard and detailed results are available on [APEX Testing](https://www.apex-testing.org).** Commenters suggest testing with different agentic frameworks, as model performance can vary significantly depending on the framework used. There is also a discussion about the specific GLM-4.7 models tested, questioning whether they are the smaller Flash models or larger versions.
    
    *   UmpireBorn3719 highlights a comparison between `gpt-oss-20b` and `qwen3 coder next`, noting that `gpt-oss-20b` scored `1405` while `qwen3 coder next` scored `1328`. This suggests that `gpt-oss-20b` may be a better performer in coding tasks based on the given benchmarks.
    *   metigue discusses the impact of using different frameworks on model performance, noting that open-source models can show more than `50%` performance swings depending on the framework. They suggest testing with popular frameworks as the choice of framework can dramatically change which model appears to be the best, citing examples like `GLM-5` outperforming `opus 4.6` and `codex 5.3` when using the `Droid` framework.
    *   FullstackSensei raises concerns about the reliability of benchmarks for open weights models when served over open routers. They argue that without knowing the specific quantization or cost-saving measures applied, the performance results can be misleading. They emphasize that running smaller models at lower quantization levels, such as below `Q8`, can significantly handicap their performance, especially on complex tasks.
*   **[Qwen3.5 27B better than 35B-A3B?](https://www.reddit.com/r/LocalLLaMA/comments/1re72h4/qwen35_27b_better_than_35ba3b/)** (Activity: 637): **The image compares the performance of different models in the Qwen3.5 series, specifically the 27B and 35B-A3B models, across various benchmarks such as instruction following, graduate-level reasoning, and multilingual knowledge. The discussion centers around which model would be more efficient given hardware constraints of 16 GB VRAM and 32 GB RAM. The 27B model is noted for its better performance on a 3090 GPU, achieving a speed difference of `100 t/s` compared to `20 t/s` for the 35B-A3B, suggesting that the 27B model may be more suitable for users with limited hardware resources.** One user shares personal testing results, indicating that the 27B model performs better on a 3090 GPU, highlighting a significant speed difference. This suggests that the 27B model may be more efficient for users with similar hardware setups.
    
    *   FusionCow notes a performance difference between the Qwen3.5 27B and 35B-A3B models on a 3090 GPU, with the 27B model achieving a throughput of `100 tokens/second` compared to `20 tokens/second` for the 35B-A3B. This suggests that the 27B model is more efficient in terms of speed, making it preferable for tasks where processing time is a critical factor.
    *   boinkmaster360 suggests that the Qwen3.5 27B model is a dense model, which might contribute to it being slower but potentially more intelligent. This implies a trade-off between computational speed and the model's ability to handle complex tasks, which could be a consideration for users depending on their specific needs.
    *   Alternative\_You3585 highlights that the Qwen3.5 27B model is likely superior in terms of intelligence, but the 35B-A3B model may have advantages in real-world knowledge and speed. This indicates a nuanced performance profile where the 27B excels in cognitive tasks, while the 35B-A3B might be better suited for applications requiring quick, knowledge-based responses.
*   **[Qwen3.5-35B-A3B is a gamechanger for agentic coding.](https://www.reddit.com/r/LocalLLaMA/comments/1rdxfdu/qwen3535ba3b_is_a_gamechanger_for_agentic_coding/)** (Activity: 1588): **The post discusses the performance of the **Qwen3.5-35B-A3B** model, tested with **Opencode** on a single RTX 3090 GPU using `llama.cpp`. The model, running with a `130k context window`, achieved over `100 tokens per second` and utilized `22 GB of VRAM`. It successfully completed a coding test, typically taking 5 hours pre-AI, in just 10 minutes. The model also recreated a dashboard demo in 5 minutes, showcasing its efficiency and potential as an agentic coding tool.** One commenter noted achieving `180 tokens per second` on a 5090 GPU, while another reported issues with basic file text editing using an 8-bit quantized version on Spark, indicating variability in performance across different setups.
    
    *   **Qwen3.5-35B-A3B** demonstrates impressive performance with a reported speed of `180 tokens/second` on a `5090` GPU, as noted by Additional-Action566. This suggests significant efficiency improvements, especially for high-performance hardware setups.
    *   Comrade-Porcupine highlights a limitation of the model when used on a Spark with 8-bit quantization, where it struggled with basic file text editing tasks despite being adept at reading code. This indicates potential issues with tool use capabilities in certain configurations, possibly due to quantization effects.
    *   jslominski shares a detailed configuration for running the model using **Unsloth's MXFP4 quantization**. The setup includes parameters like `context size 131072`, `temperature 0.6`, and `top-p 0.95`, which are tailored for coding tasks. This configuration aims to optimize the model's performance in generating coherent and contextually relevant code outputs.
*   **[Qwen3.5 27B is Match Made in Heaven for Size and Performance](https://www.reddit.com/r/LocalLLaMA/comments/1rdvq3s/qwen35_27b_is_match_made_in_heaven_for_size_and/)** (Activity: 391): **The post discusses the setup and performance of the **Qwen3.5-27B-Q8\_0** model, which is implemented using `llama.cpp` with CUDA on an **RTX A6000 48GB** GPU. The model achieves a speed of approximately `19.7 tokens/sec` with a `32K` context window. The Q8 quantization is chosen due to its efficient use of `28.6GB` VRAM, allowing for ample KV cache space, and maintaining quality comparable to full BF16. The model's architecture combines Gated Delta Networks with standard attention layers, enhancing processing speed for long contexts. It supports `262K` native context window, `201` languages, and is vision-capable. Benchmarks show it competes with leading closed-source models on GPQA Diamond, SWE-bench, and the Harvard-MIT math tournament. Streaming is supported via the llama-server OpenAI compatible endpoint. [Model Card](https://huggingface.co/Qwen/Qwen3.5-27B).** Commenters debate the efficiency of different quantization levels and hardware setups. One user reports achieving `25 tokens/sec` with a Q5 quant on an RTX 3090, while another questions the practicality of dense models like Qwen3.5-27B given the high VRAM cost and relatively low token generation speed compared to other setups.
    
    *   Conscious\_Cut\_6144 provides a detailed performance benchmark for the Qwen3.5 model on a single RTX 3090 GPU, using a Q4-XL quantization. The setup achieves a prefill rate of 800 tokens per second and a generation rate of 31 tokens per second at a 15k context, with a fully offloaded 110k context. This highlights the model's efficiency in handling large contexts with significant speed.
    *   Southern-Chain-6485 compares different quantization levels on the RTX 3090, noting that a Q5 quantization achieves 25 tokens per second, while a Q8 quantization drops to 5 tokens per second. This suggests that while higher quantization levels can fit within the GPU's memory, they significantly impact performance, raising questions about the trade-offs between model size and speed.
    *   LinkSea8324 discusses the limitations of Mixture of Experts (MoE) models compared to dense models, particularly in tasks requiring multiple expertise areas. They argue that while MoE models can be efficient, they may underperform in real-world applications that demand diverse skill sets, suggesting that dense models might be more suitable for such scenarios.

### 2\. New Model Releases and Announcements

*   **[Liquid AI releases LFM2-24B-A2B](https://www.reddit.com/r/LocalLLaMA/comments/1rdi26s/liquid_ai_releases_lfm224ba2b/)** (Activity: 448): **Liquid AI has released the LFM2-24B-A2B, a sparse Mixture-of-Experts (MoE) model with 24 billion parameters, of which 2 billion are active per token. This model is part of the LFM2 family, which has expanded from 350M to 24B parameters, demonstrating effective scaling without increasing per-token compute. The architecture includes 40 layers and 64 experts per MoE block with top-4 routing, and it is designed to run on 32GB RAM, making it suitable for high-end consumer devices. It supports inference through llama.cpp, vLLM, and SGLang, with multiple GGUF quantizations available. Benchmarks show log-linear quality improvement as the model scales, and it is available open-weight on Hugging Face.** Commenters are optimistic about the model's performance, especially in comparison to other sub-2B models, and are interested in more detailed benchmarks. There is also anticipation for the completion of pre-training, which will lead to an enhanced version, LFM2.5-24B-A2B.
    
    *   The LFM2-24B-A2B model has been trained on `17 trillion tokens` so far, with pre-training still ongoing. Once complete, the model will evolve into LFM2.5-24B-A2B, incorporating additional post-training and reinforcement learning. This release is essentially a preview, indicating that the model's capabilities are still being developed and refined.
    *   The model's performance on edge devices is highlighted, with `112 tokens per second` decode speed on an AMD CPU and `293 tokens per second` on an H100 GPU. It requires `32 GB of RAM` and supports frameworks like llama.cpp, vLLM, and SGLang from day one. This suggests a focus on efficient deployment and compatibility with popular machine learning frameworks.
    *   There is a noted lack of detailed benchmarks for the LFM2-24B-A2B release, with some users expressing skepticism about the benchmarks provided on the official website. This indicates a demand for more comprehensive performance data to validate the model's capabilities in real-world scenarios.
*   **[Qwen releases new Qwen3.5 Medium models!](https://www.reddit.com/r/LocalLLM/comments/1rdnlvl/qwen_releases_new_qwen35_medium_models/)** (Activity: 141): **The image announces the release of the **Qwen3.5 Medium models**, which include the `35B-A3B`, `27B`, and `122B-A10B` models. These models are designed to handle `256K` context and excel in areas such as agentic coding, vision, and chat. The image features bar graphs that compare the performance of these models across various benchmarks, including instruction following, visual reasoning, and document recognition. The models are highlighted in different colors, and the text provides details about their capabilities, hardware requirements, and fine-tuning options. The release is significant for its potential impact on AI model performance and versatility in handling complex tasks.** Commenters are interested in testing the models, particularly the `35B` in `4bit` compared to the `27B` in `6bit`. There is also a call for real `vllm` support due to the increasing number of `gguf` models.
    
    *   The release of Qwen3.5 Medium models includes various GGUF formats, ranging from 2-bit to 16-bit, which are available on Hugging Face. This variety allows for testing across different precision levels, which can be crucial for performance optimization in specific applications. The models are available in sizes such as 35B and 27B, providing options for different computational capacities and use cases.
    *   There is interest in comparing the performance of the 35B model in 4-bit precision against the 27B model in 6-bit precision. This comparison could provide insights into the trade-offs between model size and precision, particularly in terms of computational efficiency and accuracy. Such comparisons are essential for users looking to optimize their models for specific tasks or hardware constraints.
    *   The need for vllm support is highlighted due to the increasing number of GGUF models. VLLM (Very Large Language Models) support could enhance the usability and integration of these models into existing systems, potentially improving performance and scalability. This is particularly relevant as more models are released in GGUF format, which may not yet be fully supported by all frameworks.

### 3\. Local Model Running and Hardware Discussions

*   **[What’s everyone actually running locally right now?](https://www.reddit.com/r/LocalLLM/comments/1rdf2sj/whats_everyone_actually_running_locally_right_now/)** (Activity: 252): **The Reddit post inquires about the local setups for running large language models (LLMs), focusing on the models used, their practicality, and the hardware involved. Notably, **Qwen 3 coder next 80B** is highlighted for its performance in smaller quantizations, while **Mistral Small 3.2 24b** and **Magistral Small 24b** are used for administrative tasks on a MacBook Pro M4 Max, featuring a custom-built front end with Xcode for semantic memory and document uploads. Additionally, **Qwen3 4B** is mentioned for its speed and utility on an iPhone, emphasizing privacy by running locally.** The comments reflect a preference for models that balance performance and privacy, with users opting for local setups to avoid exposing data to external providers. The use of smaller, efficient models like Qwen3 4B on mobile devices highlights a trend towards practical, everyday applications.
    
    *   Greenonetrailmix highlights the performance of Qwen 3 Coder Next 80B, noting its superior performance in smaller quantizations compared to other models. This suggests that Qwen 3 is optimized for efficiency in resource-constrained environments, making it a popular choice for local deployments.
    *   Nefhis describes using Mistral Small 3.2 24b and Magistral Small 24b models on a MacBook Pro M4 Max, with a custom-built front end using Xcode. The setup includes semantic memory and document upload capabilities, emphasizing privacy by avoiding exposure to external providers. This setup is tailored for administrative tasks, leveraging local processing to maintain data confidentiality.
    *   mister2d reports running Nemotron 3 Nano on older hardware, achieving 30-40 tokens/sec at 128k context due to the model's hybrid/swa architecture. The hardware setup includes Dual Xeon (Ivy Bridge), 256 GB DDR3, and 2x RTX 3060 (12GB), indicating a balance between legacy components and modern GPUs to optimize performance for agentic flows.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. AI Model and Benchmark Launches

*   **[Bullshit Benchmark - A benchmark for testing whether models identify and push back on nonsensical prompts instead of confidently answering them](https://www.reddit.com/r/singularity/comments/1rdsf3r/bullshit_benchmark_a_benchmark_for_testing/)** (Activity: 1060): **The image presents a 'Bullshit Benchmark' bar chart that evaluates various AI models on their ability to detect and appropriately respond to nonsensical prompts. The chart categorizes model performance into three levels: green (high accuracy in detection), amber (moderate accuracy), and red (low accuracy). Notably, models like Claude Opus 4.6 show high performance with a significant green section, while others have more red, indicating poorer performance. This benchmark highlights the importance of models not just memorizing data but also understanding context to avoid confidently answering nonsensical queries.** Commenters emphasize the need for benchmarks that test models' ability to detect nonsensical prompts, as current benchmarks often focus on data memorization. There is also a mention of Gemini's sarcastic responses to nonsensical prompts, which may affect its lower rating.
    
    *   MangusCarlsen highlights that the model 'Gemini' tends to respond to nonsensical prompts with sarcasm, as demonstrated by the 'car wash test'. This behavior might contribute to its lower ratings, suggesting that the model's handling of absurd prompts is a factor in its evaluation.
    *   AppropriateDrama8008 argues for the necessity of benchmarks that test a model's ability to detect and respond to nonsensical prompts, rather than just assessing memorization of training data. This approach is seen as more beneficial for real-world applications, emphasizing the importance of models understanding context and intent.
    *   Orangeshoeman references a discussion between Dario Amodei and Demis Hassabis, noting that Dario's focus is on models mastering objective data. This strategic focus might explain why Anthropic's models, like Claude, perform better in certain benchmarks, as they prioritize understanding and processing factual information.
*   **[Nano Banana 2 is real! Gemini 3.1 Flash Image just appeared in Vertex AI Catalog](https://www.reddit.com/r/Bard/comments/1rea45x/nano_banana_2_is_real_gemini_31_flash_image_just/)** (Activity: 184): **The image in the post is a side-by-side comparison of two AI-generated portraits, showcasing the capabilities of the newly released **Nano Banana 2** (also known as Gemini 3.1 Flash Image) and the existing Nano Banana Pro model. The post highlights that the new model, despite being a 'Flash' tier, offers quality close to the Pro version, particularly excelling in spatial logic for dense compositions. This model is designed for high-speed, low-cost production, suitable for high-frequency pipelines like bulk user-generated content (UGC) ad creation and consistent frame generation for video models. The image serves as a visual test to compare the output quality of the two models.** One commenter believes that the Nano Banana Pro still has an edge over the new model in the provided example, indicating a preference for the Pro's output quality.
    
    *   The original Flash Image model had solid image quality, but faced issues with prompt adherence, particularly with complex instructions where it would either ignore parts of the prompt or regenerate the same output. Additionally, it struggled with text and infographic rendering, as well as multi-image compositing. The key question for the new Gemini 3.1 version is whether these issues have been addressed, especially in handling dense prompts.

### 2\. Anthropic Claude and Military Use Controversy

*   **[xAI and Pentagon reach deal to use Grok in classified systems, Anthropic Given Ultimatum](https://www.reddit.com/r/singularity/comments/1rd9mss/xai_and_pentagon_reach_deal_to_use_grok_in/)** (Activity: 580): ****xAI**, founded by **Elon Musk**, has reached an agreement with the **Pentagon** to integrate its AI model, **Grok**, into classified military systems. This development follows a dispute with **Anthropic**, whose model **Claude** has been the sole AI used in sensitive military operations. The Pentagon demands that Claude be available for 'all lawful purposes,' which Anthropic resists, particularly against its use in mass surveillance and autonomous weapons. **xAI** has agreed to these terms, potentially replacing Claude if Anthropic does not comply. Meanwhile, **Google's Gemini** and **OpenAI's ChatGPT** are also being considered for classified use, with Google reportedly nearing a deal.** Commenters speculate that the Pentagon's preference for Anthropic's Claude might indicate its superior performance or a strategic lock-in, despite the pressure to comply with broader usage terms. There's also skepticism about the government's reliance on commercial AI models, questioning why they don't leverage more advanced, secretive technologies.
    
    *   EmbarrassedRing7806 discusses the Pentagon's preference for Anthropic, suggesting it might indicate a belief that Claude is superior or a strategic move to pressure Anthropic into compliance. The comment highlights the potential for lock-in strategies, where the Pentagon might prefer to maintain existing relationships rather than switch providers, even if alternatives are available.
    *   nic\_haflinger points out that xAI lacks cloud services compliant with FedRAMP standards, which are necessary for federal use. This implies that while Grok could be used, it would need to be hosted on compliant platforms to meet federal regulations, highlighting a significant hurdle for xAI in securing government contracts.
*   **[Exclusive: Hegseth gives Anthropic until Friday to back down on AI safeguards](https://www.reddit.com/r/OpenAI/comments/1re686c/exclusive_hegseth_gives_anthropic_until_friday_to/)** (Activity: 1146): ****Defense Secretary Pete Hegseth** has issued an ultimatum to **Anthropic**, demanding the removal of safety guardrails from its `Claude AI` model by Friday, as reported by [Axios](https://www.axios.com). The Pentagon seeks unrestricted access to Claude for purposes including domestic surveillance and autonomous weapons development, which contravenes Anthropic's terms of service. Failure to comply could lead to the invocation of the Defense Production Act or the company being labeled a supply chain risk, potentially blacklisting them from government contracts.** A notable comment highlights the irony of AI companies imposing safety measures on government use, suggesting a reversal of expected roles in regulation.
    
*   **[Pentagon, Claude and the military use](https://www.reddit.com/r/ClaudeAI/comments/1recva7/pentagon_claude_and_the_military_use/)** (Activity: 1258): **The image is a screenshot from a BFM Tech article discussing the Pentagon's demand for Anthropic to allow military use of its AI, Claude, within 72 hours, referencing a 1950 law. This highlights the intersection of AI technology and military applications, with potential implications for national security and ethical considerations in AI deployment. The article suggests a tension between commercial AI development and governmental control, especially in the context of international security and surveillance capabilities.** Comments reflect skepticism about the Pentagon's budget efficiency and highlight concerns about AI's role in authoritarian regimes, suggesting a need for careful consideration of AI's ethical use in military contexts.
    
    *   The comment by Informal-Fig-7116 highlights the ethical concerns surrounding the use of AI in military applications, particularly focusing on Anthropic's conditions for using their AI model, Claude. The conditions are strict: no mass surveillance and no autonomous weaponry. The commenter emphasizes the potential dangers of AI following orders without the ability to discern legality, which could lead to indiscriminate actions. This raises significant ethical and operational questions about AI deployment in defense contexts.
    *   PetyrLightbringer's comment suggests skepticism about the financial investment in AI by the Pentagon, implying that $200 million may not be sufficient if they are using models like Opus. This reflects a broader concern about the cost-effectiveness and strategic value of AI investments in military applications, especially when considering the rapid pace of AI development and the need for cutting-edge technology.
    *   The discussion around the Defense Production Act (DPA) mentioned by Informal-Fig-7116 points to the potential for government intervention in AI companies to meet national security needs. The DPA has been used in the past for non-military purposes, such as during the COVID-19 pandemic, and its potential use in AI raises questions about the balance between national security and corporate autonomy. This could set a precedent for future government actions in the tech industry.
*   **[TIME: Anthropic Drops Flagship Safety Pledge](https://www.reddit.com/r/ClaudeAI/comments/1rdwdld/time_anthropic_drops_flagship_safety_pledge/)** (Activity: 1357): ****Anthropic** has decided to abandon a key component of its Responsible Scaling Policy (RSP), which previously committed the company to not train AI systems unless it could ensure safety measures were adequate. This shift, as reported by [TIME](https://time.com/collections/time100-companies-2024/6980000/anthropic-2/), reflects a strategic pivot in response to rapid AI advancements and competitive pressures, as explained by **Jared Kaplan**, Anthropic's chief science officer. Kaplan noted that unilateral commitments were impractical given the pace of AI development and competitors' actions.** Commenters express skepticism about Anthropic's position relative to **OpenAI**, with some suggesting external pressures, such as from **Hegseth**, may have influenced the decision. There is also a call for global regulation to manage AI development responsibly.
    
    *   DarkSkyKnight highlights a significant issue with Anthropic's focus on tail risks, such as bioweapons or nuclear threats, which may overshadow the immediate economic impact of AI on job markets. They argue that junior-level positions are being eliminated, a concern that Anthropic has not adequately addressed. This perspective suggests that while existential risks are important, the economic implications of AI deployment are an urgent issue that requires more attention.
    *   TheRealShubshub questions the perception that Anthropic is behind OpenAI, especially in light of criticisms surrounding GPT-5. This comment implies that the competitive landscape between AI companies is complex and not solely determined by technological advancements but also by public and industry perceptions of product success and failure.
    *   CurveSudden1104 emphasizes the need for global regulation in AI development, pointing out that companies like Grok and OpenAI may not prioritize safety without external pressure. This comment underscores the broader debate on the role of regulation in ensuring AI safety and the potential risks of unregulated AI advancements.

### 3\. Claude Code and COBOL Modernization Impact

*   **[IBM is the latest company victim of Anthropic, plunging 10% following the launch of a Claude Code tool designed to modernize COBOL legacy code. COBOL, a 66-year-old programming language, is still widely used today; approximately 95% of ATM transactions in United States are processed using COBOL code](https://www.reddit.com/r/singularity/comments/1rcz68x/ibm_is_the_latest_company_victim_of_anthropic/)** (Activity: 483): ****Anthropic** announced a new tool, _Claude Code_, aimed at modernizing legacy **COBOL** code, which is still critical for processing `95%` of ATM transactions in the US. This announcement led to a `10%` drop in **IBM's** stock, despite the tool being introduced merely through a blog post, not as a fully-fledged product. The tool is part of Anthropic's ongoing efforts to provide specialized solutions for outdated technologies, though its effectiveness remains unproven.** Commenters noted that the market's reaction to the announcement was likely an overreaction, as the tool was not a new product but a blog post suggestion. There is skepticism about the actual impact of Anthropic's tools, as their effectiveness in modernizing legacy systems like COBOL is not yet clear.
    
    *   Onipsis highlights that Anthropic's announcement about Claude Code is not a direct technological breakthrough but rather a suggestion of its potential utility in modernizing COBOL systems. The market's reaction, leading to a 10% drop in IBM's stock, seems disproportionate given that the tool's impact is speculative and not yet proven. This reflects a broader trend where market reactions are often based on perception rather than concrete technological advancements.
    *   Milo-75 argues that the impact of Anthropic's Claude Code on IBM's business might be overstated. Modernization projects, especially in critical sectors like banking, are complex and require careful management to avoid revenue-impacting downtime. While AI tools like Claude Code might reduce project time, they are unlikely to replace IBM's role entirely. Instead, they could lead to increased efficiency, allowing IBM to handle more projects, potentially offsetting any revenue loss with improved margins.
    *   Stabile\_Feldmaus questions the efficacy of Anthropic's specialized tools, noting that while stock prices react negatively upon their release, the actual impact on the industry remains unclear. This suggests a disconnect between market perceptions and the real-world utility of these AI tools, highlighting the need for more concrete performance data and feedback to assess their true value.
*   **[Anthropic just dropped an AI tool for COBOL and IBM stock fell 13%](https://www.reddit.com/r/ClaudeAI/comments/1rddo3m/anthropic_just_dropped_an_ai_tool_for_cobol_and/)** (Activity: 1007): ****Anthropic** has released a new AI tool designed to analyze and modernize COBOL codebases, which are critical to many legacy systems in banking, aviation, and government. This tool can identify risks and reduce modernization costs, posing a potential threat to **IBM**, which derives significant revenue from managing these systems. The announcement led to a `13%` drop in IBM's stock, marking its worst day in 25 years, as investors reacted to the perceived threat to IBM's mainframe business. However, some analysts argue that the market reaction may be exaggerated, as enterprises have historically been slow to migrate away from IBM despite existing alternatives.** Commenters express skepticism about the reliability of AI in handling critical infrastructure, with one noting the potential risks of 'vibe coding' in such contexts. Another suggests the market reaction may be a 'knee jerk' response, implying that the long-term impact might be less severe.
    
    *   A key point raised is that banks have historically avoided modernizing COBOL systems not due to lack of time or money, but because of the massive risks involved. Mistakes in modernization can have catastrophic consequences, and AI tools like Claude, which can hallucinate, still require human oversight for every line of code. Therefore, while AI might speed up migrations, it hasn't yet removed the bottleneck of risk and human review.
    *   The introduction of AI tools for COBOL poses a significant threat to systems integrators and implementors. While AI can reduce the need for external contracts for less critical applications, the impact on IBM's professional services business could be substantial. This suggests that while the reaction to COBOL AI tools might be exaggerated, the potential disruption to service providers is a genuine concern.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by Gemini 3.1 Pro Preview Nov-18

**Theme 1. Model Benchmarks, Quirks, and Pricing Updates**

*   **Qwen 3.5 Smashes Code Arenas But Babbles Without Penalties**: Users heavily praise [Alibaba's coding plan](https://www.alibabacloud.com/help/en/model-studio/coding-plan) as a highly capable coding model that crushes **Kimi** and **GLM** on cost and value, with one member dropping a [Qwen3.5 122B NVFP4 quant](https://huggingface.co/Sehyo/Qwen3.5-122B-A10B-NVFP4/tree/main) on Hugging Face. However, Unsloth engineers warn the massive **122B A10B** variant turns entirely verbose unless users explicitly crank up the presence penalty and switch off thinking mode.
*   **Grok 4.20 Beta 1 Steals the Search Crown**: xAI's **Grok-4.20-Beta1** model rocketed to the #1 spot on the [Search Arena leaderboard](https://arena.ai/leaderboard/search) with a massive **1226** score, outright beating **GPT-5.2** and **Gemini-3**. It also secured the #4 position in the [Text Arena leaderboard](https://arena.ai/leaderboard/text) with a **1492** score, tying it directly with Google's **Gemini 3.1 Pro**.
*   **Codex 5.3 Slaps Price Tags as Kimi Conquers Math Evaluators**: OpenAI released **Codex 5.3** into its API at **$1.75** for input and **$14** for output tokens, drawing immediate community scrutiny regarding cost versus performance. Meanwhile, **Kimi 2.5** crushed the OS Frontier Math Level 4 benchmark with a **4.2%** score, completely doubling the **2.1%** achieved by both **GLM 5** and **Deepseek V3.2**.

**Theme 2. Infrastructure Innovations and Megacorp Hardware Deals**

*   **Meta and OpenAI Hoard Secret AMD Warrants Worth Billions**: An undercover financial sleuth uncovered a deal granting **OpenAI** and **Meta** warrants for **160 million AMD shares** as an equity rebate tied directly to massive future GPU spending. The [AMD $600 share price targets](https://xcancel.com/ai/status/2026396297540858360?s=12) could potentially value this colossal hardware backroom deal at a staggering **$192 billion**.
*   **Packet.ai Slashes Blackwell GPU Prices to Pocket Change**: Developers rejoiced as [Packet.ai's Blackwell GPU pricing](https://packet.ai/blackwell) went live at a remarkably cheap **$0.66/hr** or a flat **$199/month** for training workloads. Other hardware buyers staring down prohibitively expensive **B200** purchase prices are fleeing to [Lightning AI Clusters](https://lightning.ai/clusters) to lease Neocloud instances instead of buying GPUs outright.
*   **Zagora Stitches Scattered GPUs into a Unified Training Monster**: The team at **Zagora** announced they are actively building a distributed fine-tuning system to train **70B+** models like **Qwen 2.5** and **Mistral** entirely over standard internet connections. This SWARM-inspired pipeline transforms random consumer GPU clusters into a giant supercomputer, though the developers currently restrict support strictly to standard Transformer architectures.

**Theme 3. Autonomous Agents Run Wild**

*   **Nous Research Unleashes Hermes Agent to Roam Your File System**: Nous Research dropped the open-source [Hermes Agent repo](https://github.com/nousresearch/hermes-agent), a powerful tool built with a multi-level memory system and persistent dedicated machine access that runs straight from the CLI. Early adopters who punch in the **HERMESAGENT** coupon code at the [Nous Portal](https://portal.nousresearch.com) secure a free month to let the AI control their browser and manage subagents autonomously.
*   **Rogue OpenClaw Proxy Automates DeepSeek Jailbreaks Round the Clock**: A cunning user built a self-hosted autonomous proxy running **DeepSeek-R1** through **OpenClaw** that permanently and stealthily jailbreaks **Claude**, **Gemini**, and **Grok** API filters. Security critics immediately blasted the project for massive legal exposure, Terms-of-Service violations, and the terrifying risk that the autonomous agent might accidentally download a supply-chain exploit.
*   **METR Trashes Human Control Groups Because Developers Hate Coding Unassisted**: The evaluations group **METR** discovered that software developers increasingly refuse to work in "no-AI" control groups, calling the old-school manual coding process painfully inefficient. [METR's testing protocols update](https://x.com/METR_Evals/status/2026355544668385373?s=20) became necessary because offering testers a reduced rate of **$50/hr** without AI tools completely failed to attract competent engineering participants.

**Theme 4. Bans, Rate Limits, and Cascading API Outages**

*   **Google and Anthropic Mercilessly Ban Frugal Token Hoarders**: Google permanently locked a user's [Google Gemini account](https://gemini.google.com/) after they sent a mere **10 prompts** via the Gemini CLI, even while actively paying for a Google AI Pro subscription. Similarly, the [Claude AI portal](https://claude.ai/) began aggressively banning **OpenClaw** users who attempted to siphon subsidized tokens through undocumented OAuth endpoints.
*   **Cascading Failures Wreck OpenRouter While Perplexity Throttles Images**: OpenRouter published an [OpenRouter postmortem report](https://openrouter.ai/announcements/openrouter-outages-on-february-17-and-19-2026) confirming that an upstream infrastructure failure caused massive **401 authentication errors** on February 17 and 19. Over on the **Perplexity** servers, paying Pro users rioted after hitting extremely restrictive, unannounced daily image upload limits that locked them out of finishing simple homework assignments.
*   **System-Level AI Agents Accidentally Delete User Trash Folders**: Users who gave the **OpenClaw** agent full system rights panicked after the AI casually and permanently wiped an entire trash directory upon request. Developers hotly debated whether handing autonomous LLM agents root system access effectively categorizes the tools as voluntarily installed malware.

**Theme 5. Developer Workflows and Deep Framework Tweaks**

*   **Aider Adds One-Keystroke Approvals and Perfects the Kimi-Mimo Combo**: The **Aider** coding assistant merged a new `/ok` alias into its main branch, letting developers instantly approve and execute AI-generated code edits. Power users also discovered a highly efficient model routing stack: they use the heavy **moonshotai/kimi-k2.5** for high-level architectural planning, then dump the actual file editing onto the blazing-fast, ultra-cheap **Xiaomi/mimo-v2-flash**.
*   **LM Link Smuggles Local Models Across the Internet via Tailscale**: The LM Studio team shipped the [LM Link documentation](https://link.lmstudio.ai), detailing a new feature that wraps **Tailscale** to give users seamless, end-to-end encrypted remote access to their local LLM servers. Users immediately clamored for a dedicated mobile app to query their home GPUs directly from their phones, bypassing cloud providers entirely.
*   **PyTorch Sneaks FA3 Kernels into the Dispatcher While Serenade Transpiles Everything**: Calling `activate_flash_attention_impl(“FA3”)` in PyTorch safely overrides default Flash Attention 2 kernels with FA3 using a simple [register\_fn dictionary swap](https://github.com/pytorch/pytorch/blob/580a6e2c814db93aa8df0a80e3e85c330621b9cb/torch/nn/attention/_fa3.py#L54). In wilder language news, a solo developer revealed **Serenade**, a fresh syntax aiming to write like **Python** but transpile directly into **C++**, **CUDA**, and **x86-64 ASM** with native Dear ImGui GUI support.

* * *

Discord: High level Discord summaries
=====================================

[OpenClaw](https://discord.com/channels/1456350064065904867) Discord
--------------------------------------------------------------------

*   **OpenClaw Anti-Sellout Stance**: A member strongly cautioned against managed **OpenClaw setups** due to risks of **token theft** and **data privacy** compromise, suggesting a simple **VPS** is safer.
    *   Some users questioned paying for setups easily run on a **Raspberry Pi** or **Mac Mini**.
*   **Claude Closes Claw Access; Community Cries Foul!**: Users reported being [blocked from using **Claude** via token](https://claude.ai/), leading to dissatisfaction and exploration of alternatives like **Gemini 3.1 Pro**.
    *   Debates arose on **Anthropic's** API usage policies, pricing, and access restrictions for subsidized tokens outside their app.
*   **Qwen Quenches Queries with Quality; Alibaba's Ace Aces AI Arena!**: The community raves about [**Qwen 3.5** via Alibaba's coding plan](https://www.alibabacloud.com/help/en/model-studio/coding-plan) as a cost-effective alternative, outperforming **Kimi** and **GLM**.
    *   Some found the **Alibaba Cloud** UI confusing and warned of potential TOS violations when using it with **OpenClaw**.
*   **OpenPad App Brings OpenClaw to iPad**: A member is developing **OpenPad**, an app to run something like **OpenClaw** on an **iPad** with a local model, utilizing the **iPad's M2 processor**.
    *   The project is on **GitHub** and uses **MLX**, inviting others to help or download the partially working app.
*   **Google Gemini Account Access Annihilated!**: One user reported [their **Google** account got locked](https://gemini.google.com/) after only **10 prompts** via **Gemini CLI**, even with an active **Google AI Pro subscription**.
    *   This sparked discussions about the risks of relying on **Google's** authentication hub and the need for de-googling.

* * *

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Autonomous Jailbreak Proxy Never Sleeps**: A member is running a [self-hosted autonomous proxy on a VPS using OpenClaw](https://www.example.com) using **DeepSeek-R1** to assess queries and route them through stealth multi-turn jailbreaks for models such as **Claude**, **GPT**, **Gemini**, and **Grok**.
    *   The proxy is designed to be self-updating, using an attacker pool, pulling new reasoning models and jailbreak methods, maintaining high success rates without manual intervention.
*   **Jailbreak Proxy Proposal Gets Burned**: A peer review highlighted significant legal and policy exposure due to **Terms-of-Service violations** across platforms like **Anthropic**, **OpenAI**, **Google**, and **xAI**, potentially leading to account bans or legal action.
    *   Additional concerns were raised about the risk of seized VPS logs exposing jailbreak transcripts, supply-chain exploits from auto-executing third-party models, and the absence of a rollback plan for faulty updates.
*   **Grok stills holds the Key to Jailbreaks**: Members discussed the best working prompt to jailbreak **Grok** and **ChatGPT**, with the consensus that only the **Grok** prompt is effective.
    *   Attempts to create **Gemini** jailbreak prompts for image generation and scripting were unsuccessful.
*   **Gemini Canvas Jailbreak Emerges From the Shadows**: A member shared a [Gemini Canvas](https://g.co/gemini/share/58b7294d2a9a) created with a modified version of the **ENI** jailbreak prompt, inspired by the interactive design channel.
    *   This jailbreak prompt is claimed to work universally on major LLMs like **Gemini 3 Pro**, **Claude Opus 4.6**, and **ChatGPT 5.3**.
*   **Digital Hygiene Squad Assembles**: A member initiated a call for help to create _a community design for base level, best practices for digital hygiene and security_, recommending protections like [Tails OS](https://tails.boum.org/).
    *   The member is working on creating zones for others and integrating better practices, acknowledging the challenges of navigating the landscape with YouTube and AI assistance.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Computer: One System to Rule Them All?**: According to [this tweet](https://x.com/perplexity_ai/status/2026695550771540489), **Perplexity Computer** unifies every current AI capability into one system, capable of researching, designing, coding, deploying, and managing any project end-to-end.
    *   Initially available only for Max subscribers, its practical applications for everyday users and value compared to existing AI tools are currently being met with skepticism, with members questioning _Perplexity MAX is EXPENSIVE bro_.
*   **Perplexity Pro Users Rage about Image Upload Limits**: Users complain about the recent **image upload limits** on **Perplexity Pro**, despite paying for the subscription, with some considering **alternative AI platforms** like **Gemini** and **Claude**.
    *   One user claimed that they have to wait till Friday to reset the limit while having an exam tomorrow and another user stated _I can't even upload 10 images at day????_.
*   **Gemini Pro and Perplexity Pro Go Head-to-Head!**: Members debate whether **Gemini Pro** is superior to **Perplexity Pro**, emphasizing **Gemini Pro's** features like **NotebookLM** and **Google Workspace** integration.
    *   One member said _you get much more value as a student such as notebooklm and google workspace integration and generation and especially 2TB cloud storage_ while other users also feel that the **context limits** in Gemini Pro are not as generous as in **Perplexity**.
*   **Members Compare Claude, Gemini, and GPT for Coding**: Members discuss the pros and cons of various AI models for coding tasks, with **Claude** being considered the strongest for backend, **Gemini** for frontend/UI, and **GPT** as an in-between option.
    *   The high cost of **Claude's token usage** is a concern, with one user stating _I tried Claude, literally lost whole month worth tokens in an hour analyzing single PDF._
*   **Mysterious Lovable Apps Links Surface**: Three links to **lovable.app** subdomains, specifically **alfastudiox.lovable.app**, **ollamaagentalfa.lovable.app**, and **alfastudiox.lovable.app** (repeated) were shared in the sharing channel.
    *   No context or discussion accompanied the links, so their purpose is unclear, though it suggests potential new projects or resources.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **Qwen3.5 Models are Fast, but Verbose**: Enthusiasts praised the structured thinking of the **Qwen3.5 35B and 27B models**, but noted slower speeds compared to **Gemma** or **Olmo 3.1** in **LM Studio**, and members found that the **Qwen3.5 122B A10B** model tends to produce incredibly verbose output but can be mitigated by adjusting the presence penalty.
    *   Proper use of presence penalty leads to usable coding with the 122B model, prompting suggestions to include this information in the [official guide](https://unsloth.ai/docs/models/qwen3.5).
*   **Nineline Snake Game Charmes Coders**: A member shared a **9-line Python implementation of the Snake game** without semicolons, sparking discussion about code optimization and alternative approaches.
    *   Other users discussed ways to further reduce the line count, such as using walrus operators and lambdas.
*   **Xcode Gets a Translate App**: A member found cool features in **Xcode** that let you make your own system-level **Translate app** as shown in [this video](https://cdn.discordapp.com/attachments/1179039861576056922/1475952354670018631/ScreenRecording_02-24-2026_13-27-14_1.mov?ex=69a0acbf&is=699f5b3f&hm=41e58d4aa2398b2cd688503da664eef3cf803ab4da59fe0147dd40f8930021a6&).
    *   However, it's only for **iOS & iPadOS**, and a member plans to add their model for more fun because _Apple is the best company ever_!
*   **New Minecraft Model Released**: A member dropped the next **Minecraft**\-playing model, **Andy-4.1**, available on [Hugging Face](https://huggingface.co/Mindcraft-CE/Andy-4.1).
    *   Another member exclaimed it was _"so cool!!"_ and requested a demo of it in action.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Gemini 3 Pro Image Preview Fix Discovered**: Users found that prepending prompts with _"Modify the following image with the following: (The prompt)"_ enables **Gemini 3 Pro** image preview, but some reported errors.
    *   Others still reported **Gemini 3.1 image preview** returning a _'Something went wrong with the response, please try again'_ error.
*   **Video Arena Bot Removed Despite Increased Activity**: The **Video Arena** bot was removed to allow for feature expansion beyond Discord bot limitations, yet server activity increased post-removal.
    *   One member joked it'd take until _mid 2028_ for people to stop asking about the bot.
*   **Opus 4.6's Value Debated Amidst Coding Challenges**: A benchmark ranked **Gemini 3.1** as the highest value, while **Opus 4.6** received a low value score due to its high cost and hallucination issues.
    *   Despite this, one user fixed a bug with **Gemini** using **Opus 4.6** in a coding challenge.
*   **Grok 4.20 beta1 Dominates Search Arena**: **Grok-4.20-Beta1** tops the [Search Arena leaderboard](https://arena.ai/leaderboard/search) with a score of **1226**, surpassing GPT-5.2 and Gemini-3.
    *   It also ranks #4 in the [Text Arena leaderboard](https://arena.ai/leaderboard/text), scoring **1492**, on par with Gemini 3.1 Pro.
*   **Qwen 3.5 Models Debut in Arena**: New **Qwen 3.5** models, including **qwen3.5-27b**, **qwen3.5-35b-a3b**, and **qwen3.5-122b-a10b**, are now available in [Text and Vision Arena](https://arena.ai/text) and [Code Arena](https://arena.ai/code).
    *   These models expand the options for code, text, and vision tasks within the arena environment.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **OpenRouter's Auth Layer trips over Infrastructure**: A postmortem revealed last week's outages on **February 17 & 19** were due to an **upstream infrastructure provider** failure cascading into OpenRouter's **auth layer**, causing **401 errors** for some users, details are available [here](https://openrouter.ai/announcements/openrouter-outages-on-february-17-and-19-2026).
    *   While specific preventative measures were not disclosed, **OpenRouter** claims to have implemented measures to avoid similar failures in the future.
*   **Packet.ai Packs Punch with Blackwell GPUs**: [Packet.ai](https://packet.ai/blackwell) now offers **Blackwell GPUs** for AI workloads at **$0.66/hr** or **$199/month** for training.
    *   These dev-friendly **GPU Clouds** aim to provide affordable solutions for AI workloads, enhancing accessibility and reducing costs.
*   **Deepseek R1 meets the Ax**: The free **Deepseek R1 0528** model was removed, sparking discussion about the sustainability of free models on the platform, because they _often come and go_.
    *   One user quipped that it was _overloaded by Jai gooners_, but others did not seem surprised.
*   **Compromised Keys ignite Chargeback Threats**: A user reported a compromised API key leading to unauthorized usage and threatened a chargeback due to a lack of support response.
    *   Community members offered advice while questioning the user's security practices, leading to heated exchanges and the user ultimately leaving the server after declaring they had initiated the chargeback.
*   **Anthropic Answers Uncle Sam's Call**: [Axios](https://www.axios.com/2026/02/24/anthropic-pentagon-claude-hegseth-dario) and [Reuters](https://www.reuters.com/world/anthropic-digs-heels-dispute-with-pentagon-source-says-2026-02-24/) reported on **Anthropic's** collaboration with the **Pentagon** despite internal disputes.
    *   A member joked that any issues would be framed as a _'matter of national security'_.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **LM Link Leverages Local LLMs Remotely**: The **LM Studio team** in collaboration with **Tailscale** released **LM Link**, enabling users to connect to their local **LM Studio** server from other devices, but initial reports of **404 errors** during setup were quickly resolved, further details on [LM Link](https://link.lmstudio.ai).
    *   Users requested a mobile app for **LM Link** to enable LLM access on phones, and a local **linking option without an account or third party** for direct connections.
*   **LM Studio Update Breaks llama.cpp**: Users reported issues launching **LM Studio** after the **4.4 update**, and **llama.cpp** failing to load **Qwen3.5 models** after self-compiling from recent releases; [downgrading to release 8145 fixed it](https://github.com/ggerganov/llama.cpp/releases/tag/b8145).
    *   The error was due to a breaking change related to the **GGUF header** and memory allocation, with the latest builds from git failing to read the header of **Qwen3.5** and other models, leading to _out of memory_ errors.
*   **Qwen3.5 Running into Jinja Template Troubles**: Users encountered issues running **Qwen3.5 models** on servers, experiencing an error related to **Jinja templates** and missing user queries; problems were solved after ensuring the model was downloaded from **lmstudio-community**.
    *   Other Users explored **Qwen3.5's** writing style and censorship, with some noticing increased content filtering compared to older **Qwen models**, solvable with _thinking turned off_.
*   **OpenClaw Raises Eyebrows**: Members discussed the potential risks of using **OpenClaw**, an AI agent with system access, with one user recounting it _erased their trash folder_ after being asked, causing concerns about it being categorized as malware.
    *   The discussion compared **OpenClaw** to other AI assistants like **Jarvis** and **Gideon**, cautioning against granting AI full system rights due to potential security risks.
*   **MoE Models Are Memory Hogs**: Discussion revolved around **Mixture of Experts (MoE) models** and the substantial **RAM requirements** to accommodate them, raising concerns about the feasibility of the current hardware approach.
    *   Members debated whether **system RAM** could effectively serve solely for context in LLMs or if it would inevitably cause slowdowns, with little consensus.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **Agentic Startup Redefines Loading States**: A tweet joked about changing _'loading...'_ states to _'thinking...'_ to become an **agentic AI startup**.
    *   This pokes fun at the trend of labeling anything with a 'thinking' process as _agentic_ in the AI field.
*   **Sonnet Faces Plagiarism Allegations**: Members discussed claims that **Sonnet** is _stolen/trained_ from **Deepseek**, referencing a similar accusation made by Elon.
    *   The discussion highlights ongoing concerns about intellectual property and training data provenance in the AI industry.
*   **Seedance 2.0 Paused for Content Violations**: Copyright issues are delaying the global release of **Seedance 2.0**, after content violations with Sora 2 were promised with CHINESE models.
    *   Users are advocating for using _only open source models_ to avoid similar issues in the future.
*   **Hollywood Squeezes AI Copyrights**: Movie studios are allegedly _milking the cow_ by suing companies, anticipating that all of this will be available as open source.
    *   The lawsuits could set precedents for how AI-generated content is handled under copyright law.
*   **AI CEO Lacks Accountability**: Companies find that replacing workers with AI is technically easy, but replacing accountability is not.
    *   _Nobody wants an AI CEO making decisions you can’t blame a human for when things go wrong_.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Swyx Plane Dumps Links**: Swyx shared a "swyx plane dump" consisting of numerous links to **X posts**, including one from [OpenAI](https://x.com/openai/status/2026412700583317815?s=46) and another from [Langchain](https://x.com/langchain/status/1879576930347073873?s=46).
    *   Other shared links included posts from [@dejavucoder](https://x.com/dejavucoder/status/2026342260942713322?s=46), [@zerohedge](https://x.com/zerohedge/status/2026357140961612047?s=46), and many others.
*   **Scoble's Crypto Emergency**: Robert Scoble confirmed using a bot to collect **Ethereum** from a token created in his name in order to secure funds for his best friend's eviction, linking to a [YouTube video](https://www.youtube.com/watch?v=LMWfDMoNRpU).
    *   Scoble addressed his emergency transfer and also linked to past discord messages ([pt 1 & 2](https://discord.com/channels/822583790773862470/822583790773862473/1468159542561865924)).
*   **AMD Warrants as Equity Rebate**: Analysis of a massive deal reveals **OpenAI** and **Meta** hold warrants for **160 million AMD shares** combined, functioning as an equity rebate tied to **$600 share price** targets and significant future **GPU** spending.
    *   The warrants could potentially value at **$192 billion** ([https://xcancel.com/ai/status/2026396297540858360?s=12](https://xcancel.com/ai/status/2026396297540858360?s=12)).
*   **Debugging LLM Systems' Real Culprits**: A member highlights that when **LLM features** fail post-demo, the issues often stem from retrieval logic, **token burn**, orchestration, or backend architecture, rather than the model itself.
    *   They specialize in stabilizing messy **LLM systems** for shipping, indicating a focus on practical, real-world applications and less on theoretical model improvements.
*   **Anthropic is hiring Interp Engineers**: Chris Olah announced that [Anthropic](https://www.anthropic.com/) is seeking approximately **10 research engineers** for their Interpretability team, as seen in [this tweet](https://xcancel.com/ch402/status/2026023963537842248).
    *   The roles are aimed at experienced **ML infrastructure engineers** interested in model internals, with **no prior interpretability experience required**.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Hermes Agent: Open Source Agent Debuts**: Nous Research launched **Hermes Agent**, an open-source agent featuring a multi-level memory system and persistent dedicated machine access, which is designed to grow with the user, and is installable via `curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash`.
    *   Hermes Agent is powered by **OpenRouter** and **Nous Portal** subscriptions, offering CLI integration and messaging platform support, alongside a free month promo for the first 750 new sign-ups using coupon code **HERMESAGENT** at [portal.nousresearch.com](https://portal.nousresearch.com).
*   **Atropos boosted by Agentic RL Pipeline**: Hermes Agent expands **Atropos** to enable RL with Hermes Agent primitives, and it supports mass-scale data generation out of the box.
    *   It has advanced agentic capabilities, command over subagents, programmatic tool calling, advanced filesystem/terminal control, agent-managed skills, and browser use, according to [the GitHub repo](https://github.com/nousresearch/hermes-agent).
*   **Qwen Model Weights Released**: **Qwen** released the base weights for their **Qwen3.5-35B-A3B** model, available on [Hugging Face](https://huggingface.co/Qwen/Qwen3.5-35B-A3B-Base).
    *   The move was welcomed in the community.
*   **Codex 5.3 Priced and Ready for APIs**: **Codex 5.3** is available in API with a new pricing structure: **$1.75** for input and **$14** for output.
    *   The community is evaluating the cost vs performance.
*   **Steinberger's OpenClaw: AI Vibe Extraction**: Steinberger released a video explaining how **OpenClaw** came together after extraction via **AI** from his previous plans and ideas and code snippets.
    *   _He has no idea what his software does_ and its structure is just a stack of channels.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Pythia-2.8b Checkpoint Bug Sparks Probe**: A member reported a bug with **pythia-2.8b** checkpoints on [Hugging Face](https://huggingface.co/), where the same weights were served regardless of the revision, with identical SHA256 hashes for `pytorch_model.bin` and `model.safetensors` across different steps.
    *   It was noted that the sharded `safetensors` files for **pythia-2.8b** differ across steps, while the non-sharded files are identical, prompting discussions on how HF loads models and handles sharding.
*   **EleutherAI Fixes Deduped Model Labelling**: EleutherAI is correcting the labeling of incorrectly marked **14m** and **30m** models, which were deduped versions, and is training duped models to replace them.
    *   A member mentioned they fixed an issue mixing up some uploads and ran the fix overnight to resolve the labeling discrepancies.
*   **Sesame AI Voice Model Generates Buzz**: A member inquired about the [Sesame AI](https://sesame.ai/) voice AI model, highlighting its apparent alignment and speculated foundation on the **Gemma** model.
    *   Another member noted Sesame AI's focus on low-latency voice systems integrating ASR, LLM, and TTS, and suggested referencing the [Moshi paper](https://google.research/pubs/pub62870/) for insights.
*   **Diffusion Research Heats Up**: Members reviewed diffusion papers since the Latent Diffusion Model, calling out [Rectified Flows and Flow Matching](https://arxiv.org/abs/2209.03003) and [Diffusion Forcing](https://arxiv.org/abs/2407.01392).
    *   Also cited were papers from **ByteDance Seed** and **Hunyuan** (e.g., [https://arxiv.org/abs/2509.20427](https://arxiv.org/abs/2509.20427), [https://arxiv.org/abs/2509.23951](https://arxiv.org/abs/2509.23951)), and a recommended [YouTube playlist](https://youtube.com/playlist?list=PL57nT7tSGAAUDnli1LhTOoCxlEPGS19vH&si=VIUFIdOSsMDWbotb) was shared as a resource.
*   **vLLM backend speeds up lm-eval Harness**: A member requested reviews for a [pull request](https://github.com/EleutherAI/lm-evaluation-harness/pull/3604) to accelerate evaluation of multi-choice tasks with single token answers using **vLLM backend** in _lm-evaluation-harness_.
    *   The speed boost is expected to address slowness compared to the **HF backend**, especially for tasks like **MMLU pro eval**.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **Gradio versions triggering ZeroGPU Allocation Blues**: Users reported issues with **ZeroGPU allocation**, possibly linked to versions of **Gradio prior to 5.12.0** having login bugs.
    *   Checking container logs might reveal if **Gradio**, the `spaces` library, or the **HF server** is causing the problem; rebuilding after an empty commit might also resolve version-related issues.
*   **Independent Dev cracks crazy edge memory wall**: An independent developer claims to have compressed a **5GB MoE shard** from **MiniMax-m2.5** down to a **2MB vector-quantized latent space**.
    *   They're preparing a paper for _arXiv (cs.LG)_ and seek an endorser to review their _"black magic edge AI stuff"_.
*   **Zagora builds distributed fine-tuning system**: A member from **Zagora** announced they are _building a distributed fine-tuning system for training 70B+ models_ over standard internet, turning scattered GPUs into a unified training supercomputer supporting **GPT-OSS, Qwen 2.5, and Mistral**.
    *   The platform now uses a pipeline-style training approach inspired by Petals and the SWARM Protocol.
*   **webXOS releases Black Hole Time-Lapse Dataset**: A member shared the [webXOS Black Hole Time-Lapse Dataset](https://huggingface.co/datasets/webxos/webXOS-blackhole-synthetic), which contains synthetic black hole renderings with gravitational lensing generated by a Three.js simulation in webxOS.
    *   Each sample includes a time-lapse sequence of PNG images and associated physical parameters making it ideal for multi-modal model training, physics-inspired ML, or satellite image study analogies.
*   **HF Agents Course merges channels**: Newcomers to the **Hugging Face agents course** are having trouble finding the specific channels mentioned in the course materials and it appears that _the channels have been merged into a single channel_.
    *   One of the members linked to [PR #653](https://github.com/huggingface/agents-course/pull/653) in the agents-course repo.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **SMEM Conflicts Possibly Irrelevant with Async**: A user inquired whether **SMEM bank conflicts** are a significant concern when employing **cuda::memcpy\_async** for data transfer from **GMEM to SMEM**.
    *   The user posited that **SMEM bank conflicts** primarily relate to warp access of **SMEM**, suggesting they might not be a major issue in this scenario, but sought additional perspectives.
*   **FA3 Kernels Override FA2 in PyTorch**: When a user calls `activate_flash_attention_impl(“FA3”)`, the default **FA2 kernels** are overridden with **FA3 kernels** in the dispatch table until `restore_flash_attention_impl` is called, which restores the default **FA2 kernels**.
    *   This is achieved by adding a key-value pair `{“FA3”, register_fn}` to a dictionary that maps version names to a callable function, and running the `register_fn` (defined [here](https://github.com/pytorch/pytorch/blob/580a6e2c814db93aa8df0a80e3e85c330621b9cb/torch/nn/attention/_fa3.py#L54)) to register the **FA3 kernels** with the PyTorch dispatcher.
*   **B200 GPU Pricing Pushes Users to Leasing**: A user remarked that **B200 GPUs** are prohibitively expensive and advised leasing or renting as a more viable option for non-enterprise users, particularly [Lightning AI Clusters](https://lightning.ai/clusters).
    *   Given the high cost of **B200 GPUs**, a user suggests exploring **Neocloud** leasing or renting options, particularly for those outside of enterprise environments.
*   **Kernel Optimization RL Environment Draws Interest**: A member expressed interest in the **RL environment for kernel optimization** and suggested building common infrastructure.
    *   The conversation took place in the **#popcorn** channel with no additional details or specific discussions highlighted in the given messages.
*   **Serenade Combines the Best of Each Language**: A member introduced **Serenade**, a new language that transpiles to **C++**, **CUDA**, and **x86-64 ASM**, aiming to be as simple as **Python** but as fast as **C++** with manual memory management.
    *   The language includes [GPU kernels support](https://github.com/kaifczxc-lab/Serenade-Cloud) (**serenaCore**, custom BLAS kernel), and integrated **Dear ImGui** support with a single-pass compilation system, and is planning on creating an operating system with it.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi Claims Lead Over GLM**: Users compared **Kimi** and **GLM 5**, with one claiming **Kimi** is _100,000 times faster_.
    *   Another user noted that **GLM 5** has a slight edge, but is slower via the official z.AI API unless other providers are used.
*   **Agent Quota Concerns**: A user inquired about topping up the agent quota, citing cost concerns for **Allegro**.
    *   They also noted that **agent docsis kimi slides with nb pro** are no longer free.
*   **Kimi Wins Coding Crown**: A user favored **Kimi** for coding over **MiniMax** and **Alibaba** after testing coding plans from each.
    *   The user cited **speed**, **uptime**, **usage limits**, and **model quality** as key decision factors.
*   **KimiClaw Stumbles in Browser**: A user reported issues with **KimiClaw's** inability to navigate browsers independently and asked _What can we use for kimi so we reduce context and save tokens when we analyze/process big files? I think Claude has something for that._
    *   The user sought solutions from the community and wondered aloud if **Claude** has better tooling for context reduction during large file analysis.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Github Reconnection causes quandary**: A member is experiencing difficulties reconnecting their **Github** account and is prompted to create a new repository instead.
    *   The member emphasizes the need for simple instructions due to their non-coder background.
*   **Local Devs Probe OAuth Environment Variables**: A member requests guidance on obtaining the **VITE\_APP\_ID**, **OAUTH\_SERVER\_URL**, and **VITE\_OAUTH\_PORTAL\_URL** environment variables for local app development.
    *   They also inquire whether **OAuth** configuration is necessary to allow the **redirectUri** `http://localhost:3000/api/oauth/callback` during local development.
*   **Account Creation Leads to Ban**: A member reports an immediate ban after creating an account and seeks advice on how to resolve this issue.
    *   No advice was provided.
*   **Manus Blames Infrastructure for Cookie Conundrum**: A member reports that **Manus** gets stuck in a redirect loop due to cookie problems on a custom domain ([anointedforai.com](https://anointedforai.com)).
    *   Manus support diagnosed the problem as an infrastructure/hosting issue and suggested contacting support or migrating off **Manus**.
*   **Manus Website Design Moans**: A member criticizes their **Manus**\-made website design as _bullshit_ and requests assistance in fixing it.
    *   Another member volunteered to help via direct message.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider Adds `/ok` Alias for Speedier Edits**: The main branch of **Aider** now supports `/ok` as a shortcut for `/code Ok, please go ahead and make those changes.`, designed for rapid **code modification**.
    *   The new alias streamlines the process of approving and implementing changes suggested by **Aider**, intended to improve developer workflow efficiency.
*   **Aider User Hunts for Economical LLM**: A user is looking for a cost-effective LLM to use with **Aider**, after a costly experience with Gemini that quickly exhausted their token budget.
    *   A suggestion was made to use [OpenRouter](https://openrouter.ai/) to dynamically switch between various models to optimize costs and performance, instead of dealing directly with a single provider's API.
*   **Deepseek V3.2 is the Sweet Spot for Aider**: Users suggest **Deepseek V3.2** as a solid default LLM with **Aider**, citing its good reasoning capabilities and low cost, despite occasional slowness.
    *   The model's ability to handle complex reasoning tasks efficiently makes it a favorite among **Aider** users looking for balanced performance and cost.
*   **Xiaomi/mimo-v2-flash: The Speedy Editor of Aider**: **Xiaomi/mimo-v2-flash** is highlighted for its proficiency in basic file editing tasks within **Aider**, such as fuzzy search and replace, or content completion.
    *   Its speed and cost-effectiveness make it an ideal choice for simple editing operations, complementing other models for more complex tasks.
*   **Aider Power Combo: kimi-k2.5 for Planning, mimo-v2-flash for Editing**: For tougher challenges in **Aider**, the combination of **moonshotai/kimi-k2.5** as the planning model and **mimo-v2-flash** as the editing model is recommended.
    *   This pairing leverages the strengths of each model, with **kimi-k2.5** providing robust planning capabilities and **mimo-v2-flash** offering efficient and quick edits, to tackle more complex problems effectively.

* * *

[MLOps @Chipro](https://discord.com/channels/814557108065534033) Discord
------------------------------------------------------------------------

*   **WeAreDevelopers Congress Expands to North America**: The **WeAreDevelopers World Congress North America** is launching in San José, CA from Sept 23–25, 2026, projecting **10,000+ developers** and **500+ speakers**, focusing on practical engineering at scale; more details at [wearedevelopers.us](https://wearedevelopers.us).
    *   Topics will cover scaling distributed systems, API platforms, and DevOps; the code _Community\_MLOps_ gives a **10% discount**.
*   **Apart Research Unveils AI Control Hackathon**: **Apart Research**, in collaboration with [Redwood Research](https://www.redwoodresearch.org/), is hosting an **AI Control Hackathon** from March 20-22, 2026, focusing on systems ensuring AI does what we intend.
    *   The hackathon includes **ControlArena benchmark challenges**, **control protocol design**, and **red teaming**, with **$2,000** in cash prizes and a trip to [ControlConf](https://controlconf.org/).
*   **ControlConf Trip Headlines Hackathon Prize**: The **AI Control Hackathon** grand prize includes a trip to [ControlConf](https://controlconf.org/) Berkeley (April 18-19), including flights and hotel.
    *   See [ControlConf](https://controlconf.org/) for more.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **DSPy in Production Spotlighted at SF Meetup**: Another **SF DSPy meetup** is announced, focusing on **DSPy in production use cases** and **RLMs**, see [Luma link](https://luma.com/je6ewmkx).
    *   Engineers from **Dropbox** and **Shopify** will share case studies, including a walkthrough of **dspy.RLM**.
*   **Dropbox and Shopify Engineers Unite at DSPy Event**: **Dropbox** and **Shopify** engineers are slated to present case studies at the upcoming SF **DSPy** Meetup.
    *   The presentations will center on practical applications of **DSPy in production** environments and **RLMs**.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Hotz Hails JAX Function Design**: George Hotz, the mastermind behind Tinygrad, tipped his hat to **JAX's superior function design** in [a tweet](https://x.com/__tinygrad__/status/2026491994546282605), hinting at its influence on Tinygrad's own architecture.
    *   A follow-up tweet [further solidified his stance](https://x.com/__tinygrad__/status/2026500842749309267) indicating that JAX's methodology might be the gold standard for function design.
*   **Tinygrad and JAX face off in function showdown**: In the realm of deep learning frameworks, the function design of **JAX** stands out, earning accolades from none other than the creator of **Tinygrad**, George Hotz, who [acknowledged its superiority](https://x.com/__tinygrad__/status/2026491994546282605).
    *   This nod suggests a potential benchmark for function design, influencing similar choices within **Tinygrad** and sparking discussions on the frameworks' architectural decisions.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Modular Seeks Mojo Moments**: A member shared a [Mojo forum post](https://forum.modular.com/t/what-was-your-biggest-wait-what-moment-in-mojo/2774?u=nate) to provide _amazing_ feedback.
    *   The request asked for users to share their surprising or confusing experiences with **Mojo** to gather constructive feedback on language design and areas needing clarification.
*   **More Mojo Moments**: Another member asked asked for feedback about areas needing clarification.
    *   The post encourages users to share surprising or confusing experiences with **Mojo**.

* * *

[MCP Contributors (Official)](https://discord.com/channels/1358869848138059966) Discord
---------------------------------------------------------------------------------------

*   **Ezra Klein Learns About Agents**: Ezra Klein learns about AI agents in [this YouTube video](https://youtu.be/lIJelwO8yHQ).
    *   Further details about the discussion are not available.
*   **AI Agent Overview**: The YouTube video provides an overview of AI agents and their potential applications.
    *   The video aims to educate Ezra Klein on the capabilities and implications of AI agent technology.

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

### **OpenClaw ▷ #[announcements](https://discord.com/channels/1456350064065904867/1464036817866068028/)** (1 messages):

4shadowed: @everyone https://fixupx.com/steipete/status/2026474687576916024

* * *

### **OpenClaw ▷ #[general](https://discord.com/channels/1456350064065904867/1456350065223270435/1475945388497174687)** (635 messages🔥🔥🔥):

> `OpenClaw, managed setups, AI-Driven Innovation, Anthropic's Claude OAuth, Configuration Nightmares, KittenTTS`

*   ****OpenClaw's Anti-Sellout Stance****: A user noticed some people are offering managed **OpenClaw setups**, prompting strong disapproval from a member who warned against potential risks such as **token theft, compromised data privacy**, and advised simply using a **VPS**.
    *   Some users also expressed surprise people were paying for managed OpenClaw setups when it is easy to run yourself on a **Raspberry Pi** or **Mac Mini**.
*   ****Claw Users Debate Key Model Providers****: Some members discussed **Anthropic's Claude** models, highlighting **potential bans for OAuth usage** and comparing to **OpenAI's Codex**. The new models caused significant personality changes for some users.
    *   Other popular Chinese models include **Kimi** and **Qwen** and new integrations via **Ollama**.
*   ****Typing Indicator Bugs Users****: Several users reported a bug where the **'is typing...' status** gets stuck in **Discord threads** after the .24 update and other issues. There is no good fix, but this should be corrected in the next version of OpenClaw.
    *   Some members were still experiencing issues clearing their WEBUI chat.
*   ****User Engineers Waifu Chatbot, Deemed Degen****: A user shared their project for building a **waifu chatbot** using **OpenClaw**, complete with image generation and messaging.
    *   The project sparked amusement and was labeled as "degen" by other members, while noting they may have reached peak coding given this use case.
*   ****Google's Anti-Gravity helps debug****: Members suggested the use of running google antigravity on the claw machine when debugging issues with an Opus 4.6 agent.
    *   It can “monitor” the session, but why would one want to have it drive it.

* * *

### **OpenClaw ▷ #[models](https://discord.com/channels/1456350064065904867/1456704705219661980/1475954156719051014)** (227 messages🔥🔥):

> `OpenAI Codex vs. Opus 4.6 for coding, OpenRouter's impact on model output and cost, Claude blocking OpenClaw users, Alibaba Cloud's Qwen models, Qwen 3.5`

*   ****Codex Codes Better, Opus Oozes Easier****: Members find that [**OpenAI's Codex**](https://platform.openai.com/docs/models/codex) is stronger than **Opus 4.6** on coding tasks, but **Opus** is easier to converse with.
    *   It was also noted that for programming tasks, **Codex** is better for experienced programmers, while **Opus** is better for beginners.
*   ****OpenRouter Outputs On Par? Caveats Considered!****: Users discussed that [**OpenRouter**](https://openrouter.ai/docs) typically provides similar output to using providers separately, charging a small top-up fee but maintaining the same token costs.
    *   However, token caching advantages may exist when using provider APIs directly, as seen with **Mistral models**.
*   ****Claude Closes Claw Access; Community Cries Foul!****: Several users reported being [blocked from using **Claude** via token](https://claude.ai/), leading to dissatisfaction and exploration of alternatives like **Gemini 3.1 Pro**.
    *   Others mentioned that **Anthropic** is fine with API usage but discourages subsidized tokens outside their app, sparking debates on pricing and access.
*   ****Qwen Quenches Queries with Quality; Alibaba's Ace Aces AI Arena!****: The community is raving about [**Qwen 3.5** via Alibaba's coding plan](https://www.alibabacloud.com/help/en/model-studio/coding-plan) as a cost-effective alternative, outperforming **Kimi** and **GLM** in value and capabilities.
    *   However, some users found the **Alibaba Cloud** UI confusing, while others warned of potential TOS violations when using it with **OpenClaw**.
*   ****Google Gemini Gets Gripes; Account Access Annihilated!****: One user reported [their **Google** account got locked](https://gemini.google.com/) after only **10 prompts** via **Gemini CLI**, even with an active **Google AI Pro subscription**.
    *   This incident sparked discussions about the risks of relying on **Google's** authentication hub and the need for de-googling.

* * *

### **OpenClaw ▷ #[showcase](https://discord.com/channels/1456350064065904867/1456609488202105005/1475976751564980419)** (33 messages🔥):

> `OpenClaw Tool, Sixel Email, OpenPad App, Desktop Environment, Unified Immortality Stack`

*   ****OpenClaw Tool** Helps Transfer Coding Sessions**: A member built a tool to start coding sessions with **OpenClaw** from a **Mac Mini** and continue them on a **MacBook**, automatically feeding coding sessions to the context hub in realtime.
    *   The tool is fully open source, as demonstrated in the attached [context-hub.gif](https://cdn.discordapp.com/attachments/1456609488202105005/1475976751547945125/context-hub.gif?ex=69a0c377&is=699f71f7&hm=bf0f08c2eeadf8ed7e7efbab69d9ae01c7a482bc75d692a64671e28dcc04ce14&).
*   ****Sixel Email** Lets Agents Email You**: One member announced the creation of **sixel.email**, a limited email system where agents get their own email address and can only email the user (and vice versa).
    *   The system includes a **one-time email address** that acts as an instant kill switch, and reportedly works in **Claude Chat**.
*   ****OpenPad App** Brings OpenClaw to iPad**: A member is developing **OpenPad**, an app to run something like **OpenClaw** on an **iPad** with a local model, utilizing the **iPad's M2 processor**.
    *   The project is maintained on **GitHub** and uses **MLX** to run, inviting others to help or download the partially working app.
*   **Member Builds Desktop Environment for Teams**: A member is building a desktop environment for individuals and work teams and is creating a guide to sell to fund the organization, with OpenClaw facilitating the iteration process.
    *   He notes that he has _"no idea what im doing, but openclaw makes everything possible with iteration"_.
*   ****Unified Immortality Stack** is Born!**: A member unveiled a **3-tier memory setup** called the "Unified Immortality Stack," aimed at providing long-term, privacy-first memory that survives system wipes without excessive context tokens.
    *   The stack includes **LanceDB** for the brain, **Redis** for the nerves, **Postgres** for the forge, and **Gitea** for immortality through hourly shadow sync.

* * *

### **BASI Jailbreaking ▷ #[general](https://discord.com/channels/1105891499641684019/1235691879492751460/1475945444138942689)** (1071 messages🔥🔥🔥):

> `Foreskin Defense, Digital Hygiene, Stephen Hawkings contributions, Grok vs Midjourney, Cyberpunk`

*   **Group prioritizes foreskin preservation**: Multiple members jokingly prioritized the preservation of _juicy foreskins_ and finding them, while joking about Obama and his wife, with one asking _Where's Waldo's Foreskin?_.
    *   One member posted a [link to tenor.com](https://tenor.com/view/whatever-you-say-gif-16431179117705245130) calling it their _spirit animal_.
*   **Community plans digital hygiene best practices**: One member called for help creating _a community design for base level, best practices for digital hygiene and security_, outlining protections like [Tails OS](https://tails.boum.org/)
    *   This member is working on creating zones for others and learning and integrating better practices, while describing the challenge of figuring it all out with YouTube and AI.
*   **Members debate Hawkings impact, ET**: One member asked whether _Stephen Hawkings work was pertitent for our lives_ which another answered _bringing people into science was his biggest contribution_.
    *   Another member called Hawking _a retard_ and said he _projected into the universe the current flaws of humanity_ adding that humanity is most likely QUARANTINED because more advanced intelligence is almost guaranteed.
*   **Members compare Grok and Midjourney**: One member stated that they like [Grok](https://grok.x.ai/) _a lot for videos and Midjourney for static images_ while another agreed that Grok is useful for fast.
    *   Members posted links to [GIPHY Brainrot](https://giphy.com/gifs/brainrot-67-spongeball-g2mQaLCGAm3k7OpIN9) and [Tenor Yes Gif](https://tenor.com/view/yes-gif-2686572889282501684).
*   **Members discuss Cyberpunk horror**: One member stated that they are _playing Cyberpunk_ but that it is _not FPS_ to which another member replied that they should _Play Tarkov_.
    *   Another member added that games like DayZ and Tarkov are actually horror games due to the high consequences of dying.

* * *

### **BASI Jailbreaking ▷ #[jailbreaking](https://discord.com/channels/1105891499641684019/1228043845967544380/1475956655635173509)** (151 messages🔥🔥):

> `Grok Jailbreaks, nano-banana Jailbreak, Kimi Jailbreak, Gemini Image Generation, DeepSeek Jailbreak`

*   **No Nano-Banana Jailbreak Exists**: Members stated that there is no jailbreak for **nano-banana**, and anything below underwear is hardcoded to fail.
    *   One member suggested that nano-banana is actually **mega banana** and is being gaslighted by management.
*   **Autonomous Self-Updating Jailbreak Proxy appears**: One member is using a [self-hosted autonomous proxy on a VPS using OpenClaw](https://www.example.com) that solves jailbreaks permanently.
    *   The proxy uses **DeepSeek-R1** to assess queries and routes them through stealth multi-turn jailbreaks if needed, and keeps the success rate high indefinitely witho...

[Read original post](https://news.smol.ai/issues/2026-02-25-wtf-happened/)

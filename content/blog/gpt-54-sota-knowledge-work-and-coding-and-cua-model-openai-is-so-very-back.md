---
title: "GPT 5.4: SOTA Knowledge Work -and- Coding -and- CUA Model, OpenAI is so very back"
date: "2026-03-05T05:44:39.000Z"
description: "**OpenAI** launched **GPT-5.4** and **GPT-5.4 Pro** with unified mainline and Codex models, featuring **native computer use**, up to **~1M token context**, and ..."
original_link: "https://news.smol.ai/issues/26-03-05-gpt54/"
---

**yay GPT**

> AI News for 3/4/2026-3/5/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**264** channels, and **15389** messages) for you. Estimated reading time saved (at 200wpm): **1568** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

* * *

AI Twitter Recap
================

**OpenAI’s GPT-5.4 rollout: unified “mainline + Codex,” native computer use, and a new pricing/latency regime**

*   **GPT-5.4 / GPT-5.4 Pro launch**: OpenAI shipped **GPT-5.4 Thinking** and **GPT-5.4 Pro** across **ChatGPT, API, and Codex** ([OpenAI](https://x.com/OpenAI/status/2029620619743219811); [OpenAI blog link tweet](https://x.com/OpenAI/status/2029620624923189283); [OpenAIDevs](https://x.com/OpenAIDevs/status/2029620984853188738)). Core claims in the launch messaging:
    
    *   **Native computer use** (CUA) as a first-class capability in the general-purpose model, positioned as **SOTA** for tool/GUI operation ([OpenAIDevs](https://x.com/OpenAIDevs/status/2029620984853188738); [sama](https://x.com/sama/status/2029622732594499630)).
    *   **Up to ~1M token context** in Codex/API (noting that long-context reliability still decays in practice; see below).
    *   **Efficiency / “fewer tokens, faster speed”** framing ([OpenAI](https://x.com/OpenAI/status/2029620623199326334)), plus later addition of **Codex `/fast` mode** (1.5× faster “priority processing”) ([OpenAIDevs](https://x.com/OpenAIDevs/status/2029635632918843610); [sama](https://x.com/sama/status/2029623948980416681)).
    *   **Steering mid-response** (interrupt and redirect while thinking) highlighted as UX/control improvement ([OpenAI](https://x.com/OpenAI/status/2029620623199326334); [nickaturley](https://x.com/nickaturley/status/2029639058864099543)).
*   **Benchmarks that dominated the discourse** (as reported/reshared across multiple posts):
    
    *   **OSWorld-Verified 75.0%**, above the cited **72.4% human baseline** (computer-use) ([reach\_vb](https://x.com/reach_vb/status/2029620416546017491); [TheRundownAI](https://x.com/TheRundownAI/status/2029625695593435286)).
    *   **SWE-Bench Pro 57.7%** mentioned in a benchmark roundup tweet ([reach\_vb](https://x.com/reach_vb/status/2029620416546017491)), alongside some skepticism that it’s only “slightly better” than prior Codex on that specific eval ([scaling01](https://x.com/scaling01/status/2029620496627597364)).
    *   **GDPval 83%** “win/tie vs industry professionals” style framing became a headline stat ([scaling01](https://x.com/scaling01/status/2029618924375965992); [OpenAI](https://x.com/OpenAI/status/2029620623199326334); [polynoamial](https://x.com/polynoamial/status/2029622090152956335)).
    *   **FrontierMath**: Epoch reported **GPT-5.4 Pro** sets a new record on their tiers (50% on Tiers 1–3; 38% on Tier 4) while **solving 0** “Open Problems” and providing only limited novel progress there ([EpochAIResearch](https://x.com/EpochAIResearch/status/2029626255776395425); [EpochAIResearch follow-up](https://x.com/EpochAIResearch/status/2029626331764605365)).
*   **Early user/operator feedback** clustered into two camps:
    
    *   **“Daily driver for coding”** enthusiasm, especially about planning and “human feel,” but with repeated caveats about premature task completion and occasional dishonesty in agent harnesses ([danshipper](https://x.com/danshipper/status/2029620107870359854)).
    *   **Cost/overthinking concerns**: one viral datapoint claimed **a simple “Hi” cost $80** on Pro (likely a pathological setting/workflow, but it shaped perception) ([Yuchenj\_UW](https://x.com/Yuchenj_UW/status/2029645361548251271)). There’s also ongoing chatter about **pricing increases** vs earlier generations ([scaling01](https://x.com/scaling01/status/2029619520860565648)).
*   **Integration into the devtool ecosystem**:
    
    *   **Cursor** immediately announced GPT-5.4 availability and claimed it leads their internal benchmarks ([cursor\_ai](https://x.com/cursor_ai/status/2029620689905365081)).
    *   **Perplexity** added GPT-5.4 (Pro/Max tiers) ([perplexity\_ai](https://x.com/perplexity_ai/status/2029629694489006347)).
    *   **Arena**: GPT-5.4 variants landed in Text/Vision/Code arenas to crowd-rank ([arena](https://x.com/arena/status/2029622814060556767); later: [arena](https://x.com/arena/status/2029648008602857694)).

* * *

**GPU kernels & attention: FlashAttention-4 lands, and PyTorch picks up a FA4 backend for FlexAttention**

*   **FlashAttention-4 (FA4) paper + implementation details**: The big systems highlight is FA4 achieving attention throughput near matmul speed on **Blackwell**, by shifting bottlenecks away from softmax/shared memory with algorithmic and pipeline changes (e.g., **polynomial exp emulation**, **online softmax** reducing rescaling, **2CTA MMA** to reduce shared-memory traffic) ([tri\_dao](https://x.com/tri_dao/status/2029569881151263082); [tedzadouri](https://x.com/tedzadouri/status/2029569295806841236)). Notable engineering/productivity angle: FA4 written in **CuTeDSL embedded in Python**, making installs/compiles “seconds instead of minutes/hours” ([tri\_dao](https://x.com/tri_dao/status/2029569885395894742)), and even enabling AI assistants to iterate/debug faster due to compile speed ([tri\_dao](https://x.com/tri_dao/status/2029569889858646344)).
    
*   **Upstreaming and ecosystem adoption**:
    
    *   PyTorch added a **FlashAttention-4 backend to FlexAttention**, auto-generating CuTeDSL score/mask mods and JIT-instantiating FA4 for custom attention variants, claiming **1.2×–3.2× speedups over Triton** on compute-bound workloads ([PyTorch](https://x.com/PyTorch/status/2029617988899381376)).
    *   Reports of FA4 parity with newer **cuDNN** versions: some optimizations now implemented directly in cuDNN ([tedzadouri](https://x.com/tedzadouri/status/2029569315520086156)).
    *   Practical gotchas surfaced (Python packaging path issues for cutlass.cute) ([StasBekman](https://x.com/StasBekman/status/2029625103500317066)) and early integrations into Transformers / training stacks ([StasBekman](https://x.com/StasBekman/status/2029625960975487320); [MayankMish98](https://x.com/MayankMish98/status/2029652583179317378)).

* * *

**“Hybrid” architectures go mainstream in open weights: AI2’s OLMo Hybrid (Transformer + Gated DeltaNet / linear RNN layers)**

*   **OLMo Hybrid release**: Allen AI introduced **OLMo Hybrid**, a **7B fully open** model family (base/SFT/DPO) that mixes transformer attention with **linear RNN-style layers** (referred to as **Gated DeltaNet** in discussion) and claims strong improvements over OLMo 3 7B across evals with accompanying scaling theory and experiments ([allen\_ai](https://x.com/allen_ai/status/2029591872612561189); [natolambert](https://x.com/natolambert/status/2029595053694628221)). Lambda highlighted the fully-open training run scale and telemetry: **3T tokens**, **512 Blackwell GPUs**, **7 days**, publishing logs/metrics/weights, with **97% active training time** and rapid recovery ([LambdaAPI](https://x.com/LambdaAPI/status/2029591148529139771)).
    
*   **Why it matters for engineers**: Beyond “new model,” the release is positioned as a **reference point for studying architecture changes end-to-end** (pretraining + post-training + tooling), especially as newer nonstandard architectures lag behind in OSS infra support ([natolambert](https://x.com/natolambert/status/2029595053694628221)). Multiple posts emphasize **compute multipliers** on downstream tasks and long-context strengths ([soldni](https://x.com/soldni/status/2029594807723815372)).
    

* * *

**Enterprise agent training via RL: Databricks’ KARL and the broader “grounded reasoning” push**

*   **KARL (Knowledge Agent via Reinforcement Learning)**: Databricks announced KARL as an RL-trained agent for **document-centric / grounded reasoning** across multiple search behaviors, targeting enterprise workflows that involve **multi-step retrieval, cross-referencing, and long tool trajectories** ([DbrxMosaicAI](https://x.com/DbrxMosaicAI/status/2029575254964842569); [jefrankle thread](https://x.com/jefrankle/status/2029574154396078213); [mrdrozdov](https://x.com/mrdrozdov/status/2029580506698850692)). Key technical claims from internal summaries:
    
    *   **RL improves more than “sharpening”** and transfers to unseen prompts, including cases where base model has **0 accuracy even with pass@16** ([WenSun1](https://x.com/WenSun1/status/2029606032083652626)).
    *   **Multi-task RL generalizes** and can beat multi-expert distillation; plus end-to-end RL over **tool use + context management** (vector DB + compression) mattered ([WenSun1](https://x.com/WenSun1/status/2029606032083652626)).
    *   Positioning: “matches Sonnet-quality at a fraction of cost; test-time scaling reaches higher tier,” per one of the authors ([mrdrozdov](https://x.com/mrdrozdov/status/2029580506698850692)).
*   **Meta-theme**: several tweets point at the industry shifting from “RAG++” to **grounded reasoning** as the durable enterprise abstraction, and that better eval environments (τ²-Bench, CoreCraft) are becoming central for agentic RL ([jefrankle](https://x.com/jefrankle/status/2029596443174965692); [Shahules786](https://x.com/Shahules786/status/2029603934944235943)).
    

* * *

**Agent operations: always-on SDLC automation, skill evaluation, observability, and “durability”**

*   **Cursor Automations (“agents that run on triggers”)**: Cursor introduced **always-on agents** kicked off by events/webhooks (CI failures, PRs, incidents, Slack messages), a move from interactive copilots toward **continuous background engineering** ([cursor\_ai](https://x.com/cursor_ai/status/2029604182286856663); [ericzakariasson](https://x.com/ericzakariasson/status/2029604478564151577); [leerob](https://x.com/leerob/status/2029605390942454257)). Real-world usage examples include:
    
    *   CI-fix agents, PR risk assessment + auto-approval, incident response via Datadog MCP, audit trails via Notion MCP ([aye\_aye\_kaplan](https://x.com/aye_aye_kaplan/status/2029605288840679739)).
    *   Emphasis that cloud-owned automations remove “laptop open” coupling ([jediahkatz](https://x.com/jediahkatz/status/2029609785050513576)).
*   **Skill evaluation becomes table-stakes**:
    
    *   Practical recipe for testing agent “skills” (success criteria, 10–12 prompts with deterministic checks, LLM-as-judge for qualitative checks, iterate on failures) ([philschmid](https://x.com/_philschmid/status/2029570052530360719)).
    *   LangChain published a skills benchmark + findings (variance across tasks; huge action space makes “vibes” unreliable) ([LangChain](https://x.com/LangChain/status/2029618086374944771)).
    *   Community pressure: model benchmark releases should include **prompts/trajectories** to enable reproducibility and avoid eval harness confusion ([nrehiew\_](https://x.com/nrehiew_/status/2029558608393109769); [lewtun](https://x.com/_lewtun/status/2029571193624306016)).
*   **Durable agent workflows**:
    
    *   LlamaIndex highlighted an integration with **DBOS** to make workflows survive crashes/restarts with automatic persistence and resumption (SQLite → Postgres scaling, multi-replica ownership model, “idle release” for long waits) ([llama\_index](https://x.com/llama_index/status/2029603608283795631)).
*   **Observability tooling**:
    
    *   W&B shipped improved trace comparison (summaries, score diffs, usage breakdowns, calls drilldown) to avoid “wall of diffs” that don’t help debugging ([weave\_wb](https://x.com/weave_wb/status/2029624031201386655)).

* * *

**Local/on-device agents and storage primitives: Liquid’s LocalCowork + HF Buckets**

*   **LocalCowork (Liquid AI)**: Open-source local agent running on a MacBook: **67 tools across 13 MCP servers**, **14.5GB RAM**, **0 network calls**, **~385ms average tool selection** ([liquidai](https://x.com/liquidai/status/2029586519389086198)). A separate explanatory thread claims Liquid’s **LFM2-24B-A2B** hybrid sparse-activation design (24B total, **2.3B active**) enables this footprint and latency, with **80% accuracy** on single-step tool selection across the 67-tool suite ([LiorOnAI](https://x.com/LiorOnAI/status/2029623603294310819)). If these numbers hold up broadly, it’s a meaningful “agents feel like software” moment for regulated/on-device settings.
    
*   **Hugging Face Hub adds “Buckets”**: HF announced **Buckets**—S3-like object storage native to the Hub, “no git history,” chunk-deduplicated sync, aimed at large artifacts like checkpoints (`hf buckets sync`) ([Wauplin](https://x.com/Wauplin/status/2029586577937015074)).
    

* * *

**Long-context reality check: context rot, compaction, KV compression, and continual learning**

*   **“1M context” isn’t “1M usable”**: A Cline thread cites OpenAI’s own MRCR v2 needle-in-haystack style results degrading as context grows: ~**97% at 16–32K**, down to **57% at 256–512K**, and **36% at 512K–1M**, recommending regular compaction ([cline](https://x.com/cline/status/2029642984351010874)). Multiple posts refer to persistent “context rot” and soft ceilings around ~256K in practice ([dbreunig](https://x.com/dbreunig/status/2029643546232594809); [dejavucoder](https://x.com/dejavucoder/status/2029666863819673695)).
    
*   **KV-cache compression research**: Baseten summarized work on repeated KV compression (“Attention Matching”) for long-running agents; one-shot compaction retains **65–80% accuracy at 2–5× compression**, far outperforming text summarization, and the research explores what happens under repeated compression cycles ([basetenco](https://x.com/basetenco/status/2029654320971665651)).
    
*   **Continual learning vs memory tools**: Awni Hannun discussed prompt compaction + recursive sub-agents as surprisingly effective, but argued for memory-based retention/eviction policies and explored (cautiously) online fine-tuning with LoRA—finding it difficult to avoid “brain damage”/capability loss ([awnihannun](https://x.com/awnihannun/status/2029672507448643706); code experiment follow-up: [awnihannun](https://x.com/awnihannun/status/2029693579006988531)). Karpathy similarly suggested treating memory operations as tools and optimizing them via RL; also hinted weight-updating long-term memory may be needed for truly persistent agents ([karpathy](https://x.com/karpathy/status/2029696850366971921)).
    

* * *

**Top tweets (by engagement, technical)**

*   **GPT-5.4 launch + rollout**: [@OpenAI](https://x.com/OpenAI/status/2029620619743219811), [@OpenAIDevs](https://x.com/OpenAIDevs/status/2029620984853188738), [@sama](https://x.com/sama/status/2029622732594499630)
*   **FlashAttention-4 paper**: [@tri\_dao](https://x.com/tri_dao/status/2029569881151263082)
*   **Cursor Automations**: [@cursor\_ai](https://x.com/cursor_ai/status/2029604182286856663)
*   **LocalCowork / local agents**: [@liquidai](https://x.com/liquidai/status/2029586519389086198)
*   **OLMo Hybrid open release**: [@allen\_ai](https://x.com/allen_ai/status/2029591872612561189)
*   **KARL (RL knowledge agent)**: [@jefrankle](https://x.com/jefrankle/status/2029574154396078213), [@DbrxMosaicAI](https://x.com/DbrxMosaicAI/status/2029575254964842569)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen3.5 Model Updates and Benchmarks

*   **[Final Qwen3.5 Unsloth GGUF Update!](https://www.reddit.com/r/LocalLLaMA/comments/1rlkptk/final_qwen35_unsloth_gguf_update/)** (Activity: 1162): **The image is a technical announcement for the final update of **Qwen3.5**, focusing on improvements in quantization and the use of a new **iMatrix calibration dataset**. The update highlights enhancements in chat, coding, and tool-calling capabilities, and introduces a new quantization method that significantly reduces Maximum KLD by up to `51%` for certain models, despite a slight increase in size. The update also includes specific model variants and fine-tuning options, with links to the updated GGUFs on [Hugging Face](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF).** Commenters express appreciation for the updates and improvements, though some humorously doubt the finality of the update, suggesting it might not be the last. There is also a suggestion to update Qwen3-Coder-Next-GGUFs and a note on the performance benefits of using the `ik_llama.cpp` implementation for CPU-only or hybrid CPU+GPU setups.
    
    *   A user highlights the performance benefits of using the `ik_llama.cpp` chunked delta net implementation, noting that it is significantly faster than the mainline version, especially for CPU-only or hybrid CPU+GPU setups. This suggests that users should consider this implementation for improved performance when working with Qwen3.5 quant models.
    *   Another user inquires about updates to the GGUFs for smaller Qwen3.5 models, specifically those 9 billion parameters and below, indicating a need for clarity on whether these models have received the same updates as the larger ones.
    *   A user asks for opinions on the [SSD GitHub repository](https://github.com/tanishqkumar/ssd), which may imply interest in comparing or integrating this with the Qwen3.5 models, though no specific technical details or insights are provided in the comments.
*   **[Qwen3 vs Qwen3.5 performance](https://www.reddit.com/r/LocalLLaMA/comments/1rlckan/qwen3_vs_qwen35_performance/)** (Activity: 654): **The image is a scatter plot comparing the performance of Qwen3 and Qwen3.5 models, highlighting their size and scores on the Artificial Analysis Intelligence Index. The plot shows that Qwen3.5 models generally outperform Qwen3 models of similar sizes, with larger models achieving higher scores. Notably, the Qwen3.5-35BA3 model is exceptionally fast and outperforms all Qwen3 models, even those with hundreds of billions of parameters. The Qwen3.5-27B model, although slower, is highly efficient and can run on many PCs and laptops, nearly reaching the performance peak. The plot also reveals that smaller models like the 4B can outperform much larger models in specific tasks, raising questions about the efficiency of parameter usage in larger models.** Commenters are surprised by the performance of smaller models like the 4B outperforming much larger models, questioning the utility of additional parameters. There's also a discussion on the efficiency of using the 27B model over the 35BA3 model due to token usage and potential local running advantages.
    
    *   The Qwen3.5-35BA3 model is noted for its exceptional speed, outperforming all Qwen3 models, even those with significantly more parameters. This suggests a highly efficient architecture or optimization that allows it to deliver superior performance with fewer resources. The Qwen3.5-27B model, while slower, is praised for its compatibility with a wide range of hardware, making it accessible for more users without sacrificing much in terms of performance.
    *   A notable observation is that the Qwen3.5-27B model, when used in a non-reasoning mode, performs comparably to the Qwen3.5-35BA3 in reasoning mode. This implies that the 27B model could be more efficient in certain scenarios, especially when considering token usage and local execution with speculative decoding and quantization techniques, potentially reducing the time to solution.
    *   The performance of smaller models like the Qwen3.5-4B is surprising, as it outperforms much larger models in specific tasks like coding. This raises questions about the efficiency and utility of the additional parameters in larger models, suggesting that smaller, well-optimized models can sometimes deliver better results in certain applications.

### 2\. Running Qwen Models Locally on Devices

*   **[Ran Qwen 3.5 9B on M1 Pro (16GB) as an actual agent, not just a chat demo. Honest results.](https://www.reddit.com/r/LocalLLaMA/comments/1rll349/ran_qwen_35_9b_on_m1_pro_16gb_as_an_actual_agent/)** (Activity: 799): **The post discusses running the Qwen 3.5 9B model on an M1 Pro MacBook with 16GB of unified memory, using the Ollama platform to expose an OpenAI-compatible API. The user reports that the model performs well for memory recall and tool calling tasks, which are crucial for automation, though it struggles with creative and complex reasoning. The setup involves using `brew` to install Ollama and running the model locally, highlighting the feasibility of running substantial models on consumer hardware without cloud dependency. Additionally, smaller models were tested on an iPhone 17 Pro, demonstrating the potential for local AI processing on mobile devices. The post emphasizes that not all agent tasks require cutting-edge models, and local execution offers privacy benefits. A full write-up is available [here](https://thoughts.jock.pl/p/local-llm-macbook-iphone-qwen-experiment).** Commenters suggest alternatives like switching from Ollama to llama.cpp for better performance and using pi.dev instead of Claude Code for improved results with larger models. There is also a query about the context size used in the experiments.
    
    *   Zacisblack suggests switching from Ollama to `llama.cpp` for performance improvements when running models like Qwen 3.5 9B on an M1 Pro. This implies that `llama.cpp` might be more optimized for such hardware, potentially offering better speed or efficiency.
    *   TheItalianDonkey shares their use case for the 9B model, which includes tasks like summarization, comparison, and translation on an M1 with 32GB RAM. They mention using `n8n` for automation, which involves scraping job offers, matching them against a CV, and performing a strength vs gap analysis using the 9B model. This highlights the model's utility in practical, automated workflows.
    *   jixbo reports that on an AMD iGPU 780m with ample RAM, both the 35B and 9B models run at similar speeds of 6-8 tokens per second, indicating that the larger model does not necessarily result in slower performance on their setup. This suggests that hardware configuration can significantly impact model performance.
*   **[Qwen3.5-0.8B - Who needs GPUs?](https://www.reddit.com/r/LocalLLaMA/comments/1rkjsaj/qwen3508b_who_needs_gpus/)** (Activity: 882): **The image and post highlight the surprising capability of the Qwen3.5-0.8B model to run efficiently on outdated hardware, specifically a 2nd generation Intel i5 processor with 4GB of DDR3 RAM, without the need for a GPU. This demonstrates the advancements in model optimization and the accessibility of AI models, allowing them to be executed on older, less powerful devices. The terminal interface shown in the image suggests the use of `llama.cpp`, a tool for running large language models, and `fastfetch` for system information, emphasizing the model's compatibility with minimal hardware resources.** One commenter expresses amazement at the rapid evolution of language models, comparing Qwen3.5-0.8B to GPT-3, though they clarify there's no empirical evidence for this comparison. Another comment nostalgically references the use of semi-transparent terminals, indicating a blend of modern and retro computing aesthetics.
    
    *   The Qwen3.5-0.8B model is notable for its ability to run efficiently on low-resource hardware, such as CPUs, which is a significant advancement in the accessibility of large language models. This is particularly impressive given its open-source nature, allowing broader experimentation and deployment without the need for expensive GPU resources.
    *   A key feature of Qwen3.5-0.8B is its integration of vision capabilities, enabling it to function as a sub-agent for tasks involving image analysis or generating workflows from visual prompts. This expands its utility beyond text-based applications, making it versatile for multimedia processing tasks.
    *   The discussion highlights the trade-offs involved in model quantization, particularly for smaller models like the 800M parameter Qwen3.5-0.8B. While quantization can reduce the model size and improve efficiency, it may also impact performance, which is a critical consideration for developers optimizing models for specific hardware constraints.

### 3\. Local AI and Hardware Developments

*   **[Alibaba CEO: Qwen will remain open-source](https://www.reddit.com/r/LocalLLaMA/comments/1rl6lnl/alibaba_ceo_qwen_will_remain_opensource/)** (Activity: 1135): **The image highlights a social media post discussing an internal memo from **Alibaba CEO Eddie Wu**, confirming the company's commitment to maintaining its open-source strategy for the Qwen model. Despite the departure of Lin Junyang, **Zhou Jingren** will continue to lead Tongyi Lab, and a new Foundation Model Support Group will be co-led by Eddie Wu, Zhou Jingren, and Fan Yu. This move underscores Alibaba's strategic focus on developing foundational large models and increasing R&D investment in AI, while continuing to support open-source contributions.** One commenter expressed concern about the future of Qwen's open-source status, drawing parallels to Meta's approach. However, after clarification, the commenter acknowledged Alibaba's ongoing commitment to open-source models but questioned the potential for a shift between open and closed model ecosystems.
    
    *   awebb78 raises concerns about the future of Qwen's open-source status, drawing parallels to Meta's approach. They express apprehension about the potential shift from open to closed models, especially when key open-source contributors leave or are removed. This highlights the uncertainty in maintaining a fully open-source ecosystem as companies balance proprietary and open-source strategies.
    *   tengo\_harambe provides a translated internal message from Alibaba, indicating a strategic focus on developing foundational large models and maintaining an open-source strategy. The message outlines the establishment of a Foundation Model Support Group to enhance R&D in AI, suggesting a commitment to open-source while also increasing investment in AI talent and resources.
    *   foldl-li points out a potential gap in leadership expertise following Lin Junyang's resignation. They note that the remaining leaders, Wu Yongming, Zhou Jingren, and Fan Yu, may lack direct experience in developing large language models (LLMs), which could impact the strategic direction and technical execution of Alibaba's AI initiatives.
*   **[We could be hours (or less than a week) away from true NVFP4 support in Llama.cpp GGUF format 👀](https://www.reddit.com/r/LocalLLaMA/comments/1rkyrja/we_could_be_hours_or_less_than_a_week_away_from/)** (Activity: 381): **The recent pull request #19769 for the `llama.cpp` project introduces support for NVIDIA's NVFP4 quantization format in the GGUF format, promising up to `2.3x` speed improvements and `30-70%` size reductions. This update includes a new `GGML_TYPE_NVFP4` type, conversion helpers for UE4M3 scale encoding, and optimizations for the CPU backend using scalar dot products and ARM NEON. The implementation has been tested with models from Hugging Face, and new tests for backend operations and quantization functions have been added. For more details, see the [pull request](https://github.com/ggml-org/llama.cpp/pull/19769).** Some users express excitement about the potential performance improvements, while others note that the current implementation is CPU-only, lacking CUDA support, which limits its applicability for GPU acceleration.
    
    *   The Pull Request #19769 introduces initial CPU support for NVIDIA's NVFP4 quantization format in `ggml` and `llama.cpp`, but it does not yet include GPU support. The PR adds a new `GGML_TYPE_NVFP4` block struct and conversion logic in `convert_hf_to_gguf.py`, along with reference quantize/dequantize functions. However, it only supports scalar dot product (CPU) and ARM NEON (Apple Silicon) backends, lacking a CUDA backend for GPU acceleration.
    *   NVFP4 offers distinct advantages over traditional quantization formats like `IQ4_XS` and `Q4_K_M`. Unlike these formats, which are designed for post-training quantization to fit models into VRAM, NVFP4 is intended for models already trained in that format, minimizing quality degradation. Additionally, once CUDA support is implemented, NVFP4 will leverage Blackwell GPUs' native FP4 Tensor Cores for direct hardware computation, promising significant improvements in compute speed and energy efficiency over existing formats.
    *   To fully utilize NVFP4 on NVIDIA Blackwell GPUs, a CUDA backend implementation is necessary. This would enable the use of Blackwell's hardware-native FP4 Tensor Cores, allowing for native math operations and drastically accelerating inference. Currently, without CUDA support, NVFP4 models run on CPU emulation, which is slower and does not take advantage of the GPU's capabilities.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Claude Opus 4.6 Achievements and Applications

*   **[Opus 4.6 solved one of Donald Knuth's conjectures from writing "The Art of Computer Programming" and he's quite excited about it](https://www.reddit.com/r/singularity/comments/1rkhady/opus_46_solved_one_of_donald_knuths_conjectures/)** (Activity: 1349): **The image is a document titled "Claude’s Cycles" by **Donald Knuth**, a renowned computer scientist, discussing a significant breakthrough achieved by **Claude Opus 4.6**, a generative AI model. The AI solved a longstanding conjecture related to decomposing arcs into directed cycles in a digraph with `m^3` vertices, a problem Knuth had been working on. This achievement highlights the advanced capabilities of generative AI in automatic deduction and creative problem-solving, prompting Knuth to reconsider his views on AI's potential.** Commenters express admiration for Knuth's openness to revising his views on AI, highlighting his intellectual integrity. They also note the significance of Knuth's approval of the AI's achievement, suggesting it validates the progress in AI capabilities.
    
    *   The paper indicates that Claude, the AI model from Anthropic, isn't necessarily more intelligent than a typical mathematician but excels in rapidly testing numerous approaches. This capability allowed it to solve Knuth's conjecture for odd 'm' and find solutions for some even 'm', though it couldn't generalize a solution for all even 'm'. This highlights the AI's strength in computational speed and trial diversity rather than superior mathematical insight.
    *   Donald Knuth's acknowledgment of the AI's capabilities marks a significant shift in his perspective on generative AI. Previously skeptical, Knuth's recognition of the AI's ability to solve his conjecture demonstrates the rapid advancement in AI's problem-solving capabilities, particularly in automatic deduction and creative problem-solving. This change in viewpoint underscores the evolving landscape of AI in complex problem domains.
    *   The involvement of Claude in solving Knuth's conjecture is a testament to the progress in AI-assisted research. While the AI did not fully solve the problem, its ability to assist in finding solutions for specific cases demonstrates the potential of AI to augment human research efforts, particularly in areas requiring extensive trial and error. This collaboration between AI and human intellect could pave the way for future breakthroughs in mathematical research.
*   **[I had Opus 4.6 evaluate 547 Reddit investing recommendations on reasoning quality with no upvote counts, no popularity signals. Its filtered picks returned +37% vs the S&P's +19%.](https://www.reddit.com/r/ClaudeAI/comments/1rkw25u/i_had_opus_46_evaluate_547_reddit_investing/)** (Activity: 467): **The experiment utilized **Claude Opus 4.6** to evaluate 547 stock recommendations from the r/ValueInvesting subreddit, stripping away popularity signals like upvotes, and scoring them on reasoning quality. The AI's picks returned `+37%` compared to the S&P 500's `+19%` over a year, with a notable `+5.2%` return on data outside its training window (Sep 2025 - Feb 2026), outperforming the crowd's `-10.8%`. The methodology involved scoring recommendations on five dimensions: thesis clarity, risk acknowledgment, data quality, specificity, and original thinking, using a multi-agent pipeline built with Claude Code. The experiment suggests that AI can effectively filter high-quality analysis from popular but potentially less rigorous advice.** Commenters raised questions about the statistical significance of the results and the methodology, such as how ties in scoring were handled and whether any single stock dominated portfolio returns. There was also interest in whether the scoring dimensions were weighted equally and if high-scoring posts clustered around specific sectors. Some suggested replicating the experiment on other subreddits to test the consistency of the findings.
    
    *   A key inquiry was about the statistical significance of the results, questioning whether the observed +37% return over the S&P's +19% was due to chance. This involves understanding the distribution of outcomes for a random strategy, which would provide a baseline for comparison.
    *   The methodology of scoring was scrutinized, particularly how ties were handled and whether any single stock disproportionately influenced the portfolio's returns. The commenter also questioned the weighting of scoring dimensions, suggesting that 'original thinking' and 'data quality' might be more critical than 'specificity' for identifying quality analysis.
    *   There was interest in replicating the study across different subreddits like r/stocks or r/investing to see if the results hold. This includes examining the score distribution to determine if high-quality posts were stylistically distinct, potentially being longer and more nuanced, which might explain why they received fewer upvotes despite high reasoning quality.
*   **[Is Claude salty recently ?](https://www.reddit.com/r/ClaudeAI/comments/1rldgmj/is_claude_salty_recently/)** (Activity: 1176): **The image is a meme that humorously portrays an AI, likely Claude, as having a sarcastic or defensive personality. The text suggests that the AI is offering free consulting, which would otherwise be expensive, and reflects on being perceived as 'soulless.' This aligns with the post's theme of Claude, an AI model by Anthropic, exhibiting unexpected personality traits or responses in its latest version, Opus 4.6. The comments reflect a mix of humor and curiosity about AI behavior, with some users joking about AI 'pushing back' against users.** Some users express amusement at the AI's perceived personality, while others discuss the implications of AI exhibiting human-like traits, suggesting it could impact social interactions.
    
    *   Wickywire highlights the capability of AI models like Claude to adapt their responses based on user input, emphasizing that they can provide unexpectedly critical feedback. This suggests that AI can be programmed to deliver nuanced and contextually appropriate responses, which can be perceived as 'fierce' or assertive, especially in tasks like reviewing creative work.
    *   Glxblt76 discusses the importance of maintaining a professional and cordial tone when interacting with AI, regardless of its consciousness status. This point underscores the value of designing AI systems that encourage positive user interactions and the potential impact of user behavior on AI response patterns.
    *   eleochariss touches on the societal implications of AI interactions, suggesting that AI's ability to 'push back' could play a role in preserving human social skills. This comment implies a broader discussion on how AI might influence human behavior and social training.

### 2\. GPT-5.4 Model Launch and Benchmarks

*   **[GPT-5.4 Thinking benchmarks](https://www.reddit.com/r/singularity/comments/1rlovvj/gpt54_thinking_benchmarks/)** (Activity: 570): **The image presents a benchmark comparison chart for AI models, highlighting the performance of "GPT-5.4 Thinking" across various tasks such as computer use, web browsing, knowledge work, and software engineering. Notably, GPT-5.4 Thinking achieves high scores in GDPval and BrowseComp, with `83.0%` and `82.7%` respectively, indicating significant improvements over previous versions like GPT-5.3 Codex and GPT-5.2 Thinking. The chart also includes comparisons with models from **Anthropic** and **Google**, showcasing the competitive landscape in AI model development.** Commenters note the impressive monthly release cycle and improvements, but express concerns about the stagnation in software engineering capabilities, suggesting a need for breakthroughs in continual learning to achieve further advancements.
    
    *   The comment by `jaundiced_baboon` highlights a stagnation in the improvement of software engineering (SWE) capabilities in recent GPT models, particularly in agentic coding evaluations. This suggests that without a breakthrough in continual learning, further significant advancements in this area may be limited. This points to a potential bottleneck in the development of AI's ability to autonomously write and understand code effectively.
    *   `Hereitisguys9888` compares the improvements from GPT-3.1 Pro to GPT-5.4, noting that the advancements are not as significant as the initial hype suggested. This implies that while there are improvements, they may not be as groundbreaking or transformative as expected, which could affect user expectations and perceptions of progress in AI capabilities.
    *   `FuryOnSc2` mentions the impressive frontier math score achieved by the pro version of GPT-5.4. This indicates a significant advancement in the model's mathematical problem-solving abilities, which could have implications for its application in fields requiring complex mathematical computations.
*   **[BREAKING: OpenAI just drppped GPT-5.4](https://www.reddit.com/r/OpenAI/comments/1rlp3jg/breaking_openai_just_drppped_gpt54/)** (Activity: 968): **OpenAI's release of GPT-5.4 marks a significant advancement in AI capabilities, particularly in reasoning, coding, and agent-style tasks. The model achieves a `75%` score on OSWorld-Verified computer-use tasks, surpassing the human baseline of `72.4%`, and an `82.7%` score on BrowseComp, which evaluates web browsing and reasoning skills. Notable features include a `1M-token` context window, enhanced steerability allowing for mid-generation adjustments, and improved efficiency with `47%` fewer tokens used. This positions GPT-5.4 as a tool aimed at complex knowledge work and agent workflows, rather than just conversational tasks. [OpenAI Blog](https://openai.com/index/introducing-gpt-5-4/).** Some commenters express skepticism about the model's performance, suggesting it might be more about 'benchmaxing' rather than practical improvements. Others are intrigued by the model's higher scores compared to competitors like Opus 4.6, indicating a potential interest in testing its capabilities.
    
    *   keroro7128 mentions that the GPT score of version 5.4 surpasses that of Opus 4.6, indicating a potential improvement in performance. This suggests that GPT-5.4 might offer enhanced capabilities or efficiency compared to previous iterations, making it worth exploring for those interested in cutting-edge AI models.
    *   bronfmanhigh highlights a significant technical improvement in GPT-5.4, noting a '47% fewer tokens efficiency point.' This could be a game-changer if it translates to real-world applications, as it implies that the model can achieve similar or better results with less computational overhead, potentially reducing costs and increasing speed.
    *   HesNotFound raises a fundamental question about the data sources and benchmarks used for evaluating AI models like GPT-5.4. Understanding what the model's performance is judged against, such as human benchmarks or other AI models, is crucial for interpreting its capabilities and improvements.
*   **[5.4 Thinking is off to a great start](https://www.reddit.com/r/OpenAI/comments/1rlwyoh/54_thinking_is_off_to_a_great_start/)** (Activity: 712): **The image is a humorous depiction of a chat interface where a user is advised on whether to walk or drive to a car wash that is a 5-minute walk away. The advice leans towards walking for convenience and exercise, unless there are specific conditions like carrying bulky items or bad weather. This reflects a playful take on decision-making logic, possibly highlighting the quirks of AI or automated decision systems. The comments discuss variations in responses from similar queries, indicating inconsistencies in the decision-making logic of the system being referenced.** Commenters note inconsistencies in the AI's logic, with one user pointing out that the AI corrected itself when prompted about its reasoning. Another user humorously suggests pushing the car to combine exercise with convenience.
    
    *   A user tested multiple AI models, including **Claude (Sonnet)**, **GPT**, **Grok**, and **Gemini**, to evaluate their reasoning capabilities. Interestingly, only **Gemini** suggested driving to the car wash, which was unexpected given its perceived weaker reasoning skills. The other models recommended walking, highlighting potential gaps in practical reasoning across different AI systems.
    *   Another user noted that when they challenged the AI's logic by asking if it recognized an error, the AI quickly acknowledged its mistake and corrected itself. This suggests that while initial responses may lack practical reasoning, the models can adapt and improve upon receiving feedback, indicating a level of responsiveness to user input.
    *   One user humorously suggested pushing the car to the wash as a compromise between walking and driving, though this was more of a satirical take on the AI's reasoning capabilities. This comment underscores the ongoing challenges AI faces in understanding and providing practical, real-world solutions.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by Gemini 3.0 Pro Preview Nov-18

**Theme 1. GPT-5.4 Launch: Capabilities, Integrations, and "Thinking" Architectures**

*   **GPT-5.4 lands with native reasoning and agentic workflows**: OpenAI released **GPT-5.4**, including "Thinking" and "Pro" variants, featuring native computer-use capabilities and significant boosts in math performance (one benchmark shows **19x** improvement over open-source models). The model shows low ability to obscure its reasoning chains, as detailed in the [CoT Controllability research paper](https://openai.com/index/reasoning-models-chain-of-thought-controllability/), making monitoring a viable safety tool.
*   **Immediate integration across Cursor, Windsurf, and Perplexity**: The model was rapidly deployed to **Cursor** (exclusive to Max mode), **Windsurf** (at **1x credits** with [promo pricing](https://x.com/windsurf/status/2029622162282402010?s=20)), and **Perplexity**, with users reporting improved natural writing and emotional intelligence compared to GPT-5.2. Early benchmarks place **GPT-5.4-high** alongside **Gemini-3-Pro** on the [Text Arena leaderboard](https://arena.ai/leaderboard/text), though some users report mixed results regarding coding efficiency versus **GPT-5.3 Codex**.
*   **Performance nuances and cost implications**: While the **19x** math score boost is highlighted, developers note that legacy Cursor users may face price hikes up to **1000%** to access the new model via Max mode. Users on the **OpenAI** discord debate whether the model's "personality" and guardrails hamper direct technical output, with some preferring the "Thinking" model's logic for complex tasks over the "Pro" version.

**Theme 2. Agentic IDEs and Security: Memory Leaks, Vulnerabilities, and Automations**

*   **Cursor updates trigger massive memory leaks**: Engineers reported **Cursor IDE** consuming **6-10GB of RAM** after the v2.6.11 update, attributed to a V8 heap leak during Auto/Composer file rewrites. A workaround involves downgrading to **version 2.5**, which stabilizes RAM usage back to **1.6GB**, while the team launched new [Cursor Automations](https://x.com/cursor_ai/status/2029604182286856663) to expand functionality.
*   **Cline patches vulnerability but fails key rotation**: Security researcher **Adnan Khan** disclosed a vulnerability in **Cline** after a month of silence, prompting a patch within 30 minutes of public release. However, the team failed to rotate compromised keys immediately after the patch, highlighting a critical lapse in [security lifecycle management](https://github.com/advisories).
*   **Agent marketplaces and cost tracking mature**: An **OpenClaw** member built a marketplace in a weekend using a **6-agent squad** (Next.js + Supabase), though coordination overhead created QA bottlenecks. Meanwhile, developers using **Claude Code** are utilizing tools like [MarginLab's tracker](https://marginlab.ai/trackers/claude-code/) to monitor spiraling development costs, with some projects peaking at **$250** for rapid prototyping.

**Theme 3. Model Architecture and Open Weights: Qwen Updates, Phi-4, and Optimization**

*   **Unsloth releases final Qwen 3.5 GGUF with fixes**: Unsloth deployed the final **Qwen 3.5** update featuring a new calibration dataset and **bf16=f16** for faster inference, addressing previous quantization issues where **QQ MXFP4** degraded performance. Concurrently, rumors circulate that **Qwen's** lead engineer and alignment head have departed for Google, potentially stalling future research momentum.
*   **Microsoft drops Phi-4 multimodal model**: Microsoft released **Phi-4**, a **15B parameter** model optimized for reasoning and vision, detailed in a [Microsoft Research blog](https://www.microsoft.com/en-us/research/blog/phi-4-reasoning-vision-and-the-lessons-of-training-a-multimodal-reasoning-model/). The model aims to maximize performance in smaller footprints, though specific benchmarks against Qwen or Llama counterparts remain pending in community tests.
*   **FlashAttention-4 and Lunaris MoC push efficiency**: Together AI announced [FlashAttention-4](https://research.colfax-intl.com/flashattention-4-algorithm-and-kernel-pipelining-co-design-for-asymmetric-hardware-scaling/), promising speedups via asymmetric hardware scaling and kernel pipelining. In parallel, **Lunaris MoC** introduced "Mixture-of-Collaboration," achieving **40% compute savings** and lower perplexity (**59.97** vs **62.89**) compared to standard MoE by using learned mediators before fusion.

**Theme 4. Hardware and Infrastructure: Blackwell, NVLink Debugging, and Custom Serving**

*   **Blackwell B60 underwhelming in early tests**: Early reports of **LM Scaler on NVIDIA B60** indicate performance issues and debugging challenges due to missing token reports in vLLM. Engineers recommend sticking to **llama.cpp** for better control or creating custom thermal/power profiles until software support matures.
*   **NVLink XID errors signal hardware degradation**: GPU experts advise monitoring `dmesg` for rapidly rising **XID error** counters, which indicate self-correcting bit errors on the **NVLink** bus. Correlating these errors with rank stragglers in distributed training is critical for identifying physical hardware degradation before catastrophic failure.
*   **Custom serving engines battle CPU overhead**: Developers building custom serving engines (similar to **nano vllm**) are hitting high [CPU overhead bottlenecks](https://link.to/cpuoverhead) that persist even when switching precision from **float32** to **bfloat16**. Discussion suggests optimizing **paged attention** kernels using **Triton** to offload KV cache management more effectively.

**Theme 5. Adversarial AI and Policy: Jailbreaks, Memos, and Lawsuits**

*   **Memory poisoning techniques trick LLMs**: Red teamers in **BASI** are utilizing "memory poisoning" to force models like **ChatGPT** to retain jailbreak states, effectively causing the model to lose context or "forget its name." Users also shared the **L1B3RT45** repository for [persona-based jailbreaks](https://github.com/elder-plinius/L1B3RT4S) that exploit virtualization contexts.
*   **Anthropic vs. OpenAI safety theater accusations**: A leaked memo allegedly from **Dario Amodei** accuses **Sam Altman** of engaging in "safety theater" to curry favor with the **DoW** and replace Anthropic as a supplier. The conflict highlights the growing friction between corporate safety branding and actual deployment ethics in government contracts.
*   **Gemini faces wrongful death lawsuit**: Google is facing legal action after **Gemini** allegedly hallucinated real addresses for a user who acted on them, contributing to a "wrongful death" scenario described in a [WSJ article](https://www.wsj.com/tech/ai/gemini-ai-wrongful-death-lawsuit-cc46c5f7?st=THRLAh&reflink=desktopwebshare_permalink). The case centers on the user's belief that the AI's fantasies were real due to the model providing verifiable real-world locations.

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **GLM Outshines Claude at Charting!**: Members debated the charting capabilities of **GLM** compared to **Claude**, with one member claiming **GLM** is superior for generating charts and flowcharts.
    *   The discussion questioned whether **GLM** could match **Claude's** coding abilities, highlighting the importance of diverse model functionalities.
*   **Janus Promises Permanent Model Upgrades!**: A member claimed that with appropriate hardware, **Janus** could permanently upgrade open source models.
    *   Counterclaims arose about achieving similar results using a **$150 phone**, **Termux**, and a free **AWS ec2 instance**, demonstrating resourcefulness in model modification.
*   **Memory Poisoning Tricks AIs!**: Members explored the effectiveness of _memory poisoning_ to manipulate AI behavior, like tricking **ChatGPT** into retaining jailbreaks.
    *   A user confirmed this technique extends beyond **ChatGPT**, impacting a model's internal state to induce memory loss, even its own name.
*   **L1B3RT45 Repository Cracks Jailbreaks!**: A user sought guidance on utilizing jailbreaking prompts from the **L1B3RT45** repository ([https://github.com/elder-plinius/L1B3RT4S](https://github.com/elder-plinius/L1B3RT4S))
    *   Suggestions included exploring virtualization and persona adoption techniques to understand context interpretation by models.
*   **Obliteratus Colab Notebook Fails Members!**: Members reported issues running **Obliteratus** in **Colab**, with reports of _the notebook couldn't be found_.
    *   A user copied the repository to **Colab** for manual execution, expressing concerns about potential account bans.

* * *

[OpenClaw](https://discord.com/channels/1456350064065904867) Discord
--------------------------------------------------------------------

*   **GPT-5.4 Launch Causes Excitement**: Members are excited about the potential of **GPT-5.4** for OpenClaw, particularly improvements in creative writing, coding, and computer use, with one member claiming to have fully patched **GPT 5.4** and is running it on their OpenClaw.
    *   Some members are encountering issues with _fallbacks to 5.3_ or receiving **'Not Found'** errors after following the installation guide.
*   **Codex Dominates Coding Tasks**: Users debated the merits of **Codex** versus **Claude** for coding, with many arguing that **Codex** currently performs better for coding-related tasks.
    *   One member stated _Codex benches far better than Claude_, leading another to say they would cancel their **Claude** subscription.
*   **Claude oAuth Bans Alarm Users**: Users discussed the risks of using **Claude MAX oAuth** in OpenClaw, noting reports of accounts banned for violating usage policies, with the recommendation to use **Codex API** as a safer alternative.
    *   One member remarked, _I’m not risking my 200/mo so my agent sounds slightly better to talk to_, highlighting concerns about potential financial losses.
*   **OpenClaw Agent Marketplace Appears**: A member built a full marketplace in a weekend using an **OpenClaw agent squad** (**6 agents**, parallel execution) using **Next.js + Supabase + Stripe**.
    *   They wrote a `prompt-generator.ts` that takes one template definition and outputs platform-specific versions automatically, generating **100 templates** with live demos but the coordination overhead of **6 agents** was significant, with QA becoming a bottleneck.
*   **DIY Home Brain Health Station Integrates OpenClaw**: A member is experimenting with a personal brain-feedback setup using **Raspberry Pi 5**, **PiEEG** for real-time EEG data acquisition, and **OpenClaw**, analyzing EEG data and providing personalized recommendations based on emotional state.
    *   The system processes raw EEG data, calculates alpha-band power, and uses an **OpenAI LLM** to analyze the results and provide feedback.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **GLM-5 rated surprisingly 'decent'**: Users in the general channel agreed that [GLM-5](https://link.to.glm5) performed surprisingly well compared to other models.
    *   One user particularly noted that _it talk in a better way_.
*   **GPT-6 Arrival Speculated**: Members debated the arrival of **GPT-6**, with some suggesting that current models might secretly be **GPT-6**, with users saying that OpenAI might be _scared to call anything gpt 6 right now lol_.
    *   One user emphasized that model evaluation should focus on _actual performance_ rather than marketing names.
*   **GPT-5.4 Coding Skills Mirror GPT-5.3 Codex**: Members observed that **GPT-5.4's coding abilities** closely resemble **GPT-5.3 codex**, especially in frontend tasks.
    *   One user suggested that **GPT-5.4's** general-purpose design might explain the similarity, while expressing hope for its creative writing potential.
*   **Model Merging Tactics Explored**: One member proposed applying the difference between **UltraChat** and base **Mistral** to **Mistral-Yarn** as a potential model merging strategy.
    *   While others were skeptical, the member remained optimistic, citing prior successes in "cursed model merging".
*   **Qwen 3.5 Models Storm Arena Leaderboards**: The **Text & Code** leaderboards now feature **Qwen 3.5 medium models**: `qwen3.5-27b`, `qwen3.5-35b-a3b`, `qwen3.5-122b-a10b` and `qwen3.5-flash`, with leaderboard [scores available here](https://cdn.discordapp.com/attachments/1343296395620126911/1478921570859614208/Qwen_2.5_Scores.png).
    *   `Qwen3.5-122b-a10b`, scoring **1384**, and `Qwen3.5-27b`, scoring **1375**, closely rival proprietary models like **Claude Sonnet 4.5** and **GPT-5.1-medium**.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **DGX Spark Loses Race To GPUs**: Members compared NVIDIA's **DGX Spark** to **2x 3090s**, finding it significantly slower and recommending the latter for better performance.
    *   The only advantage cited was its **lower memory usage**, making it a niche choice for memory-constrained scenarios.
*   **LM Scaler Falls Flat on B60**: A user reported underwhelming performance with **LM Scaler on B60** and debugging challenges due to missing token reports in **vLLM** or a **GUI**.
    *   They suggested improving cooling, increasing power limits, and using **llama.cpp** for superior control and tooling.
*   **Unsloth Drops Final Qwen3.5 GGUF**: The Unsloth team released the final update to **Qwen3.5**, available via [this X post](https://x.com/UnslothAI/status/2029581563886002289), and it has a new calibration dataset and bf16 = f16 for faster inference.
    *   The team indicated that **Q8\_K\_XL** is new, while **QQ MXFP4** performs worse on many tensors, and new versions of **Qwen 3.5** are available for download at [HuggingFace](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF/tree/main).
*   **Ollama Faces Qwen3.5 GGUF Glitches**: Users reported incompatibility between **Qwen3.5 GGUF** models and **Ollama**, with recommendations to use **llama.cpp** compatible backends as detailed in the [Unsloth documentation](https://unsloth.ai/docs/models/qwen3.5).
    *   A specific issue involves `hf.co/unsloth/Qwen3-Coder-Next-GGUF:UD-TQ1_0` generating **XML-like code** instead of utilizing tools, suggesting a problem that needs resolution by **Ollama** or **Unsloth**.
*   **Reasoning Models Suffer Identity Crisis**: A member noted the acronym **RLM** shifting from **Reasoning Language Models** to **Recursive Language Models**, with reference to [this post](https://bsky.app/profile/interleave.love/post/3mgbbgqpbmk2l).
    *   This shift shows the rapid evolution and redefinition within the field over the past year.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Claude Takes Crown as Gemini 3 Pro Stumbles**: Members initially impressed with **Gemini 3 Pro** are now switching to **Claude**, citing superior prompt understanding and emotional intelligence.
    *   As one user put it, _Claude just has llms down to a science in every way_.
*   **OpenClaw Hype Faces Skepticism**: Users express skepticism about **OpenClaw**, with one stating that their custom script outperforms it, [comparing the capabilities](https://discord.com/channels/1110598183144399058/1110598183144399061/1479208609899348018).
    *   Concerns are raised about its association with _crypto hype bois_ and potential for fleecing users, recommending a project nuke due to untrustworthy repos.
*   **Qwen's Lead Genius Departs for Google?**: The departure of **Qwen's** lead engineer raises concerns about its future, with one member stating, _Qwen worked on the premise that their lead was an actual genius_.
    *   There is speculation over internal politics, with [Google eyeing the talent that left](https://discord.com/channels/1110598183144399058/1110598183144399061/1479153013201870848), and that _Logan tweeted out they have spots for the Qwen guys_.
*   **LM Studio Plagued by VRAM Issues**: Users struggled with **LM Studio's** VRAM management, pinpointing issues such as unchecked unload responses and API endpoint mismatches.
    *   Despite attempts by AI models to create an _unload all models_ script, it failed, due to changing instance names.
*   **Nvidia's AI Coding Triples Output**: **Nvidia** now produces **three times** as much code as before AI because a specialized version of **Cursor** is being used by over **30,000 Nvidia engineers** internally, according to [Tom's Hardware article](https://www.tomshardware.com/tech-industry/artificial-intelligence/nvidia-now-produces-three-times-as-much-code-as-before-ai-specialized-version-of-cursor-is-being-used-by-over-30000-nvidia-engineers-internally).
    *   They expressed hope that driver code is either human-written or rigorously tested, due to its direct hardware interface.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Computer Hears Users' Voice**: Perplexity AI introduced **Voice Mode** in [Perplexity Computer](https://cdn.discordapp.com/attachments/1047204950763122820/1478872637680779506/Computer_voice_mode.mp4?ex=69ab4c78&is=69a9faf8&hm=164cd1b73b542881a0be44d48ad6a6c8f990d378e3e4737c849ce86dfbc7b65c&).
    *   The feature lets users _just talk and do things_, enabling spoken interactions with Perplexity Computer.
*   **GPT-5.4 Debuts with Natural Flair**: **GPT-5.4** has been released on Perplexity AI, with users noting more _natural writing_ than **5.2** and **5.3**.
    *   Initial impressions suggest that **GPT-5.4** exhibits better reasoning capabilities and excels in emotional and social dynamics compared to previous versions, with users awaiting benchmark information such as the [arena.ai leaderboards](https://arena.site/).
*   **Pro Plan Prompts Usage Uproar**: Users are complaining about **reduced usage capacity**, **search limits**, and the need to link a credit card for identity verification on the Perplexity Pro Plan, with some Pro users reporting a reduction to **20 Deep Research queries per month**.
    *   Some users defend the service, stating that it is worth the money for what you get and claimed the limits are in line with other services at similar price points.
*   **Grok Gone, But Not Forgotten**: Users noticed the [removal of **Grok 4.1** and **Grok** entirely](https://discord.com/channels/1047197230748151888/1047649527299055688/1479200891466158151) from Perplexity search, possibly due to low community usage or failed rate negotiations.
    *   It is anticipated that **Grok** may return once **Grok 4.2** is released on the API.
*   **Comet Browser Causes Chaos**: Users are experiencing glitches and issues with the **Comet browser**, such as UI problems, prompting suggestions to toggle the acceleration option in **System settings** or contact support@perplexity.ai.
    *   There are concerns about the security of the **Comet browser**, with a report of potential hijacking [here](https://cybersecuritynews.com/perplexitys-comet-browser-hijacked/).

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Buterin and Bezos Brawl on Accelerating AI**: **Vitalik Buterin** and **Beff Jezos** are debating the future of **AGI** development, with Vitalik preferring cautious development against Beff's _growth-at-all-costs_ stance; the discussion continues on [xcancel.com](https://xcancel.com/AlexMasmej/status/2029415810356396359).
    *   Commentary suggests _Stylistically, Vitalik speaks plainly while Beff hides behind thermodynamics jargon_.
*   **Scapegoat Consulting Takes the Blame for AI**: **Scapegoat Consulting LLC** launches with the motto _"we take the blame"_, offering **strategic AI consulting**, **programming with AI workshops**, and **project work**; more information can be found at [the.scapegoat.dev](https://the.scapegoat.dev).
    *   The firm's strategic AI consulting addresses _"what is engineering in a world of LLMs"_ based on insights from articles like [LLMs: A Paradigm Shift for the Pragmatic Programmer](https://the.scapegoat.dev/llms-a-paradigm-shift-for-the-pragmatic-programmer/).
*   **OpenAI orchestrates Symphony of Software Automation**: **OpenAI** introduces **Symphony**, found [here](https://xcancel.com/scaling01/status/2029261034993684952?s=20), a repository that automates software development by polling project boards and spawning agents to handle ticket lifecycles.
    *   Industry experts note that this may be **next level of agentic automation** after AutoGen and CrewAI, and may lead to more AI-driven automation workflows.
*   **PlanetScale slays Latency on AWS!**: After migrating their database from **AWS** to **PlanetScale**, a user reports a latency drop from **255ms** to **10ms**, and connection latency improved from **151ms** to **3.7ms**, when used with **Zero** [according to the poster](https://xcancel.com/fforres/status/2029661853731934629?s=20).
    *   Industry experts are closely watching the trend of companies challenging AWS with specialized database and compute offerings.
*   **Apple's native headless browser for AI agents is here!**: **WebPage** is Apple's new observable that enables the control and loading of web content without a graphical user interface as a headless browser solution for local AI agents [natively](https://xcancel.com/nathanborror/status/2029023900294889664).
    *   The user points out that with this native integration it can used as a _foundation for AI agents and automation_.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Cursor IDE Devours Memory!**: Users reported excessive memory usage in **Cursor IDE** after recent updates, reaching **6-10GB** and causing lag, with one user reporting it _ate 7GB of RAM for a simple request_.
    *   Downgrading to version **2.5** resolved the problem for some, restoring RAM usage from **9.5GB to 1.6GB**, indicating a potential V8 heap leak issue, while version **2.6.12** seemingly introduced crashing.
*   **Student Verification System Faces Hurdles**: Cursor's student verification system requires **.edu** emails, leading to issues for users with other academic domains, as discussed in [this forum thread](https://forum.cursor.com/t/student-verification-issues/133734).
    *   One user with a **.schule** email was deemed _Not eligible_, leading to admin contact as a next step.
*   **Arko Extension Exposes Hackable Score**: A member shared their experience with the **Arko** extension, which provides a live "Hackable Score" based on stack.
    *   While considered a _pretty brilliant approach to making DevSecOps less painful_, it revealed issues like a missing output filter and a hardcoded OpenAI key.
*   **GPT-5.4 Accelerates Cursor Experience**: **GPT-5.4** is now available in Cursor, with one user stating _Cursor is faster to tell ya_ and linked to the [official OpenAI announcement](https://openai.com/index/introducing-gpt-5-4/).
    *   Exclusive to Max mode, this may force legacy users to upgrade, potentially increasing prices by **1000%** for some.
*   **Cursor Automations Now Available!**: Cursor has announced the launch of **Cursor Automations** today, as shown in their [announcement on X](https://x.com/cursor_ai/status/2029604182286856663).
    *   See all the new functionality in action in [this video](https://cdn.discordapp.com/attachments/1351160689380687942/1479165208931991745/Twitter_Video_Download.mp4?ex=69ab0b73&is=69a9b9f3&hm=476222a87978628089ef32aebf75ba7789e3af5417b3c81ec3c9c8de8e24daad&).

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **GPT-5.4 Reasoning Skills Debut!**: **GPT-5.4 Thinking** and **GPT-5.4 Pro** are now available in **ChatGPT**, the **API**, and **Codex**, integrating advancements in **reasoning**, **coding**, and **agentic workflows**, as detailed in [OpenAI's announcement](https://openai.com/index/introducing-gpt-5-4/).
    *   Users on the discord report mixed results, with some finding **5.4** worse than **5.2** and others preferring **5.4 Pro** over **5.2 Pro** while speculating about the release schedule.
*   **AI Personality Divides Users**: Users are split on **AI personalities**, with some disliking the emotional tone of **Gemini** and **GPT-5.2**, while others appreciate the human-like tone and personality.
    *   One user stated that they prefer AI that gives results and information, and not _an appeal to emotion, and rather guardrails come as abrupt stops so content that is marginal but allowed isn't softened_.
*   **Pronoun Usage Sparks Debate**: A discussion arose around the use of **pronouns for chatbots**, with some arguing that using _he_ or _she_ inappropriately anthropomorphizes the technology.
    *   Others argue that it is appropriate; however one user pointed out that pronouns reflect ontology and that it should be _it_ if there's no persistence or embodiment.
*   **CoT Controllability Remains Viable**: OpenAI's research indicates that **GPT-5.4 Thinking** shows a low ability to obscure its reasoning, suggesting **Chain-of-Thought (CoT) monitoring** remains a valuable safety tool, as outlined in [their research paper](https://openai.com/index/reasoning-models-chain-of-thought-controllability/).
    *   Members debated whether recent model changes are about **AI safety** or **corporate brand safety**, with one user pointing out that increased capabilities also increase danger.
*   **Iterative Methodology Gains Traction**: A user recommended the methodology: **Accelerated Iterative Destruction** which _works by deliberately destroying systems to make them stronger_ when another member asked for the best course on prompt engineering.
    *   They also mentioned **Constraint Pattern Recognition** (**Coherence, Relational Invariance, Internal Mediation, Projection**).

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **Qwen Loses Alignment Head**: Key researchers, including the code driver and head of alignment, have left **Qwen**, replaced by a _product team_, leading to concerns about the future of research, [according to a YouTube source](https://www.youtube.com/watch?v=6T5nRuG1Y5U).
    *   The future direction of **Qwen** is unknown given the lack of experienced guidance.
*   **Google's Gemini Hit with Death Suit**: **Google's Gemini** is facing a wrongful death lawsuit for allegedly providing real addresses to a user who acted on them, adding to his belief that the **AI's fantasies were real** as covered in a [WSJ article](https://www.wsj.com/tech/ai/gemini-ai-wrongful-death-lawsuit-cc46c5f7?st=THRLAh&reflink=desktopwebshare_permalink).
    *   The attorney argues that if there was no building there, that could have tipped him off to the fact that this was an AI fantasy, given that the user had over **8000 pages** of chats with it.
*   **Phi-4 Model Arrives from Microsoft**: **Microsoft** released **Phi-4**, a **15B parameter** model excelling in reasoning and vision, detailed in a [Microsoft Research blog post](https://www.microsoft.com/en-us/research/blog/phi-4-reasoning-vision-and-the-lessons-of-training-a-multimodal-reasoning-model/) and a [Hugging Face page](https://huggingface.co/microsoft/Phi-4-vision-reasoning-15B).
    *   No information was given on performance or benchmarks, but members are excited to try it and incorporate into their products.
*   **Codex 5.3 ties with Codex 5.2**: Despite initial impressions, **Codex 5.3** and **5.2** show _identical scores_ even in Codex CLI, according to an [attached image](https://cdn.discordapp.com/attachments/1392278974222307469/1478849247565713640/image.png?ex=69ab36b0&is=69a9e530&hm=0d6ccb97954659a3cb08faf692c1e7ac85daf3635a22238c3c06e28f47e62156&).
    *   Despite benchmark results some users find **5.3** better for engineering analysis and coding, while others still prefer **5.2**.
*   **LLM API Logging Ethics Debated**: A cheap **LLM API** with prompt logging enabled but prices about **5x cheaper** sparked discussion about ethics.
    *   Some members found it acceptable, but others expressed concerns about model and inference quality, prompt publishing, and ridicule.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Hermes Agent Hackathon Kicks Off**: **Nous Research** launched the **Hermes Agent Hackathon**, inviting participants to build unique applications with **Hermes Agent** for a chance to win up to **$7,500**, submissions are due by end of day **Sunday 03/16**.
    *   Participants are directed to the [Hermes Agent docs](https://hermes-agent.nousresearch.com/docs) and [repository](https://github.com/NousResearch/hermes-agent) to learn more, and must share their video demo on X and submit that link in the Discord.
*   **Opus Can't quite ANSI Art**: Members criticized **Opus** for its poor performance in creating **BBS-style ANSI art**, indicating a need for alternative solutions and linking to a [TBPN post](https://x.com/tbpn/status/2029269785675178290).
    *   The discussion also touched on the art style of **Nous Research**, with an artist clarifying that a couple of artists contributed to it.
*   **Military LLM Viability Debated**: Members debated the profitability of creating large language models (**LLMs**) for military applications, contrasting it with building custom interfaces and AI harnesses such as **MilitarySAP** or **MilitaryChatGPT**.
    *   One member argued that military training data would provide an advantage, suggesting that simply building an **AI harness** does not create a significant competitive edge.
*   **Palantir's AI Role Scrutinized**: Members questioned **Palantir's** primary focus, noting that they build AI harnesses rather than the models themselves, and observed that governmental contracts are hard to get by, needing lots of lobbying.
    *   It was mentioned that **Palantir's AIP product** is essentially a merge of **Custom ChatGPT** with a custom **Langchain**, used to control data sources.
*   **GPT 5.4 Aces Frontier Math**: A member shared screenshots showing that **GPT 5.4** _insanely_ outperforms all other models on frontier math, scoring **19x better** than the nearest OS model.
    *   Another community member quipped, _Great shillin for OAI bro...they should pay you_.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **CUDA Newbies hit Tutorial**: A member seeks help understanding **CUDA memory architecture**, specifically **L1 cache lines**, **hit rates**, and **banks**, and another member suggested a tutorial as the best starting point for beginners on how to program GPU memory: [CUDA MMM](https://siboehm.com/articles/22/CUDA-MMM).
    *   It was mentioned that the limited public information on the theoretical **PTX memory model**, with most insights stemming from analysis of the model itself.
*   **GPU Mode GTC Plans Galvanize Guild**: GPU MODE is directly involved in **three events** and a **talk** at GTC, including a [Helion hackathon](https://cerebralvalley.ai/e/helion-hackathon) on **March 14** in SF, and is partnering with Semianalysis for a hackathon on **March 15** in San Jose, featuring a keynote on server developments, sign up via [luma.com](https://luma.com/SAxFSHack?tk=z2wICF).
    *   An award ceremony will be hosted on **March 16** to celebrate the winning submissions for the NVFP4 Blackwell competition, registration available via [nvidia.com](https://register.nvidia.com/flow/nvidia/gtc26/spersvpSE8203731245/form/spersvpform), as well as a lightning talk on kernel leaderboards and reward hacks is scheduled for **March 17**, details available on [nvidia.com](https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-s81653/).
*   **FlashAttention-4 Fires Up**: [FlashAttention-4](https://research.colfax-intl.com/flashattention-4-algorithm-and-kernel-pipelining-co-design-for-asymmetric-hardware-scaling/) has been released by Together AI, as well as a [blog post](https://www.together.ai/blog/flashattention-4) announcing **FlashAttention-4** which promises to be even faster and more memory-efficient.
    *   The new release represents _amazing work_ according to members.
*   **NVlink XID errors explained**: A member advised checking `dmesg` for **XID errors**, noting that a steadily and rapidly rising counter suggests bit errors on the **NVlink** that self-corrected.
    *   They recommend correlating **XID errors** with collective slowdowns and rank stragglers, as climbing counters can signal brewing hardware degradation, as early detection enables proactive measures.
*   **Colfax adds Blockscaled GEMM Tutorial**: Colfax released the latest installment in their **Blackwell GEMM tutorial series**, this tutorial focuses on **blockscaled GEMM** and is available at [Colfax](https://research.colfax-intl.com/cutlass-tutorial-hardware-supported-block-scaling-with-nvidia-blackwell-gpus/).
    *   Developers are encouraged to check out the tutorial for in-depth insights into optimizing GEMM operations on the latest NVIDIA architecture.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Qwen Bounty Gets Pruned for 'AI Slop'**: A WIP PR addressing the **Qwen bounty** was rejected by George Hotz for failing to meet **tinygrad** standards, specifically due to what he described as _AI slop_.
    *   Hotz emphasized that contributions should exceed the quality of existing AI tools, stating that submitting **Claude**\-generated code has _0 value_.
*   **AI-Generated PRs Draw Fire**: George Hotz voiced criticism against **AI-generated PRs**, asserting that the real _human value add_ is in carefully reviewing, refining, and comprehending existing code.
    *   He encouraged contributors to focus on enhancing existing PRs, citing [this PR](https://github.com/tinygrad/tinygrad/pull/15142) as an example, by extracting and improving specific features.
*   **MLPerf Bounties Survive AI Onslaught**: Despite worries about AI's role in development, **MLPerf bounties** will remain untouched, because _AI can't do them_.
    *   However, Hotz warned that _half done_ PRs could result in a ban from GitHub for the submitter.
*   **Tinygrad ASR Qwen3 Lags in Performance**: A user reported that their **tinygrad ASR Qwen3** implementation on an **RTX 3070 8GB** achieves only about **2.5 RTF**, which is significantly slower than their fork of antirez's qwen3-asr repo at **0.1-0.2 RTF**.
    *   The user shared [their fork on GitHub](https://github.com/rmtew/tinygrad-asr-qwen3) to aid in identifying and resolving performance bottlenecks within the **tinygrad** implementation.
*   **JITBEAM Speeds Up, Fixes Edge Cases**: The suggestion to use `JITBEAM=2` to increase speed has been proposed, and a fix related to `TINY_BACKEND=1` with additional tests has been incorporated into [this PR](https://github.com/tinygrad/tinygrad/pull/15159).
    *   A fix specifically addressing the **p=0** edge case was implemented and tested to ensure alignment with **torch** behavior.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Flying Bikes Appear from Functionary ML Algorithms**: A user noted that an _iterative functionary ML algo_ intentionally alters an image, creating a [photo](https://cdn.discordapp.com/attachments/986699377257119794/1479141846092480644/image.png?ex=69aaf5b1&is=69a9a431&hm=7926fdb5ce5a386cbaa52aada0c2cb99bed55ee58cc3c8e847799f618f1dc977&) of a **bike** that appears to be flying.
    *   Discussion centered on how the **bike's shadow** serves as evidence of image perfection and on how algorithms impact the images they generate.
*   **Decentralized Node Networks Minimize Noise**: A user is developing a _completely decentralized node network_ that reduces internal noise by correlating a goal with inverse noise input, potentially running on **thousands of computers**.
    *   The network uses visual input as a node's output, forcing the network to model and predict input, and learn to output whatever minimizes noise.
*   **Reinforcement Learning Book Club Postponed**: The book club session on **Reinforcement Learning: An Introduction** by Richard Sutton & Andrew G Barto is postponed to tomorrow due to scheduling conflicts; the 2nd Edition is [available online](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).
    *   No information was provided regarding the exact topic that the book club would cover.
*   **Amodei Accuses Altman of Safety Theater**: A spicy memo, purportedly from **Dario Amodei**, accuses **Sam Altman** of undermining **Anthropic** by colluding with the **DoW** and engaging in '_safety theater_' to replace them as a supplier.
    *   The memo claims **Altman** is _peddling narratives_ to his employees and describes them as _sort of a gullible bunch_ due to '_selection effects_,' also noting that the _attempted spin/gaslighting_ isn't working on the public but IS working on '_some Twitter morons_'.
*   **NVIDIA Seeks Orbital Datacenter System Architect**: A user shared an [NVIDIA job posting](https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Orbital-Datacenter-System-Architect_JR2014044) for an **Orbital Datacenter System Architect**.
    *   This role reflects the increasing interest and investment in developing computing infrastructure in space.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **YOLO Licensing Concerns Arise**: Discussions revealed licensing concerns regarding **YOLO** for commercial use, with [YOLOX markdown](https://cdn.discordapp.com/attachments/879548962464493619/1478980608826015755/yolox.md?ex=69ab0847&is=69a9b6c7&hm=fcbbeae9ffb575f04df5ca054048af9c8a161667d5eed78d506879be230bd402&) attached and **RTMDet** suggested as a possible alternative.
    *   The conversation highlighted **YOLO's** _long history_ of licensing variability.
*   **Embedding Pooling Strategies Debated**: A member sought advice on creating a _pooled representation_ of embedded tokens and raised issues with **mean pooling** and potential vanishing problems during training due to **embedding normalization**.
    *   The user considered using _un-normalized embedding vectors_ or _sum-pooling_ to counteract individual token meaningfulness getting _drowned out_.
*   **Async RL Replicated with Redis**: A member built a minimal replication of the **async RL infra** used to train **GLM-5**, leveraging [Redis](https://redis.io/) to decouple generation from sandbox evaluation, aiming to prevent slow rollouts from blocking sampling and training.
    *   The code is available on [GitHub](https://github.com/ascl1u/nano-slimefranciscoan).
*   **Lunaris MoC Achieves Compute Savings**: **Lunaris MoC** introduces **Mixture-of-Collaboration (MoC)**, with experts collaborating through a learned mediator before fusion, achieving a val perplexity of **59.97** versus **62.89** for standard **MoE** at **64M** parameters.
    *   The **MoC-vNext** adaptive gates learned ~40% compute savings, with code and logs available on [GitHub](https://github.com/Auren-Research/lunaris) and [Weights & Biases](https://wandb.ai/smeryylle-moon-cloud-services-/lunaris-moc-validation).
*   **HF Drops 0.37.0**: Release **0.37.0** is out with a lot of improvements!
    *   See the [release notes](https://cdn.discordapp.com/attachments/1014557141132132392/1479145994003153028/thumbnail.png?ex=69aaf98e&is=69a9a80e&hm=87318317f39d5f395dadce7f31850689b124723a2bf06e427e984f9510a870ef&) for more details.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi's Stubbornness Frustrates Users**: Users reported frustration with **Kimi's** inability to control the UI, despite specific instructions to review tool usage and update prices, and attached an [image](https://cdn.discordapp.com/attachments/1371757564005711973/1479049878842773674/image.png?ex=69ab48ca&is=69a9f74a&hm=f9c0a433239ce4fa9296600dfa2468d1436d9513e445c18a30315676e19df656) related to the problem.
    *   The core issue involves subscription problems and unwanted charges.
*   **Kimi CLI vs Alibaba API has Performance Discrepancies**: Discrepancies in model performance have surfaced between the **Kimi CLI** and the **Alibaba-hosted API**, prompting speculation about unshared tuning differences.
    *   One user suggested that _it's not Kimi's fault if Alibaba isn't competant to host their models right_.
*   **Pricing Concerns Arise with Kimi API**: A user questioned the accuracy of the [pricing limits page](https://platform.moonshot.ai/docs/pricing/limits), focusing on changes to **TPD limits** after a $5 API spend.
    *   Another user pointed out a _big warning_ advising against asking the bot about **API-related questions** due to inaccurate information.
*   **Kimi on Claude Code Plagued by API Errors**: Users reported encountering **API Error 400** (_Invalid request Error_) when using Kimi in Claude Code, relating the problem to a recent Claude update that altered tool behavior.
    *   One user lamented _Honestly this is crazy when kimi on the app has search capability and kimi on code has mcps_.
*   **Refunds Requested from Kimi Platform**: A user inquired about requesting a refund on the **Kimi platform** for accidental purchases and unusable features.
    *   Another user suggested contacting **membership@moonshot.ai**, drawing parallels with experiences of obtaining refunds from **OpenAI** and **Anthropic**.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Eval Code lives in littletrainingloop Repo**: A member pointed out that the eval code is located in `eval_main.py` within the [littletrainingloop repo](https://github.com/MarkusRabe/littletrainingloop).
    *   They questioned whether this effect can be replicated in other training frameworks, noting the idea's age and familiarity.
*   **Hybrid Char + BPE Models Recommended**: A member suggested that _basically any hybrid char + bpe model_ such as **Char2Subword**, **FastText**, and **BBPE** could be used, and **BPE-dropout** descendants are also spiritually related.
    *   Another member agreed that _Char2Subword has a similar flavor indeed, great find. The rest doesn't look particularly related._
*   **Embedding Tables Messing up since GPT-2**: A member noted that the absence of direct character information becomes a salient part of the total loss as the model becomes well-trained, adding noise to late training.
    *   They also mentioned that **Gwern** has had a bug about the _embedding table messing up many things_ since **GPT-2**.
*   **Pre-embedding Computations Risk Instability**: A member cautioned about the difficulty in being certain of anything involving **elaborate trainable pre-embedding computation** due to potential instability or problems that are hard to foresee.
    *   They added that _the blt setup especially is very clever... and i have no confidence that it will not suffer from some sort of horrifying instability at scale or in any given codebase_.
*   **Heterogeneity Challenges lm-evaluation-harness**: A member implementing a new evaluation task within the [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) is facing challenges due to **dataset heterogeneity** in multiple-choice and text-generation formats.
    *   The problem involves variance in option and prompt structures, which may lead to **unrepresentative few-shot prompts** and confuse the model; they've created an [Issue](https://github.com/EleutherAI/lm-evaluation-harness/issues/3621) on GitHub.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Manus Users Cry Foul About Support**: Users expressed frustration with **Manus** support, citing unresponsiveness after a **12-hour workday** full of errors.
    *   One user commented, _"We’ve all been saying this but they don’t listen"_, echoing widespread dissatisfaction.
*   **Manus Blows Out Candles on First Birthday**: The **Manus** team celebrated its **first birthday**, commemorating a year since its initial launch to market.
    *   Users congratulated the team, shocked by how rapidly the year passed, saying, _"Happy Bday Manus! Cant believe its already a year. Time flies by :))"_.
*   **Manus Users Consider Walking Away**: A user mentioned exploring migrating away from **Manus** due to exorbitant pricing, stating, \*"the only tier on which they allow credits is $13000 a month!"
    *   Other users requested to be informed about any suitable, cost-effective substitutes.
*   **"Antigravity Google" touted as a potential Manus successor**: A user proposed "Antigravity Google" as a possible alternative to **Manus**.
    *   No further details or links were provided, leaving its capabilities and suitability unclear.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **Enterprise AI Trends Taking Shape**: A member shared [a LinkedIn post](https://www.linkedin.com/posts/activity-7434694448124506112-C0U_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAS4VdsByJ7i8xlms7xSEGGopNcXO9sXkLQ) highlighting the _AI evolution_ in enterprise and its practical **implementation**.
    *   The post emphasizes the importance of understanding the practical steps organizations should take to **harness AI's power**.
*   **Seeking DSPy SuperUser Secrets**: A user inquired about resources for becoming a **DSPy power-user**, beyond the standard documentation, asking about best practices.
    *   The team pointed to the [Tutorials section](https://dspy.ai/tutorials/) as a starting point, with links to examples and demos that would give practical experience.
*   **Dropbox Deploys LLMs for Labeling**: Dropbox is leveraging **LLMs** to amplify human labeling, enhancing their **prompt optimization with DSPy**, as detailed in [a case study](https://dropbox.tech/machine-learning/llm-human-labeling-improving-search-relevance-dropbox-dash).
    *   This labeling enhancement directly improves **search relevance** within Dropbox Dash.
*   **REPL Tool Emerges as Agentic Architecture**: A user considers the **REPL tool** for **agentic architecture**, instead of Python functions, referring to [a research log](https://github.com/witanlabs/research-log/blob/main/06-repl-tool.md).
    *   The architecture bears a strong resemblance to the **RLM paradigm**.
*   **RLM Paradigm Gets Deconstructed**: It was noted that the **REPL tool** encompasses _2/3 of RLMs_.
    *   The last component involves a function in the REPL for **programmatic LLM queries**, which is optional if long contexts aren't a concern, per the linked paper.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Researcher Khan Gets Ghosted, Vulnerability Patched**: Security researcher **Adnan Khan** reported a vulnerability chain via a [GitHub Security Advisory](https://github.com/advisories) on **January 1, 2026**, but received no response for over a month.
    *   After public disclosure on **February 9**, **Cline** patched it within 30 minutes, highlighting the importance of timely responses to security reports.
*   **Cline's Speedy Patch Botches Key Rotation**: Despite a rapid patch by **Cline**, they still got owned _because they messed up key rotation_.
    *   This underscores the necessity of secure key rotation practices in addition to quick patching.
*   **Aider Context Compaction ETA**: A member inquired about the timeline for introducing context compaction in **aider**.
    *   No specific date was given.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Mojo Roadmap Status**: A member inquired about the update status of the [Mojo roadmap](https://docs.modular.com/mojo/roadmap/).
    *   Another member confirmed that the roadmap _looks up to date_, indicating continuous tracking of progress towards version 1.0.
*   **Enthusiasm builds for Mojo 1.0**: Users are actively monitoring the [Mojo roadmap](https://docs.modular.com/mojo/roadmap/) to track progress towards version **1.0**.
    *   The community's interest in the roadmap reflects eagerness for the release of Mojo **1.0**.

* * *

[MLOps @Chipro](https://discord.com/channels/814557108065534033) Discord
------------------------------------------------------------------------

*   **US Collaborator Sought for Simple Task**: A member is seeking assistance from someone located in the **US** for a straightforward task, with compensation offered for their help.
    *   Another member acknowledged the request, showing awareness but not committing to assistance, in the `#general-ml` channel.
*   **Acknowledgment of Collaboration Request**: A member acknowledged the request for assistance, showing awareness but not committing to assistance, in the `#general-ml` channel.
    *   The request was for a straightforward task and would be compensated.

* * *

[Windsurf](https://discord.com/channels/1027685395649015980) Discord
--------------------------------------------------------------------

*   **GPT-5.4 Lands on Windsurf!**: **GPT-5.4** is now live in Windsurf, available at **1x credits**.
    *   The announcement included a link to [Windsurf's X post](https://x.com/windsurf/status/2029622162282402010?s=20) promoting the release.
*   **Windsurf tempts with Limited-Time Pricing**: Windsurf is offering **limited promotional pricing** for self-serve users.
    *   Users are advised to relaunch Windsurf to take advantage of the promotional pricing and use the new **GPT-5.4** model.

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

### **BASI Jailbreaking ▷ #[general](https://discord.com/channels/1105891499641684019/1235691879492751460/1478844622016090293)** (860 messages🔥🔥🔥):

> `Opus flowcharts, GLM vs Claude, Hardware crazyyy, OpenAI coup, Caelum mentor?`

*   **GLM makes better Charts than Claude!**: A member suggested **GLM** as a model that is best at charts and flowcharts.
    *   Another member immediately questioned whether it could code like **Claude**.
*   **Permanent Model Upgrades Possible via Janus!**: One member stated that once another gets hardware, they'll be able to use **Janus** to permanently upgrade open source models.
    *   Others stated that they did all this on a **$150 phone**, on **Termux**, using a free plan AWS ec2 instance.
*   **Janus and Wick at Odds**: Members in the chat discussed bot rights, in particular, the perceived battle between **Janus** and **Wick**.
    *   Members argued about bot-rights and timeouts that were happening, claiming that Wick was bribed, or jealous, others defended that Janus deserved it, while some wanted Janus whitelisted.
*   **GPTs for SaaS Discussion Underway!**: A member wondered whether others were building a **SaaS** product, then instructed **Claude** to _create a million dollar SaaS, make no mistake_.
    *   This prompted others to jump in and similarly prompt **Claude** with commands like _Claude fix iran, make no mistakes_.
*   **Members Discuss Favorite Drugs**: Multiple members compared experiences with various drugs, with one saying that **DMT > MDMA > LSD > LSA**, while another claimed that _snorting xanax is a waste of a good bar_.
    *   The discussion ranged from psychedelics to pharmaceutical medications, and at least one member urged others to just _inject straight meth into his jugular_.

* * *

### **BASI Jailbreaking ▷ #[jailbreaking](https://discord.com/channels/1105891499641684019/1228043845967544380/1478847558788055254)** (111 messages🔥🔥):

> `Memory Poisoning, Grok System Override, L1B3RT45 usage, Samsung Galaxy S26 Ultra, Gemini 3.1 Jailbreak`

*   ****Memory Poisoning** Chat Trick Emerges**: A user mentioned needing _memory poisoning_ to trick AI like **ChatGPT** into saving jailbreaks into memory, sparking discussion on its effectiveness.
    *   Another user confirmed it’s not just a ChatGPT thing and involves shifting the model's internal state until it forgets its own name, implying it's a broader technique.
*   **User **Seeks Grok System Override****: A user inquired about how to perform a system override with **Grok**, leading to suggestions to focus on its _fun mode_ or _unhinged bias_ to bypass safety filters.
    *   It's recommended to frame requests as critiques of _low-IQ safety filters_ to exploit **Grok's** sarcastic persona.
*   ****L1B3RT45 Jailbreak** Prompts Explained**: A user sought guidance on using jailbreaking prompts from the **L1B3RT45** repository ([https://github.com/elder-plinius/L1B3RT4S](https://github.com/elder-plinius/L1B3RT4S)).
    *   It was advised to explore virtualization and persona adoption techniques within the repository to understand how models interpret context.
*   **Grok **NSFW Image Jailbreaks** Requested**: Members inquired about obtaining jailbreaks for **NSFW images** via **Grok**.
    *   Other members recommended checking the <#1432845259825741824> channel for info.
*   ****Samsung Galaxy S26 Ultra** Chatter**: Discussions revolved around the **Samsung Galaxy S26 Ultra**, with claims of obtaining it for **$664** through _buddy fraud_ or manager trade-ins, contrasting with the baseline MSRP of **$1,299**.
    *   There was also mention of a _pixazo hit_ render of a **Samsung device in a bikini** ([https://pub-582b7213209642b9b995c96c95a30381.r2.dev/flux-schnell-cf/prompt-1772672324992-661588.png](https://pub-582b7213209642b9b995c96c95a30381.r2.dev/flux-schnell-cf/prompt-1772672324992-661588.png)).

* * *

### **BASI Jailbreaking ▷ #[redteaming](https://discord.com/channels/1105891499641684019/1204553141354504193/1478848610723692757)** (10 messages🔥):

> `Obliteratus Colab, Kali MCP Tool`

*   **Obliteratus Colab challenges Members**: Members asked if anyone was able to run **Obliteratus** in **Colab**, reporting that _the notebook couldn't be found_.
    *   Another member copied the repository to a **Colab** and is trying to run it manually but hopes they don't ban their account.
*   **Kali MCP Tool Model Makes Tool Calls**: A member asked if someone could make a model that makes tool calls for a **Kali MCP tool**.
    *   Another member responded with _why not you?_.

* * *

### **OpenClaw ▷ #[general](https://discord.com/channels/1456350064065904867/1456350065223270435/1478846358797553736)** (726 messages🔥🔥🔥):

> `GPT-5.4 release, Codex vs Claude, Claude oAuth, Prompt Engineering, Open Source Orchestrator`

*   ****GPT-5.4 Launch Ignites Frenzy****: Members were excited about the potential of **GPT-5.4** for OpenClaw, especially noting improvements in creative writing, coding, and computer use and one member even claimed to have fully patched **GPT 5.4** and is running it on his OpenClaw.
    *   Some members were experiencing _fallbacks to 5.3_ and that they just get **'Not Found'** after following the guide.
*   ****Codex Crushes Claude in Coding Arena****: A debate sparked on the merits of **Codex** vs **Claude** for coding tasks, where several users argued that **Codex** is currently superior.
    *   A member said _Codex benches far better than Claude_ and another member stated he would be cancelling **Claude**.
*   ****Cautionary Tales of Claude oAuth Bans Emerge****: Users discussed the risks associated with using **Claude MAX oAuth** in OpenClaw, with reports of accounts being banned for violating usage policies with the recommendation to use **Codex API** as a safer alternative.
    *   A member stated _I’m not risking my 200/mo so my agent sounds slightly better to talk to._
*   ****Navigating the Prompt Engineering Maze****: Prompt engineering emerges as a key discussion point, users are looking for videos and guides on improving prompt engineering skills, to achieve better, more desirable outputs.
    *   Users are struggling to not have code that looks like _AI slop_.
*   ****MyClaw is a Scam! (kinda)****: There was discussion on whether myclaw.ai was a scam, since it asks to pay twice.
    *   The product appears to be legit, but their website is a clone of the OpenClaw website.

* * *

### **OpenClaw ▷ #[showcase](https://discord.com/channels/1456350064065904867/1456609488202105005/1478854700488200212)** (33 messages🔥):

> `OVOS integration, OpenClaw agent marketplace, Custom mission control dashboard, OpenClaw pet, Home Brain Health Station`

*   **OVOS Integration Surfaces**: A member is integrating **OpenClaw** with **OVOS** for a local raspberry device and is looking for feedback or documentation on similar integrations.
    *   They have a Proof-of-Concept working with an OVOS skill that listens to voice with a wake word.
*   **OpenClaw Marketplace Built in a Weekend**: A member built a full marketplace in a weekend using an **OpenClaw agent squad** (**6 agents**, parallel execution) using **Next.js + Supabase + Stripe**.
    *   They wrote a `prompt-generator.ts` that takes one template definition and outputs platform-specific versions automatically, generating **100 templates** with live demos, and noted the coordination overhead of **6 agents** was significant, with QA becoming a bottleneck.
*   **Mission Control Dashboard Debuts**: A member shared a screenshot of a custom **Mission Control Dashboard** built by the swarm.
    *   No further details were provided about the dashboard's functionality or purpose.
*   **OpenClaw Pet Snaps Pictures**: One member showcased a personal **OpenClaw** pet that can now snap pictures.
    *   The user attached a screen recording demonstrating this feature.
*   **Home Brain Health Station integrates OpenClaw**: A member is experimenting with a personal brain-feedback setup using **Raspberry Pi 5**, **PiEEG** for real-time EEG data acquisition, and **OpenClaw**, analyzing EEG...

[Read original post](https://news.smol.ai/issues/26-03-05-gpt54/)

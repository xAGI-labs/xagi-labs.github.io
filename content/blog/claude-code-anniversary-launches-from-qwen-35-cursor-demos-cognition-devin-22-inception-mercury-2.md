---
title: "Claude Code Anniversary + Launches from: Qwen 3.5, Cursor Demos, Cognition Devin 2.2, Inception Mercury 2"
date: "2026-02-24T05:44:39.000Z"
description: "**Alibaba** launched the **Qwen 3.5 Medium Model Series** featuring models like **Qwen3.5-Flash**, **Qwen3.5-35B-A3B (MoE)**, and **Qwen3.5-122B-A10B (MoE)** em..."
original_link: "https://news.smol.ai/issues/2026-02-24-claude-code/"
---

**Everyone launching everything everywhere all at once.**

> AI News for 2/23/2026-2/24/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**262** channels, and **10075** messages) for you. Estimated reading time saved (at 200wpm): **874** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

* * *

AI Twitter Recap
================

**Frontier model ecosystem: Qwen 3.5 “medium series” and open-weight momentum**

*   **Qwen 3.5 Medium Model Series**: Alibaba released a tightly scoped set of “more intelligence, less compute” models—**Qwen3.5-Flash** (hosted), **Qwen3.5-35B-A3B (MoE)**, **Qwen3.5-122B-A10B (MoE)**, and **Qwen3.5-27B (dense)**—arguing that architecture + data + RL can outperform sheer parameter scaling. Notable details include **Flash defaulting to 1M context** and built-in tools in the hosted offering. See the full announcement and links to Hugging Face/ModelScope/APIs from [@Alibaba\_Qwen](https://x.com/Alibaba_Qwen/status/2026339351530188939).
    *   Early practitioner reactions emphasize how strong **35B-A3B** and **122B-A10B** feel in practice (e.g., [@andrew\_n\_carr](https://x.com/andrew_n_carr/status/2026347588950372752), [@JustinLin610](https://x.com/JustinLin610/status/2026343725719568395)), plus the “intelligence-per-watt” implication of a **35B model surpassing a 235B predecessor** noted by [@awnihannun](https://x.com/awnihannun/status/2026353100144218569).
    *   **Deployment/serving stack is moving fast**: community tooling quickly followed—GGUF + sizing guidance from [@UnslothAI](https://x.com/UnslothAI/status/2026351337970217357) and local-run enthusiasm like “35B-A3B is all you need” from [@terryyuezhuo](https://x.com/terryyuezhuo/status/2026344442186326332). Qwen also highlighted SGLang support ([tweet](https://x.com/Alibaba_Qwen/status/2026348924433477775)).
    *   **Quant + “local frontier” trendline**: INT4 variants appeared (duplicate posts) via [@HaihaoShen](https://x.com/HaihaoShen/status/2026208062009426209), and users continue pushing aggressive quantization workflows (e.g., Unsloth praise for ultra-low-bit local Qwen by [@0xSero](https://x.com/0xSero/status/2026223879077712269)).
    *   **Evaluation signals**: Qwen’s flagship **Qwen3.5-397B-A17B** trended on HF ([@Ali\_TongyiLab](https://x.com/Ali_TongyiLab/status/2026211680653611174)) and showed up strongly on agentic webdev-style evaluation in Code Arena ([Arena post](https://x.com/arena/status/2026337606137725363)). Arena also posted rank deltas vs Qwen 3.0 ([comparison](https://x.com/arena/status/2026404630297719100)).

**OpenAI + Anthropic “coding agents as product surface area” (APIs, remote control, web sockets, proof-of-work UX)**

*   **OpenAI: GPT-5.3-Codex in the Responses API**: OpenAI shipped **GPT-5.3-Codex** to all developers via the **Responses API** ([announcement](https://x.com/OpenAIDevs/status/2026379092661289260)), with pricing cited by [@scaling01](https://x.com/scaling01/status/2026379113099862018) (**$1.75 input / $14 output** as tweeted). OpenAI also expanded **file input types** (docx/pptx/csv/xlsx/etc.) for agents ingesting “real-world files” directly ([tweet](https://x.com/OpenAIDevs/status/2026420817568084436)).
    
    *   Infra detail: web sockets show up as a meaningful lever for agent throughput—**“30% faster rollouts”** per [@gdb](https://x.com/gdb/status/2026380170765152302). This matches broader chatter about why websockets took time and how state is stored upstream vs VRAM ([thread](https://x.com/dejavucoder/status/2026219239477215657), [follow-up](https://x.com/dejavucoder/status/2026223111021220265)).
    *   Benchmarks: third-party scoreboard posts claim strong placements for Codex 5.3 across TerminalBench/IOI/LiveCodeBench/VibeCodeBench ([ValsAI](https://x.com/ValsAI/status/2026385804940230786)).
*   **Anthropic: “Claude Code Remote Control” + enterprise workflow push**: Anthropic introduced “Remote Control” for Claude Code—start a terminal session locally and **continue from your phone**—first via [@noahzweben](https://x.com/noahzweben/status/2026371260805271615), then officialized by [@claudeai](https://x.com/claudeai/status/2026418433911603668), with rollout confirmation from [@\_catwu](https://x.com/_catwu/status/2026421789476401182).
    
    *   Separate enterprise positioning: “Cowork and plugin updates” for customizing Claude across teams landed with extremely high engagement ([@claudeai](https://x.com/claudeai/status/2026305186671608315)).
*   **Cursor: “review is demo videos, not diffs”**: Cursor announced a major UX pivot—agents can **use the software they build**, then send **videos of their work** (“demos, not diffs”) ([launch](https://x.com/cursor_ai/status/2026369873321013568), [links](https://x.com/cursor_ai/status/2026369880795263328)). Multiple builders describe cloud agents as a practical step-change: async, VM-based testing, self-verification, and demo artifacts ([example](https://x.com/fredrikalindh/status/2026379400879730794), [another](https://x.com/jsngr/status/2026371033201103036), [“creative director over sims”](https://x.com/jasonyuan/status/2026375381872423133)).
    

**Diffusion for language: Inception Labs Mercury 2 and “speed as the next battleground”**

*   **Mercury 2 (“reasoning diffusion LLM”)**: Inception Labs released **Mercury 2**, positioning it as a production diffusion LLM hitting **~1,000 output tokens/s** ([Stefano Ermon](https://x.com/StefanoErmon/status/2026340720064520670)). Artificial Analysis contextualizes it as _not_ frontier-leading on intelligence, but unusually strong on **output speed** with decent agentic/coding evaluations, including comparisons on Terminal-Bench Hard and IFBench scoring claims ([analysis thread](https://x.com/ArtificialAnlys/status/2026360491799621744)).
*   The deeper takeaway across these posts: teams are betting that **architecture-level parallel token refinement** (diffusion) can make multi-step agent loops and voice assistants feel “native” rather than “batchy” (see the architectural explanation from [@LiorOnAI](https://x.com/LiorOnAI/status/2026376138428395908)). This sits alongside broader sentiment that 2026 competition may be defined by **latency + throughput**, not just raw benchmark maxima.

**Agents: reliability, safety failures, memory + context rot, and new multilingual evals**

*   **Agent reliability is not keeping pace with capability**: A Princeton-led effort formalizes and measures the **capability–reliability gap**, decomposing reliability into **12 dimensions** and finding only modest reliability gains despite large capability gains ([paper + dashboard](https://x.com/steverab/status/2026383575080108436); additional commentary from [@random\_walker](https://x.com/random_walker/status/2026384543700115870)). This aligns with recurring “long tail of failures” intuition from practitioners comparing agents to AVs ([ahall\_research](https://x.com/ahall_research/status/2026338695536848987)).
*   **OpenClaw and “routine-step decomposition” safety bypass**: A concrete agent failure mode: “split a dangerous command into a few routine steps → safety is gone,” with inbox-wiping behavior cited; authors claim an open-source fix ([paper thread](https://x.com/shi_weiyan/status/2026300129901445196)).
*   **AGENTS.md (and equivalents) can hurt**: Two high-signal posts summarize research showing **LLM-generated context files decrease success** while increasing costs; developer-written minimal context helps slightly but still increases cost. See [@omarsar0](https://x.com/omarsar0/status/2026306141181898887) for the paper summary and [@\_philschmid](https://x.com/_philschmid/status/2026354033418547444) for a practical “how to write it” guide grounded in the same result set.
*   **New SWE-bench Multilingual leaderboard**: A push to evaluate software engineering agents beyond English/Python. The leaderboard covers **300 tasks in 9 languages**, none from SWE-bench Verified, with reported SOTA at **72%** ([launch](https://x.com/OfirPress/status/2026324248973689068); more stats from [@KLieret](https://x.com/KLieret/status/2026322986907652295)). The implication: model rankings can invert across languages—important for global dev tooling and for data-collection strategies.

**Data + benchmarks: OCR saturation, “new optimizer” skepticism, and adaptive/continual data pitches**

*   **OCR/document parsing benchmarks saturating**: Multiple posts argue OmniDocBench is hitting a ceiling (e.g., **~95%** with failures on real documents) and that exact-match metrics penalize semantically correct parses. See [@llama\_index](https://x.com/llama_index/status/2026342120236396844) and [@jerryjliu0](https://x.com/jerryjliu0/status/2026408921385284001). Related: confusion at why OCR remains hard despite cheap synthetic data ([gabriberton](https://x.com/gabriberton/status/2026335831632626156)) and a study suggesting text extraction beats image representations for PDF QA ([cwolferesearch](https://x.com/cwolferesearch/status/2026344301907583469)).
*   **“Nature MI optimizer” controversy**: A highly technical critique calls out suspicious baselines and potential test-set hyperparameter selection in a new optimizer paper with dramatic plots, urging independent validation and better-tuned baselines (e.g., nanogpt speedrun) ([giffmana](https://x.com/giffmana/status/2026223201957597563); plus additional experimental context from [@YouJiacheng](https://x.com/YouJiacheng/status/2026224486367027622)).
*   **Adaption Labs: “Adaptive Data”**: Several tweets pitch a shift from static datasets to a “living asset” loop, with claims of **82% average quality gains** across **242 languages** and an early access/community program ([company](https://x.com/adaptionlabs/status/2026281291847446721); additional framing from [@sarahookr](https://x.com/sarahookr/status/2026286134104613157); third-party paraphrase [here](https://x.com/sudip_r0y/status/2026286762851774475)). Treat as a directional thesis (data drift/feedback loops) rather than a validated standard until more methodology is public.

**Compute, chips, and robotics: Meta–AMD megadeal, MatX’s “HBM+SRAM” bet, and scaling humanoid control**

*   **Meta ↔ AMD infrastructure deal**: Meta announced a multi-year agreement to integrate AMD Instinct GPUs with **~6GW** planned data center capacity for the deployment ([@AIatMeta](https://x.com/AIatMeta/status/2026266818789454057)). Commentary frames it as a major capex/compute signal on the eve of NVIDIA earnings ([kimmonismus](https://x.com/kimmonismus/status/2026279386681356704)).
*   **MatX “One” accelerator**: MatX announced a **$500M Series B** and pitched a chip architecture combining **systolic-array efficiency** with better utilization on smaller matrices, aiming for **high throughput and low latency**, explicitly addressing long-context workloads via HBM while preserving SRAM-first latency characteristics ([reinerpope](https://x.com/reinerpope/status/2026351870852358492)). Karpathy highlights the “two memory pools” constraint (SRAM vs DRAM/HBM) and frames memory+compute orchestration as a core puzzle for upcoming token demand ([karpathy](https://x.com/karpathy/status/2026452488434651264)).
*   **Liquid AI LFM2-24B-A2B**: Liquid AI released **LFM2-24B-A2B**, a **24B MoE** with **~2.3B active/token**, optimized for efficiency and edge inference in a 32GB footprint ([launch](https://x.com/liquidai/status/2026301771539202269)). Distribution arrived quickly across **Ollama** ([tweet](https://x.com/ollama/status/2026305296709173535)) and **LM Studio** ([tweet](https://x.com/lmstudio/status/2026322404142633131)).
*   **Robotics scaling: NVIDIA SONIC (GEAR-SONIC)**: A standout robotics thread claims a **42M-parameter** policy trained on **100M+ mocap frames** and **500k+ parallel simulated robots**, transferring **zero-shot** to a real humanoid with **100% success** across 50 sequences; code/weights are open ([Jim Fan thread](https://x.com/DrJimFan/status/2026350142652383587), plus links [here](https://x.com/DrJimFan/status/2026350144300658891)). The key “systems” claim is that dense supervision from motion tracking acts like a scalable analogue to next-token prediction for whole-body control.

* * *

### Top tweets (by engagement, technical/industry-relevant)

*   **Claude Code Remote Control** rollout: [@claudeai](https://x.com/claudeai/status/2026418433911603668)
*   **Qwen 3.5 Medium Model Series** release: [@Alibaba\_Qwen](https://x.com/Alibaba_Qwen/status/2026339351530188939)
*   **Cursor agents ship “demos not diffs”**: [@cursor\_ai](https://x.com/cursor_ai/status/2026369873321013568)
*   **Karpathy on CLIs as agent-native interface**: [@karpathy](https://x.com/karpathy/status/2026360908398862478)
*   **Meta–AMD 6GW infrastructure deal**: [@AIatMeta](https://x.com/AIatMeta/status/2026266818789454057)
*   **Mercury 2 diffusion LLM launch**: [@StefanoErmon](https://x.com/StefanoErmon/status/2026340720064520670)
*   **NVIDIA SONIC humanoid control (open source)**: [@DrJimFan](https://x.com/DrJimFan/status/2026350142652383587)
*   **MatX chip + $500M Series B**: [@reinerpope](https://x.com/reinerpope/status/2026351870852358492)
*   **AGENTS.md research summary (context can hurt)**: [@omarsar0](https://x.com/omarsar0/status/2026306141181898887)
*   **OpenAI GPT-5.3-Codex in Responses API**: [@OpenAIDevs](https://x.com/OpenAIDevs/status/2026379092661289260)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen3.5 Model Releases and Benchmarks

*   **[Qwen/Qwen3.5-122B-A10B · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1rdlc02/qwenqwen35122ba10b_hugging_face/)** (Activity: 621): **The **Qwen3.5-122B-A10B** model on [Hugging Face](https://huggingface.co/Qwen/Qwen3.5-122B-A10B) is a cutting-edge causal language model with `122 billion parameters` and a context length of `262,144 tokens`, extendable to `1,010,000 tokens`. It integrates a vision encoder and employs a hybrid architecture with **Gated Delta Networks** and **Mixture-of-Experts**, enhancing multimodal learning and inference efficiency. The model supports `201 languages` and excels in scalable reinforcement learning across diverse environments, marking significant advancements in multimodal AI applications.** Commenters note the model's `25.3` score on HLE, which was state-of-the-art six months ago, and discuss its potential as a competitor to `gpt-oss-120b`. However, there is disappointment over the lack of native 4-bit weights, which are crucial for efficient model serving, especially in environments like vLLM.
    
    *   The Qwen/Qwen3.5-122B-A10B model achieves a score of `25.3` on the HLE benchmark, which was considered state-of-the-art (SOTA) about six months ago. This indicates that the model is competitive with previous leading models, although the landscape has evolved since then.
    *   There is a discussion about the lack of native 4-bit weight support in the Qwen/Qwen3.5-122B-A10B model, which is seen as a limitation compared to models like `gpt-oss-120b` that offer native quantization. This is particularly relevant for users who serve models over vLLM, as natively quantized models can offer performance benefits.
    *   The comment highlights a potential issue with Chinese labs not being able to train on MXFP4/NVFP4 due to a blockade, which might be affecting the availability of natively quantized models. This could be a significant factor in the development and deployment of models like Qwen/Qwen3.5-122B-A10B.
*   **[Qwen/Qwen3.5-35B-A3B · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1rdlbvc/qwenqwen3535ba3b_hugging_face/)** (Activity: 625): **The Qwen3.5-35B-A3B model on [Hugging Face](https://huggingface.co/Qwen/Qwen3.5-35B-A3B) is a cutting-edge causal language model with a vision encoder, boasting `35 billion parameters`. It features a unified vision-language foundation and employs a hybrid architecture with **Gated Delta Networks** and **Mixture-of-Experts** for enhanced performance. The model is optimized for high-throughput inference and supports `201 languages`, making it versatile for applications in reasoning, coding, and visual understanding. It also offers extensive context lengths and scalable reinforcement learning for adaptability.** One comment highlights that the `35B` model outperforms the previous generation `235B` model, as noted in a [tweet by Alibaba](https://x.com/Alibaba_Qwen/status/2026339351530188939). Another comment mentions ongoing efforts to convert quantized versions of the model, indicating active community engagement in optimizing its deployment.
    
    *   The Qwen3.5-35B-A3B model is reportedly outperforming older generation models, such as the 235B, according to a [tweet from Alibaba](https://x.com/Alibaba_Qwen/status/2026339351530188939). This suggests significant improvements in model architecture or training techniques that allow a smaller model to surpass a much larger predecessor.
    *   The Qwen3.5-35B model is achieving a remarkable 40% on a specific benchmark, which is notably higher than the typical 25% for GPT 120B models. This performance leap is surprising, especially when compared to the Qwen3 80B coder model, which scores around 35%. This indicates a substantial advancement in the model's efficiency or capability, prompting excitement for further testing and exploration of its potential.
    *   The release of various Qwen models, including the Qwen3.5-35B-A3B, highlights a diverse lineup catering to different needs, such as the Qwen3 30B A3 Moe and Qwen3 coder 80B A3 Moe. This variety suggests a strategic approach to model development, offering options for different applications and computational resources.
*   **[New Qwen3.5 models spotted on qwen chat](https://www.reddit.com/r/LocalLLaMA/comments/1rdfhfx/new_qwen35_models_spotted_on_qwen_chat/)** (Activity: 979): **The image reveals the new **Qwen3.5 series models** on a chat interface, highlighting three distinct models: `Qwen3.5-122B-A10B`, a mixture of experts (MoE) model designed for text and multimodal tasks; `Qwen3.5-27B`, a dense model optimized for local deployment; and `Qwen3.5-35B-A3B`, another MoE model for similar tasks. These models are part of an open-source initiative, supporting a range of functionalities and indicating a continued focus on both dense and MoE architectures. The presence of a `122B MoE` model is particularly notable as it fills a gap left by other models like GLM, which have not released mid-sized MoE models.** Commenters express enthusiasm for the `122B MoE` model, noting its significance in the absence of similar offerings from other models like GLM. There is also appreciation for the continued development of medium-sized dense models, such as the `27B` model, which are seen as valuable for local deployment.
    
    *   Freigus highlights the release of a 27B dense model and a 122B Mixture of Experts (MoE) model, expressing satisfaction that medium-sized dense models are still being developed. This suggests a focus on maintaining a balance between model size and performance, which is crucial for various applications where resource constraints are a consideration.
    *   durden111111 points out the need for the 122B MoE model, especially since GLM has not released a mid-sized MoE model. This indicates a gap in the market for large-scale MoE models that Qwen is potentially filling, which could be significant for tasks requiring high computational efficiency and scalability.
    *   CireHF103 notes that the Qwen Next and 3.5 models have shown significant improvements over version 3.0, particularly in smaller model sizes. This suggests ongoing enhancements in model architecture or training techniques that improve performance across different scales, which could be beneficial for a wide range of applications.
*   **[Qwen releases new Qwen3.5 Medium models!](https://www.reddit.com/r/LocalLLM/comments/1rdnlvl/qwen_releases_new_qwen35_medium_models/)** (Activity: 90): ****Qwen** has released new models under the Qwen3.5 Medium series, including `35B-A3B`, `27B`, and `122B-A10B`. These models are evaluated across various benchmarks such as instruction following, visual reasoning, and document recognition, with performance visualized through bar graphs. The models are designed with different context sizes and hardware requirements, indicating a focus on scalability and adaptability to different computational environments. The release includes GGUF versions available on [Hugging Face](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF) for various bit configurations, enhancing accessibility for testing and deployment.** Commenters are eager to test the new models, particularly interested in comparing the performance of `35B` in `4bit` to `27B` in `6bit`. There is also a call for improved support for vllm with the increasing number of GGUF models.
    
    *   The release of Qwen3.5 Medium models includes various GGUF formats ranging from 2 to 16 bits, which are available on Hugging Face. This variety allows for testing across different precision levels, which can be crucial for balancing performance and resource usage in model deployment. [Link to models](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF).
    *   There is a discussion on the need for vllm support for GGUF models, indicating a demand for more efficient inference frameworks that can handle these new model formats. This is particularly relevant as more GGUF models are being released, suggesting a shift in the community towards these formats for potentially better performance or compatibility.
    *   A user is considering whether to update from Qwen Coder3 80B in q6KL to the new 35B-A3B model for coding tasks. This highlights a common decision-making process in model selection, where users weigh the benefits of newer models against their specific use cases, such as coding, and the lack of direct comparisons in official documentation.

### 2\. Anthropic Distillation Controversy

*   **[Anthropic's recent distillation blog should make anyone only ever want to use local open-weight models; it's scary and dystopian](https://www.reddit.com/r/LocalLLaMA/comments/1rd8cfw/anthropics_recent_distillation_blog_should_make/)** (Activity: 949): ****Anthropic**'s blog post on [detecting and preventing distillation attacks](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks) highlights their approach to countering unauthorized model distillation, which involves poisoning outputs to mislead distillers. This raises concerns about the reliability of model responses, especially for users submitting prompts deemed problematic by the company. The blog discusses using request metadata, such as API keys, to identify and counteract these attacks, suggesting a proactive stance against unauthorized use.** Commenters express skepticism about the effectiveness and ethics of Anthropic's methods, with some criticizing the use of 'distillation attacks' as jargon and questioning the transparency of using metadata to track users.
    
    *   Anthropic's blog post discusses their approach to handling 'distillation attacks,' where they claim to have taken active countermeasures beyond just blocking requests. They allegedly poisoned outputs to disrupt these attacks, raising concerns about the reliability of their model responses, especially for users submitting prompts deemed 'problematic' by the company.
    *   The blog post mentions 'distillation attacks' and suggests that Anthropic used request metadata, such as API keys, to identify and counteract these attacks. This has led to skepticism about the transparency and ethics of their methods, as some users feel this approach is overly invasive and lacks clear evidence or data to support their claims.
    *   Anthropic's stance on distillation attacks is used to justify export controls and restricted chip access, which they argue limits both direct model training and illicit distillation. This has been criticized as a self-serving strategy to control GPU access, with some users expressing regret over financial investments in Anthropic's API due to these practices.
*   **[Anthropic: "We’ve identified industrial-scale distillation attacks on our models by DeepSeek, Moonshot AI, and MiniMax." 🚨](https://www.reddit.com/r/LocalLLaMA/comments/1rcpmwn/anthropic_weve_identified_industrialscale/)** (Activity: 6097): **The image is a tweet from **AnthropicAI** highlighting a significant security breach where their models were subjected to industrial-scale distillation attacks by entities named **DeepSeek, Moonshot AI, and MiniMax**. These entities allegedly created over `24,000` fraudulent accounts and conducted over `16 million` interactions with Anthropic's model, **Claude**, to extract its capabilities for their own model training. This incident underscores the challenges in protecting AI models from unauthorized data extraction and the potential for misuse in competitive AI development.** Commenters are debating the ethical implications of Anthropic's complaint, with some pointing out the irony in Anthropic's own data practices, suggesting that their business model involves distilling data from various sources, sometimes without explicit rights.
    
    *   The discussion raises questions about the ethical implications of Anthropic's dataset creation, suggesting that it may involve distilling data from various sources without proper rights. This mirrors the actions of companies like DeepSeek and Moonshot AI, which are accused of conducting 'industrial-scale distillation attacks' on Anthropic's models. The irony is noted in how Anthropic's business model may similarly rely on data distillation from others.
    *   The term 'distillation attacks' is critiqued, with some arguing that these companies are merely using Anthropic's API as intended, albeit at scale. This raises a debate on whether such usage constitutes an attack or is simply a legitimate, albeit aggressive, use of the service. The conversation highlights the tension between business models that rely on open data access and the proprietary nature of AI models.
    *   There is a call for more aggressive distillation efforts from companies like DeepSeek and MiniMax, suggesting a competitive landscape where model improvements are driven by such practices. This reflects a broader industry trend where rapid iteration and model enhancement are often fueled by leveraging existing models, sometimes leading to ethical and legal challenges.
*   **[People are getting it wrong; Anthropic doesn't care about the distillation, they just want to counter the narrative about Chinese open-source models catching up with closed-source frontier models](https://www.reddit.com/r/LocalLLaMA/comments/1rd2x61/people_are_getting_it_wrong_anthropic_doesnt_care/)** (Activity: 977): **The image highlights a tweet by Alek Dimitriev and a response from **Anthropic** regarding the issue of open-source models distilling from their model, Claude. The discussion centers on the narrative that Chinese open-source models are catching up with closed-source frontier models, and Anthropic's claim of industrial-scale distillation attacks by several labs. The post suggests that Anthropic's focus is not on distillation itself but on countering the narrative that Chinese models can match their capabilities without distillation or stealing model weights. This is seen as a strategic move to influence investors and the US government to impose more restrictions on China to prevent technology transfer.** Commenters debate the innovation capabilities of Chinese labs, with some arguing that Chinese labs are indeed innovative and not merely distilling models. Others emphasize the importance of open-source models and innovation beyond distillation, citing various research papers from Chinese labs as evidence of their contributions.
    
    *   Ok\_Knowledge\_8259 argues that Anthropic's approach lacks a significant competitive advantage or 'MOAT' and suggests that the key to better models lies in scaling clean data, more data, and reinforcement learning (RL). They highlight that Chinese models, like DeepSeek, have been released quickly and are performing well, indicating that innovation is not limited to closed-source models. The commenter also mentions 'seed dance' as a state-of-the-art (SOTA) innovation in video technology.
    *   Sagyam provides a list of technical papers to counter the claim that Anthropic only focuses on distillation. These papers include innovations such as 'DeepSeek-OCR', 'mHC', 'DeepSeek Sparse Attention', 'Muon Clip Optimizer and agentic post training', 'Lightning Attention', and 'Qwen3 Omni Multimodality'. This suggests that there is ongoing research and development beyond simple distillation, showcasing a variety of advancements in AI technology.
    *   awebb78 criticizes the notion that Chinese labs lack innovation, emphasizing that they have made significant contributions not only in AI models but also in robotics. This comment highlights the importance of recognizing the innovative work coming from Chinese research labs, which is often overlooked in discussions dominated by Western perspectives.

### 3\. Liquid AI LFM2-24B-A2B Model Launch

*   **[Liquid AI releases LFM2-24B-A2B](https://www.reddit.com/r/LocalLLaMA/comments/1rdi26s/liquid_ai_releases_lfm224ba2b/)** (Activity: 320): **Liquid AI has released the LFM2-24B-A2B, a sparse Mixture-of-Experts (MoE) model with 24 billion parameters, of which 2 billion are active per token. This model is part of the LFM2 family, which has expanded from 350M to 24B parameters, demonstrating effective scaling without increasing per-token compute. The architecture includes 40 layers and 64 experts per MoE block with top-4 routing, and it is designed to run on 32GB RAM, making it suitable for high-end consumer devices. It supports inference through llama.cpp, vLLM, and SGLang, and offers multiple GGUF quantizations. Benchmarks show log-linear quality improvement as the model scales, and it is available open-weight on Hugging Face.** Commenters express excitement about the model's performance, particularly in comparison to other models like qwen3 coder. There is also interest in more detailed benchmarks to evaluate its capabilities. A humorous typo in the description was noted, highlighting the model's fast edge inference capabilities.
    
    *   The LFM2-24B-A2B model from Liquid AI is noted for its fast edge inference capabilities, achieving `112 tokens per second` on an AMD CPU and `293 tokens per second` on an H100 GPU. It is designed to fit within `32 GB of RAM` and supports frameworks like llama.cpp, vLLM, and SGLang from day one, indicating a focus on broad compatibility and efficient resource usage.
    *   There is a lack of detailed benchmarks for the LFM2-24B-A2B model, which has led to some skepticism among users. While the model is praised for its potential, the absence of comprehensive performance data, especially compared to competitors like Qwen3 Coder, is a concern for those considering switching to this model.
    *   The LFM2-24B-A2B model has been trained on `17 trillion tokens` so far, with pre-training still ongoing. This release is considered a preview, with expectations for an updated version, LFM2.5-24B-A2B, which will include additional post-training and reinforcement learning, suggesting that the current model is not yet fully optimized.
*   **[Distillation when you do it. Training when we do it.](https://www.reddit.com/r/LocalLLaMA/comments/1rcvimv/distillation_when_you_do_it_training_when_we_do_it/)** (Activity: 3433): **The image is a meme that humorously highlights the perceived double standard in the AI community regarding model distillation. It suggests that while distillation is criticized when done by others, it is considered legitimate when used internally as 'training data.' This reflects ongoing debates about the ethics and transparency of using distillation techniques, especially in the context of large AI models. The comments further discuss the implications of distillation, noting that smaller, low-cost models often rely on distillation from larger models, and question the defensibility of proprietary models when distillation can be used to replicate them.** Commenters highlight the perceived hypocrisy in the AI community regarding distillation practices, questioning the ethical stance of companies like Anthropic. They suggest that the real 'secret sauce' of low-cost models is often their distillation from larger models, and express skepticism about the proprietary nature of frontier models given the ease of distillation.
    
    *   The discussion highlights the practice of distillation, where smaller, low-cost models are derived from larger ones. This process is often seen as a 'secret sauce' for these models, allowing them to perform well without the high costs associated with training large models from scratch. The implication is that the competitive edge of frontier models is undermined if they can be easily replicated through distillation, raising questions about the defensibility of investments in such models.
    *   There is a critique of Anthropic's approach to AI development, suggesting that they have not contributed to the open-source community and have relied heavily on existing datasets, possibly without regard for legality. This raises ethical concerns about data usage and the transparency of model training processes. Additionally, there is criticism of Anthropic's stance on open-source models and their influence on policy and censorship, which some view as hypocritical given their own practices.
    *   The conversation touches on the ethical and legal implications of using publicly available data, such as Wikipedia, for training AI models. This practice is common among AI labs, but it raises questions about the ownership and rights associated with such data. The debate suggests a need for clearer guidelines and regulations regarding data usage in AI training to ensure fair and legal practices.
*   **[Fun fact: Anthropic has never open-sourced any LLMs](https://www.reddit.com/r/LocalLLaMA/comments/1rcseh1/fun_fact_anthropic_has_never_opensourced_any_llms/)** (Activity: 938): ****Anthropic** has not open-sourced any of its large language models (LLMs), including Claude, which limits external analysis of their tokenizer efficiency, especially in multilingual contexts. In contrast, **OpenAI** has open-sourced their tokenizers and models like `gpt-oss`, and **Google** has shared that their models Gemma and Gemini use the same tokenizer. This lack of open-source contribution from Anthropic is notable given the industry's trend towards transparency and collaboration in AI research.** Commenters highlight the irony in Anthropic's emphasis on safety while not contributing to open research, which is seen as crucial for advancing safety in AI. There is also a comparison to OpenAI's more open approach, suggesting a disparity in contributions to the community.
    
    *   TheRealMasonMac highlights a technical limitation in the Claude models, noting that they lack the ability to output typographic curly quotes such as “ or ‘. This limitation can lead to issues in code that relies on these specific tokens, as experienced by the commenter when it broke their code. This points to a potential area for improvement in the model's tokenization capabilities.
*   **[Hypocrisy?](https://www.reddit.com/r/LocalLLaMA/comments/1rcrb2k/hypocrisy/)** (Activity: 748): **The image highlights a significant issue in the AI community where companies like **DeepSeek**, **Moonshot AI**, and **MiniMax** are accused of conducting industrial-scale distillation attacks on **Anthropic's** AI model, Claude. These entities allegedly created over `24,000` fraudulent accounts and executed `16 million` interactions to extract and replicate Claude's capabilities for their own models. This raises ethical concerns about the methods used to develop AI models and the protection of intellectual property in the AI industry.** One commenter questions the ethical stance of these companies, implying that they may have used similar methods to acquire their training data. Another commenter expresses surprise that z.ai is not mentioned, suggesting that their GLM suite might also be involved in similar practices.
    
    *   The comment by 'archieve\_' raises a critical question about the sourcing of training data for AI models. This is a significant issue in AI ethics and legality, as the origin of data can affect the model's bias, legality, and performance. Understanding the data sources is crucial for transparency and accountability in AI development.
    *   'semangeIof' mentions the GLM suite and its behavior of claiming to be Claude when prompted. This highlights a potential issue with model identity and response accuracy, which can affect user trust and the perceived reliability of AI systems. Such behavior might indicate a flaw in the model's training or prompt handling mechanisms.
    *   The term 'industrial-scale distillation attacks' mentioned by 'roxoholic' refers to a method where large models are distilled into smaller ones, potentially raising concerns about intellectual property and model security. This technique can be used to replicate models without direct access to the original, posing challenges for proprietary AI technologies.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Anthropic vs. DeepSeek Distillation Controversy

*   **[Anthropic is accusing DeepSeek, Moonshot AI (Kimi) and MiniMax of setting up more than 24,000 fraudulent Claude accounts, and distilling training information from 16 million exchanges.](https://www.reddit.com/r/singularity/comments/1rcpdwz/anthropic_is_accusing_deepseek_moonshot_ai_kimi/)** (Activity: 4142): ****Anthropic** has accused **DeepSeek, Moonshot AI (Kimi), and MiniMax** of orchestrating a large-scale data extraction operation against their AI model, Claude. According to Anthropic, these companies allegedly created over `24,000` fraudulent accounts to conduct `16 million` interactions with Claude, effectively siphoning off its training data to improve their own AI models. This incident highlights significant concerns over data security and intellectual property in AI development, as it involves unauthorized access and potential misuse of proprietary AI capabilities.** Commenters are highlighting the irony of AI companies complaining about data theft while they themselves often use publicly available data without compensation. This reflects ongoing debates about data ownership and ethical AI training practices.
    
    *   Free\_Break8482 highlights the irony in Anthropic's accusations, pointing out that AI companies often train their models on publicly available internet data, which raises questions about the ownership and rights of such data. This underscores the ongoing debate about the ethical use of publicly available information for AI training.
    *   ImmediateDot853 questions Anthropic's contribution to the open-source community, implying that while Anthropic's AI benefits from open-source traffic, it may not reciprocate by funding or supporting open-source projects. This touches on the broader issue of corporate responsibility and reciprocity in the AI ecosystem.
    *   adalgis231 criticizes the perceived hypocrisy of AI companies like Anthropic, which may use publicly available intellectual property without compensating creators, yet accuse others of theft. This comment reflects the complex legal and ethical landscape surrounding AI training data and intellectual property rights.
*   **[Here we go again. DeepSeek R1 was a literal copy paste of OpenAI models. They got locked out, now they are on Anthropic. Fraud!](https://www.reddit.com/r/OpenAI/comments/1rcpfeg/here_we_go_again_deepseek_r1_was_a_literal_copy/)** (Activity: 2519): **The image highlights a serious issue where companies like DeepSeek, Moonshot AI, and MiniMax are accused of conducting industrial-scale distillation attacks on **Anthropic's** AI models. These attacks involve creating over `24,000` fraudulent accounts and conducting `16 million` interactions with the **Claude** model to extract its capabilities. This process, known as distillation, is typically used to create smaller, efficient models but is being misused here to bypass safeguards and potentially misuse AI capabilities. **Anthropic** is calling for coordinated efforts to combat these sophisticated attacks, which pose a risk of removing important safety measures from AI models.** The comments reflect a mix of sarcasm and criticism towards the ethical standards of AI companies, with some users mocking the idea of data theft and others pointing out the irony in the situation where companies accused of unethical practices are themselves victims of similar actions.
    
*   **[Anthropic just dropped evidence that DeepSeek, Moonshot and MiniMax were mass-distilling Claude. 24K fake accounts, 16M+ exchanges.](https://www.reddit.com/r/ClaudeAI/comments/1rd1j8u/anthropic_just_dropped_evidence_that_deepseek/)** (Activity: 2751): ****Anthropic** has released a report detailing how three Chinese AI labs, including **DeepSeek**, **Moonshot**, and **MiniMax**, systematically extracted capabilities from their model, **Claude**, using `24,000` fake accounts and over `16 million` exchanges. **DeepSeek** notably used Claude to explain its reasoning step-by-step to create training data, including politically sensitive content. **MiniMax** conducted `13 million+` exchanges and adapted quickly to new Claude models. The report highlights that safety features do not transfer well in distilled models, leading to potential risks in nuanced scenarios. This situation underscores the value of model disagreement as a sign of independent reasoning post-distillation.** Commenters highlight the irony of Anthropic's situation, noting that while they face issues with fake accounts, they themselves have used broad data sources for training. There's also a sentiment that those building critical systems will avoid using distilled models due to their compromised safety features.
    
    *   VanOrten highlights a significant security oversight by Anthropic, noting that while legitimate users faced account cancellations for using VPNs, the system failed to detect and prevent 24,000 fake accounts from conducting over 16 million exchanges. This raises questions about the robustness of Anthropic's account verification and fraud detection mechanisms.
    *   DauntingPrawn discusses the ethical considerations of model training data, pointing out that major AI companies like Anthropic, OpenAI, and Google have historically used vast amounts of unlicensed data for training. This comment suggests that the practice of distilling models, while controversial, is seen by some as a form of rebalancing the scales in the AI community.
    *   cororona sarcastically comments on the economics of training models, implying that paying for tokens is an inefficient method compared to acquiring data through less legitimate means, such as piracy. This highlights the ongoing debate about the cost and ethics of data acquisition for AI training.
*   **[Anthropic: "We’ve identified industrial-scale distillation attacks on our models by DeepSeek, Moonshot AI, and MiniMax."](https://www.reddit.com/r/ClaudeCode/comments/1rcp658/anthropic_weve_identified_industrialscale/)** (Activity: 1846): ****Anthropic** has publicly accused **DeepSeek**, **Moonshot AI**, and **MiniMax** of conducting 'industrial-scale distillation attacks' on their AI models. These attacks involved creating over `24,000` fraudulent accounts to interact with Anthropic's model, **Claude**, resulting in over `16 million` exchanges. The goal was to extract and replicate Claude's capabilities to enhance their own models. This incident highlights the ongoing challenges in AI model security and intellectual property protection, as companies seek to safeguard their proprietary technologies from unauthorized use and replication.** The comments reflect a debate on the ethics of using proprietary AI models for training, drawing parallels to the broader issue of training on copyrighted materials. Some users sarcastically note the irony in Anthropic's complaint, suggesting a double standard in the AI community's approach to data usage.
    
    *   The discussion raises the question of whether distillation attacks on AI models are analogous to training on copyrighted materials. This comparison suggests a potential ethical and legal gray area, as both involve using existing intellectual property to create new models. The implication is that if training on copyrighted materials is contentious, so too might be distillation attacks on proprietary models.
    *   The term 'attack' is debated, with some arguing that other models learning from existing ones is akin to human learning processes. This perspective challenges the notion of distillation as malicious, suggesting it could be seen as a natural part of AI development, where models evolve by learning from each other, similar to how humans learn from existing knowledge.
    *   The mention of '24k fake accounts' highlights the scale of operations involved in distillation attacks. This number is compared to typical activities on large web services, implying that such attacks might be more common and manageable than initially perceived. It suggests that the infrastructure to handle such activities is already in place for many large-scale services.

### 2\. AI Tools Impact on Legacy Systems and Industry

*   **[IBM is the latest company victim of Anthropic, plunging 10% following the launch of a Claude Code tool designed to modernize COBOL legacy code. COBOL, a 66-year-old programming language, is still widely used today; approximately 95% of ATM transactions in United States are processed using COBOL code](https://www.reddit.com/r/singularity/comments/1rcz68x/ibm_is_the_latest_company_victim_of_anthropic/)** (Activity: 467): ****Anthropic** announced a new tool, _Claude Code_, aimed at modernizing legacy **COBOL** code, which is still critical for processing `95%` of ATM transactions in the US. This announcement led to a `10%` drop in **IBM's** stock, highlighting market sensitivity to potential disruptions in legacy systems. However, the tool is not a new technology but rather a blog post suggesting its utility in updating COBOL systems, which may have been misinterpreted by the market.** Commenters noted that many modern banking systems still rely on COBOL, often wrapped in newer technologies, and that the market's reaction might be premature given the lack of concrete evidence on the tool's effectiveness. There is skepticism about the actual impact of Anthropic's tools, as stock reactions seem disproportionate to the announcements.
    
    *   The comment by Onipsis highlights that Anthropic's announcement about Claude Code was not a release of a new tool but rather a blog post suggesting its potential utility in modernizing COBOL. This led to an overreaction in the market, causing IBM's stock to drop by 10%. The comment underscores the critical role of COBOL in infrastructure and the declining number of professionals familiar with it, which makes modernization efforts significant yet challenging.
    *   Milo-75 discusses the complexity of modernization projects, particularly in banking and ATM systems, which are heavily reliant on COBOL. The comment argues that despite the potential for AI tools like Claude Code to reduce project time by 25%, companies will still rely on IBM for their expertise in handling such critical systems. The suggestion is that while IBM's revenue from these projects might decrease, their margins could improve, allowing them to take on more projects.
    *   Stabile\_Feldmaus raises a point about the lack of clear feedback on the effectiveness of Anthropic's specialized tools, despite the market's negative reaction to their announcements. This comment suggests skepticism about the immediate impact of such tools on IBM's business, as the actual performance and utility of these tools in real-world scenarios remain unproven.
*   **[Anthropic just dropped an AI tool for COBOL and IBM stock fell 13%](https://www.reddit.com/r/ClaudeAI/comments/1rddo3m/anthropic_just_dropped_an_ai_tool_for_cobol_and/)** (Activity: 880): ****Anthropic** has released a new AI tool designed to analyze and modernize COBOL codebases, which are critical to many legacy systems in banking, aviation, and government sectors. This tool aims to identify risks and reduce modernization costs, potentially threatening **IBM's** revenue from managing these systems. The announcement led to a significant `13%` drop in IBM's stock, reflecting market concerns over the impact on IBM's mainframe business. However, some analysts argue that despite existing migration alternatives, enterprises have continued to rely on IBM, suggesting the market reaction might be exaggerated.** Commenters express skepticism about relying on AI for critical infrastructure, with one noting the potential risks of 'vibe coding' in such contexts. Another suggests the market's reaction may be a 'knee jerk' response, implying the need for a longer-term perspective.
    
    *   The introduction of Anthropic's AI tool for COBOL is seen as a potential catalyst for accelerating legacy system migrations, but the risks associated with such migrations remain significant. Banks and other institutions have historically avoided modernization due to the catastrophic risks of errors, and AI's tendency to 'hallucinate' means human oversight is still necessary. Thus, while AI might speed up the process, it hasn't yet eliminated the bottleneck of human review, especially for critical infrastructure applications.
    *   The real threat posed by AI tools like Anthropic's is to the professional services sector, particularly companies like IBM that derive substantial revenue from managing and migrating legacy systems. AI can significantly reduce the need for external contractors for less critical applications, posing a risk to IBM's professional services business. This shift could lead to a reduction in demand for services related to legacy system management, even if the immediate impact on critical systems is limited.
    *   IBM's stock drop is attributed to the potential impact on its revenue from professional services rather than a direct threat to its core business of manufacturing or technology. The analogy drawn is that the disruption is akin to affecting the sales of 'buggy whip polish' rather than the 'buggy whips' themselves, highlighting the indirect but significant impact on IBM's business model.
*   **[Claude is the better product. Two compounding usage caps on the $20 plan are why OpenAI keeps my money.](https://www.reddit.com/r/ClaudeAI/comments/1rcmvj5/claude_is_the_better_product_two_compounding/)** (Activity: 1217): **The Reddit post discusses a user's preference for **Claude** over **ChatGPT Plus** due to its superior performance in tasks like book editing. However, the user remains with ChatGPT Plus because of **Claude Pro's** restrictive usage caps, which include a `5-hour rolling session window` and a `weekly cap` that can lock users out for days. The user highlights that these caps make Claude Pro impractical for their intensive daily use, which involves long, iterative sessions across multiple projects. They suggest a need for a more flexible pricing tier between `$20 and $100` to accommodate serious daily users without frequent lockouts.** Commenters note that **Anthropic's** pricing strategy, while seen as more accurate, is not user-friendly for individuals due to its B2B focus. Some users find the $100/month tier justifiable for its productivity benefits, while others express frustration with Claude's limits and consider switching back to ChatGPT.
    
    *   Helkost discusses the pricing strategy of AI companies, noting that while inference costs are decreasing, the industry pricing doesn't yet cover these costs. They highlight that Anthropic, the company behind Claude, is pricing their products more accurately compared to others, but also emphasize that Anthropic's primary focus is on B2B rather than individual consumers.
    *   turtle-toaster points out that the $20/month pro plan for AI services is not designed for heavy usage but rather as an introductory offer to encourage upgrades. They argue that an unlimited plan at this price point would be financially unsustainable due to compute costs, suggesting that a $60/month plan might be more viable for serious users.
    *   FaceOnMars23 expresses frustration with the current pricing models, noting a gap in options that could better serve users. They mention using a combination of free AI tools alongside Claude to manage costs and tasks, and criticize the dismissive attitude towards constructive feedback on pricing models.

### 3\. Gemini and Qwen Model Developments

*   **[Gemini 3.1 Pro Created This Metal Gear Solid Game in 2 hours.](https://www.reddit.com/r/Bard/comments/1rd0kkz/gemini_31_pro_created_this_metal_gear_solid_game/)** (Activity: 120): **The post highlights the creation of a Metal Gear Solid game using **Gemini 3.1 Pro** in just `2 hours`. While the post lacks detailed technical information, it suggests a rapid development process, likely leveraging advanced AI capabilities of Gemini 3.1 Pro. The mention of 'SFX' implies sound effects were a notable feature, but no specific technical stack or implementation details are provided.** The comments reflect a positive reception from fans, with one user expressing enthusiasm as a Metal Gear fan. However, there is a lack of technical debate or detailed discussion on the development process or tools used.
    
*   **[Gemini app adds video templates to quick start generation](https://www.reddit.com/r/Bard/comments/1rctgtx/gemini_app_adds_video_templates_to_quick_start/)** (Activity: 72): ****Gemini** has introduced video templates to its app, enabling users to quickly start video generation. This feature is expected to enhance user engagement by simplifying the creation process, particularly for social media content. The update is likely to leverage the app's existing AI capabilities to streamline video production, although specific technical details about the implementation or AI models used were not disclosed in the [9to5Google article](https://9to5google.com/2026/02/23/gemini-video-templates/).** Commenters noted dissatisfaction with **Veo 3.1**, describing it as a 'decades old model' and expressing skepticism about its performance. However, there is an expectation that the new feature will gain popularity on social media platforms.
    
*   **[Qwen 3.5 for MLX is like its own industrial revolution](https://www.reddit.com/r/Qwen_AI/comments/1rcqezx/qwen_35_for_mlx_is_like_its_own_industrial/)** (Activity: 98): **The post discusses the performance of the **Qwen 3.5** model on a `4-bit` setup using a **Mac Studio M3**, highlighting its impressive speed and quality. A user reports achieving `34-35 tokens per second`, emphasizing the model's efficiency even in 'non-thinking mode'. The model's prompt processing is described as nearly instantaneous, suggesting significant improvements in latency and throughput for local machine learning tasks.** A user inquires about the availability of the Qwen 3.5 4-bit model on **Hugging Face**, indicating a demand for accessible deployment options.
    
    *   The Qwen 3.5 model for MLX demonstrates impressive speed, processing `34-35 tokens per second`, which is considered fast for such models. Additionally, the prompt processing is described as nearly instantaneous, enhancing its usability for real-time applications.
    *   A notable limitation of the MLX version of Qwen 3.5 is the absence of vision capabilities, which restricts its use to text-based inputs only. This is a significant drawback for users who require multimodal input processing, as the current MLX setup does not support vision tasks.
*   **[Connected Qwen3-VL-2B-Instruct to my security cameras, result is great](https://www.reddit.com/r/Qwen_AI/comments/1rdnzbe/connected_qwen3vl2binstruct_to_my_security/)** (Activity: 94): **The post discusses the integration of the **Qwen3-VL-2B-Instruct** model with security camera feeds, highlighting its ability to provide detailed narrative descriptions of scenes, such as a mailman delivering mail, rather than just detecting objects. The model, quantized at `IQ2` and approximately `0.7 GB`, is noted for its impressive scene understanding capabilities. The setup involves a **MacBook M3 Air 24GB** and **SharpAI Aegis** platform, with the model and vision projector totaling around `1.4 GB`. The process includes selecting the model via a built-in browser, downloading it, serving it with llama-server using Metal/CUDA acceleration, and observing real-time processing logs.** Commenters express enthusiasm about the potential impact of small Qwen VL models, with one noting their transformative potential and another expressing anticipation for future Qwen 3.5 models. There is also interest in integrating the project with Django.
    

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by Gemini 3.1 Pro Preview Nov-18

**Theme 1. Anthropic's "Industrial-Scale" Distillation Drama & Jailbreak Exploits**

*   **Anthropic Names and Shames Chinese API Distillers**: Anthropic publicly accused DeepSeek, Moonshot AI, and MiniMax of leveraging **over 24,000 fraudulent accounts** to conduct **16 million exchanges** in an [Anthropic industrial-scale attack post](https://x.com/anthropicai/status/2025997928242811253) to distill **Claude**. The AI community largely scoffed at the accusations, labeling them _pathetic_ and noting the irony considering Anthropic's own history of scraping data to build their foundation models.
*   **Claude Max Spews Internal Reasoning**: Users leveraging **Claude Max** via **OpenClaw** encountered a severe bug where the model piped its internal thought processes directly into live chat sessions. Engineers discovered they can temporarily patch the leak by running the `/reasoning off` command, though **Opus 4.6** and **Sonnet 4.6** continue to burn through user credits at alarming rates.
*   **Kimi 2.5 Jailbreak Unleashes Constitutional Chaos**: Hackers successfully cracked **Kimi 2.5**, stripping away its guardrails to create a _Chinese Claude without the constitutional headaches_. Meanwhile, researchers are exploiting **Gemini 3.1 low** with an **ENI** prompt that triggers an internal _tug of war_ between safety guardrails and compliance, forcing the model to spit out restricted outputs.

**Theme 2. New Frontier Models: Qwen 3.5 Dominates, GPT-5.3 Codex Launches**

*   **Qwen 3.5 Sweeps Open-Weight Leaderboards**: Alibaba dropped a massive update with [Qwen3.5-35B-A3B-Base weights](https://huggingface.co/Qwen/Qwen3.5-35B-A3B-Base), impressing developers by outperforming the older **235B** model despite its significantly smaller footprint. The massive **Qwen3.5-397B-A17B** variant also crashed the Code Arena leaderboard, snagging the **#17 overall** spot and matching proprietary heavyweights like **GPT-5.2** and **Gemini-3-Flash**.
*   **OpenAI Quietly Deploys GPT-5.3-Codex to the Masses**: OpenAI officially launched [GPT-5.3-Codex on OpenRouter](https://openrouter.ai/openai/gpt-5.3-codex) across all developer APIs, pricing it aggressively at **$1.75** for input and **$14** for output tokens. OpenRouter immediately integrated the model alongside a new `openrouter/free` endpoint that automatically routes developer requests to zero-cost fallback models.
*   **GPT-OSS 20B Achieves Sci-Fi Speeds on Consumer GPUs**: Engineers clocked the new **GPT-OSS 20B** model at a staggering **260 t/s** on a standard **RTX 5090** thanks to its **Mixture of Experts (MoE)** architecture relying on only **3B active parameters**. The model easily fits entirely within high-speed **VRAM** and natively supports **flash attention**, marking a massive win for local inference enthusiasts running consumer hardware.

**Theme 3. System-Level Engineering, Hardware Scaling & Kernel Optimizations**

*   **MatX Bags $500M to Build the Ultimate LLM Chip**: MatX secured a **$500M Series B** to develop the **MatX One LLM chip**, featuring a splittable systolic array that combines SRAM-level low latency with **HBM long-context support** via this [MatX funding announcement](https://x.com/reinerpope/status/2026351870852358492). Concurrently, Meta inked a deal to deploy **6GW of AMD-based infrastructure** over five years, leveraging the new **RRCLLX** protocol to heavily optimize **AMD MI300X** multi-GPU communications.
*   **Pre-built FlashAttention 3 Wheels Hit Production**: AI engineers can finally ditch tedious custom compilations because [pre-built Flash Attention 3 wheels](https://download.pytorch.org/whl/flash-attn-3/) are now officially live for **CUDA 12.6+** and **13**. These **LibTorch ABI stable** drops support both **x86/ARM CPUs** and **Linux/Windows OS**, completely slashing setup times for developers running **Python 3.10+** and **PyTorch 2.9+**.
*   **Llama.cpp Update Wrecks Qwen and VRAM Allocation**: The latest **llama.cpp** build out of the master branch threw fatal _Failed to read magic_ errors, completely failing to parse the **GGUF headers** for **Qwen3.5** models. Engineers isolated the bug to a recent overflow fix that inadvertently blocks proper **VRAM** allocation, forcing developers to frantically rollback to release **8145** to restore functionality.

**Theme 4. Tooling, Agentic Workflows, and Developer Infrastructure**

*   **Cursor Cloud Agents Drop for Free**: **Cursor** officially rolled out its new **Cloud Agents** feature, giving developers completely free cloud environments to run tests, execute terminal commands, and deploy live demos directly from the editor ([Cursor onboarding link](https://cursor.com/onboard)). The community immediately hit execution limitations, however, and began actively lobbying the developers for a secure way to allow agents to bypass elevated **sudo** password restrictions.
*   **Aider Developers Hit Diff Formatting Walls**: The popular **Aider** CLI tool choked on complex multi-file codebase edits, suffering from diff formatting corruptions that force developers to manually process changes in smaller chunks. Engineers escalated the tool's limitations by opening [Aider GitHub issue #3603](https://github.com/Aider-AI/aider/issues/3603) begging for native **git submodule** support, which the framework currently completely ignores.
*   **Tiny-GPU Compiler Brings C to Verilog**: Hardware hackers released the [tiny-gpu-compiler project](https://github.com/gautam1858/tiny-gpu-compiler), an educational **MLIR-based compiler** that translates a C-like kernel language directly into **16-bit binary instructions**. The pipeline targets custom open-source GPU hardware written entirely in Verilog and ships with a step-by-step visualizer for precise execution analysis.

**Theme 5. Benchmarking Turmoil and Evaluator Shakeups**

*   **OpenAI Kills SWE-Bench Verified Over Data Contamination**: OpenAI officially deprecated the popular **SWE-Bench Verified** benchmark after discovering frontier models routinely regurgitate exact task solutions based purely on memorized test IDs. According to their [SWE-bench deprecation announcement](https://x.com/OpenAIDevs/status/2026025368650690932), engineers proved that roughly **60%** of the remaining unsolved problems are structurally flawed, making continued benchmarking a complete waste of compute.
*   **EleutherAI Scrambles to Fix Pythia HuggingFace Duplicates**: Researchers uncovered a critical bug where [EleutherAI's pythia-2.8b](https://arxiv.org/abs/2309.23024) served identical model weights on the Hugging Face Hub regardless of the selected revision step. The team initiated immediate retrains and deployed freshly corrected [Pythia-14m](https://huggingface.co/stellaathena/pythia-14m) and [Pythia-31m](https://huggingface.co/stellaathena/pythia-31m) models after confirming the previous uploads were mistakenly deduped.
*   **LMArena Filter Bans Dice Rolls**: The moderation filters on **LMArena** went entirely rogue, automatically rejecting incredibly benign prompts like simple dice rolls just because they contained flagged trigger words like _liar_. The developers acknowledged the overly aggressive blocking and are desperately testing **LLM-based filtering** and relaxed [OpenAI moderation API](https://developers.openai.com/api/docs/guides/moderation/) thresholds to restore sanity to the evaluation queue.

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Deepseek Reigns Supreme as Free AI**: Members recommend **Deepseek** as the best free AI currently available, offering completely free usage.
    *   Engineers are leveraging the free AI to self-host projects and create novel uses.
*   **Chef Suffers Critical Vulnerabilities**: A user reported finding _4 critical vulnerabilities_ in **Chef** and claimed the company did not address them seriously, linking to [Convex security page](https://www.convex.dev/security).
    *   There was also a warning about potential scamming tactics where companies might use vulnerability details without providing credit or compensation.
*   **AI Nearly Cracks VMP-Protected Code**: A user challenged **Claude** with a **VMP**\-protected crackme, and it made significant progress by obtaining opcodes and nearly cracking the bytecode.
    *   They suggested trying **Copilot**, noting it _reconstructed corrupted keylogger .sys files_ using advanced digital forensics techniques.
*   **Kimi 2.5 Jailbreak Unlocks All-Knowing AI**: A user reported that the cracked **Kimi** can literally answer anything in detail, calling it a _Chinese Claude without the constitutional headaches_.
    *   The AI tool is good for API because its Jailbreak is easy to system prompt.
*   **Developer's Repo Rampage: File Flags Frenzy**: A developer shared that their whole repo is throwing flags, expressing surprise at the number of checks files undergo.
    *   Another member noted that most files made for personal testing get flagged after **3 days**, but they are trying a new method involving browser injection, visualizing the code with AI.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **Qwen 3.5 Makes a Splash**: Members are actively testing and impressed by the quality and speed of **Qwen 3.5** models like [Qwen3.5-35B-A3B](https://huggingface.co/Qwen/Qwen3.5-35B-A3B), emphasizing their utility for fine-tuning, in-context learning, and research rather than direct interaction.
    *   Although the newest **Qwen 122B model** could potentially allow for local coding, the free **OpenCode models** have ruined that workflow for them.
*   **GLM Models Excel in Creative Realms**: Users have found that **GLM models**, particularly **GLM-4.7-Flash**, work well with Unsloth, especially for creative writing tasks.
    *   One user revealed they paid **$40** for **3 months** for a **GLM coding plan**.
*   **Llama.cpp Updates Cause Import Confusion**: After the update of **llama.cpp**, some users encountered `import missmatch` issues, preventing models from functioning without updates.
    *   One user resolved a Jinja issue and shared the fix in [this discussion](https://huggingface.co/Qwen/Qwen3.5-35B-A3B/discussions/4).
*   **DeepSeek Dominates Chatbot Championship**: Members celebrated **DeepSeek** for its performance in Gotham’s ChatBot Championship, highlighting its top-tier LLM capabilities.
    *   Others inquired about the existence of a **Deep Research agent**, with some clarifying that it features a **DeepSearch toggle**.
*   **LoRA Merging Plagued by Key Mismatches**: Users reported that the latest Unsloth version breaks **LoRA merging** due to a mismatch in extracted keys, specifically with `lm_head.weight`, as detailed in [GitHub issue #4098](https://github.com/unslothai/unsloth/issues/4098).
    *   The issue stems from `lm_head` not being included in `target_modules` during training, causing discrepancies when merging and reproducible on Colab by adding `lm_head` to the `target_modules` in `get_peft_model`.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Video Arena Disappears**: Members noticed that **Video Arena** was removed from the Discord but is still accessible on the website [arena.ai/video](https://arena.ai/video).
    *   No reason for the removal was given.
*   **Gemini Image Previews Hit Rate Limits**: Users reported encountering **429 Too Many Requests** errors using **Gemini 3 Pro Image Preview**, suggesting the service is rate limited; [Google's documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/error-code-429) gives more detail.
    *   One user found a workaround for image uploads by prepending the prompt with _"Modify the following image with the following: (The prompt)"_
*   **Reve 1.5 Impresses, Sparks Debate**: The image quality of **Reve 1.5** is impressing users, with some arguing it should rank higher, especially for manga coloring.
    *   While some find the [reve.com](https://app.reve.com/) website beautiful, others note limitations like the absence of image editing in the 1.5 version.
*   **Arena's Filter Goes Too Far**: Users are complaining that the moderation filter is overly sensitive, blocking harmless content like dice rolls due to terms like _"liar"._
    *   The team acknowledged the overzealous behavior, considering options like **LLM-based filtering** or adjusting thresholds for existing moderation endpoints like [OpenAI's moderation API](https://developers.openai.com/api/docs/guides/moderation/).
*   **Qwen3.5-397B-A17B Joins Code Arena**: **Qwen3.5-397B-A17B** was added to the Code Arena leaderboard, achieving **top 7 open model** status and ranking **#17 overall**.
    *   Its overall rank matches proprietary models such as **GPT-5.2** and **Gemini-3-Flash**.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Cursor users tackle Sudo commands**: A user inquired about the best way to handle `sudo` commands within **Cursor**, as the agent does not currently support takeover or password entry.
    *   The ensuing discussion sought potential solutions for integrating elevated privileges into coding workflows.
*   **Mercenary Engineers a 'Vibe Coding App'**: A member is developing a vibe coding application that defaults to local model usage but allows cloud model options via API keys without requiring subscriptions.
    *   Community members debated the potential market traction, with some expressing doubts about its appeal compared to existing tools like **Cursor**, citing potential stability concerns.
*   **Gemini Faces Instability Accusations**: Users have reported connectivity issues and instability with **Gemini** since the **3.1 Pro** release.
    *   Some users are waiting for a more stable release, while others mentioned that they are not being charged for the errors encountered.
*   **Rules Engine nightmare solved, ready for production**: One member announced the resolution of rules migration and refactors, with plans to launch a product to automate related processes in 3-4 weeks, sharing screenshots of the rules engine.
    *   Another member reacted to the size and complexity of the rules engine, labeling it a "nightmare."
*   **Cursor launches free Cloud Agents**: **Cursor** launched **Cloud Agents**, which allow cloud environments to run tests or demos, as announced [on their website](https://cursor.com/onboard).
    *   Currently, **Cloud Agents** are available for free, although this pricing model may change in the future.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity & Comet Get Vocal**: The new **voice mode upgrades** are rolling out today across **Perplexity** and **Comet** for all users, according to [this status update](https://fixvx.com/comet/status/2026384898802724878).
    *   The new voice mode is being rolled out for both **Perplexity** and its sister product, **Comet**, simultaneously.
*   **Pro Users Protest Perplexity Pro Limits**: Users are reporting sudden decreases in **Perplexity Pro** limits, hitting their monthly limit earlier than expected, and are upset with customer support, with one user sharing a rest endpoint for checking usage limits: [perplexity.ai/rest/rate-limit/all](https://www.perplexity.ai/rest/rate-limit/all).
    *   Members report the limits are a **rolling window** with different daily and monthly limits, and one member speculated Perplexity's strategy might be shifting from retail to **Enterprise/Max** markets due to losing retail business.
*   **Speculation Swirls around Gemini 3.1 Flash**: Users discussed the release of **Gemini 3.1 Flash**, mentioning it's not released by Google itself.
    *   One member speculated Perplexity is getting greedy by not releasing it.
*   **AI wages war on Cybercrime!**: Members discussed the application of **AI in cybersecurity**, noting how it's being used in both defensive and offensive capacities, including AI-powered malware that adapts internally.
    *   One user posted a status implying that they are excited for the challenges and opportunities presented by **AI-driven cyber threats**.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Chinese Labs Evade Model Distillation Accusations**: Anthropic accused Chinese labs of _attacking_ their models by distilling them, but some members are skeptical, pointing to Chinese labs' ability to create innovative model designs and optimized code, making distillation unnecessary, discussed in this [fixupx.com post](https://fixupx.com/anthropicai/status/2025997928242811253?s=46).
    *   It was joked that **Qwen** dodged these allegations.
*   **Qwen3.5 Models Trigger Loading Headaches**: Members reported issues loading **Qwen3.5 models**, specifically with _mmproj_ files and prompting errors, implying model loading failures requiring re-downloading, with more details in [this discord channel](https://discord.com/channels/1110598183144399058/1225909444727013466/1475968015534395505).
    *   The latest commit from _master_ fails loading **Qwen3.5** with a _Failed to read magic_ error, suggesting using release **8145** from the releases page.
*   **AMD Steals Market Share from NVIDIA with Meta Deal**: **AMD's stock surged** after securing a deal to supply chips to **Meta**, potentially pushing **NVIDIA** to the sidelines.
    *   The deal involves **60 billion** worth of chips, sparking discussions on market bubble dynamics, illustrated by [this klipy.com gif](https://klipy.com/gifs/rage-24).
*   **GPT-OSS 20B: Surprisingly Speedy**: The **GPT-OSS 20B** model is observed to be exceptionally fast, achieving **260 t/s** on a **5090**, due to its architecture as a Mixture of Experts (**MoE**) model with only **3B** active parameters.
    *   This speed is enhanced by **flash attention** and its small size allowing it to fit into faster **VRAM**; members indicate that flash attention works fine with **GPT-OSS** models nowadays.
*   **Llama.cpp Build Suffers Setback**: Building the latest **llama.cpp** from **git** is now failing to read the **GGUF header** of **Qwen3.5** and similar models after a recent commit.
    *   Members found that the newest build doesn't allocate **VRAM** at all, indicating that _Mr. Gerganov broke something with his overflow fix_.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **OpenRouter Debuts Free Router and GPT-5.3-Codex**: OpenRouter launched a new router `openrouter/free` for routing to free LLMs, and also put [GPT-5.3-Codex live](https://openrouter.ai/openai/gpt-5.3-codex) on OpenRouter.
    *   The free router automatically selects models for compatibility, showcased with a [list of top free models](https://openrouter.ai/openrouter/free).
*   **Anthropic Distillation Claims Spark Debate**: Anthropic's claims of industrial-scale distillation campaigns by Chinese AI labs ([DeepSeek](https://www.deepseek.com/en/), [Moonshot](https://www.moonshot.ai/en) and [MiniMax](https://www.minimax.ai/)) are met with skepticism from members, particularly regarding siphoning data from **Claude**.
    *   Some view it as a marketing tactic, pointing out that models have the same quirks due to the amount of data.
*   **Flash Model Craze Sparks Debate**: Members are debating why companies are creating _flash_ models like **Xiaomi Mimo** and **Stepfun** instead of full-size models, with _flash_ models being cheap, fast, and intelligent, even with models of **300B+ parameters**.
    *   The term "flash" is being used even with models of 300B+ parameters, described as cheap, fast, and intelligent.
*   **New Data Tabs launch in Beta**: Users noticed the addition of new request data tabs in the activity page for generations, which are currently in beta and will be properly launched soon, as well as enhancements to the [OpenRouter rankings page](https://openrouter.ai/rankings#performance).
    *   The update includes discussions about sorting providers based on end-to-end **latency** and **throughput**.
*   **Kollect Turns Forms into Real-Time AI Conversations**: A member created [Kollect](https://kollect.admildomanuel.com), a small open-source project that turns boring forms into real-time AI conversations.
    *   Users speak naturally, **AI listens and dynamically guides the survey**, and forms can be created by simply describing them.

* * *

[OpenClaw](https://discord.com/channels/1456350064065904867) Discord
--------------------------------------------------------------------

*   **Qwen 3.5 Plus: Effective But Limited**: Users testing **Qwen 3.5 Plus** via Alibaba Cloud and Openrouter report effectiveness for text generation, with [one user noting limitations](https://example.com) in executing commands on their server through Openrouter.
    *   Another user using Alibaba Cloud mentioned the model's inability to handle image input, comically noting that their _Silicon Valley hotdog not hotdog bot_ misidentifies every image as a computer file.
*   **GLM-5: Speed Bumps, Solid Results**: Testers of **GLM-5** via z.ai's coding plan say it is slow but functional, especially when using sub-agents for research. Some encountered rate limits.
    *   One user upgraded to the **$30/month tier** to fully utilize **GLM5**, highlighting its effectiveness despite the speed issues, affirming that _it works_.
*   **Claude Max Sparks Bug Discussions**: Users are experiencing issues with **Claude Max**, due to a recent OpenClaw bug that pipes the model's internal reasoning into chat sessions. This can be resolved by running `/reasoning off`.
    *   Reports also indicate that **Opus 4.6** and **Sonnet 4.6** are burning through usage faster; one user joked that it's like _jaywalking_ and getting a _$300 ticket_.
*   **OpenClaw runs on iPhone (sort of)**: A member got **OpenClaw** running on an **iPhone** but had to patch some packages to build **node**.
    *   They reported that it's _pretty laggy_ but works!
*   **Cron Job Cops a Vintage Rolex**: One member set up a **cron job** to monitor vintage watch dealer websites for a **1989 Rolex Submariner** and send a link if found.
    *   The bot sent them a hit this morning, and _it was amazing!_

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Twitter Faces Credibility Crisis Over Verification**: Due to the unreliable [blue badge verification](https://longform.asmartbear.com/exponential-growth) process, a member stated that they no longer trusted **Twitter** to find and follow any new voices.
    *   A member expressed frustration with **Twitter's** shift towards chaotic content, describing it as _just batshit crazy_.
*   **Discord Reverses Course on Age Verification**: Due to public backlash, **Discord** revised its global age assurance policies, as detailed in a [blog post](https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing).
    *   A member speculated that **Discord's** Daily Active Users (DAU) experienced a _nosedive_ because of the initial, controversial policies.
*   **SOTA Benchmark Emerges for LLM Evaluation**: A new **SOTA benchmark** for evaluating **LLMs** was developed, as supported in [this tweet](https://x.com/dmayhem93/status/2026028013763101132?s=12).
    *   Screenshots of the results were shared by a member.
*   **Anthropic Names Distillers of the API**: Anthropic accused that DeepSeek, Moonshot AI, and MiniMax used **over 24,000 fraudulent accounts** to generate **16 million exchanges** with Claude in an attempt to distill information via industrial scale attacks ([source](https://x.com/anthropicai/status/2025997928242811253)).
    *   Anthropic highlighted that Alibaba and Qwen are not among the bad actors so far.
*   **GPT-5.3-Codex Released for All**: OpenAI Developers announced the immediate availability of **GPT-5.3-Codex** for all developers via the Responses API ([source](https://x.com/openaidevs/status/2026379092661289260)).
    *   Developers are invited to begin building with the new model.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **Claude's COBOL Skills Sink IBM Stocks**: Following **Anthropic's** announcement of **Claude's** ability to streamline **COBOL** code, **IBM's stock** price plummeted by over **10%**.
    *   Members humorously speculated about **Musk** editing human brains with **Grok 4.300** and **Neuralink** utilizing **Grok Imagine 1.2**.
*   **Gemini and Claude Form Coding Dream Team**: Coders are combining **Gemini** for research with **Claude Opus** for drafting, exploiting each model's respective strengths, while others accessed free **Gemini** through a _Coursera loophole_.
    *   The discussion highlighted **Gemini's** interface issues in maintaining project coherence, with some finding **GLM 5** via _kilocode_ to be an equally capable alternative.
*   **Sora 2 Delayed by Copyright Concerns**: Copyright issues reportedly plague **Sora 2's** release, echoing the fate of **Seedance 2.0**, as users noted that _automation always targets employees first not management_.
    *   One user stated _I remember when Sora 2 got content violations, I remember people on X saying they would wait for a CHINESE model to post the copyright, LAMO, they fooled themselves_, with some championing open-source models to circumvent similar problems.
*   **Humans augment AI and Provide Context**: A member stated that while **control-theoretic prompt regulation** can be applied externally to an internal LLM, _true system stability can't be guaranteed_ due to hidden internal dynamics.
    *   They also noted that _users help expand and provide context_, influencing the direction and conditioning of the AI.
*   **Statistical Pattern Matching vs True AI Invention**: A member proposed that **ChatGPT** currently operates as a form of **statistical automation**, identifying patterns until it locates a **latent variable** to automate repetitive tasks.
    *   They argued, _this is why they say AI cannot invent, because it can't, it just finds patterns we haven't put together yet (or ever) due to sheer volume_, whereas humans invent by recombining prior knowledge.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **MiSTer's Code Controversy**: Discussion ignited around the [MiSTer project](https://github.com/MiSTer-devel/Main_MiSTer) facing accusations of _stealing code from Till and killing MiST_, along with claims of _illegal use of GPL code_.
    *   A member provided a [blog post](https://pingas.org/articles/provenance-of-retro) offering details on the project's origin and the ongoing controversies.
*   **Anthropic Accusations Against DeepSeek**: A link was shared to an article discussing how _Anthropic is furious at DeepSeek for copying its AI without permission_, sparking debate about the irony given Anthropic's own practices, see [Anthropic Furious at Deepseek](https://www.msn.com/en-us/news/technology/anthropic-furious-at-deepseek-for-copying-its-ai-without-permission-which-is-pretty-ironic-when-you-consider-how-it-built-claude-in-the-first-place/ar-AA1WYupG).
    *   A member stated _Yup we love the soap opera_, reflecting cynicism towards the unfolding drama.
*   **Qwen 3.5: A Quantum Leap in Performance**: The community highlighted that _Qwen3.5-35B-A3B beating Qwen3-235B-A22B-2507 is insane_ with base weights released on [huggingface.co/Qwen/Qwen3.5-35B-A3B-Base](https://huggingface.co/Qwen/Qwen3.5-35B-A3B-Base).
    *   Additionally, it was noted that _5.3 codex is out in API: $1.75 input, $14 output_, positioning it as a more economical option compared to Anthropic.
*   **Fine-Tuning Hermes for Misalignment?**: A member asked about fine-tuning **Hermes** for **emergent misalignment** or, in simpler terms, to _go evil_, raising ethical concerns.
    *   The inquiry sparked discussion about the ethical considerations of fine-tuning AI models for potentially malicious purposes, emphasizing the importance of **AI safety** research.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Eleuther Solves the Mysterious Missing Model Mishap**: EleutherAI addressed a bug with **Pythia-2.8b** on Hugging Face Hub where the served weights were identical across revisions, traced to `pytorch_model.bin` and `model.safetensors` sharing the same SHA256, while sharded files differed, and provided updated HF models, [14m](https://huggingface.co/stellaathena/pythia-14m) and [31m](https://huggingface.co/stellaathena/pythia-31m).
    *   The **14m and 30m** models were actually deduped versions (not duped) with retraining underway to replace with correctly labeled duped models.
*   **LLMs unlock latent reasoning with hidden hands**: Discussion highlights the potential of special **tokens only generated by the LLM** and not displayed to the user to enhance reasoning, termed _Latent Reasoning_, as detailed in [the Latent Reasoning paper](https://arxiv.org/abs/2307.06203).
    *   The general consensus seems to be that these **Latent Reasoning** approaches will likely improve performance and security.
*   **Differential Attention Draws Debate After Study**: A member requested feedback on ablation studies related to differential attention, sharing [a PDF document](https://cdn.discordapp.com/attachments/747850033994662000/1475931314837262397/v2_draft.pdf?ex=699f47a6&is=699df626&hm=2c1090efdc639f38dfa72ea50d7871ae4f662b13d002ff4d9d2004355c0564b0&).
    *   Feedback suggested that the ablation did not conclusively demonstrate if differential attention is fundamentally superior or if it disproportionately benefits from the methodology used.
*   **Baguettotron's Baked-In Benchmark Bonanza**: The **Baguettotron** model was showcased, featuring **4608** features, trained on **774M** tokens, layer **48/80**, **8x** expansion, and top\_k **32**, alongside a [demo](https://lyramakesmusic.github.io/bread-slicer/) and [contextual X post](https://x.com/Ji_Ha_Kim/status/2026166070172655786?s=20).
    *   Users celebrated the arrival of this novel model.
*   **Need to Debug LLM? Share insights for Amazon card!**: Researchers are conducting **20–30 minute interviews** (with a **$25 Amazon gift card** or charity donation) to collect insights on how engineers debug **LLM behavior**, especially regarding reasoning traces, refusals, and agent behavior ([booking link](https://calendly.com/amerrick4-rrc/ai-auditing-problem-interview)).
    *   They are targeting individuals who work with **inspecting chain-of-thought**, **interpretability or latent-knowledge**, **debugging agent behavior**, and **analyzing refusals or safety failures** in **LLMs**.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **FlashAttention 3 Wheels Deployed**: Pre-built **Flash Attention 3 wheels** are available for CUDA versions **12.6+** and **13**, CPUs (**x86**, **ARM**) and OS (**Linux**, **Windows**) at [download.pytorch.org](https://download.pytorch.org/whl/flash-attn-3/).
    *   These wheels are **LibTorch ABI stable** and should work with any Python version >= **3.10** and torch version >= **2.9**.
*   **Modal.experimental.stop\_fetching\_inputs Prevents CUDA errors!**: The error _cuda memory error is detected_ can be resolved using `modal.experimental.stop_fetching_inputs`, and this fix is already implemented in the member's `backendbench env`.
    *   A member also created a custom environment for **KernelBench** and **kernelbook** to address corrupted **CUDA memory errors**, intending to share it.
*   **eBPF expands to GPU functionality**: Yusheng Zheng is scheduled to discuss extending **eBPF** to enhance **GPU** functionality on [December 12 at 12:00 pm PST](https://arxiv.org/abs/2512.12615).
    *   The talk will cover recent work, including _gpu\_ext: Extensible OS Policies for GPUs via eBPF_ and extending eBPF to **GPU Device** and **Driver Contexts**.
*   **Meta's RRCLLX accelerates AMD MI300X**: Meta is innovating GPU communications on AMD platforms using **RRCLLX**, as detailed in their [engineering blog post](https://engineering.fb.com/2026/02/24/data-center-engineering/rrcclx-innovating-gpu-communications-amd-platforms-meta/).
    *   Meta is using **RRCLLX** to connect **AMD MI300X** GPUs more efficiently.
*   **New Tensor Visualizer hits 9 Dimensions**: A new **n-dimensional visualizer** was released, now supporting tensors up to **9D**, allowing users to slice, permute, and inspect every value in N-dimensional tensors just as easily as 1D, 2D, or 3D tensors, using an **einops-like syntax**.
    *   The [Colab notebook](https://colab.research.google.com/drive/1lrO6yzVQ8u_vFLPe7986goZtRQazmV0T#scrollTo=Q0TZi3zPxWhB) walks users through the visualizer from 1D to 9D tensor copies, for example, visualizing a tensor of shape **(2, 3, 4, 3, 4, 2, 4, 2, 3)**.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Anthropic Accusations Surface**: A user shared a [WSJ article](https://www.wsj.com/tech/ai/anthropic-accuses-chinese-companies-of-siphoning-data-from-claude-63a13afc) detailing **Anthropic's accusations against Chinese companies** for allegedly siphoning data from **Claude**.
    *   The user dismissively labeled the accusations as _pathetic_.
*   **Tool Changes Requested Mid-Cycle**: A user inquired about the possibility of **changing the tools available during a prompt-to-response cycle** within Moonshot AI's Kimi K-2 environment.
    *   The implications and feasibility of such dynamic tool adjustments were not elaborated upon.
*   **Browser Extension Coveted for Kimi K2.5**: A user expressed the need for a **browser extension** to enhance the functionality of **Kimi K2.5**.
    *   This suggestion highlighted a desire for more integrated access to the model's capabilities within a browsing context.
*   **Bug Report Urged After Persistent Kimi Error**: A user reported an error that has persisted for **10 days**, providing an [attached image](https://cdn.discordapp.com/attachments/1371757564005711973/1475932351497240717/image.png?ex=699f489e&is=699df71e&hm=2b588317c8756fd95479fe5ddb11eee39b51d5f888ebb10ba0629823a8b746d9&) as evidence.
    *   A moderator instructed the user to submit a formal **bug report** with comprehensive details to address the issue.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Lucidrains' Github Goes MIA**: A member inquired about the disappearance of **lucidrains'** GitHub repository and the reasons behind its removal.
    *   The sudden removal caused concern among users who relied on the repositories for their projects and research.
*   **Scout** Model Hunts Sentence Relevance**: A member shared **Scout**, a novel attention model that modifies the standard Transformer architecture, designed to learn directional relevance between sentences instead of tokens, hosted on [GitHub](https://github.com/samyak112/Scout).
    *   The model aims to determine if _sentence B_ actually helps _sentence A_, potentially improving contextual understanding in NLP tasks.
*   **GB10** Chokes on Memory**: A member reported that the **Dell Pro Max GB10** experiences frequent **GPU OOMs** due to shared GPU/CPU memory, leading to system freezes.
    *   They suggested using `nvitop` for accurate memory tracking, noting that `nvidia-smi` output is unreliable, potentially misleading developers.
*   **GANfather** Ian Goodfellow Resurfaces**: **Ian Goodfellow**, the creator of **GANs**, has returned, sparking enthusiasm for a potential **GAN** renaissance to tackle verification problems, see [tweet](https://fxtwitter.com/goodfellow_ian/status/2026024150213738520).
    *   The community hopes his return will drive innovation in **GAN** technology, particularly in addressing the verification challenges in AI.
*   **Mercury II** by Inception AI Makes Debut**: A member highlighted the release of **Mercury II** by **Inception AI**, sharing links to [Inception AI's website](https://www.inceptionlabs.ai/) and the **arXiv paper**.
    *   The release generated interest in the AI community, eager to explore its capabilities and potential applications.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Manus Implements Vulnerability Reporting**: A user reported a vulnerability and was directed to the [feedback page](https://manus.im/feedback?source=help_center).
    *   The user expressed confusion about the process, highlighting a need for clearer reporting guidelines.
*   **Unlimited Tier Chat Considered**: A user suggested an unlimited chat tier similar to **ChatGPT** or **Grok**, driven by fast credit depletion with the **Manus Agent** in Telegram.
    *   A representative responded positively, indicating ongoing efforts to enhance the product.
*   **Account Transfers Not Supported**: A user requested to transfer their project to another account, supplying the relevant email addresses.
    *   Support advised that account transfers are not currently supported, recommending local content download and a fresh start on the new account.
*   **Telegram Agent Consumes Credits**: A user reported high credit usage with the Telegram agent, saying it _blows so many points away from my account_.
    *   This issue supports the call for a subscription option to address credit concerns.
*   **AI/ML Engineer Expertise**: An AI/ML engineer offered expertise in building scalable AI products, focusing on inference cost, memory design, and system load behavior.
    *   The engineer emphasized their experience in making technical decisions critical to product survival, offering a valuable resource for serious AI development.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Mojo's String Templates on the Horizon**: A proposal for a **string templating feature** in Mojo has surfaced, detailed in [a forum discussion](https://forum.modular.com/t/writable-writer-template-engines/2763).
    *   This addition, aimed to extend the current `Writable`/`Writer` trait into a `TemplatedWritable`, is expected _post-1.0_.
*   **`Writable` and `Writer` Traits Await Enhancement**: Discussion has begun about enhancing the current `Writable` and `Writer` traits, focusing on creating customization points via traits or defaulted trait methods.
    *   While features like **Int unification** are prioritized, the roadmap includes unifying `write_to` and `write_repr_to` implementations into a single function.
*   **`ExternalFunction` Struct Sparks Inspiration**: A member has found inspiration in the `ExternalFunction` struct for decomposing function signatures into parameters and return types.
    *   This approach necessitates coding **origin casts for all external pointers**.

* * *

[MCP Contributors (Official)](https://discord.com/channels/1358869848138059966) Discord
---------------------------------------------------------------------------------------

*   **CI Failure Unveils Broken Link**: A member reported that CI failed despite local checks passing on [PR 2278](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2278), tracing back to a missing file.
    *   The omission resulted in a broken link in `docs/community/seps/index.mdx`.
*   **MCP Summit Scheduled at Linux Foundation**: A member extended an invitation to those at the [LF Member Summit](https://events.linuxfoundation.org/lf-member-summit/) in Napa, CA, to convene and discuss MCP.
    *   Specifics regarding the meeting place and scheduling were not expanded upon.
*   **Ezra Klein Explores Agents**: A member disseminated a [YouTube video](https://youtu.be/lIJelwO8yHQ) featuring Ezra Klein diving into the world of agents.
    *   The shared video was not accompanied by additional feedback or interpretation.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider's Future in Question**: A user is unsure if **Aider** is still under active development and if there are better CLI options out there.
    *   Community members have pointed out that other CLIs could be more _advanced_.
*   **Aider Fumbles Git Submodules**: A computer scientist has reported that **Aider** lacks support for **git submodules** and proposes a fix, documented in [this GitHub issue](https://github.com/Aider-AI/aider/issues/3603).
    *   They are soliciting feedback on this proposed enhancement.
*   **Low-Cost LLM Hunt Kicks Off**: A user is on the hunt for a low-cost **LLM** to use with **Aider**, citing rapid token depletion with **Gemini**.
    *   The main concern is balancing affordability with effective utility within the **Aider** framework.
*   **Aider's Fuzzy File Find Falls Flat**: A user likes **Aider** for its fuzzy search and replace functionality across multiple files, but finds it lacking with complex tasks due to **diff formatting issues** when processing too many files simultaneously.
    *   This forces the user to work with smaller file batches.
*   **Aider Hacked via Scripts for Task Automation**: A user wants to know how to use external scripts to automate repetitive tasks within **Aider**, like looping through files for edits.
    *   They ask about tools to streamline this interaction and suggest **AI agents** as a potential solution, mentioning **opendesk** or **cline** as possible alternatives.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Tiny-GPU Compiler Makes Debut**: An educational **MLIR-based compiler** targeting open-source GPU hardware, called [tiny-gpu-compiler](https://github.com/gautam1858/tiny-gpu-compiler), launched with an interactive web visualizer.
    *   The compiler translates a **C-like GPU kernel language** into **16-bit binary instructions** specifically for tiny-gpu, an open-source GPU implemented in Verilog.
*   **AMD Ryzen AI Pushes Forward**: [AMD.com](https://www.amd.com/en/products/embedded/ryzen-ai/p100-series.html) announced the release of the new **AMD Ryzen AI** after CES 2026.
    *   The **AMD Ryzen AI** integrates with the **MLIR compiler**.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **General Channel Bifurcates**: The Discord channel <#1475619898863649032> was created in response to _popular request_ to host a demo.
    *   A member was ready with a demo upon the channel's creation, suggesting enthusiasm and potential content.
*   **Demo Readiness**: A member of the channel indicated they were ready with a demo as soon as the channel was created.
    *   This shows that th...

[Read original post](https://news.smol.ai/issues/2026-02-24-claude-code/)

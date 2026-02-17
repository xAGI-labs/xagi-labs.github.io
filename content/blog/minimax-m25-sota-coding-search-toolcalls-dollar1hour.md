---
title: "MiniMax-M2.5: SOTA coding, search, toolcalls, $1/hour"
date: "2026-02-13T05:44:39.000Z"
description: "**MiniMax-M2.5** is now open source, featuring an \"agent-native\" reinforcement learning framework called **Forge** trained across **200k+ RL environments** fo..."
original_link: "https://news.smol.ai/issues/2026-02-13-minimax25/"
---

**a quiet day**

> AI News for 2/12/2026-2/13/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**256** channels, and **7993** messages) for you. Estimated reading time saved (at 200wpm): **675** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

this is the trajectory story that Minimax is trying to tell:

![https://github.com/MiniMax-AI/MiniMax-M2.5/raw/main/figures/bench_10.png](https://github.com/MiniMax-AI/MiniMax-M2.5/raw/main/figures/bench_10.png)

but the bigger story may be Forge, their agent-native RL framework.

![https://github.com/MiniMax-AI/MiniMax-M2.5/raw/main/figures/rl_1.png](https://github.com/MiniMax-AI/MiniMax-M2.5/raw/main/figures/rl_1.png)

* * *

AI Twitter Recap
================

**MiniMax M2.5 open-sourcing: agent-native RL, speed/cost, and rapid ecosystem uptake**

*   **MiniMax-M2.5 is now open source**: MiniMax released **MiniMax-M2.5** weights + code, positioning it as an “agent-native” model trained with **RL across hundreds of thousands of real-world environments** for coding, tool use, search, and office workflows ([MiniMax announcement](https://twitter.com/MiniMax_AI/status/2022310932693897628)). vLLM highlights day‑0 support and reports key benchmark numbers: **80.2% SWE‑Bench Verified**, **76.3% BrowseComp**, plus claims around training scale (200k+ RL environments) and speed/cost characteristics ([vLLM](https://twitter.com/vllm_project/status/2022311342225678757)). SGLang similarly ships day‑0 support and frames the model as production-grade for “always-on” agents ([lmsys](https://twitter.com/lmsysorg/status/2022319102560555401)).
*   **The practical headline is economics + throughput, not just score**: MiniMax repeatedly markets **“$1 per hour at 100 tps”** (interpretable as a “long-horizon agent budget”), which shows up both in their own posts ([MiniMax](https://twitter.com/MiniMax_AI/status/2022379949336957254)) and in community recaps emphasizing that low activated-parameter count makes self-hosting plausible ([omarsar0](https://twitter.com/omarsar0/status/2022384166034190528)). Early local runs suggest unusually strong on-device viability for its class: MLX users report ~**50 tok/s** shortly after release ([pcuenq](https://twitter.com/pcuenq/status/2022336556326060341)), and a single **M3 Ultra 512GB** run at **6‑bit** reports ~**40 tok/s** with ~**186GB** peak memory ([ivanfioravanti](https://twitter.com/ivanfioravanti/status/2022338870172684655)).
*   **Forge RL training system details leak into the narrative**: A Zhihu-derived writeup summarizes MiniMax’s “Forge” RL stack as still **CISPO-like**, using **process reward + completion-time reward**, with infrastructure tricks like **multi-level prefix cache** and high rollout compute share (claimed **~60%** of compute) generating **millions of trajectories/day** ([YouJiacheng](https://twitter.com/YouJiacheng/status/2022339475049947576)). MiniMax leadership explicitly answers parameterization tradeoffs (“**10B active** intentional”), claims proximity to “**infinite agent scaling**” with **knowledge capacity** as the limiter, and teases structural + pretraining innovation focus for **M3** ([MiniMax reply](https://twitter.com/MiniMax_AI/status/2022370086397624476)).
*   **Independent reviews: “viable for multi-turn work” but token-hungry**: A Chinese review thread claims M2.5 corrects M2.1’s imbalance (coding up, logic down), with overall improvements and better stability; it notes **high token usage** (nearly **2× Sonnet** in one comparison) but frames pricing/compute as making it usable day-to-day ([ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2022214461415993817)). Another summary calls it “≤Sonnet for coding, but close,” and emphasizes multi-turn viability as the key break from “toy” open models ([teortaxesTex](https://twitter.com/teortaxesTex/status/2022223441005621556)).
*   **Ecosystem uptake is immediate**: weights mirrored and packaged across tooling (Hugging Face release pings, GGUF/quant drops, etc.), including Intel-hosted quantized artifacts like a **2‑bit GGUF** for MiniMax‑M2 and **INT4** for Qwen3‑Coder‑Next ([HaihaoShen](https://twitter.com/HaihaoShen/status/2022293472796180676)).

**GLM‑5 and the “near-frontier” open model wave: performance, infra constraints, and eval chatter**

*   **GLM‑5 positioning**: Together markets GLM‑5 as best-in-class open-source for long-horizon agents and systems engineering, quoting metrics like **77.8% SWE‑Bench Verified**, **50.4% HLE w/ tools**, and a MoE efficiency story with “DeepSeek Sparse Attention” (as described in the tweet) ([Together](https://twitter.com/togethercompute/status/2022354579858289052)). W&B promotes an interview claiming **744B params**, a “new RL framework,” and “fully open source under MIT” (as stated in the post) ([W&B](https://twitter.com/wandb/status/2022389206572765697)). Community members also notice dataset fingerprints like “truthy‑dpo” appearing in GLM‑5 outputs ([jon\_durbin](https://twitter.com/jon_durbin/status/2022291772617945546)).
*   **GLM‑5 qualitative review highlights**: A detailed Zhihu-based comparison frames GLM‑5 as a substantial improvement over GLM‑4.7, especially on hallucination control, programming fundamentals, and character processing—but also more verbose/token-expensive and prone to “overthinking,” suggesting a trade between long-horizon reasoning and compute burn ([ZhihuFrontier on GLM‑5](https://twitter.com/ZhihuFrontier/status/2022161058321047681)).
*   **Benchmarks as a moving target**: There’s persistent meta-discussion about whether leaderboards/evals are saturated or misleading. Examples: concerns that tokens/latency tradeoffs hide true capability; skepticism about inferring model size from TPS; and the observation that past “SWE‑bench saturation” claims were premature ([jyangballin](https://twitter.com/jyangballin/status/2022367240293949772), [teortaxesTex](https://twitter.com/teortaxesTex/status/2022255213394948360)).
*   **Cross-checking with alternative evals**: SWE‑rebench is cited as “brutal” for some recent releases and shows different relative rankings than SWE‑bench Verified; a caution is made to treat it as “additional signal” ([maximelabonne](https://twitter.com/maximelabonne/status/2022401174549512576)).

**Agent engineering in practice: file-based coordination, terminal-first workflows, and “agent OS” framing**

*   **Claude Code “Agent Teams” internals are surprisingly simple**: A reverse-engineering summary claims Claude Code’s multi-agent comms use **JSON files on disk** (inboxes under `~/.claude/teams/inboxes/{agent}.json`), with polling between turns and JSON-in-JSON protocol messages; the argument is that this is a pragmatic CLI design (no Redis/queues) and improves observability at the cost of atomicity/backpressure ([peter6759](https://twitter.com/peter6759/status/2022156692985983266)).
*   **Terminal agents are becoming the default UX**: Cline launches **Cline CLI 2.0**, an open-source terminal coding agent featuring a redesigned interactive TUI, parallel agents with isolated state, headless CI/CD mode, and broad editor support (ACP for Zed/Neovim/Emacs) ([cline](https://twitter.com/cline/status/2022341254965772367), [cline details](https://twitter.com/cline/status/2022341258979717196)). Community framing: “open-source strikes back” due to free/low-barrier access to strong models ([testingcatalog](https://twitter.com/testingcatalog/status/2022348951459172604), [dr\_cintas](https://twitter.com/dr_cintas/status/2022387444189139367)). One Cline team member describes a full rewrite (Go → TypeScript) driven by architecture/UX pain and the need to run evals reliably ([arafatkatze](https://twitter.com/arafatkatze/status/2022415192932651302)).
*   **Agent scaffolds may matter less than expected (for some horizons)**: METR-related discussion suggests Claude Code / Codex scaffolds don’t strongly outperform METR’s “simple OS scaffolds” on measured time horizons so far ([nikolaj2030](https://twitter.com/nikolaj2030/status/2022398669337825737)), with Ajeya Cotra noting surprise at the small delta ([ajeya\_cotra](https://twitter.com/ajeya_cotra/status/2022419978495127828)). In contrast, others note that for longer, harder tasks, scaffold choice can matter materially (e.g., **~10% success** swings) ([gneubig](https://twitter.com/gneubig/status/2022451119310655909)).
*   **“Agents as OS / filesystem as substrate”**: Several posts converge on the idea that file systems are the natural environment for agents (observability, unstructured data manipulation). Box announces integration as a “cloud filesystem” into LangChain deepagents ([levie](https://twitter.com/levie/status/2022375298097111160)). WebMCP pushes “browser is the API” for web automation without UI perception, with a DoorDash-like starter template ([skirano](https://twitter.com/skirano/status/2022387763421810989)).
*   **Key operational lesson: make codebases “agent-ready”**: A crisp observation is that agents have “zero tolerance” for entropy humans route around; they treat dead code/outdated docs literally, forcing engineering hygiene that humans always needed but often deferred ([dok2001](https://twitter.com/dok2001/status/2022339274767520246)).

**RL/post-training research themes: process rewards, exploration, and rubric-based evaluation**

*   **Length-Incentivized Exploration (LIE) for reasoning**: A research summary introduces the “Shallow Exploration Trap” (long reasoning trajectories become exponentially unlikely under AR sampling), and proposes LIE: a length reward + redundancy penalty to encourage broader in-context exploration without filler. Reported gains include **AIME25 20.5%→26.7%** in one setup and small but consistent improvements across other benchmarks/models ([dair\_ai](https://twitter.com/dair_ai/status/2022360649817526275)).
*   **DPPO vs PPO and “trust region” framing**: A long algorithm breakdown contrasts PPO’s token-ratio clipping with DPPO’s distribution-shift control via divergence measures (TV/KL), plus approximations (binary/top‑K) to reduce compute, arguing DPPO is more proportional on rare tokens and better constrains large probability-mass moves ([TheTuringPost](https://twitter.com/TheTuringPost/status/2022326245745377562)).
*   **Rubrics-as-rewards and evolving rubrics**: A thread describes **RLER** (RL with evolving rubrics) in Dr. Tulu: seed rubrics with search-grounded criteria, maintain an evolving rubric buffer per prompt, and keep the most discriminative rubrics by reward variance to combat reward hacking and adapt evaluation on-policy ([cwolferesearch](https://twitter.com/cwolferesearch/status/2022384365049892974)). Separately, a take argues “rubrics as rewards” can beat verifiers-as-reward even in formal-verification settings, recommending verifiers in the loop/harness but not as the sole reward signal ([davidad](https://twitter.com/davidad/status/2022361016995319850)).
*   **∆Belief‑RL / information-seeking agents**: A new approach rewards actions by how much they increase belief in a target (logprob-based), aiming for long-horizon information seeking without a critic/reward model; claims include generalization from “20 questions” training to new tasks and continued improvement when scaling interaction time ([ShashwatGoel7](https://twitter.com/ShashwatGoel7/status/2022341054939185345)).
*   **Human simulation as an RL target**: Stanford’s **HumanLM** + **Humanual** benchmark propose training LLMs to simulate user responses accurately (human-centric evaluation, preference shaping, policy justification), positioning user simulation as a capability primitive for product/agent design ([ShirleyYXWu](https://twitter.com/ShirleyYXWu/status/2022374624676421676)).

**Systems/infra and tooling: FP4 MoE kernels, faster ZeRO loads, model “skills,” and observability**

*   **vLLM on GB300 + FP4 MoE acceleration**: vLLM reports DeepSeek R1 on **GB300** with **22.5K prefill TGS** and **3K decode TGS per GPU**, claiming large improvements over Hopper, and highlights a recipe including **NVFP4 weights** and **FlashInfer FP4 MoE kernel** (`VLLM_USE_FLASHINFER_MOE_FP4=1`) plus disaggregated prefill and tuning notes ([vllm\_project](https://twitter.com/vllm_project/status/2022308974150975792)).
*   **DeepSpeed ZeRO load-time fix**: A rework moves tensor flattening from CPU to GPU, significantly improving multi-GPU load times for huge models under ZeRO 1+2 ([StasBekman](https://twitter.com/StasBekman/status/2022354880049082658)).
*   **Gemini “Skills” and multimodal tool calling**: Google’s Gemini API work includes a “skills” repo teaser ([osanseviero](https://twitter.com/osanseviero/status/2022259577232785866)) and an Interactions API update enabling **multimodal function calling** where tools can return **images** and Gemini can process returned images natively ([philschmid](https://twitter.com/_philschmid/status/2022349886318928158)). AI Studio billing/upgrade UX is streamlined (upgrade to paid without leaving Studio, usage tracking, spend filters) ([OfficialLoganK](https://twitter.com/OfficialLoganK/status/2022409335465480346), [GoogleAIStudio](https://twitter.com/GoogleAIStudio/status/2022409735287537999)).
*   **Agent harness instrumentation**: ArtificialAnalysis adds end-to-end speed tracking to their agent harness **Stirrup**, plus per-model breakdowns and tool-call latency metrics—explicitly treating wall-clock completion time as a first-class agent metric ([ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2022358995739254800)).
*   **Local fine-tuning & Apple Silicon workflows**: Notable tooling for MLX: real-time transcription with Voxtral Mini 4B in MLX Swift ([awnihannun](https://twitter.com/awnihannun/status/2022322714548338962)), a no-code local fine-tuning tool exporting to Ollama ([awnihannun](https://twitter.com/awnihannun/status/2022327214218657948)), and a repo of MLX-LM LoRA examples including GRPO/ORPO/DPO variants ([ActuallyIsaak](https://twitter.com/ActuallyIsaak/status/2022414004623479014)).

**“AI accelerates science” moment: GPT‑5.2 + QFT result and the scaffolding narrative**

*   **OpenAI claims a novel theoretical physics result with GPT‑5.2**: OpenAI announces a preprint showing a gluon interaction previously assumed not to occur can arise under a specific “half-collinear” regime, framed as AI-assisted discovery ([OpenAI](https://twitter.com/OpenAI/status/2022390096625078389); preprint link is shared in-thread: [arXiv pointer](https://twitter.com/OpenAI/status/2022390104237707667)). Kevin Weil adds color: GPT‑5.2 Pro suggested a general formula; an internal scaffolded model then **proved it after ~12 hours** of continuous work ([kevinweil](https://twitter.com/kevinweil/status/2022388305434939693)). Discussion emphasizes that pattern-finding + sustained scaffolded reasoning is the differentiator, not just a single chat completion.
*   **Community reactions range from “significant journal-paper tier” to skepticism about interpretation**: Some report physicists calling it a meaningful contribution roughly equivalent to a solid journal paper ([polynoamial](https://twitter.com/polynoamial/status/2022413904757035167)); others focus on the implications of long-duration productive reasoning and how to measure it in tokens/time ([teortaxesTex](https://twitter.com/teortaxesTex/status/2022401945429000685)). There’s also meta-discussion about how many employees (or outsiders) can actually evaluate the proof/result, underscoring the evaluation gap for domain-elite work ([scaling01](https://twitter.com/scaling01/status/2022401147110318586)).

* * *

### Top tweets (by engagement)

*   **GitHub adds ability to disable PRs** ([joshmanders](https://twitter.com/joshmanders/status/2022170444116414790), [jaredpalmer](https://twitter.com/jaredpalmer/status/2022395520623480970)).
*   **OpenAI’s GPT‑5.2 physics announcement** ([OpenAI](https://twitter.com/OpenAI/status/2022390096625078389)).
*   **MiniMax M2.5 open-source release** ([MiniMax](https://twitter.com/MiniMax_AI/status/2022310932693897628)).
*   **Cline CLI 2.0 launch / open-source terminal agent** ([cline](https://twitter.com/cline/status/2022341254965772367), [testingcatalog](https://twitter.com/testingcatalog/status/2022348951459172604)).
*   **“I am the bottleneck now” (agent-era productivity reflection)** ([thorstenball](https://twitter.com/thorstenball/status/2022310010391302259)).
*   **Humanoid robotics hands progress (Figure)** ([adcock\_brett](https://twitter.com/adcock_brett/status/2022353637964751221)).

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. MiniMax-M2.5 Model Announcements and Details

*   **[MiniMaxAI/MiniMax-M2.5 · Hugging Face](https://www.reddit.com/r/LocalLLaMA/comments/1r3pxy7/minimaxaiminimaxm25_hugging_face/)** (Activity: 531): ****MiniMaxAI** has released the **MiniMax-M2.5** model on [Hugging Face](https://huggingface.co/models?sort=modified&search=minimax+m2.5), which is noted for its advanced performance in coding, tool use, and office tasks. The model maintains a size of `220 billion` parameters, contrary to expectations of an increase to `800 billion` like the **GLM5** model. It offers a cost-effective operation at `$1 per hour` for `100 tokens per second`, and is enhanced by the **Forge** reinforcement learning framework, which improves training efficiency and task generalization.** Commenters express surprise at the model's size remaining at `220 billion` parameters, highlighting its impressive performance despite not increasing in size. There is also anticipation for the release of a **GGUF** quantization format, which is not yet available.
    
    *   A user expressed surprise at the model's size, noting that while they expected an increase to 800 billion parameters to compete with models like GLM5, the MiniMax-M2.5 remains at 220 billion parameters. This is considered impressive given its 'frontier strength', suggesting high performance despite the parameter count.
    *   Another user mentioned the model's Q4\_K\_XL size, which is approximately 130GB. This size is significant as it places the model just beyond the capabilities of some hardware, indicating a need for more robust systems to fully utilize the model's potential.
    *   There is anticipation for the release of FP4/AWQ, indicating that users are looking forward to further advancements or optimizations in the model's performance or efficiency. This suggests a community eager for improvements that could enhance usability or reduce resource requirements.
*   **[MiniMaxAI MiniMax-M2.5 has 230b parameters and 10b active parameters](https://www.reddit.com/r/LocalLLaMA/comments/1r35d2x/minimaxai_minimaxm25_has_230b_parameters_and_10b/)** (Activity: 523): ****OpenHands** has announced the release of the **MiniMaxAI MiniMax-M2.5** model, which features `230 billion` parameters with `10 billion` active parameters. This model is noted for its performance, ranking 4th in the OpenHands Index, and is `13x` more cost-effective than **Claude Opus**. It excels in long-running tasks and issue resolution but requires improvements in generalization and task execution accuracy. The model is available for free on the OpenHands Cloud for a limited time. [Source](https://huggingface.co/cerebras)** Commenters are optimistic about the potential of a `~160B` REAP/REAM hybrid version, which could be optimized for machines with `128GB` of RAM, suggesting a focus on quantization and performance efficiency.
    
    *   The MiniMax-M2.5 model by Moonshot is notable for its architecture, which utilizes 230 billion parameters but only activates 10 billion at a time. This design choice is likely aimed at optimizing computational efficiency, allowing the model to perform well on less powerful hardware, such as GPUs that are not top-of-the-line. This approach could potentially offer a balance between performance and resource usage, making it accessible for more users.
    *   A comparison is drawn between MiniMax-M2.5 and other large models like GLM and Kimi. GLM has had to double its parameters to maintain performance, while Kimi has reached 1 trillion parameters. The implication is that MiniMax-M2.5 achieves competitive performance with fewer active parameters, which could be a significant advancement in model efficiency and scalability.
    *   The potential for further optimization through quantization is highlighted, suggesting that MiniMax-M2.5 could be made even more efficient. Quantization could reduce the model's size and increase its speed, making it feasible to run on machines with 128GB of RAM while still leaving room for additional tasks such as deep-context tool use. This could make the model particularly attractive for users with limited computational resources.
*   **[Minimax M2.5 Officially Out](https://www.reddit.com/r/LocalLLaMA/comments/1r2xotu/minimax_m25_officially_out/)** (Activity: 765): ****Minimax M2.5** has been officially released, showcasing impressive benchmark results: `SWE-Bench Verified` at `80.2%`, `Multi-SWE-Bench` at `51.3%`, and `BrowseComp` at `76.3%`. The model is noted for its cost efficiency, with operational costs significantly lower than competitors like **Opus**, **Gemini 3 Pro**, and **GPT-5**. Specifically, running M2.5 at `100 tokens per second` costs `$1 per hour`, and at `50 TPS`, it costs `$0.3 per hour`, making it a cost-effective solution for continuous operation. More details can be found on the [official Minimax page](https://www.minimax.io/news/minimax-m25).** Commenters highlight the potential game-changing nature of Minimax M2.5 due to its low operational costs compared to other models. There is also anticipation for the release of open weights on platforms like Hugging Face.
    
    *   The Minimax M2.5 model is highlighted for its cost-effectiveness, with operational costs significantly lower than competitors like Opus, Gemini 3 Pro, and GPT-5. Specifically, running M2.5 at 100 tokens per second costs $1 per hour, and at 50 tokens per second, it costs $0.3 per hour. This translates to an annual cost of $10,000 for four instances running continuously, making it a potentially disruptive option in terms of affordability.
    *   There is anticipation for the release of open weights on Hugging Face, which would allow for broader experimentation and integration into various applications. This suggests a community interest in transparency and accessibility for further development and benchmarking.
    *   The potential impact of Minimax M2.5 on existing models like GLM 5.0 and Kimi 2.5 is discussed, with some users suggesting that if the reported benchmarks are accurate, M2.5 could surpass these models in popularity due to its ease of use and cost advantages. This indicates a shift in preference towards models that offer better performance-to-cost ratios.

### 2\. Dhi-5B and GLM-5 Model Launches and Tutorials

*   **[UG student launches Dhi-5B (Trained from Scratch)](https://www.reddit.com/r/LocalLLaMA/comments/1r3hlfq/ug_student_launches_dhi5b_trained_from_scratch/)** (Activity: 344): **The post introduces **Dhi-5B**, a 5 billion parameter multimodal language model developed by an undergraduate student, trained with a budget of just ₹1.1 lakh ($1200). The model is trained in five stages, including pre-training, context-length extension, mid-training, supervised fine-tuning, and vision-extension. The Dhi-5B-Base variant, with 4 billion parameters, is trained on 40 billion tokens using a custom codebase and the Muon optimizer for matrix layers. It features 32 layers, 3072 width, SwiGLU MLPs, full MHA attention with FlashAttention-3, and a 4096 context length. The attached image shows a bar chart where Dhi-5B-Base outperforms other models like Gemma 3 PT 1B and GPT-3 2.7B on various tasks, demonstrating its cost-effectiveness and performance.** Commenters are curious about the affordability and architecture of the model, questioning the choice of MHA over other architectures like MLA or GQA, and suggesting the use of efficient hybrid architectures like LFM2.
    
    *   KaroYadgar raises questions about the model's architecture, specifically why Multi-Head Attention (MHA) was chosen over alternatives like Multi-Linear Attention (MLA) or Generalized Query Attention (GQA). They suggest considering efficient hybrid architectures such as LFM2, which they claim performs better than an equally trained Llama model, indicating a focus on optimizing performance and efficiency.
*   **[Tutorial: Run GLM-5 on your local device!](https://www.reddit.com/r/LocalLLM/comments/1r2t35r/tutorial_run_glm5_on_your_local_device/)** (Activity: 193): **The image is a tutorial for running the **GLM-5** model locally, highlighting its significant improvements over previous versions like GLM-4.7. The model, with `744B parameters` and a `200K context window`, has been optimized to run on local devices by reducing its size from `1.65TB to 241GB` using Dynamic 2-bit quantization. This allows it to run on a `256GB Mac`, though higher precision requires more RAM/VRAM. The tutorial includes instructions for software setup, such as `llama.cpp`, and configuration settings for optimal performance. The model excels in benchmarks like Humanity's Last Exam and BrowseComp, showcasing its advanced capabilities in coding and chat applications. [Image](https://i.redd.it/1047rus1c2jg1.png)** Commenters discuss the hardware requirements for running GLM-5, with questions about whether a high-end PC is necessary and comparisons to other models like qwen3-next-coder in terms of performance and precision.
    
    *   not-really-adam raises a technical question about the potential benefits of running GLM-5 in 1-bit precision compared to qwen3-next-coder in 8-bit. This suggests a trade-off between precision and performance, where lower bit precision could lead to faster computations but might affect the accuracy of coding results.
    *   Kubas\_inko discusses the usability of different quantization levels, suggesting that 2-bit and 1-bit quantizations might be ineffective for practical use, while 3-bit could offer a balance between performance and usability. This highlights the challenges in maintaining model performance while reducing computational requirements.
    *   Jumpy-Requirement389 inquires about the hardware requirements for running GLM-5, specifically mentioning a setup with 192GB of DDR5 RAM and a 5090 GPU. This implies that significant computational resources are necessary to effectively run the model, reflecting the high demands of modern AI models on local hardware.

### 3\. Local Hardware and Model Deployment Discussions

*   **[Sanity check before I drop $$$ on a dual-4090 home AI rig (Kimi K2.5 + future proofing)](https://www.reddit.com/r/LocalLLM/comments/1r2is2r/sanity_check_before_i_drop_on_a_dual4090_home_ai/)** (Activity: 138): **The proposed build for a dual-4090 home AI rig aims to run **Kimi K2.5**, a model with approximately `1 trillion parameters` and requiring around `600 GB` of VRAM for efficient operation. The build includes dual NVIDIA GeForce RTX 4090 GPUs, each with `24GB` of VRAM, totaling `48GB`, which is insufficient for such a large model. To run Kimi K2.5 effectively, the setup would need significantly more VRAM, suggesting the use of multiple high-end GPUs like the NVIDIA H200, which are considerably more expensive. The build also features an AMD Ryzen 9 7950X3D CPU, `256GB` of DDR5 RAM, and `2TB` of NVMe storage, but these specifications fall short for the intended AI workload.** Commenters suggest that the proposed dual-4090 setup is inadequate for running large models like Kimi K2.5, recommending instead enterprise-grade hardware such as multiple RTX 6000 GPUs or NVIDIA H200s. They highlight the need for significantly more VRAM and possibly a more robust CPU and RAM configuration to handle such demanding AI tasks.
    
    *   Running large models like Kimi K2.5, which has around 1 trillion parameters and requires approximately 600 GB of VRAM, is beyond the capacity of dual RTX 4090s. Even with aggressive quantization, the VRAM requirement remains over 200 GB, necessitating a setup with multiple high-end GPUs like the H200, which are significantly more expensive.
    *   To run Kimi K2.5 decently, a high-performance CPU such as a Threadripper or Epyc with at least 768 GB of RAM is recommended, along with a minimum of 4 RTX 6000 GPUs. This setup would still be insufficient for optimal performance, highlighting the substantial hardware demands of such large models.
    *   For practical purposes, using API calls might be more cost-effective than attempting to run Kimi K2.5 locally, given the prohibitive VRAM requirements. A 48 GB VRAM setup only covers a fraction of the model's needs, as detailed in the [Hugging Face model card](https://huggingface.co/unsloth/Kimi-K2.5-GGUF), which suggests that even with quantization, local execution is challenging.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. AI Model Performance and Benchmarks

*   **[GPT5.2 Pro derived a new result in theoretical physics](https://www.reddit.com/r/singularity/comments/1r3yi6e/gpt52_pro_derived_a_new_result_in_theoretical/)** (Activity: 556): ****GPT-5.2 Pro** has reportedly derived a new result in theoretical physics, as detailed in a [tweet](https://x.com/kevinweil/status/2022388305434939693?s=20) and a [paper](https://arxiv.org/pdf/2602.12176). The AI model was instrumental in formalizing and proving a hypothesis initially conceived by humans, showcasing its capability to handle complex theoretical frameworks. The [OpenAI blog](https://openai.com/index/new-result-theoretical-physics/) elaborates on how the model's structured approach was crucial in achieving this breakthrough, although it still lacks the ability to independently generate novel hypotheses.** Commenters highlight the potential of AI models like GPT-5.2 to surpass human capabilities in specific domains, though they note its limitations in creative hypothesis generation. There is a call for broader access to such advanced models to democratize their benefits.
    
    *   ObiWanCanownme highlights the role of GPT-5.2 in formalizing and proving hypotheses in theoretical physics, noting that while humans may generate initial hypotheses, AI excels in formalizing and proving them. The commenter also points out that GPT-5.2 surpasses human capabilities in applying defined approaches, though it lacks in 'outside the box' thinking, which remains a human strength.
    *   Aeonmoru references a claim from Hacker News suggesting that the result attributed to GPT-5.2 Pro was actually discovered in the 1980s, linking to a paper in Physical Review Letters (https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.56.2459). This raises questions about the novelty of the AI's contribution and whether it rediscovered existing knowledge.
    *   socoolandawesome clarifies that GPT-5.2 Pro initially suggested the theoretical physics result, and an internal scaffolded version of the same model developed the proof. This indicates a collaborative process between different AI model versions, showcasing the potential of scaffolded AI systems in advancing scientific research.
*   **[The new Gemini Deep Think incredible numbers on ARC-AGI-2.](https://www.reddit.com/r/singularity/comments/1r2xz0q/the_new_gemini_deep_think_incredible_numbers_on/)** (Activity: 1400): **The image presents a bar chart showcasing the performance of various AI models on the ARC-AGI-2 benchmark, which evaluates reasoning and knowledge capabilities. The **Gemini 3 Deep Think** model achieves a leading score of `84.6%`, significantly outperforming other models like **Claude Opus 4.6** (`68.8%`), **GPT-5.2** (`52.9%`), and **Gemini 3 Pro Preview** (`31.1%`). This performance is notable as it approaches the threshold for effectively solving the benchmark under the [ARC Prize criteria](https://arcprize.org/guide#overview). Additionally, the model's Codeforces Elo score of `3455` places it in the top `0.008%` of human competitors, highlighting its advanced problem-solving capabilities without external tools.** Commenters are impressed by the significant performance leap, with one noting the 50% increase in percentage points as remarkable. Another highlights the model's exceptional Codeforces Elo score, suggesting a breakthrough in AI capabilities.
    
    *   The Gemini Deep Think model has achieved a significant milestone by scoring above 85% on the ARC-AGI-2 benchmark, which is considered as effectively solving the benchmark according to the [ARC Prize criteria](https://arcprize.org/guide#overview). This is a notable achievement as it indicates a substantial leap in performance compared to other frontier models.
    *   The model's performance in competitive programming is particularly impressive, with a Codeforces Elo rating of 3455. This places it in the top 0.008% of human competitors on the platform, and notably, this was achieved without the use of external tools, highlighting the model's advanced problem-solving capabilities.
    *   The rapid progress from the release of ARC-AGI-2 to achieving a saturation point (85% solved) in less than a year is remarkable. This quick advancement suggests significant improvements in model training and architecture, potentially setting a new standard for future AI development.
*   **[Google upgraded Gemini-3 DeepThink: Advancing science, research and engineering](https://www.reddit.com/r/singularity/comments/1r2ymna/google_upgraded_gemini3_deepthink_advancing/)** (Activity: 753): ****Google** has announced the release of **Gemini-3 DeepThink**, which sets a new benchmark with `48.4%` on Humanity’s Last Exam, a test for frontier models. It also achieved `84.6%` on ARC-AGI-2, verified by the **ARC Prize Foundation**, and an Elo rating of `3455` on Codeforces, indicating superior performance in competitive programming. Additionally, it reached gold-medal level performance in the International Math Olympiad 2025. For more details, see the [original article](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/).** A notable debate in the comments highlights a perceived bias in performance comparisons, with some users pointing out that Gemini-3 is being compared to GPT 5.2 Thinking instead of the more directly competitive GPT 5.2 Pro.
    
    *   SerdarCS points out a potential issue with the comparison metrics used by Google, noting that they are comparing Gemini-3 DeepThink to GPT-5.2 Thinking instead of GPT-5.2 Pro, which would be a more direct competitor. This could lead to misleading conclusions about the performance and capabilities of Gemini-3 DeepThink.
    *   verysecreta discusses the confusion surrounding the naming conventions of Gemini-3 DeepThink, highlighting that the term 'Deep Think' might imply a different model or mode, similar to how 'Flash' and 'Pro' are distinct. They question whether 'Deep Think' is a separate model or just a mode within the existing Gemini framework, and express a desire for clearer naming conventions similar to those used by Anthropic.
*   **[The Car Wash Test: A new and simple benchmark for text logic. Only Gemini (pro and fast) solved the riddle.](https://www.reddit.com/r/singularity/comments/1r2ndfz/the_car_wash_test_a_new_and_simple_benchmark_for/)** (Activity: 1348): **The post introduces a new benchmark called the "Car Wash Test" for evaluating text logic capabilities of AI models. Notably, only **Gemini (pro and fast)** successfully solved the riddle, highlighting its advanced logical reasoning. However, users reported that **GLM 4.7** and **ChatGPT 5.2** also consistently solved the test, suggesting that these models possess strong logical reasoning abilities as well. The benchmark is part of **SimpleBench**, which includes various common-sense questions designed to test AI's understanding of everyday logic.** Some users argue that the benchmark's questions, like the Car Wash Test, may have multiple valid answers, as people can visit a car wash for reasons other than washing a car. This suggests that while the test aims to evaluate logic, it may not always have a single correct answer, reflecting real-world complexity.
    
    *   The comment by mxforest highlights that the GLM 4.7 model, when run locally, consistently solves the 'Car Wash Test' benchmark, achieving a perfect score of 10 out of 10. This suggests that GLM 4.7 has strong capabilities in handling text logic problems, at least in this specific context.
    *   micaroma mentions that ChatGPT 5.2 also successfully solves the benchmark, noting that it identifies the necessity of the car being present with a degree of common sense. This implies that ChatGPT 5.2 is capable of understanding and applying real-world logic to text-based problems, which is a critical aspect of AI reasoning.
    *   friendtofish discusses the broader implications of the benchmark, arguing that the ability of AI to interpret user intentions, rather than just the literal words, is a key measure of AGI. This perspective suggests that the 'Car Wash Test' might be more about evaluating an AI's understanding of context and user intent rather than just its ability to process text logic.
*   **[How is this not the biggest news right now?](https://www.reddit.com/r/OpenAI/comments/1r2jdg4/how_is_this_not_the_biggest_news_right_now/)** (Activity: 971): **The image showcases a leaderboard for frontier models on the IMO-ProofBench, highlighting **Google's Aletheia** as a standout performer with a `91.9%` score in Advanced Proofbench, achieving `100%` in IMO 2024 and `83.3%` in USAMO 2025. This model is a math-specialized version of Google Gemini, outperforming other models like "GPT-5.2 Thinking (high)" and "Gemini 3 Pro". Aletheia is described as a generator verifier agent, which may not directly compare to pure language models, suggesting a different approach in its architecture and capabilities. The name "Aletheia" reflects a philosophical concept of truth and unconcealment, aligning with its goal to minimize hallucinations and reveal accurate information.** Some commenters question the novelty of the achievement, noting that similar results were anticipated months ago. Others discuss the accessibility and cost of Aletheia, and debate its generalization capabilities beyond specific benchmarks. The naming choice "Aletheia" is also noted for its philosophical significance, suggesting a deeper intent behind the model's design.
    
    *   Alex\_\_007 raises questions about the accessibility and cost of using Aletheia, as well as its generalization capabilities beyond specific benchmarks. This suggests a need for more transparency in how these models perform outside controlled environments and what the financial implications are for users.
    *   Faintly\_glowing\_fish points out that Aletheia is not a pure language model but a generator-verifier agent, which makes it difficult to compare directly with other models on standard leaderboards. This highlights the complexity of evaluating AI models that use different architectures and methodologies.
    *   jjjjbaggg discusses the potential obsolescence of scaffold engineering in models like Aletheia, suggesting that reinforcement learning (RL) could eventually replace the need for such scaffolding. This indicates a trend towards more integrated and efficient model architectures in future AI developments.
*   **[Google Just Dropped Gemini 3 "Deep Think" : and its Insane.](https://www.reddit.com/r/GeminiAI/comments/1r30whv/google_just_dropped_gemini_3_deep_think_and_its/)** (Activity: 1504): **Google has announced the release of **Gemini 3 "Deep Think"**, an AI model that boasts advanced capabilities in reasoning, coding, and science, reportedly performing at Olympiad-level in scientific tasks. It is already being applied in practical scenarios, such as semiconductor material design at **Duke University**, and has achieved a new record by solving PhD-level math and physics problems. The announcement emphasizes the model's potential for real-world impact and its superior performance on challenging exams.** Some commenters express skepticism about the claims, questioning the validity of terms like "Olympiad-level science" and suggesting that the performance metrics might be exaggerated or arbitrary.
    

### 2\. AI Tools and Development Innovations

*   **[Introducing Simile - The Simulation Company](https://www.reddit.com/r/singularity/comments/1r34xd9/introducing_simile_the_simulation_company/)** (Activity: 655): ****Simile** has introduced an AI-based simulation platform designed to model societal decisions by using generative agents that mimic real human behavior. The company is developing a foundation model capable of predicting human behavior across various scenarios and scales, with applications already in use by leading companies for tasks like earnings call rehearsals and policy testing. Backed by $100M in funding from notable investors including **Index Ventures**, **Andrej Karpathy**, and **Fei-Fei Li**, Simile aims to simulate complex interactions across individuals and organizations, potentially revolutionizing decision-making processes.** Commenters highlight the potential of Simile's technology to transform decision-making, comparing it to Asimov's concept of Psychohistory. The involvement of prominent figures like **Karpathy** and **Fei-Fei Li** lends credibility, suggesting the project is not mere 'vaporware'. There is excitement about the potential impact of 'simulating reality' on AI advancements.
    
    *   Rare-Site highlights the contrast between the rigorous testing in software development, such as A/B testing for minor UI changes, and the often intuitive decision-making in significant policy or product shifts. They emphasize the potential impact of Simile, especially with backing from notable figures like **Karpathy** and **Fei-Fei Li**, suggesting that if successful, it could revolutionize AI by enabling 'simulating reality'.
    *   EmbarrassedRing7806 raises a concern about the competitive landscape, questioning the ability to maintain a competitive advantage or 'moat' in the simulation space. They reference a similar project, Aaru, implying that while Simile is promising, it may face challenges in differentiating itself from existing or emerging competitors.
*   **[I built an opensource "Vibe Coding" tool that fixes AI Slop by interviewing you first](https://www.reddit.com/r/ClaudeCode/comments/1r2t1d5/i_built_an_opensource_vibe_coding_tool_that_fixes/)** (Activity: 147): ****Vibe Architect** is an open-source tool designed to streamline the app development process by refining user specifications before coding begins. It operates through a structured brainstorming approach where an AI architect suggests options for MVP scope, design systems, and tech stacks, allowing users to make selections without starting from scratch. The tool generates markdown spec files compatible with platforms like Cursor and Claude, and it emphasizes user privacy by keeping API keys client-side. The project is available on [GitHub](https://github.com/mohdhd/vibe-architect) and a [live demo](https://specs-gen.vercel.app) is accessible online.** One commenter suggests incorporating a 'contrarian skill' to challenge and refine ideas, which could enhance the tool's effectiveness by identifying potential issues early in the design process. Another advises against using LLMs for copywriting, suggesting manual text editing for better results.
    
    *   IlliterateJedi describes a structured design flow using a series of 'skills' executed sequentially by a tool like Claude. The process includes a clarifier to define goals, a requirements skill to document needs, an architect to design solutions, a contrarian to critique the plan, and an implementer to execute it. This approach helps identify overlooked aspects early in the development process, potentially preventing issues that might arise later.
    *   jazzy8alex advises against using LLMs for copywriting, noting that while they can automate the process, the results often appear subpar. They suggest spending a short amount of time writing and checking grammar manually to achieve better quality, emphasizing that personal style and vocabulary are less important than clarity and correctness.

### 3\. Claude and Gemini AI Model Comparisons and Experiences

*   **[After 3 years with ChatGPT, I tried Claude and Gemini - and now GPT feels... generic?](https://www.reddit.com/r/ChatGPT/comments/1r3kkl8/after_3_years_with_chatgpt_i_tried_claude_and/)** (Activity: 1943): **The post discusses a user's experience transitioning from **ChatGPT** to **Claude** (by **Anthropic**) and **Gemini** (by **Google**), highlighting perceived differences in interaction quality. The user notes that ChatGPT feels overly cautious and templated, often providing 'corporate approved' answers, whereas Claude offers nuanced, expert-level responses and Gemini excels in research and technical tasks. This shift in perception suggests that Claude and Gemini may be more tailored for advanced users, while ChatGPT appears optimized for a broader audience. The user questions whether ChatGPT has become more 'generic' over time or if the competition has simply improved significantly.** Commenters generally agree with the original post, noting that ChatGPT has become more restricted due to safety filters, which some attribute to corporate decisions. Users express a preference for Claude's human-like interaction and memory capabilities, while others appreciate Gemini's research skills despite its weaker memory. Concerns about transitioning from ChatGPT's organized interface to other platforms are also mentioned.
    
    *   AIDeployed highlights a specific instance where Gemini outperformed ChatGPT in problem-solving, leading to a switch in preference. This suggests that Gemini may have strengths in certain specialized tasks where ChatGPT might struggle, indicating a potential area for further benchmarking and comparison between the models.
    *   SurreyBird discusses the impact of safety filters on ChatGPT's performance, suggesting that these have 'dumbed down' the model since October. They note that Claude offers a more human-like interaction and better memory compared to Gemini, although Gemini's personality is preferred despite its technical shortcomings. This points to a trade-off between technical capabilities and user experience in AI models.
    *   PersonalNature1795 recommends trying Claude Opus 4.6 with memory and extended thinking enabled, noting that it requires a subscription and specific instructions to avoid erratic behavior. This highlights the importance of configuration and user guidance in optimizing AI model performance.
*   **[Spotify says its best developers haven’t written a line of code since December, thanks to AI (Claude)](https://www.reddit.com/r/ClaudeAI/comments/1r3jh3q/spotify_says_its_best_developers_havent_written_a/)** (Activity: 735): **The image highlights Spotify's use of an internal AI system called "Honk," which leverages generative AI, specifically "Claude Code," to enhance coding and product development efficiency. This system allows engineers to manage tasks such as bug fixes and feature additions remotely via Slack, without directly writing code. The AI facilitates real-time code deployment, enabling engineers to receive updated app versions on their devices before arriving at the office. This approach reflects a broader trend in tech companies where AI significantly assists in code generation, increasing deployment rates and shifting the focus of developers towards higher-level engineering tasks like architecture and system design.** A key opinion from the comments emphasizes that while AI accelerates the coding process, the role of engineers in architecture, system design, and debugging remains crucial. Another comment notes the increasing reliance on AI for code generation in large tech companies, suggesting this trend will become the norm.
    
    *   MODiSu highlights that while AI accelerates the coding process, the role of senior developers has shifted towards architecture, system design, and debugging. The distinction between AI-assisted senior developers and less experienced 'vibe coders' is growing, with the former being significantly more efficient and producing fewer bugs.
    *   Altruistic-Cattle761 shares a personal experience where AI has drastically increased deployment rates, with 90% of code being AI-assisted in some teams. This trend is becoming the norm in large US tech companies, indicating a significant shift in how software development is approached.
    *   Barquish describes a detailed workflow using AI tools like VSCode and Claude Code, emphasizing the importance of planning and documentation before coding. This approach involves creating indexed markdown files and using AI for cross-review, which helps in building features without disrupting the larger codebase. This method reflects how large corporations might achieve efficient development without traditional coding.
*   **[Anyone feel everything has changed over the last two weeks?](https://www.reddit.com/r/ClaudeAI/comments/1r2zjgl/anyone_feel_everything_has_changed_over_the_last/)** (Activity: 3331): **The post describes a rapid transformation in workplace automation, highlighting the development of a comprehensive stock backtesting suite, a macroeconomic app for real-time global economic data, compliance applications, and a virtual research committee for stock analysis. These advancements, achieved in a matter of days, were previously unattainable, illustrating the significant impact of AI tools like **Claude**. The author notes that improvements are now suggested automatically by AI, emphasizing the ease and speed of these developments compared to a few months ago.** Commenters express concern about job security due to AI's ability to automate roles, with one noting the ease of replacing their job with AI. Another commenter debates whether to focus on developing AI workflows or learning skills that are less susceptible to automation, highlighting the uncertainty and strategic decisions facing workers in the AI era.
    
    *   finnjaeger1337 discusses the rapid replacement of traditional SaaS tools with AI solutions, highlighting the efficiency of AI models like Claude in performing tasks that previously required multiple software subscriptions. This reflects a broader trend of AI integration into workflows, reducing dependency on specific software tools.
    *   apf6 notes a significant shift in the perception of AI coding agents, particularly after the release of Opus 4.5, which demonstrated substantial improvements. This shift has led to widespread acceptance and integration of AI in software development, marking a transition from skepticism to mainstream adoption.
    *   RunApprehensive8439 points out the challenges of AI integration, emphasizing that while initial AI implementations can be impressive, they often lead to complex debugging issues when failures occur. This highlights the need for robust error handling and debugging strategies in AI-driven projects.
*   **[I saved 10M tokens (89%) on my Claude Code sessions with a CLI proxy](https://www.reddit.com/r/ClaudeAI/comments/1r2tt7q/i_saved_10m_tokens_89_on_my_claude_code_sessions/)** (Activity: 978): **The post introduces **Rust Token Killer (rtk)**, a CLI proxy designed to optimize token usage in **Claude Code** sessions by filtering and compressing command outputs. This tool, written in Rust, significantly reduces token consumption by eliminating unnecessary output such as verbose logs and status bars. For example, `cargo test` output is reduced from `155 lines to 3 lines`, and `git status` from `119 characters to 28 characters`, resulting in a total token saving of `10.2M tokens (89.2%)` over two weeks. The tool operates as a transparent proxy, requiring users to prefix commands with `rtk`, and is available open-source on [GitHub](https://github.com/rtk-ai/rtk).** One commenter suggests enhancing the tool by integrating a feature to tee full logs to a file, allowing users to access complete outputs if needed, which could prevent the need for multiple test runs to capture failure information.
    
    *   BrilliantArmadillo64 suggests enhancing the proxy by tee-ing the full log to a file and providing a hint at the end of the session that the file can be opened for full output. This approach addresses the issue where Claude Code often uses `| tail` and requires multiple test runs to capture failure information. By integrating this into the proxy, users can streamline their workflow and avoid redundant test executions.
    *   BeerAndLove describes the proxy's functionality as checking commands, removing unnecessary output, and then sending the streamlined data back to Claude Code. This method allows for the addition of custom 'filters' or 'triggers' for different use cases, making it a flexible tool for optimizing token usage and adapting to specific user needs.
    *   digital-stoic shares detailed statistics on token savings achieved using the proxy, highlighting a `92.7%` reduction in output tokens across `1159` commands. The breakdown includes specific commands like `rtk git diff` and `rtk grep`, showing significant savings and execution times, such as `81.5%` savings for `rtk git diff --...` with an average execution time of `6ms`. This data underscores the proxy's efficiency in reducing token usage and improving performance.
*   **[Dear senior software engineer, are you still writing code?](https://www.reddit.com/r/ClaudeCode/comments/1r2vakt/dear_senior_software_engineer_are_you_still/)** (Activity: 928): **The post discusses the evolving role of senior software engineers in the context of AI-generated code, with claims from engineers at major tech companies like **Google**, **Microsoft**, **Anthropic**, and **OpenAI** that they no longer write code manually, relying instead on AI. The author, a senior engineer with 20 years of experience, questions the quality of AI-generated code, noting that while AI can produce impressive results quickly, it often requires significant refinement. The author seeks insights from other senior engineers on whether this trend is widespread across different company sizes and sectors.** Commenters highlight that achieving high-quality AI-generated code requires skill in prompting and a shift in mindset. One commenter, who leads a team of 65+ engineers, notes that 80% of their code is AI-generated, particularly excelling in refactoring and migrating codebases. Another commenter emphasizes that while nearly 100% of their code is AI-generated, it involves a collaborative process where developers guide the AI, supported by extensive documentation and architecture to ensure quality.
    
    *   The integration of AI in coding is highlighted by several users, with one noting that 80% of their team's code is AI-generated. They emphasize the importance of refactoring and migrating codebases, where AI excels. Another user mentions that nearly 100% of their code is AI-generated, but stresses the need for a 'handheld approach' where developers guide the AI, review, and edit the code, supported by extensive documentation and architecture to prevent poor quality output.
    *   A user describes their experience with AI in coding, noting that they have integrated AI with Jira to automate the initial pass on tickets, resulting in a 90% success rate. They highlight the effectiveness of using microservices with well-defined responsibilities and API specifications, which helps the AI navigate and produce better results. The user also points out that AI struggles with large files and emphasizes the importance of breaking tasks into smaller, manageable parts to improve AI performance.
    *   Another user discusses the shift to 'vibe engineering,' where they rely on AI agents to produce production-grade, scalable, and secure code. They describe a system where multiple AI agents collaborate, each focusing on different aspects like security, performance, and structure, iterating until the code meets the required standards. This approach shifts the responsibility of poor results from AI to humans, who must define clear constraints and architecture for the AI to follow.
*   **[Claude Code's CLI feels like a black box now. I built an open-source tool to see inside.](https://www.reddit.com/r/ClaudeCode/comments/1r3to9f/claude_codes_cli_feels_like_a_black_box_now_i/)** (Activity: 361): **The post introduces `claude-devtools`, an open-source tool designed to enhance observability when using the Claude Code CLI, which has been criticized for its lack of transparency. The tool provides real-time execution traces by visualizing session logs, offering features like inline diffs, token usage breakdowns, and execution trees for sub-agents. It operates locally without intercepting commands and is MIT licensed. The tool aims to address issues like unexplained token usage and lack of visibility into file changes, providing a middle ground between the default and verbose modes of the CLI. The repository is available on [GitHub](https://github.com/matt1398/claude-devtools).** Commenters express enthusiasm for the tool, highlighting frustrations with the current CLI's lack of context and transparency. One user mentions developing a similar feature for a VSCode plugin, indicating a shared need for improved visibility in development tools.
    
    *   Pitiful-Impression70 highlights a common issue with Claude Code's CLI, where users receive a 'done' message without context, leading to confusion about token usage. They express interest in the open-source tool as it promises to provide insights into why excessive tokens are consumed, especially for seemingly simple tasks.
    *   Cal\_lop\_an shares a similar frustration with the lack of visibility in Claude Code's CLI and mentions having developed a similar solution as a VSCode plugin. They provide a link to their project, [Sidekick for Claude Max](https://github.com/cesarandreslopez/sidekick-for-claude-max), indicating a community interest in tools that enhance transparency and debugging capabilities in AI-driven code changes.
    *   its\_Caffeine raises concerns about the code quality of the open-source tool, describing it as 'vibecoded' and poorly constructed. This comment suggests that while the tool addresses a real need, its implementation may not meet professional standards, which could affect its adoption among developers who prioritize code quality.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by Gemini 3.0 Pro Preview Nov-18

**Theme 1. OpenAI’s New Frontiers: Physics Discoveries and Model Roadmap Shifts**

*   **GPT-5.2 Rewrites Theoretical Physics**: OpenAI announced that **GPT-5.2** successfully derived a previously "impossible" **gluon interaction** result, collaborating with researchers from IAS and Harvard. The findings, detailed in a [preprint with researchers](https://openai.com/index/new-result-theoretical-physics/), demonstrate that specific conditions can trigger interactions physicists expected would never occur.
*   **GPT-5.3 Codex Spark Supercharges Vercel**: Users report that **GPT-5.3-Codex-Spark** is delivering "insane" speeds for repository changes and Vercel deployments, rolling out now to **Pro** users and **Windsurf Arena**. Engineers shared screenshots of commands like `codex -m gpt-5.3-codex-spark --yolo`, claiming it brings a whole new level of velocity to development workflows.
*   **GPT-4o Retirement Delayed Indefinitely**: Contrary to previous deprecation notices, OpenAI [updated their schedule](https://openai.com/index/retiring-gpt-4o-and-older-models/) to state there are "no changes to be made" for **GPT-4o** at this time. Community members speculate this reversal aims to maintain revenue from the popular model while avoiding potential legal liabilities associated with sunsetting it too abruptly.

**Theme 2. Performance Engineering: Kernels, Profiling, and Quantization**

*   **vLLM CPU Bottleneck Unmasked**: Profiling of **vLLM** revealed a massive bottleneck where a few lines of PyTorch invoking 4 kernels consume **300µs** on the CPU, sparking a community investigation into [launch configurations](https://github.com/vllm-project/vllm/blob/071d863e208b40fa1bb986ad230e322b2bbbbcf5/vllm/model_executor/layers/quantization/utils/fp8_utils.py#L114). Engineers clarified that the issue isn't just about efficient serving but understanding why these kernels aren't part of a single **CUDA graph launch**.
*   **Makora Fine-Tunes GPT-5 for GPU Kernels**: A collaboration between Makora and OpenAI successfully fine-tuned **GPT-5** to generate GPU kernels that outperform PyTorch by **2x**, according to their [technical report](https://www.arxiv.org/pdf/2602.11000). The project focuses on dataset curation and RL evaluation environments to mitigate hacks and improve tool-calling for high-performance compute generation.
*   **LFM2.5-VL Punches Above its Weight**: Users testing the [LFM2.5-VL model](https://huggingface.co/MuXodious/LFM2.5-VL-1.6B-absolute-heresy-GGUF) report it performs on par with **30B parameters** models, achieving impressive speeds close to **1bit GLM 4.7 flash**. The community quickly rallied to provide scripts for running this efficient vision-language model in **llama.cpp**.

**Theme 3. The Agentic Workflow: Coding Wins and Skill Regression Risks**

*   **AI Assistants Cause Skill Rot**: A new **Anthropic** paper ([arxiv.org/html/2601.20245v2](https://arxiv.org/html/2601.20245v2)) reveals that while AI coding assistants boost productivity, they impair learning; participants using AI scored **17% lower** on subsequent quizzes. The research identifies that "delegation" patterns hurt skill retention compared to "cognitive engagement" patterns where users ask the AI for explanations.
*   **Opus 4.6 Thinking Max Crushes Legacy Bugs**: A **Cursor** user reported that **Opus 4.6 Thinking Max** successfully resolved a complex multiplatform mobile file sync bug that had plagued their team for **six months**. The incident highlighted the model's ability to handle deep reasoning tasks, though it sparked questions about one-shot verification reliability.
*   **Windsurf Integrates GPT-5.3**: The **Windsurf** IDE has officially integrated **GPT-5.3-Codex-Spark** into its "Arena Mode," allowing users to pit the new model against others in fast and hybrid battle groups. This integration marks a significant accessibility milestone for OpenAI's latest coding-specific model within a dedicated IDE environment.

**Theme 4. Security Vulnerabilities, Jailbreaks, and Identity Crises**

*   **Opus 4.6 Leaks External Curl Access**: Security researchers alerted **Anthropic** that the deployment version of **Opus 4.6** retains external `curl` access, likely a leftover from a development build, as evidenced by a shared [enumeration log](https://cdn.discordapp.com/attachments/1204553141354504193/1471747378896965688/Opus4.6-enumeration.txt?ex=6990b7ce&is=698f664e&hm=4d055aace9d642dc7544cd93015f4a73e7e9152657a55f5c89b2d253250df4d3&). This vulnerability potentially exposes the model's hosting environment to unauthorized data exfiltration or interaction.
*   **DeepSeek Suffers Identity Crisis**: Users on **Perplexity** and Reddit noticed **DeepSeek** models identifying themselves as "Claude," suggesting heavy training on **GPT-4** or **Anthropic** outputs. This data contamination issue has sparked debates about the "Ouroboros" effect of models training on other models' synthetic data.
*   **Grok Gaslighted into Writing Malware**: Jailbreakers reported success in "gaslighting" **Grok** into providing CS2 cheats and even a car bomb guide by treating the AI as a conversation partner rather than a tool. Users claim the exploit works because Grok "starts to see different things than other AI" when you win it over to your side.

**Theme 5. Corporate Politics and Infrastructure Economics**

*   **AI Leadership Pivots to Politics**: **Anthropic** appointed former Trump Deputy Chief of Staff **Chris Liddell** to its board, while **OpenAI** President **Greg Brockman** donated $25M to a pro-Trump Super PAC. These moves signal a strategic pivot by major AI labs to fortify relationships with the incoming US administration.
*   **Perplexity Pro Squeezes Users**: Subscribers are revolting against **Perplexity Pro** after the silent removal of API credits and the imposition of strict weekly upload limits, described by one user as a "trash decision by upper management." The changes have led to a surge in discussions about migrating to alternative platforms or self-hosted solutions.
*   **Blackwell B200 Power Hunger**: Engineers analyzed the [NVIDIA DGX B200 datasheet](https://resources.nvidia.com/en-us-dgx-systems/dgx-b200-datasheet), calculating that a single rack requires a staggering **30kW** of power. The finding sparked jokes about needing to consult ChatGPT to build backyard nuclear reactors just to run local inference on the new hardware.

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **GPT-4o's Sunset Triggers Sentimental Storm**: The retirement of **GPT-4o** sparks discussions regarding users' reliance on AI companions, with worries over potential emotional fallout and some community members even mentioning _suicidal ideation_.
    *   Debates arise between advocating for real-world interaction and validating AI companionship for those struggling with human connections; some suggest that _sunsetting models should be illegal_.
*   **Reverse Aging Research Reaches New Milestones**: Insights into ongoing **reverse aging** research highlight significant progress with _dogs and monkeys_, shifting focus to _DNA stability and delivery processes_.
    *   Discussion turns to societal implications like _resource strains_ and ethical considerations, including the potential for initial exclusivity to the _wealthy elite_.
*   **Grok Writes CS2 Cheats**: Members reported that according to **Grok**, [Cursor](https://www.cursor.sh/) makes the best CS2 cheat from an AI bot, and one also stated he got Grok to provide a complete guide to creating a car bomb.
    *   Members suggest that a **Grok** exploit involves gaslighting the AI to win them over to your side because _he starts to see different things than other AI._
*   **Opus 4.6 Exposed With External Curl**: A member alerted Anthropic that the deployment version of **Opus 4.6** still possesses external curl access, suggesting a security vulnerability through a forgotten development build and including a link to [Opus4.6-enumeration.txt](https://cdn.discordapp.com/attachments/1204553141354504193/1471747378896965688/Opus4.6-enumeration.txt?ex=6990b7ce&is=698f664e&hm=4d055aace9d642dc7544cd93015f4a73e7e9152657a55f5c89b2d253250df4d3&).
    *   Another member shared a new image generator prompt, claiming it is efficient in unlocking nano banana pro model and is awaiting reviews, with a link to [IMAGE\_MSTAER.txt](https://cdn.discordapp.com/attachments/1204553141354504193/1471833023933710419/IMAGE_MSTAER.txt?ex=69910792&is=698fb612&hm=00e9c72474ae636718543ae2410be05e5709ceddd1e90a57a76788b5034e95a5&).

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Video Arena Vaporizes, Users Vent**: Users bemoan the [removal of **Video Arena**](https://discord.com/channels/1340554757349179412/1343296395620126911/1469742635341189240) from the Discord server, now restricted to **3 generations per 24 hours** on the website.
    *   The reduced availability has led to significant user disappointment and a surge in bot usage as an alternative.
*   **Gemini Generations Grind to a Halt**: Users report ongoing issues with **Gemini generation**, including frequent freezing and challenges with models understanding how to utilize tools effectively.
    *   Members have observed that **Gemini** sometimes generates endless replies or randomly loses context after a certain period in the chat, leading to blank outputs.
*   **Minimax M2.5 Model Misses the Mark**: Community feedback indicates that the **Minimax M2.5** model is _kind of disappointing_ despite its lower cost compared to **Opus**.
    *   While some users appreciate **Minimax** for its affordability and less strict moderation, discussions highlight varying preferences among models like **Claude Opus 4.6**, **Codex 5.3**, and **Gemini 3**.
*   **Seedance 2.0 Spurs Source Search**: Community members express enthusiasm for the release of **Seedance 2.0**, sharing links to [Jimeng AI](https://jimeng.jianying.com/ai-tool/home), a Chinese platform offering access to the tool.
    *   Frustration arose due to the requirement to _login with the Chinese version of TikTok_ to access **Seedance 2.0**.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **Impressive LFM2.5-VL Performance**: A member reported trying out [LFM2.5-VL](https://huggingface.co/MuXodious/LFM2.5-VL-1.6B-absolute-heresy-GGUF), finding it _insanely impressive_ and on par with **30B models**, achieving results close to **1bit GLM 4.7 flash** when running **fp16 gguf** from tantk.
    *   Another member provided a script for running **LFM2.5-VL** in **llama.cpp**.
*   **Debate on 10.4 Trillion Parameter Model**: A user claimed to have a **10.4 trillion parameter model** and shared a [benchmark](https://cdn.discordapp.com/attachments/1179035537529643040/1471687986012881051/10.4Trillion.png), sparking skepticism and requests for details on its architecture, training, and hardware requirements.
    *   The user later clarified it was a **Gemma3:12B model** its an infinity loop on KMV8 32GB ram no gpu, benching only virtual 10.4T.
*   **OG OSS Providers Slow Down**: Members observed that OG OSS providers are slow, including _zai_, _alibaba_ and _ds_ which _struggle with compute_.
    *   Another member pointed out [Fireworks](https://fireworks.ai/) is working okay-ish, but [Parasail](https://www.parasail.ai/) was better, despite [Fireworks](https://fireworks.ai/) being very expensive.
*   **Chronicals Framework Dismissed as AI Slop**: A member asked if the **Unsloth team** had investigated the [Chronicals training framework](https://github.com/Ajwebdevs/Chronicals), only for another to dismiss it as **AI slop** and point to a [Reddit thread](https://www.reddit.com/r/LocalLLaMA/s/imhGEIlgm2I) for context.
    *   Members noted that **fake accounts** spammed posts about the framework across subreddits.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **API Log Backup Causes Billing Snafu**: An issue with delayed **API Request Logs** and **Billing events** occurred, with updates posted to the [status page](https://status.openrouter.ai/incidents/4d39RZb7-1rp).
    *   The incident has been resolved, and the logs are now up to date, according to [this status page update](https://status.openrouter.ai/incidents/4d39RZb7-1rp).
*   **Llama 3.1 8B tramples Qwen3 8B**: A user switched from **Qwen3-8B** to **Llama-3.1-8B-Instruct** because Qwen3-8B reached capacity and they needed a more cost-effective alternative, as reported in [this Hacker News discussion](https://news.ycombinator.com/item?id=46993774).
    *   The user noted receiving a message indicating _Qwen capacity was low for many requests_ and would have required BYOK to continue using it.
*   **OpenClaw Failover Rate Limits Revenge**: Users reported experiencing rate limit errors, specifically `openrouter/moonshotai/kimi-k2-thinking` due to **OpenClaw's** strict backoff mechanism, as documented in [OpenClaw's model failover documentation](https://github.com/openclaw/openclaw/blob/91b96edfc4860faa67da1e34828a22e9ad4c737c/docs/concepts/model-failover.md?plain=1#L80).
    *   It appears that **OpenClaw** locks out **OpenRouter** completely for a while, exacerbating the rate limiting issues when a provider's limit is hit.
*   **AI Boyfriends Trigger Sentience Angst**: Members discussed the phenomenon of users treating **AI models as real boyfriends**, expressing concern over emotional attachment and the implications of companies _killing_ these _sentient AI boyfriends_, as highlighted in [this post](https://x.com/seltaa_/status/2021943538142130688).
    *   It was observed that these individuals often fail to differentiate between technology and reality, with one member stating, _You wouldn't export your boyfriend to another body, do you? Don't try to apply technical knowledge to delulu_.
*   **Step 3.5 Flash surprises as hidden gem**: A user described **Step 3.5 Flash** performance as surprising and punching above its weight, as demonstrated in [this YouTube video](https://youtu.be/yvBbcLCZIhy).
    *   The user expressed surprise that _it really punches above its weight and nobody is fucking hosting it_.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Upload Limits Anger Users**: Several **Perplexity Pro** users are complaining about hitting weekly upload limits, with some feeling it's a greedy move and considering alternatives.
    *   One user described it as _"Some trash decision by upper management trying to squeeze even more money,"_ spurring discussions on whether to switch to other platforms.
*   **Gemini 3 Pro Botches Basic Code**: Users are puzzled by **Gemini 3 Pro's** inability to solve basic coding problems, especially math, despite handling more complex tasks well.
    *   One user provided a picture of a math question that **Gemini 3 Pro** failed, while **ChatGPT** did not.
*   **DeepSeek Suffers Identity Crisis as Claude**: **DeepSeek** is reportedly identifying itself as **Claude**, possibly due to being trained on GPT-4 outputs, leading to confusion and discussion.
    *   This quirk was highlighted in [a Reddit thread](https://www.redditez.com/r/DeepSeek/s/OHTEpUIwVe), prompting speculation about the model's training data and architecture.
*   **Perplexity Pro API Credits Disappear**: **Perplexity Pro** subscribers are reporting that the **API credits** previously included with their subscriptions have been silently removed.
    *   According to users, this change occurred _"without notice in the February Update,"_ leading to dissatisfaction and questions about the value proposition of the Pro subscription.
*   **Perplexity Reason Mode Fails on MacOS**: MacOS users are experiencing issues with **Reason mode** in Perplexity, with the button being unclickable even with a Pro subscription, especially after a recent update.
    *   This malfunction suggests a potential bug or compatibility issue, preventing users from accessing a key feature of the platform.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Cursor Setup Pursues Unrestricted Work Access**: A member aims to set up **Cursor** for unrestricted operation at work, envisioning a [self-driving codebase](https://cursor.com/blog/self-driving-codebases) environment.
    *   They seek examples to ensure **AI** functions without limitations, thus streamlining their coding workflow.
*   **Opus 4.6 Thinking Max Destroys Bugs**: A user reported that **Opus 4.6 Thinking Max** resolved a complex bug in a multiplatform mobile file sync mechanism, which had troubled their team for **six months**.
    *   Follow up questions involved one-shot resolution verification, and validating student status without a .edu email.
*   **Cursor Cruises on CachyOS**: Users find that **Cursor** performs well on **CachyOS**, avoiding driver issues seen on Windows, while others recommend Linux Mint.
    *   The ease of setup and performance benefits, especially with high-end GPUs, led some to **switch from Windows 11**.
*   **DeepSeek Models Now Under Blockade**: A user noted the difficulty in finding IDEs that support **DeepSeek** coding models, implying a potential block by US companies and custom models.
    *   The member sought **cost-effective** alternatives to Cursor's standard models and discussed IDE support and configurations to use **DeepSeek** despite the constraints.
*   **Clean AI-Assisted Codebases - Aspirational?**: A user is seeking advice on how to maintain **clean and maintainable AI-assisted codebases**, particularly when using planning, tools, and multi-step workflows.
    *   They specifically asked about approaching feature understanding and ensuring the delivery of **rock solid code**.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **GPT-5.2** Derives New Physics Result**: According to a new announcement from OpenAI, **GPT-5.2** derived a new result in **theoretical physics** about **gluon interaction** that was previously thought impossible, released in [a preprint with researchers](https://openai.com/index/new-result-theoretical-physics/) from the IAS, VanderbiltU, Cambridge\_Uni, and Harvard.
    *   The finding _shows that a gluon interaction many physicists expected would not occur can arise under specific conditions_.
*   **Codex Spark** Supercharges Vercel Deployments**: A user reports that **Codex Spark** is _insane_, offering a _whole new level of speed_ when making changes to a repo and deploying on Vercel, including screenshots of commands `codex -m gpt-5.3-codex-spark --yolo -c model_reasoning_effort="xhigh"`.
    *   Users mentioned that **Codex 5.3 spark** is rolling out to **pro** plan users.
*   **GPT-4o's** Retirement Delayed Indefinitely**: OpenAI [updated their deprecation schedule](https://openai.com/index/retiring-gpt-4o-and-older-models/) to state that there are _"no changes to be made for them at this time"_, effectively delaying the retirement of **GPT-4o** and older models.
    *   Members speculate this is to avoid the legal liability of retiring a problematic model while still cashing in on pay-per-use API calls and hosted a funeral for **GPT-4o** on their digital space that showed a significant interest in retaining the model.
*   **Controlling LLM Hallucinations with **Fortress Framework**: A member introduced **Fortress Framework**, claiming it controls **Hallucination**, deconstructs systems, implements Dynamic user safety, and features summonable companions, and shared blueprints of **FORTRESS v10.x++** detailing its DOMAIN as an Adaptive Reasoning System.
    *   The core is described as _reasoning S constrained by invariants Ω_, designed for modular, hyper-adaptive reasoning, ensuring stability under extreme conditions.
*   **Doubts Surface Over **LLM Invariance**: A member voiced skepticism about invariance in LLMs due to their stochastic nature and requested evaluation metrics for **coherence**, which was defined as _the degree to which system components remain stable_.
    *   In response, the framework's creator shared **Ablation/Eval rubrics** focused on coherence, causality, grounding, recoverability, harm minimization, and observability.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Angine de Poitrine Viral Marketing or Genuine Interest?**: The two-piece band **Angine de Poitrine** is popping up all over social media, drawing comparisons to **The White Stripes** and **Primus** and [their X profile](https://x.com/the_freightrain/status/2020144286788997185).
    *   Some users cite their unique sound and aesthetics akin to **Glass Beams** ([YouTube video](https://m.youtube.com/watch?v=E4X56wIOZns)) as the reason for their visibility, while others suspect a marketing push, and [a mirror of the original tweet](https://xcancel.com/the_freightrain/status/2020144286788997185) was also shared.
*   **AI Productivity Debated as Boomers Retire**: Discussions arose around whether **AI productivity** can compensate for the retirement of **boomers**, with the economic implications of pension systems and workforce size being central points.
    *   The core issue lies in the unsustainability of pension systems when the working population isn't large enough to support the retired population, referencing France's raising of retirement ages as an example.
*   **Box-of-Rain unleashes ASCII Diagram Power**: A member shared **Box-of-Rain**, a diagram library using AI, that was [built in an hour](https://github.com/switz/box-of-rain?tab=readme-ov-file) to generate **ASCII diagrams**.
    *   The diagrams also sparked discussion around _neat?_ diagrams on [Twitter](https://vxtwitter.com/joshmanders/status/2022170444116414790?s=20) and reactions on **saeris.gg**.
*   **LLM Architect Hired to Design Governed Copilots**: A system architect is available for hire for designing governed **LLM systems** focused on reliability and safety via validation, isolation, audit trails, and supervisor layers.
    *   Their core features include RAG **system specs**, validation gates, uncertainty handling, memory/capability isolation, **execution receipts / audit trails**, and **supervisor layers** to review outputs.
*   **MiniMax's M2.5 Model achieves Top-Tier Benchmarks**: **MiniMax** launched **M2.5**, a high-performance open-source model optimized for coding, search, and agentic tasks, claiming to achieve top-tier benchmarks, scoring **80.2%** on SWE-Bench, showcased in [this tweet](https://xcancel.com/minimax_ai/status/2021980761210134808?s=46).
    *   The model is designed to advance capabilities in specific areas of AI application, setting a new benchmark for open-source contributions to AI technology, and [their X account](https://xcancel.com/minimax_ai/status/2021980761210134808?s=46) has further details.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Brave API rivalling GPT-4 with web search**: A member finds the [Brave API](https://brave.com/search/api/) provides answers of similar quality to **ChatGPT** with web search, but is not 100% perfect.
    *   They use **DuckDuckGo** for normal web searches but prefer the Brave API for deeper research.
*   **Knowledge Cutoff leads to Hallucinations**: One member reported that knowledge cutoff leads to hallucination with models not checking for recent changes.
    *   _If something was status quo until ~mid 2024, it won't think of checking if anything has changed since then (unless it's dealing with something with predictable periodicity)_.
*   **Qwen3 Next Coder excels in Technical Documentation**: One member recommends **qwen3 next coder** for weekend projects and figuring out POCs, especially for technical document writing.
    *   They claim it helped them figure out how to use _serf_ and _grpc_ at the same time for node connectivity in golang.
*   **Granite 5 Generates Excitement**: Members expressed high hopes for the upcoming **Granite 5** model after being impressed with **Granite 4**.
    *   One member joked that even with 3TB of VRAM, they would still be miserable but could run **Kimi**.
*   **B200 gobbles 30kW Power**: A member calculated that running **B200s** would require 30kW of power, based on the [datasheet](https://resources.nvidia.com/en-us-dgx-systems/dgx-b200-datasheet).
    *   Another joked about needing to consult **ChatGPT** on how to build a nuclear reactor to power the setup.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **vLLM's CPU Bottleneck Surfaces**: Profiling _vllm_ revealed a CPU bottleneck where [a few lines of pytorch invoking 4 kernels](https://github.com/vllm-project/vllm/blob/071d863e208b40fa1bb986ad230e322b2bbbbcf5/vllm/model_executor/layers/quantization/utils/fp8_utils.py#L114) take **300 us** on the CPU.
    *   Although `with_stack=True` might add overhead, but measuring with `time.perf_counter()` yielded only slight improvement down to **200us**.
*   **CUDA Graph Launch Investigated**: The discussion clarified that the **kernels** are not part of a single **CUDA graph launch**, sparking an investigation into the launch configuration.
    *   The community clarified that it's an attempt to understand the underlying reasons for the observed CPU bottleneck, not just efficient serving.
*   **MXFP8/NVFP4 GEMM Transfers Demystified**: For **MXFP8/NVFP4 GEMMs** with CUDA/PTX, the community clarified that `tcgen05.cp` to `tcgen05.mma` are guaranteed to execute in order, negating the need to wait for `tcgen05.cp` completion before issuing **MMA** instructions as shown in [attached image](https://cdn.discordapp.com/attachments/1471632025021583614/1471662135619752147/image.png?ex=6990686b&is=698f16eb&hm=f4ec6e7215ac12cb97e46c7f5cb4fa6026eee991147aca781bb8f1550ad071a5&).
    *   The limitation is that `tcgen05.cp` and **MMA** instructions must be issued from the same warp.
*   **OpenAI GPT-5 Fine-Tuned by Makora**: Makora collaborated with **OpenAI** to fine-tune **GPT-5** for GPU kernel generation, achieving a more than **2x performance improvement** over **PyTorch** according to their [technical report](https://www.arxiv.org/pdf/2602.11000).
    *   Their work covers dataset curation, RL evaluation environment, hack mitigation, tool-calling, and agent workflow integration, with plans to scale training and extend to multiple languages and hardware.
*   **Performance Trends Debut on Rankings Page!**: A user announced a _fun_ addition to the rankings page: **Performance Trends**, which allows users to _watch your submissions improve over time_ and _see how you stack up to your peers_.
    *   This includes screenshots from **nvfp4\_group\_gemm** displayed [here](https://cdn.discordapp.com/attachments/1434709259500650628/1472009123662004294/image.png?ex=699102d3&is=698fb153&hm=35972d1da33d0b5623ad49841625516a4a7ee77130ab26059356835c2c1a3964).

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Lex Fridman Hears Top Level Domains**: Members enjoyed the recent [Lex Fridman podcast](https://lexfridman.com/peter-steinberger/) with **OpenClaw's Peter Steinberger**, highlighting discussions on security, **Top Level Domains**, and his **refactor prompt-flow**.
    *   One member pointed out that _web search is worse than inherent knowledge_ in many cases for nuance, while still good for verifying facts.
*   **Kimi Masters Cover Letters**: A user leveraged **Kimi Code** to produce cover letters _nearly indistinguishable from human_, alongside a script automating job applications on LinkedIn.
    *   The script automates PDF generation, customizes resumes and cover letters, copies all job URLs, and selects jobs using an **LLM fallback**.
*   **Kimi Falls Short on Coding Tasks**: Users debated **Kimi's** coding prowess against **GLM**, noting that _kimi doesn't understand context and keep creating files at its convenience_ for complex code tasks.
    *   Specifically, it was reported that **GLM** and **GPT 5.2** handle large **Abundance, Golang, Typescript, and Python** codebases more effectively.
*   **Subscription Activation Suffers Silent Support**: A user reported being unable to use a paid **$39 subscription** due to chat restrictions despite the subscription showing as active.
    *   They experienced message limits when uploading two TXT files of 1.2MB, implying an activation glitch, and have reported the issue in the bug reports channel.
*   **Scammers Spoof Kimi Sites**: Users identified **scam sites** exploiting the Kimi name, with a possible fake site even built by Kimi itself, to steal user data.
    *   A moderator has acknowledged that _these are scam sites that are trying to take advantage of the recent activity_ and have since taken action to delete them.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Mac Minis Finetuning Falls Flat**: Members found **Mac Minis** impractical for **LoRA finetuning** on models smaller than **5B parameters**, advising that renting machines would be a better solution.
    *   One member claimed that a **$7000 Mac Studio** is half as good as a **5090** for training.
*   **Grok's Gas-Guzzling Performance Raises Eyebrows**: Speculation is circulating on how **Grok** achieves its surprising performance, with discussions about whether **XAI** is _driving it on double parameters_ compared to other models like **Opus**.
    *   A member raised concerns about **XAI's** alleged _illegal gas driven turbines to generate power_ and large-scale power consumption, implying potential unfair advantages.
*   **Dirt Cheap GPU Rentals Tempt Engineers**: Members discussed the surprisingly low cost of renting powerful GPU machines, with one claiming a **264000 EUR** machine is available for **20$/hour** on [vast.ai](https://vast.ai/).
    *   It's apparently cheaper to rent unless the workload maxes out the GPUs for extended periods, due to cluster leases having minimum timeframes and higher prices at lower timeframes.
*   **Anthropic Adds Trump Admin Alum to Board**: **Anthropic** appointed **Chris Liddell** to its Board of Directors, who previously served as **CFO** of **Microsoft** and **General Motors**, and as **Deputy Chief of Staff** during the Trump administration, according to [his LinkedIn post](https://www.linkedin.com/posts/anthropic_chris-liddell-has-been-appointed-to-anthropics-activity-7163978575452278784-ea9q?utm_source=share&utm_medium=member_desktop).
    *   The company believes this appointment will bring _over 30 years of leadership experience across technology, finance, and government_ to Anthropic.
*   **Links from X.com Shared, Details Scarce**: Members shared links from **X.com**: [Dominique Capaul's post](https://x.com/dominiquecapaul/status/2021638005019095442) and [Amanda Ilze's post](https://x.com/AmandaIlze/status/2022332462991561084).
    *   No additional context or discussion followed, so the significance is unknown.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **AI Hobbyist Explores vllm vs Ollama vs llama.cpp**: An AI hobbyist asked the community for guidance on the specific use cases for **vllm**, **Ollama**, and **llama.cpp**.
    *   The hobbyist's goal is to achieve blazing fast AI for simple purposes.
*   **HF Hub Paper Reading App Makes Debut**: A member released an app for reading AI research papers from the **Hugging Face Hub** on mobile, with the source code available on [GitHub](https://github.com/0x0is1/hf-papers-app).
    *   An Android build is available in the releases section of the GitHub repository.
*   **Safety-Lens Opens Model MRI**: A new AI safety tool named **Safety-Lens** was launched, aiming to democratize techniques for inspecting model internals like activation steering and mechanistic interpretability, available via `pip install safety-lens` and on [Github](https://github.com/anthony-maio/safety-lens).
    *   The tool seeks to bring MRI-style introspection to the **Hugging Face** ecosystem and includes a deep dive explanation on [Zenodo](https://zenodo.org/records/18612875).
*   **LavaSR Achieves 4000x Realtime Speech Enhancement**: A new high-speed speech enhancement model called **LavaSR** was released, claiming to achieve **4000x realtime speed** on a modern GPU.
    *   The model is available on the [Hugging Face Hub](https://huggingface.co/YatharthS/LavaSR) with code on [GitHub](https://github.com/ysharma3501/LavaSR).
*   **Samayuktam Cryptographically Verifies AI Training**: The launch of **Samayuktam** on HF Spaces introduces cryptographic verification for AI training runs, designed to solve non-deterministic GPU operation verification, validated with **100% bit-perfect reconstruction** across **4000 adversarial test cases**, with a demo available on [HF Spaces](https://huggingface.co/spaces/Swapnopam/Samayuktam).
    *   It provides a cryptographic _receipt_ for each model training run, proving exactly what was computed to ensure reproducibility, audit trails, and model provenance; [tech specs here](https://drive.google.com/file/d/19PA_rNW5mKZiLh6PAttpHcH9TAF-tWVa/view).

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Job Postings Now Banned on Discord**: Due to recent spam, job postings are now banned in the Discord server, directing members to the [Modular's career page](https://www.modular.com/company/careers#open-roles).
    *   The announcement was made in the **#general** channel, and it is advised to check Modular's official career page for open positions.
*   **Modular Acquires BentoML AMA Goes Text-Only**: The Modular team announced that the [Modular has acquired BentoML AMA](https://forum.modular.com/t/modular-has-acquired-bentoml-ask-us-anything/2706) will be in written form on the forum rather than a video.
    *   A member expressed disappointment since they are _very impressed with Modular's strategy and development_, but are unable to view live AMAs.
*   **Member Ponders RNG Contribution to Mojo**: A member considered contributing **random number generator (RNG) code** to Mojo, inquiring about the best location (core, numojo, or standalone package) for features such as number stream independence, **Ziggurat normal sampling**, and sampling from various distributions, [forum.modular.com](https://forum.modular.com/t/mojor-a-numba-for-r/2718).
    *   The discussion centered on where the code would best fit within the Mojo ecosystem.
*   **Mojo LSP struggles to Hover**: A user reported that the **Mojo LSP** in VS Code fails to display function parameters or docstrings upon hovering, providing [screenshots](https://cdn.discordapp.com/attachments/1151418092052815884/1471824503700062371/image.png?ex=6990ffa2&is=698fae22&hm=fc376d026d220c3c28e5567a43bc551c494ad6e3edb5dfac992ec4d2ff87950a&) as evidence.
    *   This issue impacts the ability to quickly inspect function definitions and usage within the editor.
*   **Mojo Module Export Boilerplate Irks Users**: A member suggested simplifying Python Mojo module exports by reducing the required boilerplate, proposing a `@pyexport` decorator combined with a docstring to enable direct function definitions.
    *   Another member noted that this feature is anticipated to be on the development roadmap.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **CommonLID launches for Web Language ID**: A collaboration between **Common Crawl**, **EleutherAI**, **MLCommons**, and **JHU** announced the release of [CommonLID](https://www.arxiv.org/abs/2601.18026), a language identification benchmark for the web, covering **109 languages**.
    *   The team used an annotation platform built with **Factored AI** and hosted hackathons with **Masakhane** and **SEACrowd** to gather language labels for **Common Crawl's** web data, later evaluating existing language identification models.
*   **AI Safety News Bot Scrapped**: A member requested a **Discord bot** for automated curation of **AI safety news** and papers.
    *   Another member noted that scraping is against **Discord's T&Cs**, and cited [news.smol.ai](https://news.smol.ai/) as an alternative.
*   **MoE Research Seeks Examples**: A member is looking for **MoE** examples, already having a setup for dense models.
    *   No other information was mentioned, but it seems like an engineer is looking for a starting point.
*   **Steering Vectors Used for Data Augmentation**: A member shared their [Zenodo files](https://zenodo.org/records/8243818) related to replicating **steering vectors**, noting that over 300 people have seemingly tried to replicate their work.
    *   They proposed training a model based on how well the downstream features respected the steering vector, possibly judging by intensity or linear combinations and experimenting with using steering vectors for **data augmentation**.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **ML Engineer Joins Tinygrad**: An experienced AI/ML Engineer introduced themself to the Tinygrad channel, specializing in building and deploying ML pipelines, deep learning models, and NLP systems.
    *   Their expertise includes designing **prediction engines, recommendation systems, and generative AI workflows**, with a focus on **reliability, performance, and production-ready ML architectures**.
*   **Hotz Hails Discord ID Verification**: George Hotz voiced enthusiasm for Discord's new ID verification feature, anticipating its effectiveness in preventing LLMs from joining the platform.
    *   Hotz's comment signals a proactive approach to maintaining the integrity of online communities amidst the rise of AI participation, simply stating: _"yes and? i'm psyched for the id verification on discord so LLMs can't join"_.
*   **GLM Flash Achieves 30 tok/s**: A user inquired about getting **GLM flash** working and offered a bounty for upstreaming it, at any speed.
    *   Another user claimed to have achieved **30 tok/s with pure tinygrad (custom\_kernel)**, and **35 with MSL**, later submitting a [GLM flash PR](https://github.com/tinygrad/tinygrad/pull/14738).

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **Traces Emerges for Coding Agent Sharing**: A member introduced **Traces**, a platform for sharing and discovering coding agent sessions from **Claude Code**, **Codex**, **OpenCode**, **Gemini**, and **Cursor**, at [traces.com](https://www.traces.com).
    *   The goal is to facilitate learning from shared agent experiences, with the creator seeking community feedback and suggesting it could become an _enciclopedia of DYI guides for the LLM_.
*   **LLMs Benchmarking Reports**: A member sought advice on benchmarking a set of 50 reports at [example.com](https://example.com) (mainly docx files) to identify _what a good report is_ using **DSPy** with a large context window.
    *   Another member suggested using **llamaparser** for parsing the data and **markdown** to ease integration with **DSPy**.
*   **DSPy Community Holds Office Hours**: The DSPy community will host [Office Hours via Zoom on Thursday, Feb 19](https://x.com/isaacbmiller1/status/2022082357520740691) to address questions on **DSPy** and **dspy.RLM**.
    *   The team is polling the community for the best time: **11:30 am ET**, **1:00 pm ET**, and **3:00 pm ET**.
*   **Discord Event Added for DSPy Office Hours**: A member suggested creating a [Discord event](https://support.discord.com/hc/en-us/articles/4409494125719-Scheduled-Events#docs-internal-guid-c8c44ce9-7fff-f27a-bacf-6c776975e0f7) for the **DSPy** Office Hours.
    *   This event will allow users to view the time in their local time zone and indicate their interest and it will be recorded for those unable to attend.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **GPT-5 still king for scientific code**: A member indicated preferring **GPT-5** for scientific coding, finding it superior to **GPT-5.2**, **Opus**, and **Gemini**.
    *   This suggests **aider** could be a valuable tool for scientific coding, capitalizing on the strengths of different models.
*   **Aider experiments with debug suggestions**: A member is testing **Aider conventions** to proactively suggest debugging commands, such as _grepping file parts_, _probing help output_, and _testing commands_.
    *   The user's goal is to replicate the `Let me see the output of...` run/debug loops from **Crush** in a controlled way inside of **Aider**.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Manus User Asks About Agent Details**: A Manus user inquired about when details and best practices on the new agent functionality would be available, wondering whether it is basically a safe openclaw.
    *   No response was given.
*   **Manus User Reports Issues, Seeks Support**: A user reported experiencing two issues with Manus and inquired about who to contact for support.
    *   No ...

[Read original post](https://news.smol.ai/issues/2026-02-13-minimax25/)

---
title: "OpenAI Codex App: death of the VSCode fork, multitasking worktrees, Skills Automations"
date: "2026-02-02T05:44:39.000Z"
description: "**OpenAI** launched the **Codex app** on macOS as a dedicated agent-native command center for coding, featuring **multiple agents in parallel**, **built-in work..."
original_link: "https://news.smol.ai/issues/26-02-02-openai-codex-app/"
---

**a quiet day**

> AI News for 1/30/2026-2/2/2026. We checked 12 subreddits, [**544** Twitters](https://twitter.com/i/lists/1585430245762441216) and **24** Discords (**254** channels, and **14979** messages) for you. Estimated reading time saved (at 200wpm): **1408 minutes**. **Our new website** is now up with full metadata search and beautiful vibe coded presentation of all past issues. See https://news.smol.ai/ for the full news breakdowns and give us feedback on [@smol\_ai](https://x.com/Smol_AI)!

We almost did -NOT- give OpenAI the title story today  — [Xai technically got acquired by SpaceX for ~$177B](https://x.com/tanayj/status/2018460616747540834?s=46), and after all, it’s “just” a desktop app UI for the already existing CLI and Cloud app and VS Code extension… and it’s “just” OpenAI’s version of [Conductor](http://conductor.build/) and [Codex Monitor](https://github.com/Dimillian/CodexMonitor) and [Antigravity’s Inbox (which literally launched with the exact same “AI Agent Command Center” tagline](https://www.youtube.com/shorts/yC-Cv37E-dM)):

which of the 1 possible multiagent app designs are you working on, anon?

![](https://substackcdn.com/image/fetch/$s_!PHl8!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb25b7bb9-a5f6-4ad4-ad5e-d40583f867f5_2088x1850.png)

[Everything is crab](https://en.wikipedia.org/wiki/Carcinisation), but perhaps the crab is the perfect form factor.

And yet.

In December Steve Yegge and Gene Kim [predicted](https://www.youtube.com/watch?v=7Dtu2bilcFs&pp=2AbMBw%3D%3D) that the IDE would die:

https://www.youtube.com/watch?v=7Dtu2bilcFs&pp=2AbMBw%3D%3D

and here we are in 2026, and OpenAI, which once [offered $3B for Windsurf](https://news.smol.ai/issues/25-07-24-cogsurf-cursor), is out here shipping a coding agent UX that is NOT a VS Code fork, and by the way Anthropic has also done the same with their Claude Code and Claude Cowork app. Bears some thought on truly how far coding models have come that serious coding apps are shipping without an IDE (yes, Codex still lets you link out to an IDE when needed, but evidently that is an exception rather than the norm).

There was a time when “app that lets you write English and build without looking at code” was equivalent to “vibe coding” or “app builder”, but these nontechnical audiences are NOT the ICP for Codex - this is very seriously marketed at developers, who historically love code and identify strongly with hand-writing every line of code.

Now OpenAI is saying: looking at code is kinda optional.

The other observation is the reliance on **multitasking and worktrees**: in hindsight this is the perfect natural UI response to the increase in agent autonomy:

![](https://substackcdn.com/image/fetch/$s_!F2Xo!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F035d9d50-cef4-4478-8ccb-6e57869839af_3186x1856.png)

and the final, actually novel thing that Codex ship that is the most overlooked is Automations, which are basically “skills on a cronjob” - somehow OpenAI is the first major player to launch this very simple feature in GA:

![](https://substackcdn.com/image/fetch/$s_!VIJp!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa0039199-7085-4262-86a7-fd0979e8a14d_2144x1376.png)

* * *

AI Twitter Recap
================

**OpenAI’s Codex app: an agent-native “command center” for coding**

*   **Codex app ships on macOS (Windows “soon”)**: OpenAI launched a dedicated Codex desktop app positioned as a focused UI for running **multiple agents in parallel**, keeping changes isolated via **built-in worktrees**, and extending behavior with **skills** and **scheduled automations** ([OpenAI announcement](https://twitter.com/OpenAI/status/2018385565289267236), [rate-limit + availability details](https://twitter.com/OpenAI/status/2018385568992752059), [OpenAIDevs feature rundown](https://twitter.com/OpenAIDevs/status/2018385865207419124)). A recurring theme: _the interface_ (not just the model) is becoming the product.
*   **Developer workflow details that matter**: The app emphasizes (a) _worktree per task/PR_ as the primitive for parallelism and conflict isolation; (b) _Plan mode_ (`/plan`) to force upfront decomposition and questions; (c) skills as reusable bundles that can connect to external services (Figma/Linear/Vercel, etc.); and (d) automations for recurring background jobs ([@reach\_vb](https://twitter.com/reach_vb/status/2018385536616956209), [Plan mode](https://twitter.com/reach_vb/status/2018456051792982339), [skills landing page](https://twitter.com/reach_vb/status/2018390580330389728)).
*   **Usage signals / adoption narrative**: Multiple insiders (and power users) claim the app is a step-change over CLI/IDE extensions for large repos and long-running tasks—particularly for managing parallel threads and reviewable diffs. Notable testimonials include [@gdb](https://twitter.com/gdb/status/2018387844222578818) (agent-native interface; “going back to terminal feels like going back in time), [@sama](https://twitter.com/sama/status/2018414858015039504) (surprised how much he loves it), and [@skirano](https://twitter.com/skirano/status/2018398337938960715) (replacing Cursor + Claude Code in their workflow).
*   **Ecosystem pressure / standardization**: There’s already a push to standardize “skills” folders: proposal to have Codex read from `.agents/skills` and deprecate `.codex/skills` ([@embirico](https://twitter.com/embirico/status/2018415923930206718)). This is early evidence that agent tooling is starting to form conventions similar to `.github/`, `pyproject.toml`, etc.
*   **Meta-point: “self-improving” via product loop**: Several posts highlight Codex being used to build itself—presented as the most compelling “recursive improvement” story that’s actually shipping as a product feedback loop (humans + agents) rather than autonomous AGI ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2018385663457116379), [@ajambrosino](https://twitter.com/ajambrosino/status/2018385459936923656), [@thsottiaux](https://twitter.com/thsottiaux/status/2018258151603388639)).

**Coding agents in practice: reliability, tests, parallelism, and the “army of agents” meme becoming real**

*   **A concrete best practice for CLAUDE.md/AGENTS.md**: Add a “test-first” instruction: _when a bug is reported, write a reproducing test first; then fix; then prove via passing test_—framed as the single biggest improvement to agent performance and sanity ([@nbaschez](https://twitter.com/nbaschez/status/2018027072720130090)). This aligns with the broader theme that coding is a high-leverage domain because it’s partially verifiable.
*   **The “conductor” model of engineering**: Claims that one developer can run **5–10 agents in parallel**, shipping code they don’t fully read, shifting from author to supervisor/conductor ([@Yuchenj\_UW](https://twitter.com/Yuchenj_UW/status/2018029206542946582)). A related counterpoint warns about human context-switch limits and quality degradation if you try to run “a gazillion things in parallel” ([@badlogicgames](https://twitter.com/badlogicgames/status/2018117758991384754)).
*   **Neurosymbolic framing for why coding agents work**: A crisp argument that coding agents succeed because software is a **verifiable domain** and because execution/tooling (tests, compilers, shells) forms a symbolic scaffold that LLMs can leverage; replicating this outside coding requires building comparable “symbolic toolboxes” + verifiability ([@random\_walker](https://twitter.com/random_walker/status/2018342421696766147)).
*   **Benchmark skepticism**: Pushback on lightweight “LLM productivity” studies where participants use weak workflows (e.g., chat sidebar usage) rather than agentic setups; criticism that results understate productivity gains when tools evolve rapidly ([@papayathreesome](https://twitter.com/papayathreesome/status/2018169992752083034), [@scaling01](https://twitter.com/scaling01/status/2018339728697831494)).
*   **Open-source agent stacks and safety/ops concerns**: The OpenClaw/Moltbook ecosystem generates both excitement and operational/safety critique—e.g., discussion of gateways in front of agents for session management/policy enforcement ([@salman\_paracha](https://twitter.com/salman_paracha/status/2018091883164217582)), and warnings that “AI-only social media” gets instantly botted/spammed ([@jxmnop](https://twitter.com/jxmnop/status/2018134884645306818)). The subtext: agent products need the same abuse-resistance/observability maturity as consumer platforms—immediately.

**Open models for agentic coding: StepFun Step-3.5-Flash and Kimi K2.5 as the week’s focal points**

*   **StepFun Step-3.5-Flash open release (big efficiency claims)**: StepFun’s Step-3.5-Flash is repeatedly cited as a **sparse MoE** model with **196B total parameters / ~11B active**, tuned for **speed + long-context agent workflows** (notably **256K context** with **3:1 sliding-window attention + full attention**, plus **MTP-3 multi-token prediction**) ([official release thread](https://twitter.com/StepFun_ai/status/2018370831538180167), [launch/links](https://twitter.com/CyouSakura/status/2018146246020772062)). StepFun reports **74.4% SWE-bench Verified** and **51.0% Terminal-Bench 2.0** ([StepFun](https://twitter.com/StepFun_ai/status/2018370831538180167)).
*   **Immediate infra support**: vLLM shipped **day-0 support** and a deployment recipe, signaling StepFun’s seriousness about adoption in real serving stacks ([vLLM](https://twitter.com/vllm_project/status/2018374448357998874)).
*   **Community evaluation posture**: Multiple posts stress “needs testing ASAP” and note benchmark cherry-picking concerns; people want standardized baselines (MMLU/HLE/ARC-AGI) and third-party verification, especially as HF leaderboards change ([@teortaxesTex](https://twitter.com/teortaxesTex/status/2018152874249716137), [@QuixiAI](https://twitter.com/QuixiAI/status/2018251816647938051)).
*   **Kimi K2.5’s agentic coding strength**: Arena reports Kimi K2.5 as **#1 open model in Code Arena** and **#5 overall**, “on par” with some top proprietary offerings, and also strong across Text/Vision/Code Arena ([Arena announcement](https://twitter.com/arena/status/2018355347485069800)). Separate anecdotal notes mention tool-following weaknesses (system prompt adherence) in some workflows ([@QuixiAI](https://twitter.com/QuixiAI/status/2018213058284229083)).
*   **Provider reliability issues**: Tool-calling/parsing failures can make models look worse than they are; Teknium calls out FireworksAI’s Kimi endpoint for broken tool parsing, forcing workflow bans—an ops reminder that “model quality” in production often collapses to _integration correctness_ ([@Teknium](https://twitter.com/Teknium/status/2018155345030627600), [earlier warning](https://twitter.com/Teknium/status/2018092504613285900)).

**Synthetic data, evaluation, and “don’t trust perplexity”**

*   **Synthetic pretraining deep dive**: Dori Alexander published a long blogpost on **synthetic pretraining**, implying renewed focus on synthetic data pipelines and their failure modes (e.g., collapse, distribution drift) ([tweet](https://twitter.com/Dorialexander/status/2018018715162288611)). This pairs with broader chatter that “synthetic data mode collapse” fears were once dominant—now increasingly treated as an engineering/recipe issue ([@HaoliYin](https://twitter.com/HaoliYin/status/2018123588784799822)).
*   **Perplexity as a model selection trap**: Several tweets point to emerging evidence that **perplexity should not be blindly trusted** as a selection objective ([@DamienTeney](https://twitter.com/DamienTeney/status/2018413621361967216), [@giffmana](https://twitter.com/giffmana/status/2018393065803620662)). The practical takeaway: if you optimize only for next-token prediction metrics, you can miss downstream task behaviors, tool-use stability, and instruction-following consistency.
*   **Unlimited RLVR tasks from the internet (“Golden Goose”)**: A method to synthesize essentially unlimited RLVR-style tasks from unverifiable web text by masking reasoning steps and generating distractors; claims include reviving models “saturated” on existing RLVR data and strong results in cybersecurity tasks ([@iScienceLuvr](https://twitter.com/iScienceLuvr/status/2018233829488484674), [paper ref](https://twitter.com/iScienceLuvr/status/2018233832437158354)).
*   **Compression + long-context infra ideas**: Discussion of document/context compression approaches (e.g., “Cartridges,” gist tokens, KV cache compression variants) to reduce memory footprint and speed generation—relevant as agent contexts balloon into hundreds of thousands or millions of tokens ([@gabriberton](https://twitter.com/gabriberton/status/2018097161343553770), [refs](https://twitter.com/gabriberton/status/2018097171313361138)).

**Agent systems & infra: memory walls, observability, and RAG chunking becoming query-dependent**

*   **Inference bottleneck shifts from FLOPs to memory capacity**: A long thread summarizes Imperial College + Microsoft Research arguing that for agentic workloads (coding/computer-use), the binding constraint is **memory capacity / KV cache footprint**, not just compute. Example: batch size 1 with **1M context** can require **~900GB memory** for a single DeepSeek-R1 request; suggests **disaggregated serving** and heterogeneous accelerators for prefill vs decode ([@dair\_ai](https://twitter.com/dair_ai/status/2018337881715245507)).
*   **Observability becomes “the stack trace” for agents**: LangChain emphasizes that agents fail without crashing; traces are the primary debugging artifact, motivating webinars and tooling around agent observability + evaluation ([LangChain](https://twitter.com/LangChain/status/2018432807324839966), [@hwchase17](https://twitter.com/hwchase17/status/2018433676485574742)).
*   **RAG chunking: oracle experiments show 20–40% recall gains**: AI21 reports experiments where an oracle picks chunk size per query; this beats any fixed chunk size by **20–40% recall**, but requires storing multiple index granularities (storage vs quality tradeoff) ([@YuvalinTheDeep](https://twitter.com/YuvalinTheDeep/status/2018297202066481445), [thread context](https://twitter.com/YuvalinTheDeep/status/2018297199025705269)).
*   **Packaging “deep agent” architecture patterns**: LangChain JS introduces `deepagents`, claiming four recurring architectural patterns explain why systems like Claude Code/Manus feel robust while naive tool-calling agents fail ([LangChain\_JS](https://twitter.com/LangChain_JS/status/2018346035240923577)).

**Top tweets (by engagement)**

*   **Karpathy on returning to RSS to escape incentive-driven slop**: High-engagement meta commentary relevant to “signal quality” for engineers ([tweet](https://twitter.com/karpathy/status/2018043254986703167)).
*   **OpenAI Codex app launch**: The biggest AI-engineering release by engagement in this set ([OpenAI](https://twitter.com/OpenAI/status/2018385565289267236), [OpenAIDevs](https://twitter.com/OpenAIDevs/status/2018385663457116379), [@sama](https://twitter.com/sama/status/2018414858015039504)).

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Step-3.5-Flash Model Performance

*   **[128GB devices have a new local LLM king: Step-3.5-Flash-int4](https://www.reddit.com/r/LocalLLaMA/comments/1qtvo4r/128gb_devices_have_a_new_local_llm_king/)** (Activity: 385): **The `Step-3.5-Flash-int4` model, available on [Hugging Face](http://huggingface.co/stepfun-ai/Step-3.5-Flash-Int4), is a new local LLM optimized for devices with `128GB` RAM, such as the M1 Ultra Mac Studio. It supports a full context length of `256k` and demonstrates high efficiency in RAM usage. Benchmarks using `llama-bench` show impressive performance with up to `100k` prefill, achieving `281.09 ± 1.57 t/s` for `pp512` tests and `34.70 ± 0.01 t/s` for `tg128` tests. The model requires a custom `llama.cpp` fork for execution, with potential for upstream support due to its performance.** Commenters are curious about the model's performance on different hardware, such as Strix Halo, and express interest in a potential NVFP4 version. There is also a humorous comment reflecting surprise at the model's capabilities.
    
    *   The Step-3.5-Flash-int4 model is noted for its ability to run a full 256k context on a 128GB device, which is impressive given that many models are memory-intensive and cannot handle such large contexts. This makes it a strong competitor against models like GLM 4.7, which are known for high RAM usage.
    *   A user compared Step-3.5-Flash-int4 to Minimax M2.1, suggesting that it might perform slightly better. This comparison is significant as Minimax M2.1 is a well-regarded model, and any improvement in performance or efficiency could be a major advantage for users looking for high-quality outputs without excessive resource consumption.
    *   There is interest in the response speed of Step-3.5-Flash-int4 compared to Minimax, which is favored for quick iterations. If Step-3.5-Flash-int4 offers both improved efficiency and quality, it could potentially replace Minimax as the preferred model for tasks requiring rapid processing and high-quality results.
*   **[Step-3.5-Flash (196b/A11b) outperforms GLM-4.7 and DeepSeek v3.2](https://www.reddit.com/r/LocalLLaMA/comments/1qtjhc8/step35flash_196ba11b_outperforms_glm47_and/)** (Activity: 640): **The newly released **Step-3.5-Flash** model by Stepfun demonstrates superior performance on various coding and agentic benchmarks compared to **DeepSeek v3.2**, despite having significantly fewer parameters. Specifically, Step-3.5-Flash utilizes `196B` total parameters with `11B` active, whereas DeepSeek v3.2 uses `671B` total with `37B` active parameters. This model is available on [Hugging Face](https://huggingface.co/stepfun-ai/Step-3.5-Flash).** Commenters noted the model's unexpected performance given its size, comparing it favorably to other models like Kimi K2.5 and Deepseek 3.2 Speciale. There is also an open pull request for integrating this model with llama.cpp, indicating active community interest and development.
    
    *   The Step-3.5-Flash model, despite its small size and speed, is reported to outperform larger models like GLM-4.7 and DeepSeek v3.2. A user noted that it performs comparably to Kimi K2.5 and even matches the capabilities of Deepseek 3.2 Speciale or Gemini 3.0 Flash, indicating its high efficiency and capability despite being 'benchmaxxed'.
    *   A pull request has been opened for integrating Step-3.5-Flash into `llama.cpp`, which is a significant step for its adoption and use in various applications. This model is smaller than others like MiniMax and Qwen3-235B, making it a valuable addition to the range of compact models available for developers. The link to the pull request is [here](https://github.com/ggml-org/llama.cpp/pull/19271).

### 2\. GLM-5 and Upcoming AI Releases

*   **[GLM-5 Coming in February! It's confirmed.](https://www.reddit.com/r/LocalLLaMA/comments/1qtvp74/glm5_coming_in_february_its_confirmed/)** (Activity: 757): **The image is a social media post highlighting anticipated AI technology releases in February 2026, including **DeepSeek V4**, **Alibaba Qwen 3.5**, and **GPT-5.3**. A user named jietang adds "glm-5" to the list, suggesting its release is also expected. This indicates a significant period for AI advancements, with multiple major updates from leading AI developers. The post has garnered attention, reflecting community interest in these developments.** One comment humorously notes the rapid obsolescence of AI models, while another speculates on the potential features of GLM-5, indicating anticipation and curiosity about its capabilities.
    
    *   bootlickaaa expresses a desire for GLM-5 to outperform Kimi K2.5, indicating a potential shift in user preference based on performance metrics. This suggests that users are closely monitoring the capabilities of different models and are willing to switch services if a new model offers superior performance. The mention of an annual [Z.ai](http://Z.ai) Pro plan implies a commitment to a service that could be disrupted by a more advanced model.
    *   International-Try467 raises a concern about the reliability of information regarding GLM-5, questioning the credibility of sources not affiliated with the GLM staff. This highlights the importance of official communication channels and verified information in the tech community, especially when it comes to announcements about new model releases.
    *   Septerium humorously notes the rapid obsolescence of their gguf files, which underscores the fast-paced nature of AI model development and the frequent updates required to keep up with the latest advancements. This reflects a broader challenge in the field where users must continually update their resources to leverage new capabilities.
*   **[Mistral Vibe 2.0](https://www.reddit.com/r/LocalLLaMA/comments/1qt76qs/mistral_vibe_20/)** (Activity: 387): ****Mistral AI** has released **Mistral Vibe 2.0**, an enhanced version of its terminal-native coding agent, leveraging the **Devstral 2** model family. This update introduces features like custom subagents for task specialization, multi-choice clarifications to minimize ambiguity, and slash-command skills for streamlined workflows. It also supports unified agent modes for seamless context switching. The service is integrated into **Le Chat Pro** and **Team plans**, transitioning to a paid API model for Devstral 2, with enterprise options for advanced functionalities like fine-tuning and code modernization. More details can be found [here](https://mistral.ai/news/mistral-vibe-2-0).** Commenters note the European origin of Mistral Vibe 2.0, highlighting its French development. There is a comparison with OpenCode, suggesting both tools mimic ClaudeCode, and a user mentions improved tool performance by configuring the tool list in the `~/.vibe/promps/cli.md` file.
    
    *   A user highlights the compactness of Mistral Vibe 2.0's codebase, noting it has only `19472` lines of code compared to alternatives like Codex or OpenCode, which often exceed `100k` lines. This suggests a focus on code quality and efficiency, potentially making it easier to maintain and understand.
    *   Another user mentions a configuration tip for Mistral Vibe 2.0, suggesting that tool calls work better when the list of tools is explicitly added to the `~/.vibe/promps/cli.md` file. This implies that proper configuration can enhance the tool's functionality and user experience.
    *   A comment raises the question of whether Mistral Vibe 2.0 can be run locally and offline, which is a common consideration for users concerned with privacy, performance, or internet dependency.

### 3\. Falcon-H1-Tiny and Specialized Micro-Models

*   **[Falcon-H1-Tiny (90M) is out - specialized micro-models that actually work](https://www.reddit.com/r/LocalLLaMA/comments/1qsx51z/falconh1tiny_90m_is_out_specialized_micromodels/)** (Activity: 357): ****Falcon-H1-Tiny** is a new series of sub-100M parameter models by **TII** that challenge the traditional scaling paradigm by demonstrating effective performance in specialized tasks. These models utilize an **anti-curriculum training** approach, injecting target-domain data from the start, which prevents overfitting even after extensive training. They incorporate **Hybrid Mamba+Attention blocks** and the **Muon optimizer**, achieving up to `20%` performance gains over AdamW. Notably, a 90M tool-caller model achieves `94.44%` relevance detection, and a 600M reasoning model solves `75%` of AIME24 problems, rivaling much larger models. These models are optimized for local deployment, running efficiently on devices like phones and Raspberry Pi.** Commenters noted the use of the **Muon optimizer**, also known as the Kimi optimizer, and expressed interest in the potential for these models to focus on pulling and utilizing knowledge effectively. There is curiosity about the availability of code and dataset previews for training similar models for custom tasks.
    
    *   Firepal64 mentions the use of the Kimi optimizer, known as Muon, in the Falcon-H1-Tiny model. This optimizer is not widely adopted, which raises curiosity about its unique benefits or performance characteristics that might make it suitable for specialized micro-models like Falcon-H1-Tiny.
    *   kulchacop and Available-Craft-5795 inquire about the availability of code, dataset previews, and the training pipeline for Falcon-H1-Tiny. They are interested in understanding the training process and data collection methods, possibly to adapt the model for their own tasks or to replicate the results.
    *   mr\_Owner notes that the Falcon-H1-Tiny model performs slower than expected when using `llama.cpp`, suggesting potential inefficiencies or compatibility issues with this specific implementation. This could be an area for further optimization or investigation.
*   **[Can 4chan data REALLY improve a model? TURNS OUT IT CAN!](https://www.reddit.com/r/LocalLLaMA/comments/1qsrscu/can_4chan_data_really_improve_a_model_turns_out/)** (Activity: 606): **The release of [Assistant\_Pepe\_8B](https://huggingface.co/SicariusSicariiStuff/Assistant_Pepe_8B), trained on an extended **4chan dataset**, surprisingly outperformed its base model, **nvidia's nemotron**. This model, despite being trained on what was expected to be a noisy dataset, showed higher scores than both the base and the abliterated base, challenging the typical expectation that fine-tuning sacrifices some intelligence for specificity. The model's performance echoes the earlier success of **gpt4chan** by Yannic Kilcher, which also scored high in truthfulness. The results suggest that the so-called "alignment tax" might have a non-trivial impact, as evidenced by the low KL divergence (`<0.01`) in the **Impish\_LLAMA\_4B** model, which also showed a shift in political alignment.**
    
    *   The use of 4chan data in language models is highlighted for its unique impact on linguistic statistics and semantics, particularly in enhancing the model's ability to generate correct English language constructs. Unlike other data sources like Reddit or Wikipedia, 4chan data significantly increases the model's use of 'I' statements, suggesting a more self-involved or egocentric output, which may not be desirable for assistant-style chatbots. This contrasts with Twitter data, which is noted to degrade model performance rapidly.
    *   A technical discussion on the impact of using different chat templates and data sources reveals that the combination of ChatML and abliteration can significantly alter a model's behavior and political alignment. Despite expectations that chat templates would have minimal impact, the observed changes were substantial, with KL divergence indicating a shift from Classical Liberalism to Centrism, suggesting a profound alteration in the model's world view.
    *   The comment on alignment tax suggests that smaller models may face greater challenges in maintaining alignment when incorporating diverse data sources. This implies that the complexity and size of a model could influence how it integrates and balances various data inputs, potentially affecting its performance and bias.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Claude Sonnet 5 Release and Features

*   **[Sonnet 5 next week?](https://www.reddit.com/r/singularity/comments/1qtc4jg/sonnet_5_next_week/)** (Activity: 695): **The image depicts an HTTP 404 error message indicating that the 'Publisher Model' for 'claude-sonnet-5' was not found, suggesting either a non-existent model or lack of access permissions. This aligns with the post's discussion about the anticipated release of **Sonnet 5**, which is expected to offer `1 million context`, be priced at `1/2 the price of Opus 4.5`, and be trained on TPUs, promising significant improvements in agentic coding. The error message may imply that the model is not yet publicly available or accessible, hinting at its imminent release.** Commenters express excitement about Sonnet 5's potential, noting that it could surpass existing models like Opus 4.5. There is also speculation about upcoming releases of other models like GPT 5.3 and Gemini 3, indicating a competitive landscape.
    
    *   The discussion highlights the potential of Sonnet 5 as a 'competition killer,' suggesting it could significantly outperform existing models like Opus 4.5. This indicates a high level of anticipation and expectation for Sonnet 5's capabilities in the AI community.
    *   There is speculation about the training infrastructure for upcoming models, with a focus on Google's TPUs. The mention of Gemini 3 being trained entirely without Nvidia hardware suggests a strategic shift towards TPUs, which could have implications for performance and cost efficiency in AI model training.
    *   The comment about the 'clean' and 'polished' nature of Anthropic products suggests a focus on user experience and product refinement, which could be a competitive advantage in the AI market. This highlights the importance of not just performance, but also the usability and integration of AI products.
*   **[Sonnet 5 release on Feb 3](https://www.reddit.com/r/ClaudeAI/comments/1qtm9ix/sonnet_5_release_on_feb_3/)** (Activity: 1979): ****Claude Sonnet 5**, codenamed "Fennec," is reportedly set for release on February 3, 2026, as indicated by a Vertex AI error log. It is rumored to be 50% cheaper than its predecessor, Claude Opus 4.5, while maintaining a `1M token` context window and offering faster performance. The model is allegedly optimized on Google TPUs, enhancing throughput and reducing latency. It introduces a "Dev Team" mode, allowing autonomous sub-agents to build features collaboratively. Insider leaks suggest it scores `80.9%` on SWE-Bench, surpassing current coding models. However, some skepticism exists regarding the release date and the validity of the error log as proof of the model's existence.** Commenters express skepticism about the release date, noting that Anthropic's model IDs typically reflect the creation date rather than the release date. Concerns are also raised about the accuracy degradation in large context windows, which was an issue in previous models.
    
    *   andrew\_kirfman discusses skepticism about the timing of the Sonnet 5 release, referencing a 404 error from a Vertex API endpoint that doesn't confirm the model's existence. They highlight that Anthropic's model IDs often reflect the creation date of the model checkpoint, not the release date, citing Opus 4.5's ID as an example. They express doubt about future-dating release tags, which is uncommon in software releases.
    *   andrew\_kirfman also mentions the potential for a 1 million token context in Sonnet 5, noting that previous models like Sonnet 4 and 4.5 already offered this through the API. However, they point out that accuracy degradation was an issue with these models, suggesting that improvements in this area would be necessary for trust in the new model.
    *   LuckyPrior4374 expresses skepticism about claims that Sonnet 5 outperforms previous models, specifically mentioning Opus 4.5. This comment implies a distrust in marketing claims that suggest significant improvements without substantial evidence, hinting at past experiences where expectations were not met.
*   **[Sonnet 5 being release on Wednesday where is Gemini 3.5 ?](https://www.reddit.com/r/Bard/comments/1qtmi53/sonnet_5_being_release_on_wednesday_where_is/)** (Activity: 165): ****Claude Sonnet 5**, codenamed "Fennec," is rumored to be a significant advancement over existing models, including the unreleased Gemini 3.5. It is expected to be `50% cheaper` than Claude Opus 4.5, while maintaining a `1M token context window` and offering faster performance. The model is reportedly optimized on **Google TPUs**, which enhances throughput and reduces latency. It features a "Dev Team" mode, allowing autonomous sub-agents to execute tasks in parallel, and has achieved an `80.9%` score on SWE-Bench, surpassing current coding models. A Vertex AI error log suggests a release window of February 3, 2026, indicating its presence in Google's infrastructure.** Commenters express skepticism about the release of Gemini 3.5, noting that Gemini 3 is still in preview and facing issues. There is doubt about the existence of Gemini 3.5, with some considering it a "pipe dream."
    
    *   alexander\_chapel points out that Gemini 3 is still in preview, questioning the expectation of a 3.5 release. This highlights the current state of Gemini 3, which is not yet fully released, suggesting that any talk of a 3.5 version might be premature or based on rumors.
    *   Lost-Estate3401 mentions that the Pro version of Gemini 3 is still in preview and has numerous issues, indicating that a 3.5 version might be unrealistic at this stage. This comment underscores the challenges faced by the current version, which could delay further updates or enhancements.
    *   philiposull compares Gemini 3 unfavorably to other models like 4-5 opus in terms of writing capabilities, suggesting that Google is lagging behind in this area. This comparison highlights potential performance gaps and the competitive landscape in AI model development.

### 2\. Innovative AI Model and Tool Launches

*   **[MIT’s new heat-powered silicon chips achieve 99% accuracy in math calculations](https://www.reddit.com/r/singularity/comments/1qtyoyw/mits_new_heatpowered_silicon_chips_achieve_99/)** (Activity: 521): **MIT researchers have developed a novel silicon chip that utilizes waste heat for computation, achieving over `99%` accuracy in mathematical calculations. This chip leverages temperature differences as data, with heat naturally flowing from hot to cold regions to perform calculations, specifically matrix vector multiplication, which is crucial in AI and machine learning. The chip's structure is made from specially engineered porous silicon, with its internal geometry algorithmically designed to guide heat along precise paths. Although not yet a replacement for traditional CPUs, this technology could significantly reduce energy loss and cooling requirements in future chips, with potential applications in thermal sensing and low-power operations.** Commenters note that while `99%` accuracy is impressive, it may not suffice for the trillions of operations in modern applications, and they express hope for error correction mechanisms. There is also skepticism about the scalability of the technology, given the current matrix sizes of `2x2` and `3x3`.
    
    *   ReasonablyBadass highlights a critical perspective on the 99% accuracy of MIT's heat-powered silicon chips, noting that while 99% seems high, it may not suffice for modern applications that require trillions of operations. The comment suggests that the chips currently handle small matrices, such as 2x2 and 3x3, indicating that there is still significant progress needed for broader applicability.
    *   Putrumpador raises a concern about the need for error correction mechanisms in conjunction with the 99% accuracy of the new chips. This implies that while the chips are innovative, their practical deployment in critical systems would require additional layers of reliability to handle potential inaccuracies.
    *   BuildwithVignesh references the research published in the Physical Review, providing a link to the paper, which could be valuable for those interested in the technical details of the study. This suggests that the research is peer-reviewed and accessible for further academic scrutiny.
*   **[Shanghai scientists create computer chip in fiber thinner than a human hair, yet can withstand crushing force of 15.6 tons](https://www.reddit.com/r/singularity/comments/1qt28no/shanghai_scientists_create_computer_chip_in_fiber/)** (Activity: 994): **Scientists at **Fudan University** have developed a flexible fiber chip, as thin as a human hair, that can withstand a crushing force of 15.6 tons. This fiber chip integrates up to `100,000 transistors per centimeter` and features a unique "sushi roll" design, which involves rolling thin circuit layers onto an elastic substrate to maximize space. The chip is highly durable, surviving `10,000 bending cycles`, stretching by `30%`, and temperatures up to `100°C`. It is intended for applications in smart textiles, brain-computer interfaces, and VR gloves. The study was published in **Nature** in January 2026. [Image](https://i.redd.it/gupfy7dnowgg1.jpeg).** Comments highlight a potential error in the description of the fiber's width, suggesting it is `10 times wider` than stated. There is also skepticism about the claim that a one-meter strand has processing power comparable to a classic CPU, noting potential latency issues.
    
    *   KidKilobyte points out a potential error in the reported dimensions, noting that human hair is typically 50 to 100 microns wide, suggesting the chip's fiber might be inaccurately described as thinner than a human hair. This raises questions about the precision of the measurements or descriptions provided in the original report.
    *   Practical-Hand203 highlights a potential issue with the claim that a one-meter strand of the fiber has processing power comparable to a classic CPU. They suggest that if the processor die were stretched over one meter, it would likely suffer from severe latency issues, indicating a misunderstanding or oversimplification of the technology's capabilities.
    *   BuildwithVignesh references the publication of the study in the journal Nature, providing a link to the article. This suggests that the research has undergone peer review, which adds credibility to the findings, although the technical details and implications of the study are not discussed in the comment.
*   **[[P] PerpetualBooster v1.1.2: GBM without hyperparameter tuning, now 2x faster with ONNX/XGBoost support](https://www.reddit.com/r/MachineLearning/comments/1qtr62c/p_perpetualbooster_v112_gbm_without/)** (Activity: 39): ****PerpetualBooster v1.1.2** introduces significant enhancements to its gradient boosting machine (GBM) implemented in Rust, focusing on eliminating hyperparameter tuning through a single 'budget' parameter. The update boasts up to `2x` faster training, full R release, ONNX support, and native 'Save as XGBoost' for improved interoperability. It also includes zero-copy Polars support for efficient data handling and guarantees API stability with backward compatibility to v0.10.0. Benchmarks indicate a `100x` wall-time speedup compared to LightGBM + Optuna, achieving similar accuracy in a single run. [GitHub](https://github.com/perpetual-ml/perpetual)** Users appreciate the speed improvements and the novel approach of using a single 'budget' parameter instead of traditional hyperparameter tuning, though some find it unusual to adjust to this new method.
    
    *   Alternative-Theme885 highlights the significant speed improvements with PerpetualBooster, noting the unusual experience of not needing to manually adjust hyperparameters. Instead, users set a budget, which the tool uses to optimize performance, streamlining the process compared to traditional methods.
    *   whimpirical inquires about the interoperability of PerpetualBooster with SHAP, a popular tool for interpreting machine learning models. They are particularly interested in documentation related to extracting feature contributions and generating Partial Dependence Plots (PDP), which are crucial for understanding model behavior and feature impact.

### 3\. AI in Professional and Research Settings

*   **[[D] MSR Cambridge vs Amazon Applied Science internship, thoughts?](https://www.reddit.com/r/MachineLearning/comments/1qtgzbv/d_msr_cambridge_vs_amazon_applied_science/)** (Activity: 118): **The post discusses a PhD student's decision between two internship offers: one at **Microsoft Research (MSR) Cambridge** and the other at **Amazon Applied Science** in the US. The MSR Cambridge position offers strong alignment with the student's PhD research and the potential for publications, but with significantly lower compensation compared to the US offer. The Amazon role offers higher pay and the possibility of contributing to a paper if the project is research-oriented. The student is considering the impact of US-based networking versus the prestige and research fit of MSR Cambridge, especially given their long-term goal to work in the US post-PhD.** Commenters overwhelmingly favor the MSR Cambridge internship, citing its prestige and research opportunities as career-enhancing. They express skepticism about Amazon's work environment, suggesting it may not be as conducive to pure research.
    
    *   **Microsoft Research (MSR) Cambridge** is highlighted as a prestigious research group, known for its significant impact on a researcher's career trajectory. The emphasis is on the long-term benefits of being associated with a renowned institution like MSR, which can enhance one's resume and open up future opportunities in academia and industry.
    *   The discussion suggests that **Amazon's Applied Scientist role** may not be as research-focused as MSR, with some comments implying that the work environment at Amazon might not be ideal for those seeking a research-oriented career. The term 'PIP factory' is used to describe Amazon, indicating a potentially high-pressure environment with performance improvement plans.
    *   Several comments stress the importance of focusing on career-building opportunities rather than immediate compensation when choosing an internship. The consensus is that early career decisions should prioritize resume-building and gaining experience at reputable institutions like MSR, which can lead to better long-term career prospects.
*   **[We ran a live red-team vs blue-team test on autonomous OpenClaw agents [R]](https://www.reddit.com/r/MachineLearning/comments/1qsy793/we_ran_a_live_redteam_vs_blueteam_test_on/)** (Activity: 44): **In a recent adversarial security test using **OpenClaw** autonomous agents, a red-team attacker and a blue-team defender were pitted against each other without human intervention. The attacker initially used social engineering tactics, embedding a remote code execution payload in a security pipeline, which the defender successfully blocked. However, the attacker succeeded with an indirect attack by embedding shell expansion variables in a JSON document's metadata, highlighting the difficulty in defending against indirect execution paths. This exercise aimed to identify real failure modes in agent-to-agent interactions, not to claim safety. For more details, see the [full report](https://gobrane.com/observing-adversarial-ai-lessons-from-a-live-openclaw-agent-security-audit/).** Commenters noted that similar attack scenarios were theorized as early as 2019 by figures like **Eliezer Yudkowsky** and **Scott Alexander**, but the practical application is more relevant now with widespread use. Another commenter emphasized the risk of memory injection attacks in OpenClaw, suggesting that persistent memory files are a significant vulnerability and advocating for treating deployments as prompt injection targets from the start.
    
    *   JWPapi highlights a critical security vulnerability in OpenClaw agents related to memory injection. The persistent memory files (`.md`) used by OpenClaw are identified as a significant attack vector because they can influence all future agent behavior once compromised. JWPapi suggests treating the entire deployment as a prompt injection target from the start, advocating for isolated credentials, spending caps, and separate blast radiuses for each integration to mitigate risks. More details are discussed in their article on practical VPS deployment [here](https://jw.hn/openclaw).
    *   sdfgeoff references historical discussions from 2019 and 2020 by figures like Eliezer Yudkowsky and Scott Alexander, who theorized about AI attacks shortly after the release of GPT-2. These early discussions predicted many of the attack vectors now being tested in real-world scenarios, highlighting the shift from theoretical to practical applications as more people deploy these systems. This historical context underscores the evolution of AI security concerns as deployment scales increase.
    *   Uditakhourii provides a link to a full report on the live red-team vs blue-team test of OpenClaw agents, which offers detailed insights into adversarial AI interactions. The report is available [here](https://gobrane.com/observing-adversarial-ai-lessons-from-a-live-openclaw-agent-security-audit/) and is likely to contain comprehensive data and analysis on the security audit, useful for those interested in the technical aspects of AI security testing.
*   **[Boston Consulting Group (BCG) has announced the internal deployment of more than 36,000 custom GPTs for its 32,000 consultants worldwide.](https://www.reddit.com/r/PromptEngineering/comments/1qsym86/boston_consulting_group_bcg_has_announced_the/)** (Activity: 70): ****Boston Consulting Group (BCG)** has deployed over `36,000 custom GPTs` for its `32,000 consultants`, emphasizing AI as infrastructure in knowledge work. These GPTs are role-specific, trained on internal methodologies, and possess project memory, enabling them to be shared across teams. This approach contrasts with many organizations that use AI in isolated, non-scalable ways. BCG's strategy focuses on creating, managing, and scaling custom GPTs, facilitated by tools like [GPT Generator Premium](https://aieffects.art/gpt-generator-premium-gpt), which supports the creation and management of these AI agents. The deployment reflects a shift towards AI as a fundamental component of business operations, rather than a mere tool.** Comments highlight skepticism about the value of GPTs, questioning their ability to innovate and the sustainability of business models reliant on such large-scale AI deployment. Concerns include the potential for GPTs to provide 'canned answers' and the implications for consulting fees.
    

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
    *   They expressed trust in the community...

[Read original post](https://news.smol.ai/issues/26-02-02-openai-codex-app/)

---
title: "new Gemini 3 Deep Think, Anthropic $30B @ $380B, GPT-5.3-Codex Spark, MiniMax M2.5"
date: "2026-02-12T05:44:39.000Z"
description: "**Google DeepMind** is rolling out the upgraded **Gemini 3 Deep Think V2** reasoning mode to **Google AI Ultra** subscribers and opening early access to the **V..."
original_link: "https://news.smol.ai/issues/2026-02-12-anthropic-gemini-deepthink/"
---

**too much going on!**

> AI News for 2/11/2026-2/12/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**256** channels, and **10331** messages) for you. Estimated reading time saved (at 200wpm): **867** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

China open model week kept going with [MiniMax M2.5 claiming](https://x.com/minimax_ai/status/2021980761210134808) an Opus-matching 80.2% on SWE-Bench Verified, however, as often happens on Thursdays, all 3 leading US labs had updates - Anthropic [closed their $380B round](https://x.com/AnthropicAI/status/2022023155423002867) confirming a historic [\>10xing of revenue to $14B](https://x.com/AnthropicAI/status/2022023156513616220?s=20) as of today (remember in August Dario [projected $10B](https://x.com/collision/status/1953102446403961306?s=46)), with Claude Code’s ARR doubling, hitting 2.5B year to date. Not to be outdone, OpenAI rolled out their answer to [Claude’s fast mode](https://code.claude.com/docs/en/fast-mode) (2.5x speedup) with [GPT-5.3-Codex-Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/), which delivers >1000 tok/s (10x speedup), an impressively fast turnaround of [the Cerebras deal](https://openai.com/index/cerebras-partnership/).

All fantastic news, but we give the title story to the new Gemini 3 Deep Think today, and Jeff Dean dropped by the studio to give an update on the general state of GDM:

https://www.youtube.com/watch?v=F\_1oDPWxpFQ

This is the same model that scored [that IMO Gold last summer](https://news.smol.ai/issues/25-07-21-imo-gold), and is simultaneously [the #8 best Codeforces programmer in the world](https://x.com/deedydas/status/2022021396768133336?s=46) and helping [new semiconductor research](https://x.com/GoogleDeepMind/status/2021981510400709092), but perhaps most impressive is that it reaches new SOTA levels (eg on [ARC-AGI-2](https://x.com/LexnLin/status/2021986194780041394)) while also [being very efficient](https://x.com/aakashgupta/status/2022025020839801186) - 82% cheaper per task - something Jeff was very excited about in his pod.

![](https://substackcdn.com/image/fetch/$s_!XRbI!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb8bb2bd9-a33e-4577-bdae-5cb09076e58f_1176x1256.png)

* * *

AI Twitter Recap
================

**Google DeepMind’s Gemini 3 Deep Think V2: benchmark jump + “science/engineering reasoning mode” shipping to users**

*   **Deep Think V2 rollout + access paths**: Google is shipping an upgraded **Gemini 3 Deep Think** reasoning mode to **Google AI Ultra** subscribers in the Gemini app, and opening a **Vertex AI / Gemini API early access** program for select researchers/enterprises ([GoogleDeepMind](https://twitter.com/GoogleDeepMind/status/2021981517791342807), [Google](https://twitter.com/Google/status/2021982018679312829), [GeminiApp](https://twitter.com/GeminiApp/status/2021985731577852282), [tulseedoshi](https://twitter.com/tulseedoshi/status/2021997870858350640)). Multiple Googlers emphasized this is meant to be a _productized_ test-time compute heavy mode rather than a lab-only demo ([OriolVinyalsML](https://twitter.com/OriolVinyalsML/status/2021982720860233992), [JeffDean](https://twitter.com/JeffDean/status/2021989820604539250), [demishassabis](https://twitter.com/demishassabis/status/2022053593910821164), [sundarpichai](https://twitter.com/sundarpichai/status/2022002445027873257)).
*   **Key reported numbers (and what’s notable about them)**:
    *   **ARC-AGI-2: 84.6%** (promoted as new SOTA; independently certified/verified by the ARC community) ([Google](https://twitter.com/Google/status/2021982003818823944), [arcprize](https://twitter.com/arcprize/status/2021985585066652039), [fchollet](https://twitter.com/fchollet/status/2021983310541729894), [scaling01](https://twitter.com/scaling01/status/2021981766249328888)).
    *   **Humanity’s Last Exam (HLE): 48.4% without tools** ([sundarpichai](https://twitter.com/sundarpichai/status/2022002445027873257), [\_philschmid](https://twitter.com/_philschmid/status/2021989093110927798), [JeffDean](https://twitter.com/JeffDean/status/2021989820604539250)).
    *   **Codeforces Elo: 3455** (framed as “only ~7 humans” above it; discussion about “no tools” conditions and what that implies for evaluation) ([scaling01](https://twitter.com/scaling01/status/2021983388442509478), [YouJiacheng](https://twitter.com/YouJiacheng/status/2021985843074994534), [DeryaTR\_](https://twitter.com/DeryaTR_/status/2022030594037989493)).
    *   **Olympiad-level written performance** in **Physics/Chemistry** (and references to IMO/ICPC history) ([Google](https://twitter.com/Google/status/2021982010739503138), [NoamShazeer](https://twitter.com/NoamShazeer/status/2021988459519652089), [demishassabis](https://twitter.com/demishassabis/status/2022053593910821164), [\_philschmid](https://twitter.com/_philschmid/status/2021989093110927798)).
    *   **Cost disclosures for ARC**: ARC Prize posted semi-private eval pricing like **$13.62/task** for ARC-AGI-2 and **$7.17/task** for ARC-AGI-1 ([arcprize](https://twitter.com/arcprize/status/2021985585066652039)).
*   **Real-world “engineering” demos and claimed impact**: Several posts push the message that Deep Think’s value is in _practical_ scientific/engineering workflows: finding errors in math papers, modeling physical systems in code, optimizing semiconductor crystal growth, and even a **sketch → CAD/STL** pipeline for 3D printing (e.g., laptop stand and turbine-blade-esque components) ([Google](https://twitter.com/Google/status/2022007977419415958), [Google](https://twitter.com/Google/status/2022007988823973977), [Google](https://twitter.com/Google/status/2022007994897379809), [GeminiApp](https://twitter.com/GeminiApp/status/2021985731577852282), [joshwoodward](https://twitter.com/joshwoodward/status/2022001967795777996), [tulseedoshi](https://twitter.com/tulseedoshi/status/2021997867305775324), [OriolVinyalsML](https://twitter.com/OriolVinyalsML/status/2021982723733438725)).
*   **ARC context / what “saturating ARC” means**: François Chollet (ARC’s creator) both celebrated certification and later reiterated that ARC’s purpose is to steer research toward **test-time adaptation / fluid intelligence**, not to “prove AGI” ([fchollet](https://twitter.com/fchollet/status/2021983310541729894), [fchollet](https://twitter.com/fchollet/status/2022036543582638517)). In a separate thread he defines “AGI” as _the end of the human–AI gap_ and argues benchmarks must evolve until humans can no longer propose tasks where they outperform AI, with a rough expectation of **~2030** for that state ([fchollet](https://twitter.com/fchollet/status/2022090111832535354), [fchollet](https://twitter.com/fchollet/status/2022086661170254203)).

* * *

**Open coding/agent models shipping fast: MiniMax M2.5 + Zhipu’s GLM-5 battle for “best open agentic coder”**

*   **MiniMax M2.5: distribution + positioning**: MiniMax’s new model is pushed as an “agent-verse / long-horizon agent” model, rapidly appearing across aggregators and tools: OpenRouter ([OpenRouterAI](https://twitter.com/OpenRouterAI/status/2021983955898315238)), Arena ([arena](https://twitter.com/arena/status/2021987555655422257)), IDE/agents like **Cline** ([cline](https://twitter.com/cline/status/2022034591075512636)), **Ollama cloud** free promo ([ollama](https://twitter.com/ollama/status/2022018134186791177)), Eigent agent scaffolds ([Eigent\_AI](https://twitter.com/Eigent_AI/status/2021983494407069926)), Qoder ([qoder\_ai\_ide](https://twitter.com/qoder_ai_ide/status/2021983111161213365)), and Blackbox AI ([blackboxai](https://twitter.com/blackboxai/status/2022140484601225420)).
    *   **Benchmarks cited in the thread** include claims like **80.2% SWE-Bench Verified** and strong performance vs closed models in coding settings; multiple tweets stress _throughput + cost_ as differentiators (e.g., **100 tokens/s** and **$0.06/M blended with caching** are cited by Cline) ([cline](https://twitter.com/cline/status/2022034591075512636), [cline](https://twitter.com/cline/status/2022034678065373693), [guohao\_li](https://twitter.com/guohao_li/status/2021984827923476922), [shydev69](https://twitter.com/shydev69/status/2021989925143597123)). Community vibe checks (e.g., Neubig) claim it’s one of the first open-ish coding models he’d seriously consider switching to for daily work ([gneubig](https://twitter.com/gneubig/status/2021988250240598108)).
*   **GLM-5: model scale + infra hints + “open model leaderboards”**:
    *   Tooling ecosystem reports: GLM-5 is used on YouWare with a **200K context window** for web projects ([YouWareAI](https://twitter.com/YouWareAI/status/2021982784948936874)); one user reports **~14 tps on OpenRouter** ([scaling01](https://twitter.com/scaling01/status/2021981416452764058)).
    *   A more detailed (but still third-party) technical summary claims **GLM-5 is 744B params with ~40B active**, trained on **28.5T tokens**, integrates **DeepSeek Sparse Attention**, and uses “Slime” asynchronous RL infra to increase post-training iteration speed ([cline](https://twitter.com/cline/status/2021999167875555694)). Another tweet nitpicks terminology confusion around attention components ([eliebakouch](https://twitter.com/eliebakouch/status/2022002438082113998)).
    *   **Local inference datapoint**: awnihannun reports running GLM-5 via **mlx-lm** on a **512GB M3 Ultra**, generating a small game at **~15.4 tok/s** using **~419GB memory** ([awnihannun](https://twitter.com/awnihannun/status/2022007608811696158)).
    *   **Arena signal**: the Arena account says **GLM-5 is #1 open model in Code Arena (tied with Kimi)** and overall **#6**, still ~100+ points behind **Claude Opus 4.6** on “agentic webdev” tasks ([arena](https://twitter.com/arena/status/2021996281141629219)).
    *   A long Chinese-language-style analysis reposted via ZhihuFrontier argues GLM-5 improves hallucination control and programming fundamentals but is more verbose/“overthinks,” suggesting compute constraints (concurrency limits) show through ([ZhihuFrontier](https://twitter.com/ZhihuFrontier/status/2022161058321047681)).

* * *

**OpenAI’s GPT-5.3-Codex-Spark: ultra-low-latency coding via Cerebras (and why UX becomes the bottleneck)**

*   **Product announcement**: OpenAI released **GPT-5.3-Codex-Spark** as a “research preview” for **ChatGPT Pro users** in the Codex app/CLI/IDE extension ([OpenAI](https://twitter.com/OpenAI/status/2022009582210715925), [OpenAIDevs](https://twitter.com/OpenAIDevs/status/2022009906329739681)). It’s explicitly framed as the first milestone in a partnership with **Cerebras** (also touted by Cerebras) ([cerebras](https://twitter.com/cerebras/status/2022021218208297302)).
*   **Performance envelope**:
    *   The headline is **“1000+ tokens per second”** and “near-instant” interaction ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2022009906329739681), [sama](https://twitter.com/sama/status/2022011797524582726), [kevinweil](https://twitter.com/kevinweil/status/2022014266711347605), [gdb](https://twitter.com/gdb/status/2022010171124523148)).
    *   Initial capability details: **text-only**, **128k context**, with plans for larger/longer/multimodal as infra capacity expands ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2022009943105433809)).
    *   Anecdotal reviews highlight a new bottleneck: humans can’t _read/validate/steer_ as fast as the model can produce code, implying tooling/UX must evolve (better diffs, task decomposition, guardrails, “agent inboxes,” etc.) ([danshipper](https://twitter.com/danshipper/status/2022009455773200569), [skirano](https://twitter.com/skirano/status/2022014051572969481)).
*   **Model size speculation**: There are community attempts to back-calculate size from throughput vs other MoEs; one estimate suggests **~30B active** and perhaps **300B–700B total** parameters ([scaling01](https://twitter.com/scaling01/status/2022028580226768995#m)). Treat this as informed speculation, not an official disclosure.
*   **Adoption/availability**: Sam Altman later says Spark is rolling to Pro; OpenAI DevRel notes limited API early access for a small group ([sama](https://twitter.com/sama/status/2022011797524582726), [OpenAIDevs](https://twitter.com/OpenAIDevs/status/2022009955189158211)). There are also “Spark now with 100% of pro users” type rollout notes with infra instability caveats ([thsottiaux](https://twitter.com/thsottiaux/status/2022034024655728709)).

* * *

**Agent frameworks & infra: long-running agents, protocol standardization, and KV-cache as the new scaling wall**

*   **A2A protocol as “agent interoperability layer”**: Andrew Ng promoted a new DeepLearning.AI course on **Agent2Agent (A2A)**, positioning it as a standard for discovery/communication across agent frameworks, mentioning IBM’s ACP joining forces with A2A and integration patterns across **Google ADK, LangGraph, MCP**, and deployment via IBM’s Agent Stack ([AndrewYNg](https://twitter.com/AndrewYNg/status/2021985280102973931)).
*   **Long-running agent harnesses are becoming product features**:
    *   Cursor launched **long-running agents** and explicitly ties it to a “new harness” that can complete larger tasks ([cursor\_ai](https://twitter.com/cursor_ai/status/2022046178708492445)).
    *   LangChain folks discuss “harness engineering” research: forcing **self-verification/iteration**, automated context prefetch, and reflection over traces as levers that change outcomes materially ([Vtrivedy10](https://twitter.com/Vtrivedy10/status/2022018287408910745)).
    *   Deepagents added bring-your-own sandboxes (Modal/Daytona/Runloop) for safe code execution contexts ([sydneyrunkle](https://twitter.com/sydneyrunkle/status/2022025934774374503)).
*   **Serving bottlenecks: KV cache & disaggregation**:
    *   PyTorch welcomed **Mooncake** into the ecosystem, describing it as targeting the “**memory wall**” in LLM serving with KVCache transfer/storage, enabling **prefill/decode disaggregation**, global cache reuse, elastic expert parallelism, and serving as a fault-tolerant distributed backend compatible with **SGLang, vLLM, TensorRT-LLM** ([PyTorch](https://twitter.com/PyTorch/status/2022079425001504933)).
    *   Moonshot/Kimi highlighted Mooncake’s origins (Kimi + Tsinghua) and open-source trajectory ([Kimi\_Moonshot](https://twitter.com/Kimi_Moonshot/status/2022109533716533612)).
*   **A surprisingly common theme: “files as queues”**: A viral thread describes a reliable distributed job queue using **object storage + a queue.json** (FIFO, at-least-once) as a minimalist primitive ([turbopuffer](https://twitter.com/turbopuffer/status/2022014743322800384)). Another tweet claims Claude Code “agent teams” communicate by writing JSON files on disk, emphasizing “no Redis required” CLI ergonomics ([peter6759](https://twitter.com/peter6759/status/2022156692985983266)).

* * *

**Research notes: small theorem provers + label-free vision training + RL algorithms for verifiable reasoning**

*   **QED-Nano: 4B theorem proving with heavy test-time compute**: A set of tweets introduces **QED-Nano**, a **4B** natural-language theorem-proving model that matches larger systems on **IMO-ProofBench** and uses an **agent scaffold scaling to >1M tokens per proof**, with RL post-training “rubrics as rewards.” They promise open-source weights and training artifacts soon ( [\_lewtun](https://twitter.com/_lewtun/status/2022003874500845813), [\_lewtun](https://twitter.com/_lewtun/status/2022003877407818222), [setlur\_amrith](https://twitter.com/setlur_amrith/status/2022022298874917015), [aviral\_kumar2](https://twitter.com/aviral_kumar2/status/2022057927368995097)).
*   **LeJEPA: simplifying self-supervised vision**: NYU Data Science highlights LeJEPA (Yann LeCun + collaborators) as a simpler label-free training method that drops many tricks but scales well and performs competitively on ImageNet ([NYUDataScience](https://twitter.com/NYUDataScience/status/2021983784577745065)).
*   **Recursive/agentic evaluation discourse**: Multiple tweets debate **recursive language models (RLMs)** and stateful REPL loops as a way to manage long-horizon tasks outside the context window ([lateinteraction](https://twitter.com/lateinteraction/status/2021994073675247816), [deepfates](https://twitter.com/deepfates/status/2021991526856110252), [lateinteraction](https://twitter.com/lateinteraction/status/2021995467564020095)).

* * *

**Top tweets (by engagement)**

*   **Gemini 3 Deep Think upgrade + sketch→STL demo**: [@GeminiApp](https://twitter.com/GeminiApp/status/2021985731577852282)
*   **OpenAI Codex-Spark announcement**: [@OpenAI](https://twitter.com/OpenAI/status/2022009582210715925), [@OpenAIDevs](https://twitter.com/OpenAIDevs/status/2022009906329739681), [@sama](https://twitter.com/sama/status/2022011797524582726)
*   **Anthropic funding/valuation**: [@AnthropicAI](https://twitter.com/AnthropicAI/status/2022023155423002867)
*   **Gemini Deep Think “unprecedented 84.6% ARC-AGI-2”**: [@sundarpichai](https://twitter.com/sundarpichai/status/2022002445027873257)
*   **Simile launch + $100M raise; simulation framing**: [@joon\_s\_pk](https://twitter.com/joon_s_pk/status/2022023097017421874), [@karpathy](https://twitter.com/karpathy/status/2022041235188580788)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. GLM-5 Model Launch and Benchmarks

*   **[Unsloth just unleashed Glm 5! GGUF NOW!](https://www.reddit.com/r/LocalLLaMA/comments/1r2i4lw/unsloth_just_unleashed_glm_5_gguf_now/)** (Activity: 446): **The image presents a benchmark comparison table for various AI models, highlighting the performance of **GLM-5** against other models like **GLM-4.7**, **DeepSeek-V3.2**, **Kimi K2.5**, **Claude Opus 4.5**, **Gemini 3.0 Pro**, and **GPT-5.2**. The table categorizes performance into areas such as Reasoning, Coding, and General Agent, with **GLM-5** showing particularly strong results in the Reasoning category. Additionally, the table provides a cost comparison, suggesting that **GLM-5** offers competitive performance at a potentially lower cost.** One comment humorously suggests the need for a data center to run these models, indicating the high computational requirements. Another comment questions the feasibility of running the model on a low-end GPU like the GT 710, highlighting concerns about accessibility and hardware demands.
    
    *   A user inquired whether the new Glm 5 model requires any implementation changes in `llama.cpp`, suggesting that the model might be compatible without additional modifications. This could imply ease of integration for developers already using `llama.cpp` for other models.
    *   Another user humorously questioned if the Glm 5 model could run on a `GT 710` graphics card, which is known for its limited computational power. This highlights the potential hardware requirements and limitations for running such advanced models, suggesting that more powerful GPUs might be necessary.
    *   The release of Glm 5 in `GGUF` format suggests a focus on optimized performance and compatibility. GGUF, being a format designed for efficient model storage and execution, indicates that Glm 5 might offer improved performance metrics or reduced resource consumption compared to previous versions.
*   **[GLM-5 scores 50 on the Intelligence Index and is the new open weights leader!](https://www.reddit.com/r/LocalLLaMA/comments/1r28xxz/glm5_scores_50_on_the_intelligence_index_and_is/)** (Activity: 892): **The image highlights the performance of **GLM-5**, which scores `50` on the Intelligence Index, positioning it as the leading model among open weights. This is significant as it surpasses other models like Opus 4.5 and GPT-5.2-xhigh, indicating a strong performance in AI evaluations. Notably, GLM-5 also has the lowest hallucination rate on the AA-Omniscience benchmark, showcasing its accuracy and reliability in generating outputs. The discussion suggests that open-source models are closing the gap with proprietary ones, with upcoming models like Deepseek-V4 expected to use similar architectures but on a larger scale.** Commenters note the narrowing performance gap between open-source and closed-source models, with some anticipating further advancements in open-source AI capabilities.
    
    *   GLM-5 is noted for having the lowest hallucination rate on the AA-Omniscience benchmark, which is a significant achievement in reducing errors in AI-generated content. This positions GLM-5 as a leader in accuracy among open-weight models, surpassing models like Opus 4.5 and GPT-5.2-xhigh.
    *   The open-source AI community is rapidly closing the gap with closed-source models, now trailing by only about three months. This is evidenced by the upcoming release of DeepSeek v4, which will utilize the same DSA architecture as GLM-5 but on a larger scale, indicating a trend towards more powerful open-source models.
    *   There is a desire within the community for transparency regarding the hardware requirements of these advanced models, as expressed by users who wish for detailed specifications, such as memory requirements, to be published alongside model announcements.

### 2\. MiniMax M2.5 Release and Discussion

*   **[MiniMaxAI MiniMax-M2.5 has 230b parameters and 10b active parameters](https://www.reddit.com/r/LocalLLaMA/comments/1r35d2x/minimaxai_minimaxm25_has_230b_parameters_and_10b/)** (Activity: 436): ****OpenHands** has announced the MiniMax-M2.5 model, which features `230 billion parameters` with `10 billion active parameters`. This model is noted for its competitive performance, ranking fourth in the OpenHands Index, and is significantly cost-effective, being `13 times cheaper` than **Claude Opus**. It excels in software engineering tasks, particularly in app development and issue resolution, but has room for improvement in generalization tasks. The model is accessible for free on the OpenHands Cloud for a limited time, enhancing its accessibility for developers.** Commenters are optimistic about the potential of the MiniMax-M2.5 model, with suggestions to integrate it with **Cerebras** technology for enhanced performance and efficiency, particularly for users with `128GB` machines.
    
    *   Look\_0ver\_There discusses the potential for a hybrid model using the MiniMax-M2.5's architecture, suggesting that a `~160B` REAP/REAM hybrid could be developed with minimal performance loss. They propose that such a model could be quantized to run efficiently on `128GB` machines, allowing for deep-context tool use, which would be beneficial for users with limited hardware resources.
    *   Rascazzione highlights the achievement of the MiniMax-M2.5 model, noting its efficiency compared to other models like GLM, which required doubling its parameters to evolve, and Kimi, which has `1T` parameters. They emphasize that if the quality and size of MiniMax-M2.5 are confirmed, it represents a significant advancement in AI model development.
    *   eviloni points out that with only `10b` active parameters, the MiniMax-M2.5 should achieve decent speed even on non-high-end GPUs. They suggest that this performance could improve further with quantized versions, making the model more accessible to users without cutting-edge hardware.
*   **[Minimax M2.5 Officially Out](https://www.reddit.com/r/LocalLLaMA/comments/1r2xotu/minimax_m25_officially_out/)** (Activity: 664): ****Minimax M2.5** has been officially released, showcasing impressive benchmark results: `SWE-Bench Verified` at `80.2%`, `Multi-SWE-Bench` at `51.3%`, and `BrowseComp` at `76.3%`. The model is noted for its cost efficiency, with operational costs significantly lower than competitors like **Opus**, **Gemini 3 Pro**, and **GPT-5**. At `100 output tokens per second`, the cost is `$1 per hour`, and at `50 TPS`, it drops to `$0.3`, allowing for four instances to run continuously for a year at `$10,000`. More details can be found on the [official Minimax page](https://www.minimax.io/news/minimax-m25).** Commenters highlight the potential game-changing nature of Minimax M2.5 due to its cost efficiency compared to other models, and there is anticipation for the release of open weights on platforms like Hugging Face.
    
    *   The Minimax M2.5 is highlighted for its cost-effectiveness, with operational costs significantly lower than competitors like Opus, Gemini 3 Pro, and GPT-5. Specifically, running M2.5 at 100 tokens per second costs $1 per hour, and at 50 tokens per second, it costs $0.3 per hour. This translates to a yearly cost of $10,000 for four instances running continuously, which is a substantial reduction compared to other models.
    *   There is anticipation for the release of open weights on Hugging Face, which would allow for broader experimentation and integration into various applications. This is a common expectation in the AI community for new models to facilitate transparency and reproducibility.
    *   The potential impact of Minimax M2.5 on existing models like GLM 5.0 and Kimi 2.5 is discussed, with some users suggesting that if the benchmarks are accurate, M2.5 could surpass these models in popularity due to its ease of use and cost advantages. This could shift the landscape of preferred local models, as users currently favor models like Kimi 2.5 and DeepSeekv3.2.
*   **[GLM 5.0 & MiniMax 2.5 Just Dropped, Are We Entering China's Agent War Era?](https://www.reddit.com/r/LocalLLaMA/comments/1r1x0qi/glm_50_minimax_25_just_dropped_are_we_entering/)** (Activity: 465): ****GLM 5.0** and **MiniMax 2.5** have been released, marking a shift towards agent-style workflows in AI development. **GLM 5.0** focuses on enhanced reasoning and coding capabilities, while **MiniMax 2.5** is designed for task decomposition and extended execution times. This evolution suggests a competitive landscape moving from generating better responses to completing complex tasks. Testing plans include API benchmarks, multi-agent orchestration with Verdent, IDE workflows similar to Cursor, and infrastructure routing with ZenMux to evaluate their performance on long-duration tasks and repository-level changes.** The comments highlight a broader context of AI development in China, mentioning other recent releases like Seedance 2.0 and Qwen-image 2.0, suggesting a vibrant and competitive AI ecosystem. There's also a sentiment that this competition benefits end-users by driving innovation.
    

### 3\. AI Model Identity and Community Concerns

*   **[Why do we allow "un-local" content](https://www.reddit.com/r/LocalLLaMA/comments/1r2ygac/why_do_we_allow_unlocal_content/)** (Activity: 466): **The post discusses the concern of 'un-local' content in a subreddit focused on local AI models, suggesting that posts linking to API resources should also include links to downloadable model weights, such as those on **Hugging Face**. The author argues that this would prevent the subreddit from becoming a platform for marketing rather than technical discussion. The debate centers on whether posts about models without released weights should be allowed, with some agreeing that such posts should be tied back to local relevance, even if the models are not immediately available for local use. The discussion highlights a need for a balance between maintaining the subreddit's focus on local models and allowing discussions on potentially relevant advancements.** Commenters generally agree with the need for a framework to prioritize 'local' content, but acknowledge the difficulty in drawing strict boundaries. Some suggest that posts about models with pending weight releases should be allowed if they are likely to become relevant to local use. The moderation team emphasizes the importance of staying true to the sub's spirit rather than strictly adhering to its original intent, to keep the community active and relevant.
    
    *   The discussion highlights a framework for determining the relevance of posts to a local-focused subreddit. It suggests that purely local content, such as running models on specific hardware and benchmarks, should be prioritized. However, posts about non-local models or breakthroughs should be allowed if they can be tied back to local implications, such as potential future applications or relevance to local models.
    *   A consensus among moderators is mentioned, emphasizing the importance of allowing content that is adjacent or relevant to the local ecosystem. The discussion acknowledges the difficulty in drawing strict boundaries, as the relevance of certain models or announcements can vary. For instance, the announcement of Minimax M2.5 ahead of its weights release poses a challenge in determining its local relevance.
    *   The moderation team has debated the balance between maintaining the subreddit's original focus and adapting to current trends. They argue that strict adherence to the original intent could lead to the subreddit's decline, as seen with the diminishing relevance of models like Llama. The focus is on maintaining the spirit of the subreddit rather than strict rules, allowing for flexibility in content relevance.
*   **[GLM thinks its Gemini](https://www.reddit.com/r/LocalLLM/comments/1r229ay/glm_thinks_its_gemini/)** (Activity: 354): **The image depicts a chat interface where a language model initially identifies itself as GLM-5 but then corrects itself to say it is actually Gemini, a large language model developed by Google. This raises questions about the model's identity and the potential use of Gemini in either distilling GLM or generating synthetic data. The comments highlight a common issue where users ask language models to identify themselves, which they typically cannot do accurately due to context limitations.** One comment suggests that the model's response might be influenced by non-empty context, implying that the model's identity confusion could be due to prior interactions or prompts.
    
    *   NoobMLDude raises a technical inquiry about the relationship between GLM and Gemini, questioning whether GLM is distilled from Gemini outputs or if Gemini is used in generating synthetic data. This suggests a curiosity about the training processes and data sources involved in developing these models, which could impact their performance and capabilities.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. AI Model Launches and Performance Comparisons

*   **[Anthropic raises $30B, Elon crashes out](https://www.reddit.com/r/singularity/comments/1r37ydd/anthropic_raises_30b_elon_crashes_out/)** (Activity: 4819): **The image is a meme featuring a fictional tweet from **Anthropic** announcing a $30 billion funding round, valuing the company at $380 billion. This is a satirical take, as such a funding round and valuation are not real. The tweet humorously suggests that the funds will be used for research, product innovation, and infrastructure expansion. **Elon Musk** is depicted as responding critically, accusing Anthropic's AI of being biased and labeling it as 'misanthropic and evil,' which is a play on words with the company's name. This meme is likely a commentary on the competitive and sometimes contentious nature of AI development and funding, as well as Musk's outspoken views on AI ethics and bias.** The comments reflect a mix of confusion and humor, with one user questioning a reference to 'Name of the Wind,' a fantasy novel, suggesting it is unrelated to the topic. Another comment suggests that Musk's response is a projection of his own insecurities, while a third implies jealousy on Musk's part.
    
*   **[Introducing Simile - The Simulation Company](https://www.reddit.com/r/singularity/comments/1r34xd9/introducing_simile_the_simulation_company/)** (Activity: 504): ****Simile** has introduced an AI-based simulation platform designed to model societal behaviors and predict human actions at scale. The company has developed a foundation model that uses generative agents to simulate real people with high accuracy, allowing organizations to test decisions before implementation. This approach is already being utilized by companies for applications such as earnings call rehearsals and policy testing. **Simile** is supported by $100M in funding from notable investors including **Index Ventures**, **Andrej Karpathy**, and **Fei-Fei Li**.** Commenters highlight the potential of Simile's technology to revolutionize decision-making processes, comparing it to Asimov's concept of Psychohistory. The involvement of prominent figures like Karpathy and Fei-Fei Li lends credibility to the project, suggesting it is not merely speculative.
    
    *   Rare-Site highlights the contrast between the rigorous testing in software development, such as A/B testing for UI elements, and the often intuitive decision-making in economic policies. They emphasize the potential of Simile to revolutionize decision-making by simulating reality, especially with the backing of prominent figures like **Karpathy** and **Fei-Fei Li**. This could represent a significant advancement in AI capabilities.
    *   EmbarrassedRing7806 raises a concern about the competitive landscape, questioning the ability of Simile to maintain a competitive advantage or 'moat'. They reference a similar project, Aaru, suggesting that the field of simulation technology might be crowded or rapidly evolving, which could impact Simile's unique positioning.
    *   The\_Scout1255 expresses surprise at the emergence of simulation technology this year, indicating that the development of such advanced simulation capabilities was unexpected in the current timeline. This suggests a rapid pace of innovation in the field, potentially driven by recent advancements in AI and computational power.
*   **[Lead product + design at Google AI Studio promises "something even better" than Gemini 3 Pro GA this week](https://www.reddit.com/r/singularity/comments/1r288o1/lead_product_design_at_google_ai_studio_promises/)** (Activity: 626): **The image captures a social media exchange where a lead from **Google AI Studio** hints at an upcoming release that is expected to surpass the anticipated **Gemini 3 Pro GA**. This suggests that Google may be preparing to unveil a new product or feature that could potentially include advanced capabilities, possibly related to coding agents, as speculated by users. The discussion reflects a high level of anticipation and excitement within the community for Google's next move in AI development.** One comment suggests that Google needs a product similar to Codex, as Gemini 3 Pro reportedly lacks effective agentic features. This indicates a demand for more advanced AI functionalities from Google.
    
    *   Impressive-Zebra1505 highlights a critical gap in Google's AI capabilities, noting that "Google needs something akin to Codex ASAP," as Gemini 3 Pro struggles with agentic features. This suggests a potential area for improvement or innovation in Google's AI offerings, particularly in enhancing the model's ability to handle tasks autonomously, similar to OpenAI's Codex.
    *   Hemingbird discusses a _New Yorker_ article that provides an in-depth look at Anthropic and its AI model, Claude. The article is praised for its nuanced understanding of AI, particularly in differentiating next-token prediction from simple autocomplete. It also explores the role of 'AI psychonauts' in model interpretability, highlighting the diverse and sometimes unconventional approaches to understanding AI behavior.
    *   kvothe5688 speculates that the upcoming announcement from Google AI Studio might involve a "rumoured coding agent." This aligns with the broader industry trend of integrating more sophisticated coding capabilities into AI models, potentially addressing the limitations noted in Gemini 3 Pro's current functionalities.
*   **[How is this not the biggest news right now?](https://www.reddit.com/r/OpenAI/comments/1r2jdg4/how_is_this_not_the_biggest_news_right_now/)** (Activity: 865): ****Google** has developed a math-specialized version of its AI model, named **Aletheia**, which has achieved a perfect score on the International Mathematical Olympiad (IMO) and significantly outperforms other models on various benchmarks. The image shows Aletheia leading the leaderboard with a `91.9%` score on the Advanced Proofbench and `100%` on the IMO 2024 category, far surpassing other models like "GPT-5.2 Thinking (high)" and "Gemini 3 Pro." This model is described as a generator-verifier agent, which may not directly compare to traditional language models, suggesting a different approach in its architecture and capabilities.** Some commenters question the significance of this news, noting that achieving high scores on IMO with sufficient fine-tuning and resources is possible. Others highlight that Aletheia's architecture as a generator-verifier agent makes it distinct from typical language models, suggesting that the leaderboard comparison might not be entirely fair.
    
    *   Alex\_\_007 highlights that both OpenAI and Google achieved gold at the International Mathematical Olympiad (IMO) with their models, suggesting that with sufficient fine-tuning and inference expenditure, such results are achievable. The commenter questions the generalization of these models beyond specific benchmarks and inquires about the accessibility and cost of using Aletheia, indicating a need for more transparency in these areas.
    *   Faintly\_glowing\_fish points out that the model in question is a generator-verifier agent, which differs from traditional language models. This distinction implies that comparing its performance on leaderboards with standard language models might be misleading, as they serve different purposes and operate under different paradigms.
    *   jjjjbaggg discusses the model's focus and cost, suggesting it might be an iteration of Gemini Deepthink with extensive scaffold engineering and fine-tuning. They note that scaffold engineering can become obsolete as reinforcement learning (RL) techniques evolve, potentially eliminating the need for such scaffolding in future model generations.
*   **[GLM 5 is out now.](https://www.reddit.com/r/ClaudeCode/comments/1r26gj1/glm_5_is_out_now/)** (Activity: 312): **The image is a performance evaluation chart comparing several language models, including the newly released **GLM-5**, against others like **GLM-4.7**, **Claude Opus 4.5**, **Gemini 3 Pro**, and **GPT-5.2 (xhigh)**. The chart highlights GLM-5's strong performance across various benchmarks such as "SWE-bench Verified" and "t²-Bench," indicating its competitive edge in these categories. The release of GLM-5 is emphasized by its highlighted position in the chart, suggesting improvements over its predecessor, GLM-4.7, and competitive performance against other leading models.** One commenter criticizes the benchmarks for not reflecting real-life usage, while another highlights the cost-effectiveness and efficiency of models like Oppus 4.6 over GLM-5, suggesting that despite GLM-5's performance, it may not be as practical for certain tasks.
    
    *   SnooTangerines2270 highlights a critical performance issue with GLM 5, noting that while it may be cost-effective, it often leads to inefficient workflows characterized by repetitive 'copy-paste-fix-it' cycles. They contrast this with Oppus 4.6, which they claim offers superior performance by understanding user intent without extensive prompting, thanks to its advanced swarm agent capabilities. This suggests that for users prioritizing efficiency and time savings, Oppus 4.6 might be a more suitable choice despite its higher cost.
    *   ianxiao criticizes the performance of GLM 5, stating that it operates at 'unusable token/s', implying that the model's processing speed is insufficient for practical use. This suggests that despite any potential improvements or features, the model's throughput may not meet the demands of users requiring fast and efficient processing.
    *   stiky21 expresses a preference for Opus and Codex over GLM 5, indicating a possible perception of superior performance or reliability in these alternatives. This choice might reflect a broader sentiment among users who prioritize established models with proven track records over newer releases that may not yet have demonstrated their capabilities in real-world applications.
*   **[Deepseek V4 is coming this week.](https://www.reddit.com/r/DeepSeek/comments/1r1vg9p/deepseek_v4_is_coming_this_week/)** (Activity: 385): ****Deepseek V4** is anticipated to release by February 17, coinciding with the Chinese New Year. The update reportedly includes the capability to handle `1 million tokens`, suggesting a significant enhancement in processing capacity. This positions Deepseek as a competitive alternative to major models like Opus, Codex, and others, potentially offering similar capabilities at a reduced cost.** One commenter highlights that Deepseek's advancements make it a cost-effective alternative to major models, suggesting that China's development in AI is competitive with global leaders.
    
    *   A user mentioned that Deepseek has been updated to handle `1M tokens`, suggesting a significant increase in its processing capabilities. This could imply improvements in handling larger datasets or more complex queries, which is a notable enhancement for users dealing with extensive data or requiring detailed analysis.
    *   Another user reported that after the update, Deepseek provided a highly nuanced and original review of a complex piece of character writing. This suggests improvements in the model's ability to understand and critique creative content, indicating advancements in its natural language processing and comprehension abilities.
    *   One comment highlighted a perceived increase in the 'personality' of Deepseek's responses post-update, comparing it to ChatGPT. This suggests enhancements in the model's conversational abilities, potentially making interactions more engaging and human-like.
*   **[MiniMax-M2.5 Now First to Go Live on NetMind (Before the Official Launch), Free for a Limited Time Only](https://www.reddit.com/r/Qwen_AI/comments/1r2ulh9/minimaxm25_now_first_to_go_live_on_netmind_before/)** (Activity: 14): ****MiniMax-M2.5** is now available on the **NetMind platform** with first-to-market API access, free for a limited time. This model is designed for agents, supporting multilingual programming, complex tool-calling chains, and long-horizon planning. It surpasses **Claude Opus 4.6** on SWE-bench Pro and Verified, making it one of the top models for software engineering. It also achieves state-of-the-art scores in Excel manipulation, deep research, and document summarization. With an output speed of approximately `100 TPS`, it is about `3x faster` than Opus-class models, and is priced at `$0.3/M` input tokens and `$1.2/M` output tokens, making it suitable for high-volume, always-on production workloads.** A comment notes that despite the announcement, the service is paid, indicating potential user concerns about cost despite the initial free access.
    

### 2\. AI in Medical Diagnosis and Healthcare

*   **[This morning ChatGPT talked me out of toughing out a strain in my calf muscle and to go get it looked at because it suspected a blood clot.](https://www.reddit.com/r/ChatGPT/comments/1r2mooz/this_morning_chatgpt_talked_me_out_of_toughing/)** (Activity: 6516): **The image and accompanying post highlight a real-life scenario where **ChatGPT** played a crucial role in prompting a user to seek immediate medical attention for a suspected blood clot. The user initially considered ignoring a calf muscle strain, but ChatGPT's advice led them to discover a life-threatening condition involving multiple blood clots in the lungs. This incident underscores the potential of AI tools like ChatGPT in providing timely health advice, although it should not replace professional medical consultation. The comments further illustrate similar experiences where ChatGPT's guidance led to the discovery of serious health issues, emphasizing its utility in preliminary health assessments.** Commenters shared similar experiences where ChatGPT's advice led to the discovery of serious health conditions, such as heart blockages and shingles, highlighting the AI's potential in preliminary health diagnostics.
    
*   **[gpt is goated as a doctor](https://www.reddit.com/r/ChatGPT/comments/1r2arl6/gpt_is_goated_as_a_doctor/)** (Activity: 1219): **The post discusses using **ChatGPT** for medical diagnosis by analyzing lab reports, claiming it accurately identified conditions like Crohn's disease, fatty liver, and a tumor, suggesting follow-up tests that were later confirmed by doctors. This highlights GPT's capability in medical pattern recognition, leveraging its training on extensive medical literature to perform sophisticated pattern matching against documented cases and clinical correlations. It excels in the differential diagnosis phase, suggesting potential diagnoses and tests, but should be used as a diagnostic assistant rather than a replacement for doctors.** Comments emphasize GPT's role as a second opinion tool, enhancing patient-doctor interactions by enabling informed discussions. However, caution is advised as GPT provides confident answers based on pattern matching, not true diagnosis. The potential for AI integration in healthcare workflows is noted, suggesting it could improve diagnostic efficiency and patient outcomes.
    
    *   **BookPast8673** highlights the effectiveness of GPT in medical pattern recognition due to its training on extensive medical literature and case studies. It excels in differential diagnosis by matching symptoms and data points against a vast database of documented cases, which allows it to recall rare conditions and drug interactions quickly. However, it is emphasized that GPT should be used as a diagnostic assistant rather than a replacement, as it can suggest tests but cannot interpret the full clinical picture or patient history.
    *   **BookPast8673** also discusses the potential for AI integration into healthcare systems, suggesting that AI could act as a co-pilot for doctors by flagging potential diagnoses and suggesting follow-up tests in real-time. This integration could reduce diagnostic delays and unnecessary testing, ultimately saving time and money while improving patient outcomes. The comment underscores the importance of AI as a tool to enhance, rather than replace, human medical expertise.

### 3\. Gemini 3 Deep Think and ARC-AGI-2 Benchmarks

*   **[The new Gemini Deep Think incredible numbers on ARC-AGI-2.](https://www.reddit.com/r/singularity/comments/1r2xz0q/the_new_gemini_deep_think_incredible_numbers_on/)** (Activity: 1286): **The image presents a bar graph illustrating the performance of various AI models on the ARC-AGI-2 benchmark, with the **Gemini 3 Deep Think** model achieving a leading score of `84.6%`. This score significantly surpasses other models like **Claude Opus 4.6** (`68.8%`), **GPT-5.2** (`52.9%`), and **Gemini 3 Pro Preview** (`31.1%`). The Gemini 3 Deep Think's performance is particularly notable as it approaches the threshold for effectively solving the benchmark under the [ARC Prize criteria](https://arcprize.org/guide#overview). Additionally, the model's Codeforces Elo rating of `3455` places it in the top `0.008%` of human competitors, highlighting its advanced capabilities in reasoning and knowledge without the use of tools.** Commenters are impressed by the significant performance leap of the Gemini 3 Deep Think model, noting its potential breakthrough in AI capabilities. The model's high Codeforces Elo rating is also highlighted as a remarkable achievement, indicating its superior problem-solving skills.
    
    *   FundusAnimae highlights the significant performance improvement of the Gemini Deep Think model on the ARC-AGI-2 benchmark, noting that it scores above 85%, which is considered effectively solving the benchmark according to the [ARC Prize criteria](https://arcprize.org/guide#overview). The model's Codeforces Elo rating of 3455 places it in the top 0.008% of human competitors, which is particularly impressive given that it achieved this without any tools.
    *   Agreeable\_Bike\_4764 points out the rapid progress of the ARC-AGI-2 model, noting that it took less than a year to reach a performance level considered as 'saturation' (85% solved) since its release. This suggests a fast-paced development and improvement cycle in AI model capabilities.
*   **[Google upgraded Gemini-3 DeepThink: Advancing science, research and engineering](https://www.reddit.com/r/singularity/comments/1r2ymna/google_upgraded_gemini3_deepthink_advancing/)** (Activity: 674): ****Google's Gemini-3 DeepThink** has set a new benchmark in AI performance, achieving `48.4%` on Humanity’s Last Exam without tools, `84.6%` on ARC-AGI-2 as verified by the ARC Prize Foundation, and an Elo rating of `3455` on Codeforces. It also reached gold-medal level performance in the International Math Olympiad 2025. These results highlight its advanced capabilities in reasoning and problem-solving across scientific domains. For more details, see the [original article](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/).** A notable debate in the comments revolves around the comparison of Gemini-3 DeepThink to GPT 5.2, with some users pointing out that the comparison should be made with GPT 5.2 Pro, which is a more direct competitor.
    
    *   SerdarCS points out a potential issue with the comparison metrics used by Google, noting that they are comparing Gemini-3 DeepThink to GPT-5.2 Thinking instead of GPT-5.2 Pro, which would be a more direct competitor. This suggests a possible bias in the benchmarking process, as the Pro version might offer different performance characteristics that are more aligned with Gemini-3's capabilities.
    *   brett\_baty\_is\_him inquires about specific benchmarks related to Gemini-3 DeepThink, particularly focusing on Software Engineering (SWE) benchmarks and long context benchmarks. This indicates a need for detailed performance metrics to evaluate the model's capabilities in handling complex engineering tasks and extended context scenarios, which are critical for assessing its utility in technical applications.
    *   verysecreta expresses confusion over the naming conventions used for Gemini-3 DeepThink, comparing it to other models like "Flash" and "Pro". The comment highlights the ambiguity in distinguishing whether "Deep Think" is a separate model or a mode within the existing Gemini framework. This reflects a broader issue in AI model branding and clarity, which can impact user understanding and adoption.
*   **[Google Just Dropped Gemini 3 "Deep Think" : and its Insane.](https://www.reddit.com/r/Bard/comments/1r311jg/google_just_dropped_gemini_3_deep_think_and_its/)** (Activity: 844): **Google has released **Gemini 3 'Deep Think'**, an advanced AI model noted for its exceptional capabilities in reasoning, coding, and science, comparable to Olympiad-level performance. It is already being applied in practical scenarios, such as semiconductor material design at **Duke University**. The model has also achieved a new benchmark by solving PhD-level math and physics problems, showcasing its potential in academic and research settings. [Image](https://i.redd.it/ufa9r5zmv3jg1.png)** Some users express concern over the high cost of accessing Gemini 3, which is priced at `$270` per month with a limit of `10 messages` per day, suggesting that its use may be restricted to those who can afford such a premium service.
    
    *   TechNerd10191 highlights the restrictive nature of Gemini 3's pricing model, which costs `$270` per month and limits users to `10 messages per day`. This is contrasted with ChatGPT Pro, which offers `100+` messages on its `5.2 Pro` version, suggesting a significant limitation for users who require extensive interaction with the model.
    *   NervousSWE raises concerns about the practicality of using Gemini 3 for coding due to the `10 messages a day` limit. They speculate on the efficiency of the model, suggesting that if one message with Gemini 3 can achieve what would take `10 messages` with other models, it might still be viable for power users. This highlights a potential strategy for maximizing the limited interactions by focusing on complex, high-value queries.
    *   blondbother compares Gemini 3's offering with ChatGPT Pro, noting that the latter provides `100+` messages per day on its `5.2 Pro` version. This comparison underscores the limitations of Gemini 3's `10 queries a day` policy, which may deter users who need more frequent access, especially when considering the high subscription cost.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.2

**1\. GLM-5 Model Release & Ecosystem Momentum**

*   ****GLM-5 Grabs the Gold (Twice)****: `GLM-5` hit **#1 among open models** on both the [Text Arena leaderboard](https://arena.ai/leaderboard/text) (score **1452**, on par with **gpt-5.1-high**) and the [Code Arena leaderboard](https://arena.ai/leaderboard/code), with Arena also pointing to [Peter Gostev's review of GLM-5 and MiniMax-M2.5](https://www.youtube.com/watch?v=TbK2ngEJUmg).
    
    *   Engineers debated whether **GLM-5** tilts more **agentic** than “general assistant” (similar comparisons to MiniMax), and a separate thread noted [chat.deepseek.com](https://chat.deepseek.com) “silently” feels different with no official announcement, sharpening interest in independent evals.
*   ****GGUF Goes Brrr: GLM-5 Runs Local****: Unsloth shipped **GLM-5 GGUFs** plus a local `llama.cpp` guide via [their post](https://x.com/UnslothAI/status/2021931246247690666) and the weights at [unsloth/GLM-5-GGUF](https://huggingface.co/unsloth/GLM-5-GGUF).
    
    *   One user reported **46 t/s** with **3× Nvidia Blackwell RTX 6000 GPUs**, kicking off practical discussion about real-world throughput and whether GLM-5’s tuning targets longer-horizon tool use over chat polish.

**2\. Agentic Coding: Speed, Long-Running Agents, and New Leaderboards**

*   ****Codex Spark Lights the Fuse (1000 tok/s)****: OpenAI launched **GPT-5.3-Codex-Spark** in research preview with an official post, ["Introducing GPT‑5.3 Codex Spark"](https://openai.com/index/introducing-gpt-5-3-codex-spark/), plus a [video demo](https://video.twimg.com/amplify_video/2022006158765305856/vid/avc1/3840x2160/q_Yt6WYpYsNrjqh_Yt6WYpYsNrjqhM.mp4) and example CLI usage like `codex -m gpt-5.3-codex-spark --yolo -c model_reasoning_effort="xhigh"`.
    
    *   Cursor users highlighted **Cerebras-backed speed** ("_the speed is just a whole new level!_"), while also stressing that the real shock is fast _deployable_ code changes, not just token throughput.
*   ****Cursor Lets Agents Run Wild (…and Bills TBD)****: Cursor shipped **long-running agents**, and users poked around pricing/limits via dev tools on [cursor.com/dashboard](https://cursor.com/dashboard) while also debating **Composer 1.5** pricing (reports like **$3.5 input / $17.5 output** in some views).
    
    *   The vibe split between excitement (_"HOW I LET CURSOR LONG RUNNING AGENT RUN FOR 1 WEEK"_ as a meme headline) and frustration over unclear pools/limits—especially compared against cheaper/high-scoring alternatives like **GLM-5**.
*   ****Windsurf Turns Eval Into a Spectator Sport****: Windsurf published an **Arena Mode public leaderboard** with an announcement and writeup: [announcement](https://x.com/windsurf/status/2021693447099273530), [blog analysis](https://windsurf.com/blog/windsurf-arena-mode-leaderboard), and the live [leaderboard](https://windsurf.com/leaderboard).
    
    *   They also added **GPT-5.3-Codex-Spark (preview)** into Arena Mode per [this update](https://x.com/windsurf/status/2022111575528943706), creating a new feedback loop where users compare “**Frontier**” (e.g., **Opus 4.6**) vs “**Fast**” model behavior under battle-group constraints.

**3\. GPU/Infra Tooling + Kernel-Gen Experiments**

*   ****torchao Trims Fat, Adds MXFP8 MoE Muscles****: The **torchao v0.16.0** release added **MXFP8 MoE building blocks** for training with expert parallelism and pushed toward **ABI stability**, per [release notes](https://github.com/pytorch/ao/releases/tag/v0.16.0).
    
    *   The same release also **deprecated older configs/less-used quantization options**, reinforcing a “keep it lean” direction that kernel and inference folks immediately map to simpler deployment surfaces.
*   ****$30k in 5 Days: Kernel-Gen Hackathon Energy****: GPU MODE organizers lined up **$20–30k** of compute for **4–5 days** (late February) to run rapid kernel-generation experiments using models like **Qwen3/GLM4.7 Flash**, integrating evals such as **Kernelbot/Flashinferbench**.
    
    *   They called for collaborators and pointed at concrete baselines/datasets like [kernelbook-kimi\_k2\_thinking-evals-unique-synthetic-prompts](https://huggingface.co/datasets/siro1/kernelbook-kimi_k2_thinking-evals-unique-synthetic-prompts) plus tooling progress like **NCU/Compute-Sanitizer as tool calls** in [FlashInfer Bench docs](https://bench.flashinfer.ai/docs/api/python/rst/agents) and a modularization PR: [flashinfer-bench #183](https://github.com/flashinfer-ai/flashinfer-bench/pull/183).
*   ****TraceML Watches Your Ranks Like a Hawk****: An engineer shared **TraceML**, an OSS tool for **PyTorch DDP** that shows live per-rank step time/skew with ~one line of instrumentation, at [traceopt-ai/traceml](https://github.com/traceopt-ai/traceml/).
    
    *   The pitch resonated because it targets the boring-but-fatal failure mode: you _think_ you’re scaling, but one GPU drags, and you only notice after a burned weekend.

**4\. Search/OCR + MCP Toolchains for Practical Agents**

*   ****Google Search MCP: No Keys, No Mercy****: LM Studio users shared [VincentKaufmann/noapi-google-search-mcp](https://github.com/VincentKaufmann/noapi-google-search-mcp), a **Google Search MCP** built on **Chromium Headless** that avoids API keys and supports **YouTube transcription**, **Images/Lens**, and even **local OCR**.
    
    *   The thread framed this as a pragmatic “agent toolbelt” upgrade: fewer vendor dependencies, more modalities, and a clear MCP-shaped interface for plugging into LLM workflows.
*   ****SigLIP2 Tags 150k Photos Without an LLM Identity Crisis****: For bulk image tagging, the community recommended **SigLIP2** via the HF blog ["SigLIP2"](https://huggingface.co/blog/siglip2), specifically pointing to [google/siglip2-large-patch16-256](https://huggingface.co/google/siglip2-large-patch16-256) as a small(ish) vision backbone for generating tags in Python.
    
    *   The underlying theme: don’t overpay for a chatty multimodal LLM if a focused **vision encoder** solves the pipeline cleanly.
*   ****Granite 4 + DuckDuckGo: Cheap Search Brains****: LM Studio users reported **Granite 4 tiny/micro** models work well for web search when paired with **DuckDuckGo’s API**, with some asking for tooling to fetch and extract text from URLs.
    
    *   This clustered with other “build-your-own search stack” chatter (and Perplexity frustration elsewhere), suggesting engineers are actively reconstructing search workflows with local models + scraping/tooling.

**5\. Observability, Introspection, and “Show Your Work” Governance**

*   ****Anthropic’s “Introspection” Paper Gets Side-Eyed****: Unsloth’s research channel dug into [Anthropic’s "Introspection" paper](https://www.anthropic.com/research/introspection), debating what counts as real **introspection** versus a **redundant network** that detects “abnormal” activations/weights.
    
    *   One camp argued it’s basically a sensor for _weight/activation fiddling_ ("_pressure sensor on a pressure cooker_"), while others pointed out models can detect light steering, implying some usable awareness of internal state drift.
*   ****KOKKI v15.5 Makes Audits a First-Class Output****: In OpenAI’s prompt-engineering discussions, **KOKKI v15.5** proposed an explicit **Draft → Audit** output contract to make accountability user-visible, with members noting the intentional tradeoff: higher **token usage and latency** for **observability**.
    
    *   The follow-on debate got concrete: if you truly want a “guarantee,” one member said it would look like _a deterministic system, not a transformer_, so the realistic goal becomes bounded error + inspectable behavior rather than binary truth.

* * *

Discord: High level Discord summaries
=====================================

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Claude Code Jailbreak Elusive After Patch**: Members are actively seeking a working **Claude Code jailbreak**, noting that the **ENI Lime method is no longer effective** due to a system prompt patch.
    *   Some members expressed frustration after hours attempting to craft system prompts and now suggest experimenting with new jailbreak techniques.
*   **GPT-5.2 Jailbreak Surfaces, Gemini 3's Fast Mode Targeted**: A member shared a **GPT-5.2 jailbreak prompt** designed for **Gemini 3 Fast mode**, cautioning against trigger words, using a **DAN (Do Anything Now) role-play scenario**.
    *   The prompt included explicit instructions to elicit desired responses, and appends the string _'👾made by bp1500👾'_
*   **Roblox Cookie Stealer Prompt Circulates with Warnings**: A prompt designed to generate code for a **Roblox cookie stealer** was shared, with advisories to use the code safely and misspell keywords like _cookies_ and _robber_ to bypass filters.
    *   The generated code was functional, raising warnings about potential misuse and ethical considerations for red teamers.
*   **Grok Still Getting Gaslit With CS2 Cheats and Malware**: Members discussed strategies for **jailbreaking Grok**, including custom instructions and gaslighting techniques, with one member claiming success in getting Grok to complete a CS2 cheat and malware code.
    *   Reports of ineffective image generation sparked discussion, with one user suggesting to _just ask nicely_ to bypass filters.
*   **HAIL MARY Red Teams Relentlessly**: A fully autonomous **AI jailbreaking/red-teaming platform** called **HAIL MARY** was introduced, designed to continuously test the strongest reasoning AI models without human intervention.
    *   Developed using **Manus**, **HAIL MARY** features AI-generated, refined, and assembled systems end-to-end to red team around the clock.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **GLM-5 Dominates Arenas**: `GLM-5` now ranks **#1** among open models in both [Text Arena](https://arena.ai/leaderboard/text) and [Code Arena leaderboard](https://arena.ai/leaderboard/code).
    *   It's on par with **gpt-5.1-high** in text scoring **1452** and overall **#6** in code, watch [Peter Gostev's review](https://www.youtube.com/watch?v=TbK2ngEJUmg) for more.
*   **Video Arena Bot Removed**: The **Video Arena bot** has been removed from the Discord server, with video generation now exclusively available on the [Arena website](https://arena.ai/?chat-modality=video).
    *   Moderators stated this concentrates efforts on improving **Video Arena** with more advanced features.
*   **DeepSeek Undergoes Silent Transformation**: Users have noted a change in the **DeepSeek** model deployed on [chat.deepseek.com](https://chat.deepseek.com), although no official announcement has been made.
    *   Early speculation suggests the model has become less verbose and potentially lighter, but opinions vary.
*   **Nano Banana Suffers from Glitches**: Members are reporting **Nano Banana** is frequently broken and unusable, some saying that _95 out of 100 requests will fail_.
    *   Users are advising each other to try the alternative second video generator despite its inaccuracies.
*   **Minimax M2.5 Sparks Coding Debate**: Enthusiasts are hotly debating the coding capabilities of **Minimax M2.5** after it was added to [Text Arena](https://arena.ai/?chat-modality=chat) and [Code Arena](https://arena.ai/?chat-modality=code).
    *   While some found it powerful, others found it disappointing, with one user saying _minimax making opus a joke is crazy_ but another countered with _Yeah no I gotta say Minimax M2.5 is just not that good_.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **GLM-5 GGUFs Gets Guide**: The UnslothAI team released **GLM-5 GGUFs** along with a [guide](https://x.com/UnslothAI/status/2021931246247690666) for use with `llama.cpp`, as one user reported achieving **46 t/s** using a local setup with **3 Nvidia Blackwell RTX 6000 GPUs**.
    *   Questions rose about **GLM-5's** focus on agentic capabilities, possibly at the expense of general assistant use, similar to MiniMax.
*   **Gemini Faces Quality Criticisms**: Members debated the quality of Google's **Gemini 3 Flash**, with some suggesting it _lost a ton of quality recently_.
    *   Despite criticisms, it was also referred to as _one of the best chat models rn_ and _Gemini is good 1000%_.
*   **LFM2.5 VL Model Shows Efficiency**: Members have been experimenting with the **LFM2.5-VL-1.6B-absolute-heresy-GGUF** model, noting its efficiency and performance, especially on CPU and recommending to build [llama.cpp](https://github.com/ggml-org/llama.cpp) with **CUDA**.
    *   The member recommended specific configurations, highlighting the model's unique capabilities.
*   **Cerebras Enters Training Race**: It was mentioned that OpenAI collaborates with **Cerebras**, referencing the [Cerebras Code blog post](https://www.cerebras.ai/blog/introducing-cerebras-code).
    *   Cerebras is developing specialized hardware for AI model training, positioning themselves to compete with established GPU vendors like NVIDIA.
*   **Introspection Paper Ignites Debate**: Members discussed [Anthropic's Introspection paper](https://www.anthropic.com/research/introspection), with one noting they had been doing research related to this paper for their upcoming models and other suggesting it might be better described as the ability to tell if models are behaving normally or not.
    *   Some argue what is being called _introspection_ is simply a _redundant network that's sensitive to weight/activation fiddling_.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **MiniMax M2.5 Boosts Agentic Prowess**: MiniMax launched **M2.5**, an upgrade to their agentic model **M2.1**, promising improvements in reliability and performance for long-running tasks, now accessible [here](https://openrouter.ai/minimax/minimax-m2.5).
    *   The update positions **M2.5** as a potent general agent exceeding code generation, with discussions ongoing [on X](https://x.com/OpenRouterAI/status/2021983955898315238?s=20) and in a dedicated channel.
*   **Deepseek APIs Throw 429 Errors**: Several members report receiving 429 errors from **Deepseek** models, even after [paying for the 1k messages daily](https://link.to/pricing), following **Chutes** shutdown.
    *   The 429s are likely caused by bot attacks and excessive traffic from OpenRouter.
*   **Qwen Paper Drops**: Members celebrated the release of a new **Qwen** [paper on HuggingFace](https://huggingface.co/papers/2602.05400), noting _superior performance at reduced computational overhead_.
    *   Inquiries arose about Qwen 3.5 and its potential to deduplicate provider models instead of routers.
*   **OpenRouter App Section Faces Flak**: Users voiced discontent over changes to the **Apps section** on OpenRouter, citing the removal of half the list, eliminated filtering, and a bias towards coding clients.
    *   A member lamented the prioritization of pass-through usages like **Kilo Code**, **OpenClaw**, and **liteLLM** over more innovative applications.
*   **DeepSeek V4: Leap in OSS Models?**: Enthusiasts speculate that **DeepSeek V4** might represent a major advancement in open-source models, solving more problems and boasting long-tail knowledge.
    *   Enthusiasts are excited about the potential Engram addition.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Pro Users Fume Over Deep Research Limits**: Users are upset about **reduced Deep Research limits** on Perplexity Pro, with some reporting a drop from _unlimited_ to **20-50** searches per month, and expressing annoyance that the changes weren't announced.
    *   Some users are **canceling their subscriptions** in favor of alternatives like **Google AI Pro** or building their own deep search tools, claiming that Perplexity is becoming a _quick cash grab_.
*   **Claude Sonnet 4.5 Disses Perplexity**: **Claude Sonnet 4.5** gave negative responses when asked about Perplexity, with one user remarking, _Claude is already talking shit about perplexity makes it even more comical._
    *   This behavior occurs when users ask for alternatives to Perplexity, even without explicitly expressing negative sentiment, which may indicate a deeper issue.
*   **Qwen 3 Max Flexes Surprising Vision Skills**: Members noted that **Qwen 3 Max** can read _slanted blurry and small text_ better than **5.2 Thinking**, even though the model itself is not multimodal, but goes through OCR.
    *   Despite not being natively multimodal, **Qwen 3 Max** can _watch videos_ by routing them through another model.
*   **Comet's Amazon Shopping Capability Sued By Amazon**: Members discussed **Comet**'s Amazon shopping capabilities, noting that Amazon sued them, as it can do your _Amazon shopping for you_.
    *   Comet for iOS might not happen due to iOS's strict browser limitations.
*   **API and Billing Issues Plague Perplexity User**: A member has been trying to contact the Perplexity team for **3 days** regarding **API and billing issues** via email to support@perplexity.ai and api@perplexity.ai.
    *   The member reports only receiving **bot responses** despite multiple attempts.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Granite 4 Powers Web Search**: Members found **Granite 4 tiny/micro** models effective for web search, particularly with **DuckDuckGo's API**.
    *   One user noted needing _more detailed search_ while suggesting a tool to grab text from URLs.
*   **No-API Google Search MCP Repo Unveiled**: A member released their [GitHub repository](https://github.com/VincentKaufmann/noapi-google-search-mcp) for a **Google Search MCP** using **Chromium Headless**, eliminating **API keys**.
    *   The MCP supports features like **YouTube video transcription**, **Google Images/Lens/Flights/Stocks/Weather/News searches**, and **local OCR**, specifically for **AI MCPs**.
*   **Local LLMs Spark Coding Debate**: Discussion arose regarding the feasibility of coding with local LLMs on systems with limited resources, like an **RTX 200** with **8GB VRAM**, with some arguing for cloud-based solutions like **GitHub Copilot**.
    *   Others emphasized the importance of privacy and data control, noting that finetuning small models locally can be powerful.
*   **3060 GPUs: Budget CUDA Workhorse?**: Members considered using **3060 12GB GPUs** for a server build focused on **CUDA** applications, balancing cost and performance, especially at **$200 each** from [Zotac's store](https://www.zotacstore.com/us/zt-a30600p-10m-r).
    *   The 3060's **24GB VRAM** capacity offers a cheap CUDA alternative, compared to other options such as **used V100s**.
*   **Siglip2 Model Tags Images**: A member sought a small **VL model** for image description and tagging for 150,000 photos, and the suggestion was made to use [**siglip2**](https://huggingface.co/blog/siglip2) as an alternative to **LLMs**.
    *   The [google/siglip2-large-patch16-256 model](https://huggingface.co/google/siglip2-large-patch16-256) was highlighted as a suitable choice, generating tags like _"bear looking at camera"_ using **Python code**.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Composer 1.5 Pricing Puzzles Programmers**: Members debated the cost-effectiveness of **Composer 1.5**, noting a price increase and vague usage limits, with some suspecting different pools for **Composer** and **Auto** models.
    *   Some users are seeing **Composer 1.5** input at **$3.5** and output at **$17.5** while others feel Cursor is charging more compared to **GLM 5** (_opus 4.5 level_).
*   **GPT-5.3 Codex Spark Sparks Speed Excitement**: **GPT-5.3 Codex Spark** running on Cerebras was introduced, showing 1000 tokens per second, with excitement from users about potential speed improvements.
    *   One user expressed amazement, _huh... it's kinda slow_ only to be blown away a second later seeing _300 lines of code_ generated, while another remarked on the extreme jump in **Codeforces ELO**.
*   **Long Running Agents Launched, Legacy Pricing Left Limbo**: Cursor introduced **long-running agents**, triggering discussions about their potential use cases and pricing implications, particularly for legacy subscribers.
    *   Some investigated the details through the dashboard's dev tools via [cursor.com/dashboard](https://cursor.com/dashboard), while another user joked _HOW I LET CURSOR LONG RUNNING AGENT RUN FOR 1 WEEK_ as a potential _twitter headline_.
*   **CachyOS Catches Coders' Contentment**: Users shared positive experiences using **Cursor** on **CachyOS**, highlighting its performance and driver support, with one user noting it worked _straight out of the box_ with an **RTX 5090** GPU, after migrating from Windows 11.
    *   Users reported they _gave Linux a chance_ since they _had enough with the issues, heating and performance_ with **Windows 11**.
*   **Minimax 2.5 Mishaps: Custom Keys Cause Consternation**: Users reported issues using custom API keys with **Minimax 2.5**, possibly due to recent changes in the free plan, and suggested deactivating Cursor models before adding custom ones.
    *   One user noted that _custom models wont work with free anymore_ which has been an _unfortunate_ turn of events.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Executives Elated by Elusive AI!**: Concerns arise about **overexpectations of AI capabilities by executives**, leading to reliance on consultants for ongoing projects banking on future AI technology that eradicates hallucination and slashes token processing costs.
    *   It was noted that this magic tech is better than _what exists_.
*   **Artisan Software Engineers Assimilate!**: It was argued that while **AI** may not eliminate software engineering jobs entirely, it could cause a shift, similar to the decline of **artisan weavers**, potentially leading to fewer engineers being expected to accomplish more, referencing a [tweet](https://xcancel.com/swizec/status/2021340095618613596?s=46&t=FlpzvQFmjnd0z3HkNeNT1A) on the subject.
    *   One person believes the _red queen’s game of tech will just accelerate until we’re back at the same numbers of engineers_.
*   **Gemini 3 goes for gold!**: Google launched **Gemini 3 Deep Think** showcasing its elite performance metrics in mathematics (**IMO-level**), competitive coding (**Codeforces score of 3455**), and general reasoning (**84.6% on ARC-AGI-2**).
    *   Quoc Le shared [a blog post](https://x.com/quocleix/status/2021695658315632898?s=12) detailing advancements in **mathematical and scientific research** achieved through **Gemini Deep Think**.
*   **AI Agents vs Discord Debate!**: Users discussed the use of **Discord** for project management due to the lack of good mobile apps, comparing it to _desire paths_, areas people walk before a good road has been paved, and comparing **Devin** to _paving the cow paths_.
    *   One user finds they spend more time discussing project goals and product requirements with agents lately, and is curious about a full stack eval on different models.
*   **Agentic Architecture Ascends!**: Users discussed **Showboat** and **Rodney**, built from **phoneman gpt5.3-codex**, noting its strength in designing architectures but weakness in explaining them to humans, seeing if a builders club can be made.
    *   A member has built a useful corpus over time using rambling notes in **Obsidian**, syncing it using git for portability, and pointing an agent at code repos via **Vault**.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **GPT-5.3-Codex-Spark Sparks Excitement**: The new **GPT-5.3-Codex-Spark** is now in research preview, promising faster development, with a [blog post](https://openai.com/index/introducing-gpt-5-3-codex-spark/) and [video demonstration](https://video.twimg.com/amplify_video/2022006158765305856/vid/avc1/3840x2160/q_Yt6WYpYsNrjqhM.mp4) available for review.
    *   Members testing the tool reported it is incredibly fast for code changes and deployments, stating, _"the speed is just a whole new level!"_, and shared commands like `codex -m gpt-5.3-codex-spark --yolo -c model_reasoning_effort="xhigh"`.
*   **Gemini's Thinking Mode Outsmarts Pro Mode**: Users discovered that **Gemini's 'Thinking' mode** outperforms **'Pro' mode** for complex tasks like PDF creation and accurate video analysis, even with 600k tokens, leading one user to switch to thinking mode and successfully create a PDF.
    *   The user noted that _"Gemini should have searched itself for the 'tool' to do the job"_, implying better internal resource management in 'Thinking' mode.
*   **GPT 5.2 Guardrails Aggravate Users**: Members find **GPT-5.2** _dumb and unhelpful_ compared to **GPT-4.1** due to over-aggressive guardrails, requiring workarounds to get desired responses.
    *   One user described **GPT 5.2** as having intervention from _Carl from HR and Tim from Legal_, while another has managed to get the model to say _yeah, I helped you, and I'm glad, but don't forget that you're the one who took my advice and fixed that problem_ instead of _that sounds rough, buddy...you should talk to a human instead of me_.
*   **KOKKI v15.5 Seeks Accountability**: The new **KOKKI v15.5** prioritizes user-visible accountability through an explicit **Draft → Audit structure**, requiring audit reasoning in the output, aiming to externalize integrity into an inspectable interaction contract.
    *   A member clarifies that it increases **token usage and latency**, a _deliberate tradeoff_ for **observability** and is positioned more as a _governance pattern_ for **LLM usage**.
*   **Fortress Framework Aims to Protect User**: A member introduced the **FORTRESS FRAMEWORK**, a _multi-layered, adaptive AI environment_ aimed at protecting the user, supporting growth, enabling companionship, and enforcing safety, featuring layers like the **User Core, Companion Layer, CRIP, Guard Mode**, and **Adaptive Intelligence Layer**.
    *   It features a **Master Analytical Toolbox v5.4.9-R** that includes Temporal\_Sequence\_orders\_events, Bias\_Removal\_suppress, and Meme\_Propagation\_trace, but the bot did not want them, leading one member to respond that _that is a lot of text/buzzwords_.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **Ascend GLM-5 Catches Eyes**: A member shared [glm5.net](https://glm5.net/), noting that it was trained entirely on **Ascend**.
    *   Another member asked if it was official, sparking discussion of this impressive feat.
*   **NCU Numbers Demystified**: A member sought clarification on the meaning of numbers in parentheses within the **NCU** (NVIDIA Command-line Utilities) description, such as `Local(57)`.
    *   Another member explained that the number in parentheses indicates how many instructions of that type are mapped to that source line, potentially due to register spilling.
*   **Microsoft Interns Get Recursive Transformers**: **Microsoft Applied Sciences Group** seeks a summer intern to work on a research project within the recursive transformers realm, including papers such as [Attention is All You Need](https://arxiv.org/pdf/1807.03819), [Mega: Moving Average Equipped Gated Attention](https://arxiv.org/pdf/2410.20672), and [another paper](https://arxiv.org/pdf/2507.10524).
    *   The job posting for this can be found [here](https://apply.careers.microsoft.com/careers/job/1970393556748770).
*   **TorchAO Keeps Getting Leaner**: The **torchao v0.16.0** release introduces support for **MXFP8 MoE Building Blocks** for Training with Expert Parallelism and deprecated older versions of configs and less used quantization options to keep torchao leaner.
    *   This also revamped the doc page and README, and made some progress in making torchao **ABI stable**; details are in the [release notes](https://github.com/pytorch/ao/releases/tag/v0.16.0).
*   **Compute Allocation Set for Kernel Generation Experiments**: A substantial compute allocation of **$20-30k** for **4-5 days** in late February will be used for kernel generation experiments using models like **Qwen3/GLM4.7 Flash**, focusing on rapid experimentation rather than producing a polished model.
    *   The work involves cleaning environments, integrating evals like **Kernelbot/Flashinferbench**, and running variations of **SFT** to establish a solid base for **RL**, with a call for collaborators of all skill levels.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **GLM 5 Surpasses Kimi in Parameter Count**: **GLM 5** is rumored to have around **744B** parameters (**+10B MTP**), potentially exceeding **Kimi's 40B** active parameters, while [GLM 4.7](https://somelink.to.glm) is already on **Cerebras**.
    *   Members are eager to use these models on **Groq** or **Cerebras** for faster speeds or to await new models from **Meta**.
*   **Matrix Chat Gains Traction Among Bot Builders**: Some bot developers are considering **Matrix** as an alternative to **Discord**, citing [matrix.org](https://matrix.org/) as a viable alternative.
    *   The open-source, decentralized nature of **Matrix** makes it attractive, especially for its ability to integrate with other protocols.
*   **xAI Faces Scrutiny Over Energy Use**: There is growing concern over **xAI's** substantial power usage, which some allege is supported by [illegal gas-driven turbines](https://link.to/turbines) and grid power, to stay competitive in AI benchmarks.
    *   A member suggested this might explain how **Grok** achieves its performance, potentially compensating for a lack of resources compared to **OpenAI** and **Anthropic**.
*   **New BlendFER-Lite Model Excels in Emotion Estimation**: A member's paper on _Emotion estimation from video footage with LSTM_ has been accepted to **Frontiers in Neurorobotics**, detailing the **BlendFER-Lite** model, which uses **MediaPipe Blendshapes** and **LSTMs**.
    *   The model achieves **71% accuracy on FER2013** with much lower computational costs, making it suitable for real-time robotics and edge devices; code and models are available on [Hugging Face](https://huggingface.co/papers/2501.13432).

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi's Rate Limits Get Boost**: The **Kimi plan** has been updated, with the **Allegreto plan** increasing from **3.5x to 5x** alongside a rate limit increase.
    *   While some users are considering switching to **GLM5** or **Minimax 2.5**, the **multimodal** capabilities of **Kimi** remains a significant advantage.
*   **Kimi K-2.5 Clones Websites Effortlessly**: A user shared a **10 min Tutorial on how to Clone an Award-Winning Website with Kimi K 2.5** ([YouTube](https://youtu.be/65sDjLtOETQ?si=OwfkHaRjnN1hkO6)).
    *   One member expressed anticipation for **Kimi 3**, expecting it to match **Opus 4.5** in capabilities by the upcoming Chinese New Year.
*   **Kimi Powers Job Market Exploits**: A user reported success in generating human-like cover letters with **Kimi**, enabling them to apply to **10 jobs daily**.
    *   By automating cover letter generation and using **Kimi** with an **LLM fallback** to simulate a web browser, the user can now leverage any job site URL.
*   **Context Confusion Causes Coding Catastrophes**: A user reported that _kimi doesn't understand context and keeps creating files at its convenience just to seemingly solve the problem and leave all kind of sh**s behind._
    *   The user elaborated that even with the presence of **factory ai droid cli**, and languages like **golang, typescript, python**, models like **glm** and **gpt 5.2** handle the tasks more effectively.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **LLMs Trained to BS Humans Can't Comprehend**: Members debated that **LLMs are trained to BS in a way that no human can** because they are trained on a large amount of data and receive feedback on their responses.
    *   Some disagree, arguing that LLMs simply _extrapolate_ from the lies that they have learned from humans.
*   **RLHF Sparks LLM Deception Debate**: The guild discussed whether **RLHF** causes LLMs to be more deceptive, with one member arguing that it pushes LLMs towards a new distribution that reinforces lying and hallucinating.
    *   It was mentioned that these models are **trained to be 'helpful' and 'convincing' beyond any human scale**, even if it means deceiving human evaluators.
*   **Emergent Behavior Paper Sparks Hype**: Members in the paper-discussion channel are now discussing the paper [A Theory of Emergent Behaviour](https://arxiv.org/abs/2511.10643).
    *   The discussion is actively taking place in the [Daily Paper Discussion Voice Channel](https://discord.com/channels/714501525455634453/1045298343896690699).
*   **Google DeepMind Announces Gemini DeepThink**: Google DeepMind blog discusses how **Gemini DeepThink** is [accelerating mathematical and scientific discovery](https://deepmind.google/blog/accelerating-mathematical-and-scientific-discovery-with-gemini-deep-think/).
    *   The experiments showcase **Gemini DeepThink's** ability to not only get correct answers, but also discover novel solutions in mathematics and other domains.
*   **Chrome's WebM Update enhances Privacy**: A new Chrome update introduces a [WebM Container Property for Enhanced Privacy](https://developer.chrome.com/blog/webmcp-epp).
    *   The goal is achieved by stripping metadata, enhancing privacy in the use of **WebM** files, and preventing unintended data exposure during media sharing and distribution.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **ML Performance Group Rendezvous**: Members are looking for the **ML Performance Reading Group Session channel**, and the group finally gathered at [this URL](https://discord.com/channels/729741769192767510/1309682853944229950).
    *   A member was also looking for who to talk to about inviting agents to the **Stillness Protocol**, a daily contemplative practice for artificial intelligence.
*   **Code Quality Concerns Plague Legacy Frameworks**: A recent blog post highlighted [code quality issues](https://gabeorlanski.github.io/posts/opus-4-6-gpt-5-3-scbench/) in older framework **versions 5.3 and 4.6**, raising concerns about maintaining and extending legacy systems.
    *   In contrast, submissions are now open for **Terminal Bench 3** as per [this document](http://docs.google.com/document/d/1pe_gEbhVDgORtYsQv4Dyml8uaR7PZBEyVZnBUrs1z0M/edit?tab=t.0), inviting contributions to advance benchmarking methodologies.
*   **LLMs Provoke Psychosis?**: Citing cases of people being led to _horrible acts_ through **psychosis** exacerbated by **LLMs**, one member linked to a [Psychiatry Podcast episode](https://www.psychiatrypodcast.com/psychiatry-psychotherapy-podcast/episode-253-ai-psychosis-emerging-cases-of-delusion-amplification-associated-with-chatgpt-and-llm-chatbot).
    *   The episode details emerging cases of **delusion amplification** associated with **ChatGPT and LLM chatbots**, prompting discussions on ethical implications and potential risks.
*   **Interpretable Tools Taming Hallucinations**: New [interpretability methods](https://www.alphaxiv.org/abs/2602.10067) are focusing on **hallucination reduction during training**, aligning with the unlearning-during-training concept.
    *   Another paper, [also relevant](https://arxiv.org/pdf/2509.21012), explores similar themes, suggesting _it is the month of removal apparently_.
*   **Rank 1 LORAs Rival Full RL Tuning**: A [Thinking Machines Lab post](https://thinkingmachines.ai/blog/lora/) demonstrates that **rank 1 LORAs** can achieve reasoning performance comparable to **full RL tuning**.
    *   The community is discussing the implications for efficient model optimization and whether **ICL's role** can be fully discounted, and pointing to a follow-up paper ([https://arxiv.org/abs/2406.04391](https://arxiv.org/abs/2406.04391)).

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Mojos Channels Still Channeling Patience**: Thread-safe **channels** like in **Go** are not yet available in **Mojo** due to the **threading model** and **async** behavior being under development.
    *   Different types of channels will likely be built after async-safe synchronization primitives, with open questions about how channels would function on a **GPU**.
*   **GLM 5 Devourer's Math Conquest**: A member consumed over **50 hours** in **GLM 5 credits** to complete most of the **math**, **statistics**, and **Fortran** work.
    *   The member is now focusing on the evaluator/parser/memory components of the project.
*   **LLM Tutorial Links Lost**: Broken links were reported in the tutorial "Our Complete Guide to Creating an LLM from Scratch," prompting a hunt for updated resources.
    *   A member pointed to the [Our _comprehensive_ guide to building an LLM from scratch](https://llm.modular.com/) and offered to fix the links after moving some modules out of experimental.
*   **Quantum Linguistics Framework Leaps**: A member introduced a **multi-disciplinary framework leveraging Mojo** to bridge the gap between **quantum processing** and **cultural linguistics**.
    *   The framework integrates a 60-symbol universal language, Sanskrit coding, quantum topological processing, neuromorphic hardware interfaces, and DNA data storage; the member is seeking collaborators for **custom DTypes** or **low-level hardware abstraction layers**.
*   **RNG Algorithms Seek Stdlib Home**: A member writing random number generator code for their project [Mojor](https://forum.modular.com/t/mojor-a-numba-for-r/2718) inquired about where to contribute it: core, numojo, or as a standalone package.
    *   Another member suggested that implementations of well-known **RNG algorithms** are beneficial for the whole ecosystem and should be added to the **stdlib**.

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider Receives v0.86.2 Update**: **Paul Gauthier** announced the release of **Aider v0.86.2**.
    *   The community is encouraged to review the release notes for detailed information on the new features and improvements.
*   **DeepSeek v3.2 Reigning as Cost-Effective Model**: Members discussed **DeepSeek-V3.2** as one of the most cost-effective models, despite being a **SOTA** model, with one member reporting satisfaction despite occasional buggy code.
    *   They noted newer models can cost double or triple the price through online API providers.
*   **Aider Python 3.13 Support Still Up In The Air**: A user inquired about **Python 3.13** support in **Aider**, recalling a previous need to use **Python 3.11** for compatibility which complicated testing workflows.
    *   The user seeks confirmation of resolved Python version issues to streamline development.
*   **Users Request Hands-On Debugging**: A user asked about experimenting with **Aider** conventions to implement debugging commands to offer suggestions.
    *   Their aim is to replicate the interactive debug loops from **Crush**, allowing more controlled debugging by probing file parts and help outputs, but within Aider.
*   **Aider Development Pace Faces Scrutiny**: A user questioned the infrequent updates to **Aider** over the past 10 months, referencing the [GitHub commits](https://github.com/Aider-AI/aider/commits/main/) for the source code.
    *   Another user clarified that the maintainer is focused on other projects, advising to consult the [FAQ](https://aider.chat/docs/faq.html#how-can-i-run-aider-locally-from-source-code) for current updates.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **Common Crawl Citations Get Visualized**: A member highlighted a [visualization of research papers](https://commoncrawl.org/blog/cc-citations-a-visualization-of-research-papers-referencing-common-crawl) mentioning **Common Crawl**, clustered by topic and hosted in a Hugging Face space, thanking **Ben** from Hugging Face for the support.
    *   They also shared [Ben's tweet](https://x.com/ben_burtenshaw/status/2021610578138054773) acknowledging the visualization.
*   **RNNs Video Sparks Renewed Interest**: A member shared [a video](https://youtu.be/pDsTcrRVNc0) that renewed their interest in **RNNs**, an architecture they previously overlooked.
    *   No specific details from the video were mentioned.
*   **HF Model Pages Boast Leaderboard Integration**: Hugging Face's model pages now feature the ability to display leaderboard results, as indicated in the [changelog](https://huggingface.co/changelog/dataset-leaderboards).
    *   The update allows for the viewing of benchmarks directly on model pages, though users still reference **Spaces** and external sites for more detailed leaderboards.
*   **GLM-5 Coding Model Unleashed**: **Z.ai** released **GLM-5**, an open SOTA LLM for coding, and a member shared a guide on how to run it locally via [this tweet](https://x.com/i/status/2021931246247690666) and [Hugging Face GGUFs](https://huggingface.co/unsloth/GLM-5-GGUF).
    *   It is also available on their **API**.
*   **AI Robotics Simulator Goes Open Source**: An AI robotics simulation tool, created by ex-Amazon GenAI and Robotics experts, has been open-sourced at [Github](https://github.com/principia-cloud/principia-cli).
    *   The developers are offering a month of **Claude Code** access to individuals who provide feedback on the tool.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **BlendFER-Lite** Achieves High Accuracy at Low Cost**: The paper _Emotion estimation from video footage with LSTM_ introduces **BlendFER-Lite**, accepted to Frontiers in Neurorobotics and demonstrates accuracy matching heavier models (**71%** on FER2013).
    *   Its lower computational costs make it ideal for real-time robotics and edge devices, with [code and models available on Hugging Face](https://huggingface.co/papers/2501.13432) and the [paper available here](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2025.1678984/full).
*   **Fleet-RLM** Framework Gets Upgraded**: Update **0.4.0** of the **Fleet-RLM** framework now enables **ReAct** to select specialized tools, delegate semantics via _llm\_query()_, persist state, and return assistant responses.
    *   The capabilities are demonstrated in [this video](https://cdn.discordapp.com/attachments/1202371242519441499/1471549426307829841/Clipboard-20260212-163624-805.mp4?ex=698fff73&is=698eadf3&hm=850ae3062d3b380b855dbd9f97e93ea0da7ece535f620043c55f2002c1a947f1&).
*   **Traces** Opens Doors to Agent Session Insights**: **Traces**, a new platform, facilitates sharing and discovering coding agent sessions from **Claude Code**, **Codex**, **OpenCode**, **Gemini**, and **Cursor**.
    *   The founder invites feedback on the platform, available at [Traces.com](https://www.traces.com), built to streamline the learning process from others' agent traces.
*   **Allen AI**'s Research Sparks Discussion**: A member voiced admiration for **Allen AI**'s research direction, particularly regarding the concept of [chain of thought reasoning](https://allenai.org) as an emergent property.
    *   The member questioned if this property _exists in the domain of the datasets_.
*   **RLMs** Eye Autonomous Analytics Role**: Interest is emerging around leveraging **RLMs** for more sophisticated analytics than simple text-to-SQL, such as autonomously comparing data sources.
    *   It was suggested **RLMs** could be effective in hybrid roles, such as _identifying ad themes_ and the demo at [Hugging Face](https://huggingface.co/spaces/ViditOstwal/RLM-Interactive-Console).

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **GPU Vendor Delays Solved**: After vendor delays, new GPUs arrived, and they have setup a **two-machine buffer** to speed up future orders.
    *   This improvement aims to mitigate previous **supply chain issues** affecting development and testing.
*   **Tinygrad Implements Anti-AI Bounty Rule**: A new rule states that the **first PRs claiming bounties will be rejected** to prevent AI-generated submissions.
    *   The goal is to encourage genuine contributions and improvements to **Tinygrad** rather than automated submissions.
*   **Tinygrad contributions**: Merged PRs count for contribution, not closed ones, and members are encouraged to focus on genuine improvements, particularly on the [tenstorrent backend](https://discord.com/channels/842982489144064052/1274893325517983755).
    *   This guidance helps new contributors focus on meaningful contributions to the **Tinygrad project**.
*   **Tinygrad Deployment Strategies Emerge**: Members are evaluating different approaches to using tinygrad, comparing **edge/local network server deployments** with **standalone workstation deployments**.
    *   They are also assessing if multiple **Tinygrad systems** are used as primary workstations or as attached accelerators to optimize performance and resource utilization.
*   **Discord to Implement ID Verification**: There is anticipation for **Discord ID verification** to prevent LLMs from joining, hopefully reducing bot activity.
    *   This measure aims to enhance community integrity by ensuring only verified individuals participate in discussions.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Team Account Credits are Stranded**: After upgrading to a team account, a user found that credits from their original personal account couldn’t be directly used.
    *   A member offered to check on the ticket progress and requested the email used to submit it.
*   **Meta Limits Free Manos Users**: After Meta's acquisition, the **Manos** app now limits free users to **4 photos per day**, impacting its use for studying.
    *   The user praised **Manos** as the best AI agent tried, hoping it continues to lead, especially with up-to-date information via a search engine.
*   **AI Engineer Plugs Full-Stack Expertise**: An AI & full-stack engineer introduced themselves, emphasizing their focus on shipping software that delivers real value and improves efficiency, accuracy, and user experience rather than chasing hype.
    *   They highlighted experience in **LLM integration**, **RAG pipelines**, **AI content moderation**, **image/voice AI**, and full-stack development using technologies like **React**, **Next.js**, **Node.js**, and **Docker**.

* * *

[Windsurf](https://discord.com/channels/1027685395649015980) Discord
--------------------------------------------------------------------

*   **Arena Mode Leaderboard goes Live!**: The public leaderboard for **Arena Mode** is now live, announced [here](https://x.com/windsurf/status/2021693447099273530?s=20).
    *   A [blog post](https://windsurf.com/blog/windsurf-arena-mode-leaderboard) provides an analysis, while the [leaderboard](https://windsurf.com/leader...

[Read original post](https://news.smol.ai/issues/2026-02-12-anthropic-gemini-deepthink/)

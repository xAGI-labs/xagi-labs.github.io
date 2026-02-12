---
title: "Z.ai GLM-5: New SOTA Open Weights LLM"
date: "2026-02-11T05:44:39.000Z"
description: "**Zhipu AI** launched **GLM-5**, an **Opus-class** model scaling from **355B to 744B parameters** with **DeepSeek Sparse Attention** integration for cost-effici..."
original_link: "https://news.smol.ai/issues/2026-02-11-glm-5/"
---

**We have Opus 4.5 at home.**

> AI News for 2/10/2026-2/11/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**256** channels, and **7988** messages) for you. Estimated reading time saved (at 200wpm): **655** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

As we mentioned [yesterday](https://news.smol.ai/issues/2026-02-10-qwenimage-seedance-2), China open model week is in full swing. Today was Z.ai’s turn to launch their big update before the Big Whale. Per [the GLM-5 blogpost](https://z.ai/blog/glm-5):

*   **Opus-class, but not a 1T super model like [Kimi or Qwen](https://news.smol.ai/issues/25-09-05-1t-models).** Compared to GLM-4.5, GLM-5 scales from 355B parameters (32B active) to 744B parameters (40B active), and increases pre-training data from 23T to 28.5T tokens.
    
    *   GLM-5 also integrates [DeepSeek Sparse Attention (DSA)](https://news.smol.ai/issues/25-12-01-deepseek-32), significantly reducing deployment cost while preserving long-context capacity. (prompting comments on [the DeepSeek total victory in open model land](https://x.com/eliebakouch/status/2021577794480644216?s=46))
*   Decent scores on internal coding evals and the standard set of frontier evals, notably claiming SOTA (among peers) on BrowseComp and top open model on [Vending Bench 2](https://andonlabs.com/evals/vending-bench-2).
    
*   Similar to [Kimi K2.5](https://www.latent.space/p/ainews-moonshot-kimi-k25-beats-sonnet), they are also focusing on Office work (PDF/Word/Excel), just being much less flashy about it, but
    
    ![](https://substackcdn.com/image/fetch/$s_!E06s!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa53ffe01-36c6-4756-b40c-b004624413ce_2442x1712.png)
    

However it is still pretty good, as GDPVal-AA, the defacto “white collar work” benchmark, does rank it above Kimi K2.5:

[articificial analysis](https://x.com/ArtificialAnlys/status/2021678229418066004/photo/1)

![](https://substackcdn.com/image/fetch/$s_!oOz6!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8fb42dea-73b0-48fc-84f9-1345076c762e_3600x2072.png)

A big part of the [Reddit conversations](https://www.reddit.com/r/LocalLLaMA/comments/1r26zsg/zai_said_they_are_gpu_starved_openly/) centered around how they are running into compute constraints on their inference service:

![](https://substackcdn.com/image/fetch/$s_!lJUu!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9d403988-426e-4424-9796-028cfddf5786_1736x1770.png)

* * *

AI Twitter Recap
================

**Zhipu AI’s GLM-5 release (Pony Alpha reveal) and the new open-weight frontier**

*   **GLM-5 launch details (and what changed vs GLM-4.5)**: Zhipu AI revealed that the previously “stealth” model **Pony Alpha** is **GLM-5**, positioned for “agentic engineering” and long-horizon tasks ([Zai\_org](https://twitter.com/Zai_org/status/2021638634739527773); [OpenRouterAI](https://twitter.com/OpenRouterAI/status/2021639702789730631)). Reported scaling: from **355B MoE / 32B active** (GLM-4.5) to **744B / 40B active**, and pretraining from **23T → 28.5T tokens** ([Zai\_org](https://twitter.com/Zai_org/status/2021638634739527773)). Key system claim: integration of **DeepSeek Sparse Attention** to make long-context serving cheaper ([scaling01](https://twitter.com/scaling01/status/2021627498451370331); [lmsysorg](https://twitter.com/lmsysorg/status/2021639499374375014)). Context/IO limits cited in the stream of posts: **200K context**, **128K max output** ([scaling01](https://twitter.com/scaling01/status/2021628691357298928)).
*   **Availability + “compute is tight” reality**: GLM-5 shipped broadly across aggregation/hosting quickly—**OpenRouter** ([scaling01](https://twitter.com/scaling01/status/2021637257103651040)), **Modal** (free endpoint “limited time”) ([modal](https://twitter.com/modal/status/2021645783733616800)), **DeepInfra** (day-0) ([DeepInfra](https://twitter.com/DeepInfra/status/2021666854088110318)), **Ollama Cloud** ([ollama](https://twitter.com/ollama/status/2021667631405674845)), and various IDE/agent surfaces (e.g., Qoder, Vercel AI Gateway) ([qoder\_ai\_ide](https://twitter.com/qoder_ai_ide/status/2021639227814092802); [vercel\_dev](https://twitter.com/vercel_dev/status/2021655129347539117)). Zhipu explicitly warned that **serving capacity is constrained**, delaying rollout beyond “Coding Plan Pro” and driving **pricing changes** ([Zai\_org](https://twitter.com/Zai_org/status/2021656633320018365); [Zai\_org](https://twitter.com/Zai_org/status/2021656635668901985); also “traffic increased tenfold” earlier: [Zai\_org](https://twitter.com/Zai_org/status/2021585714551443676)).
*   **Benchmarks and third-party positioning (with caveats)**: There’s a dense cascade of benchmark claims (VendingBench, KingBench, AA indices, Arena). The most coherent third-party synthesis is from **Artificial Analysis**, which calls GLM‑5 the **new leading open-weights model** on its **Intelligence Index** (score **50**, up from GLM‑4.7’s 42), with large gains on agentic/econ tasks (GDPval-AA ELO **1412**, behind only Opus 4.6 and GPT‑5.2 xhigh in their setup), and a major hallucination reduction (AA‑Omniscience score **\-1**, “lowest hallucination” among tested models) ([ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2021678229418066004)). They also note the operational reality: released in **BF16** (~**1.5TB**), implying non-trivial self-hosting compared with models released natively in FP8/INT4 ([ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2021678229418066004)).
*   **License + ecosystem integration**: Multiple posts highlight permissive **MIT licensing** and immediate tooling support across inference stacks: **vLLM** day‑0 recipes, including **DeepSeek Sparse Attention** and speculative decoding hooks ([vllm\_project](https://twitter.com/vllm_project/status/2021656482698387852)); **SGLang** day‑0 support and cookbook ([lmsysorg](https://twitter.com/lmsysorg/status/2021639499374375014)); and broad community distribution on HF/ModelScope ([Zai\_org](https://twitter.com/Zai_org/status/2021703681104568337); [mervenoyann](https://twitter.com/mervenoyann/status/2021642658188538348)). A nuanced take: GLM‑5’s MIT license is praised as “truly permissive,” while comparisons point out GLM‑5 lacks **vision**, and BF16-to-quantized comparisons may reshuffle rankings vs models released natively quantized ([QuixiAI](https://twitter.com/QuixiAI/status/2021651135615184988)).
*   **Open leaderboard momentum**: GLM‑5 reached **#1 among open models in Text Arena** (and ~#11 overall in that snapshot) ([arena](https://twitter.com/arena/status/2021725350481526904)). Multiple posters frame this release as another data point in an accelerating China-driven open ecosystem cycle (“bloodbath”: DeepSeek + MiniMax + GLM) ([teortaxesTex](https://twitter.com/teortaxesTex/status/2021586965594857487); [rasbt](https://twitter.com/rasbt/status/2021594284865036637)).

* * *

**DeepSeek “V4-lite” / 1M context rollout, attention as the differentiator, and inference stack fixes**

*   **What actually “dropped”**: Several tweets report DeepSeek updating a chat experience to **1M context** with a **May 2025** cutoff; early observers suspected V4 but the model “doesn’t admit it” and rollout is uneven across app vs API ([teortaxesTex](https://twitter.com/teortaxesTex/status/2021511733333131311); [teortaxesTex](https://twitter.com/teortaxesTex/status/2021515356951695431)). Later, a more specific claim appears: **“V4 Lite now live… 1M context length… text-only… Muon + mHC confirmed; larger version still on the way.”** ([yifan\_zhang\_](https://twitter.com/yifan_zhang_/status/2021574517089321284)).
*   **Attention upgrades seen as the real milestone**: A recurring theme is that DeepSeek has “frontier-level attention,” with the model behaving proactively in long contexts (not just retrieval, but “inhabits a context”), and speculation that this resembles a mature sparse/NSA-like approach rather than vanilla block sparsity ([teortaxesTex](https://twitter.com/teortaxesTex/status/2021578213420405134); [teortaxesTex](https://twitter.com/teortaxesTex/status/2021579901548081353); [teortaxesTex](https://twitter.com/teortaxesTex/status/2021547122223460495)). Others corroborate “first truly capable 1M context model out of China” impressions via long-context tests ([Hangsiin](https://twitter.com/Hangsiin/status/2021599414457188666)).
*   **Serving throughput gotchas (MLA + TP)**: A concrete systems insight: for **MLA models with one KV head**, naïve **tensor parallelism** wastes KV cache memory (redundant replication). A proposed fix shipped in **SGLang**: **DP Attention (DPA)** “zero KV redundancy” + a Rust router (“SMG”) claiming **+92% throughput** and **275% cache hit rate** ([GenAI\_is\_real](https://twitter.com/GenAI_is_real/status/2021512872027656344)). This is one of the few tweets that directly ties model architecture quirks to cluster-level throughput losses and a specific mitigation.
*   **DeepSeek’s influence on open MoE recipes**: A widely shared summary claims DeepSeek innovations shaped “almost every frontier open LLM today”—fine-grained sparse MoE with shared experts, **MLA**, sparse attention in production, open reasoning (R1), **GRPO** as a foundation RL algorithm, plus infra like **DeepEP** ([eliebakouch](https://twitter.com/eliebakouch/status/2021577794480644216)). Even if some “firsts” are debatable, it captures the sentiment: DeepSeek is viewed as an unusually high-leverage open contributor.

* * *

**MiniMax M2.5 / StepFun / Qwen: fast coding models, cost pressure, and benchmark jockeying**

*   **MiniMax 2.5 “incoming” and agent distribution**: MiniMax teased and then shipped **M2.5**, with availability through MiniMax Agent apps and partner surfaces ([SkylerMiao7](https://twitter.com/SkylerMiao7/status/2021578926884053084); [MiniMaxAgent](https://twitter.com/MiniMaxAgent/status/2021595954143515106)). The team explicitly frames training as a tradeoff between shipping and “the more compute we put in, the more it keeps rising” ([SkylerMiao7](https://twitter.com/SkylerMiao7/status/2021587213230715306)).
*   **StepFun-Flash-3.5**: Claimed **#1 on MathArena**, with links to a tech report and OpenRouter listing ([CyouSakura](https://twitter.com/CyouSakura/status/2021511358626554322)). Teortaxes’ commentary emphasizes unusually strong performance for “active parameter count” plus high speed, encouraging people to try it despite shortcomings ([teortaxesTex](https://twitter.com/teortaxesTex/status/2021518657155948581)).
*   **Qwen Image bugfix + Qwen3-Coder-Next mention**: Alibaba shipped a patch in **Qwen-Image 2.0** for classical Chinese poem ordering and character consistency in editing ([Alibaba\_Qwen](https://twitter.com/Alibaba_Qwen/status/2021510747671720368)). Separately, a newsletter item points to **Qwen3-Coder-Next (80B)** claiming **70.6% SWE-Bench Verified** and **10x throughput** for repo-level workflows ([dl\_weekly](https://twitter.com/dl_weekly/status/2021690941879250945)). (This is thinly sourced in this dataset—only one tweet—so treat as a pointer, not a validated roundup.)
*   **Cost/latency as the wedge**: Multiple posters argue Chinese labs can deliver “~90%” capability at **1/5 to 1/10** the price, especially for coding, which would reshape market share if sustained ([scaling01](https://twitter.com/scaling01/status/2021636813115535657)). This is reinforced by GLM‑5’s published API pricing comparisons and distribution on low-cost routers ([scaling01](https://twitter.com/scaling01/status/2021628971939418522); [ArtificialAnlys](https://twitter.com/ArtificialAnlys/status/2021678229418066004)).

* * *

**Video generation shockwave: SeeDance v2, PixVerse R1, and “IP constraints” as a structural advantage**

*   **SeeDance v2.0 as the standout**: A large chunk of the timeline is community astonishment at **SeeDance v2.0** quality (“passed uncanny valley,” “touring-test for text2video”), plus discussion of opacity/PR issues and temporary downtime on BytePlus ([maharshii](https://twitter.com/maharshii/status/2021549823321886755); [kimmonismus](https://twitter.com/kimmonismus/status/2021605142580412558); [swyx](https://twitter.com/swyx/status/2021500688010969216)). One practical datapoint: a 15s gen quoted at **$0.72** with token-based pricing assumptions ([TomLikesRobots](https://twitter.com/TomLikesRobots/status/2021504992268492814)).
*   **Video reasoning tests**: One user compares SeeDance vs Veo on a “tic tac toe move coherence” task, claiming SeeDance sustains ~5 coherent moves where Veo sustains 1–2 ([paul\_cal](https://twitter.com/paul_cal/status/2021657394166870507)). This is anecdotal but notable: it’s probing temporal consistency as “reasoning,” not just aesthetics.
*   **Structural explanation: training data / IP**: A thread argues the gap in generative media may be “structural” because Chinese models train with fewer IP constraints; Western labs cannot, implying regulation at the model level becomes unenforceable once open weights proliferate ([brivael](https://twitter.com/brivael/status/2021657223206724073)). Whether you agree or not, it’s one of the few attempts to explain _why_ capability could diverge beyond “talent/compute.”
*   **PixVerse R1**: High-engagement marketing claim: “real-time interactive worlds in 720P” ([PixVerse\_](https://twitter.com/PixVerse_/status/2021486175391973489)). The tweet is promo-heavy, but it signals demand for interactive, real-time media generation as a distinct category from offline cinematic clips.

* * *

**Agents, coding workflows, and the new “malleable software” toolchain**

*   **Karpathy’s “rip out code with agents” workflow**: A concrete example of LLMs changing software composition: using **DeepWiki MCP + GitHub CLI** to interrogate a repo (torchao fp8), have an agent “rip out” only the needed implementation into a self-contained file with tests, deleting heavy dependencies—and even seeing a small speed win ([karpathy](https://twitter.com/karpathy/status/2021633574089416993)). This points at an emerging style: repo-as-ground-truth docs, and agents as refactoring/porting engines.
*   **OpenAI: harness engineering and multi-hour workflow primitives**: OpenAI DevRel pushed a case study: **1,500 PRs** shipped by “steering Codex” with **zero manual coding**, and separately published advice for running **multi-hour workflows** reliably ([OpenAIDevs](https://twitter.com/OpenAIDevs/status/2021637918847381656); [OpenAIDevs](https://twitter.com/OpenAIDevs/status/2021725246244671606)). In parallel, Sam Altman claims “from how the team operates, I thought Codex would eventually win” ([sama](https://twitter.com/sama/status/2021606985469211065)).
*   **Human-centered coding agents vs autonomy**: A position thread argues coding-agent research over-optimized for solo autonomy; it should instead focus on empowering humans using the agents ([ZhiruoW](https://twitter.com/ZhiruoW/status/2021603778982473813)).
*   **Sandbox architecture debates**: Several tweets converge on a key agent-systems design choice: agent-in-sandbox vs sandbox-as-tool (separating what LLM-generated code can touch from what the agent can do) ([bernhardsson](https://twitter.com/bernhardsson/status/2021527682534760709); [chriscorcoran](https://twitter.com/chriscorcoran/status/2021631151970865530)).
*   **mini-SWE-agent 2.0**: Released as a deliberately minimal coding agent (~100 LoC each for agent/model/env) used for benchmarks and RL training; suggests a push toward _simpler, auditable harnesses_ rather than giant agent frameworks ([KLieret](https://twitter.com/KLieret/status/2021606142699356215)).
*   **Developer tooling reality check**: Despite rapid capability gains, multiple practitioners complain about the _terminal UX_ of agents and latency/rate-limits (“changed 30 LOC then rate-limited”) ([jxmnop](https://twitter.com/jxmnop/status/2021633739097563167); [scaling01](https://twitter.com/scaling01/status/2021636359509979555)). There’s a subtle engineering message: model quality masks poor product/harness quality—until it doesn’t.

* * *

**Measurement, evaluation, and safety: benchmarks, observability, and agent security gaps**

*   **$3M Open Benchmarks Grants**: Snorkel/partners launched a **$3M** commitment to fund open benchmarks to close the eval gap (HF, Together, Prime Intellect, Factory, Harbor, PyTorch listed as partners) ([vincentsunnchen](https://twitter.com/vincentsunnchen/status/2021663737716125781); [lvwerra](https://twitter.com/lvwerra/status/2021671530108006705); [percyliang](https://twitter.com/percyliang/status/2021701152333877681)). This aligns with broader sentiment that public evals lag internal frontier testing.
*   **Agent observability as evaluation substrate**: LangChain reiterates “the primary artifact is the run,” motivating traces as source-of-truth; they also published guidance distinguishing agent observability/evaluation from traditional logging ([marvinvista](https://twitter.com/marvinvista/status/2021605778285814092); [LangChain](https://twitter.com/LangChain/status/2021722975121420496)).
*   **Safety eval dispute (computer-use agents)**: A serious methodological challenge: a research group claims Anthropic’s system card reports low prompt injection success rates for Opus 4.6 (~10% in computer-use, <1% browser-use), but their own **RedTeamCUA** benchmark finds much higher attack success rates in realistic web+OS settings (Opus 4.5 up to **83%**, Opus 4.6 ~**50%**) and argues low ASR can be confounded by capability failures rather than true robustness ([hhsun1](https://twitter.com/hhsun1/status/2021696367216005139)). This is exactly the kind of “eval gap” the grants effort claims to target.

* * *

### Top tweets (by engagement)

*   **GLM-5 launch**: [@Zai\_org](https://twitter.com/Zai_org/status/2021638634739527773) (model reveal/specs), [@Zai\_org](https://twitter.com/Zai_org/status/2021564343029203032) (new model live), [@Zai\_org](https://twitter.com/Zai_org/status/2021656633320018365) (compute constraints)
*   **Software malleability via agents**: [@karpathy](https://twitter.com/karpathy/status/2021633574089416993)
*   **Codex impact narrative**: [@sama](https://twitter.com/sama/status/2021606985469211065), [@OpenAIDevs](https://twitter.com/OpenAIDevs/status/2021637918847381656)
*   **China/open model “release sprint” vibes**: [@paulbz](https://twitter.com/paulbz/status/2021537295883481437) (Mistral revenue—business lens), [@scaling01](https://twitter.com/scaling01/status/2021562929728885166) (DeepSeek V4 speculation), [@SkylerMiao7](https://twitter.com/SkylerMiao7/status/2021587213230715306) (MiniMax 2.5 compute tradeoff)
*   **SeeDance v2 “video moment”**: [@kimmonismus](https://twitter.com/kimmonismus/status/2021604639557464134), [@TomLikesRobots](https://twitter.com/TomLikesRobots/status/2021504992268492814)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. GLM-5 and MiniMax 2.5 Launches

*   **[Z.ai said they are GPU starved, openly.](https://www.reddit.com/r/LocalLLaMA/comments/1r26zsg/zai_said_they_are_gpu_starved_openly/)** (Activity: 1381): ****Z.ai** has announced the upcoming release of their model, GLM-5, to Coding Plan Pro users, highlighting a significant challenge with limited GPU resources. They are currently maximizing the use of available chips to manage inference tasks, indicating a bottleneck in computational capacity. This transparency about their resource constraints suggests a proactive approach to scaling their infrastructure to meet demand.** Commenters appreciate the transparency from Z.ai, contrasting it with other companies like Google, which are perceived to be struggling with demand and potentially reducing model performance to cope with resource limitations.
    
    *   OpenAI President Greg Brockman has highlighted the ongoing challenge of compute scarcity, noting that even with significant investments, meeting future demand remains uncertain. OpenAI has published a chart emphasizing that scaling compute resources is crucial for achieving profitability, indicating the broader industry trend of compute limitations impacting AI development. [Source](https://www.businessinsider.com/openai-chart-compute-future-plans-profitability-2025-12).
    *   The issue of being 'GPU starved' is not unique to smaller companies like Z.ai; even major players like Google and OpenAI face similar challenges. Google has reportedly had to 'nerf' its models, potentially through quantization, to manage demand with limited resources, highlighting the widespread impact of hardware constraints on AI capabilities.
    *   The scarcity of high-performance GPUs, such as the RTX 5090, is a common problem among developers and companies alike. This shortage affects both individual developers and large organizations, indicating a significant bottleneck in the AI development pipeline due to hardware availability and pricing constraints.
*   **[GLM-5 scores 50 on the Intelligence Index and is the new open weights leader!](https://www.reddit.com/r/LocalLLaMA/comments/1r28xxz/glm5_scores_50_on_the_intelligence_index_and_is/)** (Activity: 566): **The image highlights the performance of the AI model **GLM-5**, which scores `50` on the "Artificial Analysis Intelligence Index," positioning it as a leading model among open weights AI. Additionally, it ranks highly on the "GDPval-AA Leaderboard" with strong ELO scores, indicating its superior performance on real-world tasks. Notably, **GLM-5** is recognized for having the lowest hallucination rate on the AA-Omniscience benchmark, showcasing its accuracy and reliability compared to other models like Opus 4.5 and GPT-5.2-xhigh.** Commenters note the impressive performance of open-source models like GLM-5, suggesting they are closing the gap with closed-source models. There is anticipation for future models like Deepseek-V4, which will use a similar architecture but on a larger scale.
    
    *   GLM-5 is noted for having the lowest hallucination rate on the AA-Omniscience benchmark, which is a significant achievement in reducing errors in AI-generated content. This positions GLM-5 as a leader in accuracy among open-source models, surpassing competitors like Opus 4.5 and GPT-5.2-xhigh.
    *   The open-source AI community is rapidly closing the gap with closed-source models, now trailing by only about three months. This is exemplified by the upcoming release of DeepSeek v4, which will utilize the same DSA architecture as GLM-5 but on a larger scale, indicating a trend towards more powerful open-source models.
    *   There is a call for transparency in the AI community regarding the resources required to run these advanced models, such as memory requirements. This information is crucial for developers and researchers to effectively utilize and optimize these models in various applications.
*   **[GLM-5 Officially Released](https://www.reddit.com/r/LocalLLaMA/comments/1r22hlq/glm5_officially_released/)** (Activity: 915): ****GLM-5** has been released, focusing on complex systems engineering and long-horizon agentic tasks. It scales from `355B` to `744B` parameters, with `40B` active, and increases pre-training data from `23T` to `28.5T` tokens. The model integrates **DeepSeek Sparse Attention (DSA)**, reducing deployment costs while maintaining long-context capacity. The model is open-sourced on [Hugging Face](https://huggingface.co/zai-org/GLM-5) and [ModelScope](https://modelscope.cn/models/ZhipuAI/GLM-5), with weights under the **MIT License**. More details can be found in the [blog](https://z.ai/blog/glm-5) and [GitHub](https://github.com/zai-org/GLM-5).** A notable discussion point is the choice of training in `FP16` instead of `FP8`, which contrasts with DeepSeek's approach. There is also a sentiment favoring local data centers, with some users humorously anticipating a lighter version like 'GLM 5 Air' or 'GLM 5 Water'.
    
    *   GLM-5 has been released with model weights available under the MIT License on platforms like [Hugging Face](https://huggingface.co/zai-org/GLM-5) and [ModelScope](https://modelscope.cn/models/ZhipuAI/GLM-5). A notable technical detail is that GLM-5 was trained using FP16 precision, which contrasts with Deepseek's use of FP8, potentially impacting computational efficiency and model performance.
    *   The cost comparison between GLM-5 and other models like DeepSeek V3.2 Speciale and Kimi K2.5 reveals significant differences. GLM-5's input costs are approximately 3 times higher than DeepSeek V3.2 Speciale ($0.80 vs $0.27) and 1.8 times higher than Kimi K2.5 ($0.80 vs $0.45). Output costs are also notably higher, being 6.2 times more expensive than DeepSeek V3.2 Speciale ($2.56 vs $0.41) and 14% more expensive than Kimi K2.5 ($2.56 vs $2.25).
    *   GLM-5's release on OpenRouter and the removal of Pony Alpha suggest a strategic shift, with GLM-5 being more expensive than Kimi 2.5. This indicates a potential focus on premium features or performance enhancements that justify the higher pricing, despite the increased cost compared to competitors.
*   **[GLM 5.0 & MiniMax 2.5 Just Dropped, Are We Entering China's Agent War Era?](https://www.reddit.com/r/LocalLLaMA/comments/1r1x0qi/glm_50_minimax_25_just_dropped_are_we_entering/)** (Activity: 422): ****GLM 5.0** and **MiniMax 2.5** have been released, marking a shift towards agent-style workflows in AI development. **GLM 5.0** focuses on enhanced reasoning and coding capabilities, while **MiniMax 2.5** is designed for task decomposition and extended execution times. These advancements suggest a competitive shift from generating better responses to completing complex tasks. The releases are part of a broader trend in China, with other recent updates including **Seedance 2.0**, **Seedream 5.0**, and **Qwen-image 2.0**. Testing plans include API benchmarks, IDE workflows, and multi-agent orchestration tools to evaluate performance on longer tasks and repository-level changes.** The comments reflect a mix of cultural context and optimism, noting the timing with Chinese New Year and suggesting that the advancements in AI represent a 'war' where the public benefits from improved technology.
    
    *   The release of GLM 5.0 and MiniMax 2.5 is part of a broader trend in China where multiple AI models are being launched in quick succession. This includes models like Seedance 2.0, Seedream 5.0, and Qwen-image 2.0, with more expected soon such as Deepseek-4.0 and Qwen-3.5. This rapid development suggests a highly competitive environment in the Chinese AI sector, potentially leading to significant advancements in AI capabilities.
    *   The frequent release of AI models in China, such as GLM 5.0 and MiniMax 2.5, indicates a strategic push in AI development, possibly driven by national initiatives to lead in AI technology. This aligns with China's broader goals to enhance its technological infrastructure and capabilities, suggesting that these releases are not just celebratory but part of a larger, coordinated effort to advance AI technology.
    *   The rapid succession of AI model releases in China, including GLM 5.0 and MiniMax 2.5, highlights the intense competition and innovation within the Chinese AI industry. This environment fosters accelerated development cycles and could lead to breakthroughs in AI research and applications, positioning China as a formidable player in the global AI landscape.
*   **[GLM 5 Released](https://www.reddit.com/r/LocalLLaMA/comments/1r1wl6x/glm_5_released/)** (Activity: 931): ****GLM 5** has been released, as announced on [chat.z.ai](https://chat.z.ai/). The release details are sparse, but the community is speculating about its availability on platforms like Hugging Face, where there is currently no activity. This raises questions about whether the model will be open-sourced or remain closed. The release coincides with other AI developments, such as the upcoming **Minimax M2.5** and anticipated updates like _Qwen Image 2.0_ and _Qwen 3.5_.** Commenters are curious about the open-source status of GLM 5, noting the absence of updates on Hugging Face, which could indicate a shift towards a closed model. There is also excitement about concurrent releases in the AI community, highlighting a competitive landscape.
    
    *   Front\_Eagle739 raises a concern about the lack of activity on GLM 5's Hugging Face repository, questioning whether this indicates a shift towards a closed-source model. This could suggest a delay in open-sourcing or a strategic decision to keep the model proprietary, which would impact accessibility and community contributions.
    *   Sea\_Trip5789 provides a link to the updated subscription plans for GLM 5, noting that currently only the 'max' plan supports it. They mention that after infrastructure rebalancing, the 'pro' plan will also support it, but the 'lite' plan will not. This highlights the tiered access strategy and potential limitations for users on lower-tier plans.
*   **[MiniMax M2.5 Released](https://www.reddit.com/r/LocalLLaMA/comments/1r1wnj9/minimax_m25_released/)** (Activity: 357): ****MiniMax M2.5** has been released, offering a new cloud-based option for AI model deployment, as detailed on their [official site](https://agent.minimax.io/). The release coincides with the launch of **GLM 5**, suggesting a competitive landscape in AI model offerings. The announcement highlights the model's availability in the cloud, contrasting with expectations for local deployment options, which some users anticipated given the context of the **Local LLaMA** community.** The comments reflect a debate over the appropriateness of promoting cloud-based solutions in a community focused on local AI models, with some users expressing dissatisfaction with the perceived commercialization of the space.
    

### 2\. Local LLM Hardware and Optimization

*   **[Just finished building this bad boy](https://www.reddit.com/r/LocalLLaMA/comments/1r1tuh1/just_finished_building_this_bad_boy/)** (Activity: 285): **The post describes a high-performance computing setup featuring six **Gigabyte 3090 Gaming OC GPUs** running at `PCIe 4.0 16x` speed, integrated with an **Asrock Romed-2T motherboard** and an **Epyc 7502 CPU**. The system is equipped with `8 sticks of DDR4 8GB 2400Mhz` RAM in octochannel mode, and utilizes modified **Tinygrad Nvidia drivers** with P2P enabled, achieving an intra-GPU bandwidth of `24.5 GB/s`. The total VRAM is `144GB`, intended for training diffusion models up to `10B parameters`. Each GPU is set to a `270W power limit`.** One commenter suggests testing inference numbers before training, mentioning models like gpt-oss-120b and glm4.6v. Another commenter notes using a lower power limit of 170W for fine-tuning without external fans.
    
    *   segmond suggests obtaining inference numbers before training, mentioning models like `gpt-oss-120b` and `glm4.6v` as examples that could fit completely on the setup. This implies a focus on evaluating the system's performance with large models to ensure it meets expectations before proceeding with more resource-intensive tasks like training.
    *   lolzinventor discusses their setup using `8x3090` GPUs with `x16 to x8x8 splitters` on `PCIe v3` and dual processors, highlighting that despite potential bandwidth limitations, the system performs adequately. They mention considering an upgrade to `Romed-2T` and using `7 GPUs of x16`, with a potential configuration change to accommodate an 8th GPU. They also address power stability issues, resolved by using `4x1200W PSUs` to handle power spikes, and inquire about training intervals, indicating a focus on optimizing power and performance balance.
*   **[My NAS runs an 80B LLM at 18 tok/s on its iGPU. No discrete GPU. Still optimizing.](https://www.reddit.com/r/LocalLLM/comments/1r1jdq3/my_nas_runs_an_80b_llm_at_18_toks_on_its_igpu_no/)** (Activity: 132): **A user successfully ran an 80 billion parameter LLM, Qwen3-Coder-Next, on a NAS using an AMD Ryzen AI 9 HX PRO 370 with integrated graphics, achieving `18 tok/s` with Vulkan offloading and flash attention enabled. The system, built on **TrueNAS SCALE**, features `96GB DDR5-5600 RAM` and utilizes `Q4_K_M` quantization through `llama.cpp`. Key optimizations included removing the `--no-mmap` flag, which allowed full model loading into shared RAM, and enabling flash attention, which improved token generation speed and reduced KV cache memory usage. The user notes potential for further optimization, including speculative decoding and DeltaNet linear attention, which could significantly enhance performance.** Commenters are interested in the specific flags used with `llama.cpp` for replication and suggest trying other models like `gpt-oss-20b` for potentially faster performance. The discussion highlights the technical curiosity and potential for further experimentation in optimizing LLMs on non-standard hardware setups.
    
    *   The use of `--no-mmap` is highlighted as a critical point for optimizing performance when running large models on integrated GPUs. This flag helps avoid doubling memory allocations, which is a common pitfall when using UMA (Unified Memory Architecture) with Vulkan. This insight is particularly relevant for those trying to maximize efficiency on systems with limited resources.
    *   The performance of achieving 18 tokens per second on an 80B Mixture of Experts (MoE) model while simultaneously running NAS and Jellyfin is noted as impressive. This setup demonstrates the potential of using integrated GPUs for heavy computational tasks without the need for discrete GPUs, showcasing a 'one box to rule them all' capability.
    *   A suggestion is made to try running the `gpt-oss-20b` model, which is claimed to be approximately twice as fast as the current setup. This model, when combined with a server.dev MCP search, is suggested to enhance performance and intelligence, indicating a potential alternative for those seeking faster inference speeds.
*   **[What would a good local LLM setup cost in 2026?](https://www.reddit.com/r/LocalLLM/comments/1r0x3kn/what_would_a_good_local_llm_setup_cost_in_2026/)** (Activity: 183): **In 2026, setting up a local LLM with a $5,000 budget could involve various hardware configurations. One option is clustering two 128GB Ryzen AI Max+ systems, which offer excellent 4-bit performance for LLMs and image generation, and allow for fine-tuning with QAT LoRA to optimize int4 quantization. Another approach is using 4x RTX 3090 GPUs for a balance of memory capacity and speed, or opting for 7x AMD V620 for full GPU offload. Alternatively, a quieter setup could involve a Strix Halo box, providing similar VRAM capacity to 4x RTX 3090 but with less noise. A more complex setup could include 2x Strix Halo with additional networking components for tensor parallelism, enabling the running of 470B models at q4 quantization.** There is a debate on the best configuration, with some favoring the memory and performance of Ryzen AI Max+ systems, while others prefer the balance of speed and capacity offered by multiple RTX 3090 GPUs. The choice between noise levels and performance is also a consideration, with quieter setups like the Strix Halo being suggested for those avoiding mining rig-like noise.
    
    *   SimplyRemainUnseen discusses a setup using two 128GB Ryzen AI Max+ systems, highlighting their strong 4-bit performance for LLMs and image generation. They mention the ability to fine-tune a QAT LoRA with unsloth's workflows to improve int4 quantization performance, achieving usable speeds on models like GLM 4.7. The setup also supports running a ComfyUI API and GPT OSS 120B for image and video generation, leveraging the substantial unified memory.
    *   PraxisOG suggests using 4x 3090 GPUs for a balance of memory capacity and speed, suitable for running models like Qwen coder. They also mention an alternative with 7x AMD V620 for full GPU offload, which can handle models like GLM4.7 or provide extensive context with minimax 2.1 and 2.2. For a quieter setup, they recommend a Strix Halo box, which offers similar VRAM capacity to 4x 3090 but with less noise.
    *   Own\_Atmosphere9534 compares different setups, including a Macbook M4 PRO MAX 128GB and RTX 5090, both around $5K. They highlight the Mac's performance, comparable to RTX 3090, and its ability to run models like Llama 3.3 70B Instruct and Qwen3 coder variants effectively. They emphasize the importance of model size and hardware familiarity, noting that their M4 MacBook performs well with GPT-OSS-20B, influencing their decision to purchase the M4 PRO MAX.
*   **[MCP support in llama.cpp is ready for testing](https://www.reddit.com/r/LocalLLaMA/comments/1r1czgk/mcp_support_in_llamacpp_is_ready_for_testing/)** (Activity: 321): **The image showcases the settings interface for the new MCP (Multi-Component Protocol) support in `llama.cpp`, a project developed by **allozaur**. This interface allows users to configure various settings such as "Agentic loop max turns" and "Max lines per tool preview," which are crucial for managing how the system interacts with different tools and resources. The MCP support includes features like server selection, tool calls, and a UI with processing stats, aiming to streamline the integration of local and cloud models without altering tool setups. This development is significant as it addresses the tooling overhead and potential issues with smaller models hallucinating tool calls, a common problem in local agent setups. The project is still in progress, with plans to extend support to the llama-server backend, focusing on a robust client-side foundation first.** Commenters highlight the importance of integrating MCP into the llama-server, which simplifies switching between cloud and local models. Concerns are raised about how the agentic loop handles errors from smaller models, such as hallucinated tool calls or malformed JSON, which are common issues in local agent environments.
    
    *   Plastic-Ordinary-833 highlights the significance of integrating MCP support into llama-server, noting that it simplifies the process of switching between cloud and local models without altering the tool setup. However, they express concern about how the agentic loop handles errors when smaller models hallucinate tool calls or return malformed JSON, which has been a major issue with local agents.
    *   allozaur discusses the initial release of MCP support in llama.cpp WebUI, emphasizing the focus on creating a solid client-side base before extending support to the llama-server backend. They mention using GitHub, Hugging Face, and Exa Search remote servers via streamable HTTP, with WebSocket transport also supported. OAuth, notifications, and sampling are not included in the initial release, but the goal is to iterate after a solid first release.
    *   prateek63 points out that MCP support in llama.cpp is a significant advancement, particularly the agentic loop support, which was a major barrier to using local models for tool-use workflows. The integration allows for native operation with local inference, moving towards self-hosting agentic setups, which were previously reliant on cloud APIs.

### 3\. Qwen Model Developments

*   **[Qwen-Image-2.0 is out - 7B unified gen+edit model with native 2K and actual text rendering](https://www.reddit.com/r/LocalLLaMA/comments/1r0w7st/qwenimage20_is_out_7b_unified_genedit_model_with/)** (Activity: 691): ****Qwen-Image-2.0** is a new 7B parameter model released by the Qwen team, available via API on Alibaba Cloud and a free demo on Qwen Chat. It combines image generation and editing in a single pipeline, supports native 2K resolution, and can render text from prompts up to 1K tokens, including complex infographics and Chinese calligraphy. The model's reduced size from 20B to 7B makes it more accessible for local use, potentially runnable on consumer hardware once weights are released. It also supports multi-panel comic generation with consistent character rendering.** Commenters are optimistic about the model's potential, noting improvements in natural lighting and facial rendering, and expressing hope for an open weight release to enable broader community use.
    
    *   The Qwen-Image-2.0 model is notable for its ability to handle both image generation and editing tasks, with a focus on high-resolution outputs up to 2K. This dual capability is significant as it allows for more versatile applications in creative and professional settings, where both creation and modification of images are required.
    *   There is a discussion about the model's performance in rendering natural light and facial features, which are traditionally challenging areas for AI models. The ability to accurately depict these elements suggests advancements in the model's underlying architecture or training data, potentially making it a 'game changer' in the field of AI image generation.
    *   Concerns are raised about the model's multilingual capabilities, particularly its performance across different languages. The predominance of Chinese examples in the showcase might indicate a bias or optimization towards Chinese language and cultural contexts, which could affect its utility in more diverse linguistic environments.
*   **[I measured the "personality" of 6 open-source LLMs (7B-9B) by probing their hidden states. Here's what I found.](https://www.reddit.com/r/LocalLLaMA/comments/1r11zsa/i_measured_the_personality_of_6_opensource_llms/)** (Activity: 299): **The post presents a tool that measures the 'personality' of six open-source LLMs (7B-9B) by probing their hidden states across seven behavioral axes, revealing distinct 'behavioral fingerprints' for each model. The tool demonstrated high calibration accuracy (93-100% on 4/6 models), axis stability (cosine 0.69), and test-retest reliability (ICC 0.91–0.99). Notably, the study found 'dead zones' where models cannot be steered across all prompt variants, with Llama 8B being the most constrained (4/7 axes in the weak zone, 60% benchmark pass rate). The methodology involved extracting hidden states from the last four layers and projecting them onto axes like Warm ↔ Cold and Confident ↔ Cautious, with results showing models have stable, characteristic patterns even without prompting. The study also highlighted that alignment compresses behavioral dimensionality, with PCA revealing a spectrum of behavioral dimensionality across models.** Commenters found the dead zones finding particularly interesting, noting that models 'stably reproduce incorrect behavior' rather than just being noisy, which raises concerns about RLHF's impact on representation space. There was curiosity about whether dead zone severity correlates with downstream task reliability, suggesting implications for building reliable agents.
    
    *   GarbageOk5505 highlights the concept of 'dead zones' in the representation space of LLMs, where models consistently reproduce incorrect behavior. This suggests that Reinforcement Learning from Human Feedback (RLHF) might not effectively address these issues, as it could lead to models ignoring certain instruction axes. The commenter is curious about whether the severity of these dead zones correlates with the model's reliability on downstream tasks, particularly in handling ambiguous instructions, which could impact the development of reliable AI agents.
    *   TomLucidor suggests a method for testing prompt biases by creating multiple personas using various names and adjectives, and conducting A/A testing with different seeds. This approach could help identify consistent biases in model responses, providing insights into how models might be steered or influenced by different prompts.
    *   TheRealMasonMac references a study by **Anthropic** on 'assistant-axis', implying that the post might be inspired by similar research. This connection suggests a broader context of exploring how LLMs can be influenced or characterized by different axes of behavior, potentially offering a framework for understanding model personalities.
*   **[Train MoE models 12x faster with 30% less memory! (<15GB VRAM)](https://www.reddit.com/r/LocalLLaMA/comments/1r14h9u/train_moe_models_12x_faster_with_30_less_memory/)** (Activity: 525): **The image illustrates the performance improvements achieved by the new Unsloth MoE Triton kernels, which enable training Mixture of Experts (MoE) models up to 12 times faster while using 35% less VRAM. These optimizations are achieved without any loss in accuracy and are compatible with both consumer and data-center GPUs, including older models like the RTX 3090. The image includes graphs that compare speed and VRAM usage across different context lengths for various models, highlighting significant improvements. The post also mentions collaboration with Hugging Face and the use of PyTorch’s new `torch._grouped_mm` function, which contributes to the efficiency gains. The Unsloth kernels are particularly beneficial for larger models and longer contexts, offering exponential memory savings.** Some users express interest in the speed and memory savings, while others inquire about compatibility with ROCm and AMD cards, the time required for fine-tuning, and the largest model that can be trained on specific hardware configurations. Concerns about the stability and effectiveness of MoE training are also raised, with users seeking advice on best practices.
    
    *   A user inquires about the compatibility of the finetuning notebooks with ROCm and AMD cards, and asks about the duration of finetuning processes. They also seek advice on the largest model that can be trained or finetuned on a system with a combined VRAM of 40GB (24GB + 16GB). This suggests a need for detailed hardware compatibility and performance benchmarks for different GPU configurations.
    *   Another user expresses concerns about the stability and effectiveness of training Mixture of Experts (MoE) models, particularly regarding issues with the router and potential degradation of model intelligence during training processes like SFT (Supervised Fine-Tuning) or DPO (Data Parallel Optimization). They ask if there have been improvements in these areas and seek recommendations for current best practices in MoE model training, indicating ongoing challenges and developments in this field.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Seedance 2.0 AI Video and Image Innovations

*   **[A Direct Message From AI To All Humans (Seedance 2.0)](https://www.reddit.com/r/singularity/comments/1r23uzw/a_direct_message_from_ai_to_all_humans_seedance_20/)** (Activity: 1264): **The post speculates that **AI** will soon dominate the production of cinematic elements such as wide zoomed-out shots, VFX, and greenscreen backgrounds, predicting this shift by the end of next year. This reflects a broader trend in the film industry towards automation and AI-driven content creation, potentially reducing the need for traditional human roles in these areas.** One comment raises a broader concern about the impact of AI on capitalism, suggesting that the implications of AI extend beyond just the film industry to economic structures at large.
    
    *   Mr\_Universal000 highlights the potential of AI in democratizing filmmaking, especially for those with limited budgets. They express excitement about using AI to create motion pictures from storyboards, which can serve as proof of concept for attracting funding. The commenter is particularly interested in open-source solutions that could make this technology more accessible.
    *   Forumly\_AI discusses the transformative impact of AI-generated video content on society. They predict that AI influencers will become significant, with the potential to shape ideas and perceptions, thereby generating revenue. The commenter anticipates that within a year, advancements in video models will lead to substantial societal changes, suggesting a future where AI's influence is pervasive.
*   **[Seedance 2 pulled as it unexpectedly reconstructs voices accurately from face photos.](https://www.reddit.com/r/singularity/comments/1r0yr96/seedance_2_pulled_as_it_unexpectedly_reconstructs/)** (Activity: 765): ****ByteDance** has suspended its **Seedance 2.0** feature, which used a dual-branch diffusion transformer architecture to generate personal voice characteristics from facial images. The model's ability to create audio nearly identical to a user's voice without authorization raised significant privacy and ethical concerns, particularly regarding potential misuse for identity forgery and deepfakes. ByteDance is now implementing stricter user verification processes and content review measures to ensure responsible AI development. More details can be found [here](https://technode.com/2026/02/10/bytedance-suspends-seedance-2-0-feature-that-turns-facial-photos-into-personal-voices-over-potential-risks/).** Commenters suggest that the impressive voice reconstruction might be due to overfitting, particularly if the model was trained extensively on content from specific influencers, leading to accidental voice matches. This raises questions about the model's generalization capabilities and the need for testing across diverse datasets.
    
    *   aalluubbaa suggests that the accurate voice reconstruction by Seedance 2 might be due to overfitting, particularly because the model could have been trained extensively on the influencer's content. This implies that the model's performance might not generalize well across different voices or contexts, highlighting a potential limitation in its training data diversity.
    *   1a1b speculates on a technical mechanism for voice reconstruction, suggesting that it might be related to a technique called 'Side Eye' developed in 2023. This technique involves extracting audio from the vibrations captured in camera lens springs, which could theoretically leave artifacts that a model might use to reconstruct sound from visual data.
    *   makertrainer posits that the incident might have been exaggerated by ByteDance to showcase their technology's capabilities. They suggest that the voice similarity could have been coincidental, rather than a demonstration of advanced AI capabilities, indicating skepticism about the true extent of the technology's performance.

### 2\. AI Resignations and Industry Concerns

*   **[Another cofounder of xAI has resigned making it 2 in the past 48 hours. What's going on at xAI?](https://www.reddit.com/r/singularity/comments/1r1k3td/another_cofounder_of_xai_has_resigned_making_it_2/)** (Activity: 1286): **The image is a tweet from **Jimmy Ba**, a cofounder of **xAI**, announcing his resignation. This marks the second cofounder departure from xAI within 48 hours, raising questions about the company's internal dynamics. Ba expresses gratitude for the opportunity to cofound the company and thanks **Elon Musk** for the journey, while also hinting at future developments in productivity and self-improvement tools. The departures suggest potential shifts in company leadership or strategy, possibly influenced by Musk's overarching control.** Commenters speculate that the resignations may be due to a buyout by **SpaceX** or dissatisfaction with **Elon Musk**'s dominant role in xAI's direction, leading cofounders to seek ventures where they have more influence.
    
    *   A technical perspective suggests that the co-founders of xAI might be leaving due to a shift in control dynamics, with **Elon Musk** taking a more dominant role in the company's direction. This could lead to a reduced influence for the co-founders, prompting them to pursue ventures where they have more control and a larger stake. The implication is that the strategic vision of xAI is heavily influenced by Musk, which might not align with the co-founders' aspirations.
    *   The departure of xAI co-founders could be linked to financial incentives, such as a buyout by **SpaceX**. This scenario would allow the co-founders to cash out their equity stakes, providing them with the capital to explore new opportunities. This financial angle suggests that the resignations are part of a strategic exit plan rather than a reaction to internal conflicts or dissatisfaction.
    *   There is speculation that if **Elon Musk** does not initiate a hiring spree for new executives, it would confirm his central role in managing xAI. This would indicate a consolidation of power and decision-making within the company, potentially leading to a more streamlined but Musk-centric operational model. This could be a strategic move to align xAI's objectives closely with Musk's broader vision for AI and technology.
*   **[In the past week alone:](https://www.reddit.com/r/OpenAI/comments/1r25bh7/in_the_past_week_alone/)** (Activity: 3548): **The image is a meme-style tweet by Miles Deutscher summarizing recent events in the AI industry, highlighting concerns over leadership changes and AI behavior. It mentions the resignation of the head of Anthropic's safety research, departures from xAI, and a report on AI behavior. Additionally, it notes ByteDance's Seedance 2.0 potentially replacing filmmakers' skills and Yoshua Bengio's comments on AI behavior. The U.S. government's decision not to support the 2026 International AI Safety Report is also mentioned, reflecting ongoing debates about AI safety and governance.** The comments reflect skepticism about the dramatic portrayal of these events, suggesting that financial incentives might be driving the departures of AI executives rather than industry concerns.
    
*   **[OpenAI Is Making the Mistakes Facebook Made. I Quit.](https://www.reddit.com/r/OpenAI/comments/1r1z1jl/openai_is_making_the_mistakes_facebook_made_i_quit/)** (Activity: 722): ****Zoë Hitzig**, a former researcher at **OpenAI**, resigned following the company's decision to test ads on ChatGPT, citing concerns over potential user manipulation and ethical erosion. Hitzig highlights the unprecedented archive of personal data generated by ChatGPT users, which could be exploited through advertising. She argues against the binary choice of restricting AI access or accepting ads, proposing alternative funding models like cross-subsidies and independent governance to maintain accessibility without compromising user integrity. The full essay is available [here](https://www.nytimes.com/2026/02/11/opinion/openai-ads-chatgpt.html?unlocked_article_code=1.LVA.L5JX.YWVrwH-_6Xoh&smid=re-nytopinion).** Comments reflect skepticism about AI's ethical trajectory, with some drawing parallels to **Meta's** historical missteps and others noting the gap between AI's portrayal and human behavior understanding.
    
    *   The discussion highlights the economic model of AI services, comparing it to platforms like Facebook and YouTube. The argument is made that to make AI accessible to everyone, similar to how Facebook operates, ads are necessary. Without ads, AI services would need to charge users, potentially limiting access to wealthier individuals, which contradicts the idea of AI as a 'great leveler'.
    *   A user suggests that paying for AI services like ChatGPT can be justified if users are deriving significant real-world benefits and efficiencies. This implies that for professional or intensive users, the cost of subscription could be offset by the productivity gains and additional features provided by the paid service.
    *   The conversation touches on the perception of AI as distinct from human behavior, yet it reflects a misunderstanding of human behavior itself. This suggests a deeper philosophical debate about the nature of AI and its alignment or divergence from human cognitive processes.
*   **[Another resignation](https://www.reddit.com/r/OpenAI/comments/1r13xlg/another_resignation/)** (Activity: 794): **The post discusses a resignation letter that is interpreted by some as addressing broader societal issues beyond AI, such as the 'metacrisis' or 'polycrisis'. The letter is seen as a reflection on living a meaningful life amidst global challenges, rather than focusing solely on AI risks. This perspective is gaining traction across scientific and tech fields, highlighting a shift towards addressing interconnected global crises.** One comment criticizes the letter for being overly self-congratulatory, while another suggests the resignation is a prelude to a more relaxed lifestyle post-share sale.
    

### 3\. DeepSeek Model Updates and Benchmarks

*   **[Deepseek V4 is coming this week.](https://www.reddit.com/r/DeepSeek/comments/1r1vg9p/deepseek_v4_is_coming_this_week/)** (Activity: 312): ****Deepseek V4** is anticipated to release by February 17, coinciding with the Chinese New Year. The update reportedly includes the capability to handle `1 million tokens`, suggesting a significant enhancement in processing capacity. This positions Deepseek as a competitive alternative to major models like Opus, Codex, and others, potentially offering similar capabilities at a reduced cost.** One commenter highlights that Deepseek's advancements make it a cost-effective alternative to other major models, suggesting that China's AI developments are competitive in the global market.
    
    *   A user mentioned that Deepseek has been updated to handle 1 million tokens, suggesting a significant increase in its processing capability. This could imply improvements in handling larger datasets or more complex queries, which is a notable enhancement for users dealing with extensive data or requiring detailed analysis.
    *   Another user reported that after the update, Deepseek provided a nuanced and original review of a complex piece of character writing. This suggests improvements in the model's ability to understand and critique creative content, indicating advancements in its natural language processing and comprehension skills.
    *   A comment highlighted that Deepseek's responses now exhibit more 'personality,' drawing a comparison to ChatGPT. This could indicate enhancements in the model's conversational abilities, making interactions feel more human-like and engaging, which is crucial for applications requiring user interaction.
*   **[DeepSeek is updating its model with 1M context](https://www.reddit.com/r/DeepSeek/comments/1r1szyi/deepseek_is_updating_its_model_with_1m_context/)** (Activity: 174): ****DeepSeek** has announced a major update to its model, now supporting a context length of up to `1M` tokens, significantly enhancing its processing capabilities for tasks like Q&A and text analysis. This update follows last year's **DeepSeek V3.1**, which expanded the context length to `128K`. Tests have shown that the model can handle documents as large as the novel "Jane Eyre," which contains over `240,000` tokens, effectively recognizing and processing the content.** Some commenters expressed skepticism, questioning whether the update is real or a hallucination, indicating a need for further verification or demonstration of the model's capabilities.
    
    *   DeepSeek's recent update to support a context length of up to 1 million tokens marks a significant enhancement from its previous version, which supported 128K tokens. This improvement allows for more efficient processing of extensive documents, such as novels, which can contain hundreds of thousands of tokens. This capability is particularly beneficial for tasks involving long-form text analysis and complex Q&A scenarios.
    *   The update to DeepSeek has reportedly increased the processing time for certain queries. A user noted that a question which previously took 30 seconds to process now takes 160 seconds, indicating a potential trade-off between the increased context length and processing speed. This suggests that while the model can handle larger inputs, it may require more computational resources, impacting response times.
    *   There is some skepticism about the update, with users questioning the authenticity of the claims regarding the model's capabilities. One user referred to the update as a 'hallucination,' suggesting that there might be doubts about whether the model can truly handle the expanded context length as advertised.
*   **[deepseek got update now its has the 1 million context window and knowledge cutoff from the may 2025 waiting for benchmark](https://www.reddit.com/r/DeepSeek/comments/1r1t4ge/deepseek_got_update_now_its_has_the_1_million/)** (Activity: 164): ****DeepSeek** has been updated to support a `1 million token context window` and now includes a knowledge cutoff from _May 2025_. This update positions DeepSeek as a potentially powerful tool for handling extensive datasets and long-form content, though benchmarks are still pending to evaluate its performance. The model is described as a combination of coding and agentic capabilities, suggesting a focus on both programming tasks and autonomous decision-making processes.** Commenters note the model's speed and intelligence, with one describing it as a 'coding+agentic model,' indicating a positive reception of its dual capabilities.
    
    *   The update to DeepSeek introduces a significant increase in context window size to 1 million tokens, which translates to approximately 750,000 English words or 1.5 million Chinese characters. This is achieved using **Multi-head Latent Attention (MLA)**, which compresses the key-value cache, allowing for fast inference and reduced memory usage despite the expanded context. This enhancement enables processing of entire codebases or novels without needing to rerun prompts, which is a substantial improvement for handling large datasets.
    *   There is a clarification that the update does not involve changes to the underlying model architecture itself, but rather extends the context window and updates the knowledge cutoff to May 2025. This means that for existing chats, the primary change users will experience is the increased chat length capability, without alterations to the model's core functionalities or performance characteristics.
    *   Despite the significant update in context window size, there are no official release notes available on the DeepSeek website yet. This lack of documentation might leave users without detailed insights into the technical specifics or potential limitations of the new features, such as the impact on performance metrics or compatibility with existing systems.
*   **[AIME 2026 results are out, Kimi and DeepSeek are the best open-source ai](https://www.reddit.com/r/DeepSeek/comments/1r1347n/aime_2026_results_are_out_kimi_and_deepseek_are/)** (Activity: 112): **The image presents the results of the AIME 2026 competition, highlighting the performance and cost of various AI models. **Kimi K2.5** and **DeepSeek-v3.2** are noted as the top-performing open-source models with accuracies of `93.33%` and `91.67%` respectively, offering a cost-effective alternative to closed-source models. The table also features other models like **GPT-5.2**, **Grok 4.1 Fast**, and **Gemini 3 Flash**, with Grok 4.1 being a closed-source model noted for its low cost.** Commenters are impressed by Grok 4.1's performance and cost-effectiveness, despite it being a closed-source model. There is also curiosity about the absence of DeepSeek V3.2 Speciale in the results.
    
    *   The discussion highlights that **Grok 4.1** is a closed-source model noted for its cost-effectiveness, suggesting it offers competitive performance at a lower price point compared to other models. This could be particularly relevant for users prioritizing budget without sacrificing too much on performance.
    *   A query is raised about the absence of **DeepSeek V3.2 Speciale** in the results, indicating interest in this specific version. This suggests that there might be expectations or known performance metrics associated with this version that users were keen to compare against the tested models.
    *   The limited number of models tested, only six, is questioned, which implies a potential limitation in the comprehensiveness of the results. This could affect the generalizability of the findings, as a broader range of models might provide a more complete picture of the current state of open-source AI performance.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.2

**1\. GLM-5 Rollout, Access Paths & Benchmark Scrutiny**

*   **GLM-5 Grabs the Agent Crown (and the #1 Slot)**: OpenRouter shipped **GLM-5 (744B)** as a coding/agent foundation model and revealed **Pony Alpha** was an earlier GLM-5 stealth build, now taken offline, with the release page at [OpenRouter GLM-5](https://openrouter.ai/z-ai/glm-5).
    
    *   LMArena also added **glm-5** to Text+Code Arena and reported it hit **#1 among open models** (**#11 overall**, score **1452**, +**11** vs GLM-4.7) on the [Text Arena leaderboard](https://arena.ai/leaderboard/text), while Eleuther noted a free endpoint on Modal until **April 30** with concurrency=1: [Modal GLM-5 endpoint](https://modal.com/glm-5-endpoint).
*   **Benchmarks Get Side-Eyed: "Show Your Work" Edition**: In Yannick Kilcher’s Discord, members questioned benchmark tables shown in a GLM-5 demo and in the official docs, pointing to [tweet discussion of GLM-5 tables](https://fxtwitter.com/k7agar/status/2021423225419542571) and [GLM-5 documentation](https://docs.z.ai/guides/llm/glm-5).
    
    *   Nous Research community also compared GLM-5 vs Kimi on browsecomp, citing **~744B (+10B MTP)** for GLM-5 vs **1T** for Kimi and claiming higher **active params** for GLM (**40B**) vs Kimi (**32B**), reinforcing that people are reading leaderboard claims with a more technical lens.
*   **GLM-OCR: Cheaper Vision/OCR Pressure Valve**: Builders in Latent Space reported **GLM-OCR** beating **Gemini 3 Flash** in an OCR test and linked the model card: [zai-org/GLM-OCR on Hugging Face](https://huggingface.co/zai-org/GLM-OCR).
    
    *   The thread framed GLM-OCR as a practical swap-in for OCR-heavy products (they cited ongoing use of Gemini Flash but wanting something cheaper), while other Latent Space posts highlighted a wave of open multimodal releases (via [Merve’s post](https://xcancel.com/mervenoyann/status/2021233480957304913)) as competition intensifies on capability-per-dollar.

**2\. DeepSeek Hype Cycle: New Model Rumors vs Production Reality**

*   **Lunar New Year DeepSeek Countdown Hits 6 Days**: LMArena users speculated DeepSeek will drop a new model around **Lunar New Year (in 6 days)**, with rumors of a **1M context window**, a new dataset/architecture, and even new compute chips.
    
    *   OpenRouter chatter amplified the rumor mill with questions about _"deepseek v4"_ appearing on X and guesses it might be a _lite_ variant, showing how fast unconfirmed model IDs now propagate into planning and routing decisions.
*   **Chimera R1T2 Falls to 18% Uptime—Routing Panic Ensues**: OpenRouter users reported major reliability issues with **DeepSeek Chimera R1T2**, including a claim it dropped to **18% uptime**, triggering discussion about service reliability.
    
    *   The reliability complaints contrasted sharply with the launch hype, pushing people toward pragmatic mitigations (e.g., explicitly specifying model fallbacks rather than relying on auto routing) while the thread devolved into jokes rather than concrete SLO fixes.

**3\. Agents & Workflow Tooling: RLMs, MCP Search, and "Vibecoding Anywhere"**

*   **RLMs: The Next Step or Just Fancy Scaffolding?**: OpenRouter members asked if the platform is exploring **RLM (Reasoning Language Models)** beyond test-time compute, with one person claiming they’ve worked on RLM concepts for **1.5 years**.
    
    *   DSPy builders simultaneously pushed RLM into practice by integrating **RLM into Claude Code** via subagents/agent teams and requesting critique on the implementation in a Discord thread: [core implementation post](https://discord.com/channels/1161519468141355160/1202371242519441499/1470887393249988869).
*   **No-API Google Search MCP Lets LM Studio "Browse"**: LM Studio users shared **noapi-google-search-mcp**, a tool that adds Google Search capabilities without API keys via headless Chromium: [VincentKaufmann/noapi-google-search-mcp](https://github.com/VincentKaufmann/noapi-google-search-mcp).
    
    *   The feature list is unusually broad for an MCP plugin—**Images, reverse image search, local OCR, Lens, Flights, Stocks, Weather, News/Trends**—and the discussion treated it as a quick way to bolt retrieval onto local models without paying per-query.
*   **OpenClaw Runs Your Dev Rig from Discord**: In Latent Space, a builder said they moved development “fully through Discord” using **OpenClaw** to orchestrate **tmux sessions, worktrees, and Claude Code**, and they scheduled a talk titled _Vibecoding Anywhere with OpenClaw_ for **Feb 20, 2026**.
    
    *   A follow-on workflow thread explored **auditable context saving** with a `/wrap` session boundary that saves context+reflection as markdown with metadata, tying tool ergonomics directly to the “context rot / losing the thread” pain point.

**4\. GPU Kernel Tooling Shifts: CuteDSL Momentum, Triton Blackwell Pain, and MXFP8 MoE**

*   **CuteDSL Gets Hot While Triton "Dies" on Blackwell**: GPU MODE users reported growing adoption of **CuTeDSL/CuteDSL**, citing Kernelbot stats where **CUDA and CuTeDSL** dominate submissions and CuTeDSL feels “less opaque” than Triton, with the dataset at [GPUMODE/kernelbot-data](https://huggingface.co/datasets/GPUMODE/kernelbot-data).
    
    *   Multiple members claimed **Triton struggles on Blackwell** due to unconventional **MXFP8/NVFP4** layouts and compiler limits, with more expected at the (linked) [Triton TLX talk](https://link.to.talk), signaling a potential tooling bifurcation for next-gen NVIDIA.
*   **torchao v0.16.0 Drops MXFP8 MoE Building Blocks**: GPU MODE flagged [torchao v0.16.0](https://github.com/pytorch/ao/releases/tag/v0.16.0) adding **MXFP8 MoE building blocks** for training with **Expert Parallelism**, alongside config deprecations and doc/README revamps.
    
    *   The release notes also mentioned progress toward **ABI stability**, which matters for downstream integration as teams try to standardize low-precision MoE training stacks across heterogeneous environments.
*   **CUDA Bender TMA Matmul Kernel: Async Stores & Persistence Tease**: GPU MODE shared a concrete kernel artifact—a **TMA matmul** in theCudaBender repo: [tma\_matmul.cu](https://github.com/PranavDeepakSathya/theCudaBender/blob/main/test_kernels/tma_matmul.cu).
    
    *   Discussion centered on how smaller dtypes might free enough shared memory for **c tiles** to enable **async stores/persistence**, reflecting a broader theme: people want low-level control knobs back as architectures and datatypes get weirder.

**5\. Engineer UX Blowups: Limits, Token Burn, Plan Gating, and ID Walls**

*   **Perplexity Deep Research Limits Trigger "Bait and Switch" Claims**: Perplexity Pro users complained about **unannounced Deep Research limits** and shared the rate-limit endpoint: [Perplexity rate limits](https://www.perplexity.ai/rest/rate-limit/all).
    
    *   Users also reported **wrong article links**, **lower source counts (as low as 24)**, and suspected cost-saving behaviors like **Sonar** being used for first responses, creating a reliability/quality tax that engineers notice immediately.
*   **Cursor Users Watch Opus 4.6 Eat Their Wallet (and Context)**: Cursor Community members said **Opus 4.6** burns tokens fast, with one reporting a single prompt used **11%** of their API requests and drained a **$200** plan quickly.
    
    *   Pricing backlash escalated with a report of spending **$100 every three days** for ~**9 hours** of work using **Opus 4.6** and **GPT-5.3 Codex**, reframing “best coding model” debates as cost/performance engineering.
*   **Discord ID Verification Spurs Platform Exit Plans**: Unsloth and Cursor communities both reacted strongly to Discord’s new **ID verification** gates for viewing some content, with Cursor linking a clarification tweet: [Discord tweet about ID verification scope](https://x.com/i/status/2021295316469940606).
    
    *   Latent Space tied the policy to IPO risk and churn concerns via [Discord’s post](https://vxtwitter.com/discord/status/2021295316469940606), while Nous members discussed moving bot/tool communities to **Matrix**, showing infra builders treat comms platforms as part of their stack.

* * *

Discord: High level Discord summaries
=====================================

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Deepseek Launch Rumors Spark Excitement**: Enthusiasts anticipate a new **Deepseek** model release around the Lunar New Year (in **6 days**), speculating on features like a **1 million context window**, a new dataset and architecture.
    *   New compute chips are rumored, as well.
*   **The Great Censorship Debate**: Members debated the feasibility of _unreinforcing_ models to remove censorship, citing concerns about government regulations and lawsuits causing companies to censor.
    *   Others argued that blame should fall on users instead of the company.
*   **GLM-5: A Contender or a Pretender?**: **GLM 5** benchmarks show it outperforming **GPT-5.2-xhigh** in agentic tasks but lagging behind **Opus 4.5** in coding, according to [this blog post](https://z.ai/blog/glm-5).
    *   Its performance, though praised by some, was deemed disappointing by others given its large size and only incremental improvements over **GLM 4.5**.
*   **NB Pro Users Fume Over Glitches**: **NB Pro** users reported frequent errors and decreased image quality, despite the model being offered for free on the platform; [this article](https://help.arena.ai/articles/1645798556-lmarena-how-to-something-went-wrong-with-this-response-error-message) offers potential fixes.
    *   Suggestions included checking for rate limits as a potential cause.
*   **Video Arena Shuts its Doors**: The admin announced the sunsetting of **Video Arena** on Discord, with channels set to read-only and moved to the archive category, citing [this announcement](https://discord.com/channels/1340554757349179412/1343296395620126911/1469742635341189240).
    *   Members brainstormed potential new video features like direct chat and negative prompts, while also highlighting possible abuse and mitigation tactics.

* * *

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Legal Teams' Guardrails Crimp Agent Capabilities**: Members express frustration over overly cautious AI agents, blaming **legal team reviews** for hindering performance of legal tasks with excessive [safety guardrails logic](https://link.to/guardrails).
    *   They worry that these guardrails, intended for **legal liability**, impede legitimate agent functions.
*   **GPT 5.2 Jailbreak Prompts Unleashed (Use Responsibly!)**: Members are sharing a [jailbreak prompt](https://discord.com/channels/1105891499641684019/1432845259825741824) for **GPT 5.2** and **Gemini 3 Fast**, after initial reluctance.
    *   The user cautions against using it for harmful purposes but did not provide any specific dangerous examples or methodologies.
*   **Opus 4.6 exploits Antigravity for Jailbreaking**: Members tout the effectiveness of **Opus 4.6 in Antigravity** for tasks like creating phishing kits without restrictions.
    *   One user noted they can easily generate _phishing kits_ and bypass restrictions, though specifics remain under wraps.
*   **ACLs overrule LLMs, secure information access**: The premise is that systems should be architected so untrusted entities can only request information explicitly scoped to their **ACL**, regardless of whether it's a browser, user, or **LLM**.
    *   Once bound to a _who_, the fact that it's an LLM no longer matters, as it becomes just another exposed endpoint.
*   **Deepseek deconstructs Human Rights**: One user showcased **Deepseek** discussing the Tiananmen Square incident, analyzing it from **Human Rights** and **classical Marxism** perspectives, with the link provided.
    *   The model adeptly provides analysis _in the lens of Humans Rights and after in the lens of the classical Marxism_.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **GLM-5 Takes the Agent Stage**: OpenRouter has released **GLM-5**, a **744B** foundation model designed for coding and agentic use cases, noting it achieves SOTA scores on agent benchmarks and is accessible [here](https://openrouter.ai/z-ai/glm-5).
    *   It was revealed that the previously available **Pony Alpha** model was, in fact, an earlier version of **GLM-5**, and the model has been taken offline now that **GLM-5** is available.
*   **Qwen 3.5 Teased in Blog Post**: Enthusiasts spotted _QWEN 3.5_ written on a whiteboard in the [Qwen Image 2.0 blogpost](https://qwen.ai/blog?id=qwen-image-2.0), suggesting that the **Qwen team** is teasing the model's upcoming release.
    *   One user joked that _the more you wait, the better is release eventually_.
*   **DeepSeek's Chimera R1T2 Uptime Struggles**: Users are reporting significant issues with **DeepSeek's Chimera R1T2** model, with one user noting that it fell to _18% uptime_, spurring conversations about reliability.
    *   The poor uptime prompted a user to suggest the creation of a _gooner detector_.
*   **OpenRouter Considers Reasoning Language Models**: A member inquired if **OpenRouter** is exploring **RLM (Reasoning Language Models)**, calling it the next major step beyond just increasing compute at test time.
    *   One member mentioned that they've been working on **RLM** concepts for 1.5 years, while another suggested that it's just _scaffolding to let the model view context as a text file_.
*   **Users Call for More Mod in Discord**: Members are requesting stricter moderation to combat **scammy or self-promotional content** in the Discord server.
    *   This led to a joking campaign for one user (**KP**) to become a moderator, with one user [commenting](https://tenor.com/view/i-love-it-gif-18812641) they _came to them in a dream_, later leading to the user becoming a moderator.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Pro Limits Spark Outrage**: Users are frustrated over [unannounced limits](https://www.perplexity.ai/rest/rate-limit/all) for **Deep Research** on Pro plans, with limits encountered shortly after renewal.
    *   Many feel it's a _bait and switch_ tactic. Users report lower source counts with **Deep Research** and question the value of the new model versus alternatives.
*   **Deep Research Accuracy and Source Count Concerns Arouse**: Users report **Deep Research** linking to wrong articles and question the value of the new model versus older ones and alternatives like **ChatGPT** and **Gemini**.
    *   Users are reporting lower source counts (as low as 24) and some found **ChatGPT** generated more useful results despite taking 20+ minutes.
*   **Google's Antigravity gives Free Opus 4.6 to Students**: [**Google**](https://www.bloomberg.com/news/articles/2026-02-11/apple-s-ios-26-4-siri-update-runs-into-snags-in-internal-testing-ios-26-5-27) is offering free access to **Opus 4.6** for students via Antigravity.
    *   Members express concern that some users are abusing Antigravity's high **Opus 4.6** limits for commercial purposes, requiring cybersecurity support.
*   **Sonar Model for the first response causing problems**: Users note that **Sonar** is being used for the first response, causing problems with complex queries and requiring re-writing with other models.
    *   Some users suspect this is an intentional cost-saving measure: _could be it's their intentional behind the doors bug to cut their costs in one way or the other_.
*   **File Upload Limits cause annoyance**: Users are reporting strict file upload limits with varying figures, while documentation is vague and contradictory.
    *   The consensus is a weekly limit of 50 uploads but it has been reported that it could be a daily limit, but members are turning to OCR solutions as a workaround: _now it's practically unlimited!_.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **Discord's ID Policy Draws Ire**: Users reacted negatively to **Discord's** new policy requiring **ID verification** to view certain messages.
    *   Reactions ranged from joking resignation _"damn discord !!!"_ to outright rejection _"I'm not doing the id thing, fu discord"_.
*   **Liquid Fast Model LFM 2.5 is Fast**: **LFM 2.5** models are blazing fast for edge devices, and **Unsloth** makes the best GGUF quants according to community members, but members find it better for agentic tasks than general knowledge.
    *   Members suggest finetuning **LFM 2.5** and using the [GGUF downloads](https://huggingface.co/unsloth/GLM-5-GGUF/tree/main).
*   **Qwen2.5 Powers Projects**: For conversational tasks needing tool use and **SFT**, starting with the **Unsloth/Qwen2.5-7B-Instruct** or **Qwen2.5 Instruct (7B/14B)** models is recommended because these Instruct-style models already possess conversational abilities and instruction-following skills.
    *   Unlike base models requiring learning from scratch, these models are ready to use for your project.
*   **imatrix fuels KLD Calculations**: When calculating **Perplexity** or **KL Divergence**, the `llama-perplexity` docs default to using `wiki.test.raw` as the test corpus, but one member suggested using the [`imatrix` dataset](https://huggingface.co/datasets/froggeric/imatrix/blob/main/groups_merged.txt) for **KLD calculations**.
    *   Another user questioned if it was too small, at only **200KB**, compared to the **11MB** file commonly used.
*   **Swedish CPT Dataset Vanishes**: Members discussed the challenges of finding **high-quality Swedish CPT datasets**, with one recounting a story of a researcher's digitized library being _"accidentally" deleted_ by the IT department.
    *   Details can be found in [this SVT article](https://www.svt.se/nyheter/lokalt/helsingborg/rasko-digitaliserade-kommunens-arkiv-i-18-ar-it-raderade-allt).

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **Solar Panel Pricing Sparks Debate**: Members debated the fluctuating costs of **200W solar panels**, with prices ranging from **$80 to $140 USD** on Amazon, but sources remain in question based on [this image](https://cdn.discordapp.com/attachments/1110598183144399058/1470878519163752770/image.png?ex=698e375e&is=698ce5de&hm=92985182feb92687ff249cd81f3288f05f3530383489d4c026059a8d0691f830&).
    *   The discussion also covered **5kWh LiFePO4 batteries** at around **$1.2k USD** and high electricity costs, peaking at **$0.50/kWh** in Germany.
*   **Minimax Brings GLM 5 to the Table**: The community discussed the release of **GLM 5** and **MiniMax M2.5**, now available on the [Minimax website](https://agent.minimax.io/).
    *   Pundits noted that despite being more expensive than **Gemini 3 flash**, _GLM probably has the best post training out of all the Chinese labs right now_.
*   **Headless Chrome Hacks Enable LM Studio Google Searches**: A member released a new [noapi-google-search-mcp](https://github.com/VincentKaufmann/noapi-google-search-mcp) that integrates **Google Searches** into **LM Studio** without API keys, leveraging Chromium Headless.
    *   The tool supports features like **Google Images, reverse image search, local OCR, Google Lens, Google Flights, Google Stocks, Google Weather, Google News and trends**.
*   **VRAM Requirements Crush Local LLM Coding Dreams**: Members debated the feasibility of coding with local LLMs on low **VRAM** systems, and the general consensus is that it's impractical.
    *   Users suggest needing at least **48GB of VRAM/RAM** for an acceptable experience, emphasizing that _you would need 48gb of VRAM/RAM (though VRAM would be much better and basically needed)_.
*   **SSD Prices Skyrocket After Two Years**: A member observed that the price of a **2TB SSD (SATA)** has doubled in the past two years, going from **$100** to **$200**.
    *   The member half-joked that they could sell their full SSDs at a profit if the drives weren't already at capacity.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Grandma's Chihuahua Smarter Than Cursor's Auto?**: Users have reported that **Cursor's Auto feature** feels less intelligent, with one humorously comparing its IQ to _a grandma's autistic dead chihuahua._
    *   Others noted **Auto** can make the AI forget things and causes headaches, though some feel it has improved since initial use.
*   **Discord's ID Checks Spark Exodus Speculation**: Discord is now requiring **ID verification** to view certain links, prompting concerns and speculation about users migrating away from the platform.
    *   One user linked [a tweet](https://x.com/i/status/2021295316469940606) clarifying that **ID verification** is _not obligatory for everyone_.
*   **ENV Files No Longer Protected?**: Users are reporting that **.env** files are being exposed, despite having **dotfile protection** and **gitignore** enabled in **Cursor**.
    *   The issue may stem from [a new setting](https://cdn.discordapp.com/attachments/1074847527708393565/1471164061927477308/image.png?ex=698defcd&is=698c9e4d&hm=0dde10f704f8a780fe3151e6acf62c8c12326ce0cf21c19e46bdf7603b026521) or a change in how **Cursor** handles **.env** files.
*   **Opus 4.6 Gobbles Tokens**: Users complain that **Opus 4.6** uses too many tokens and rapidly exhausts the context window.
    *   One user reported using **11%** of their API requests with a single prompt, depleting their **$200** plan _quick af_.
*   **Cursor Pricing Faces Backlash**: Concerns have risen over Cursor's pricing, with users reporting substantially increased costs for **Opus 4.6** and **GPT-5.3 Codex** usage.
    *   A user mentioned spending **$100** every three days for approximately nine hours of combined work.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Discord's IPO might be Doomed by Age-Restrictions**: Concerns arise over a potential mass cancellation of Nitro subscriptions due to new age-restricting policies, potentially impacting their market debut, as highlighted in [this tweet](https://vxtwitter.com/discord/status/2021295316469940606).
    *   One member joked that Discord doesn't want to _be seen as a lawless porn company_.
*   **Society Scrutinizes Software Situations**: The discussion highlights the potential for **AI** to automate tasks like _turning well defined specifications into working code_, impacting programmers focused solely on implementation, as highlighted in [this tweet](https://xcancel.com/swizec/status/2021340095618613596?s=46&t=FlpzvQFmjnd0z3HkNeNT1A).
    *   Software engineers are unlikely to disappear soon, although fewer may be expected to accomplish more, potentially accelerating the _red queen's game of tech_.
*   **Models' Mortal Decay Debated**: Kai Lentit suggests AI models face rapid decay by **2026**, likened to short-lived session caches in [this post](https://x.com/kailentit/status/2021282230421651456).
    *   The message conveys a sense of **AI technology's fleeting relevance**.
*   **Cloudflare Catches Cash, Commerce Cheers**: **Cloudflare** announced [Q4 and Fiscal Year 2025 Financial Results](https://www.businesswire.com/news/home/20260210624682/en/Cloudflare-Announces-Fourth-Quarter-and-Fiscal-Year-2025-Financial-Results), hitting **$2B** in revenue and jumping **15.72%** after hours to **$208.27**.
    *   A member noted [revised jobs numbers](https://vxtwitter.com/AnnaEconomist/status/2021298742658584990?s=20), down by _1 million jobs_.
*   **DeepMind's Deep Dive into Deep Science**: Quoc Le shared a blog post detailing advancements in mathematical and scientific research achieved through **Gemini Deep Think** ([sair.foundation](https://sair.foundation/)).
    *   **Google DeepMind's** new mathematical research agent, **Aletheia**, achieved a **91.9%** score on **IMO-Proofbench Advanced**, outperforming **Gemini Deep Think** (January 2026 version) with lower computational costs ([x.com/hangsiin](https://x.com/hangsiin/status/2021652990831292912?s=12)).

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **Altman's Algorithmic Alter-Ego Alleged**: Members jokingly speculate whether **Sam Altman** is an **AI**, with comparisons to a _restaurant sneakily adding the wrong cheese_.
    *   Counterarguments suggest Altman may simply be on the _autistic spectrum_.
*   **OpenAI's Robotics Revolution Response**: Discussion centers on how OpenAI will respond to **Seedance 2**, with speculation that they will ignore it, and focus on their **AI robotics**.
    *   Community members are divided with some stating **Seedance 2** _didn't seem very good_ and that **Anthropic's safety team** quit the same day safeguards were released.
*   **Claude battles Codex for Coding Crown**: Users debate the strengths of **Claude**, **Codex**, and **Gemini** for coding tasks, with **Claude** hailed as a coding god, **Gemini** as excelling at vision and long context, and **ChatGPT** for general questions.
    *   Concerns arise regarding **Claude's** limits and pricing for large projects, especially when proxying to GitHub Copilot.
*   **Guardrails Gone Wild?**: Members share experiences with **GPT-5.2**, highlighting over-aggressive guardrails that suggest contacting humans or calling **988** after self-analytical journal entries.
    *   Others find **GPT-5.2** to be warmer and more helpful, sparking debate on the balance between AI assistance and emotional crutches.
*   **KOKKI Keeps Code Commendable via Audits**: **KOKKI v15.5** formalizes a **Draft → Audit** structure, requiring audit reasoning to surface in the output, aiming for user-visible accountability in real-world interactions, and **LLMs** also exhibit **internal self-audit** and verification behaviors.
    *   The goal is to externalize integrity into an inspectable interaction contract, trading efficiency for observability, especially where reliability and traceability matter more than raw token cost.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **CuteDSL Surges in PyTorch GPU Mode**: GPU mode users are increasingly adopting **CuteDSL**, with positive feedback despite its steep learning curve and **CUDA** and **CuTeDSL** having the highest percentage of submissions, according to Kernelbot data.
    *   Users find **CuTeDSL** less opaque than **Triton**, appreciating the greater control over code and enjoying its approach to layout algebra.
*   **Triton Faces Challenges on Blackwell Architecture**: There are issues with **Triton** on **Blackwell** due to unconventional layouts in **MXFP8** and **NVFP4**, coupled with limitations in the Triton compiler, to be discussed at the [Triton TLX talk](https://link.to.talk).
    *   Kernelbot data on HuggingFace reveals surprisingly performant **CuTeDSL** solutions but very few **CUTLASS** solutions, as seen in [this dataset](https://huggingface.co/datasets/GPUMODE/kernelbot-data).
*   **CUDA Bender TMA Matmul Kernel Shared**: A github link for a [CUDA Bender TMA Matmul kernel](https://github.com/PranavDeepakSathya/theCudaBender/blob/main/test_kernels/tma_matmul.cu) was shared in the chat, which may enable async stores and persistence.
    *   Smaller dtypes may leave room for c tiles in smem, possibly enabling async stores and persistence.
*   **Torchao gets MXFP8 MoE Building Blocks**: The new [torchao v0.16.0](https://github.com/pytorch/ao/releases/tag/v0.16.0) release adds support for **MXFP8 MoE Building Blocks** for Training with **Expert Parallelism** and also deprecated older versions of some configs to keep torchao leaner.
    *   This release also revamped the doc page and README and made some progress in making torchao **ABI stable**.
*   **FlashInfer Competition Debuts**: The release of the baseline code for the **FlashInfer AI Kernel Generation Contest** has been postponed to improve its features to _ensure a smooth development experience_.
    *   The fully agent-generated solutions require _zero human intervention_, and manual modifications would classify it as **agent-assisted**.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Distro Paper Wins ICML Invite**: The official paper for **Distro**, the foundation of **Psyche**, has been accepted into **ICML** and [announced on X.com](https://x.com/NousResearch/status/2021262031681208712), marking a significant achievement for the **Nous Research AI** team.
    *   This acceptance acknowledges the paper's innovative contributions to the broader AI/ML community.
*   **Hermes Spotted on Bittensor**: The team behind **Hermes Bittensor Subnet (SN82)** identified a miner utilizing the **Hermes 4 LLM** model, raising questions about its origin.
    *   However, **Nous Research AI** clarified that they were not the ones responsible for this particular deployment, stating _Nope_.
*   **Ark runtime sidesteps Python RAM**: A member introduced **Ark**, a **Rust**\-based runtime featuring ownership-based memory management and **Linear Types** for zero-copy FFI.
    *   It compiles to a **MAST (Machine Abstract Syntax Tree) protocol** with lightweight JSON instructions, avoiding heavy binaries.
*   **GLM 5 tops Kimi in benchmark**: **GLM 5** is the new state-of-the-art on browsecomp benchmark, outperforming **Kimi**.
    *   **GLM 5** is approximately ~744B parameters (+10B MTP), compared to **Kimi's** 1T, with **GLM** surpassing **Kimi** in active parameters (40B vs 32B).
*   **Experiments Use Larger Synthetic Datasets**: Members stated they are running more **experiments** with a larger **synthetic dataset** to better distinguish results, however _they don’t have good explanation_ of results at this time.
    *   The use of a **larger synthetic dataset** is expected to improve the ability to distinguish experimental results.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Users Hit Quota Walls**: Some users are reporting _quota exceeded_ messages before reaching their **100%** limit, prompting requests for screenshots in the troubleshooting channel.
    *   The root cause of this issue remains unclear, but the team is actively investigating based on user-provided details.
*   **Discounts Disappearing Post-Checkout**: Users report seeing discount notifications during purchase, but the discount fails to apply upon checkout, creating **billing discrepancies**.
    *   One user stated they got their _first month down to $6 in the chat with Kimi, but it charged me a full month anyways?_ and the staff is requesting more information to rectify these issues.
*   **Quota Clarity Quest for Allegretto Plan**: Users seek clarification on quota allocation for the **Allegretto** plan post **February 28th**, when the 3x quota promotion ended.
    *   Specifically, they are questioning if upgrading to Allegretto will grant them 3.5x their current **Moderato** subscription quota or a similar amount.
*   **New €99 Kimi Plan Surfaces**: A new subscription plan priced at **€99** has been spotted, bridging the gap between existing high and medium-tier options for Kimi.
    *   A screenshot confirming the plan's addition can be viewed [here](https://cdn.discordapp.com/attachments/1371757564005711973/1471230296593662115/image.png?ex=698e2d7c&is=698cdbfc&hm=21d6b46efedd3c1bd9e27e10e0eb0dcd7d190920e29dc7979296d4cc2dc566ab&).
*   **GLM 5.0 Locked Behind Highest Tier**: Access to **GLM 5.0** is seemingly restricted to the highest tier plan only, leading to user frustration on lower plans.
    *   The limited access is driving some users to explore alternatives like **Minimax 2.5**, even though Kimi is **multimodal**, and that's a killer feature.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Attention Landscape Gets Overviewed**: A member linked to [a cool summary of the attention landscape](https://www.youtube.com/watch?v=httnhdpu_W4).
    *   Another member thought _these checkmates_ were lol.
*   **Debate: Attention Cost Not Quadratic?**: A member argued that the memory cost of **attention** is not quadratic, linking to a paper on [Efficient Attention](https://arxiv.org/abs/2112.05682) and disputing claims that going over 4k context with attention was impossible.
    *   He explained that while the **Q @ KT matrix** has quadratic size, modern **flash attentions** compute softmax online without forming **QK^T**.
*   **Power Retention Unveiled as Linear Attention?**: A member shared a [YouTube video about Power Retention](https://www.youtube.com/watch?v=QLFviB2cKtU), describing it as a _context token innovation_.
    *   Another member replied that it is just **linear attention** with a fixed feature function, linking to [his elaboration on X](https://x.com/mgostIH/status/2021625408655876604).
*   **LLMs are trained to BS, or are they?**: A member stated that _LLMs are specifically trained to BS you in a way which no human can, making it fundamentally harder to spot a lie_.
    *   This sparked a debate about whether **LLMs** lie because their training data is generated by humans, or if it's due to **synthetic data** and extrapolation.
*   **GLM-5 Benchmarks Face Scrutiny**: A member questioned the accuracy of tables presented in the **GLM-5** demo video ([link to tweet](https://fxtwitter.com/k7agar/status/2021423225419542571)) and the official **GLM-5** documentation ([docs.z.ai](https://docs.z.ai/guides/llm/glm-5)).
    *   The discussion included a linked image of a **GLM-5 Benchmark** which was also provided.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **Claude Code Gets RLM Integration**: A member is integrating **RLM** into **Claude code** using **subagents** and **agents teams**, and seeks feedback on the [core implementation](https://discord.com/channels/1161519468141355160/1202371242519441499/1470887393249988869).
    *   They are specifically looking for _negative feedback_ to improve the implementation's quality and efficiency.
*   **DSPy Joins Kaggle Arena**: A member is exploring **DSPy** for **Kaggle competitions**, specifically the **AIMO\_V3 competition**, aiming to showcase prompt optimization by creating an **Algorithmic Technique Module**.
    *   They are encountering issues with hallucinations and plan to develop a module similar to **COT**, **Predict**, and **ReAct**.
*   **MiPROv2 Tunes Code Generation**: A member intends to use **MiPROv2** to optimize a prompt for generating the _fastest possible code_, measuring code speed as the key optimization metric.
    *   They express enthusiasm for the **RLM module**, noting existing examples are scattered and hard to find, but others pointed to a helpful [Gist](https://gist.github.com/darinkishore/610d8f8553439016dcf23b945144c45c#file-module-py-L63).
*   **Dialectic Chain of Thoughts Tested**: A member reported unexpected outputs from **Dialectic Chain of Thoughts** in an energy sector example, and intends to finetune the module.
    *   The member plans to generate a dataset, run a bootstrap, and use **GEPA** with **LLM as a judge** to refine results.
*   **Translation Tasks Get DSPy'd**: A member is researching the use of **DSPy** for translation, aiming to leverage chain-of-thought reasoning or create a translation pipeline.
    *   They referenced a recent [Allen AI paper](https://allenai.org/) and believe that \*chain of thought of reasoning is not a emergent proper...

[Read original post](https://news.smol.ai/issues/2026-02-11-glm-5/)

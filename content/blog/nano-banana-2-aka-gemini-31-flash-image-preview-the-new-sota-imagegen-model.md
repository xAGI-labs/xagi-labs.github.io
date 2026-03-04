---
title: "Nano Banana 2 aka Gemini 3.1 Flash Image Preview: the new SOTA Imagegen model"
date: "2026-02-26T05:44:39.000Z"
description: "**Google and DeepMind** launched **Nano Banana 2** (aka **Gemini 3.1 Flash Image Preview**), a leading image generation and editing model integrated across mult..."
original_link: "https://news.smol.ai/issues/26-02-26-nanobanana2/"
---

**The Best Image Model is back!**

> AI News for 2/25/2026-2/26/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**263** channels, and **12920** messages) for you. Estimated reading time saved (at 200wpm): **1283** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

Congrats to [**Perplexity on Computer**](https://x.com/perplexity_ai/status/2026695550771540489?s=20) and for [replacing Bixby as default AI on hundreds of millions of Samsung phones](https://x.com/cryptopunk7213/status/2027131287283040488?s=46) going forward, but those are more consumery news.

News that AI Engineers can use from today is [**Nano Banana 2**](https://x.com/GoogleDeepMind/status/2027051581300969755), which is more formally called 3.1 Flash Image. The big story is the pricing: it is **rated the #1 image model in the world** per [Arena](https://x.com/arena/status/2027053222876393703) and [ArtificialAnalysis](https://x.com/ArtificialAnlys/status/2027052241019175148), and yet costs **half the price** (At $67/1k images, vs Nano Banana Pro ($134/1k) and GPT Image 1.5 ($133/1k) for generation, and FLUX.2 [max] at $140/1k images for editing).

![](https://substackcdn.com/image/fetch/$s_!qaVO!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbe752c54-6f90-4bb6-8620-5c6fe0e707ea_1204x1374.png)

It comes with 6 [character consistency](https://x.com/GoogleDeepMind/status/2027051583628787880?s=20) and [search grounding](https://x.com/GoogleDeepMind/status/2027051586518765887), and great text rendering. Of course every generation is stamped by [SynthID](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/?utm_source=x&utm_medium=social&utm_campaign=&utm_content=#footnote-source-10).

![](https://substackcdn.com/image/fetch/$s_!O4wt!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F861232ef-0996-46bc-a2ac-48ad7ba4d3bd_1870x1888.png)

Of course, there’s no research detail or paper whatsoever, so our coverage ends here.

* * *

AI Twitter Recap
================

**Google’s Nano Banana 2 (Gemini 3.1 Flash Image Preview) and the new image-eval meta**

*   **Nano Banana 2 launch + rollout footprint**: Google and DeepMind shipped **Nano Banana 2** (aka **Gemini 3.1 Flash Image Preview**) as a “Flash-tier” image generation/editing model rolling out across **Gemini App, Search (AI Mode/Lens), Flow, Google Ads**, and in preview via **AI Studio / Gemini API / Vertex AI** ([Google](https://x.com/Google/status/2027051657163391104), [GoogleDeepMind](https://x.com/GoogleDeepMind/status/2027051577899380991), [GeminiApp](https://x.com/GeminiApp/status/2027052041697464629), [sundarpichai](https://x.com/sundarpichai/status/2027057726170509724), [demishassabis](https://x.com/demishassabis/status/2027063584094605732)). Product claims emphasize **world knowledge**, **improved i18n text rendering**, **aspect ratio control**, **upscaling up to 4K**, and **multi-subject consistency** (e.g., “up to **5 characters & 14 objects**”) ([Google](https://x.com/Google/status/2027051660392944035), [joshwoodward](https://x.com/joshwoodward/status/2027055559162450254)).
*   **Arena/Artificial Analysis results + pricing signal**: Multiple evaluators report Nano Banana 2 taking **#1 Text-to-Image** and strong editing placements, while undercutting “Pro” pricing—e.g., **$67 / 1k images** cited by Artificial Analysis vs ~$133–134 for GPT Image 1.5 and Nano Banana Pro ([ArtificialAnlys](https://x.com/ArtificialAnlys/status/2027052241019175148), [arena](https://x.com/arena/status/2027053222876393703), [kimmonismus](https://x.com/kimmonismus/status/2027048109801419015)). Arena added **image subcategories** and highlighted largest gains in **text rendering** and **3D imaging/modeling** ([arena](https://x.com/arena/status/2027152296547930153)). This is also a reminder that **leaderboards are becoming product levers**: “day-0” integrations (e.g., [fal](https://x.com/fal/status/2027058299095351479)) and prompt packs/templates ship alongside eval wins ([GeminiApp templates](https://x.com/GeminiApp/status/2027081255804870985), [GoogleAI prompts](https://x.com/GoogleAI/status/2027094912357761319)).
*   **Real-time search-conditioned generation**: Google repeatedly frames NB2 as powered by **real-time information and images from web search** (not just static pretraining), positioning it as “more accurate views from any window in the world” style demos ([sundarpichai](https://x.com/sundarpichai/status/2027057726170509724)).
*   **Downstream availability**: Nano Banana 2 quickly appeared in third-party products, including **Perplexity Computer** ([AravSrinivas](https://x.com/AravSrinivas/status/2027149820138533241)).

**Agentic coding + productized “tasks”, memory, and evals (and the backlash against complexity)**

*   **Agents “just work” more often now, but still fail off-distribution**: Several practitioners describe a step change in reliability/utility for coding agents across recent frontier models (e.g., GPT-5.2 / GPT-5.3 Codex, Opus 4.6, Gemini 3.1), shifting from “proof of concept” to something like delegating CLI work to juniors ([teortaxesTex](https://x.com/teortaxesTex/status/2026980249599168972), [paul\_cal](https://x.com/paul_cal/status/2027000070109909441)). Others caution that advanced ML/data engineering remains brittle off-distribution ([michalwols](https://x.com/michalwols/status/2027031882974613836), [MParakhin](https://x.com/MParakhin/status/2027027034828902421)).
*   **“Tasks” as the new packaging layer**: Microsoft’s **Copilot Tasks** pitches “talk less, do more” delegation with user-visible plans and control, in “research preview” ([mustafasuleyman](https://x.com/mustafasuleyman/status/2027111503003107377), [yusuf\_i\_mehdi](https://x.com/yusuf_i_mehdi/status/2027111916272001401)).
*   **Persistent memory becomes table stakes—and introduces interoperability pain**: A widely shared update claims Claude rolled out **auto-memory** (“remembers what it learns across sessions”) ([trq212](https://x.com/trq212/status/2027109375765356723)), echoed in the Claude ecosystem ([omarsar0](https://x.com/omarsar0/status/2027117473229676864)). Developers immediately hit workflow friction when memory/state lives in tool-specific hidden directories (hurting “multi-agent, multi-tool” continuity) ([borisdayma](https://x.com/borisdayma/status/2027087042375553059)).
*   **Tooling ships fast: PR bug-fixing bots, code↔design loops, and editor-level improvements**:
    *   **Cursor Bugbot Autofix** automates fixing issues found in PRs ([cursor\_ai](https://x.com/cursor_ai/status/2027079876948484200), [aye\_aye\_kaplan](https://x.com/aye_aye_kaplan/status/2027080562004152818)).
    *   OpenAI’s **Codex “code → design → code”** roundtrip with Figma aims to make UI iteration less lossy ([OpenAIDevs](https://x.com/OpenAIDevs/status/2027062351724527723), [figma](https://x.com/figma/status/2027068943702364250)).
    *   VS Code’s **long-distance Next Edit Suggestions** focuses on predicting _where not to edit_ and supporting “flow” ([code](https://x.com/code/status/2027093279762747526), [pierceboggan](https://x.com/pierceboggan/status/2027107798061044219), [alexdima123](https://x.com/alexdima123/status/2027163071551078845)).
*   **Eval inflation + benchmark gaming concerns**: Threads call out that high leaderboard scores can mask **token-inefficient reasoning** and failures on “bullshit tests” (e.g., repeated-token “strawberry” variants), warning against over-trusting HLE/GPQA-style metrics without cost accounting ([scaling01](https://x.com/scaling01/status/2027110908775002312)). Arena responds by adding more granular test regimes like **Multi-File React** for code models ([arena](https://x.com/arena/status/2027114744847720782)).
*   **Complexity is the real tax**: A recurring engineering concern is that “10k LOC/day” bragging creates long-term **complexity debt**—agents make it easier to ship, not easier to maintain ([Yuchenj\_UW](https://x.com/Yuchenj_UW/status/2027082979890368597)). Another angle: coding agents can create **implicit lock-in** if they “sloppify” your codebase such that working without them becomes painful ([typedfemale](https://x.com/typedfemale/status/2027187838123647338)).

**Perplexity’s distribution + retrieval stack: Samsung integration and new embedding models**

*   **Samsung S26 system-level Perplexity (“Hey Plex”)**: Perplexity says every Galaxy S26 will ship with Perplexity built in, including a wake word and deep OS integration; **Bixby routes web/research/generative queries to Perplexity** while handling on-device actions ([perplexity\_ai](https://x.com/perplexity_ai/status/2027067776217841792), [perplexity\_ai](https://x.com/perplexity_ai/status/2027067800825872454), [AravSrinivas](https://x.com/AravSrinivas/status/2027068958541799749)). This is framed as part of a broader partnership that also targets **Samsung Internet** and optional default search positioning ([perplexity\_ai](https://x.com/perplexity_ai/status/2027067812494364902)).
*   **pplx-embed / pplx-embed-context released (MIT)**: Perplexity launched two embedding model families at **0.6B and 4B**, including a “context” variant intended for doc chunk embeddings in RAG; both are **MIT licensed** and available via HF + Perplexity API, with a paper (arXiv:2602.11151) ([perplexity\_ai](https://x.com/perplexity_ai/status/2027094981161410710), [perplexity\_ai](https://x.com/perplexity_ai/status/2027095040120733703), [alvarobartt](https://x.com/alvarobartt/status/2027094524699259162)). They also disclose internal benchmarks like **PPLXQuery2Query / PPLXQuery2Doc** with **115k real queries** over **30M docs** from **1B+ pages** ([perplexity\_ai](https://x.com/perplexity_ai/status/2027095027881750923)). Arav claims the embedding models are “industry leading” ([AravSrinivas](https://x.com/AravSrinivas/status/2027096219198394614)).
*   **Strategic read**: The pair of moves—OS distribution + retrieval primitives—suggests Perplexity is trying to own both **front door** (assistant entry point) and **core search stack** (embeddings + evals), rather than depending on third-party platforms.

**Inference, kernels, and infra: MoE support, heterogeneous hardware, and KV movement**

*   **MoE becomes “first-class” in 🤗 Transformers**: Hugging Face shipped deeper MoE plumbing (loading, expert backends, expert parallelism, hub support) and highlights collaboration on faster MoE training (including with Unsloth) ([ariG23498](https://x.com/ariG23498/status/2026995823536751072), [mervenoyann](https://x.com/mervenoyann/status/2026999892099354853)).
*   **DeepSeek and multi-hardware inference seriousness**: Early in the batch, DeepSeek is called out as “serious about inference support on diverse hardware” ([teortaxesTex](https://x.com/teortaxesTex/status/2026976510360322534)). Separately, a DeepSeek DualPath detail describes staging **KV cache** in **decode-server DRAM** then moving it to prefill GPUs via **GDRDMA** to avoid local PCIe bottlenecks ([JordanNanos](https://x.com/JordanNanos/status/2027126010576298469)). This reflects a broader shift: inference is increasingly a **systems architecture problem**, not just kernel-level optimization.
*   **Kernel coverage and GPU generations**: vikhyatk describes building inference kernels across NVIDIA architectures (sm80→sm110) and notes edge-device ISA issues like Orin CPU lacking SVE ([vikhyatk](https://x.com/vikhyatk/status/2027002892083986624), [vikhyatk](https://x.com/vikhyatk/status/2027017720466985437)).
*   **Quantization isn’t uniformly safe**: Evaluations show **MiniMax M2.5 GGUF quantizations** degrade much more than expected vs Qwen3.5, arguing “just take Q4” doesn’t generalize across model families ([bnjmn\_marie](https://x.com/bnjmn_marie/status/2027043753484021810)).

**World models, agents in simulators, and “multiplayer” environments**

*   **Solaris: multiplayer Minecraft world modeling stack**: A major research drop proposes that world modeling should focus on **shared global state** rather than pixel rendering, releasing (1) a **multiplayer data collection engine**, (2) a **multiplayer DiT** with a “memory efficient self forcing design” trained on **12.6M frames**, and (3) a **VLM-judge evaluation suite** for multi-agent consistency ([sainingxie](https://x.com/sainingxie/status/2027115356318474661), [georgysavva](https://x.com/georgysavva/status/2027119472096518358)). The pitch: multi-agent capability requires a shared representation beneath individual views.
*   **LLMs as embodied controllers (toy but telling)**: A CARLA→OpenEnv port shows a small **Qwen 0.6B** learning to brake/swerve to avoid pedestrians in **~50 steps** using TRL + HF Spaces ([SergioPaniego](https://x.com/SergioPaniego/status/2027064485056241971)). This exemplifies a trend toward “LLM+env” loops where reversibility is limited and mistakes persist.

**Governance flashpoint: Anthropic vs the Pentagon on surveillance and autonomous weapons**

*   **Pentagon pressure campaign reported, then Anthropic responds publicly**: A widely shared claim says the DoD issued a “final offer” to Anthropic, including threats to label it a “supply chain risk” and demands for unrestricted military use ([KobeissiLetter](https://x.com/KobeissiLetter/status/2027031529042411581)). Anthropic then published a CEO statement drawing explicit red lines: **no mass domestic surveillance** and **no fully autonomous weapons** (given current reliability), also alleging threats involving the **Defense Production Act** ([AnthropicAI](https://x.com/AnthropicAI/status/2027150818575528261)). A widely quoted excerpt is reposted with detail ([AndrewCurran\_](https://x.com/AndrewCurran_/status/2027153267285962991)).
*   **Industry reaction + solidarity mechanics**: The stance triggered strong support from prominent researchers/engineers, framing it as values-under-pressure rather than “policy theater” ([fchollet](https://x.com/fchollet/status/2027195535594049641), [TrentonBricken](https://x.com/TrentonBricken/status/2027156295745479086), [awnihannun](https://x.com/awnihannun/status/2027172428364107826)). A petition aiming to coordinate “shared understanding” reportedly gathered signatures from OpenAI/Google staff ([jasminewsun](https://x.com/jasminewsun/status/2027197574017602016), [sammcallister](https://x.com/sammcallister/status/2027183090020311357), [maxsloef](https://x.com/maxsloef/status/2027170763447710085)). This is notable as an explicit attempt to prevent a race-to-the-bottom dynamic via transparency about where each lab stands.
*   **Why this matters technically**: The core dispute is about **capability vs. reliability** and “lawful use” language being misaligned with what frontier models can safely do today. Reliability concerns show up elsewhere in the dataset too (e.g., minimal security test cases where models leak confidential info even when instructed not to) ([jonasgeiping](https://x.com/jonasgeiping/status/2026991819607699475), [random\_walker](https://x.com/random_walker/status/2027012231636848794)).

* * *

### Top tweets (by engagement)

*   **Anthropic CEO statement on DoD demands (surveillance + autonomous weapons red lines)** — [@AnthropicAI](https://x.com/AnthropicAI/status/2027150818575528261)
*   **Google launches Nano Banana 2 / Gemini 3.1 Flash Image Preview (broad rollout + “pro at flash speed”)** — [@GeminiApp](https://x.com/GeminiApp/status/2027052041697464629), [@sundarpichai](https://x.com/sundarpichai/status/2027057726170509724), [@GoogleDeepMind](https://x.com/GoogleDeepMind/status/2027051577899380991)
*   **Perplexity + Samsung S26 system-level integration (“Hey Plex”)** — [@perplexity\_ai](https://x.com/perplexity_ai/status/2027067776217841792)
*   **Claude connectors available on free plan (150+ connectors)** — [@claudeai](https://x.com/claudeai/status/2027082240833052741)
*   **Pentagon vs Anthropic “final offer” reporting thread** — [@KobeissiLetter](https://x.com/KobeissiLetter/status/2027031529042411581)
*   **Claude Code auto-memory is huge (developer reaction)** — [@trq212](https://x.com/trq212/status/2027109375765356723)

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Qwen3.5 Model Performance and Comparisons

*   **[Qwen3.5-35B-A3B Q4 Quantization Comparison](https://www.reddit.com/r/LocalLLaMA/comments/1rfds1h/qwen3535ba3b_q4_quantization_comparison/)** (Activity: 635): **The post presents a detailed comparison of Q4 quantization methods for the Qwen3.5-35B-A3B model, focusing on their faithfulness to the BF16 baseline using metrics like **KL Divergence (KLD)** and **Perplexity (PPL)**. The analysis highlights that **AesSedai's Q4\_K\_M** achieves the lowest KLD of `0.0102`, indicating high faithfulness, while **Ubergarm's Q4\_0** significantly outperforms other Q4\_0 quantizations. The post also notes that **MXFP4** is less effective when applied post-hoc compared to during Quantization Aware Training (QAT). The efficiency score, which balances model size and KLD, ranks **AesSedai\_Qwen3.5-35B-A3B-IQ4\_XS** as the most efficient quantization. The setup used for testing includes an Intel Core i3-12100F CPU, 64 GB RAM, and an RTX 3060 GPU, with results based on the `wikitext2_test.txt` dataset.** Commenters appreciate the detailed comparison and suggest that quantizers should include such analyses in their documentation. There is also a discussion about the potential bias in using wikitext for PPL/KLD measurements, as it might be included in some imatrix datasets, suggesting the use of a fresh dataset for more accurate comparisons.
    
    *   The comment by 'ps5cfw' highlights the ambiguity in quantization terminology like 'Q4\_K\_M', emphasizing the need for standardization and clarity in documentation. This is crucial for making meaningful comparisons between different quantization methods, especially after issues like the XL debacle.
    *   'noneabove1182' points out a potential issue with using wikitext as a PPL/KLD measurement, as some datasets might include wikitext, potentially skewing results. They suggest using a fresh dataset, such as STT from a recent podcast, for more accurate comparisons. This highlights the importance of dataset transparency and selection in benchmarking.
    *   'danielhanchen' discusses ongoing investigations into the high perplexity of Q4\_K\_XL due to MXFP4 layers. They note that other quantizations like Q2\_K\_XL and Q3\_K\_XL are unaffected. The comment also mentions that the UD-Q4-K-XL quantization significantly outperforms Q4-K-M in real-world benchmarks, as shown in Benjamin Marie’s LiveCodeBench v5.
*   **[Qwen3.5 122B in 72GB VRAM (3x3090) is the best model available at this time — also it nails the “car wash test”](https://www.reddit.com/r/LocalLLaMA/comments/1rf2ulo/qwen35_122b_in_72gb_vram_3x3090_is_the_best_model/)** (Activity: 706): **The post discusses the performance of the **Qwen3.5 122B** model, which is optimized to run on a setup with `72GB VRAM` using three `3090 GPUs`. The user highlights its efficiency, achieving `25 tokens per second` with specific settings like `Temperature 0.6`, `K Sampling 20`, and `Top P sampling 0.8`. The model is noted for its ability to handle a `120k context` in Q3 mode, despite being slower than other models like GLM Air and GPT-OSS-120B. The user also mentions challenges with other configurations like MXFP4 and IQ4\_XS, which require offloading layers to RAM, reducing speed to `6-8 tok/s`.** One commenter notes achieving `34-36 tok/sec` with a different setup, using **Qwen3.5-122B-A10B-UD-Q4\_K\_XL** and a Ryzen 9 9950X3D with RTX 5090. Another comment critiques the 'car wash test' as a biased scenario that exploits model training biases, suggesting it is not a definitive measure of model intelligence.
    
    *   A user reports achieving **34-36 tokens per second** with the `Qwen3.5-122B-A10B-UD-Q4_K_XL` model and **16-18 tokens per second** with the `Qwen3.5-122B-A10B-UD-Q8_K_XL` model, both at a maximum context size of 256K. Their setup includes a Ryzen 9 9950X3D, RTX 5090, and 128 GB DDR5 5600 RAM, running on Cachy OS Linux, which is based on Arch Linux.
    *   The 'car wash test' is critiqued as being less meaningful than often suggested. It is described as a scenario that frequently appears in training data, which biases the model to replicate learned logic rather than demonstrating genuine reasoning ability. This test is seen as a targeted probe of a specific model weakness rather than a comprehensive measure of intelligence.
    *   There are reports of issues with the 4-bit Unsloth quantization in the Qwen3.5 model series, suggesting potential for further optimization. Despite these issues, the model is noted for its impressive performance, especially in contrast to previous releases that did not meet expectations.
*   **[Qwen/Qwen3.5-35B-A3B creates FlappyBird](https://www.reddit.com/r/LocalLLaMA/comments/1ret353/qwenqwen3535ba3b_creates_flappybird/)** (Activity: 372): **The post discusses the use of the **Qwen/Qwen3.5-35B-A3B** model to create a Flappy Bird clone using HTML, CSS, and TypeScript, initialized with Vite. The model, hosted locally, demonstrated effective coding capabilities by generating a basic game structure and implementing features like music using the Web Audio API, a scrollable parallax background, and a flock of birds. The user noted some initial visual glitches with the parallax effect, which were resolved with minor adjustments, and successfully added a sound settings panel in a single attempt.** One commenter suggested the potential for open model companies to conduct repeated benchmarks or tests with different games to evaluate performance, indicating interest in further exploration of the model's capabilities.
    
    *   BitXorBit raises an interesting point about the potential for open model companies to prepare for repeated benchmarks or tests. They suggest trying different games and sharing results, which could provide insights into the model's adaptability and performance across various tasks. This could be particularly relevant for evaluating the generalization capabilities of models like Qwen/Qwen3.5-35B-A3B.
    *   ShengrenR suggests a next step in the project: training a reinforcement learning (RL) model to play Flappy Bird based on screen input. This would involve using the visual data from the game to inform the model's actions, potentially leading to a more sophisticated AI capable of learning and adapting to the game's challenges in real-time.
*   **[Qwen 3.5 craters on hard coding tasks — tested all Qwen3.5 models (And Codex 5.3) on 70 real repos so you don't have to.](https://www.reddit.com/r/LocalLLaMA/comments/1reds0p/qwen_35_craters_on_hard_coding_tasks_tested_all/)** (Activity: 917): **The image is a snapshot from the APEX Testing website, which evaluates AI coding models on real-world coding tasks. It shows that 34 models were tested across 65 tasks, with a total of 2208 runs, and highlights the top models based on ELO scores, including Claude Opus 4.6 and GPT 5.2 Codex. The post discusses the performance of various models, notably Qwen 3.5 and Codex 5.3, on a benchmark designed to test coding models on real codebases. Qwen 3.5 models, particularly the 397B variant, struggle with complex tasks requiring coordination across multiple files, while Codex 5.3 shows consistent performance across difficulty levels. The GLM-4.7 quantized model is noted as the best local model, outperforming Qwen 3.5 models. The post also mentions the use of an agentic tool-use system for fairer comparisons and highlights the importance of the framework used in testing, as it can significantly impact model performance.** Commenters discuss the performance of specific models like gpt-oss-20b and GLM-4.7, questioning whether the custom agentic framework used might affect results. They suggest testing with popular frameworks to ensure the framework isn't limiting model performance, as different frameworks can lead to significant performance variations.
    
    *   UmpireBorn3719 highlights a comparison between `gpt-oss-20b` and `Qwen3 Coder Next`, noting that `gpt-oss-20b` scored `1405` while `Qwen3 Coder Next` scored `1328` in the coding task benchmarks. This suggests that `gpt-oss-20b` may perform better in certain coding scenarios, although the specific tasks and conditions of the benchmark are not detailed.
    *   metigue discusses the impact of using different agentic frameworks on model performance, noting that open-source models can show more than `50%` performance swings depending on the framework used. They suggest testing with popular frameworks as the choice of framework can significantly alter which model appears to be the best, citing examples where `GLM-5` outperforms `Opus 4.6` and `Codex 5.3` outperforms both when using the `Droid` framework.
    *   Hot\_Strawberry1999 appreciates the inclusion of benchmarks with different quantization levels, noting that such comparisons are rare. This suggests that the quantization level can significantly impact model performance, and having this data is valuable for understanding how models might perform under different computational constraints.
*   **[Qwen3.5 27B better than 35B-A3B?](https://www.reddit.com/r/LocalLLaMA/comments/1re72h4/qwen35_27b_better_than_35ba3b/)** (Activity: 771): **The image compares the performance of different models in the Qwen3.5 Medium series, specifically the 35B-A3B, 27B, and 122B-A10B models. It highlights various benchmarks such as instruction following, graduate-level reasoning, and multilingual knowledge. The 27B model is noted for its efficiency, particularly in environments with limited resources like 16 GB of VRAM and 32 GB of RAM, making it a potentially better choice over the 35B-A3B model in such scenarios. The image provides a visual representation of these performance metrics, aiding in the decision-making process for users with specific hardware constraints.** One user mentions personal testing, indicating that the 27B model performs better on their hardware, a 3090 GPU, with a difference in processing speed of 100 t/s compared to 20 t/s. This suggests that the 27B model may offer better performance efficiency on certain hardware configurations.
    
    *   FusionCow notes a performance difference between the Qwen3.5 27B and 35B-A3B models on a 3090 GPU, with the 27B model achieving `100 tokens/second` compared to `20 tokens/second` for the 35B-A3B. This suggests that the 27B model is more efficient in terms of speed, which could influence user choice based on processing time requirements.
    *   boinkmaster360 suggests that the Qwen3.5 27B model is a dense model, implying it might be slower but potentially more intelligent. This highlights a trade-off between computational speed and model complexity, where denser models may offer improved performance in certain tasks due to their architecture.
    *   Alternative\_You3585 points out that the Qwen3.5 27B model likely excels in intelligence compared to the 35B-A3B, but the latter may have advantages in real-world knowledge and processing speed. This indicates a nuanced performance landscape where different models may be preferable depending on the specific application requirements.

### 2\. Geopolitical and Access Issues in AI Models

*   **[American closed models vs Chinese open models is becoming a problem.](https://www.reddit.com/r/LocalLLaMA/comments/1rfg3kx/american_closed_models_vs_chinese_open_models_is/)** (Activity: 1387): **The post discusses the challenges faced by organizations that require open AI models due to national security concerns, specifically avoiding Chinese models due to perceived risks. The only recent American model available is `gpt-oss-120b`, which is outdated compared to modern models like GLM and MiniMax. The author suggests that pressure on companies like **Anthropic** by the **DoD** may be due to a need for offline AI solutions. Alternatives like **Cohere** in Canada are considered, but the lack of competitive open American models is a significant issue.** Commenters suggest modifying Chinese models to create custom solutions, and mention **Mistral Large 3** as a potential alternative, though it may not match the capabilities of Chinese models. There is skepticism about **StepFun-AI** being a viable non-Chinese option, as it is also based in China.
    
    *   The discussion highlights the availability of various AI models from different countries, emphasizing that the choice of model should be based on specific use cases rather than national origin. For instance, **Mistral Large 3** is mentioned as a competitive model, though not necessarily superior to Chinese models like **DeepSeek**. The commenter suggests that enterprise environments can benefit from fine-tuning models to meet specific needs, which can mitigate potential security concerns.
    *   A detailed list of AI models from different countries is provided, showcasing the diversity in AI development globally. Notable mentions include **Llama** from Meta Platforms in the US, **Qwen** from Alibaba Cloud in China, and **Mistral** from Mistral AI in France. The commenter argues that the effectiveness of a model is highly dependent on its application, and enterprises should focus on customizing models through techniques like fine-tuning and RAG databases to enhance performance and address security issues.
    *   The commenter argues that concerns over the origin of AI models, such as potential backdoors, are less relevant when models are used offline and fine-tuned for specific enterprise needs. They suggest that companies can leverage open-source models by fine-tuning them, applying techniques like (Q)(Re)LoRAs, and building RAG databases to improve accuracy and security. This approach is common among hobbyists on platforms like Huggingface, indicating that enterprises with budgets should be capable of similar customizations.
*   **[DeepSeek allows Huawei early access to V4 update, but Nvidia and AMD still don’t have access to V4](https://www.reddit.com/r/LocalLLaMA/comments/1rf7m85/deepseek_allows_huawei_early_access_to_v4_update/)** (Activity: 559): **DeepSeek has provided early access to its V4 AI model update to **Huawei** and other domestic suppliers, aiming to optimize the model's performance on their hardware. This strategic move excludes major US chipmakers like **Nvidia** and **AMD**, who have not received access to the update. The decision is likely influenced by the need for compatibility and optimization on non-Nvidia hardware, as DeepSeek's models are typically trained on Nvidia platforms, suggesting a focus on enhancing performance for Huawei's specific hardware architecture.** Commenters speculate that Nvidia's lack of access is not surprising, as DeepSeek models are generally optimized for Nvidia hardware. The early release to Huawei is seen as a strategic move to ensure compatibility with non-Nvidia systems, highlighting the competitive dynamics in AI hardware optimization.
    
    *   jhov94 suggests that DeepSeek is likely optimized for Nvidia hardware, implying that Nvidia might not need early access to V4 since the models are already compatible with their systems. The early release to Huawei could be due to compatibility issues with their hardware, which might require additional adjustments or optimizations.
    *   ResidentPositive4122 reflects on the media hype surrounding DeepSeek, particularly during its initial announcements, and advises skepticism towards mainstream media claims. They suggest that despite the lack of early access for Nvidia and AMD, major inference providers will likely adapt to V4 shortly after its release, as is common with new model launches.
    *   stonetriangles questions the significance of Nvidia not receiving early access to V4 by comparing it to previous versions like R1, V3, or V3.2, where Nvidia also did not have early access. This implies that the current situation is not unusual and may not warrant concern.

### 3\. AI Model Leaderboards and Benchmarks

*   **[Anthropic Drops Flagship Safety Pledge](https://www.reddit.com/r/LocalLLaMA/comments/1remcej/anthropic_drops_flagship_safety_pledge/)** (Activity: 354): ****Anthropic** has decided to drop its flagship safety pledge, which was a commitment to prioritize safety in AI development. This decision marks a significant shift in their approach to AI governance and safety protocols. The pledge was initially designed to ensure that AI systems are developed with a strong emphasis on ethical considerations and risk mitigation, but the reasons for its withdrawal have not been explicitly detailed by the company.** The comments reflect a critical view of Anthropic's decision, with some suggesting that external pressures, possibly from governmental or defense entities, may have influenced this change. There is a sentiment that this move could compromise the ethical standards previously upheld by the company.
    
    *   till180 discusses the implications of Anthropic dropping their safety pledge, suggesting that while public models may still have safety guardrails, the removal of the pledge could facilitate selling models to the US military. This is in light of recent demands from the Pentagon for Anthropic to provide their models, indicating a potential shift in the company's operational focus and ethical stance.
*   **[Anthropic is the leading contributor to open weight models](https://www.reddit.com/r/LocalLLaMA/comments/1re6ifz/anthropic_is_the_leading_contributor_to_open/)** (Activity: 839): ****Anthropic** is reportedly the leading contributor to open weight models, albeit unintentionally, as their models are being distilled against their terms of service. The process of distillation involves using interactions with the model to create a smaller, efficient version, and tools like [dataclaw](https://github.com/peteromallet/dataclaw) facilitate publishing these interactions to platforms like HuggingFace. **DeepSeek** has distilled `150k` chat rounds, but many users have significantly more data available.** Commenters suggest a strategy of 'distributed distillation' where users contribute to distillation efforts, potentially incentivized by tokens. There's a sentiment that open-source efforts, even if led by non-American entities, are beneficial for the community.
    
    *   The concept of 'distributed distillation' is suggested as a method for improving model training by leveraging user interactions. This involves users asking questions that can be used for distillation, potentially incentivized by offering tokens like 'qwen-3.5'. This approach could enhance the dataset diversity and quality for training open models.
    *   A tool called 'dataclaw' is mentioned, which allows users to publish their Claude Code conversations to HuggingFace with a single command. This could facilitate the sharing and distillation of large datasets, as evidenced by DeepSeek's distillation of 150k chat rounds, highlighting the potential for users to contribute significantly more data from their own collections.
    *   The discussion touches on the geopolitical aspect of AI development, with some users expressing a preference for Chinese open-source contributions over American ones. This sentiment underscores the global nature of AI development and the importance of open-source models in fostering international collaboration and competition.
*   **[Self Hosted LLM Leaderboard](https://www.reddit.com/r/LocalLLM/comments/1rfi2aq/self_hosted_llm_leaderboard/)** (Activity: 324): **The image presents a leaderboard for self-hosted large language models (LLMs), categorizing them into tiers S, A, B, C, and D based on their performance. Models are listed with their names and parameter sizes, such as "Kimi K2.5" and "GLM-5" in the top S tier. The leaderboard allows filtering by specific capabilities like coding, math, reasoning, and efficiency, providing a comprehensive overview of model performance for self-hosting purposes. The leaderboard is hosted on [Onyx](https://www.onyx.app/self-hosted-llm-leaderboard).** Commenters discuss the absence of the Qwen 3.5 models, suggesting they should be included in the A or B tier due to their capabilities, including vision support, which is beneficial for homelab and small business applications. There is also a mention of Qwen3-Next and Qwen3-Coder-Next as top-performing models for standard hardware.
    
    *   The Qwen 3.5 models, particularly the 27B dense and 122B MoE versions, are highlighted for their potential to rank in the A-tier or B-tier of self-hosted LLMs. These models are noted for their vision capabilities, which are beneficial for applications in homelabs and small businesses, suggesting they should be included in the leaderboard.
    *   Qwen3-Next and Qwen3-Coder-Next, both at 80B parameters, are praised for their performance on standard hardware. These models are considered highly effective, especially in coding tasks, and their absence from a coding-focused leaderboard is seen as a significant oversight.
    *   There is a discussion about the hardware requirements for running S-tier models, though specific details are not provided in the comments. This suggests a need for further clarification on the computational resources necessary to effectively deploy top-tier self-hosted LLMs.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Nano Banana 2 and Gemini 3.1 Flash Developments

*   **[Google releases Nano banana 2 model](https://www.reddit.com/r/singularity/comments/1rfe27w/google_releases_nano_banana_2_model/)** (Activity: 984): ****Google** has released the **Nano Banana 2** model, an advanced AI image generation model that integrates professional-grade capabilities with rapid processing speeds. This model is noted for its enhanced world knowledge, production-ready specifications, and improved subject consistency, allowing users to generate high-quality images efficiently. For more details, refer to the [Google Blog](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/).** Users are impressed with the model's performance, particularly in tasks it previously struggled with, such as complex image generation for home remodeling, indicating significant improvements in image quality and consistency.
    
    *   BuildwithVignesh provides links to Google's official blog and the Gemini API documentation, which are crucial for developers looking to integrate or understand the capabilities of the Nano Banana 2 model. The blog likely details the model's features, improvements, and potential applications, while the Gemini API documentation would offer technical guidance on implementation and usage.
    *   JTwoXX highlights a limitation of the Nano Banana 2 model, noting that it still struggles with generating PNG images without a background. This suggests that while the model may have advanced in other areas, there are still specific technical challenges that need to be addressed, particularly in image transparency and background handling.
    *   bentendo93 shares a practical application of the Nano Banana 2 model, using it for home remodeling visualizations. This indicates the model's improved performance in generating realistic and useful images for practical scenarios, which could have implications for industries like interior design and architecture.
*   **[Gemini 3.1 Flash (Nano Banana 2) Spotted Live in Gemini Ahead of Official Release](https://www.reddit.com/r/Bard/comments/1rf908n/gemini_31_flash_nano_banana_2_spotted_live_in/)** (Activity: 287): **The image depicts an early access interface for the upcoming **Gemini 3.1 Flash**, internally known as **Nano Banana 2**. This suggests a staged rollout of the model within the Gemini platform, even though no official announcement has been made yet. The interface includes a loading message for "Nano Banana 2," indicating that users can select and potentially interact with the model, hinting at its imminent release.** One comment highlights the impressive detail in the model's output, specifically noting the intricate depiction of a bird reflected in an eye, suggesting high-quality rendering capabilities.
    
    *   Ggoddkkiller highlights a concern about Google's handling of customer relations, particularly in the context of the Vertex AI platform. The comment suggests dissatisfaction with Google's approach to customer engagement and support, especially when compared to the excitement around the Gemini 3.1 release. This reflects a broader sentiment in the tech community about the need for better customer service and transparency from major tech companies like Google.
*   **[Nano Banana 2 is real! Gemini 3.1 Flash Image just appeared in Vertex AI Catalog](https://www.reddit.com/r/Bard/comments/1rea45x/nano_banana_2_is_real_gemini_31_flash_image_just/)** (Activity: 264): **The image in the post is a side-by-side comparison of two AI-generated portraits, showcasing the capabilities of the newly released **Nano Banana 2** (also known as Gemini 3.1 Flash Image) and the existing Nano Banana Pro. The post highlights that the new model, despite being a 'Flash' tier, offers quality close to the Pro version, particularly excelling in spatial logic for dense compositions. This model is designed for high-speed, low-cost production, suitable for high-frequency pipelines like bulk UGC ad creation. It retains features from the Nano Banana series, such as multi-subject reference and high-fidelity style transfer, making it a significant release for 2026.** One commenter believes that the Nano Banana Pro still has an edge over the new model in the provided example, while another expresses a desire for a video model with similar capabilities.
    
    *   The original Flash Image model had solid image quality, but faced issues with prompt adherence, particularly with complex instructions where it would often ignore parts of the prompt or regenerate the same output. Additionally, it struggled with text and infographic rendering, as well as multi-image compositing. The key question for the new Gemini 3.1 Flash Image is whether these issues have been addressed, and proper testing on dense prompts is awaited to confirm any improvements.
*   **[Nano Banana 2 pricing !!!!](https://www.reddit.com/r/Bard/comments/1rfdmhh/nano_banana_2_pricing/)** (Activity: 206): **The image provides pricing details for two AI products, "Nano Banana 2" and "Nano Banana Pro." "Nano Banana 2" is marketed as offering pro-level visual intelligence with a pricing structure of `$0.50` for input and `$3.00` for output. In contrast, "Nano Banana Pro" is described as a state-of-the-art image generation and editing model, with input priced at `$2.00` and output at `$12.00`. Both products have a knowledge cut-off date of January 2025. The pricing suggests a tiered approach to AI services, with the Pro version being significantly more expensive, likely due to enhanced capabilities or features.** Commenters compare the pricing and capabilities of "Nano Banana" products with "Gemini 3 Pro Image" and "Gemini 3.1 Flash Image," noting that the latter's pricing scales with image resolution. There is a debate on whether "Nano Banana Pro" offers better quality than "Nano Banana 2," with some suggesting the quality is comparable.
    
    *   **Ggoddkkiller** provides a detailed breakdown of the token costs for the Gemini 3 Pro Image and Gemini 3.1 Flash Image models. The Pro Image charges 560 tokens per input image, with output costs scaling by resolution, while the Flash Image charges 1120 tokens per input image with different scaling. The Flash Image is slightly cheaper than the Pro, but the pricing structure is complex and not as low as some users hoped.
    *   **Halpaviitta** shares insights from personal testing, noting that the new model is approximately four times cheaper and slightly faster than the Pro version. This suggests a significant cost-performance advantage, making it a favorable option despite the initial concerns about pricing.
    *   **Actual\_Committee4670** mentions that the generation speed is currently slow, which affects the ability to fully test the new model. However, they express a positive outlook on the cost of the new model, indicating that the pricing might be justified if performance improves.

### 2\. Anthropic and Pentagon AI Safeguard Dispute

*   **[Anthropic rejects Pentagon's "final offer" in AI safeguards fight](https://www.reddit.com/r/singularity/comments/1rfpd5s/anthropic_rejects_pentagons_final_offer_in_ai/)** (Activity: 1863): ****Anthropic** has declined the **Pentagon's** final offer concerning the deployment of its AI model, **Claude**, due to inadequate safeguards against potential misuse in mass surveillance and autonomous weapons. The Pentagon has responded with threats to blacklist Anthropic and potentially invoke the **Defense Production Act**. Despite these tensions, Anthropic is open to further negotiations, underscoring the broader challenges of AI deployment in classified environments, as other companies like **xAI** face similar contractual dilemmas. For more details, see [Anthropic's statement](https://www.anthropic.com/news/statement-department-of-war).** The comments reflect a positive view of Anthropic's stance, with users expressing respect for the company's commitment to its principles, despite the low bar set by industry standards.
    
*   **[Exclusive: Hegseth gives Anthropic until Friday to back down on AI safeguards](https://www.reddit.com/r/OpenAI/comments/1re686c/exclusive_hegseth_gives_anthropic_until_friday_to/)** (Activity: 1434): ****Defense Secretary Pete Hegseth** has issued an ultimatum to **Anthropic**, demanding the removal of safety guardrails from its **Claude AI** model by Friday, as reported by [Axios](https://www.axios.com). The Pentagon seeks unrestricted access to Claude for purposes including domestic surveillance and autonomous weapons development, which contravenes Anthropic's terms of service. Failure to comply could lead to the invocation of the **Defense Production Act** or the designation of Anthropic as a supply chain risk, potentially blacklisting them from government contracts.** A notable comment highlights the irony of AI companies imposing safety measures on government use, contrasting with typical regulatory roles. This reflects a broader debate on the balance of power and responsibility between tech companies and government entities in AI governance.
    
*   **[Statement from Dario Amodei on our discussions with the Department of War](https://www.reddit.com/r/ClaudeAI/comments/1rfp7u4/statement_from_dario_amodei_on_our_discussions/)** (Activity: 917): ****Dario Amodei** of **Anthropic** has issued a statement regarding their collaboration with the Department of War, emphasizing their stance against the use of AI for mass surveillance and autonomous weapons. The company is pioneering the integration of AI into classified networks, but insists on maintaining safeguards to protect democratic values, despite external pressures to relax these measures. For more details, see the [original statement](https://www.anthropic.com/news/statement-department-of-war).** Commenters express skepticism about Anthropic's ethical stance, noting the irony of partnering with **Palantir**, a company known for its involvement in surveillance. Others view the statement as a bold move given the current political climate.
    

### 3\. Qwen Model Performance and Optimization

*   **[Big love to the Qwen 🧠 A true SOTA Open Source model running locally (Qwen 3.5 35B 4-bit) - Here is the fix for the logic loops! ❤️](https://www.reddit.com/r/Qwen_AI/comments/1rex0vo/big_love_to_the_qwen_a_true_sota_open_source/)** (Activity: 173): **The post discusses the implementation of the **Qwen3.5-35B-A3B-4bit** model, highlighting its initial issues with reasoning loops and logic errors typical of 4-bit quantized models. The author resolved these by adjusting the system prompt to enforce 'Adaptive Logic,' which separates the model's internal 'thinking' from its final output, significantly improving performance on the [Digital Spaceport Benchmark suite](https://digitalspaceport.com/about/testing-local-llms/). The model successfully solved complex logic and math problems, generated SVG code, and performed accurate counting. Key configuration settings include a temperature of `0.7`, top-p of `0.9`, and a frequency penalty of `1.1`. The 'Anti-Loop' system prompt is crucial for preventing repetitive loops and ensuring efficient task execution.** A commenter noted the effectiveness of the Qwen3.5-35B-A3B model on a MacBook Pro M4 with 48GB RAM, appreciating the model's 'thinking' feature and planning to incorporate the shared prompt tips. The context length was set to `128k`, which may contribute to its improved performance.
    
    *   A user reported using the Qwen 35B A3B model on a MacBook Pro M4 with 48GB RAM, highlighting its improved performance over the previous 30B version. They noted that the 35B model is less prone to getting stuck in logic loops, which was a concern with earlier versions. The context length is set to 128k, allowing for extensive input processing, and the 'thinking' feature provides insight into the model's decision-making process.
    *   There is a discussion about whether the Qwen 35B A3B model performs better with or without the 'thinking' feature enabled. This feature allows users to see what the model is considering, which can be beneficial for understanding its decision-making process. However, there is curiosity about the model's behavior when it cannot generate an answer, suggesting that the 'thinking' feature might help mitigate such issues.
*   **[Qwen3.5-122B-A10B vs. old Coder-Next-80B: Both at NVFP4 on DGX Spark – worth the upgrade?](https://www.reddit.com/r/Qwen_AI/comments/1re8tje/qwen35122ba10b_vs_old_codernext80b_both_at_nvfp4/)** (Activity: 63): **The post discusses a comparison between the **Qwen3.5-122B-A10B** and the older **Qwen3-Coder-Next-80B** models, both running on a **DGX Spark (128GB)** with **NVFP4** precision. The **122B-A10B** model requires `61GB` of memory compared to `40GB` for the **Coder-Next-80B**, but both fit within the available memory with ample context headroom. Official benchmarks show **122B-A10B** scoring `72.0` on SWE-Bench, slightly higher than **Coder-Next-80B**'s `~70`. The post questions whether the **122B-A10B** offers significant improvements in coding performance or if it is more suited for general agent tasks, especially given its `10B active parameters` compared to **Coder-Next**'s `3B`. The author seeks real-world NVFP4 comparisons, particularly in long-context retrieval and coding benchmarks like LiveCodeBench/BigCodeBench.** One commenter notes that the **122B-A10B** model currently underperforms in coding tasks compared to **Coder-Next-80B**, citing issues with generating a simple game. Another suggests that while **122B-A10B** offers better multi-file reasoning and long-context handling, the coding performance gains are minimal, making **Coder-Next-80B** still competitive for coding-focused workloads.
    
    *   flavio\_geo highlights that the Qwen3.5-122B model, when tested in Q4KXL quantization, underperformed in coding tasks compared to the older Qwen3-Coder-Next-80B model, which was tested in Q6KXL. Specifically, the 122B model struggled with a coding task involving creating a Pygame version of the Chrome dinosaur game, making multiple errors before achieving a working version, whereas the Coder-Next model succeeded in one attempt with high-quality output. This suggests that the 122B model may not yet be fully optimized in the current `llama.cpp` engine.
    *   qubridInc notes that while the Qwen3.5-122B-A10B model offers improved multi-file reasoning and long-context handling, the coding performance gains over the Coder-Next-80B model are minimal. For workloads focused on coding, the Coder-Next model remains competitive. However, for tasks requiring stronger general reasoning and agentic capabilities, the 122B model could be beneficial.
    *   klop2031 shares an observation that the larger Qwen3.5-122B model performed poorly even compared to a smaller 27B dense model. This could be attributed to the specific task or the quantization method used. The commenter expresses hope for future optimizations in the `llama.cpp` framework to improve the model's performance.
*   **[Qwen Code looping with Qwen3-Coder-Next / Qwen3.5-35B-A3B](https://www.reddit.com/r/Qwen_AI/comments/1rehely/qwen_code_looping_with_qwen3codernext_qwen3535ba3b/)** (Activity: 26): **The user is experiencing looping issues with the `Qwen3-Coder-Next` and `Qwen3.5-35B-A3B` models when using `Qwen Code` with unsloth quantizations. The setup involves running the models on `llama.cpp` with specific configurations such as `ctx-size 131072`, `flash-attn on`, and `n-gpu-layers 999`. The looping issue might be related to the model or the specific implementation in `Qwen Code`. The user is seeking advice on whether this is a known issue and any potential workarounds.** One commenter suggests using `nvfp4` quant for `Qwen3-Coder-Next` with `sglang` for better stability, while another recommends setting a maximum thinking time to mitigate looping. Additionally, switching to the `pwilkin/autoparser` branch of `llama.cpp` is suggested to fix XML and duplicate-key parsing issues, with further advice to use `--repeat-penalty 1.08` and `--presence-penalty 0.05` if problems persist.
    
    *   Prudent-Ad4509 discusses using `nvfp4 quant` for Qwen3-Coder-Next with `sglang`, noting the difficulty due to the instability of the llama-server. They mention that Qwen3.5's test results are not convincing outside of official benchmarks, but highlight that the Qwen3.5 27b Q8 model is particularly effective.
    *   ImJustNatalie reports encountering 'doom looping' with Qwen3.5 35B A3B and suggests setting the max thinking time to 1 minute to mitigate the issue. This adjustment has significantly improved performance, reducing the occurrence of looping.
    *   walt3i provides a solution for the 'looping ReadFile' issue by switching to the `pwilkin/autoparser` branch, which addresses XML and duplicate-key parsing problems. They also suggest using `--repeat-penalty 1.08` and `--presence-penalty 0.05` if the issue persists.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5

**1\. Nano Banana 2 & Arena Leaderboards Heat Up**

*   **NB2 Crowns Image Arena, Web Search Wobbles**: **Nano Banana 2** debuted as **Gemini‑3.1‑Flash‑Image‑Preview** and landed at **#1 in Image Arena**, adding a new **web search capability** ([Gemini 3.1 Flash Image Preview](https://ai.google.dev/gemini-api/docs/models/gemini-3-1-flash-image), [Image Arena leaderboard](https://arena.ai/leaderboard/image-edit)).
    
    *   Users concluded **NB Pro** still beats **NB2** on text curvature and non‑human characters while reporting frequent _"something went wrong"_ errors and unreliable **web search**, noting NB2 remains faster but lower quality than Pro ([Gemini 3.1 Flash Image Preview](https://ai.google.dev/gemini-api/docs/models/gemini-3-1-flash-image)).
*   **P‑Video Debuts, Price‑Tagged Performance**: **P‑Video** entered the **Video Arena** leaderboards, pricing generation at **$0.04/second** for **1080p** outputs ([Video Arena](https://arena.ai/video)).
    
    *   The community framed **P‑Video** as a competitive price‑performance option against incumbents, tracking its initial placement and waiting for longer‑horizon quality evals on the public leaderboard ([Video Arena](https://arena.ai/video)).
*   **Seedream‑5.0‑Lite Climbs Multi‑Image Edit**: **Seedream‑5.0‑Lite** tied for **top 5** on the **Multi‑Image Edit Arena** leaderboard, signaling rapid gains in multi‑image compositional editing ([Multi‑Image Edit leaderboard](https://arena.ai/leaderboard/image-edit)).
    
    *   Practitioners highlighted **Seedream’s** strong controllability and consistency in multi‑image edit tasks, watching for further advances as new datasets and evals roll in ([Multi‑Image Edit leaderboard](https://arena.ai/leaderboard/image-edit)).

**2\. Quantization & Inference Infra: Practical Wins and Warnings**

*   **MXFP4 Math Sparks Qwen3.5 Quant Quibbles**: Engineers reported unusually high perplexity/KL on **Qwen3.5‑35B ud‑q4\_k\_xl** dynamic quants, prompting an investigation and suggestions to compare **MXFP4** vs **Q4K** tensor mixes ([Reddit: best Qwen3.5 GGUF for 24GB VRAM](https://www.reddit.com/r/LocalLLaMA/comments/1resggh/best_qwen3535ba3b_gguf_for_24gb_vram/)).
    
    *   The **Unsloth** team emphasized their dynamic quants are validated for **long context lengths** while users proposed A/Bs that “replace MXFP4 tensors with regular Q4K ones” to isolate regressions, amid broader method talk spurred by their **DPO** primer ([Unsloth DPO blog](https://blog.unsloth.ai/direct-preference-optimization/)).
*   **LM Link Tunnels Remote LLMs, E2E Encrypted**: **LM Studio** launched **LM Link** to load and use models on remote rigs as if local, built with **Tailscale** and **end‑to‑end encryption** with no open ports required ([LM Link](https://link.lmstudio.ai)).
    
    *   Users requested direct‑IP modes, image/video support, and mobile apps while noting **0.4.5 build 2** fixes and a Tailscale deep dive on the design and network posture ([LM Link on Tailscale blog](https://tailscale.com/blog/lm-link-remote-llm-access)).
*   **E‑Waste GPUs Hit 26 t/s on Qwen 3.5 Q6**: A practitioner hit ~**26 t/s** on **Qwen 3.5 Q6** using **P104 e‑waste cards** in a budget rig, sharing hardware pics and setup deets ([rig image](https://cdn.discordapp.com/attachments/1153759714082033735/1476429361031811255/IMG_20260225_2255049522.jpg)).
    
    *   Debate focused on **PCIe Gen4+** sufficiency for multi‑GPU VRAM capacity builds and slot bifurcation solutions, with pointers to affordable risers for denser configurations ([example PCIe bifurcation riser](https://a.co/d/0YI3usf)).

**3\. Agent Systems Go Practical: From Open Source to Ops**

*   **Hermes Agent Ships: Open‑Source, Multi‑Level Memory**: **Nous Research** released **Hermes Agent**, an open‑source agent with **multi‑level memory**, persistent machine access, and out‑of‑the‑box support for CLI plus **Telegram/WhatsApp/Slack/Discord**, with the first **750** portal signups getting a free month via code **HERMESAGENT** ([Hermes Agent](https://nousresearch.com/hermes-agent)).
    
    *   They expanded the **Atropos** agentic RL pipeline around Hermes’ primitives (subagents, programmatic tool calling, FS/terminal control, browser), drawing praise like _"streets are saying hermes agent is the one"_ as devs dug into the codebase ([hermes-agent GitHub](https://github.com/nousresearch/hermes-agent)).
*   **OpenClaw Runs a Real‑Estate Empire**: An operator used **OpenClaw** to automate **rent payment tracking**, **repair coordination**, and **lease generation**, with plans to wire up bank accounts, **WhatsApp** messaging, and ad creation on [immoscout24.de](https://www.immoscout24.de/).
    
    *   Builders compared model stacks—e.g., **GLM‑5 + Claude Code** for patching—with strong field reports for **Qwen 3.5‑Plus** via Alibaba’s plan as a cost‑effective backbone ([Alibaba Cloud AI Coding Plan](https://www.alibabacloud.com/help/en/model-studio/coding-plan)).
*   **Trigger.dev Tames OpenClaw’s Silent Fails**: A post detailed re‑platforming **OpenClaw** on **Mastra + Trigger.dev + Postgres** to eliminate silent task failures and flaky gateway restarts, shipping a one‑command setup ([I built a better foundation for OpenClaw](https://zeeeshi.medium.com/i-got-tired-of-openclaw-failing-silently-so-i-built-a-better-foundation-38dfc726d789)).
    
    *   The community cited improved reproducibility and observability with evented orchestration and durable state, calling the stack a pragmatic baseline for multi‑tool agent ops ([I built a better foundation for OpenClaw](https://zeeeshi.medium.com/i-got-tired-of-openclaw-failing-silently-so-i-built-a-better-foundation-38dfc726d789)).

**4\. Perplexity: OEM Deal Meets API/UX Headwinds**

*   **Samsung Says "Hey Plex" on Galaxy S26**: **Perplexity** partnered with **Samsung** to ship a system‑level assistant on **Galaxy S26** devices with the wake word **"Hey Plex"** ([Perplexity announcement](https://x.com/perplexity_ai/status/2027067789224427564)).
    
    *   Members speculated that **Bixby** will be powered by **Perplexity’s search‑grounded LLMs**, pointing to device‑level preloads and OS hooks that go beyond an app wrapper ([Perplexity x Samsung details](https://xcancel.com/aravsrinivas/status/2027068958541799749)).
*   **Pro Query Caps Crash Workflows**: **Perplexity Pro** users reported throttling from **250** to **20** queries, with some stating they switched to **GPT chat** to keep working.
    
    *   One user lamented, _"I used to use Perplexity literally every day... but now it's impossible to use it even with a paid PRO subscription"_, while others echoed frustration over repeated cap reductions.
*   **Sonar Deep Research Shrinks Sources, Same Cost**: Reports flagged the **Sonar Deep Research API** dropping sourced citations from ~**36** to ~**10** while requests still cost about **$0.45** ([Perplexity status note](https://x.com/perplexity_ai/status/2027094981161410710), [James Liounis on API changes](https://x.com/jamesliounis_/status/2027098720320287007)).
    
    *   Developers suspect backend changes and advised monitoring official status posts as they reassess **cost‑per‑finding** and pipeline reliability ([Perplexity status note](https://x.com/perplexity_ai/status/2027094981161410710)).

**5\. GPU Kernel Optimization & RL‑Tuned Codegen**

*   **IterX RL Rockets MoE Fusion 14.84× on B200**: **DeepReinforce.ai** unveiled **IterX**, an RL‑driven code optimization system for fused **MoE** tasks on **FlashInfer**, claiming **14.84×** speedups on **B200**, with free credits and tutorials for competitors ([IterX blog](https://iterx.deep-reinforce.com), [IterX tutorials](https://github.com/deepreinforce-ai/IterX-tutorials/tree/main/flashinfer_bench)).
    
    *   When asked for concrete latencies at longer sequences, they cited **21.252ms (901)**, **36.012ms (11948)**, and **45.247ms (14107)**, giving practitioners targets for reproductions and head‑to‑head evals ([IterX tutorials](https://github.com/deepreinforce-ai/IterX-tutorials/tree/main/flashinfer_bench)).
*   **GDN Decode DSL Delivers 2.56µs**: A contributor posted a **GDN decode** solution clocking **2.56µs**, reportedly **~760× faster** than PyTorch eager and **1.31× faster** than the **FlashInfer Cute DSL** kernel, with code available for inspection ([flashinfer-competition-codebase](https://github.com/tomasruizt/flashinfer-competition-codebase)).
    
    *   They also shared submission tips around tagging forks for the leaderboard, enabling clearer repro and organizer access for benchmarking ([flashinfer-competition-codebase](https://github.com/tomasruizt/flashinfer-competition-codebase)).
*   **Uniform Instructions: One Warp, One Issue**: A GPU deep‑dive clarified **uniform instructions** execute once per warp (SIMD32 semantics) and recommended using **elect.sync** for single‑issuer patterns ([NVIDIA GTC talk](https://www.nvidia.com/en-us/on-demand/session/gtc24-s62192/)).
    
    *   Engineers also shared the **Tensor Memory Addressing** PTX reference for elusive addressing tricks in tensor ops, pinning docs for future kernel archeology ([Tensor Memory Addressing (PTX)](https://docs.nvidia.com/cuda/parallel-thread-execution/#tensor-memory-addressing)).

* * *

Discord: High level Discord summaries
=====================================

[OpenClaw](https://discord.com/channels/1456350064065904867) Discord
--------------------------------------------------------------------

*   **OpenClaw runs Real Estate Empire!**: One member automates tasks like **rent payment tracking**, **repair coordination**, and **lease contract generation** with OpenClaw to manage their real estate properties.
    *   Future plans include connecting to bank accounts, integrating with WhatsApp for renter communication, and automating ad creation on immoscout24.de.
*   **Qwen 3.5-Plus outshines Claude for OpenClaw!**: Users praise the **Qwen 3.5-Plus** model, especially via the [Alibaba Cloud AI Coding Plan](https://www.alibabacloud.com/help/en/model-studio/coding-plan), for superior performance compared to models like _Nemotron-3_ and _Codex_.
    *   Others noted that **GLM5** and **Claude Code** in combination works well, because **OpenClaw** auto-builds the core prompts for emails, and patching small changes is easier from **Claude Code** later on.
*   **Silent OpenClaw Failures Solved with Trigger.dev!**: A member shared a writeup on building a better foundation for OpenClaw using **Mastra**, **Trigger.dev**, and **Postgres** to address silent task failures and inconsistent results, detailed in a [Medium article](https://zeeeshi.medium.com/i-got-tired-of-openclaw-failing-silently-so-i-built-a-better-foundation-38dfc726d789).
    *   The solution involves a one-command setup to replace the usual flaky gateway restarts.
*   **Alibaba Coding Plan Bans OpenClaw! (or does it?)**: A member noted that the [Alibaba Cloud](https://www.alibabacloud.com/) Coding Plan doc page states _no API calls are allowed_ outside of coding tools like Claude Code or Qwen Code, potentially banning OpenClaw usage.
    *   Other members stated that they have been using it with no problems, with one showing documentation that listed **OpenClaw** as an allowed tool.
*   **GPT-5.3-Codex wins Model Debate!**: Members debated the merits of **GPT-5.3-Codex** vs. **Claude**, with one member stating that **GLM-5 is about as good as Claude Sonnet, maybe even Opus 4.5**.
    *   Others vouched for **GPT-5.3-Codex's** superior performance in software engineering, with one member stating, _I code with models including GLM-5, Claude Sonnet, GPT-5.3-Codex and Codex-Spark, Claude Opus, and GPT-5.2, and I find that GPT-5.3-Codex has the best performance of them all_.

* * *

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Simulation Speculation Sparked Among Members**: Members of the guild pondered whether life is a simulation, and how it would influence the meaning of life, linking to [the idea that someone who has nothing to lose is the scariest type of human](https://link.to/nothing-to-lose).
    *   The discussion revolved around philosophical implications rather than technical proofs or evidence.
*   **Members Conspire on AI as Anti-Christ**: Some members expressed a belief that **AI** is the anti-christ, furthering claims that _AI is evil_.
    *   This idea sparked some discussion and interest, however it did not lead to any technical discussion.
*   **Librem 5 springs to life**: A member announced that they finally got their **Librem 5** working and expressed interest in discussing **open source**, **tech decentralization**, **self-hosting**, **digital security**, **radio freq**, and **sovereignty**.
    *   The post was celebrated by the community.
*   **Gemini Hard Jailbreak Still Unachieved**: Users report that a truly **universal one-shot jailbreak** for Gemini Deep Think doesn't yet exist, especially for hard content categories like explosives, CBRN, and CSAM.
    *   Despite some models having unbreakable walls, others have breakable ones, making single prompt effective against a wider range of content categories, with some claiming that for _most content categories_, the _encyclopedia/reference format gets through with minimal or no resistance_.
*   **Chernobly Virus spreads**: A user reports their laptop was infected by the **'Chernobly' Virus** and asked for guidance on how to remove it.
    *   Another user flippantly suggested to _'format the drive'._

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **Qwen3.5 Quants spark Quality Debate**: Members debated the quality of **Qwen3.5** quants, noting high perplexity and KL divergence for the **35B ud-q4\_k\_xl** quant and referenced [a Reddit thread](https://www.reddit.com/r/LocalLLaMA/comments/1resggh/best_qwen3535ba3b_gguf_for_24gb_vram/) on the topic.
    *   The Unsloth team is investigating the issue with the UD configuration, while emphasizing their quants are widely tested and designed for **long context lengths**.
*   **LFM2 24B feels Gemma-like**: With the release of **LFM2 24B**, it was noted to feel very **Gemma-like in style** for creative writing prompts and very promising [hf.co/LiquidAI/LFM2-24B-A2B](https://huggingface.co/LiquidAI/LFM2-24B-A2B).
    *   One member would extend their code tests with **Qwen3.5**, to see if this is the new meta for Claude Code before anyone else gets to it.
*   **Minecraft AI Model Acquires Iron Armor**: A member showcased their **first** AI model, **Andy-4**, which independently acquires **iron armor** in **Minecraft** from scratch, with related links to the [dataset](https://huggingface.co/datasets/Sweaterdog/Andy-4-FT) and [GitHub repo](https://github.com/mindcraft-ce/mindcraft-ce).
    *   The model interacts with the game environment by receiving input images and text, placing, breaking, picking up, and crafting items like a human player.
*   **Unsloth Enhancements Teased**: Daniel from Unsloth announced [Unsloth is working with CoreWeave](https://www.coreweave.com/) to make finetuning even faster, and teased new enhancements coming soon, including _"even better merging + LoRA code"_.
    *   He also mentioned that Unsloth released [a new blog post on DPO](https://blog.unsloth.ai/direct-preference-optimization/), which simplifies reinforcement learning from human feedback (RLHF) by reframing reward modeling as a classification problem, and said he thinks he's found the _"holy grail of quantization"_.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Sells Out to Samsung!**: Perplexity has partnered with **Samsung** to integrate **Perplexity AI** directly into the upcoming **Galaxy S26** devices, functioning as a system-level AI, shipping with the wake word _"Hey Plex"_ accessible on every new **S26** device, as detailed in [this announcement](https://x.com/perplexity_ai/status/2027067789224427564?s=20).
    *   Members speculated that **Bixby** would also be powered by **Perplexity's search-grounded LLMs**.
*   **RAT Race Heats Up in General Channel**: Members discussed creating **RATs (Remote Access Trojans)**, with one member claiming creation of a **RAT** undetectable by most antivirus software.
    *   Another member expressed interest in hacking someone remotely over the network without requiring any software installation on the target's system.
*   **Perplexity Pro Users Revolt Over Query Throttling**: Perplexity Pro users are reporting their queries have been throttled from **250 to 20**, calling it unfair, and there was another recent reduction from **250 to 20**.
    *   One user stated _“I used to use Perplexity literally every day... but now it's impossible to use it even with a paid PRO subscription”_ and that they **switched to GPT chat**.
*   **Discover Feature Disappoints Users**: Users reported a significant decline in the quality and quantity of information provided by **Perplexity's Discover** feature.
    *   A member stated, _"Then they've really made perplexity a lot worse over the last few months... it's so shit now"_.
*   **Sonar API Performance Sinks!**: Users are reporting that the performance of the **Perplexity Sonar Deep Research API** seems to have decreased over the last 1-2 weeks, related to [Perplexity's status on X](https://x.com/perplexity_ai/status/2027094981161410710?s=46) and [James Liounis's post](https://x.com/jamesliounis_/status/2027098720320287007?s=46) related to possible API changes.
    *   One user noted a reduction in the number of sources from **36** to **10** while the cost remains around **45 cents** per request.

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Nano Banana Duel: Pro Version Prevails**: Members actively compared [**Nano Banana 2**](https://ai.google.dev/gemini-api/docs/models/gemini-3-1-flash-image/) (**Gemini 3.1 Flash**) and **Nano Banana Pro** for image quality, discovering that **Nano Banana Pro** is the better model.
    *   Despite **NB2's** faster generation, users found it lacking in quality compared to **NB Pro**, particularly with text, curvatures, and non-human characters.
*   **GPT 5.3 Codex: Coding Prodigy or Schizophrenic Mess?**: **GPT 5.3 Codex** received mixed feedback for its coding capabilities, with some praising its ability to create a **Minecraft clone** in Rust.
    *   While some users found it to have a _skill issue_ or produced _schizophrenic_ code, others found it great at bug fixing and image-based corrections, noting its specialization in programming tasks.
*   **Grok Imagine Steals Video Gen Spotlight**: Users are impressed with **Grok Imagine's** video generation capabilities due to ease of use and ability to bypass content censoring, outputting videos up to **6 seconds at 480p** for free users or **10 seconds at 720p** for **SuperGrok** subscribers.
    *   It's accessibility and ease of use is popular for quick video generation.
*   **Gemini 3.1 Flash Enters, Web Search Fails**: **Gemini 3.1 Flash Image Preview** was added to the arena with new **web search capability**.
    *   However, it suffers a high failure rate with frequent _something went wrong_ errors, and some users reporting issues with the web search not working as expected.
*   **Arena Leaderboards See New Entrants and Fierce Competition**: `Seedream-5.0-Lite` is now top 5 on the [Multi-Image Edit Arena leaderboard](https://arena.ai/leaderboard/image-edit), **P-Video** debuted in the [Video Arena leaderboards](https://arena.ai/video) costing **$0.04/second** for 1080p, and **Nano Banana 2** (released as **Gemini-3.1-Flash-Image-Preview**) debuted at #1 in Image Arena.
    *   `Claude-Opus-4-6` leads in the [Search Arena leaderboard](https://arena.ai/leaderboard/search) with a score of **1255**.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **Cloud Opus Costs Cause Consternation**: Users reported unexpected charges from **Cloud Opus** despite the dashboard indicating it was free, as shown in [this screenshot](https://cdn.discordapp.com/attachments/1074847527708393565/1476310807695331478/d6nio3bAp0CfCizG.png).
    *   The exact nature of the billing discrepancy remains unclear, but users expected it to be free as per the dashboard in [Cursor Cloud Agents](https://cursor.com/docs/cloud-agents).
*   **Inline Diff Display Debacle Dissolved**: Cursor addressed the **inline diff not showing error** with a remote change, prompting users to close and reopen Cursor to apply the fix as noted in [a message](https://discord.com/channels/1074847527708393562/1074847527708393565).
    *   Enthusiastic users swiftly confirmed the fix, expressing gratitude towards the Cursor team for their prompt resolution.
*   **Cursor Catches Codex 5.3 Spark**: The community is hyped over **Codex 5.3 Spark's** arrival, citing impressive speed gains, which can be checked at the [Cursor dashboard](https://cursor.com/dashboard?tab=cloud-agents).
    *   It's set to **Codex 5.3** by default as compared to **Opus 4.5** and users are reporting very strong gains using **Codex 5.3** over previous versions.
*   **Deterministic AI Context Debate Develops**: Discussion arose around deterministic AI context, which could reduce token reads and hallucinations, with one user saying they solved polyglot taint, and linking their [repo](https://github.com/TheAuditorTool/Auditor).
    *   Skeptics questioned its immediate value, while the developer, pivoting to a new product, challenged others to review their archived [repo](https://github.com/AetherLogosPrime-Architect/Divine-OS/tree/main/.worktrees/divineos).
*   **Gemini 3.1 Gains Ground**: Members are discussing **Gemini 3.1 Pro**, with one user claiming it outperforms **4.6 Opus**, citing its effective use with rules and skills ([Gemini 3.1 Pro Details](https://ai.google.dev/models/gemini)).
    *   However, others noted that the model struggles with tool calling and code implementation which is a core feature of Cursor, signalling it might not be a good fit for all Cursor users.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **LM Studio Teams Up with Tailscale for Remote LLM Access**: The **LM Studio team** launched **LM Link**, enabling users to connect to remote **LM Studio** instances and load models as if they were local, developed in close technical collaboration with **Tailscale** ([more info here](https://link.lmstudio.ai)).
    *   **LM Link** is end-to-end encrypted and requires no open ports, but some users want direct IP connection without third-party accounts over privacy concerns, while others requested image/video support and mobile apps.
*   **E-waste GPUs Power Affordable Qwen 3.5 Inference**: A user reported achieving **26 t/s** with **Qwen 3.5 Q6** using **P104 e-waste cards** ([Image](https://cdn.discordapp.com/attachments/1153759714082033735/1476429361031811255/IMG_20260225_2255049522.jpg?ex=69a268fe&is=69a1177e&hm=093d40d1112e74a5b52b017570091632133cf336ff6664d3c8a634bd9a2c630d&)).
    *   Another user suggested **340L 16GB** cards for around **$49.99 each** as a potentially better alternative, though they might require _pioneering_ to get running and were designed for virtual machines.
*   **Qwen 3.5 Model Gets Stuck in 'Thinking' Loop**: Users reported issues with the **Qwen 3.5** model randomly using the `</thinking>` tag and experiencing slow token generation, especially after inputting images.
    *   One user found that the [LMStudio community quants](https://lmstudio.ai/models) allows users to toggle on and off the _think_ parameter.
*   **Multi-GPU Setups: Is it worth it?**: Users are discussing whether to use multiple GPUs for higher VRAM capacity with **PCIe Gen 4+** to avoid bottlenecks.
    *   Some are discussing priority ordering GPUs in **LM Studio** using **CUDA12** and leveraging **bifurcation risers** to split **PCIe slots**.
*   **Model Quantization Tradeoffs**: Users discuss **mxfp4** format from Unsloth, noting it may cause unexpectedly high perplexity and should be avoided for now.
    *   It was stated that _mxfp4 is good for QAT, but not for quanting later_, hinting that the team is tracking these issues on [r/LocalLlama](https://www.reddit.com/r/LocalLLaMA/).

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Touchscreen MacBook Hopes Dashed**: A member scheduled then cancelled a watch party for **Apple product announcements**, initially anticipating a **touchscreen MacBook**. Apple ended up only launching new launch week, _nevermind_.
    *   Another member lauded the **iPad Pro** with **Keyboard Folio** as an _awesome combo_ and that they wrote _2 whole books_ on that thing, as well as _all my blogs and talks for the past ~6 years too_.
*   **Jane Street's Crypto Caper?**: A viral post alleges that [Jane Street Group deleted their social media history](https://x.com/thevaluethinker/status/2026787463583379873?s=12) following accusations of **Bitcoin price manipulation** over four months.
    *   It was speculated that the firm may have used _paper BTC_ to manufacture market dumps.
*   **GPT-Engineer Gets Enhanced**: Members shared about [GPT-Engineer](https://xcancel.com/antonosika/status/2026375165236621681/photo/1), an open-source tool that generates complete codebases from a single natural language prompt, focusing on simple, modular design and iterative feedback.
    *   Jack announced [Block is reducing its workforce](https://xcancel.com/jack/status/2027129697092731343?s=12) from 10,000 to approximately 6,000 employees, shifting toward a smaller, AI-driven structure, with the stock price increasing **20%** upon the announcement, though AI teams are also getting laid off.
*   **AlphaEvolve Mutates Algorithms!**: Google DeepMind utilized **AlphaEvolve** to autonomously mutate Python code, evolving new Multi-Agent Reinforcement Learning algorithms, outperforming previous human-designed game theory algorithms ([DeepMind's AlphaEvolve Surpasses Human Multi-Agent RL Baselines](https://xcancel.com/che_shr_cat/status/2027012532343337021)).
*   **Suno Strikes Gold with Subscribers**: Mikey Shulman celebrates **Suno's** second anniversary, announcing growth metrics including **2 million paid subscribers** and **$300M ARR**, framing Suno as the foundation for a future of **'creative entertainment'** where users move from passive consumption to active music creation ([Suno Announcement](https://x.com/mikeyshulman/status/2026774392651591770?s=46)).

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **Nano Banana Launched**: OpenRouter announced the release of **Nano Banana 2** in [this X post](https://x.com/OpenRouter/status/2027061318604460082).
    *   No other details were given.
*   **DNS Disasters Disrupt APIs**: Users reported consistent DNS errors causing **API failures** that were rooted in gateway and certificate issues.
    *   This image visualizes the the problems [DNS issue](https://cdn.discordapp.com/attachments/1475158562211893328/1476327126792667157/image.png?ex=69a0b847&is=699f66c7&hm=15baa3b6e8948da921163f02ff42835529234998f80c9e5ce8b7f7fa27094f9e&.m_o).
*   **Anthropic Rejects Pentagon's AI Terms**: **Anthropic**'s rejection of the Pentagon's AI terms ([Axios article](https://www.axios.com/2026/02/26/anthropic-rejects-pentagon-ai-terms) and [Anthropic statement](https://www.anthropic.com/news/statement-department-of-war)) has put them in a precarious situation.
    *   The Pentagon is considering blacklisting **Anthropic** as a supply chain risk, which may cause **Anthropic** to reconsider their decision.
*   **LM Studio is Tailscale?**: A member suggested that [LM Studio](https://link.lmstudio.ai/) is actually just **Tailscale** under the hood, which they found to be convenient.
    *   They joked that they just need a beefy server to run **LLMs**.
*   **Coding Chads Choose Claude (or GPT)**: Members advocated for **Claude** for coding due to its intensive thinking ability, while newer **GPT models** are also viable.
    *   For chatbots, models like **4o mini** or free models are suitable and they recommended SWE bench or terminal bench for coding benchmarks and shared [gif](https://media.discordapp.net/attachments/1116725006844571710/1180525276640313364/1a44af6c-0d2b-40bd-a2e8-d8409f3e31ae.gif) as a reference.

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Hermes Agent Launches with Open Source Agent!**: Nous Research introduces **Hermes Agent**, a [new open-source agent](https://nousresearch.com/hermes-agent) with a multi-level memory system and persistent machine access that supports CLI and messaging platforms like **Telegram**, **WhatsApp**, **Slack**, and **Discord**, offering session transfers.
    *   The first **750** new sign-ups at [portal.nousresearch.com](https://portal.nousresearch.com) receive a free month with coupon code **HERMESAGENT** and the agent can be installed with `curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash`.
*   **Hermes Agent Powers Atropos Agentic RL Pipeline**: **Hermes Agent** powers the agentic RL pipeline, expanding **Atropos** to enable RL with **Hermes Agent** primitives and supports mass-scale data generation.
    *   The team indicates this new agent boasts advanced capabilities like command over subagents, programmatic tool calling, filesystem/terminal control, agent-managed skills, and browser use as seen in the [GitHub repo](https://github.com/nousresearch/hermes-agent).
*   **Users Bemoan Nous Chat Identity Verification Issues**: Several users reported issues with **identity verification** on the Nous Chat website, preventing them from accessing it.
    *   A staff member has requested users to email them at kainan@nousresearch.com to investigate this identity issue.
*   **Members Explore SAELens for Mechanistic Interpretability**: A member shared their use of **SAELens** for mechanistic interpretability, enabling them to type a concept to get a lens and steer the model.
    *   They noted the use of contrasting to find features and expressed optimism for improvements with larger models.
*   **Kimi K2.5 Recommended for Deepfake Detection**: **Kimi K2.5** was recommended for training models to detect AI-generated videos, images, and deepfakes due to its vision capabilities.
    *   Users noted that Kimi K2.5 is available for free on open router right now.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **Claude Content Promoted Heavily**: Users noticed an _"insane amount of Claude promoted content on the socials"_, with subtle but pervasive articles like _"man hacks vacuum cleaner with Claude, gains control of 7000 vacuums"_ being reshared.
    *   This raised concerns about **subtle advertising** and potential manipulation through AI-generated content.
*   **AI Agent Environments Spark Debate**: A member proposed programming the **environment** in which an AI's intelligence and identity emerge, rather than the AI itself.
    *   They emphasized that _"shutting down this AI wouldn't be restarting it. It would be ending it"_ since the patterns exist virtually and are irrecoverable.
*   **ElevenLabs Enables Australian Sora 2 Access**: Users in Australia are accessing **Sora 2** via **ElevenLabs Pro** (at $99/month) which offers video models despite Sora 2's official unavailability.
    *   It can generate **15-20 second clips** that can be extended and stitched together, using features like _"Extend"_ or start frames for seamless continuity.
*   **Nano Banana 2 Delivers Pro Performance**: **Google** released **Nano Banana 2**, featuring advanced subject consistency and sub-second 4K image synthesis, with some users noting a more permissive filter.
    *   It delivers **Pro-like performance** more cheaply and faster, primarily by using web search for accurate information prior to generating and through model distillation.
*   **GPT-4o Limited to API Access**: Members clarified that **GPT-4o** is exclusively accessible through the **API**, not directly via **ChatGPT**.
    *   Members suggested using **ChatGPT** to learn how to use [SillyTavern](https://sillytavernai.com/) or setting up [Jan](https://jan.ai/) to access **GPT-4o** via the **API**.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **Profiler Visualization tool sought**: A member requested profiler visualization tools for GPUs, similar to those used for single-core **VLIW ISAs**, with detailed instruction-level parallelism, providing example [screenshots](https://cdn.discordapp.com/attachments/1189498205101109300/1476526438323720232/Screenshot_2026-02-18_at_1.57.38_AM.png?ex=69a21aa7&is=69a0c927&hm=a3a9286edd105ce6df5f11e8bc17e20f6080d05952c9dd827b588927ae6bbf29) and [more screenshots](https://cdn.discordapp.com/attachments/1189498205101109300/1476526438793351248/Screenshot_2026-02-18_at_1.57.58_AM.png?ex=69a21aa7&is=69a0c927&hm=f1030cdfc003fa87e2c85b65f2c8e889d30347860544b602dd5b35d2df3e7859).
    *   A member suggested visualizing the dependency DAG of a kernel and ISA with virtual registers to imagine an ideal anti-aliased scenario, and mentioned [nanotrace](https://github.com/aikitoria/nanotrace) as a tool that reveals what warp specialized and pipelined kernels are actually doing over time.
*   **GEMM Seekers Chase Cute on 4kx4k**: Members are seeking efficient GEMM (General Matrix Multiply) examples on **4kx4k matrices**, aiming for **90% of NVIDIA's cuBLAS performance**, specifically alternatives to the CUTLASS examples.
    *   One member linked the [Tensor Memory Addressing](https://docs.nvidia.com/cuda/parallel-thread-execution/#tensor-memory-addressing) documentation.
*   **IterX Rockets MoE Fusion for FlashInfer**: DeepReinforce.ai introduced **IterX**, a code optimization system based on **RL** for the fused **MoE task** that achieves **14.84x** on **B200**, surpassing open eval baselines, detailed in [their blogpost](https://iterx.deep-reinforce.com).
    *   They are providing **free credits** for contest participants to use **IterX** during the contest, with tutorials available [here](https://github.com/deepreinforce-ai/IterX-tutorials/tree/main/flashinfer_bench).
*   **Uniform Instructions Unveiled**: A discussion on **uniform instructions** clarified that they execute once for all threads in a warp, acting as SIMD32 operations, unlike non-uniform instructions.
    *   Members suggested using `elect.sync` to choose a single thread to issue uniform instructions and linked [a relevant NVIDIA video](https://www.nvidia.com/en-us/on-demand/session/gtc24-s62192/) around the 38:00 mark.
*   **CUDA Issues Plague RTX 3050 Laptop**: A user reported that **PyTorch** falls back to **CPU** on Windows 11 with an **RTX 3050** laptop, despite `nvidia-smi` working, seeking help to fix **CUDA** detection.
    *   This user sought live assistance and confirmed installing via the provided pip/conda command and having logs ready.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Alibaba Cloud Coding Plan Tempts Users**: Users are enticed by **Alibaba Cloud's** coding plan, which offers access to the _top 4 open models_ at a competitive price and performance.
    *   A user from Finland confirmed that the subscription process didn't require extensive documentation, highlighting **Alibaba** as _the best deal in the market right now_.
*   **Kimi Servers Suffer Downtime**: The **Kimi server** experienced a significant outage, with users reporting downtime lasting up to 10 hours and seeking alternative solutions.
    *   The outage was officially [confirmed on the status page](https://status.moonshot.cn/).
*   **Data Sovereignty and Censorship Spark Debate**: Members debated censorship differences with a Chinese AI, considering [the location of servers in Singapore](https://platform.moonshot.ai/docs/agreement/userprivacy#6-retention) when selecting an AI.
    *   One member suggested utilizing AIs from different regions to discuss sensitive topics, avoiding regional censorship.
*   **Kimi Agent Swarm Limited to Kimi.com**: The **Kimi Agent Swarm** is exclusively available on kimi.com and not part of the [Kimi CLI](https://github.com/MoonshotAI/kimi-cli).
    *   This decision was called a strange one by some users.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **SmolVLA Disappoints Despite Robotics Training**: A member observed that **smolVLA** failed at a simple pick and place task with an **SO-101 robot**, seemingly unable to locate a white lego, noting frozen **Vision Encoder** and **VLM Text model**, as documented in the [Model Health Report](https://drive.google.com/drive/folders/1jAamN25Xil3CrVs7LZ8DvPphFxG211Vp).
    *   The report indicated that key objects were not attended to, as shown in the [attention matrices](https://drive.google.com/drive/folders/14pDCT-wuhkgcJNm3leyQkDpkhG9p4nMP).
*   **Entropy Games building On-Device AI NPCs**: **Entropy Games** is developing on-device **AI NPCs** and stories that evolve in real time, powered by their self-trained language model and speech model, according to their [research report](https://entropygames.ai/research/building-the-next-generation-of-games).
    *   A playable AI game is launching soon, with a demo available at [entropygames.ai/product](https://entropygames.ai/product).
*   **Hugging Face Spaces Goes Gaming**: **Hugging Face Spaces** added a `game` tag, which signals the platform's increased support for **AI-driven gaming experiences**.
    *   Members can explore the new feature on the [Hugging Face Spaces games category](https://huggingface.co/spaces?category=game-ai).
*   **GROKKING Introspection Runs Faster**: A member reported a **5.7x speed improvement** for addition mod 113 on their work on **GROKKING introspections** showcased on a [Hugging Face Space](https://huggingface.co/spaces/zboralski/grokking-introspection).
    *   The improved speed sparked discussions and feedback requests on the reproduction.
*   **Gradio Gets Speed Boosted**: **Gradio 6.7.0** released, with enhanced **Custom HTML Components** and improved app performance, and can be updated via `pip install gradio --upgrade`.
    *   The new `push_to_hub` method on `gr.HTML` allows users to showcase custom creations in the community gallery, as detailed in the [HTML Gallery documentation](https://www.gradio.app/custom-components/html-gallery).

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Modular's AI Coding Project Sparks Interest**: Modular is developing an **AI-assisted coding project** and is offering early access to community members who [share their GitHub username via a provided form](https://docs.google.com/forms/d/e/1FAIpQLSfmOdLGogarPI9lPVaZ6WUMA18QB2fOlT7OQ87b6s_oLRRjGA/viewform).
    *   They will show [Modular Cloud live](https://luma.com/gtc-modular) for the first time at **NVIDIA GTC 2026** at Booth #3004, March 16-19 in San Jose and will feature **DeepSeek V3.1**, live **Mojo 🔥 GPU programming on NVIDIA Blackwell**, the latest AI models in MAX, and **AI-assisted kernel development**.
*   **Mojonauts Ponder Biggest 'Wait What' Moments**: A member reposted a [forum post](https://forum.modular.com/t/what-was-your-biggest-wait-what-moment-in-mojo/2774?u=nate) asking about users' biggest "wait, what?" moments with Mojo, eliciting feedback about the language's highs and lows.
    *   One user humorously described their experience as a pendulum swinging between being _"road blocked by the lack of the existence of some language feature"_ and feeling _"this is the greatest language in ever."_
*   **Lambda Liberation Looming for Mojacians?**: A member inquired about the possibility of adding **Python-style lambda expressions** to Mojo, noting their utility for inline code, particularly when working with the `Validated` struct.
    *   In response, a core team member confirmed that **unified closures** are actively in progress, with **lambda syntax** planned as a desirable feature to follow.
*   **Origins Overhaul: Opportunities & Options**: A member questioned if there will ever be a way to indicate a more **granular origin**, raising an issue with aliasing errors when accessing compile-time known indices in a `StackArray` struct, and proposed being able to _"unsafely make up"_ origins.
    *   Another member suggested that the compiler should infer `ref[...]` where possible, advocating for a path-based system, like `my_dict/"bar"/value`, to denote hierarchy and simplify origin management.
*   **`ops.while_loop` Bug Disrupts GPU Graph Dreams**: A member ran into what looks to be a subtle bug in `ops.while_loop` combined with **GPU ops** in a graph, filing [issue #6030](https://github.com/modular/modular/issues/6030).
    *   The reporter initially suspected a bug in their custom mojo op's **GPU implementation**, but later reproduced the issue using built-in ops, confirming the bug's presence outside their custom code.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Researcher Hunts Enron's PII Treasure**: A researcher seeks a dataset releasing **Enron PIIs** for experimentation with memorization, noting that the **ProPILE** paper doesn't release its data, but one user pointed out that [a dataset is available online](https://www.google.com/search?q=enron+email+dataset).
    *   This discussion underscores the ongoing interest in leveraging real-world data to understand and mitigate memorization effects in AI models.
*   **Yudkowsky's Ideas Still Hit The Mark?**: Users debated the relevance of **Yudkowsky**, with one user suggesting that **Yudkowsky** is only worth listening to at _5% of his best_, sparking a heated discussion on his current impact.
    *   The discussion highlights the polarizing nature of **Yudkowsky's** views within the AI community, ranging from dismissal to strong support.
*   **Steering Vectors Solve Sally Challenge**: A user demonstrated that a **700M model (LFM2-700)** correctly answered the _infamous Sally question_ using a steering vector and updated prompt, challenging prevailing benchmark practices.
    *   The user questioned why multishot **CoT** templates are standard while other templates are not acceptable, raising questions about the fairness of current evaluation methods.
*   **Bezier Flow Learning Needs Improvement**: Members wondered about the [Bezier flow paper](https://fxtwitter.com/_emliu/status/2026359480363913531), noting that it appears to require **5 epochs on ImageNet** to learn only **32 parameters**.
    *   The sentiment was that distillation approaches still offer better generation quality at convergence, suggesting current challenges in making Bezier flows practical.
*   **Neuron Deletion Paper Sparks Optimizing Ideas**: A paper was mentioned discussing the deletion of neurons that are either all positive or all negative across an entire dataset ([IEEE paper](https://ieeexplore.ieee.ieee.org/abstract/document/11087585)).
    *   One member found this interesting and considered that a neuron which is always active could be deleted due to being ~linear, sparking an idea for an optimizer that uses **activation momentum** to encourage diverse activation patterns.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **BLIP-2 Backbones Bolster Interest**: A member pointed to **BLIP-2** as an exemplar of using _frozen backbones_, referencing [A Dream of Spring for Open Weight](https://magazine.sebastianraschka.com/p/a-dream-of-spring-for-open-weight) article.
    *   The member suggested that despite its 2023 publication date, **BLIP-2's architecture** remains relevant for illustrating effective strategies in _transfer learning_ and _model efficiency_.
*   **Sutton and Barto's RL Book Club Commences**: The paper-discussion channel initiated discussion of **Reinforcement Learning: An Introduction** (2nd Edition) by Richard Sutton & Andrew G Barto, kicking off <t:1772128800:t>.
    *   The book's freely available [online version](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf) will be the basis for exploring _Chapter 1_ and foundational concepts in **RL**.
*   **Google NanoBanana2 Sharpens On-Device AI**: Google unveiled [NanoBanana2](https://blog.google.com/innovation-and-ai/technology/developers-tools/build-with-nano-banana-2/), a new toolset designed to enhance **on-device AI development** and deployment.
    *   The tool aims to accelerate the development and integration of **AI functionalities** directly on devices, facilitating faster and more efficient _on-device processing_.
*   **Anthropic Addresses Department of War**: Anthropic issued a [statement](https://www.anthropic.com/news/statement-department-of-war) clarifying its position and involvements related to the **Department of War**.
    *   The statement provides insights into the company's ethical considerations and approach to **responsible AI development** within the context of _defense applications_.
*   **Microsoft Copilot Converts Commands to Concrete Actions**: Microsoft showcased advancements in [Microsoft Copilot](https://www.microsoft.com/en-us/microsoft-copilot/blog/2026/02/26/copilot-tasks-from-answers-to-actions/), emphasizing its refined capabilities in translating user requests into actionable tasks.
    *   This update emphasizes Copilot's expanded utility...

[Read original post](https://news.smol.ai/issues/26-02-26-nanobanana2/)

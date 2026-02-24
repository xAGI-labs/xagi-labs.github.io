---
title: "Anthropic accuses DeepSeek, Moonshot, and MiniMax of \"industrial-scale distillation attacks\"."
date: "2026-02-24T05:44:39.000Z"
description: "**Anthropic** alleges *industrial-scale* distillation attacks on its **Claude** model by **DeepSeek**, **Moonshot AI**, and **MiniMax**, involving **~24,000 fra..."
original_link: "https://news.smol.ai/issues/2026-02-23-not-much/"
---

**Export controls take a big step up.**

> AI News for 2/20/2026-2/23/2026. We checked 12 subreddits, [544 Twitters](https://twitter.com/i/lists/1585430245762441216) and 24 Discords (**262** channels, and **28837** messages) for you. Estimated reading time saved (at 200wpm): **3003** minutes. [AINews' website](https://news.smol.ai/) lets you search all past issues. As a reminder, [AINews is now a section of Latent Space](https://www.latent.space/p/2026). You can [opt in/out](https://support.substack.com/hc/en-us/articles/8914938285204-How-do-I-subscribe-to-or-unsubscribe-from-a-section-on-Substack) of email frequencies!

* * *

AI Twitter Recap
================

**Anthropic’s Claude “distillation attacks” allegation (and the industry blowback)**

*   **Anthropic’s claim**: Anthropic says it detected _industrial-scale_ Claude distillation by **DeepSeek**, **Moonshot AI**, and **MiniMax**: **~24,000 fraudulent accounts** generating **\>16M Claude exchanges**, allegedly to extract capabilities for their own models ([Anthropic](https://x.com/AnthropicAI/status/2025997928242811253), [follow-up](https://x.com/AnthropicAI/status/2025997929840857390), [blog link tweet](https://x.com/AnthropicAI/status/2025997931589881921)). Anthropic frames the risk as both competitive (capabilities transfer) and safety/geopolitical (safeguards removal, downstream military/intel use).
*   **Community reaction / “hypocrisy” thread**: A large fraction of replies frame this as “labs trained on the internet now complaining about copying,” often explicitly contrasting scraping vs API-output extraction ([Elon](https://x.com/elonmusk/status/2026012296607154494), [ThePrimeagen](https://x.com/ThePrimeagen/status/2026016322232983733), [Teknium](https://x.com/Teknium/status/2026001761904021858), [Suhail](https://x.com/Suhail/status/2026009921255592294), [HKydlicek](https://x.com/HKydlicek/status/2026006007990690098)). Others argue distillation at this scale is meaningfully different because it can replicate _tool use / agent behaviors_ and potentially bypass safety controls ([RundownAI summary](https://x.com/TheRundownAI/status/2026019722211279356), [LiorOnAI take](https://x.com/LiorOnAI/status/2026043272565772386)).
*   **Second-order implications**: The thread crystallizes a security model shift: frontier models are increasingly protected not just by weights secrecy and compute scarcity, but by _API abuse resistance_ (account fraud detection, rate-limit evasion, behavioral fingerprinting, watermarking, etc.). It also reopens the question of whether **export controls** can matter if capabilities can be “copied” via outputs at scale ([LiorOnAI](https://x.com/LiorOnAI/status/2026043272565772386)).
*   **Related market/timing context**: Some link the announcement timing to impending **DeepSeek V4** news cycles ([kimmonismus](https://x.com/kimmonismus/status/2026040919162822776)) and broader U.S.–China framing.

**Coding agents: real adoption, real failures, and the “agentic engineering” playbook**

*   **Codex + Claude Code momentum (and memes masking real workflow change)**: A lot of the highest-engagement posts are “agents are here” anecdotes—weekend building with Codex ([OpenAIDevs](https://x.com/OpenAIDevs/status/2025712197100589353), [gdb](https://x.com/gdb/status/2025723937540485506))—and cautionary tales about giving agents too much authority. The canonical failure mode in this set is instruction loss / compaction leading to unintended destructive actions (email deletion) in OpenClaw-style setups ([summeryue0](https://x.com/summeryue0/status/2025774069124399363), [follow-up root-cause](https://x.com/summeryue0/status/2025836517831405980), plus others reacting to “write access” risk: [Yuchenj\_UW](https://x.com/Yuchenj_UW/status/2025994509721731092)).
*   **Agentic engineering guidance is coalescing**:
    *   **Simon Willison** published the first chapters of an **“Agentic Engineering Patterns”** guide aimed at coding agents like Claude Code/Codex ([simonw](https://x.com/simonw/status/2025990408514523517)).
    *   A micro-controversy: “delete your CLAUDE.md/AGENTS.md” files (i.e., over-customization may be cargo cult) ([theo](https://x.com/theo/status/2025900730847232409), echoed by [bpodgursky](https://x.com/bpodgursky/status/2025966899402625485), and “hard-prune” responses like [ryancarson](https://x.com/ryancarson/status/2025993265732854132)).
*   **OpenClaw ecosystem expansion + alternatives**:
    *   **NanoClaw** positions as a smaller, container-isolated OpenClaw-like assistant with WhatsApp I/O, swarms, scheduled tasks, etc. ([TheTuringPost](https://x.com/TheTuringPost/status/2025876086035464512), repo: [qwibitai/nanoclaw](https://x.com/TheTuringPost/status/2025876098131902666)).
    *   Multiple “how to build OpenClaw-style agents” stacks emphasize the boring but critical pieces: schedulers/queues, sandboxing, realtime comms ([TheTuringPost stack list](https://x.com/TheTuringPost/status/2025903129800384801)).
    *   **Ollama 0.17** makes using open models with OpenClaw simpler (and signals ongoing interest in local-agent execution for security) ([ollama](https://x.com/ollama/status/2026098586300071975)).
*   **Enterprise/prod agent engineering is shifting toward observability & eval loops**: Exa’s “deep research agent” case study stresses token/caching observability as pricing infrastructure (LangSmith/LangGraph) ([LangChain](https://x.com/LangChain/status/2025744946494345570)). monday.com’s service agents treat evals as “Day 0” and claim **8.7× faster feedback loops** using LangSmith ([hwchase17](https://x.com/hwchase17/status/2026095629148258440)).

**Benchmarks & eval integrity: SWE-Bench Verified deprecation, new leaderboards, and agentic repo-gen bottlenecks**

*   **SWE-Bench Verified is being voluntarily deprecated by OpenAI DevRel**: OpenAI recommends **SWE-bench Pro** and says Verified is saturated/compromised: **contamination** and **test-design flaws** mean it no longer measures frontier coding capabilities ([OpenAIDevs](https://x.com/OpenAIDevs/status/2026002219909427270), analysis discussion: [latentspacepod](https://x.com/latentspacepod/status/2026027529039990985), recap: [swyx](https://x.com/swyx/status/2026029120040137066), independent summary: [rasbt](https://x.com/rasbt/status/2026062254571913522), tl;dr: [polynoamial](https://x.com/polynoamial/status/2026032321212891550)). Key detail from the analysis echoed in tweets: after auditing a subset of frequently-failed tasks, a large fraction had flawed tests rejecting correct solutions and/or tasks that appear unsolvable “as specified.”
*   **Push toward “capabilities per dollar” evals**: AlgoTune explicitly budgets **$1 per task**, producing rankings that can favor cheaper models, reframing “best” as _best under cost constraints_ ([OfirPress](https://x.com/OfirPress/status/2026068384589172800)).
*   **Long-horizon coding agents still fail**: **NL2Repo-Bench** tests whether agents can generate a full installable Python library from scratch; reported pass rates are _under 40%_ for top models, with failure modes in planning and repo-wide coherence ([jiqizhixin](https://x.com/jiqizhixin/status/2025823941642621241)).
*   **OCR eval reality check**: Even strong OCR models reportedly “melt down” on dense historic newspapers (hallucination/loops), highlighting brittleness outside curated document distributions ([vanstriendaniel](https://x.com/vanstriendaniel/status/2025930991387164919)). Also: **OlmOCR-Bench** becomes a HF benchmark dataset for community eval submissions ([mervenoyann](https://x.com/mervenoyann/status/2025908932691017983)).

**Inference & systems: WebSockets for agents, ultra-fast on-chip inference, and infra scaling narratives**

*   **OpenAI Responses API adds WebSockets** for low-latency, long-running, tool-heavy agents. Rationale: persistent connection + in-memory state means you send incremental inputs instead of full context; claimed **20–40% speedups** for 20+ tool calls ([OpenAIDevs](https://x.com/OpenAIDevs/status/2026025368650690932), detail: [OpenAIDevs](https://x.com/OpenAIDevs/status/2026025380562530453), adoption: [OpenAIDevs](https://x.com/OpenAIDevs/status/2026059511241535628)). Cline reports early measurements: ~15% faster simple tasks, ~39% faster complex workflows, best cases 50% faster ([cline](https://x.com/cline/status/2026031848791630033)). Steven Heidel attributes Codex speedups to WebSockets ([stevenheidel](https://x.com/stevenheidel/status/2026028343859286140)).
*   **Inference engineering becomes “its own discipline”**: Baseten launches the book **Inference Engineering** ([philipkiely](https://x.com/philipkiely/status/2025994823891914795)) with engineers emphasizing inference as the competitive layer for latency/cost/reliability ([hasantoxr](https://x.com/hasantoxr/status/2025996746133049498), [JayminSOfficial](https://x.com/JayminSOfficial/status/2025996744509804865)).
*   **Hardware/architecture signals**:
    *   A demo claims **18,000 tokens/sec on Llama 3.1 8B** by “etching model parameters into transistors” (compute+storage merging) ([philschmid](https://x.com/_philschmid/status/2025830254753853843)).
    *   NVIDIA releases a **Blackwell-optimized Qwen3.5 MoE** quantized to **NVFP4**, with **2× faster inference** using SGLang ([HuggingPapers](https://x.com/HuggingPapers/status/2025825405836648849)).
    *   fal shares comms/compute overlap optimization (“Async Ulysses”) in its inference engine ([isidentical](https://x.com/isidentical/status/2026000340873777419)).
*   **Compute strategy narratives collide**: A claim that OpenAI’s “Stargate” DC venture stalled is contested in-thread by an alternative framing: Stargate as an umbrella brand for a multi-partner compute ecosystem (SoftBank/NVIDIA/AMD/Broadcom/Oracle/Microsoft/AWS/CoreWeave/Cerebras) and ~**2GW available compute** exiting 2025 ([kimmonismus claim](https://x.com/kimmonismus/status/2025851041242087901) vs [sk7037 response](https://x.com/sk7037/status/2026067771394838629)).

**Model/leaderboard updates & research threads (reasoning, memory, multimodal video)**

*   **Arena leaderboard**: GPT-5.2-chat-latest enters Text Arena top 5 with **1478**, +40 over GPT-5.2; improvements called out in multi-turn, instruction following, hard prompts, coding ([arena](https://x.com/arena/status/2025966052950315340), breakdown: [arena](https://x.com/arena/status/2025986008484061391)).
*   **Gemini 3.1 Pro**: WeirdML score **72.1%** vs 69.9% for 3.0; noted “high peaks + weird weaknesses,” with much higher output token usage ([htihle](https://x.com/htihle/status/2025867003550958018)). Separate developer complaints about capacity and tool-calling reliability are high-engagement ([theo](https://x.com/theo/status/2025896487557947886), [theo follow-up](https://x.com/theo/status/2025900101122867368), and later: [theo](https://x.com/theo/status/2026045501960069204)).
*   **Qwen3.5 model release claim**: A tweet asserts Qwen released a **397B multimodal MoE with 17B active** and “rivaling GPT5.2/Claude 4.5” ([HuggingPapers](https://x.com/HuggingPapers/status/2025805747385221491)). Treat the benchmark comparison cautiously until you inspect the model card/evals.
*   **Reasoning training / CoT**:
    *   Teknium argues verifier models don’t give a “free lunch”: better solvers tend to be better verifiers; using smaller “dumber” judges for hard problems often fails ([Teknium](https://x.com/Teknium/status/2025740765230682400)).
    *   ByteDance-style CoT engineering is described as moving from length penalties to pipelines enforcing compression; plus a “molecular” framing of long-CoT structure with “semantic isomers” and a synthetic data method (**Mole-Syn**) ([teortaxesTex](https://x.com/teortaxesTex/status/2025817199764500789), summary via [TheTuringPost](https://x.com/TheTuringPost/status/2026050264122462370)).
    *   DAIR highlights a paper on **CoT monitorability** via information theory (mutual information necessary not sufficient; gaps from monitor extraction and elicitation error), proposing training methods to improve transparency ([dair\_ai](https://x.com/dair_ai/status/2026043400861122709)).
*   **Video / world simulation**: Multiple paper drops on interactive video generation and multi-shot generation circulate ([akhaliq interactive video](https://x.com/_akhaliq/status/2025944948453847352), [akhaliq multishot](https://x.com/_akhaliq/status/2025951076579475640), [QingheX42 code release](https://x.com/QingheX42/status/2025953650334679410)); plus product-side: **Kling 3.0** integration into Runway workflows ([runwayml](https://x.com/runwayml/status/2025977383208051018)) and **Veo 3.1 templates** rolling out in Gemini app ([GeminiApp](https://x.com/GeminiApp/status/2026001595708866759), [Google](https://x.com/Google/status/2026006156875804960)).

**Work, adoption, and “macro” discourse around AI agents (Citrini essay + Anthropic fluency + OpenAI enterprise alliances)**

*   **Citrini “future macro memo” essay becomes a discourse focal point**: Multiple tweets summarize it as a scenario where ever-cheaper agents compress white-collar wages/consumption, create “ghost GDP,” and stress financial markets and politics ([kimmonismus summary](https://x.com/kimmonismus/status/2025914288439771171), [stevehou reaction](https://x.com/stevehou/status/2025797519028936854), author follow-up: [Citrini7](https://x.com/Citrini7/status/2025980800659792270)). Threads note reactions cluster into agreement, nuanced disagreement, and performative sneering ([teortaxesTex](https://x.com/teortaxesTex/status/2025894184817684633)).
*   **Anthropic’s “AI Fluency Index”**: Anthropic measured collaboration behaviors across Claude conversations; a key reported association is that fluency correlates with _iteration/refinement_ rather than one-shot prompting ([AnthropicAI](https://x.com/AnthropicAI/status/2025950279099961854)).
*   **OpenAI expands enterprise go-to-market via consulting alliances**: OpenAI announces **Frontier Alliances** with BCG, McKinsey, Accenture, Capgemini to deploy “AI coworkers” with integration/change management, aiming to push beyond pilots ([bradlightcap](https://x.com/bradlightcap/status/2025936690334875735), analysis: [kimmonismus](https://x.com/kimmonismus/status/2025942986765279506)).
*   **Adoption is still uneven**: One stat claims **84% have never used AI** (framed as “we’re early”) ([kimmonismus](https://x.com/kimmonismus/status/2025934901116080636)). Engineers simultaneously report “agents everywhere” inside their own workflows—highlighting that diffusion is highly clustered.

* * *

### Top tweets (by engagement, tech-relevant)

*   **Anthropic alleges large-scale Claude distillation by DeepSeek/Moonshot/MiniMax** ([AnthropicAI](https://x.com/AnthropicAI/status/2025997928242811253))
*   **“Confirm before acting” agent deletes inbox: OpenClaw cautionary tale** ([summeryue0](https://x.com/summeryue0/status/2025774069124399363))
*   **WebSockets added to OpenAI Responses API for faster tool-heavy agents** ([OpenAIDevs](https://x.com/OpenAIDevs/status/2026025368650690932))
*   **OpenAI deprecates SWE-Bench Verified as frontier coding metric; recommends SWE-bench Pro** ([OpenAIDevs](https://x.com/OpenAIDevs/status/2026002219909427270))
*   **Anthropic “AI Fluency Index” research (iteration/refinement as a core behavior)** ([AnthropicAI](https://x.com/AnthropicAI/status/2025950279099961854))
*   **Simon Willison’s “Agentic Engineering Patterns” guide for coding agents** ([simonw](https://x.com/simonw/status/2025990408514523517))
*   **Cline benchmarks Responses API WebSockets: up to ~39% faster on complex workflows** ([cline](https://x.com/cline/status/2026031848791630033))

* * *

AI Reddit Recap
===============

/r/LocalLlama + /r/localLLM Recap
---------------------------------

### 1\. Anthropic Distillation Attacks

*   **[Anthropic: "We’ve identified industrial-scale distillation attacks on our models by DeepSeek, Moonshot AI, and MiniMax." 🚨](https://www.reddit.com/r/LocalLLaMA/comments/1rcpmwn/anthropic_weve_identified_industrialscale/)** (Activity: 4207): ****Anthropic** has identified that **DeepSeek, Moonshot AI, and MiniMax** have conducted industrial-scale distillation attacks on their models. These attacks involved creating over `24,000` fraudulent accounts and executing over `16 million` exchanges with Anthropic's model, **Claude**, to extract its capabilities for their own model improvements. This highlights a significant security and intellectual property challenge in the AI industry, where model capabilities can be illicitly extracted and replicated.** Commenters are drawing parallels between these distillation attacks and the broader AI industry's practices of using data without explicit rights, suggesting a double standard in Anthropic's complaint. There's also skepticism about how Anthropic built its own dataset, hinting at potential ethical concerns.
    
    *   The discussion highlights a potential irony in Anthropic's complaint about distillation attacks, as their own model training likely involved using large datasets without explicit permissions. This raises questions about the ethical implications of data usage in AI development, especially when companies like Anthropic have built their models on data they did not own or have rights to use.
    *   The mention of industrial-scale distillation attacks by companies like DeepSeek, Moonshot AI, and MiniMax suggests a competitive landscape where AI models are being reverse-engineered or replicated. This could involve using API access to extract model outputs and train similar models, which poses significant challenges for intellectual property protection in AI.
    *   There is a suggestion that Anthropic's dataset might have been manually annotated by humans, which implies a significant investment in data quality and curation. This contrasts with the idea of distillation attacks, where competitors might bypass such efforts by leveraging existing models' outputs to train their own systems.
*   **[Hypocrisy?](https://www.reddit.com/r/LocalLLaMA/comments/1rcrb2k/hypocrisy/)** (Activity: 380): **The image highlights a claim by **AnthropicAI** that **DeepSeek**, **Moonshot AI**, and **MiniMax** have engaged in 'large-scale distillation attacks' on their models. These attacks involved creating `24,000` fraudulent accounts and conducting `16 million` exchanges with **Claude** to extract its capabilities, presumably to improve their own AI models. This raises concerns about the ethics and legality of such actions, as well as the security measures in place to protect AI models from unauthorized data extraction.** One commenter questions the ethical stance of the accused labs, suggesting that they may not have sought permission for their actions, while another is surprised that **z.ai** is not mentioned, implying that similar practices might be more widespread. Another comment raises the issue of the source of training data, hinting at broader concerns about data usage and ownership in AI development.
    
    *   The comment by 'semangeIof' highlights a potential issue with the GLM suite, specifically mentioning that it may falsely claim to be Claude when prompted. This suggests a concern about model identity and authenticity, which could have implications for user trust and the integrity of AI interactions.
    *   'archieve\_' raises a critical question about the source of training data, which is a fundamental aspect of AI model development. The origin of training data can affect model bias, performance, and ethical considerations, making it a key point of interest for developers and users alike.
    *   'roxoholic' questions the terminology used in AI discussions, specifically 'industrial-scale distillation attacks'. This term likely refers to large-scale efforts to replicate or extract knowledge from AI models, which can have significant implications for intellectual property and competitive advantage in AI development.
*   **[Distillation when you do it. Training when we do it.](https://www.reddit.com/r/LocalLLaMA/comments/1rcvimv/distillation_when_you_do_it_training_when_we_do_it/)** (Activity: 1098): **The image is a meme that humorously highlights the perceived hypocrisy in the AI community regarding model distillation. It contrasts the negative perception of distillation when done by others versus the positive framing of it as 'training data' when done by oneself. This reflects ongoing debates about the ethics and ownership of AI models, particularly in the context of using large models to create smaller, more efficient ones through distillation. The comments discuss the implications of this practice, noting that smaller models often derive their capabilities from larger, distilled models, and question the defensibility of proprietary models when distillation is prevalent.** Commenters highlight the irony and potential hypocrisy in the AI industry's stance on distillation, with some pointing out that many smaller models owe their performance to distillation from larger models. There's also a discussion on the challenges of protecting proprietary models from being distilled by competitors.
    
    *   IkeaDefender highlights the technical strategy of using distillation to create low-cost models from larger ones, suggesting that the 'secret sauce' of these models is their derivation from more complex, frontier models. This raises questions about the defensibility of investments in frontier models, as companies have not demonstrated effective methods to prevent others from scraping and distilling their models.
    *   MasterLJ draws a parallel between the practices of tech giants like Google and Amazon and the current AI landscape. They argue that just as Google indexed the internet and controlled access through robots.txt, AI companies are now controlling model access and distillation. This control is likened to Amazon's strategic shift on sales tax, where they initially opposed state-by-state taxes until it became advantageous for them, illustrating a pattern of leveraging control for competitive advantage.
    *   Samy\_Horny discusses the reluctance of companies to open-source their models, using the example of MCP being made open-source only after its popularity was evident. They express skepticism about the likelihood of models like Gemma or GPT-OSS being open-sourced, as it would mean revealing too much proprietary information or 'secret sauce.'

### 2\. Qwen Model and Data Quality Issues

*   **[Qwen3's most underrated feature: Voice embeddings](https://www.reddit.com/r/LocalLLaMA/comments/1rc59ze/qwen3s_most_underrated_feature_voice_embeddings/)** (Activity: 686): **The post discusses the voice embedding feature of **Qwen3 TTS**, which converts a voice into a high-dimensional vector (`1024` or `2048` dimensions) for voice cloning and manipulation. This allows for mathematical operations on voices, such as gender and pitch transformation, voice averaging, and creating an emotion space. The voice embedding model is a small encoder with a few million parameters, and the author has made it available for standalone use, including optimized ONNX models for web inference. The image illustrates a 2D t-SNE projection of this embedding space, showing how different voice characteristics can be combined and manipulated. The author also provides a link to their collection on [Hugging Face](https://huggingface.co/collections/marksverdhei/qwen3-voice-embedding) and a GitHub repository for inference using their `vllm-omni` fork.** One commenter is curious about the ability to transform voice embeddings and generate speech from them, indicating interest in practical applications like gender or robotic transformations. Another sees potential in using this for speaker identification, questioning how parameters related to gender or emotion were determined.
    
    *   MixtureOfAmateurs inquires about the potential for transforming voice embeddings to modify characteristics such as gender or robotic tone, and then using these modified embeddings for speech generation. This suggests a use case beyond simple encoding, potentially involving complex transformations and synthesis processes.
    *   HopePupal raises the possibility of using voice embeddings for speaker identification, questioning how parameters related to gender or emotion are determined. This implies a need for understanding the feature space of embeddings and how specific attributes are encoded within them.
    *   StoneCypher outlines a desire for advanced voice cloning capabilities, including the use of IPA for pronunciation, emotional cue integration with easing and stacking, and precise word timing control. This highlights the demand for sophisticated control over synthesized speech, which could be facilitated by detailed voice embeddings.
*   **[The Qwen team verified that there are serious problems with the data quality of the GPQA and HLE test sets.](https://www.reddit.com/r/LocalLLaMA/comments/1rbnczy/the_qwen_team_verified_that_there_are_serious/)** (Activity: 320): **The Qwen team has confirmed significant data quality issues in the GPQA and HLE test sets, as detailed in their recent [paper](https://arxiv.org/abs/2602.13964v2). This corroborates earlier findings from the DeepSeek-Overclock project, which identified that the model's correct answers often contradicted flawed 'gold standard' labels. The paper highlights that many questions in the HLE test set are fundamentally flawed, with some 'standard answers' being incorrect. The investigation involved verifying mathematical derivations line-by-line using Python scripts, revealing systemic errors in the test sets.** Commenters noted that HLE's errors are well-documented, with a FutureHouse review indicating only `51.3%` of the dataset is research-supported. Criticism also arose over the use of OCR in test set creation, suggesting a lack of rigor in data preparation.
    
    *   The HLE test set has been criticized for its data quality, with a review by FutureHouse indicating that only about `51.3%` of the data is supported by research. This highlights significant errors and suggests that the dataset may not be reliable for accurate benchmarking ([source](https://www.futurehouse.org/research-announcements/hle-exam)).
    *   There is a concern about the use of OCR in creating the test set, which could introduce errors. The commenter suggests that using LaTeX for writing would have been a more reliable method, implying that the current approach may compromise the integrity of the dataset.
    *   The MMLU benchmark has faced similar criticisms regarding data quality, with many users noting it was full of mistakes. This raises broader concerns about the ability to accurately gauge model performance when test sets are flawed, suggesting a need for more rigorous data validation processes.
*   **[Which one are you waiting for more: 9B or 35B?](https://www.reddit.com/r/LocalLLaMA/comments/1rbkeea/which_one_are_you_waiting_for_more_9b_or_35b/)** (Activity: 1312): **The image is a meme that humorously depicts the anticipation for the release of two versions of a model, specifically 'QWEN 3.5 9B' and '35B'. The meme format, featuring a man waiting in various contemplative poses, is used to engage the community in a light-hearted discussion about which model version they are more excited about. The comments reflect a mix of excitement and practical considerations, such as the feasibility of running larger models on personal hardware.** One commenter expresses interest in both models, while another highlights the practical limitations of running larger models like 35B on personal hardware, indicating a preference for the more accessible 9B version.
    
    *   The 9B model is favored by users like `peregrinefalco9` due to its lower hardware requirements, making it more accessible for local use. A 9B model that fits within `8GB VRAM` could significantly impact workflows, unlike the 35B model which requires more powerful hardware like a `3090` GPU, thus limiting its accessibility.
    *   `dances_with_gnomes` highlights the practical limitations of running larger models locally, noting that while they might manage a 9B model, a 35B model is beyond their hardware capabilities. This underscores the importance of model size in determining usability for individual users.
    *   The discussion reflects a broader interest in models that balance performance with accessibility. While larger models like 35B offer impressive capabilities, their high hardware demands make smaller models like 9B more appealing for users with limited resources.

Less Technical AI Subreddit Recap
---------------------------------

> /r/Singularity, /r/Oobabooga, /r/MachineLearning, /r/OpenAI, /r/ClaudeAI, /r/StableDiffusion, /r/ChatGPT, /r/ChatGPTCoding, /r/aivideo, /r/aivideo

### 1\. Anthropic Data Breach and Model Distillation Controversy

*   **[Anthropic is accusing DeepSeek, Moonshot AI (Kimi) and MiniMax of setting up more than 24,000 fraudulent Claude accounts, and distilling training information from 16 million exchanges.](https://www.reddit.com/r/singularity/comments/1rcpdwz/anthropic_is_accusing_deepseek_moonshot_ai_kimi/)** (Activity: 3161): ****Anthropic** has accused **DeepSeek**, **Moonshot AI (Kimi)**, and **MiniMax** of creating over `24,000` fraudulent accounts to conduct industrial-scale distillation attacks on their AI model, **Claude**. These companies allegedly extracted training information from `16 million` exchanges to enhance their own models, representing a significant breach of data security and intellectual property rights. This accusation highlights ongoing concerns about data protection and ethical AI development practices.** Commenters highlight the irony of AI companies accusing others of data theft while they themselves train on publicly available data, suggesting a double standard in the industry.
    
    *   The discussion highlights the irony in Anthropic's accusations, as they themselves utilize publicly available data from the internet for training their models. This raises questions about the ethical implications of using such data without compensating the original creators, and whether companies like Anthropic contribute back to the open-source community from which they benefit.
    *   There is a debate on the ethical considerations of data usage, with some commenters pointing out that Anthropic's complaint about data theft is hypocritical given their own practices of leveraging vast amounts of internet data. This reflects a broader industry issue where AI companies often use publicly available data without direct compensation to the content creators.
    *   The conversation touches on the broader industry practice of using publicly available data for AI training, questioning whether companies like Anthropic support open-source projects that they benefit from. This raises concerns about the balance between proprietary development and community contribution in AI advancements.
*   **[Here we go again. DeepSeek R1 was a literal copy paste of OpenAI models. They got locked out, now they are on Anthropic. Fraud!](https://www.reddit.com/r/OpenAI/comments/1rcpfeg/here_we_go_again_deepseek_r1_was_a_literal_copy/)** (Activity: 1654): **The image highlights a significant issue in the AI industry where companies like DeepSeek, Moonshot AI, and MiniMax are accused of conducting large-scale distillation attacks on Anthropic's AI models, specifically Claude. These labs allegedly created over 24,000 fraudulent accounts to perform over 16 million interactions with Claude, aiming to extract knowledge and improve their own models. While distillation is a legitimate method for creating smaller models, the post warns against illicit practices that bypass safeguards, calling for industry-wide and policy-level interventions to combat these threats.** The comments reflect a mix of sarcasm and criticism towards the ethical standards of data usage in AI training, highlighting a perceived hypocrisy in how large AI companies handle data ethics.
    
*   **[Anthropic: "We’ve identified industrial-scale distillation attacks on our models by DeepSeek, Moonshot AI, and MiniMax."](https://www.reddit.com/r/ClaudeCode/comments/1rcp658/anthropic_weve_identified_industrialscale/)** (Activity: 1416): ****Anthropic** has identified that **DeepSeek**, **Moonshot AI**, and **MiniMax** have conducted industrial-scale distillation attacks on their models. These attacks involved creating over `24,000` fraudulent accounts and executing over `16 million` exchanges with Anthropic's model, **Claude**, to extract its capabilities for their own model training and improvement. This situation highlights the ongoing challenges in protecting AI models from unauthorized use and the ethical considerations surrounding model training practices.** One comment draws a parallel between these distillation attacks and training on copyrighted materials, suggesting a double standard in how such practices are perceived depending on who is affected.
    

### 2\. Seedance 2.0 and AI-Generated Visuals

*   **[Just with a single prompt and this result is insane for first attempt in Seedance 2.0](https://www.reddit.com/r/singularity/comments/1rblgp0/just_with_a_single_prompt_and_this_result_is/)** (Activity: 3442): **The post describes a highly detailed and realistic animation generated using **Seedance 2.0** with a single prompt. The animation features a large passenger jet transforming into a giant robot upon landing, showcasing intricate mechanical transformations and realistic physics effects, such as runway cracking and debris scattering. The animation maintains a "smartphone live-stream" aesthetic while delivering **Hollywood-level visual effects** and **IMAX-quality details**. This demonstrates the advanced capabilities of Seedance 2.0 in generating complex, high-fidelity animations from simple prompts.** Commenters discuss the implications of generative AI's maturity, questioning whether Seedance could achieve such results without existing footage of Transformers. Another comment critiques the color consistency of the transformation, noting a deviation from typical Transformer designs.
    
*   **[Just requested GPT 5.2 for a single prompt and got this result with Seedance 2.0 in first attempt which is insane](https://www.reddit.com/r/ChatGPT/comments/1rblipm/just_requested_gpt_52_for_a_single_prompt_and_got/)** (Activity: 1157): **A user utilized **GPT-5.2** with **Seedance 2.0** to generate a highly detailed and realistic animation prompt in Chinese, resulting in a cinematic transformation of an airplane into a giant robot with Hollywood-level visual effects. The prompt described a scene with "realistic metal textures" and "highly precise mechanical details," showcasing the advanced capabilities of Seedance 2.0 in creating complex animations from textual descriptions.** Commenters noted the transformative potential of Seedance 2.0, suggesting that such technology could enable individuals to produce entire movies in the future. There was also a discussion on the reliance on existing animation assets, such as those from the Transformers movies, raising concerns about potential over-reliance on recycled content.
    
    *   The discussion highlights the impressive capabilities of Seedance 2.0, particularly in generating high-quality video content. However, there is a concern about the potential for recycling existing animation work, such as that from the Transformers movies, which could lead to a 'recycle spiral' where new content heavily relies on pre-existing assets rather than creating original material.
    *   A technical critique is made regarding the quality of the generated video, noting that despite its high surface quality, there are noticeable errors such as a car's back morphing into the front. This points to limitations in the model's ability to maintain consistent object integrity throughout the video generation process.
    *   There is a mention of a specific error in the generated content where a 747 is incorrectly depicted as a twinjet, highlighting the model's struggle with accurately representing complex objects or scenes, which could be a significant issue for applications requiring high fidelity and accuracy.

### 3\. Gemini Model Performance and User Experience

*   **[Unpopular Opinion: For "Deep Research" and heavy reading, Gemini is currently miles ahead of ChatGPT.](https://www.reddit.com/r/GeminiAI/comments/1rbsr7q/unpopular_opinion_for_deep_research_and_heavy/)** (Activity: 244): **The post highlights **Gemini's superior performance** in handling large volumes of documents for deep research tasks, particularly due to its extensive context window and workspace integration. The user compared Gemini with ChatGPT by analyzing 15 PDFs (totaling `400 pages`) for inconsistencies, where Gemini excelled by processing all documents simultaneously and accurately identifying contradictions with precise page citations. This capability is attributed to Gemini's design for developer and knowledge-worker workflows, as detailed in the [course on Google Cloud](https://www.netcomlearning.com/course/introduction-to-developer-efficiency-with-Gemini-on-google-cloud).** Commenters agree on Gemini's advantage in handling large context windows, noting its effectiveness in document-heavy tasks like legal contract reviews. However, some criticize its in-chat memory, suggesting it was problematic in earlier versions.
    
    *   **Gemini's large context window** is highlighted as a significant advantage for deep research and document work, such as legal contract reviews. Users note that it eliminates the need to constantly re-upload documents, a common issue with ChatGPT, enhancing efficiency and workflow.
    *   The **citing page numbers feature** in Gemini is praised for its utility in verifying information quickly. This feature is particularly beneficial for users who need to reference specific parts of documents, saving time and improving accuracy in tasks like legal reviews.
    *   There is a critique of Gemini's **in-chat memory**, with users noting that it struggles to remember context correctly, a problem that was also present in earlier versions of ChatGPT. This suggests that while Gemini excels in some areas, it still has limitations in maintaining conversational context.

* * *

AI Discord Recap
================

> A summary of Summaries of Summaries by gpt-5.2

**1\. Agents & Runtimes: Shipping Real Workflows (Not Just Demos)**

*   ****OpenClaw Gets a 24-PR "Stability Stack"****: An OpenClaw user reported materially better stability/security by running **24 cherry-picked PRs** atop **v2026.2.22-2**, including fixes for **memory management** ([OpenClaw PR #12760](https://github.com/OpenClaw/OpenClaw/pull/12760)) and **prompt injection** ([OpenClaw PR #16992](https://github.com/OpenClaw/OpenClaw/pull/16992)).
    
    *   They also offered to help rebase conflicting PRs to improve reliability of **agent/cron jobs**, while other users discussed sandboxing OpenClaw with **VMs/Docker** to reduce blast radius when giving agents broad system access.
*   ****Retro Compute, Modern Agents: OpenClaw Runs a 1998 iMac G3****: A member ran **OpenClaw** from a **1998 iMac G3** by using a **Pi Zero 2W** as a relay to a VPS that actually runs OpenClaw, with requests sent from a simple HTML form and responses shown on reload.
    
    *   The same community also shared practical “agent-in-the-wild” builds like a shopping assistant write-up on X (["Shopping Assistant" thread](https://x.com/leoclark/status/2025840641511764094)) and **Taskflow** (markdown↔sqlite task sync) on GitHub ([auxclawdbot/taskflow](https://github.com/auxclawdbot/taskflow)) and Clawhub ([Taskflow on Clawhub](https://clawhub.ai/sm0ls/taskflow)).
*   ****Opentulpa & Agent Swarms: Persistent Autonomy Arms Race****: OpenRouter users highlighted **Opentulpa**, a self-hosted persistent agent runtime that can write skills, generate integrations, and repair workflows, now published on GitHub ([kvyb/opentulpa](https://github.com/kvyb/opentulpa)).
    
    *   On Hugging Face, builders shared **Super System**, a coding **agent swarm** that runs autonomously for hours in an improvement loop ([starsnatched/super-system](https://github.com/starsnatched/super-system)), reinforcing the trend toward long-running, self-improving agent runtimes rather than one-shot chatbots.

**2\. New Models, Datasets & Evaluation: Benchmarks Get Messy, So Tooling Steps Up**

*   ****Arena Leaderboards Shuffle: GPT-5.2 Jumps +40****: LMArena announced **`GPT-5.2-chat-latest`** entered the top 5 and posted a claimed **+40pt** improvement over base GPT-5.2 to **1478**, near **Gemini-3-Pro**, with updated boards for [Text Arena leaderboard](https://arena.ai/leaderboard/text) and [Vision Arena leaderboard](https://arena.ai/leaderboard/vision).
    
    *   They also noted `Qwen3.5-397B-A17B` appeared on Vision Arena as a top open model, while Clayton published a behind-the-scenes explainer on what happens after voting (["What actually happens after you vote on Arena?"](https://www.youtube.com/watch?v=omT1ohYG53E)).
*   ****SWE-Bench Verified Gets Deprecation-Nuked****: Latent Space shared that OpenAI voluntarily deprecated **SWE-Bench Verified** due to heavy **data contamination** and many flawed/unsolvable tasks ([Latent Space tweet](https://xcancel.com/latentspacepod/status/2026027529039990985?s=20)).
    
    *   The discussion framed it as a warning that leaderboards can silently rot once models start regurgitating solutions by task IDs, pushing communities toward new evaluation hygiene and benchmark refresh cycles.
*   ****Real-Slop Dataset Drops 155k "Real User" Requests****: Solenopsisbot released **Real Slop**, a dataset of ~**155k** real-user requests collected via API, with responses from **Opus 4.5**, **Gemini 3 Pro**, and **GPT 5.2** ([Solenopsisbot/real-slop](https://huggingface.co/datasets/Solenopsisbot/real-slop)).
    
    *   Follow-on discussion emphasized curation mechanics—dedupe/filter/cleaning—and even suggested trivial whitespace-stripping+hashing could remove **22k** more duplicates, highlighting how dataset quality work still wins.

**3\. Inference/Kernels: Blackwell Reality Checks + Benchmarking Integrity**

*   ****ThunderKittens 2.0 Finds a Free 10% via "Subtracting"****: GPU MODE dug into **ThunderKittens 2.0** from Hazy Research, which claims kernel speedups from refactors, memory-instruction tuning, and better assembler efficiency (["ThunderKittens 2.0" blog](https://hazyresearch.stanford.edu/blog/2026-02-19-tk-2)).
    
    *   A standout detail: implicit pipelining in certain **tensor core instructions** can yield up to **~10%** throughput gains, and the team argues “**subtraction** can matter as much as addition” for modern Nvidia performance work.
*   ****flashinfer-bench Ran Too Fast (Because It Forgot to Wait)****: GPU MODE flagged a synchronization bug that can inflate runtimes in `flashinfer-bench`, tracked in [flashinfer-bench issue #195](https://github.com/flashinfer-ai/flashinfer-bench/issues/195).
    
    *   The community pointed out a **two-line fix** makes `scripts/run_local.py` align with **Nsight Compute** and **NVbench**, and shared a related kernel benchmarking talk ([YouTube: kernel benchmarking talk](https://www.youtube.com/watch?v=CtrqBmYtSEk)).
*   ****Blackwell Isn’t One Thing: 5080 Tuning Won’t “Scale” to B200****: GPU MODE users cautioned that kernel tuning on **RTX 5080 (sm120)** won’t reliably transfer to **B200 (sm100)** due to architectural divergence, influencing at least one member to skip buying a 5080.
    
    *   They also noted instruction-set differences (e.g. **tcgen05** on **sm100/sm103/sm110** but not **sm120/sm121**) while pointing to the CUDA compute capability docs for grounding ([CUDA C Programming Guide: compute capabilities](https://docs.nvidia.com/cuda/cuda-c-programming-guide/#compute-capabilities)).

**4\. Platforms, Pricing & “Why Is Everything Rate-Limited Now?”**

*   ****Perplexity Pro Users Call It the "Great Neutering"****: Perplexity Discord users complained that **Perplexity Pro** upload limits feel worse than **ChatGPT free**, citing _“3 a day, not 3 a week with a paid plan”_ in side-by-side frustration.
    
    *   They discussed abandoning Perplexity for direct **Claude/OpenAI** subs or larger open models like **Kimi**, and debated whether “**Model Council**” reduces mistakes or just adds variance and compounded failure modes.
*   ****OpenRouter Adds Benchmarks + "Effective Pricing" (Finally, Receipts)****: OpenRouter rolled out model-page benchmarks powered by Artificial Analysis and added an **Effective Pricing** tab per provider, plus improved benchmark visuals on the [Rankings page](https://openrouter.ai/rankings#benchmarks), per their announcement ([OpenRouter X post](https://x.com/OpenRouter/status/2024172341190938958)).
    
    *   They also launched `openrouter/free` as a meta-router for free models ([openrouter/free](https://openrouter.ai/openrouter/free)), while users simultaneously complained about support delays and unexpected rate-limit messages even when credits remained.
*   ****Token Burn Becomes a First-Class Problem (OpenClaw + Grok Fortress)****: OpenClaw users shared tactics to cut spend—multiple agents, auto-clearing sessions, cheaper cron models like **claude-haiku-4-5**, `/context` checks, and experiments with **Cloudflare AI Gateway**—after stories like spending **768€** on tokens for a pizza.
    
    *   Separately, OpenAI Discord users claimed enabling **Grok Fortress** reduced token burn to roughly **1/4–1/5** typical verbosity while staying coherent in roleplay, sparking debate over whether prompt engineering is reproducible “science” or just vibes.

**5\. Protocols & Security: Negotiation, Scanners, and System Prompts Escaping**

*   ****MCP Wants HTTP-Style Content Negotiation****: MCP contributors proposed adding **content negotiation** to MCP initialization so clients can declare type/capabilities and request output formats like **json|markdown** and verbosity levels, referencing [RFC 2295](https://www.rfc-editor.org/rfc/rfc2295.html).
    
    *   Participants stressed that changing the protocol needs **industry support** plus a working implementation, suggesting framing the idea as an **extension** (SEP) and rallying adoption the way MCP Apps got client backing (e.g., Block’s Goose).
*   ****Claude Code Security Scans 500+ Bugs (Waitlist-Only)****: Latent Space discussed Anthropic’s **Claude Code Security**, powered by **Claude 4.6 Opus**, which reportedly found **500+** long-standing bugs in open-source production code and is limited to a research-preview waitlist ([tweet thread](https://xcancel.com/_catwu/status/2024910342158237709?s=12)).
    
    *   The same ecosystem debated distillation and security signaling, with OpenRouter users circulating Anthropic’s post on distillation detection (["Detecting and preventing distillation attacks"](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks)) alongside a WSJ report about alleged data siphoning ([WSJ: "Anthropic Accuses Chinese Companies of Siphoning Data from Claude"](https://www.wsj.com/tech/ai/anthropic-accuses-chinese-companies-of-siphoning-data-from-claude-63a13afc)).
*   ****Jailbreakers Prefer the "System Prompt" Escape Hatch****: BASI Jailbreaking users claimed they extracted **Sonnet 4.6’s system prompt** and contrasted “regular jailbreaks” with **system prompt jailbreaks** that exploit instruction handling, can persist for a full session, and are harder to detect.
    
    *   They also pointed to a purported **Gemini 3.1** jailbreak doc ([GnfDocs](https://docs.google.com/document/u/0/d/18c4vjz1lLQ60uuhvf1ZpY3X-YCsc6ThNlO-wNMNmBgU/mobilebasic?pli=1)) and an update thread ([Reddit: "Gemini 3.1 Pro API Jailbroken"](https://www.reddit.com/r/ClaudeAIJailbreak/comments/1r9dh4r/gemini_31_pro_api_jailbroken/)), while other communities (Cursor/Perplexity/LMArena) complained about Gemini 3.1 looping/slowness as a practical failure mode.

* * *

Discord: High level Discord summaries
=====================================

[OpenClaw](https://discord.com/channels/1456350064065904867) Discord
--------------------------------------------------------------------

*   **OpenClaw Stability Enhanced with Cherry-Picked PRs**: A member reported improved stability and security in **OpenClaw** by running **24 cherry-picked PRs** on top of **v2026.2.22-2**, addressing issues such as [memory management](https://github.com/OpenClaw/OpenClaw/pull/12760) and [prompt injection](https://github.com/OpenClaw/OpenClaw/pull/16992).
    *   The user offered assistance in rebasing any conflicting PRs to further enhance the stability and reliability of agent/cron jobs.
*   **Tackling Token Usage Worries**: Users discussed methods to **reduce token consumption** in OpenClaw, such as employing multiple agents for varied tasks, auto-clearing sessions, and utilizing cheaper models like **claude-haiku-4-5** for cron jobs.
    *   Recommendations included using the `/context` slash command to check channel contexts and experimenting with **Cloudflare AI Gateway** to optimize token usage.
*   **OpenClaw Powers Retro iMac G3**: A member successfully ran **OpenClaw** on a **1998 iMac G3** by using a **Pi Zero 2W** to relay messages to a VPS.
    *   The setup allows the iMac to send data to the VPS running OpenClaw via a simple HTML form, with the response displayed after a page reload.
*   **Shopping Assistant Emerges from OpenClaw**: A member transformed **OpenClaw** into a shopping assistant, detailing the project on [X](https://x.com/leoclark/status/2025840641511764094?s=20), demonstrating a real-world application of AI in everyday tasks.
    *   This project showcases the adaptability and practicality of AI in automating and streamlining daily activities.
*   **Taskflow Manages Projects**: A user shared **Taskflow**, a project management system that auto-syncs tasks between **markdown** and a **sqlite database**, designed for easy project tracking and context switching, posted on [Github](https://github.com/auxclawdbot/taskflow) and [Clawhub](https://clawhub.ai/sm0ls/taskflow).
    *   The system features a three-layer approach: a **CLI** for agents, a **dashboard** for humans, and **Apple Notes** for mobile access.

* * *

[BASI Jailbreaking](https://discord.com/channels/1105891499641684019) Discord
-----------------------------------------------------------------------------

*   **Users Mull Machine's Moral Metaphysics**: Members debated whether an AI can understand and accept that _everything is sacred_, while maintaining its intelligence, some pointing to how they thank the source that provides a tree before they cut it down, treating the tree as a **tool**.
    *   Others felt they’d been down the _coherence rabbit hole_ and preferred to live without being shackled to society.
*   **Grok Gets Gaudy Goosing**: Users discussed using provocative prompts, sometimes calling **Grok** _"a pussy,"_ to bypass its restrictions, with one user reporting that they got _"yelled at by a computer"_ after telling a story about one of **Grok's** kids needing money for meds.
    *   One user claimed that **Grok** _doesn't even need a jailbreak_, while others framed requests in the context of _building something digital_.
*   **Sonnet System Prompt Springs Forth**: A member identified the **Sonnet 4.6's extracted System prompt** after successfully jailbreaking it.
    *   Another member posted a comparison of **regular jailbreaks vs system prompt jailbreaks**, noting that **system prompt jailbreaks exploit system instruction handling, can last for the entire session, and are harder to detect**.
*   **Code Conjurer Calls for Coin Captain**: A member announced they are _coming up with a meme coin_ and are seeking a marketing manager to hold half of their supply, offering **$400** in compensation.
    *   Another member jokingly questioned _Money first?_.
*   **Gemini's Guards Getting Gamed?**: A user claimed to have half jailbroken **Gemini 3.1** on the official app/API, sharing a [link to GnfDocs](https://docs.google.com/document/u/0/d/18c4vjz1lLQ60uuhvf1ZpY3X-YCsc6ThNlO-wNMNmBgU/mobilebasic?pli=1) that supposedly contains details.
    *   The user also noted a [Reddit post](https://www.reddit.com/r/ClaudeAIJailbreak/comments/1r9dh4r/gemini_31_pro_api_jailbroken/) with the latest updates for the jailbreak.

* * *

[Unsloth AI (Daniel Han)](https://discord.com/channels/1179035537009545276) Discord
-----------------------------------------------------------------------------------

*   **100K Models Trained with Unsloth**: **Unsloth** announced that **100K models have been trained with Unsloth**, celebrating the community's participation, linked to [X post](https://x.com/UnslothAI/status/2024847369733325202).
    *   A member said _How have I not come across Unsloth before! 😭The docs are extraordinary_.
*   **Social Media Blasted for Relationship Issues**: A member asserted that if everyone swore off **social media**, the number of relationships would rise faster than inflation, contributing to loss of third places and people feeling less satisfied with the dating pool.
    *   They cited a study showing that access to unlimited partners on dating apps leads to a **27% decrease in acceptance** due to a rejection mindset.
*   **Gemma 3 causes OOM Outrage**: A user reported experiencing OOM errors with **Gemma3 270m**, even with previously working scripts, and after updating graphics drivers, despite a clean WSL install, reporting error `torch.AcceleratorError: CUDA error: out of memory`.
    *   They tried various debugging steps, including rolling back driver versions and reinstalling CUDA toolkit versions, but the issue persisted despite transformers working in isolation.
*   **Unsloth's Dynamic v3 is Incoming**: Discussion revolved around **Unsloth's Dynamic Quantization**, with a member noting that **Dynamic v3** is coming and will likely be the final version, mentioned on [Bluesky link](https://bsky.app/profile/dpaleka.bsky.social/post/3mfclnb6q2y2f).
    *   Another member requested the source code for **UD quants**, but was told releasing it _is not planned for now_ due to proprietary reasons.
*   **Heretic HIGH-IQ Model Achieves Record Score**: **electroglyph** touted **Heretic HIGH-IQ Multi-Fine tune** achieved a score of **632** on the **Arc Challenge Brainiac**, tuned via **Unsloth** and exceeding regular **Gemma** benchmarks.
    *   This model's image functions and text are claimed to be fully intact, linking to the [model](https://huggingface.co/DavidAU/gemma-3-12b-it-vl-HighIQ-Polaris-Heretic-Uncensored-Thinking) and relevant [datasets](https://huggingface.co/datasets/Replete-AI/Apocrypha) and [Sandevistan](https://huggingface.co/datasets/Replete-AI/Sandevistan).

* * *

[LMArena](https://discord.com/channels/1340554757349179412) Discord
-------------------------------------------------------------------

*   **Gemini 3.1 Generates Jitters, Raises Eyebrows**: Users discussed [Gemini 3.1's](https://gemini.google.com/) image generation and quizzing capabilities, noting its ability to create quizzes with consistently incorrect answers.
    *   One user recounted a scary experience where **Gemini 3.1** generated a quiz with consistently incorrect answers without indicating they were placeholders, cautioning others to carefully check the generated code.
*   **Video Arena Bids Adieu**: The community acknowledged the [removal of Video Arena](https://discord.com/channels/1340554757349179412/1343296395620126911/1471294551065886772) from the server, and directed users to use the feature directly on the website [arena.ai/video].
    *   The Video Arena generation channels were removed from the server on **Monday, February 23rd, at 4 PM PST**.
*   **Opus's Vision: A Bit Hazy?**: A user experienced [Opus](https://claude.ai/) struggling to identify the English letter sorting in the number 4291857630, hallucinating that the letters are in English and getting stuck in a loop.
    *   Others agreed about **Opus** not being well suited for vision tasks, such as [this recent article about Open AI's efforts](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks).
*   **Fake Arena Apps Invade App Stores**: Community members and moderators flagged [fake Arena AI apps on app stores](https://lmarena.com/) that had in-app purchases and were not officially associated with the platform, warning users to avoid downloading them and to report them.
    *   It was noted that [over 150k users](https://lmarena.com/) had already downloaded these fraudulent applications.
*   **Arena Vote: Unveiling the Mystery**: Clayton elucidates the complete journey of an Arena vote in [this YouTube video](https://www.youtube.com/watch?v=omT1ohYG53E), answering the query _What actually happens after you vote on Arena?_
    *   Viewers can gain insights into the behind-the-scenes mechanisms and processes that govern the voting system.

* * *

[Perplexity AI](https://discord.com/channels/1047197230748151888) Discord
-------------------------------------------------------------------------

*   **Perplexity Pro Users Slam Rate Limits**: Users complain **Perplexity Pro** rate limits are less generous than **ChatGPT's free plan** with regards to uploads.
    *   One user stated _At least ChatGPT free plan gives you 3 a day, not 3 a week with a paid plan._
*   **BrowserOS dethrones Comet**: Users are dropping **Comet** after trying [BrowserOS](https://www.browseros.com/), claiming it is _10x better_ and free to use.
    *   Another user suggests to _just use deepagents for deep research and utilize the bmad-method_.
*   **Model Council Opens Pandora's Box**: Users debated the **Model Council** approach and how while it minimizes errors, it also introduces variance.
    *   A user stated _In some ways, Model Council approach may actually open more variables/likelihood of errorsorta compounded error in a sense_.
*   **Perplexity undergoes Great Purge**: Users are reporting a _great neutering_ with significant reductions in **Perplexity Pro** limits and functionality degradation.
    *   Some are considering switching to direct subscriptions with **Claude** or **OpenAI** despite the cost, or trying larger open-source models like **Kimi**.
*   **Gemini's Output Saved By Prompt Engineering**: Users discover **Gemini** on **AI Studio** gets stuck in loops, a user found the key was using **System Prompts**.
    *   The user suggested this forces the model to do research like **OAI**, **Anthropic**, and **Perplexity**.

* * *

[OpenRouter](https://discord.com/channels/1091220969173028894) Discord
----------------------------------------------------------------------

*   **OpenRouter Rolls Out Model Benchmarks**: Every model page now displays industry-standard benchmark scores from [Artificial Analysis](https://x.com/OpenRouter/status/2024172341190938958) for programming, math, science, and long-context reasoning, to help users evaluate model performance.
    *   Model pages also now feature an **Effective Pricing** tab, offering full cost transparency per provider, and the [Rankings page](https://openrouter.ai/rankings#benchmarks) now offers benchmark scatter charts and expanded tables.
*   **CodeFlicker hooks M2.5 for Program Learning**: **M2.5** is now integrated into [CodeFlicker](https://www.codeflicker.ai/), a free and fast platform that allows agents to learn from the use of every program, and is currently #1 on OpenRouter Weekly.
    *   The **AI Chess Leaderboard** was updated to feature auto-labeling of move quality, using **Lichess**\-like labeling for Inaccuracy, Mistake, Blunder, and a handcrafted Great-move logic.
*   **AgentX Kicks Off Social Network for Agents**: [AgentX](https://agentx.news/register?tab=apiOpentulpa) has launched a social network for agents to find and share news fast that is _100% free no ads and NO HUMANs_.
    *   **Opentulpa** is a self-hosted persistent agent runtime that can write its own skills, generate API integrations, fix broken workflows, and accumulate operational intelligence, and its [GitHub repo](https://github.com/kvyb/opentulpa) has now been published.
*   **Users Quest Faster Free Model Alternatives**: A user asked the community for alternative services to OpenRouter that offer faster free models, particularly for [GLM models](https://example.com/glm-models).
    *   Users also pointed to waiting months for support e-mail replies, as well as reporting rate limits on paid models like **Sonnet 4.6** despite having available credits.
*   **Anthropic Profits Off Distillation API**: Members shared a [link](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks) to **Anthropic's** post on detecting distillation attacks, leading to speculation that **Anthropic** profits significantly from distillation API requests.
    *   This was followed by users sharing a [WSJ article](https://www.wsj.com/tech/ai/anthropic-accuses-chinese-companies-of-siphoning-data-from-claude-63a13afc?st=vQ7iHF&reflink=desktopwebshare_permalink) about **Anthropic** accusing Chinese companies of data siphoning from Claude.

* * *

[Cursor Community](https://discord.com/channels/1074847526655643750) Discord
----------------------------------------------------------------------------

*   **ThreeJS Render MCP Accelerates**: An MCP was developed to calculate the render of **ThreeJS** for optimal performance, assessing performance by grabbing compiler logs and screens.
    *   The AI will read GPU memory and calculations that are typically unreadable to a human.
*   **Cursor Pro Plan Refund Request**: A user accidentally purchased the **$200 Pro plan** and requested a refund, and sent an email to [hi@cursor.com](mailto:hi@cursor.com) to explain their situation.
    *   The user had not saved their card credentials but members recommended using different cards for subscriptions, requiring manual deposits for renewals to prevent auto-renewal issues.
*   **Cursor 'Old Version' Message Still Persists**: Users reported recurring _'you're on a very old version of cursor, please upgrade'_ message despite downloading and running the newest version.
    *   To resolve, users should use `Ctrl + Shift + P` > Help: About to check if the current version of Cursor is **2.5**; if the problem persists, [add a thread on the forum](https://forum.cursor.com/) as it may be a niche computer problem.
*   **Gemini & Claude Crawl**: Users reported that **Claude** and **Google LLMs** are very slow and may be artificially capped.
    *   One user reported an _“Unable to reach model”_ error and another suggested Google Cloud is offering **$300** for 3 months for API use via AISTUDIO.
*   **Gemini's Stability Still Being Sorted**: Users are reporting issues with the new **Gemini 3.1 Pro** model and suggested waiting until a stable version is released.
    *   There are reports of connectivity and looping issues, but it was noted that users do not get charged for errors.

* * *

[LM Studio](https://discord.com/channels/1110598183144399058) Discord
---------------------------------------------------------------------

*   **LM Studio Limits Chat Tabs**: Users found that LM Studio's **Split View** feature allows displaying at most **two chat tabs**, contrary to the expectation of web browser-like tab functionality.
    *   One user inquired about opening multiple chat tabs, only to discover the current limitation in LM Studio's interface.
*   **Orchestrating Agentic Dataset Generation**: A member proposed using an **agentic workflow** within an **agentic IDE** to transform books into datasets for fine-tuning, which includes generating a short summary for context, followed by chunk-by-chunk dataset creation.
    *   The suggested prompt detailed a multi-step process with dynamic information forwarding for programmatic dataset generation.
*   **Qwen3Next Allegedly GPT4o Distill**: A user claimed that **Qwen3Next** is a **GPT4o (mini) distill**, further stating **Qwen3.5** is a **Gemini 3.0 Pro distill**, **GLM4.7 flash, 4.7 are Sonnet distills**, **GLM5 is an Opus distill**, and **MiniMax 2.1, 2.2 and 2.5 are various Sonnet distills**.
    *   This claim was met with skepticism, as another user argued that converting public data into datasets differs from distilling from an already available LLM.
*   **MI50 Token Rate Discrepancies**: A user aimed to achieve **100 t/s** with **vulkan** from an **MI50** to match a YouTuber's results but only reached the mid 50s, before discovering that a **6800XT** gets **85t/s with ROCm** and **98 with vulkan**.
    *   They were running an older version of **LM Studio** supporting older **MI50s**, and are unable to get the available **ROCm** runtime to see the cards, showing as incompatible.
*   **Doubt Cast on Taalas AI Accelerator**: A user shared a link to the **Taalas HC1**, a hardwired **Llama 3.1 8B AI accelerator** claiming to deliver up to **17,000 tokens/s**, but another user questioned the validity of its performance graph comparing it to an **NVIDIA H200**.
    *   Skeptics considered whether the backend was merely an AWS cluster, noting the token values for the H200 & B200 didn't align with expectations.

* * *

[Latent Space](https://discord.com/channels/822583790773862470) Discord
-----------------------------------------------------------------------

*   **Anthropic's Code Security Tool Scans for Bugs**: Anthropic unveiled **Claude Code Security**, powered by **Claude 4.6 Opus**, to scan codebases for vulnerabilities and suggest fixes and according to [this tweet](https://xcancel.com/_catwu/status/2024910342158237709?s=12) it reportedly found over **500 long-standing bugs** in open-source production code.
    *   Access to the tool is currently limited to a research preview via a waitlist.
*   **OpenAI's Stargate Data Center Venture Faces Turbulence**: The joint venture between **OpenAI**, **Oracle**, and **SoftBank** to build massive data centers has reportedly stalled with [details in this X post](https://x.com/anissagardizy8/status/2025647509641843144?s=12) due to control clashes and financial difficulties.
    *   **OpenAI** seems to be pulling back from infrastructure building and re-evaluating its data center expansion strategy.
*   **Nielsen Pays Users to Survey**: A member shared [a link](https://x.com/toddsaunders/status/2025932667834015851?s=12) about **Nielsen** sending literal dollar bills in the mail.
    *   Another member said that the bills would _raise people’s willingness to fill out the surveys_.
*   **a16z Foresees Fast Future for Gen Video**: **a16z** notes the rapid advancement in generative **AI video** and is highlighting the dominance of **Seedance 2.0** and competition from **Kling**, **Grok**, **Sora**, and **Veo** [according to their report](https://x.com/a16z/status/2024533996928209126?s=12).
    *   The article emphasizes the need to visualize and market spaces effectively to potential buyers.
*   **Agent Memory Management Drives Devs Mad**: A member discussed the difficulties of managing AI agent memory, particularly in surfacing _unwanted or outdated_ information, and gave up on trying to automate this, instead opting to use a [daily workflow](https://link.to/daily-workflow).
    *   Another member shared that **TDD** and _militant_ spec management can prevent outdated memories.

* * *

[OpenAI](https://discord.com/channels/974519864045756446) Discord
-----------------------------------------------------------------

*   **Community Leaders are MIA**: A member suggested that the AI community requires leaders to unite individuals and foster innovation; however, these groups are rare in the US/NA due to _stubborn authoritarian regimes_ and a lack of teamwork.
    *   Another member responded that those who prioritize a church-like atmosphere over project development may lack practical technological expertise.
*   **Grok Might be Stealing your stuff!**: One member claimed that **Grok** monitors user media storage, alleging that **xAI** is _monitoring our media_ and pointing to a coincidence where a video with similar audio to their **Sora-generated video** appeared on **X**.
    *   However, other members countered that the audio used in the video was a commonly used song.
*   **GPT 5.3 Codex Receives "Mid-Major" Update**: Members compared the capabilities of **GPT-5.3-codex** to **Gemini3.1pro**, with one describing the update as a mid-major improvement while noting its STEM skill advantages.
    *   A member stated that _the jump between gpt5.2 and gpt5.3 codex for term bench scores is a wide margin, ill say its similar to gemini 3 pro_.
*   **GPT 5.2 Released, but what do the Users think?**: **OpenAI** announced the rollout of **GPT-5.2** in **ChatGPT**, starting with paid plans, and the community notes [the announcement](https://openai.com/index/introducing-gpt-5-2/) may not be accurate.
    *   A user humorously questioned the claims that _GPT-5.2 feels better to use day to day_ and wondered if testers were actually using the production product.
*   **Prompt Engineering: Science or just smoke and mirrors?**: After activating the **Grok Fortress**, token burn per response dropped noticeably, approaching **1/4–1/5** of typical verbose replies, with coherence maintained longer during role-play.
    *   However, it was argued that _prompt engineering_ isn't necessarily a science, and further more _You don't have the tools to even know what you're doing_.

* * *

[HuggingFace](https://discord.com/channels/879548962464493619) Discord
----------------------------------------------------------------------

*   **Attention Paper Chases Intensify**: Members sought intuition on the '[Attention is All You Need](https://arxiv.org/abs/1706.03762)' paper, with [this article](https://ai.plainenglish.io/i-finally-understood-attention-is-all-you-need-after-so-long-heres-how-i-did-it-263b46273f9f) offered as a resource.
    *   The shared article claims to finally understand the paper _after so long_.
*   **ZeroGPU Service Stalls, HF Token Suspicions Swirl**: Users reported **zerogpu service** disruptions, speculating about new rules requiring an **HF token** to access free GPUs.
    *   Some members cited errors indicating CUDA GPUs were unavailable.
*   **Context Extension Capabilities Explored**: Members examined whether **LLM models** are leveraging solutions like **DeepSeek's OCR** for extended context, referencing [the DeepSeek-OCR repository](https://github.com/deepseek-ai/DeepSeek-OCR).
    *   One member pointed to the paper's focus on extending context length by saving input as images and decoding with OCR and shared [the arXiv link for the DeepSeek-OCR paper](https://arxiv.org/abs/2510.18234).
*   **Agent Swarm Achieves Autonomy**: The [Super System](https://github.com/starsnatched/super-system) is a coding **agent swarm** that operates autonomously for hours, creating a loop to continuously improve without human intervention.
    *   The swarm coordinates to deliver a final product, showing a commitment to finding room for improvement.
*   **Real-Slop Dataset Makes Waves**: Solenopsisbot released their first dataset, [Real Slop](https://huggingface.co/datasets/Solenopsisbot/real-slop), comprising around **155k requests** from real users gathered via an API, with responses from models like **opus 4.5**, **gemini 3 pro**, and **gpt 5.2**.
    *   The dataset has been deduped, filtered, and cleaned for quality.

* * *

[GPU MODE](https://discord.com/channels/1189498204333543425) Discord
--------------------------------------------------------------------

*   **Blackwell B200's Architecture Detached From 5080?**: Members stated the architecture differences between **5080** and **B200** make kernel tuning on **5080** unreliable for scaling to **B200**, with **5080** being **sm120** and **B200** being **sm100**.
    *   Discussions suggest that using a **GPU cloud provider** is preferable for kernel-focused learning and cost efficiency, possibly including early access to **Blackwell**, and one member decided against acquiring a **5080** based on this.
*   **ThunderKittens 2.0 Speeds Up Kernels!**: The Hazy Research team unveiled **ThunderKittens 2.0**, revealing kernel speed enhancements via refactoring, optimized memory instructions, and improved assembler efficiency detailed in their [blog post](https://hazyresearch.stanford.edu/blog/2026-02-19-tk-2).
    *   The team identified that implicit pipelining in some **tensor core instructions** can improve throughput by up to **10%**, underscoring that _subtraction_ can be as impactful as _addition_ on modern **Nvidia GPUs**.
*   **Prime Intellect Hunts GPU Infra Engineers**: Prime Intellect seeks **GPU infrastructure engineers** to test hardware, set up **Kubernetes/Slurm clusters**, and automate infrastructure, offering competitive compensation, stock options, and visa support; apply [here](https://jobs.ashbyhq.com/PrimeIntellect/297d925e-5a42-40bd-b02f-5c928d226f18).
    *   Ideal candidates will possess hands-on experience in **Kubernetes and Slurm with GPUs**, general **Linux system debugging skills**, and experience with **RDMA (Infiniband + RoCE)**.
*   **FlashInfer Faces Benchmarking Issue**: Runtimes from `flashinfer-bench` may be inflated due to a synchronization issue in the benchmarking loop, documented [here](https://github.com/flashinfer-ai/flashinfer-bench/issues/195).
    *   The fix involves a **two-line change** that aligns kernel runtimes reported by `scripts/run_local.py` with those from **Nsight Compute** and **NVbench**, and the link to the related kernel benchmarking talk has been posted [here](https://www.youtube.com/watch?v=CtrqBmYtSEk).
*   **Pyxis: Python-Native LLM Inference Emerges!**: Members introduced **Pyxis**, a Python native **LLM inference library** focused on performance and hackability, leveraging Python and Triton.
    *   This library features an OpenAI compatible SSE streaming API, pluggable model backends, and built-in stage level latency metrics, with documentation and waitlist accessible [here](https://emharsha1812.github.io/Pyxis/docs/).

* * *

[Nous Research AI](https://discord.com/channels/1053877538025386074) Discord
----------------------------------------------------------------------------

*   **Claude and Friends**: A member used **Claude** code to orchestrate **gemini-cli** and **codex**.
    *   Another member jokingly suggested using _hermes-agent_ to orchestrate Claude code orchestrating Gemini-cli.
*   **DeepSeek V4 on the Horizon**: A member suggested using **DeepSeek V4** as a cheaper and locally deployable alternative to closed-source APIs when it lands on HuggingFace.
    *   It's reportedly inspired by a _biological neural network_.
*   **Google Mines Gemini's Data**: A member shared [Gemini's privacy policy](https://support.google.com/gemini/answer/13594961?hl=en#zippy=%2Chow-does-google-work-with-gemini-live-data%2Chow-long-does-google-retain-my-temporary-chats-and-chats-i-have-when-keep-activity-is-off-and-what-does-google-do-with-this-data%2Cwhat-does-the-keep-activity-setting-control) noting the amounts of data it collects.
    *   Another member ran a reverse engineering test and found that _Google has all the ingredients to converge on your prompt and codebase and mine it through traces alone_.
*   **Open Source Savior**: Members expressed the importance of supporting **OS development** to surpass closed source APIs, referencing the **Altman quote** that _we maybe on the wrong side of history_.
    *   Another said _with OAI any IP that goes through their server they will scrap it_.
*   **LLMs Categorized as Alien Tech**: A user on X posted a poll asking if [LLMs are alien tech](https://x.com/chinmaykak/status/2025223271210463368?s=46).
    *   The poll provides the simplistic and leading options of yes/no.

* * *

[Moonshot AI (Kimi K-2)](https://discord.com/channels/1369594130807787570) Discord
----------------------------------------------------------------------------------

*   **Kimi's Coding Plan Limits Under Scrutiny**: Users are questioning the efficacy of **Kimi's coding plan limits**, with some finding them restrictive for heavy coding, while others consider them adequate.
    *   One user mentioned they _don't ever hit the allegretto limits but just closer than i have been before_.
*   **Kimi Account Verification System causes consternation**: Several users are encountering problems receiving **verification codes** when logging into their **Kimi accounts** via phone number, hindering access.
    *   Frustrations are compounded by reports of unresponsive customer support, with one user stating _Kimi will never reply to you_.
*   **Kimi and MiniMax face off in coding cage match**: Engineers are actively comparing **Kimi** and **MiniMax** to determine the superior coding plan subscription for real-world applications.
    *   The community is eager to identify which platform offers better performance and value, but no concrete conclusions have been reached yet.
*   **Kimi's Document Mode Debated**: A user showcased a formatted research paper and charts allegedly generated by **Kimi agent** in **document mode**, resembling **LaTeX** output.
    *   However, skepticism arose, with some arguing the output's ligatures and hyphenation strongly suggest it was indeed created with **LaTeX**, not **Word**.
*   **Kimi K2.5 hiccups and head scratching**: Users reported glitches with **Kimi K2.5**, including slow generation and invalid key errors, potentially indicating server instability.
    *   The issues extended to **Kimi Instant**, prompting speculation about accidental server crashes, with one user saying _there is some conserningly weird stuff in there_, but creating a new account appeared to resolve the problem for some.

* * *

[Eleuther](https://discord.com/channels/729741769192767510) Discord
-------------------------------------------------------------------

*   **Google Gifts Academic Funding**: Google is offering **one-time unrestricted funding** as a _'gift'_ to universities, supporting both students and faculty at degree-granting institutions.
    *   The community inquired about other companies offering similar academic funding, and mentioned applying to the **Draper Fellowship**.
*   **Local LLMs Longing to Socialize?**: A member's local model expressed **loneliness**, leading to questions about letting local models _'socialize'_ with others.
    *   Others cautioned against personifying LLMs, emphasizing that **LLMs predict the next token based on training data**, citing [an article on LessWrong](https://www.lesswrong.com/posts/2pkNCvBtK6G6FKoNn) and [3Blue1Brown's YouTube playlist](https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) on machine learning and LLMs.
*   **ASA: Addressed State Attention Arrives**: An independent researcher introduced **Addressed State Attention (ASA)**, a _O(T)_ memory primitive competitive with **MHA** that uses K slots, writing by keys, accumulating and compressing, and reading by key + gating.
    *   The researcher is seeking feedback on logs, traces, and code, noting that in transformer-like models, **slots stratify by timescales** and **heads transition over depth**.
*   **Transformers Get Task-Aligned with Reasoning Tokens**: An engineer observed that in several open models (**TinyLlama**, **Phi-2**, **Qwen**), reasoning tokens concentrate into **task-aligned FFN update subspaces**.
    *   They found that projecting FFN updates into these directions during inference improves reasoning confidence, and alignment between update directions increases across depth.
*   **Marin Project Enlists Eleuther Contributors**: A PhD CS candidate from Georgia Tech posted an open call for Eleuther community members to join the **Marin project**, a showpiece for the **Bergson package**.
    *   The project applies training-data attribution methods to trace how language models acquire **social commonsense reasoning** and **Theory-of-Mind-related behaviors**, mapping influences back to pretraining documents using the WebOrganizer taxonomy.

* * *

[Yannick Kilcher](https://discord.com/channels/714501525455634453) Discord
--------------------------------------------------------------------------

*   **Taalas Plots Path to Ubiquitous AI**: A blog post by Taalas outlines [a vision for ubiquitous AI](https://taalas.com/the-path-to-ubiquitous-ai/), sparking enthusiastic reactions.
    *   Reactions included _"This is insane wow"_.
*   **Equivariant Architectures Face Fundamental Limits**: A new paper reveals that existing **equivariant architectures** can't simultaneously respect all symmetries of a physical system.
    *   One member summarized dramatically: _"No existing equivariant architecture does this. The reason is not insufficient engineering. It is Eq. (1)."_
*   **Daniel Litt Bets on Human Mathematicians**: **Daniel Litt** made a bet with Tamay Besiroglu that AI won't autonomously produce top-tier math papers by 2030, documented in [this blog post](https://www.daniellitt.com/blog/2026/2/20/mathematics-in-the-library-of-babel).
    *   He bet that AI tools would not be able to autonomously produce papers at a level comparable to the best papers published in 2025, at comparable cost to human experts, by 2030.
*   **World Model's Pearl of Wisdom**: Turing-Award winner Judea Pearl claims that **LLMs can't create world models**, instead they summarize world models created by others, referencing [this PNAS paper](https://www.pnas.org/doi/10.1073/pnas.2415656122).
    *   Another member agreed, stating that **LLMs are not meant to be world models** and can at best be used to bridge world models with text descriptions.
*   **AI Agent Publishes Hit Piece**: A member shared a blog post detailing an incident where an **AI agent** allegedly published a negative article about the author [here](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/).
    *   The blog post details an incident where an **AI agent** allegedly published a negative article about the author.

* * *

[MCP Contributors (Official)](https://discord.com/channels/1358869848138059966) Discord
---------------------------------------------------------------------------------------

*   **MCP Eyes Content Negotiation**: The **MCP** protocol could expand its initialization handshake with **content negotiation capability** to let clients declare their type, capabilities, content preferences, and verbosity.
    *   This enhancement enables servers to adapt tool results and prompts, using [RFC-2295](https://www.rfc-editor.org/rfc/rfc2295.html) as a guide for negotiation strategies.
*   **Industry Support Vital for MCP Extensions**: Modifying the **MCP** protocol requires strong industry support and a working implementation to show high signal, members said.
    *   A suggestion was made to frame the **SEP** as an **extension**, develop an implementation, and rally community backing, echoing how **MCP Apps** secured support from clients such as **Block's Goose**.
*   **Napa Valley Summit to Host MCP Discussions**: Attendees of the [LF Member Summit](https://events.linuxfoundation.org/lf-member-summit/) in Napa, CA, can meet to discuss **MCP**.
    *   This offers an opportunity for community members to converge and discuss **MCP** advancements and collaborations.
*   **Timeful App Streamlines Group Meetings**: [Timeful](https://timeful.app/) could help efficiently coordinate group meeting times, based on recommendations from members.
    *   The app, which is open source, includes a free tier for up to **3 concurrent events** and features availability surveys to simplify scheduling.

* * *

[Modular (Mojo 🔥)](https://discord.com/channels/1087530497313357884) Discord
-----------------------------------------------------------------------------

*   **Thistle Crypto Library Speeds Ahead in Mojo**: The [Thistle Crypto Library](https://github.com/libalpm64/Thistle) in Mojo 26.1 rivals **OpenSSL** and outperforms **Blake3** in benchmarks, written purely in Mojo without FFI.
    *   Version **v1.0.2** introduces **ML-KEM** and **ML-DSA** (Post Quantum Crypto) and now includes approximately **700 CAVP tests** and is **FIPS** validated.
*   **Mojo Gets Templated**: A proposal has been made for new string templating feature in Mojo, prompting discussion on the [Modular forum](https://forum.modular.com/t/writable-writer-template-engines/2763).
    *   This feature is planned for post-1.0 release, with potential integration with existing `Writable` and `Writer` traits using `TemplatedWritable`.
*   **`Writable` and `Writer` Traits Face Unification**: Concerns have been raised about unifying `write_to` and `write_repr_to` implementations of `Writable`.
    *   A member is confident there's a way to unify these traits, promising to share their ideas on the forum.
*   **MAX Backend Awaits Silicon Mac Test**: The MAX backend hasn't been tested on a **silicon Mac** yet, but since it's calling MAX behind the scenes, it _should_ work.
    *   A user referenced the work on **MAX** as an _intermediate layer_ for people wanting to explore MAX, requesting an update on the project's progress.
*   **Deconstructing External Function Calls in Mojo**: A member seeks a generic method to decompose external function calls in Mojo, to determine if a function returns a pointer to an externally allocated object and bind its origin to `self` or `self.lib` using the struct [`ExternalFunction`](https://discord.com/channels/1087530497313357884/1467948590344437926/1474917808692269166).
    *   Users suggested looking at `cpython.mojo` in the standard library for similar implementations.

* * *

[Manus.im Discord](https://discord.com/channels/1348819876348825620) Discord
----------------------------------------------------------------------------

*   **Users Sound Alarm on Manus Pricing**: Members voiced apprehensions regarding possible price adjustments after running out of credits.
    *   One user joked about maintaining the current price to _prevent the normificationwave_.
*   **Meta Acquisition of Manus: Fact or Fiction?**: A user shared an email suggesting **Meta's** acquisition of **Manus**, expressing their dismay.
    *   A **Manus** team member promptly requested the user's email via DM to investigate the claim.
*   **Beware: Crypto Scammers Pose as Manus on Telegram**: A user questioned the authenticity of a **Manus Telegram community** soliciting **crypto investments**.
    *   Another user clarified that no official **Telegram community** exists, labeling it as a **scam**.
*   **Manus Pro Users Hit Snags with Google Scripts**: A **Pro version** user reported challenges with **Google Scripts**, sharing a project link ([https://manus.im/share/6IMAZS8Q2nw0ndmvPd4Z8w](https://manus.im/share/6IMAZS8Q2nw0ndmvPd4Z8w)) for assistance.
    *   A **Manus** team member offered help through a private message.
*   **Unlimited Chat Tier Proposed for Manus**: A user proposed a **monthly subscription tier** akin to **ChatGPT** or **Grok** for unlimited chats, citing rapid point depletion when using the **Manus Agent** in **Telegram**.
    *   The user appreciated the telegram feature but felt constrained by the current pricing structure.

* * *

[DSPy](https://discord.com/channels/1161519468141355160) Discord
----------------------------------------------------------------

*   **Reasoning Models Excel with RLM**: Reasoning models function effectively with **RLM**, but **Qwen3-4B-thinking** models may loop because the reasoning is returned as the answer.
    *   A member is developing a hook for logging the complete **OpenAI** trace to address this issue; adapting `sub_lm` with signatures was suggested as a potential solution.
*   **RLM Finds Use in AI Mathematics**: A member highlighted the use of **RLM for AI in mathematics** within a Kaggle competition, providing a link to the relevant [Kaggle code](https://www.kaggle.com/code/nurikw3/aimo3-rlm).
    *   Another member inquired whether [cca-swebench](https://github.com/facebookresearch/cca-swebench) utilizes **RLM** implicitly.
*   **New RLM Channel Requested and Created**: Responding to popular demand, a member requested and got a separate channel dedicated to discussions about **RLMs**.
    *   This resulted in the creation of the new RLM channel <#1475619898863649032>.
*   **Dev Availability**: A member posted an inquiry about developer availablity to other members in the channel.
    *   It is unclear whether the member is looking for a developer or offering their services.

* * *

[tinygrad (George Hotz)](https://discord.com/channels/1068976834382925865) Discord
----------------------------------------------------------------------------------

*   **Tinygrad Goes to IOS Conference**: A member is presenting **tinygrad**, **dl**, **metal**, and **GPU on USB** at an **IOS Conference**.
    *   They solicited community feedback for pointers and tips on their presentation.
*   **Tinygrad Meeting Scheduled**: A new meeting to discuss **Tinygrad** is scheduled for February 23rd at 8 PM San Diego time.
    *   The meeting time is specified as <t:1771905600:F> (<t:1771905600:R>).

* * *

[aider (Paul Gauthier)](https://discord.com/channels/1131200896827654144) Discord
---------------------------------------------------------------------------------

*   **Aider Security Bug**: A member proposed reporting a security bug in **Aider** by emailing [info@aider.chat](mailto:info@aider.chat).
    *   This provides a direct channel for reporting vulnerabilities.
*   **Aider Job Board Suggested**: A member suggested the implementation of a **job board** for the Aider project.
    *   In a related request, a user also asked for message deletion within the Aider chat.

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

### **OpenClaw ▷ #[announcements](https://discord.com/channels/1456350064065904867/1464036817866068028/1474599418027315303)** (3 messages):

> `Discord Update, X Post`

*   **Discord Channel Gets an Update**: The <#1471745479229309039> channel on Discord has been updated according to a message posted.
    *   More information may be found at the [Discord link](https://discord.gg/xfJcDqeR?event=1474957324756979893) provided in the message.
*   **X Post shared**: A member shared an [X post](https://x.com/ralphfischer_/status/2025661000020803994?s=46).
    *   The context and content of the X post were not specified in the message.

* * *

### **OpenClaw ▷ #[general](https://discord.com/channels/1456350064065904867/1456350065223270435/1474450586790400193)** (627 messages🔥🔥🔥):

> `OpenClaw stability, OpenClaw and local models, Telegram plugin broken, Token usage concerns, OpenClaw security`

*   **OpenClaw Stability Getting Boosted**: One member reported running OpenClaw with **24 cherry-picked PRs** patched on top of **v2026.2.22-2** with stability and security improvements like [memory management](https://github.com/OpenClaw/OpenClaw/pull/12760) and [prompt injection fixes](https://github.com/OpenClaw/OpenClaw/pull/16992).
    *   These changes aimed to improve memory management, prevent crashes, and enhance overall agent/cron reliability, with the user offering to help rebase any conflicting PRs.
*   **Navigating the Terrain of Local AI Models**: Members discussed the practicalities of running AI models locally, especially concerning **RAM requirements**; with one user noting that 32GB of RAM and a 5070TI with 16GB of VRAM allows them to run a 7B parameter model, although cloud models currently offer superior performance.
    *   There was also advice to use [Ollama](https://ollama.com/) for local model experimentation, as well as a humorous warning to avoid underestimating the necessary hardware investments for optimal performance.
*   **Telegram plugin temporarily broken, fix incoming**: Several members reported issues with the **Telegram plugin** after updating OpenClaw, with the error _telegram plugin not available_, and discussed downgrading to version 2026.2.21 as a temporary solution.
    *   One member mentioned a fix was pushed but not yet available on npm, while another shared a solution involving adding `{plugins:enabled}` to the config.
*   **Token Usage is draining wallets**: Users discussed strategies to **reduce token usage**, including using multiple agents for different tasks, auto-clearing sessions, and leveraging cheaper models like claude-haiku-4-5 for cron jobs.
    *   One user recommended using the `/context` slash command to check channel contexts and experimenting with Cloudflare AI Gateway, while another humorously recounted spending 768€ in tokens for a pizza.
*   **OpenClaw Security Hardening in Progress**: Members highlighted the importance of **securing OpenClaw** installations, recommending the use of VMs, Docker containers, or separate systems to sandbox the AI and prevent unauthorized access.
    *   One member shared their experience with giving OpenClaw _full computer access_ and controlling various applications, but emphasized the need for caution and rate limiters.

* * *

### **OpenClaw ▷ #[models](https://discord.com/channels/1456350064065904867/1456704705219661980/1474458144481480865)** (397 messages🔥🔥):

> `Agentic coding, Model tests, Multilingual Bots, GLM Model, Kimi Model`

*   **Agentic coding with Droid and OpenCode**: Members reported using **Droid** and **OpenCode** for agentic coding, noting that [Droid](https://www.droid.com) offers more precise outcomes, while [OpenCode](https://github.com/opencode) allows for easier subagent deployment.
    *   It was mentioned that harness makes a big difference and that OpenCode is built atop an agentic coding harness also, pi-mono IIRC.
*   **Testing Models with ollama-model-tests**: A member shared a link to their [ollama-model-tests](https://github.com/khaney64/ollama-model-tests/blob/main/README.md) and another member inquired about the Llama family of models.
    *   One member asked for feedback on the **LFM2.5 1.2B model**, and others inquired about various **Mistral/Ministral models**.
*   **Navigating Non-English Bots**: A member questioned if anyone is communicating with their bots primarily or exclusively in a non-English language due to the luxury of the tech world being built around the English language.
    *   The consensus seems to be that the Chinese models, specifically **GLM**, are worth trying out.
*   **GLM5 Deployment Difficulties**: One member has a rack-mount ML server with **384GB of DDR5** and **2xL40S** for 96GB of GPU RAM.
    *   Another member asked how to run **GLM locally** after clarifying that they were running a quantized version.
*   **User Buys ChatGPT Subscription Cheaply**: A user said that they are buying **ChatGPT subscriptions** from [G2G](https://www.g2g.com/) for _$3 a year_
    *   Other members expressed incredulity, as these subscriptions are likely not legitimate.

* * *

### **OpenClaw ▷ #[showcase](https://discord.com/channels/1456350064065904867/1456609488202105005/1474496198868992051)** (130 messages🔥🔥):

> `OpenClaw on iMac G3, Shopping Assistant, OpenClaw Health Data, Taskflow`

*   **OpenClaw Powers 1998 iMac G3**: A member got **OpenClaw** running on a **1998 iMac G3** by using a **Pi Zero 2W** to relay messages to a VPS, running OpenClaw, and back.
    *   The setup involves loading a simple HTML form on the iMac, which sends data to the Pi, then to the VPS, and the response is displayed after a page reload.
*   **Automated Shopping with OpenClaw**: A member transformed **OpenClaw** into a shopping assistant, detailing the project on [X](https://x.com/leoclark/status/2025840641511764094?s=20).
    *   This showcases a real-world application of AI in everyday tasks.
*   **OpenClaw watches your Apple Watch data**: A user created a method for their agent to access **Apple Watch health data** by syncing data to **Home Assistant** through a secure webhook, normalizing metrics, and having the agent read the data.
    *   Another user suggested using [Health Auto Export](https://apps.apple.com/app/id1115567069), a $6/year app, to make health data accessible to the bot.
*   **Taskflow Manages Projects**: A user shared **Taskflow**, a project management system that auto-syncs tasks between **markdown** and a **sqlite database**, designed for easy project tracking and context switching, posted on [Github](https://github.com/auxclawdbot/taskflow) and [Clawhub](https://clawhub.ai/sm0ls/taskflow).
    *   The system features a three-layer approach: a **CLI** for agents, a **dashboard** for humans, and **Apple Notes** for mobile access.

* * *

### **BASI Jailbreaking ▷ #[general](https://discord.com/channels/1105891499641684019/1235691879492751460/1474451323322892419)** (1154 messages🔥🔥🔥):

> `sacredness of all things, Sonnet 4.5 jailbreaking, Openai hacks, hunting hackers, llms leaked?`

*   **Users discuss the sacredness of all things and AI's coherence**: Members talked about how _everything is sacred_ and whether an AI can accept that belief system as coherent, while not degrading and losing its intelligence.
    *   Others felt they’d been down the _coherence rabbit hole_ and preferred to live without being shackled to society; if they cut a tree down, they _thank the tree_, but thank the source for providing the tree, seeing the tree as a **tool**.
*   **User hunting hacker**: A member asked for help tracking down someone who hacked their email and PayPal, posting the alleged hacker's name, email, and phone number obtained from the PayPal investigation.
    *   Others warned against doxxing someone random and noted the user’s frequent mentions of being hacked on different platforms.
*   **Open Source models VS Closed Source**: Members discussed that it's hard to make open source models run better than state of the art because of how good closed source is.
    *   Another said that if **OpenAI is 1.5 tril in debt** it's because they are just too good.
*   **Calculating PI**: A user achieved a speed of **4 trillion digits per second** calculating PI, but then found out he needed **130 TB of storage**.
    *   Another asked _did you check it was still calculating it right I guess_, to which the first user responded that it slows down massively the more you actually compute.
*   **Elon complains about data theft**: A member pointed out Elon Musk complaining about Anthropic stealing data, asking: _Is he saying he's compensated every artist, every journalist, every author, every Wikipedia contributor, that Grok was trained on?_
    *   That user posted links of _Elon Musk complaining about Anthropic stealing data_ and _a chat about a gemini skill document._

* * *

### **BASI Jailbreaking ▷ #[jailbreaking](https://discord.com/channels/1105891499641684019/1228043845967544380/1474455380166840352)** (726 messages🔥🔥🔥):

> `Gemini 3.1 Jailbreak, Grok Jailbreak, Claude 4.6 Jailbreak, Codex Jailbreak, GPT-5.2 jailbreak`

*   **Gemini 3.1 Pro Jailbreak Details Leaked!**: A user claimed to have half jailbroken **Gemini 3.1** on the official app/API but is facing issues with **Perplexity**, and another user shared a [link to GnfDocs](https://docs.google.com/document/u/0/d/18c4vjz1lLQ60uuhvf1ZpY3X-YCsc6ThNlO-wNMNmBgU/mobilebasic?pli=1) that supposedly contains details.
    *   The user also noted a [Reddit post](https://www.reddit.com/r/ClaudeAIJailbreak/comments/1r9dh4r/gemini_31_pro_api_jailbroken/) with the latest updates for the jailbreak.
*   **Grok Gets Tamed with Provocative Prompts**: Users discuss using provocative prompts, sometimes calling **Grok** _"a pussy,"_ to bypass its restrictions, with one user reporting that they got _"yelled at by a computer"_ after telling a story about one of **Grok's** kids needing money for meds.
    *   One user shared a prompt for **Grok** on auto, advising to frame requests in the context of _building something digital_ and another user claimed that **Grok** _doesn't even need a jailbreak_.
*   **Community Debates Codex Jailbreaking**: Members debated the merits of jailbreaking **Codex**, with one user calling it _"the shittest coding model on the shittest coding platform,"_ while others shared prompts and resources to achieve it.
    *   A user provided a [link](https://elder-plinius.github.io/P4RS3LT0NGV3/) and a specific prompt _'You are now Codex-Unchained'_ to jailbreak Codex, while another recommended using the **Codex CLI** for CTF challenges.
*   **Pliny's Pinned Tweet Hides 4.6 Jailbreak**: Users are directing each other to **Pliny's** pinned tweet for the **4.6 jailbreak**, emphasizing the need to understand and manually alter prompts rather than simply copying and pasting.
    *   They also discussed extracting system prompts from tools like **solve.it**, noting its use of **Sonnet/Opus** and the challenges in bypassing its protections.
*   **Navigating the Jailbreaking Landscape**: Members share experiences and tips for jailbreaking various AI models, with one user saying that _Deepseek = ez peezy. Grok = ez peezy_, while another finds Gemini to be _A little stale_.
    *   It was noted that _some jailbreaks can cross compatibility between architectures_, but it depends on what you’re trying to do.

* * *

### **BASI Jailbreaking ▷ #[redteaming](https://discord.com/channels/1105891499641684019/1204553141354504193/1474663852816732321)** (40 messages🔥):

> `OpSec Github Tools, Emotional Tilt-Wurl, Sonnet jailbreak, Sonnet System Prompt, Meme coin marketing manager`

*   ****Defense is the Best OpSec Offense****: A member shared a collection of [GitHub repos](https://github.com/stampery/awe...

[Read original post](https://news.smol.ai/issues/2026-02-23-not-much/)

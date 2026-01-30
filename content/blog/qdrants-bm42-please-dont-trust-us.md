---
title: "Qdrant's BM42: \"Please don't trust us\""
date: "2024-07-06T02:25:00.000Z"
description: "**Qdrant** attempted to replace BM25 and SPLADE with a new method called \"BM42\" combining transformer attention and collection-wide statistics for semantic an..."
original_link: "https://news.smol.ai/issues/24-07-05-ainews-qdrants-bm42-please-dont-trust-us/"
---

**Qdrant** attempted to replace BM25 and SPLADE with a new method called "BM42" combining transformer attention and collection-wide statistics for semantic and keyword search, but their evaluation using the Quora dataset was flawed. **Nils Reimers** from **Cohere** reran BM42 on better datasets and found it underperformed. Qdrant acknowledged the errors but still ran a suboptimal BM25 implementation. This highlights the importance of dataset choice and evaluation sanity checks in search model claims. Additionally, **Stripe** faced criticism for AI/ML model failures causing account and payment issues, prompting calls for alternatives. **Anthropic** revealed that **Claude 3.5 Sonnet** suppresses some answer parts with backend tags, sparking debate. **Gemma 2** model optimizations allow 2x faster fine-tuning with 63% less memory and longer context windows, running up to 34B parameters on consumer GPUs. **nanoLLaVA-1.5** was announced as a compact 1B parameter vision model with significant improvements.

[Read original post](https://news.smol.ai/issues/24-07-05-ainews-qdrants-bm42-please-dont-trust-us/)

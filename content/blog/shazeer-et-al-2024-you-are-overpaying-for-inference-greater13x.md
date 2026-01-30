---
title: "Shazeer et al (2024): you are overpaying for inference >13x"
date: "2024-06-22T00:48:48.000Z"
description: "**Noam Shazeer** explains how **Character.ai** serves **20% of Google Search Traffic** for LLM inference while reducing serving costs by a factor of **33** comp..."
original_link: "https://news.smol.ai/issues/24-06-21-ainews-shazeer-et-al-2024-you-are-overpaying-for-inference-greater13x/"
---

**Noam Shazeer** explains how **Character.ai** serves **20% of Google Search Traffic** for LLM inference while reducing serving costs by a factor of **33** compared to late 2022, with leading commercial APIs costing at least **13.5X more**. Key memory-efficiency techniques include **MQA > GQA** reducing KV cache size by 8X, hybrid attention horizons, cross-layer KV-sharing, stateful caching with a 95% cache rate, and native int8 precision with custom kernels. **Anthropic** released **Claude 3.5 Sonnet**, which outperforms **Claude 3 Opus** at twice the speed and one-fifth the cost, passing **64%** of internal pull request tests and introducing new features like Artifacts for real-time doc and code generation. Discussions on LLM architecture highlight the dominance of transformers, challenges in scaling and overfitting, and the importance of architecture work for progress.

[Read original post](https://news.smol.ai/issues/24-06-21-ainews-shazeer-et-al-2024-you-are-overpaying-for-inference-greater13x/)

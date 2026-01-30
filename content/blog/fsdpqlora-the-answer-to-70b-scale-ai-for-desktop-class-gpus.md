---
title: "FSDP+QLoRA: the Answer to 70b-scale AI for desktop class GPUs"
date: "2024-03-08T23:21:13.000Z"
description: "**Jeremy Howard** and collaborators released a new tool combining **FSDP**, **QLoRA**, and **HQQ** to enable training **70b-parameter** models on affordable con..."
original_link: "https://news.smol.ai/issues/24-03-08-ainews-fsdpqlora-the-answer-to-70b-scale-ai-for-desktop-class-gpus/"
---

**Jeremy Howard** and collaborators released a new tool combining **FSDP**, **QLoRA**, and **HQQ** to enable training **70b-parameter** models on affordable consumer GPUs like **RTX 4090s** with only **24GB RAM**, overcoming traditional memory constraints that required expensive data center GPUs costing over $150k. The approach shards quantized models across multiple GPUs and uses techniques like gradient checkpointing and CPU offloading to achieve efficient training on desktop-class hardware. The blogpost details challenges and solutions integrating these methods, highlighting a significant cost reduction from $150k to under $2.5k for training large language models. Additionally, Twitter recaps mention **Inflection AI**'s **Inflection-2.5** model rivaling **GPT-4** in benchmarks with less compute, and **Grok** improving speed by 3x. **Yann LeCun** discusses multi-step reasoning training for LLMs.

[Read original post](https://news.smol.ai/issues/24-03-08-ainews-fsdpqlora-the-answer-to-70b-scale-ai-for-desktop-class-gpus/)

---
title: "Nvidia Minitron: LLM Pruning and Distillation updated for Llama 3.1"
date: "2024-08-23T22:14:15.000Z"
description: "**Nvidia** and **Meta** researchers updated their **Llama 3** results with a paper demonstrating the effectiveness of combining **weight pruning** and **knowled..."
original_link: "https://news.smol.ai/issues/24-08-23-ainews-nvidia-minitron-llm-pruning-and-distillation-updated-for-llama-31/"
---

**Nvidia** and **Meta** researchers updated their **Llama 3** results with a paper demonstrating the effectiveness of combining **weight pruning** and **knowledge distillation** to reduce training costs by training only the largest model from scratch and deriving smaller models via pruning and distillation. The process involves teacher correction, activation-based pruning (favoring width pruning), and retraining with distillation using KL Divergence loss, resulting in better-performing models at comparable sizes. However, distillation incurs some accuracy tradeoffs. Additionally, **AI21 Labs** launched **Jamba 1.5**, a hybrid SSM-Transformer MoE model with large context windows and multilingual support. **Anthropic** updated **Claude 3** with LaTeX rendering and prompt caching. An open-source coding-focused LLM, **Dracarys**, was released in 70B and 72B sizes, showing improved coding performance. The **Mistral Nemo Minitron 8B** model outperforms **Llama 3.1 8B** and **Mistral 7B** on the Hugging Face leaderboard, highlighting pruning and distillation benefits. Research on prompt optimization reveals the complexity of prompt search spaces and the surprising effectiveness of simple algorithms like AutoPrompt/GCG.

[Read original post](https://news.smol.ai/issues/24-08-23-ainews-nvidia-minitron-llm-pruning-and-distillation-updated-for-llama-31/)

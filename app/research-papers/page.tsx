import type { Metadata } from "next"
import ResearchPage from "@/components/research-page"

export const metadata: Metadata = {
  title: "Research Publications",
  description: "Advancing the frontiers of AI through rigorous research. Explore our published papers on language models, multilingual AI, on-device models, and more.",
  keywords: [
    "AI research",
    "research papers",
    "arXiv",
    "language models",
    "LLM research",
    "multilingual AI",
    "on-device models",
    "AI publications",
    "machine learning research",
    "xAGI research",
    "domain adaptation",
    "model optimization"
  ],
  openGraph: {
    title: "Research Publications | xAGI Labs",
    description: "Advancing the frontiers of AI through rigorous research. Explore our published papers on language models, multilingual AI, on-device models, and more.",
  },
  twitter: {
    title: "Research Publications | xAGI Labs",
    description: "Advancing the frontiers of AI through rigorous research. Explore our published papers on language models, multilingual AI, on-device models, and more.",
  }
}

export default function Research() {
  return <ResearchPage />
}

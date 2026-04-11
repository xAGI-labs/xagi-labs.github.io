import type { Metadata } from "next"
import HomePage from "@/components/home-page"

export const metadata: Metadata = {
  title: "AI/ML and Platform Engineering Consulting",
  description:
    "xAGI Labs ships production AI: voice and contact center automation, research-led outbound with our AutoClaw product, OpenClaw deployment, LLM cost optimization, and platform engineering. Consulting with milestone delivery for startups and enterprise teams.",
  alternates: {
    canonical: "https://xagi.in",
  },
}

export default function Home() {
  return <HomePage />
}

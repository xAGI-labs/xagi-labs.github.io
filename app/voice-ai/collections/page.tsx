import type { Metadata } from "next"
import CommercialVoicePage from "@/components/voice-ai-growth/commercial-page"
import { commercialVoicePages } from "@/components/voice-ai-growth/content"

export const metadata: Metadata = {
  title: "AI Voice Agents for Collections",
  description:
    "Use AI voice agents for payment reminders, promise-to-pay capture, callbacks, dispute routing, and collections follow-up.",
  alternates: { canonical: "https://xagi-labs.github.io/voice-ai/collections" },
  openGraph: {
    title: "AI Voice Agents for Collections | xAGI Labs",
    description: "Run consistent collections reminders and follow-ups with structured outcomes, scripts, and escalation controls.",
    url: "https://xagi-labs.github.io/voice-ai/collections",
    type: "website",
    images: ["/xagi-icon.png"],
  },
}

export default function Page() {
  return <CommercialVoicePage content={commercialVoicePages.collections} slug="collections" />
}

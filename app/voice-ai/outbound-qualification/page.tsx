import type { Metadata } from "next"
import CommercialVoicePage from "@/components/voice-ai-growth/commercial-page"
import { commercialVoicePages } from "@/components/voice-ai-growth/content"

export const metadata: Metadata = {
  title: "AI Voice Agents for Outbound Qualification",
  description:
    "Deploy AI voice agents for lead qualification, appointment setting, admissions calls, outbound campaigns, and human routing.",
  alternates: { canonical: "https://xagi-labs.github.io/voice-ai/outbound-qualification" },
  openGraph: {
    title: "AI Voice Agents for Outbound Qualification | xAGI Labs",
    description: "Call leads quickly, capture qualification fields, and route high-fit prospects to sales or admissions teams.",
    url: "https://xagi-labs.github.io/voice-ai/outbound-qualification",
    type: "website",
    images: ["/xagi-icon.png"],
  },
}

export default function Page() {
  return <CommercialVoicePage content={commercialVoicePages["outbound-qualification"]} slug="outbound_qualification" />
}

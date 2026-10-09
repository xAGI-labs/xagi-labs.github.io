import type { Metadata } from "next"
import CommercialVoicePage from "@/components/voice-ai-growth/commercial-page"
import { commercialVoicePages } from "@/components/voice-ai-growth/content"

export const metadata: Metadata = {
  title: "AI Voice Agents for Customer Support",
  description:
    "Deploy AI voice agents for customer support triage, repeat questions, case intake, after-hours coverage, and human handoff.",
  alternates: { canonical: "https://xagi-labs.github.io/voice-ai/customer-support" },
  openGraph: {
    title: "AI Voice Agents for Customer Support | xAGI Labs",
    description: "Automate repeat support calls with grounded answers, structured case capture, QA visibility, and human handoff.",
    url: "https://xagi-labs.github.io/voice-ai/customer-support",
    type: "website",
    images: ["/xagi-icon.png"],
  },
}

export default function Page() {
  return <CommercialVoicePage content={commercialVoicePages["customer-support"]} slug="customer_support" />
}

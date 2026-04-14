import HomePage from "@/components/home-page"

export const metadata = {
  title: "Voice Agents for Customer Operations | xAGI Labs",
  description:
    "Deploy AI voice agents for support, collections, admissions, booking, and outbound qualification. Built for ops teams with low-latency conversations, human handoff, and structured data capture.",
  keywords:
    "voice agents, AI voice agents, call center AI, customer support automation, outbound voice AI, multilingual voice AI, operations AI, AI call workflows",
  openGraph: {
    title: "Voice Agents for Customer Operations | xAGI Labs",
    description:
      "AI voice agents for support and high-volume call workflows with realtime conversations, human handoff, and operational control.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Agents for Customer Operations | xAGI Labs",
    description:
      "Deploy AI voice agents for support, collections, admissions, booking, and outbound qualification with direct-demo booking.",
    images: ["/xagi-icon.png"],
    creator: "@xAGILabs",
  },
  alternates: {
    canonical: "https://xagi.in",
  },
}

export default function Home() {
  return <HomePage />
}

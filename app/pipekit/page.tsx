import type { Metadata } from "next"
import PipekitPage from "@/components/pipekit-page"

export const metadata: Metadata = {
  title: "Pipekit — Voice Engine for AI Agents",
  description:
    "Build and deploy real-time, multilingual voice agents with Pipekit, the modular and self-hostable voice AI engine from xAGI Labs.",
  keywords: [
    "Pipekit",
    "voice AI engine",
    "multilingual voice agents",
    "self-hosted voice AI",
    "voice agent infrastructure",
    "streaming STT TTS",
    "enterprise voice AI",
    "xAGI Labs",
  ],
  alternates: {
    canonical: "https://xagi.in/pipekit",
  },
  openGraph: {
    title: "Pipekit — The Voice Engine for AI Agents",
    description:
      "A modular, deployable voice-to-voice engine for production-grade multilingual voice agents.",
    url: "https://xagi.in/pipekit",
    siteName: "xAGI Labs",
    type: "website",
    images: [
      {
        url: "/xagi-icon.png",
        width: 1200,
        height: 630,
        alt: "Pipekit by xAGI Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pipekit — The Voice Engine for AI Agents",
    description:
      "Build and deploy real-time, multilingual voice agents on your infrastructure.",
    images: ["/xagi-icon.png"],
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pipekit",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud, private cloud, and customer-managed infrastructure",
  url: "https://xagi.in/pipekit",
  description:
    "A modular, deployable voice-to-voice AI engine for building production-grade multilingual voice agents.",
  author: {
    "@type": "Organization",
    name: "xAGI Labs",
    url: "https://xagi.in",
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PipekitPage />
    </>
  )
}

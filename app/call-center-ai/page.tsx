import type { Metadata } from "next"
import CallCenterAIPage from "@/components/call-center-ai-page"

export const metadata: Metadata = {
  title: "Call Center AI Solutions",
  description:
    "Deploy enterprise call center AI with XAGI Labs. Inbound and outbound voice automation, multilingual support, structured case capture, SMS workflows, human handoff, and full observability.",
  keywords: [
    "call center AI",
    "AI call center solution",
    "voice AI platform",
    "inbound outbound automation",
    "contact center automation",
    "multilingual voice bot",
    "customer support AI",
    "AI telephony",
    "claim automation",
    "XAGI Labs",
  ],
  alternates: {
    canonical: "https://xagi.in/call-center-ai",
  },
  openGraph: {
    title: "Call Center AI Solutions",
    description:
      "Enterprise call center AI offering for support, collections, claims, and customer operations with human fallback and analytics.",
    url: "https://xagi.in/call-center-ai",
    siteName: "xAGI Labs",
    type: "website",
    images: [
      {
        url: "/xagi-icon.png",
        width: 1200,
        height: 630,
        alt: "Call Center AI — enterprise voice automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Center AI Solutions",
    description:
      "AI-powered call center offering with realtime voice automation, structured workflows, and enterprise-grade controls.",
    images: ["/xagi-icon.png"],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Call Center AI",
  "provider": {
    "@type": "Organization",
    "name": "xAGI Labs",
    "url": "https://xagi.in",
  },
  "url": "https://xagi.in/call-center-ai",
  "serviceType": "AI call center automation",
  "areaServed": "Worldwide",
  "description":
    "XAGI Labs provides enterprise call center AI services for inbound and outbound automation, multilingual support, structured ticket capture, SMS workflows, and human handoff.",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <CallCenterAIPage />
    </>
  )
}

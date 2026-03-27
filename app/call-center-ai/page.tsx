import type { Metadata } from "next"
import CallCenterAIPage from "@/components/call-center-ai-page"

export const metadata: Metadata = {
  title: "Call Center AI Solutions | XAGI Labs",
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
    title: "Call Center AI by XAGI Labs",
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
        alt: "Call Center AI by XAGI Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Center AI by XAGI Labs",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does the XAGI Labs Call Center AI offering include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It includes voice automation for inbound and outbound calls, multilingual support, SMS workflows, structured case data capture, human handoff, and monitoring dashboards.",
      },
    },
    {
      "@type": "Question",
      "name": "Can it integrate with existing CRM and support systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The platform is API-first and can integrate with existing CRM, ticketing systems, internal databases, and workflow tools.",
      },
    },
    {
      "@type": "Question",
      "name": "Is this suitable for regulated or sensitive workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We design deployment and guardrails around compliance requirements, including access controls, safety filters, and observability for auditability.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CallCenterAIPage />
    </>
  )
}

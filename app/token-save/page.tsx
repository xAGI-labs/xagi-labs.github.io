import type { Metadata } from "next"
import TokenSavePage from "@/components/token-save-page"

export const metadata: Metadata = {
  title: "Token Save | Slash AI Token Costs by 90-99%",
  description:
    "xAGI Labs helps growth-stage teams reduce AI token costs by 90-99% using custom fine-tuned open-weight models like Qwen and Mistral, without sacrificing quality.",
  keywords: [
    "AI token cost reduction",
    "open-weight model migration",
    "Qwen fine tuning",
    "Mistral fine tuning",
    "LLM cost optimization",
    "AI inference cost",
    "xAGI Labs token safe",
  ],
  alternates: {
    canonical: "https://xagi.in/token-save",
  },
  openGraph: {
    title: "Token Save by xAGI Labs",
    description:
      "Reduce proprietary AI API spend by up to 99% while maintaining output quality through custom open-weight migration.",
    url: "https://xagi.in/token-save",
    siteName: "xAGI Labs",
    type: "website",
    images: [
      {
        url: "/xagi-icon.png",
        width: 1200,
        height: 630,
        alt: "Token Save by xAGI Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Token Save by xAGI Labs",
    description:
      "Slash AI token costs by 90-99% with fine-tuned open-weight infrastructure built for your product.",
    images: ["/xagi-icon.png"],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Token Save",
  provider: {
    "@type": "Organization",
    name: "xAGI Labs",
    url: "https://xagi.in",
  },
  url: "https://xagi.in/token-save",
  serviceType: "AI token cost optimization and model migration",
  areaServed: "Worldwide",
  description:
    "xAGI Labs migrates high-volume AI workloads from proprietary APIs to fine-tuned open-weight models such as Qwen and Mistral to reduce token costs while maintaining quality.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will quality drop after migrating to open-weight models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The migration is benchmarked against your current production quality baseline. Shadow testing is used before full cutover to preserve output quality.",
      },
    },
    {
      "@type": "Question",
      name: "How much can token costs be reduced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical migrations target 90 to 99 percent cost reduction depending on workload profile, quality constraints, and traffic distribution.",
      },
    },
    {
      "@type": "Question",
      name: "Can EU data residency requirements be supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mistral-based pathways and EU-aligned infrastructure options are supported for sovereignty-sensitive workloads.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TokenSavePage />
    </>
  )
}

import type { Metadata } from "next"
import IdealPage from "@/components/ideal-page"

export const metadata: Metadata = {
  title: "iDeal",
  description:
    "iDeal is an AI deal sourcing engine for private equity firms that turns a buy thesis into target mapping, owner context, personalized outreach, and qualified first conversations.",
  keywords: [
    "AI deal sourcing engine",
    "private equity sourcing",
    "PE deal origination",
    "private equity outreach software",
    "proprietary deal flow software",
    "lower middle market sourcing",
    "xAGI Labs",
  ],
  alternates: {
    canonical: "https://xagi.in/ideal",
  },
  openGraph: {
    title: "iDeal | AI Deal Sourcing Engine for Private Equity",
    description:
      "Turn a private equity buy thesis into a live sourcing engine with target discovery, owner context, and partner-reviewed outreach.",
    url: "https://xagi.in/ideal",
    siteName: "xAGI Labs",
    type: "website",
    images: [
      {
        url: "/xagi-icon.png",
        width: 1200,
        height: 630,
        alt: "iDeal by xAGI Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iDeal | AI Deal Sourcing Engine for Private Equity",
    description:
      "A PE-focused sourcing workflow that helps teams move from thesis to targets to qualified conversations.",
    images: ["/xagi-icon.png"],
  },
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "iDeal",
  url: "https://xagi.in/ideal",
  description:
    "AI deal sourcing engine for private equity firms that supports target discovery, owner intelligence, and personalized outreach workflows.",
  isPartOf: {
    "@type": "WebSite",
    name: "xAGI Labs",
    url: "https://xagi.in",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "iDeal",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://xagi.in/ideal",
  description:
    "An AI deal sourcing engine for private equity teams that translates a buy thesis into target discovery, owner research, outreach drafting, and response management.",
  creator: {
    "@type": "Organization",
    name: "xAGI Labs",
    url: "https://xagi.in",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Private equity firms, origination teams, and independent sponsors",
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <IdealPage />
    </>
  )
}

import type { Metadata } from "next"
import FounderSourcingEnginePage from "@/components/founder-sourcing-engine-page"

export const metadata: Metadata = {
  title: "Founder Sourcing Engine",
  description:
    "Help your investment team find under-the-radar founders earlier with a founder sourcing engine built for real-time people and company signals, watchlists, and investment screening.",
  keywords: [
    "founder sourcing engine",
    "VC founder sourcing",
    "venture capital deal sourcing",
    "investment screening software",
    "startup founder discovery",
    "emerging founder signals",
    "xAGI Labs",
  ],
  alternates: {
    canonical: "https://xagi.in/founder-sourcing-engine",
  },
  openGraph: {
    title: "Founder Sourcing Engine | xAGI Labs",
    description:
      "A founder discovery workflow for VC firms that want to spot emerging founders before they show up in every shared spreadsheet.",
    url: "https://xagi.in/founder-sourcing-engine",
    siteName: "xAGI Labs",
    type: "website",
    images: [
      {
        url: "/xagi-icon.png",
        width: 1200,
        height: 630,
        alt: "Founder Sourcing Engine by xAGI Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Sourcing Engine | xAGI Labs",
    description:
      "Source under-the-radar founders with live company and people signals built for investment teams.",
    images: ["/xagi-icon.png"],
  },
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Founder Sourcing Engine",
  url: "https://xagi.in/founder-sourcing-engine",
  description:
    "Founder discovery and screening workflow for VC firms using real-time founder and company signals.",
  isPartOf: {
    "@type": "WebSite",
    name: "xAGI Labs",
    url: "https://xagi.in",
  },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Founder Sourcing Engine",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://xagi.in/founder-sourcing-engine",
  description:
    "A founder sourcing workflow for venture capital firms to discover, track, and screen emerging founders with people and company signals.",
  creator: {
    "@type": "Organization",
    name: "xAGI Labs",
    url: "https://xagi.in",
  },
  audience: {
    "@type": "Audience",
    audienceType: "VC firms and investment teams",
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <FounderSourcingEnginePage />
    </>
  )
}

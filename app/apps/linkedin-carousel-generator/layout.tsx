import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LinkedIn Carousel Generator",
  description:
    "Create export-ready LinkedIn carousels with AI-assisted drafting, theme controls, slide editing, and PDF export.",
  alternates: {
    canonical: "https://xagi.in/apps/linkedin-carousel-generator",
  },
  openGraph: {
    title: "LinkedIn Carousel Generator",
    description:
      "Design and export LinkedIn carousel posts with AI-generated slide drafts and customization controls.",
    url: "https://xagi.in/apps/linkedin-carousel-generator",
    type: "website",
  },
}

export default function LinkedInCarouselGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import StructuredData from "@/components/structured-data"
import TawkTo from "@/components/tawk-to"
import MicrosoftClarity from "@/components/microsoft-clarity"
import "@/components/landing-page/styles.css"
import { Suspense } from "react"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://xagi.in'),
  title: {
    default: "xAGI Labs - AI-First Development Agency",
    template: "%s | xAGI Labs"
  },
  description:
    "Transform your vision into intelligence-first products. We build production-ready AI systems from prototypes to full-scale applications in 4-6 weeks.",
  keywords: [
    "AI development",
    "AI agency",
    "artificial intelligence",
    "machine learning",
    "AI products",
    "LLM applications",
    "AI agents",
    "OpenAI",
    "Claude",
    "GPT-4",
    "AI consulting",
    "AI strategy",
    "custom AI solutions",
    "AI automation",
    "RAG systems",
    "AI integration"
  ],
  authors: [{ name: "xAGI Labs" }],
  creator: "xAGI Labs",
  publisher: "xAGI Labs",
  icons: {
    icon: [{ url: "/xagi-icon.png", type: "image/png" }],
    apple: [{ url: "/xagi-icon.png" }],
    shortcut: ["/xagi-icon.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xagi.in",
    siteName: "xAGI Labs",
    title: "xAGI Labs - AI-First Development Agency",
    description:
      "Transform your vision into intelligence-first products. We build production-ready AI systems from prototypes to full-scale applications in 4-6 weeks.",
    images: [
      {
        url: "/xagi-icon.png",
        width: 1200,
        height: 630,
        alt: "xAGI Labs - AI-First Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "xAGI Labs - AI-First Development Agency",
    description:
      "Transform your vision into intelligence-first products. We build production-ready AI systems from prototypes to full-scale applications in 4-6 weeks.",
    images: ["/xagi-icon.png"],
    creator: "@xAGILabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://xagi.in",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <script
          data-goatcounter="https://xagi-labs.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </head>
      <body className={outfit.className}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
          <TawkTo />
          <MicrosoftClarity />
        </Suspense>
      </body>
    </html>
  )
}

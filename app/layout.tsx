import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import StructuredData from "@/components/structured-data"
import MicrosoftClarity from "@/components/microsoft-clarity"
import GoogleTag from "@/components/google-tag"
import GeoGreeting from "@/components/shared/GeoGreeting"
import WebMcpTools from "@/components/shared/webmcp-tools"
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
    default: "xAGI Labs - Voice Agents for Customer Operations",
    template: "%s | xAGI Labs"
  },
  description:
    "Deploy AI voice agents for support, collections, admissions, booking, and outbound qualification. xAGI Labs builds reliable AI call workflows with human handoff, observability, and operational control.",
  keywords: [
    "voice agents",
    "AI voice agents",
    "AI call center",
    "customer support automation",
    "voice AI services",
    "outbound voice AI",
    "collections automation",
    "admissions automation",
    "customer operations AI",
    "AI call workflows",
    "AI agents",
    "AI automation",
    "multilingual voice AI",
  ],
  authors: [{ name: "xAGI Labs" }],
  creator: "xAGI Labs",
  publisher: "xAGI Labs",
  icons: {
    icon: [{ url: "/xagi-icon.png", type: "image/png" }],
    apple: [{ url: "/xagi-icon.png" }],
    shortcut: ["/xagi-icon.png"],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "LdV3UFHGC7ODHeM_y3khalq5gKgW8tq5WHhHNegVO48",
  },
  category: "technology",
  classification: "Business",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xagi.in",
    siteName: "xAGI Labs",
    title: "xAGI Labs - Voice Agents for Customer Operations",
    description:
      "Deploy AI voice agents for support, collections, admissions, booking, and outbound qualification with human handoff and operational control.",
    images: [
      {
        url: "/xagi-icon.png",
        width: 1200,
        height: 630,
        alt: "xAGI Labs - Voice Agents for Customer Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "xAGI Labs - Voice Agents for Customer Operations",
    description:
      "Deploy AI voice agents for support, collections, admissions, booking, and outbound qualification with human handoff and operational control.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
        <GoogleTag />
        <script
          data-goatcounter="https://xagi-labs.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </head>
      <body className={outfit.className}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <WebMcpTools />
            {children}
            <GeoGreeting />
          </ThemeProvider>
          <Analytics />
          <MicrosoftClarity />
        </Suspense>
      </body>
    </html>
  )
}

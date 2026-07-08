import type { Metadata } from 'next'
import ChainClawLandingPage from '@/components/chainclaw-page'

export const metadata: Metadata = {
  title: 'AutoClaw — AI Workforce Operating System',
  description:
    'AutoClaw helps GTM teams run autonomous prospect research and personalized outreach across email and LinkedIn.',
  keywords: [
    'AutoClaw',
    'OpenClaw for GTM',
    'AI SDR alternative',
    'autonomous sales agents',
    'email and LinkedIn outreach automation',
    'AI lead research',
  ],
  alternates: {
    canonical: 'https://xagi.in/autoclaw',
  },
  openGraph: {
    title: 'AutoClaw — AI Workforce Operating System',
    description:
      'AutoClaw helps GTM teams run autonomous prospect research and personalized outreach across email and LinkedIn.',
    url: 'https://xagi.in/autoclaw',
    siteName: 'xAGI Labs',
    type: 'website',
    images: [
      {
        url: '/images/chainclaw/autoclaw.png',
        width: 1200,
        height: 630,
        alt: 'AutoClaw for GTM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoClaw — AI Workforce Operating System',
    description:
      'AutoClaw helps GTM teams run autonomous prospect research and personalized outreach across email and LinkedIn.',
    images: ['/images/chainclaw/autoclaw.png'],
  },
}

export default function Page() {
  return (
    <ChainClawLandingPage
      productName="AutoClaw"
      heroImageSrc="/images/chainclaw/autoclaw.png"
      startFreeHref="https://calendar.app.google/yYAbUMWrhogUCZBm8"
      openStartFreeInNewTab
    />
  )
}

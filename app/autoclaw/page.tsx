import type { Metadata } from 'next'
import ChainClawLandingPage from '@/components/chainclaw-page'

export const metadata: Metadata = {
  title: 'AutoClaw Implementation Consulting',
  description:
    'xAGI helps GTM and operations teams implement the AutoClaw product (xAGI Labs trade name) for prospect research, outreach automation, workflow orchestration, and production-grade agent operations.',
  keywords: [
    'AutoClaw',
    'AutoClaw consulting',
    'GTM automation consulting',
    'AI SDR implementation',
    'agent workflow deployment',
    'email and LinkedIn outreach automation',
    'AI lead research',
  ],
  alternates: {
    canonical: 'https://xagi.in/autoclaw',
  },
  openGraph: {
    title: 'AutoClaw Implementation Consulting',
    description:
      'xAGI helps GTM and operations teams implement the AutoClaw product (xAGI Labs trade name) for prospect research, outreach automation, workflow orchestration, and production-grade agent operations.',
    url: 'https://xagi.in/autoclaw',
    siteName: 'xAGI Labs',
    type: 'website',
    images: [
      {
        url: '/images/chainclaw/autoclaw.png',
        width: 1200,
        height: 630,
        alt: 'xAGI AutoClaw — GTM workflow product',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoClaw Implementation Consulting',
    description:
      'xAGI helps GTM and operations teams implement the AutoClaw product (xAGI Labs trade name) for prospect research, outreach automation, workflow orchestration, and production-grade agent operations.',
    images: ['/images/chainclaw/autoclaw.png'],
  },
}

export default function Page() {
  return (
    <ChainClawLandingPage
      productName="AutoClaw"
      heroImageSrc="/images/chainclaw/autoclaw.png"
      startFreeHref="https://calendar.app.google/94mtSE2aw7RnSWhj8"
      openStartFreeInNewTab
    />
  )
}

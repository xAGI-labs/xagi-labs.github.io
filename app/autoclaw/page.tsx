import type { Metadata } from 'next'
import ChainClawLandingPage from '@/components/chainclaw-page'

export const metadata: Metadata = {
  title: 'AutoClaw — AI Workforce Operating System',
  description:
    'AutoClaw turns AI into a self-organizing squad that plans, executes, and ships work continuously.',
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

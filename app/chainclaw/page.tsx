import type { Metadata } from 'next'
import ChainClawLandingPage from '@/components/chainclaw-page'

export const metadata: Metadata = {
  title: 'Chain Claw — AI Workforce Operating System',
  description:
    'Chain Claw turns AI into a self-organizing squad that plans, executes, and ships work continuously.',
}

export default function Page() {
  return <ChainClawLandingPage heroImageSrc="/images/chainclaw/chainclaw.png" />
}

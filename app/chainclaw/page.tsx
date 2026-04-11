import type { Metadata } from 'next'
import ChainClawLandingPage from '@/components/chainclaw-page'

export const metadata: Metadata = {
  title: 'Chain Claw Capability Spotlight',
  description:
    'xAGI uses Chain Claw as part of consulting-led workflow automation, agent deployment, and operational system design.',
  alternates: {
    canonical: 'https://xagi.in/chainclaw',
  },
}

export default function Page() {
  return <ChainClawLandingPage heroImageSrc="/images/chainclaw/chainclaw.png" />
}

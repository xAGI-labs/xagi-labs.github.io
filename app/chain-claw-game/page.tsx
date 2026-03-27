import type { Metadata } from 'next'
import ChainClawPage from '@/components/chain-claw-page'

export const metadata: Metadata = {
  title: 'Chain Claw Game',
  description: 'Play Chain Claw, a classic snake-style game where your claw chain grows as you eat food.',
}

export default function Page() {
  return <ChainClawPage />
}


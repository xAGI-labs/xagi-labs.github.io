import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Chain Claw Redirect',
  description: 'Legacy Chain Claw route redirecting to the playable game.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://xagi.in/chain-claw-game',
  },
}

export default function Page() {
  redirect('/chain-claw-game')
}

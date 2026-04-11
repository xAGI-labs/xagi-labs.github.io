import type { Metadata } from 'next'
import HirePage from '@/components/hire-page'

export const metadata: Metadata = {
  title: 'Embedded AI and Platform Engineering Teams',
  description:
    'Bring in xAGI for embedded AI engineering, platform engineering, delivery pods, and scoped implementation sprints.',
  alternates: {
    canonical: 'https://xagi.in/hire-with-xAGI',
  },
}

export default function Hire() {
  return <HirePage />
}

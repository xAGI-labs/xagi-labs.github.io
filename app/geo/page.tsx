import type { Metadata } from 'next'
import GeoPage from '@/components/geo-page'

export const metadata: Metadata = {
  title: 'AI Visibility and GEO Consulting',
  description:
    'xAGI helps companies improve visibility in ChatGPT, Claude, Gemini, Perplexity, and Google AI experiences through GEO and AI-ready content strategy.',
  alternates: {
    canonical: 'https://xagi.in/geo',
  },
}

export default function GEO() {
  return <GeoPage />
}

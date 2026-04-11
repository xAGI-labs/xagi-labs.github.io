import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'

const faqs = [
  {
    question: 'What is AutoClaw?',
    answer:
      'AutoClaw is xAGI Labs’ autonomous GTM system. It helps teams find fit accounts, perform account-level research, and run contextual outreach across email and LinkedIn.',
  },
  {
    question: 'How is AutoClaw different from a typical AI SDR?',
    answer:
      'Most AI SDR tools automate sequence sending. AutoClaw focuses on reasoning before outreach: it combines ICP filtering, intent signals, and account context to create higher-quality, one-to-one messaging.',
  },
  {
    question: 'Which channels does AutoClaw support?',
    answer:
      'AutoClaw supports coordinated GTM execution on email and LinkedIn, with messaging designed to stay consistent across both channels.',
  },
  {
    question: 'Who is AutoClaw best for?',
    answer:
      'AutoClaw is best for founders and lean GTM teams that need high-quality outbound execution without hiring a large SDR function.',
  },
  {
    question: 'What kind of signals does AutoClaw use?',
    answer:
      'AutoClaw uses company fit signals, role fit, hiring activity, and operational context to prioritize outreach and improve relevance.',
  },
  {
    question: 'How quickly can a team launch AutoClaw?',
    answer:
      'Teams can usually start with a focused pilot quickly by aligning on ICP, outreach goals, and channel workflows.',
  },
  {
    question: 'Where can I learn more about OpenClaw for GTM?',
    answer:
      'Start with the OpenClaw for GTM article and the OpenClaw guide on xAGI Labs, then book a call for a tailored deployment plan.',
  },
]

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AutoClaw',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://xagi.in/autoclaw',
  description:
    'AutoClaw helps GTM teams run autonomous prospect research and personalized outreach across email and LinkedIn.',
  brand: {
    '@type': 'Organization',
    name: 'xAGI Labs',
    url: 'https://xagi.in',
  },
}

export const metadata: Metadata = {
  title: 'AutoClaw FAQ',
  description:
    'Frequently asked questions about AutoClaw, an autonomous GTM engine for research-driven outreach on email and LinkedIn.',
  keywords: [
    'AutoClaw FAQ',
    'OpenClaw for GTM',
    'AI SDR alternative',
    'autonomous GTM agents',
    'LinkedIn outreach automation',
  ],
  alternates: {
    canonical: 'https://xagi.in/autoclaw/faq',
  },
}

export default function AutoClawFaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <Header />

      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AutoClaw FAQ</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              Practical answers about how AutoClaw works for autonomous GTM execution.
            </p>

            <div className="space-y-6">
              {faqs.map((item) => (
                <section
                  key={item.question}
                  className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-lg p-6"
                >
                  <h2 className="text-xl font-semibold mb-3">{item.question}</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                </section>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f]">
              <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
              <div className="flex flex-col gap-3">
                <Link href="/autoclaw" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Explore AutoClaw product page
                </Link>
                <Link href="/blog/openclaw-for-gtm" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read: OpenClaw for GTM
                </Link>
                <Link href="/blog/openclaw-guide-2026" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read: OpenClaw Guide (2026)
                </Link>
                <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

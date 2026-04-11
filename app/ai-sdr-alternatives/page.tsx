import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'

const faqs = [
  {
    question: 'What is the best AI SDR alternative for early-stage startups?',
    answer:
      'The best option depends on team size and workflow depth. If you need outbound sequence automation only, many tools work. If you need account research plus signal-aware personalization, xAGI AutoClaw (our product) is built for that workflow.',
  },
  {
    question: 'How is xAGI AutoClaw different from generic AI SDR tools?',
    answer:
      'xAGI AutoClaw emphasizes reasoning before sending. It combines fit filtering, context research, and intent-aware messaging across email and LinkedIn instead of sequence-only automation.',
  },
  {
    question: 'Can xAGI AutoClaw handle both email and LinkedIn outreach?',
    answer:
      'Yes. xAGI AutoClaw supports coordinated multichannel execution so messaging stays consistent across email and LinkedIn.',
  },
  {
    question: 'Who should use xAGI AutoClaw?',
    answer:
      'Founders and lean GTM teams that want quality pipeline generation without hiring a large SDR operation are the best fit.',
  },
]

export const metadata: Metadata = {
  title: 'AI SDR Alternatives: 11x vs Artisan vs xAGI AutoClaw',
  description:
    'Compare AI SDR alternatives for startups. Understand when xAGI Labs\' AutoClaw product fits for research-driven outbound automation across email and LinkedIn.',
  keywords: [
    'AI SDR alternatives',
    '11x vs artisan',
    'AI outbound automation tools',
    'autonomous sales agent software',
    'AutoClaw',
  ],
  alternates: {
    canonical: 'https://xagi.in/ai-sdr-alternatives',
  },
}

export default function AiSdrAlternativesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI SDR Alternatives: 11x vs Artisan vs xAGI AutoClaw</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              A practical comparison for founders and GTM teams evaluating autonomous outbound tools. AutoClaw is xAGI Labs&apos; own autonomous GTM product, listed here alongside other vendors.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">How To Evaluate AI SDR Tools</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Does the tool do account research before outreach?</li>
                <li>Can it personalize with real context, not just templates?</li>
                <li>Can it coordinate email and LinkedIn messaging?</li>
                <li>Does it support your startup stage and team size?</li>
                <li>Do you get visibility into workflow logic and output quality?</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Quick Comparison</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 dark:bg-[#111111]">
                    <tr>
                      <th className="text-left p-4">Criteria</th>
                      <th className="text-left p-4">xAGI AutoClaw</th>
                      <th className="text-left p-4">Typical AI SDR Tool</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200 dark:border-gray-800">
                      <td className="p-4">Research depth</td>
                      <td className="p-4">Account-level context + signals</td>
                      <td className="p-4">Basic enrichment or sequence variables</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-800">
                      <td className="p-4">Execution model</td>
                      <td className="p-4">Mission-driven, multi-step workflow</td>
                      <td className="p-4">Sequence-first automation</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-800">
                      <td className="p-4">Channel coordination</td>
                      <td className="p-4">Email + LinkedIn alignment</td>
                      <td className="p-4">Often channel-siloed</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-800">
                      <td className="p-4">Best fit</td>
                      <td className="p-4">Founders and lean GTM teams</td>
                      <td className="p-4">Teams optimizing high-volume sequence ops</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">When xAGI AutoClaw Is a Better Fit</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>You need quality conversations, not just higher send volume.</li>
                <li>You need intent-signal awareness in outreach strategy.</li>
                <li>You want one workflow across email and LinkedIn.</li>
                <li>You want an AI GTM system that can evolve with your playbook.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
              <div className="space-y-5">
                {faqs.map((item) => (
                  <div key={item.question} className="rounded-lg border border-gray-200 dark:border-gray-800 p-5">
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-2xl font-semibold mb-4">Next Step</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you want a research-driven outbound engine rather than sequence-only automation, start with the xAGI AutoClaw product page.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/autoclaw" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Explore xAGI AutoClaw
                </Link>
                <Link href="/autoclaw/faq" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read the AutoClaw FAQ
                </Link>
                <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Book a strategy call
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

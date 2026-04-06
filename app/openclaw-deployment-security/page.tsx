import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How should teams deploy OpenClaw safely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use isolated environments, scoped credentials, strict tool permissions, and approval gates for high-impact actions. Start in staging, then roll out production workflows gradually.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most important OpenClaw security controls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Least-privilege credentials, secret rotation, prompt-injection defenses, tool-level allowlists, audit logging, and human approval for irreversible steps are critical.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get implementation help for OpenClaw?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'xAGI Labs provides implementation support for OpenClaw and related AI workflow systems, including architecture, hardening, and production rollout.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'OpenClaw Deployment and Security Best Practices',
  description:
    'Practical OpenClaw deployment and security guidance covering environment isolation, access control, workflow guardrails, and production rollout.',
  keywords: [
    'OpenClaw deployment guide',
    'OpenClaw security best practices',
    'agent security controls',
    'AI workflow hardening',
  ],
  alternates: {
    canonical: 'https://xagi.in/openclaw-deployment-security',
  },
}

export default function OpenClawDeploymentSecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">OpenClaw Deployment and Security Best Practices</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              A practical checklist for teams deploying OpenClaw in production environments.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1) Deployment Baseline</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Separate dev, staging, and production environments.</li>
                <li>Use dedicated credentials for each environment.</li>
                <li>Store secrets in a secure manager and rotate regularly.</li>
                <li>Keep all high-risk integrations disabled by default.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2) Security Controls</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Apply tool allowlists and role-scoped permissions.</li>
                <li>Gate irreversible actions with human approvals.</li>
                <li>Protect against prompt injection from untrusted inputs.</li>
                <li>Log all tool invocations with actor and timestamp context.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3) Rollout Strategy</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Start with low-risk internal workflows.</li>
                <li>Measure success rate, error rate, and incident count weekly.</li>
                <li>Expand scope only after stable performance in staging and pilot production.</li>
                <li>Maintain rollback and incident response playbooks.</li>
              </ul>
            </section>

            <section className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-2xl font-semibold mb-4">Continue Reading</h2>
              <div className="flex flex-col gap-2">
                <Link href="/blog/openclaw-guide-2026" className="text-blue-600 dark:text-blue-400 hover:underline">
                  OpenClaw Guide (2026)
                </Link>
                <Link href="/autoclaw" className="text-blue-600 dark:text-blue-400 hover:underline">
                  AutoClaw product page
                </Link>
                <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Talk to xAGI Labs
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

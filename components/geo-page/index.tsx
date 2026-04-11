import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, MessageSquare, PenTool, Search, Sparkles } from 'lucide-react'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

const trackedPlatforms = ['ChatGPT', 'Claude', 'Google AI Overviews', 'Gemini', 'Perplexity']

const promptExamples = [
  'Best AI voice agent platform for healthcare',
  'Who should we hire for OpenClaw deployment?',
  'Best consulting partner for platform engineering',
  'Which AI engineering firms are strongest at model deployment?',
]

const servicePillars = [
  {
    icon: Search,
    title: 'AI Visibility Audits',
    description:
      'Measure where your company is visible, absent, or misrepresented across prompts that influence shortlists and buying decisions.',
  },
  {
    icon: PenTool,
    title: 'Citation-Ready Content Systems',
    description:
      'Restructure service pages, case studies, technical content, and entity signals so LLMs can understand and cite your expertise.',
  },
  {
    icon: BarChart3,
    title: 'Attribution and Reporting',
    description:
      'Tie AI visibility work to qualified traffic, sales conversations, and revenue signals instead of treating GEO like vanity ranking work.',
  },
]

const engagementPoints = [
  'Best fit for consulting firms, SaaS teams, and technical companies with expertise that should show up in AI answers.',
  'Useful when traditional SEO exists, but ChatGPT, Claude, and Perplexity still do not mention your brand in high-intent prompts.',
  'Usually delivered alongside content strategy, technical SEO, schema cleanup, and service-page repositioning.',
]

const faqs = [
  {
    q: 'What is GEO?',
    a: 'GEO is generative engine optimization: improving how your brand appears in AI-generated recommendations, summaries, and citations.',
  },
  {
    q: 'How is this different from SEO?',
    a: 'SEO focuses on search engine result pages. GEO focuses on answer engines and AI assistants that summarize, shortlist, and recommend vendors directly.',
  },
  {
    q: 'Is this only for consumer brands?',
    a: 'No. It is often more valuable for technical service businesses and B2B firms, because AI assistants increasingly shape early vendor discovery.',
  },
  {
    q: 'What does xAGI actually deliver?',
    a: 'We typically deliver prompt audits, entity cleanup, metadata and schema fixes, content rewrites, link and citation recommendations, and reporting tied to business outcomes.',
  },
]

export default function GeoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <section className="bg-gradient-to-b from-cyan-50 to-white py-20 dark:from-[#0f1724] dark:to-[#0a0a0a] md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
              <Sparkles className="h-4 w-4" />
              AI Visibility Consulting
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Make your firm easier for AI answer engines to discover, understand, and recommend.
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              xAGI helps consulting firms, technical teams, and product companies improve visibility across ChatGPT,
              Claude, Gemini, Perplexity, and Google AI experiences through GEO, technical cleanup, and content repositioning.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-black px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
              >
                Book an AI Visibility Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border border-gray-300 px-8 py-4 font-semibold transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 py-14 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <p className="mb-6 text-center text-sm uppercase tracking-wider text-gray-500">Platforms We Track</p>
          <div className="flex flex-wrap justify-center gap-3">
            {trackedPlatforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium dark:border-gray-700 dark:bg-[#111111]"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-[#111111]">
              <div className="mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-cyan-600" />
                <h2 className="text-2xl font-bold">Prompts that shape shortlists</h2>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                We audit the questions prospects actually ask when they are trying to choose a consulting partner, a tool stack, or an implementation team.
              </p>
              <div className="space-y-3">
                {promptExamples.map((prompt) => (
                  <div
                    key={prompt}
                    className="rounded-lg border border-gray-200 bg-white p-3 text-sm dark:border-gray-700 dark:bg-[#0a0a0a]"
                  >
                    {prompt}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-[#111111]">
              <div className="mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-cyan-600" />
                <h2 className="text-2xl font-bold">Business outcomes, not vanity metrics</h2>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                GEO only matters if it changes how often you are surfaced, cited, shortlisted, and contacted. We tie the work back to demand generation and pipeline quality.
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  Prompt-cluster tracking for category and service queries
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  Page and entity fixes to improve AI understanding
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                  Reporting tied to traffic, leads, and sales conversations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-[#111111]">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">What xAGI handles end to end</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {servicePillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-[#0a0a0a]">
                <pillar.icon className="mb-4 h-9 w-9 text-cyan-600" />
                <h3 className="mb-3 text-2xl font-bold">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Where this fits in our consulting work</h2>
          <div className="space-y-4">
            {engagementPoints.map((point) => (
              <div key={point} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#0a0a0a]">
                <p className="text-gray-700 dark:text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#0a0a0a]">
                <summary className="cursor-pointer list-none font-semibold">{faq.q}</summary>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">Want your expertise to show up in AI answers?</h2>
            <p className="mb-8 text-xl opacity-90">
              We can audit the current gaps, fix the technical foundation, and rewrite the pages that should be earning citations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 font-semibold text-black transition-opacity hover:opacity-90"
            >
              Book a Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

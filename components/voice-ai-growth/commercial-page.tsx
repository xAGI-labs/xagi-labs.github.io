import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import CommercialDemoCta from "@/components/shared/commercial-demo-cta"
import { ArrowRight, CheckCircle2, PlugZap } from "lucide-react"

export type CommercialVoicePageContent = {
  eyebrow: string
  title: string
  description: string
  painPoints: string[]
  workflows: Array<{
    title: string
    description: string
  }>
  implementation: Array<{
    title: string
    description: string
  }>
  integrations: string[]
  faqs: Array<{
    question: string
    answer: string
  }>
  ctaTitle: string
  ctaDescription: string
}

export default function CommercialVoicePage({ content, slug }: { content: CommercialVoicePageContent; slug: string }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <main>
        <section className="bg-gray-50 py-20 dark:bg-[#111111] md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                {content.eyebrow}
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                {content.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CommercialDemoCta
                  placement={`voice_ai_${slug}_hero`}
                  title={content.ctaTitle}
                  description={content.ctaDescription}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Pain points
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                The calls your team should not have to repeat manually.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.painPoints.map((item) => (
                <div key={item} className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-green-600" />
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 dark:bg-[#111111] md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  Workflow examples
                </p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                  Start with bounded call flows that produce measurable outcomes.
                </h2>
              </div>
              <Link href="/voice-ai/playbook" className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400">
                View implementation playbook
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {content.workflows.map((workflow) => (
                <article key={workflow.title} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#0a0a0a]">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{workflow.title}</h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">{workflow.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  Rollout model
                </p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                  A practical path from one workflow to production.
                </h2>
              </div>
              <div className="space-y-4 lg:col-span-2">
                {content.implementation.map((step, index) => (
                  <div key={step.title} className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Step {index + 1}</p>
                    <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 dark:bg-[#111111] md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-[#0a0a0a]">
              <div className="mb-6 flex items-center gap-3">
                <PlugZap className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Integrations</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {content.integrations.map((item) => (
                  <span key={item} className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              {content.faqs.map((item) => (
                <div key={item.question} className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.question}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CommercialDemoCta
                placement={`voice_ai_${slug}_bottom`}
                title={content.ctaTitle}
                description={content.ctaDescription}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

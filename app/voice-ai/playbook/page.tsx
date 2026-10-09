import type { Metadata } from "next"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import NewsletterSignup from "@/components/shared/newsletter-signup"
import BookingCta from "@/components/home-page/booking-cta"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ClipboardList, Layers, PhoneCall, ShieldCheck } from "lucide-react"

const workflowTemplates = [
  "Support triage: identify issue, collect account data, answer from SOPs, escalate when needed.",
  "Collections reminder: verify customer, explain account status, capture promise-to-pay, log outcome.",
  "Outbound qualification: call new lead, confirm fit, capture qualification fields, route high intent.",
  "Booking confirmation: confirm appointment, handle reschedule intent, update CRM or calendar.",
]

const rolloutStages = [
  {
    title: "Pick one bounded call type",
    description: "Choose a workflow with repeat volume, clear outcomes, known escalation rules, and low ambiguity.",
  },
  {
    title: "Define the conversation contract",
    description: "Write intents, allowed answers, required fields, handoff triggers, blocked topics, and failure states.",
  },
  {
    title: "Connect operational systems",
    description: "Integrate telephony, CRM, help desk, knowledge base, calendar, payments, or messaging tools as needed.",
  },
  {
    title: "Pilot with QA review",
    description: "Review transcripts, latency, containment, transfers, completion rates, and customer sentiment before scaling.",
  },
]

const evaluationChecklist = [
  "What percentage of calls are repetitive and bounded?",
  "What exact fields must be captured during the call?",
  "Which topics require a human handoff?",
  "What source of truth grounds the agent's answers?",
  "Which systems must be updated after the call?",
  "What metrics prove the workflow is ready to scale?",
]

export const metadata: Metadata = {
  title: "AI Voice Agent Implementation Playbook",
  description:
    "A practical playbook for planning, piloting, and scaling AI voice agents across support, collections, booking, and outbound qualification workflows.",
  alternates: { canonical: "https://xagi-labs.github.io/voice-ai/playbook" },
  openGraph: {
    title: "AI Voice Agent Implementation Playbook | xAGI Labs",
    description: "Workflow templates, rollout stages, and an evaluation checklist for reliable voice AI deployments.",
    url: "https://xagi-labs.github.io/voice-ai/playbook",
    type: "website",
    images: ["/xagi-icon.png"],
  },
}

export default function VoiceAiPlaybookPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <main>
        <section className="bg-gray-50 py-20 dark:bg-[#111111] md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Flagship resource
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
                AI Voice Agent Implementation Playbook
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                A practical guide for choosing the right first workflow, designing guardrails, integrating systems,
                and scaling AI voice agents without losing operational control.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BookingCta
                  placement="voice_ai_playbook_hero"
                  eventName="playbook_cta_click"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Book a workflow review
                  <ArrowRight className="h-4 w-4" />
                </BookingCta>
                <Link
                  href="/voice-ai/customer-support"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition-colors hover:border-gray-400 dark:border-gray-700 dark:text-white dark:hover:border-gray-600"
                >
                  See support use case
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
            {[
              { icon: PhoneCall, title: "Workflow-first", text: "Start with the operational call flow, not the model demo." },
              { icon: ShieldCheck, title: "Guardrails early", text: "Define handoff, blocked topics, and required disclosures before launch." },
              { icon: Layers, title: "Systems connected", text: "Every call should update the tools your team already uses." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
                <item.icon className="mb-4 h-7 w-7 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-16 dark:bg-[#111111] md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 flex items-center gap-3">
              <ClipboardList className="h-7 w-7 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Workflow Templates</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {workflowTemplates.map((item) => (
                <div key={item} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#0a0a0a]">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-green-600" />
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Rollout stages
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                Ship a reliable pilot before expanding call volume.
              </h2>
            </div>
            <div className="space-y-4">
              {rolloutStages.map((stage, index) => (
                <div key={stage.title} className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Stage {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 dark:bg-[#111111] md:py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Evaluation Checklist</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {evaluationChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-[#0a0a0a]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <NewsletterSignup placement="voice_ai_playbook" />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <BookingCta
              placement="voice_ai_playbook_bottom"
              eventName="playbook_cta_click"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
            >
              Review my first voice-agent workflow
              <ArrowRight className="h-5 w-5" />
            </BookingCta>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

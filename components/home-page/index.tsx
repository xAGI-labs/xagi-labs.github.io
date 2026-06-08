"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bot, Brain, CheckCircle2, Database, Globe, Shield, Sparkles, Waypoints, Workflow } from "lucide-react"
import BookingCta from "@/components/home-page/booking-cta"
import MobileBookingBar from "@/components/home-page/mobile-booking-bar"
import PaidTrafficTracking from "@/components/home-page/paid-traffic-tracking"
import { trackMarketingEvent } from "@/lib/marketing-attribution"

const proofPoints = [
  {
    title: "Workflow automation",
    description: "Turn repetitive research, data entry, routing, reporting, and follow-up into reliable AI-assisted workflows.",
  },
  {
    title: "Internal copilots",
    description: "Give teams agents that search company knowledge, draft decisions, update systems, and keep context attached.",
  },
  {
    title: "GTM automation",
    description: "Automate lead research, account scoring, outreach preparation, CRM hygiene, and handoffs between growth tools.",
  },
  {
    title: "AI product features",
    description: "Embed assistants, extraction, generation, recommendations, and decision support inside the products you already ship.",
  },
]

const launchSteps = [
  {
    step: "01",
    title: "Map the workflow",
    description: "Find the repeated work, decision points, review rules, success metrics, and fields that need to move between systems.",
  },
  {
    step: "02",
    title: "Connect knowledge and systems",
    description: "Integrate docs, databases, CRM, help desk, spreadsheets, APIs, and the tools your team already works inside.",
  },
  {
    step: "03",
    title: "Launch with monitoring",
    description: "Start with a narrow production path, review outputs and edge cases, then expand once the automation proves useful.",
  },
]

const reliabilityPillars = [
  {
    icon: Bot,
    title: "Agent architecture",
    description: "Purpose-built agents with scoped tools, memory, evals, and review paths instead of one giant chatbot prompt.",
  },
  {
    icon: Database,
    title: "Knowledge and data layer",
    description: "Ground outputs in your SOPs, docs, tables, product data, and business rules with traceable source context.",
  },
  {
    icon: Workflow,
    title: "Workflow orchestration",
    description: "Trigger actions across CRM, support, email, spreadsheets, internal tools, and custom APIs with clear state handling.",
  },
  {
    icon: Shield,
    title: "Guardrails and review",
    description: "Use confidence checks, approval gates, audit logs, and escalation rules for work that needs human judgment.",
  },
]

const useCases = [
  {
    title: "Lead research and outbound ops",
    description: "Research accounts, qualify fit, draft contextual outreach, update CRM fields, and keep sales follow-up moving.",
  },
  {
    title: "Support and back-office triage",
    description: "Classify requests, summarize history, draft replies, route exceptions, and keep internal teams aligned.",
  },
  {
    title: "Document and data extraction",
    description: "Extract structured fields from PDFs, emails, forms, spreadsheets, and messy operational records.",
  },
  {
    title: "Reporting and decision support",
    description: "Turn scattered data into weekly summaries, risk flags, next actions, and dashboards your team can trust.",
  },
  {
    title: "Product copilots and AI features",
    description: "Add assistants, retrieval, generation, recommendations, and workflow actions directly inside your product.",
  },
]

const enterpriseSignals = [
  "Cloud-native deployment with a path for stricter environment and data handling requirements",
  "API-first automations for internal workflows, customer-facing features, and scheduled operations",
  "Integrations across CRM, help desk, data stores, messaging, docs, spreadsheets, and automation tools",
  "Structured logs, human review points, evals, and workflow-level observability for production use",
]

const integrations = ["HubSpot", "Salesforce", "Freshworks", "Zoho", "Slack", "Google Workspace", "Airtable", "Notion", "Postgres", "Zapier", "Make", "n8n"]

const bookingSteps = [
  "Pick a time that works for you",
  "Bring one workflow your team still handles manually",
  "Get a practical automation plan from our team",
]

const bestFit = [
  "Founders, operators, and growth teams with repeated work across multiple tools",
  "Teams that need agents, copilots, extraction, routing, or GTM automation in production",
  "Product teams adding AI features to real customer workflows rather than demos",
]

const notFor = [
  "Teams looking for a generic chatbot skin with no workflow behind it",
  "Use cases without a clear owner, input, decision path, or success metric",
  "Projects that only need research slides rather than a working production rollout",
]

function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur dark:border-white/10 dark:bg-[#0d0f10]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/xagi-icon.png" alt="xAGI Labs" width={28} height={28} />
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-tight text-stone-950 dark:text-stone-100">xAGI Labs</span>
            <span className="text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Automation</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex dark:text-stone-300">
          <a href="#proof" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Why it works
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            How it works
          </a>
          <a href="#fit" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Fit
          </a>
          <a href="#trust" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Trust
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/services"
            className="hidden text-sm text-stone-600 transition-colors hover:text-stone-950 md:inline-flex dark:text-stone-300 dark:hover:text-white"
          >
            Services
          </Link>
          <BookingCta
            placement="header"
            className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white"
          >
            Book a demo
          </BookingCta>
        </div>
      </div>
    </header>
  )
}

function LandingFooter() {
  return (
    <footer className="border-t border-stone-200/80 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-stone-950 dark:text-stone-100">xAGI Labs</p>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
            AI automation systems for operations, growth, support, and product teams.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-stone-600 dark:text-stone-400">
          <Link href="/services" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Services
          </Link>
          <Link href="/autoclaw" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            AutoClaw
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-stone-950 dark:hover:text-white"
            onClick={() => {
              trackMarketingEvent("contact_fallback_click", {
                placement: "footer",
              })
            }}
          >
            Contact
          </Link>
          <Link href="/blog" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  )
}

function HomePageStructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI automation implementation and AI product engineering",
    name: "xAGI Labs AI Automation",
    description:
      "Production AI automation systems, agents, copilots, workflow integrations, and AI product features for operations and growth teams.",
    provider: {
      "@type": "Organization",
      name: "xAGI Labs",
      url: "https://xagi.in",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    url: "https://xagi.in",
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Automation Systems for Operations and Growth",
    description:
      "Build production AI automations, agents, copilots, and workflow integrations for operations, growth, support, and product teams.",
    url: "https://xagi.in",
    about: {
      "@type": "Thing",
      name: "AI automation",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-950 dark:bg-[#0d0f10] dark:text-stone-100 md:pb-0">
      <HomePageStructuredData />
      <PaidTrafficTracking />
      <LandingHeader />

      <main>
        <section className="border-b border-stone-200/70 dark:border-white/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-stone-600 dark:border-white/10 dark:bg-white/5 dark:text-stone-300">
                <Brain className="h-3.5 w-3.5" />
                AI automations for real workflows
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.96] tracking-tight text-stone-950 sm:text-5xl md:text-6xl dark:text-stone-50">
                AI automation systems for the work your team still does by hand.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 dark:text-stone-300">
                xAGI Labs helps growth, operations, support, and product teams turn repeated manual work into
                production AI agents, copilots, and integrations that fit the systems they already use.
              </p>

              <div className="mt-5 rounded-2xl border border-stone-200 bg-white/80 p-4 text-sm text-stone-600 dark:border-white/10 dark:bg-white/5 dark:text-stone-300">
                <p className="font-medium text-stone-950 dark:text-stone-100">
                  Best for teams with a real workflow to automate: research, routing, extraction, follow-up, reporting, or product AI.
                </p>
              </div>

              <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <BookingCta
                  placement="hero"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-4 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 sm:w-auto dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white"
                >
                  Book a demo
                  <ArrowRight className="h-4 w-4" />
                </BookingCta>
                <Link
                  href="/services"
                  className="hidden items-center gap-2 text-sm font-medium text-stone-700 transition-colors hover:text-stone-950 sm:inline-flex dark:text-stone-300 dark:hover:text-white"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                  What happens after you book
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {bookingSteps.map((step) => (
                    <div key={step} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-600 dark:border-white/10 dark:bg-[#101213] dark:text-stone-300">
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3 text-sm text-stone-600 sm:grid-cols-3 dark:text-stone-400">
                <div className="rounded-2xl border border-stone-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="font-medium text-stone-950 dark:text-stone-100">Workflow design</p>
                  <p className="mt-1">Start from the job, edge cases, owners, and handoffs before choosing the model.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="font-medium text-stone-950 dark:text-stone-100">System integration</p>
                  <p className="mt-1">Connect data, docs, APIs, CRM, help desk, and internal tools without creating a shadow stack.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="font-medium text-stone-950 dark:text-stone-100">Production monitoring</p>
                  <p className="mt-1">Review outputs, trace decisions, and expand scope only after the workflow holds up.</p>
                </div>
              </div>
            </div>

            <div className="lg:pt-6">
              <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-[#141718]">
                <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5 dark:border-white/10 dark:bg-[#101213]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                        Automation console
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-stone-950 dark:text-stone-100">
                        Workflow in production
                      </h2>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                      Live
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Review mode</p>
                      <p className="mt-2 text-3xl font-semibold text-stone-950 dark:text-stone-100">Human</p>
                      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">Approval gates stay in place where judgment matters.</p>
                    </div>
                    <div className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Workflow type</p>
                      <p className="mt-2 text-3xl font-semibold text-stone-950 dark:text-stone-100">GTM ops</p>
                      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">Account research, enrichment, CRM updates, and drafted follow-up.</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-stone-950 dark:text-stone-100">Active workflow</p>
                      <span className="text-xs text-stone-500 dark:text-stone-400">Lead research to CRM</span>
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-stone-600 dark:text-stone-300">
                      <div className="flex items-start gap-3">
                        <Sparkles className="mt-0.5 h-4 w-4 text-amber-600 dark:text-amber-300" />
                        <p>Finds company context, fit signals, recent activity, and the reason the account is worth pursuing.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Waypoints className="mt-0.5 h-4 w-4 text-stone-700 dark:text-stone-200" />
                        <p>Updates CRM fields, queues a suggested next step, and routes unclear accounts for human review.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                        <p>Logs sources, output quality, and approval state so the team can inspect what happened later.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="border-b border-stone-200/70 py-16 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {proofPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-stone-200 bg-white p-5 transition-transform duration-200 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-base font-medium text-stone-950 dark:text-stone-100">{point.title}</p>
                  <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-stone-400">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-b border-stone-200/70 py-20 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl dark:text-stone-100">
                A practical rollout path for ops teams.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-400">
                Start with a narrow workflow, connect the systems you already use, then scale once outputs, reviews,
                and business outcomes are stable.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {launchSteps.map((item) => (
                <div key={item.step} className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400">{item.step}</p>
                  <h3 className="mt-4 text-xl font-semibold text-stone-950 dark:text-stone-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fit" className="border-b border-stone-200/70 py-20 dark:border-white/10">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Who this is for</p>
              <div className="mt-5 space-y-3">
                {bestFit.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-stone-600 dark:text-stone-400">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-300" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Not the best fit</p>
              <div className="mt-5 space-y-3">
                {notFor.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-stone-600 dark:text-stone-400">
                    <Shield className="mt-1 h-4 w-4 flex-shrink-0 text-stone-700 dark:text-stone-200" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200/70 py-20 dark:border-white/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                Reliability
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl dark:text-stone-100">
                Designed for workflows that cannot quietly drift or break.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-400">
                The platform combines grounded AI, tool execution, operational control, and traceable outcomes so
                your team can trust it in front of customers and internal stakeholders.
              </p>

              <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm font-medium text-stone-950 dark:text-stone-100">What the system handles</p>
                <ul className="mt-4 space-y-3 text-sm text-stone-600 dark:text-stone-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                    Research, summarization, extraction, and classification
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                    Knowledge-grounded outputs and tool-triggered workflows
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                    Structured summaries, action items, and state logging
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                    Escalation to humans with context preserved
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {reliabilityPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100 dark:bg-white/10">
                    <pillar.icon className="h-5 w-5 text-stone-700 dark:text-stone-200" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-stone-950 dark:text-stone-100">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-stone-400">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="border-b border-stone-200/70 py-20 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                Use cases
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl dark:text-stone-100">
                Built for the automations most teams keep postponing.
              </h2>
            </div>

            <div className="mt-10 divide-y divide-stone-200 rounded-3xl border border-stone-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
              {useCases.map((item) => (
                <div key={item.title} className="grid gap-4 px-6 py-6 md:grid-cols-[260px_minmax(0,1fr)] md:px-8">
                  <h3 className="text-lg font-semibold text-stone-950 dark:text-stone-100">{item.title}</h3>
                  <p className="text-sm leading-7 text-stone-600 dark:text-stone-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="border-b border-stone-200/70 py-20 dark:border-white/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                Enterprise trust
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl dark:text-stone-100">
                Practical deployment and governance, not hand-wavy enterprise language.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-400">
                The rollout is designed around operational controls, integration depth, and implementation planning that
                procurement and ops teams can actually evaluate.
              </p>
              <p className="mt-6 text-sm leading-7 text-stone-500 dark:text-stone-400">
                Security, privacy, and deployment constraints are scoped during discovery and pilot planning so the
                production setup matches the workflow and environment requirements you already operate under.
              </p>
            </div>

            <div>
              <div className="grid gap-4">
                {enterpriseSignals.map((signal) => (
                  <div key={signal} className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-start gap-3">
                      <Globe className="mt-0.5 h-4 w-4 text-stone-700 dark:text-stone-200" />
                      <p className="text-sm leading-7 text-stone-600 dark:text-stone-400">{signal}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm font-medium text-stone-950 dark:text-stone-100">Common integrations</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {integrations.map((integration) => (
                    <span
                      key={integration}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm text-stone-600 dark:border-white/10 dark:bg-white/5 dark:text-stone-300"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-stone-200 bg-stone-950 px-6 py-10 text-stone-50 dark:border-white/10 dark:bg-stone-100 dark:text-stone-950 sm:px-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div className="max-w-2xl">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-300 dark:text-stone-600">
                    Ready to launch
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Put one AI automation into production with a cleaner path to rollout.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-300 dark:text-stone-700">
                    Start with one operational workflow, validate quality and outcomes, and expand once the system is
                    doing real work for your team.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col">
                  <BookingCta
                    placement="final_cta"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-950 transition-colors hover:bg-stone-200 dark:bg-stone-950 dark:text-stone-50 dark:hover:bg-stone-800"
                  >
                    Book a demo
                    <ArrowRight className="h-4 w-4" />
                  </BookingCta>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-stone-300 transition-colors hover:text-white dark:text-stone-700 dark:hover:text-stone-950"
                    onClick={() => {
                      trackMarketingEvent("contact_fallback_click", {
                        placement: "final_cta",
                      })
                    }}
                  >
                    Prefer email or a custom intro?
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
      <MobileBookingBar />
    </div>
  )
}

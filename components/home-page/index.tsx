import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Headphones,
  Mic,
  PhoneCall,
  Shield,
  Sparkles,
  Waypoints,
  Workflow,
} from "lucide-react"

const proofPoints = [
  {
    title: "Low-latency conversations",
    description: "Natural turn-taking with interruption handling and fast responses built for real call volumes.",
  },
  {
    title: "Multilingual operations",
    description: "Support major Indian and global languages with localized scripts, tone controls, and regional context.",
  },
  {
    title: "Human handoff",
    description: "Escalate complex or high-value calls to live teams with transcript and context already attached.",
  },
  {
    title: "Structured capture",
    description: "Collect outcomes, tickets, claims, and lead data in a format your ops stack can use immediately.",
  },
]

const launchSteps = [
  {
    step: "01",
    title: "Map the call workflow",
    description: "Define intents, escalation rules, success metrics, and the data your team needs captured on every call.",
  },
  {
    step: "02",
    title: "Connect telephony and systems",
    description: "Hook into your phone stack, CRM, knowledge base, and workflow tools without building a new operations layer.",
  },
  {
    step: "03",
    title: "Launch with monitoring",
    description: "Start with controlled traffic, review transcripts and outcomes, then scale once the workflow is reliable.",
  },
]

const reliabilityPillars = [
  {
    icon: Mic,
    title: "Realtime voice stack",
    description: "Streaming conversations, interruption handling, and smooth turn-taking across inbound and outbound flows.",
  },
  {
    icon: Workflow,
    title: "Knowledge and action layer",
    description: "Ground answers in SOPs and trigger downstream actions like CRM updates, reminders, and callbacks.",
  },
  {
    icon: Shield,
    title: "Guardrails and escalation",
    description: "Policy-aware responses, confidence checks, and clean transfer to human teams when the workflow needs it.",
  },
  {
    icon: Headphones,
    title: "Observability for ops",
    description: "Track latency, call quality, tool usage, and resolution outcomes with a workflow your QA team can review.",
  },
]

const useCases = [
  {
    title: "Customer support and service",
    description: "Handle routine inbound questions, triage requests, and capture clean case data without increasing headcount.",
  },
  {
    title: "Collections and payment reminders",
    description: "Run high-volume reminder and follow-up campaigns with a consistent script, escalation path, and outcome log.",
  },
  {
    title: "Admissions and onboarding",
    description: "Qualify applicants, answer repeat questions, and move prospects forward with structured intake on every call.",
  },
  {
    title: "Booking and confirmation flows",
    description: "Automate appointment reminders, reservation confirmations, and status updates with voice plus follow-up messaging.",
  },
  {
    title: "Outbound qualification",
    description: "Pre-qualify leads, route high-intent prospects to your team, and keep disposition data synced to your systems.",
  },
]

const enterpriseSignals = [
  "Cloud-native deployment with a path for stricter environment and data handling requirements",
  "API-first call triggering for reminders, support workflows, campaigns, and follow-up operations",
  "Voice + workflow integrations across telephony, CRM, help desk, and automation tools",
  "Post-call summaries, action items, and case-level intelligence for QA and operations review",
]

const integrations = [
  "Twilio",
  "Plivo",
  "Exotel",
  "Salesforce",
  "HubSpot",
  "Freshworks",
  "Zoho",
  "Zapier",
  "Make",
  "n8n",
]

function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur dark:border-white/10 dark:bg-[#0d0f10]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/xagi-icon.png" alt="xAGI Labs" width={28} height={28} />
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold tracking-tight text-stone-950 dark:text-stone-100">xAGI Labs</span>
            <span className="text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Voice</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex dark:text-stone-300">
          <a href="#proof" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Why it works
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            How it works
          </a>
          <a href="#use-cases" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Use cases
          </a>
          <a href="#trust" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Trust
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/voice-ai"
            className="hidden text-sm text-stone-600 transition-colors hover:text-stone-950 md:inline-flex dark:text-stone-300 dark:hover:text-white"
          >
            Platform details
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white"
          >
            Book a demo
          </Link>
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
            Voice agents for support, operations, and high-volume call workflows.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-stone-600 dark:text-stone-400">
          <Link href="/voice-ai" className="transition-colors hover:text-stone-950 dark:hover:text-white">
            Voice platform
          </Link>
          <Link href="/contact" className="transition-colors hover:text-stone-950 dark:hover:text-white">
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 dark:bg-[#0d0f10] dark:text-stone-100">
      <LandingHeader />

      <main>
        <section className="border-b border-stone-200/70 dark:border-white/10">
          <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-stone-600 dark:border-white/10 dark:bg-white/5 dark:text-stone-300">
                <PhoneCall className="h-3.5 w-3.5" />
                Voice agents for customer operations
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-stone-950 sm:text-6xl dark:text-stone-50">
                Reliable AI voice agents for teams that run real call volume.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
                xAGI helps operations, support, and CX teams launch voice agents for inbound service, outbound
                follow-ups, collections, admissions, booking, and qualification workflows without building a separate
                call-center stack from scratch.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white"
                >
                  Book a demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/voice-ai"
                  className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 transition-colors hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
                >
                  See the full voice platform
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-3 text-sm text-stone-600 sm:grid-cols-3 dark:text-stone-400">
                <div className="rounded-2xl border border-stone-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="font-medium text-stone-950 dark:text-stone-100">Realtime conversations</p>
                  <p className="mt-1">Low-latency responses with interruption handling and clean turn-taking.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="font-medium text-stone-950 dark:text-stone-100">Operational control</p>
                  <p className="mt-1">Escalation rules, structured capture, and post-call reporting built in.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="font-medium text-stone-950 dark:text-stone-100">Stack-friendly rollout</p>
                  <p className="mt-1">Integrates with telephony, CRM, and workflow tools your team already uses.</p>
                </div>
              </div>
            </div>

            <div className="lg:pt-8">
              <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-[#141718]">
                <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5 dark:border-white/10 dark:bg-[#101213]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
                        Ops console
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-stone-950 dark:text-stone-100">
                        Voice workflow in production
                      </h2>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                      Live
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Average latency</p>
                      <p className="mt-2 text-3xl font-semibold text-stone-950 dark:text-stone-100">&lt; 1s</p>
                      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">Built for fluid turn-taking during live calls.</p>
                    </div>
                    <div className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-xs uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">Escalation ready</p>
                      <p className="mt-2 text-3xl font-semibold text-stone-950 dark:text-stone-100">Human handoff</p>
                      <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">Transcript, disposition, and context travel with the call.</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-stone-950 dark:text-stone-100">Active workflow</p>
                      <span className="text-xs text-stone-500 dark:text-stone-400">Collections follow-up</span>
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-stone-600 dark:text-stone-300">
                      <div className="flex items-start gap-3">
                        <Sparkles className="mt-0.5 h-4 w-4 text-amber-600 dark:text-amber-300" />
                        <p>Verifies caller context, balance status, and preferred language before starting the conversation.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Waypoints className="mt-0.5 h-4 w-4 text-stone-700 dark:text-stone-200" />
                        <p>Triggers CRM updates and reminder workflows based on call outcome and next-step intent.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                        <p>Escalates exceptions to a live agent when confidence, policy, or customer tone crosses threshold.</p>
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
                Start with a narrow workflow, connect the systems you already use, then scale once the conversation and
                outcomes are stable.
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

        <section className="border-b border-stone-200/70 py-20 dark:border-white/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                Reliability
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl dark:text-stone-100">
                Designed for workflows that cannot fall apart mid-call.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-400">
                The platform combines realtime conversation quality, operational control, and traceable outcomes so
                your team can trust it in front of customers.
              </p>

              <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm font-medium text-stone-950 dark:text-stone-100">What the system handles</p>
                <ul className="mt-4 space-y-3 text-sm text-stone-600 dark:text-stone-400">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                    Inbound and outbound call control
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                    Knowledge-grounded answers and tool-triggered workflows
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                    Structured summaries, action items, and disposition logging
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                    Escalation to live teams with context preserved
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
                Built for the call workflows most teams want off their backlog.
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
                    Put a voice workflow into production with a cleaner path to rollout.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-300 dark:text-stone-700">
                    Start with one operational workflow, validate quality and outcomes, and expand once the system is
                    doing real work for your team.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-950 transition-colors hover:bg-stone-200 dark:bg-stone-950 dark:text-stone-50 dark:hover:bg-stone-800"
                  >
                    Book a demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/voice-ai"
                    className="inline-flex items-center gap-2 text-sm font-medium text-stone-300 transition-colors hover:text-white dark:text-stone-700 dark:hover:text-stone-950"
                  >
                    Explore the full voice platform
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  )
}

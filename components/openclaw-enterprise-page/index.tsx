import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Binoculars,
  FileCheck2,
  KeyRound,
  LifeBuoy,
  Lock,
  Radar,
  ServerCog,
  ShieldCheck,
  ShieldEllipsis,
  Split,
} from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

const problemPoints = [
  {
    title: "What OpenClaw is, and where it actually fits",
    description:
      "A clear explanation of OpenClaw as a self-hosted agent framework, plus where it makes sense relative to managed assistants and lighter chatbot workflows.",
    icon: ShieldEllipsis,
    accent: "text-red-600 dark:text-red-400",
    surface: "bg-red-50 dark:bg-red-950/20",
  },
  {
    title: "How to choose the right deployment path",
    description:
      "A practical framework for deciding between local development, VPS, private cloud, and on-prem based on security, latency, compliance, and operational maturity.",
    icon: ServerCog,
    accent: "text-blue-600 dark:text-blue-400",
    surface: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "How to structure providers, channels, and workflows",
    description:
      "Model routing, channel rollout, skills, nodes, and workflow composition are what determine whether OpenClaw becomes useful infrastructure or just another fragile demo.",
    icon: Split,
    accent: "text-amber-600 dark:text-amber-400",
    surface: "bg-amber-50 dark:bg-amber-950/20",
  },
  {
    title: "What it takes to reach production responsibly",
    description:
      "Security controls, observability, cost discipline, and a 7-day launch plan for teams that want to move from experimentation to a credible production setup.",
    icon: LifeBuoy,
    accent: "text-emerald-600 dark:text-emerald-400",
    surface: "bg-emerald-50 dark:bg-emerald-950/20",
  },
]

const controlCategories = [
  {
    title: "Architecture First",
    description: "Treat OpenClaw like infrastructure from day one: environments, boundaries, rollout sequencing, and provider abstraction all matter early.",
    icon: Lock,
  },
  {
    title: "Channel-Native Design",
    description: "Slack, Telegram, Discord, web, and API surfaces each change adoption dynamics. The guide helps you sequence them instead of launching everywhere at once.",
    icon: KeyRound,
  },
  {
    title: "Operational Discipline",
    description: "Reliability, monitoring, approvals, failover, and cost controls are what separate an interesting agent from a dependable business system.",
    icon: Radar,
  },
  {
    title: "Security by Default",
    description: "OpenClaw creates real leverage only when permissions, auditability, policy gates, and workflow boundaries are designed intentionally.",
    icon: Binoculars,
  },
]

const deliverables = [
  "A clear decision framework for OpenClaw vs managed assistants",
  "A deployment guide across local, VPS, VPC, and on-prem setups",
  "A practical model-provider and routing strategy for quality and cost control",
  "A channel rollout plan for Slack, Telegram, Discord, web, and API-first flows",
  "A security hardening checklist for production-bound agent workflows",
  "A 7-day launch plan to move from initial setup toward production readiness",
]

const engagementModels = [
  {
    name: "Understand the Stack",
    timeline: "Foundations",
    description:
      "Start with the basics that matter: what OpenClaw does well, what it does not solve, and when self-hosting is the right strategic move.",
    includes: "Category fit, managed-vs-self-hosted tradeoffs, deployment context",
  },
  {
    name: "Design the Rollout",
    timeline: "Execution",
    description:
      "Map the decisions that shape adoption: provider routing, channel sequence, node boundaries, tool design, and workflow composition.",
    includes: "Providers, channels, skills, nodes, automation patterns",
  },
  {
    name: "Harden for Production",
    timeline: "Operations",
    description:
      "Close the gap between a promising setup and a reliable system with security controls, observability, cost guardrails, and launch planning.",
    includes: "Security baseline, monitoring, reliability, cost discipline, launch plan",
  },
]

const buyerSignals = [
  "Founders evaluating OpenClaw against managed assistant products.",
  "Product teams designing channel-native AI agents for real workflows.",
  "Engineering teams preparing OpenClaw for production deployment.",
  "Operators who care about security, uptime, and cost as much as capability.",
]

export default function OpenClawEnterprisePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.12),_transparent_28%),linear-gradient(to_bottom,_rgba(255,255,255,1),_rgba(248,250,252,0.92))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.14),_transparent_24%),linear-gradient(to_bottom,_rgba(10,10,10,1),_rgba(10,10,10,0.94))]" />
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-300">
                <ShieldCheck className="mr-2 h-4 w-4" />
                OpenClaw Guide (2026)
              </div>

              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white md:text-7xl">
                    From Zero to Production with OpenClaw.
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400 md:text-xl">
                    A practical guide for teams who want more than hype: architecture, deployment choices, provider
                    strategy, channel rollout, security hardening, and the path to production readiness.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/blog/openclaw-guide-2026"
                      className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
                    >
                      Read the OpenClaw Guide
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-4 font-semibold transition-colors hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600"
                    >
                      Talk to xAGI Labs
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-[#101010]/90">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                        What You&apos;ll Learn
                      </p>
                      <h2 className="mt-2 text-2xl font-bold">The production questions this guide answers</h2>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "What OpenClaw is, and what it is not",
                      "When to choose OpenClaw over managed assistants",
                      "How to design secure, scoped, production-ready workflows",
                      "How to launch with reliability, cost, and governance in place",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start rounded-2xl bg-gray-50 px-4 py-4 text-sm text-gray-700 dark:bg-[#171717] dark:text-gray-300"
                      >
                        <BadgeCheck className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 grid gap-4 rounded-3xl border border-gray-200 bg-white/80 p-6 backdrop-blur dark:border-gray-800 dark:bg-[#0f0f0f]/85 md:grid-cols-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Target buyer</p>
                  <p className="mt-2 text-lg font-semibold">Builders planning real OpenClaw deployment decisions</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Primary wedge</p>
                  <p className="mt-2 text-lg font-semibold">Practical guidance, not generic AI-agent hype</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Deployment options</p>
                  <p className="mt-2 text-lg font-semibold">Local, VPS, private cloud, and on-prem paths covered</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Outcome</p>
                  <p className="mt-2 text-lg font-semibold">A clearer path from prototype to production readiness</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                What this guide covers
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                OpenClaw is powerful, but production outcomes depend on the decisions around it.
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                This guide is built for teams that want the operational details behind a strong OpenClaw deployment,
                without getting lost in vague promises or surface-level tutorials.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
              {problemPoints.map(({ title, description, icon: Icon, accent, surface }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 dark:border-gray-800 dark:bg-[#111111]"
                >
                  <div className={`inline-flex rounded-2xl p-3 ${surface}`}>
                    <Icon className={`h-6 w-6 ${accent}`} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-[#111111]">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                  Why this matters
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  OpenClaw gives you control. It does not remove the need for discipline.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                  The difference between a strong deployment and a fragile one is rarely the installer. It is how well
                  you design the environment, permissions, workflows, monitoring, and rollout from the start.
                </p>

                <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#0d0d0d]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                    What you walk away with
                  </p>
                  <div className="mt-5 space-y-4">
                    {deliverables.map((item) => (
                      <div key={item} className="flex items-start">
                        <FileCheck2 className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                        <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {controlCategories.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-[#0d0d0d]"
                  >
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
                Guide structure
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                A production-minded framework, not just a setup checklist.
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                The guide moves from category understanding to rollout design to operational hardening so teams can
                make better decisions at each stage.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
              {engagementModels.map(({ name, timeline, description, includes }) => (
                <div
                  key={name}
                  className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-[#111111]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-[#1b1b1b] dark:text-gray-300">
                      {timeline}
                    </span>
                  </div>
                  <p className="mt-5 flex-1 text-base leading-7 text-gray-600 dark:text-gray-400">{description}</p>
                  <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700 dark:bg-[#171717] dark:text-gray-300">
                    <span className="font-semibold">Includes:</span> {includes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-[#111111]">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                  Who should read this
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  Teams that want OpenClaw in production, not just running on a laptop.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  If your priorities include control, customization, security, uptime, and cost visibility, this guide
                  is designed to help you plan with much more confidence.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-[#0d0d0d]">
                <div className="space-y-5">
                  {buyerSignals.map((item) => (
                    <div key={item} className="flex items-start">
                      <BadgeCheck className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <p className="text-base leading-7 text-gray-700 dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-gray-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-10 text-white shadow-xl dark:border-gray-800 md:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">xAGI Labs</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                OpenClaw can be a strong long-term foundation for AI operations.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/85">
                The teams that get the most from it treat it like infrastructure: designed deliberately, secured
                properly, and monitored continuously from the beginning.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/blog/openclaw-guide-2026"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-slate-950 transition-opacity hover:opacity-90"
                >
                  Read the Full Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact xAGI Labs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

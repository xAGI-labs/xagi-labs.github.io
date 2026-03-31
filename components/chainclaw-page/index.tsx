'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import { ArrowRight, Sparkles } from 'lucide-react'

const steps = [
  {
    title: 'Step 1 — Define your mission',
    body: '“Scale revenue.” “Run billing ops.” “Launch product.” Anything that requires real work.',
  },
  {
    title: 'Step 2 — Build your squad',
    body: 'Assign roles, responsibilities, and behaviors. Or use pre-built agent archetypes.',
  },
  {
    title: 'Step 3 — Chat, delegate, ship',
    body: 'Your squad plans, executes, and delivers — continuously.',
  },
]

const agents = [
  {
    name: 'Grayson — Squad Lead',
    body: 'Coordinates everything. Aligns execution with your mission.',
  },
  {
    name: 'Cecil — Operations Strategist',
    body: 'Breaks down goals into structured plans.',
  },
  {
    name: 'Robot — Execution Engine',
    body: 'Runs workflows, completes tasks, integrates systems.',
  },
  {
    name: 'Eve — Growth & Creative',
    body: 'Content, campaigns, experimentation.',
  },
  {
    name: 'Allen — Intelligence',
    body: 'Research, insights, decision support.',
  },
  {
    name: 'Nolan — Optimizer',
    body: 'Improves performance, efficiency, and outcomes.',
  },
]

const useCases = [
  'Healthcare Billing Teams → automate claims, follow-ups, coordination',
  'Growth Teams → run campaigns, experiments, reporting',
  'Operations Teams → manage workflows end-to-end',
  'Founders → delegate entire workstreams',
]

type ProductLandingProps = {
  productName?: string
  heroImageSrc?: string
  startFreeHref?: string
  openStartFreeInNewTab?: boolean
}

export default function ChainClawLandingPage({
  productName = 'Chain Claw',
  heroImageSrc = '/images/chainclaw/chainclaw.png',
  startFreeHref = '/contact',
  openStartFreeInNewTab = false,
}: ProductLandingProps) {
  const reduceMotion = useReducedMotion()
  const startFreeLinkProps = openStartFreeInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <div className="min-h-screen bg-[#f5efe5] text-[#1c1308] dark:bg-[#130d08] dark:text-[#f8efe3]">
      <Header />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#ff8a3d]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#ff4f6f]/15 blur-3xl" />

        <section className="px-4 pb-16 pt-20 md:pb-24 md:pt-28">
          <motion.div
            initial={false}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mx-auto max-w-6xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2c1a10]/15 bg-white/70 px-4 py-2 text-sm font-semibold text-[#472f1d] dark:border-white/15 dark:bg-white/5 dark:text-[#ffd7b7]">
              <Sparkles className="h-4 w-4" />
              Pilot Launch
            </div>
            <h1 className="mt-6 text-[clamp(2.5rem,7vw,5.4rem)] font-black leading-[0.95] tracking-[-0.04em]">
              Run your company with an AI workforce.
            </h1>
            <p className="mt-6 max-w-3xl text-[clamp(1.1rem,2.2vw,1.5rem)] font-medium text-[#4d3624] dark:text-[#f1d5bc]">
              {productName} turns AI into a self-organizing squad that plans, executes, and ships work — continuously.
            </p>
            <p className="mt-3 text-lg text-[#6a4e39] dark:text-[#dcb79c]">
              Stop prompting tools. Start deploying outcomes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={startFreeHref}
                {...startFreeLinkProps}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#1d1208] px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.03] dark:bg-[#fff2e6] dark:text-[#1d1208]"
              >
                Start Free — $0 for your first month
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[#2c1a10]/20 px-6 py-3 text-base font-semibold transition-colors duration-200 hover:bg-[#1d1208] hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-[#1d1208]"
              >
                See How It Works →
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#765a45] dark:text-[#c9a98f]">
              Bring your own ClaudeCode API key — or we’ll provide one free during pilot.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#2c1a10]/15 bg-black/5 dark:border-white/10 dark:bg-white/5">
              <Image
                src={heroImageSrc}
                alt={`${productName} hero visual`}
                width={960}
                height={768}
                className="h-auto w-full"
                priority
              />
            </div>
          </motion.div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Work is broken. AI tools didn’t fix it.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#5f4632] dark:text-[#dfc2aa]">
              Companies today are drowning in tools — CRMs, dashboards, copilots — all waiting for humans to tell them what to
              do.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#5f4632] dark:text-[#dfc2aa]">
              AI made things faster. But it didn’t make them autonomous.
            </p>
            <ul className="mt-6 space-y-2 text-lg font-semibold text-[#2a1a11] dark:text-[#f7e3d1]">
              <li>You still manage tasks</li>
              <li>You still coordinate teams</li>
              <li>You still push work forward</li>
            </ul>
            <p className="mt-6 text-lg leading-relaxed text-[#5f4632] dark:text-[#dfc2aa]">
              AI didn’t remove the work. It just made you responsible for more of it.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#2c1a10]/15 bg-white/50 p-8 dark:border-white/15 dark:bg-white/5 md:p-10">
            <h2 className="text-3xl font-extrabold md:text-4xl">The future isn’t AI tools. It’s AI teams.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5f4632] dark:text-[#dfc2aa]">
              What if instead of using AI… you could deploy a team of AI agents that actually owns the work?
            </p>
            <p className="mt-4 text-xl font-bold text-[#1f140b] dark:text-[#ffe6cf]">Not suggestions. Not drafts. Execution.</p>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Meet {productName} — your AI squad.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#5f4632] dark:text-[#dfc2aa]">
              {productName} is an AI-native operating layer where you spin up a team of specialized agents that work together toward
              a mission.
            </p>
            <p className="mt-4 text-xl font-bold text-[#1f140b] dark:text-[#ffe6cf]">You define the goal. They figure out the rest.</p>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">From idea to execution in minutes.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step, idx) => (
                <motion.article
                  key={step.title}
                  initial={false}
                  transition={{ delay: reduceMotion ? 0 : idx * 0.1, duration: 0.2, ease: 'easeOut' }}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-[#2c1a10]/15 bg-white/70 p-6 dark:border-white/15 dark:bg-white/5"
                >
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#5f4632] dark:text-[#dfc2aa]">{step.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">A team that never sleeps.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent, idx) => (
                <motion.article
                  key={agent.name}
                  initial={false}
                  transition={{ delay: reduceMotion ? 0 : idx * 0.06, duration: 0.2, ease: 'easeOut' }}
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  className="rounded-2xl border border-[#2c1a10]/15 bg-white/70 p-5 dark:border-white/15 dark:bg-white/5"
                >
                  <h3 className="text-lg font-extrabold">{agent.name}</h3>
                  <p className="mt-2 text-[#5f4632] dark:text-[#dfc2aa]">{agent.body}</p>
                </motion.article>
              ))}
            </div>
            <p className="mt-8 text-xl font-semibold text-[#1f140b] dark:text-[#ffe6cf]">
              They don’t just assist. They collaborate, adapt, and improve over time.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Not another AI tool.</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#2c1a10]/20">
              <div className="grid grid-cols-2 bg-[#1e130a] text-sm font-semibold text-[#ffe8d3]">
                <div className="px-4 py-3">Traditional AI</div>
                <div className="px-4 py-3">{productName}</div>
              </div>
              {[
                ['Prompt-based', 'Mission-driven'],
                ['Stateless', 'Persistent memory'],
                ['Human-dependent', 'Autonomous execution'],
                ['Single-agent', 'Multi-agent collaboration'],
                ['Outputs', 'Outcomes'],
              ].map((row) => (
                <div key={row[0]} className="grid grid-cols-2 bg-white/70 text-sm dark:bg-white/5">
                  <div className="border-t border-[#2c1a10]/10 px-4 py-3">{row[0]}</div>
                  <div className="border-t border-l border-[#2c1a10]/10 px-4 py-3 font-semibold">{row[1]}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-2xl font-extrabold">This is not a copilot. This is an operating system.</p>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Built for real work.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {useCases.map((line) => (
                <div
                  key={line}
                  className="rounded-xl border border-[#2c1a10]/15 bg-white/60 px-5 py-4 font-medium dark:border-white/15 dark:bg-white/5"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#2c1a10]/15 bg-[#1f130a] p-8 text-[#ffe6d0] dark:border-white/15 md:p-10">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Your AI. Your control.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#ffd8b7]">
              Bring your own ClaudeCode API key for full control over usage and cost.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#ffd8b7]">Or, while we’re in pilot, we’ll provide you access for free.</p>
            <ul className="mt-6 space-y-2 text-base font-medium text-[#ffe7d3]">
              <li>Your data stays private</li>
              <li>No hidden markups</li>
              <li>Full transparency</li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#2c1a10]/15 bg-white/70 p-8 dark:border-white/15 dark:bg-white/5 md:p-10">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Start building your AI workforce.</h2>
            <div className="mt-8 rounded-2xl border border-[#2c1a10]/15 bg-[#fff8f1] p-6 dark:border-white/15 dark:bg-black/20">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#7a573d] dark:text-[#f0b78a]">🚀 Pilot Access — Limited Time</p>
              <p className="mt-2 text-3xl font-black">$0 for your first month</p>
              <ul className="mt-4 space-y-2 text-[#5f4632] dark:text-[#dfc2aa]">
                <li>Unlimited agents</li>
                <li>Full {productName} system access</li>
                <li>Mission control dashboard</li>
                <li>Guided onboarding</li>
              </ul>
              <Link
                href={startFreeHref}
                {...startFreeLinkProps}
                className="mt-6 inline-flex items-center rounded-xl bg-[#1f130a] px-6 py-3 font-semibold text-white transition-transform duration-200 hover:scale-[1.03] dark:bg-white dark:text-[#1f130a]"
              >
                Start Free Now
              </Link>
              <p className="mt-4 text-sm text-[#6d4f38] dark:text-[#cca98b]">
                Use your own ClaudeCode API key — or we’ll provide one free during pilot.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Companies won’t use AI. They’ll run on it.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#5f4632] dark:text-[#dfc2aa]">
              We believe every company will have an AI workforce operating alongside humans.
            </p>
            <p className="mt-4 text-xl font-semibold">Not as assistants. Not as tools. But as operators.</p>
            <p className="mt-4 text-lg leading-relaxed text-[#5f4632] dark:text-[#dfc2aa]">{productName} is building the system where:</p>
            <ul className="mt-4 space-y-2 text-lg font-semibold">
              <li>Work is continuously executed</li>
              <li>Decisions are continuously improved</li>
              <li>Companies scale without proportional headcount</li>
            </ul>
          </div>
        </section>

        <section className="px-4 pb-24 pt-12 md:pb-32">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#2c1a10]/15 bg-gradient-to-r from-[#ff7a2f] to-[#ff4f6f] p-8 text-white md:p-10">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Deploy your AI squad.</h2>
            <p className="mt-4 text-xl text-white/90">Define your mission. Let your agents handle the rest.</p>
            <Link
              href={startFreeHref}
              {...startFreeLinkProps}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#2b170f] transition-transform duration-200 hover:scale-[1.03]"
            >
              Start Free — $0 for your first month
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="mt-4 text-sm text-white/85">Early access only. Pilot users get free AI access included.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

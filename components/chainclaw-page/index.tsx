'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Network, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

const outcomes = [
  'Prospect research and account enrichment',
  'Personalized outbound drafting across email and LinkedIn',
  'CRM hygiene, enrichment, and follow-up orchestration',
  'Inbound qualification and meeting-routing workflows',
  'Campaign operations with human approval checkpoints',
  'Performance reporting tied to pipeline outcomes',
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
  const primaryLinkProps = openStartFreeInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  const deliverySteps = [
    {
      title: 'Audit the workflow',
      body: 'Map the repetitive research, outreach, qualification, and reporting work that should be handled by agents instead of humans.',
    },
    {
      title: 'Configure the system',
      body: `Set up ${productName} roles, prompts, approvals, data sources, and CRM or communication integrations around your operating model.`,
    },
    {
      title: 'Launch with guardrails',
      body: 'Run pilots, monitor quality, tune the system, and document handoffs so the workflow is reliable enough for production use.',
    },
  ]

  const engagementReasons = [
    `You want ${productName} implemented inside an existing GTM or operations stack.`,
    'You need prompting, workflow logic, and approvals tuned for your team rather than a template demo.',
    'You want a consulting partner that can handle both the AI workflow and the surrounding platform engineering.',
  ]

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
              Capability Spotlight
            </div>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.1rem)] font-black leading-[0.95] tracking-[-0.04em]">
              Implement {productName} with a consulting team that can ship the workflow around it.
            </h1>
            <p className="mt-6 max-w-3xl text-[clamp(1.05rem,2.1vw,1.4rem)] font-medium text-[#4d3624] dark:text-[#f1d5bc]">
              xAGI uses {productName} as one delivery tool for GTM automation, research ops, and agent-driven execution.
              We do the design, integrations, guardrails, and tuning so the system works inside your stack.
            </p>
            <p className="mt-3 max-w-3xl text-lg text-[#6a4e39] dark:text-[#dcb79c]">
              This is implementation consulting, not a generic software trial.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={startFreeHref}
                {...primaryLinkProps}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#1d1208] px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.03] dark:bg-[#fff2e6] dark:text-[#1d1208]"
              >
                Book an Implementation Call
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-[#2c1a10]/20 px-6 py-3 text-base font-semibold transition-colors duration-200 hover:bg-[#1d1208] hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-[#1d1208]"
              >
                See Consulting Services
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#765a45] dark:text-[#c9a98f]">
              Best fit for teams that already know the workflow they want to automate and need it deployed safely.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[#2c1a10]/15 bg-black/5 dark:border-white/10 dark:bg-white/5">
              <Image
                src={heroImageSrc}
                alt={`${productName} workflow implementation visual`}
                width={960}
                height={768}
                className="h-auto w-full"
                priority
              />
            </div>
          </motion.div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[#2c1a10]/15 bg-white/70 p-6 dark:border-white/15 dark:bg-white/5">
              <Workflow className="h-8 w-8 text-[#ff7a2f]" />
              <h2 className="mt-4 text-2xl font-extrabold">Workflow-first delivery</h2>
              <p className="mt-3 text-[#5f4632] dark:text-[#dfc2aa]">
                We start with the work that matters: pipeline generation, qualification, routing, and operating cadence.
              </p>
            </div>
            <div className="rounded-2xl border border-[#2c1a10]/15 bg-white/70 p-6 dark:border-white/15 dark:bg-white/5">
              <Network className="h-8 w-8 text-[#ff7a2f]" />
              <h2 className="mt-4 text-2xl font-extrabold">Integration-ready setup</h2>
              <p className="mt-3 text-[#5f4632] dark:text-[#dfc2aa]">
                CRM, spreadsheets, internal tools, messaging systems, and approval flows all need to work together, not in isolation.
              </p>
            </div>
            <div className="rounded-2xl border border-[#2c1a10]/15 bg-white/70 p-6 dark:border-white/15 dark:bg-white/5">
              <ShieldCheck className="h-8 w-8 text-[#ff7a2f]" />
              <h2 className="mt-4 text-2xl font-extrabold">Production guardrails</h2>
              <p className="mt-3 text-[#5f4632] dark:text-[#dfc2aa]">
                We add prompts, review steps, fallback paths, and reporting so the automation is accountable enough for real teams.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#2c1a10]/15 bg-white/50 p-8 dark:border-white/15 dark:bg-white/5 md:p-10">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-extrabold md:text-4xl">How xAGI delivers {productName}</h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5f4632] dark:text-[#dfc2aa]">
                We use {productName} as part of broader AI and platform consulting work. That means process design,
                data flow design, integration work, agent configuration, testing, rollout support, and iteration after launch.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {deliverySteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={false}
                  transition={{ delay: reduceMotion ? 0 : index * 0.1, duration: 0.2, ease: 'easeOut' }}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-[#2c1a10]/15 bg-[#fff8f1] p-6 dark:border-white/15 dark:bg-black/20"
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
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Where we use it</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {outcomes.map((line) => (
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
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">When teams bring xAGI in</h2>
            <div className="mt-8 space-y-4">
              {engagementReasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 rounded-2xl border border-[#2c1a10]/15 bg-white/70 p-5 dark:border-white/15 dark:bg-white/5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff7a2f]" />
                  <p className="text-lg text-[#5f4632] dark:text-[#dfc2aa]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#2c1a10]/15 bg-[#1f130a] p-8 text-[#ffe6d0] dark:border-white/15 md:p-10">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Why this stays under consulting</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#ffd8b7]">
              {productName} is one xAGI delivery tool, not the whole company. Clients usually need the surrounding architecture,
              prompting strategy, observability, and operational rollout just as much as the underlying product.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#ffd8b7]">
              That is why xAGI leads with AI/ML and platform engineering consulting, then brings in {productName} where it actually improves delivery.
            </p>
          </div>
        </section>

        <section className="px-4 pb-24 pt-12 md:pb-32">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#2c1a10]/15 bg-gradient-to-r from-[#ff7a2f] to-[#ff4f6f] p-8 text-white md:p-10">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Need {productName} implemented inside your workflow?
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-white/90">
              We can scope the workflow, configure the system, and ship the surrounding integrations as part of a consulting engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={startFreeHref}
                {...primaryLinkProps}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#2b170f] transition-transform duration-200 hover:scale-[1.03]"
              >
                Book an Implementation Session
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Talk to xAGI
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

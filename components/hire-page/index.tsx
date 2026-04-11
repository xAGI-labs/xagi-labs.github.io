'use client'

import Link from 'next/link'
import { ArrowRight, Blocks, Bot, Check, Cloud, Code, Database, Monitor, Server, Shield, Smartphone, Zap } from 'lucide-react'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

const engagementModels = [
  'Embedded engineers for existing product or platform teams',
  'Scoped implementation sprints for AI, data, or platform work',
  'Small delivery pods for shipping a defined roadmap',
]

const deliveryAreas = [
  {
    title: 'AI and Data Systems',
    items: ['Applied AI features', 'LLM workflows and agent systems', 'Python services', 'Data pipelines and evaluation loops'],
    icon: <Bot className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Platform Engineering',
    items: ['Cloud architecture', 'CI/CD and DevOps', 'Observability', 'Infrastructure hardening'],
    icon: <Cloud className="h-10 w-10 text-cyan-600" />,
  },
  {
    title: 'Product Delivery',
    items: ['React and frontend delivery', 'Backend systems', 'Mobile support', 'Cross-functional implementation'],
    icon: <Code className="h-10 w-10 text-purple-600" />,
  },
]

const techStack = [
  { icon: <Code className="h-8 w-8" />, title: 'Python' },
  { icon: <Zap className="h-8 w-8" />, title: 'React' },
  { icon: <Server className="h-8 w-8" />, title: 'Platform Ops' },
  { icon: <Cloud className="h-8 w-8" />, title: 'AWS' },
  { icon: <Database className="h-8 w-8" />, title: 'Data Systems' },
  { icon: <Monitor className="h-8 w-8" />, title: '.NET' },
  { icon: <Code className="h-8 w-8" />, title: 'Java' },
  { icon: <Smartphone className="h-8 w-8" />, title: 'React Native' },
]

const adjacentCapabilities = [
  {
    title: 'Enterprise Platforms',
    items: ['IBM Maximo', 'Oracle NetSuite', 'Odoo'],
    icon: <Database className="h-10 w-10 text-purple-600" />,
  },
  {
    title: 'Automation and Operations',
    items: ['Workflow automation', 'Operational tooling', 'Business process improvement'],
    icon: <Blocks className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Security and Reliability',
    items: ['Access controls', 'Deployment guardrails', 'Monitoring and incident readiness'],
    icon: <Shield className="h-10 w-10 text-green-600" />,
  },
]

export default function HirePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">Bring xAGI in as an embedded delivery team.</h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
              Engage AI engineers, platform engineers, and product builders through consulting sprints, embedded delivery, or focused implementation pods.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {engagementModels.map((model) => (
                <span
                  key={model}
                  className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {model}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-black px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
              >
                Book a Delivery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border border-gray-300 px-8 py-4 font-semibold transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
              >
                Review Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white dark:bg-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Start with a scoped sprint, not a vague resourcing promise.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            We usually begin with a 2-4 week discovery or implementation sprint so both sides can validate execution quality, communication, and delivery pace before expanding the engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-white px-8 py-4 font-bold text-blue-700 transition-colors hover:bg-gray-100"
          >
            Scope a Sprint
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold">What we can embed into your team</h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {deliveryAreas.map((area) => (
              <SolutionCard key={area.title} title={area.title} items={area.items} icon={area.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold">Core stack familiarity</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
            {techStack.map((item) => (
              <TechCard key={item.title} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold">Adjacent capabilities</h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {adjacentCapabilities.map((capability) => (
              <SolutionCard
                key={capability.title}
                title={capability.title}
                items={capability.items}
                icon={capability.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">Need delivery help on an AI or platform roadmap?</h2>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
              We can structure the engagement around one sprint, one workflow, or an embedded team that ships alongside your internal org.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-black px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
            >
              Talk to xAGI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function TechCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-[#0a0a0a]">
      <div className="mb-4 text-gray-800 dark:text-gray-200">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  )
}

function SolutionCard({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-[#0a0a0a]">
      <div className="mb-6">{icon}</div>
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start text-gray-600 dark:text-gray-400">
            <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

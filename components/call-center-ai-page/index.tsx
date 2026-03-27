import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import {
  ArrowRight,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  Languages,
  Brain,
  Database,
  Shield,
  UserRound,
  Activity,
  Cloud,
  Workflow,
  FileText,
  CheckCircle2,
} from "lucide-react"

const coreFeatures = [
  {
    icon: PhoneIncoming,
    title: "Inbound + Outbound Voice",
    description:
      "Launch AI-led inbound support and outbound campaigns from a dedicated business number with seamless routing.",
  },
  {
    icon: MessageSquare,
    title: "Voice + SMS Journey",
    description:
      "Combine phone conversations with SMS for confirmations, reminders, and follow-ups in one workflow.",
  },
  {
    icon: Languages,
    title: "Multilingual Experience",
    description:
      "Support multiple languages, tone controls, and localized scripts for global or regional operations.",
  },
  {
    icon: Brain,
    title: "Realtime Conversational AI",
    description:
      "Low-latency streaming conversations with interruption handling, context tracking, and smooth turn-taking.",
  },
  {
    icon: Workflow,
    title: "Structured Claim / Ticket Capture",
    description:
      "Collect structured information in real-time using configurable schemas for insurance, IT support, and customer care.",
  },
  {
    icon: FileText,
    title: "Post-Call Reports",
    description:
      "Auto-generate call summaries, action items, reminders, and case-level insights after each conversation.",
  },
  {
    icon: Database,
    title: "Knowledge + Context Retrieval",
    description:
      "Ground responses in your SOPs, product docs, and policy data with retrieval workflows for higher accuracy.",
  },
  {
    icon: Shield,
    title: "Safety and Guardrails",
    description:
      "Include moderation, jailbreak detection, and policy-aware response filters for safer customer interactions.",
  },
  {
    icon: UserRound,
    title: "Human Handoff",
    description:
      "Escalate to live agents with full transcript and context transfer whenever confidence or intent thresholds are met.",
  },
  {
    icon: Activity,
    title: "Observability",
    description:
      "Track quality, latency, tool usage, and resolution outcomes with trace-level monitoring and analytics.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Deployment",
    description:
      "Containerized architecture with elastic scaling, cost controls, and deployment options across major cloud providers.",
  },
  {
    icon: PhoneOutgoing,
    title: "API-First Call Triggering",
    description:
      "Start AI calls programmatically through APIs for campaigns, reminders, collections, and proactive support.",
  },
]

const outcomes = [
  "24/7 customer availability without increasing support headcount",
  "Faster first-response and shorter average handling time",
  "Consistent call quality with repeatable compliance controls",
  "Higher closure rates for low-to-mid complexity support queries",
  "Actionable call intelligence for operations and QA teams",
]

const useCases = [
  "Insurance claims intake and policy support",
  "IT service desk triage and troubleshooting",
  "Collections, payment reminders, and account updates",
  "Appointment booking, reminders, and status calls",
  "Order verification, feedback collection, and customer care",
]

const deliveryModel = [
  {
    title: "Discovery (Week 1)",
    description:
      "Conversation design, KPI alignment, call-flow mapping, and compliance guardrail planning.",
  },
  {
    title: "Pilot (Weeks 2-4)",
    description:
      "Domain grounding, integration setup, agent prompt tuning, and limited production traffic rollout.",
  },
  {
    title: "Scale (Weeks 5+)",
    description:
      "Performance optimization, automation expansion, multilingual rollout, and enterprise monitoring.",
  },
]

const architectureLayers = [
  "Telephony gateway for inbound and outbound call control",
  "Speech-to-text and text-to-speech pipeline for natural voice interactions",
  "Fast and high-quality LLM routing for response quality and cost control",
  "RAG-backed knowledge retrieval from internal documentation",
  "Conversation and case storage for historical context and reporting",
  "Queue and event processing for resilient async operations",
  "Cache layer to reduce latency for repeat lookups",
  "Tracing, metrics, and quality dashboards for observability",
]

export default function CallCenterAIPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-[#0a0a0a] dark:via-[#0d1622] dark:to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/50 bg-white/80 dark:bg-[#0f1725] px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
              <PhoneCall className="h-4 w-4" />
              XAGI Labs Business Offering
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Call Center AI by XAGI Labs
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Enterprise-grade AI call center platform for inbound support, outbound campaigns, and automated case
              handling. We design, deploy, and optimize your voice operations with realtime conversational AI,
              structured data capture, human fallback, and full observability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0f16] p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Outcomes</h2>
              <ul className="space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">High-Impact Use Cases</h2>
              <ul className="space-y-3">
                {useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Delivery Approach</h2>
              <div className="space-y-5">
                {deliveryModel.map((phase) => (
                  <div key={phase.title}>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{phase.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Reference Architecture We Productize</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This offering is built on a proven open-source call-center pattern and hardened by XAGI Labs for
              enterprise rollout, integration depth, and production operations.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {architectureLayers.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
              Technical reference:{" "}
              <a
                href="https://github.com/microsoft/call-center-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                call-center-ai open-source project
              </a>
              . XAGI Labs delivers customization, deployment, integrations, and managed operations as a commercial
              offering.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Launch Your AI Call Center with XAGI Labs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              From design to production operations, we partner with your team to deploy a measurable, secure, and
              scalable call center AI system.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Talk to Our Team
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

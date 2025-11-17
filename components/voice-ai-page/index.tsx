"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import {
  ArrowRight,
  Phone,
  Globe,
  Zap,
  Users,
  Code,
  Workflow,
  Brain,
  Shield,
  Building2,
  ShoppingCart,
  GraduationCap,
  Heart,
  Hotel,
  Mic,
  MessageSquare,
  CheckCircle2,
  Quote,
  ExternalLink,
} from "lucide-react"

const useCases = [
  {
    id: "ecommerce",
    title: "Ecommerce",
    icon: ShoppingCart,
    description:
      "Boost your D2C and ecommerce sales by automating cart recovery calls, confirming Cash on Delivery (COD) orders in real-time, and gathering customer feedback surveys with a natural, conversational agent.",
  },
  {
    id: "bfsi",
    title: "BFSI",
    icon: Building2,
    description:
      "Transform your BFSI operations. Deploy compliant, secure voice agents for intelligent revenue recovery, automated collections reminders, and high-volume lead qualification for loans, insurance, and credit cards.",
  },
  {
    id: "edtech",
    title: "EdTech",
    icon: GraduationCap,
    description:
      "Improve the student lifecycle for your EdTech platform. Handle mass inbound admission queries 24/7, send automated admission reminders and fee alerts, and collect valuable student feedback at scale.",
  },
  {
    id: "healthtech",
    title: "Health Tech",
    icon: Heart,
    description:
      "Enhance patient experience in Health Tech. Automate appointment booking and reminders, securely deliver test reports and pre-op instructions, and manage post-consultation patient follow-ups, all with complete privacy.",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: Hotel,
    description:
      "Streamline hospitality management. Manage restaurant and hotel reservations, send instant booking confirmations via calls, and provide 24/7 multilingual guest support for FAQs and service requests.",
  },
]

const features = [
  {
    icon: Phone,
    title: "Bulk Calling at Scale",
    description:
      "Run simultaneous outbound campaigns to thousands or millions of contacts for marketing, alerts, or surveys without worrying about concurrency.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description:
      "Our agents understand interruptions, pauses, and context shifts, replying with <300ms latency for a truly fluid, human-like dialogue.",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description:
      "Converse fluently in 10+ Indian and Foreign Languages. Our models are deeply trained on regional dialects and mixed-language Hinglish.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description:
      "Set up intelligent triggers to seamlessly transfer a complex query or a high-value customer to a real agent instantly, with the full call context.",
  },
  {
    icon: Code,
    title: "Custom API Triggers",
    description:
      "Connect your agent to any external database or tool. Call external APIs in real-time during a live conversation to fetch data, update a CRM, or trigger an action.",
  },
  {
    icon: Workflow,
    title: "Workflow Integration",
    description:
      "Get started in minutes with no-code integrations for Zapier, Make.com, n8n, and connect to your existing CRM or help-desk software.",
  },
  {
    icon: Brain,
    title: "Connect Any Model",
    description:
      "Bring your own models or choose from our integrated library of 20+ best-in-class ASR, LLM, and hyper-realistic Text-to-Speech (TTS) models.",
  },
  {
    icon: Building2,
    title: "Enterprise Plans",
    description:
      "Get best-in-class pricing for high-volume calling, dedicated support, and white-glove, Forward Deployed service for mission-critical applications.",
  },
  {
    icon: Shield,
    title: "100% Data Privacy",
    description:
      "Ensure total compliance with India/USA specific data residency options and on-premise deployment for maximum security and control.",
  },
]

const integrations = [
  "Twilio",
  "Plivo",
  "Zapier",
  "Make.com",
  "n8n",
  "Salesforce",
  "HubSpot",
  "Freshworks",
  "Zoho",
  "Exotel",
]

export default function VoiceAIPage() {
  const [activeUseCase, setActiveUseCase] = useState("ecommerce")
  const activeCase = useCases.find((uc) => uc.id === activeUseCase)

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-[#0a0a0a] dark:to-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mic className="w-4 h-4" />
              From xAGI Labs
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Voice AI, Built for India.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Powering India&apos;s businesses with autonomous{" "}
              <strong className="text-gray-900 dark:text-white">XAGI voice agents</strong> for end-to-end customer
              service, outbound sales, recruitment, and more. Handle thousands of inbound and outbound calls every
              minute with natural, fluid, and{" "}
              <strong className="text-gray-900 dark:text-white">multilingual intelligence</strong> that truly
              understands the Indian consumer.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Social Proof */}
            <div className="mt-12 inline-flex items-center gap-3 bg-white dark:bg-gray-900 px-6 py-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  India&apos;s most promising startups of 2025
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">YourStory Tech30 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-4">
                INTRODUCING XAGI voice
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Seamlessly Build, Test, Deploy, and Scale Conversational XAGI voice Agents.
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Go from a simple idea to a fully functional, autonomous AI voice agent in{" "}
                <strong>minutes, not weeks.</strong> XAGI voice provides the complete platform for both developers and
                business teams to create, test, and deploy intelligent, human-like voice bots.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Whether you use our intuitive <strong>no-code platform</strong> or integrate our{" "}
                <strong>powerful APIs</strong>, you can build agents that automate complex workflows, understand
                context, and drive real business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Agents That Do More Than Talk
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Create XAGI voice agents for India that do more than just talk—they understand, adapt, and act. Our
                agents comprehend complex context, regional accents, and speak multiple Indian languages including{" "}
                <strong className="text-gray-900 dark:text-white">
                  Hindi, Tamil, Telugu, Bengali, Marathi, &amp; Hinglish.
                </strong>
              </p>
            </div>

            {/* Use Case Tabs */}
            <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-800">
                {useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveUseCase(useCase.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                      activeUseCase === useCase.id
                        ? "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-b-2 border-purple-600"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
                    }`}
                  >
                    <useCase.icon className="w-4 h-4" />
                    {useCase.title}
                  </button>
                ))}
              </div>
              <div className="p-8">
                {activeCase && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <activeCase.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{activeCase.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {activeCase.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Everything You Need to Scale Voice AI
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                With integrated speech recognition (ASR), large language models (LLMs), and cloud telephony APIs, XAGI
                voice provides a comprehensive, end-to-end toolkit to move from idea to live deployment quickly and
                securely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted by Leading Institutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                See how Pratham Institute of Technology leverages XAGI voice to automate their admissions process and
                improve student engagement.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Pratham Institute of Technology
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg italic leading-relaxed">
                    &ldquo;XAGI voice transformed our admissions outreach. We were able to qualify thousands of student
                    leads in days, not months, and provide 24/7 support for their queries, which was impossible with
                    our human team.&rdquo;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-1">40,000+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Student Leads Contacted</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-1">92%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Admission Query Automation</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-1">24/7</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Availability</p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  Read Full Story
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Effortlessly Integrate with Your Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              XAGI voice works hand-in-hand with the leading platforms you already use. Plug our voice AI into your
              existing CRM, telephony provider, and workflow tools to scale without friction. Connect to{" "}
              <strong className="text-gray-900 dark:text-white">
                Twilio, Plivo, Salesforce, HubSpot, Zapier,
              </strong>{" "}
              and more in minutes.
            </p>

            {/* Integration Logos */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {integrations.map((integration) => (
                <div
                  key={integration}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-900 rounded-lg text-gray-700 dark:text-gray-300 font-medium"
                >
                  {integration}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              View all Integrations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-900 dark:to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build Smarter Voice Agents?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Connect with our team for a personalized demo and see how XAGI voice can automate your customer support,
              supercharge your sales, or streamline your recruitment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-purple-100 transition-colors"
              >
                Or, explore our API Documentation
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

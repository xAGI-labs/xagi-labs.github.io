"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { ArrowRight, Check, Brain, TrendingUp, Users, Target, Shield, Rocket, UserCheck, MessageSquare } from "lucide-react"

export default function AiCtoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm mb-6">
              <Rocket className="h-4 w-4 mr-2" />
              Scale AI-First Teams
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Deploy Technical CTOs to <span className="text-blue-600 dark:text-blue-400">Rapidly Scale</span> AI Teams
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Bridge the execution gap with world-class technical leadership. We embed senior AI CTOs to build, structure, and scale your engineering capabilities from Day 1.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Find Your AI Leader
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Execution Gap</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                In the race to leverage AI and automation, companies face a massive challenge: they need world-class AI Python teams but lack the technical leadership to build them efficiently.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4 mt-1">
                    <Target className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Stalled Strategy</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">AI strategy is often stalled by fragmented technical execution and lack of clear direction.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4 mt-1">
                    <Users className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hiring Struggles</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Companies struggle to hire and structure high-performance Python/AI teams without strong guidance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4 mt-1">
                    <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Lack of Frameworks</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Engineers need architecture, operational frameworks, and mentorship to be effective.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-[#111111] p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6">The Solution: Drop-In Technical CTOs</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                We embed senior technical CTOs — with deep AI and Python experience — into your company as immediate technical accelerators.
              </p>
              <div className="space-y-4">
                <BenefitRow text="Architect scalable Python + AI systems from Day 1" />
                <BenefitRow text="Establish hiring pipelines for top talent" />
                <BenefitRow text="Mentor and guide engineers for rapid velocity" />
                <BenefitRow text="Implement DevOps, MLOps, and code standards" />
                <BenefitRow text="Translate business goals into AI deliverables" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">3x</div>
              <p className="text-lg opacity-90">Faster team ramp-up vs hiring engineers first</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">Weeks</div>
              <p className="text-lg opacity-90">To deliver initial AI prototypes (not quarters)</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0 → 50+</div>
              <p className="text-lg opacity-90">Scalable engineering headcount capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Who Needs This?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<Rocket className="h-8 w-8 text-blue-600" />}
              title="Startups & Scale Ups"
              description="Post-funding companies needing to go from 0 → 50+ engineers rapidly while maintaining quality."
            />
            <Card
              icon={<Target className="h-8 w-8 text-purple-600" />}
              title="Enterprises"
              description="Organizations with pilot AI projects that need to scale into production-grade systems."
            />
            <Card
              icon={<TrendingUp className="h-8 w-8 text-green-600" />}
              title="Idea to Execution"
              description="Companies stuck between concept and delivery, needing technical leadership to bridge the gap."
            />
          </div>

          <div className="mt-16 text-center">
            <blockquote className="text-2xl font-medium italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
              "You don't scale by hiring engineers first — you scale by installing leaders who know what to build, how to build it, and who to help you hire."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTO Profile */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Typical CTO Profile</h2>
          <div className="flex flex-col md:flex-row gap-8 bg-gray-50 dark:bg-[#111111] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <div className="md:w-1/3 bg-gray-200 dark:bg-gray-800 min-h-[300px] flex items-center justify-center">
              <UserCheck className="h-32 w-32 text-gray-400" />
            </div>
            <div className="p-8 md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Hands-on Tech Leader | Full-Stack & AI Architect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Proven leader with deep expertise in Python, Node.js, Go, and frameworks like Django, FastAPI. Built and scaled cloud-native SaaS on AWS, GCP, Azure, using microservices and event-driven design.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">AI Expertise:</span> Hands-on in LLMs, agentic AI, and tools like OpenAI, Vertex AI, Bedrock, and SageMaker.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Leadership:</span> Led teams, mentored engineers, and delivered production systems serving thousands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 relative">
            <MessageSquare className="absolute top-8 right-8 h-12 w-12 text-gray-100 dark:text-gray-800" />
            <div className="mb-6">
               <h3 className="text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">Recent Success Story</h3>
               <h4 className="text-xl font-semibold">Supporting FinScale's CIO Search</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              "We recently worked with xAGI Labs to support us in the search for a Chief Information Officer (CIO), and I'm pleased to say the experience was excellent from start to finish. From the outset, the team demonstrated a clear understanding of our needs. They provided high-quality candidates and supported us throughout the entire process. Communication was seamless, and their attention to detail contributed significantly to a successful appointment."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center font-bold text-blue-700 dark:text-blue-300 mr-4">
                JP
              </div>
              <div>
                <div className="font-bold">Jennifer Park</div>
                <div className="text-sm text-gray-500">Chief Operating Officer, FinScale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Scale Your AI Team?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Don't just hire engineers—install the leadership they need to succeed. Book a consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function BenefitRow({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <Check className="h-5 w-5 mr-3 mt-0.5 text-green-600 flex-shrink-0" />
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  )
}

function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

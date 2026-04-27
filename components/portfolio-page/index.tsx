"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { Users, TrendingUp, Award, Zap, BarChart, ArrowRight } from "lucide-react"
import { BOOKING_URL } from "@/lib/booking"

export default function PortfolioPage() {
  const projects = [
    {
      name: "FavcyNavigator",
      tagline: "AI-Powered Business Co-Pilot",
      description: "Your intelligent assistant for startup operations—automating workflows, analyzing data, and providing actionable insights.",
      users: "10,000+",
      tech: "OpenAI GPT-4, LangChain, React, FastAPI",
      impact: "Reduced operational overhead by 40% for early-stage startups",
      timeline: "10 weeks from concept to launch",
      icon: Users
    },
    {
      name: "StartupNalanda",
      tagline: "AI Course Generation Platform",
      description: "Create comprehensive e-learning courses from simple prompts—democratizing educational content creation.",
      users: "5,000+ courses created",
      tech: "Anthropic Claude 3.5 Sonnet, Next.js, PostgreSQL",
      impact: "$50K+ revenue generated for creators • 92% course completion rate",
      timeline: "8 weeks from concept to launch",
      icon: TrendingUp
    },
    {
      name: "Likeo",
      tagline: "Virtual Fitting Rooms • Acquired ✨",
      description: "AI-powered try-on technology that reduced return rates by 35% for fashion retailers.",
      users: "50,000+ users before acquisition",
      tech: "Computer Vision, TensorFlow, React Native",
      impact: "35% reduction in return rates • Successfully acquired by leading e-commerce platform",
      timeline: "16 weeks + 6 months growth phase",
      icon: Award,
      acquired: true
    },
    {
      name: "PitchPerfect",
      tagline: "AI Startup Pitch Analyzer",
      description: "AI tool that analyzes startup pitches against proven frameworks, providing detailed feedback on structure, messaging, and investor appeal.",
      users: "10,000+ pitches analyzed",
      tech: "GPT-4 Turbo, React, Node.js, MongoDB",
      impact: "78% improvement in pitch clarity • $15M+ raised by users",
      timeline: "6 weeks from concept to launch",
      icon: BarChart
    },
    {
      name: "Polyclone.xyz",
      tagline: "Copy Trading for Polymarket",
      description: "Built a copy-trading platform that monitors top Polymarket traders and automatically replicates their positions.",
      users: "500+ beta users",
      tech: "Python, FastAPI, Polymarket API, React",
      impact: "$100K+ volume traded • 15% average returns",
      timeline: "12 weeks including beta testing",
      icon: Zap
    },
    {
      name: "Gamenzo",
      tagline: "Voice-to-Game Creation",
      description: "Platform where users describe games via voice commands and AI generates playable browser-based games instantly.",
      users: "1,000+ games created",
      tech: "Whisper, GPT-4, JavaScript game engine, WebGL",
      impact: "Viral on Twitter (50K impressions)",
      timeline: "8 weeks from idea to launch",
      icon: Users
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Product Case Studies</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how xAGI Labs ships AI products, automation systems, and revenue-driving tools in weeks, not quarters.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
              >
                Book a Strategy Call
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-8 py-4 font-semibold transition-colors hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Icon className="h-8 w-8 mr-4 text-blue-600" />
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-3xl font-bold">{project.name}</h3>
                          {project.acquired && (
                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 text-sm font-semibold rounded-full">
                              Acquired
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{project.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Metrics</h4>
                      <p className="text-gray-600 dark:text-gray-400">{project.users}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Timeline</h4>
                      <p className="text-gray-600 dark:text-gray-400">{project.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tech Stack</h4>
                      <p className="text-gray-600 dark:text-gray-400">{project.tech}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Impact</h4>
                      <p className="text-gray-600 dark:text-gray-400">{project.impact}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Results That Matter</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Total Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$550K+</div>
              <div className="text-gray-600 dark:text-gray-400">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-400">Successful Acquisition</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">9</div>
              <div className="text-gray-600 dark:text-gray-400">Products Launched</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$15M+</div>
              <div className="text-gray-600 dark:text-gray-400">Funding Raised by Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">4-6</div>
              <div className="text-gray-600 dark:text-gray-400">Weeks Avg Prototype Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Product?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Book a strategy call to map the fastest route from idea to shipped AI product.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-black px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

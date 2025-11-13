"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, Zap, Rocket, Users, TrendingUp, Award } from "lucide-react"
import ThemeToggle from "../landing-page/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/xagi-icon.png" alt="xAGI Labs" width={32} height={32} />
              <span className="text-xl font-bold">xAGI Labs</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/tutor" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                AI Tutor
              </Link>
              <Link href="/services" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Portfolio
              </Link>
              <Link href="/team" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Team
              </Link>
              <Link href="/process" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Process
              </Link>
              {/* <Link href="/pricing" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Pricing
              </Link> */}
              <Link
                href="/contact"
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Contact
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight pb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Transform Your Vision into Intelligence-First Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Partner with an AI-native development team to build the future of your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                Book Your Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-600 transition-colors inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We build production-ready AI systems that create measurable business value—from intelligent automation to fully autonomous AI agents.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
              <Brain className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-3">AI Strategy & Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Define your AI capability, design intelligent systems, and architect solutions that create lasting competitive advantage
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
              <Zap className="h-12 w-12 mb-4 text-yellow-600" />
              <h3 className="text-2xl font-bold mb-3">Rapid AI Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full-stack AI applications with modern frameworks, LLMs, and agentic systems—from prototype to production in weeks
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
              <Rocket className="h-12 w-12 mb-4 text-purple-600" />
              <h3 className="text-2xl font-bold mb-3">Intelligence Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Embed AI agents, workflows, and automation into your existing products and operations
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-lg font-semibold hover:underline"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Users Across Our Products</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">9+</div>
              <div className="text-gray-600 dark:text-gray-400">AI Products Launched</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">4-6</div>
              <div className="text-gray-600 dark:text-gray-400">Weeks Prototype to Production</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-400">Successful Acquisition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">FavcyNavigator</h3>
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">AI-Powered Business Co-Pilot • 10,000+ Users</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Your intelligent assistant for startup operations—automating workflows, analyzing data, and providing actionable insights.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Tech Stack:</strong> OpenAI GPT-4, LangChain, React, FastAPI
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Impact:</strong> Reduced operational overhead by 40% for early-stage startups
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">StartupNalanda</h3>
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">AI Course Generation Platform • 5,000+ Courses</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Create comprehensive e-learning courses from simple prompts—democratizing educational content creation.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Tech Stack:</strong> Anthropic Claude, Next.js, PostgreSQL
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Impact:</strong> Generated $50K+ in revenue for course creators
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Likeo</h3>
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Virtual Fitting Rooms • Acquired ✨</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  AI-powered try-on technology that reduced return rates by 35% for fashion retailers.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Tech Stack:</strong> Computer Vision, TensorFlow, React Native
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Outcome:</strong> Successfully acquired by a leading e-commerce platform
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-lg font-semibold hover:underline"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Intelligence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're exploring AI opportunities or ready to build, we're here to help you move from vision to production-ready AI systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/xagi-icon.png" alt="xAGI Labs" width={32} height={32} />
                <span className="text-xl font-bold">xAGI Labs</span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Building the Intelligence Layer for Modern Business
              </p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>Email: saurav@xagi.in</p>
              <p>Location: San Francisco, CA</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
            © 2025 xAGI Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

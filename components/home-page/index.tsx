"use client"

import Link from "next/link"
import { ArrowRight, Brain, Zap, Rocket, Users, TrendingUp, Award, Gamepad2, Mic, Newspaper, BookOpen } from "lucide-react"
import Header from "../shared/header"
import Footer from "../shared/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight pb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              AI/ML and Platform Engineering Consulting That Ships
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              xAGI Labs helps teams design, build, deploy, and harden AI systems. We work across applied ML,
              agent workflows, voice AI, data and platform engineering, and production rollout.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              If you need execution depth rather than a slide deck, we pair with your product, GTM, or operations
              leads and ship systems you can run after the engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0a0a0a]/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl font-bold">Trending Now</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Silicon Halli */}
            <Link
              href="/siliconhalli"
              className="group block p-6 bg-white dark:bg-[#111111] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Gamepad2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Silicon Halli
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Build your startup empire in Bangalore. Play our popular strategy simulation game.
              </p>
            </Link>

            {/* xAGI Voice */}
            <Link
              href="/voice-ai"
              className="group block p-6 bg-white dark:bg-[#111111] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Mic className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                xAGI Voice
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Production voice AI systems for support, intake, outbound workflows, and multilingual call operations.
              </p>
            </Link>

            {/* AI News */}
            <Link
              href="/ai-news"
              className="group block p-6 bg-white dark:bg-[#111111] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Newspaper className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                AI News
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Curated daily updates on Artificial Intelligence, LLMs, and tech breakthroughs.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-14 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300 mb-3">
              New from xAGI Labs
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              OpenClaw Guide (2026)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A detailed implementation playbook for OpenClaw, including deployment choices, model-provider
              strategy, security hardening, and a 7-day launch checklist.
            </p>
            <Link
              href="/blog/openclaw-guide-2026"
              className="inline-flex items-center font-semibold text-blue-700 dark:text-blue-300 hover:underline"
            >
              Read the complete guide
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Use cases & kickoff — depth for SEO / intent */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Use cases we ship most often</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            These are representative problems. Each engagement is scoped to your stack, compliance needs, and how your team works.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-[#0a0a0a]">
              <h3 className="text-xl font-bold mb-2">Voice AI and contact centers</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Inbound and outbound voice with human handoff, call summaries, CRM writes, and guardrails for regulated or high-stakes flows.
              </p>
              <Link href="/voice-ai" className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Voice AI offering
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-[#0a0a0a]">
              <h3 className="text-xl font-bold mb-2">GTM research and outbound quality</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Account-level research, ICP filtering, and personalized outreach across email and LinkedIn when you care about reply quality over blast volume.
              </p>
              <Link href="/autoclaw" className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                xAGI AutoClaw product
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-[#0a0a0a]">
              <h3 className="text-xl font-bold mb-2">Agents, tools, and workflow automation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Orchestration, tool use, evaluations, and production deployment patterns for internal copilots and customer-facing assistants.
              </p>
              <Link href="/openclaw-deployment-security" className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Deployment and security
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-[#0a0a0a]">
              <h3 className="text-xl font-bold mb-2">Cost and quality for high-volume LLM workloads</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Fine-tuning and routing strategies that cut token spend while keeping output quality acceptable for your product surface.
              </p>
              <Link href="/token-save" className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Token Save
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-gray-50 dark:bg-[#111111]">
            <h2 className="text-2xl font-bold mb-4 text-center">How an engagement usually starts</h2>
            <ol className="max-w-2xl mx-auto space-y-3 text-gray-600 dark:text-gray-400 list-decimal list-inside">
              <li>A short discovery call to align on workflows, constraints, and success metrics.</li>
              <li>A focused technical review of data, APIs, and rollout boundaries.</li>
              <li>A written proposal with milestones, deliverables, and a realistic timeline.</li>
            </ol>
            <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
              <Link href="/process" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                See the full delivery process
              </Link>
              {" · "}
              <Link href="/contact" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Book a strategy session
              </Link>
            </p>
          </div>

          <div className="mt-14">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Guides and deep dives</h2>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Long-form writeups our team publishes for implementation-minded readers.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/blog/openclaw-for-gtm"
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                OpenClaw for GTM
              </Link>
              <Link
                href="/blog/from-vapi-to-livekit-hard-won-lessons-building-production-voice-ai-agents"
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                Production voice AI lessons
              </Link>
              <Link
                href="/ai-sdr-alternatives"
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                AI SDR alternatives
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                All posts
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
              We are a consulting partner for AI/ML and platform engineering work. That includes system design,
              platform architecture, model behavior, workflow automation, rollout planning, and the engineering work
              required to make AI useful in production.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
              <Brain className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-3">AI Strategy & Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clarify where AI creates leverage, choose the right architecture, and define a delivery path that can survive contact with production.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
              <Zap className="h-12 w-12 mb-4 text-yellow-600" />
              <h3 className="text-2xl font-bold mb-3">Rapid AI Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build applied ML systems, agent workflows, and product features from prototype to production with the surrounding platform work included.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
              <Rocket className="h-12 w-12 mb-4 text-purple-600" />
              <h3 className="text-2xl font-bold mb-3">Intelligence Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Integrate AI into existing products, operations, and data systems with observability, controls, and rollout plans.
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

      {/* Who We Help */}
      <section className="py-20 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Help</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                xAGI Labs works best with teams that already know AI matters and need a partner who can turn
                that urgency into reliable systems, measurable workflow improvements, and products that hold up in
                production.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-8">
                <h3 className="text-2xl font-bold mb-3">Founders and GTM Teams</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5">
                  Teams building AI features or modernizing growth workflows use xAGI when they need both applied AI
                  thinking and real engineering delivery. AutoClaw is xAGI&apos;s own GTM product—one toolchain we can deploy,
                  customize, and integrate into broader consulting engagements.
                </p>
                <Link href="/autoclaw" className="inline-flex items-center font-semibold hover:underline">
                  About xAGI AutoClaw
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-8">
                <h3 className="text-2xl font-bold mb-3">Operations and Support Leaders</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5">
                  Companies modernizing voice workflows, collections, support, or intake use xAGI to design voice AI
                  systems with human handoff, structured data capture, observability, and multilingual support.
                </p>
                <Link href="/call-center-ai" className="inline-flex items-center font-semibold hover:underline">
                  Explore Call Center AI
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-8">
                <h3 className="text-2xl font-bold mb-3">Product and Engineering Teams</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5">
                  Teams that need ML systems, agent platforms, data and platform engineering, or production hardening
                  use xAGI as an execution-heavy consulting partner for architecture, integrations, deployment, and
                  iteration after launch.
                </p>
                <Link href="/services" className="inline-flex items-center font-semibold hover:underline">
                  Review Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
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

      {/* Why xAGI */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Teams Choose xAGI</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                The common thread across xAGI consulting engagements is practical execution. We do not stop at a
                strategy deck, model demo, or benchmark screenshot. We help teams decide what to build, ship the
                first useful system, and improve it with real production feedback.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
                <h3 className="text-2xl font-bold mb-4">Execution With Business Context</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We work across product, growth, and operations use cases, so architecture decisions are tied to actual
                  user workflows, target metrics, and rollout constraints rather than abstract AI trends.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  That means prioritizing the workflow that creates leverage first, whether that is account research,
                  voice automation, retrieval quality, prompt reliability, or operational observability.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
                <h3 className="text-2xl font-bold mb-4">Systems Built for Production</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our work usually includes instrumentation, fallback paths, deployment guidance, and runbooks so teams
                  can operate what gets shipped instead of rewriting it later.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  If you want implementation depth, start with our <Link href="/process" className="font-semibold hover:underline">delivery process</Link> or read the <Link href="/blog/openclaw-guide-2026" className="font-semibold hover:underline">OpenClaw Guide</Link> to see the level of detail we bias toward.
                </p>
              </div>
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
              Whether you need AI/ML consulting, platform engineering, or a partner to ship a production system,
              we help teams move from ambiguity to something that works in the real world.
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

      <Footer />
    </div>
  )
}

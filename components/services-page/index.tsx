"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { Brain, Zap, Rocket, Wrench, Bot, Target, TrendingUp, ArrowRight, Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              AI/ML and platform engineering consulting from first architecture decisions through deployment and iteration.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We help teams ship production AI, ML, and platform systems with less ambiguity and more engineering rigor.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our consulting model is built for teams that need more than generic AI advice. We help define the
              business case, choose the right architecture, build the first production-ready version, and instrument
              the system so it can improve after launch. Most engagements combine AI/ML design, application and
              platform engineering, model behavior tuning, and operational rollout support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8 text-left">
            <h2 className="text-2xl font-bold mb-4 text-center">Delivery model</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Most work is scoped as fixed milestones with clear deliverables. Some teams add a light ongoing retainer
              for evaluation, model updates, and incident support after launch. We align billing to outcomes and
              checkpoints rather than open-ended hours.
            </p>
            <h3 className="text-lg font-semibold mb-2">Ideal customer profiles</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We work best with startups and growth-stage companies that have product-market traction, and with larger
              teams that own a specific workflow (support, GTM, risk, or internal ops) and need a partner who can code,
              integrate, and document—not only advise.
            </p>
            <h3 className="text-lg font-semibold mb-2">Technology stack</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Typical stacks include TypeScript and Node or Python services, React or Next.js frontends, major LLM and
              speech APIs, vector and relational databases, queue workers, and cloud or VPC deployment. We meet your
              existing standards for CI, secrets, and observability instead of imposing a greenfield pattern.
            </p>
            <h3 className="text-lg font-semibold mb-2">Expected outcomes</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>A documented architecture and threat model for the AI surface you are shipping.</li>
              <li>Working integrations, evaluations, and dashboards so you can measure quality and cost.</li>
              <li>Runbooks and handoff so your engineers can operate and extend the system.</li>
            </ul>
          </div>

          <h2 className="text-4xl font-bold mb-16 text-center">Service Offerings</h2>

          <div className="mb-16 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Capability Spotlight: Call Center AI</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
                  We design and deploy production-ready AI contact center systems for inbound and outbound voice
                  operations, structured case capture, multilingual conversations, human handoff, and real-time monitoring.
                </p>
                <p className="text-gray-600 dark:text-gray-400 max-w-3xl mt-3">
                  This is one example of the implementation-heavy consulting work we do for teams that need workflow
                  automation, system integration, evaluation, and controlled rollout in high-volume operations.
                </p>
              </div>
              <Link
                href="/call-center-ai"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Call Center AI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mb-16 grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Built Around Outcomes</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We scope work around throughput, quality, response times, cost control, conversion, and operational
                  leverage rather than vague “AI transformation” language.
                </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
              <Bot className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Execution Across the Stack</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Engagements often combine model work, application and platform engineering, workflow automation,
                  observability, and deployment strategy instead of isolating them into separate vendors.
                </p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
              <Rocket className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Designed for Rollout</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We include implementation planning, testing, rollout sequencing, and post-launch iteration so the
                system can survive contact with real users and real teams.
              </p>
            </div>
          </div>

          {/* AI Strategy & Consulting */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Brain className="h-10 w-10 mr-4 text-blue-600" />
              <h3 className="text-3xl font-bold">AI Strategy & Consulting</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">What You Get:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> AI Opportunity Assessment</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Technical Feasibility Analysis</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Competitive AI Landscape Review</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> ROI Projections & Business Case</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Technology Stack Recommendations</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Risk Assessment & Mitigation Strategy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                  <li>• Companies exploring AI adoption</li>
                  <li>• Teams evaluating build vs buy decisions</li>
                  <li>• Organizations assessing AI and platform readiness</li>
                  <li>• Startups seeking technical validation</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 2-4 weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Prototype Development */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Zap className="h-10 w-10 mr-4 text-yellow-600" />
              <h3 className="text-3xl font-bold">Applied AI Prototype Development</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">What You Get:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Functional AI prototype (4-6 weeks)</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Core feature implementation</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> User interface design</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Technical architecture documentation</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Testing & validation</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Deployment on staging environment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                  <li>• Startups validating product-market fit</li>
                  <li>• Companies testing AI and ML use cases</li>
                  <li>• Teams seeking investor or customer demonstrations</li>
                  <li>• Organizations piloting new capabilities before platform rollout</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 4-6 weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full AI Product Development */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Rocket className="h-10 w-10 mr-4 text-purple-600" />
              <h3 className="text-3xl font-bold">AI Product and Platform Delivery</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">What You Get:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Complete AI application development</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Advanced AI capabilities (RAG, fine-tuning, agents)</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Production-grade infrastructure</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> UI/UX design & implementation</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> API development & integrations</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Testing, deployment, & monitoring</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Documentation & training</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> 3 months post-launch support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                  <li>• Companies building AI products</li>
                  <li>• Enterprises modernizing workflows with AI and platform upgrades</li>
                  <li>• Startups ready for production launch</li>
                  <li>• Teams replacing brittle or legacy systems</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 12-16 weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Integration & Enhancement */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Wrench className="h-10 w-10 mr-4 text-green-600" />
              <h3 className="text-3xl font-bold">Platform Integration and Enhancement</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">What You Get:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> AI and platform capability assessment of existing products</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Integration strategy & roadmap</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Custom AI feature development</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> API & system integrations</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Performance optimization</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Team training & knowledge transfer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                  <li>• Companies with existing products</li>
                  <li>• Teams adding AI capabilities</li>
                  <li>• Organizations modernizing platform and data stacks</li>
                  <li>• Platforms building AI features</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 6-10 weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Agent Development */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Bot className="h-10 w-10 mr-4 text-red-600" />
              <h3 className="text-3xl font-bold">Agent Systems and Workflow Automation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">What You Get:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Custom autonomous AI agents</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Multi-agent system architecture</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Tool & API integrations</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Workflow automation</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Agent orchestration & coordination</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Monitoring & optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                  <li>• Companies automating complex workflows</li>
                  <li>• Teams building AI assistants</li>
                  <li>• Organizations scaling internal operations</li>
                  <li>• Platforms requiring reliable intelligent automation</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 8-12 weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Model Fine-Tuning */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Target className="h-10 w-10 mr-4 text-orange-600" />
              <h3 className="text-3xl font-bold">Model Tuning, Evaluation, and Cost Optimization</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">What You Get:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Custom model training & fine-tuning</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Domain-specific optimization</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Performance benchmarking</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Cost optimization strategies</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Model evaluation & testing</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Deployment & monitoring setup</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                  <li>• Companies needing specialized AI behavior</li>
                  <li>• Teams optimizing quality, latency, and reliability</li>
                  <li>• Organizations reducing model and inference costs</li>
                  <li>• Products requiring domain expertise</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 4-8 weeks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
            <h3 className="text-3xl font-bold mb-6">How Engagements Usually Work</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">1. Diagnose</p>
                <p className="text-gray-600 dark:text-gray-400">
                  We review workflows, user journeys, data inputs, system constraints, and target outcomes.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">2. Design</p>
                <p className="text-gray-600 dark:text-gray-400">
                  We choose architecture, models, integration points, fallback behavior, and rollout boundaries.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">3. Ship</p>
                <p className="text-gray-600 dark:text-gray-400">
                  We implement, test, instrument, and deploy the first production-ready system or pilot.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">4. Improve</p>
                <p className="text-gray-600 dark:text-gray-400">
                  We use real usage data to refine quality, latency, costs, escalation logic, and team workflows.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/process" className="inline-flex items-center font-semibold hover:underline">
                See the full delivery process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* OpenClaw Enterprise Deployment */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Bot className="h-10 w-10 mr-4 text-indigo-600" />
              <h3 className="text-3xl font-bold">OpenClaw deployment &amp; xAGI AutoClaw</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">What You Get:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Enterprise OpenClaw architecture and deployment plan</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Cloud, private VPC, or on-prem setup with security hardening</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Model routing, tool orchestration, and workflow implementation</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Monitoring, evaluation dashboards, and incident playbooks</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Team onboarding, SOPs, and post-launch optimization support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                  <li>• Enterprises adopting self-hosted AI agent infrastructure</li>
                  <li>• Regulated teams requiring privacy, auditability, and control</li>
                  <li>• Product organizations moving from managed tools to owned stack</li>
                  <li>• Teams scaling multi-channel agent operations reliably</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 6-12 weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Agentic Result Optimization */}
          <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-10 w-10 mr-4 text-cyan-600" />
              <h3 className="text-3xl font-bold">Agentic Result Optimization for D2C & Growth Teams</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Need details? Explore our dedicated{" "}
              <Link href="/geo" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                GEO Services page
              </Link>
              .
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">What You Get:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> AI discovery strategy to improve presence in ChatGPT and other answer engines</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Structured content architecture for high-intent question clusters</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Technical optimization (schema, llms.txt, crawlability, and citation surfaces)</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> D2C product feed and FAQ optimization for AI-assisted buying journeys</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> Ongoing reporting for visibility, mentions, and conversion impact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                  <li>• D2C brands that want more qualified AI-assisted discovery traffic</li>
                  <li>• SaaS and service companies expanding visibility beyond classic SEO</li>
                  <li>• Teams competing for top mentions in AI chat recommendations</li>
                  <li>• Marketing teams that need measurable AI channel growth</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 4-10 weeks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-8">
            <h3 className="text-3xl font-bold mb-4">Related xAGI Pages</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you are evaluating a specific capability rather than a general consulting engagement, start with one
              of the deeper implementation pages below.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/autoclaw" className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <h4 className="font-semibold mb-2">xAGI AutoClaw</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">xAGI&apos;s own GTM product for account research and coordinated outreach. We deploy, customize, and integrate it as part of consulting.</p>
              </Link>
              <Link href="/call-center-ai" className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <h4 className="font-semibold mb-2">Call Center AI</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Voice workflows for inbound and outbound operations with human fallback.</p>
              </Link>
              <Link href="/token-save" className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <h4 className="font-semibold mb-2">Token Save</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cost reduction for high-volume AI workloads through open-weight migration.</p>
              </Link>
              <Link href="/blog/openclaw-guide-2026" className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <h4 className="font-semibold mb-2">OpenClaw Guide (2026)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Implementation and deployment details for teams going from pilot to production.</p>
              </Link>
              <Link href="/blog/openclaw-for-gtm" className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <h4 className="font-semibold mb-2">OpenClaw for GTM</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Editorial overview of autonomous GTM workflows and positioning.</p>
              </Link>
              <Link href="/hire-with-xAGI" className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <h4 className="font-semibold mb-2">Hire with xAGI</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Embedded engineering and leadership options when you need capacity, not a slide deck.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Schedule a free consultation to discuss your project and explore how we can help.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              Want the complete roadmap first? Read our{" "}
              <Link
                href="/blog/openclaw-guide-2026"
                className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                OpenClaw Guide (2026)
              </Link>
              .
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

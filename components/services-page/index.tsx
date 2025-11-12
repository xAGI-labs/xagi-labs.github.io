"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { Brain, Zap, Rocket, Wrench, Bot, Target, ArrowRight, Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              End-to-End AI Product Development<br />
              From strategy to deployment, we're your partner in building intelligence-first products.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Service Offerings</h2>

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
                  <li>• Organizations assessing AI readiness</li>
                  <li>• Startups seeking technical validation</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 2-4 weeks</p>
                  <p className="text-2xl font-bold">Starting at $15,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Prototype Development */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Zap className="h-10 w-10 mr-4 text-yellow-600" />
              <h3 className="text-3xl font-bold">AI Prototype Development</h3>
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
                  <li>• Companies testing AI use cases</li>
                  <li>• Teams seeking investor demonstrations</li>
                  <li>• Organizations piloting AI initiatives</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 4-6 weeks</p>
                  <p className="text-2xl font-bold">$25,000 - $50,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full AI Product Development */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Rocket className="h-10 w-10 mr-4 text-purple-600" />
              <h3 className="text-3xl font-bold">Full AI Product Development</h3>
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
                  <li>• Enterprises modernizing with AI</li>
                  <li>• Startups ready for production launch</li>
                  <li>• Teams replacing legacy systems</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 12-16 weeks</p>
                  <p className="text-2xl font-bold">$80,000 - $200,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Integration & Enhancement */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Wrench className="h-10 w-10 mr-4 text-green-600" />
              <h3 className="text-3xl font-bold">AI Integration & Enhancement</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">What You Get:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" /> AI capability assessment of existing products</li>
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
                  <li>• Organizations modernizing tech stacks</li>
                  <li>• Platforms building AI features</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 6-10 weeks</p>
                  <p className="text-2xl font-bold">$40,000 - $100,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Agent Development */}
          <div className="mb-16 bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Bot className="h-10 w-10 mr-4 text-red-600" />
              <h3 className="text-3xl font-bold">AI Agent Development</h3>
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
                  <li>• Organizations scaling operations</li>
                  <li>• Platforms requiring intelligent automation</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 8-12 weeks</p>
                  <p className="text-2xl font-bold">$60,000 - $150,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Model Fine-Tuning */}
          <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-6">
              <Target className="h-10 w-10 mr-4 text-orange-600" />
              <h3 className="text-3xl font-bold">AI Model Fine-Tuning & Optimization</h3>
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
                  <li>• Companies needing specialized AI</li>
                  <li>• Teams optimizing AI performance</li>
                  <li>• Organizations reducing AI costs</li>
                  <li>• Products requiring domain expertise</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Timeline: 4-8 weeks</p>
                  <p className="text-2xl font-bold">$30,000 - $80,000</p>
                </div>
              </div>
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

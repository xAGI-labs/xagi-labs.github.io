"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { ArrowRight, Check, Code, Cloud, Database, Server, Smartphone, Monitor, Shield, Zap, Blocks, Bot } from "lucide-react"

export default function HirePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hire with xAGI</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We are a Software development agency providing skilled AI engineers and developers/teams at a low cost.
            </p>
            <div className="flex justify-center gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium text-sm">
                Contract
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 font-medium text-sm">
                Full Time
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 font-medium text-sm">
                Part Time
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tryout Service - Highlighted */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Risk-Free Trial Period</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Currently, we are offering a 2-4 weeks tryout service. We will move ahead only if you are happy with the developer and wish to continue.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Technology Stack</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <TechCard icon={<Code className="h-8 w-8" />} title="Java" />
            <TechCard icon={<Monitor className="h-8 w-8" />} title=".Net" />
            <TechCard icon={<Zap className="h-8 w-8" />} title="React" />
            <TechCard icon={<Code className="h-8 w-8" />} title="Angular" />
            <TechCard icon={<Smartphone className="h-8 w-8" />} title="React Native" />
            <TechCard icon={<Code className="h-8 w-8" />} title="Python" />
            <TechCard icon={<Server className="h-8 w-8" />} title="DevOps" />
            <TechCard icon={<Cloud className="h-8 w-8" />} title="AWS" />
          </div>
        </div>
      </section>

      {/* Other Solutions */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Enterprise Solutions & More</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <SolutionCard
               title="Enterprise Software"
               items={["IBM Maximo", "Oracle NetSuite", "Odoo"]}
               icon={<Database className="h-10 w-10 text-purple-600" />}
             />
             <SolutionCard
               title="Emerging Tech"
               items={["Blockchain Development", "Smart Contracts", "Web3 Solutions"]}
               icon={<Blocks className="h-10 w-10 text-blue-600" />}
             />
             <SolutionCard
               title="Automation"
               items={["RPA (Robotic Process Automation)", "Business Process Automation", "Workflow Optimization"]}
               icon={<Bot className="h-10 w-10 text-green-600" />}
             />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Team?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Book a meeting with us to discuss your requirements and get matched with the right talent.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Meeting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function TechCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
      <div className="mb-4 text-gray-800 dark:text-gray-200">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  )
}

function SolutionCard({ title, items, icon }: { title: string, items: string[], icon: React.ReactNode }) {
  return (
    <div className="p-8 bg-gray-50 dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-gray-800">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
            <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

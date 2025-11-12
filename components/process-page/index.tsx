"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { Search, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon, ArrowRight, Clock, Users, MessageSquare } from "lucide-react"

export default function ProcessPage() {
  const phases = [
    {
      number: 1,
      title: "Discovery & Strategy",
      duration: "1-2 Weeks",
      icon: Search,
      weeks: "Week 1-2",
      activities: [
        "Kickoff call (2 hours)",
        "Stakeholder interviews",
        "User research review",
        "Competitive analysis",
        "Technical requirements gathering",
        "AI capability assessment",
        "Architecture planning",
        "Technology stack selection"
      ],
      deliverables: [
        "Technical Strategy Document",
        "Product Roadmap with milestones",
        "Project Brief with clear scope"
      ]
    },
    {
      number: 2,
      title: "Design & Prototyping",
      duration: "2-3 Weeks",
      icon: Lightbulb,
      weeks: "Week 3-5",
      activities: [
        "User flow mapping",
        "Wireframe creation",
        "Visual design system",
        "Component library",
        "Core feature implementation",
        "Basic AI integration",
        "Interactive prototype",
        "Early user testing"
      ],
      deliverables: [
        "Complete Design System",
        "Working Prototype with core AI functionality",
        "Technical Specifications"
      ]
    },
    {
      number: 3,
      title: "Development",
      duration: "6-8 Weeks",
      icon: Code,
      weeks: "Week 6-13",
      activities: [
        "Backend infrastructure setup",
        "AI model integration",
        "Frontend development",
        "Database implementation",
        "API development",
        "Advanced AI workflows",
        "Third-party integrations",
        "Performance optimization"
      ],
      deliverables: [
        "Agile sprints (1-week cycles)",
        "Weekly demos",
        "Continuous deployment",
        "Transparent project tracking"
      ]
    },
    {
      number: 4,
      title: "Testing & Optimization",
      duration: "2-3 Weeks",
      icon: TestTube,
      weeks: "Week 14-16",
      activities: [
        "Beta user recruitment",
        "Usability testing sessions",
        "Feedback collection",
        "Critical bug resolution",
        "Performance optimization",
        "UX refinements",
        "Security audit",
        "Load testing"
      ],
      deliverables: [
        "Tested and optimized product",
        "Security compliance report",
        "Performance benchmarks"
      ]
    },
    {
      number: 5,
      title: "Launch & Support",
      duration: "2-4 Weeks",
      icon: Rocket,
      weeks: "Week 16-19",
      activities: [
        "Production environment setup",
        "Database migration",
        "DNS & SSL configuration",
        "Monitoring setup",
        "Go-live",
        "User onboarding",
        "Performance monitoring",
        "Bug fixes & patches"
      ],
      deliverables: [
        "Live production system",
        "Monitoring dashboards",
        "User documentation"
      ]
    },
    {
      number: 6,
      title: "Ongoing Support",
      duration: "3+ Months",
      icon: HeadphonesIcon,
      weeks: "Ongoing",
      activities: [
        "Bug fixes & patches",
        "Performance monitoring",
        "Security updates",
        "Feature consultations",
        "Strategy review calls",
        "Performance optimization",
        "Technology updates",
        "Scaling assistance"
      ],
      deliverables: [
        "Monthly maintenance reports",
        "Quarterly strategy reviews",
        "On-demand support"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Process</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              From Idea to Production in 12-16 Weeks<br />
              We've refined our process through 9+ product launches. Here's exactly how we'll work together.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-left">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-semibold">Timeline</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">12-16 weeks for full product</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-semibold">Your Time</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">2-4 hours per week</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-semibold">Communication</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Slack + weekly calls</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Development Phases</h2>
          <div className="space-y-12">
            {phases.map((phase) => {
              const Icon = phase.icon
              return (
                <div
                  key={phase.number}
                  className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-2xl flex-shrink-0">
                      {phase.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <Icon className="h-8 w-8 text-blue-600" />
                        <div>
                          <h3 className="text-3xl font-bold">{phase.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {phase.weeks} • Duration: {phase.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">What Happens:</h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        {phase.activities.map((activity, i) => (
                          <li key={i}>• {activity}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Deliverables:</h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        {phase.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-16 text-center">What Makes Our Process Different</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">⚡ Speed Without Shortcuts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We move fast using AI-assisted development, but never compromise on code quality, security, or testing
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🚀 Continuous Deployment</h3>
              <p className="text-gray-600 dark:text-gray-400">
                You see progress daily, not monthly. New features go to staging immediately after development
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">👁️ Transparent Communication</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full visibility into our work through shared project boards, daily updates, and weekly demos
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🎯 Flexible Scope</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use agile methodology, allowing for controlled scope adjustments based on learnings and feedback
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">💰 No Surprises</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fixed pricing, clear timelines, and honest communication about risks and challenges
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🤝 True Partnership</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're invested in your success. We challenge assumptions and provide strategic guidance beyond just coding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss your vision and create a custom roadmap for your AI product.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Book Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

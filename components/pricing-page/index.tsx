"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { Check, Sparkles, Rocket, Building2, ArrowRight } from "lucide-react"

export default function PricingPage() {
  const packages = [
    {
      name: "Starter Package",
      icon: Sparkles,
      price: "$35,000 - $60,000",
      bestFor: "MVPs, Prototypes, Validation",
      timeline: "6-8 weeks",
      includes: [
        "AI Strategy Session (2 weeks)",
        "Prototype Development (4-6 weeks)",
        "Basic UI/UX Design",
        "Core Feature Implementation",
        "Staging Deployment",
        "1 Month Support"
      ],
      idealFor: [
        "Early-stage startups validating ideas",
        "Companies testing AI use cases",
        "Teams seeking investor demonstrations",
        "Organizations piloting AI initiatives"
      ],
      whatYouGet: [
        "Working AI prototype",
        "2-3 core features",
        "Basic integrations (1-2 tools)",
        "Mobile-responsive web app",
        "Staging environment",
        "Basic documentation"
      ]
    },
    {
      name: "Growth Package",
      icon: Rocket,
      price: "$100,000 - $180,000",
      bestFor: "Product Launches, Scaling Startups",
      timeline: "12-16 weeks",
      popular: true,
      includes: [
        "Comprehensive Strategy (3 weeks)",
        "Full Product Development (12-16 weeks)",
        "Advanced AI Features (RAG, Agents)",
        "Professional UI/UX Design",
        "Production Deployment",
        "Integrations (3-5 platforms)",
        "3 Months Support",
        "Team Training"
      ],
      idealFor: [
        "Startups ready for product launch",
        "Companies building AI products",
        "Teams replacing legacy systems",
        "Growing businesses adding AI"
      ],
      whatYouGet: [
        "Production-ready AI product",
        "5-8 major features",
        "Advanced AI capabilities",
        "Custom UI/UX design",
        "Full integrations",
        "Comprehensive documentation",
        "3 months support"
      ]
    },
    {
      name: "Enterprise Package",
      icon: Building2,
      price: "$200,000 - $500,000+",
      bestFor: "Large Organizations, Complex Systems",
      timeline: "16-20 weeks",
      includes: [
        "Executive AI Strategy Workshop",
        "Full Product Development (16-20 weeks)",
        "Advanced AI Capabilities (Fine-tuning, Multi-agent)",
        "Custom UI/UX Design System",
        "Enterprise-grade Infrastructure",
        "Unlimited Integrations",
        "Security & Compliance",
        "6 Months Support",
        "Ongoing Advisory"
      ],
      idealFor: [
        "Large enterprises",
        "Regulated industries",
        "Complex system requirements",
        "Multi-team organizations"
      ],
      whatYouGet: [
        "Enterprise-grade AI platform",
        "Unlimited features",
        "Custom everything",
        "Full compliance",
        "Dedicated team",
        "6 months premium support"
      ]
    }
  ]

  const addOns = [
    { name: "Performance Monitoring", price: "$2,000 - $5,000/month" },
    { name: "Team Training & Workshops", price: "$5,000 - $15,000" },
    { name: "Ongoing Advisory", price: "$3,000 - $8,000/month" },
    { name: "Go-to-Market Support", price: "$10,000 - $30,000" }
  ]

  const alaCarte = [
    { name: "AI Strategy Consultation", price: "$15,000 - $30,000", duration: "2-4 weeks" },
    { name: "AI Integration", price: "$40,000 - $100,000", duration: "6-10 weeks" },
    { name: "AI Agent Development", price: "$60,000 - $150,000", duration: "8-12 weeks" },
    { name: "Model Fine-Tuning", price: "$30,000 - $80,000", duration: "4-8 weeks" }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Transparent, Predictable, Value-Driven<br />
              We offer fixed-price packages for predictability, with flexible options for different stages and budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Choose Your Package</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-8 border-2 ${
                    pkg.popular
                      ? "border-blue-600 bg-white dark:bg-[#0a0a0a] shadow-xl scale-105"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]"
                  }`}
                >
                  {pkg.popular && (
                    <div className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                      Most Popular
                    </div>
                  )}
                  <Icon className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Best for: {pkg.bestFor}</p>
                  <div className="text-4xl font-bold mb-6">{pkg.price}</div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Timeline: {pkg.timeline}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Ideal For:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {pkg.idealFor.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-opacity ${
                      pkg.popular
                        ? "bg-blue-600 text-white hover:opacity-90"
                        : "bg-gray-100 dark:bg-gray-800 hover:opacity-80"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* À La Carte */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-16 text-center">À La Carte Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {alaCarte.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-[#111111] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{service.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Add-On Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 border border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <h3 className="font-semibold">{addon.name}</h3>
                <div className="text-lg font-bold text-blue-600">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Payment Terms</h2>
          <div className="bg-gray-50 dark:bg-[#111111] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30%</div>
                <div className="text-gray-600 dark:text-gray-400">Upfront (Project kickoff)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-gray-600 dark:text-gray-400">Midpoint (Prototype/milestone)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30%</div>
                <div className="text-gray-600 dark:text-gray-400">Upon completion</div>
              </div>
            </div>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <p><strong>Payment Methods:</strong> Wire transfer • ACH • Credit card (+3% fee)</p>
              <p><strong>Flexible Options:</strong> Equity + Cash for startups • Milestone-Based for larger projects • Monthly retainer starting at $20,000/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">What's Always Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Check className="h-6 w-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Transparent Communication</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Weekly demos, daily Slack updates, full project visibility</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Code Ownership</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">You own 100% of the code and IP we create</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">No Hidden Fees</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fixed pricing with no surprises</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Quality Guarantee</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">We don't invoice final payment until you're satisfied</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Documentation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete technical and user documentation</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Knowledge Transfer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full handover with training</p>
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
              Schedule a free consultation to discuss your project and get a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="mailto:hello@xagilabs.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { ArrowRight, Sparkles, MessageSquare, Search, BarChart3, PenTool, Megaphone, CheckCircle2 } from "lucide-react"

const trackedPlatforms = ["ChatGPT", "Claude", "Google AI Overviews", "Gemini", "Perplexity"]

const promptExamples = [
  "Best AI voice agent platform for healthcare",
  "Who should we hire for OpenClaw deployment?",
  "Best agency for ChatGPT visibility optimization",
  "How do D2C brands rank in AI answer engines?",
]

const servicePillars = [
  {
    icon: Search,
    title: "AI Rank Tracking",
    description:
      "Track how your brand appears across high-intent prompts on ChatGPT, Claude, Gemini, Perplexity, and Google AI experiences.",
  },
  {
    icon: PenTool,
    title: "AI-Ready Content",
    description:
      "Build structured, citation-friendly content clusters that LLMs can crawl, understand, and reference in answers.",
  },
  {
    icon: Megaphone,
    title: "Mention & Citation Outreach",
    description:
      "Identify third-party sources AI models cite and run focused outreach to increase brand mentions and category authority.",
  },
]

const faqs = [
  {
    q: "What is GEO (Generative Engine Optimization)?",
    a: "GEO is the practice of improving how your brand appears in AI-generated answers, recommendations, and citations across LLM platforms.",
  },
  {
    q: "How is GEO different from traditional SEO?",
    a: "SEO optimizes rankings on search engine results pages. GEO optimizes inclusion and recommendation quality inside AI answer experiences.",
  },
  {
    q: "Which AI platforms does xAGI optimize for?",
    a: "We prioritize ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews, then expand to other agentic discovery channels based on your market.",
  },
  {
    q: "How long until we see measurable impact?",
    a: "Most teams see directional movement in 3-6 weeks. Strong compounding gains usually appear over 8-16 weeks with consistent execution.",
  },
  {
    q: "Do you support D2C brands and B2B companies?",
    a: "Yes. We run GEO programs for D2C brands, SaaS teams, and service businesses that want qualified traffic from AI-native discovery.",
  },
]

export default function GeoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <section className="py-20 md:py-28 bg-gradient-to-b from-cyan-50 to-white dark:from-[#0f1724] dark:to-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              xAGI GEO Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get Your Brand Listed in ChatGPT and Other AI Answer Engines
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We help D2C and growth-focused teams improve visibility, mentions, and qualified pipeline from AI-native
              discovery across ChatGPT, Claude, Gemini, Perplexity, and Google AI experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Book a GEO Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-wider text-gray-500 text-center mb-6">Platforms We Optimize For</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {trackedPlatforms.map((platform) => (
              <span
                key={platform}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-[#111111] border border-gray-200 dark:border-gray-700 text-sm font-medium"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111111]">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-cyan-600" />
                <h2 className="text-2xl font-bold">See How AI Talks About You</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Track where your brand is recommended, missing, or misrepresented in high-value prompts that influence
                purchase decisions.
              </p>
              <div className="space-y-3">
                {promptExamples.map((prompt) => (
                  <div key={prompt} className="p-3 rounded-lg bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-700 text-sm">
                    {prompt}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111111]">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-cyan-600" />
                <h2 className="text-2xl font-bold">Turn AI Discovery Into Revenue</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We connect AI visibility improvements to business outcomes: qualified leads, demo requests, and higher
                conversion traffic from AI-referred sessions.
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600" /> AI referral source attribution setup</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600" /> Prompt-cluster content execution roadmap</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600" /> Mention-to-conversion performance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What xAGI Handles End-to-End</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicePillars.map((pillar) => (
              <div key={pillar.title} className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
                <pillar.icon className="w-9 h-9 text-cyan-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
                <summary className="font-semibold cursor-pointer list-none">{faq.q}</summary>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Growing Your Brand in AI Search</h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with xAGI to improve your brand visibility in ChatGPT and other AI recommendation engines.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

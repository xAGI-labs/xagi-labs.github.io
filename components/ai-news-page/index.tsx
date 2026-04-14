"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { ExternalLink, Calendar, RefreshCw } from "lucide-react"
import EditorialHandoff from "@/components/shared/editorial-handoff"

interface NewsItem {
  title: string
  link: string
  description: string
  pubDate: string
  guid: string
}

export default function AiNewsPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNews = async () => {
    setLoading(true)
    setError(null)
    try {
      // Use a CORS proxy or fetch directly if the server allows
      const response = await fetch("https://news.smol.ai/rss.xml")
      const text = await response.text()

      // Parse XML
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(text, "text/xml")

      const items = xmlDoc.querySelectorAll("item")
      const newsItems: NewsItem[] = []

      // Limit to top 10 items from the RSS feed
      const topItems = Array.from(items).slice(0, 10)

      topItems.forEach((item) => {
        const title = item.querySelector("title")?.textContent || ""
        const link = item.querySelector("link")?.textContent || ""
        // Use content:encoded for full content, fallback to description
        const contentEncoded = item.getElementsByTagName("content:encoded")[0]?.textContent || ""
        const description = contentEncoded || item.querySelector("description")?.textContent || ""
        const pubDate = item.querySelector("pubDate")?.textContent || ""
        const guid = item.querySelector("guid")?.textContent || link

        newsItems.push({
          title,
          link,
          description,
          pubDate,
          guid,
        })
      })

      setNews(newsItems)
    } catch (err) {
      setError("Failed to fetch news. Please try again later.")
      console.error("Error fetching RSS:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch {
      return dateString
    }
  }

  // Filter out entries with "not much happened today" in the title
  const filteredNews = news.filter(
    (item) => !item.title.toLowerCase().includes("not much happened today")
  )

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 dark:bg-[#111111] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI News</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Stay updated with the latest developments in artificial intelligence
              </p>
              <button
                onClick={fetchNews}
                disabled={loading}
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                Refresh News
              </button>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <EditorialHandoff
                eyebrow="What xAGI builds"
                title="We turn fast-moving AI changes into shipped products and workflows"
                description="Use this briefing stream to stay current, then jump into the xAGI services that help teams implement voice AI, agent workflows, outbound automation, and enterprise deployments."
                contextLine="If a launch, benchmark, or tooling shift creates an opening for your team, book a strategy call and we’ll map the implementation path."
                relatedLinks={[
                  { href: "/voice-ai", label: "Voice AI for India" },
                  { href: "/services", label: "AI development services" },
                  { href: "/autoclaw", label: "AutoClaw" },
                  { href: "/blog/openclaw-guide-2026", label: "OpenClaw guide" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* News Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {loading && (
                <div className="text-center py-12">
                  <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400">Loading news...</p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                  <p className="text-red-600 dark:text-red-400">{error}</p>
                  <button
                    onClick={fetchNews}
                    className="mt-4 text-sm underline text-red-600 dark:text-red-400 hover:opacity-80"
                  >
                    Try again
                  </button>
                </div>
              )}

              {!loading && !error && filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">No news available at the moment.</p>
                </div>
              )}

              {!loading && !error && filteredNews.length > 0 && (
                <div className="space-y-8">
                  {filteredNews.map((item) => (
                    <article
                      key={item.guid}
                      className="bg-gray-50 dark:bg-[#111111] rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    >
                      {item.pubDate && (
                        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          {formatDate(item.pubDate)}
                        </h2>
                      )}

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-start gap-2">
                          {item.title}
                          <ExternalLink className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </h3>
                      </a>

                      {item.description && (
                        <div
                          className="text-gray-600 dark:text-gray-400 prose prose-sm dark:prose-invert max-w-none"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      )}

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Read more →
                      </a>
                    </article>
                  ))}
                </div>
              )}

              <div className="mt-12">
                <EditorialHandoff
                  eyebrow="Need help shipping?"
                  title="Turn AI news into product bets your team can actually execute"
                  description="We help founders and operators move from model updates and market noise to production roadmaps, voice AI launches, agent systems, and deployment decisions."
                  contextLine="Keep the editorial feed lightweight, then use a strategy call when you want help prioritizing what matters for your product or GTM plan."
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/voice-ai"
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  Explore Voice AI
                </Link>
                <Link
                  href="/services"
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  Explore Services
                </Link>
                <Link
                  href="/autoclaw"
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  See AutoClaw
                </Link>
                <Link
                  href="/blog/openclaw-guide-2026"
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  Read the OpenClaw Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Attribution */}
        <section className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Powered by{" "}
                <a
                  href="https://smol.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  smol.ai
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

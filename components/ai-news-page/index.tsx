"use client"

import { useState, useEffect } from "react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { ExternalLink, Calendar, RefreshCw } from "lucide-react"

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

      items.forEach((item) => {
        const title = item.querySelector("title")?.textContent || ""
        const link = item.querySelector("link")?.textContent || ""
        const description = item.querySelector("description")?.textContent || ""
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
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return dateString
    }
  }

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }

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

              {!loading && !error && news.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">No news available at the moment.</p>
                </div>
              )}

              {!loading && !error && news.length > 0 && (
                <div className="space-y-8">
                  {news.map((item) => (
                    <article
                      key={item.guid}
                      className="bg-gray-50 dark:bg-[#111111] rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-start gap-2">
                          {item.title}
                          <ExternalLink className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </h2>
                      </a>

                      {item.pubDate && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-3">
                          <Calendar className="w-4 h-4" />
                          {formatDate(item.pubDate)}
                        </div>
                      )}

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

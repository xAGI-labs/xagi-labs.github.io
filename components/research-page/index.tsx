"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FileText, ExternalLink, Calendar, Tag } from "lucide-react"
import Header from "../shared/header"
import Footer from "../shared/footer"

interface ResearchPaper {
  id: string
  title: string
  authors: string
  date: string
  arxivId?: string
  arxivUrl?: string
  pdfUrl?: string
  abstract: string
  category: string
  tags: string[]
}

export default function ResearchPage() {
  const [papers, setPapers] = useState<ResearchPaper[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/data/research-papers.json")
      .then((res) => res.json())
      .then((data) => {
        setPapers(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading research papers:", error)
        setLoading(false)
      })
  }, [])

  const categories = ["All", ...Array.from(new Set(papers.map((p) => p.category)))]
  const filteredPapers = selectedCategory === "All"
    ? papers
    : papers.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Research Publications</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Advancing the frontiers of AI through rigorous research. We publish our findings to contribute to the broader AI research community and push the boundaries of what's possible with intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers Grid */}
      <section className="py-12 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">Loading research papers...</p>
            </div>
          ) : filteredPapers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">No papers found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-8 max-w-6xl mx-auto">
              {filteredPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                        <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                          {paper.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{paper.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {paper.date}
                        </div>
                        <div>{paper.authors}</div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {paper.abstract}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {paper.arxivUrl && (
                          <a
                            href={paper.arxivUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
                          >
                            Read on arXiv
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {paper.pdfUrl && !paper.arxivUrl && (
                          <a
                            href={paper.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
                          >
                            Read PDF
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Research Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{papers.length}</div>
              <div className="text-gray-600 dark:text-gray-400">Published Papers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{categories.length - 1}</div>
              <div className="text-gray-600 dark:text-gray-400">Research Areas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Open</div>
              <div className="text-gray-600 dark:text-gray-400">Access Publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Interested in Collaborating?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              We're always open to research collaborations and partnerships. If you're working on cutting-edge AI research, let's connect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

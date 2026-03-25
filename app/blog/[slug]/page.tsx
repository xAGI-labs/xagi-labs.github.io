import { getPostBySlug, getAllPosts } from "@/lib/blog"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const canonical = post.canonical || `https://xagi.in/blog/${post.slug}`
  const description = post.description || "Read the latest insights from xAGI Labs."
  const keywords =
    Array.isArray(post.keywords)
      ? post.keywords
      : typeof post.keywords === "string"
        ? post.keywords.split(",").map((keyword: string) => keyword.trim()).filter(Boolean)
        : undefined

  return {
    title: `${post.title} | xAGI Labs Blog`,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description,
      publishedTime: post.date,
      authors: [post.author || "xAGI Labs"],
      images: [
        {
          url: post.image || "/xagi-icon.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.image || "/xagi-icon.png"],
    },
  } satisfies Metadata
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const canonical = post.canonical || `https://xagi.in/blog/${post.slug}`
  const keywords =
    Array.isArray(post.keywords)
      ? post.keywords
      : typeof post.keywords === "string"
        ? post.keywords.split(",").map((keyword: string) => keyword.trim()).filter(Boolean)
        : []

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || "Read the latest insights from xAGI Labs.",
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Organization",
      name: post.author || "xAGI Labs",
    },
    publisher: {
      "@type": "Organization",
      name: "xAGI Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://xagi.in/xagi-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    articleSection: post.category || "AI",
    keywords: keywords.join(", "),
    image: post.image || "https://xagi.in/xagi-icon.png",
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Header />

      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>

            <article className="prose dark:prose-invert max-w-none">
              <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
              </div>

              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

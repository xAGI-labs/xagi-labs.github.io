import { getPostBySlug, getAllPosts } from "@/lib/blog"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"

interface Props {
  params: {
    slug: string
  }
}

const notionFallbackCovers = [
  "/images/blog/notion-covers/cover-01.png",
  "/images/blog/notion-covers/cover-02.png",
  "/images/blog/notion-covers/cover-03.png",
  "/images/blog/notion-covers/cover-04.png",
  "/images/blog/notion-covers/cover-05.png",
  "/images/blog/notion-covers/cover-06.png",
  "/images/blog/notion-covers/cover-07.png",
  "/images/blog/notion-covers/cover-08.png",
]

function getFallbackCover(slug: string) {
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  }
  return notionFallbackCovers[hash % notionFallbackCovers.length]
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
  const postImage = post.image || getFallbackCover(post.slug)
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
          url: postImage,
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
      images: [postImage],
    },
  } satisfies Metadata
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const canonical = post.canonical || `https://xagi.in/blog/${post.slug}`
  const postImage = post.image || getFallbackCover(post.slug)
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
    image: postImage.startsWith("http") ? postImage : `https://xagi.in${postImage}`,
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

              <div className="mb-10">
                <Image
                  src={postImage}
                  alt={post.title}
                  width={1536}
                  height={1024}
                  className="w-full h-auto rounded-xl border border-gray-200 dark:border-gray-800"
                  priority
                />
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

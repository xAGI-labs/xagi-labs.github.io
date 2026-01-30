import { getPostBySlug, getAllPosts } from "@/lib/blog"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

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

  return {
    title: `${post.title} | xAGI Labs Blog`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a]">
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

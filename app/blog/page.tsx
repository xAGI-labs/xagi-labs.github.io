import { getAllPosts } from "@/lib/blog"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import Link from "next/link"
import { Calendar } from "lucide-react"

export const metadata = {
  title: "Blog - xAGI Labs",
  description: "Latest updates and insights from xAGI Labs.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Blog</h1>

            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">No posts found.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-gray-50 dark:bg-[#111111] rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                  >
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                         <Calendar className="w-4 h-4" />
                         {new Date(post.date).toLocaleDateString()}
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {post.description}
                        </p>
                      )}
                      <span className="inline-block text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                        Read more →
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

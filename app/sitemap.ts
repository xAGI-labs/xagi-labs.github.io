import { dataGrowthPaths } from "@/lib/data-growth"
import { canonicalUrl } from "@/lib/site"
import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { projects } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xagi.in'

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { url: `${baseUrl}/opportunities/`, changeFrequency: 'daily' as const, priority: 0.8 },
    {
      url: baseUrl,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/research-papers`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/process`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/voice-ai`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/orgpage`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/orgpage/privacy`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/autoclaw`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/autoclaw/faq`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-sdr-alternatives`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/openclaw-deployment-security`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/call-center-ai`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-agents-erp`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ai-events`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/apps/linkedin-carousel-generator`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/siliconhalli`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hire-with-xAGI`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/founder-sourcing-engine`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ideal`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-cto`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/astro-gemini-privacy-policy`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ramen-ai-privacy-policy`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ramen-ai-privacy-policy/account-deletion`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ramen-ai-privacy-policy/support`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ramen-ai-privacy-policy/terms`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ramen-ai-privacy-policy/subscription-cancellation`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/screenshot2clipboard/support`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/screenshot2clipboard/privacy-policy`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/geo`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts
  const posts = getAllPosts()
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const dataPages = ["ai-dataset-sourcing", "custom-ai-data-collection", "ai-dataset-licensing"].map(path => ({ url: `${baseUrl}/${path}/`, changeFrequency: "monthly" as const, priority: 0.9 }))
  const growthPages = dataGrowthPaths.map(path => ({ url: `${baseUrl}/${path}/`, changeFrequency: "monthly" as const, priority: 0.8 }))
  const entries = [...staticPages, ...projectPages, ...blogPages, ...dataPages, ...growthPages].map(entry => ({ ...entry, url: canonicalUrl(entry.url) }))
  return entries.filter((entry, index) => entries.findIndex(other => other.url === entry.url) === index)
}

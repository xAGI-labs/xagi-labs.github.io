import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { codexSkills, codexSkillsCatalog, getCodexSkillsByCategory } from "@/lib/codex-skills"
import { ArrowUpRight, Bot, Boxes, Github, Search } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Codex Skills Directory for AI Agents",
  description:
    "Browse 880 Codex skills from the ComposioHQ awesome-codex-skills repository, with pages for app automation, developer workflows, writing, analysis, and productivity.",
  keywords: [
    "Codex skills",
    "awesome Codex skills",
    "Composio Codex skills",
    "AI agent automation skills",
    "Codex automation directory",
  ],
  alternates: {
    canonical: "https://xagi-labs.github.io/codex-skills",
  },
  openGraph: {
    title: "Codex Skills Directory",
    description:
      "A searchable SEO directory of Codex skills from ComposioHQ's awesome-codex-skills repository.",
    url: "https://xagi-labs.github.io/codex-skills",
    type: "website",
    images: ["/xagi-icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codex Skills Directory for AI Agents | xAGI Labs",
    description: "Browse 880 Codex skills for automation, developer workflows, writing, analysis, and productivity.",
    images: ["/xagi-icon.png"],
  },
}

export default function CodexSkillsPage() {
  const groupedSkills = getCodexSkillsByCategory()
  const featuredSkills = codexSkills.filter((skill) => skill.category !== "Composio App Automation").slice(0, 12)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Codex Skills Directory",
    description: "Index of Codex skills sourced from the ComposioHQ awesome-codex-skills GitHub repository.",
    numberOfItems: codexSkills.length,
    itemListElement: codexSkills.slice(0, 100).map((skill, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: skill.name,
      url: `https://xagi-labs.github.io/codex-skills/${skill.slug}`,
    })),
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-950 dark:bg-[#0a0a0a] dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header />

      <main className="flex-grow">
        <section className="border-b border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-[#111111]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 dark:border-gray-800 dark:bg-[#0a0a0a] dark:text-gray-300">
                <Bot className="h-4 w-4" />
                {codexSkills.length.toLocaleString()} Codex skill pages
              </div>
              <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
                Codex skills directory for AI agent automation
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                Browse unique pages for the skills in ComposioHQ&apos;s awesome-codex-skills repository. Each page
                summarizes the skill&apos;s purpose, likely workflows, setup context, source path, and links back to the
                original GitHub folder.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={codexSkillsCatalog.sourceRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-3 font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
                >
                  <Github className="h-4 w-4" />
                  View GitHub repo
                </a>
                <Link
                  href="#skills"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
                >
                  <Search className="h-4 w-4" />
                  Browse skills
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 md:grid-cols-4">
              {groupedSkills.map((group) => (
                <a
                  key={group.category}
                  href={`#${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="rounded-lg border border-gray-200 p-5 transition-colors hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold">{group.category}</h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {group.skills.length.toLocaleString()} skills
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-50 py-14 dark:border-gray-800 dark:bg-[#111111]">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">Featured curated skills</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A quick entry point into the non-app-specific skills from the repository.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredSkills.map((skill) => (
                <Link
                  key={skill.slug}
                  href={`/codex-skills/${skill.slug}`}
                  className="rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-gray-400 dark:border-gray-800 dark:bg-[#0a0a0a] dark:hover:border-gray-600"
                >
                  <div className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">{skill.category}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                    Skill details <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-14">
          <div className="container mx-auto px-4">
            {groupedSkills.map((group) => (
              <div
                key={group.category}
                id={group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="mb-12 scroll-mt-24"
              >
                <div className="mb-5 flex items-baseline justify-between border-b border-gray-200 pb-3 dark:border-gray-800">
                  <h2 className="text-2xl font-bold">{group.category}</h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {group.skills.length.toLocaleString()} pages
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.skills.map((skill) => (
                    <Link
                      key={skill.slug}
                      href={`/codex-skills/${skill.slug}`}
                      className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-800 dark:hover:border-gray-600 dark:hover:bg-[#111111]"
                    >
                      <h3 className="font-semibold">{skill.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

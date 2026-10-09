import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { codexSkills, getCodexSkillBySlug, getRelatedCodexSkills } from "@/lib/codex-skills"
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, Github, Plug, Terminal } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: {
    slug: string
  }
}

function truncateMetadata(value: string, maxLength: number) {
  const normalized = value.replace(/\s+/g, " ").trim()
  if (normalized.length <= maxLength) return normalized

  const shortened = normalized.slice(0, maxLength - 1)
  const lastSpace = shortened.lastIndexOf(" ")
  const cutAt = lastSpace > maxLength * 0.7 ? lastSpace : shortened.length
  return `${shortened.slice(0, cutAt).trim()}…`
}

export function generateStaticParams() {
  return codexSkills.map((skill) => ({
    slug: skill.slug,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const skill = getCodexSkillBySlug(params.slug)
  if (!skill) {
    return {
      title: "Codex Skill Not Found",
    }
  }

  const title = truncateMetadata(`${skill.name} Codex Skill`, 52)
  const description = truncateMetadata(
    `${skill.description} Explore use cases, setup guidance, and the original source for this Codex skill.`,
    158,
  )

  return {
    title,
    description,
    keywords: skill.keywords,
    alternates: {
      canonical: `https://xagi-labs.github.io/codex-skills/${skill.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://xagi-labs.github.io/codex-skills/${skill.slug}`,
      images: ["/xagi-icon.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/xagi-icon.png"],
    },
  }
}

function sentenceForSkill(name: string, category: string) {
  if (category === "Composio App Automation") {
    return `${name} is useful when a Codex or Claude-style agent needs to discover available app actions, verify the connection, and execute authenticated operations through Composio's MCP layer.`
  }

  if (category === "Development & Code Tools") {
    return `${name} focuses on making engineering work more repeatable, reviewable, and easier to verify inside a coding-agent workflow.`
  }

  if (category === "Communication & Writing") {
    return `${name} helps turn rough context into clearer written output while preserving audience, tone, and next-action intent.`
  }

  if (category === "Data & Analysis") {
    return `${name} is meant for structured research, extraction, analysis, or decision support where the agent should produce evidence-backed output.`
  }

  return `${name} packages repeatable instructions so an agent can complete a focused workflow without reloading every detail into the main prompt.`
}

export default function CodexSkillPage({ params }: Props) {
  const skill = getCodexSkillBySlug(params.slug)

  if (!skill) {
    notFound()
  }

  const relatedSkills = getRelatedCodexSkills(skill)
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${skill.name} Codex Skill`,
    description: skill.description,
    url: `https://xagi-labs.github.io/codex-skills/${skill.slug}`,
    mainEntityOfPage: `https://xagi-labs.github.io/codex-skills/${skill.slug}`,
    about: skill.keywords,
    isBasedOn: skill.githubUrl,
    publisher: {
      "@type": "Organization",
      name: "xAGI Labs",
      url: "https://xagi-labs.github.io",
    },
  }

  const workflowItems =
    skill.headings.length > 0
      ? skill.headings.slice(0, 6)
      : ["Discover the skill", "Prepare context", "Run the workflow", "Verify output"]

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-950 dark:bg-[#0a0a0a] dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />

      <main className="flex-grow">
        <section className="border-b border-gray-200 bg-gray-50 py-10 dark:border-gray-800 dark:bg-[#111111]">
          <div className="container mx-auto px-4">
            <Link
              href="/codex-skills"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Codex skills
            </Link>
            <div className="max-w-4xl">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 dark:border-gray-800 dark:bg-[#0a0a0a] dark:text-gray-300">
                  {skill.category}
                </span>
                {skill.requiresMcp && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 dark:border-gray-800 dark:bg-[#0a0a0a] dark:text-gray-300">
                    <Plug className="h-3.5 w-3.5" />
                    MCP-enabled
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{skill.name} Codex skill</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={skill.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-3 font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
                >
                  <Github className="h-4 w-4" />
                  Open source skill
                </a>
                {skill.toolkitUrl && (
                  <a
                    href={skill.toolkitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Toolkit docs
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="max-w-3xl">
              <h2 className="text-3xl font-bold">What this skill does</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {skill.overview || sentenceForSkill(skill.name, skill.category)}
              </p>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                {sentenceForSkill(skill.name, skill.category)} It is part of the awesome-codex-skills catalog and is
                presented here as an indexable summary for developers comparing reusable agent skills.
              </p>

              <h2 className="mt-10 text-3xl font-bold">Good use cases</h2>
              <div className="mt-5 grid gap-3">
                {[
                  `Trigger ${skill.name} when a user request matches its stated automation scope.`,
                  `Use it to keep setup, known pitfalls, and workflow guidance outside the main prompt until needed.`,
                  `Pair it with repository-specific context when the workflow touches local code, docs, data, or connected apps.`,
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-green-600" />
                    <p className="text-gray-600 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>

              <h2 className="mt-10 text-3xl font-bold">Workflow coverage</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {workflowItems.map((heading) => (
                  <div key={heading} className="rounded-lg bg-gray-50 p-4 dark:bg-[#111111]">
                    <h3 className="font-semibold">{heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      A documented section in the source skill that gives the agent more specific execution guidance.
                    </p>
                  </div>
                ))}
              </div>

              {skill.tools.length > 0 && (
                <>
                  <h2 className="mt-10 text-3xl font-bold">Referenced tools</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium dark:border-gray-800"
                      >
                        <Terminal className="h-4 w-4" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <h2 className="mt-10 text-3xl font-bold">Source and attribution</h2>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                This summary links back to the original folder in ComposioHQ&apos;s public repository. For installation
                instructions, licensing, and the complete skill body, use the source link before copying the skill into
                a local Codex setup.
              </p>
              <a
                href={skill.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
              >
                View {skill.sourcePath} on GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-lg border border-gray-200 p-5 dark:border-gray-800">
                <h2 className="text-lg font-semibold">Skill facts</h2>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-gray-500 dark:text-gray-400">Category</dt>
                    <dd className="mt-1 font-medium">{skill.category}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 dark:text-gray-400">Source path</dt>
                    <dd className="mt-1 break-words font-medium">{skill.sourcePath}</dd>
                  </div>
                  {skill.app && (
                    <div>
                      <dt className="text-gray-500 dark:text-gray-400">App or toolkit</dt>
                      <dd className="mt-1 font-medium">{skill.app}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-gray-500 dark:text-gray-400">MCP connection</dt>
                    <dd className="mt-1 font-medium">{skill.requiresMcp ? "Referenced" : "Not specified"}</dd>
                  </div>
                </dl>
              </div>

              {relatedSkills.length > 0 && (
                <div className="mt-5 rounded-lg border border-gray-200 p-5 dark:border-gray-800">
                  <h2 className="text-lg font-semibold">Related skills</h2>
                  <div className="mt-4 space-y-3">
                    {relatedSkills.map((relatedSkill) => (
                      <Link
                        key={relatedSkill.slug}
                        href={`/codex-skills/${relatedSkill.slug}`}
                        className="block rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-[#111111]"
                      >
                        <h3 className="font-medium">{relatedSkill.name}</h3>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                          {relatedSkill.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

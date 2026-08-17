import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react"
import { Fraunces } from "next/font/google"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import ProjectArtifact from "@/components/project-pages/project-artifact"
import { projects, type ProjectLink, type ProjectProfile } from "@/lib/projects"

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
})

const themes = {
  kisspdf: {
    page: "bg-[#f8f2e8] dark:bg-[#15110e]",
    surface: "bg-[#efe0cd] dark:bg-[#241c18]",
    accentText: "text-[#a83f2d] dark:text-[#ff9b82]",
    accentBg: "bg-[#d64c35] text-white",
    soft: "bg-[#f2e4d2] dark:bg-[#2a211c]",
    border: "border-[#d8c6b3] dark:border-[#4f4036]",
    quote: "bg-[#213c31] text-[#fff8eb]",
  },
  "open-gurukul": {
    page: "bg-[#fbf3e3] dark:bg-[#171511]",
    surface: "bg-[#efe1c8] dark:bg-[#29251e]",
    accentText: "text-[#9c4f1f] dark:text-[#f4a06a]",
    accentBg: "bg-[#31295d] text-[#f8dfa1]",
    soft: "bg-[#f1e4cc] dark:bg-[#29251e]",
    border: "border-[#d5bd94] dark:border-[#584c37]",
    quote: "bg-[#31295d] text-[#fff7e7]",
  },
  orgpage: {
    page: "bg-[#f4f5ed] dark:bg-[#111712]",
    surface: "bg-[#dfe9dc] dark:bg-[#1c2a22]",
    accentText: "text-[#356249] dark:text-[#9bd2ae]",
    accentBg: "bg-[#28513c] text-[#edf5e7]",
    soft: "bg-[#e3ebdf] dark:bg-[#1c2a22]",
    border: "border-[#bed0bf] dark:border-[#3f5b49]",
    quote: "bg-[#28513c] text-[#f5f6eb]",
  },
  "haryanvi-tts": {
    page: "bg-[#f4eadb] dark:bg-[#15120f]",
    surface: "bg-[#ecd8bd] dark:bg-[#251f1a]",
    accentText: "text-[#a24820] dark:text-[#f3a06e]",
    accentBg: "bg-[#2b221d] text-[#f4b94f]",
    soft: "bg-[#f0dfc9] dark:bg-[#231e1a]",
    border: "border-[#d6b38d] dark:border-[#57483c]",
    quote: "bg-[#2b221d] text-[#fff3dc]",
  },
} as const

function ProjectAction({ link, className }: { link: ProjectLink; className: string }) {
  const content = (
    <>
      {link.label}
      {link.external ? <ExternalLink className="h-4 w-4" aria-hidden="true" /> : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  )

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  )
}

export default function ProjectDetail({ project }: { project: ProjectProfile }) {
  const theme = themes[project.slug as keyof typeof themes]
  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className={`min-h-screen text-stone-950 dark:text-stone-50 ${theme.page}`}>
      <Header />
      <main>
        <section className={`border-b ${theme.border}`}>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Link
              href="/portfolio"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-stone-400 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All projects
            </Link>
          </div>
        </section>

        <section className={`border-b ${theme.border}`}>
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${theme.accentText}`}>{project.category}</p>
              <h1 className={`${fraunces.className} mt-6 text-[clamp(4rem,9vw,7.4rem)] font-semibold leading-[0.84] tracking-[-0.055em]`}>
                {project.title}
              </h1>
              <p className="mt-8 max-w-xl text-xl leading-8 text-stone-700 dark:text-stone-300">{project.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <ProjectAction
                    key={link.href}
                    link={link}
                    className={`inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${theme.accentBg}`}
                  />
                ))}
              </div>

              <dl className={`mt-10 grid gap-5 border-t pt-6 sm:grid-cols-2 ${theme.border}`}>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">Project state</dt>
                  <dd className="mt-2 font-semibold">{project.status}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">Documented</dt>
                  <dd className="mt-2 font-semibold">{project.year}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs leading-5 text-stone-500 dark:text-stone-400">{project.statusDetail}</p>
            </div>

            <ProjectArtifact visual={project.visual} />
          </div>
        </section>

        <section className={theme.quote}>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-7 lg:grid-cols-[0.35fr_1.65fr] lg:items-start">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] opacity-60">Product thesis</p>
              <blockquote className={`${fraunces.className} max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-5xl lg:text-6xl`}>
                “{project.thesis}”
              </blockquote>
            </div>
          </div>
        </section>

        <section className={`border-b ${theme.border}`}>
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <article>
              <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${theme.accentText}`}>The constraint</p>
              <h2 className={`${fraunces.className} mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-5xl`}>
                Start with the real friction.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-stone-700 dark:text-stone-300">{project.problem}</p>
            </article>
            <article className={`border p-6 sm:p-8 ${theme.border} ${theme.surface}`}>
              <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${theme.accentText}`}>The response</p>
              <p className="mt-6 text-xl leading-9 text-stone-800 dark:text-stone-200">{project.response}</p>
            </article>
          </div>
        </section>

        <section className={`border-b ${theme.border} ${theme.soft}`}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${theme.accentText}`}>System map</p>
                <h2 className={`${fraunces.className} mt-5 text-4xl font-semibold leading-none tracking-[-0.035em] sm:text-5xl`}>
                  How the pieces fit.
                </h2>
              </div>
              <ol className="grid gap-px border border-current/15 bg-current/15 lg:grid-cols-3">
                {project.architecture.map((step, index) => (
                  <li key={step.title} className={`p-6 sm:p-7 ${theme.page}`}>
                    <p className={`text-xs font-bold tracking-[0.22em] ${theme.accentText}`}>{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-12 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={`border-b ${theme.border}`}>
          <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <article>
              <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${theme.accentText}`}>What it does</p>
              <h2 className={`${fraunces.className} mt-5 text-4xl font-semibold leading-none tracking-[-0.035em]`}>Concrete capability.</h2>
              <ul className="mt-8 space-y-5">
                {project.capabilities.map((capability) => (
                  <li key={capability} className={`flex gap-4 border-t pt-5 text-base leading-7 ${theme.border}`}>
                    <Check className={`mt-1 h-5 w-5 shrink-0 ${theme.accentText}`} aria-hidden="true" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${theme.accentText}`}>Product principles</p>
              <h2 className={`${fraunces.className} mt-5 text-4xl font-semibold leading-none tracking-[-0.035em]`}>The choices behind it.</h2>
              <ol className="mt-8 space-y-5">
                {project.principles.map((principle, index) => (
                  <li key={principle} className={`grid grid-cols-[2.5rem_1fr] gap-3 border-t pt-5 text-base leading-7 ${theme.border}`}>
                    <span className={`text-sm font-bold ${theme.accentText}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span>{principle}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </section>

        <section className="bg-stone-950 text-stone-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-400">Evidence, not theatre</p>
                <h2 className={`${fraunces.className} mt-5 text-4xl font-semibold leading-none tracking-[-0.035em] sm:text-5xl`}>
                  What can be said clearly.
                </h2>
              </div>
              <dl className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                {project.evidence.map((item) => (
                  <div key={item.label} className="bg-stone-950 p-6 sm:p-7">
                    <dt className={`${fraunces.className} text-4xl font-semibold text-white sm:text-5xl`}>{item.value}</dt>
                    <dd className="mt-4 text-sm leading-6 text-stone-400">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-14 border-t border-white/10 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Built with</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <li key={technology} className="border border-white/15 px-3 py-2 text-xs text-stone-300">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={`${theme.surface}`}>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8 lg:py-20">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${theme.accentText}`}>Continue the conversation</p>
              <h2 className={`${fraunces.className} mt-5 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-5xl`}>
                Interested in the product—or the system behind it?
              </h2>
            </div>
            <ProjectAction
              link={project.cta}
              className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${theme.accentBg}`}
            />
          </div>
        </section>

        <section className={`border-t ${theme.border}`}>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group mx-auto flex max-w-7xl items-end justify-between gap-8 px-4 py-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] sm:px-6 lg:px-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Next project</p>
              <p className={`${fraunces.className} mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl`}>{nextProject.title}</p>
            </div>
            <ArrowRight className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

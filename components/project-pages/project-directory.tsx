import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Fraunces } from "next/font/google"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { projects } from "@/lib/projects"

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
})

const cardThemes = {
  kisspdf: {
    shell: "border-[#d7c4b1] bg-[#f4e7d6] dark:border-[#665346] dark:bg-[#2a211c]",
    tag: "text-[#9e3d2d] dark:text-[#ff9d82]",
    marker: "bg-[#d64c35] text-white",
    line: "bg-[#d64c35]",
  },
  "open-gurukul": {
    shell: "border-[#d5bd94] bg-[#f1e4cc] dark:border-[#65563c] dark:bg-[#29251e]",
    tag: "text-[#9b501f] dark:text-[#f5a467]",
    marker: "bg-[#31295d] text-[#f7dda0]",
    line: "bg-[#d66b24]",
  },
  orgpage: {
    shell: "border-[#bed0bf] bg-[#e3ebdf] dark:border-[#405d4b] dark:bg-[#1c2a22]",
    tag: "text-[#326047] dark:text-[#9ad0ad]",
    marker: "bg-[#28513c] text-[#e9f2e2]",
    line: "bg-[#4f8567]",
  },
  "haryanvi-tts": {
    shell: "border-[#d6b38d] bg-[#f0dfc9] dark:border-[#57483c] dark:bg-[#231e1a]",
    tag: "text-[#9b481f] dark:text-[#f1a06f]",
    marker: "bg-[#29211c] text-[#f4b94f]",
    line: "bg-[#f0a437]",
  },
} as const

export default function ProjectDirectory() {
  return (
    <div className="min-h-screen bg-[#f6f2ea] text-stone-950 dark:bg-[#11100e] dark:text-stone-50">
      <Header />
      <main>
        <section className="border-b border-stone-300/80 dark:border-stone-800">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
                  xAGI Labs · Selected work
                </p>
                <p className="mt-5 max-w-sm text-sm leading-6 text-stone-600 dark:text-stone-400">
                  Products, prototypes, and research—each labeled by what is actually available today.
                </p>
              </div>
              <div>
                <h1 className={`${fraunces.className} max-w-4xl text-[clamp(3.6rem,9vw,7.8rem)] font-semibold leading-[0.84] tracking-[-0.055em]`}>
                  Work built to be used.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
                  We build practical products around language, learning, documents, team communication, and intelligent workflows. This is the working casebook—not a wall of invented metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const theme = cardThemes[project.slug as keyof typeof cardThemes]

              return (
                <article
                  key={project.slug}
                  className={`group relative overflow-hidden border p-6 transition-transform duration-300 motion-reduce:transition-none sm:p-8 lg:min-h-[32rem] ${theme.shell} hover:-translate-y-1 motion-reduce:hover:translate-y-0`}
                >
                  <span className={`absolute inset-x-0 top-0 h-1.5 ${theme.line}`} />
                  <div className="flex items-start justify-between gap-6">
                    <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${theme.tag}`}>{project.category}</p>
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold ${theme.marker}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-16 sm:mt-20">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-600 dark:text-stone-300">
                      <span>{project.status}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>
                    <h2 className={`${fraunces.className} mt-4 text-5xl font-semibold leading-none tracking-[-0.04em] sm:text-6xl`}>
                      {project.title}
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-7 text-stone-700 dark:text-stone-300">{project.summary}</p>
                  </div>
                  <div className="mt-12 border-t border-current/15 pt-5 sm:mt-16">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                    >
                      Read the project notes
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </Link>
                    {project.links[0]?.external ? (
                      <a
                        href={project.links[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-6 inline-flex min-h-11 items-center gap-1.5 text-sm text-stone-600 underline decoration-stone-400 underline-offset-4 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white"
                      >
                        Visit product
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="border-y border-stone-300/80 bg-stone-950 text-stone-50 dark:border-stone-800">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6bcff]">Build with xAGI Labs</p>
              <h2 className={`${fraunces.className} mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.035em] sm:text-5xl`}>
                Have a difficult product problem worth making tangible?
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#e9dfca] px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

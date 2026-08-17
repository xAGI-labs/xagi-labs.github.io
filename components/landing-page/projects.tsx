import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects"

const cardStyles = {
  kisspdf: "border-[#d7c4b1] bg-[#f4e7d6] dark:border-[#665346] dark:bg-[#2a211c]",
  "open-gurukul": "border-[#d5bd94] bg-[#f1e4cc] dark:border-[#65563c] dark:bg-[#29251e]",
  orgpage: "border-[#bed0bf] bg-[#e3ebdf] dark:border-[#405d4b] dark:bg-[#1c2a22]",
  "haryanvi-tts": "border-[#d6b38d] bg-[#f0dfc9] dark:border-[#57483c] dark:bg-[#231e1a]",
} as const

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">Studio casebook</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600 dark:text-gray-400">
            Live products, working prototypes, and active research—labeled by their real state.
          </p>
        </div>
        <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.035em] text-black dark:text-white md:text-6xl">
          Recent work with a point of view.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className={`group relative overflow-hidden border p-6 transition-transform duration-300 motion-reduce:transition-none md:min-h-[24rem] md:p-8 ${cardStyles[project.slug as keyof typeof cardStyles]} hover:-translate-y-1 motion-reduce:hover:translate-y-0`}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-600 dark:text-stone-300">{project.category}</p>
                <p className="mt-2 text-xs text-stone-500 dark:text-stone-400">{project.status}</p>
              </div>
              <span className="text-xs font-bold text-stone-500 dark:text-stone-400">{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="mt-16 md:mt-20">
              <h3 className="text-4xl font-semibold tracking-[-0.035em] text-stone-950 dark:text-stone-50 md:text-5xl">{project.title}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-stone-700 dark:text-stone-300">{project.summary}</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-current/15 pt-5">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-stone-50"
              >
                Read project notes
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </Link>
              {project.links[0]?.external ? (
                <a
                  href={project.links[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm text-stone-600 underline decoration-stone-400 underline-offset-4 dark:text-stone-400"
                >
                  Visit product
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Link href="/portfolio" className="inline-flex min-h-12 items-center gap-2 border-b-2 border-black py-3 text-sm font-semibold text-black dark:border-white dark:text-white">
          Explore every project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

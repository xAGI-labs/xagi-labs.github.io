import Link from "next/link"

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f2ea] px-4 text-stone-950 dark:bg-[#11100e] dark:text-stone-50">
      <div className="max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Project not found</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight">This case note is not in the studio index.</h1>
        <Link href="/portfolio" className="mt-8 inline-flex min-h-12 items-center bg-stone-950 px-6 py-3 text-sm font-semibold text-white dark:bg-stone-50 dark:text-stone-950">
          Browse all projects
        </Link>
      </div>
    </main>
  )
}

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

const orgpageLinks = [
  { href: "/orgpage", label: "Overview" },
  { href: "/orgpage/privacy", label: "Privacy" },
]

type OrgpageLegalShellProps = {
  eyebrow?: string
  title: string
  description: string
  children: React.ReactNode
}

export default function OrgpageLegalShell({
  eyebrow = "Orgpage",
  title,
  description,
  children,
}: OrgpageLegalShellProps) {
  return (
    <div className="min-h-screen bg-[#f8f6ef] text-zinc-950 dark:bg-[#0b0f0d] dark:text-white">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 border-b border-zinc-200 pb-8 dark:border-white/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">{description}</p>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Orgpage pages">
            {orgpageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-950 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:border-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:font-medium">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

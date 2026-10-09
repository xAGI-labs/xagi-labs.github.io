import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

const legalLinks = [
  { href: "/astro-gemini", label: "Overview" },
  { href: "/astro-gemini/support", label: "Support" },
  { href: "/astro-gemini/privacy", label: "Privacy" },
  { href: "/astro-gemini/terms", label: "Terms" },
  { href: "/astro-gemini/account-deletion", label: "Account Deletion" },
]

type AstroGeminiLegalShellProps = {
  title: string
  description: string
  children: React.ReactNode
}

export default function AstroGeminiLegalShell({ title, description, children }: AstroGeminiLegalShellProps) {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-stone-950 dark:bg-[#0d0b10] dark:text-white">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 border-b border-stone-200 pb-8 dark:border-white/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
            AstroGemini
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-stone-950 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-stone-700 dark:text-stone-300">
            {description}
          </p>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="AstroGemini legal pages">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-800 transition hover:border-stone-950 dark:border-white/15 dark:bg-white/5 dark:text-stone-100 dark:hover:border-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="prose prose-stone max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:font-medium">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

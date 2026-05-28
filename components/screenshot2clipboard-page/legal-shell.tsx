import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

const supportEmail = "saurav@xagi.in"

const appLinks = [
  { href: "/screenshot2clipboard/support", label: "Support" },
  { href: "/screenshot2clipboard/privacy-policy", label: "Privacy Policy" },
]

type Screenshot2ClipboardShellProps = {
  title: string
  eyebrow: string
  description: string
  children: React.ReactNode
}

export { supportEmail }

export default function Screenshot2ClipboardShell({
  title,
  eyebrow,
  description,
  children,
}: Screenshot2ClipboardShellProps) {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-stone-950 dark:bg-[#11100d] dark:text-stone-50">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="border-y border-stone-300 py-8 dark:border-stone-700 sm:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                {eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 dark:text-stone-50 sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-base leading-7 text-stone-700 dark:text-stone-300">{description}</p>
            </div>
            <nav className="flex flex-wrap gap-3" aria-label="Screenshot2Clipboard pages">
              {appLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-stone-400 px-4 py-2 text-sm font-medium text-stone-800 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white dark:border-stone-600 dark:text-stone-200 dark:hover:border-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <div className="prose prose-stone mt-10 max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:font-medium prose-a:text-stone-950 dark:prose-a:text-stone-50">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

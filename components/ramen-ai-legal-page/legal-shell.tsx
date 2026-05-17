import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

const legalLinks = [
  { href: "/ramen-ai-privacy-policy", label: "Privacy Policy" },
  { href: "/ramen-ai-privacy-policy/account-deletion", label: "Account Deletion" },
  { href: "/ramen-ai-privacy-policy/support", label: "Support" },
  { href: "/ramen-ai-privacy-policy/terms", label: "Terms" },
  { href: "/ramen-ai-privacy-policy/subscription-cancellation", label: "Subscription Help" },
]

type LegalShellProps = {
  title: string
  description: string
  children: React.ReactNode
}

export default function RamenAILegalShell({ title, description, children }: LegalShellProps) {
  return (
    <div className="min-h-screen bg-white text-gray-950 dark:bg-[#0a0a0a] dark:text-white">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
            Ramen AI Legal
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-950 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200 dark:hover:border-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:font-medium">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

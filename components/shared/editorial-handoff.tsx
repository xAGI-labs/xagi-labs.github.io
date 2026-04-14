import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BOOKING_URL } from "@/lib/booking"

interface RelatedLink {
  href: string
  label: string
}

interface EditorialHandoffProps {
  eyebrow?: string
  title: string
  description: string
  contextLine?: string
  bookingLabel?: string
  secondaryLabel?: string
  secondaryHref?: string
  relatedLinks?: RelatedLink[]
}

export default function EditorialHandoff({
  eyebrow = "Built by xAGI Labs",
  title,
  description,
  contextLine,
  bookingLabel = "Book a strategy call",
  secondaryLabel = "View services",
  secondaryHref = "/services",
  relatedLinks = [],
}: EditorialHandoffProps) {
  return (
    <section className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-sm dark:border-blue-900/40 dark:from-blue-950/30 dark:to-cyan-950/20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
        {eyebrow}
      </p>
      <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="max-w-3xl text-base text-gray-700 dark:text-gray-300">{description}</p>
      {contextLine && (
        <p className="mt-4 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
          {contextLine}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
        >
          {bookingLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition-colors hover:border-gray-400 dark:border-gray-700 dark:text-white dark:hover:border-gray-600"
        >
          {secondaryLabel}
        </Link>
      </div>

      {relatedLinks.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-700 dark:bg-[#0a0a0a] dark:text-gray-300 dark:hover:text-blue-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

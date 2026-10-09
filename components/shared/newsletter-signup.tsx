"use client"

import { Mail } from "lucide-react"
import { trackMarketingEvent } from "@/lib/marketing-attribution"

type NewsletterSignupProps = {
  placement: string
  compact?: boolean
}

export default function NewsletterSignup({ placement, compact = false }: NewsletterSignupProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-[#111111]">
      <div className={compact ? "space-y-4" : "flex flex-col gap-5 md:flex-row md:items-center md:justify-between"}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Voice AI field notes
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
            Get practical notes on voice AI rollouts and customer operations automation.
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-400">
            Short updates on call workflows, rollout risks, handoff patterns, and automation ideas for ops teams.
          </p>
        </div>
        <a
          href="mailto:saurav@xagi.in?subject=Subscribe%20me%20to%20xAGI%20voice%20AI%20notes"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
          onClick={() => {
            trackMarketingEvent("newsletter_signup_click", { placement })
          }}
        >
          <Mail className="h-4 w-4" />
          Subscribe
        </a>
      </div>
    </section>
  )
}

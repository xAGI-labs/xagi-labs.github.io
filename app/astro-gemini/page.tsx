import type { Metadata } from "next"
import Link from "next/link"
import AstroGeminiLegalShell from "@/components/astro-gemini-page/legal-shell"

export const metadata: Metadata = {
  title: "AstroGemini - Vedic Astrology App",
  description:
    "AstroGemini helps you understand your Vedic birth chart with personalized chart insights, daily astrology context, and an AI astrology guide named Tara.",
  alternates: {
    canonical: "https://xagi-labs.github.io/astro-gemini",
  },
}

const features = [
  {
    title: "Personal Birth Chart",
    body: "Create your Janma Kundli using your date, time, and place of birth.",
  },
  {
    title: "AI Astrology Chat",
    body: "Ask Tara questions about your chart, relationships, career, timing, emotions, and spiritual patterns.",
  },
  {
    title: "Vedic Chart Insights",
    body: "Understand Lagna, Rashi, Nakshatra, houses, planets, and major chart themes in plain English.",
  },
  {
    title: "Dasha Timeline",
    body: "Explore your Vimshottari Mahadasha periods and how different life phases may feel.",
  },
  {
    title: "Panchang Context",
    body: "View useful daily astrology details in a clean, readable format.",
  },
  {
    title: "Family Profiles",
    body: "Create and view charts for family members from one account.",
  },
]

export default function AstroGeminiPage() {
  return (
    <AstroGeminiLegalShell
      title="Your birth chart, decoded."
      description="AstroGemini helps you understand your Vedic birth chart through clear explanations, personalized chart insights, daily astrology context, and an AI astrology guide named Tara."
    >
      <p>
        Explore your Lagna, Moon sign, Nakshatra, planetary placements, Mahadasha timeline, Panchang details, and family
        profiles in one simple app.
      </p>

      <h2>Features</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <section
            key={feature.title}
            className="rounded-lg border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold text-stone-950 dark:text-white">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-700 dark:text-stone-300">{feature.body}</p>
          </section>
        ))}
      </div>

      <h2>Important Note</h2>
      <p>
        AstroGemini is for reflection, self-understanding, spiritual exploration, and entertainment. It does not provide
        medical, legal, financial, psychological, or professional advice.
      </p>

      <h2>Download AstroGemini</h2>
      <p>Available for iPhone and Android.</p>
      <p>
        Need help? Visit <Link href="/astro-gemini/support">AstroGemini Support</Link>.
      </p>
    </AstroGeminiLegalShell>
  )
}

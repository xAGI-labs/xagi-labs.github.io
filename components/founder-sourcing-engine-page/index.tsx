import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import {
  ArrowRight,
  Bell,
  Briefcase,
  Building2,
  CheckCircle2,
  Eye,
  LineChart,
  Search,
  Target,
  Users,
} from "lucide-react"

const signalCards = [
  {
    label: "Founder movement",
    time: "11m ago",
    title: "Second-time operator started recruiting an applied AI founding team.",
    detail: "Signals clustered from role changes, early hiring, and repeated domain activity.",
  },
  {
    label: "Company traction",
    time: "3h ago",
    title: "Vertical SaaS startup showed sustained hiring and product launch momentum.",
    detail: "Watchlist flagged a new operating pattern before the company hit mainstream coverage.",
  },
  {
    label: "Network expansion",
    time: "1d ago",
    title: "Technical founder became newly visible across customer, talent, and investor surfaces.",
    detail: "Useful for spotting conviction, distribution strength, and category pull before the round is obvious.",
  },
]

const blindSpots = [
  {
    title: "Shared lists only show the obvious",
    description:
      "By the time a founder is widely circulating, your team is already competing on the same surface area as everyone else.",
  },
  {
    title: "Warm intros arrive too late",
    description:
      "Most referral-driven sourcing begins after momentum is already visible, which compresses time for real diligence and relationship building.",
  },
  {
    title: "Analyst time disappears into manual monitoring",
    description:
      "Teams spend hours checking profiles, launches, hiring pages, and scattered notes instead of building conviction around emerging people.",
  },
]

const workflowSteps = [
  {
    icon: Search,
    eyebrow: "Search",
    title: "Screen for founder patterns that match your thesis",
    description:
      "Filter by market, operator background, growth cues, geography, recent movement, and other sourcing criteria without relying on one static directory.",
  },
  {
    icon: Bell,
    eyebrow: "Watch",
    title: "Track founder and company changes in motion",
    description:
      "Follow shortlist candidates and get updates as teams form, products launch, roles change, hiring starts, or company momentum shifts.",
  },
  {
    icon: Target,
    eyebrow: "Prioritize",
    title: "Turn noisy updates into investment-ready shortlists",
    description:
      "Focus the team on signals that matter for outreach, thematic research, and early relationship building rather than raw alert volume.",
  },
]

const signalLenses = [
  {
    icon: Users,
    title: "Founder formation",
    description: "Who is leaving, teaming up, re-emerging, or pulling strong operators into a new orbit.",
  },
  {
    icon: Building2,
    title: "Company momentum",
    description: "Which early companies are showing hiring, launch, and market pull before they look consensus-safe.",
  },
  {
    icon: LineChart,
    title: "Traction cues",
    description: "Behavioral and operating signals that suggest acceleration, not just a press cycle.",
  },
  {
    icon: Eye,
    title: "Continuous watchlists",
    description: "A live view of people and companies your team wants to study over time, not a one-off export.",
  },
]

const useCases = [
  "Seed and pre-seed firms building founder-first outbound sourcing motions",
  "Platform teams that want richer watchlists and earlier outreach triggers",
  "Thematic investors mapping emerging builders before category narratives harden",
  "Funds that want an internal intelligence layer rather than another static spreadsheet",
]

const differentiators = [
  "Built around people plus company movement, not just firmographic snapshots",
  "Designed for under-the-radar discovery rather than broad-market lead volume",
  "Useful for both thesis exploration and ongoing watchlist management",
  "Structured to support partner judgment instead of replacing it with black-box scoring",
]

const editorialNotes = [
  "Under-the-radar founders rarely announce themselves in a way that fits a clean inbound queue.",
  "The edge comes from seeing a pattern take shape early enough to earn the right to a conversation.",
  "Founder Sourcing Engine gives VC teams a cleaner way to observe, compare, and revisit those patterns over time.",
]

export default function FounderSourcingEnginePage() {
  return (
    <div className="min-h-screen bg-[#f7f1e8] text-stone-900">
      <Header />

      <main>
        <section className="overflow-hidden border-b border-stone-300/70 bg-[radial-gradient(circle_at_top_left,_rgba(123,63,42,0.12),_transparent_32%),linear-gradient(180deg,_rgba(255,251,245,0.92),_rgba(247,241,232,1))]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:px-8">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center rounded-full border border-stone-400/60 bg-white/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-stone-700"
                style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
              >
                New intelligence workflow for VC teams
              </div>
              <p
                className="mt-8 text-sm uppercase tracking-[0.32em] text-stone-500"
                style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
              >
                Founder discovery for firms that want to get there before the market does
              </p>
              <h1
                className="mt-4 max-w-4xl text-[clamp(3.2rem,8vw,6.2rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-stone-950"
                style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
              >
                Find great founders before they become everyone&apos;s favorite intro.
              </h1>
              <p
                className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl"
                style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
              >
                Founder Sourcing Engine helps investment teams discover under-the-radar founders by following people
                and company signals in motion, then turning that movement into sharper watchlists, earlier outreach,
                and better screening.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-3.5 text-sm font-semibold text-stone-50 transition-colors hover:bg-stone-800"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Book a strategy call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-400/70 px-7 py-3.5 text-sm font-semibold text-stone-800 transition-colors hover:bg-white/60"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  See how it works
                </a>
              </div>

              <div className="mt-12 grid gap-5 border-t border-stone-300/80 pt-8 md:grid-cols-3">
                {editorialNotes.map((note) => (
                  <p
                    key={note}
                    className="text-sm leading-6 text-stone-600"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    {note}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-[#7b3f2a]/15 blur-3xl" />
              <div className="relative border border-stone-400/70 bg-[linear-gradient(180deg,rgba(255,252,248,0.95),rgba(244,236,227,0.94))] p-5 shadow-[0_20px_80px_rgba(82,52,35,0.12)]">
                <div className="flex items-center justify-between border-b border-stone-300/80 pb-4">
                  <div>
                    <p
                      className="text-[11px] uppercase tracking-[0.28em] text-stone-500"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      Watchlist desk
                    </p>
                    <h2
                      className="mt-2 text-2xl font-semibold text-stone-950"
                      style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                    >
                      Emerging founder signals
                    </h2>
                  </div>
                  <span
                    className="rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-xs text-stone-600"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    Updated continuously
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {signalCards.map((card) => (
                    <article key={card.title} className="border border-stone-300/80 bg-white/70 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className="text-[11px] uppercase tracking-[0.26em] text-stone-500"
                            style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                          >
                            {card.label}
                          </p>
                          <h3
                            className="mt-2 text-xl leading-7 text-stone-900"
                            style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                          >
                            {card.title}
                          </h3>
                        </div>
                        <span
                          className="whitespace-nowrap text-xs text-stone-500"
                          style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                        >
                          {card.time}
                        </span>
                      </div>
                      <p
                        className="mt-3 text-sm leading-6 text-stone-600"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        {card.detail}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 border-t border-stone-300/80 pt-5 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="border border-stone-300/80 bg-[#6b2f1e] p-4 text-stone-50">
                    <p
                      className="text-[11px] uppercase tracking-[0.26em] text-stone-200"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      Screening lens
                    </p>
                    <p
                      className="mt-3 text-lg leading-7"
                      style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                    >
                      Build conviction from movement, not just static company profiles.
                    </p>
                  </div>
                  <div className="border border-stone-300/80 bg-white/70 p-4">
                    <p
                      className="text-[11px] uppercase tracking-[0.26em] text-stone-500"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      Investment use
                    </p>
                    <p
                      className="mt-3 text-sm leading-6 text-stone-700"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      Source founder conversations earlier, revisit promising names with context, and keep partner
                      discussions anchored to live evidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300/70 bg-[#efe5d7]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="max-w-xl">
                <p
                  className="text-[11px] uppercase tracking-[0.28em] text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Why this exists
                </p>
                <h2
                  className="mt-4 text-[clamp(2.2rem,5vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-stone-950"
                  style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                >
                  Traditional sourcing misses the founders who are still becoming visible.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {blindSpots.map((item) => (
                  <article key={item.title} className="border-t border-stone-500/60 pt-4">
                    <h3
                      className="text-xl leading-7 text-stone-900"
                      style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-6 text-stone-700"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="border-b border-stone-300/70 bg-[#f9f5ef]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="max-w-xl">
                <p
                  className="text-[11px] uppercase tracking-[0.28em] text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Workflow
                </p>
                <h2
                  className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-stone-950"
                  style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                >
                  Search, watch, and prioritize around the signals that actually shape early conviction.
                </h2>
              </div>

              <div className="space-y-6">
                {workflowSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="grid gap-4 border border-stone-300/80 bg-white/70 p-6 md:grid-cols-[72px_minmax(0,1fr)]"
                  >
                    <div className="flex items-start justify-between md:flex-col md:justify-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-400/70 bg-[#f0e2cf]">
                        <step.icon className="h-5 w-5 text-stone-800" />
                      </div>
                      <span
                        className="text-sm text-stone-500"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        0{index + 1}
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-[11px] uppercase tracking-[0.24em] text-stone-500"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        {step.eyebrow}
                      </p>
                      <h3
                        className="mt-2 text-2xl leading-8 text-stone-900"
                        style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="mt-3 max-w-2xl text-sm leading-6 text-stone-700"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300/70 bg-[#f2e8db]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.28em] text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Signal lenses
                </p>
                <h2
                  className="mt-4 max-w-2xl text-[clamp(2.1rem,4vw,3.8rem)] font-semibold leading-[1] tracking-[-0.03em] text-stone-950"
                  style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                >
                  Follow founders through the company signals that usually sit outside a neat CRM field.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {signalLenses.map((lens) => (
                  <article key={lens.title} className="border border-stone-300/80 bg-white/75 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6b2f1e] text-stone-50">
                        <lens.icon className="h-[18px] w-[18px]" />
                      </div>
                      <h3
                        className="text-xl text-stone-900"
                        style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                      >
                        {lens.title}
                      </h3>
                    </div>
                    <p
                      className="mt-4 text-sm leading-6 text-stone-700"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      {lens.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300/70 bg-[#f8f2ea]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="max-w-xl">
                <p
                  className="text-[11px] uppercase tracking-[0.28em] text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Best fit
                </p>
                <h2
                  className="mt-4 text-[clamp(2.1rem,4.5vw,3.7rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-stone-950"
                  style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                >
                  Built for firms that believe founder sourcing is a compounding research advantage.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <article className="border border-stone-300/80 bg-white/75 p-6">
                  <p
                    className="text-[11px] uppercase tracking-[0.24em] text-stone-500"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    Use it when
                  </p>
                  <ul className="mt-4 space-y-3">
                    {useCases.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-stone-700"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[#6b2f1e]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="border border-stone-300/80 bg-[#6b2f1e] p-6 text-stone-50">
                  <p
                    className="text-[11px] uppercase tracking-[0.24em] text-stone-200"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    Differentiators
                  </p>
                  <ul className="mt-4 space-y-3">
                    {differentiators.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-stone-100"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        <Briefcase className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-stone-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f1e8]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-8 border border-stone-400/70 bg-[linear-gradient(135deg,rgba(255,251,246,0.98),rgba(240,228,214,0.94))] p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p
                  className="text-[11px] uppercase tracking-[0.28em] text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Closing note
                </p>
                <h2
                  className="mt-4 text-[clamp(2.2rem,5vw,4.1rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-stone-950"
                  style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                >
                  Give your partnership a better way to find the founders that won&apos;t wait for consensus.
                </h2>
                <p
                  className="mt-5 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  If your team wants a founder sourcing workflow that combines live signals, tighter watchlists, and
                  earlier investment conversations, we can map the right approach with you.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-3.5 text-sm font-semibold text-stone-50 transition-colors hover:bg-stone-800"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Talk to xAGI Labs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p
                  className="text-center text-xs text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Strategy call via the existing xAGI contact flow
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

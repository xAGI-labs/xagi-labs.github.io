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
  Mail,
  Search,
  Target,
  Users,
} from "lucide-react"

const blindSpots = [
  {
    title: "Thesis work lives in slides, not in sourcing systems",
    description:
      "Deal teams define a crisp angle, then lose weeks translating that thesis into searchable target universes, owner context, and outreach priorities.",
  },
  {
    title: "Analyst hours disappear into fragmented research",
    description:
      "A lot of the work is still copy-pasting from websites, registries, LinkedIn, and old spreadsheets instead of building conviction around live targets.",
  },
  {
    title: "Generic outreach weakens proprietary deal flow",
    description:
      "Founders and owner-operators ignore messages that sound like templated broker spam, especially when the buyer clearly has not done the homework.",
  },
]

const workflowSteps = [
  {
    icon: Target,
    eyebrow: "Thesis intake",
    title: "Turn a buy thesis into a live sourcing brief",
    description:
      "Define the sectors, revenue model, geography, size band, ownership profile, and quality thresholds that matter to your deal team.",
  },
  {
    icon: Search,
    eyebrow: "Target mapping",
    title: "Build a private market target universe",
    description:
      "iDeal maps likely companies, clusters them by fit, and keeps enriching the list as new signals, websites, and market context emerge.",
  },
  {
    icon: Mail,
    eyebrow: "Owner context",
    title: "Prepare high-context outreach before it goes out",
    description:
      "The system assembles owner and company context, drafts personalized messages, and queues everything for review before any email is sent.",
  },
  {
    icon: Bell,
    eyebrow: "Response handling",
    title: "Keep warm conversations moving without losing the thread",
    description:
      "Replies, callbacks, and follow-ups are organized into a clean operating loop so the team can focus on real conversations instead of admin.",
  },
]

const engineLayers = [
  {
    icon: Building2,
    title: "Target discovery",
    description: "Find lower middle market companies that actually match the deal thesis instead of just matching a broad keyword.",
  },
  {
    icon: Users,
    title: "Owner intelligence",
    description: "Pull the relevant operator, founder, or owner context needed to make the first outreach feel specific and credible.",
  },
  {
    icon: Eye,
    title: "Signal monitoring",
    description: "Track changes across websites, hiring, product moves, and public operating clues that help time outreach more intelligently.",
  },
  {
    icon: LineChart,
    title: "Deal team prioritization",
    description: "Surface which targets deserve attention now and which should stay on the watchlist until the timing improves.",
  },
]

const manualProcess = [
  "Translate the buy thesis into a static spreadsheet by hand.",
  "Search fragmented directories and websites for candidate companies.",
  "Manually identify owners, leadership, and likely contact routes.",
  "Write broad outreach templates that sound interchangeable.",
  "Chase replies and follow-ups across inboxes and notes.",
]

const idealProcess = [
  "Turn the thesis into a structured sourcing brief with clear filters.",
  "Continuously map likely targets and enrich them with context.",
  "Generate partner-reviewable outreach tailored to each company.",
  "Track response signals and keep follow-up timing organized.",
  "Route only qualified conversations toward the deal team calendar.",
]

const useCases = [
  "Private equity firms building proprietary deal flow in fragmented markets",
  "Independent sponsors who need leverage without hiring a large sourcing bench",
  "Origination teams running multiple theses at once across different sectors",
  "Buyers who want AI to accelerate sourcing without removing partner judgment",
]

const thesisInputs = [
  "Sector focus, adjacency rules, and fragmented sub-verticals",
  "Geography, size band, ownership profile, and revenue mix",
  "Deal-breakers such as concentration, cyclicality, or channel risk",
  "Signals that suggest strong timing for a first conversation",
]

const operatingPrinciples = [
  "Human approval before outbound goes live",
  "Specific, thesis-aware outreach instead of generic templates",
  "Live watchlists for follow-up timing and response management",
]

export default function IdealPage() {
  return (
    <div className="min-h-screen bg-[#f6efe5] text-stone-950">
      <Header />

      <main>
        <section className="overflow-hidden border-b border-stone-300/80 bg-[radial-gradient(circle_at_top_left,_rgba(104,63,33,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(121,92,54,0.08),_transparent_34%),linear-gradient(180deg,_rgba(255,252,247,0.94),_rgba(246,239,229,1))]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[minmax(0,1.06fr)_minmax(340px,0.94fr)] lg:px-8">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center rounded-full border border-stone-400/70 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-700"
                style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
              >
                AI deal sourcing engine for private equity
              </div>

              <p
                className="mt-8 text-sm uppercase tracking-[0.34em] text-stone-500"
                style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
              >
                Thesis-led origination for firms that want more proprietary conversations
              </p>

              <h1
                className="mt-4 max-w-5xl text-[clamp(3.25rem,8vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-stone-950"
                style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
              >
                iDeal turns your buy thesis into a live sourcing engine.
              </h1>

              <p
                className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl"
                style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
              >
                Built for private equity deal teams, iDeal helps you map targets, gather owner context, prepare
                personalized outreach, and keep proprietary conversations moving, all while keeping partner review in
                the loop.
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
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-400/70 px-7 py-3.5 text-sm font-semibold text-stone-800 transition-colors hover:bg-white/70"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  See the workflow
                </a>
              </div>

              <div className="mt-12 grid gap-4 border-t border-stone-300/80 pt-8 sm:grid-cols-3">
                {operatingPrinciples.map((principle) => (
                  <div key={principle} className="border border-stone-300/80 bg-white/55 p-4">
                    <p
                      className="text-sm leading-6 text-stone-700"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-10 top-5 h-24 rounded-full bg-[#8b5a2b]/15 blur-3xl" />

              <div className="relative border border-stone-400/70 bg-[linear-gradient(180deg,rgba(255,252,248,0.97),rgba(243,234,223,0.94))] p-5 shadow-[0_24px_90px_rgba(84,56,31,0.14)]">
                <div className="flex items-center justify-between border-b border-stone-300/80 pb-4">
                  <div>
                    <p
                      className="text-[11px] uppercase tracking-[0.3em] text-stone-500"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      Example workflow
                    </p>
                    <h2
                      className="mt-2 text-2xl font-semibold text-stone-950"
                      style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                    >
                      Lower middle market deal origination desk
                    </h2>
                  </div>
                  <span
                    className="rounded-full border border-stone-300 bg-white/80 px-3 py-1 text-xs text-stone-600"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    Human-reviewed
                  </span>
                </div>

                <div className="mt-5 border border-stone-300/80 bg-stone-950 p-4 text-stone-50">
                  <p
                    className="text-[11px] uppercase tracking-[0.28em] text-stone-300"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    Active thesis
                  </p>
                  <p
                    className="mt-3 text-lg leading-7"
                    style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                  >
                    Family-owned HVAC and field services businesses in the Sun Belt with recurring service revenue,
                    strong local density, and clear add-on potential.
                  </p>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="border border-stone-300/80 bg-white/75 p-4">
                    <p
                      className="text-[11px] uppercase tracking-[0.28em] text-stone-500"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      What iDeal surfaces
                    </p>
                    <ul
                      className="mt-4 space-y-3 text-sm leading-6 text-stone-700"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#87552d]" />
                        Companies that match the thesis more closely than generic list pulls.
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#87552d]" />
                        Owner and operator context needed to personalize first-touch outreach.
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#87552d]" />
                        Response queues, follow-up timing, and notes before a first call is booked.
                      </li>
                    </ul>
                  </div>

                  <div className="border border-stone-300/80 bg-[#e6d5bf]/45 p-4">
                    <p
                      className="text-[11px] uppercase tracking-[0.28em] text-stone-500"
                      style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                    >
                      Partner control points
                    </p>
                    <div className="mt-4 space-y-3">
                      {["Approve target clusters", "Review outbound drafts", "Prioritize warm conversations"].map((item) => (
                        <div key={item} className="border border-stone-300/70 bg-white/70 px-3 py-3 text-sm text-stone-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-stone-300/80 pt-5">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["Thesis aware", "Owner specific", "Calendar ready"].map((label) => (
                      <div key={label} className="border border-stone-300/70 bg-white/70 px-3 py-3 text-center text-sm text-stone-700">
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300/80 bg-[#f3eadf]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p
                className="text-sm uppercase tracking-[0.32em] text-stone-500"
                style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
              >
                Why this matters
              </p>
              <h2
                className="mt-4 text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-stone-950"
                style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
              >
                Proprietary deal flow breaks when the operating system is still a spreadsheet.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {blindSpots.map((spot) => (
                <article key={spot.title} className="border border-stone-300/80 bg-white/65 p-6">
                  <h3
                    className="text-2xl leading-8 text-stone-950"
                    style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                  >
                    {spot.title}
                  </h3>
                  <p
                    className="mt-4 text-sm leading-7 text-stone-700"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    {spot.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="border-b border-stone-300/80 bg-[#f8f3eb]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
              <div className="max-w-xl">
                <p
                  className="text-sm uppercase tracking-[0.32em] text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Workflow
                </p>
                <h2
                  className="mt-4 text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[0.97] tracking-[-0.04em] text-stone-950"
                  style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                >
                  The sourcing loop is simple. The execution underneath it is not.
                </h2>
                <p
                  className="mt-5 text-base leading-8 text-stone-700"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  iDeal gives the deal team a cleaner way to move from thesis to targets to outreach to booked
                  conversations without forcing analysts to spend their best hours on repetitive list-building.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {workflowSteps.map((step) => {
                  const Icon = step.icon

                  return (
                    <article key={step.title} className="border border-stone-300/80 bg-white p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-[#f3e5d1] text-stone-900">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p
                          className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500"
                          style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                        >
                          {step.eyebrow}
                        </p>
                      </div>
                      <h3
                        className="mt-5 text-2xl leading-8 text-stone-950"
                        style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="mt-4 text-sm leading-7 text-stone-700"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        {step.description}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300/80 bg-[#efe4d6]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div className="border border-stone-300/80 bg-stone-950 p-7 text-stone-50">
                <p
                  className="text-sm uppercase tracking-[0.32em] text-stone-300"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Thesis inputs
                </p>
                <h2
                  className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[0.96] tracking-[-0.04em]"
                  style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                >
                  Start with how your team already thinks about a market.
                </h2>
                <div className="mt-8 space-y-4">
                  {thesisInputs.map((item) => (
                    <div key={item} className="border border-stone-700/80 bg-white/5 px-4 py-4 text-sm leading-6 text-stone-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className="text-sm uppercase tracking-[0.32em] text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Engine outputs
                </p>
                <h2
                  className="mt-4 text-[clamp(2.2rem,5vw,3.7rem)] font-semibold leading-[0.97] tracking-[-0.04em] text-stone-950"
                  style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                >
                  Each layer gets the team closer to a real owner conversation.
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {engineLayers.map((layer) => {
                    const Icon = layer.icon

                    return (
                      <article key={layer.title} className="border border-stone-300/80 bg-white/80 p-6">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-[#f3e5d1] text-stone-900">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3
                          className="mt-5 text-2xl leading-8 text-stone-950"
                          style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                        >
                          {layer.title}
                        </h3>
                        <p
                          className="mt-4 text-sm leading-7 text-stone-700"
                          style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                        >
                          {layer.description}
                        </p>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300/80 bg-[#f8f2e8]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p
                className="text-sm uppercase tracking-[0.32em] text-stone-500"
                style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
              >
                Compare the motion
              </p>
              <h2
                className="mt-4 text-[clamp(2.2rem,5vw,3.9rem)] font-semibold leading-[0.97] tracking-[-0.04em] text-stone-950"
                style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
              >
                Less scavenger hunt. More time spent on conviction and conversations.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="border border-stone-300/80 bg-white/70 p-7">
                <p
                  className="text-sm uppercase tracking-[0.28em] text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Manual process
                </p>
                <div className="mt-6 space-y-4">
                  {manualProcess.map((item, index) => (
                    <div key={item} className="grid grid-cols-[auto_1fr] gap-4 border-t border-stone-200 pt-4 first:border-t-0 first:pt-0">
                      <span
                        className="text-sm font-semibold text-stone-500"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        0{index + 1}
                      </span>
                      <p
                        className="text-sm leading-7 text-stone-700"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#7b4b24]/30 bg-stone-950 p-7 text-stone-50">
                <p
                  className="text-sm uppercase tracking-[0.28em] text-stone-300"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  With iDeal
                </p>
                <div className="mt-6 space-y-4">
                  {idealProcess.map((item, index) => (
                    <div key={item} className="grid grid-cols-[auto_1fr] gap-4 border-t border-stone-700/80 pt-4 first:border-t-0 first:pt-0">
                      <span
                        className="text-sm font-semibold text-stone-300"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        0{index + 1}
                      </span>
                      <p
                        className="text-sm leading-7 text-stone-200"
                        style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300/80 bg-[#f1e7db]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] lg:px-8">
            <div>
              <p
                className="text-sm uppercase tracking-[0.32em] text-stone-500"
                style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
              >
                Best fit
              </p>
              <h2
                className="mt-4 text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[0.97] tracking-[-0.04em] text-stone-950"
                style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
              >
                Built for firms that source with a point of view.
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {useCases.map((item) => (
                  <div key={item} className="border border-stone-300/80 bg-white/75 p-5 text-sm leading-7 text-stone-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="border border-stone-300/80 bg-white/80 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-[#f3e5d1] text-stone-900">
                  <Briefcase className="h-5 w-5" />
                </div>
                <p
                  className="text-sm uppercase tracking-[0.28em] text-stone-500"
                  style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                >
                  Operating principle
                </p>
              </div>

              <h3
                className="mt-5 text-3xl leading-9 text-stone-950"
                style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
              >
                Automation should widen the funnel, not remove judgment from the deal team.
              </h3>

              <p
                className="mt-4 text-sm leading-7 text-stone-700"
                style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
              >
                iDeal is designed to help firms originate better, not to pretend the software is doing the investing.
                It speeds up sourcing operations while leaving approvals, prioritization, and relationship calls where
                they belong.
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-[#f7f0e6]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="border border-stone-300/80 bg-stone-950 px-6 py-10 text-stone-50 sm:px-10">
              <p
                className="text-sm uppercase tracking-[0.32em] text-stone-300"
                style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
              >
                Final call to action
              </p>
              <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div className="max-w-3xl">
                  <h2
                    className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em]"
                    style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
                  >
                    If your team has a thesis, iDeal can help turn it into more first conversations.
                  </h2>
                  <p
                    className="mt-5 text-base leading-8 text-stone-300"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    We can tailor the workflow around your sector focus, sourcing motion, and review process, then help
                    you package it into a product PE firms immediately understand.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f1d2ad] px-7 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-[#e9c594]"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    Pitch this to PE firms
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:saurav@xagi.in"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-600 px-7 py-3.5 text-sm font-semibold text-stone-100 transition-colors hover:bg-white/5"
                    style={{ fontFamily: '"Avenir Next", "Segoe UI", sans-serif' }}
                  >
                    Email xAGI Labs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

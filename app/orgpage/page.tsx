import type { Metadata } from "next"
import Link from "next/link"
import {
  Bell,
  BookOpenCheck,
  CheckCircle2,
  ExternalLink,
  Flag,
  Link2,
  Megaphone,
  Palette,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserPlus,
} from "lucide-react"
import Header from "@/components/shared/header"

const chromeWebStoreUrl = "TODO_CHROME_WEB_STORE_URL"

export const metadata: Metadata = {
  title: "Orgpage - Company homepage for every new tab",
  description:
    "Orgpage replaces Chrome's new tab page with a customizable company homepage for announcements, onboarding, links, leaderboards, shoutouts, and team updates.",
  alternates: {
    canonical: "https://xagi.in/orgpage",
  },
}

const featureCards = [
  {
    title: "Announcements",
    body: "Share important updates without losing them in chat.",
    icon: Megaphone,
  },
  {
    title: "Onboarding",
    body: "Give new teammates a clear checklist for their first days.",
    icon: BookOpenCheck,
  },
  {
    title: "Company links",
    body: "Put handbooks, dashboards, runbooks, and tools one click away.",
    icon: Link2,
  },
  {
    title: "Leaderboards",
    body: "Highlight momentum, wins, and team activity.",
    icon: Trophy,
  },
  {
    title: "Shoutouts",
    body: "Let teammates recognize each other directly from the new tab.",
    icon: Sparkles,
  },
  {
    title: "Themes",
    body: "Customize logo, brand color, tone, density, and enabled widgets.",
    icon: Palette,
  },
]

const adminFeatures = [
  "Manage company profile, logo, welcome message, and pinned update",
  "Create announcements and onboarding tasks",
  "Add and organize company links",
  "Invite members with owner, admin, or member roles",
  "Configure the taste profile and enabled widgets",
  "Moderate shoutouts",
  "View basic product analytics events",
]

const securityBullets = [
  "Manifest V3 Chrome extension",
  "Firebase Auth for sign-in",
  "Firestore-backed organization data",
  "Role-based access for owners, admins, and members",
  "No remote extension code",
  "No health, financial, payment, or browsing-history data collection",
]

const faqs = [
  {
    question: "What does Orgpage replace?",
    answer: "Orgpage replaces Chrome's new tab page with your company's internal homepage.",
  },
  {
    question: "Who can edit the page?",
    answer:
      "Owners and admins can manage the company profile, theme, announcements, links, onboarding tasks, leaderboard entries, members, invites, and shoutout moderation.",
  },
  {
    question: "Can members contribute?",
    answer:
      "Members can view the Orgpage, complete onboarding tasks, open company links, and create shoutouts.",
  },
  {
    question: "Does Orgpage read browsing history?",
    answer: "No. Orgpage does not collect browsing history, page contents, or activity from other websites.",
  },
  {
    question: "Does Orgpage use remote code?",
    answer:
      "No. The extension code is bundled in the extension package. Orgpage connects to Firebase and Google APIs as remote services, but it does not load remote JavaScript as extension code.",
  },
]

export default function OrgpageLandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f6ef] text-zinc-950 dark:bg-[#0b0f0d] dark:text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-zinc-200 dark:border-white/10">
          <div className="absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-b-[6rem] bg-emerald-200/35 blur-3xl dark:bg-emerald-500/10" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:text-emerald-300">
                Your company, every new tab.
              </p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
                Orgpage
              </h1>
              <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
                Turn every Chrome new tab into a beautiful company homepage for your team.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-700 dark:text-zinc-300 sm:text-lg">
                Orgpage gives companies a lightweight internal noticeboard for announcements, onboarding, company
                links, pinned updates, team leaderboards, shoutouts, and quick actions. It is built for teams that want
                a simple internal homepage without adopting a heavy intranet.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={chromeWebStoreUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Get Orgpage
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/orgpage/privacy"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-950 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white"
                >
                  Read privacy policy
                </Link>
              </div>
            </div>

            <div className="relative lg:pt-8">
              <div className="rounded-[1.75rem] border border-zinc-300 bg-zinc-950 p-3 shadow-2xl shadow-emerald-900/10 dark:border-white/15 dark:bg-zinc-900">
                <div className="rounded-[1.25rem] bg-[#f8f6ef] p-4 dark:bg-[#121612] sm:p-5">
                  <div className="flex items-center gap-2 border-b border-zinc-200 pb-3 dark:border-white/10">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="ml-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-white/10 dark:text-zinc-300">
                      New tab
                    </span>
                  </div>
                  <div className="grid gap-4 pt-5 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-2xl bg-white p-5 dark:bg-white/[0.06]">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                        Monday HQ
                      </p>
                      <h2 className="mt-3 text-2xl font-bold tracking-tight">Good morning, team.</h2>
                      <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                        Q3 onboarding updates, launch links, and team wins are ready for the day.
                      </p>
                      <div className="mt-5 grid gap-2">
                        {["Launch room", "Product handbook", "Customer dashboard"].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-white/10"
                          >
                            <span>{item}</span>
                            <ExternalLink className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <div className="rounded-2xl bg-emerald-900 p-5 text-emerald-50">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <Bell className="h-4 w-4" aria-hidden="true" />
                          Pinned update
                        </div>
                        <p className="mt-3 text-sm leading-6 text-emerald-50/85">
                          Ship review starts at 3 PM. Keep release notes in the launch room.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-white p-5 dark:bg-white/[0.06]">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <Flag className="h-4 w-4 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
                          Onboarding
                        </div>
                        <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                          {["Read handbook", "Set up tools", "Meet your buddy"].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
                What Orgpage Does
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                One shared homepage for the workday
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
                Orgpage replaces the default Chrome new tab with a team-owned page that keeps important company updates
                visible throughout the day.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featureCards.map((feature) => {
                const Icon = feature.icon

                return (
                  <section
                    key={feature.title}
                    className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.06]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-zinc-950 dark:text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{feature.body}</p>
                  </section>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
                Built For Teams
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Lightweight intranet, zero heavy rollout
              </h2>
            </div>
            <p className="text-base leading-8 text-zinc-700 dark:text-zinc-300">
              Orgpage is designed for startups and small teams that need one visible place for internal context. Admins
              manage the page, invite members, publish updates, and tune the layout. Members can view the Orgpage,
              complete onboarding tasks, open team links, and create shoutouts.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
              Admin Features
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Control the page without engineering help
            </h2>
          </div>
          <div className="grid gap-3">
            {adminFeatures.map((feature) => (
              <div
                key={feature}
                className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <UserPlus
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-300"
                  aria-hidden="true"
                />
                <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-200">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-950 text-white dark:border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-400 text-emerald-950">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Privacy And Security
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Designed around a narrow purpose</h2>
              <p className="mt-5 text-base leading-8 text-zinc-300">
                Orgpage only requests the permissions needed to provide its new-tab company homepage. It does not read
                arbitrary websites, collect browsing history, inspect page contents, or sell user data.
              </p>
              <Link
                href="/orgpage/privacy"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-white"
              >
                Read the full privacy policy
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {securityBullets.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  <p className="mt-3 text-sm leading-6 text-zinc-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
          <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-white/10 dark:border-white/10">
            {faqs.map((faq) => (
              <section key={faq.question} className="py-6">
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">{faq.answer}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-200 bg-[#f8f6ef] px-4 py-8 text-sm text-zinc-700 dark:border-white/10 dark:bg-[#0b0f0d] dark:text-zinc-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Orgpage is a product by xAGI Labs.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/orgpage/privacy" className="font-medium hover:text-zinc-950 dark:hover:text-white">
              Privacy Policy
            </Link>
            <a href={chromeWebStoreUrl} className="font-medium hover:text-zinc-950 dark:hover:text-white">
              Chrome Web Store
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

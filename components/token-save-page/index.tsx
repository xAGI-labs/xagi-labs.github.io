import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import {
  ArrowRight,
  BadgeDollarSign,
  Brain,
  CheckCircle2,
  CircleDashed,
  Database,
  Gauge,
  Lock,
  Sparkles,
} from "lucide-react"

const bookingHref = "https://calendar.app.google/94mtSE2aw7RnSWhj8"

const proofStats = [
  { label: "Typical Cost Reduction", value: "90-99%" },
  { label: "Migration Design Sprint", value: "2-3 Weeks" },
  { label: "Quality Target", value: "Parity with Current Baseline" },
]

const painPoints = [
  "Per-token pricing compounds as your product usage grows.",
  "Gross margins shrink each time adoption succeeds.",
  "Budget unpredictability makes roadmap planning harder.",
  "Vendor dependency limits control over performance, privacy, and scale.",
]

const playbook = [
  {
    title: "1. Move To Open-Weight Performance",
    description:
      "We shift high-volume workloads to Qwen, a fast and highly capable open-weight model family optimized for production economics.",
    icon: CircleDashed,
  },
  {
    title: "2. Claude-Calibrated Fine-Tuning",
    description:
      "We generate premium synthetic training data from your highest-quality proprietary outputs, then fine-tune for your domain until outputs match your expected tone, structure, and reasoning quality.",
    icon: Brain,
  },
  {
    title: "3. EU Sovereignty Option",
    description:
      "For Europe-first compliance requirements, we use Mistral with the same fine-tuning discipline on EU-friendly infrastructure and governance controls.",
    icon: Lock,
  },
]

const reasons = [
  "Massive cost compression: convert expensive inference into sustainable unit economics.",
  "No quality downgrade mandate: we optimize against your real baseline, not generic benchmarks.",
  "Model and infrastructure ownership: stop renting intelligence from a single API vendor.",
  "Predictable scaling: prevent token spikes from turning growth into a financial risk.",
]

const processSteps = [
  {
    title: "Workload Audit",
    body: "We map your token spend, prompt patterns, routing logic, and highest-ROI migration targets.",
  },
  {
    title: "Golden Dataset Construction",
    body: "We capture and curate strong proprietary outputs to create domain-specific supervision data.",
  },
  {
    title: "Custom Fine-Tuning",
    body: "We fine-tune Qwen or Mistral for your tasks and iterate until quality reaches your acceptance bar.",
  },
  {
    title: "Shadow Testing + Cutover",
    body: "We run side-by-side comparisons in production-like traffic and switch gradually with rollback safety.",
  },
]

const faqs = [
  {
    question: "Will this reduce answer quality for my users?",
    answer:
      "Our benchmark is your current production quality baseline. We tune against your real prompts and run shadow tests before cutover to protect user experience.",
  },
  {
    question: "How fast can we see savings?",
    answer:
      "Most teams see measurable savings as soon as migrated traffic starts flowing, often within weeks after dataset and tuning readiness.",
  },
  {
    question: "Can we keep some proprietary models in the stack?",
    answer:
      "Yes. We support hybrid routing so only expensive high-volume paths move first, while specialty paths can remain on proprietary models.",
  },
  {
    question: "Do you handle regulated or EU-sensitive workloads?",
    answer:
      "Yes. We support Mistral-based pathways and deployment constraints for GDPR-driven and sovereignty-sensitive requirements.",
  },
]

export default function TokenSavePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#111827] dark:bg-[#0a0a0a] dark:text-[#f5f5f5]">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-[#ecfeff] via-[#f0f9ff] to-[#eef2ff] dark:from-[#0a0f16] dark:via-[#101726] dark:to-[#161323] py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 dark:border-cyan-900/50 bg-white/80 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-800 dark:text-cyan-300">
                <Sparkles className="h-4 w-4" />
                Token Save by xAGI Labs
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Slash Your AI Token Costs by 90-99% Without Sacrificing Quality
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                We help high-growth teams escape the proprietary API tax by migrating production workloads to custom,
                fine-tuned open-weight models designed for your exact use case.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 bg-[#111827] text-white dark:bg-white dark:text-[#111827] font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Your Free Token Cost Analysis
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="#playbook"
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 border border-slate-300 dark:border-slate-700 font-semibold hover:bg-white/70 dark:hover:bg-white/5 transition-colors"
                >
                  See The Migration Playbook
                </a>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
              {proofStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-white/5 p-6 text-center"
                >
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101010] p-8">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Stop Letting API Bills Eat Your Margins</h2>
                <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed">
                  You should not be penalized for growth. If usage is rising, your unit economics should improve, not
                  collapse under rising proprietary token fees.
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Token Save is our migration framework to preserve quality while replacing expensive inference with
                  optimized open-weight pipelines.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101010] p-8">
                <h3 className="text-xl font-bold">The Hidden Cost Pattern</h3>
                <ul className="mt-5 space-y-3">
                  {painPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-600 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="playbook" className="py-16 md:py-24 bg-slate-50 dark:bg-[#111111]">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center">
              The xAGI Playbook: Proprietary Quality, Open-Weight Economics
            </h2>
            <p className="mt-5 text-center max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
              We do not do blind model swaps. We engineer a production migration path around your prompts, outcomes,
              and quality thresholds.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {playbook.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0c0c] p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-cyan-700 dark:text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101010] p-8 md:p-12">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                <BadgeDollarSign className="h-6 w-6 text-emerald-600" />
                <h2 className="text-3xl md:text-4xl font-black">Why Migrate with xAGI Labs</h2>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {reasons.map((reason) => (
                  <div key={reason} className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-white to-cyan-50 dark:from-[#0a0a0a] dark:to-[#111827]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">How the Migration Works</h2>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                Your team stays focused on product velocity while our engineers handle model, data, and deployment
                complexity.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {processSteps.map((step, idx) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0d0d] p-7"
                >
                  <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Step {idx + 1}</p>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <blockquote className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101010] p-8 md:p-10">
              <p className="text-2xl leading-relaxed font-medium text-slate-900 dark:text-white">
                “xAGI Labs did not just lower our API bill. They changed our unit economics. We can now ship AI-heavy
                features confidently without fearing a runaway token bill.”
              </p>
              <footer className="mt-6 text-sm text-slate-600 dark:text-slate-400">
                Placeholder testimonial — CTO, growth-stage SaaS company
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#111111]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black">Frequently Asked Questions</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0e0e0e] p-6"
                >
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-2 text-slate-700 dark:text-slate-300">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-8 md:p-12 text-white text-center">
              <div className="mx-auto w-fit rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                No commitment required
              </div>
              <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tight">Ready to Take Control of AI Costs?</h2>
              <p className="mt-5 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                In a 30-minute technical consultation, we will review your current token spend, identify your top
                migration candidates, and estimate realistic savings before any engagement.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 hover:opacity-90 transition-opacity"
                >
                  Book Your Technical Consultation Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-8 py-4 font-semibold hover:bg-white/10 transition-colors"
                >
                  Talk To xAGI Team
                </Link>
              </div>
              <p className="mt-4 text-sm text-white/80">
                We will map your current API stack and share a practical savings range with clear assumptions.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f0f0f] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <Gauge className="h-4 w-4 text-cyan-600" />
                  Performance-First
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Tuning and evaluation centered on your real production tasks.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f0f0f] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <Database className="h-4 w-4 text-cyan-600" />
                  Data-Controlled
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Curated synthetic data pipelines aligned to your brand voice and policy.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f0f0f] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <Lock className="h-4 w-4 text-cyan-600" />
                  Governance-Ready
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Deployment architectures designed around compliance and sovereignty constraints.
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

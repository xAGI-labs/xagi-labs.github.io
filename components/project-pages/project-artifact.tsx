import {
  ArrowDownToLine,
  BookOpen,
  Check,
  FileText,
  GraduationCap,
  Link2,
  Megaphone,
  MonitorUp,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react"
import type { ProjectVisual } from "@/lib/projects"

export default function ProjectArtifact({ visual }: { visual: ProjectVisual }) {
  if (visual === "paper-desk") {
    return (
      <div
        className="relative min-h-[28rem] overflow-hidden border border-[#d9c8b6] bg-[#f2e4d2] p-6 shadow-[0_28px_80px_rgba(105,59,39,0.16)] sm:p-8"
        aria-label="Illustration of KissPDF processing a document locally in the browser"
      >
        <div className="absolute -right-10 -top-8 h-40 w-40 rounded-full bg-[#f1b51d] opacity-80" />
        <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-[#d64c35] opacity-90" />
        <div className="relative mx-auto max-w-md rotate-[-1.5deg] border border-[#c6b29e] bg-[#fffaf2] p-5 shadow-[12px_16px_0_rgba(102,58,41,0.12)] sm:p-7">
          <div className="flex items-center justify-between border-b border-[#dfd1c4] pb-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d64c35] text-[#fffaf2]">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-[#2c211c]">quarterly-notes.pdf</p>
                <p className="text-xs text-[#755f52]">12 pages · 4.8 MB</p>
              </div>
            </div>
            <Check className="h-5 w-5 text-[#2f6950]" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 gap-3 py-5 text-sm font-medium text-[#3b2b24]">
            {["Merge", "Compress", "Sign", "Redact"].map((tool) => (
              <div key={tool} className="border border-[#ded0c1] bg-[#f8efe4] px-3 py-3">
                {tool}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 bg-[#213c31] px-4 py-3 text-sm text-[#f7f0e5]">
            <ShieldCheck className="h-5 w-5 text-[#f1b51d]" aria-hidden="true" />
            <span>Processed on this device</span>
          </div>
          <div className="mt-5 flex items-center justify-between text-sm">
            <span className="text-[#755f52]">Ready in your browser</span>
            <span className="inline-flex items-center gap-2 bg-[#d64c35] px-4 py-2 font-semibold text-white">
              Download
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
        <span className="absolute bottom-6 right-6 rotate-3 rounded-full border border-[#263e34] bg-[#f5c642] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#263e34]">
          No upload
        </span>
      </div>
    )
  }

  if (visual === "learning-spaces") {
    return (
      <div
        className="relative min-h-[28rem] overflow-hidden border border-[#d6bd95] bg-[#efe1c8] p-6 shadow-[0_28px_80px_rgba(75,53,34,0.16)] sm:p-8"
        aria-label="Illustration of the three Open Gurukul learning environments"
      >
        <div className="absolute inset-x-0 top-0 h-2 bg-[#d66b24]" />
        <div className="relative flex min-h-[23rem] flex-col justify-between border border-[#c9b28e] bg-[#fbf3e3] p-5 sm:p-7">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b4b1f]">One learning vision</p>
              <p className="mt-2 max-w-xs font-serif text-3xl leading-tight text-[#241d36]">A patient guide, wherever learning happens.</p>
            </div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f2858] text-[#f7d995]">
              <BookOpen className="h-7 w-7" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { name: "Platform", note: "Learn on the web", icon: MonitorUp },
              { name: "Edge", note: "Study on-device", icon: Smartphone },
              { name: "Classroom", note: "Learn together", icon: GraduationCap },
            ].map((space, index) => {
              const Icon = space.icon
              return (
                <div
                  key={space.name}
                  className={index === 1 ? "bg-[#2f2858] p-4 text-[#fff7e8]" : "border border-[#d7c5a9] bg-[#f3e7d3] p-4 text-[#2f2858]"}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <p className="mt-8 font-semibold">{space.name}</p>
                  <p className={index === 1 ? "mt-1 text-xs text-[#dcd6f0]" : "mt-1 text-xs text-[#6f6254]"}>{space.note}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#6f6254]">
            <Sparkles className="h-4 w-4 text-[#d66b24]" aria-hidden="true" />
            Local-first · teacher-respecting · built for access
          </div>
        </div>
      </div>
    )
  }

  if (visual === "new-tab") {
    return (
      <div
        className="relative min-h-[28rem] overflow-hidden border border-[#b9c9ba] bg-[#dfe9dc] p-5 shadow-[0_28px_80px_rgba(38,75,57,0.15)] sm:p-8"
        aria-label="Illustration of the Orgpage company new-tab experience"
      >
        <div className="relative overflow-hidden border border-[#294a39] bg-[#18372a] p-2 shadow-[14px_18px_0_rgba(31,66,49,0.16)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#df7065]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e9bd62]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#7dbe8d]" />
            <span className="ml-3 flex-1 rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/60">New tab</span>
          </div>
          <div className="grid gap-3 bg-[#f5f3e9] p-4 sm:grid-cols-[1.15fr_0.85fr] sm:p-5">
            <div className="border border-[#d9dfd3] bg-white p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3a6a51]">Northstar Labs</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#1f2c25]">Good morning, team.</h3>
              <p className="mt-2 text-xs leading-5 text-[#607067]">Launch links, onboarding notes, and this week’s team wins.</p>
              <div className="mt-5 space-y-2">
                {["Product handbook", "Launch room", "Customer dashboard"].map((link) => (
                  <div key={link} className="flex items-center justify-between border border-[#e1e5dd] px-3 py-2 text-xs text-[#30483a]">
                    <span>{link}</span>
                    <Link2 className="h-3.5 w-3.5 text-[#71927f]" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <div className="bg-[#29543e] p-4 text-[#f4f5e9]">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <Megaphone className="h-4 w-4 text-[#cfe58d]" aria-hidden="true" />
                  Pinned update
                </div>
                <p className="mt-3 text-xs leading-5 text-white/75">Demo review starts at 3 PM. Notes are in the launch room.</p>
              </div>
              <div className="border border-[#d9dfd3] bg-white p-4 text-[#30483a]">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <Users className="h-4 w-4 text-[#4e8065]" aria-hidden="true" />
                  Onboarding
                </div>
                <div className="mt-3 space-y-2 text-[11px]">
                  {["Read the handbook", "Meet your buddy", "Set up tools"].map((task) => (
                    <div key={task} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#4e8065]" aria-hidden="true" />
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute bottom-3 right-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#345944] sm:bottom-4 sm:right-8">
          Your company · every new tab
        </span>
      </div>
    )
  }

  const bars = [28, 56, 42, 76, 38, 64, 88, 48, 72, 36, 58, 84, 46, 68, 32, 54, 80, 44, 62, 30]

  return (
    <div
      className="relative min-h-[28rem] overflow-hidden border border-[#4b4037] bg-[#201c19] p-6 text-[#fff5df] shadow-[0_28px_80px_rgba(60,31,18,0.25)] sm:p-8"
      aria-label="Illustration of the Haryanvi TTS data and training pipeline"
    >
      <div className="absolute right-0 top-0 h-48 w-48 translate-x-16 -translate-y-16 rounded-full bg-[#d85d2d] opacity-70 blur-2xl" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f4b94f]">Bangru / Haryanvi voice lab</p>
          <p className="mt-2 text-xl font-semibold">Sample review · 03</p>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4b94f] text-[#2a211b]">
          <Radio className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="relative mt-8 border border-white/10 bg-white/[0.04] p-4 sm:p-5">
        <div className="flex h-28 items-center gap-1" aria-hidden="true">
          {bars.map((height, index) => (
            <span
              key={`${height}-${index}`}
              className={index > 5 && index < 15 ? "w-full bg-[#f4b94f]" : "w-full bg-[#d85d2d]"}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/45">
          <span>00:00</span>
          <span>Full precision sample</span>
          <span>00:08</span>
        </div>
      </div>
      <div className="relative mt-5 grid gap-2 sm:grid-cols-3">
        {[
          ["01", "Audit corpus"],
          ["02", "Gate training"],
          ["03", "Listen & review"],
        ].map(([step, label], index) => (
          <div key={step} className={index === 1 ? "bg-[#f4b94f] p-3 text-[#2a211b]" : "border border-white/10 p-3 text-[#fff5df]"}>
            <p className="text-[10px] font-bold tracking-[0.2em] opacity-60">{step}</p>
            <p className="mt-3 text-sm font-semibold">{label}</p>
          </div>
        ))}
      </div>
      <p className="relative mt-5 text-xs leading-5 text-white/55">Research artifact · production readiness is not claimed</p>
    </div>
  )
}

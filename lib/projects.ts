export type ProjectVisual = "paper-desk" | "learning-spaces" | "new-tab" | "voice-lab"

export type ProjectLink = {
  label: string
  href: string
  external?: boolean
}

export type ProjectProfile = {
  slug: string
  title: string
  category: string
  status: string
  statusDetail: string
  year: string
  summary: string
  thesis: string
  problem: string
  response: string
  visual: ProjectVisual
  capabilities: string[]
  principles: string[]
  architecture: Array<{
    title: string
    body: string
  }>
  evidence: Array<{
    value: string
    label: string
  }>
  stack: string[]
  links: ProjectLink[]
  cta: ProjectLink
}

export const projects: ProjectProfile[] = [
  {
    slug: "kisspdf",
    title: "KissPDF",
    category: "Privacy-first document tools",
    status: "Live product",
    statusDetail: "Available as a browser-based PDF toolkit",
    year: "2026",
    summary:
      "A free PDF toolbox that keeps document processing in the browser—without an account, upload queue, or paid download gate.",
    thesis: "PDF chores should be quick, private, and pleasantly unsurprising.",
    problem:
      "Everyday PDF work is often routed through upload-first services that add accounts, queues, limits, and uncertainty about where a sensitive document is processed.",
    response:
      "KissPDF puts a broad set of focused document tools behind a clear, job-based interface. Files are processed locally in browser memory, with privacy explained at the moment a document is selected.",
    visual: "paper-desk",
    capabilities: [
      "Merge, split, reorder, rotate, and clean PDF pages",
      "Compress and convert common document and image formats",
      "Sign, watermark, protect, unlock, redact, and repair files",
      "Searchable tool directory designed for desktop and mobile",
    ],
    principles: [
      "Process document bytes locally whenever the browser can do the job",
      "Show the useful tool before asking the visitor to read marketing copy",
      "Use honest privacy language instead of invented trust signals",
      "Keep the full workflow usable on a phone",
    ],
    architecture: [
      {
        title: "Choose a job",
        body: "Plain-language categories help people reach the right tool without learning PDF terminology.",
      },
      {
        title: "Work locally",
        body: "Browser-focused PDF libraries transform files in memory instead of sending them to an application server.",
      },
      {
        title: "Download directly",
        body: "The finished document is returned without a signup wall, usage meter, or delayed export step.",
      },
    ],
    evidence: [
      { value: "50+", label: "browser-based document tools" },
      { value: "Local", label: "document processing model" },
      { value: "0", label: "accounts required" },
    ],
    stack: ["TypeScript", "Vite", "Tailwind CSS", "PDF-Lib", "PDF.js", "Tesseract.js", "Cloudflare Pages"],
    links: [
      {
        label: "Use KissPDF",
        href: "https://kisspdf.pages.dev",
        external: true,
      },
    ],
    cta: {
      label: "Open KissPDF",
      href: "https://kisspdf.pages.dev",
      external: true,
    },
  },
  {
    slug: "open-gurukul",
    title: "Open Gurukul",
    category: "Offline-first learning ecosystem",
    status: "Live ecosystem",
    statusDetail: "Web, learning platform, and Android app are publicly available",
    year: "2026",
    summary:
      "A learning ecosystem that brings patient guidance to the web, a learner’s own Android device, and shared classroom screens.",
    thesis: "Scale attention, not replace teachers.",
    problem:
      "Personal guidance is scarce, while connectivity, hardware, language, and classroom size determine whether a learner can benefit from digital education at all.",
    response:
      "Open Gurukul treats online, edge, and classroom experiences as three forms of one learning vision. It combines source-grounded study flows with private on-device AI and teacher-respecting classroom delivery.",
    visual: "learning-spaces",
    capabilities: [
      "Source-grounded course and study experiences on the web",
      "Offline-capable Android tutoring with supported on-device Gemma models",
      "Questions, explanations, flashcards, quizzes, notes, and mind maps",
      "PDF, DOCX, camera, QR sharing, multilingual UI, and read-aloud support",
    ],
    principles: [
      "Learning is a relationship, not a one-shot answer",
      "AI extends patient teaching; it does not replace the teacher",
      "Local-first operation is a privacy and continuity advantage",
      "Every capability must remain legible and usable on modest Android devices",
    ],
    architecture: [
      {
        title: "Platform",
        body: "A web learning environment for turning trusted source material into clear, visual courses and guided study.",
      },
      {
        title: "Edge",
        body: "A private study companion that can run a supported language model directly on a learner’s Android device.",
      },
      {
        title: "Classroom",
        body: "A shared learning mode designed around one Android device connected to a television or large classroom display.",
      },
    ],
    evidence: [
      { value: "3", label: "connected learning environments" },
      { value: "Offline", label: "supported Android study mode" },
      { value: "Local", label: "learning data by default" },
    ],
    stack: ["Flutter", "Dart", "Gemma", "Next.js", "TypeScript", "Cloudflare Workers", "Android"],
    links: [
      { label: "Visit Open Gurukul", href: "https://opengurukul.org", external: true },
      { label: "Open the learning platform", href: "https://platform.opengurukul.org", external: true },
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=org.opengurukul.app",
        external: true,
      },
    ],
    cta: {
      label: "Explore Open Gurukul",
      href: "https://opengurukul.org",
      external: true,
    },
  },
  {
    slug: "orgpage",
    title: "Orgpage",
    category: "Team communication prototype",
    status: "Pilot-ready prototype",
    statusDetail: "Working extension and admin experience; public store launch is not claimed",
    year: "2026",
    summary:
      "A Chrome new-tab homepage that keeps announcements, onboarding, team links, shoutouts, and shared context visible throughout the workday.",
    thesis: "The most useful company homepage is the one people already open.",
    problem:
      "Important company context disappears into chat threads, while traditional intranets are too heavy for small teams to maintain or remember to visit.",
    response:
      "Orgpage turns the browser’s new tab into a lightweight, team-owned surface. Owners and admins manage content; members see updates, complete onboarding tasks, open shared links, and recognize teammates.",
    visual: "new-tab",
    capabilities: [
      "Announcements, pinned updates, and company links",
      "New-hire onboarding checklists and invite flows",
      "Leaderboards, shoutouts, themes, and modular widgets",
      "Owner, admin, and member roles with organization-scoped data",
    ],
    principles: [
      "Put shared context in a surface the team naturally revisits",
      "Keep setup light enough for a startup or small organization",
      "Request only the browser permissions the new-tab experience needs",
      "Do not read browsing history or arbitrary page contents",
    ],
    architecture: [
      {
        title: "New-tab surface",
        body: "A Manifest V3 extension replaces the default new tab with the organization’s configured homepage.",
      },
      {
        title: "Team controls",
        body: "Role-aware admin routes manage members, invites, content, themes, and the widgets shown to the team.",
      },
      {
        title: "Organization data",
        body: "Firebase authentication and Firestore support organization-scoped content, with a local demo mode for evaluation.",
      },
    ],
    evidence: [
      { value: "MV3", label: "Chrome extension architecture" },
      { value: "3", label: "organization roles" },
      { value: "0", label: "browsing-history permissions" },
    ],
    stack: ["React", "TypeScript", "Vite", "Chrome Manifest V3", "Firebase Auth", "Firestore", "Tailwind CSS"],
    links: [{ label: "View product page", href: "/orgpage" }],
    cta: {
      label: "Discuss an Orgpage pilot",
      href: "/contact?product=orgpage",
    },
  },
  {
    slug: "haryanvi-tts",
    title: "Haryanvi TTS",
    category: "Speech research",
    status: "Research in progress",
    statusDetail: "Dataset and training workflow validated in bounded experiments; production readiness is not claimed",
    year: "2026",
    summary:
      "A reproducible data and training workflow exploring natural Bangru/Haryanvi speech synthesis with IndicF5 on accessible GPU infrastructure.",
    thesis: "Regional-language voice quality starts with disciplined data, not a bigger demo.",
    problem:
      "Haryanvi and its Bangru speech variety have limited high-quality text-to-speech infrastructure, while community recordings often arrive with inconsistent metadata, duplicate content, and unlinked audio.",
    response:
      "The project builds a gated workflow around dataset reconciliation, deterministic splits, pretrained-weight validation, small overfit tests, and persisted Colab artifacts before any larger training claim is made.",
    visual: "voice-lab",
    capabilities: [
      "Deterministic audit of transcripts, recordings, duplicates, and orphan files",
      "Reproducible free-GPU training path based on a pinned IndicF5 source",
      "Checkpoint conversion and pretrained-parameter coverage checks",
      "Baseline audio, smoke training, overfit gates, and persisted review reports",
    ],
    principles: [
      "Treat the metadata ledger as the authority before training",
      "Quarantine unmatched audio instead of silently adding it to the corpus",
      "Prove a tiny run can learn before spending time on scale",
      "Preserve reports, samples, and checkpoints so results can be inspected",
    ],
    architecture: [
      {
        title: "Audit",
        body: "Reconcile metadata-linked recordings, normalize transcripts, isolate rejected and orphan files, and generate review ledgers.",
      },
      {
        title: "Gate",
        body: "Validate model access, checkpoint structure, parameter coverage, dataset loading, and a tiny full-precision training run.",
      },
      {
        title: "Train and review",
        body: "Run bounded Colab experiments, persist artifacts to Drive, and listen to generated samples before considering a larger run.",
      },
    ],
    evidence: [
      { value: "2,768", label: "metadata-linked recordings audited" },
      { value: "15/15", label: "observed local workflow checks" },
      { value: "T4", label: "accessible Colab training target" },
    ],
    stack: ["Python", "PyTorch", "IndicF5", "Hugging Face", "Google Colab", "FFmpeg", "Dataset audit tooling"],
    links: [],
    cta: {
      label: "Discuss regional-language voice AI",
      href: "/contact?project=haryanvi-tts",
    },
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export type ReadinessAudience = "buyer" | "owner"
export type EvidenceState = "unknown" | "yes" | "no"
export type ReadinessQuestion = { id: string; question: string; action: string; category: "Evidence to prepare" | "Coverage gaps" | "Quality and acceptance" }

export const readinessQuestions: Record<ReadinessAudience, ReadinessQuestion[]> = {
  buyer: [
    { id: "task", question: "Have you defined the voice task and the failure you want to investigate?", action: "Describe the model task, an observed failure and what a useful result would change.", category: "Quality and acceptance" },
    { id: "language", question: "Are the target languages, dialects and speaker groups specified?", action: "List the languages, dialects, code-switching patterns and speaker groups to represent; record exclusions too.", category: "Coverage gaps" },
    { id: "conditions", question: "Have you specified hard recording and conversation conditions?", action: "Describe noise, devices, channels, interruptions and speaking styles that matter to the use case.", category: "Coverage gaps" },
    { id: "sample", question: "Is there a representative evaluation sample separated from training?", action: "Plan a representative held-out sample, with speaker separation and duplicate checks; agree its size during scoping.", category: "Quality and acceptance" },
    { id: "rights", question: "Can the source and proposed evaluation permissions be reviewed?", action: "Prepare a source summary and permission evidence for review before sharing any recordings or transcripts.", category: "Evidence to prepare" },
    { id: "scoring", question: "Are scoring, reviewer guidance and acceptance criteria documented?", action: "Define the scoring rubric, transcript conventions, reviewer checks and acceptance criteria before expanding the work.", category: "Quality and acceptance" },
  ],
  owner: [
    { id: "authority", question: "Can you identify the source and the person authorized to discuss licensing?", action: "Prepare a source register, ownership summary and the identity of the person authorized to discuss licensing.", category: "Evidence to prepare" },
    { id: "permissions", question: "Are the collection purpose and consent or permission evidence documented?", action: "Gather collection-purpose records and consent or permission evidence; flag anything that still needs review.", category: "Evidence to prepare" },
    { id: "restrictions", question: "Are third-party rights, privacy and confidentiality restrictions recorded?", action: "Document third-party terms, personal information, confidentiality restrictions and material excluded from review.", category: "Evidence to prepare" },
    { id: "coverage", question: "Can you describe the languages, populations, formats and missing coverage?", action: "Describe coverage, dates, formats and metadata in a high-level inventory, including gaps and exclusions.", category: "Coverage gaps" },
    { id: "quality", question: "Are quality checks, label review and known limitations documented?", action: "Record duplicate checks, annotation guidance, rejection rules, label review and known limitations.", category: "Quality and acceptance" },
    { id: "uses", question: "Are the proposed model uses and restricted uses specified?", action: "State which training or evaluation uses you want to discuss, alongside restrictions requiring review.", category: "Evidence to prepare" },
  ],
}

export function buildReadinessPlan(audience: ReadinessAudience, answers: Record<string, EvidenceState>) {
  const questions = readinessQuestions[audience]
  const gaps = questions.filter(q => answers[q.id] !== "yes")
  const rightsFirst = audience === "owner" && ["authority", "permissions", "restrictions", "uses"].some(id => answers[id] !== "yes")
  const criteriaFirst = audience === "buyer" && ["task", "scoring"].some(id => answers[id] !== "yes")
  return {
    gaps,
    heading: rightsFirst ? "Prepare the source and permissions evidence" : criteriaFirst ? "Define the evaluation question first" : gaps.length ? "Close the gaps before scaling" : "You have information to scope a review",
    recommendation: rightsFirst ? "Start with a metadata-only source discussion. Resolve missing authority and permission evidence before arranging any sample transfer." : criteriaFirst ? "Start with a scoping conversation about the failure, scoring and acceptance criteria. This gives a small pilot a useful question to answer." : audience === "buyer" ? "Scope a small voice evaluation pilot for one task and language or dialect. Agree representative conditions, a held-out sample and reviewer criteria before discussing scale." : "Discuss a representative review sample, intended uses and acceptance checks. Availability and permitted uses still need source-specific review.",
    href: audience === "buyer" ? "/dataset-brief/?offer=voice-evaluation&from=readiness#intake" : "/data-partnerships/#introduce",
    cta: audience === "buyer" ? "Discuss my voice evaluation scope" : "Discuss my source",
  }
}

export function readinessReport(audience: ReadinessAudience, answers: Record<string, EvidenceState>) {
  const plan = buildReadinessPlan(audience, answers)
  const labels = { yes: "Documented", no: "Missing", unknown: "Not sure" }
  return [`# xAGI ${audience === "buyer" ? "voice evaluation" : "dataset licensing"} preparation plan`, "", plan.heading, plan.recommendation, "", "## Your assessment", ...readinessQuestions[audience].map(q => `- ${q.question} ${labels[answers[q.id] || "unknown"]}`), "", "## Next steps", ...plan.gaps.map(q => `- ${q.action}`), ...(plan.gaps.length ? [] : ["- Review the underlying evidence, a representative sample and proposed uses with the team."]), "", "This self-assessment does not verify rights, certify readiness, value a dataset or guarantee availability, acceptance or model improvement.", "No answers were submitted by this tool. A download is not a received enquiry.", `Continue: https://xagi.in${plan.href}`, ""].join("\n")
}

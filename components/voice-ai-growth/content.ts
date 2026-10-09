import type { CommercialVoicePageContent } from "@/components/voice-ai-growth/commercial-page"

const commonImplementation = [
  {
    title: "Map the workflow",
    description: "Define intents, success criteria, escalation rules, required fields, and the exact moments a human should take over.",
  },
  {
    title: "Connect systems",
    description: "Wire the agent into telephony, CRM, help desk, knowledge base, and follow-up tools so every call produces usable data.",
  },
  {
    title: "Pilot with monitoring",
    description: "Launch against a controlled call segment, review transcripts and outcomes, tune policies, then expand volume.",
  },
]

const commonIntegrations = ["Twilio", "Plivo", "Exotel", "Salesforce", "HubSpot", "Freshworks", "Zoho", "Zapier", "Make", "n8n"]

export const commercialVoicePages: Record<string, CommercialVoicePageContent> = {
  "customer-support": {
    eyebrow: "Voice AI for customer support",
    title: "AI voice agents for repeat support calls and structured case intake.",
    description:
      "Deploy voice agents that answer common questions, collect case details, route urgent issues, and hand off complex conversations with transcript context attached.",
    painPoints: [
      "High-volume callers ask the same account, order, policy, or troubleshooting questions every day.",
      "Support teams lose time collecting basic details before a human can actually solve the issue.",
      "Customers abandon IVR trees when they cannot explain the problem naturally.",
      "Managers lack clean post-call summaries and QA visibility across routine calls.",
    ],
    workflows: [
      {
        title: "Tier-1 support triage",
        description: "Identify the issue, collect account details, suggest approved answers, and escalate with a complete case summary.",
      },
      {
        title: "Status and policy calls",
        description: "Answer order, appointment, claim, subscription, or policy questions using grounded knowledge retrieval.",
      },
      {
        title: "After-hours coverage",
        description: "Keep support available overnight while routing urgent or high-value cases to the right team.",
      },
    ],
    implementation: commonImplementation,
    integrations: commonIntegrations,
    faqs: [
      {
        question: "Can the agent transfer to a live support rep?",
        answer: "Yes. Handoff rules can trigger on customer intent, confidence level, account status, sentiment, or policy-sensitive topics.",
      },
      {
        question: "How do you keep answers accurate?",
        answer: "Responses are grounded in approved SOPs, help-center content, CRM context, and explicit guardrails for restricted topics.",
      },
      {
        question: "What should we automate first?",
        answer: "Start with repetitive, bounded calls where the desired outcome is clear: status checks, intake, booking, reminders, and simple troubleshooting.",
      },
    ],
    ctaTitle: "Map your first support voice-agent workflow",
    ctaDescription: "Bring one repetitive support call type. We will identify automation scope, escalation rules, and pilot success metrics.",
  },
  collections: {
    eyebrow: "Voice AI for collections",
    title: "AI voice agents for payment reminders, promise-to-pay flows, and account follow-up.",
    description:
      "Run consistent, respectful collections workflows that confirm identity, explain account status, capture outcomes, and route sensitive conversations to humans.",
    painPoints: [
      "Collectors spend too much time on reminder calls and basic account-status conversations.",
      "Follow-up outcomes are inconsistent across agents, shifts, and regions.",
      "Promise-to-pay, callback, and dispute data often lands outside the source of truth.",
      "Compliance-sensitive language needs repeatable scripts and escalation controls.",
    ],
    workflows: [
      {
        title: "Payment reminder calls",
        description: "Notify customers of due or overdue balances, confirm next steps, and log disposition data automatically.",
      },
      {
        title: "Promise-to-pay capture",
        description: "Record payment intent, date, amount, and preferred follow-up channel in your CRM or collections system.",
      },
      {
        title: "Dispute and hardship routing",
        description: "Detect sensitive situations and transfer customers to trained teams with the full conversation context.",
      },
    ],
    implementation: commonImplementation,
    integrations: commonIntegrations,
    faqs: [
      {
        question: "Can collections scripts be controlled?",
        answer: "Yes. Scripts, forbidden claims, required disclosures, and escalation triggers are defined before the pilot and reviewed through transcripts.",
      },
      {
        question: "Can the system update payment outcomes?",
        answer: "Yes. The workflow can write dispositions, callback times, promise-to-pay details, and summaries into connected systems.",
      },
      {
        question: "Is this only for large call centers?",
        answer: "No. It is useful anywhere repeat reminders and follow-ups consume team capacity, as long as the workflow has clear rules.",
      },
    ],
    ctaTitle: "Scope a controlled collections voice-agent pilot",
    ctaDescription: "We will map reminders, escalation triggers, data capture, and the metrics needed before scaling call volume.",
  },
  "outbound-qualification": {
    eyebrow: "Voice AI for outbound qualification",
    title: "AI voice agents for lead qualification, appointment setting, and structured outbound calls.",
    description:
      "Use voice agents to reach prospects quickly, qualify intent, capture structured answers, and route high-fit opportunities to sales or admissions teams.",
    painPoints: [
      "Sales and admissions teams lose speed when every lead needs a manual first call.",
      "Good prospects go cold before a human rep can qualify intent.",
      "Qualification notes are inconsistent and hard to compare across callers.",
      "Outbound campaigns need clear guardrails, local language support, and fast iteration.",
    ],
    workflows: [
      {
        title: "Inbound lead qualification",
        description: "Call new leads quickly, confirm need, budget, authority, timeline, and route strong fits to a human rep.",
      },
      {
        title: "Appointment setting",
        description: "Confirm interest, answer common objections, and schedule the next meeting or callback.",
      },
      {
        title: "Admissions and enrollment calls",
        description: "Qualify applicants, answer repeat program questions, and capture structured eligibility details.",
      },
    ],
    implementation: commonImplementation,
    integrations: commonIntegrations,
    faqs: [
      {
        question: "Can the voice agent call leads immediately?",
        answer: "Yes. Calls can be triggered from forms, CRM stages, campaign lists, or API events.",
      },
      {
        question: "Can it route qualified leads to sales?",
        answer: "Yes. High-intent conversations can trigger human handoff, calendar booking, CRM task creation, or Slack alerts.",
      },
      {
        question: "How do you prevent low-quality outreach?",
        answer: "We define qualification criteria, call limits, scripts, opt-out behavior, and review loops before scaling volume.",
      },
    ],
    ctaTitle: "Design your first outbound qualification workflow",
    ctaDescription: "Bring your current lead flow. We will map call triggers, qualification fields, and human routing rules.",
  },
}

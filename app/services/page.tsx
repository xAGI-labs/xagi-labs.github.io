import ServicesPage from "@/components/services-page"

export const metadata = {
  title: "Services",
  description:
    "AI/ML and platform engineering consulting: strategy, prototypes, production delivery, agents and OpenClaw, voice AI, model tuning, and integrations. Milestone-based engagements with clear deliverables for startups and enterprise teams.",
  alternates: {
    canonical: "https://xagi.in/services",
  },
}

export default function Services() {
  return <ServicesPage />
}

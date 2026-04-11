import AITimelinePage from "@/components/ai-timeline-page"

export const metadata = {
  title: "AI Timeline: Major Events 2022-2025",
  description: "Interactive timeline of major AI developments since ChatGPT's release in November 2022. Explore key milestones, model releases, and breakthrough moments in artificial intelligence.",
  alternates: {
    canonical: "https://xagi.in/ai-timeline",
  },
}

export default function AITimeline() {
  return <AITimelinePage />
}

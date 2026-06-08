import HomePage from "@/components/home-page"

export const metadata = {
  title: "AI Automation Systems for Operations and Growth | xAGI Labs",
  description:
    "xAGI Labs builds production AI automation systems for operations, growth, support, and product teams. Turn manual workflows into reliable agents, copilots, and integrations.",
  keywords:
    "AI automation, AI agents, workflow automation, business process automation, AI copilots, operations AI, growth automation, AI product engineering",
  openGraph: {
    title: "AI Automation Systems for Operations and Growth | xAGI Labs",
    description:
      "Production AI agents, copilots, and workflow automations for teams that need useful systems, not another generic demo.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Systems for Operations and Growth | xAGI Labs",
    description:
      "Build reliable AI automation across operations, growth, support, and product workflows.",
    images: ["/xagi-icon.png"],
    creator: "@xAGILabs",
  },
  alternates: {
    canonical: "https://xagi.in",
  },
}

export default function Home() {
  return <HomePage />
}

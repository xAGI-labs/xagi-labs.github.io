import AiNewsPage from "@/components/ai-news-page"

export const metadata = {
  title: "AI News",
  description: "Latest AI news and updates powered by smol.ai",
  alternates: {
    canonical: "https://xagi.in/ai-news",
  },
}

export default function AINews() {
  return <AiNewsPage />
}

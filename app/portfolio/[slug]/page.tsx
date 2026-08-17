import { permanentRedirect } from "next/navigation"
import { getProject } from "@/lib/projects"

type LegacyPortfolioPageProps = {
  params: {
    slug: string
  }
}

export default function LegacyPortfolioPage({ params }: LegacyPortfolioPageProps) {
  const project = getProject(params.slug)

  if (project) {
    permanentRedirect(`/projects/${project.slug}`)
  }

  permanentRedirect("/portfolio")
}

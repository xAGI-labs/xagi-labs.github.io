import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetail from "@/components/project-pages/project-detail"
import { getProject, projects } from "@/lib/projects"

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug)

  if (!project) {
    return {
      title: "Project not found",
    }
  }

  const canonical = `https://xagi.in/projects/${project.slug}`

  return {
    title: `${project.title} — ${project.category}`,
    description: project.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${project.title} | xAGI Labs Project`,
      description: project.summary,
      url: canonical,
      siteName: "xAGI Labs",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | xAGI Labs Project`,
      description: project.summary,
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `https://xagi.in/projects/${project.slug}`,
    creator: {
      "@type": "Organization",
      name: "xAGI Labs",
      url: "https://xagi.in",
    },
    keywords: [project.category, ...project.stack].join(", "),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProjectDetail project={project} />
    </>
  )
}

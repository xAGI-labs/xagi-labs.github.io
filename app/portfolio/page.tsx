import type { Metadata } from "next"
import ProjectDirectory from "@/components/project-pages/project-directory"

export const metadata: Metadata = {
  title: "Projects — Products, Prototypes, and Research",
  description:
    "Explore verified xAGI Labs projects across document tools, offline learning, team communication, and regional-language speech research.",
  alternates: {
    canonical: "https://xagi.in/portfolio",
  },
  openGraph: {
    title: "Projects — Products, Prototypes, and Research | xAGI Labs",
    description:
      "A working casebook of xAGI Labs products, prototypes, and research—with clear project states and concrete product details.",
    url: "https://xagi.in/portfolio",
    siteName: "xAGI Labs",
    type: "website",
  },
}

export default function Portfolio() {
  return <ProjectDirectory />
}

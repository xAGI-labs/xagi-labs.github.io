import type { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = { title: "API retirement notice", description: "xAGI Labs is a static website. The public chat and slide-generation APIs are retired." }
export default function ApiDocsPage() {
  return <main className="mx-auto max-w-3xl px-6 py-24"><h1 className="text-3xl font-semibold">Public API demos retired</h1><p className="mt-4">The former chat and AI slide-generation endpoints are no longer available. You can still edit and export carousel slides in your browser.</p><div className="mt-6 flex gap-6"><Link href="/apps/linkedin-carousel-generator">Carousel editor</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div></main>
}

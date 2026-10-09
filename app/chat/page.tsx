import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/shared/header"

export const metadata: Metadata = {
  title: "Chat retired",
  description: "The standalone xAGI Labs chat demo has been retired.",
  robots: { index: false, follow: false },
}

export default function ChatPage() {
  return <><Header /><main className="mx-auto max-w-3xl px-6 py-24"><h1 className="text-3xl font-semibold">This chat demo has been retired</h1><p className="mt-4">Explore our projects or contact us about an AI workflow.</p><div className="mt-6 flex gap-6"><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div></main></>
}

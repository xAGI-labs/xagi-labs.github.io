import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Products",
  description: "Legacy products route redirecting to the portfolio page.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://xagi.in/portfolio",
  },
}

export default function ProductPage() {
  redirect("/portfolio")
}

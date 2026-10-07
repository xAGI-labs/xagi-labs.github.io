import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectForm() {
  return (
    <div className="container mx-auto py-12 px-6 md:px-10">
      <div className="max-w-xl mx-auto w-full">
        <div className="bg-[#3a3a3a] rounded-2xl p-6 md:p-8 shadow-lg">
          <p className="text-white text-base md:text-lg leading-relaxed mb-8">
            Tell us about your project by email or book a call on our contact page.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7A7FEE] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

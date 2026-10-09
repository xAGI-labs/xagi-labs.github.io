import { ArrowRight, CheckCircle2 } from "lucide-react"
import BookingCta from "@/components/home-page/booking-cta"

type CommercialDemoCtaProps = {
  placement: string
  title?: string
  description?: string
}

export default function CommercialDemoCta({
  placement,
  title = "Pressure-test your voice AI workflow",
  description = "Bring one repeat call flow. We will map what to automate, where humans stay involved, and what a reliable pilot should measure.",
}: CommercialDemoCtaProps) {
  return (
    <section className="rounded-2xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900/40 dark:bg-blue-950/20">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
            Demo planning call
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="mt-3 max-w-3xl text-gray-700 dark:text-gray-300">{description}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
            {["Call-flow map", "Integration checklist", "Pilot KPI recommendation"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <BookingCta
          placement={placement}
          eventName="commercial_page_cta_click"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
        >
          Book a demo
          <ArrowRight className="h-4 w-4" />
        </BookingCta>
      </div>
    </section>
  )
}

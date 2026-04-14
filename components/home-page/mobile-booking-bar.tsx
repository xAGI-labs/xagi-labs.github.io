"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import BookingCta from "@/components/home-page/booking-cta"

export default function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 220)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-4 transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="rounded-2xl border border-stone-200 bg-stone-50/95 p-3 shadow-[0_14px_40px_-20px_rgba(0,0,0,0.45)] backdrop-blur dark:border-white/10 dark:bg-[#101213]/95">
        <BookingCta
          placement="mobile_sticky"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-stone-950 px-5 py-4 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-white"
        >
          Book a demo
          <ArrowRight className="h-4 w-4" />
        </BookingCta>
      </div>
    </div>
  )
}

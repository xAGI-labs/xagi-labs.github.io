"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { BOOKING_URL } from "@/lib/booking"
import { buildAttributedUrl, captureAttribution, trackMarketingEvent } from "@/lib/marketing-attribution"

type BookingCtaProps = {
  children: ReactNode
  className: string
  placement: string
  eventName?: string
}

export default function BookingCta({ children, className, placement, eventName = "book_demo_click" }: BookingCtaProps) {
  const [href, setHref] = useState(BOOKING_URL)

  useEffect(() => {
    captureAttribution()
    setHref(buildAttributedUrl(BOOKING_URL))
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        trackMarketingEvent(eventName, {
          placement,
          destination: "google_calendar",
        })
      }}
    >
      {children}
    </a>
  )
}

"use client"

import { useEffect } from "react"
import { captureAttribution, trackMarketingEvent } from "@/lib/marketing-attribution"

const scrollMilestones = [50, 90]

export default function PaidTrafficTracking() {
  useEffect(() => {
    captureAttribution()
    trackMarketingEvent("landing_page_view", {
      page: "home",
      page_type: "voice_agents_paid_landing",
    })

    const firedMilestones = new Set<number>()

    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      if (scrollHeight <= 0) {
        return
      }

      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100)

      for (const milestone of scrollMilestones) {
        if (scrollPercent >= milestone && !firedMilestones.has(milestone)) {
          firedMilestones.add(milestone)
          trackMarketingEvent("scroll_depth", {
            page: "home",
            milestone,
          })
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return null
}

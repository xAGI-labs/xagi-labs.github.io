"use client"

import { useEffect } from "react"

export default function TawkTo() {
  useEffect(() => {
    // Initialize Tawk.to
    const Tawk_API: any = (window as any).Tawk_API || {}
    const Tawk_LoadStart = new Date()

    ;(function() {
      const s1 = document.createElement("script")
      const s0 = document.getElementsByTagName("script")[0]
      s1.async = true
      s1.src = 'https://embed.tawk.to/691589974ed50c1958b35425/1j9u22uis'
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      s0.parentNode?.insertBefore(s1, s0)
    })()
  }, [])

  return null
}

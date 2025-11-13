"use client"

import { useEffect } from "react"

export default function MicrosoftClarity() {
  useEffect(() => {
    ;(function(c: any, l: any, a: string, r: string, i: string) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments)
      }
      const t = l.createElement(r)
      t.async = 1
      t.src = "https://www.clarity.ms/tag/" + i
      const y = l.getElementsByTagName(r)[0]
      y.parentNode.insertBefore(t, y)
    })(window, document, "clarity", "script", "u5d8xs3frx")
  }, [])

  return null
}

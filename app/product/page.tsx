"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProductPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to portfolio page
    router.replace("/portfolio")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Portfolio...</h1>
        <p className="text-gray-600 dark:text-gray-400">
          If you are not redirected automatically, <a href="/portfolio" className="text-blue-600 underline">click here</a>.
        </p>
      </div>
    </div>
  )
}

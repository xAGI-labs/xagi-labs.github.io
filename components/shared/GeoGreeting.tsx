"use client"

import { useState, useEffect } from "react"
import { X, Globe, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type CountryConfig = {
  greeting: string
  message: string
  langCode: string
  nativeLang: string
}

const COUNTRY_CONFIG: Record<string, CountryConfig> = {
  DE: {
    greeting: "Hallo!",
    message: "Willkommen bei xAGI.",
    langCode: "de",
    nativeLang: "Deutsch",
  },
  NO: {
    greeting: "Hei!",
    message: "Velkommen til xAGI.",
    langCode: "no",
    nativeLang: "Norsk",
  },
  SE: {
    greeting: "Hej!",
    message: "Välkommen till xAGI.",
    langCode: "sv",
    nativeLang: "Svenska",
  },
  LU: {
    greeting: "Moien!",
    message: "Wëllkomm bei xAGI.",
    langCode: "lb",
    nativeLang: "Lëtzebuergesch",
  },
  FR: {
    greeting: "Bonjour!",
    message: "Bienvenue chez xAGI.",
    langCode: "fr",
    nativeLang: "Français",
  },
  ES: {
    greeting: "¡Hola!",
    message: "Bienvenido a xAGI.",
    langCode: "es",
    nativeLang: "Español",
  },
  IT: {
    greeting: "Ciao!",
    message: "Benvenuto su xAGI.",
    langCode: "it",
    nativeLang: "Italiano",
  },
  NL: {
    greeting: "Hallo!",
    message: "Welkom bij xAGI.",
    langCode: "nl",
    nativeLang: "Nederlands",
  },
}

export default function GeoGreeting() {
  const [country, setCountry] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [config, setConfig] = useState<CountryConfig | null>(null)

  useEffect(() => {
    // Check localStorage first
    const dismissed = localStorage.getItem("geo-greeting-dismissed")
    if (dismissed) return

    // Fetch user location
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code) {
          const code = data.country_code
          if (COUNTRY_CONFIG[code]) {
            setCountry(code)
            setConfig(COUNTRY_CONFIG[code])
            setIsVisible(true)
          }
        }
      })
      .catch((err) => console.error("Failed to fetch location", err))
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("geo-greeting-dismissed", "true")
  }

  const handleTranslate = () => {
    if (!config) return
    const currentUrl = window.location.href
    window.location.href = `https://translate.google.com/translate?sl=en&tl=${config.langCode}&u=${encodeURIComponent(currentUrl)}`
  }

  if (!isVisible || !config) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm w-[calc(100vw-2rem)]"
        >
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg p-4 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />

            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start space-x-3 pr-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Globe className="w-5 h-5" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {config.greeting}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {config.message}
                </p>

                <button
                  onClick={handleTranslate}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                >
                  Translate to {config.nativeLang}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

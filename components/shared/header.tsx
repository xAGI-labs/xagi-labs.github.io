"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/xagi-icon.png" alt="xAGI Labs" width={32} height={32} />
            <span className="text-xl font-bold">xAGI Labs</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/voice-ai" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              xAGI voice
            </Link>
            <Link href="/ai-news" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              AI News
            </Link>
            <Link href="/research" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Research
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Portfolio
            </Link>
            <Link href="/team" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Team
            </Link>
            <Link href="/process" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Process
            </Link>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
            <Link
              href="/contact"
              className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/voice-ai" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              xAGI voice
            </Link>
            <Link href="/ai-news" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              AI News
            </Link>
            <Link href="/research" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Research
            </Link>
            <Link href="/services" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/team" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Team
            </Link>
            <Link href="/process" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Process
            </Link>
            <Link href="/contact" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center text-sm font-medium"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-5 w-5 mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2" /> Dark Mode
                  </>
                )}
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/xagi-icon.png" alt="xAGI Labs" width={32} height={32} />
              <span className="text-xl font-bold">xAGI Labs</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Building the Intelligence Layer for Modern Business
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/tutor" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  AI Tutor
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Chat
                </Link>
              </li>
              <li>
                <Link href="/apps/linkedin-carousel-generator" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  LinkedIn Carousel Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/portfolio" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/Ministry-of-Skill-Development-and-Entrepreneurship-pitch" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  MSDE Pitch
                </Link>
              </li>
              <li>
                <Link href="/ai-agents-erp" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  AI Agents in ERP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <Link href="/contact" className="block hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact Us
              </Link>
              <p>Email: saurav@xagi.in</p>
              <p>Location: Hayward, CA / Bangalore / Noida</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 xAGI Labs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

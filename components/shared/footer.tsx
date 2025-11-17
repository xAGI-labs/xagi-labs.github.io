import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/xagi-icon.png" alt="xAGI Labs" width={32} height={32} />
              <span className="text-xl font-bold">xAGI Labs</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Building the Intelligence Layer for Modern Business
            </p>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>Email: saurav@xagi.in</p>
            <p>Location: San Francisco, CA / Bangalore / Noida</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 xAGI Labs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

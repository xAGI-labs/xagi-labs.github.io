import type { Metadata } from "next"
import Image from "next/image"
import Screenshot2ClipboardShell, { supportEmail } from "@/components/screenshot2clipboard-page/legal-shell"

const screenshots = [
  {
    src: "/images/screenshot2clipboard/01-menu-capture.png",
    alt: "Screenshot2Clipboard menu bar capture controls",
    label: "Menu capture controls",
  },
  {
    src: "/images/screenshot2clipboard/02-shortcuts.png",
    alt: "Screenshot2Clipboard shortcut configuration window",
    label: "Shortcut settings",
  },
  {
    src: "/images/screenshot2clipboard/03-permissions.png",
    alt: "Screenshot2Clipboard permissions menu item",
    label: "Permission access",
  },
]

export const metadata: Metadata = {
  title: "Screenshot2Clipboard Support",
  description: "Support information for Screenshot2Clipboard, a macOS menu-bar app for copying screenshots directly to the clipboard.",
  alternates: {
    canonical: "https://xagi.in/screenshot2clipboard/support",
  },
}

export default function Screenshot2ClipboardSupportPage() {
  return (
    <Screenshot2ClipboardShell
      eyebrow="Screenshot2Clipboard"
      title="Support"
      description="Screenshot2Clipboard is a macOS menu-bar app that captures screenshots directly to your clipboard."
    >
      <h2>Common Tasks</h2>
      <ul>
        <li>Capture full screen: use the menu bar item or your configured full-screen shortcut.</li>
        <li>Capture selected area: use the menu bar item or your configured selected-area shortcut.</li>
        <li>Change shortcuts: open Shortcuts from the menu bar app.</li>
        <li>Enable permissions: choose Check Permissions to open macOS Screen Recording settings.</li>
      </ul>

      <div className="not-prose my-10 grid gap-4 md:grid-cols-3">
        {screenshots.map((screenshot) => (
          <figure key={screenshot.src} className="overflow-hidden border border-stone-300 bg-stone-100 dark:border-stone-700 dark:bg-stone-900">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={2560}
              height={1600}
              className="h-auto w-full"
              sizes="(min-width: 768px) 30vw, 100vw"
              priority={screenshot.src.endsWith("01-menu-capture.png")}
            />
            <figcaption className="border-t border-stone-300 px-3 py-2 text-sm font-medium text-stone-700 dark:border-stone-700 dark:text-stone-300">
              {screenshot.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <h2>Troubleshooting</h2>
      <p>
        If screenshots are not copied, confirm that Screen Recording permission is enabled for Screenshot2Clipboard in
        System Settings &gt; Privacy &amp; Security &gt; Screen Recording.
      </p>
      <p>
        If a selected-area capture is cancelled, press the shortcut again and select an area with the native macOS
        crosshair.
      </p>

      <h2>Contact</h2>
      <p>
        For support, email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>
    </Screenshot2ClipboardShell>
  )
}

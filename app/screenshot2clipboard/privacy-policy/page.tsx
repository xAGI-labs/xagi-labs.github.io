import type { Metadata } from "next"
import Screenshot2ClipboardShell, { supportEmail } from "@/components/screenshot2clipboard-page/legal-shell"

export const metadata: Metadata = {
  title: "Privacy Policy for Screenshot2Clipboard",
  description: "Privacy Policy for Screenshot2Clipboard, a local macOS screenshot utility that does not collect personal data.",
  alternates: {
    canonical: "https://xagi.in/screenshot2clipboard/privacy-policy",
  },
}

export default function Screenshot2ClipboardPrivacyPolicyPage() {
  return (
    <Screenshot2ClipboardShell
      eyebrow="Screenshot2Clipboard"
      title="Privacy Policy"
      description="Screenshot2Clipboard does not collect, store, sell, or share personal data."
    >
      <p>
        <strong>Effective Date:</strong> May 28, 2026
      </p>

      <p>
        Screenshot2Clipboard does not collect, store, sell, or share personal data.
      </p>

      <p>
        The app runs locally on your Mac. Screenshots are captured using macOS system screenshot tools and copied
        directly to your clipboard. Screenshot2Clipboard does not upload screenshots, keep screenshot history, or send
        screenshot contents to any server.
      </p>

      <h2>Data Stored on Device</h2>
      <p>
        Screenshot2Clipboard may store local preferences, such as your configured keyboard shortcuts and Launch at Login
        setting. These preferences remain on your device.
      </p>

      <h2>Permissions</h2>
      <p>
        Screenshot2Clipboard requires macOS Screen Recording permission so it can use the system screenshot capture
        flow. This permission is used only for local screenshot capture.
      </p>

      <h2>Analytics and Tracking</h2>
      <p>
        Screenshot2Clipboard does not use analytics, advertising SDKs, third-party trackers, or cross-app tracking.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>
    </Screenshot2ClipboardShell>
  )
}

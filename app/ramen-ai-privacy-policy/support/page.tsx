import type { Metadata } from "next"
import RamenAILegalShell from "@/components/ramen-ai-legal-page/legal-shell"

const supportEmail = "saurav@xagi.in"

export const metadata: Metadata = {
  title: "Support - Ramen AI",
  description: "Support contact information for Ramen AI.",
  alternates: {
    canonical: "https://xagi.in/ramen-ai-privacy-policy/support",
  },
}

export default function RamenAISupportPage() {
  return (
    <RamenAILegalShell title="Support" description="Contact Ramen AI support for app, account, privacy, or subscription help.">
      <p>
        <strong>Support email:</strong> <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>

      <h2>What to Include</h2>
      <ul>
        <li>Your Ramen AI account email, if relevant.</li>
        <li>Your device model and Android version, if reporting a technical issue.</li>
        <li>A short description of the problem or request.</li>
        <li>For subscription issues, include the Google Play order ID if available. Do not send payment card details.</li>
      </ul>

      <h2>Common Requests</h2>
      <ul>
        <li>Account access or login issues.</li>
        <li>Privacy or data deletion questions.</li>
        <li>Subscription entitlement or cancellation questions.</li>
        <li>Comment, profile, or content moderation issues.</li>
      </ul>
    </RamenAILegalShell>
  )
}

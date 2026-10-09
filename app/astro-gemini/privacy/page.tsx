import type { Metadata } from "next"
import Link from "next/link"
import AstroGeminiLegalShell from "@/components/astro-gemini-page/legal-shell"

const supportEmail = "saurav@xagi.in"
const operator = "Saurav, an individual developer"

export const metadata: Metadata = {
  title: "AstroGemini Privacy Policy",
  description: "Privacy Policy for AstroGemini, including account, birth chart, chat, purchase, and deletion data.",
  alternates: {
    canonical: "https://xagi-labs.github.io/astro-gemini/privacy",
  },
}

export default function AstroGeminiPrivacyPage() {
  return (
    <AstroGeminiLegalShell
      title="Privacy Policy"
      description="This Privacy Policy explains how AstroGemini collects, uses, and protects information when you use the app."
    >
      <p>
        <strong>Effective Date:</strong> June 8, 2026
      </p>

      <p>This Privacy Policy explains how {operator} collects, uses, and protects information when you use AstroGemini.</p>

      <h2>Information We Collect</h2>
      <h3>Account Information</h3>
      <p>
        We may collect your email address, user ID, display name, and sign-in provider when you sign in with Apple,
        Google, or email/password.
      </p>

      <h3>Birth Chart Information</h3>
      <p>
        We collect the birth details you provide, such as name, date of birth, time of birth, place of birth, latitude,
        longitude, timezone, and generated astrology chart data.
      </p>

      <h3>Chat Information</h3>
      <p>
        When you chat with Tara, we may store your messages, AI responses, timestamps, and related profile information
        so your chat history can be shown in the app.
      </p>

      <h3>Purchase Information</h3>
      <p>
        If you purchase a subscription or premium feature, purchase status and entitlement information may be processed
        through Apple, Google Play, and RevenueCat. We do not store your full payment card details.
      </p>

      <h3>Device and Technical Information</h3>
      <p>We may collect limited technical information needed to operate, secure, debug, and improve the app.</p>

      <h2>How We Use Information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Create and manage your account.</li>
        <li>Generate and save your birth chart.</li>
        <li>Provide AI astrology responses.</li>
        <li>Save chat history and family profiles.</li>
        <li>Manage subscriptions and restore purchases.</li>
        <li>Improve app reliability and user experience.</li>
        <li>Respond to support requests.</li>
        <li>Prevent misuse or unauthorized access.</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>AstroGemini may use third-party services including:</p>
      <ul>
        <li>Firebase by Google for authentication and cloud data storage.</li>
        <li>Google Sign-In and Apple Sign-In for account login.</li>
        <li>OpenRouter and AI model providers for AI chat responses.</li>
        <li>RevenueCat for subscription and purchase management.</li>
        <li>Apple App Store and Google Play for payments.</li>
        <li>Open-Meteo or geocoding services for place lookup.</li>
      </ul>
      <p>
        Information sent to AI providers may include your question, relevant chart context, and previous chat context
        needed to answer your request.
      </p>

      <h2>Data Storage</h2>
      <p>
        Some data may be stored locally on your device. Account, profile, chart, and chat data may also be stored in
        cloud services so you can access it after signing in.
      </p>

      <h2>Data Deletion</h2>
      <p>
        You may request deletion of your account data by contacting <a href={`mailto:${supportEmail}`}>{supportEmail}</a>{" "}
        or by using the <Link href="/astro-gemini/account-deletion">account deletion page</Link>. We may need to verify
        your identity before processing deletion. Some records may be retained if required for legal, security, tax, or
        fraud-prevention reasons.
      </p>

      <h2>Children</h2>
      <p>
        AstroGemini is not intended for children under 13 or the minimum age required in your country. If you believe a
        child has provided personal information, contact us.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable technical and organizational safeguards to protect user data. No method of internet
        transmission or storage is completely secure.
      </p>

      <h2>International Users</h2>
      <p>Your information may be processed in countries other than your own, depending on the services we use.</p>

      <h2>Changes</h2>
      <p>
        We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new
        effective date.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact:
        <br />
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        <br />
        {operator}
      </p>
    </AstroGeminiLegalShell>
  )
}

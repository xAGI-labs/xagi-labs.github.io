import type { Metadata } from "next"
import Link from "next/link"
import AstroGeminiLegalShell from "@/components/astro-gemini-page/legal-shell"

const supportEmail = "saurav@xagi.in"
const operator = "Saurav, an individual developer"

export const metadata: Metadata = {
  title: "AstroGemini Terms and Conditions",
  description: "Terms and Conditions for AstroGemini.",
  alternates: {
    canonical: "https://xagi-labs.github.io/astro-gemini/terms",
  },
}

export default function AstroGeminiTermsPage() {
  return (
    <AstroGeminiLegalShell title="Terms and Conditions" description="These Terms govern your use of AstroGemini.">
      <p>
        <strong>Effective Date:</strong> June 8, 2026
      </p>

      <p>These Terms govern your use of AstroGemini, operated by {operator}.</p>

      <h2>Use of the App</h2>
      <p>
        AstroGemini provides astrology-based content, birth chart calculations, AI-generated explanations, and related
        spiritual or reflective tools. You must use the app lawfully and responsibly.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        AstroGemini is for entertainment, reflection, spiritual exploration, and general informational purposes only. It
        does not provide medical, legal, financial, psychological, relationship, career, or other professional advice.
        You should not make important life decisions solely based on app content or AI responses.
      </p>

      <h2>Accounts</h2>
      <p>
        You are responsible for keeping your account secure. You agree that information you provide is accurate and that
        you will not impersonate another person.
      </p>

      <h2>User Content</h2>
      <p>
        You may submit birth details, chat messages, and profile information. You retain ownership of your content, but
        grant us permission to process it as needed to operate the app, generate responses, store history, provide
        support, and improve the service.
      </p>

      <h2>AI Responses</h2>
      <p>
        AI-generated responses may be inaccurate, incomplete, or unexpected. You are responsible for evaluating
        responses before relying on them.
      </p>

      <h2>Subscriptions and Payments</h2>
      <p>
        Paid features may be offered through Apple App Store or Google Play. Payments, cancellations, renewals, and
        refunds are handled by the applicable store. Subscription terms shown at purchase apply.
      </p>

      <h2>Refunds</h2>
      <p>Refund requests must be made through Apple App Store or Google Play, depending on where the purchase was made.</p>

      <h2>Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the app for illegal, harmful, abusive, or fraudulent activity.</li>
        <li>Attempt to reverse engineer, copy, or exploit the app.</li>
        <li>Interfere with app security or infrastructure.</li>
        <li>Submit content that violates another person&apos;s rights.</li>
        <li>Use the app to generate harmful or misleading advice for others.</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        AstroGemini, including its design, branding, software, text, and features, belongs to {operator} or its
        licensors. You may not copy, modify, distribute, or resell the app without permission.
      </p>

      <h2>Availability</h2>
      <p>
        We may update, suspend, or discontinue parts of the app at any time. We do not guarantee uninterrupted or
        error-free service.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The app is provided &quot;as is&quot; and &quot;as available.&quot; We make no guarantees about accuracy,
        reliability, availability, or fitness for a particular purpose.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {operator} is not liable for indirect, incidental, consequential,
        special, or punitive damages arising from your use of the app.
      </p>

      <h2>Termination</h2>
      <p>We may suspend or terminate access if you violate these Terms or misuse the app.</p>

      <h2>Changes to Terms</h2>
      <p>We may update these Terms from time to time. Continued use of the app after updates means you accept the revised Terms.</p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of California, United States, unless local consumer laws require otherwise.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these Terms, contact:
        <br />
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        <br />
        {operator}
      </p>

      <p>
        See the <Link href="/astro-gemini/privacy">Privacy Policy</Link> for information about data handling.
      </p>
    </AstroGeminiLegalShell>
  )
}

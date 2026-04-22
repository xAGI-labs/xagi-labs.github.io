import type { Metadata } from "next"
import Link from "next/link"
import InstaFlixLegalShell from "@/components/instaflix-legal-page/legal-shell"

const supportEmail = "saurav@xagi.in"

export const metadata: Metadata = {
  title: "Terms of Service - InstaFlix",
  description: "Terms of Service for InstaFlix, including accounts, comments, subscriptions, and acceptable use.",
  alternates: {
    canonical: "https://xagi.in/instaflix-privacy-policy/terms",
  },
}

export default function InstaFlixTermsPage() {
  return (
    <InstaFlixLegalShell title="Terms of Service" description="These terms govern your use of the InstaFlix app.">
      <p>
        <strong>Last updated:</strong> April 22, 2026
      </p>

      <h2>1. Acceptance</h2>
      <p>
        By using InstaFlix, you agree to these Terms of Service and our{" "}
        <Link href="/instaflix-privacy-policy">Privacy Policy</Link>. If you do not agree, do not use the app.
      </p>

      <h2>2. Accounts</h2>
      <p>
        You may need an account to use certain features. You are responsible for keeping your login credentials secure
        and for activity on your account. You must provide accurate information and may not impersonate others.
      </p>

      <h2>3. User Content and Conduct</h2>
      <p>
        InstaFlix may allow likes, comments, profile display names, profile avatars, and other user interactions. You are
        responsible for the content you submit. You agree not to post illegal, abusive, harassing, hateful, infringing,
        deceptive, spammy, or otherwise harmful content.
      </p>

      <h2>4. Subscriptions and Billing</h2>
      <p>
        InstaFlix may offer paid subscriptions through Google Play. Subscription pricing, billing periods, renewals,
        trial availability, and cancellation options are shown before purchase. Billing is handled by Google Play, and
        subscription access may be managed through RevenueCat. See our{" "}
        <Link href="/instaflix-privacy-policy/subscription-cancellation">Subscription Cancellation Help</Link> page for
        more information.
      </p>

      <h2>5. Cancellations and Refunds</h2>
      <p>
        You can cancel subscriptions through Google Play. Cancellation stops future renewals but generally does not
        automatically refund past charges. Refund eligibility is handled by Google Play according to Google Play refund
        policies. Contact Google Play support or email us at <a href={`mailto:${supportEmail}`}>{supportEmail}</a> if
        you need help locating your subscription.
      </p>

      <h2>6. App Availability</h2>
      <p>
        We may update, modify, suspend, or discontinue parts of InstaFlix at any time. We are not responsible for
        interruptions caused by network issues, third-party services, device issues, or events outside our control.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        InstaFlix, including its design, features, branding, and software, is protected by intellectual property laws.
        You may not copy, reverse engineer, misuse, or exploit the app except as allowed by law.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may suspend or terminate access if you violate these terms, misuse the app, create security or legal risk, or
        engage in fraudulent or abusive behavior.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        InstaFlix is provided on an “as is” and “as available” basis. To the maximum extent permitted by law, we disclaim
        warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or
        punitive damages, or for loss of data, revenue, profits, or goodwill.
      </p>

      <h2>11. Contact</h2>
      <p>
        For questions about these terms, contact <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>
    </InstaFlixLegalShell>
  )
}

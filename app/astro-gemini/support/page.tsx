import type { Metadata } from "next"
import Link from "next/link"
import AstroGeminiLegalShell from "@/components/astro-gemini-page/legal-shell"

const supportEmail = "saurav@xagi.in"

export const metadata: Metadata = {
  title: "AstroGemini Support",
  description: "Support contact information and common questions for AstroGemini.",
  alternates: {
    canonical: "https://xagi-labs.github.io/astro-gemini/support",
  },
}

export default function AstroGeminiSupportPage() {
  return (
    <AstroGeminiLegalShell title="Support" description="Need help with AstroGemini? Contact support for app, account, chart, subscription, or data questions.">
      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        <br />
        Typical response time: 2-3 business days.
      </p>

      <h2>When Contacting Support</h2>
      <p>Please include:</p>
      <ul>
        <li>Your account email.</li>
        <li>Device type: iPhone, Android, or Web.</li>
        <li>App version if available.</li>
        <li>A short description of the issue.</li>
        <li>Screenshots if helpful.</li>
      </ul>

      <h2>Common Questions</h2>
      <h3>I cannot sign in.</h3>
      <p>
        Make sure you are using the same sign-in method you used when creating your account: Apple, Google, or
        email/password. If you used email/password, try the password reset option.
      </p>

      <h3>My birth chart looks incorrect.</h3>
      <p>
        Please check that your date of birth, exact birth time, and place of birth are entered correctly. Even small
        time or location differences can change chart details.
      </p>

      <h3>Can I change my birth details?</h3>
      <p>
        Yes. Open settings or profile details in the app and update your birth information. The app will recalculate
        your chart.
      </p>

      <h3>What calculation method does AstroGemini use?</h3>
      <p>
        AstroGemini defaults to the Lahiri ayanamsa, the most commonly used Indian sidereal calculation method. Advanced
        users may change the calculation method in Advanced Settings.
      </p>

      <h3>How do I restore purchases?</h3>
      <p>
        Open the subscription or premium screen in the app and tap Restore Purchases. Make sure you are signed in with
        the same Apple ID or Google account used for the original purchase.
      </p>

      <h3>How do refunds work?</h3>
      <p>
        Purchases are handled by Apple App Store or Google Play. Refund requests must be submitted through the store
        where you purchased the subscription.
      </p>

      <h3>How do I delete my data?</h3>
      <p>
        Email <a href={`mailto:${supportEmail}`}>{supportEmail}</a> from your account email and request account/data
        deletion, or use the <Link href="/astro-gemini/account-deletion">account deletion page</Link>. We may need to
        verify ownership before deleting account data.
      </p>

      <h2>Disclaimer</h2>
      <p>
        AstroGemini is for personal reflection, spiritual exploration, and entertainment. It is not a substitute for
        professional advice.
      </p>
    </AstroGeminiLegalShell>
  )
}

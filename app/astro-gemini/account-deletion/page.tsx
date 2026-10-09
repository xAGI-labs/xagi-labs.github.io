import type { Metadata } from "next"
import AstroGeminiLegalShell from "@/components/astro-gemini-page/legal-shell"
import DeletionForm from "@/components/astro-gemini-privacy-policy/deletion-form"

const supportEmail = "saurav@xagi.in"

export const metadata: Metadata = {
  title: "AstroGemini Account Deletion",
  description: "Request deletion of your AstroGemini account and associated data.",
  alternates: {
    canonical: "https://xagi-labs.github.io/astro-gemini/account-deletion",
  },
}

export default function AstroGeminiAccountDeletionPage() {
  return (
    <AstroGeminiLegalShell
      title="Account Deletion"
      description="Request deletion of your AstroGemini account, birth details, saved profiles, and AI chat history."
    >
      <p>
        Use this page to request deletion of your AstroGemini account and associated data. We may need to verify that
        you control the account email before processing the request.
      </p>

      <div className="not-prose my-8">
        <DeletionForm />
      </div>

      <h2>What Gets Deleted</h2>
      <ul>
        <li>Account information linked to your AstroGemini account.</li>
        <li>Saved birth profiles and birth chart data.</li>
        <li>AI chat history associated with your account.</li>
        <li>Support communication logs associated with your identity, where deletion is legally permitted.</li>
      </ul>

      <h2>What May Be Retained</h2>
      <p>
        Some limited records may be retained if required for legal, security, tax, fraud-prevention, billing, dispute,
        or platform-compliance reasons. Anonymized analytics may also be retained where they can no longer identify you.
      </p>

      <h2>Processing Time</h2>
      <p>
        We aim to process deletion requests within 7 business days after verification. You can also email{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a> from your account email.
      </p>
    </AstroGeminiLegalShell>
  )
}

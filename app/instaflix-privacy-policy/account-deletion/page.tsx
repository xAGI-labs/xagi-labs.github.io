import type { Metadata } from "next"
import InstaFlixDeletionRequestForm from "@/components/instaflix-legal-page/deletion-request-form"
import InstaFlixLegalShell from "@/components/instaflix-legal-page/legal-shell"

export const metadata: Metadata = {
  title: "Account Deletion - InstaFlix",
  description: "Request deletion of your InstaFlix account and associated data outside the app.",
  alternates: {
    canonical: "https://xagi.in/instaflix-privacy-policy/account-deletion",
  },
}

export default function InstaFlixAccountDeletionPage() {
  return (
    <InstaFlixLegalShell
      title="Account Deletion"
      description="Use this page to request deletion of your InstaFlix account outside the app."
    >
      <p>
        <strong>Last updated:</strong> April 22, 2026
      </p>

      <p>
        If you created an InstaFlix account using Firebase email/password authentication or Google Sign-In, you can use
        this public page to request deletion of your account and associated data.
      </p>

      <InstaFlixDeletionRequestForm />

      <h2>What We Delete</h2>
      <ul>
        <li>Your Firebase account record and app account identifiers, where technically possible.</li>
        <li>Your profile display name, profile avatar, and profile metadata stored by InstaFlix.</li>
        <li>Your comments, likes, and other account-linked social activity.</li>
        <li>Your watch history, watch progress, and other account-linked viewing activity.</li>
        <li>Other Cloud Firestore records associated with your account where deletion is technically possible.</li>
      </ul>

      <h2>What May Be Retained</h2>
      <p>
        We may retain limited records if required for legal, security, fraud-prevention, abuse-prevention, tax,
        accounting, billing, chargeback, dispute-resolution, or platform compliance reasons. Google Play, RevenueCat, and
        payment processors may retain purchase and subscription records under their own policies.
      </p>

      <h2>Processing Time</h2>
      <p>
        We aim to complete deletion requests within 30 days after verifying the request. If more time is required because
        of technical, legal, or security reasons, we will let you know where required by applicable law.
      </p>

      <h2>Verification</h2>
      <p>
        To protect accounts from unauthorized deletion, we may ask you to verify ownership of the email address or
        account before processing the request.
      </p>
    </InstaFlixLegalShell>
  )
}

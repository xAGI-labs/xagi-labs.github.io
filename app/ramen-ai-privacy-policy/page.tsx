import type { Metadata } from "next"
import Link from "next/link"
import RamenAILegalShell from "@/components/ramen-ai-legal-page/legal-shell"

const supportEmail = "saurav@xagi.in"

export const metadata: Metadata = {
  title: "Privacy Policy - Ramen AI",
  description:
    "Privacy Policy for Ramen AI covering Firebase Auth, Cloud Firestore, Google Sign-In, RevenueCat, Google Play subscriptions, user content, and account deletion.",
  alternates: {
    canonical: "https://xagi.in/ramen-ai-privacy-policy",
  },
}

export default function RamenAIPrivacyPolicyPage() {
  return (
    <RamenAILegalShell
      title="Privacy Policy"
      description="This Privacy Policy explains how Ramen AI collects, uses, shares, retains, and deletes data."
    >
      <p>
        <strong>Last updated:</strong> May 17, 2026
      </p>

      <p>
        This Privacy Policy applies to the Ramen AI mobile application. For privacy questions, contact us at{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>

      <h2>1. Information We Collect</h2>
      <p>Depending on how you use Ramen AI, we may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account information:</strong> email address, authentication identifiers, Firebase user ID, Google
          Sign-In identifiers, and login metadata.
        </li>
        <li>
          <strong>Profile information:</strong> display name, profile avatar, and other profile details you choose to
          provide.
        </li>
        <li>
          <strong>User content and social activity:</strong> comments, likes, and other interactions you create in the
          app.
        </li>
        <li>
          <strong>Usage and watch data:</strong> watch history, progress data, saved or interacted-with content, feature
          usage, timestamps, and similar app activity.
        </li>
        <li>
          <strong>Subscription and purchase information:</strong> subscription status, product identifiers, renewal
          status, entitlement status, and transaction metadata handled through RevenueCat and Google Play Billing.
        </li>
        <li>
          <strong>Technical data:</strong> device and app information necessary to operate the service, prevent abuse,
          diagnose issues, and secure accounts. The app declares the Android Internet permission to connect to our
          backend and third-party services.
        </li>
      </ul>

      <h2>2. How We Collect Information</h2>
      <p>We collect information when you create an account, sign in, use app features, interact with content, comment, like content, maintain watch progress, subscribe, contact support, or otherwise use the app.</p>

      <h2>3. Services We Use</h2>
      <ul>
        <li>
          <strong>Firebase Authentication:</strong> used for email/password sign-in and Google Sign-In.
        </li>
        <li>
          <strong>Cloud Firestore:</strong> used to store app data such as account-linked profile data, content
          interactions, comments, likes, and watch/progress data.
        </li>
        <li>
          <strong>RevenueCat and Google Play subscriptions:</strong> used to manage paid subscriptions, entitlements,
          renewal state, and purchase validation.
        </li>
      </ul>

      <h2>4. How We Use Information</h2>
      <ul>
        <li>To create, authenticate, and secure your account.</li>
        <li>To show your profile display name/avatar where app features require it.</li>
        <li>To provide likes, comments, watch progress, and personalized app experiences.</li>
        <li>To process, validate, and maintain subscription access and entitlements.</li>
        <li>To provide support, troubleshoot problems, and respond to requests.</li>
        <li>To protect the app, users, and services from abuse, fraud, security incidents, or policy violations.</li>
        <li>To comply with legal, tax, accounting, platform, and regulatory obligations.</li>
      </ul>

      <h2>5. How We Share Information</h2>
      <p>We do not sell your personal information. We share information only as needed to operate the app:</p>
      <ul>
        <li>With Firebase/Google services for authentication, database hosting, and app infrastructure.</li>
        <li>With RevenueCat and Google Play to manage subscriptions, purchases, and entitlements.</li>
        <li>With service providers that help us operate, secure, or support the app.</li>
        <li>If required by law, legal process, platform policy, fraud prevention, security, or protection of rights.</li>
        <li>With other users where you choose to make information visible, such as profile display information, likes, or comments.</li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>
        We retain account and app data for as long as your account is active or as needed to provide Ramen AI. We may
        retain limited records after account deletion when necessary for legal, tax, accounting, security,
        fraud-prevention, dispute-resolution, or platform compliance purposes. Subscription purchase records may also be
        retained by Google Play and RevenueCat according to their own policies.
      </p>

      <h2>7. Account Deletion and Data Deletion</h2>
      <p>
        You may request account deletion outside the app at our{" "}
        <Link href="/ramen-ai-privacy-policy/account-deletion">Account Deletion page</Link>. When we process a
        deletion request, we delete or anonymize account information, profile information, comments, likes, and
        watch/progress data associated with the account, except for limited records we must retain for legal, security,
        fraud-prevention, billing, tax, accounting, or dispute-resolution purposes.
      </p>

      <h2>8. Subscriptions</h2>
      <p>
        Ramen AI may offer Google Play subscriptions managed through RevenueCat and Google Play Billing. Subscription
        pricing, trial availability, billing period, renewal terms, and cancellation options are shown before purchase in
        the app and/or Google Play. See our{" "}
        <Link href="/ramen-ai-privacy-policy/subscription-cancellation">Subscription Cancellation Help page</Link> for
        cancellation instructions.
      </p>

      <h2>9. Children</h2>
      <p>
        Ramen AI is not intended for children under the age required by applicable law to use online services without
        parental consent. If you believe a child has provided personal information to us, contact us and we will review
        the request.
      </p>

      <h2>10. Security</h2>
      <p>
        We use reasonable technical and organizational safeguards to protect user data. However, no internet-connected
        service can guarantee absolute security.
      </p>

      <h2>11. Your Choices</h2>
      <ul>
        <li>You can manage your Google Play subscription through Google Play.</li>
        <li>You can request account deletion through our public deletion page.</li>
        <li>You can contact us for privacy questions or support.</li>
      </ul>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will update the “Last updated” date when changes are
        made.
      </p>

      <h2>13. Contact</h2>
      <p>
        Privacy contact: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>
    </RamenAILegalShell>
  )
}

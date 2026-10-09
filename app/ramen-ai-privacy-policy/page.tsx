import type { Metadata } from "next"
import Link from "next/link"
import RamenAILegalShell from "@/components/ramen-ai-legal-page/legal-shell"

const supportEmail = "saurav@xagi.in"

export const metadata: Metadata = {
  title: "Privacy Policy - Ramen AI",
  description:
    "Privacy Policy for Ramen AI covering Cloudflare-hosted accounts (version 1.3.1 and later), legacy Firebase data from older versions, RevenueCat, Apple App Store and Google Play purchases, user content, and account deletion.",
  alternates: {
    canonical: "https://xagi-labs.github.io/ramen-ai-privacy-policy",
  },
}

export default function RamenAIPrivacyPolicyPage() {
  return (
    <RamenAILegalShell
      title="Privacy Policy"
      description="This Privacy Policy explains how Ramen AI collects, uses, shares, retains, and deletes data."
    >
      <p>
        <strong>Last updated:</strong> October 4, 2026
      </p>

      <p>
        This Privacy Policy applies to the Ramen AI mobile application. For privacy questions, contact us at{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>

      <h2>1. Information We Collect</h2>
      <p>Depending on how you use Ramen AI, we may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account information:</strong> in version 1.3.1 and later, your email address, account ID, a salted
          password hash (we do not store your password in plain text), session records, and login metadata. Older
          versions used Firebase user IDs, Google Sign-In identifiers, and related login metadata (see Section 3).
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
          status, entitlement status, and transaction metadata handled through RevenueCat, the Apple App Store, and
          Google Play Billing.
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
      <p>
        <strong>Version 1.3.1 and later:</strong> Ramen AI uses Cloudflare Workers with a SQLite-backed Durable Object to
        provide email/password accounts and to store account IDs, salted password hashes, sessions, profile data,
        comments, likes, and watch progress.
      </p>
      <p>
        <strong>Older versions (legacy):</strong> versions before 1.3.1 used Firebase Authentication (email/password and
        Google Sign-In) and Cloud Firestore. Accounts, passwords, users, and progress from older versions were not
        automatically migrated to the new service, so you will need to create a new account in version 1.3.1. Legacy
        Firebase records were not deleted by this migration; you can ask support to delete them (see Section 7).
      </p>
      <ul>
        <li>
          <strong>RevenueCat, Apple App Store, and Google Play:</strong> used to manage paid subscriptions,
          entitlements, renewal state, and purchase validation.
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
        <li>With Cloudflare for backend hosting, authentication, and data storage (version 1.3.1 and later).</li>
        <li>With Firebase/Google services, where legacy data from older versions is still stored.</li>
        <li>With RevenueCat, the Apple App Store, and Google Play to manage subscriptions, purchases, and entitlements.</li>
        <li>With service providers that help us operate, secure, or support the app.</li>
        <li>If required by law, legal process, platform policy, fraud prevention, security, or protection of rights.</li>
        <li>With other users where you choose to make information visible, such as profile display information, likes, or comments.</li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>
        We retain account and app data for as long as your account is active or as needed to provide Ramen AI. We may
        retain limited records after account deletion when necessary for legal, tax, accounting, security,
        fraud-prevention, dispute-resolution, or platform compliance purposes. Subscription purchase records may also be
        retained by the Apple App Store, Google Play, and RevenueCat according to their own policies.
      </p>

      <h2>7. Account Deletion and Data Deletion</h2>
      <p>
        <strong>In version 1.3.1 and later:</strong> go to Profile &gt; Account Settings &gt; Delete account and confirm
        with your password. This deletes your profile, comments, likes, and watch progress, and signs out all of your
        sessions.
      </p>
      <p>
        You may also request account deletion outside the app at our{" "}
        <Link href="/ramen-ai-privacy-policy/account-deletion">Account Deletion page</Link>, including deletion of legacy
        Firebase records from older versions. When we process a deletion request, we delete or anonymize account
        information, profile information, comments, likes, and watch/progress data associated with the account, except
        for limited records we must retain for legal, security, fraud-prevention, billing, tax, accounting, or
        dispute-resolution purposes.
      </p>

      <h2>8. Subscriptions</h2>
      <p>
        Ramen AI may offer subscriptions through the Apple App Store and Google Play, managed through RevenueCat.
        Subscription pricing, trial availability, billing period, renewal terms, and cancellation options are shown
        before purchase in the app and/or the relevant store. See our{" "}
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
        <li>You can manage your subscription through the Apple App Store or Google Play.</li>
        <li>You can delete your account in the app (version 1.3.1 and later) or request deletion through our public deletion page.</li>
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

import type { Metadata } from "next"
import OrgpageLegalShell from "@/components/orgpage-page/legal-shell"

const privacyContactEmail = "TODO_PRIVACY_CONTACT_EMAIL"

export const metadata: Metadata = {
  title: "Orgpage Privacy Policy",
  description:
    "Privacy policy for Orgpage, the Chrome extension that turns the new tab into a customizable company homepage.",
  alternates: {
    canonical: "https://xagi.in/orgpage/privacy",
  },
}

export default function OrgpagePrivacyPage() {
  return (
    <OrgpageLegalShell
      title="Orgpage Privacy Policy"
      description="Privacy policy for Orgpage, the Chrome extension that turns the new tab into a customizable company homepage."
    >
      <p>
        <strong>Effective date:</strong> June 15, 2026
      </p>

      <p>
        Orgpage is a Chrome extension by xAGI Labs that replaces the browser new tab page with a customizable company
        homepage for announcements, onboarding, company links, leaderboards, shoutouts, pinned updates, and internal
        team updates.
      </p>

      <p>
        This Privacy Policy explains what data Orgpage collects, how it is used, how it is shared, and what choices
        users and organizations have.
      </p>

      <h2>Single Purpose</h2>
      <p>
        Orgpage&apos;s single purpose is to provide a customizable company homepage on the Chrome new tab page. Orgpage
        uses data only to provide, secure, maintain, and improve this team homepage experience.
      </p>

      <h2>Data We Collect</h2>
      <p>Orgpage may collect the following categories of data:</p>

      <h3>Account and profile data</h3>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Profile photo or avatar, if provided by the authentication provider</li>
        <li>User ID</li>
        <li>Organization membership</li>
        <li>Role, such as owner, admin, or member</li>
      </ul>

      <h3>Authentication information</h3>
      <p>
        Orgpage uses Firebase Authentication and Google sign-in to authenticate users. Orgpage does not collect or store
        user passwords directly. Authentication credentials are handled by Firebase Authentication and Google.
      </p>

      <h3>Organization and workspace data</h3>
      <p>Orgpage stores organization data needed to render and manage the company homepage, including:</p>
      <ul>
        <li>Organization name</li>
        <li>Company logo URL</li>
        <li>Welcome message</li>
        <li>Pinned update</li>
        <li>Theme settings</li>
        <li>Enabled widgets</li>
        <li>Member records</li>
        <li>Invite records</li>
        <li>Role assignments</li>
      </ul>

      <h3>User-generated content</h3>
      <p>Users and admins may create or manage content inside Orgpage, including:</p>
      <ul>
        <li>Announcements</li>
        <li>Onboarding tasks</li>
        <li>Company links</li>
        <li>Leaderboard entries</li>
        <li>Shoutouts and kudos</li>
        <li>Invite metadata</li>
      </ul>

      <h3>Product usage events</h3>
      <p>Orgpage may collect basic product analytics events, such as:</p>
      <ul>
        <li>Login</li>
        <li>Organization created</li>
        <li>Invite created</li>
        <li>Invite accepted</li>
        <li>Announcement created</li>
        <li>Onboarding task completed</li>
        <li>New tab opened</li>
        <li>Company link clicked</li>
        <li>Shoutout created</li>
        <li>Widget viewed</li>
      </ul>
      <p>
        These analytics events are used to understand whether Orgpage is working correctly and to improve the product.
        Orgpage does not use these events to collect browsing history or page contents from other websites.
      </p>

      <h2>Data We Do Not Collect</h2>
      <p>Orgpage does not collect:</p>
      <ul>
        <li>Browsing history</li>
        <li>Webpage contents from sites you visit</li>
        <li>Search history</li>
        <li>Health information</li>
        <li>Financial or payment information</li>
        <li>Credit card numbers</li>
        <li>Government IDs</li>
        <li>Precise location</li>
        <li>Emails, texts, or chat messages outside Orgpage</li>
        <li>Passwords stored by the browser</li>
      </ul>

      <h2>Chrome Extension Permissions</h2>
      <p>
        Orgpage uses the Chrome <code>identity</code> permission to let users sign in with Google through Chrome&apos;s
        extension authentication flow. This is required so users can securely access the correct organization, role,
        invites, and company homepage data.
      </p>
      <p>
        Orgpage uses host access only to connect to Firebase and Google APIs required for authentication, organization
        data, member records, invites, announcements, onboarding tasks, links, shoutouts, leaderboard entries, theme
        settings, and basic product analytics.
      </p>
      <p>Orgpage does not use host permissions to read arbitrary websites.</p>

      <h2>Remote Code</h2>
      <p>
        Orgpage does not use remote code. The extension&apos;s JavaScript code is bundled inside the extension package.
        Orgpage connects to Firebase and Google APIs as remote services, but it does not load remote JavaScript as
        extension code.
      </p>

      <h2>How We Use Data</h2>
      <p>Orgpage uses data to:</p>
      <ul>
        <li>Authenticate users</li>
        <li>Show the correct company Orgpage</li>
        <li>Manage organization membership and roles</li>
        <li>Process invite links</li>
        <li>Display announcements, onboarding tasks, links, leaderboards, shoutouts, and pinned updates</li>
        <li>Let admins customize the company page and theme</li>
        <li>Improve reliability, security, and product quality</li>
        <li>Prevent abuse and unauthorized access</li>
        <li>Comply with applicable legal obligations</li>
      </ul>

      <h2>How We Share Data</h2>
      <p>Orgpage does not sell user data.</p>
      <p>Orgpage may share data with:</p>
      <ul>
        <li>Firebase and Google Cloud services, which provide authentication, database, hosting, and analytics infrastructure</li>
        <li>Google Chrome Web Store services, as required to distribute and operate the extension</li>
        <li>Service providers that help operate Orgpage, only as needed to provide the product</li>
        <li>Legal or regulatory authorities, if required by applicable law</li>
      </ul>
      <p>
        Orgpage does not transfer user data to third parties for advertising, creditworthiness, or unrelated profiling.
      </p>

      <h2>Limited Use Disclosure</h2>
      <p>
        Orgpage&apos;s use of information received from Chrome APIs and Google APIs will comply with the Chrome Web
        Store User Data Policy, including the Limited Use requirements.
      </p>
      <p>
        Orgpage uses user data only to provide or improve its single purpose: a customizable company homepage on the
        Chrome new tab page. Orgpage does not sell user data, does not use user data for advertising, and does not
        transfer user data except as necessary to provide the product, comply with law, or protect users and the service.
      </p>

      <h2>Data Retention</h2>
      <p>
        Orgpage retains organization and user data for as long as needed to provide the service. Organization owners or
        admins may remove members, revoke invites, edit content, or delete workspace content where supported.
      </p>
      <p>
        Users or organizations may request deletion of their data by contacting xAGI Labs at {privacyContactEmail}.
      </p>

      <h2>Security</h2>
      <p>
        Orgpage uses Firebase Authentication and Firestore security rules to protect organization data and enforce
        role-based access. Access to organization data is limited to authenticated organization members, with additional
        write permissions reserved for owners and admins.
      </p>
      <p>
        No method of transmission or storage is completely secure, but Orgpage is designed to limit access to the data
        required for its stated purpose.
      </p>

      <h2>Children</h2>
      <p>Orgpage is intended for workplace and organizational use. It is not directed to children under 13.</p>

      <h2>International Data Processing</h2>
      <p>
        Orgpage may process and store data using cloud infrastructure operated by Firebase, Google Cloud, and related
        service providers. Data may be processed in countries other than the user&apos;s country of residence.
      </p>

      <h2>Changes To This Policy</h2>
      <p>
        xAGI Labs may update this Privacy Policy from time to time. If changes are material, xAGI Labs will update the
        effective date and may provide additional notice where appropriate.
      </p>

      <h2>Contact</h2>
      <p>For privacy questions or deletion requests, contact:</p>
      <p>
        {privacyContactEmail}
        <br />
        xAGI Labs
        <br />
        https://xagi.in
      </p>
    </OrgpageLegalShell>
  )
}

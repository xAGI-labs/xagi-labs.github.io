import type { Metadata } from "next"
import RamenAILegalShell from "@/components/ramen-ai-legal-page/legal-shell"

const supportEmail = "saurav@xagi.in"

export const metadata: Metadata = {
  title: "Subscription Cancellation Help - Ramen AI",
  description: "How to manage or cancel Ramen AI subscriptions purchased through Google Play.",
  alternates: {
    canonical: "https://xagi.in/ramen-ai-privacy-policy/subscription-cancellation",
  },
}

export default function RamenAISubscriptionCancellationPage() {
  return (
    <RamenAILegalShell
      title="Subscription Cancellation Help"
      description="Information about Ramen AI subscription pricing, renewals, trials, cancellation, and support."
    >
      <p>
        <strong>Last updated:</strong> May 17, 2026
      </p>

      <h2>Subscription Pricing</h2>
      <p>
        Ramen AI subscription prices, billing periods, free trial availability, introductory offers, taxes, and renewal
        terms are displayed in the app and/or on Google Play before you purchase. The exact price may vary by country,
        currency, plan, taxes, and promotions.
      </p>

      <h2>Automatic Renewal</h2>
      <p>
        Unless canceled before the renewal date, subscriptions purchased through Google Play automatically renew through
        your Google Play account. Your Google Play account is charged according to the plan shown at purchase.
      </p>

      <h2>Free Trials and Introductory Offers</h2>
      <p>
        If a trial or introductory offer is available, Google Play will show the trial length, price after the trial, and
        renewal terms before purchase. If you do not want to continue after a trial, cancel before the trial ends to
        avoid future charges.
      </p>

      <h2>How to Cancel Through Google Play</h2>
      <ol>
        <li>Open the Google Play Store app on your Android device.</li>
        <li>Tap your profile icon.</li>
        <li>Go to Payments &amp; subscriptions.</li>
        <li>Tap Subscriptions.</li>
        <li>Select Ramen AI.</li>
        <li>Tap Cancel subscription and follow the instructions.</li>
      </ol>

      <h2>After Cancellation</h2>
      <p>
        Canceling stops future renewals. You may retain access to paid features until the end of the current billing
        period, unless Google Play or applicable law provides otherwise.
      </p>

      <h2>Refunds</h2>
      <p>
        Refund requests for Google Play purchases are generally handled by Google Play according to Google Play refund
        policies. We can help you locate support information, but we do not receive your full payment card details and
        may not be able to issue refunds directly for Google Play transactions.
      </p>

      <h2>Subscription Support</h2>
      <p>
        For subscription help, email <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. Include your Ramen AI
        account email and Google Play order ID if available. Do not send payment card details.
      </p>
    </RamenAILegalShell>
  )
}

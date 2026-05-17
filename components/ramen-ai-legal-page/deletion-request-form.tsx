"use client"

import { useState } from "react"

const supportEmail = "saurav@xagi.in"

export default function RamenAIDeletionRequestForm() {
  const [email, setEmail] = useState("")
  const [confirmed, setConfirmed] = useState(false)

  const submitRequest = () => {
    if (!email || !confirmed) {
      alert("Please enter the email for your Ramen AI account and confirm the deletion request.")
      return
    }

    const subject = encodeURIComponent("Ramen AI Account Deletion Request")
    const body = encodeURIComponent(
      "I am requesting deletion of my Ramen AI account and associated personal data.\n\n" +
        `Registered email: ${email}\n\n` +
        "I understand that account data, profile data, comments, likes, and watch/progress data associated with my account will be deleted or anonymized, except for limited records retained where required for legal, security, fraud-prevention, subscription, tax, or dispute-resolution purposes."
    )

    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Request account deletion</h2>
      <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
        Submit your registered email below. This opens an email to our support team with the details needed to process
        your request.
      </p>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-900 dark:text-white">Registered email address</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
          />
        </label>

        <label className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(event) => setConfirmed(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300"
          />
          <span>I confirm that I want to request deletion of my Ramen AI account and associated data.</span>
        </label>

        <button
          type="button"
          onClick={submitRequest}
          className="w-full rounded-lg bg-gray-950 px-5 py-3 font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          Submit deletion request
        </button>

        <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">
          You can also email{" "}
          <a href={`mailto:${supportEmail}`} className="font-medium underline">
            {supportEmail}
          </a>{" "}
          directly with the subject &quot;Ramen AI Account Deletion Request&quot;.
        </p>
      </div>
    </div>
  )
}

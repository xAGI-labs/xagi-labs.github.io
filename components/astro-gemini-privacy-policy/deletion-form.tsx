"use client"

import { useState } from "react"

export default function DeletionForm() {
  const [email, setEmail] = useState("")
  const [confirmed, setConfirmed] = useState(false)

  const handleDeletionRequest = () => {
    if (!email || !confirmed) {
      alert("Please provide your email and confirm the deletion.")
      return
    }

    // Encodes the details into a mailto link
    const subject = encodeURIComponent("Account Deletion Request: AstroGemini")
    const body = encodeURIComponent(
      "I am requesting the permanent deletion of my AstroGemini account.\n\n" +
      "Registered Email: " + email + "\n\n" +
      "I understand that this will delete my birth chart data and chat history as per Google Play's Data Safety policies."
    )

    // Opens the default email app
    window.location.href = `mailto:saurav@xagi.in?subject=${subject}&body=${body}`
  }

  return (
    <div className="w-full max-w-[450px] mx-auto bg-[#162447] p-8 rounded-xl shadow-2xl text-center font-sans">
      <h2 className="text-[#FFD700] text-2xl font-bold mb-3">Delete Your Account</h2>
      <p className="text-[#b0b0c0] text-sm leading-relaxed mb-6">
        This will permanently remove your birth details, saved profiles, and AI chat history from AstroGemini. This action cannot be undone.
      </p>

      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your registered email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md border border-[#1b1b32] bg-[#0f1a3a] text-white placeholder-gray-500 focus:outline-none focus:border-[#E94560] transition-colors"
        />

        <div className="flex items-start text-left gap-3 mb-2">
          <input
            type="checkbox"
            id="confirmCheck"
            required
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#0f1a3a] text-[#E94560] focus:ring-[#E94560]"
          />
          <label htmlFor="confirmCheck" className="text-[#b0b0c0] text-[13px] cursor-pointer select-none">
            I confirm that I want to permanently delete my account and all associated data.
          </label>
        </div>

        <button
          type="button"
          onClick={handleDeletionRequest}
          className="w-full py-3.5 bg-[#E94560] hover:bg-[#ff4d6d] text-white font-bold rounded-md transition-colors text-base"
        >
          Submit Deletion Request
        </button>
      </div>
    </div>
  )
}

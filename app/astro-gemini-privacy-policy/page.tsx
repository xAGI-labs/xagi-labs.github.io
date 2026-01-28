import type { Metadata } from "next"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import DeletionForm from "@/components/astro-gemini-privacy-policy/deletion-form"

export const metadata: Metadata = {
  title: "Privacy Policy - AstroGemini",
  description: "Privacy Policy for AstroGemini - Vedic Astrology App",
}

export default function AstroGeminiPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Privacy Policy for AstroGemini</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Last Updated: January 28, 2026</p>

        <div className="space-y-8 text-gray-800 dark:text-gray-200">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Data Collection</h2>
            <p className="leading-relaxed">
              We collect specific birth details (Date, Time, Location) and Name to generate your Vedic birth chart. This data is processed to provide accurate astrological calculations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Generative AI (Gemini API)</h2>
            <p className="leading-relaxed">
              AstroGemini utilizes the Google Gemini API to power the chat feature. When you interact with the AI, relevant portions of your birth chart (e.g., planetary positions) are passed as context to provide personalized responses. We do not share your private identity or contact info with the AI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Local Storage</h2>
            <p className="leading-relaxed">
              Your chat history and saved profiles are stored locally on your device. We do not store your private chat logs on our central servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Sharing</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal data to third parties. Data is shared with Google (via the Gemini API) only as necessary to provide the AI features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. User Rights</h2>
            <p className="leading-relaxed">
              You can delete any profile or chat history directly within the app at any time, which permanently removes the data from your device.
            </p>
          </section>

          <section id="deletion" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-6">6. Account Deletion</h2>
            <div className="space-y-8">
              <p className="leading-relaxed">
                We respect your right to be forgotten. If you wish to request the complete deletion of your account and all associated data from our systems, please use the form below:
              </p>

              <div className="py-4">
                <DeletionForm />
              </div>

              <div className="pt-2">
                <h3 className="font-semibold mb-2">Data Handling:</h3>
                <ul className="list-disc list-inside space-y-2 ml-1 text-gray-700 dark:text-gray-300">
                  <li><strong>Deleted Data:</strong> We will permanently remove your account information, saved birth profiles, and any communication logs associated with your identity from our active databases.</li>
                  <li><strong>Retained Data:</strong> We do not retain any personal data after the deletion process is complete. Some anonymized usage statistics may be kept for analytical purposes.</li>
                  <li><strong>Retention Period:</strong> Your data is deleted immediately upon processing your request. We aim to complete all deletion requests within 7 business days.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

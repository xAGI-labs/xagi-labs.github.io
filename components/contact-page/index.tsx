"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { Mail, Phone, MapPin, ArrowRight, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Build Something Amazing</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ready to transform your AI vision into reality?<br />
              Schedule a free 45-minute strategy call to discuss your project, or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Schedule Call */}
            <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-3xl font-bold mb-6">Schedule Your Free Strategy Call</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Choose a time that works for you for a 45-minute consultation with our founding team.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">What to Expect:</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        45-minute video call with our founding team
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        Discussion of your AI vision and goals
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        Technical feasibility assessment
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        High-level approach and timeline
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        Ballpark pricing estimate
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        No obligation, just honest advice
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <a
                href="https://calendar.app.google/Nynsg8byKbhxePex5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center w-full justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Direct Contact */}
            <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <h2 className="text-3xl font-bold mb-6">Or Reach Out Directly</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Prefer to send us a message? We'd love to hear from you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:saurav@xagi.in" className="text-gray-600 dark:text-gray-400 hover:underline">
                      saurav@xagi.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Hayward, CA / Bangalore / Noida
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:saurav@xagi.in"
                className="inline-flex items-center w-full justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                Send Email
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">What Happens Next?</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex-shrink-0 mr-6">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">You fill out the form or book a call</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Share your project details and choose a convenient time for our discussion
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex-shrink-0 mr-6">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We review your information and prepare</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our team analyzes your requirements and prepares relevant questions
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex-shrink-0 mr-6">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We have a 45-minute strategy discussion</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Deep dive into your vision, challenges, and technical requirements
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex-shrink-0 mr-6">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We send a detailed proposal within 48 hours</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Comprehensive proposal with timeline, pricing, and approach
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex-shrink-0 mr-6">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">If aligned, we kick off within 1-2 weeks</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Quick turnaround to get your project started
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Do you sign NDAs?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we're happy to sign NDAs before discussing your project in detail.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">What information should I prepare?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your vision, key challenges, target users, timeline expectations, and any existing materials (docs, designs, etc.)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">How quickly can you start?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Most projects kick off within 1-2 weeks of proposal acceptance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Do you work with international clients?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! We work with clients globally across all time zones.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">What if I'm not sure what I need?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                That's what the strategy call is for. We'll help you figure it out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Hayward</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Artistic Pl, Hayward, CA 94541<br />
                United States
              </p>
            </div>

            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Bangalore</h3>
              <p className="text-gray-600 dark:text-gray-400">
                3rd Floor, 732, Chinmaya Mission Hospital Rd,<br />
                Indira Nagar 1st Stage, Stage 1, Indiranagar,<br />
                Bengaluru, Karnataka 560038
              </p>
            </div>

            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Noida</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Floor 19, C-001/A2, Sector 16B,<br />
                Noida, Uttar Pradesh 201301
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

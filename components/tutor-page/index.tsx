"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle, ChevronRight, Cpu, Shield, Users } from "lucide-react"
import Header from "../shared/header"
import Footer from "../shared/footer"

export default function TutorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Stop Teaching to the Middle. Start Personalizing for Mastery.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
          Introducing AI Tutor by xAGI Labs. The revolutionary B2B platform that scales your best teachers. AI Tutor moves beyond static mock tests to provide true one-to-one, adaptive personalization for every student in your institute, all under <strong>your</strong> brand.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Schedule a Demo
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">The Coaching Bottleneck: You Can't Be Everywhere at Once.</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Your institute is growing, but your expert faculty can't scale. In a traditional "one-to-many" classroom, it's impossible to give every student the personal attention they need.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Top Students Get Bored</h3>
              <p className="text-gray-600 dark:text-gray-400">They aren't challenged, leading to disengagement.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Struggling Students Get Left Behind</h3>
              <p className="text-gray-600 dark:text-gray-400">Their unique learning gaps go unidentified and unaddressed.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Teachers Are Overburdened</h3>
              <p className="text-gray-600 dark:text-gray-400">They spend more time on manual grading than on teaching.</p>
            </div>
          </div>
          <p className="mt-12 text-lg">The result? Inefficient learning, frustrated students, and high operational costs.</p>
        </div>
      </section>

      {/* Value Proposition / "Trusted By" Bar */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Compete with the Giants. Empower Your Educators.</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Trusted by India's fastest-growing coaching centers, universities, and ed-tech platforms.</p>
          <div className="flex justify-center items-center gap-8 md:gap-12 grayscale opacity-75">
            <p className="font-semibold">Institute Logo 1</p>
            <p className="font-semibold">Institute Logo 2</p>
            <p className="font-semibold">Institute Logo 3</p>
            <p className="font-semibold">Institute Logo 4</p>
          </div>
        </div>
      </section>

      {/* Features / Solution Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The AI Tutor Difference</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              AI Tutor is an all-in-one, AI-powered engine designed to augment your faculty, not replace them. We integrate seamlessly into your institute to solve your three biggest challenges: Personalization, Content, and Support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Cpu className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The Personalization Engine</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our adaptive engine is a "GPS for educators." It moves beyond simple analytics to become a true diagnostic tool. AI Tutor doesn't just show *what* a student got wrong; it identifies *why*. It pinpoints hidden knowledge gaps and automatically generates the "shortest learning path to mastery" for each individual. Stop generic revision; start targeted, personalized remediation.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-6">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The Generative AI Content Suite</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The content bottleneck is over. Our Generative AI creates thousands of high-quality, relevant questions for your mock tests in minutes. But the real revolution is **Automated Subjective Grading**. AI Tutor can read, understand, and score long-form, descriptive answers with high accuracy. Free your expert faculty from the burden of manual paper checking and let them focus on what they do best: teaching.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-6">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The 24/7 AI Mentor</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Student doubts don't wait for office hours. Our AI Learning Assistant engages learners 24/7. It's trained on your content to answer questions, provide hints, and deliver personalized feedback and motivation, ensuring no student is ever truly "stuck" or left behind.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-start gap-6">
              <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
                <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The Integrity Engine</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ensure the validity of your mock tests with our robust, AI-powered proctoring solution. Our system monitors for anomalies, verifies identity, and flags malpractice, allowing you to conduct cheat-free exams at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White-Label Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Your Platform. Your Brand. Your Success.</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            AI Tutor is a 100% white-label Platform-as-a-Service (PaaS) solution. This isn't our app; it's *yours*. We provide the deep-tech engine, but you get all the credit. Launch your own branded, AI-powered web and mobile platform in days. Compete directly with the B2C giants, retain your student loyalty, and own your data.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <p><strong>Your Logo & Branding:</strong> A seamless experience for your students.</p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <p><strong>Use Your Content:</strong> Make your existing, proven content adaptive.</p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <p><strong>Total Control:</strong> You own the student relationships and the data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Don't Just Take Our Word for It.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                "Integrating xAGI's AI Tutor was transformative. We've cut our manual grading costs by over 70%, but more importantly, our students are finally getting the personalized feedback we could never provide at scale. Our value proposition has exponentially enhanced."
              </p>
              <p className="font-semibold">R. Dasari, CEO, Apex Review</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                "We were losing students to B2C apps. AI Tutor's white-label platform allowed us to launch our own branded app in under a week. Our students love the 24/7 AI mentor, and our enrollment is up 40%."
              </p>
              <p className="font-semibold">S. Singh, Director, Target 9 Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">See the Future of Coaching. Schedule Your Demo Today.</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
          Stop losing students to "one-size-fits-all" solutions. Empower your teachers, slash your operational costs, and deliver the personalized outcomes your students deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
            Schedule Your Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href="#" className="inline-flex items-center font-semibold text-blue-600 hover:underline">
            Or, see how it works
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  )
}

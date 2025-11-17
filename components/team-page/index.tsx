"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { ExternalLink, Github, Linkedin } from "lucide-react"

export default function TeamPage() {
  const leadership = [
    {
      name: "Saurav Kumar",
      role: "Chief Executive Officer & Co-Founder",
      bio: "Product visionary and technical architect with a proven track record of launching successful AI-first products. Led development of 5+ products reaching 15,000+ combined users.",
      portfolio: "https://sauravtom.github.io/",
      achievements: ["Built FavcyNavigator to 10K+ users", "Advised 20+ startups on AI strategy"]
    },
    {
      name: "Udit Kumar",
      role: "Chief Technology Officer & Co-Founder",
      bio: "Systems architect specializing in scalable AI infrastructure and intelligent agent frameworks. Expert in building production-grade AI systems that handle millions of requests.",
      portfolio: "https://uditkumar01.vercel.app/",
      achievements: ["Architected infrastructure serving 25K+ users", "Built custom LLM fine-tuning pipelines", "Reduced AI inference costs by 60%"]
    }
  ]

  const productManagers = [
    { name: "Abhishek Sukumar", role: "Product Manager", portfolio: "https://abhishek-sukumar-port--folio.vercel.app/" },
    { name: "Chandramani Shukla", role: "Product Manager", linkedin: "https://in.linkedin.com/in/chandramani-shukla-31531b227" }
  ]

  const team = [
    { name: "Basab Jha", role: "Software Engineer - Backend", github: "https://github.com/comethrusws" },
    { name: "Ujjwal Puri", role: "Software Engineer - AI/ML", github: "https://github.com/UzitheI" },
    { name: "Alen Yohannan", role: "Software Engineer - Automation", github: "https://github.com/AlenVelocity" },
    { name: "Nilesh Agarwal", role: "Software Engineer", linkedin: "https://www.linkedin.com/in/nilesh-aggarwal-507552191/" },
    { name: "Niranjan Gaonkar", role: "Software Engineer - Frontend", github: "https://github.com/Niranjangkr" },
    { name: "Aditya Vernekar", role: "Software Engineer - DevOps", github: "https://github.com/AdityaVernekar" },
    { name: "Sai Tulasi Chilakapati", role: "Software Engineer", linkedin: "https://in.linkedin.com/in/saitulasichilakapati" },
    { name: "Dhananjay Pawar", role: "Software Engineer", github: "https://github.com/Dhananjay2601" },
    { name: "Aditya Rajawat", role: "Software Engineer", linkedin: "https://in.linkedin.com/in/aditya-rajawat" }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet the Team</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Builders. Innovators. Problem Solvers.<br />
              We're a team of engineers and entrepreneurs who've shipped real products to real users. We don't just consult—we build.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{leader.bio}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Notable Achievements:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {leader.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={leader.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  View Portfolio <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Managers */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Product Managers</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {productManagers.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-[#111111] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
                <div className="flex gap-3">
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Engineering Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-[#111111] rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
                <div className="flex gap-3">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Collective Strengths</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">9</div>
              <div className="text-gray-600 dark:text-gray-400">Products Launched</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$550K+</div>
              <div className="text-gray-600 dark:text-gray-400">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Work With Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how our team can help bring your AI vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

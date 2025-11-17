"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import {
  Brain,
  Target,
  Lightbulb,
  Users,
  Building2,
  GraduationCap,
  Cpu,
  Globe,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
  TrendingUp,
  Zap,
  BookOpen,
  Factory,
  School,
  Briefcase,
  DollarSign,
  FileText,
  ChevronRight,
  Rocket,
  Settings,
  Database,
  Layers
} from "lucide-react"

export default function MSDEPitchPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-[#0a0a0a] dark:to-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Strategic Partnership Proposal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AI-Driven Solutions for{" "}
              <span className="text-blue-600 dark:text-blue-400">
                India&apos;s Skill Development Agenda
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Aligning xAGI Labs&apos; AI capabilities with MSDE &amp; UPSDM strategic priorities (2025-2029)
              to build a future-ready workforce for Viksit Bharat @2047
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Schedule Strategic Discussion
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#proposals"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Project Proposals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-[#111111] rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Executive Summary
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                The Ministry of Skill Development and Entrepreneurship (MSDE) is entering a critical
                implementation phase of its Draft National Policy (2025-2035), targeting to skill 50% of
                India&apos;s workforce by 2035. With major initiatives like PMKVY 4.0, the SOAR (Skilling for
                AI Readiness) program backed by ₹500 crore, and urgent needs in semiconductors and green energy,
                the ministry requires strategic technology partners who can deliver scalable, AI-powered solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                xAGI Labs proposes to serve as a <strong className="text-gray-900 dark:text-white">strategic pilot partner</strong> for
                Western Uttar Pradesh, developing AI-driven solutions that integrate with existing infrastructure
                (like SIDH and UPSDM&apos;s AI dashboard) while addressing critical implementation bottlenecks—particularly
                the Training of Trainers (ToT) challenge that threatens the scalability of these ambitious programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: National Mandate */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Part 1: The National Mandate
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                MSDE&apos;s Four-Year Strategic Horizon (2025-2029)
              </p>
            </div>

            {/* Vision Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  1.1 Overarching Vision: Draft National Policy (2025-2035) &amp; Viksit Bharat
                </h3>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 shadow-sm">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The strategic agenda for MSDE is fundamentally defined by the launch of its new Draft National Policy
                  for Skill Development and Entrepreneurship 2025, designed to align the national skilling ecosystem with
                  <strong className="text-gray-900 dark:text-white"> &quot;Viksit Bharat @2047&quot;</strong> (Developed India @2047).
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Policy Objectives:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Skill 50% of the workforce by 2035 with strong emphasis on inclusivity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Align Indian skilling definitions with international standards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Offer new incentives for stakeholders and improve collaboration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Strategic Shifts:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Strengthen institutional frameworks and governance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Improve access for marginalized groups</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">Prioritize digital platforms and emerging technologies</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Strategic Opportunity:</strong> The ministry is actively seeking &quot;proof points&quot; for its new strategy.
                    This presents a unique opportunity to position not as a vendor, but as a <strong>strategic pilot partner</strong> whose
                    success can be championed nationally.
                  </p>
                </div>
              </div>
            </div>

            {/* PMKVY 4.0 Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  1.2 Core Engine: PMKVY 4.0 &amp; the &quot;Future Skills&quot; Imperative
                </h3>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 shadow-sm">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY 4.0) is the primary funding and implementation vehicle
                  operating under the Skill India Programme (SIP), running from 2022-2026.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 dark:bg-[#111111] p-6 rounded-lg">
                    <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">&quot;Future Skills&quot; Focus</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Explicit targeting of AI, Coding, Robotics, Mechatronics, IoT, 3D Printing, Drones, AR/VR
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#111111] p-6 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Demand-Driven Model</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Realigned from supply-based to demand-driven, requiring real-time data and agile content delivery
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#111111] p-6 rounded-lg">
                    <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Entrepreneurship Mandate</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Delinking of placement from skilling—focus on entrepreneurship and livelihood creation
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Key Insight:</strong> The implementation bottleneck is not the desire to teach these courses, but the
                    <strong> how</strong>—specifically, the lack of scalable, high-quality digital content and trained faculty.
                    Additionally, an &quot;AI-powered entrepreneurship-enabler tool&quot; (e.g., Gen-AI for business plan generation)
                    is more aligned than job matching platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDH Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                  <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  1.3 Digital Backbone: Skill India Digital Hub (SIDH)
                </h3>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 shadow-sm">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  SIDH is the unified digital infrastructure—the &quot;backbone&quot; for the entire skilling ecosystem,
                  integrating all initiatives under a &quot;whole of government and whole of nation&quot; approach.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">SIDH Manages:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Candidate registration and e-KYC
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Online counseling and course selection
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Training center onboarding
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Digital and blended content delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Biometric attendance tracking (AEBAS)
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        Standardized assessments
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">Critical Strategy:</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      A proposal to <strong>replace</strong> SIDH would be a fatal pitching error. The correct approach is to frame
                      solutions as <strong>&quot;plug-ins&quot; or &quot;modules&quot;</strong> that integrate with and enhance SIDH—de-risking
                      the project and making it an easier &quot;yes.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOAR Initiative */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-lg">
                  <Rocket className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  1.4 New Flagship: &quot;SOAR&quot; (Skilling for AI Readiness) Initiative
                </h3>
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Launched July 2025</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  Arguably the <strong>single most important and well-funded</strong> new program. The goal: make India&apos;s
                  school-going population the &quot;world&apos;s largest who are AI Ready.&quot;
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Program Details:</h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Target:</strong> School students (Class 6-12) and educators</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <BookOpen className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Curriculum:</strong> Three 15-hour modules—AI to be Aware, AI to Acquire, AI to Aspire</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Funding:</strong> ₹500 crore allocation + $14.4 million Skill Impact Bond</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Layers className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Integration:</strong> Leverages SIDH, collaborates with IITs, AICTE</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🎯 The Critical Bottleneck</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      The primary challenge will not be student interest—it will be the <strong>teachers</strong>. Most government
                      school educators are not AI experts.
                    </p>
                    <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded border border-green-200 dark:border-green-800">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        <strong>Strategic Pitch:</strong> An AI-powered &quot;Training of Trainers&quot; (ToT) platform that trains and
                        certifies teachers is more strategic than student-facing content alone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decentralization */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  1.5 Decentralization Doctrine: District Skill Development Plans (DSDPs)
                </h3>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 shadow-sm">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  A major policy shift driven by SANKALP programme: from top-down planning to grassroots,
                  demand-driven model. As of March 2025, <strong>776 District Skill Committees (DSCs)</strong> are
                  mandated to create annual data-driven DSDPs.
                </p>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">The Implementation Challenge:</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    This framework dumps complex data-gathering and analysis tasks onto hundreds of district-level
                    officials who are not trained data scientists. This ministry-wide problem is a prime opportunity
                    for an <strong>&quot;AI-powered DSDP Augmentation Tool&quot;</strong> that assists 700+ DSCs in auto-generating
                    their data-driven plans.
                  </p>
                </div>
              </div>
            </div>

            {/* Emerging Priorities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-lg">
                  <Cpu className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  1.6 Emerging National Priorities: Semiconductors &amp; Green Energy
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Semiconductors</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    July 2025: &quot;India Semiconductor Workforce Strategy&quot; report identifies urgent skilling
                    requirements across design, fabrication, and ATMP (Assembly, Testing, Marking, and Packaging).
                  </p>
                  <div className="p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded">
                    <p className="text-xs text-cyan-800 dark:text-cyan-200">
                      Primary bottleneck: Lack of trained workforce as billions are invested in new facilities
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Green Energy &amp; EVs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Active partnerships (e.g., Shell India) for skills training in green energy and EVs,
                    already active in select ITIs and NSTIs in Delhi-NCR region covering Western UP.
                  </p>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                    <p className="text-xs text-green-800 dark:text-green-200">
                      Opportunity: Specialized digital curricula (e.g., AI/VR simulation for semiconductor procedures)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: State Context */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Part 2: State-Level Context
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Decoding the Uttar Pradesh Skill Development Mission (UPSDM)
              </p>
            </div>

            {/* UPSDM Role */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  UPSDM as the Key Implementing Partner
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  UPSDM is the nodal state-level agency responsible for implementing MSDE&apos;s national policies.
                  It targets youth aged 14-35 with skills &quot;relevant to the employers.&quot;
                </p>
                <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Effective Pitch Structure:</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    The most effective pitch is for a <strong>&quot;National-State-District Pilot&quot;</strong>:
                    &quot;Run a pilot of our AI-skilling platform in Western UP, in direct partnership with UPSDM and
                    the District Skill Committees of Gautam Buddh Nagar and Meerut.&quot; This respects federal structure
                    and makes the ask clear and actionable.
                  </p>
                </div>
              </div>
            </div>

            {/* Critical AI Dashboard Intelligence */}
            <div className="mb-16">
              <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-800 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                    <Database className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800 dark:text-red-200">
                    CRITICAL INTELLIGENCE: UPSDM&apos;s Existing AI-Powered Dashboard
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  UPSDM has <strong>already launched</strong> an &quot;AI-powered UP Skill Gap dashboard&quot;—a first in the state.
                  This tool uses ML algorithms and data analytics to diagnose district-specific growth sectors.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What It Does:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Provides district-wise needs assessments</li>
                      <li>• Identifies top industries per district (e.g., sugar/paper/steel in Bijnor)</li>
                      <li>• Allocates training targets to partners</li>
                      <li>• Involves 45+ industries directly as training partners</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Sophisticated Gap:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      The dashboard is <strong>diagnostic</strong>—it analyzes existing sectors based on historical data.
                      It cannot analyze skill gaps for &quot;greenfield&quot; sectors like Semiconductor ATMP in factories that don&apos;t exist yet.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700">
                  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ THE WINNING PITCH:</h4>
                  <p className="text-green-700 dark:text-green-300">
                    <strong>Augmentation, not replacement.</strong> &quot;Your existing AI dashboard is world-class for diagnostic
                    analysis. We propose building a <strong>predictive analytics module</strong> that plugs into it. Our module
                    will forecast future skill needs for emerging sectors, like the 15,000 new jobs at the Noida EMC 2.0.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Project Praveen */}
            <div className="mb-16">
              <div className="bg-white dark:bg-[#111111] rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <School className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    &quot;Project Praveen&quot;: The UP-Specific Vehicle for SOAR
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Perfect Alignment:</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-200">National Policy (July 2025)</p>
                        <p className="text-sm text-blue-700 dark:text-blue-300">MSDE launches SOAR for schools (Class 6-12)</p>
                      </div>
                      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <p className="text-sm font-medium text-purple-800 dark:text-purple-200">State Policy (FY 2025-26)</p>
                        <p className="text-sm text-purple-700 dark:text-purple-300">UPSDM launches Project Praveen (Class 9-12)</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Details:</h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Free, 210-hour skill training courses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span><strong>Deadline:</strong> Batches must begin by October 20, 2025</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Target: Government secondary school students</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
                  <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
                    <strong>Perfect Storm Opportunity:</strong> A &quot;SOAR-Praveen Implementation Package&quot; is a direct,
                    timely, and high-impact solution that solves immediate implementation needs for both state and national ministries.
                  </p>
                </div>
              </div>
            </div>

            {/* UP AI City */}
            <div>
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Alignment with UP&apos;s &quot;AI City&quot; &amp; IT/ITeS Policy
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Uttar Pradesh is &quot;all-in&quot; on AI as a core pillar of its ambition to become a <strong>$1 trillion economy</strong>.
                  Major projects include India&apos;s first AI city in Lucknow and a new business-friendly IT &amp; ITeS Policy.
                </p>
                <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Strategic Implication:</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    The pitch doesn&apos;t need to &quot;sell&quot; AI. The state is already a true believer and heavy investor.
                    Jump directly to: <strong>&quot;Our project solves the human capital and talent pipeline problem that is
                    the single biggest risk to your &apos;AI City&apos; and $1T economy ambitions.&quot;</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Western UP Opportunities */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Part 3: Hyper-Local Opportunities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A Grant-Seeker&apos;s Guide to Western UP
              </p>
            </div>

            <div className="grid gap-8">
              {/* Gautam Buddh Nagar */}
              <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                    <Factory className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      3.1 Gautam Buddh Nagar (Noida/Greater Noida)
                    </h3>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      The High-Tech &quot;Greenfield&quot; - HIGHEST PRIORITY TARGET
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">The EMC 2.0 Project:</h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <DollarSign className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span><strong>₹417 Crore</strong> Electronics Manufacturing Cluster</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Building2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span><strong>200 acres</strong>, ₹2,500 crore expected investment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span><strong>15,000 new jobs</strong> in high-tech manufacturing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Consumer electronics, automotive electronics, medical devices, computer hardware</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">The Skill Gap Problem:</h4>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-4">
                      This is a 15,000-job problem in sectors where local trained workforce doesn&apos;t exist. Local ITI
                      faculty are not equipped to teach &quot;semiconductor cleanroom protocols&quot; or &quot;medical device assembly.&quot;
                    </p>
                    <div className="p-3 bg-white dark:bg-[#0a0a0a] rounded">
                      <p className="text-xs font-medium text-gray-900 dark:text-white">
                        <strong>Strategic Pitch:</strong> AI-driven &quot;Training of Trainers&quot; (ToT) platform for EMC 2.0 is
                        exponentially more valuable than student-facing courses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meerut */}
              <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      3.2 Meerut
                    </h3>
                    <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                      The &quot;Niche&quot; High-Profile Project
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">&quot;SportEdge Meerut&quot; Initiative:</h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li>• Launched November 2025</li>
                      <li>• Goal: Develop Meerut as India&apos;s &quot;model Sports Hub&quot;</li>
                      <li>• High-profile partners: Microsoft, World Bank, Asian Development Bank</li>
                      <li>• Explicit ask for &quot;R&amp;D, design innovation, and technology integration&quot;</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">Opportunity:</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      An &quot;AI-driven R&amp;D Skilling Centre&quot; training MSMEs in AI simulation for product design,
                      generative AI for apparel design, and IoT for &quot;smart&quot; equipment would be a perfect, grant-ready idea.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ghaziabad */}
              <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      3.3 Ghaziabad
                    </h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      The &quot;Brownfield&quot; MSME Challenge
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">The Challenge:</h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li>• ~6,500 MSME units in Engineering goods (ODOP)</li>
                      <li>• Traditional, non-technical workforce</li>
                      <li>• Need: Scalable basic digital upskilling</li>
                      <li>• Perfect vehicle: Jan Shikshan Sansthan (JSS) scheme</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Opportunity:</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Build AI-powered content for JSS portal—a simple, vernacular (Hindi) mobile app teaching
                      MSME owners the business case and basic skills for adopting digital automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: Project Proposals */}
      <section id="proposals" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Part 4: Grant-Ready Project Proposals
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Four Distinct, Fundable Solutions Aligned with Ministry Priorities
              </p>
            </div>

            {/* Proposal 1 */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-600 text-white p-3 rounded-lg font-bold">01</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      The DSDP-AI Augmentation Module
                    </h3>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      The Platform Pitch
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">The Problem:</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      776 DSCs need to perform complex data analysis, but UPSDM&apos;s existing AI dashboard has a
                      <strong> predictive gap</strong>—it cannot forecast needs for greenfield sectors like semiconductor ATMP.
                    </p>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Predictive modeling for emerging sectors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>AI-curriculum generator aligned to NSQF</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Dashboard integration with existing UPSDM platform</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Pitch Angle:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 italic">
                      &quot;Your existing dashboard is best-in-class for diagnosing current needs. Our module gives it
                      <strong> foresight</strong>. It turns your dashboard from diagnostic to predictive, allowing you to
                      prepare the workforce for the 15,000 new jobs at the Noida EMC today.&quot;
                    </p>
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded">
                      <p className="text-xs text-purple-800 dark:text-purple-200">
                        <strong>Alignment:</strong> SANKALP Programme, UPSDM RFP for IT Projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal 2 */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-600 text-white p-3 rounded-lg font-bold">02</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Gen-AI for Vernacular Skilling (JSS 2.0)
                    </h3>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      The Content Pitch
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">The Problem:</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      High-quality technical content for JSS audience (neo-literates, school dropouts, rural populations)
                      is almost non-existent in simple, vernacular Hindi formats.
                    </p>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>AI translation &amp; adaptation to 8th-grade level Hindi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Interactive scenarios with Hindi chatbot tutor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>JSS portal integration as content engine</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Pitch Angle:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 italic">
                      &quot;We help you scale high-quality technical training to every village in Uttar Pradesh, in the local
                      language, by using Gen-AI to do the work of 1,000 content creators. This solves the content bottleneck
                      for the JSS scheme and PMKVY 4.0&apos;s digital mandate.&quot;
                    </p>
                    <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded">
                      <p className="text-xs text-green-800 dark:text-green-200">
                        <strong>Alignment:</strong> JSS Scheme, PMKVY 4.0 (Blended Skilling), MSDE EoI for Digital Content
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal 3 - THE STRONGEST */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-xl p-8 border-4 border-pink-400 dark:border-pink-600">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-600 text-white p-3 rounded-lg font-bold">03</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Project SOAR-Praveen (West UP)
                      </h3>
                      <span className="text-sm font-medium text-pink-600 dark:text-pink-400">
                        The Implementation Pitch
                      </span>
                    </div>
                  </div>
                  <div className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    ⭐ STRONGEST PITCH
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">The Perfect Storm:</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      National SOAR initiative (July 2025) + State Project Praveen (FY 2025-26) = immediate need for
                      implementation partner. <strong>Deadline: October 20, 2025.</strong>
                    </p>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">&quot;SOAR-in-a-Box&quot; Package:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span><strong>AI-Powered ToT Platform:</strong> Train &amp; certify teachers at scale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Student AI-Ready Kits:</strong> IoT sensors, robotics components</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span><strong>SIDH-Integrated Content:</strong> Gamified platform for &quot;AI to Acquire&quot; module</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Pitch Angle:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 italic">
                      &quot;We are your &apos;one-stop-shop&apos; to make UP&apos;s Project Praveen the flagship success story for the national
                      SOAR initiative. We don&apos;t just provide student content; we solve your <strong>teacher training bottleneck</strong>,
                      which is the only thing that can stop this project from scaling.&quot;
                    </p>
                    <div className="p-3 bg-pink-50 dark:bg-pink-900/30 rounded">
                      <p className="text-xs text-pink-800 dark:text-pink-200">
                        <strong>Alignment:</strong> SOAR Initiative (₹500 crore), Project Praveen, Centre of Excellence in AI
                      </p>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded border border-yellow-200 dark:border-yellow-700">
                      <p className="text-xs font-bold text-yellow-800 dark:text-yellow-200">
                        Why Strongest: Immediate deadline, highest funding, minister&apos;s flagship priority, solves critical bottleneck
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal 4 */}
            <div>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-amber-600 text-white p-3 rounded-lg font-bold">04</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      SportEdge-AI: Meerut SportsTech Design Hub
                    </h3>
                    <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                      The Niche Pitch
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">The Opportunity:</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Brand-new SportEdge Meerut initiative (November 2025) with high-profile partners explicitly seeking
                      &quot;R&amp;D, design innovation, and technology.&quot;
                    </p>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">AI-Design Training Modules:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span><strong>AI Simulation:</strong> Cricket ball aerodynamics, helmet impact analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Generative AI:</strong> Novel apparel and equipment designs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span><strong>IoT &amp; Mechatronics:</strong> Smart bats, shoes, footballs</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Pitch Angle:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 italic">
                      &quot;We will be the R&amp;D and technology skilling arm for your SportEdge Meerut project. We will give
                      Meerut MSMEs the AI-design tools they need to compete globally, creating a high-profile success story
                      for your international partners.&quot;
                    </p>
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded">
                      <p className="text-xs text-amber-800 dark:text-amber-200">
                        <strong>Alignment:</strong> SportEdge Meerut, PMKVY 4.0 (Industry 4.0), TDB Grants
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 5: Strategic Guidance */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Part 5: Strategic Guidance
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Engagement and Funding Navigation
              </p>
            </div>

            {/* Framing the Pitch */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                5.1 Framing the Pitch: Solving the Ministry&apos;s Problems
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-4">❌ WRONG PITCH:</h4>
                  <p className="text-sm text-red-700 dark:text-red-300 italic mb-4">
                    &quot;Hi, I&apos;m an AI engineer. I&apos;m very smart and build great AI platforms. I heard you have a 4-year plan.
                    I can build you cool AI tools. Do you have any grants for me?&quot;
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    <strong>Why it&apos;s wrong:</strong> Arrogant, tech-focused, vague, places burden on minister to find a problem for the solution.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">✅ RIGHT PITCH:</h4>
                  <p className="text-sm text-green-700 dark:text-green-300 italic mb-4">
                    &quot;Hon&apos;ble Minister, I&apos;ve analyzed your strategic agenda, specifically PMKVY 4.0 and the new SOAR initiative.
                    I understand your implementation challenge is scaling high-quality content and solving the teacher training bottleneck.
                    I have a solution: a &apos;SOAR-Praveen Implementation Package&apos; for Western UP, aligning with Project Praveen&apos;s October deadline.
                    We can provide a scalable model for the whole country.&quot;
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    <strong>Why it&apos;s right:</strong> Demonstrates research, uses ministry language, identifies specific bottleneck, offers concrete solution.
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-white dark:bg-[#0a0a0a] rounded-xl p-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Pitching Principles:</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-[#111111] p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Use Their Language</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Fluency in acronyms: PMKVY 4.0, SIDH, DSDP, SOAR, Project Praveen, ATMP
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#111111] p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Be a Problem-Solver</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Frame around solving documented, high-priority problems (ToT bottleneck, predictive gap, vernacular content gap)
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#111111] p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Align with Hero Projects</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Tie to minister&apos;s high-profile initiatives (SOAR, SportEdge Meerut, Noida EMC 2.0)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Funding Pathways */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                5.2 Funding Pathways
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 shadow-sm">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-fit mb-4">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Unsolicited Proposal</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Goal of ministerial &quot;connect&quot; is to acquire a &quot;Project Champion&quot; who guides proposal through formal system.
                  </p>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <p className="text-xs text-blue-800 dark:text-blue-200">
                      Leverage minister&apos;s blessing for pilot programs
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 shadow-sm">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-fit mb-4">
                    <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">RFP/EoI Response</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Monitor MSDE and UPSDM websites for formal Requests for Proposals and Expressions of Interest.
                  </p>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                    <p className="text-xs text-purple-800 dark:text-purple-200">
                      Current EoI: Digital Content Creation for ESSCI
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-6 shadow-sm">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg w-fit mb-4">
                    <Rocket className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Startup Grants</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Parallel path: Technology Development Board (TDB) grants for innovative startups.
                  </p>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                    <p className="text-xs text-green-800 dark:text-green-200">
                      Can be combined with ministry partnership
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* One-Page Briefing Template */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                5.3 Executive Briefing Template (Leave-Behind Document)
              </h3>
              <div className="bg-white dark:bg-[#0a0a0a] rounded-xl p-8 shadow-lg border-2 border-gray-200 dark:border-gray-700">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Project SOAR-Praveen: An AI-Powered Implementation Package for Western UP
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Strategic Alignment:</strong> Directly supports Hon&apos;ble Minister&apos;s flagship &quot;SOAR&quot; initiative by providing
                    a scalable &quot;Training of Trainers&quot; (ToT) model to ensure success of Uttar Pradesh&apos;s &quot;Project Praveen.&quot;
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">The Problem:</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      National SOAR initiative requires massive, rapid ToT program for government school teachers—the key
                      implementation bottleneck for the October 2025 deadline.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">The Solution:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                      <li>• AI-Powered ToT Platform (train &amp; certify teachers)</li>
                      <li>• Student &quot;AI-Ready Kits&quot; (hardware deployment)</li>
                      <li>• SIDH-Integrated Content (certification tracking)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#111111] p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">The Pilot (&quot;The Ask&quot;):</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Western UP (Gautam Buddh Nagar, Ghaziabad, Meerut)
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Scope</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        [X] Pilot Schools, [Y] Teachers, [Z] Students
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Timeline</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        12 Months (FY 2025-26)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partner with xAGI Labs
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to transform India&apos;s skill development ecosystem with AI-powered solutions?
              Let&apos;s discuss how we can support MSDE and UPSDM&apos;s strategic vision together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Schedule Strategic Discussion
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Explore Our AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

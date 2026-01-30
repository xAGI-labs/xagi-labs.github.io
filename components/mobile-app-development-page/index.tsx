"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import {
  Rocket,
  RefreshCcw,
  Code,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  PenTool,
  Bug,
  Upload
} from "lucide-react"

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-blue-50 to-white dark:from-[#111111] dark:to-[#0a0a0a]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
            Stop Planning. Start Launching.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            We Build Apps<br />
            <span className="text-blue-600">That Go Live Fast</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            We craft AI-powered Flutter apps that help startups and SMEs move faster and grow smarter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#projects"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Services We Provide</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We build robust apps through collaborative development that turns your vision into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Startup & MVP */}
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">STARTUP & MVP DEVELOPMENT</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quickly validate your concept with a market-ready MVP that captures your core idea.
              </p>
            </div>

            {/* Full-Cycle */}
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <RefreshCcw className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">FULL-CYCLE DEVELOPMENT</h3>
              <p className="text-gray-600 dark:text-gray-400">
                End-to-end app creation: design, development, testing, and store deployment.
              </p>
            </div>

            {/* Custom Solution */}
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">CUSTOM SOLUTION</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bespoke applications tailored to your unique business challenges and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Us</h2>
              <p className="text-gray-400 text-lg mb-8">
                Passionate app developers dedicated to empowering businesses with innovative tech.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="text-4xl font-bold text-purple-500 mb-2">250K+</div>
                <div className="text-gray-400">Followers</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="text-4xl font-bold text-green-500 mb-2">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="text-4xl font-bold text-orange-500 mb-2">4+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">HOW IT WORKS</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our streamlined process for building high-quality Flutter apps.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800 z-0"></div>

            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "DISCOVERY CALL", desc: "First, we learn your vision and requirements to define a clear project strategy.", icon: Phone },
                { step: "02", title: "DESIGN", desc: "We begin by understanding your vision and goals to craft the right strategy.", icon: PenTool },
                { step: "03", title: "DEVELOPMENT", desc: "Our developers turn your designs into clean, scalable code built for the future.", icon: Code },
                { step: "04", title: "TESTING", desc: "Rigorous testing ensures your app is bug-free, responsive, and seamless across devices.", icon: Bug },
                { step: "05", title: "DEPLOYMENT", desc: "We begin by understanding your vision and goals to craft the right strategy.", icon: Upload },
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-[#0a0a0a] p-6 rounded-xl border border-gray-200 dark:border-gray-800 relative group">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2 text-center md:text-left">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">FEATURED PROJECTS</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover how our technology-driven solutions empower businesses and turn ideas into real, impactful products.
            </p>
          </div>

          <div className="space-y-20">
            {/* Project 1: ATOON */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm text-blue-600 font-bold mb-2">Social Networking / Music Streaming</div>
                <h3 className="text-3xl font-bold mb-4">ATOON - THE ULTIMATE MUSIC DISCOVERY APP</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-bold block">Client:</span> ATOON
                  </div>
                  <div>
                    <span className="font-bold block">Live URL:</span>
                    <a href="https://atoon.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">atoon.app</a>
                  </div>
                  <div>
                    <span className="font-bold block">Deliverables:</span>
                    UI/UX Design, Mobile App, Development (iOS & Android), Marketing Website
                  </div>
                </div>
                <Link href="#" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                  VIEW DETAILS <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 md:order-2 bg-gray-100 dark:bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-gray-400">Project Mockup</span>
              </div>
            </div>

            {/* Project 2: AL-HIND INSTITUTE */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 bg-gray-100 dark:bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-gray-400">Project Mockup</span>
              </div>
              <div className="order-2">
                <div className="text-sm text-green-600 font-bold mb-2">EdTech / Islamic Studies / Language Learning</div>
                <h3 className="text-3xl font-bold mb-4">AL-HIND INSTITUTE - ACCESSIBLE ISLAMIC EDUCATION</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-bold block">Client:</span> Institute for Arabic & Tajweed (Al-Hind Institute)
                  </div>
                  <div>
                    <span className="font-bold block">Live URL:</span>
                    <a href="https://al-hind-web-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">al-hind-web-app.vercel.app</a>
                  </div>
                  <div>
                    <span className="font-bold block">Deliverables:</span>
                    E-Learning Platform Development, Dual-Language Content Strategy, Community & Support Infrastructure, Integrated E-commerce & Donation Systems
                  </div>
                </div>
                <Link href="#" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                  VIEW DETAILS <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 3: FACEMAX */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm text-purple-600 font-bold mb-2">AI / Beauty / Wellness / Facial Enhancement</div>
                <h3 className="text-3xl font-bold mb-4">FACEMAX - BOOST YOUR AURA</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-bold block">Client:</span> FaceMax
                  </div>
                  <div>
                    <span className="font-bold block">Live URL:</span>
                    <a href="https://facemaxboostaura.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">facemaxboostaura.com</a>
                  </div>
                  <div>
                    <span className="font-bold block">Deliverables:</span>
                    UI/UX Design, Mobile App, Development (iOS & Android), Marketing Website
                  </div>
                </div>
                <Link href="#" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                  VIEW DETAILS <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 md:order-2 bg-gray-100 dark:bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-gray-400">Project Mockup</span>
              </div>
            </div>

            {/* Project 4: LADHAKH TEMPO */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 bg-gray-100 dark:bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-gray-400">Project Mockup</span>
              </div>
              <div className="order-2">
                <div className="text-sm text-orange-600 font-bold mb-2">Local Ride-Hailing / Adventure Tourism</div>
                <h3 className="text-3xl font-bold mb-4">LADHAKH TEMPO - EXPLORE LIKE NEVER BEFORE</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-bold block">Client:</span> Ladakh Tempo
                  </div>
                  <div>
                    <span className="font-bold block">Live URL:</span>
                    <a href="https://tempounionleh.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tempounionleh.com</a>
                  </div>
                  <div>
                    <span className="font-bold block">Deliverables:</span>
                    Dual Mobile App Development (Passenger & Driver), Backend Infrastructure, Marketing Website, Local Driver Vetting & Training Module
                  </div>
                </div>
                <Link href="#" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                  VIEW DETAILS <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 5: CHORUM */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm text-pink-600 font-bold mb-2">Social Networking / Music Streaming</div>
                <h3 className="text-3xl font-bold mb-4">Chorum - Rebuilding Social Music Discovery</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-bold block">Client:</span> Chorum
                  </div>
                  <div>
                    <span className="font-bold block">Live URL:</span>
                    <a href="https://chorum.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">chorum.app</a>
                  </div>
                  <div>
                    <span className="font-bold block">Deliverables:</span>
                    UI/UX Design, Mobile App Development (iOS & Android), Marketing Website
                  </div>
                </div>
                <Link href="#" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                  VIEW DETAILS <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 md:order-2 bg-gray-100 dark:bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-gray-400">Project Mockup</span>
              </div>
            </div>

             {/* Project 6: PINPOINT */}
             <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 bg-gray-100 dark:bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-gray-400">Project Mockup</span>
              </div>
              <div className="order-2">
                <div className="text-sm text-red-600 font-bold mb-2">Social Networking / Geo-Social Technology</div>
                <h3 className="text-3xl font-bold mb-4">PinPoint - Find People & Things, Effortlessly</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-bold block">Client:</span> Pinpoint
                  </div>
                  <div>
                    <span className="font-bold block">Live URL:</span>
                    <span className="text-gray-500">Coming Soon</span>
                  </div>
                  <div>
                    <span className="font-bold block">Deliverables:</span>
                    Location-Based Pin System, Real-Time Discovery Engine, Secure Match Flow, Complete App Design & Development
                  </div>
                </div>
                <Link href="#" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                  VIEW DETAILS <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">TESTIMONIALS</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Real stories from businesses we've helped build, launch, and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold">Matthew West</div>
                  <div className="text-sm text-gray-500">CEO - Bloom Journal</div>
                </div>
              </div>
              <div className="mb-4 text-yellow-500 text-xl">★★★★★</div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "I appreciate the hard work and dedication your team has done for this app. you guys delivered an outstanding product and made the process seamless."
              </p>
            </div>

            <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold">Ashish Sharma</div>
                  <div className="text-sm text-gray-500">CTO - TECHLAND</div>
                </div>
              </div>
              <div className="mb-4 text-yellow-500 text-xl">★★★★.8</div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Their seamless integration of APIs and payment gateways contributed to advanced features. Their innovative mindset, commitment to quality, and effective communication make them an asset to any project."
              </p>
            </div>

            <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold">Anurag Bezboruah</div>
                  <div className="text-sm text-gray-500">CEO - Finixia Dedecons</div>
                </div>
              </div>
              <div className="mb-4 text-yellow-500 text-xl">★★★★★</div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Absolute win for my team, only possible because of the high-end application delivered by Flutter Your Way. Very, very satisfied with their work."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">CHOOSE YOUR PLAN</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Clear options to bring your app idea to life, with everything included to launch successfully
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-2">Basic App Package</h3>
              <div className="text-4xl font-bold mb-6">$799 <span className="text-lg font-normal text-gray-500">USD</span></div>
              <ul className="space-y-4 mb-8">
                {[
                  "Mobile app for your users",
                  "Converting your design into working app",
                  "Connecting to external services",
                  "Smooth animations and transitions",
                  "Help when you need it",
                  "10-30 Day Delivery",
                  "Unlimited changes until you are happy"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="block w-full py-3 text-center border border-black dark:border-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                Start Your Project
              </Link>
            </div>

            {/* MVP Package */}
            <div className="border-2 border-blue-600 rounded-2xl p-8 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Recommended
              </div>
              <h3 className="text-xl font-bold mb-2">MVP Development</h3>
              <div className="text-4xl font-bold mb-6">$2,499 <span className="text-lg font-normal text-gray-500">USD</span></div>
              <ul className="space-y-4 mb-8">
                {[
                  "Mobile app plus admin dashboard",
                  "Custom design for your brand",
                  "Converting designs into working app",
                  "Building your apps brain (backend)",
                  "1-3 Month Delivery",
                  "Getting your app on App Store & Play Store",
                  "Testing everything works perfectly",
                  "Unlimited changes until you are happy"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="block w-full py-3 text-center bg-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Start Your Project
              </Link>
            </div>

            {/* Full-Cycle Package */}
            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-2">Full-Cycle App Development</h3>
              <div className="text-4xl font-bold mb-6">$4,499 <span className="text-lg font-normal text-gray-500">USD</span></div>
              <ul className="space-y-4 mb-8">
                {[
                  "User app, business app & admin dashboard",
                  "Premium design customized for your brand",
                  "Converting designs into working app",
                  "Complete backend system built for growth",
                  "2-4 Month Delivery",
                  "Publishing on App Store & Play Store",
                  "Thorough testing for flawless performance",
                  "Full control with admin dashboard",
                  "Unlimited changes until you are happy"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="block w-full py-3 text-center border border-black dark:border-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">LET'S BUILD SOMETHING AMAZING TOGETHER</h2>
              <p className="text-gray-400 mb-8">
                Ready to bring your app idea to life? Book a free consultation with our experts.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="text-2xl font-bold text-blue-500 mr-4">01</div>
                  <div>
                    <h3 className="font-bold mb-1">Share your app idea with us</h3>
                    <p className="text-gray-400 text-sm">Tell us what you want to build.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl font-bold text-blue-500 mr-4">02</div>
                  <div>
                    <h3 className="font-bold mb-1">Get a free project assessment</h3>
                    <p className="text-gray-400 text-sm">We'll review your requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl font-bold text-blue-500 mr-4">03</div>
                  <div>
                    <h3 className="font-bold mb-1">Receive a tailored development plan</h3>
                    <p className="text-gray-400 text-sm">We'll propose a roadmap and quote.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                BOOK FREE CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">GET IN TOUCH</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">WhatsApp / Phone</div>
                    <div className="font-bold">+91 9754352051</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="font-bold">info@flutteryourway.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="font-bold">Working remotely worldwide</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="text-sm text-gray-400 mb-4">Follow us</div>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-400 transition-colors">
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-600 transition-colors">
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

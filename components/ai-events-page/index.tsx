"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { Calendar, MapPin, Filter, Plus, ExternalLink, Search } from "lucide-react"

interface Event {
  name: string
  dates: string
  location: string
  type: string
  month: string
}

const events: Event[] = [
  // January 2026
  { name: "Silicon Valley AI and Tech Funding Summit", dates: "Jan 5, 2026", location: "Online", type: "Community / Startup", month: "January" },
  { name: "CES (Consumer Electronics Show)", dates: "Jan 7-10, 2026", location: "Las Vegas, NV, USA", type: "Industry Expo", month: "January" },
  { name: "AI Summit 2026 (Club Wealth)", dates: "Jan 13, 2026", location: "Online", type: "Community / Workshop", month: "January" },
  { name: "AAAI-26 (40th Conf. on AI)", dates: "Jan 20-27, 2026", location: "Singapore", type: "Premier Academic", month: "January" },
  { name: "AI & Tech Networking Los Angeles", dates: "Jan 21, 2026", location: "Los Angeles, CA, USA", type: "Community / Meetup", month: "January" },
  { name: "Women in AI (Meetup)", dates: "Jan 22, 2026", location: "SF / NYC / Online", type: "Community / Meetup", month: "January" },
  { name: "Data Day Texas + AI 2026", dates: "Jan 24, 2026", location: "Austin, TX, USA", type: "Community / Meetup", month: "January" },
  { name: "Agentic AI Transformation Summit", dates: "Jan 26-28, 2026", location: "Miami, FL, USA", type: "Niche Industry", month: "January" },
  { name: "AI Boston Tech Meetup", dates: "Jan 29, 2026", location: "Boston, MA, USA", type: "Community / Meetup", month: "January" },

  // February 2026
  { name: "Deep Reinforcement Learning (Stanford)", dates: "Feb 2 - Apr 12, 2026", location: "Online", type: "Training / Workshop", month: "February" },
  { name: "MLSS Melbourne 2026", dates: "Feb 2-13, 2026", location: "Melbourne, Australia", type: "Training / Workshop", month: "February" },
  { name: "AI & Big Data Expo Global", dates: "Feb 4-5, 2026", location: "London, UK", type: "Premier Industry Expo", month: "February" },
  { name: "Generative AI Summit London", dates: "Feb 4-5, 2026", location: "London, UK", type: "Niche Industry", month: "February" },
  { name: "Deep Learning for Computer Vision (Stanford)", dates: "Feb 9 - Apr 19, 2026", location: "Online", type: "Training / Workshop", month: "February" },
  { name: "Generative AI Expo", dates: "Feb 10-12, 2026", location: "Fort Lauderdale, FL, USA", type: "Niche Industry", month: "February" },
  { name: "Advanced Scientific Computing & ML", dates: "Feb 10-12, 2026", location: "Goa, India", type: "Academic", month: "February" },
  { name: "Generative AI Summit Austin", dates: "Feb 12-13, 2026", location: "Austin, TX, USA", type: "Niche Industry", month: "February" },
  { name: "World AI Cannes Festival", dates: "Feb 12-13, 2026", location: "Cannes, France", type: "Niche Industry", month: "February" },
  { name: "CDAO Financial Services", dates: "Feb 18-19, 2026", location: "New York, NY, USA", type: "Vertical Summit (Finance)", month: "February" },
  { name: "CDAO Insurance", dates: "Feb 19, 2026", location: "New York, NY, USA", type: "Vertical Summit (Finance)", month: "February" },
  { name: "AI in Energy Summit", dates: "Feb 23-25, 2026", location: "Houston, TX, USA", type: "Vertical Summit (Energy)", month: "February" },
  { name: "NLP with Deep Learning (Stanford)", dates: "Feb 23 - May 3, 2026", location: "Online", type: "Training / Workshop", month: "February" },
  { name: "AI: Smart Business & Entrepreneurship Summit", dates: "Feb 27, 2026", location: "TBD", type: "Niche Industry", month: "February" },

  // March 2026
  { name: "WACV 2026 (Winter Conf. on Apps. of CV)", dates: "Mar 6-10, 2026", location: "Tucson, AZ, USA", type: "Premier Academic", month: "March" },
  { name: "Gartner Data & Analytics Summit", dates: "Mar 9-11, 2026", location: "Orlando, FL, USA", type: "Vertical Summit (Data)", month: "March" },
  { name: "AI For Health 2026 (TechTour)", dates: "Mar 11-13, 2026", location: "Bochum, Germany", type: "Vertical Summit (Health)", month: "March" },
  { name: "FREE Data Science Webinar (Meetup)", dates: "Mar 14, 2026", location: "Online", type: "Community / Meetup", month: "March" },
  { name: "NVIDIA GTC 2026", dates: "Mar 16-19, 2026", location: "San Jose, CA, USA", type: "Premier Industry Expo", month: "March" },
  { name: "Data Science & AI Leadership Summit", dates: "Mar 16, 2026", location: "Tucson, AZ, USA", type: "Community / Meetup", month: "March" },
  { name: "Agentic AI & Automation in Finance Summit", dates: "Mar 16-17, 2026", location: "Atlanta, GA, USA", type: "Vertical Summit (Finance)", month: "March" },
  { name: "Big Data Minds Europe", dates: "Mar 16-17, 2026", location: "Munich, Germany", type: "Vertical Summit (Data)", month: "March" },
  { name: "European Chatbot & Conversational AI Summit", dates: "Mar 18-19, 2026", location: "Edinburgh, Scotland", type: "Vertical Summit (NLP/CX)", month: "March" },
  { name: "ICMLAIDS 2026", dates: "Mar 20-21, 2026", location: "Orlando, FL, USA", type: "Academic", month: "March" },
  { name: "Data Governance, AI Governance & MDM Conf.", dates: "Mar 23-26, 2026", location: "London, UK", type: "Vertical Summit (Data)", month: "March" },
  { name: "All Things AI 2026 (Meetup)", dates: "Mar 23-24, 2026", location: "Durham, NC, USA", type: "Community / Meetup", month: "March" },
  { name: "EACL 2026 (Conf. of the European ACL)", dates: "Mar 24-29, 2026", location: "Rabat, Morocco", type: "Premier Academic", month: "March" },
  { name: "CDAO Canada", dates: "Mar 25-26, 2026", location: "Toronto, ON, Canada", type: "Vertical Summit (Data)", month: "March" },
  { name: "World Summit & Expo on Robotics, AI, ML", dates: "Mar 26-28, 2026", location: "Rome, Italy", type: "Academic", month: "March" },
  { name: "AI Revolution in Healthcare Summit (Ed. II)", dates: "Mar 27-28, 2026", location: "Dubai, UAE", type: "Vertical Summit (Health)", month: "March" },
  { name: "ALPS 2026 (Advanced Lang. Processing School)", dates: "Mar 29 - Apr 3, 2026", location: "Aussois, French Alps", type: "Training / Workshop", month: "March" },
  { name: "Prosthetics & Robotics USA 2026", dates: "Mar 30-31, 2026", location: "Boston, MA, USA", type: "Vertical Summit (Health)", month: "March" },

  // April 2026
  { name: "Robotics for Good Youth Challenge", dates: "Apr 4, 2026", location: "TBD (Ethiopia)", type: "Community / Workshop", month: "April" },
  { name: "HumanX 2026", dates: "Apr 6-9, 2026", location: "San Francisco, CA, USA", type: "Premier Industry Expo", month: "April" },
  { name: "DeepFest 2026", dates: "Apr 13-16, 2026", location: "Riyadh, Saudi Arabia", type: "Premier Industry Expo", month: "April" },
  { name: "Big Data and Data Science Conference", dates: "Apr 13-14, 2026", location: "Orlando, FL, USA", type: "Niche Industry", month: "April" },
  { name: "AI in Finance Summit NY (RE•WORK)", dates: "Apr 15-16, 2026", location: "New York, NY, USA", type: "Vertical Summit (Finance)", month: "April" },
  { name: "Chief AI Officer Summit NY", dates: "Apr 16, 2026", location: "New York, NY, USA", type: "Niche Industry", month: "April" },
  { name: "SANS AI Cybersecurity Summit 2026", dates: "Apr 20-27, 2026", location: "Arlington, VA, USA", type: "Vertical Summit (Security)", month: "April" },
  { name: "AI Week 2026 (Decentralized)", dates: "Apr 20-24, 2026", location: "USA (Decentralized)", type: "Community / Meetup", month: "April" },
  { name: "Hannover Messe", dates: "Apr 20-24, 2026", location: "Hannover, Germany", type: "Vertical Summit (Industrial)", month: "April" },
  { name: "MIT Technology Review EmTech AI 2026", dates: "Apr 21-23, 2026", location: "Cambridge, MA, USA", type: "Niche Industry", month: "April" },
  { name: "ICLR 2026 (Intl. Conf. on Learning Reps.)", dates: "Apr 23-27, 2026", location: "Rio de Janeiro, Brazil", type: "Premier Academic", month: "April" },
  { name: "Robotics for Good Youth Challenge", dates: "Apr 23, 2026", location: "TBD (Spain)", type: "Community / Workshop", month: "April" },
  { name: "AI at Yale Symposium 2026", dates: "Apr 28, 2026", location: "New Haven, CT, USA", type: "Community / Meetup", month: "April" },
  { name: "AI+IM Global Summit 2026", dates: "Apr 28-30, 2026", location: "Baltimore, MD, USA", type: "Vertical Summit (Data)", month: "April" },
]

const eventTypes = [
  "All Types",
  "Premier Academic",
  "Premier Industry Expo",
  "Vertical Summit (Finance)",
  "Vertical Summit (Health)",
  "Vertical Summit (Data)",
  "Vertical Summit (Energy)",
  "Vertical Summit (Security)",
  "Vertical Summit (Industrial)",
  "Vertical Summit (NLP/CX)",
  "Niche Industry",
  "Academic",
  "Training / Workshop",
  "Community / Meetup",
  "Community / Workshop",
  "Community / Startup",
  "Industry Expo",
]

const months = ["All Months", "January", "February", "March", "April"]

export default function AIEventsPage() {
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedMonth, setSelectedMonth] = useState("All Months")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredEvents = events.filter((event) => {
    const matchesType = selectedType === "All Types" || event.type === selectedType
    const matchesMonth = selectedMonth === "All Months" || event.month === selectedMonth
    const matchesSearch = searchQuery === "" ||
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesMonth && matchesSearch
  })

  const getTypeBadgeColor = (type: string) => {
    if (type.includes("Premier Academic")) return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
    if (type.includes("Premier Industry")) return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    if (type.includes("Vertical Summit")) return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
    if (type.includes("Training")) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
    if (type.includes("Community")) return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
    if (type.includes("Academic")) return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
    return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              AI Events Calendar 2026
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Comprehensive directory of AI conferences, hackathons, summits, and workshops for Q1-Q2 2026.
              From premier academic conferences to industry expositions and specialized vertical summits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Your Event
              </Link>
              <a
                href="#events-table"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Browse Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{events.length}</div>
              <div className="text-gray-600 dark:text-gray-400">Total Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">4</div>
              <div className="text-gray-600 dark:text-gray-400">Months Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">20+</div>
              <div className="text-gray-600 dark:text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Event Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 dark:bg-[#111111] sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filters:</span>
            </div>

            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
            >
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredEvents.length} of {events.length} events
          </div>
        </div>
      </section>

      {/* Events Table */}
      <section id="events-table" className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-[#111111] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Event Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Dates</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {filteredEvents.map((event, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-[#0a0a0a] transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">
                          {event.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                          {event.dates}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                          {event.location}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200 dark:divide-gray-800">
              {filteredEvents.map((event, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-[#0a0a0a] transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white mb-2">
                    {event.name}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      {event.dates}
                    </div>
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      {event.location}
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="p-12 text-center">
                <div className="text-gray-500 dark:text-gray-400">
                  No events found matching your criteria. Try adjusting your filters.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Have an AI Event to Share?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              If you're organizing an AI conference, hackathon, workshop, or meetup, we'd love to include it in our calendar.
              Submit your event details and help the AI community discover your event.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Submit Your Event
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              About This Calendar
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This comprehensive AI events calendar covers the first half of 2026 (Q1-Q2), featuring a diverse range of events
                from premier academic conferences like AAAI and ICLR, to major industry expositions such as NVIDIA GTC and HumanX,
                to specialized vertical summits in finance, healthcare, energy, and more.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The calendar demonstrates two key trends in the AI landscape:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li><strong>The Great Bifurcation:</strong> Events are increasingly divided between foundational research (academic conferences) and industrial application (corporate expositions).</li>
                <li><strong>Rapid Verticalization:</strong> AI is maturing beyond general technology discussions into domain-specific solutions for finance, healthcare, energy, cybersecurity, and other industries.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400">
                Whether you're a researcher, developer, executive, or entrepreneur, this calendar helps you identify the most
                relevant events for your professional goals and strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

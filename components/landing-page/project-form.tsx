"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="container mx-auto py-12 px-6 md:px-10">
      <div className="max-w-xl mx-auto w-full">
        <div className="bg-[#3a3a3a] rounded-2xl p-6 md:p-8 shadow-lg">
          {/* Header */}
          <div className="mb-8">
            <p className="text-white text-base md:text-lg leading-relaxed">
              Answer some quick questions about your project and then schedule a call with your project manager.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-white text-sm font-medium mb-3">
                What is your first name? <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#4a4a4a] border border-[#5a5a5a] rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] focus:border-transparent transition-all"
                  placeholder=""
                />
                {/* Small indicator icon */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 bg-[#ff6b6b] rounded flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full ml-0.5"></div>
                    <div className="w-1 h-1 bg-white rounded-full ml-0.5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-white text-sm font-medium mb-3">
                Last name? <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#4a4a4a] border border-[#5a5a5a] rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] focus:border-transparent transition-all"
                placeholder=""
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-3">
                What is your email? <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#4a4a4a] border border-[#5a5a5a] rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] focus:border-transparent transition-all"
                placeholder=""
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-white text-sm font-medium mb-3">
                Your phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#4a4a4a] border border-[#5a5a5a] rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7A7FEE] focus:border-transparent transition-all"
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#7A7FEE] text-white rounded-lg text-sm font-medium opacity-50 cursor-not-allowed transition-all"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

'use client'

import React, { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

interface AIGeneratorModalProps {
  isOpen: boolean
  onClose: () => void
  onGenerate: (slides: any[]) => void
}

const API_KEY_STORAGE_KEY = 'gemini-api-key'

export default function AIGeneratorModal({
  isOpen,
  onClose,
  onGenerate,
}: AIGeneratorModalProps) {
  const [prompt, setPrompt] = useState('')
  const [slideCount, setSlideCount] = useState(5)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [showApiKeyInput, setShowApiKeyInput] = useState(false)

  // Load API key from localStorage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem(API_KEY_STORAGE_KEY)
    if (savedKey) {
      setApiKey(savedKey)
    } else {
      setShowApiKeyInput(true)
    }
  }, [])

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem(API_KEY_STORAGE_KEY, apiKey.trim())
      setShowApiKeyInput(false)
      setError('')
    }
  }

  const handleClearApiKey = () => {
    localStorage.removeItem(API_KEY_STORAGE_KEY)
    setApiKey('')
    setShowApiKeyInput(true)
  }

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt')
      return
    }

    if (!apiKey.trim()) {
      setError('Please enter your Gemini API key')
      setShowApiKeyInput(true)
      return
    }

    setIsGenerating(true)
    setError('')

    try {
      const genAI = new GoogleGenerativeAI(apiKey.trim())
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

      const systemPrompt = `You are a professional LinkedIn content creator. Generate ${slideCount} carousel slides based on the user's prompt.

The first slide should be an engaging intro slide with a catchy title and subtitle.
The middle slides (2 to ${slideCount - 1}) should be content slides with informative titles, subtitles, and detailed content.
The last slide should be an outro/CTA slide with a call to action.

Return ONLY a valid JSON array of slides in this exact format:
[
  {
    "type": "intro",
    "title": "Engaging Title",
    "subtitle": "Compelling subtitle",
    "content": "",
    "backgroundColor": "#0A66C2"
  },
  {
    "type": "content",
    "title": "Key Point Title",
    "subtitle": "Brief context",
    "content": "Detailed content for this slide. Make it informative and engaging.",
    "backgroundColor": "#0A66C2"
  },
  {
    "type": "outro",
    "title": "Thank You!",
    "subtitle": "Call to action",
    "content": "Follow for more insights",
    "backgroundColor": "#0A66C2"
  }
]

Important:
- Return ONLY the JSON array, no additional text or markdown
- Each slide must have all fields: type, title, subtitle, content, backgroundColor
- Use professional LinkedIn-style language
- Keep titles under 60 characters
- Keep subtitles under 80 characters
- Keep content under 300 characters per slide
- Use #0A66C2 (LinkedIn blue) as default backgroundColor`

      const result = await model.generateContent(`${systemPrompt}\n\nUser prompt: ${prompt}`)
      const response = await result.response
      const text = response.text()

      // Try to extract JSON from the response
      let slides
      try {
        // Remove markdown code blocks if present
        const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
        slides = JSON.parse(cleanedText)
      } catch (parseError) {
        console.error('Failed to parse AI response:', text)
        throw new Error('Failed to parse AI response. Please try again.')
      }

      // Validate that we got an array of slides
      if (!Array.isArray(slides)) {
        throw new Error('Invalid response format from AI')
      }

      // Add unique IDs to each slide
      const slidesWithIds = slides.map((slide, index) => ({
        ...slide,
        id: `slide-${Date.now()}-${index}`,
      }))

      onGenerate(slidesWithIds)
      setPrompt('')
      setSlideCount(5)
      onClose()
    } catch (err: any) {
      if (err.message?.includes('API key')) {
        setError('Invalid API key. Please check your Gemini API key.')
        setShowApiKeyInput(true)
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred')
      }
    } finally {
      setIsGenerating(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6 z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Generate Slides with AI
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            disabled={isGenerating}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* API Key Input */}
          {showApiKeyInput ? (
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Gemini API Key
              </label>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Get your free API key from{' '}
                <a
                  href="https://makersuite.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google AI Studio
                </a>
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Gemini API key"
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSaveApiKey}
                  disabled={!apiKey.trim()}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-medium"
                >
                  Save
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Your API key is stored locally in your browser and never sent to our servers.
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <span className="text-sm text-green-700 dark:text-green-400">
                ✓ API key configured
              </span>
              <button
                onClick={handleClearApiKey}
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
              >
                Change key
              </button>
            </div>
          )}

          {/* Prompt Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              What would you like to create a carousel about?
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: 5 tips for better LinkedIn engagement, How to write clean code in React, Time management strategies for developers..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
              disabled={isGenerating}
            />
          </div>

          {/* Slide Count Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of slides (including intro and outro)
            </label>
            <input
              type="number"
              min="3"
              max="10"
              value={slideCount}
              onChange={(e) => setSlideCount(parseInt(e.target.value) || 5)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isGenerating}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Recommended: 5-8 slides for best engagement
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim() || !apiKey.trim()}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Generate Slides
                </>
              )}
            </button>
            <button
              onClick={onClose}
              disabled={isGenerating}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

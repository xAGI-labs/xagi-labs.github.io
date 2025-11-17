'use client'

import React, { useState } from 'react'

interface AIGeneratorModalProps {
  isOpen: boolean
  onClose: () => void
  onGenerate: (slides: any[]) => void
}

// OpenRouter API key for ZAI GLM model (free tier)
const OPENROUTER_API_KEY = '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'
const OPENROUTER_MODEL = 'zhipu/glm-4-flash'

export default function AIGeneratorModal({
  isOpen,
  onClose,
  onGenerate,
}: AIGeneratorModalProps) {
  const [prompt, setPrompt] = useState('')
  const [slideCount, setSlideCount] = useState(5)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt')
      return
    }

    setIsGenerating(true)
    setError('')

    try {
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

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'https://xagi-labs.github.io',
          'X-Title': 'LinkedIn Carousel Generator',
        },
        body: JSON.stringify({
          model: OPENROUTER_MODEL,
          messages: [
            {
              role: 'system',
              content: systemPrompt,
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 4000,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`)
      }

      const data = await response.json()
      const text = data.choices?.[0]?.message?.content || ''

      if (!text) {
        throw new Error('No response received from AI')
      }

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
      setError(err instanceof Error ? err.message : 'An error occurred')
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
          {/* AI Model Info */}
          <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <span className="text-sm text-blue-700 dark:text-blue-400">
              Powered by ZAI GLM (via OpenRouter)
            </span>
          </div>

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
              disabled={isGenerating || !prompt.trim()}
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

'use client'

import React, { useState } from 'react'

interface AIGeneratorModalProps {
  isOpen: boolean
  onClose: () => void
  onGenerate: (slides: any[]) => void
}

// New API endpoint
const API_ENDPOINT = 'https://placeholder.sauravalgs.workers.dev/linkedin-json'

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
      // Build a concise prompt to fit more slides in the token limit
      // The API has a ~256 token limit, so we need to be very concise
      const fullPrompt = `Create ${slideCount} slides for LinkedIn carousel about: ${prompt}. Return only JSON with format: {"slides":[{"slideNumber":1,"title":"","content":"","description":""}]}. Keep each field under 50 words.`

      // Call the new API
      const url = new URL(API_ENDPOINT)
      url.searchParams.set('prompt', fullPrompt)

      const response = await fetch(url.toString(), {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const data = await response.json()

      // The API returns: { title, description, slides: [], rawResponse: { response, usage } }
      // We need to parse the JSON from rawResponse.response
      const rawResponseText = data.rawResponse?.response || ''

      if (!rawResponseText) {
        throw new Error('No response received from API')
      }

      // Try to extract JSON from the response
      let carouselData
      try {
        // Remove markdown code blocks if present
        let cleanedText = rawResponseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()

        // Try to find the JSON object boundaries
        const jsonStart = cleanedText.indexOf('{')
        if (jsonStart !== -1) {
          cleanedText = cleanedText.substring(jsonStart)
        }

        // Handle trailing commas in JSON (common AI output issue)
        cleanedText = cleanedText.replace(/,(\s*[}\]])/g, '$1')

        // Try to parse - if it fails due to truncation, we'll handle incomplete JSON
        try {
          carouselData = JSON.parse(cleanedText)
        } catch (e) {
          // If parsing fails, try to extract what we can from the incomplete JSON
          // Look for slide objects even if the JSON is incomplete
          const extractedSlides = []

          // Improved regex to capture slide objects more reliably
          // This pattern looks for objects with slideNumber and handles nested quotes better
          const slideRegex = /\{\s*"slideNumber"\s*:\s*(\d+)\s*,\s*"title"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*"content"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*(?:,\s*"description"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)")?\s*\}/g

          let match
          while ((match = slideRegex.exec(cleanedText)) !== null) {
            extractedSlides.push({
              slideNumber: parseInt(match[1]),
              title: match[2],
              content: match[3],
              description: match[4] || ''
            })
          }

          // If the regex approach didn't work, try a more aggressive extraction
          if (extractedSlides.length === 0) {
            // Split by slide objects more aggressively
            const slideObjectPattern = /\{\s*"slideNumber"/g
            const positions = []
            let m
            while ((m = slideObjectPattern.exec(cleanedText)) !== null) {
              positions.push(m.index)
            }

            for (let i = 0; i < positions.length; i++) {
              const start = positions[i]
              const end = i < positions.length - 1 ? positions[i + 1] : cleanedText.length
              let objStr = cleanedText.substring(start, end).trim()

              // Try to close the object if it's incomplete
              if (!objStr.endsWith('}')) {
                // Find the last complete field
                const lastQuote = objStr.lastIndexOf('"')
                if (lastQuote > -1) {
                  objStr = objStr.substring(0, lastQuote + 1) + '}'
                }
              }

              // Remove trailing commas before closing brace
              objStr = objStr.replace(/,\s*\}/, '}')

              try {
                const slideObj = JSON.parse(objStr)
                if (slideObj.slideNumber && slideObj.title) {
                  extractedSlides.push({
                    slideNumber: slideObj.slideNumber,
                    title: slideObj.title,
                    content: slideObj.content || '',
                    description: slideObj.description || ''
                  })
                }
              } catch (parseErr) {
                console.warn('Could not parse slide object:', objStr)
              }
            }
          }

          if (extractedSlides.length > 0) {
            carouselData = { slides: extractedSlides }
          } else {
            throw new Error('Could not parse response')
          }
        }
      } catch (parseError) {
        console.error('Failed to parse AI response:', rawResponseText)
        throw new Error('Failed to parse AI response. Please try again.')
      }

      // Extract slides from the carousel data
      const apiSlides = carouselData.slides || []

      if (!Array.isArray(apiSlides) || apiSlides.length === 0) {
        throw new Error('No slides generated. Please try again.')
      }

      // If we got fewer slides than requested, pad with template slides
      let slidesToUse = [...apiSlides]
      if (apiSlides.length < slideCount && apiSlides.length >= 2) {
        console.log(`API returned ${apiSlides.length}/${slideCount} slides. Adding template slides for the rest.`)

        // Add template slides in the middle (before the outro)
        const lastSlide = slidesToUse.pop() // Remove the last slide temporarily
        const slidesToAdd = slideCount - apiSlides.length

        for (let i = 0; i < slidesToAdd; i++) {
          const slideNum = slidesToUse.length + 1
          slidesToUse.push({
            slideNumber: slideNum,
            title: `Point ${slideNum}`,
            content: `Add your content here for slide ${slideNum}.`,
            description: 'Edit this slide to add your own content.'
          })
        }

        // Add the last slide back
        if (lastSlide) {
          slidesToUse.push(lastSlide)
        }
      }

      // Transform API slides to our format
      const slides = slidesToUse.map((slide: any, index: number) => {
        // Determine slide type based on position
        let type = 'content'
        if (index === 0) type = 'intro'
        if (index === slidesToUse.length - 1) type = 'outro'

        return {
          type,
          title: slide.title || `Slide ${index + 1}`,
          subtitle: slide.description || '',
          content: slide.content || '',
          backgroundColor: '#0A66C2', // LinkedIn blue
        }
      })

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
              Powered by AI
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

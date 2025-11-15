'use client'

import React, { useState, useRef, createRef } from 'react'
import { Carousel, Slide } from './types'
import { defaultCarousel, createDefaultSlide } from './defaults'
import SlidePreview from './components/SlidePreview'
import SlideEditor from './components/SlideEditor'
import ExportButton from './components/ExportButton'
import ThemeCustomizer from './components/ThemeCustomizer'

export default function LinkedInCarouselGenerator() {
  const [carousel, setCarousel] = useState<Carousel>(defaultCarousel)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const slideRefs = useRef<React.RefObject<HTMLDivElement>[]>([])

  // Initialize refs for each slide
  React.useEffect(() => {
    slideRefs.current = carousel.slides.map(
      (_, i) => slideRefs.current[i] || createRef<HTMLDivElement>()
    )
  }, [carousel.slides.length])

  const updateSlide = (slideId: string, updates: Partial<Slide>) => {
    setCarousel((prev) => ({
      ...prev,
      slides: prev.slides.map((slide) =>
        slide.id === slideId ? { ...slide, ...updates } : slide
      ),
    }))
  }

  const deleteSlide = (slideId: string) => {
    if (carousel.slides.length <= 1) {
      alert('You must have at least one slide')
      return
    }
    setCarousel((prev) => ({
      ...prev,
      slides: prev.slides.filter((slide) => slide.id !== slideId),
    }))
    if (activeSlideIndex >= carousel.slides.length - 1) {
      setActiveSlideIndex(Math.max(0, carousel.slides.length - 2))
    }
  }

  const addSlide = (type: Slide['type'] = 'content') => {
    const newSlide = createDefaultSlide(type, carousel.slides.length)
    setCarousel((prev) => ({
      ...prev,
      slides: [...prev.slides, newSlide],
    }))
    setActiveSlideIndex(carousel.slides.length)
  }

  const moveSlide = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= carousel.slides.length) return

    setCarousel((prev) => {
      const newSlides = [...prev.slides]
      const [moved] = newSlides.splice(fromIndex, 1)
      newSlides.splice(toIndex, 0, moved)
      return { ...prev, slides: newSlides }
    })

    setActiveSlideIndex(toIndex)
  }

  const updateTheme = (updates: Partial<Carousel['theme']>) => {
    setCarousel((prev) => ({
      ...prev,
      theme: { ...prev.theme, ...updates },
    }))
  }

  const updateSettings = (updates: Partial<Carousel['settings']>) => {
    setCarousel((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...updates },
    }))
  }

  const saveCarousel = () => {
    const dataStr = JSON.stringify(carousel, null, 2)
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      dataStr
    )}`
    const exportFileDefaultName = 'linkedin-carousel.json'

    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  const loadCarousel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const loaded = JSON.parse(e.target?.result as string)
        setCarousel(loaded)
        setActiveSlideIndex(0)
      } catch (error) {
        alert('Invalid carousel file')
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                LinkedIn Carousel Generator
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Create engaging LinkedIn carousels with ease
              </p>
            </div>
            <div className="flex gap-2">
              <label className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium">
                Load
                <input
                  type="file"
                  accept=".json"
                  onChange={loadCarousel}
                  className="hidden"
                />
              </label>
              <button
                onClick={saveCarousel}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Editor */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Slides</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => addSlide('content')}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    + Add Slide
                  </button>
                </div>
              </div>

              {/* Slide Navigation */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {carousel.slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      activeSlideIndex === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {index + 1}. {slide.type}
                  </button>
                ))}
              </div>

              {/* Active Slide Editor */}
              {carousel.slides[activeSlideIndex] && (
                <SlideEditor
                  slide={carousel.slides[activeSlideIndex]}
                  index={activeSlideIndex}
                  onUpdate={updateSlide}
                  onDelete={deleteSlide}
                  onMoveUp={(index) => moveSlide(index, index - 1)}
                  onMoveDown={(index) => moveSlide(index, index + 1)}
                  totalSlides={carousel.slides.length}
                />
              )}
            </div>

            {/* Theme Customizer */}
            <ThemeCustomizer
              carousel={carousel}
              onUpdateTheme={updateTheme}
              onUpdateSettings={updateSettings}
            />
          </div>

          {/* Right Column - Preview & Export */}
          <div className="space-y-6">
            {/* Preview */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Preview</h2>

              {/* Current Slide Preview */}
              <div className="mb-4">
                <div ref={slideRefs.current[activeSlideIndex]}>
                  <SlidePreview
                    slide={carousel.slides[activeSlideIndex]}
                    index={activeSlideIndex}
                    carousel={carousel}
                    isActive={true}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() =>
                    setActiveSlideIndex(Math.max(0, activeSlideIndex - 1))
                  }
                  disabled={activeSlideIndex === 0}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {activeSlideIndex + 1} / {carousel.slides.length}
                </span>
                <button
                  onClick={() =>
                    setActiveSlideIndex(
                      Math.min(carousel.slides.length - 1, activeSlideIndex + 1)
                    )
                  }
                  disabled={activeSlideIndex === carousel.slides.length - 1}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Export Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Export</h2>
              <ExportButton slides={slideRefs.current} />
            </div>

            {/* All Slides Preview (Hidden, for export) */}
            <div className="hidden">
              {carousel.slides.map((slide, index) => (
                <div key={slide.id} ref={slideRefs.current[index]}>
                  <SlidePreview
                    slide={slide}
                    index={index}
                    carousel={carousel}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Create professional LinkedIn carousels optimized for engagement
          </p>
        </div>
      </footer>
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import { toPng } from 'html-to-image'

interface ExportButtonProps {
  slides: React.RefObject<HTMLDivElement>[]
}

export const ExportButton: React.FC<ExportButtonProps> = ({ slides }) => {
  const [isExporting, setIsExporting] = useState(false)
  const [progress, setProgress] = useState(0)

  const exportSlides = async () => {
    if (slides.length === 0) {
      alert('No slides to export')
      return
    }

    setIsExporting(true)
    setProgress(0)

    try {
      for (let i = 0; i < slides.length; i++) {
        const slideElement = slides[i].current
        if (!slideElement) continue

        // Convert to PNG with LinkedIn optimal dimensions (1080x1080)
        const dataUrl = await toPng(slideElement, {
          quality: 1,
          pixelRatio: 2,
          width: 1080,
          height: 1080,
        })

        // Download the image
        const link = document.createElement('a')
        link.download = `linkedin-carousel-slide-${i + 1}.png`
        link.href = dataUrl
        link.click()

        setProgress(((i + 1) / slides.length) * 100)

        // Small delay between downloads
        await new Promise((resolve) => setTimeout(resolve, 500))
      }

      alert('All slides exported successfully!')
    } catch (error) {
      console.error('Error exporting slides:', error)
      alert('Failed to export slides. Please try again.')
    } finally {
      setIsExporting(false)
      setProgress(0)
    }
  }

  const exportAllAsZip = async () => {
    alert(
      'Export all as ZIP functionality requires additional dependencies. For now, slides will be downloaded individually.'
    )
    await exportSlides()
  }

  return (
    <div className="space-y-2">
      <button
        onClick={exportSlides}
        disabled={isExporting}
        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isExporting ? `Exporting... ${Math.round(progress)}%` : 'Export All Slides'}
      </button>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        Exports slides as 1080x1080px PNG images (LinkedIn optimized)
      </p>
    </div>
  )
}

export default ExportButton

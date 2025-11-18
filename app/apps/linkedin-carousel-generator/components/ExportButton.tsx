'use client'

import React, { useState } from 'react'
import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'

interface ExportButtonProps {
  slides: React.RefObject<HTMLDivElement>[]
  isExporting: boolean
  setIsExporting: (isExporting: boolean) => void
}

export const ExportButton: React.FC<ExportButtonProps> = ({
  slides,
  isExporting,
  setIsExporting,
}) => {
  const [progress, setProgress] = useState(0)

  const exportAsPDF = async () => {
    if (slides.length === 0) {
      alert('No slides to export')
      return
    }

    setIsExporting(true)
    setProgress(0)

    // Brief delay to allow the UI to update and render all slides
    await new Promise((resolve) => setTimeout(resolve, 100))

    try {
      // LinkedIn carousel optimal dimensions: 1080x1350px
      const width = 1080
      const height = 1350

      // Convert pixels to mm for jsPDF (at 300 DPI)
      // 1 inch = 25.4mm, 300 DPI means 300 pixels per inch
      // So: pixels / 300 * 25.4 = mm
      const widthMm = (width / 300) * 25.4
      const heightMm = (height / 300) * 25.4

      // Create PDF with custom dimensions and 300 DPI quality
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [widthMm, heightMm],
        compress: true,
      })

      for (let i = 0; i < slides.length; i++) {
        const slideElement = slides[i].current
        if (!slideElement) continue

        // Convert to PNG with LinkedIn optimal dimensions (1080x1350px)
        // Using pixelRatio 2.78 to achieve 300 DPI (300/108 ≈ 2.78)
        const dataUrl = await toPng(slideElement, {
          quality: 1,
          pixelRatio: 3, // Higher resolution for better quality
          width: width,
          height: height,
          backgroundColor: '#ffffff',
        })

        // Add page for each slide (except the first one)
        if (i > 0) {
          pdf.addPage([widthMm, heightMm], 'portrait')
        }

        // Add the image to the PDF page
        pdf.addImage(dataUrl, 'PNG', 0, 0, widthMm, heightMm, undefined, 'FAST')

        setProgress(((i + 1) / slides.length) * 100)
      }

      // Save the PDF
      pdf.save('linkedin-carousel.pdf')

      alert('LinkedIn carousel PDF exported successfully!')
    } catch (error) {
      console.error('Error exporting PDF:', error)
      alert('Failed to export PDF. Please try again.')
    } finally {
      setIsExporting(false)
      setProgress(0)
    }
  }

  const exportSlides = async () => {
    if (slides.length === 0) {
      alert('No slides to export')
      return
    }

    setIsExporting(true)
    setProgress(0)

    // Brief delay to allow the UI to update and render all slides
    await new Promise((resolve) => setTimeout(resolve, 100))

    try {
      for (let i = 0; i < slides.length; i++) {
        const slideElement = slides[i].current
        if (!slideElement) continue

        // Convert to PNG with LinkedIn optimal dimensions (1080x1350px)
        const dataUrl = await toPng(slideElement, {
          quality: 1,
          pixelRatio: 3,
          width: 1080,
          height: 1350,
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

  return (
    <div className="space-y-3">
      <button
        onClick={exportAsPDF}
        disabled={isExporting}
        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isExporting ? `Exporting... ${Math.round(progress)}%` : 'Export as PDF'}
      </button>

      <button
        onClick={exportSlides}
        disabled={isExporting}
        className="w-full px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isExporting ? `Exporting... ${Math.round(progress)}%` : 'Export as PNG Images'}
      </button>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        PDF: 1080x1350px @ 300 DPI (LinkedIn optimized)
        <br />
        PNG: Individual slides for manual upload
      </p>
    </div>
  )
}

export default ExportButton

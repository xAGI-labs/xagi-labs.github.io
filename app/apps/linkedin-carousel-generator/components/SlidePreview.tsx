'use client'

import React from 'react'
import { Slide, Carousel } from '../types'

interface SlidePreviewProps {
  slide: Slide
  index: number
  carousel: Carousel
  isActive?: boolean
}

export const SlidePreview: React.FC<SlidePreviewProps> = ({
  slide,
  index,
  carousel,
  isActive = false,
}) => {
  const { theme, settings } = carousel

  return (
    <div
      className={`relative w-full flex flex-col justify-center items-center p-12 rounded-lg shadow-lg transition-all ${
        isActive ? 'ring-4 ring-blue-500' : ''
      }`}
      style={{
        backgroundColor: slide.backgroundColor || theme.primaryColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
        aspectRatio: '4/5', // LinkedIn carousel ratio (1080x1350)
      }}
    >
      {/* Page Number */}
      {settings.showPageNumbers && (
        <div className="absolute top-6 right-6 text-sm opacity-70">
          {index + 1}
        </div>
      )}

      {/* Content based on slide type */}
      {slide.type === 'intro' && (
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight break-words">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-2xl md:text-3xl opacity-90">{slide.subtitle}</p>
          )}
        </div>
      )}

      {slide.type === 'content' && (
        <div className="space-y-6 w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight break-words">
            {slide.title}
          </h2>
          {slide.content && (
            <div className="text-xl md:text-2xl opacity-90 leading-relaxed whitespace-pre-wrap">
              {slide.content}
            </div>
          )}
        </div>
      )}

      {slide.type === 'outro' && (
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight break-words">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-2xl md:text-3xl opacity-90">{slide.subtitle}</p>
          )}
          {slide.content && (
            <p className="text-xl md:text-2xl opacity-80">{slide.content}</p>
          )}
        </div>
      )}

      {/* Author */}
      {settings.author && (
        <div className="absolute bottom-6 left-6 text-sm opacity-70">
          {settings.author}
        </div>
      )}
    </div>
  )
}

export default SlidePreview

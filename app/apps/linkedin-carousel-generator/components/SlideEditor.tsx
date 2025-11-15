'use client'

import React from 'react'
import { Slide } from '../types'

interface SlideEditorProps {
  slide: Slide
  index: number
  onUpdate: (slideId: string, updates: Partial<Slide>) => void
  onDelete: (slideId: string) => void
  onMoveUp: (index: number) => void
  onMoveDown: (index: number) => void
  totalSlides: number
}

export const SlideEditor: React.FC<SlideEditorProps> = ({
  slide,
  index,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  totalSlides,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Slide {index + 1}</span>
          <select
            value={slide.type}
            onChange={(e) =>
              onUpdate(slide.id, { type: e.target.value as Slide['type'] })
            }
            className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm"
          >
            <option value="intro">Intro</option>
            <option value="content">Content</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onMoveUp(index)}
            disabled={index === 0}
            className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Move up"
          >
            ↑
          </button>
          <button
            onClick={() => onMoveDown(index)}
            disabled={index === totalSlides - 1}
            className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Move down"
          >
            ↓
          </button>
          <button
            onClick={() => onDelete(slide.id)}
            disabled={totalSlides <= 1}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Delete slide"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={slide.title}
          onChange={(e) => onUpdate(slide.id, { title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
          placeholder="Enter slide title"
        />
      </div>

      {/* Subtitle */}
      {(slide.type === 'intro' || slide.type === 'outro') && (
        <div>
          <label className="block text-sm font-medium mb-1">Subtitle</label>
          <input
            type="text"
            value={slide.subtitle || ''}
            onChange={(e) => onUpdate(slide.id, { subtitle: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
            placeholder="Enter subtitle"
          />
        </div>
      )}

      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1">Content</label>
        <textarea
          value={slide.content || ''}
          onChange={(e) => onUpdate(slide.id, { content: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
          placeholder="Enter slide content"
        />
      </div>

      {/* Background Color */}
      <div>
        <label className="block text-sm font-medium mb-1">Background Color</label>
        <div className="flex gap-2">
          <input
            type="color"
            value={slide.backgroundColor}
            onChange={(e) =>
              onUpdate(slide.id, { backgroundColor: e.target.value })
            }
            className="w-16 h-10 rounded cursor-pointer"
          />
          <input
            type="text"
            value={slide.backgroundColor}
            onChange={(e) =>
              onUpdate(slide.id, { backgroundColor: e.target.value })
            }
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
            placeholder="#0A66C2"
          />
        </div>
      </div>
    </div>
  )
}

export default SlideEditor

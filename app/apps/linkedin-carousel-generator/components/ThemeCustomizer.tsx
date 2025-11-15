'use client'

import React from 'react'
import { Carousel } from '../types'
import { themePresets } from '../defaults'

interface ThemeCustomizerProps {
  carousel: Carousel
  onUpdateTheme: (updates: Partial<Carousel['theme']>) => void
  onUpdateSettings: (updates: Partial<Carousel['settings']>) => void
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  carousel,
  onUpdateTheme,
  onUpdateSettings,
}) => {
  const { theme, settings } = carousel

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold">Theme & Settings</h3>

      {/* Theme Presets */}
      <div>
        <label className="block text-sm font-medium mb-2">Theme Presets</label>
        <div className="grid grid-cols-2 gap-2">
          {themePresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() =>
                onUpdateTheme({
                  primaryColor: preset.primaryColor,
                  secondaryColor: preset.secondaryColor,
                  textColor: preset.textColor,
                })
              }
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-left transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: preset.primaryColor }}
                />
                <span className="text-sm font-medium">{preset.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Colors */}
      <div className="space-y-4">
        <h4 className="font-medium">Custom Colors</h4>

        {/* Primary Color */}
        <div>
          <label className="block text-sm font-medium mb-1">Primary Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={theme.primaryColor}
              onChange={(e) => onUpdateTheme({ primaryColor: e.target.value })}
              className="w-16 h-10 rounded cursor-pointer"
            />
            <input
              type="text"
              value={theme.primaryColor}
              onChange={(e) => onUpdateTheme({ primaryColor: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
            />
          </div>
        </div>

        {/* Text Color */}
        <div>
          <label className="block text-sm font-medium mb-1">Text Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={theme.textColor}
              onChange={(e) => onUpdateTheme({ textColor: e.target.value })}
              className="w-16 h-10 rounded cursor-pointer"
            />
            <input
              type="text"
              value={theme.textColor}
              onChange={(e) => onUpdateTheme({ textColor: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
            />
          </div>
        </div>

        {/* Font Family */}
        <div>
          <label className="block text-sm font-medium mb-1">Font Family</label>
          <select
            value={theme.fontFamily}
            onChange={(e) => onUpdateTheme({ fontFamily: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
          >
            <option value="Arial, sans-serif">Arial</option>
            <option value="'Helvetica Neue', Helvetica, sans-serif">Helvetica</option>
            <option value="'Georgia', serif">Georgia</option>
            <option value="'Times New Roman', serif">Times New Roman</option>
            <option value="'Courier New', monospace">Courier New</option>
            <option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
            <option value="'Verdana', sans-serif">Verdana</option>
            <option value="system-ui, -apple-system, sans-serif">System Font</option>
          </select>
        </div>
      </div>

      {/* Settings */}
      <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="font-medium">Settings</h4>

        {/* Show Page Numbers */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Show Page Numbers</label>
          <input
            type="checkbox"
            checked={settings.showPageNumbers}
            onChange={(e) =>
              onUpdateSettings({ showPageNumbers: e.target.checked })
            }
            className="w-5 h-5 rounded cursor-pointer"
          />
        </div>

        {/* Author Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Author Name (optional)
          </label>
          <input
            type="text"
            value={settings.author || ''}
            onChange={(e) => onUpdateSettings({ author: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
            placeholder="Your name or handle"
          />
        </div>
      </div>
    </div>
  )
}

export default ThemeCustomizer

import { Carousel, Slide } from './types'

export const createDefaultSlide = (type: Slide['type'], index: number): Slide => {
  const templates = {
    intro: {
      title: 'Your Carousel Title',
      subtitle: 'A compelling subtitle',
      content: '',
      backgroundColor: '#0A66C2',
    },
    content: {
      title: `Slide ${index + 1}`,
      subtitle: '',
      content: 'Add your content here. You can include key points, insights, or any information you want to share.',
      backgroundColor: '#0A66C2',
    },
    outro: {
      title: 'Thank You!',
      subtitle: 'Follow for more content',
      content: 'Connect with me on LinkedIn',
      backgroundColor: '#0A66C2',
    },
  }

  return {
    id: `slide-${Date.now()}-${index}`,
    type,
    ...templates[type],
  }
}

export const defaultCarousel: Carousel = {
  slides: [
    createDefaultSlide('intro', 0),
    createDefaultSlide('content', 1),
    createDefaultSlide('content', 2),
    createDefaultSlide('outro', 3),
  ],
  theme: {
    primaryColor: '#0A66C2',
    secondaryColor: '#FFFFFF',
    textColor: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
  },
  settings: {
    showPageNumbers: true,
    author: '',
  },
}

export const themePresets = [
  { name: 'LinkedIn Blue', primaryColor: '#0A66C2', secondaryColor: '#FFFFFF', textColor: '#FFFFFF' },
  { name: 'Professional Dark', primaryColor: '#1A1A1A', secondaryColor: '#4A4A4A', textColor: '#FFFFFF' },
  { name: 'Vibrant Orange', primaryColor: '#FF6B35', secondaryColor: '#004E89', textColor: '#FFFFFF' },
  { name: 'Modern Purple', primaryColor: '#6B5B95', secondaryColor: '#D4A5A5', textColor: '#FFFFFF' },
  { name: 'Fresh Green', primaryColor: '#2D6A4F', secondaryColor: '#B7E4C7', textColor: '#FFFFFF' },
  { name: 'Elegant Navy', primaryColor: '#14213D', secondaryColor: '#FCA311', textColor: '#FFFFFF' },
]

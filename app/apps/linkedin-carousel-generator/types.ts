import { z } from 'zod'

export const SlideSchema = z.object({
  id: z.string(),
  type: z.enum(['intro', 'content', 'outro']),
  title: z.string().min(1, 'Title is required'),
  subtitle: z.string().optional(),
  content: z.string().optional(),
  backgroundColor: z.string().default('#0A66C2'),
})

export const CarouselSchema = z.object({
  slides: z.array(SlideSchema).min(1, 'At least one slide is required'),
  theme: z.object({
    primaryColor: z.string().default('#0A66C2'),
    secondaryColor: z.string().default('#FFFFFF'),
    textColor: z.string().default('#FFFFFF'),
    fontFamily: z.string().default('Arial, sans-serif'),
  }),
  settings: z.object({
    showPageNumbers: z.boolean().default(true),
    author: z.string().optional(),
  }),
})

export type Slide = z.infer<typeof SlideSchema>
export type Carousel = z.infer<typeof CarouselSchema>

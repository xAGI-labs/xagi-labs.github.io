import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

export async function POST(request: NextRequest) {
  try {
    const { prompt, slideCount = 5 } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

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

    const result = await model.generateContent(`${systemPrompt}\n\nUser prompt: ${prompt}`)
    const response = await result.response
    const text = response.text()

    // Try to extract JSON from the response
    let slides
    try {
      // Remove markdown code blocks if present
      const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      slides = JSON.parse(cleanedText)
    } catch (parseError) {
      console.error('Failed to parse AI response:', text)
      return NextResponse.json(
        { error: 'Failed to parse AI response. Please try again.' },
        { status: 500 }
      )
    }

    // Validate that we got an array of slides
    if (!Array.isArray(slides)) {
      return NextResponse.json(
        { error: 'Invalid response format from AI' },
        { status: 500 }
      )
    }

    // Add unique IDs to each slide
    const slidesWithIds = slides.map((slide, index) => ({
      ...slide,
      id: `slide-${Date.now()}-${index}`,
    }))

    return NextResponse.json({ slides: slidesWithIds })
  } catch (error) {
    console.error('Error generating slides:', error)
    return NextResponse.json(
      { error: 'Failed to generate slides. Please try again.' },
      { status: 500 }
    )
  }
}

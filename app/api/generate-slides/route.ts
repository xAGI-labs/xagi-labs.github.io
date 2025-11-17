import { NextRequest, NextResponse } from 'next/server'

// OpenRouter API configuration
const OPENROUTER_MODEL = 'zhipu/glm-4-flash'

export async function POST(request: NextRequest) {
  try {
    const { prompt, slideCount = 5 } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENROUTER_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured. Please set OPENROUTER_API_KEY environment variable.' },
        { status: 500 }
      )
    }

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

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://xagi-labs.github.io',
        'X-Title': 'LinkedIn Carousel Generator',
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('OpenRouter API Error:', errorData)
      return NextResponse.json(
        { error: errorData.error?.message || `API request failed with status ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    const text = data.choices?.[0]?.message?.content || ''

    if (!text) {
      return NextResponse.json(
        { error: 'No response received from AI' },
        { status: 500 }
      )
    }

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

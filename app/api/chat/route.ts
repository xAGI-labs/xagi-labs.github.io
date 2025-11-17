import { NextRequest, NextResponse } from 'next/server'

// OpenRouter API configuration
const OPENROUTER_MODEL = 'zhipu/glm-4-flash'

export async function POST(request: NextRequest) {
  try {
    const { messages, message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
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

    // Build conversation history for OpenRouter
    const conversationHistory = messages?.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content,
    })) || []

    // Add the current message
    conversationHistory.push({
      role: 'user',
      content: message,
    })

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://xagi-labs.github.io',
        'X-Title': 'xAGI Labs Chat',
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant. Provide clear, concise, and informative responses to user questions. Be friendly and professional.',
          },
          ...conversationHistory,
        ],
        temperature: 0.7,
        max_tokens: 2048,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('OpenRouter API Error:', errorData)
      return NextResponse.json(
        { error: errorData.error?.message || 'Failed to generate response' },
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

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}

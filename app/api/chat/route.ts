import { NextRequest, NextResponse } from 'next/server'

// New API endpoint
const API_ENDPOINT = 'https://placeholder.sauravalgs.workers.dev/text'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Call the new API with the user's message as the prompt
    const url = new URL(API_ENDPOINT)
    url.searchParams.set('prompt', message)

    const response = await fetch(url.toString(), {
      method: 'GET',
    })

    if (!response.ok) {
      console.error('API Error:', response.status, response.statusText)
      return NextResponse.json(
        { error: 'Failed to generate response' },
        { status: response.status }
      )
    }

    const data = await response.json()

    if (!data.response) {
      return NextResponse.json(
        { error: 'No response received from API' },
        { status: 500 }
      )
    }

    // Return the full response including usage stats
    return NextResponse.json({
      response: data.response,
      usage: data.usage || null
    })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}

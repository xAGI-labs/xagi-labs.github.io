import { NextRequest, NextResponse } from 'next/server'
import {
  CONTENT_SIGNAL,
  estimateMarkdownTokens,
  getMarkdownDocument,
  linkHeaderValue,
} from '@/lib/agent-discovery'

export function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get('path') ?? '/'
  const markdown = getMarkdownDocument(pathname)

  if (!markdown) {
    return new NextResponse('Markdown representation not available for this path.\n', {
      status: 404,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Content-Signal': CONTENT_SIGNAL,
      },
    })
  }

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Signal': CONTENT_SIGNAL,
      Link: linkHeaderValue,
      Vary: 'Accept',
      'x-markdown-tokens': estimateMarkdownTokens(markdown),
    },
  })
}

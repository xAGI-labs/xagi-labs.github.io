import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  acceptsMarkdown,
  appendVary,
  isDocumentRequest,
  linkHeaderValue,
  supportsMarkdownPath,
} from '@/lib/agent-discovery'

export function middleware(request: NextRequest) {
  // Redirect /product to /portfolio
  if (request.nextUrl.pathname === '/product') {
    return NextResponse.redirect(new URL('/portfolio', request.url))
  }

  // Also handle /product/ with trailing slash
  if (request.nextUrl.pathname === '/product/') {
    return NextResponse.redirect(new URL('/portfolio', request.url))
  }

  const pathname = request.nextUrl.pathname

  if (!isDocumentRequest(pathname)) {
    return NextResponse.next()
  }

  if (request.method === 'GET' && acceptsMarkdown(request.headers.get('accept')) && supportsMarkdownPath(pathname)) {
    const rewriteUrl = request.nextUrl.clone()
    rewriteUrl.pathname = '/__agent/markdown'
    rewriteUrl.search = ''
    rewriteUrl.searchParams.set('path', pathname)

    const response = NextResponse.rewrite(rewriteUrl)
    response.headers.set('Link', linkHeaderValue)
    appendVary(response.headers, 'Accept')
    return response
  }

  const response = NextResponse.next()
  response.headers.set('Link', linkHeaderValue)

  if (supportsMarkdownPath(pathname)) {
    appendVary(response.headers, 'Accept')
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

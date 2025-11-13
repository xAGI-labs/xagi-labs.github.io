import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Redirect /product to /portfolio
  if (request.nextUrl.pathname === '/product') {
    return NextResponse.redirect(new URL('/portfolio', request.url))
  }

  // Also handle /product/ with trailing slash
  if (request.nextUrl.pathname === '/product/') {
    return NextResponse.redirect(new URL('/portfolio', request.url))
  }
}

export const config = {
  matcher: ['/product', '/product/'],
}

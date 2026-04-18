import { NextResponse } from 'next/server'
import { getApiCatalogDocument } from '@/lib/agent-discovery'

export function GET() {
  return new NextResponse(JSON.stringify(getApiCatalogDocument(), null, 2), {
    headers: {
      'Content-Type':
        'application/linkset+json; charset=utf-8; profile="https://www.rfc-editor.org/info/rfc9727"',
    },
  })
}

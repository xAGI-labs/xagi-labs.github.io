import { NextResponse } from 'next/server'
import { getOpenApiDocument } from '@/lib/agent-discovery'

export function GET() {
  return NextResponse.json(getOpenApiDocument(), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
}

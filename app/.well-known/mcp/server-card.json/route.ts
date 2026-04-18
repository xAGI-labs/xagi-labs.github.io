import { NextResponse } from 'next/server'
import { SITE_ORIGIN } from '@/lib/agent-discovery'

export function GET() {
  return NextResponse.json({
    $schema: 'https://static.modelcontextprotocol.io/schemas/2025-10-17/server.schema.json',
    serverInfo: {
      name: 'xagi-web-context',
      version: '0.1.0',
    },
    transport: {
      type: 'webmcp',
      url: SITE_ORIGIN,
    },
    capabilities: {
      tools: {
        mode: 'read-only',
      },
    },
    description: 'Browser-exposed xAGI Labs tools available through the WebMCP navigator.modelContext API.',
    tools: [
      {
        name: 'get-site-overview',
        description: 'Return the main xAGI Labs positioning, primary links, and public discovery resources.',
      },
      {
        name: 'get-api-catalog',
        description: 'Return the public API catalog location and the endpoints currently advertised by the site.',
      },
      {
        name: 'get-contact-options',
        description: 'Return contact, demo-booking, and docs links for xAGI Labs.',
      },
    ],
  })
}

'use client'

import { useEffect } from 'react'
import {
  AGENT_SKILLS_INDEX_PATH,
  API_CATALOG_PATH,
  API_DOCS_PATH,
  SITE_ORIGIN,
  absoluteUrl,
} from '@/lib/agent-discovery'
import { BOOKING_URL } from '@/lib/booking'

type WebMcpTool = {
  name: string
  title?: string
  description: string
  inputSchema?: Record<string, unknown>
  annotations?: {
    readOnlyHint?: boolean
  }
  execute: () => unknown | Promise<unknown>
}

export default function WebMcpTools() {
  useEffect(() => {
    const registerTool = navigator.modelContext?.registerTool

    if (typeof registerTool !== 'function') {
      return
    }

    const controller = new AbortController()

    const tools: WebMcpTool[] = [
      {
        name: 'get-site-overview',
        title: 'Get site overview',
        description: 'Return a concise summary of xAGI Labs and the main public links on xagi.in.',
        annotations: { readOnlyHint: true },
        inputSchema: {
          type: 'object',
          additionalProperties: false,
          properties: {},
        },
        execute: () => ({
          name: 'xAGI Labs',
          website: SITE_ORIGIN,
          summary: 'xAGI Labs builds AI voice agents for customer operations workflows.',
          primaryLinks: {
            home: SITE_ORIGIN,
            contact: absoluteUrl('/contact'),
            services: absoluteUrl('/services'),
            blog: absoluteUrl('/blog'),
            llms: absoluteUrl('/llms.txt'),
          },
        }),
      },
      {
        name: 'get-api-catalog',
        title: 'Get API catalog',
        description: 'Return the public API catalog, documentation links, and health endpoint.',
        annotations: { readOnlyHint: true },
        inputSchema: {
          type: 'object',
          additionalProperties: false,
          properties: {},
        },
        execute: () => ({
          apiCatalog: absoluteUrl(API_CATALOG_PATH),
          docs: absoluteUrl(API_DOCS_PATH),
          openapi: absoluteUrl('/docs/api/openapi.json'),
          health: absoluteUrl('/api/health'),
        }),
      },
      {
        name: 'get-contact-options',
        title: 'Get contact options',
        description: 'Return the public contact and demo-booking links for xAGI Labs.',
        annotations: { readOnlyHint: true },
        inputSchema: {
          type: 'object',
          additionalProperties: false,
          properties: {},
        },
        execute: () => ({
          contact: absoluteUrl('/contact'),
          booking: BOOKING_URL,
          skills: absoluteUrl(AGENT_SKILLS_INDEX_PATH),
        }),
      },
    ]

    for (const tool of tools) {
      try {
        registerTool.call(navigator.modelContext, tool, { signal: controller.signal })
      } catch (error) {
        console.warn(`Failed to register WebMCP tool "${tool.name}"`, error)
      }
    }

    return () => {
      controller.abort()
    }
  }, [])

  return null
}

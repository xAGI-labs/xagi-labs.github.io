import { BOOKING_URL } from '@/lib/booking'

export const SITE_ORIGIN = 'https://xagi.in'
export const API_DOCS_PATH = '/docs/api'
export const OPENAPI_PATH = '/docs/api/openapi.json'
export const API_CATALOG_PATH = '/.well-known/api-catalog'
export const AGENT_SKILLS_INDEX_PATH = '/.well-known/agent-skills/index.json'
export const MCP_SERVER_CARD_PATH = '/.well-known/mcp/server-card.json'
export const CONTENT_SIGNAL = 'ai-train=no, search=yes, ai-input=no'

const markdownPaths = new Set(['/', API_DOCS_PATH])

export type AgentSkillEntry = {
  name: string
  type: 'skill-md'
  description: string
  url: string
  digest: string
}

export const agentSkills: AgentSkillEntry[] = [
  {
    name: 'site-overview',
    type: 'skill-md',
    description: 'Summarize xAGI Labs, its main public pages, and the best links for agent-readable site context.',
    url: '/.well-known/agent-skills/site-overview/SKILL.md',
    digest: 'sha256:4a93521d6ba8e1f6a0c766a35a22237d83887fd42db39f79c7f80bf355331c75',
  },
  {
    name: 'api-usage',
    type: 'skill-md',
    description: 'Explain the public xAGI Labs API endpoints, request formats, health checks, and where to find the OpenAPI spec.',
    url: '/.well-known/agent-skills/api-usage/SKILL.md',
    digest: 'sha256:da06fa5f72a1008923850424986ef62ba9901378947b7a12e5a76d89f2a8d45e',
  },
]

export const linkHeaderValue = [
  `</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"`,
  `</docs/api>; rel="service-doc"; type="text/html"`,
  `</.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"`,
].join(', ')

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_ORIGIN).toString()
}

export function acceptsMarkdown(acceptHeader: string | null) {
  if (!acceptHeader) {
    return false
  }

  return acceptHeader
    .toLowerCase()
    .split(',')
    .some((part) => part.trim().startsWith('text/markdown'))
}

export function supportsMarkdownPath(pathname: string) {
  return markdownPaths.has(normalizePath(pathname))
}

export function normalizePath(pathname: string) {
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

export function isDocumentRequest(pathname: string) {
  const normalized = normalizePath(pathname)

  if (
    normalized.startsWith('/api') ||
    normalized.startsWith('/_next') ||
    normalized.startsWith('/images') ||
    normalized === '/favicon.ico' ||
    normalized === '/robots.txt' ||
    normalized === '/sitemap.xml' ||
    normalized === '/site.webmanifest'
  ) {
    return false
  }

  const lastSegment = normalized.split('/').pop() ?? ''
  return !lastSegment.includes('.')
}

export function appendVary(headers: Headers, value: string) {
  const existing = headers.get('Vary')

  if (!existing) {
    headers.set('Vary', value)
    return
  }

  const values = existing
    .split(',')
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean)

  if (!values.includes(value.toLowerCase())) {
    headers.set('Vary', `${existing}, ${value}`)
  }
}

export function estimateMarkdownTokens(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  return String(Math.max(1, Math.ceil(words * 1.3)))
}

export function getMarkdownDocument(pathname: string) {
  const normalized = normalizePath(pathname)

  if (normalized === '/') {
    return `---
title: AI Automation Systems for Operations and Growth | xAGI Labs
url: ${SITE_ORIGIN}/
content_signal: ${CONTENT_SIGNAL}
---

# xAGI Labs

xAGI Labs builds production AI automation systems for operations, growth, support, and product teams.

## Core offer

- Workflow automation for repeated manual work across business systems
- Internal AI copilots, agents, extraction flows, and decision-support tools
- GTM automation for lead research, account scoring, outreach prep, and CRM workflows
- Production rollout with integrations, observability, guardrails, and human review

## Best-fit teams

- Founders, operators, and growth teams with repeated work spread across multiple tools
- Product teams adding AI features to real customer workflows
- Teams that need production automation rather than a generic chatbot demo

## Key links

- Website: ${SITE_ORIGIN}
- Services: ${absoluteUrl('/services')}
- AutoClaw GTM automation: ${absoluteUrl('/autoclaw')}
- Voice AI workflows: ${absoluteUrl('/voice-ai')}
- Contact: ${absoluteUrl('/contact')}
- Blog: ${absoluteUrl('/blog')}
- API docs: ${absoluteUrl(API_DOCS_PATH)}
- API catalog: ${absoluteUrl(API_CATALOG_PATH)}
- Agent skills index: ${absoluteUrl(AGENT_SKILLS_INDEX_PATH)}
- llms.txt: ${absoluteUrl('/llms.txt')}
- Book a demo: ${BOOKING_URL}

## Public API summary

- Health check: ${absoluteUrl('/api/health')}
- Chat endpoint: POST ${absoluteUrl('/api/chat')}
- Slide generation endpoint: POST ${absoluteUrl('/api/generate-slides')}

Authentication: none required for the documented public endpoints.
`
  }

  if (normalized === API_DOCS_PATH) {
    return `---
title: API Docs | xAGI Labs
url: ${absoluteUrl(API_DOCS_PATH)}
content_signal: ${CONTENT_SIGNAL}
---

# xAGI Labs API Docs

This site currently publishes three public API resources.

## Endpoints

### GET /api/health

Returns a simple health payload:

\`\`\`json
{ "status": "ok" }
\`\`\`

### POST /api/chat

Request body:

\`\`\`json
{ "message": "Hello" }
\`\`\`

Response body:

\`\`\`json
{ "response": "text", "usage": null }
\`\`\`

### POST /api/generate-slides

Request body:

\`\`\`json
{ "prompt": "topic", "slideCount": 5 }
\`\`\`

Response body:

\`\`\`json
{ "slides": [{ "id": "slide-...", "type": "intro" }] }
\`\`\`

## Discovery resources

- OpenAPI spec: ${absoluteUrl(OPENAPI_PATH)}
- API catalog: ${absoluteUrl(API_CATALOG_PATH)}
- MCP server card: ${absoluteUrl(MCP_SERVER_CARD_PATH)}

Authentication: none required.
`
  }

  return null
}

export function getApiCatalogDocument() {
  return {
    linkset: [
      {
        anchor: absoluteUrl('/api/health'),
        'service-desc': [
          {
            href: absoluteUrl(OPENAPI_PATH),
            type: 'application/json',
          },
        ],
        status: [
          {
            href: absoluteUrl('/api/health'),
            type: 'application/json',
          },
        ],
        'service-doc': [
          {
            href: absoluteUrl(API_DOCS_PATH),
            type: 'text/html',
          },
        ],
      },
      {
        anchor: absoluteUrl('/api/chat'),
        'service-desc': [
          {
            href: absoluteUrl(OPENAPI_PATH),
            type: 'application/json',
          },
        ],
        status: [
          {
            href: absoluteUrl('/api/health'),
            type: 'application/json',
          },
        ],
        'service-doc': [
          {
            href: absoluteUrl(API_DOCS_PATH),
            type: 'text/html',
          },
        ],
      },
      {
        anchor: absoluteUrl('/api/generate-slides'),
        'service-desc': [
          {
            href: absoluteUrl(OPENAPI_PATH),
            type: 'application/json',
          },
        ],
        status: [
          {
            href: absoluteUrl('/api/health'),
            type: 'application/json',
          },
        ],
        'service-doc': [
          {
            href: absoluteUrl(API_DOCS_PATH),
            type: 'text/html',
          },
        ],
      },
    ],
  }
}

export function getOpenApiDocument() {
  return {
    openapi: '3.1.0',
    info: {
      title: 'xAGI Labs Public API',
      version: '1.0.0',
      description:
        'Public API endpoints exposed by xagi.in for health checks, chat completions, and slide generation.',
    },
    servers: [
      {
        url: SITE_ORIGIN,
      },
    ],
    paths: {
      '/api/health': {
        get: {
          operationId: 'getHealth',
          summary: 'Health check',
          responses: {
            '200': {
              description: 'Service is healthy.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      status: {
                        type: 'string',
                        const: 'ok',
                      },
                    },
                    required: ['status'],
                  },
                },
              },
            },
          },
        },
      },
      '/api/chat': {
        post: {
          operationId: 'postChat',
          summary: 'Generate a chat response',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                    },
                  },
                  required: ['message'],
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Chat response payload.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      response: {
                        type: 'string',
                      },
                      usage: {
                        nullable: true,
                      },
                    },
                    required: ['response', 'usage'],
                  },
                },
              },
            },
          },
        },
      },
      '/api/generate-slides': {
        post: {
          operationId: 'postGenerateSlides',
          summary: 'Generate LinkedIn carousel slides',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    prompt: {
                      type: 'string',
                    },
                    slideCount: {
                      type: 'integer',
                      default: 5,
                      minimum: 1,
                    },
                  },
                  required: ['prompt'],
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Generated slide payload.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      slides: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            id: { type: 'string' },
                            type: { type: 'string' },
                            title: { type: 'string' },
                            subtitle: { type: 'string' },
                            content: { type: 'string' },
                            backgroundColor: { type: 'string' },
                          },
                          required: ['id', 'type'],
                        },
                      },
                    },
                    required: ['slides'],
                  },
                },
              },
            },
          },
        },
      },
    },
  }
}

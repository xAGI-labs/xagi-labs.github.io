---
name: api-usage
description: Explain the public xAGI Labs API endpoints, request formats, health checks, and where to find the OpenAPI spec.
---

# xAGI Labs API Usage

Use this skill when an agent needs to discover or call public APIs exposed by xAGI Labs.

## Discovery order

1. Read `https://xagi.in/.well-known/api-catalog`.
2. Read `https://xagi.in/docs/api`.
3. Read `https://xagi.in/docs/api/openapi.json` for machine-readable schemas.

## Public endpoints

- `GET /api/health`: health check
- `POST /api/chat`: accepts `{ "message": "..." }`
- `POST /api/generate-slides`: accepts `{ "prompt": "...", "slideCount": 5 }`

## Authentication

The currently documented public endpoints do not require OAuth or API-key authentication.

import { NextResponse } from 'next/server'
import { agentSkills } from '@/lib/agent-discovery'

export function GET() {
  return NextResponse.json({
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: agentSkills,
  })
}

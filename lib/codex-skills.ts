import codexSkillsData from "@/public/data/codex-skills.json"

export type CodexSkill = {
  slug: string
  name: string
  description: string
  overview: string
  category: string
  sourcePath: string
  githubUrl: string
  toolkitUrl: string
  requiresMcp: boolean
  app: string
  headings: string[]
  tools: string[]
  keywords: string[]
}

type CodexSkillsCatalog = {
  generatedAt: string
  sourceRepo: string
  sourceCommit: string
  skills: CodexSkill[]
}

export const codexSkillsCatalog = codexSkillsData as CodexSkillsCatalog

export const codexSkills = codexSkillsCatalog.skills

export function getCodexSkillBySlug(slug: string) {
  return codexSkills.find((skill) => skill.slug === slug)
}

export function getCodexSkillCategories() {
  return Array.from(new Set(codexSkills.map((skill) => skill.category))).sort()
}

export function getRelatedCodexSkills(skill: CodexSkill, limit = 6) {
  return codexSkills
    .filter((candidate) => candidate.slug !== skill.slug && candidate.category === skill.category)
    .slice(0, limit)
}

export function getCodexSkillsByCategory() {
  return getCodexSkillCategories().map((category) => ({
    category,
    skills: codexSkills.filter((skill) => skill.category === category),
  }))
}

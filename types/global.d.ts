interface Window {
  Tally?: {
    loadEmbeds: () => void
  }
}

type ModelContextToolDefinition = {
  name: string
  title?: string
  description: string
  inputSchema?: Record<string, unknown>
  annotations?: {
    readOnlyHint?: boolean
  }
  execute: () => unknown | Promise<unknown>
}

interface Navigator {
  modelContext?: {
    registerTool: (
      tool: ModelContextToolDefinition,
      options?: {
        signal?: AbortSignal
      }
    ) => void
  }
}

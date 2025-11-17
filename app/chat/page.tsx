import { Metadata } from 'next'
import ChatInterface from '@/components/chat-page'

export const metadata: Metadata = {
  title: 'Chat - xAGI Labs',
  description: 'AI-powered chat interface using Google Gemini',
}

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ChatInterface />
    </main>
  )
}

import { Metadata } from 'next'
import ChatInterface from '@/components/chat-page'
import Header from '@/components/shared/header'

export const metadata: Metadata = {
  title: 'Chat',
  description: 'AI-powered chat interface',
  alternates: {
    canonical: 'https://xagi.in/chat',
  },
}

export default function ChatPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 dark:bg-gray-900">
        <ChatInterface />
      </main>
    </>
  )
}

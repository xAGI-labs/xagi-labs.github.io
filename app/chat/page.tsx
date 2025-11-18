import { Metadata } from 'next'
import ChatInterface from '@/components/chat-page'
import Header from '@/components/shared/header'

export const metadata: Metadata = {
  title: 'Chat - xAGI Labs',
  description: 'AI-powered chat interface',
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

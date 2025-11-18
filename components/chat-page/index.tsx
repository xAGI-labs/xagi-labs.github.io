'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, Trash2, MessageSquare, Bot, User, Loader2, Menu, X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

interface Chat {
  id: string
  title: string
  messages: Message[]
  createdAt: number
  updatedAt: number
}

const STORAGE_KEY = 'xagi-chat-history'

export default function ChatInterface() {
  const [chats, setChats] = useState<Chat[]>([])
  const [currentChatId, setCurrentChatId] = useState<string | null>(null)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Load chats from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setChats(parsed)
        if (parsed.length > 0) {
          setCurrentChatId(parsed[0].id)
        }
      } catch (e) {
        console.error('Failed to parse stored chats:', e)
      }
    }
  }, [])

  // Save chats to local storage whenever they change
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chats))
    }
  }, [chats])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chats, currentChatId])

  const currentChat = chats.find(c => c.id === currentChatId)

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    setChats(prev => [newChat, ...prev])
    setCurrentChatId(newChat.id)
    setInput('')
    setError(null)
  }

  const deleteChat = (chatId: string) => {
    setChats(prev => prev.filter(c => c.id !== chatId))
    if (currentChatId === chatId) {
      const remaining = chats.filter(c => c.id !== chatId)
      setCurrentChatId(remaining.length > 0 ? remaining[0].id : null)
    }
    if (chats.length === 1) {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  const clearAllChats = () => {
    setChats([])
    setCurrentChatId(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    setError(null)

    // Create new chat if none exists
    if (!currentChatId) {
      const newChat: Chat = {
        id: Date.now().toString(),
        title: input.slice(0, 30) + (input.length > 30 ? '...' : ''),
        messages: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
      setChats([newChat])
      setCurrentChatId(newChat.id)
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: Date.now(),
    }

    // Update chat with user message
    setChats(prev =>
      prev.map(chat => {
        if (chat.id === (currentChatId || Date.now().toString())) {
          const updatedMessages = [...chat.messages, userMessage]
          return {
            ...chat,
            messages: updatedMessages,
            title: chat.messages.length === 0
              ? input.slice(0, 30) + (input.length > 30 ? '...' : '')
              : chat.title,
            updatedAt: Date.now(),
          }
        }
        return chat
      })
    )

    const currentInput = input
    setInput('')
    setIsLoading(true)

    try {
      const chatHistory = currentChat?.messages || []
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: chatHistory,
          message: currentInput,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to get response')
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: Date.now(),
        usage: data.usage,
      }

      setChats(prev =>
        prev.map(chat => {
          if (chat.id === currentChatId) {
            return {
              ...chat,
              messages: [...chat.messages, assistantMessage],
              updatedAt: Date.now(),
            }
          }
          return chat
        })
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50
        w-64 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        flex flex-col transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 flex items-center justify-between gap-2">
          <button
            onClick={() => {
              createNewChat()
              setIsSidebarOpen(false)
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MessageSquare size={18} />
            New Chat
          </button>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.map(chat => (
            <div
              key={chat.id}
              className={`group flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${
                chat.id === currentChatId ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
              onClick={() => {
                setCurrentChatId(chat.id)
                setIsSidebarOpen(false)
              }}
            >
              <span className="text-sm truncate flex-1 text-gray-700 dark:text-gray-300">
                {chat.title}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  deleteChat(chat.id)
                }}
                className="opacity-0 group-hover:opacity-100 p-1 text-gray-500 hover:text-red-500 transition-opacity"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>

        {chats.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={clearAllChats}
              className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              Clear all chats
            </button>
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Menu Button */}
        <div className="lg:hidden p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {!currentChat || currentChat.messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
              <Bot size={48} className="mb-4" />
              <h2 className="text-2xl font-semibold mb-2">xAGI Chat</h2>
              <p className="text-center max-w-md">
                Start a conversation with our AI assistant. Your chats are saved locally in your browser.
              </p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-4">
              {currentChat.messages.map(message => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Bot size={18} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {message.role === 'assistant' && message.usage && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 pb-2 border-b border-gray-200 dark:border-gray-600">
                        Tokens: {message.usage.prompt_tokens} prompt + {message.usage.completion_tokens} completion = {message.usage.total_tokens} total
                      </div>
                    )}
                    <div className={message.role === 'user' ? 'whitespace-pre-wrap' : 'prose prose-sm dark:prose-invert max-w-none'}>
                      {message.role === 'user' ? (
                        message.content
                      ) : (
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      )}
                    </div>
                    <div
                      className={`text-xs mt-1 ${
                        message.role === 'user'
                          ? 'text-blue-100'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                  {message.role === 'user' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                      <User size={18} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot size={18} className="text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 border border-gray-200 dark:border-gray-700">
                    <Loader2 className="animate-spin text-gray-500" size={20} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="px-4">
            <div className="max-w-3xl mx-auto bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Send a message..."
                rows={1}
                className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 pr-12 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{
                  minHeight: '48px',
                  maxHeight: '200px',
                }}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 bottom-2 p-2 text-gray-500 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Press Enter to send, Shift+Enter for new line.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

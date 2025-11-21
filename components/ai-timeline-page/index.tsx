"use client"

import { useState, useEffect } from "react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { Calendar, ChevronDown, Sparkles, Zap, Brain, Filter } from "lucide-react"

interface TimelineEvent {
  date: string
  title: string
  description: string
  category?: string
}

interface TimelineMonth {
  month: string
  events: TimelineEvent[]
}

interface TimelineYear {
  year: string
  months: TimelineMonth[]
}

const timelineData: TimelineYear[] = [
  {
    year: "2022",
    months: [
      {
        month: "November",
        events: [
          {
            date: "November 30",
            title: "ChatGPT Launch",
            description: "OpenAI releases ChatGPT powered by GPT-3.5 as a free research preview, marking a watershed moment in AI accessibility",
            category: "launch"
          }
        ]
      },
      {
        month: "December",
        events: [
          {
            date: "December",
            title: "ChatGPT Goes Viral",
            description: "ChatGPT gains over 1 million users within 5 days of launch"
          },
          {
            date: "December",
            title: "Midjourney v4 Released",
            description: "Midjourney v4 released with improved image generation"
          },
          {
            date: "December",
            title: "Stable Diffusion Updates",
            description: "Stable Diffusion 2.0 and 2.1 launched by Stability AI"
          }
        ]
      }
    ]
  },
  {
    year: "2023",
    months: [
      {
        month: "January",
        events: [
          {
            date: "January",
            title: "100 Million Users",
            description: "ChatGPT surpasses 100 million users in just 2 months, becoming the fastest-growing consumer app in history",
            category: "milestone"
          }
        ]
      },
      {
        month: "February",
        events: [
          {
            date: "February 1",
            title: "ChatGPT Plus Launch",
            description: "OpenAI announces ChatGPT Plus subscription ($20/month) offering priority access"
          },
          {
            date: "February 7",
            title: "Bing AI Integration",
            description: "Microsoft announces ChatGPT-powered features coming to Bing"
          },
          {
            date: "February 22",
            title: "Bing Chat Mobile Preview",
            description: "Microsoft releases AI-powered Bing Chat for mobile preview"
          },
          {
            date: "February",
            title: "Meta Releases LLaMA",
            description: "Meta releases LLaMA language model as open-source for research"
          }
        ]
      },
      {
        month: "March",
        events: [
          {
            date: "March 1",
            title: "ChatGPT API Launch",
            description: "OpenAI introduces ChatGPT API for developers; early adopters include Snapchat, Quizlet, Instacart"
          },
          {
            date: "March 14",
            title: "GPT-4 Release",
            description: "OpenAI releases GPT-4 with multimodal capabilities (text and image inputs), marking major advancement in AI capabilities",
            category: "launch"
          },
          {
            date: "March 17",
            title: "Baidu Ernie Bot",
            description: "Baidu releases Ernie Bot, China's ChatGPT competitor"
          },
          {
            date: "March 21",
            title: "Google Bard Launch",
            description: "Google opens access to Bard chatbot based on LaMDA"
          },
          {
            date: "March 22",
            title: "AI Development Pause Letter",
            description: "Open letter signed by tech leaders calling for 6-month pause on advanced AI training"
          },
          {
            date: "March",
            title: "Midjourney v5 Launch",
            description: "Midjourney v5 launched with significant improvements"
          }
        ]
      },
      {
        month: "April",
        events: [
          {
            date: "April 25",
            title: "Data Controls Added",
            description: "OpenAI adds data controls allowing users to opt out of training data inclusion"
          },
          {
            date: "April 28",
            title: "Italy Lifts ChatGPT Ban",
            description: "Italy lifts ChatGPT ban after OpenAI meets privacy demands"
          },
          {
            date: "April 29",
            title: "ChatGPT Plugins Launch",
            description: "OpenAI releases ChatGPT plugins, GPT-3.5 with browsing, and GPT-4 with browsing (ALPHA)"
          },
          {
            date: "April",
            title: "Adobe Firefly Beta",
            description: "Adobe releases Firefly image creation model (beta)"
          }
        ]
      },
      {
        month: "May",
        events: [
          {
            date: "May 12",
            title: "200+ Plugins Available",
            description: "ChatGPT Plus users gain access to over 200 plugins"
          },
          {
            date: "May 15-18",
            title: "ChatGPT iOS App",
            description: "OpenAI launches ChatGPT iOS app worldwide"
          },
          {
            date: "May 16",
            title: "Senate Testimony",
            description: "OpenAI CEO Sam Altman testifies before Senate on AI regulation"
          },
          {
            date: "May 23",
            title: "Bing Powers ChatGPT",
            description: "Microsoft announces Bing will power ChatGPT web browsing"
          },
          {
            date: "May",
            title: "Midjourney v5.1",
            description: "Midjourney v5.1 released"
          },
          {
            date: "May",
            title: "Bard Upgraded to PaLM 2",
            description: "Google announces upgrade to Bard with PaLM 2, expanding to 180 countries"
          }
        ]
      },
      {
        month: "June",
        events: [
          {
            date: "June",
            title: "Midjourney v5.2",
            description: "Midjourney v5.2 launched with enhanced features"
          }
        ]
      },
      {
        month: "July",
        events: [
          {
            date: "July 21",
            title: "ChatGPT Android App",
            description: "OpenAI launches official ChatGPT app for Android"
          },
          {
            date: "July",
            title: "Claude 2 Released",
            description: "Anthropic releases Claude 2 with 100,000 token context window (75,000 words)"
          },
          {
            date: "July",
            title: "LLaMA 2 Public Release",
            description: "Meta releases LLaMA 2 open-source to general public in various sizes"
          },
          {
            date: "July",
            title: "Stable Diffusion XL 1.0",
            description: "Stable Diffusion XL 1.0 released"
          }
        ]
      },
      {
        month: "August",
        events: [
          {
            date: "August 28",
            title: "ChatGPT Enterprise",
            description: "OpenAI launches ChatGPT Enterprise with unlimited GPT-4 access and enterprise-level security"
          }
        ]
      },
      {
        month: "September",
        events: [
          {
            date: "September 20",
            title: "DALL-E 3 Integration",
            description: "ChatGPT integrates with DALL-E 3"
          },
          {
            date: "September",
            title: "Voice & Image Capabilities",
            description: "Voice and image capabilities launched for ChatGPT mobile apps"
          }
        ]
      },
      {
        month: "October",
        events: [
          {
            date: "October",
            title: "DALL-E 3 Released",
            description: "DALL-E 3 released with improved image generation"
          },
          {
            date: "October",
            title: "Adobe Firefly 2",
            description: "Adobe releases Firefly 2"
          }
        ]
      },
      {
        month: "November",
        events: [
          {
            date: "November 6",
            title: "Custom GPTs Announced",
            description: "OpenAI announces Custom GPTs, allowing users to create specialized GPT versions"
          },
          {
            date: "November 17-21",
            title: "Sam Altman Crisis",
            description: "Sam Altman fired and then reinstated as OpenAI CEO after dramatic board crisis",
            category: "controversy"
          },
          {
            date: "November",
            title: "GPT-4 Turbo",
            description: "GPT-4 Turbo announced with 128K context window and knowledge cutoff extended to April 2023"
          }
        ]
      },
      {
        month: "December",
        events: [
          {
            date: "December",
            title: "Stable Diffusion XL Turbo",
            description: "Stable Diffusion XL Turbo released (one-step real-time generation)"
          },
          {
            date: "December",
            title: "Midjourney v6",
            description: "Midjourney v6 launched"
          },
          {
            date: "December",
            title: "Gemini Pro in Bard",
            description: "Google upgrades Bard to Gemini Pro in limited areas"
          },
          {
            date: "December",
            title: "Grok AI Launch",
            description: "X Corporation launches Grok AI chatbot for paid subscribers"
          }
        ]
      }
    ]
  },
  {
    year: "2024",
    months: [
      {
        month: "January",
        events: [
          {
            date: "January 10",
            title: "GPT Store Launch",
            description: "OpenAI launches GPT Store for discovering custom GPTs and introduces ChatGPT Team"
          },
          {
            date: "January 19",
            title: "Stable LM 2",
            description: "Stability AI releases Stable LM 2 with up to 12 billion parameters"
          },
          {
            date: "January 25",
            title: "New Embedding Models",
            description: "OpenAI releases text-embedding-3-small and text-embedding-3-large models"
          },
          {
            date: "January",
            title: "Stable Diffusion 3 Announced",
            description: "Stability AI announces Stable Diffusion 3 (gradual rollout to waitlist)"
          }
        ]
      },
      {
        month: "February",
        events: [
          {
            date: "February 8",
            title: "Bard Becomes Gemini",
            description: "Google's Bard officially rebrands to Gemini"
          },
          {
            date: "February 15",
            title: "Sora Announcement",
            description: "OpenAI announces Sora, groundbreaking text-to-video model",
            category: "launch"
          },
          {
            date: "February",
            title: "Model Context Protocol",
            description: "Anthropic announces Model Context Protocol (MCP) - a universal interface for AI tools"
          },
          {
            date: "February",
            title: "Gemini 1.0 Ultra",
            description: "Google launches Gemini 1.0 Ultra for select developers"
          }
        ]
      },
      {
        month: "March",
        events: [
          {
            date: "March 4",
            title: "Claude 3 Family",
            description: "Anthropic releases Claude 3 family (Haiku, Sonnet, Opus) with meta-cognitive reasoning",
            category: "launch"
          },
          {
            date: "March 10",
            title: "Inflection-2.5",
            description: "Inflection AI releases Inflection-2.5 achieving 94% of GPT-4 performance with 40% of training compute"
          },
          {
            date: "March 29",
            title: "Jamba Released",
            description: "AI21 Labs unveils Jamba with 256K context window"
          },
          {
            date: "March",
            title: "Stable Audio 2.0",
            description: "Stability AI releases Stable Audio 2.0"
          },
          {
            date: "March",
            title: "Grok-1.5V",
            description: "X Corporation releases Grok-1.5V with image recognition"
          }
        ]
      },
      {
        month: "April",
        events: [
          {
            date: "April 9",
            title: "Plugins Discontinued",
            description: "OpenAI announces discontinuation of ChatGPT plugins in favor of custom GPTs"
          },
          {
            date: "April 10",
            title: "Mixtral 8x22B",
            description: "Mistral AI launches Mixtral 8x22B (141B total, 39B active parameters)"
          },
          {
            date: "April",
            title: "LLaMA 3 Released",
            description: "Meta releases LLaMA 3 in 8B and 70B sizes (open-source)"
          },
          {
            date: "April",
            title: "Microsoft Phi-3-mini",
            description: "Microsoft releases Phi-3-mini (3.8B parameters, mobile-capable)"
          },
          {
            date: "April",
            title: "Adobe Firefly 3",
            description: "Adobe announces Firefly 3 for image creation"
          }
        ]
      },
      {
        month: "May",
        events: [
          {
            date: "May 13",
            title: "GPT-4o Launch",
            description: "OpenAI announces GPT-4o (omni) with native multimodal capabilities and faster processing",
            category: "launch"
          },
          {
            date: "May 13",
            title: "Google I/O AI Showcase",
            description: "Google I/O showcases major AI advancements"
          },
          {
            date: "May",
            title: "Claude 3.5 Sonnet",
            description: "Anthropic releases Claude 3.5 Sonnet with major improvements in coding and reasoning"
          },
          {
            date: "May",
            title: "Meta Chameleon",
            description: "Meta introduces Chameleon multimodal model"
          },
          {
            date: "May",
            title: "Google AI Overviews",
            description: "Google announces AI Overviews for search"
          },
          {
            date: "May",
            title: "Apple Intelligence",
            description: "Apple announces Apple Intelligence for its devices"
          }
        ]
      },
      {
        month: "June",
        events: [
          {
            date: "June",
            title: "Stable Diffusion 3 Medium",
            description: "Stability AI releases Stable Diffusion 3 medium version"
          },
          {
            date: "June",
            title: "Runway Gen3 Alpha",
            description: "Runway introduces Gen3 Alpha for video generation"
          },
          {
            date: "June",
            title: "Gemma 2",
            description: "Google announces Gemma 2"
          },
          {
            date: "June",
            title: "Gemini 1.5 Upgrade",
            description: "Google increases Gemini 1.5 token limit to 2 million"
          },
          {
            date: "June",
            title: "Copilot+ PCs",
            description: "Microsoft announces Copilot+ for dedicated AI PCs"
          }
        ]
      },
      {
        month: "July",
        events: [
          {
            date: "July",
            title: "GPT-4o mini",
            description: "OpenAI releases GPT-4o mini"
          },
          {
            date: "July",
            title: "Llama 3.1",
            description: "Meta releases Llama 3.1 in multiple sizes including 405B parameters"
          },
          {
            date: "July 24",
            title: "Mistral Large 2",
            description: "Mistral AI releases Mistral Large 2 (123B parameters)"
          },
          {
            date: "July",
            title: "AlphaProof & AlphaGeometry 2",
            description: "Google DeepMind unveils AlphaProof and AlphaGeometry 2"
          },
          {
            date: "July",
            title: "SearchGPT Launch",
            description: "OpenAI launches SearchGPT"
          },
          {
            date: "July",
            title: "Midjourney v6.1",
            description: "Midjourney v6.1 released"
          }
        ]
      },
      {
        month: "August",
        events: [
          {
            date: "August",
            title: "Advanced Voice Mode",
            description: "Advanced Voice Mode rolled out for ChatGPT with natural real-time conversations"
          },
          {
            date: "August",
            title: "Flux 1.1 Pro",
            description: "Flux 1.1 Pro released"
          }
        ]
      },
      {
        month: "September",
        events: [
          {
            date: "September",
            title: "Meta Movie Gen",
            description: "Meta unveils Movie Gen"
          },
          {
            date: "September",
            title: "Pika Video 1.5",
            description: "Pika introduces Video Model 1.5 with Pika Effects"
          }
        ]
      },
      {
        month: "October",
        events: [
          {
            date: "October",
            title: "Adobe Firefly Video",
            description: "Adobe announces Firefly Video"
          },
          {
            date: "October",
            title: "Stable Diffusion 3.5",
            description: "Stable Diffusion 3.5 released"
          },
          {
            date: "October",
            title: "Claude 3.5 Updates",
            description: "Anthropic launches Claude 3.5 Sonnet (new version) and Claude 3.5 Haiku"
          },
          {
            date: "October",
            title: "Recraft v3",
            description: "Recraft v3 released"
          }
        ]
      },
      {
        month: "November",
        events: [
          {
            date: "November",
            title: "MCP Production Ready",
            description: "Anthropic introduces Model Context Protocol (MCP) as production-ready"
          },
          {
            date: "November",
            title: "Pixtral Large",
            description: "Mistral AI launches Pixtral Large"
          },
          {
            date: "November",
            title: "Visual PDF Analysis",
            description: "Anthropic introduces Visual PDF Analysis in Claude"
          }
        ]
      },
      {
        month: "December",
        events: [
          {
            date: "December 9",
            title: "o3 Preview",
            description: "OpenAI previews o3 reasoning model with major performance improvements",
            category: "launch"
          },
          {
            date: "December",
            title: "Sora Public Release",
            description: "OpenAI releases Sora for video generation (public access)"
          },
          {
            date: "December",
            title: "o1 Reasoning Model",
            description: "OpenAI releases o1 reasoning model"
          },
          {
            date: "December",
            title: "ChatGPT Pro",
            description: "ChatGPT Pro tier introduced at $200/month with unlimited o1 access"
          },
          {
            date: "December 20",
            title: "Gemini 2.0 Flash",
            description: "Google launches Gemini 2.0 Flash in beta"
          },
          {
            date: "December",
            title: "Gemini Thinking Mode",
            description: "Google introduces Gemini-2.0-Flash-Thinking"
          },
          {
            date: "December",
            title: "Veo 2",
            description: "Google releases Veo 2 for video generation"
          }
        ]
      }
    ]
  },
  {
    year: "2025",
    months: [
      {
        month: "January",
        events: [
          {
            date: "January 20",
            title: "Trump Inauguration",
            description: "Donald Trump inaugurated as US President"
          },
          {
            date: "January 27",
            title: "DeepSeek R1 Disruption",
            description: "DeepSeek releases R1 reasoning model, disrupting AI industry with claimed $6M training cost and performance matching OpenAI o1",
            category: "launch"
          },
          {
            date: "January 31",
            title: "o3-mini for Free Users",
            description: "OpenAI releases o3-mini reasoning model to free ChatGPT users"
          }
        ]
      },
      {
        month: "February",
        events: [
          {
            date: "February 1",
            title: "o3-mini Enhanced Reasoning",
            description: "OpenAI updates o3-mini to show more detailed chain-of-thought reasoning in response to DeepSeek competition"
          },
          {
            date: "February",
            title: "GPT-4.5 for Pro Users",
            description: "GPT-4.5 (codename Orion) rolled out to ChatGPT Pro users"
          },
          {
            date: "February",
            title: "Alibaba Qwen Updates",
            description: "Alibaba releases Qwen updates claiming to beat DeepSeek"
          }
        ]
      },
      {
        month: "May",
        events: [
          {
            date: "May 6",
            title: "Gemini 1.5 Milestone",
            description: "Google releases Gemini 1.5 (often called 2.5), first to break 1400 Elo rating on Arena LLM Leaderboard for web development",
            category: "milestone"
          },
          {
            date: "May",
            title: "Claude 4 Family",
            description: "Anthropic introduces Claude 4 family (Opus 4 and Sonnet 4) with 200K token context and extended thinking mode",
            category: "launch"
          },
          {
            date: "May",
            title: "Claude Code GA",
            description: "Claude Code becomes generally available with GitHub Actions support"
          },
          {
            date: "May",
            title: "Gemini 2.5 Multi-Agent",
            description: "Google releases Gemini 2.5 Pro and Flash as first publicly available multi-agent model with 1M token context"
          }
        ]
      },
      {
        month: "June",
        events: [
          {
            date: "June",
            title: "Claude 4 GA",
            description: "Claude 4 becomes generally available via Claude.ai and API"
          },
          {
            date: "June",
            title: "AI Safety Level 3",
            description: "Anthropic announces Claude 4 operates at AI Safety Level 3"
          }
        ]
      },
      {
        month: "August",
        events: [
          {
            date: "August 5",
            title: "OpenAI Open-Source Models",
            description: "OpenAI launches gpt-oss-120b and gpt-oss-20b, its first open-source reasoning models, responding to Chinese AI lab pressure",
            category: "launch"
          }
        ]
      },
      {
        month: "September",
        events: [
          {
            date: "September",
            title: "700M Weekly Users",
            description: "ChatGPT reaches 700 million weekly active users",
            category: "milestone"
          },
          {
            date: "September",
            title: "80% Market Share",
            description: "OpenAI reportedly accounts for 80% of generative AI tool traffic"
          }
        ]
      },
      {
        month: "November",
        events: [
          {
            date: "November 19",
            title: "Gemini 3 Launch",
            description: "Google launches Gemini 3 with advanced multimodal, agentic capabilities and 'Deep Think' mode",
            category: "launch"
          },
          {
            date: "November 19",
            title: "Claude on Azure",
            description: "Microsoft announces Anthropic's Claude models available in Microsoft Foundry (Azure)"
          },
          {
            date: "November",
            title: "Midjourney v7",
            description: "Midjourney launches v7 with higher image quality and style control"
          },
          {
            date: "November",
            title: "Video Generation Advances",
            description: "Veo 2.0 (Google), Runway Gen-4, Vidu Q1, and Kling 2.0 released"
          },
          {
            date: "November",
            title: "Qwen 3",
            description: "Alibaba releases Qwen 3"
          },
          {
            date: "November",
            title: "Phi-4 Reasoning",
            description: "Microsoft launches Phi-4 reasoning series"
          },
          {
            date: "November",
            title: "Veo 3 & Imagen 4",
            description: "Google releases Veo 3 for 4K video with natural audio and Imagen 4"
          }
        ]
      }
    ]
  }
]

export default function AITimelinePage() {
  const [selectedYear, setSelectedYear] = useState<string>("All")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const years = ["All", ...timelineData.map(y => y.year)]
  const categories = ["All", "launch", "milestone", "controversy"]

  const filteredData = timelineData.filter(yearData => {
    if (selectedYear === "All") return true
    return yearData.year === selectedYear
  })

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "launch":
        return "bg-blue-500"
      case "milestone":
        return "bg-green-500"
      case "controversy":
        return "bg-red-500"
      default:
        return "bg-purple-500"
    }
  }

  const getCategoryBadge = (category?: string) => {
    switch (category) {
      case "launch":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "milestone":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "controversy":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      default:
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-950/20 dark:via-[#0a0a0a] dark:to-blue-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-800 dark:text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>November 2022 - November 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              AI Timeline
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Journey through the major events since ChatGPT revolutionized AI accessibility in November 2022
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Brain className="w-4 h-4 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">Major Model Releases</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">Industry Milestones</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Calendar className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 dark:text-gray-300">3+ Years of Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-20 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter:</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedYear === year
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredData.map((yearData, yearIndex) => (
              <div key={yearData.year} className="mb-16">
                {/* Year Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-3xl md:text-5xl font-bold text-white">{yearData.year}</span>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-transparent"></div>
                </div>

                {/* Timeline Events */}
                <div className="relative">
                  {/* Center line for desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 h-full"></div>

                  {yearData.months.map((monthData, monthIndex) => (
                    <div key={`${yearData.year}-${monthData.month}`} className="mb-12">
                      {/* Month Header */}
                      <div className="flex items-center gap-4 mb-6 md:justify-center">
                        <div className="hidden md:block flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border-2 border-purple-200 dark:border-purple-800">
                          {monthData.month}
                        </h3>
                        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
                      </div>

                      {/* Events */}
                      <div className="space-y-8">
                        {monthData.events.map((event, eventIndex) => {
                          const isEven = eventIndex % 2 === 0

                          return (
                            <div
                              key={`${yearData.year}-${monthData.month}-${eventIndex}`}
                              className={`relative flex items-start gap-4 md:gap-8 ${
                                isEven ? "md:flex-row" : "md:flex-row-reverse"
                              }`}
                            >
                              {/* Desktop: Left/Right content */}
                              <div className={`hidden md:block flex-1 ${isEven ? "text-right" : "text-left"}`}>
                                <div
                                  className={`inline-block ${
                                    isEven ? "ml-auto" : "mr-auto"
                                  } max-w-md bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300`}
                                >
                                  <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className={`flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 ${isEven ? "flex-row-reverse" : ""}`}>
                                      <Calendar className="w-4 h-4" />
                                      <span>{event.date}</span>
                                    </div>
                                    {event.category && (
                                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadge(event.category)}`}>
                                        {event.category}
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {event.title}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {event.description}
                                  </p>
                                </div>
                              </div>

                              {/* Center dot */}
                              <div className="hidden md:flex flex-shrink-0 w-6 h-6 relative z-10">
                                <div className={`w-6 h-6 ${getCategoryColor(event.category)} rounded-full shadow-lg border-4 border-white dark:border-[#0a0a0a]`}></div>
                              </div>

                              {/* Desktop: Empty space */}
                              <div className="hidden md:block flex-1"></div>

                              {/* Mobile: Full width content */}
                              <div className="md:hidden flex-1 pl-8 relative">
                                {/* Mobile timeline line and dot */}
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 to-blue-600"></div>
                                <div className={`absolute left-0 top-3 transform -translate-x-1/2 w-3 h-3 ${getCategoryColor(event.category)} rounded-full border-2 border-white dark:border-[#0a0a0a]`}></div>

                                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                                  <div className="flex items-start justify-between gap-2 mb-2">
                                    <div className="flex items-center gap-2 text-xs font-medium text-purple-600 dark:text-purple-400">
                                      <Calendar className="w-3 h-3" />
                                      <span>{event.date}</span>
                                    </div>
                                    {event.category && (
                                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadge(event.category)}`}>
                                        {event.category}
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                                    {event.title}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {event.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  700M+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  ChatGPT Weekly Active Users (2025)
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  3+ Years
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Since ChatGPT Launch
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Major AI Model Releases
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Trends */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Key Themes & Trends
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Model Evolution
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  From foundation models (2022-2023) to multimodal capabilities (2024) to reasoning models (2025)
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Open Source Movement
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Meta's LLaMA series, Mistral AI, and DeepSeek drive open-source innovation and cost efficiency
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Multimodal Expansion
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  From text-only to images, voice, video, and seamless integration across modalities
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Competition Intensifies
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  US-China rivalry, open vs closed debate, and rapid innovation cycles reshape the industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

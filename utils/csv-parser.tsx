export interface PortfolioItem {
  slug: string
  title: string
  logo: string
  mainImage: string
  shortDescription: string
  projectUrl: string
  content: string
  sortOrder: string
  categories?: string[] // We'll add this for filtering
}

// Add a check for client-side environment at the top of the fetchPortfolioData function

export async function fetchPortfolioData(): Promise<PortfolioItem[]> {
  // Use a cache to avoid refetching the data multiple times
  if (typeof window !== "undefined" && (window as any).__portfolioCache) {
    return (window as any).__portfolioCache
  }

  try {
    // Use local sample file as primary source for template
    const response = await fetch("/data/portfolio-sample.csv", {
      // Add cache: 'no-store' for server components to always fetch fresh data
      cache: typeof window === "undefined" ? "no-store" : "default",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch portfolio CSV: ${response.status}`)
    }

    const csvText = await response.text()
    const parsedData = parseCSV(csvText)

    // Cache the data on the client side
    if (typeof window !== "undefined") {
      ;(window as any).__portfolioCache = parsedData
    }

    return parsedData
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
    // Return fallback sample data if CSV fails to load
    return getFallbackPortfolioData()
  }
}

// Fallback data in case CSV file fails to load
function getFallbackPortfolioData(): PortfolioItem[] {
  return [
    {
      slug: "sample-saas-platform",
      title: "TaskFlow Pro",
      logo: "/taskflow-logo.jpg",
      mainImage: "/portfolio-images/saas-dashboard-1.jpg",
      shortDescription: "AI-powered task management platform for teams",
      projectUrl: "https://example.com",
      content: `<h3>Project Overview</h3><p>TaskFlow Pro is a comprehensive task management platform that leverages AI to help teams prioritize work and optimize productivity. Built with modern web technologies, it features real-time collaboration, intelligent task suggestions, and advanced analytics.</p><h3>Key Features</h3><ul><li>AI-powered task prioritization</li><li>Real-time team collaboration</li><li>Advanced project analytics</li><li>Custom workflow automation</li><li>Mobile-responsive design</li></ul><h3>Technologies Used</h3><p>This project was built using React, Node.js, PostgreSQL, and OpenAI's API for intelligent task suggestions. The platform handles over 10,000 active users and processes millions of tasks monthly.</p>`,
      sortOrder: "2024-01-15",
      categories: ["all", "web", "ai"],
    },
    {
      slug: "ecommerce-marketplace",
      title: "ShopConnect",
      logo: "/shopconnect-logo.jpg",
      mainImage: "/portfolio-images/ecommerce-interface-1.jpg",
      shortDescription: "Multi-vendor marketplace with AI recommendations",
      projectUrl: "https://example.com",
      content: `<h3>Project Overview</h3><p>ShopConnect is a modern multi-vendor marketplace that connects buyers with sellers through an intuitive platform. The system features AI-powered product recommendations, advanced search capabilities, and seamless payment processing.</p><h3>Key Features</h3><ul><li>Multi-vendor management system</li><li>AI-powered product recommendations</li><li>Advanced search and filtering</li><li>Secure payment processing</li><li>Vendor analytics dashboard</li><li>Mobile app integration</li></ul><h3>Technical Implementation</h3><p>Built with Next.js, Stripe for payments, and a microservices architecture. The platform supports thousands of vendors and processes over $1M in transactions monthly.</p>`,
      sortOrder: "2024-01-10",
      categories: ["all", "web", "ai"],
    },
    {
      slug: "ai-content-generator",
      title: "ContentAI Studio",
      logo: "/contentai-logo.jpg",
      mainImage: "/portfolio-images/ai-platform-1.jpg",
      shortDescription: "AI-powered content creation platform for marketers",
      projectUrl: "https://example.com",
      content: `<h3>Project Overview</h3><p>ContentAI Studio revolutionizes content creation by providing marketers with AI-powered tools to generate high-quality blog posts, social media content, and marketing copy in minutes rather than hours.</p><h3>Key Features</h3><ul><li>Multi-format content generation</li><li>Brand voice customization</li><li>SEO optimization tools</li><li>Content calendar integration</li><li>Team collaboration features</li><li>Performance analytics</li></ul><h3>Impact & Results</h3><p>The platform has helped over 500 marketing teams reduce content creation time by 70% while maintaining quality. Built with React, Python, and integrated with multiple AI models for optimal results.</p>`,
      sortOrder: "2024-01-05",
      categories: ["all", "web", "ai"],
    },
  ]
}

function parseCSV(csvText: string): PortfolioItem[] {
  // Split the CSV into lines
  const lines = csvText.split("\n")

  // Extract headers (first line)
  const headers = lines[0].split(",").map((header) => header.trim().replace(/^"/, "").replace(/"$/, ""))

  // Map CSV columns to our interface properties
  const columnMap: Record<string, keyof PortfolioItem> = {
    Slug: "slug",
    Title: "title",
    Logo: "logo",
    "Main Image": "mainImage",
    "Short Description": "shortDescription",
    "Project URL": "projectUrl",
    Content: "content",
    "Sort Order": "sortOrder",
  }

  // Parse the data rows
  const items: PortfolioItem[] = []

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue // Skip empty lines

    // Handle CSV values that might contain commas within quotes
    const values: string[] = []
    let currentValue = ""
    let insideQuotes = false

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j]

      if (char === '"') {
        insideQuotes = !insideQuotes
      } else if (char === "," && !insideQuotes) {
        values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))
        currentValue = ""
      } else {
        currentValue += char
      }
    }

    // Add the last value
    values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))

    // Create the portfolio item
    const item: Partial<PortfolioItem> = {}

    // Map values to properties
    headers.forEach((header, index) => {
      const key = columnMap[header]
      if (key && index < values.length) {
        item[key] = values[index]
      }
    })

    // Add categories based on content or title for filtering
    item.categories = inferCategories(item as PortfolioItem)

    items.push(item as PortfolioItem)
  }

  // Sort by sortOrder
  return items.sort((a, b) => {
    return new Date(b.sortOrder).getTime() - new Date(a.sortOrder).getTime()
  })
}

function inferCategories(item: PortfolioItem): string[] {
  const categories: string[] = ["all"]

  // Add categories based on content keywords
  const contentLower = (item.content || "").toLowerCase()
  const titleLower = (item.title || "").toLowerCase()
  const descriptionLower = (item.shortDescription || "").toLowerCase()

  if (
    contentLower.includes("web3") ||
    contentLower.includes("blockchain") ||
    titleLower.includes("web3") ||
    descriptionLower.includes("web3") ||
    contentLower.includes("crypto") ||
    titleLower.includes("crypto") ||
    titleLower.includes("blockchain")
  ) {
    categories.push("web3")
  }

  if (
    contentLower.includes("bubble") ||
    contentLower.includes("no-code") ||
    contentLower.includes("nocode") ||
    contentLower.includes("no code")
  ) {
    categories.push("bubble")
  }

  if (
    contentLower.includes("ai") ||
    contentLower.includes("artificial intelligence") ||
    titleLower.includes("ai") ||
    descriptionLower.includes("ai") ||
    titleLower.includes("content") ||
    descriptionLower.includes("ai-powered")
  ) {
    categories.push("ai")
  }

  if (
    contentLower.includes("mobile") ||
    contentLower.includes("ios") ||
    contentLower.includes("android") ||
    titleLower.includes("app")
  ) {
    categories.push("mobile")
  }

  if (
    contentLower.includes("design") ||
    contentLower.includes("ui") ||
    contentLower.includes("ux") ||
    contentLower.includes("interface")
  ) {
    categories.push("design")
  }

  // Default to "web" if no specific category is found
  if (categories.length === 1) {
    categories.push("web")
  }

  return categories
}

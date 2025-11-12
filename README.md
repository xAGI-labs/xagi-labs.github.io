# Automatic - AI-First Development Agency Landing Page

A modern, professional landing page template for development agencies and tech consultancies built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark/light theme switching
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 and TypeScript
- 💼 Portfolio showcase with filtering
- 📝 Contact forms and project inquiry system
- 🎯 SEO optimized
- 📊 Vercel Analytics integration
- ⚡ Performance optimized
- 📊 Sample portfolio data included

## Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd automatic-landing
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   bun install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

The template comes with sample portfolio data so you can see how it works immediately!

## Customizing Your Portfolio

The template includes sample portfolio data to demonstrate functionality. To replace it with your own projects:

### Option 1: Edit the Sample CSV File (Recommended)

1. Open `public/data/portfolio-sample.csv`
2. Replace the sample data with your own projects
3. Follow the existing column structure:
   - `Slug`: URL-friendly project identifier
   - `Title`: Project name
   - `Logo`: Path to project logo image
   - `Main Image`: Path to main project image
   - `Short Description`: Brief project description
   - `Project URL`: Link to live project (optional)
   - `Content`: Detailed HTML content about the project
   - `Sort Order`: Date for sorting (YYYY-MM-DD format)

### Option 2: Use External CSV File

1. Host your CSV file on a service like Vercel Blob Storage, AWS S3, or Google Sheets
2. Update the fetch URL in `utils/csv-parser.ts`:
   \`\`\`typescript
   const response = await fetch("YOUR_CSV_URL_HERE")
   \`\`\`

### Option 3: Switch to JSON Data

If you prefer JSON over CSV, you can modify the data fetching logic in `utils/csv-parser.ts` to fetch and parse JSON instead.

### Option 4: Use a CMS

For more advanced content management, consider integrating with:
- Contentful
- Strapi
- Sanity
- Ghost

## Sample Data Structure

The template includes 6 sample projects covering different industries:
- **TaskFlow Pro**: AI-powered task management platform
- **ShopConnect**: Multi-vendor marketplace
- **ContentAI Studio**: AI content creation platform
- **WealthTracker**: Personal finance dashboard
- **MedConnect**: Telemedicine platform
- **CryptoInsights**: Blockchain analytics platform

Each project includes realistic content, proper categorization, and placeholder images.

## Customizing Content

### Site Information
- Update site metadata in `app/layout.tsx`
- Modify the hero section in `components/landing-page/hero.tsx`
- Update services in `components/landing-page/services.tsx`
- Customize FAQ content in `components/landing-page/faq.tsx`

### Styling
- Primary colors can be changed in `components/landing-page/styles.css`
- The main brand color is `#7A7FEE` - search and replace to change it
- Tailwind configuration is in `tailwind.config.ts`

### Images
- Replace logos in the `public/` directory
- Update favicon by replacing `public/automatic-favicon-no-bg.png`
- Add your own project images to the `public/` directory

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

The sample CSV file will be included in your deployment automatically.

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

For production deployment, you may want to set:

\`\`\`env
# Optional: For custom analytics or external services
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── landing-page/     # Landing page specific components
│   ├── portfolio/        # Portfolio related components
│   └── ui/              # Reusable UI components
├── public/               # Static assets
│   ├── data/            # Sample data files
│   └── ...              # Images, icons, etc.
├── utils/               # Utility functions
└── types/               # TypeScript type definitions
\`\`\`

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Analytics**: Vercel Analytics
- **Icons**: Lucide React

## What's Included

- ✅ Complete Next.js application with all source code
- ✅ 10+ reusable React components
- ✅ Custom theme system with dark/light mode
- ✅ Sample portfolio data (6 projects)
- ✅ Contact form components
- ✅ Mobile-responsive navigation
- ✅ SEO configuration
- ✅ Analytics integration
- ✅ Deployment-ready configuration

## Support

If you need help customizing this template:

1. Check the documentation above
2. Review the code comments
3. Open an issue on GitHub
4. Contact support

## License

This template is available under the MIT License. See LICENSE file for details.

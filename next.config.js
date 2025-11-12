/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' for server deployment
  // Add it back only for GitHub Pages static export if needed
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

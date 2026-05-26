/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: false },
      { source: '/projects', destination: '/projetos', permanent: false },
    ]
  },
}

module.exports = nextConfig

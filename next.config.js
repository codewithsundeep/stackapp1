/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
 experimental: {
    runtime: 'edge',
     serverActions: true,
   },
    eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
 experimental: {
    runtime: 'edge',
     serverActions: true,
   },
    eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

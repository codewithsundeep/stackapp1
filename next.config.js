/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.node = {
      fs: 'empty',
      path: 'empty',
      stream: 'empty',
    };
    return config;
  },
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

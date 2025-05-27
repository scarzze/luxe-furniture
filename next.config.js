/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
  },
  transpilePackages: ['next'],
  experimental: {
    // Add any valid experimental options here if needed
  },
};

module.exports = nextConfig;
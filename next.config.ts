import { NextConfig } from 'next';

const nextConfig: NextConfig = {
   eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;


// next.config.js - updated

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Added image domain configuration if needed for external images
  images: {
    domains: [],
  },
};

export default nextConfig;
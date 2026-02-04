import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.screenshotone.com',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/conocenos',
        destination: 'https://landing-page-astro-zeta.vercel.app/',
      },
      {
        source: '/conocenos/:path*',
        destination: 'https://landing-page-astro-zeta.vercel.app/:path*',
      },
    ]
  },
};

export default nextConfig;

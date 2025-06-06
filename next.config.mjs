/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com', // For Google OAuth profile pictures
      'avatars.githubusercontent.com', // For potential GitHub integration
      'images.unsplash.com', // Keep your existing domain
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Removed experimental.serverActions - it's enabled by default in Next.js 14
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  // Handle redirects for auth callbacks
  async redirects() {
    return [
      {
        source: '/auth/callback',
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },
}

export default nextConfig
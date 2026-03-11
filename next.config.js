/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    optimizeCss: false,
  },
  async headers() {
    const cspHeader = [
      // Only load resources from self and explicitly allowed origins
      `default-src 'self'`,
      // Scripts: self + Google Analytics/Tag Manager + inline scripts needed by Next.js
      `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com`,
      // Styles: self + Google Fonts + inline styles (used by Next.js & Tailwind)
      `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
      // Fonts: self + Google Fonts CDN
      `font-src 'self' https://fonts.gstatic.com`,
      // Images: self + data URIs (for base64 inline images) + Google Analytics
      `img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com`,
      // Fetch/XHR: self + Supabase (for contact form API)
      `connect-src 'self' https://*.supabase.co https://www.google-analytics.com`,
      // Never allow this page to be embedded in an iframe (stronger than X-Frame-Options)
      `frame-ancestors 'none'`,
      // Automatically upgrade HTTP requests to HTTPS
      `upgrade-insecure-requests`,
      // Disallow all <object>, <embed>, <applet> tags
      `object-src 'none'`,
      // Restrict base tag hijacking
      `base-uri 'self'`,
      // Restrict form submissions to self only
      `form-action 'self'`,
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      // The whole portfolio is one hand-built page in public/index.html.
      // This serves it at the home URL ("/") before any Next.js page is checked.
      beforeFiles: [{ source: '/', destination: '/index.html' }],
    };
  },
  async headers() {
    return [
      { source: '/media/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    ];
  },
};
export default nextConfig;

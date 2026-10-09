// Next.js needs a root layout. The portfolio itself lives in public/index.html
// and is served at "/" by the rewrite in next.config.mjs, so this only wraps the 404 page.
export const metadata = { title: 'Robert Bashir' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#1f1f1e', color: '#f3f2ee', fontFamily: 'system-ui, sans-serif' }}>{children}</body>
    </html>
  );
}

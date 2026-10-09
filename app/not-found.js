import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24 }}>
      <div>
        <p style={{ opacity: 0.5, letterSpacing: '.08em', textTransform: 'uppercase', fontSize: 12 }}>404</p>
        <h1 style={{ margin: '8px 0 20px' }}>This page doesn't exist.</h1>
        {/* Link adds the GitHub Pages base path (/Robert-s-ART) to "/" */}
        <Link href="/" style={{ color: 'inherit' }}>Back to the projects →</Link>
      </div>
    </main>
  );
}

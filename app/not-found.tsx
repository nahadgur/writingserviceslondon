import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-parchment flex flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow text-brand mb-6">404</p>
      <h1 className="font-display text-5xl italic text-ink mb-4">Page not found</h1>
      <p className="body-lg max-w-sm mb-10">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/services/" className="btn-secondary">Browse services</Link>
      </div>
    </div>
  );
}

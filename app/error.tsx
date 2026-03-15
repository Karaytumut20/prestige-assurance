'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <title>Internal Error</title>
      <meta name="robots" content="noindex, nofollow" />
      <h1 className="text-6xl font-serif text-red-500 mb-4">500</h1>
      <h2 className="text-3xl font-serif text-navy-900 mb-6">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-gold-500 text-navy-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-navy-900 hover:text-white transition-colors mb-4"
      >
        Try again
      </button>
      <Link href="/" className="text-gray-500 hover:text-navy-900 underline underline-offset-4 text-sm">
        Or return to homepage
      </Link>
    </div>
  );
}

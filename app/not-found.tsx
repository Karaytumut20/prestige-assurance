import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-serif text-gold-500 mb-4">404</h1>
      <h2 className="text-3xl font-serif text-navy-900 mb-6">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="bg-navy-900 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors">
        Return Home
      </Link>
    </div>
  );
}

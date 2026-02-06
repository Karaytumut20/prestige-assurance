'use client';

export default function Newsletter() {
  return (
    <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl font-serif mb-4">Join the Prestige Circle</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Get exclusive market updates, risk management tips, and wholesale rate alerts delivered to your inbox.
        </p>

        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500"
          />
          <button className="px-8 py-4 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Subscribe
          </button>
        </form>
        <p className="text-gray-500 text-xs mt-4">No spam. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
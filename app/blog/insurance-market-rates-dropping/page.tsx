import type { Metadata } from 'next';
import { TrendingUp, Phone, ArrowLeft, DollarSign } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Why Insurance Rates are Dropping in 2025 | Market Watch",
  description: "The hard insurance market is softening. Find out why commercial and personal insurance premiums are finally going down.",
  keywords: ["Insurance Market Trends 2025", "Soft Insurance Market", "Lower Insurance Premiums"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gold-600 mb-8 font-bold text-sm uppercase tracking-wider">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-4 block">Market Watch</span>
        <h1 className="text-4xl md:text-6xl font-serif text-navy-900 mb-8 leading-tight">
          Why Insurance Rates are Finally Dropping in 2025
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p className="text-xl font-light mb-8 text-gray-800">
            For the past three years, we've been in a "Hard Market"—characterized by rising premiums and strict underwriting.
            However, 2025 signals a shift. Capacity is returning, and rates are stabilizing.
          </p>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">1. New Carriers Entering the Market</h3>
          <p>
            High premiums attracted new capital into the insurance sector. New "InsurTech" companies and established carriers expanding their appetite
            means more competition. When carriers compete, <strong>you save.</strong>
          </p>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">2. Supply Chain Stabilization</h3>
          <p>
            A major driver of auto insurance cost was the price of parts and used cars. As supply chains have normalized, the cost to repair
            vehicles has leveled off, allowing carriers to reduce physical damage rates.
          </p>

          <div className="flex items-center gap-6 p-6 bg-gray-50 border-l-4 border-gold-500 my-8">
            <DollarSign className="text-gold-600 shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-navy-900">Pro Tip: Shop Your Renewal</h4>
              <p className="text-sm">If you've been with the same carrier for 3+ years, you are likely overpaying. Loyalty taxes are real.</p>
            </div>
          </div>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">3. Reinsurance Costs Stabilizing</h3>
          <p>
            Insurance companies buy their own insurance (reinsurance). These costs spiked after global weather events but have now settled.
            This savings is finally trickling down to the consumer level.
          </p>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">What Should You Do?</h3>
          <p>
            Now is the perfect time to market your renewal. Prestige Assurance has access to wholesale markets that are aggressively
            looking for new business in Trucking, Luxury Auto, and Commercial Property.
          </p>

          <div className="bg-navy-900 text-white p-10 rounded-lg my-12 shadow-2xl text-center">
            <h4 className="text-2xl font-serif mb-4">
              Don't Auto-Renew. Compare Instead.
            </h4>
            <p className="mb-6 text-gray-300">
              Let us check the market for you. It takes 5 minutes to potentially save thousands.
            </p>
            <a href="tel:+16289995230" className="bg-gold-500 text-navy-900 px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block">
              Start Your Quote
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
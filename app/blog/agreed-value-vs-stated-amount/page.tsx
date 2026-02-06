import type { Metadata } from 'next';
import { Shield, AlertTriangle, Phone, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Agreed Value vs Stated Amount | Luxury Car Insurance Guide",
  description: "Don't let depreciation ruin your investment. Learn why Ferrari, Porsche, and Bentley owners need Agreed Value coverage.",
  keywords: ["Agreed Value Insurance", "Stated Amount vs Actual Cash Value", "Exotic Car Insurance", "Luxury Auto Insurance"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gold-600 mb-8 font-bold text-sm uppercase tracking-wider">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-4 block">Asset Protection</span>
        <h1 className="text-4xl md:text-6xl font-serif text-navy-900 mb-8 leading-tight">
          Agreed Value vs. Stated Amount: Protecting Your Supercar
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p className="text-xl font-light mb-8 text-gray-800">
            Insuring a Honda Civic is simple; insuring a Ferrari SF90 is an art. The biggest mistake luxury car owners make is buying a standard auto policy
            that uses "Actual Cash Value" (ACV). Here is why that is dangerous.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-red-50 p-8 border-l-4 border-red-500">
              <h4 className="text-red-700 font-bold mb-2 flex items-center gap-2"><AlertTriangle size={20}/> The Trap: Actual Cash Value</h4>
              <p className="text-sm">
                Standard carriers (like Geico/Progressive) calculate value based on depreciation. If you buy a car for $300k and crash it a year later,
                they might say it's worth $220k. You lose $80k instantly.
              </p>
            </div>
            <div className="bg-green-50 p-8 border-l-4 border-green-500">
              <h4 className="text-green-700 font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={20}/> The Solution: Agreed Value</h4>
              <p className="text-sm">
                With Prestige Assurance, we agree on the value upfront (e.g., $300k). In a total loss, you get a check for exactly $300k.
                No depreciation. No arguments.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">What About "Stated Amount"?</h3>
          <p>
            Some brokers sell "Stated Amount" as a luxury product, but it's not. It simply sets a <em>maximum</em> payout, but the carrier can still pay
            the lesser of the Stated Amount or the Actual Cash Value. <strong>Avoid this at all costs.</strong>
          </p>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">The Prestige Difference</h3>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-3"><CheckCircle2 className="text-gold-500 shrink-0"/> <span><strong>OEM Parts Only:</strong> We ensure your Porsche is repaired with Porsche parts, not aftermarket generics.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-gold-500 shrink-0"/> <span><strong>Choice of Body Shop:</strong> Take your car to the specialist you trust, not the cheapest shop in town.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-gold-500 shrink-0"/> <span><strong>Worldwide Coverage:</strong> Shipping your car to a rally in Europe? We can cover it.</span></li>
          </ul>

          <div className="bg-navy-900 text-white p-10 rounded-lg my-12 shadow-2xl text-center">
            <h4 className="text-2xl font-serif mb-4">
              Do You Know Your Policy Limits?
            </h4>
            <p className="mb-6 text-gray-300">
              Don't wait for a claim to find out you're underinsured. Get a complimentary policy review today.
            </p>
            <a href="tel:+16289995230" className="bg-gold-500 text-navy-900 px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors inline-block">
              Get an Agreed Value Quote
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
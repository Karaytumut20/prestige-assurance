import type { Metadata } from 'next';
import { Truck, CheckCircle2, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "5 Ways to Lower Commercial Trucking Insurance Costs | Prestige",
  description: "Learn how to reduce fleet insurance premiums using telematics, safety programs, and proper filings. Expert advice for US trucking companies.",
  keywords: ["Lower Trucking Insurance", "Fleet Insurance Savings", "Commercial Trucking Cost", "Telematics Insurance Discount"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gold-600 mb-8 font-bold text-sm uppercase tracking-wider">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-4 block">Fleet Management</span>
        <h1 className="text-4xl md:text-6xl font-serif text-navy-900 mb-8 leading-tight">
          5 Ways to Lower Commercial Trucking Insurance Costs
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p className="text-xl font-light mb-8 text-gray-800">
            In the current logistics market, insurance is often the second largest fixed expense after fuel.
            However, fleet owners often overpay by neglecting five critical risk factors. Here is how Prestige Assurance helps clients cut costs by up to 30%.
          </p>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">1. Implement Telematics & Dash Cams</h3>
          <p>
            Carriers love data. Installing ELDs (Electronic Logging Devices) and forward-facing cameras proves your drivers are safe.
            We work with carriers like Progressive and Travelers that offer immediate <strong>5-10% discounts</strong> for fleets with verified telematics data.
          </p>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">2. Raise Your Deductibles</h3>
          <p>
            Many fleets carry a $1,000 deductible on Physical Damage. By raising this to $2,500 or $5,000, you can significantly lower your monthly premium.
            Use the savings to build a "maintenance fund" for minor repairs.
          </p>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">3. Monitor CSA Scores Aggressively</h3>
          <p>
            Your FMCSA Safety Score is public record. Insurance underwriters check this first.
            Regularly inspect your vehicles to avoid "Out-of-Service" violations which skyrocket premiums.
          </p>

          <div className="bg-navy-900 text-white p-10 rounded-lg my-12 shadow-2xl">
            <h4 className="text-2xl font-serif mb-4 flex items-center gap-3">
              <Truck className="text-gold-500" /> Need a Policy Audit?
            </h4>
            <p className="mb-6 text-gray-300">
              Most truckers are paying for coverages they don't need. Let us review your policy for free.
            </p>
            <a href="tel:+16289995230" className="bg-gold-500 text-navy-900 px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center gap-2">
              <Phone size={18} /> Call +1 (628) 999-5230
            </a>
          </div>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">4. Hire Experienced Drivers</h3>
          <p>
            Drivers with 2+ years of CDL experience and clean MVRs (Motor Vehicle Records) are gold.
            While new drivers are cheaper to hire, they are expensive to insure.
          </p>

          <h3 className="text-2xl font-serif text-navy-900 mt-12 mb-4">5. Pay in Full (If Possible)</h3>
          <p>
            Many carriers offer a "Paid-in-Full" discount ranging from <strong>10% to 15%</strong>.
            If cash flow allows, this is the easiest return on investment you can get.
          </p>
        </div>
      </div>
    </main>
  );
}
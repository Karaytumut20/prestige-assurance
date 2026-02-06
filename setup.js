/**
 * PRESTIGE ASSURANCE - BLOG PAGES CREATION
 * Amaç: Ana sayfadaki blog özetlerinin detay sayfalarını oluşturmak.
 * Özellikler: Tam SEO uyumlu, CTA (Arama) odaklı, Zengin içerikli.
 */

const fs = require("fs");
const path = require("path");

console.log(">>> Blog sayfaları ve SEO içerikleri oluşturuluyor...");

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim());
  console.log(`✔ Oluşturuldu: ${filePath}`);
}

const PHONE_HREF = "tel:+16289995230";

// 1. ÖNCE BLOG SECTION GÜNCELLENİYOR (Linkler Eklendi)
const updatedBlogSection = `
'use client';
import { ArrowRight, TrendingUp, Shield, Truck } from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    category: "Fleet Management",
    title: "5 Ways to Lower Commercial Trucking Insurance Costs",
    excerpt: "Rising premiums don't have to be the norm. Discover how telematics and safety programs can slash your rates.",
    icon: <Truck className="text-gold-500" size={24} />,
    slug: "/blog/lower-trucking-insurance-costs"
  },
  {
    category: "Asset Protection",
    title: "Agreed Value vs. Stated Amount: Protecting Your Supercar",
    excerpt: "Why standard auto policies leave Ferrari and Lamborghini owners underinsured in total loss scenarios.",
    icon: <Shield className="text-gold-500" size={24} />,
    slug: "/blog/agreed-value-vs-stated-amount"
  },
  {
    category: "Market Watch",
    title: "Why Insurance Rates are Finally Dropping in 2025",
    excerpt: "Our analysts explain the current shift in the US insurance market and what it means for your renewal.",
    icon: <TrendingUp className="text-gold-500" size={24} />,
    slug: "/blog/insurance-market-rates-dropping"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-navy-900 mb-2">Industry Insights</h2>
            <div className="w-16 h-1 bg-gold-500" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <Link key={i} href={article.slug} className="group cursor-pointer block">
              <div className="h-48 bg-navy-900/5 mb-6 relative overflow-hidden flex items-center justify-center border border-gray-100 group-hover:border-gold-500 transition-colors">
                 <div className="bg-white p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    {article.icon}
                 </div>
              </div>
              <div className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">{article.category}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-navy-900 text-xs font-bold uppercase tracking-wider group-hover:underline">
                Read Full Article <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

// 2. BLOG 1: TRUCKING COSTS (Filo Maliyetleri)
const blogPost1 = `
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
`;

// 3. BLOG 2: AGREED VALUE (Lüks Araçlar)
const blogPost2 = `
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
`;

// 4. BLOG 3: MARKET RATES (Endüstri Trendleri)
const blogPost3 = `
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
`;

// Dosyaları Yaz
writeFile("components/BlogSection.tsx", updatedBlogSection);
writeFile("app/blog/lower-trucking-insurance-costs/page.tsx", blogPost1);
writeFile("app/blog/agreed-value-vs-stated-amount/page.tsx", blogPost2);
writeFile("app/blog/insurance-market-rates-dropping/page.tsx", blogPost3);

console.log("\n>>> BLOG SİSTEMİ TAMAMLANDI <<<");
console.log("- Ana sayfadaki 'BlogSection' güncellendi ve linklendi.");
console.log("- 3 adet detaylı, SEO uyumlu makale sayfası oluşturuldu.");
console.log(
  "- Her makalenin içinde dönüşüm için 'Call to Action' alanları var.",
);

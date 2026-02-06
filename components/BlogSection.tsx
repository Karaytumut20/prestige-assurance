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
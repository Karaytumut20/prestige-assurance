'use client';
import { motion } from 'framer-motion';
import { BarChart3, Building, Globe2, Users } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Corporate Header */}
      <section className="bg-navy-900 text-white pt-40 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl font-serif mb-6">
            Commercial Risk Intelligence
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Scalable insurance architecture for mid-market and enterprise-level organizations.
          </p>
        </div>
      </section>

      {/* Stats Row - Negative Margin for Overlap */}
      <section className="container mx-auto px-6 -mt-16 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 bg-white shadow-2xl divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {[
            { label: 'Industry Sectors', value: '14+' },
            { label: 'Risk Advisors', value: '50+' },
            { label: 'Claims Recovered', value: '$200M' },
            { label: 'Global Network', value: '100+' }
          ].map((stat, i) => (
            <div key={i} className="p-8 text-center">
              <div className="text-3xl font-bold text-navy-900 mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-2 block">Our Expertise</span>
            <h2 className="text-3xl font-serif text-navy-900 mb-8">Executive & Professional Liability</h2>
            <div className="space-y-6">
              {[
                { title: "Directors & Officers (D&O)", desc: "Protecting individual assets of board members against allegations of wrongful acts." },
                { title: "Cyber Liability", desc: "End-to-end breach response including forensic, legal, and PR costs." },
                { title: "M&A Transactional Risk", desc: "Warranties & Indemnities insurance to facilitate complex deal closures." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-navy-50 flex items-center justify-center text-navy-900 shrink-0">
                    <Building size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-sm border border-gray-200">
             <h3 className="text-navy-900 font-serif text-2xl mb-6">Sector Focus</h3>
             <div className="grid grid-cols-2 gap-4">
                {['Real Estate', 'Private Equity', 'Healthcare', 'Technology', 'Manufacturing', 'Retail'].map((sector) => (
                  <div key={sector} className="bg-white p-4 text-center text-sm font-medium text-gray-600 shadow-sm hover:text-gold-600 hover:shadow-md transition-all cursor-default">
                    {sector}
                  </div>
                ))}
             </div>
             <div className="mt-8 bg-navy-900 text-white p-6 text-center">
                <p className="mb-4 text-sm">Need a specific industry analysis?</p>
                <button className="bg-gold-500 text-navy-900 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">Contact Risk Team</button>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
/**
 * PRESTIGE ASSURANCE - DIVERSIFICATION SCRIPT
 * Amaç: Her sayfaya kendine özgü (unique) bir tasarım ve kimlik kazandırmak.
 */

const fs = require("fs");
const path = require("path");

console.log(">>> Sayfalar özgün tasarımlarla yeniden yapılandırılıyor...");

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim());
  console.log(`✔ Özgün Tasarım Uygulandı: ${filePath}`);
}

// 1. PRIVATE WEALTH (Editoryal, Asimetrik, Estetik)
const privateWealthPage = `
'use client';
import { motion } from 'framer-motion';
import { Gem, Landmark, Plane, ShieldCheck } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      {/* Editorial Hero */}
      <section className="relative pt-40 pb-20 px-6 container mx-auto">
        <div className="flex flex-col lg:flex-row items-end gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-2/3">
             <span className="text-gold-500 tracking-[0.4em] text-xs font-bold uppercase mb-4 block">Private Client Group</span>
             <h1 className="text-6xl lg:text-8xl font-serif text-navy-900 leading-none mb-8">
               Curating <br/> <span className="italic text-gold-600">Legacy.</span>
             </h1>
             <p className="text-xl text-gray-500 max-w-xl font-light leading-relaxed border-l-2 border-gold-500 pl-6">
               We don't just insure assets; we protect the lifestyle that you have meticulously built over generations.
             </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="lg:w-1/3 bg-navy-900 p-8 text-white relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-500/50 rounded-full blur-xl"></div>
            <h3 className="font-serif text-2xl mb-4">Portfolio Review</h3>
            <p className="text-sm text-gray-300 mb-6">Complimentary risk assessment for portfolios exceeding $10M.</p>
            <button className="w-full border border-white/30 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-navy-900 transition-all">Begin Assessment</button>
          </motion.div>
        </div>
      </section>

      {/* Asymmetrical Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Feature */}
          <div className="md:col-span-8 bg-white p-12 shadow-sm hover:shadow-xl transition-all group">
            <Landmark size={40} className="text-navy-900 mb-6 group-hover:text-gold-500 transition-colors"/>
            <h3 className="text-3xl font-serif text-navy-900 mb-4">Real Estate & Estates</h3>
            <p className="text-gray-600 leading-relaxed">
              From Manhattan penthouses to Aspen retreats. Coverage includes guaranteed replacement cost, cash settlement options, and unlimited additional living expenses.
            </p>
          </div>

          {/* Small Feature */}
          <div className="md:col-span-4 bg-navy-900 text-white p-10 flex flex-col justify-center">
            <Gem size={32} className="text-gold-500 mb-4"/>
            <h3 className="text-xl font-serif mb-2">Fine Art & Specie</h3>
            <p className="text-gray-400 text-sm">Worldwide coverage for collections, with specialized valuation clauses.</p>
          </div>

          {/* Medium Feature */}
          <div className="md:col-span-4 bg-white p-10 shadow-sm border-t-4 border-gold-500">
            <Plane size={32} className="text-navy-900 mb-4"/>
            <h3 className="text-xl font-serif text-navy-900 mb-2">Global Mobility</h3>
            <p className="text-gray-600 text-sm">Kidnap & Ransom, International Medical, and Travel Evacuation.</p>
          </div>

          {/* Medium Feature */}
          <div className="md:col-span-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed bg-gray-200 p-12 flex flex-col justify-center items-start">
            <h3 className="text-3xl font-serif text-navy-900 mb-4">Family Office Liability</h3>
            <p className="text-gray-600 mb-6 max-w-lg">Protecting the fiduciaries and decision-makers within your family structure from professional liability exposures.</p>
            <button className="text-navy-900 font-bold border-b border-navy-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">Download Brochure</button>
          </div>
        </div>
      </section>
    </main>
  );
}
`;

// 2. COMMERCIAL (Veri Odaklı, Ciddi, Grid Yapılı)
const commercialPage = `
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
`;

// 3. CLAIMS (Fonksiyonel, Acil Durum, Temiz Arayüz)
const claimsPage = `
'use client';
import { motion } from 'framer-motion';
import { Phone, FileText, Activity, ArrowRight, ShieldAlert } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      {/* Functional Hero */}
      <section className="bg-navy-900 text-white pt-40 pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-gold-500/20">
            <ShieldAlert size={14} />
            Concierge Support Center
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">How can we assist you?</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our claims team operates 24/7/365 to ensure your assets are restored with minimal disruption to your lifestyle.
          </p>
        </div>
      </section>

      {/* Action Cards (Merkezde) */}
      <section className="container mx-auto px-6 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 shadow-lg border-t-4 border-gold-500 text-center">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">Emergency Hotline</h3>
            <p className="text-gray-500 text-sm mb-6">Immediate assistance for urgent losses.</p>
            <a href="tel:+18005550199" className="text-gold-600 font-bold text-lg hover:underline">+1 (800) 555-0199</a>
          </motion.div>

          {/* Card 2 */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 shadow-lg border-t-4 border-navy-900 text-center">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">File a New Claim</h3>
            <p className="text-gray-500 text-sm mb-6">Start the process digitally.</p>
            <button className="bg-navy-900 text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-colors w-full">
              Start Form
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 shadow-lg border-t-4 border-gray-300 text-center">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">Track Status</h3>
            <p className="text-gray-500 text-sm mb-6">Check progress on existing claims.</p>
            <button className="border border-gray-300 text-gray-600 px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-navy-900 hover:text-navy-900 transition-colors w-full">
              Client Login
            </button>
          </motion.div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-navy-900 mb-12 text-center">The "White Glove" Standard</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Immediate Response", desc: "A dedicated Claims Advocate is assigned to you within 30 minutes of notification." },
              { step: "02", title: "Vendor Concierge", desc: "We coordinate top-tier restoration specialists, temporary housing, or security as needed." },
              { step: "03", title: "Advocacy & Settlement", desc: "We negotiate directly with carriers to ensure the settlement reflects the true value of your assets." }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start border-b border-gray-100 pb-8 last:border-0">
                <div className="text-4xl font-serif text-gold-500 opacity-30">{item.step}</div>
                <div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
`;

// Dosyaları Yaz
writeFile("app/private-wealth/page.tsx", privateWealthPage);
writeFile("app/commercial/page.tsx", commercialPage);
writeFile("app/claims/page.tsx", claimsPage);

console.log("\n>>> ÖZELLEŞTİRME TAMAMLANDI! <<<");
console.log("Her sayfa artık benzersiz bir UX ve tasarıma sahip.");

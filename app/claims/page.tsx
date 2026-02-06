'use client';
import { motion } from 'framer-motion';
import { Phone, FileText, Activity, ShieldAlert } from 'lucide-react';

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
          {/* Card 1: EMERGENCY HOTLINE */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 shadow-lg border-t-4 border-gold-500 text-center">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">Emergency Hotline</h3>
            <p className="text-gray-500 text-sm mb-6">Immediate assistance for urgent losses.</p>
            <a href="tel:+16289995230" className="text-gold-600 font-bold text-lg hover:underline block">
              +1 (628) 999-5230
            </a>
          </motion.div>

          {/* Card 2: FILE A NEW CLAIM (Updated to Call) */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 shadow-lg border-t-4 border-navy-900 text-center">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">File a New Claim</h3>
            <p className="text-gray-500 text-sm mb-6">Report a new incident directly to an agent.</p>
            <a
              href="tel:+16289995230"
              className="w-full bg-navy-900 text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Call to Report
            </a>
          </motion.div>

          {/* Card 3: TRACK STATUS (Updated to Call) */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 shadow-lg border-t-4 border-gray-300 text-center">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">Track Status</h3>
            <p className="text-gray-500 text-sm mb-6">Check progress on existing claims.</p>
            <a
              href="tel:+16289995230"
              className="w-full border border-gray-300 text-gray-600 px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-navy-900 hover:text-navy-900 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Call Support
            </a>
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
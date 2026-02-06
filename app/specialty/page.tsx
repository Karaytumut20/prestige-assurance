'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Globe, Clock, ArrowRight } from 'lucide-react';
import FAQ from '@/components/FAQ';

const faqs = [{"question":"Can you insure a yacht under a Cayman flag?","answer":"Yes, we support all major flag states including Cayman, Marshall Islands, and Malta."},{"question":"Does aviation coverage include war risk?","answer":"Standard policies exclude it, but we can add specific War & Allied Perils write-backs for conflict zones."}];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black opacity-90" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-gold-500"></div>
            <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold">Premium Coverage</span>
          </motion.div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Aviation & <br/> Marine Specialty
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Global hull and liability protection for mobility assets.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-8">Bespoke Risk Management</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">Whether you are navigating international waters or soaring through the skies, our specialty experts provide ironclad protection.</p>
            <div className="grid gap-6">
              
                <div className="flex items-start gap-4 p-4 border border-gray-100 hover:border-gold-500/30 hover:shadow-lg transition-all rounded-sm bg-white">
                  <div className="text-gold-500 mt-1"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="text-navy-900 font-bold tracking-wide text-sm mb-1">Hull & Machinery</h4>
                    <p className="text-gray-500 text-xs">Comprehensive protection included.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-gray-100 hover:border-gold-500/30 hover:shadow-lg transition-all rounded-sm bg-white">
                  <div className="text-gold-500 mt-1"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="text-navy-900 font-bold tracking-wide text-sm mb-1">Crew Medical</h4>
                    <p className="text-gray-500 text-xs">Comprehensive protection included.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-gray-100 hover:border-gold-500/30 hover:shadow-lg transition-all rounded-sm bg-white">
                  <div className="text-gold-500 mt-1"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="text-navy-900 font-bold tracking-wide text-sm mb-1">Charter Operations</h4>
                    <p className="text-gray-500 text-xs">Comprehensive protection included.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-gray-100 hover:border-gold-500/30 hover:shadow-lg transition-all rounded-sm bg-white">
                  <div className="text-gold-500 mt-1"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="text-navy-900 font-bold tracking-wide text-sm mb-1">Private Jet Liability</h4>
                    <p className="text-gray-500 text-xs">Comprehensive protection included.</p>
                  </div>
                </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-navy-900 text-white p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full" />
            <h3 className="text-3xl font-serif mb-6 italic">"True wealth requires <br/> <span className="text-gold-500">uncompromising protection.</span>"</h3>
            <button className="w-full bg-gold-500 text-navy-900 py-4 px-6 font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-between group">
              <span>Start Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
            </button>
            <p className="text-xs text-center text-gray-500 mt-6 uppercase tracking-wider">Licensed in all 50 States</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section (NEW) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-navy-900 mb-4">Common Questions</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto" />
          </div>
          <FAQ items={faqs} />
        </div>
      </section>
    </main>
  );
}
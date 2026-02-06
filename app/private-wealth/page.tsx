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
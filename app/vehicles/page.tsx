'use client';
import { motion } from 'framer-motion';
import { Car, Truck, ShieldCheck, Gauge, Phone } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <section className="relative pt-44 pb-20 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">
            National Transportation Division
          </motion.span>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-7xl font-serif mb-6">
            Commercial Fleet & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-700">Luxury Auto</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Whether you operate a fleet of 50 trucks or collect exotic vehicles, we provide specialized coverage that keeps America moving.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <div className="flex items-center gap-3 mb-6">
                <Truck className="text-gold-500" size={40} />
                <h2 className="text-4xl font-serif text-navy-900">Commercial Trucking</h2>
             </div>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               We understand the logistics industry. From owner-operators to large fleet management, our trucking program ensures full DOT compliance and cargo protection across all 48 continental states.
             </p>
             <div className="grid grid-cols-1 gap-4">
               {["Primary Auto Liability ($1M+)", "Motor Truck Cargo Coverage", "Physical Damage & Collision", "General Liability for Truckers", "Bobtail / Non-Trucking Liability"].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 bg-white shadow-sm">
                   <div className="w-2 h-2 bg-gold-500 rounded-full" />
                   <span className="text-navy-900 font-medium">{item}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="lg:w-1/2 bg-navy-900 text-white p-10 relative">
             <h3 className="text-2xl font-serif mb-4">Get a Fleet Quote</h3>
             <p className="text-gray-400 mb-6 text-sm">Call now to speak with a transportation risk specialist.</p>
             <a href="tel:+16289995230" className="w-full bg-gold-500 text-navy-900 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
               <Phone size={18} />
               Call For Quote
             </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
               <div className="flex items-center gap-3 mb-6">
                  <Car className="text-gold-500" size={40} />
                  <h2 className="text-4xl font-serif text-navy-900">Personal & Luxury Auto</h2>
               </div>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                 Standard insurance isn't built for high-value assets. Our policies offer 'Agreed Value' protection, ensuring you receive the full worth of your vehicle without depreciation.
               </p>
               <a href="tel:+16289995230" className="text-gold-600 font-bold text-sm uppercase tracking-widest hover:text-navy-900 transition-colors flex items-center gap-2">
                 <Phone size={16}/> Get Personal Auto Quote
               </a>
            </div>
            <div className="lg:w-1/2 relative h-[400px] w-full bg-gray-200">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
'use client';
import { motion } from 'framer-motion';
import { Heart, Activity, Users, Stethoscope } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      {/* Hero */}
      <section className="relative pt-44 pb-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
             <span className="text-gold-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">Wellness & Legacy</span>
             <h1 className="text-5xl md:text-7xl font-serif text-navy-900 mb-6 leading-tight">
               Health & <br/> Life Solutions
             </h1>
             <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
               Securing your physical well-being and your family's financial future with premier network access and high-limit policies.
             </p>
             <div className="flex gap-4">
               <button className="bg-navy-900 text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 hover:text-navy-900 transition-colors">Individual Plans</button>
               <button className="border border-navy-900 text-navy-900 px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-navy-900 hover:text-white transition-colors">Group / Employee</button>
             </div>
          </motion.div>
          <div className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            {/* Placeholder for a lifestyle image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000')] bg-cover bg-center" />
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 border border-white/10 hover:border-gold-500 transition-colors group">
              <Heart className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-serif mb-2">Private Health</h3>
              <p className="text-sm text-gray-400">PPO plans with nationwide access to top-tier hospitals and specialists without referrals.</p>
            </div>
            <div className="p-6 border border-white/10 hover:border-gold-500 transition-colors group">
              <Activity className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-serif mb-2">Term & Whole Life</h3>
              <p className="text-sm text-gray-400">Multi-million dollar policies to ensure liquidity for estate taxes and legacy preservation.</p>
            </div>
            <div className="p-6 border border-white/10 hover:border-gold-500 transition-colors group">
              <Users className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-serif mb-2">Group Benefits</h3>
              <p className="text-sm text-gray-400">Competitive health packages for businesses to attract and retain top talent.</p>
            </div>
            <div className="p-6 border border-white/10 hover:border-gold-500 transition-colors group">
              <Stethoscope className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-serif mb-2">Concierge Medicine</h3>
              <p className="text-sm text-gray-400">24/7 access to private physicians and rapid global medical evacuation.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
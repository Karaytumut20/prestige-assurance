'use client';
import { motion } from 'framer-motion';
import { Heart, Activity, Users, Phone, DollarSign } from 'lucide-react';
import FAQ from '@/components/FAQ';

const healthFaqs = [
  { question: "Are these plans affordable for families?", answer: "Yes. We compare hundreds of plans to find the one with the lowest premium and deductible combination for your budget." },
  { question: "Why is your quote cheaper than the Marketplace?", answer: "We have access to private, medically underwritten plans that offer lower rates for healthy individuals, which aren't available on public exchanges." }
];

export default function Page() {
  const PHONE_HREF = "tel:+16289995230";

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <section className="relative pt-44 pb-20 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">
             Affordable Care Solutions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-serif text-white mb-6">
            Health Insurance <br/> That Fits Your Budget
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Stop overpaying for health coverage. We find the most cost-effective PPO plans for individuals, families, and businesses.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-gray-100 hover:border-gold-500 transition-all">
            <div className="flex justify-between items-start">
              <Heart className="text-navy-900 mb-6" size={40} />
              <DollarSign className="text-green-600" size={24} />
            </div>
            <h3 className="text-2xl font-serif text-navy-900 mb-4">Low-Cost PPO</h3>
            <p className="text-gray-600 mb-6">Nationwide access to doctors at a fraction of the cost of standard ACA plans.</p>
            <a href={PHONE_HREF} className="text-sm font-bold text-gold-600 hover:underline">Get Free Quote &rarr;</a>
          </div>
          <div className="bg-navy-900 text-white p-8 shadow-xl transform md:-translate-y-4">
            <Activity className="text-gold-500 mb-6" size={40} />
            <h3 className="text-2xl font-serif mb-4">Affordable Life</h3>
            <p className="text-gray-300 mb-6">Term life policies starting at just a few dollars a month. Secure your family's future cheaply.</p>
            <a href={PHONE_HREF} className="w-full bg-gold-500 text-navy-900 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
              <Phone size={16}/> Quote Life
            </a>
          </div>
          <div className="bg-white p-8 border border-gray-100 hover:border-gold-500 transition-all">
            <Users className="text-navy-900 mb-6" size={40} />
            <h3 className="text-2xl font-serif text-navy-900 mb-4">Business Savings</h3>
            <p className="text-gray-600 mb-6">Reduce your company's benefit costs while improving employee coverage.</p>
            <a href={PHONE_HREF} className="text-sm font-bold text-gold-600 hover:underline">Reduce Costs &rarr;</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-serif text-navy-900 mb-12 text-center">Cost & Coverage FAQ</h2>
           <FAQ items={healthFaqs} />
        </div>
      </section>
    </main>
  );
}
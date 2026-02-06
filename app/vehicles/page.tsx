'use client';
import { motion } from 'framer-motion';
import { Car, Truck, Phone, TrendingDown, CheckCircle2, FileBarChart } from 'lucide-react';
import FAQ from '@/components/FAQ';
import CarrierLogos from '@/components/CarrierLogos';

const truckingFaqs = [
  { question: "How can you offer lower rates than my current broker?", answer: "We specialize in high-volume commercial accounts. Carriers give us preferential rates because of the volume of safe drivers we bring them." },
  { question: "Do I have to sacrifice coverage to save money?", answer: "Never. We actually often INCREASE your coverage limits while lowering your monthly premium by removing unnecessary fees." },
  { question: "Do you offer fleet discounts?", answer: "Yes! If you have 3 or more trucks or vehicles, you qualify for our Fleet Tier pricing immediately." }
];

export default function Page() {
  const PHONE_HREF = "tel:+16289995230";

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
            We specialize in reducing operational costs for trucking fleets and slashing premiums for luxury vehicle owners.
          </p>
        </div>
      </section>

      <CarrierLogos />

      {/* Main Content */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <div className="flex items-center gap-3 mb-6">
                <Truck className="text-gold-500" size={40} />
                <h2 className="text-4xl font-serif text-navy-900">Trucking & Fleet Savings</h2>
             </div>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               Insurance is one of your biggest expenses. We help you control it. Our clients save an average of <strong>20-30% on annual premiums</strong> by switching to our optimized fleet programs.
             </p>
             <div className="space-y-4">
               {["Low Down Payments", "Monthly Payment Plans", "Volume Discounts for 3+ Trucks", "Claims-Free Bonuses"].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 className="text-green-600" size={20} />
                   <span className="text-navy-900 font-bold">{item}</span>
                 </div>
               ))}
             </div>
          </div>
          <div className="lg:w-1/2 bg-navy-900 text-white p-10 relative shadow-2xl">
             <div className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1 uppercase tracking-widest">Best Rate Guarantee</div>
             <h3 className="text-2xl font-serif mb-4">Get A Quote Comparison</h3>
             <p className="text-gray-400 mb-6 text-sm">Tell us what you pay now. We will beat it or match it with better coverage.</p>
             <a href={PHONE_HREF} className="w-full bg-gold-500 text-navy-900 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
               <Phone size={18} />
               Call For Lower Rate
             </a>
          </div>
        </div>
      </section>

      {/* NEW: CASE STUDY SECTION */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
           <div className="bg-white p-8 md:p-12 shadow-lg border-l-8 border-gold-500 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3 text-center md:text-left">
                 <div className="inline-block p-4 bg-navy-50 rounded-full mb-4 text-navy-900"><FileBarChart size={32}/></div>
                 <h3 className="text-2xl font-serif text-navy-900 mb-2">Real Client Result</h3>
                 <p className="text-gray-500 text-sm">Logistics Company, 15 Trucks, Texas</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 gap-8">
                 <div>
                    <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Previous Premium</div>
                    <div className="text-2xl font-bold text-gray-400 line-through decoration-red-500">$245,000 / yr</div>
                 </div>
                 <div>
                    <div className="text-gold-600 text-xs uppercase tracking-widest mb-1">Prestige Rate</div>
                    <div className="text-4xl font-serif font-bold text-navy-900">$188,000 / yr</div>
                 </div>
                 <div className="col-span-2 pt-4 border-t border-gray-100">
                    <p className="text-green-600 font-bold flex items-center gap-2"><CheckCircle2 size={16}/> Saved $57,000 annually with better cargo limits.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Luxury Auto Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
               <div className="flex items-center gap-3 mb-6">
                  <Car className="text-gold-500" size={40} />
                  <h2 className="text-4xl font-serif text-navy-900">Luxury Auto, Logical Price</h2>
               </div>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                 Owning a Ferrari or Bentley shouldn't mean being overcharged. We use specialized "Agreed Value" policies that are often <strong>cheaper than standard carriers</strong> like Geico or Progressive for high-end cars.
               </p>
               <a href={PHONE_HREF} className="text-gold-600 font-bold text-sm uppercase tracking-widest hover:text-navy-900 transition-colors flex items-center gap-2">
                 <TrendingDown size={16}/> Get A Cheaper Quote
               </a>
            </div>
            <div className="lg:w-1/2 relative h-[300px] w-full bg-gray-200">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-serif text-navy-900 mb-12 text-center">Pricing FAQ</h2>
           <FAQ items={truckingFaqs} />
        </div>
      </section>
    </main>
  );
}
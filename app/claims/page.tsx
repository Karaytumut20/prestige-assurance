import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Globe, Clock } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2000')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-gold-500 uppercase tracking-[0.4em] text-sm mb-4 block"
          >
            Elite Asset Protection
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            Expedited <br/> Claims Center
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            A concierge approach to claims processing when every second matters.
          </p>
        </div>
      </section>

      {/* SEO Content & Features */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-navy-900 mb-8 underline decoration-gold-500 decoration-2 underline-offset-8">
              Bespoke Risk Management Solutions
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We redefine the claims experience with our 'White Glove' service. Our team manages the entire process on your behalf, ensuring maximum recovery and minimal disruption to your lifestyle.
            </p>
            <div className="space-y-4">
              
                <div className="flex items-center gap-4 group">
                  <div className="text-gold-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-navy-900 font-medium tracking-wide">24/7 Dedicated Claims Advocate</span>
                </div>
              
                <div className="flex items-center gap-4 group">
                  <div className="text-gold-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-navy-900 font-medium tracking-wide">Direct Adjuster Access</span>
                </div>
              
                <div className="flex items-center gap-4 group">
                  <div className="text-gold-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-navy-900 font-medium tracking-wide">Rental & Replacement Concierge</span>
                </div>
              
                <div className="flex items-center gap-4 group">
                  <div className="text-gold-500 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-navy-900 font-medium tracking-wide">Rapid Settlement Protocol</span>
                </div>
              
            </div>
          </div>
          <div className="bg-navy-900 p-12 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold-500/30" />
            <h3 className="text-white text-2xl font-serif mb-6 italic">Request a Private Consultation</h3>
            <p className="text-gray-400 mb-8 text-sm">Speak with our licensed advisors today to review your portfolio risk.</p>
            <button className="w-full bg-gold-500 text-navy-900 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">
              Inquire Now
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <ShieldCheck className="mx-auto text-gold-500 mb-4" size={32} />
            <h4 className="text-xs uppercase tracking-widest font-bold">A+ Rated Carriers</h4>
          </div>
          <div>
            <Globe className="mx-auto text-gold-500 mb-4" size={32} />
            <h4 className="text-xs uppercase tracking-widest font-bold">Worldwide Coverage</h4>
          </div>
          <div>
            <Clock className="mx-auto text-gold-500 mb-4" size={32} />
            <h4 className="text-xs uppercase tracking-widest font-bold">24/7 White Glove Service</h4>
          </div>
          <div>
            <CheckCircle2 className="mx-auto text-gold-500 mb-4" size={32} />
            <h4 className="text-xs uppercase tracking-widest font-bold">Licensed in 50 States</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
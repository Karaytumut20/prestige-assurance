
import { Heart, Activity, Users, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "US Health & Life PPO Solutions | Portonova Legacy Programs",
  description: "Secure premier nationwide US health network access and high-limit legacy life insurance policies tailored for high-net-worth individuals.",
  keywords: ["US Life Insurance", "High Net Worth Life Insurance", "Concierge Medicine USA", "American Term Life", "Group Health Benefits"],
  openGraph: {
    title: "US Health & Life PPO Solutions",
    description: "High-limit legacy and wellness policies for American enterprises and families.",
  }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      {/* Hero */}
      <section className="relative pt-44 pb-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
             <span className="text-gold-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">US Wellness & Legacy Programs</span>
             <h1 className="text-5xl md:text-7xl font-serif text-navy-900 mb-6 leading-tight">
               US Health & <br/> Life PPO Solutions
             </h1>
             <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
               Securing your physical well-being and your family's financial future with premier nationwide US network access and high-limit legacy policies.
             </p>
             <div className="flex gap-4">
               <button className="bg-navy-900 text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 hover:text-navy-900 transition-colors">Individual Plans</button>
               <button className="border border-navy-900 text-navy-900 px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-navy-900 hover:text-white transition-colors">Group / Employee</button>
             </div>
          </div>
          <div className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            {/* Placeholder for a lifestyle image */}
            <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000" fill alt="Health & Life Lifestyle" className="object-cover" priority fetchPriority="high" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 border border-white/10 hover:border-gold-500 transition-colors group">
              <Heart className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h2 className="text-xl font-serif mb-2">Private Health PPO</h2>
              <p className="text-sm text-gray-400">PPO plans with nationwide USA access to top-tier hospitals and specialists without primary care referrals.</p>
            </div>
            <div className="p-6 border border-white/10 hover:border-gold-500 transition-colors group">
              <Activity className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h2 className="text-xl font-serif mb-2">American Term Life</h2>
              <p className="text-sm text-gray-400">Multi-million dollar domestic policies to ensure liquidity for US estate taxes and legacy preservation.</p>
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
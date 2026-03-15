
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Request Instant US Insurance Rate Comparison | Portonova",
  description: "Compare wholesale insurance rates for US Commercial Trucking, Luxury Auto, and Health plans. Get an expert audit from our licensed American brokers.",
  keywords: ["Insurance Quote USA", "Commercial Fleet Insurance Quote", "Compare Auto Insurance Rates", "Portonova Rates"],
};

export default function QuotePage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-32 pb-24 relative overflow-hidden">
            {/* Background styling for professional look */}
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-navy-900 z-0" />
            <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000" fill alt="Quote Background" className="object-cover opacity-10" priority fetchPriority="high" sizes="(max-width: 768px) 100vw, 100vw" />
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-navy-900 via-navy-900/90 to-transparent z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 pt-10">
                    <span className="text-gold-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">
                        Instant US Rate Comparison
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Secure Your US Assets <br /> With Confidence
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Fill out the request form below to compare options. Our licensed American experts will manually audit your submission to guarantee the lowest possible premium nationwide.
                    </p>
                </div>

                <div className="mt-8">
                    <QuoteForm />
                </div>
            </div>
        </main>
    );
}

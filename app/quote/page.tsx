'use client';
import { motion } from 'framer-motion';
import QuoteForm from '@/components/QuoteForm';

export default function QuotePage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-32 pb-24 relative overflow-hidden">
            {/* Background styling for professional look */}
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-navy-900 z-0" />
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000')] bg-cover bg-center opacity-10 z-0" />
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-navy-900 via-navy-900/90 to-transparent z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 pt-10">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-500 tracking-[0.3em] text-xs font-bold uppercase mb-4 block">
                        Instant Rate Comparison
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Secure Your Assets <br /> With Confidence
                    </motion.h1>
                    <p className="text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Fill out the request form below to compare options. Our experts will manually audit your submission to guarantee the lowest possible premium.
                    </p>
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                    <QuoteForm />
                </motion.div>
            </div>
        </main>
    );
}

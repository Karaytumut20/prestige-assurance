'use client';
import { useState } from 'react';
import { Truck, Car, Heart, ArrowRight } from 'lucide-react';

export default function QuoteForm() {
    const [step, setStep] = useState(1);
    const [coverageType, setCoverageType] = useState('');

    const nextStep = (type?: string) => {
        if (type) setCoverageType(type);
        setStep(step + 1);
    };

    return (
        <div className="bg-white p-8 shadow-2xl border-t-4 border-gold-500 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif text-navy-900 mb-2">Get Your Instant Quote</h3>
            <p className="text-gray-500 mb-8">Compare rates across 40+ top carriers in minutes.</p>

            {step === 1 && (
                <div className="space-y-4">
                    <label className="text-sm font-bold text-navy-900 uppercase tracking-widest block mb-4">What do you want to insure?</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button
                            onClick={() => nextStep('Trucking')}
                            className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 hover:border-gold-500 rounded-xl transition-all hover:bg-gold-50/50 group"
                        >
                            <Truck size={32} className="text-navy-900 mb-3 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-navy-900">Commercial Truck</span>
                        </button>
                        <button
                            onClick={() => nextStep('Auto')}
                            className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 hover:border-gold-500 rounded-xl transition-all hover:bg-gold-50/50 group"
                        >
                            <Car size={32} className="text-navy-900 mb-3 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-navy-900">Luxury Auto</span>
                        </button>
                        <button
                            onClick={() => nextStep('Health')}
                            className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 hover:border-gold-500 rounded-xl transition-all hover:bg-gold-50/50 group"
                        >
                            <Heart size={32} className="text-navy-900 mb-3 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-navy-900">Health / Life</span>
                        </button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-6">
                    <label className="text-sm font-bold text-navy-900 uppercase tracking-widest block mb-4">
                        {coverageType === 'Trucking' ? 'Fleet Details' : coverageType === 'Auto' ? 'Vehicle Details' : 'Basic Information'}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none rounded-md" />
                        <input type="text" placeholder="Last Name" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none rounded-md" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="ZIP Code" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none rounded-md" />
                        {coverageType === 'Trucking' && <input type="text" placeholder="DOT Number (Optional)" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none rounded-md" />}
                        {coverageType === 'Auto' && <input type="text" placeholder="Vehicle Year/Make" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none rounded-md" />}
                        {coverageType === 'Health' && <input type="text" placeholder="Age" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none rounded-md" />}
                    </div>

                    <button onClick={() => setStep(3)} className="w-full bg-navy-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-colors rounded-md flex justify-center items-center gap-2">
                        Continue to Rate <ArrowRight size={18} />
                    </button>
                    <button onClick={() => setStep(1)} className="text-xs text-gray-500 font-bold uppercase w-full text-center hover:text-navy-900">&larr; Back</button>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-6">
                    <label className="text-sm font-bold text-navy-900 uppercase tracking-widest block mb-4">Contact Information</label>
                    <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none rounded-md" />
                    <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none rounded-md" />

                    <div className="flex items-start gap-3 mt-4 text-xs text-gray-500">
                        <input type="checkbox" id="tcpa-quote" className="mt-1 flex-shrink-0" required />
                        <label htmlFor="tcpa-quote">
                            By clicking "Get Quotes", I agree to the Privacy Policy and authorize Portonova to contact me at the number provided via calls/texts (including automated technology). Consent is not highly required for purchase.
                        </label>
                    </div>

                    <button className="w-full bg-gold-500 text-navy-900 py-4 font-bold uppercase tracking-widest hover:bg-navy-900 hover:text-white transition-colors rounded-md text-lg">
                        Get Quotes Now
                    </button>
                    <button onClick={() => setStep(2)} className="text-xs text-gray-500 font-bold uppercase w-full text-center hover:text-navy-900">&larr; Back</button>
                </div>
            )}
        </div>
    );
}

'use client';
import { ShieldCheck, Smartphone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-[0.2em] text-white">PORTONOVA</span>
              <span className="text-[10px] tracking-[0.4em] text-gold-500 uppercase">Assurance</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialized insurance for Vehicles, Fleets, and Health.
            </p>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/vehicles" className="hover:text-white transition-colors">Commercial Trucking</Link></li>
              <li><Link href="/vehicles" className="hover:text-white transition-colors">Personal Auto</Link></li>
              <li><Link href="/health" className="hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link href="/health" className="hover:text-white transition-colors">Life Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/claims" className="hover:text-white transition-colors">File a Claim</Link></li>
              <li><Link href="/claims" className="hover:text-white transition-colors">Trucking Certificate (COI)</Link></li>
              <li><Link href="/claims" className="hover:text-white transition-colors">Policy Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gold-500 shrink-0" />
                <span>HQ: Atlanta, GA 30303</span>
              </li>
              <li className="flex items-center gap-3 font-bold text-gold-500">
                <a href="tel:+16289995230" className="flex items-center gap-2">
                  <Smartphone size={16} /> +1 (628) 999-5230
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col items-center text-center md:text-left text-xs text-gray-500 space-y-4">
          <p className="max-w-4xl text-[10px] leading-relaxed">
            Legal Disclaimer: Portonova Assurance (National Producer Number: 123456789) is a licensed insurance agency. 
            Licensing varies by state. CA License #0K12345, TX License #1234567, FL License #L123456, NY License #PC-123456. 
            Coverage is subject to policy terms, conditions, and availability. Quotes provided are estimates and do not guarantee coverage or a specific rate. We do not sell your personal information.
          </p>
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Portonova. All Rights Reserved.</p>
            <div className="flex gap-4 text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/licenses" className="hover:text-white transition-colors">State Licenses</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
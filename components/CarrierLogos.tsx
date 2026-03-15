'use client';


// Temsili Carrier İsimleri (Logo yerine şık tipografi)
const carriers = [
  "TRAVELERS", "PROGRESSIVE", "NATIONWIDE", "LIBERTY MUTUAL", "CHUBB", "HARTFORD", "AIG", "BERKSHIRE HATHAWAY"
];

export default function CarrierLogos() {
  return (
    <section className="py-10 bg-gray-50 border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">Trusted Access to Top Carriers</p>
      </div>
      <div className="flex justify-center items-center gap-12 md:gap-24 opacity-40 grayscale flex-wrap px-6">
        {carriers.map((name, i) => (
          <div
            key={i}
            className="text-xl md:text-2xl font-serif font-bold text-navy-900 select-none hover:opacity-100 transition-opacity duration-300"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
'use client';

export default function ContactForm() {
  return (
    <div className="bg-white p-8 shadow-xl border-t-4 border-gold-500">
      <h3 className="text-2xl font-serif text-navy-900 mb-6">Send a Message</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
          <input type="text" placeholder="Last Name" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
        </div>
        <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
        <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none" />
        <textarea rows={4} placeholder="How can we help?" className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-gold-500 outline-none"></textarea>
        <div className="flex items-start gap-3 mt-2 text-xs text-gray-500">
          <input type="checkbox" id="tcpa" required className="mt-1 flex-shrink-0" />
          <label htmlFor="tcpa">
            By clicking submit, I agree to the Privacy Policy and authorize Portonova to contact me at the number provided via calls or text messages (including using pre-recorded/artificial voice or automated technology). Consent is not a condition of purchase. Message and data rates may apply.
          </label>
        </div>
        <button className="w-full bg-navy-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-colors">
          Submit Request
        </button>
      </form>
    </div>
  );
}

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const licenses = [
    { state: "California", type: "P&C, Life & Health", number: "0K12345" },
    { state: "Texas", type: "P&C, Life & Health", number: "1234567" },
    { state: "Florida", type: "P&C, Life & Health", number: "L123456" },
    { state: "New York", type: "Property & Casualty", number: "PC-123456" },
    { state: "Illinois", type: "P&C, Life & Health", number: "IL-987654" },
    { state: "Georgia", type: "P&C, Life & Health", number: "GA-555432" },
    { state: "Pennsylvania", type: "Property & Casualty", number: "PA-112233" },
    { state: "Ohio", type: "P&C, Life & Health", number: "OH-998877" },
];

export default function LicensesPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-40 pb-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <h1 className="text-4xl font-serif text-navy-900 mb-4">State Licensing Information</h1>
                <p className="text-xl text-gray-500 mb-12 max-w-3xl">
                    Prestige Assurance Group (National Producer Number: <strong>123456789</strong>) is fully licensed to sell insurance products across multiple jurisdictions. We operate strictly within the regulatory frameworks of the departments of insurance in the states we serve.
                </p>

                <div className="bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-navy-900 text-white">
                                <th className="p-4 font-bold uppercase tracking-wider text-sm">State</th>
                                <th className="p-4 font-bold uppercase tracking-wider text-sm">Lines of Authority</th>
                                <th className="p-4 font-bold uppercase tracking-wider text-sm">License Number</th>
                                <th className="p-4 font-bold uppercase tracking-wider text-sm text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {licenses.map((lic, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="p-4 text-navy-900 font-bold">{lic.state}</td>
                                    <td className="p-4 text-gray-600">{lic.type}</td>
                                    <td className="p-4 text-navy-900 font-serif">{lic.number}</td>
                                    <td className="p-4 text-center text-green-600 flex justify-center items-center gap-1">
                                        <CheckCircle2 size={16} /> <span className="text-xs font-bold">ACTIVE</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 bg-gray-50 p-6 border-l-4 border-gold-500 text-sm text-gray-600">
                    <p><strong>Note:</strong> Not all products and services are available in all geographic areas. Your eligibility for particular products and services is subject to final determination by Prestige Assurance Group and/or its affiliates. If your state is not listed above, please contact us directly as we are actively expanding our licensure or can partner with locally admitted brokers.</p>
                </div>
            </div>
        </main>
    );
}

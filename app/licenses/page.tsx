import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Professional Compliance & US Operating Licenses | Portonova",
  description: "Review Portonova's commitment to strict digital compliance and professional service operations across the United States. Read our operational disclosures.",
  keywords: ["US Digital Consultancy Compliance", "American Professional Services Legitimacy", "Portonova Operational Compliance", "National Digital Governance"],
};

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
                <h1 className="text-4xl font-serif text-navy-900 mb-4">US Corporate Compliance & Authority</h1>
                <p className="text-xl text-gray-500 mb-12 max-w-3xl">
                    Portonova operates as a premier digital consultancy and professional services platform serving clients across the United States. We maintain strict compliance with applicable local and federal regulations for American digital business operations.
                </p>

                <div className="bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden p-8">
                    <h2 className="text-2xl font-serif text-navy-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-gold-500" /> Professional Compliance
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        While we present a corporate infrastructure to deliver scalable solutions, Portonova is structured to provide flexible, independent consulting and digital services. All service agreements, including liability limitations and scope of work, are outlined in individual project contracts rather than broad regulatory bonds.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        For inquiries regarding specific operational compliances, tax documentation, or vendor setup forms prior to contract execution, please contact our administrative team directly.
                    </p>
                </div>

                <div className="mt-12 bg-gray-50 p-6 border-l-4 border-gold-500 text-sm text-gray-600">
                    <p><strong>Note:</strong> Not all services are available in all geographic areas depending on local digital commerce laws. Your eligibility for particular products and services is subject to final determination by Portonova.</p>
                </div>
            </div>
        </main>
    );
}

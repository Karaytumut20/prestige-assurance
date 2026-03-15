import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "US Digital Privacy & Data Protection Policy | Portonova",
  description: "Portonova respects the privacy of American clients. Read our US data standards regarding the collection, protection, and usage of your digital project demographics.",
  keywords: ["US Digital Privacy Policy", "American Data Protection", "Portonova Privacy", "TCPA Data Security"],
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-40 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-serif text-navy-900 mb-8 border-b border-gray-200 pb-4">US Digital Privacy & Data Protection Policy</h1>

                <div className="prose prose-navy max-w-none text-gray-700 space-y-6">
                    <p><strong>Effective Date:</strong> January 1, 2024</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">1. Introduction</h2>
                    <p>Portonova ("we," "us," or "our") is committed to protecting the privacy of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us across our platform and services.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">2. Information We Collect</h2>
                    <p>We may collect the following types of information when you request a service, contact us, or use our website:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>American Demographics:</strong> Identifying information bound under US data standards such as state-based location details.</li>
                        <li><strong>Project Data:</strong> Information relevant to providing you with accurate quotes, consultations, and digital services across the United States.</li>
                        <li><strong>Usage Analytics:</strong> Anonymous geographical and behavioral data targeting website visitors from across North America.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">3. How We Use Your Information</h2>
                    <p>We use your data solely for the following business purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Generating accurate service quotes and project estimates.</li>
                        <li>Facilitating communication regarding your requested services or ongoing projects.</li>
                        <li>Improving our website functionality and service offerings.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">4. US Regional Communications</h2>
                    <p>By providing your contact information and submitting any forms on our native US website, you consent to be contacted by Portonova via email or phone regarding your inquiry under federal TCPA guidelines. You may opt out of promotional communications at any time.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">5. Information Sharing</h2>
                    <p>We respect your privacy. We do not sell, rent, or trade your personal data to third-party marketers. Your information is only shared with trusted service providers directly involved in facilitating your requested services and maintaining our platform.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">6. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy or wish to request we delete your data from our systems, please contact us directly through the methods provided on our Contact page.</p>
                </div>
            </div>
        </main>
    );
}

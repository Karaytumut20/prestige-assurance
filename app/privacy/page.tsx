import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-40 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-serif text-navy-900 mb-8 border-b border-gray-200 pb-4">Privacy Policy</h1>

                <div className="prose prose-navy max-w-none text-gray-700 space-y-6">
                    <p><strong>Effective Date:</strong> January 1, 2024</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">1. Introduction</h2>
                    <p>Prestige Assurance Group ("we," "us," or "our") is committed to protecting the privacy of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us across our website and services.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">2. Information We Collect</h2>
                    <p>We may collect the following types of information when you request a quote, contact us, or use our website:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Personal Identifiers:</strong> Name, email address, phone number, physical address, and date of birth.</li>
                        <li><strong>Vehicle and Property Data:</strong> VIN, driving history, DOT number (for commercial fleets), and asset values.</li>
                        <li><strong>Health Information:</strong> Basic health qualifiers needed for providing accurate life and medical insurance quotes.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">3. How We Use Your Information</h2>
                    <p>We use your data solely for the following business purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Generating accurate insurance rate quotes.</li>
                        <li>Connecting you with top-rated insurance carriers for coverage binding.</li>
                        <li>Communicating with you regarding your policy, claims, or coverage updates.</li>
                        <li>Complying with federal and state regulatory requirements.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">4. TCPA Consent and Communications</h2>
                    <p>By providing your telephone number and submitting any forms on our website, you provide express written consent to be contacted by Prestige Assurance Group and our partners via phone calls or SMS text messages. This may include the use of automated dialing systems or pre-recorded marketing messages. Your consent is not a required condition of purchasing goods or services.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">5. Information Sharing</h2>
                    <p>We do not sell your personal data to third-party marketers. Your information is only shared with trusted insurance carriers, underwriters, and service providers (such as claims adjusters) directly involved in facilitating your insurance policy.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">6. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy or wish to request we delete your data, please contact us at:</p>
                    <p className="mt-2 text-navy-900 font-bold">Prestige Assurance Group</p>
                    <p>Email: compliance@prestigeassurance.com</p>
                    <p>Phone: +1 (628) 999-5230</p>
                </div>
            </div>
        </main>
    );
}

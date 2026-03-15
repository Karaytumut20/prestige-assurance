import React from 'react';

export default function TermsOfUsePage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-40 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-serif text-navy-900 mb-8 border-b border-gray-200 pb-4">Terms of Use</h1>

                <div className="prose prose-navy max-w-none text-gray-700 space-y-6">
                    <p><strong>Effective Date:</strong> January 1, 2024</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>By accessing or using the Prestige Assurance Group website (the "Site"), you agree to comply with and be bound by these Terms of Use. If you do not agree entirely, please do not use our Site.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">2. Description of Services</h2>
                    <p>Prestige Assurance Group acts as a licensed insurance brokerage. Our Site provides information regarding insurance products and a platform for users to request insurance rate quotes. The quotes provided via the Site are estimates based on the information submitted and do not represent a guaranteed premium, final rate, or a binding contract for coverage.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">3. User Obligations</h2>
                    <p>When using our Site or requesting a quote, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate, current, and complete information.</li>
                        <li>Maintain and promptly update your information.</li>
                        <li>Accept full responsibility for any consequences resulting from false or inaccurate information provided.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">4. Intellectual Property Rights</h2>
                    <p>All content, design, text, graphics, and interfaces appearing on this Site are the intellectual property of Prestige Assurance Group or its licensors. You may not copy, reproduce, or distribute any portion of the Site without explicit written consent.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">5. Disclaimer of Liability</h2>
                    <p>To the maximum extent permitted by law, Prestige Assurance Group shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or any interactions with third-party insurance carriers linked through our services.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">6. Changes to Terms</h2>
                    <p>We reserve the right to modify these Terms of Use at any time. Changes will be updated on this page with the revised Effective Date. Continued use of the Site constitutes acceptance of the modified Terms.</p>
                </div>
            </div>
        </main>
    );
}

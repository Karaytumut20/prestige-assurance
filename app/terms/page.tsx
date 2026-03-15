import React from 'react';

export default function TermsOfUsePage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD] pt-40 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-serif text-navy-900 mb-8 border-b border-gray-200 pb-4">US Digital Operations Terms of Use</h1>

                <div className="prose prose-navy max-w-none text-gray-700 space-y-6">
                    <p><strong>Effective Date:</strong> January 1, 2024</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">1. Acceptance of National Terms</h2>
                    <p>By accessing or using the Portonova digital platform across the United States (the "Site"), you agree to comply with and be bound by these corporate Terms of Use governed by US business regulations. If you do not agree entirely, please do not use our Site.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">2. Digital Agency Scope of Services</h2>
                    <p>Portonova provides highly scalable American professional consulting, digital coordination, and business informational services. The content and quotes provided via the Site are estimates based on the information submitted to our domestic servers and serve as an initial consultation point. They do not represent a final binding contract governed by US law until a formal agreement is executed separately.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">3. User Obligations</h2>
                    <p>When using our Site or requesting a consultation, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate, current, and complete information regarding your project or inquiry.</li>
                        <li>Maintain and promptly communicate any updates to your request.</li>
                        <li>Accept full responsibility for any consequences resulting from false or inaccurate information provided.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">4. Intellectual Property Rights</h2>
                    <p>All content, design, text, graphics, and interfaces appearing on this Site are the intellectual property of Portonova or its licensors. You may not copy, reproduce, or distribute any portion of the Site without explicit written consent.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">5. Disclaimer of Liability</h2>
                    <p>To the maximum extent permitted by law, Portonova shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site, the information presented, or any interactions with third-party partners linked through our services.</p>

                    <h2 className="text-2xl font-serif text-navy-900 mt-8 mb-4">6. Changes to Terms</h2>
                    <p>We reserve the right to modify these Terms of Use at any time. Changes will be updated on this page with the revised Effective Date. Continued use of the Site constitutes acceptance of the modified Terms.</p>
                </div>
            </div>
        </main>
    );
}

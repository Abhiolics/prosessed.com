"use client"
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="relative bg-gray-50 text-gray-900">
      {/* Green Blurry Effect at Top */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500 blur-3xl opacity-30 z-0"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <h1 className="text-4xl font-semibold font-heading text-center text-emerald-600 mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          The website <a href="https://Prosessed.com" className="text-emerald-500 underline">https://Prosessed.com</a> under the name and style "Prosessed" ("Website") is owned and operated by Expofood Technologies Private Limited.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-500">1. Collection of Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect and process information from you, through your use of the Website, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Name, address, phone number, email, and payment details.</li>
              <li>Data captured automatically, such as IP address and device details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-500">2. Use of Collected Information</h2>
            <p className="text-gray-700 leading-relaxed">
              The collected information will be used for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Providing our services effectively.</li>
              <li>Improving user experience and platform functionality.</li>
              <li>Legal and regulatory compliance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-500">3. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are used to improve your experience. By continuing to use the website, you agree to our cookie policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-500">4. Sharing of Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell or rent your personal data. However, we may share it with trusted partners to enhance our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-500">5. Security Measures</h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to protect your data from unauthorized access and use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-500">6. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions, you can contact our grievance officer:
            </p>
            <ul className="mt-2 text-gray-700">
              <li><b>Officer:</b> Navneet Dangra</li>
              <li><b>Email:</b> <a href="mailto:care@prosessed.com" className="text-emerald-500 underline">care@prosessed.com</a></li>
              <li><b>Phone:</b> +91-7276106858</li>
              <li><b>Address:</b> A14 West, Trinity Acres and Woods, Sarjapur Road, Bangalore- 560102, India</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-500">7. Right to Withdraw Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              You may withdraw your consent at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-500">8. Notification of Changes</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy periodically, and any changes will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-500">9. Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you consent to the terms outlined in this Privacy Policy.
            </p>
          </section>
        </div>
      </div>

      {/* Green Blurry Effect at Bottom */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500 blur-3xl opacity-30 z-0"></div>
    </div>
  );
};

export default PrivacyPolicy;

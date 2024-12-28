"use client";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const aerchainFeatures = [
    "Specifically designed for Food Cross-border Industry",
    "Dynamic Multi-currency pricing based on location",
    "Mobile App Storefront for Catalogue",
    "Notifications for new offers and specials",
    "Container planning by volumetric Weights",
    "Automated Reminders via email, WhatsApp, and calls",
    "One place for compliances and documentation",
  ];

  const otherSoftwareFeatures = [
    "Generic software for export-import business",
    "Manually creating quotes for customers",
    "Static PDFs with outdated products",
    "Traditional WhatsApp and email workflows",
    "Manually adjusting order quantities",
    "Endless calls for follow-ups with customers",
    "Manual file storage and email sharing",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Why <span className="font-serif italic">ProSessed</span>?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl font-subheading capitalize mx-auto">
        Simplifying the food industry's ordering process with a seamless platform for cataloging, storefronts, order management and payment collection.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Left Column - Aerchain Features */}
        <div className="flex-1 bg-emerald-50 p-8 font-heading rounded-lg shadow-lg">
          <h3 className="text-lg  font-bold tracking-wider text-gray-900 mb-4 text-left">
            PROSESSED FEATURES INCLUDED
          </h3>
          <div className="space-y-4">
            {aerchainFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VS Sign */}
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg transform translate-x-[1%]">
            VS
          </div>
        </div>

        {/* Right Column - Other Software Features */}
        <div className="flex-1 bg-red-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold font-heading tracking-wider text-gray-900 mb-4 text-left">
          OTHER SOFTWARES FEATURES
          </h3>
          <div className="space-y-4">
            {otherSoftwareFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100  flex items-center justify-center">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-sm text-gray-900 font-heading">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




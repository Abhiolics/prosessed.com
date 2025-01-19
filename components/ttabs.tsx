'use client';
import { useState } from 'react';
import Image from 'next/image';
import impo from 'public/images/importerss.svg';
import expo from 'public/images/expo.svg';
import Link from 'next/link';

export default function Ttabs() {
  const [activeTab, setActiveTab] = useState('importer');

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 lg:px-16 bg-gray-">
      {/* Heading and Subheading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
        Unlock Effortless Global Trade with <b className="text-[#0C8EF7] font-semibold">ProSessed</b> 
        </h2>
        <p className="text-sm md:text-lg text-gray-600 font-subheading capitalize">
        Revolutionizing food trade by simplifying cataloging, ordering, planning and payments for all
        </p>
      </div>

      {/* Toggle Menu */}
      <div className="relative flex items-center justify-between bg-gray-200 rounded-full w-full max-w-lg p-1 mb-10">
        <button
          onClick={() => setActiveTab('importer')}
          className={`flex-1 font-heading py-3 text-lg md:text-xl rounded-full font-medium transition-colors duration-300 ${
            activeTab === 'importer' ? 'bg-[#005906] text-white' : 'text-gray-600'
          }`}
        >
          Importers
        </button>
        <button
          onClick={() => setActiveTab('exporter')}
          className={`flex-1 py-3 font-heading text-lg md:text-xl rounded-full font-medium transition-colors duration-300 ${
            activeTab === 'exporter' ? 'bg-[#005906] text-white' : 'text-gray-600'
          }`}
        >
          Exporters
        </button>
      </div>

      {/* Popped Screen Content */}
      <div className="relative bg-white font-heading shadow-lg shadow-emerald-200 border-blue-500 rounded-xl p-6 w-full max-w-4xl lg:flex items-center">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-full text-gray-700">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            {activeTab === 'importer'
              ? 'How We Simplify Importing'
              : 'How We Simplify Exporting'}
          </h3>
          <ul className="space-y-5">
            {(activeTab === 'importer'
              ? [
                  "Let your customer place an order via your app-based storefront.",
                  "Empower your sales team to sell better via the Rep Ordering App.",
                  'Automate picking slips and invoicing processes.',
                  'Simplify warehouse and delivery operations with dedicated apps.',
                  'Stay on top of payments with automated reminders, alerts, and app-based payment.',
                  
                ]
              : [
                  'An Online Storefront to showcase product range, categories, offers, and pricing.',
                  'A Wholesale Ordering App for Importer to request for quote.',
                  "Export documentation and compliance checklists for every order.",
                  "Options for clients to open bank accounts in multiple countries.",
                  "Export-compliant packing lists and invoices generated seamlessly.",

                ]
            ).map((point, index) => (
              <li key={index} className="flex items-start text-lg">
                <svg
                  className="w-5 h-5 fill-current text-teal-500 mr-3 shrink-0 mt-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                {point}
               
               
              </li>
            ))}
          </ul>

          <div className="mt-6">
    <Link
      href={activeTab === 'importer' ? '/importers' : '/exporters'}
      className="inline-flex items-center bg-[#004B87] text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-teal-600 transition-colors"
    >
      Get Started
      <svg
        className="w-5 h-5 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  </div>


        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0">
          <Image
            src={activeTab === 'importer' ? impo : expo}
            alt={`${activeTab} Illustration`}
            className="w-full max-w-[400px] object-contain"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>




  );
}








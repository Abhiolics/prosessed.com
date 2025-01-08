"use client";
import { useState } from "react";
import Image from "next/image";
import lens from "public/images/lens.svg";
import tri from "public/images/tri.svg";
import cir from "public/images/circle.svg";
import zigzag from "public/images/zigzag.svg";
import Link from "next/link";

export default function NewTabs() {
  const [activeTab, setActiveTab] = useState("importer");

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 lg:px-16 ">
    {/* Toggle Menu */}
    <div className="relative flex items-center justify-between bg-gray-200 rounded-full w-full max-w-lg p-1 mb-10">
      <button
        onClick={() => setActiveTab("importer")}
        className={`flex-1 font-heading py-3 text-lg md:text-xl rounded-full font-medium transition-colors duration-300 ${
          activeTab === "importer" ? "bg-teal-500 text-white" : "text-gray-600"
        }`}
      >
        Importers
      </button>
      <button
        onClick={() => setActiveTab("exporter")}
        className={`flex-1 py-3 font-heading text-lg md:text-xl rounded-full font-medium transition-colors duration-300 ${
          activeTab === "exporter" ? "bg-teal-500 text-white" : "text-gray-600"
        }`}
      >
        Exporters
      </button>
    </div>

    {/* Content Section */}
    <div className="relative bg-white font-heading shadow-lg shadow-emerald-200 border-blue-500 rounded-xl p-8 w-full max-w-5xl flex flex-col">
      {/* Image Section */}
      <div className="flex items-center justify-between gap-6 mb-8">
        {activeTab === "importer" ? (
          <>
            <Image
              src={lens}
              alt="Lens Illustration"
              className="w-full max-w-md object-contain"
              width={400}
              height={400}
            />
            <Image
              src={tri}
              alt="Triangle Illustration"
              className="w-full max-w-md object-contain"
              width={400}
              height={400}
            />
          </>
        ) : (
          <>
            <Image
              src={cir}
              alt="Circle Illustration"
              className="w-full max-w-md object-contain"
              width={400}
              height={400}
            />
            <Image
              src={zigzag}
              alt="Zigzag Illustration"
              className="w-full max-w-md object-contain"
              width={400}
              height={400}
            />
          </>
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-auto self-start">
        <Link
          href={activeTab === "importer" ? "/contact" : "/contact"}
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
  </div>
  );
}


"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { performServerHandshake } from "http2";

export default function TaglineSection() {
  return (
    <div className="py-12 px-6 flex flex-col items-center justify-center text-center space-y-12">
      {/* Headline Section */}
      <div className="w-full max-w-3xl flex flex-col items-center space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold font-heading leading-snug">
          <span className="flex flex-wrap justify-center capitalize">
            Unlock the{" "}
            <span className="text-[#2ECC71] capitalize ml-2">
              full revenue potential
            </span>
          </span>
          of your <span className="text-[#004B87] capitalize">import-export</span>{" "}
          business with ProSessed
        </h2>
      </div>

      {/* Illustration Section */}
      <div className="w-full mt-10 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Lottie Animation */}
        <DotLottieReact
          src="https://lottie.host/def7ec4e-7ed8-46bf-99b1-e7a789a4b686/SrIWGKQ5J1.lottie"
          loop
          autoplay
        
          className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px]"
        />

        {/* SVG Image */}
        <img
          src="/images/penta.svg"
          alt="Penta Illustration"
          className="w-70 h-70 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px]"
        />
      </div>
    </div>
  );
}






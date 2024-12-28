"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
      <div className="w-full max-w-lg flex justify-center">
        <DotLottieReact
          src="https://lottie.host/def7ec4e-7ed8-46bf-99b1-e7a789a4b686/SrIWGKQ5J1.lottie"
          loop
          autoplay
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </div>
  );
}




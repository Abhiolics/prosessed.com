"use client";
import { useState } from "react";

// export const metadata = {
//   title: "Contact - Appy",
//   description: "Page description",
// };

import PageIllustration from "@/components/page-illustration";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    country: "India",
    message: "",
    role: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [type === "radio" ? name : id]: value,
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          phone: "",
          country: "India",
          message: "",
          role: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };
  

  return (
    <>
      {/* Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 font-medium font-heading mb-4">
              We’re here to help you every step of the way
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                We'll Connect with you very soon
              </p>
            </div>

            {/* Contact form */}
            <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  >
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-input w-full"
                    placeholder="Enter your first name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  >
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="form-input w-full"
                    placeholder="Enter your last name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    htmlFor="company"
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  >
                    Company <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="form-input w-full"
                    placeholder="Enter your company name"
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    htmlFor="phone"
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-input w-full"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label
                    htmlFor="country"
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  >
                    Country <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="country"
                    className="form-select w-full"
                    required
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option>India</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="flex justify-between items-center mb-1">
                    <label
                      htmlFor="message"
                      className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                    >
                      Details
                    </label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-textarea w-full"
                    placeholder="What do you want to build with Appy?"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-3">
                    Tell us about your role
                  </div>
                  {["CO-founder", "Developer", "Design / Marketing", "Other"].map(
                    (role) => (
                      <label key={role} className="flex items-center mb-2">
                        <input
                          type="radio"
                          className="form-radio"
                          name="role"
                          value={role}
                          checked={formData.role === role}
                          onChange={handleChange}
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">
                          {role}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center"
                  >
                    <span>Request code</span>
                    <svg
                      className="w-3 h-3 shrink-0 mt-px ml-2"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current"
                        d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </div>
        </div>

        <div className="flex justify-center items-center mb-4">
  <Image
    alt="Your image description" 
    src="/images/3v.svg" 
    className="mb-2"
    width={700} 
    height={700} 
    layout="intrinsic" // Ensures responsive scaling
  />
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-3xl font-semibold mb-12 font-heading">
        Have questions? We're here to help you
      </h2>

      {/* CTA box */}
      <div className="dark relative bg-gray-800 py-10 px-8 md:py-16 md:px-12 rounded-2xl mb-[-3rem] shadow-lg">
        {/* Background illustration */}
        <div className="absolute inset-0 left-auto pointer-events-none" aria-hidden="true">
          <svg className="h-full" width="400" height="232" viewBox="0 0 400 232" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-a">
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="box-gr-b">
                <stop stopColor="#3ABAB4" offset="0%" />
                <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
              <circle fillOpacity=".16" fill="url(#box-gr-a)" cx="413" cy="688" r="240" />
              <circle fillOpacity=".24" fill="url(#box-gr-b)" cx="400" cy="400" r="400" />
            </g>
          </svg>
        </div>

        {/* Contact Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {/* Call Us Section */}
          <div className="flex items-center justify-center md:justify-end md:pr-12 pt-4 md:pt-0">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-[#2ECC71] mr-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <div className="text-sm font-medium text-gray-400 mb-1">CALL US</div>
              <div className="text-2xl md:text-3xl font-semibold text-[#2ECC71]">
              +91 7276106858
              </div>
            </div>
          </div>

          {/* Email Us Section */}
          <div className="flex items-center justify-center md:justify-start md:pl-12 pt-4 md:pt-0">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-[#2ECC71] mr-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h8" />
              <path d="M8 14h4" />
            </svg>
            <div>
              <div className="text-sm font-medium text-gray-400 mb-1">SAY HI</div>
              <div className="text-xl md:text-2xl font-semibold text-[#2ECC71]">
                navneet@prosessed.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Background */}
      {/* <div className="bg-[#000033] h-32 mt-0"></div> */}
    </div>

      </section>
    </>
  );
}


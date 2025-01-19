"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 1;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollAmount;
      }
    };

    const timer = setInterval(scroll, 30);

    const pauseScroll = () => clearInterval(timer);
    const resumeScroll = () => setInterval(scroll, 30);

    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);

    return () => {
      clearInterval(timer);
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
    };
  }, []);

  const features = [
    'Multi-Currency Pricing',
    'Mobile App Storefront',
    'Automated Reminders',
    'Volumetric Container Planning',
    'Centralized Compliance Management',
    'Simplified Order Invoicing',
    'AI Order Optimization',
    'Real-Time Notifications',
  ];

  const pages = [
    { name: 'Resources', url: '/resources' },
    { name: 'Demo', url: '/demo' },
    { name: 'About Us', url: '/about' },
    { name: 'Terms of Use', url: '/terms' },
    { name: 'Privacy Policy', url: '/privacypolicy' },
  ];

  // Function to handle CTA button click
  const handleCTAClick = () => {
    router.push('/contact');
  };

  return (
    <footer className="relative bg-black text-white -z-1">
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500 blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-normal font-heading">
            Unlock the Future of Food Ordering with{' '}
            <span className="text-[#0C8EF7]">ProSessed’s</span>
          </h2>
          <br />
          <h3 className="text-3xl sm:text-4xl font-heading mb-8 italic">
            Seamless AI-Powered Platform.
          </h3>
          <button
            onClick={handleCTAClick}
            className="inline-block bg-[#0C8EF7] text-black px-8 py-4 rounded-full font-medium hover:bg-[#005906] transition-colors cursor-pointer"
          >
            REQUEST A DEMO
          </button>
        </div>

        <div className="mt-16 relative">
          <div ref={scrollRef} className="flex font-heading space-x-6 whitespace-nowrap py-4 w-full overflow-hidden">
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="flex items-center bg-zinc-900 rounded-full px-6 py-3 space-x-2 flex-none">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex flex-col space-y-4 mb-6">
                <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/ap.png" alt="Get ProSessed App from App Store" width={200} height={200} className="cursor-pointer" />
                </Link>
              </div>
              <p className="text-gray-400 font-heading">
                Download our OrderIt app from the Play Store and App Store for seamless food trade!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">PAGES</h4>
              <div className="grid grid-cols-2 gap-4 font-heading">
                {pages.map((page) => (
                  <Link key={page.name} href={page.url} className="text-gray-400 hover:text-white cursor-pointer">
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">MORE LINKS</h4>
              <ul className="space-y-3 font-heading">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white cursor-pointer">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white cursor-pointer">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white cursor-pointer">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">OUR LOCATIONS</h4>
              <div className="space-y-6 font-heading">
                <div>
                  <h5 className="text-lg font-medium">India</h5>
                  <p className="text-gray-400">
                    A14 W, Trinity Acres and Woods, Sarjapur Road, Bangalore - 560102
                  </p>
                  <p className="text-gray-400">Contact: +91 7276106858</p>
                </div>
                <div>
                  <h5 className="text-lg font-medium">Australia</h5>
                  <p className="text-gray-400">4 Biara Ct, Cranbourne West VIC 3977</p>
                  <p className="text-gray-400">Contact: +61 473933034</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "public/images/happy.svg";
import { Menu, X, Package, Globe, Info, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll to toggle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 bg-white shadow-md' : 'absolute'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Navigation */}
          <div className="flex items-center space-x-6">
            
            <Link href="/" className="block" aria-label="ProSessed">
              <Image src={logo} alt="Prosessed Logo" width={140} height={140} />
            </Link>

            {/* Desktop navigation (aligned left) */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8 font-medium">
                <li>
                  <Link href="/importers" className="text-gray-700 hover:text-black transition">Importers</Link>
                </li>
                <li>
                  <Link href="/exporters" className="text-gray-700 hover:text-black transition">Exporters</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-black transition">About Us</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Desktop CTA (aligned right) */}
          <nav className="hidden md:flex">
            <ul className="flex items-center">
              <li>
                <Link href="/contact" className="btn text-white bg-black hover:bg-emerald-500 px-4 py-2 rounded-md">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md py-4 px-6">
          <ul className="space-y-4 text-lg font-medium">
            <li>
              <Link href="/importers" className="flex items-center space-x-3 text-gray-700 hover:text-black transition" onClick={() => setMobileMenuOpen(false)}>
                <Package className="w-5 h-5" /> <span>Importers</span>
              </Link>
            </li>
            <li>
              <Link href="/exporters" className="flex items-center space-x-3 text-gray-700 hover:text-black transition" onClick={() => setMobileMenuOpen(false)}>
                <Globe className="w-5 h-5" /> <span>Exporters</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center space-x-3 text-gray-700 hover:text-black transition" onClick={() => setMobileMenuOpen(false)}>
                <Info className="w-5 h-5" /> <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center space-x-3 text-gray-700 hover:text-black transition" onClick={() => setMobileMenuOpen(false)}>
                <Phone className="w-5 h-5" /> <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}


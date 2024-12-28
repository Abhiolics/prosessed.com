import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import ThemeToggle from './theme-toggle'
import MobileMenu from './mobile-menu'
import logo from "public/images/logoo.png"
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-5">
            <Link href="/" className="block" aria-label="Cruip">
            <Image 
      src={logo} 
      alt="ProSessed Logo" 
      width={40} 
      height={40} 
    />
              {/* <Logo /> */}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Resources">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/help"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                   Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                   Contact Us
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop lights switch */}
            {/* <ThemeToggle className="ml-3" /> */}

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <Link href="/contact" className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">
                Request a Demo
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}

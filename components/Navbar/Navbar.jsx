'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Brand */}
          <div className="flex-shrink-0 text-xl font-bold text-white">
            <Link href="/">
              <span className="text-[#079669]">CVIT</span> CCM
            </Link>
          </div>

          {/* Center: Menu Items */}
          <div className="hidden md:flex space-x-8 mx-auto">
            <Link
              href="/"
              className="text-white-700 hover:text-[#079669] hover:transition hover:underline hover:decoration-wavy"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white-700 hover:text-[#079669] hover:transition hover:underline hover:decoration-wavy"
            >
              About
            </Link>
          </div>

          {/* Right: Login & Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-[#079669] hover:text-primary">
              Login
            </Link>
            <Link
              href="/get-started"
              className="bg-[#079669] text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#079669d9] hover:text-[#079669] focus:outline-none transition"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-gray-700 hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-primary"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="block text-gray-700 hover:text-primary"
          >
            Login
          </Link>
          <Link
            href="/get-started"
            className="block bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 transition text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

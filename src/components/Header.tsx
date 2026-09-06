'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-wide py-4">
        <div className="flex justify-between items-center">
          {/* Logo & Company Name */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src="/logo.png"
                alt="Brown Bird Solar Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-brown-dark">Brown Bird</h1>
              <p className="text-xs text-gray-600 leading-tight">Solar Distributor</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            <Link href="#" className="text-gray-700 hover:text-brown-dark font-medium transition">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-brown-dark font-medium transition">
              Products
            </Link>
            <Link href="#applications" className="text-gray-700 hover:text-brown-dark font-medium transition">
              Applications
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-brown-dark font-medium transition">
              Services
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-brown-dark font-medium transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919481287009"
              className="hidden md:block bg-solar-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition font-medium text-sm"
            >
              Call Now
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 w-6 h-6"
            >
              <span className={`w-full h-0.5 bg-brown-dark transition ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-brown-dark transition ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-brown-dark transition ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 space-y-2 border-t border-gray-200 pt-4">
            <Link
              href="#"
              className="block text-gray-700 hover:text-brown-dark font-medium py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-brown-dark font-medium py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#applications"
              className="block text-gray-700 hover:text-brown-dark font-medium py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Applications
            </Link>
            <Link
              href="#services"
              className="block text-gray-700 hover:text-brown-dark font-medium py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-brown-dark font-medium py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+919481287009"
              className="block bg-solar-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition font-medium text-center mt-4"
            >
              Call: +91-9481287009
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

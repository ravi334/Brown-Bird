'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(7,30,56,.06)] backdrop-blur-md">
      <div className="container-wide py-3">
        <div className="flex justify-between items-center">
          {/* Logo & Company Name */}
          <Link href="/" className="flex items-center gap-3 transition hover:opacity-80">
            <div className="h-14 w-14 rounded-2xl border border-slate-200 bg-white p-1 shadow-[0_8px_18px_rgba(44,24,16,.14)]">
              <Image
                src="/logo.png"
                alt="Brown Bird Solar Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-none">
              <h1 className="text-2xl font-bold tracking-tight text-brown-dark">Brown Bird</h1>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-solar-blue">Solar, Battery &amp; Inverter Distributor</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Link href="#" className="font-semibold text-gray-600 transition hover:text-solar-blue">
              Home
            </Link>
            <Link href="#products" className="font-semibold text-gray-600 transition hover:text-solar-blue">
              Products
            </Link>
            <Link href="#applications" className="font-semibold text-gray-600 transition hover:text-solar-blue">
              Applications
            </Link>
            <Link href="#projects" className="font-semibold text-gray-600 transition hover:text-solar-blue">
              Projects
            </Link>
            <Link href="#services" className="font-semibold text-gray-600 transition hover:text-solar-blue">
              Services
            </Link>
            <Link href="#contact" className="font-semibold text-gray-600 transition hover:text-solar-blue">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <div className="hidden border-l border-slate-200 pl-4 text-right xl:block">
              <p className="text-xs font-bold text-brown-dark">Hubli &amp; Belgaum, Karnataka</p>
              <p className="mt-1 text-[11px] font-semibold text-slate-500">+91-9481287009 <span className="text-solar-blue">&#183;</span> +91-9916470467</p>
            </div>
            <a
              href="tel:+919481287009"
              className="hidden rounded-lg bg-brown-dark px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-solar-blue md:block"
            >
              Call Now
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 lg:hidden"
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
              href="#projects"
              className="block py-2 font-medium text-gray-700 transition hover:text-brown-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
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

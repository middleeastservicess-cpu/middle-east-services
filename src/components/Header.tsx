'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG, services } from '@/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-dark-100/50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-hero-pattern rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg group-hover:scale-105 transition-transform">
              ME
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-dark-950 leading-tight block">
                Middle East
              </span>
              <span className="text-xs text-primary-600 font-semibold tracking-wider uppercase -mt-1 block">
                Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-dark-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="px-4 py-2 text-dark-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50 flex items-center gap-1"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-dark-100 py-2 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-primary-50 text-dark-700 hover:text-primary-600 transition-colors"
                  >
                    <span className="text-lg">{service.icon}</span>
                    <span className="font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/cities/" className="px-4 py-2 text-dark-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50">
              Cities
            </Link>
            <Link href="/blog/" className="px-4 py-2 text-dark-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50">
              Blog
            </Link>
            <Link href="/about/" className="px-4 py-2 text-dark-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50">
              About
            </Link>
            <Link href="/contact/" className="px-4 py-2 text-dark-700 hover:text-primary-600 font-medium transition-colors rounded-lg hover:bg-primary-50">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">

            <Link href="/contact/" className="btn-primary text-sm py-2.5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <svg className="w-6 h-6 text-dark-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-1 pt-2">
            <Link href="/" className="px-4 py-3 text-dark-700 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/services/" className="px-4 py-3 text-dark-700 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/cities/" className="px-4 py-3 text-dark-700 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50" onClick={() => setIsMenuOpen(false)}>
              Cities
            </Link>
            <Link href="/blog/" className="px-4 py-3 text-dark-700 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/about/" className="px-4 py-3 text-dark-700 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact/" className="px-4 py-3 text-dark-700 hover:text-primary-600 font-medium rounded-lg hover:bg-primary-50" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-dark-100">
              <Link href="/contact/" className="btn-primary text-sm justify-center" onClick={() => setIsMenuOpen(false)}>
                📋 Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

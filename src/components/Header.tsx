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
          <div className="hidden lg:flex items-center gap-4">
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-dark-700 hover:text-primary-600 font-bold transition-all px-4 py-2 hover:bg-primary-50 rounded-xl">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
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
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 bg-emerald-500 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Chat on WhatsApp
              </a>
              <Link href="/contact/" className="btn-primary text-sm justify-center py-3.5" onClick={() => setIsMenuOpen(false)}>
                📋 Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

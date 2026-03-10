import Link from 'next/link';
import { SITE_CONFIG, services, cities } from '@/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-hero-pattern rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg">
                ME
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white leading-tight block">
                  Middle East
                </span>
                <span className="text-xs text-primary-400 font-semibold tracking-wider uppercase -mt-1 block">
                  Services
                </span>
              </div>
            </Link>
            <p className="text-dark-400 leading-relaxed">
              Your trusted marketplace for professional home & business services across the Middle East. Quality service, every time.
            </p>
            <div className="flex gap-3">
              {[
                { href: SITE_CONFIG.socialMedia.facebook, label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { href: SITE_CONFIG.socialMedia.instagram, label: 'Instagram', icon: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 10a2 2 0 110-4 2 2 0 010 4zm4.5-6a.5.5 0 110-1 .5.5 0 010 1z' },
                { href: SITE_CONFIG.socialMedia.twitter, label: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { href: SITE_CONFIG.socialMedia.linkedin, label: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-sm">{service.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Cities We Serve</h3>
            <ul className="space-y-2.5">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/cities/${city.slug}/`}
                    className="text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{city.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">

              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3 text-dark-300">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="/about/" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">About Us</Link>
                <Link href="/contact/" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">Contact</Link>
                <Link href="/blog/" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">Blog</Link>
                <Link href="/sitemap.xml" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-dark-500">
              <Link href="/privacy-policy/" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions/" className="hover:text-primary-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

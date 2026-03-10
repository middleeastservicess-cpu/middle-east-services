import { Metadata } from 'next';
import { SITE_CONFIG } from '@/data';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: `Contact Us — Get a Free Quote | ${SITE_CONFIG.name}`,
  description: 'Contact Middle East Services for a free quote. Fill out our AI-powered form to get connected with experts. Available 24/7 across Dubai, Riyadh, Doha, Abu Dhabi & more.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-hero-pattern relative overflow-hidden">
        <div className="container-custom relative z-10 py-16 sm:py-20">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg">
              Get in touch for a free quote or any questions. We respond within 30 minutes!
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="section-title text-2xl sm:text-3xl mb-2">Request a Free Quote</h2>
              <p className="text-dark-500 mb-8">Fill out the form below and we&#39;ll get back to you within 30 minutes.</p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-dark-50 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-xl text-dark-950 mb-6">Get in Touch</h3>
                <div className="space-y-4">


                  <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-dark-400">Email</p>
                      <p className="font-semibold text-dark-900">{SITE_CONFIG.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark-950 mb-3">🕐 Working Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-dark-700">
                    <span>Sunday - Thursday</span>
                    <span className="font-semibold">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-dark-700">
                    <span>Friday - Saturday</span>
                    <span className="font-semibold">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-dark-700">
                    <span>Emergency Services</span>
                    <span className="font-semibold text-green-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

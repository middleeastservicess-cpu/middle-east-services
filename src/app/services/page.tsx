import { Metadata } from 'next';
import Link from 'next/link';
import { services, cities, SITE_CONFIG } from '@/data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `All Services — Professional Home & Business Services | ${SITE_CONFIG.name}`,
  description: 'Browse our complete range of professional services: AC repair, plumbing, electrician, pest control, deep cleaning, sofa cleaning, water tank cleaning, handyman, movers, and car towing across the Middle East.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern relative overflow-hidden">
        <div className="container-custom relative z-10 py-16 sm:py-20">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Our Professional Services
            </h1>
            <p className="text-white/80 text-lg">
              From AC repair to car towing — find the right professional for every job across 8 cities in the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.slug} className="group bg-white border border-dark-100 rounded-2xl overflow-hidden card-hover">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                </div>
                <div className="p-6">
                  <h2 className="font-heading font-bold text-xl text-dark-950 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-dark-500 text-sm mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="px-2.5 py-1 bg-dark-50 rounded-md text-xs text-dark-600 font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-end pt-4 border-t border-dark-100">
                    <Link href={`/services/${service.slug}/`} className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors flex items-center gap-1">
                      View Details
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service + City Matrix */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title text-2xl sm:text-3xl">Find Services by City</h2>
            <p className="section-subtitle mx-auto mt-3">Click on any combination to book a service in your city</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] bg-white rounded-2xl overflow-hidden shadow-sm border border-dark-100">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-heading font-semibold text-sm">Service</th>
                  {cities.map((city) => (
                    <th key={city.slug} className="px-3 py-3 text-center font-heading font-semibold text-sm">
                      {city.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={service.slug} className={index % 2 === 0 ? 'bg-white' : 'bg-dark-50'}>
                    <td className="px-4 py-3 font-medium text-dark-900 text-sm">
                      {service.icon} {service.name}
                    </td>
                    {cities.map((city) => (
                      <td key={city.slug} className="px-3 py-3 text-center">
                        <Link
                          href={`/${service.slug}-${city.slug}/`}
                          className="text-primary-600 hover:text-primary-700 font-medium text-xs hover:underline"
                        >
                          Book →
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

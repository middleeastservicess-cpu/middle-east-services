import { Metadata } from 'next';
import Link from 'next/link';
import { cities, SITE_CONFIG } from '@/data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `Cities We Serve — Professional Services Across the Middle East`,
  description: 'We provide professional home services in Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, Kuwait City, Manama & Muscat. Find trusted professionals in your city.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/cities/`,
  },
};

export default function CitiesPage() {
  return (
    <>
      <section className="bg-hero-pattern relative overflow-hidden">
        <div className="container-custom relative z-10 py-16 sm:py-20">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cities' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Cities We Serve
            </h1>
            <p className="text-white/80 text-lg">
              Professional home & business services available across 8 major cities in 5 Middle East countries.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}/`}
                className="group bg-white border border-dark-100 rounded-2xl overflow-hidden card-hover"
              >
                <div className="bg-gradient-to-br from-primary-800 to-primary-600 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h2 className="font-heading font-bold text-2xl text-white mb-1 relative z-10">
                    {city.name}
                  </h2>
                  <p className="text-white/70">{city.country}</p>
                </div>
                <div className="p-6">
                  <p className="text-dark-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {city.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-dark-400">
                      <span>👥 {city.population}</span>
                      <span>🕐 {city.timezone}</span>
                    </div>
                    <span className="text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      {city.name} Services →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

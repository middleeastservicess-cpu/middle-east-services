import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, cities, getServiceBySlug, SITE_CONFIG } from '@/data';
import Breadcrumbs from '@/components/Breadcrumbs';

interface Props {
  params: { service: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.service);
  if (!service) return {};

  return {
    title: `${service.name} — Professional ${service.name} Service Across the Middle East`,
    description: `${service.shortDescription} Available in Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, Kuwait City, Manama & Muscat. Book now!`,
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${params.service}/`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern relative overflow-hidden">
        <div className="container-custom relative z-10 py-16 sm:py-20">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: service.name }]} />
          <div className="mt-6 max-w-3xl">
            <span className="text-5xl mb-4 block">{service.icon}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              {service.name}
            </h1>
            <p className="text-white/80 text-lg">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title text-2xl sm:text-3xl mb-8">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-dark-50 rounded-xl">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Cities */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="section-title text-2xl sm:text-3xl mb-4">
            Book {service.name} in Your City
          </h2>
          <p className="section-subtitle mb-8">
            Select your city to check service availability
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${service.slug}-${city.slug}/`}
                className="group bg-white rounded-2xl p-5 border border-dark-100 card-hover text-center"
              >
                <h3 className="font-heading font-bold text-lg text-dark-950 group-hover:text-primary-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-dark-400 text-sm">{city.country}</p>
                <span className="inline-block mt-3 text-primary-600 font-semibold text-sm group-hover:underline">
                  Book {service.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title text-2xl sm:text-3xl mb-8">Other Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="group bg-white border border-dark-100 rounded-2xl p-5 text-center card-hover"
                >
                  <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">{s.icon}</span>
                  <span className="font-heading font-semibold text-dark-900 text-sm group-hover:text-primary-600 transition-colors">
                    {s.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

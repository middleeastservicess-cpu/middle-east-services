import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, services, getCityBySlug, SITE_CONFIG } from '@/data';
import Breadcrumbs from '@/components/Breadcrumbs';

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  return {
    title: `Services in ${city.name} — Professional Home Services in ${city.name}, ${city.country}`,
    description: `Book trusted professionals in ${city.name} for AC repair, plumbing, cleaning, pest control & more. Same-day service and verified experts across ${city.name}.`,
    alternates: {
      canonical: `${SITE_CONFIG.url}/cities/${params.city}/`,
    },
  };
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern relative overflow-hidden">
        <div className="container-custom relative z-10 py-16 sm:py-20">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Cities', href: '/cities/' }, { label: city.name }]} />
          <div className="mt-6 max-w-3xl">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              📍 {city.country}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 mb-4">
              Professional Services in {city.name}
            </h1>
            <p className="text-white/80 text-lg">{city.description}</p>
            <div className="flex items-center gap-4 mt-4 text-white/60 text-sm">
              <span>👥 Population: {city.population}</span>
              <span>🕐 {city.timezone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title text-2xl sm:text-3xl mb-8">
            Available Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-${city.slug}/`}
                className="group bg-white border border-dark-100 rounded-2xl p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-dark-950 mb-1 group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-dark-500 text-sm mb-3">{service.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="section-title text-2xl sm:text-3xl mb-8">Other Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/cities/${c.slug}/`}
                  className="group bg-white border border-dark-100 rounded-xl p-4 text-center card-hover"
                >
                  <h3 className="font-heading font-bold text-dark-950 group-hover:text-primary-600 transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-dark-400 text-sm">{c.country}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

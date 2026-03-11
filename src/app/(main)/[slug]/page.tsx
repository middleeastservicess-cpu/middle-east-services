import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, cities, getServiceBySlug, getCityBySlug, generateServiceCityFAQs, SITE_CONFIG } from '@/data';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

interface PageProps {
  params: { slug: string };
}

function parseSlug(slug: string): { serviceSlug: string; citySlug: string } | null {
  for (const service of services) {
    for (const city of cities) {
      if (slug === `${service.slug}-${city.slug}`) {
        return { serviceSlug: service.slug, citySlug: city.slug };
      }
    }
  }
  return null;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ slug: `${service.slug}-${city.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parseSlug(params.slug);
  if (!parsed) return {};

  const service = getServiceBySlug(parsed.serviceSlug);
  const city = getCityBySlug(parsed.citySlug);
  if (!service || !city) return {};

  const title = `${service.name} in ${city.name} — Professional ${service.name} Service`;
  const description = `Looking for trusted ${service.name.toLowerCase()} in ${city.name}? Our local experts provide high-quality ${service.name.toLowerCase()} services throughout ${city.country}. Same-day assistance available in ${city.name}. Book your service now.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/${params.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/${params.slug}/`,
      siteName: SITE_CONFIG.name,
      type: 'website',
    },
  };
}

export default function ServiceCityPage({ params }: PageProps) {
  const parsed = parseSlug(params.slug);
  if (!parsed) notFound();

  const service = getServiceBySlug(parsed.serviceSlug);
  const city = getCityBySlug(parsed.citySlug);
  if (!service || !city) notFound();

  const faqs = generateServiceCityFAQs(service, city);

  // Related services in same city
  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 5);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.name}`,
    description: `Professional ${service.name} service in ${city.name}, ${city.country}`,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      areaServed: {
        '@type': 'City',
        name: city.name,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="bg-hero-pattern relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services/' },
              { label: service.name, href: `/services/${service.slug}/` },
              { label: city.name },
            ]}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-white/90 text-sm font-medium">Available now in {city.name}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-[1.1]">
                Professional {service.name} <br />
                <span className="text-gold-400">in {city.name}</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Expert local specialists ready to handle all your {service.name.toLowerCase()} needs. 
                Guaranteed satisfaction and professional results at your doorstep.
              </p>
              <div className="flex flex-wrap gap-4 text-white/60 text-xs font-bold uppercase tracking-widest">
                <span>🛡️ Verified</span>
                <span>⚡ Same-Day</span>
                <span>✨ Guaranteed</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-2xl font-heading font-bold text-white mb-2 text-center">Request Service</h2>
                 <p className="text-white/60 text-xs text-center mb-8 uppercase tracking-widest font-bold">Fast Analysis by AI</p>
                 <ContactForm service={service.name} city={city.name} variant="compact" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - SEO HUMANIIZED (650-900 words) */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              {/* H1 Primary Keyword */}
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark-950 mb-8 leading-tight">
                {service.name} in {city.name}
              </h2>

              {/* Introduction */}
              <div className="mb-12">
                <p className="text-xl text-dark-700 leading-relaxed font-normal">
                  Living in {city.name}, you are likely very familiar with the unique challenges of keeping a household running smoothly. Whether it is a luxury apartment in a high-rise tower or a private villa, maintaining a perfectly functioning environment is essential for a stress-free lifestyle. However, {service.description.toLowerCase()} issues like {service.relatedTerms[0]} or unexpected {service.relatedTerms[1]} can occur at the most inconvenient times.
                </p>
                <div className="mt-4 text-dark-700 leading-relaxed font-normal">
                  {city.localContext} In this environment, the need for professional {service.name.toLowerCase()} in {city.name} is not just about convenience; it is about ensuring that your home remains safe, efficient, and comfortable for you and your family.
                </div>
              </div>

              {/* Reliable {Service} in {City} */}
              <h2 className="text-3xl font-heading font-bold text-dark-950 mt-12 mb-6">
                Reliable {service.name} Services in {city.name}
              </h2>
              <div className="space-y-6 text-dark-700 leading-relaxed">
                <p>
                  At {SITE_CONFIG.name}, we pride ourselves on being the go-to experts for anyone seeking professional {service.name.toLowerCase()} in {city.name}. We understand that trust is a major factor when letting a technician into your home, which is why we only work with verified, highly-skilled professionals who have extensive experience navigating the specific requirements of properties in the {city.country} region.
                </p>
                <div className="text-dark-700 leading-relaxed font-normal">
                  {service.expertiseSection}
                </div>
                <p>
                  Our primary focus is to provide high-quality service across the Middle East, with dedicated teams available throughout the region, including the United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. This wide reach allows us to bring specialized knowledge to your doorstep in {city.name}, ensuring that your home maintenance needs are handled with absolute technical proficiency and care.
                </p>
              </div>

              {/* Our {Service} Solutions */}
              <h2 className="text-3xl font-heading font-bold text-dark-950 mt-12 mb-6">
                Our {service.name} Solutions
              </h2>
              <div className="space-y-6 text-dark-700 leading-relaxed">
                <p>
                  {service.solutionsIntro} No project is too complex or too simple for our localized professionals in {city.name}. We provide a full spectrum of assistance to ensure your property remains in top condition at all times.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {service.features.map((feature, i) => (
                     <div key={i} className="flex gap-4 items-center p-5 bg-white border border-dark-100 rounded-[1.5rem] hover:border-primary-200 transition-all shadow-sm">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-600 font-bold text-lg">{i + 1}</span>
                        </div>
                        <div className="font-heading font-bold text-dark-900 leading-none capitalize">{feature}</div>
                     </div>
                  ))}
                </div>
                <div className="text-dark-700 leading-relaxed font-normal mb-8">
                  {service.technicalApproach}
                </div>

                {/* Middle Page Lead Form */}
                <div className="my-16 p-8 sm:p-12 bg-dark-900 rounded-[3rem] text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10 max-w-xl">
                    <h3 className="text-3xl font-heading font-bold mb-4">Request Your Assistance</h3>
                    <p className="text-white/60 mb-8 leading-relaxed">
                      Don't let {service.name.toLowerCase()} issues disrupt your day. Submit your details below and we will match you with a verified expert in {city.name}.
                    </p>
                    <ContactForm service={service.name} city={city.name} variant="compact" />
                    <p className="mt-6 text-[10px] text-white/40 uppercase tracking-widest font-bold text-center">
                       🛡️ Your request is analyzed by AI and sent to experts in {city.name}.
                    </p>
                  </div>
                </div>
              </div>

              {/* Common {Service} Problems in {City} */}
              <h2 className="text-3xl font-heading font-bold text-dark-950 mt-12 mb-6">
                Common {service.name} Problems in {city.name}
              </h2>
              <div className="mb-12 space-y-8">
                 <p className="text-dark-700 leading-relaxed">
                   Over the years, our technicians have encountered and resolved thousands of local issues related to {service.name.toLowerCase()}. By studying common localized challenges in {city.name}, we have developed refined troubleshooting techniques that address not just the symptoms, but the root cause of every failure.
                 </p>
                 <div className="grid grid-cols-1 gap-6">
                    {service.detailedProblems.map((prob, i) => (
                       <div key={i} className="p-8 bg-dark-50 rounded-[2rem] border border-dark-100 relative group overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/5 transition-colors"></div>
                          <h4 className="text-xl font-heading font-bold text-dark-950 mb-3">{prob.title}</h4>
                          <p className="text-dark-600 text-sm leading-relaxed relative z-10">{prob.text}</p>
                       </div>
                    ))}
                 </div>
                 <p className="text-dark-700 leading-relaxed mt-6">
                    Other frequent situations where people in {city.name} need professional help include {service.commonProblems.join(', ')}. Addressing these issues promptly is the best way to prevent long-term damage and more difficult future work.
                 </p>
              </div>

              {/* Areas We Serve in {City} */}
              <h2 className="text-3xl font-heading font-bold text-dark-950 mt-12 mb-6">
                Areas We Serve in {city.name}
              </h2>
              <p className="text-dark-700 mb-8 leading-relaxed font-normal">
                Our specialized local service teams are positioned across the entire {city.name} region, ensuring that no matter which neighborhood you are located in, a qualified professional is never far away. We serve the following districts and surrounding areas with rapid assistance:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
                {city.nearbyAreas.map((area, i) => (
                  <div key={i} className="px-5 py-4 bg-white border border-dark-100 rounded-2xl text-sm text-dark-800 font-bold shadow-sm text-center">
                    📍 {area}
                  </div>
                ))}
              </div>

              {/* Why Residents in {City} Trust Our Experts */}
              <h2 className="text-3xl font-heading font-bold text-dark-950 mt-12 mb-6">
                Why Residents in {city.name} Trust Our Experts
              </h2>
              <div className="space-y-6 text-dark-700 leading-relaxed mb-12">
                <p>
                  Trust is the most valuable commodity in the service industry, and it is something our {city.name} team works hard to earn every single day. We understand that your home is your sanctuary, and the reliability of your {service.name.toLowerCase()} systems is what keeps it running smoothly.
                </p>
                <div className="flex flex-col gap-6 bg-primary-50 p-10 rounded-[2.5rem] border-l-8 border-primary-500 shadow-xl">
                  <h3 className="text-primary-900 font-heading font-bold text-2xl">The Expert Difference</h3>
                  <p className="text-dark-800 leading-relaxed font-medium">
                    "Our technicians are not just workers; they are trained specialists who understand the intricate relationship between various property systems. We prioritize safety, professionalism, and rapid assistance above all else to ensure a seamless experience for every resident in {city.name}."
                  </p>
                </div>
                <p>
                   By choosing our professional team, you are not just getting a temporary fix. You are getting the peace of mind that comes with knowing that your home is being handled by individuals who follow international standards and local property regulations closely. From the initial inspection to the final troubleshooting report, we ensure transparency and excellence in every technical detail.
                </p>
              </div>

              {/* Frequently Asked Questions */}
              <div className="mt-16 pt-16 border-t border-dark-100">
                <FAQSection faqs={faqs} title={`Common Questions About ${service.name} in ${city.name}`} />
              </div>

              {/* Dynamic FAQ Schema for Google Snippets */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: faqs.map(faq => ({
                      '@type': 'Question',
                      name: faq.question,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer
                      }
                    }))
                  })
                }}
              />

              {/* Relational SEO - Cross-City Authority */}
              <div className="mt-20 py-12 border-t border-dark-100">
                <h2 className="text-2xl font-heading font-bold text-dark-950 mb-8">
                  Professional {service.name} in Other Major Cities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {(() => {
                    const cityIndex = cities.findIndex(c => c.slug === city.slug);
                    const list = [];
                    for(let i = 1; i <= 10; i++) {
                      list.push(cities[(cityIndex + i) % cities.length]);
                    }
                    return list.map(otherCity => (
                      <Link 
                        key={otherCity.slug} 
                        href={`/${service.slug}-${otherCity.slug}/`}
                        className="text-sm text-dark-600 hover:text-primary-600 transition-colors bg-dark-50 p-4 rounded-xl text-center font-bold border border-transparent hover:border-primary-100 shadow-sm"
                      >
                        {service.name} in {otherCity.name}
                      </Link>
                    ));
                  })()}
                </div>
              </div>

              {/* Call To Action - NO PHONE/WHATSAPP */}
              <div className="mt-12 p-10 sm:p-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 rounded-[3rem] text-center text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-all duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
                
                <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-8 relative z-10 leading-tight">Get Your {service.name} Assistance Today</h2>
                <p className="text-white/80 mb-12 max-w-3xl mx-auto relative z-10 text-xl leading-relaxed">
                  Ready to resolve your home maintenance challenges with the help of verified professionals? Our local {city.name} team is standing by to provide the high-quality service you deserve. Submit your request below to find professional help now.
                </p>
                
                <div className="relative z-10 max-w-lg mx-auto bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-3xl text-dark-900">
                   <h3 className="text-xl font-heading font-bold mb-1">Book Service Request</h3>
                   <p className="text-dark-500 text-xs mb-8 uppercase tracking-widest font-bold">Fast Response Guaranteed</p>
                   <ContactForm service={service.name} city={city.name} variant="compact" />
                </div>
                
                <div className="mt-12 flex flex-wrap items-center justify-center gap-10 text-white/50 text-xs font-bold tracking-[0.2em] uppercase relative z-10">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      24/7 Availability
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      Verified Specialists
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                      Professional Guarantee
                   </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Floating Contact Form */}
              <div className="bg-white border border-dark-200 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden" id="quote-form">
                <div className="absolute top-0 right-0 w-24 h-2 bg-gradient-to-l from-primary-600 to-transparent"></div>
                <h3 className="font-heading font-bold text-2xl text-dark-950 mb-1">Request Help</h3>
                <p className="text-dark-500 text-sm mb-8 leading-relaxed">Professional {service.name.toLowerCase()} for your home.</p>
                <ContactForm service={service.name} city={city.name} variant="compact" />
              </div>

              {/* GCC Coverage Map Context */}
              <div className="bg-dark-900 text-white rounded-[2.5rem] p-10 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                 <h3 className="font-heading font-bold text-xl mb-6 relative z-10 flex items-center gap-2">
                    🌍 Regional Presence
                 </h3>
                 <p className="text-white/60 text-sm mb-10 leading-relaxed font-medium">
                   We maintain a vast professional network across the primary Middle East markets:
                 </p>
                 <div className="space-y-4 mb-10">
                    {['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'].map(country => (
                      <div key={country} className="flex items-center justify-between text-xs font-bold bg-white/5 border border-white/10 px-5 py-3 rounded-2xl hover:bg-white/10 transition-colors">
                        <span>{country}</span>
                        <span className="text-white/40">Verified</span>
                      </div>
                    ))}
                 </div>
                 <div className="p-5 bg-white/5 border border-white/10 rounded-3xl">
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-4">Other Needs in {city.name}?</p>
                    <div className="space-y-3">
                       {relatedServices.slice(0, 3).map(rs => (
                         <Link key={rs.slug} href={`/${rs.slug}-${city.slug}/`} className="flex items-center justify-between group">
                           <span className="text-sm font-heading font-bold text-white group-hover:text-primary-400 transition-colors">{rs.name}</span>
                           <span className="text-primary-500 transform group-hover:translate-x-1 transition-transform">→</span>
                         </Link>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Service Discovery */}
              <div className="bg-dark-50 rounded-[2.5rem] p-10 border border-dark-100">
                <h3 className="font-heading font-bold text-lg text-dark-950 mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary-600 rounded-full"></span>
                  Popular Discovery
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}-${city.slug}/`}
                      className="flex items-center gap-5 p-5 bg-white border border-transparent hover:border-primary-200 rounded-[2rem] transition-all group shadow-sm"
                    >
                      <span className="text-3xl group-hover:scale-125 transition-transform duration-500 transform-gpu">{s.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Discover</span>
                        <span className="text-sm font-heading font-bold text-dark-900 leading-none group-hover:text-primary-600 transition-colors uppercase">{s.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

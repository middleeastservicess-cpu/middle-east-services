import Link from 'next/link';
import { Metadata } from 'next';
import { services, cities, testimonials, SITE_CONFIG } from '@/data';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Middle East Services — Professional Home Services Across the Middle East',
  description: 'Book trusted professionals for AC repair, plumbing, cleaning, pest control, movers & more across Dubai, Riyadh, Doha, Abu Dhabi, Jeddah, Kuwait City, Manama & Muscat.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/`,
  },
};

export default function HomePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    areaServed: cities.map(city => ({
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'Country',
        name: city.country,
      },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Services',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.shortDescription,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2847',
      bestRating: '5',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in border border-white/10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-white/90 text-sm font-medium tracking-wide">Trusted by 50,000+ customers</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8 animate-slide-up">
                Expert Home Help, 
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500">
                  Instantly Simplified.
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed mb-10 animate-slide-up animate-delay-200">
                The Middle East's premier network of verified professionals for AC repair, plumbing, deep cleaning, and specialized maintenance. 
                <span className="block mt-4 text-white font-semibold">Fast assistance. Guaranteed quality. Zero hassle.</span>
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-8 mt-12 animate-fade-in animate-delay-500">
                {[
                  { icon: '🛡️', text: 'Verified Specialists' },
                  { icon: '⚡', text: 'Same-Day Support' },
                  { icon: '💎', text: 'Premium Standards' },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-3 text-white/90">
                    <span className="text-2xl">{badge.icon}</span>
                    <span className="text-xs font-black uppercase tracking-[0.2em]">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Form */}
            <div className="relative animate-slide-up animate-delay-300">
              <div className="absolute -inset-4 bg-white/5 rounded-[3rem] blur-2xl"></div>
              <div className="relative bg-white/15 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl">
                <h2 className="text-2xl font-heading font-bold text-white mb-2">Request Service</h2>
                <p className="text-white/60 text-sm mb-8">Tell us what you need and our AI will connect you with an expert.</p>
                <ContactForm variant="compact" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section-padding bg-white" id="services-section">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="section-title">
              Professional Services at Your <span className="gradient-text">Doorstep</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              From AC repair to deep cleaning — we connect you with the best service providers in your city.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group relative bg-white border border-dark-100 rounded-2xl p-6 text-center card-hover"
                style={{ animationDelay: `${index * 50}ms` }}
                id={`service-card-${service.slug}`}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading font-semibold text-dark-900 text-sm lg:text-base group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <div className="absolute inset-0 rounded-2xl ring-2 ring-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services/" className="btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-dark-50" id="how-it-works">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              How It Works
            </span>
            <h2 className="section-title">
              Book a Service in <span className="gradient-text">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                icon: '🔍',
                title: 'Choose Your Service',
                description: 'Browse our wide range of professional services and select what you need.',
              },
              {
                step: '02',
                icon: '📋',
                title: 'Describe Your Needs',
                description: 'Tell us about your requirements and preferred time. Get a free quote instantly.',
              },
              {
                step: '03',
                icon: '🎯',
                title: 'Get It Done',
                description: 'A verified professional arrives at your doorstep and completes the job perfectly.',
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-primary-200"></div>
                )}
                <div className="relative z-10 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-dark-950 mb-2">{item.title}</h3>
                <p className="text-dark-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white" id="why-choose-us">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="section-title">The Middle East's Most <span className="gradient-text">Reliable</span> Service Network</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Verified Pros', text: 'Every technician undergoes rigorous background and skill checks.', icon: '🛡️' },
              { title: 'AI Matchmaking', text: 'Our smart system connects you with the best professional for your specific needs.', icon: '🤖' },
              { title: '24/7 Availability', text: 'Emergency support available whenever you need it most.', icon: '⏰' },
              { title: 'Service Guarantee', text: 'Quality workmanship backed by our professional satisfaction guarantee.', icon: '✨' }
            ].map((box, i) => (
              <div key={i} className="p-8 bg-dark-50 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-primary-100 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{box.icon}</div>
                <h3 className="text-xl font-heading font-bold text-dark-950 mb-3">{box.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities - Regional Hubs */}
      <section className="section-padding bg-white" id="cities-section">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold mb-4">
              Our Coverage
            </span>
            <h2 className="section-title">
              Major Service Hubs Across the <span className="gradient-text-gold">Middle East</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Providing professional support in over 60 cities across the GCC region.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {cities.filter(c => ['dubai', 'riyadh', 'doha', 'kuwait-city', 'manama', 'muscat', 'abu-dhabi', 'jeddah'].includes(c.slug)).map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}/`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 aspect-[4/3] card-hover"
                id={`city-card-${city.slug}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <h3 className="font-heading font-bold text-white text-lg lg:text-xl mb-0.5 group-hover:text-gold-300 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-white/70 text-sm">{city.country}</p>
                  <div className="flex items-center gap-2 mt-2 text-white/60 text-xs text-uppercase font-bold tracking-widest">
                    <span>Verified Presence</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Browse by Country - Major SEO Authority Section */}
          <div className="mt-20 pt-16 border-t border-dark-100">
             <h3 className="text-center font-heading font-bold text-2xl text-dark-900 mb-10">Browse Services by Country</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'].map(country => (
                   <div key={country} className="p-6 bg-dark-50 rounded-2xl border border-dark-100 hover:border-primary-200 transition-all text-center group">
                      <div className="text-xs font-bold text-dark-400 uppercase tracking-widest mb-2">Available in</div>
                      <div className="font-heading font-bold text-dark-900 group-hover:text-primary-600 transition-colors">{country}</div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-50" id="testimonials-section">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              ⭐ Customer Reviews
            </span>
            <h2 className="section-title">
              What Our Customers <span className="gradient-text">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-dark-100 card-hover"
              >
                <div className="stars mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-gold-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-dark-600 mb-4 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900 text-sm">{review.name}</p>
                    <p className="text-dark-400 text-xs">{review.service} • {review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions" 
        faqs={[
          { question: 'How do I request a service?', answer: 'Simply fill out our AI-powered form with your details and service requirements. Our system will analyze your needs and connect you with the most qualified local professional.' },
          { question: 'Is the service available same-day?', answer: 'Yes, we specialize in rapid assistance. Most urgent requests are handled within 30-60 minutes depending on your location and the service required.' },
          { question: 'Are the professionals verified?', answer: 'Absolutely. Every service provider in our network undergoes a thorough verification process, including technical assessment and background checks.' },
          { question: 'How does the AI matchmaking work?', answer: 'Our AI analyzes your specific issues, location, and urgency to find the technician with the highest success rate and closest proximity to you.' }
        ]} 
      />

      {/* CTA Section - Lead Form focused */}
      <section className="relative bg-hero-pattern overflow-hidden py-24 sm:py-32" id="cta-section">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container-custom relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
                Ready to Get Professional <span className="text-gold-400">Assistance?</span>
              </h2>
              <p className="text-white/80 text-xl leading-relaxed mb-10">
                Submit your request and our team will connect you with a professional in your city. Experience the premium standard of home services.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/20">
                {[
                  { value: '50K+', label: 'Customers' },
                  { value: '4.9★', label: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-heading font-bold text-white">{stat.value}</div>
                    <div className="text-white/60 text-sm mt-1 uppercase tracking-widest font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 shadow-3xl">
              <h3 className="text-2xl font-heading font-bold text-dark-950 mb-2">Book Service Request</h3>
              <p className="text-dark-500 text-sm mb-8 font-medium">Safe, secure and analyzed by AI for the best results.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Service+City Combinations for internal linking */}
      <section className="section-padding bg-white" id="popular-combinations">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title text-2xl sm:text-3xl">
              Popular Services by City
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {services.slice(0, 5).flatMap((service) =>
              cities.slice(0, 4).map((city) => (
                <Link
                  key={`${service.slug}-${city.slug}`}
                  href={`/${service.slug}-${city.slug}/`}
                  className="px-4 py-3 bg-dark-50 hover:bg-primary-50 rounded-xl text-sm text-dark-700 hover:text-primary-600 font-medium transition-all duration-200 text-center border border-transparent hover:border-primary-200"
                >
                  {service.name} in {city.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

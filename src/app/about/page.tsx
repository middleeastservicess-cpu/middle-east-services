import { SITE_CONFIG, cities, services } from '@/data';
import Image from 'next/image';

export const metadata = {
  title: `About Us — ${SITE_CONFIG.name} | Regional Professional Services`,
  description: `Learn how ${SITE_CONFIG.name} provides expert home and professional services across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.`,
};

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-dark-900 py-24 text-white relative overflow-hidden rounded-b-[5rem]">
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="container-custom relative z-10 text-center">
           <h1 className="text-4xl sm:text-6xl font-heading font-bold mb-6">Redefining Local Services</h1>
           <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
             Connecting the Middle East with verified, world-class professionals for every home and business need.
           </p>
         </div>
      </section>

      {/* Our Mission */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-950 mb-8 leading-tight">
                A Unified Gateway for Professional Excellence
              </h2>
              <div className="space-y-6 text-dark-700 leading-relaxed text-lg font-normal">
                <p>
                  Established with the vision of bridging the gap between high-demand property requirements and verified technical expertise, {SITE_CONFIG.name} has grown into the region's most comprehensive service portal.
                </p>
                <p>
                  We understand that finding reliable technical support in a foreign environment can be challenging. Whether you are a resident in a high-rise tower in Dubai or managing a corporate office in Riyadh, our mission is to provide you with absolute peace of mind through a single, trusted gateway.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-primary-50 p-10 rounded-[3rem] text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary-950 mb-2">{cities.length}+</div>
                  <div className="text-sm font-bold text-dark-500 uppercase tracking-widest">Cities Covered</div>
               </div>
               <div className="bg-dark-900 p-10 rounded-[3rem] text-center shadow-sm text-white mt-12">
                  <div className="text-4xl font-bold text-gold-400 mb-2">{services.length}+</div>
                  <div className="text-sm font-bold text-white/50 uppercase tracking-widest">Services Offered</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle East Presence */}
      <section className="py-24 bg-dark-50 rounded-[4rem]">
        <div className="container-custom text-center mb-16">
           <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-950">Our Regional Presence</h2>
           <p className="text-dark-600 mt-4 max-w-2xl mx-auto">
             We maintain localized professional teams across the six primary GCC markets.
           </p>
        </div>
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'].map(country => (
                <div key={country} className="flex flex-col items-center p-8 bg-white border border-dark-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                   <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-950 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">📍</div>
                   <div className="font-heading font-bold text-dark-900">{country}</div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}

import { SITE_CONFIG } from '@/data';

export const metadata = {
  title: `Terms & Conditions — ${SITE_CONFIG.name}`,
  description: `Read the terms of service and user agreement for ${SITE_CONFIG.name}.`,
};

export default function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-dark-900 py-16 text-white text-center rounded-b-[4rem]">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Terms & Conditions</h1>
          <p className="text-white/60">Effective Date: March 2024</p>
        </div>
      </section>

      <div className="container-custom py-16 lg:py-24">
        <article className="prose prose-lg max-w-4xl mx-auto text-dark-800">
          <p className="lead text-xl">
            By accessing and using the {SITE_CONFIG.name} website, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">1. Services Offered</h2>
          <p>
            {SITE_CONFIG.name} is a platform that connects customers with third-party service providers. We do not provide physical maintenance services ourselves.
          </p>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">2. User Responsibility</h2>
          <p>
            Users are responsible for providing accurate information when requesting a service. Any agreement for services is between the customer and the independent service provider.
          </p>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">3. Pricing and Payments</h2>
          <p>
            Pricing is determined by the service provider following an inspection or consultation. {SITE_CONFIG.name} does not set or guarantee prices for services.
          </p>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">4. Limitation of Liability</h2>
          <p>
            {SITE_CONFIG.name} shall not be held liable for any damages, losses, or disputes arising from the services provided by third-party contractors.
          </p>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">5. Use of Website</h2>
          <p>
            Unauthorized use of this website may give rise to a claim for damages and be a criminal offense.
          </p>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of the respective countries in which we operate (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman).
          </p>
        </article>
      </div>
    </div>
  );
}

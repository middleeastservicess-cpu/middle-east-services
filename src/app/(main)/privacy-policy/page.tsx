import { SITE_CONFIG } from '@/data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: `Privacy Policy`,
  description: `Read about how ${SITE_CONFIG.name} collects, protects, and uses your personal information.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy-policy/`,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-dark-900 py-16 text-white text-center rounded-b-[4rem]">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last Updated: March 2024</p>
        </div>
      </section>

      <div className="container-custom py-16 lg:py-24">
        <article className="prose prose-lg max-w-4xl mx-auto text-dark-800">
          <p className="lead text-xl">
            At {SITE_CONFIG.name}, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
          </p>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">1. Information We Collect</h2>
          <p>
            When you use our website to book a service or request a quote, we may collect the following information:
          </p>
          <ul>
            <li>Name and contact details (Phone number, Email)</li>
            <li>City and area of residence</li>
            <li>Information about the service you require</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">2. How We Use Your Information</h2>
          <p>
            The information we collect is used solely to:
          </p>
          <ul>
            <li>Connect you with professional service providers in your city.</li>
            <li>Improve our website and customer service experience.</li>
            <li>Communicate with you regarding your service requests.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">3. Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties. We only share relevant details with our verified service partners to facilitate the service you have requested.
          </p>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">4. Data Security</h2>
          <p>
            We implement high-level security measures to protect your data from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-heading font-bold text-dark-950 mt-10">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at {SITE_CONFIG.email}.
          </p>
        </article>
      </div>
    </div>
  );
}

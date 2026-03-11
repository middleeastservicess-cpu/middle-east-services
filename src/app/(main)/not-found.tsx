import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-dark-50">
      <div className="container-custom text-center py-20">
        <div className="text-8xl font-heading font-bold gradient-text mb-4">404</div>
        <h1 className="text-3xl font-heading font-bold text-dark-950 mb-4">Page Not Found</h1>
        <p className="text-dark-500 mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
          <Link href="/services/" className="btn-outline">
            Browse Services
          </Link>
          <Link href="/contact/" className="btn-accent">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

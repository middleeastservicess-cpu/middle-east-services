import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, SITE_CONFIG } from '@/data';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `Blog — Home Service Tips & Guides | ${SITE_CONFIG.name}`,
  description: 'Expert tips, guides, and advice on home maintenance, AC repair, pest control, cleaning, and more. Stay informed with Middle East Services blog.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog/`,
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-hero-pattern relative overflow-hidden">
        <div className="container-custom relative z-10 py-16 sm:py-20">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Our Blog
            </h1>
            <p className="text-white/80 text-lg">
              Expert tips, guides, and advice on home maintenance and professional services across the Middle East.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group bg-white border border-dark-100 rounded-2xl overflow-hidden card-hover">
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-8 relative overflow-hidden">
                  <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary-200/50 rounded-full translate-y-1/2 translate-x-1/2"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-dark-400 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="font-heading font-bold text-xl text-dark-950 mb-3 group-hover:text-primary-600 transition-colors leading-tight">
                    <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                  </h2>
                  <p className="text-dark-500 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-dark-50 rounded-md text-xs text-dark-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1"
                  >
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

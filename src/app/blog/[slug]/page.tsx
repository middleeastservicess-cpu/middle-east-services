import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, SITE_CONFIG } from '@/data';
import Breadcrumbs from '@/components/Breadcrumbs';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${SITE_CONFIG.name}`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${params.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="bg-hero-pattern relative overflow-hidden">
        <div className="container-custom relative z-10 py-16 sm:py-20">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: post.title }]} />
          <div className="mt-6 max-w-3xl">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mt-4 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark-950 prose-p:text-dark-600 prose-a:text-primary-600">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-dark-50 rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-lg text-dark-950 mb-4">Other Articles</h3>
                  <div className="space-y-4">
                    {otherPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}/`} className="block group">
                        <h4 className="font-semibold text-sm text-dark-900 group-hover:text-primary-600 transition-colors leading-snug">
                          {p.title}
                        </h4>
                        <p className="text-dark-400 text-xs mt-1">{p.category}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-lg text-dark-950 mb-2">Need This Service?</h3>
                  <p className="text-dark-500 text-sm mb-4">Get a free quote from verified professionals in your city.</p>
                  <Link href="/contact/" className="btn-primary w-full text-sm">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

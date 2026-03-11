import { MetadataRoute } from 'next';
import { services, cities, blogPosts, SITE_CONFIG } from '@/data';

// Splitting sitemaps into chunks for better crawl budget management
const BATCH_SIZE = 1000;

const allComboPages: { serviceSlug: string; citySlug: string }[] = [];
for (const service of services) {
  for (const city of cities) {
    allComboPages.push({
      serviceSlug: service.slug,
      citySlug: city.slug,
    });
  }
}

export async function generateSitemaps() {
  const numBatches = Math.ceil(allComboPages.length / BATCH_SIZE);
  const sitemaps = [];
  
  // id 0 is for root pages, id 1 to N are for combo pages
  for (let i = 0; i <= numBatches; i++) {
    sitemaps.push({ id: i });
  }
  return sitemaps;
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Root level sitemap (id: 0)
  if (id === 0) {
    const staticPages: MetadataRoute.Sitemap = [
      { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
      { url: `${baseUrl}/services/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
      { url: `${baseUrl}/cities/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
      { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
      { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ];

    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
      url: `${baseUrl}/cities/${city.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

    return [...staticPages, ...servicePages, ...cityPages, ...blogPages];
  }

  // Segment combo pages for sitemaps id: 1, 2, 3...
  const comboStartIndex = (id - 1) * BATCH_SIZE;
  const comboEndIndex = id * BATCH_SIZE;
  const comboBatch = allComboPages.slice(comboStartIndex, comboEndIndex);

  const comboSitemap: MetadataRoute.Sitemap = comboBatch.map((combo) => ({
    url: `${baseUrl}/${combo.serviceSlug}-${combo.citySlug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return comboSitemap;
}

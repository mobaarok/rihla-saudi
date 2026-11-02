import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/*/login', '/*/profile', '/*/saved', '/*/passport'] },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}

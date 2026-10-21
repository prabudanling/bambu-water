import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/company';

/**
 * robots.txt v2 — granular per-bot, sitemap eksplisit, host canonical.
 * Semua halaman (2.646+) boleh diindeks; API dilindungi.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Googlebot-News', 'Googlebot-Video'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['Bingbot', 'DuckDuckBot', 'YandexBot', 'Baiduspider'],
        allow: '/',
        disallow: ['/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Applebot-Extended'],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

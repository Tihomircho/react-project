// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://remontisofia.eu';

  return {
    rules: {
      userAgent: '*', // Важи за всички ботове (Google, Bing и т.н.)
      allow: '/',     // Позволява индексирането на целия сайт
      disallow: [
        '/api/',      // Спира ботовете да влизат в системни API папки (ако имате такива)
        '/_next/',    // Спира ботовете от вътрешните файлове на Next.js
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Посочва директния линк към вашия сайтмап
  };
}
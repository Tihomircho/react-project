import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://remontisofia.eu'; 

  return [
    // 1. НАЧАЛНА СТРАНИЦА
    {
      url: `${baseUrl}/bg`, // Променено на /bg
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      // Казваме на Google кои са другите езикови версии за Начало
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          el: `${baseUrl}/el`,
        },
      },
    },
    // 2. ГАЛЕРИЯ
    {
      url: `${baseUrl}/bg/gallery`, // Променено на /bg/gallery
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      // Другите версии за Галерия
      alternates: {
        languages: {
          en: `${baseUrl}/en/gallery`,
          el: `${baseUrl}/el/gallery`,
        },
      },
    },
    // 3. ЦЕНИ
    {
      url: `${baseUrl}/bg/ceni`, // Променено на /bg/ceni
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      // Другите версии за Цени
      alternates: {
        languages: {
          en: `${baseUrl}/en/ceni`,
          el: `${baseUrl}/el/ceni`,
        },
      },
    },
  ];
}

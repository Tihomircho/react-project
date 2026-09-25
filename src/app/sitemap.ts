import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://remontisofia.eu'; 
  const currentDate = new Date();

  return [
    // 1. НАЧАЛНА СТРАНИЦА
    {
      url: `${baseUrl}/bg`, 
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          bg: `${baseUrl}/bg`,        // ЗАДЪЛЖИТЕЛНО: Включваме основния език
          en: `${baseUrl}/en`,
          el: `${baseUrl}/el`,
          'x-default': `${baseUrl}/bg`, // Дефолтна версия за чужденци извън EN/EL
        },
      },
    },
    // 2. ГАЛЕРИЯ
    {
      url: `${baseUrl}/bg/gallery`, 
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          bg: `${baseUrl}/bg/gallery`, // ЗАДЪЛЖИТЕЛНО
          en: `${baseUrl}/en/gallery`,
          el: `${baseUrl}/el/gallery`,
          'x-default': `${baseUrl}/bg/gallery`,
        },
      },
    },
    // 3. ЦЕНИ
    {
      url: `${baseUrl}/bg/ceni`, 
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          bg: `${baseUrl}/bg/ceni`,    // ЗАДЪЛЖИТЕЛНО
          en: `${baseUrl}/en/ceni`,
          el: `${baseUrl}/el/ceni`,
          'x-default': `${baseUrl}/bg/ceni`,
        },
      },
    },
  ];
}

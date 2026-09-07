import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // Вашият точен път до routing

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Списък с вашите поддържани езици
  const locales = ['bg', 'en', 'el'];
  
  // 2. Проверяваме дали адресът вече започва с език
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 3. ДОПЪЛНЕНА ПРОВЕРКА: Изключения, които НЕ трябва да се пипат
  const isAssetOrStatic = 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.') || // Хваща файлове (напр. sitemap.xml, снимки)
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt';

  // 4. Проверяваме дали заявката не е фонова (зареждане на JSON данни от Next.js при смяна на страница)
  const isNextDataRequest = pathname.startsWith('/_next/data') || request.headers.has('x-nextjs-data');

  // 5. РЕДИРЕКТ: Само ако няма език, не е статичен файл, не е фонова заявка и не е началната страница
  if (!hasLocale && !isAssetOrStatic && !isNextDataRequest && pathname !== '/') {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/bg${pathname}`;
    
    return NextResponse.redirect(newUrl, 301);
  }

  // За всички нормални случаи и смени на езика, оставяме next-intl да управлява нещата
  return intlMiddleware(request);
}

export const config = {
  // Следим всички пътища, без системните статични папки
  matcher: ['/((?!_next/static|_next/image|assets|favicon.ico).*)']
};

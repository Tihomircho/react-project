import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; 

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. СТРИКТНО ИЗКЛЮЧЕНИЕ: Ако се търси sitemap или robots, спираме middleware-а веднага
  // Това казва на Next.js просто да зареди файла от public папката, без намеса на next-intl
  if (
    pathname === '/sitemap.xml' || 
    pathname === '/robots.txt' || 
    pathname.startsWith('/sitemap') // Хваща sitemap-0.xml и т.н., ако има такива
  ) {
    return NextResponse.next();
  }

  // 2. Списък с вашите поддържани езици
  const locales = ['bg', 'en', 'el'];
  
  // 3. Проверяваме дали адресът вече започва с език
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 4. Проверка за статични файлове
  const isAssetOrStatic = 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.');

  // 5. Проверяваме дали заявката не е фонова
  const isNextDataRequest = pathname.startsWith('/_next/data') || request.headers.has('x-nextjs-data');

  // 6. РЕДИРЕКТ: Само ако няма език, не е статичен файл, не е фонова заявка и не е началната страница
  if (!hasLocale && !isAssetOrStatic && !isNextDataRequest && pathname !== '/') {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/bg${pathname}`;
    
    return NextResponse.redirect(newUrl, 301);
  }

  // За всички останали страници, оставяме next-intl да управлява нещата
  return intlMiddleware(request);
}

export const config = {
  // Следим всички пътища, без системните статични папки
  matcher: ['/((?!_next/static|_next/image|assets|favicon.ico).*)']
};

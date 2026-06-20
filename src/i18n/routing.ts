import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['bg', 'en', 'el'], 
  defaultLocale: 'bg', 
  localeDetection: false
});
 
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);

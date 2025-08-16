import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'id', 'ms', 'vi', 'th', 'tl'],
  defaultLocale: 'en'
});
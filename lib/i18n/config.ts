import { Dictionary, getDictionary } from './dictionaries';

// Define available locales
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  localeNames: {
    en: 'English',
    es: 'Español',
  },
};

export type LocaleKey = 'en' | 'es';

export { createDictionary as getDictionary, type Dictionary } from './dictionaries/index';
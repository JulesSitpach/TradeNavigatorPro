import { createDictionary } from './dictionaries'

// Define available locales
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  // Map locales to their full names for UI display
  localeNames: {
    en: 'English',
    es: 'Español',
  },
}

// Type for translation keys
export type LocaleKey = keyof typeof i18n.localeNames

// Get locale from path
export function getLocaleFromPath(path: string): LocaleKey {
  const locale = path.split('/')[1]
  return i18n.locales.includes(locale as LocaleKey) 
    ? (locale as LocaleKey) 
    : i18n.defaultLocale as LocaleKey
}

// Create path with locale
export function createLocalePath(locale: LocaleKey, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `/${locale}${cleanPath}`
}

// Get dictionary for the current locale
export async function getDictionary(locale: LocaleKey) {
  return createDictionary(locale)
}

// Format number according to locale
export function formatNumber(
  value: number, 
  locale: LocaleKey, 
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(locale, options).format(value)
}

// Format currency according to locale
export function formatCurrency(
  value: number, 
  locale: LocaleKey, 
  currency: string = 'USD'
): string {
  return formatNumber(value, locale, {
    style: 'currency',
    currency,
  })
}

// Format date according to locale
export function formatDate(
  date: Date | string | number,
  locale: LocaleKey,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObject = typeof date === 'object' ? date : new Date(date)
  return new Intl.DateTimeFormat(locale, options).format(dateObject)
}

// Get direction (RTL/LTR) for locale
export function getLocaleDirection(locale: LocaleKey): 'ltr' | 'rtl' {
  // Currently all supported locales are LTR
  // Add RTL locales here if needed in the future
  return 'ltr'
}

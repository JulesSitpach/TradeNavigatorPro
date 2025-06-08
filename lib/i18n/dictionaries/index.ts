import type { LocaleKey } from '../config'

// Import dictionaries
import enDictionary from './en.json'
import esDictionary from './es.json'

// Define dictionary type based on the English dictionary structure
export type Dictionary = typeof enDictionary

// Dictionary cache to avoid re-importing
const dictionaries: Record<string, Dictionary> = {
  en: enDictionary,
  es: esDictionary,
}

/**
 * Creates a dictionary for the specified locale
 * @param locale - The locale to get the dictionary for
 * @returns The dictionary for the specified locale
 */
export async function createDictionary(locale: LocaleKey): Promise<Dictionary> {
  // Return the dictionary if it exists in our cache
  if (dictionaries[locale]) {
    return dictionaries[locale]
  }
  
  // Fallback to English if the requested locale isn't available
  return dictionaries.en
}

/**
 * Get a specific translation value from the dictionary
 * @param dictionary - The dictionary to get the translation from
 * @param path - The path to the translation (e.g. "common.save")
 * @param fallback - Fallback value if translation is not found
 * @returns The translation or fallback value
 */
export function getTranslation(
  dictionary: Dictionary, 
  path: string, 
  fallback: string = path
): string {
  const keys = path.split('.')
  let current: any = dictionary
  
  // Navigate through the dictionary object following the path
  for (const key of keys) {
    if (current[key] === undefined) {
      return fallback
    }
    current = current[key]
  }
  
  return typeof current === 'string' ? current : fallback
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names using clsx and tailwind-merge
 * Useful for combining Tailwind CSS classes conditionally
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as currency
 * @param value The number to format
 * @param currency The currency code (default: USD)
 * @param locale The locale to use for formatting (default: en-US)
 */
export function formatCurrency(
  value: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Format a number with commas
 * @param value The number to format
 * @param locale The locale to use for formatting (default: en-US)
 */
export function formatNumber(
  value: number,
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale).format(value)
}

/**
 * Format a percentage
 * @param value The number to format as percentage
 * @param locale The locale to use for formatting (default: en-US)
 */
export function formatPercent(
  value: number,
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100)
}

/**
 * Truncate a string to a maximum length
 * @param str The string to truncate
 * @param length The maximum length
 * @param ending The ending to append (default: "...")
 */
export function truncate(
  str: string,
  length: number,
  ending: string = "..."
): string {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  }
  return str
}

/**
 * Capitalize the first letter of a string
 * @param str The string to capitalize
 */
export function capitalize(str: string): string {
  if (!str || typeof str !== "string") return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Slugify a string (convert to lowercase, replace spaces with hyphens)
 * @param str The string to slugify
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/**
 * Debounce a function
 * @param fn The function to debounce
 * @param ms The debounce delay in milliseconds
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

/**
 * Deep merge two objects
 * @param target The target object
 * @param source The source object
 */
export function deepMerge<T extends object = object, S extends object = T>(
  target: T,
  source: S
): T & S {
  const output = { ...target } as T & S
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] })
        } else {
          output[key] = deepMerge(target[key], source[key])
        }
      } else {
        Object.assign(output, { [key]: source[key] })
      }
    })
  }
  
  return output
}

/**
 * Check if a value is an object
 * @param item The value to check
 */
export function isObject(item: any): item is object {
  return item && typeof item === "object" && !Array.isArray(item)
}

/**
 * Generate a random string
 * @param length The length of the string (default: 8)
 */
export function randomString(length: number = 8): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/**
 * Wait for a specified amount of time
 * @param ms The time to wait in milliseconds
 */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Type guard to check if a value is not null or undefined
 * @param value The value to check
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

/**
 * Safely access a nested property in an object
 * @param obj The object to access
 * @param path The path to the property (e.g. "a.b.c")
 * @param fallback The fallback value if the property doesn't exist
 */
export function getNestedValue<T, F = undefined>(
  obj: any,
  path: string,
  fallback: F = undefined as unknown as F
): T | F {
  const keys = path.split(".")
  let result = obj
  
  for (const key of keys) {
    if (result === null || result === undefined) {
      return fallback
    }
    result = result[key]
  }
  
  return (result === undefined) ? fallback : result as T
}

/**
 * Get the base URL for the app (for use in server-side Stripe logic, etc.)
 * Returns the NEXT_PUBLIC_APP_URL env variable if set, otherwise defaults to http://localhost:3000
 */
export function getURL() {
  // Prefer environment variable, fallback to localhost
  return (
    process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '') ||
    'http://localhost:3000'
  );
}

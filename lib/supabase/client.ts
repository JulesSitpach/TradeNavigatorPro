import { createBrowserClient } from '@supabase/ssr'

export type Database = {
  // Add your database types here when you have them
  // For now, we'll use a generic type
  public: {
    Tables: {
      [key: string]: {
        Row: { [key: string]: any }
        Insert: { [key: string]: any }
        Update: { [key: string]: any }
      }
    }
  }
}

export const supabaseBrowser = () => {
  // Get environment variables - these should be available in browser
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)
}

// For direct usage in components
export const createClient = () => supabaseBrowser()
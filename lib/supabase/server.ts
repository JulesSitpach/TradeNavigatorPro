import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';
import { cache } from 'react';

/**
 * Creates a Supabase client configured for server usage
 * This client should be used in server components, API routes, or server actions
 * Uses Next.js cookies() API to handle auth state
 */
export const supabaseServer = cache(() => {
  const cookieStore = cookies();
  
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // Handle cookies in read-only context during SSG
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch (error) {
            // Handle cookies in read-only context during SSG
          }
        },
      },
    }
  );
});

/**
 * Helper function to get the current session from the server client
 * Useful for auth checks in server components
 */
export async function getServerSession() {
  const supabase = supabaseServer();
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

/**
 * Helper function to get the current user from the server client
 * Useful for quick user checks in server components
 */
export async function getServerUser() {
  const session = await getServerSession();
  return session?.user || null;
}

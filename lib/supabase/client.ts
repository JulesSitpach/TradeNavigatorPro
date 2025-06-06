import { createBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

/**
 * Creates a Supabase client configured for browser usage
 * This client should be used in client components or event handlers
 */
export const supabaseBrowser = () => {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};

/**
 * Helper function to get the current user from the browser client
 * Useful for quick user checks in client components
 */
export async function getCurrentUser() {
  const supabase = supabaseBrowser();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

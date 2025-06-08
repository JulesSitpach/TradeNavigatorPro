import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { type CookieOptions } from '@supabase/auth-helpers-nextjs';

export type AuthUser = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  stripeCustomerId?: string;
  subscriptionStatus?: string;
  productLimit: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Session = {
  user: AuthUser | null;
  expires: Date;
};

/**
 * Creates a Supabase server client with cookies
 */
export const createClient = () => {
  const cookieStore = cookies();
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options });
        },
      },
    }
  );
};

/**
 * Gets the current authenticated session
 * Cached to prevent multiple calls to Supabase within the same request
 */
export const auth = cache(async (): Promise<Session | null> => {
  const supabase = createClient();
  
  try {
    const { data: { session: supabaseSession } } = await supabase.auth.getSession();
    
    if (!supabaseSession) {
      return null;
    }
    
    // Get the user from the database with additional profile information
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('id', supabaseSession.user.id)
      .single();
    
    if (!user) {
      // User exists in auth but not in the users table
      return {
        user: {
          id: supabaseSession.user.id,
          email: supabaseSession.user.email || '',
          productLimit: 10, // Default limit for users without a subscription
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        expires: new Date(supabaseSession.expires_at * 1000),
      };
    }
    
    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        stripeCustomerId: user.stripe_customer_id,
        subscriptionStatus: user.subscription_status,
        productLimit: user.product_limit || 10,
        createdAt: new Date(user.created_at),
        updatedAt: new Date(user.updated_at),
      },
      expires: new Date(supabaseSession.expires_at * 1000),
    };
  } catch (error) {
    console.error('Error getting auth session:', error);
    return null;
  }
});

/**
 * Checks if the user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await auth();
  return !!session?.user;
}

/**
 * Gets the current authenticated user
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  const session = await auth();
  return session?.user || null;
}

/**
 * Checks if the user has an active subscription
 */
export async function hasActiveSubscription(): Promise<boolean> {
  const session = await auth();
  return session?.user?.subscriptionStatus === 'active' || 
         session?.user?.subscriptionStatus === 'trialing';
}

/**
 * Gets the user's subscription tier level
 * @returns 'free', 'starter', 'professional', or 'business'
 */
export async function getSubscriptionTier(): Promise<string> {
  const session = await auth();
  
  if (!session?.user) {
    return 'free';
  }
  
  if (!hasActiveSubscription()) {
    return 'free';
  }
  
  // Determine tier based on product limit
  const limit = session.user.productLimit;
  
  if (limit === Infinity || limit > 10000) {
    return 'business';
  } else if (limit >= 1000) {
    return 'professional';
  } else if (limit >= 100) {
    return 'starter';
  } else {
    return 'free';
  }
}

export default {
  auth,
  isAuthenticated,
  getCurrentUser,
  hasActiveSubscription,
  getSubscriptionTier,
};

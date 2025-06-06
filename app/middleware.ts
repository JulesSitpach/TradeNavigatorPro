import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

export async function middleware(req: NextRequest) {
  // Create a Supabase client configured to use cookies
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Get the pathname from the URL
  const { pathname } = req.nextUrl;

  // Define public routes that don't require authentication
  const isPublicRoute = 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/(auth)') ||
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/reset-password' ||
    pathname === '/verification' ||
    pathname === '/';

  // Handle authentication logic
  if (!session && !isPublicRoute) {
    // If the user is not signed in and the route is protected,
    // redirect them to the login page
    const redirectUrl = new URL('/login', req.url);
    
    // Add the original URL as a query parameter to redirect back after login
    redirectUrl.searchParams.set('redirectedFrom', pathname);
    
    return NextResponse.redirect(redirectUrl);
  }

  // If the user is signed in and trying to access auth pages, redirect to dashboard
  if (session && (pathname === '/login' || pathname === '/signup' || pathname === '/reset-password')) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Continue with the request if authentication checks pass
  return res;
}

// Configure which routes this middleware will run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/request'
import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirect to your default locale
  redirect('/en')
}
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = ['/en', '/es', '/fr'].every(
    (locale) => !pathname.startsWith(`${locale}/`) && pathname !== locale
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/en${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
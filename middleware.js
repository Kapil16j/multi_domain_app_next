import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Middleware executed for:', request.nextUrl.pathname);

  const host = request.headers.get('host'); // Get the domain name
  const currentPath = request.nextUrl.pathname;

  // Domain-specific routing logic for re-writing URLs
  if (host === 'multi-domain-app-next.vercel.app' && currentPath === '/') {
    console.log("Rewriting to /university");
    return NextResponse.rewrite(new URL('/university', request.nextUrl));
  } else if (host === 'multi-domain-app-next-kapils-projects-9c8b1734.vercel.app' && currentPath === '/') {
    console.log("Rewriting to /colleges");
    return NextResponse.rewrite(new URL('/colleges', request.nextUrl));
  } else if (host === 'multi-domain-app-next-kwkfxmvw8-kapils-projects-9c8b1734.vercel.app' && currentPath === '/') {
    console.log("Rewriting to /colleges");
    return NextResponse.rewrite(new URL('/colleges', request.nextUrl));
  }

  console.log('No rewrite, allowing request to proceed.');
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/:path*'], // Match all routes
};

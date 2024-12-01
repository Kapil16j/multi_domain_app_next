import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Middleware executed for:', request.nextUrl.pathname);

  const url = request.nextUrl.clone();
  const host = request.headers.get('host'); // Get the domain name
  const port = url.port || '80';  // Default to port 80 if port is not available
  console.log("url????", url, port, host);

  // Define domain-specific routing logic
  // if (port === '3000' ) {
  //   console.log("Redirecting to /university");
  //   return NextResponse.redirect(new URL('/university', request.nextUrl));
  // }

  // if (port === '3001') {
  //   console.log("Redirecting to /colleges");
  //   return NextResponse.redirect(new URL('/colleges', request.nextUrl));
  // }

  console.log('No redirection, allowing request to proceed.');
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/:path*'], // Match all routes
};

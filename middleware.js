// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   console.log('Middleware executed for:', request.nextUrl.pathname);

//   const host = request.headers.get('host'); // Get the domain name
//   const currentPath = request.nextUrl.pathname;

//   // Domain-specific routing logic for re-writing URLs
//   if (host === 'multi-domain-app-next.vercel.app' && currentPath === '/') {
//     console.log("Rewriting to /university");
//     return NextResponse.rewrite(new URL('/university', request.nextUrl));
//   } else if (host === 'multi-domain-app-next-kapils-projects-9c8b1734.vercel.app' && currentPath === '/') {
//     console.log("Rewriting to /colleges");
//     return NextResponse.rewrite(new URL('/colleges', request.nextUrl));
//   } else if (host === 'multi-domain-app-next-kwkfxmvw8-kapils-projects-9c8b1734.vercel.app' && currentPath === '/') {
//     console.log("Rewriting to /colleges");
//     return NextResponse.rewrite(new URL('/colleges', request.nextUrl));
//   }

//   console.log('No rewrite, allowing request to proceed.');
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/', '/:path*'], // Match all routes
// };

import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Middleware executed for:', request.nextUrl.pathname);

  const host = request.headers.get('host'); // Get the domain name
  const currentPath = request.nextUrl.pathname;

  // Define domain-to-path mappings
  const domainToPathMap = {
    'multi-domain-app-next.vercel.app': '/university',
    'multi-domain-app-next-kapils-projects-9c8b1734.vercel.app': '/colleges',
    'multi-domain-app-next-kwkfxmvw8-kapils-projects-9c8b1734.vercel.app': '/colleges',
  };

  // Allow localhost to access any route
  if (host.startsWith('localhost')) {
    console.log('Allowing localhost to proceed.');
    return NextResponse.next();
  }

  // Verify if the requested host matches the path
  const expectedPath = domainToPathMap[host];
  if (expectedPath) {
    if (currentPath === '/' || currentPath.startsWith(expectedPath)) {
      // Rewrite to the expected path if at root
      if (currentPath === '/') {
        console.log(`Rewriting to ${expectedPath}`);
        return NextResponse.rewrite(new URL(expectedPath, request.nextUrl));
      }
      console.log('Request matches allowed domain and path, proceeding.');
      return NextResponse.next();
    } else {
      // Block access to disallowed paths
      console.log('Access denied for this domain and path combination.');
      return new NextResponse('Access Denied', { status: 403 });
    }
  }

  // Block access for unknown domains
  console.log('Access denied for unknown domain.');
  return new NextResponse('Access Denied', { status: 403 });
}

export const config = {
  matcher: ['/', '/:path*'], // Match all routes
};


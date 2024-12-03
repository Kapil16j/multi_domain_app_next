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




// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   console.log('Middleware executed for:', request.nextUrl.pathname);

//   const host = request.headers.get('host'); // Get the domain name
//   const currentPath = request.nextUrl.pathname;

//   // Define domain-to-path mappings
//   const domainToPathMap = {
//     'multi-domain-app-next.vercel.app': '/university',
//     'multi-domain-app-next-kapils-projects-9c8b1734.vercel.app': '/colleges',
//     'multi-domain-app-next-kwkfxmvw8-kapils-projects-9c8b1734.vercel.app': '/colleges',
//   };

//   // Allow localhost to access any route
//   if (host.startsWith('localhost')) {
//     console.log('Allowing localhost to proceed.');
//     return NextResponse.next();
//   }

//   // Verify if the requested host matches the path
//   const expectedPath = domainToPathMap[host];
//   if (expectedPath) {
//     if (currentPath === '/' || currentPath.startsWith(expectedPath)) {
//       // Rewrite to the expected path if at root
//       if (currentPath === '/') {
//         console.log(`Rewriting to ${expectedPath}`);
//         return NextResponse.rewrite(new URL(expectedPath, request.nextUrl));
//       }
//       console.log('Request matches allowed domain and path, proceeding.');
//       return NextResponse.next();
//     } else {
//       // Block access to disallowed paths
//       console.log('Access denied for this domain and path combination.');
//       return new NextResponse('Access Denied', { status: 403 });
//     }
//   }

//   // Block access for unknown domains
//   console.log('Access denied for unknown domain.');
//   return new NextResponse('Access Denied', { status: 403 });
// }

// export const config = {
//   matcher: ['/', '/:path*'], // Match all routes
// };

// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   console.log('Middleware executed for:', request.nextUrl.pathname);

//   const host = request.headers.get('host'); // Get the domain name
//   const currentPath = request.nextUrl.pathname;

//   console.log("currentPath???",currentPath)

//   // Define domain-to-path mappings
//   const domainToPathMap = {
//     'multi-domain-app-next.vercel.app': '/university',
//     'multi-domain-app-next-kapils-projects-9c8b1734.vercel.app': '/colleges',
//     'multi-domain-app-next-git-master-kapils-projects-9c8b1734.vercel.app': '/',
//   };

//   // Exclude paths that shouldn't be restricted (e.g., API or other special folders)
//   if (currentPath.startsWith('/api') || currentPath.startsWith('/static') || currentPath.startsWith('/_next')) {
//     console.log('Skipping middleware for API or special folders.');
//     return NextResponse.next();
//   }

//   // Allow localhost to access any route
//   if (host.startsWith('localhost')) {
//     console.log('Allowing localhost to proceed.');
//     return NextResponse.next();
//   }

//   // Verify if the requested host matches the path
//   const expectedBasePath = domainToPathMap[host];
//   if (expectedBasePath) {
//     // Allow access to paths that start with the expected base path
//     if (currentPath === '/' || currentPath.startsWith(expectedBasePath)) {
//       // Rewrite to the expected path if at root
//       if (currentPath === '/') {
//         console.log(`Rewriting to ${expectedBasePath}`);
//         return NextResponse.rewrite(new URL(expectedBasePath, request.nextUrl));
//       }
//       console.log('Request matches allowed domain and path, proceeding.');
//       return NextResponse.next();
//     } else {
//       // Block access to disallowed paths
//       console.log('Access denied for this domain and path combination.');
//       return new NextResponse('Access Denied', { status: 403 });
//     }
//   }

//   // Block access for unknown domains
//   console.log('Access denied for unknown domain.');
//   return new NextResponse('Access Denied', { status: 403 });
// }

// export const config = {
//   matcher: ['/', '/:path*'], // Match all routes
// };

import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host') || '';
  const currentPath = request.nextUrl.pathname;

  console.log('Middleware executed for:', currentPath);
  console.log('Host:', host);

  // Define domain-to-path mappings
  const domainToPathMap = {
    'multi-domain-app-next.vercel.app': '/abscollege',
    'multi-domain-app-next-kapils-projects-9c8b1734.vercel.app': '/ybscollege',
    'multi-domain-app-next-git-master-kapils-projects-9c8b1734.vercel.app': '/',
  };

  // Check if the request is for API, Next.js-specific paths, or static files
  if (
    currentPath.startsWith('/api') ||
    currentPath.startsWith('/_next') ||
    currentPath === '/favicon.ico' ||
    currentPath === '/robots.txt' ||
    isStaticFile(currentPath)
  ) {
    console.log('Skipping middleware for special paths or static files.');
    return NextResponse.next();
  }

  // Allow localhost
  if (host.startsWith('localhost')) {
    console.log('Allowing localhost to proceed.');
    return NextResponse.next();
  }

  // Match domain with expected base path
  const expectedBasePath = domainToPathMap[host];
  if (expectedBasePath) {
    if (currentPath === '/') {
      console.log(`Rewriting root path to ${expectedBasePath}`);
      return NextResponse.rewrite(new URL(expectedBasePath, request.nextUrl));
    }

    if (currentPath.startsWith(expectedBasePath)) {
      console.log('Request matches allowed domain and path, proceeding.');
      return NextResponse.next();
    }

    console.log('Access denied for this domain and path combination.');
    return NextResponse.rewrite(new URL('/403', request.nextUrl)); // Redirect to a custom 403 page
  }

  // Block access for unknown domains
  console.log('Access denied for unknown domain.');
  return NextResponse.rewrite(new URL('/403', request.nextUrl));
}

// Helper function to check for static files
function isStaticFile(path) {
  console.log("path????",path)
  const staticExtensions = ['.svg', '.jpg', '.jpeg', '.png', '.gif', '.css', '.js', '.json', '.woff', '.woff2', '.ttf'];
  console.log("static????",staticExtensions.some(ext => path.endsWith(ext)))
  return staticExtensions.some(ext => path.endsWith(ext));
}

export const config = {
  matcher: ['/', '/:path*'], // Match all routes
};






import { NextResponse } from 'next/server';
import withAuth, { NextRequestWithAuth } from 'next-auth/middleware';

const rewriteToNotFoundRoute = (req: NextRequestWithAuth) => {
  const url = req.nextUrl.clone();
  url.pathname = '/not-found';
  return NextResponse.rewrite(url);
};

export default withAuth(
  function proxy(req) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith('/settings')) {
      if (!req.nextauth.token) {
        return rewriteToNotFoundRoute(req);
      }
    }

    if (pathname.startsWith('/admin')) {
      if (req.nextauth.token?.role !== 'admin') {
        return rewriteToNotFoundRoute(req);
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true
    }
  }
);

export const config = {
  matcher: ['/admin/:path*', '/settings/:path*']
};

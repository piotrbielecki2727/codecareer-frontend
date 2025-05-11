import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { Role } from '@/types';
import { ROUTES } from './routes';
import { roleRoutes } from './routes';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;
  const currentPath = req.nextUrl.pathname;
  const isAuthPage = currentPath.startsWith('/auth');

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL(ROUTES.GENERAL.HOME, req.url));
  }

  if (isPublicRoute(currentPath)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(
      new URL(ROUTES.GENERAL.AUTH_EMPLOYER_SIGN_IN, req.url)
    );
  }

  try {
    const decoded = jwtDecode(token) as { role: Role };
    const userRole = decoded.role;

    if (!hasAccessToRoute(userRole, currentPath)) {
      return NextResponse.redirect(new URL(ROUTES.GENERAL.HOME, req.url));
    }

    return NextResponse.next();
  } catch (_) {
    return NextResponse.redirect(
      new URL(ROUTES.GENERAL.AUTH_EMPLOYER_SIGN_IN, req.url)
    );
  }
}

export const config = {
  matcher: [
    '/auth/:path*',
    '/employer/:path*',
    '/candidate/:path*',
    '/admin/:path*',

    '/((?!api|_next/static|_next/image|favicon.ico|assets|locales).*)',
  ],
};

function isPublicRoute(path: string): boolean {
  const publicRoutes = [
    ROUTES.GENERAL.HOME,
    ROUTES.GENERAL.AUTH_CANDIDATE_SIGN_IN,
    ROUTES.GENERAL.AUTH_CANDIDATE_SIGN_UP,
    ROUTES.GENERAL.AUTH_EMPLOYER_SIGN_IN,
    ROUTES.GENERAL.AUTH_EMPLOYER_SIGN_UP,
  ];

  // Static assets and system routes
  const systemRoutes = [
    '/favicon.ico',
    '/_next',
    '/api/public',
    '/images',
    '/assets',
  ];

  return (
    publicRoutes.includes(path) ||
    systemRoutes.some((route) => path.startsWith(route))
  );
}

function hasAccessToRoute(role: Role, path: string): boolean {
  return roleRoutes[role].some((allowedPath) => {
    if (allowedPath === path) return true;

    if (path.startsWith(`${allowedPath}/`)) return true;

    return false;
  });
}

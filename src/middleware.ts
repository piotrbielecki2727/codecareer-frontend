import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;

  const isAuthPage = req.nextUrl.pathname.startsWith('/auth');

  console.log(token, isAuthPage, req.nextUrl.pathname);

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (token && req.nextUrl.pathname.startsWith('/dashboard')) {
    try {
      const decoded = jwtDecode(token) as { role: string };

      if (
        req.nextUrl.pathname.startsWith('/dashboard/candidate') &&
        decoded.role !== 'CANDIDATE'
      ) {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
      }

      if (
        req.nextUrl.pathname.startsWith('/dashboard/employer') &&
        decoded.role !== 'EMPLOYER'
      ) {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
      }
    } catch {
      return NextResponse.redirect(new URL('/auth/employer/signin', req.url));
    }
  }

  return NextResponse.next();
}

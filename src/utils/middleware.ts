import { NextResponse, NextRequest } from 'next/server';
import { verifyToken } from './auth';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token');
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith('/protected') && !verifyToken(token)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

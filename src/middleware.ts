// src/middleware.ts - Versión simplificada sin JWT
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Solo proteger rutas admin (excepto login)
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    
    const token = request.cookies.get('auth-token')?.value;
    
    // Verificación básica - solo verificar que existe el token
    // La verificación completa se hará en los componentes
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};
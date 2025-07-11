// src/app/api/auth/logout/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logout exitoso' });
  
  // Eliminar cookie
  response.cookies.delete('auth-token');
  
  return response;
}

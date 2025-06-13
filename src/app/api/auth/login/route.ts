// src/app/api/auth/login/route.ts - Actualizada para usar Prisma
import { NextRequest, NextResponse } from 'next/server';
import { findUserByEmail, verifyPassword, createToken, createInitialAdmin } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Crear admin inicial si no existe
    await createInitialAdmin();
    
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }
    
    // Buscar usuario
    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }
    
    // Verificar contraseña
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }
    
    // Crear token
    const token = createToken(user.id, user.email);
    
    // Crear respuesta con cookie
    const response = NextResponse.json({
      message: 'Login exitoso',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
    
    // Configurar cookie httpOnly
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 días
      path: '/'
    });
    
    console.log('✅ Login successful for user:', user.email);
    
    return response;
  } catch (error) {
    console.error('❌ Login error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

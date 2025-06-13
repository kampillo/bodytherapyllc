// src/app/api/blog/[id]/route.ts - Arreglado para Next.js 15
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getPostById, updatePost, deletePost } from '@/lib/blog';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

// Función de verificación local para evitar importaciones
function verifyTokenLocal(token: string): { userId: number; email: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
    return decoded;
  } catch (error) {
    return null;
  }
}

// Definir el tipo correcto para los parámetros
interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET - obtener post por ID
export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params;
    const postId = parseInt(id);
    
    if (isNaN(postId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    const post = getPostById(postId);
    if (!post) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error getting post:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT - actualizar post
export async function PUT(
  request: NextRequest,
  context: RouteParams
) {
  try {
    // Verificar autenticación
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyTokenLocal(token)) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }
    
    const { id } = await context.params;
    const postId = parseInt(id);
    
    if (isNaN(postId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const updatedPost = updatePost(postId, body);
    
    if (!updatedPost) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ post: updatedPost });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE - eliminar post
export async function DELETE(
  request: NextRequest,
  context: RouteParams
) {
  try {
    // Verificar autenticación
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyTokenLocal(token)) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }
    
    const { id } = await context.params;
    const postId = parseInt(id);
    
    if (isNaN(postId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    const deleted = deletePost(postId);
    
    if (!deleted) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Post eliminado exitosamente' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

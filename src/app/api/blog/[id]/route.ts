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
    
    const post = await getPostById(postId);
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
      console.error('❌ No autorizado - Token inválido o ausente');
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }
    
    const { id } = await context.params;
    const postId = parseInt(id);
    
    console.log('🔄 Actualizando post:', { postId });
    
    if (isNaN(postId)) {
      console.error('❌ ID inválido:', id);
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }

    // Verificar que el post existe antes de intentar actualizarlo
    const existingPost = await getPostById(postId);
    if (!existingPost) {
      console.error('❌ Post no encontrado:', postId);
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      );
    }
    
    const body = await request.json();
    console.log('📝 Datos recibidos:', body);
    
    // Validar datos requeridos
    if (!body.title || !body.content) {
      console.error('❌ Datos incompletos:', body);
      return NextResponse.json(
        { error: 'Título y contenido son requeridos' },
        { status: 400 }
      );
    }

    try {
      const updatedPost = await updatePost(postId, body);
      if (!updatedPost) {
        console.error('❌ Error: El post no se pudo actualizar');
        return NextResponse.json(
          { error: 'No se pudo actualizar el post' },
          { status: 500 }
        );
      }
      console.log('✅ Post actualizado exitosamente:', updatedPost.id);
      return NextResponse.json({ post: updatedPost });
    } catch (error) {
      console.error('❌ Error al actualizar el post:', error);
      if (error instanceof Error) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { error: 'Error al actualizar el post' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ Error en la ruta PUT:', error);
    if (error instanceof Error) {
      console.error('Detalles del error:', error.message);
    }
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
    
    const deleted = await deletePost(postId);
    
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

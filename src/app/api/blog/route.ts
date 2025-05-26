// src/app/api/blog/route.ts - Actualizada para evitar importaciones mixtas
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getAllPosts, getPublishedPosts, createPost } from '@/lib/blog';

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

// GET - obtener posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const admin = searchParams.get('admin') === 'true';
    
    if (admin) {
      // Verificar autenticación para admin
      const token = request.cookies.get('auth-token')?.value;
      if (!token || !verifyTokenLocal(token)) {
        return NextResponse.json(
          { error: 'No autorizado' },
          { status: 401 }
        );
      }
      
      const posts = getAllPosts();
      return NextResponse.json({ posts });
    } else {
      // Posts públicos
      const posts = getPublishedPosts();
      return NextResponse.json({ posts });
    }
  } catch (error) {
    console.error('Error getting posts:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST - crear nuevo post
export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyTokenLocal(token)) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { title, excerpt, content, author, category, image, published } = body;
    
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Título y contenido son requeridos' },
        { status: 400 }
      );
    }
    
    const newPost = createPost({
      title,
      slug: '', // Se generará automáticamente
      excerpt: excerpt || '',
      content,
      author: author || 'Administrador',
      category: category || 'General',
      image: image || '/images/blog/default.jpg',
      published: published || false
    });
    
    return NextResponse.json({ post: newPost }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
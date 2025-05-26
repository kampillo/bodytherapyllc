// src/app/api/blog/route.ts - API verificada para mostrar posts públicos
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getAllPosts, getPublishedPosts } from '@/lib/blog';

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
    
    console.log('📡 API Blog - Solicitud recibida:', { admin });
    
    if (admin) {
      // Verificar autenticación para admin
      const token = request.cookies.get('auth-token')?.value;
      if (!token || !verifyTokenLocal(token)) {
        console.log('❌ API Blog - Admin no autorizado');
        return NextResponse.json(
          { error: 'No autorizado' },
          { status: 401 }
        );
      }
      
      const posts = getAllPosts();
      console.log('✅ API Blog - Posts admin devueltos:', posts.length);
      return NextResponse.json({ posts });
    } else {
      // Posts públicos (solo publicados)
      const posts = getPublishedPosts();
      console.log('✅ API Blog - Posts públicos devueltos:', posts.length);
      console.log('📝 Posts publicados:', posts.map(p => ({ 
        id: p.id, 
        title: p.title, 
        published: p.published,
        slug: p.slug,
        image: p.image 
      })));
      
      return NextResponse.json({ posts });
    }
  } catch (error) {
    console.error('❌ API Blog - Error:', error);
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
    
    console.log('📝 API Blog - Creando nuevo post:', { 
      title, 
      published, 
      image: image?.substring(0, 50) + '...' 
    });
    
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Título y contenido son requeridos' },
        { status: 400 }
      );
    }
    
    const { createPost } = await import('@/lib/blog');
    
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
    
    console.log('✅ API Blog - Post creado:', { 
      id: newPost.id, 
      title: newPost.title, 
      published: newPost.published,
      slug: newPost.slug
    });
    
    return NextResponse.json({ post: newPost }, { status: 201 });
  } catch (error) {
    console.error('❌ API Blog - Error creando post:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
// src/app/api/blog/route.ts - API actualizada para usar Prisma
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { getAllPosts, getPublishedPosts, createPost } from '@/lib/blog';

// GET - obtener posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const admin = searchParams.get('admin') === 'true';
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    console.log('📡 API Blog - Solicitud recibida:', { admin, category, search });
    
    if (admin) {
      // Verificar autenticación para admin
      const token = request.cookies.get('auth-token')?.value;
      if (!token || !verifyToken(token)) {
        console.log('❌ API Blog - Admin no autorizado');
        return NextResponse.json(
          { error: 'No autorizado' },
          { status: 401 }
        );
      }
      
      const posts = await getAllPosts();
      console.log('✅ API Blog - Posts admin devueltos:', posts.length);
      return NextResponse.json({ posts });
    } else {
      // Posts públicos (solo publicados)
      let posts = await getPublishedPosts();
      
      // Filtrar por categoría si se especifica
      if (category) {
        posts = posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
      }
      
      // Búsqueda simple si se especifica
      if (search) {
        const searchLower = search.toLowerCase();
        posts = posts.filter(post =>
          post.title.toLowerCase().includes(searchLower) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(searchLower)) ||  // ← Verificación de null
          post.content.toLowerCase().includes(searchLower)
        );
      }
      
      console.log('✅ API Blog - Posts públicos devueltos:', posts.length);
      console.log('📝 Posts publicados:', posts.map(p => ({ 
        id: p.id, 
        title: p.title, 
        published: p.published,
        slug: p.slug,
        image: p.image,
        author: p.author.name
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
    const decoded = verifyToken(token || '');
    
    if (!decoded) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { title, excerpt, content, category, image, published } = body;
    
    console.log('📝 API Blog - Creando nuevo post:', { 
      title, 
      published, 
      category,
      authorId: decoded.userId,
      image: image?.substring(0, 50) + '...' 
    });
    
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Título y contenido son requeridos' },
        { status: 400 }
      );
    }
    
    const newPost = await createPost({
      title,
      excerpt: excerpt || '',
      content,
      category: category || 'General',
      image: image || '/images/blog/default.jpg',
      published: published || false,
      authorId: decoded.userId
    });
    
    if (!newPost) {
      return NextResponse.json(
        { error: 'Error al crear el post' },
        { status: 500 }
      );
    }
    
    console.log('✅ API Blog - Post creado:', { 
      id: newPost.id, 
      title: newPost.title, 
      published: newPost.published,
      slug: newPost.slug,
      author: newPost.author.name
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
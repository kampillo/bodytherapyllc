// src/lib/blog.ts - Actualizada para usar Prisma
import { prisma } from './prisma';
import type { Post, User } from '@prisma/client';

// Tipo para post con autor incluido
export type PostWithAuthor = Post & {
  author: Pick<User, 'id' | 'name' | 'email'>;
};

export type BlogPost = PostWithAuthor;
// Tipo para crear post (sin campos autogenerados)
export type CreatePostData = {
  title: string;
  excerpt?: string;
  content: string;
  image?: string;
  category?: string;
  published?: boolean;
  authorId: number;
};

// Tipo para actualizar post
export type UpdatePostData = Partial<Omit<CreatePostData, 'authorId'>>;

// Crear slug desde título
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Remover guiones múltiples
    .trim();
}

// Generar slug único
async function generateUniqueSlug(title: string, excludeId?: number): Promise<string> {
  let baseSlug = createSlug(title);
  let finalSlug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await prisma.post.findUnique({
      where: { slug: finalSlug }
    });

    // Si no existe o es el mismo post que estamos actualizando
    if (!existing || (excludeId && existing.id === excludeId)) {
      break;
    }

    finalSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  return finalSlug;
}

// Obtener todos los posts (admin) con autor
export async function getAllPosts(): Promise<PostWithAuthor[]> {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

// Obtener posts publicados (público) con autor
export async function getPublishedPosts(): Promise<PostWithAuthor[]> {
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return posts;
  } catch (error) {
    console.error('Error getting published posts:', error);
    return [];
  }
}

// Obtener post por ID con autor
export async function getPostById(id: number): Promise<PostWithAuthor | null> {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    });

    return post;
  } catch (error) {
    console.error('Error getting post by ID:', error);
    return null;
  }
}

// Obtener post por slug con autor
export async function getPostBySlug(slug: string): Promise<PostWithAuthor | null> {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    });

    return post;
  } catch (error) {
    console.error('Error getting post by slug:', error);
    return null;
  }
}

// Crear nuevo post
export async function createPost(postData: CreatePostData): Promise<PostWithAuthor | null> {
  try {
    const slug = await generateUniqueSlug(postData.title);

    const post = await prisma.post.create({
      data: {
        title: postData.title,
        slug,
        excerpt: postData.excerpt || '',
        content: postData.content,
        image: postData.image || '/images/blog/default.jpg',
        category: postData.category || 'General',
        published: postData.published || false,
        authorId: postData.authorId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    });

    return post;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
}

// Actualizar post
export async function updatePost(id: number, updates: UpdatePostData): Promise<PostWithAuthor | null> {
  try {
    console.log('🔄 Actualizando post:', { id, updates });

    // Verificar si el post existe
    const existingPost = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    });

    if (!existingPost) {
      console.error('❌ Post no encontrado:', id);
      return null;
    }

    console.log('✅ Post encontrado:', existingPost);

    // Validar datos requeridos
    if (!updates.title || !updates.content) {
      console.error('❌ Datos incompletos:', updates);
      throw new Error('Título y contenido son requeridos');
    }

    // Si se actualiza el título, generar nuevo slug
    let slug;
    if (updates.title) {
      slug = await generateUniqueSlug(updates.title, id);
    }

    // Preparar datos de actualización
    const updateData = {
      title: updates.title,
      content: updates.content,
      excerpt: updates.excerpt ?? existingPost.excerpt,
      image: updates.image ?? existingPost.image,
      category: updates.category ?? existingPost.category,
      published: updates.published ?? existingPost.published,
      ...(slug && { slug })
    };

    console.log('📝 Datos de actualización finales:', updateData);

    try {
      const post = await prisma.post.update({
        where: { id },
        data: updateData,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            }
          }
        }
      });

      console.log('✅ Post actualizado:', post);
      return post;
    } catch (prismaError) {
      console.error('❌ Error de Prisma:', prismaError);
      if (prismaError instanceof Error) {
        throw new Error(`Error de base de datos: ${prismaError.message}`);
      }
      throw prismaError;
    }
  } catch (error) {
    console.error('❌ Error updating post:', error);
    if (error instanceof Error) {
      console.error('Detalles del error:', error.message);
    }
    throw error; // Re-lanzar el error para manejarlo en la ruta de la API
  }
}

// Eliminar post
export async function deletePost(id: number): Promise<boolean> {
  try {
    await prisma.post.delete({
      where: { id }
    });
    return true;
  } catch (error) {
    console.error('Error deleting post:', error);
    return false;
  }
}

// Obtener posts por categoría
export async function getPostsByCategory(category: string, publishedOnly: boolean = true): Promise<PostWithAuthor[]> {
  try {
    const whereCondition: any = { category };
    if (publishedOnly) {
      whereCondition.published = true;
    }

    const posts = await prisma.post.findMany({
      where: whereCondition,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return posts;
  } catch (error) {
    console.error('Error getting posts by category:', error);
    return [];
  }
}

// Obtener posts relacionados (misma categoría, excluyendo el actual)
export async function getRelatedPosts(postId: number, category: string, limit: number = 3): Promise<PostWithAuthor[]> {
  try {
    const posts = await prisma.post.findMany({
      where: {
        category,
        published: true,
        id: {
          not: postId
        }
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: limit
    });

    return posts;
  } catch (error) {
    console.error('Error getting related posts:', error);
    return [];
  }
}

// Buscar posts por texto
export async function searchPosts(query: string, publishedOnly: boolean = true): Promise<PostWithAuthor[]> {
  try {
    const whereCondition: any = {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { excerpt: { contains: query, mode: 'insensitive' } },
        { content: { contains: query, mode: 'insensitive' } },
      ]
    };

    if (publishedOnly) {
      whereCondition.published = true;
    }

    const posts = await prisma.post.findMany({
      where: whereCondition,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return posts;
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}

// Obtener categorías disponibles
export async function getCategories(): Promise<string[]> {
  try {
    const categories = await prisma.post.findMany({
      select: {
        category: true
      },
      distinct: ['category'],
      orderBy: {
        category: 'asc'
      }
    });

    return categories.map(c => c.category);
  } catch (error) {
    console.error('Error getting categories:', error);
    return [];
  }
}

// Obtener estadísticas del blog
export async function getBlogStats() {
  try {
    const [totalPosts, publishedPosts, draftPosts, categories] = await Promise.all([
      prisma.post.count(),
      prisma.post.count({ where: { published: true } }),
      prisma.post.count({ where: { published: false } }),
      getCategories()
    ]);

    return {
      totalPosts,
      publishedPosts,
      draftPosts,
      categoriesCount: categories.length,
      categories
    };
  } catch (error) {
    console.error('Error getting blog stats:', error);
    return {
      totalPosts: 0,
      publishedPosts: 0,
      draftPosts: 0,
      categoriesCount: 0,
      categories: []
    };
  }
}

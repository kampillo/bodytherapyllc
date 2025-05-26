// src/lib/blog.ts
import fs from 'fs';
import path from 'path';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

interface BlogData {
  posts: BlogPost[];
}

const blogPath = path.join(process.cwd(), 'src/data/blog.json');

// Leer posts del archivo
export function getBlogPosts(): BlogData {
  try {
    if (!fs.existsSync(blogPath)) {
      const initialData: BlogData = { posts: [] };
      fs.writeFileSync(blogPath, JSON.stringify(initialData, null, 2));
      return initialData;
    }
    const data = fs.readFileSync(blogPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return { posts: [] };
  }
}

// Escribir posts al archivo
export function saveBlogPosts(data: BlogData): void {
  try {
    // Asegurar que el directorio existe
    const dir = path.dirname(blogPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(blogPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving blog posts:', error);
    throw new Error('Failed to save blog posts');
  }
}

// Obtener todos los posts (admin)
export function getAllPosts(): BlogPost[] {
  const { posts } = getBlogPosts();
  return posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

// Obtener posts publicados (público)
export function getPublishedPosts(): BlogPost[] {
  const { posts } = getBlogPosts();
  return posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

// Obtener post por ID
export function getPostById(id: number): BlogPost | null {
  const { posts } = getBlogPosts();
  return posts.find(post => post.id === id) || null;
}

// Obtener post por slug
export function getPostBySlug(slug: string): BlogPost | null {
  const { posts } = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

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

// Crear nuevo post
export function createPost(postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): BlogPost {
  const { posts } = getBlogPosts();
  const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
  
  const newPost: BlogPost = {
    ...postData,
    id: newId,
    slug: postData.slug || createSlug(postData.title),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  // Verificar que el slug sea único
  let finalSlug = newPost.slug;
  let counter = 1;
  while (posts.some(p => p.slug === finalSlug)) {
    finalSlug = `${newPost.slug}-${counter}`;
    counter++;
  }
  newPost.slug = finalSlug;
  
  posts.push(newPost);
  saveBlogPosts({ posts });
  
  return newPost;
}

// Actualizar post
export function updatePost(id: number, updates: Partial<Omit<BlogPost, 'id' | 'createdAt'>>): BlogPost | null {
  const { posts } = getBlogPosts();
  const postIndex = posts.findIndex(post => post.id === id);
  
  if (postIndex === -1) {
    return null;
  }
  
  const updatedPost = {
    ...posts[postIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  // Si se actualiza el título y no se proporciona slug, regenerar slug
  if (updates.title && !updates.slug) {
    updatedPost.slug = createSlug(updates.title);
  }
  
  posts[postIndex] = updatedPost;
  saveBlogPosts({ posts });
  
  return updatedPost;
}

// Eliminar post
export function deletePost(id: number): boolean {
  const { posts } = getBlogPosts();
  const initialLength = posts.length;
  const filteredPosts = posts.filter(post => post.id !== id);
  
  if (filteredPosts.length < initialLength) {
    saveBlogPosts({ posts: filteredPosts });
    return true;
  }
  
  return false;
}
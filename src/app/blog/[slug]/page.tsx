// src/app/blog/[slug]/page.tsx - Nueva página dinámica
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { BlogPost } from '@/lib/blog';

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.slug) {
      fetchPost();
      fetchRelatedPosts();
    }
  }, [params.slug]);

  const fetchPost = async () => {
    try {
      const response = await fetch('/api/blog');
      if (response.ok) {
        const data = await response.json();
        const foundPost = data.posts.find((p: BlogPost) => p.slug === params.slug);
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Post no encontrado');
        }
      } else {
        setError('Error al cargar el post');
      }
    } catch (error) {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      if (response.ok) {
        const data = await response.json();
        // Obtener posts relacionados (excluyendo el actual)
        const related = data.posts
          .filter((p: BlogPost) => p.slug !== params.slug)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post no encontrado</h1>
        <p className="text-gray-600 mb-8">El artículo que buscas no existe o ha sido eliminado.</p>
        <Button href="/blog" variant="primary">
          Volver al Blog
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-dark/60">
            <Link href="/" className="hover:text-primary-700 transition-colors">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary-700 transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark/80">{post.title}</span>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-dark/60 text-sm ml-4">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
              
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center mb-8">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mr-3">
                  <span className="font-semibold">{post.author.charAt(0)}</span>
                </div>
                <span className="text-dark/80 font-medium">{post.author}</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-hover mb-8 h-80">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                  ¿Te resultó útil este artículo?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="primary">
                    Contáctanos para más información
                  </Button>
                  <Button href="/services" variant="outline">
                    Explorar nuestros servicios
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-primary-800 mb-8 text-center">
                Artículos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-hover transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="inline-block px-2 py-1 bg-secondary-50 text-secondary-800 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                        <span className="text-dark/60 text-xs ml-2">
                          {new Date(relatedPost.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-primary-800 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-dark/70 mb-4 line-clamp-3 text-sm">
                        {relatedPost.excerpt || relatedPost.content.substring(0, 120) + '...'}
                      </p>
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

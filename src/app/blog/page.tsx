// src/app/blog/page.tsx - Actualizada para usar la API
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { BlogPost } from '@/lib/blog';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      } else {
        setError('Error al cargar los posts');
      }
    } catch (error) {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Conocimientos y Consejos</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">Nuestro Blog</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Artículos, consejos y conocimientos sobre terapia manual, masaje terapéutico y bienestar integral.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No hay artículos disponibles</h3>
              <p className="mt-1 text-gray-500">Próximamente tendremos contenido nuevo para ti.</p>
            </div>
          ) : (
            <>
              {/* Featured Post (First Post) */}
              {posts.length > 0 && (
                <div className="mb-16">
                  <div className="flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-1/2">
                      <div className="relative rounded-xl overflow-hidden shadow-hover h-80">
                        <Image
                          src={posts[0].image}
                          alt={posts[0].title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="flex items-center mb-4">
                        <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium">
                          {posts[0].category}
                        </span>
                        <span className="text-dark/60 text-sm ml-4">
                          {new Date(posts[0].createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
                        {posts[0].title}
                      </h2>
                      <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                        {posts[0].excerpt || posts[0].content.substring(0, 200) + '...'}
                      </p>
                      <div className="flex items-center mb-6">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mr-3">
                          <span className="font-semibold">{posts[0].author.charAt(0)}</span>
                        </div>
                        <span className="text-dark/80 font-medium">{posts[0].author}</span>
                      </div>
                      <Button href={`/blog/${posts[0].slug}`} variant="primary">
                        Leer Artículo
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Other Posts Grid */}
              {posts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.slice(1).map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-hover transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="inline-block px-2 py-1 bg-secondary-50 text-secondary-800 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-dark/60 text-xs ml-2">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-primary-800 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-dark/70 mb-4 line-clamp-3">
                          {post.excerpt || post.content.substring(0, 150) + '...'}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mr-2">
                              <span className="text-xs font-semibold">{post.author.charAt(0)}</span>
                            </div>
                            <span className="text-sm text-dark/80">{post.author}</span>
                          </div>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                          >
                            Leer más →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-primary-700 rounded-bl-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/3 bg-primary-700 rounded-tr-3xl opacity-30"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">¿Quieres aprender más sobre terapia manual?</h2>
          <p className="text-xl text-black/90 mb-10 max-w-2xl mx-auto">
            Ofrecemos cursos y talleres para profesionales y entusiastas de la terapia manual y el masaje terapéutico.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/courses"
              variant="secondary"
              size="lg"
              className="shadow-lg text-black"
            >
              Explorar Cursos
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="text-black border-black hover:bg-black/10 shadow-lg"
            >
              Contactar para Información
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
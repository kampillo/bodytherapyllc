// src/app/blog/[slug]/page.tsx - Página de detalle mejorada
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { BlogPost } from '@/lib/blog';
import { useBlog } from '@/contexts/BlogContext';

export default function BlogPostPage() {
  const { t } = useBlog();
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
      console.log('🔍 Cargando post:', params.slug);
      const response = await fetch('/api/blog');

      if (response.ok) {
        const data = await response.json();
        const foundPost = data.posts.find((p: BlogPost) => p.slug === params.slug);

        if (foundPost) {
          console.log('✅ Post encontrado:', foundPost.title);
          setPost(foundPost);
        } else {
          console.error('❌ Post no encontrado:', params.slug);
          setError(t.error.notFound);
        }
      } else {
        console.error('❌ Error al cargar post:', response.status);
        setError(t.error.loadError);
      }
    } catch (error) {
      console.error('❌ Error de conexión:', error);
      setError(t.error.connectionError);
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
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-700 mx-auto mb-4"></div>
          <p className="text-gray-600">{t.loading.loadingArticle}</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.error.notFound}</h1>
          <p className="text-gray-600 mb-8">{t.error.notFoundDesc}</p>
          <Button href="/blog" variant="primary">
            {t.actions.backToBlog}
          </Button>
        </div>
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
              {t.breadcrumb.home}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary-700 transition-colors">
              {t.breadcrumb.blog}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark/80 truncate">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">

            {/* Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-dark/60 text-sm">
                  {new Date(post.createdAt).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mr-4">
                  <span className="font-semibold text-lg">{post.author.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-dark/80 font-medium">{post.author.name}</p>
                  <p className="text-sm text-dark/60">{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative rounded-xl overflow-hidden shadow-hover mb-8 h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
              {post.excerpt && (
                <div className="mb-8 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-400">
                  <p className="text-lg text-primary-800 font-medium italic leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              )}

              <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Call to Action */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
                  <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                    {t.article.usefulArticle}
                  </h3>
                  <p className="text-dark/70 mb-6">
                    {t.article.usefulArticleDesc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/contact" variant="primary">
                      {t.article.contactForInfo}
                    </Button>
                    <Button href="/services" variant="outline">
                      {t.article.exploreServices}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-800 mb-4">
                  {t.related.title}
                </h2>
                <p className="text-lg text-dark/70">
                  {t.related.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-hover transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="inline-block px-2 py-1 bg-secondary-50 text-secondary-800 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                        <span className="text-dark/60 text-xs ml-2">
                          {new Date(relatedPost.createdAt).toLocaleDateString('es-ES')}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-primary-800 mb-3 line-clamp-2 group-hover:text-primary-700 transition-colors">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-dark/70 mb-4 line-clamp-3 text-sm">
                        {relatedPost.excerpt || relatedPost.content.substring(0, 120) + '...'}
                      </p>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center transition-colors"
                      >
                        {t.actions.readMore}
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}

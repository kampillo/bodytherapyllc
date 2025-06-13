// src/app/admin/dashboard/page.tsx - Dashboard actualizado con estadísticas completas
'use client';

import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface DashboardStats {
  blog: {
    totalPosts: number;
    publishedPosts: number;
    draftPosts: number;
    recentPosts: BlogPost[];
  };
  products: {
    totalProducts: number;
    inStockProducts: number;
    outOfStockProducts: number;
    featuredProducts: number;
  };
  banners: {
    totalBanners: number;
    activeBanners: number;
    inactiveBanners: number;
  };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    blog: {
      totalPosts: 0,
      publishedPosts: 0,
      draftPosts: 0,
      recentPosts: []
    },
    products: {
      totalProducts: 0,
      inStockProducts: 0,
      outOfStockProducts: 0,
      featuredProducts: 0
    },
    banners: {
      totalBanners: 0,
      activeBanners: 0,
      inactiveBanners: 0
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      
      // Cargar estadísticas de blog
      const blogResponse = await fetch('/api/blog?admin=true', {
        credentials: 'include'
      });
      
      // Cargar estadísticas de productos
      const productsResponse = await fetch('/api/products?admin=true', {
        credentials: 'include'
      });
      
      // Cargar estadísticas de banners
      const bannersResponse = await fetch('/api/banners?admin=true&stats=true', {
        credentials: 'include'
      });

      if (blogResponse.ok && productsResponse.ok && bannersResponse.ok) {
        const blogData = await blogResponse.json();
        const productsData = await productsResponse.json();
        const bannersData = await bannersResponse.json();
        
        // Procesar datos del blog
        const posts = blogData.posts || [];
        const blogStats = {
          totalPosts: posts.length,
          publishedPosts: posts.filter((p: BlogPost) => p.published).length,
          draftPosts: posts.filter((p: BlogPost) => !p.published).length,
          recentPosts: posts.slice(0, 5)
        };

        // Procesar datos de productos
        const products = productsData.products || [];
        const productStats = {
          totalProducts: products.length,
          inStockProducts: products.filter((p: any) => p.inStock).length,
          outOfStockProducts: products.filter((p: any) => !p.inStock).length,
          featuredProducts: products.filter((p: any) => p.featured).length,
        };

        // Usar estadísticas de banners del API
        const bannerStats = bannersData.stats || {
          totalBanners: 0,
          activeBanners: 0,
          inactiveBanners: 0
        };
        
        setStats({
          blog: blogStats,
          products: productStats,
          banners: bannerStats
        });
      } else {
        setError('Error al cargar algunas estadísticas');
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-700"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Resumen general de tu sitio web</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={fetchStats}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Actualizar
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Blog Stats */}
          <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-3xl font-bold text-gray-900">{stats.blog.totalPosts}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">{stats.blog.publishedPosts} publicados</span>
              <span className="text-gray-500 ml-2">• {stats.blog.draftPosts} borradores</span>
            </div>
          </div>
          
          {/* Products Stats */}
          <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Productos</p>
                <p className="text-3xl font-bold text-gray-900">{stats.products.totalProducts}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">{stats.products.inStockProducts} en stock</span>
              <span className="text-gray-500 ml-2">• {stats.products.featuredProducts} destacados</span>
            </div>
          </div>
          
          {/* Banners Stats */}
          <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Banners</p>
                <p className="text-3xl font-bold text-gray-900">{stats.banners.totalBanners}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">{stats.banners.activeBanners} activos</span>
              <span className="text-gray-500 ml-2">• {stats.banners.inactiveBanners} inactivos</span>
            </div>
          </div>

          {/* Quick Action Card */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-soft p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-100">Acciones Rápidas</p>
                <p className="text-2xl font-bold">Crear</p>
              </div>
              <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Link href="/admin/blog/new" className="block text-sm text-primary-100 hover:text-white transition-colors">
                + Nuevo Post
              </Link>
              <Link href="/admin/products/new" className="block text-sm text-primary-100 hover:text-white transition-colors">
                + Nuevo Producto
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow-soft border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Posts Recientes</h2>
                <Link 
                  href="/admin/blog" 
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Ver todos
                </Link>
              </div>
            </div>
            <div className="p-6">
              {stats.blog.recentPosts.length > 0 ? (
                <div className="space-y-4">
                  {stats.blog.recentPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{post.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {post.category} • {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          post.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.published ? 'Publicado' : 'Borrador'}
                        </span>
                        <Link
                          href={`/admin/blog/edit/${post.id}`}
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                        >
                          Editar
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <p className="text-gray-500 mb-4">No hay posts aún</p>
                  <Link 
                    href="/admin/blog/new"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Crear primer post
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* System Overview */}
          <div className="bg-white rounded-xl shadow-soft border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Resumen del Sistema</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                
                {/* Content Stats */}
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Contenido</p>
                      <p className="text-xs text-gray-500">Posts y páginas</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">{stats.blog.totalPosts}</p>
                    <p className="text-xs text-gray-500">posts totales</p>
                  </div>
                </div>

                {/* Products Stats */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Tienda</p>
                      <p className="text-xs text-gray-500">Productos disponibles</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">{stats.products.inStockProducts}</p>
                    <p className="text-xs text-gray-500">en stock</p>
                  </div>
                </div>

                {/* Banners Stats */}
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Banners</p>
                      <p className="text-xs text-gray-500">Carousel principal</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-purple-600">{stats.banners.activeBanners}</p>
                    <p className="text-xs text-gray-500">activos</p>
                  </div>
                </div>

              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900 mb-3">Acciones Rápidas</p>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/admin/products"
                    className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Productos
                  </Link>
                  <Link
                    href="/admin/banners"
                    className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Banners
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

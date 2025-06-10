// src/app/shop/page.tsx - Actualizada para usar productos de Prisma
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { useCartStore } from '@/lib/store/cartStore';
import type { Product } from '@prisma/client';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
        
        // Extraer categorías únicas
        const uniqueCategories = [...new Set(data.products.map((p: Product) => p.category).filter(Boolean))] as string[];
        setCategories(uniqueCategories);
      } else {
        setError('Error al cargar los productos');
      }
    } catch (error) {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch && product.inStock;
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: 1
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Tienda</h1>
            <p className="text-xl text-primary-100">Productos naturales para tu bienestar</p>
          </div>
        </div>

        {/* Loading */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-3 border-b-3 border-primary-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-light">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Tienda</h1>
            <p className="text-xl text-primary-100">Productos naturales para tu bienestar</p>
          </div>
        </div>

        {/* Error */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Error al cargar productos</h3>
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={fetchProducts}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Intentar nuevamente
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Tienda</h1>
          <p className="text-xl text-primary-100 mb-8">
            Descubre nuestros productos naturales seleccionados especialmente para tu bienestar
          </p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-primary-100">
                <span className="font-semibold">{filteredProducts.length}</span> productos disponibles
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Búsqueda */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </div>
            </div>

            {/* Filtro por categoría */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todos ({products.filter(p => p.inStock).length})
              </button>
              {categories.map((category) => {
                const count = products.filter(p => p.category === category && p.inStock).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Productos */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-soft">
            <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchQuery || selectedCategory !== 'all' ? 'No se encontraron productos' : 'No hay productos disponibles'}
            </h3>
            <p className="text-gray-500 mb-6">
              {searchQuery || selectedCategory !== 'all' 
                ? 'Intenta cambiar los filtros de búsqueda' 
                : 'Pronto tendremos productos disponibles para ti'
              }
            </p>
            {(searchQuery || selectedCategory !== 'all') && (
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                variant="outline"
              >
                Limpiar filtros
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-2 right-2 z-10">
                    <span className="inline-block px-2 py-1 bg-primary-50 text-primary-800 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  {product.featured && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Destacado
                      </span>
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary-800 mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-dark/70 text-sm mb-4 line-clamp-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl text-secondary-700 font-bold">${product.price.toFixed(2)}</span>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      variant="primary"
                      size="sm"
                      className="group-hover:bg-primary-700"
                    >
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Agregar</span>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">¿Necesitas ayuda para elegir?</h2>
            <p className="text-dark/70 mb-6 max-w-2xl mx-auto">
              Nuestros productos están cuidadosamente seleccionados para complementar tus tratamientos de terapia manual. 
              Si tienes dudas sobre cuál es el mejor para ti, no dudes en contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4l-3-3m8-8c4.418 0 8 3.582 8 8z" />
                </svg>
                Contactar
              </Button>
              <Button href="/services" variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0h3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                </svg>
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
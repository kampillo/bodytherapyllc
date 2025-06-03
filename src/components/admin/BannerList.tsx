// src/components/admin/BannerList.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import type { Banner } from '@prisma/client';

const BannerList = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState<{ [key: number]: string }>({});
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await fetch('/api/banners?admin=true', {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setBanners(data.banners);
      } else {
        setError('Error al cargar los banners');
      }
    } catch (error) {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: number, action: string) => {
    if (action === 'delete' && !confirm('¿Estás seguro de que quieres eliminar este banner?')) {
      return;
    }

    setActionLoading(prev => ({ ...prev, [id]: action }));
    
    try {
      let response;
      
      if (action === 'delete') {
        response = await fetch(`/api/banners/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        });
        
        if (response.ok) {
          setBanners(banners.filter(banner => banner.id !== id));
        } else {
          alert('Error al eliminar el banner');
        }
      } else {
        // Para toggle-active, move-up, move-down, duplicate
        response = await fetch(`/api/banners/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ action }),
        });

        if (response.ok) {
          const data = await response.json();
          
          if (action === 'duplicate') {
            // Añadir el nuevo banner duplicado
            setBanners(prev => [...prev, data.banner]);
          } else if (action === 'move-up' || action === 'move-down') {
            // Refrescar toda la lista para actualizar el orden
            fetchBanners();
          } else {
            // Para toggle-active, actualizar solo el banner específico
            setBanners(banners.map(banner => 
              banner.id === id ? data.banner : banner
            ));
          }
        } else {
          const errorData = await response.json();
          alert(errorData.error || 'Error al realizar la acción');
        }
      }
    } catch (error) {
      alert('Error de conexión');
    } finally {
      setActionLoading(prev => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex">
          <svg className="w-5 h-5 text-red-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Banners del Carousel</h2>
          <p className="text-gray-600 mt-1">Gestiona los banners del carousel principal ({banners.length} banners)</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Toggle view mode */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'table' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <Button href="/admin/banners/new" variant="primary">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nuevo Banner
          </Button>
        </div>
      </div>

      {banners.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
          <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No hay banners</h3>
          <p className="text-gray-500 mb-6">Comienza creando tu primer banner para el carousel.</p>
          <Button href="/admin/banners/new" variant="primary">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Crear Banner
          </Button>
        </div>
      ) : (
        <>
          {/* Vista Grid */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {banners.map((banner) => (
                <div key={banner.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 group">
                  {/* Imagen */}
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={banner.image}
                      alt={banner.altText}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-200 group-hover:scale-105"
                    />
                    
                    {/* Status y orden badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        banner.active 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-red-100 text-red-800 border border-red-200'
                      }`}>
                        {banner.active ? 'Activo' : 'Inactivo'}
                      </span>
                      
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        Orden: {banner.order}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                      {banner.title}
                    </h3>
                    
                    {banner.subtitle && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {banner.subtitle}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{new Date(banner.createdAt).toLocaleDateString('es-ES')}</span>
                      {banner.link && (
                        <span className="text-blue-600 text-xs bg-blue-50 px-2 py-1 rounded">
                          Con enlace
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <button
                        onClick={() => handleAction(banner.id, 'toggle-active')}
                        disabled={actionLoading[banner.id] === 'toggle-active'}
                        className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-lg transition-colors ${
                          banner.active
                            ? 'text-red-600 bg-red-50 hover:bg-red-100'
                            : 'text-green-600 bg-green-50 hover:bg-green-100'
                        } disabled:opacity-50`}
                      >
                        {actionLoading[banner.id] === 'toggle-active' ? (
                          <div className="animate-spin h-3 w-3 border border-current rounded-full border-t-transparent mr-1"></div>
                        ) : (
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={banner.active ? "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" : "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"} />
                          </svg>
                        )}
                        {banner.active ? 'Desactivar' : 'Activar'}
                      </button>

                      <button
                        onClick={() => handleAction(banner.id, 'move-up')}
                        disabled={actionLoading[banner.id] === 'move-up'}
                        className="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors disabled:opacity-50"
                      >
                        {actionLoading[banner.id] === 'move-up' ? (
                          <div className="animate-spin h-3 w-3 border border-indigo-600 rounded-full border-t-transparent mr-1"></div>
                        ) : (
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                          </svg>
                        )}
                        Subir
                      </button>

                      <button
                        onClick={() => handleAction(banner.id, 'move-down')}
                        disabled={actionLoading[banner.id] === 'move-down'}
                        className="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors disabled:opacity-50"
                      >
                        {actionLoading[banner.id] === 'move-down' ? (
                          <div className="animate-spin h-3 w-3 border border-indigo-600 rounded-full border-t-transparent mr-1"></div>
                        ) : (
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                          </svg>
                        )}
                        Bajar
                      </button>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex space-x-2">
                        <Link
                          href={`/admin/banners/edit/${banner.id}`}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Editar
                        </Link>
                        
                        <button
                          onClick={() => handleAction(banner.id, 'duplicate')}
                          disabled={actionLoading[banner.id] === 'duplicate'}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors disabled:opacity-50"
                        >
                          {actionLoading[banner.id] === 'duplicate' ? (
                            <div className="animate-spin h-3 w-3 border border-purple-600 rounded-full border-t-transparent mr-1"></div>
                          ) : (
                            <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                          Duplicar
                        </button>
                      </div>

                      <button
                        onClick={() => handleAction(banner.id, 'delete')}
                        disabled={actionLoading[banner.id] === 'delete'}
                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {actionLoading[banner.id] === 'delete' ? (
                          <div className="animate-spin h-3 w-3 border border-red-600 rounded-full border-t-transparent mr-1"></div>
                        ) : (
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        )}
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Vista Tabla */}
          {viewMode === 'table' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Banner
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Orden
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {banners.map((banner) => (
                      <tr key={banner.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-16 w-24 flex-shrink-0 relative rounded-lg overflow-hidden">
                              <Image
                                src={banner.image}
                                alt={banner.altText}
                                fill
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 line-clamp-1 max-w-md">
                                {banner.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {banner.subtitle || 'Sin subtítulo'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-sm font-bold text-blue-700 bg-blue-100 rounded-full">
                            {banner.order}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            banner.active 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {banner.active ? 'Activo' : 'Inactivo'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(banner.createdAt).toLocaleDateString('es-ES')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => handleAction(banner.id, 'toggle-active')}
                              disabled={actionLoading[banner.id] === 'toggle-active'}
                              className="text-blue-600 hover:text-blue-900 font-medium text-xs disabled:opacity-50"
                            >
                              {actionLoading[banner.id] === 'toggle-active' ? 'Procesando...' : (banner.active ? 'Desactivar' : 'Activar')}
                            </button>
                            <button
                              onClick={() => handleAction(banner.id, 'move-up')}
                              disabled={actionLoading[banner.id] === 'move-up'}
                              className="text-indigo-600 hover:text-indigo-900 font-medium text-xs disabled:opacity-50"
                            >
                              ↑ Subir
                            </button>
                            <button
                              onClick={() => handleAction(banner.id, 'move-down')}
                              disabled={actionLoading[banner.id] === 'move-down'}
                              className="text-indigo-600 hover:text-indigo-900 font-medium text-xs disabled:opacity-50"
                            >
                              ↓ Bajar
                            </button>
                            <Link
                              href={`/admin/banners/edit/${banner.id}`}
                              className="text-gray-600 hover:text-gray-900 font-medium text-xs"
                            >
                              Editar
                            </Link>
                            <button
                              onClick={() => handleAction(banner.id, 'duplicate')}
                              disabled={actionLoading[banner.id] === 'duplicate'}
                              className="text-purple-600 hover:text-purple-900 font-medium text-xs disabled:opacity-50"
                            >
                              {actionLoading[banner.id] === 'duplicate' ? 'Duplicando...' : 'Duplicar'}
                            </button>
                            <button
                              onClick={() => handleAction(banner.id, 'delete')}
                              disabled={actionLoading[banner.id] === 'delete'}
                              className="text-red-600 hover:text-red-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                            >
                              {actionLoading[banner.id] === 'delete' ? 'Eliminando...' : 'Eliminar'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BannerList;
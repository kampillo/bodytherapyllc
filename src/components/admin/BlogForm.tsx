// src/components/admin/BlogForm.tsx - Actualizado para Cloudinary
'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { BlogPost } from '@/lib/blog';

interface BlogFormProps {
  post?: BlogPost;
  isEdit?: boolean;
}

interface CloudinaryResponse {
  success: boolean;
  imageUrl: string;
  publicId: string;
  fileName: string;
  folder: string;
  optimizedUrls: Record<string, string>;
  metadata: {
    width: number;
    height: number;
    format: string;
    bytes: number;
    createdAt: string;
  };
  message: string;
}

const BlogForm: React.FC<BlogFormProps> = ({ post, isEdit = false }) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    author: typeof post?.author === 'string' ? post.author : post?.author?.name || 'María Mercedes Lizalde',
    category: post?.category || 'General',
    image: post?.image || '/images/blog/default.jpg',
    published: post?.published || false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState<string>(formData.image);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [currentImagePublicId, setCurrentImagePublicId] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      setError('Por favor selecciona un archivo de imagen válido');
      return;
    }

    // Validar tamaño (máximo 10MB para Cloudinary free)
    if (file.size > 10 * 1024 * 1024) {
      setError('La imagen debe ser menor a 10MB');
      return;
    }

    setUploadingImage(true);
    setError('');

    try {
      console.log('📤 Subiendo imagen a Cloudinary:', file.name);

      const formDataUpload = new FormData();
      formDataUpload.append('image', file);
      formDataUpload.append('folder', 'blog');

      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        credentials: 'include',
        body: formDataUpload
      });

      if (uploadResponse.ok) {
        const uploadData: CloudinaryResponse = await uploadResponse.json();
        
        console.log('✅ Imagen subida exitosamente:', uploadData.imageUrl);
        console.log('📊 Metadatos:', uploadData.metadata);

        // Eliminar imagen anterior si existe
        if (currentImagePublicId && currentImagePublicId !== uploadData.publicId) {
          try {
            await fetch(`/api/upload?publicId=${encodeURIComponent(currentImagePublicId)}`, {
              method: 'DELETE',
              credentials: 'include'
            });
            console.log('🗑️ Imagen anterior eliminada');
          } catch (deleteError) {
            console.warn('⚠️ No se pudo eliminar la imagen anterior:', deleteError);
          }
        }

        // Actualizar estado con la nueva imagen
        setImagePreview(uploadData.imageUrl);
        setFormData(prev => ({
          ...prev,
          image: uploadData.imageUrl
        }));
        setCurrentImagePublicId(uploadData.publicId);

        // Mostrar información de la imagen subida
        const { width, height, format, bytes } = uploadData.metadata;
        const sizeInMB = (bytes / (1024 * 1024)).toFixed(2);
        console.log(`📐 Imagen procesada: ${width}x${height} ${format.toUpperCase()}, ${sizeInMB}MB`);

      } else {
        const errorData = await uploadResponse.json();
        console.error('❌ Error del servidor:', errorData);
        setError(errorData.error || 'Error al subir la imagen. Intenta de nuevo.');
      }
    } catch (error) {
      console.error('❌ Error uploading image:', error);
      setError('Error de conexión al subir la imagen. Intenta de nuevo.');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleRemoveImage = async () => {
    if (currentImagePublicId) {
      try {
        setUploadingImage(true);
        const response = await fetch(`/api/upload?publicId=${encodeURIComponent(currentImagePublicId)}`, {
          method: 'DELETE',
          credentials: 'include'
        });

        if (response.ok) {
          console.log('✅ Imagen eliminada de Cloudinary');
        }
      } catch (error) {
        console.warn('⚠️ Error eliminando imagen:', error);
      } finally {
        setUploadingImage(false);
      }
    }

    // Resetear a imagen por defecto
    setImagePreview('/images/blog/default.jpg');
    setFormData(prev => ({ ...prev, image: '/images/blog/default.jpg' }));
    setCurrentImagePublicId('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validaciones
    if (!formData.title.trim()) {
      setError('El título es requerido');
      setLoading(false);
      return;
    }

    if (!formData.content.trim()) {
      setError('El contenido es requerido');
      setLoading(false);
      return;
    }

    try {
      const url = isEdit ? `/api/blog/${post!.id}` : '/api/blog';
      const method = isEdit ? 'PUT' : 'POST';

      console.log('💾 Guardando post:', { title: formData.title, image: formData.image });

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Post guardado exitosamente');
        router.push('/admin/blog');
      } else {
        setError(data.error || 'Error al guardar el post');
      }
    } catch (error) {
      setError('Error de conexión');
      console.error('Error al guardar:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    'General',
    'Bienestar Emocional',
    'Terapia Manual',
    'Masajes',
    'Salud',
    'Consejos',
    'Técnicas',
    'Tratamientos'
  ];

  const isCloudinaryImage = formData.image.includes('res.cloudinary.com');

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEdit ? 'Editar Post' : 'Nuevo Post'}
          </h1>
          <p className="text-gray-600 mt-1">
            {isEdit ? 'Actualiza la información de tu post' : 'Crea un nuevo artículo para el blog'}
          </p>
        </div>
        <Button href="/admin/blog" variant="outline">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver
        </Button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex">
            <svg className="w-5 h-5 text-red-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del Post</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Título *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Escribe un título atractivo..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                    Resumen
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={3}
                    value={formData.excerpt}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Breve descripción del post (opcional)..."
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Contenido *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows={20}
                    value={formData.content}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors font-mono text-sm"
                    placeholder="Escribe el contenido completo del post aquí..."
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Puedes usar párrafos separados por líneas en blanco. Se convertirán automáticamente en párrafos HTML.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Imagen */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Imagen del Post
                {isCloudinaryImage && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Cloudinary
                  </span>
                )}
              </h3>
              
              <div className="space-y-4">
                {/* Preview de la imagen */}
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-opacity duration-200"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  
                  {uploadingImage && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mx-auto mb-2"></div>
                        <p className="text-sm">Subiendo a Cloudinary...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Botones de imagen */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploadingImage}
                    className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    {uploadingImage ? 'Subiendo...' : 'Subir a Cloudinary'}
                  </button>
                  
                  {imagePreview && imagePreview !== '/images/blog/default.jpg' && (
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      disabled={uploadingImage}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors text-sm font-medium"
                    >
                      Quitar
                    </button>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {/* URL manual */}
                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    O URL de imagen
                  </label>
                  <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.image}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      setFormData(prev => ({ ...prev, image: newValue }));
                      setImagePreview(newValue);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm"
                    placeholder="https://res.cloudinary.com/..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    URLs de Cloudinary se optimizan automáticamente
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Cloudinary:</strong> Las imágenes se optimizan automáticamente para web (WebP/AVIF) y se entregan via CDN global para máxima velocidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Metadatos */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuración</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    Autor
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Categoría
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="published"
                      name="published"
                      checked={formData.published}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="published" className="ml-2 block text-sm text-gray-700 font-medium">
                      Publicar inmediatamente
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Si no está marcado, se guardará como borrador
                  </p>
                </div>
              </div>
            </div>

            {/* Acciones */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={loading || uploadingImage}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent mr-2"></div>
                      {isEdit ? 'Actualizando...' : 'Creando...'}
                    </span>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {isEdit ? 'Actualizar Post' : 'Crear Post'}
                    </>
                  )}
                </Button>
                
                <Button
                  type="button"
                  href="/admin/blog"
                  variant="outline"
                  fullWidth
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;

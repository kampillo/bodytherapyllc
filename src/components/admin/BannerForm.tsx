// src/components/admin/BannerForm.tsx - Arreglado para funcionar como BlogForm
'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import type { Banner } from '@prisma/client';

interface BannerFormProps {
  banner?: Banner;
  isEdit?: boolean;
}

const BannerForm: React.FC<BannerFormProps> = ({ banner, isEdit = false }) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: banner?.title || '',
    subtitle: banner?.subtitle || '',
    image: banner?.image || '/images/banners/default.jpg',
    altText: banner?.altText || '',
    link: banner?.link || '',
    order: banner?.order ?? undefined,
    active: banner?.active !== undefined ? banner.active : true
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState<string>(formData.image);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(!!banner?.image);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : type === 'number'
          ? value === ''
            ? undefined
            : parseInt(value)
          : value
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

    // Validar tamaño (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('La imagen debe ser menor a 5MB');
      return;
    }

    setUploadingImage(true);
    setError('');

    try {
      const formDataUpload = new FormData();
      formDataUpload.append('image', file);
      formDataUpload.append('folder', 'banners');

      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        credentials: 'include',
        body: formDataUpload
      });

      if (uploadResponse.ok) {
        const uploadData = await uploadResponse.json();
        setImagePreview(uploadData.imageUrl);
        setFormData(prev => ({
          ...prev,
          image: uploadData.imageUrl
        }));
        setImageUploaded(true);
        console.log('✅ Imagen subida exitosamente:', uploadData.imageUrl);
      } else {
        const data = await uploadResponse.json();
        setError(data.error || 'Error al subir la imagen. Intenta de nuevo.');
        setImageUploaded(false);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error al subir la imagen. Intenta de nuevo.');
      setImageUploaded(false);
    } finally {
      setUploadingImage(false);
    }
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

    if (!formData.image.trim()) {
      setError('Debes proporcionar una imagen');
      setLoading(false);
      return;
    }

    if (!formData.altText.trim()) {
      setError('El texto alternativo es requerido');
      setLoading(false);
      return;
    }

    if (formData.order !== undefined && formData.order < 1) {
      setError('El orden debe ser mayor a 0');
      setLoading(false);
      return;
    }

    try {
      const url = isEdit ? `/api/banners/${banner!.id}` : '/api/banners';
      const method = isEdit ? 'PUT' : 'POST';

      console.log('📝 Enviando datos del banner:', formData);

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
        console.log('✅ Banner guardado exitosamente:', data.banner);
        router.push('/admin/banners');
      } else {
        setError(data.error || 'Error al guardar el banner');
      }
    } catch (error) {
      setError('Error de conexión');
      console.error('Error al guardar:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEdit ? 'Editar Banner' : 'Nuevo Banner'}
          </h1>
          <p className="text-gray-600 mt-1">
            {isEdit ? 'Actualiza la información de tu banner' : 'Crea un nuevo banner para el carousel principal'}
          </p>
        </div>
        <Button href="/admin/banners" variant="outline">
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
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contenido del Banner</h2>
              
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
                    placeholder="Ej: Terapia de Masaje Especializada"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Este será el título principal que aparecerá en el banner
                  </p>
                </div>

                <div>
                  <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Subtítulo
                  </label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Ej: Técnicas avanzadas para tu bienestar"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Texto secundario opcional que aparecerá debajo del título
                  </p>
                </div>

                <div>
                  <label htmlFor="altText" className="block text-sm font-medium text-gray-700 mb-2">
                    Texto Alternativo *
                  </label>
                  <input
                    type="text"
                    id="altText"
                    name="altText"
                    value={formData.altText}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Descripción de la imagen para accesibilidad"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Descripción de la imagen para lectores de pantalla (accesibilidad)
                  </p>
                </div>

                <div>
                  <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
                    Enlace (Opcional)
                  </label>
                  <input
                    type="text"
                    id="link"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="/servicios/masaje-terapeutico o https://ejemplo.com"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    URL a la que dirigir cuando se haga clic en el banner. Puede ser una ruta interna (/servicios) o externa (https://)
                  </p>
                </div>
              </div>
            </div>

            {/* Preview del Banner */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vista Previa</h3>
              
              <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                {imagePreview ? (
                  <>
                    <Image
                      src={imagePreview}
                      alt={formData.altText || "Preview"}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-opacity duration-200"
                    />
                    
                    {/* Overlay con textos como aparecerían en el carousel */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="text-center text-white px-4">
                        {formData.title && (
                          <h2 className="text-2xl md:text-4xl font-bold mb-2">
                            {formData.title}
                          </h2>
                        )}
                        {formData.subtitle && (
                          <p className="text-lg md:text-xl">
                            {formData.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p>Vista previa del banner</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Imagen */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Imagen del Banner</h3>
              
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
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    {uploadingImage ? 'Subiendo...' : 'Subir Imagen'}
                  </button>
                  
                  {imagePreview && imagePreview !== '/images/banners/default.jpg' && (
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview('/images/banners/default.jpg');
                        setFormData(prev => ({ ...prev, image: '/images/banners/default.jpg' }));
                        setImageUploaded(false);
                      }}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
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
                      setImageUploaded(!!newValue);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm"
                    placeholder="/images/banners/mi-banner.jpg"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Puedes pegar una URL de imagen o usar el botón de subir arriba
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Recomendación:</strong> Usa imágenes de al menos 1200x600 píxeles para mejor calidad en todos los dispositivos.
                  </p>
                </div>
              </div>
            </div>

            {/* Configuración */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuración</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-2">
                    Orden en el Carousel
                  </label>
                  <input
                    type="number"
                    id="order"
                    name="order"
                    min="1"
                    value={formData.order ?? ''}
                    onChange={handleChange}
                    placeholder="Automático"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Los banners se mostrarán ordenados de menor a mayor número
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="active"
                      name="active"
                      checked={formData.active}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="active" className="ml-2 block text-sm text-gray-700 font-medium">
                      Banner activo
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 ml-6">
                    Solo los banners activos aparecerán en el carousel público
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
                      {isEdit ? 'Actualizar Banner' : 'Crear Banner'}
                    </>
                  )}
                </Button>
                
                <Button
                  type="button"
                  href="/admin/banners"
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

export default BannerForm;
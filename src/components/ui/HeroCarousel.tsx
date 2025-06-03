'use client';
// src/components/ui/HeroCarousel.tsx - Actualizado para usar banners de Prisma
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Banner } from '@prisma/client';

export interface HeroCarouselProps {
  interval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch banners from API
  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await fetch('/api/banners');
      if (response.ok) {
        const data = await response.json();
        setBanners(data.banners);
      } else {
        setError('Error al cargar banners');
      }
    } catch (error) {
      setError('Error de conexión');
      console.error('Error fetching banners:', error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    if (banners.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, interval);

    return () => clearInterval(timer);
  }, [banners.length, interval]);

  const nextSlide = () => {
    if (banners.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    if (banners.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Loading state
  if (loading) {
    return (
      <div className="relative w-full h-full bg-gray-100 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-3 border-b-3 border-primary-600"></div>
        </div>
      </div>
    );
  }

  // Error state or no banners
  if (error || banners.length === 0) {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Body Therapy LLC</h2>
          <p className="text-lg md:text-xl text-primary-100">
            Servicios profesionales de terapia manual y bienestar
          </p>
          {error && (
            <p className="text-sm text-primary-200 mt-4">
              {error} - Mostrando contenido por defecto
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group">
      {/* Contenedor de banners */}
      <div className="relative h-full w-full">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Imagen de fondo */}
            <Image
              src={banner.image}
              alt={banner.altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
              priority={index === 0}
              quality={85}
            />
            
            {/* Overlay con contenido solo si hay título o subtítulo */}
            {(banner.title || banner.subtitle) && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-20">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                  {banner.title && (
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
                      {banner.title}
                    </h2>
                  )}
                  {banner.subtitle && (
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 animate-fade-in-delay">
                      {banner.subtitle}
                    </p>
                  )}
                  {banner.link && (
                    <div className="animate-fade-in-delay-2">
                      {banner.link.startsWith('http') ? (
                        <a
                          href={banner.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                          <span>Conocer más</span>
                          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={banner.link}
                          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                          <span>Conocer más</span>
                          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Elemento decorativo - solo en desktop */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-primary-300 rounded-full opacity-30 z-20 hidden md:block"></div>

      {/* Botones de navegación - Solo si hay múltiples banners */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 text-primary-800 p-1.5 md:p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            aria-label="Banner anterior"
          >
            <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 text-primary-800 p-1.5 md:p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            aria-label="Banner siguiente"
          >
            <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores - Solo si hay múltiples banners */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-6 md:w-8 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir al banner ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;

// Estilos CSS para las animaciones
const styles = `
  @keyframes fade-in {
    from { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }
  
  .animate-fade-in-delay {
    animation: fade-in 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }
  
  .animate-fade-in-delay-2 {
    animation: fade-in 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }
`;

// Inyectar estilos
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
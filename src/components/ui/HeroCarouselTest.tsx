'use client';
// src/components/ui/HeroCarouselTest.tsx - Versión final corregida
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Banner } from '@prisma/client';

export interface HeroCarouselTestProps {
  interval?: number;
}

const HeroCarouselTest: React.FC<HeroCarouselTestProps> = ({ 
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
      console.log('🔍 HeroCarouselTest: Fetcheando banners...');
      const response = await fetch('/api/banners');
      if (response.ok) {
        const data = await response.json();
        console.log('✅ HeroCarouselTest: Banners obtenidos:', data.banners);
        setBanners(data.banners);
      } else {
        console.error('❌ HeroCarouselTest: Error response:', response.status);
        setError('Error al cargar banners');
      }
    } catch (error) {
      console.error('❌ HeroCarouselTest: Error de conexión:', error);
      setError('Error de conexión');
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
      <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '48px', height: '48px', border: '3px solid #e5e7eb', borderTop: '3px solid #3b82f6', borderRadius: '50%', animation: 'spin 1s linear infinite' }}>
        </div>
      </div>
    );
  }

  // Error state or no banners
  if (error || banners.length === 0) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', color: 'white', padding: '16px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>Body Therapy LLC</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '0' }}>
            Servicios profesionales de terapia manual y bienestar
          </p>
          {error && (
            <p style={{ fontSize: '0.875rem', marginTop: '16px', opacity: 0.8 }}>
              {error} - Mostrando contenido por defecto
            </p>
          )}
        </div>
      </div>
    );
  }

  console.log('🎯 HeroCarouselTest: Renderizando carrusel con', banners.length, 'banners');

  const currentBanner = banners[currentIndex];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '400px', // Altura mínima forzada
      overflow: 'hidden'
    }}>
      {/* Debug info minimalizado */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '8px',
        borderRadius: '4px',
        fontSize: '12px',
        maxWidth: '250px'
      }}>
        <p><strong>DEBUG:</strong> Banner {currentIndex + 1}/{banners.length}</p>
        <p>Título: {currentBanner?.title}</p>
        <p style={{ wordBreak: 'break-all' }}>Imagen: {currentBanner?.image}</p>
      </div>

      {/* Contenedor principal con dimensiones forzadas */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '400px'
      }}>
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: index === currentIndex ? 10 : 1
            }}
          >
            {/* Imagen con estilos inline forzados */}
            <img
              src={banner.image}
              alt={banner.altText || banner.title || 'Banner'}
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                display: 'block',
                zIndex: 1
              }}
              onLoad={() => {
                console.log(`✅ Imagen cargada: ${banner.image}`);
              }}
              onError={(e) => {
                console.error(`❌ Error cargando imagen: ${banner.image}`, e);
              }}
            />
            
            {/* Overlay con contenido */}
            {(banner.title || banner.subtitle) && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20
              }}>
                <div style={{
                  textAlign: 'center',
                  color: 'white',
                  padding: '16px',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  {banner.title && (
                    <h2 style={{
                      fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      lineHeight: '1.2'
                    }}>
                      {banner.title}
                    </h2>
                  )}
                  {banner.subtitle && (
                    <p style={{
                      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                      marginBottom: '32px',
                      opacity: 0.9
                    }}>
                      {banner.subtitle}
                    </p>
                  )}
                  {banner.link && (
                    <div>
                      {banner.link.startsWith('http') ? (
                        <a
                          href={banner.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '12px 24px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            fontWeight: '500',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#2563eb';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#3b82f6';
                          }}
                        >
                          <span>Conocer más</span>
                        </a>
                      ) : (
                        <Link
                          href={banner.link}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '12px 24px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            fontWeight: '500',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <span>Conocer más</span>
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

      {/* Botones de navegación */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: '#1e40af',
              padding: '8px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            }}
            aria-label="Banner anterior"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: '#1e40af',
              padding: '8px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            }}
            aria-label="Banner siguiente"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores */}
      {banners.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30,
          display: 'flex',
          gap: '8px'
        }}>
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: index === currentIndex ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: index === currentIndex ? '0 2px 4px rgba(0, 0, 0, 0.3)' : 'none'
              }}
              onMouseOver={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
                }
              }}
              onMouseOut={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                }
              }}
              aria-label={`Ir al banner ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarouselTest;

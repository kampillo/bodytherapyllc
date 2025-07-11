'use client';
// src/components/ui/HeroCarousel.tsx - Versión final de producción
import React, { useState, useEffect } from 'react';
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
      <div style={{ 
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        backgroundColor: '#f3f4f6', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          border: '3px solid #e5e7eb', 
          borderTop: '3px solid #3b82f6', 
          borderRadius: '50%', 
          animation: 'spin 1s linear infinite' 
        }} />
      </div>
    );
  }

  // Error state or no banners - Show default content
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
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px' }}>
            Body Therapy LLC
          </h2>
          <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
            Servicios profesionales de terapia manual y bienestar
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '400px',
      overflow: 'hidden'
    }}>
      {/* Main carousel container */}
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
            {/* Banner image */}
            <img
              src={banner.image}
              alt={banner.altText || banner.title || 'Banner'}
              className="absolute top-0 left-0 w-full h-full object-contain md:object-cover object-center block z-[1]"
            />
            
            {/* Content overlay - COMENTADO: Solo mostrar imagen sin overlay */}
            {/* 
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
            */}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
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
              transition: 'background-color 0.3s',
              opacity: 0,
              animation: 'fadeInOnHover 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            }}
            className="group-hover:opacity-100"
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
              transition: 'background-color 0.3s',
              opacity: 0
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            }}
            className="group-hover:opacity-100"
            aria-label="Banner siguiente"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
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

      {/* CSS for hover effects */}
      <style jsx>{`
        .carousel-container:hover .nav-button {
          opacity: 1;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;

'use client';
// src/components/ui/HeroCarousel.tsx - Updated for better responsiveness
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export interface HeroCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  images, 
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full group">
      {/* Contenedor de imágenes */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center center'
              }}
              priority={index === 0}
              quality={85}
            />
          </div>
        ))}
      </div>

      {/* Elemento decorativo - solo en desktop */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-primary-300 rounded-full opacity-30 z-20 hidden md:block"></div>

      {/* Botones de navegación - Visibles al pasar el mouse */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 text-primary-800 p-1.5 md:p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Imagen anterior"
      >
        <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 text-primary-800 p-1.5 md:p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Imagen siguiente"
      >
        <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores - Solo en pantallas medianas y grandes */}
      {/* <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-1 md:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4 md:w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default HeroCarousel;
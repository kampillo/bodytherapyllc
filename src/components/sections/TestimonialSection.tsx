'use client';
// src/components/sections/TestimonialCarousel.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTestimonials, TranslatedTestimonial } from '@/contexts/TestimonialContext';
// import Image from 'next/image';

// Agregar prop showAll a la interfaz del componente
interface TestimonialCarouselProps {
  showAll?: boolean; // Opcional con valor predeterminado false
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ showAll = false }) => {
  const { t } = useLanguage();
  const { getTestimonials } = useTestimonials();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 1; // Velocidad de desplazamiento en píxeles por frame
  
  // Obtener testimonios traducidos
  const testimonials = getTestimonials();
  
  // Duplicar testimonios para crear un efecto de carrusel infinito
  const extendedTestimonials = [...testimonials, ...testimonials.slice(0, 3)];
  
  // Lógica para mostrar todos los testimonios o solo el carrusel
  const testimonialsToDisplay = showAll ? testimonials : extendedTestimonials;

  useEffect(() => {
    // Solo aplicar el efecto de carrusel cuando showAll es false
    if (showAll) return;
    
    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      if (!isPaused && carouselRef.current) {
        // Calcular nueva posición de desplazamiento
        const newPosition = scrollPosition + scrollSpeed * (elapsed / 16); // Normalizado a ~60fps
        
        // Detectar si necesitamos reiniciar
        if (newPosition >= carouselRef.current.scrollWidth / 2) {
          // Reiniciar al principio cuando llegamos a la mitad (los testimonios duplicados)
          setScrollPosition(0);
        } else {
          setScrollPosition(newPosition);
        }
        
        // Aplicar transformación
        carouselRef.current.style.transform = `translateX(-${newPosition}px)`;
      }
      
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollPosition, isPaused, showAll]);

  // Renderizado diferente según showAll
  if (showAll) {
    return (
      <section className="py-20 bg-primary-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-secondary-100 rounded-full opacity-50 -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 translate-y-1/3 translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsToDisplay.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Versión de carrusel (original)
  return (
    <section className="py-20 bg-primary-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-secondary-100 rounded-full opacity-50 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 translate-y-1/3 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium mb-4">{t('testimonials.badge')}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botones de navegación */}
          <button 
            onClick={() => setScrollPosition(prev => Math.max(0, prev - 400))}
            className="absolute top-1/2 left-2 z-20 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-all"
            aria-label={t('testimonials.previous')}
          >
            <svg className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setScrollPosition(prev => prev + 400)}
            className="absolute top-1/2 right-2 z-20 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-all"
            aria-label={t('testimonials.next')}
          >
            <svg className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Contenedor del carrusel con desplazamiento suave */}
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex"
              style={{ willChange: 'transform' }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`} 
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de tarjeta de testimonio individual con comillas bien posicionadas
const TestimonialCard = ({ testimonial }: { testimonial: TranslatedTestimonial }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-xl shadow-soft p-8 transition-all duration-300 hover:shadow-hover relative h-full">
      {/* Comillas correctamente posicionadas */}
      <div className="absolute top-8 right-8 text-primary-300 opacity-20">
        {/* <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
        </svg> */}
      </div>
      
      <div className="relative z-10">
        <p className="text-dark/80 mb-6 italic leading-relaxed ">
          "{testimonial.content}"
        </p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
            <span className="text-xl font-bold">{testimonial.author.charAt(0)}</span>
          </div>
          <div className="ml-4">
            <h4 className="font-bold text-primary-800">{testimonial.author}</h4>
            <p className="text-sm text-dark/60">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

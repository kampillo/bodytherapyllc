// src/app/blog/page.tsx - updated
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Blog - Body Therapy LLC',
  description: 'Artículos, consejos y conocimientos sobre terapia manual, masaje terapéutico y bienestar integral.',
};

const BlogPage = () => {
  // Ahora solo tenemos un blog real en lugar de los ejemplos
  const blog = {
    id: 1,
    title: 'Masajes y Emociones: Una Conexión Profunda',
    excerpt: 'Descubre la profunda conexión entre los masajes y nuestras emociones, y cómo el masaje terapéutico puede ayudar a liberar emociones reprimidas.',
    author: 'María Mercedes Lizalde',
    date: '21 de Mayo, 2025',
    image: '/images/blog/masajes-emociones.jpg',
    category: 'Bienestar Emocional',
    slug: 'masajes-y-emociones'
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Conocimientos y Consejos</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">Nuestro Blog</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Artículos, consejos y conocimientos sobre terapia manual, masaje terapéutico y bienestar integral.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-xl overflow-hidden shadow-hover h-80">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
                <span className="text-dark/60 text-sm ml-4">{blog.date}</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
                {blog.title}
              </h2>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                {blog.excerpt}
              </p>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mr-3">
                  <span className="font-semibold">{blog.author.charAt(0)}</span>
                </div>
                <span className="text-dark/80 font-medium">{blog.author}</span>
              </div>
              <Button href={`/blog/${blog.slug}`} variant="primary">
                Leer Artículo
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coming Soon Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">
              Más artículos próximamente
            </h2>
            <p className="text-lg text-dark/70 mb-10">
              Estamos trabajando en más contenido relevante sobre terapia manual, masaje terapéutico y bienestar para compartir contigo. ¡Vuelve pronto para ver más artículos!
            </p>
            <Button href="/contact" variant="outline" size="lg">
              ¿Tienes sugerencias para un tema? Contáctanos
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-primary-700 rounded-bl-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/3 bg-primary-700 rounded-tr-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">¿Quieres aprender más sobre terapia manual?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Ofrecemos cursos y talleres para profesionales y entusiastas de la terapia manual y el masaje terapéutico.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/courses"
              variant="secondary"
              size="lg"
              className="shadow-lg"
            >
              Explorar Cursos
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10 shadow-lg"
            >
              Contactar para Información
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
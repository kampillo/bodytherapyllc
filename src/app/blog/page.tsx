// src/app/blog/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Blog - Body Therapy LLC',
  description: 'Artículos, consejos y conocimientos sobre terapia manual, masaje terapéutico y bienestar integral.',
};

const BlogPage = () => {
  // Para una implementación futura, esto podría venir de una base de datos o CMS
  const blogs = [
    {
      id: 1,
      title: 'Estiramientos Pasivos en el Masaje Clínico',
      excerpt: 'Descubre la importancia de los estiramientos pasivos como parte fundamental del masaje clínico y sus beneficios terapéuticos.',
      author: 'María Mercedes Lizalde',
      date: '22 de Abril, 2025',
      image: '/images/blog/stretching.jpg',
      category: 'Técnicas de Masaje',
      slug: 'estiramientos-pasivos-masaje-clinico'
    },
    {
      id: 2,
      title: 'Beneficios del Masaje Descontracturante',
      excerpt: 'Conoce cómo el masaje descontracturante puede ayudarte a aliviar tensiones y contracturas musculares.',
      author: 'María Mercedes Lizalde',
      date: '15 de Abril, 2025',
      image: '/images/blog/massage-benefits.jpg',
      category: 'Bienestar',
      slug: 'beneficios-masaje-descontracturante'
    },
    {
      id: 3,
      title: '5 Ejercicios para Aliviar el Dolor de Espalda',
      excerpt: 'Ejercicios simples que puedes realizar en casa para prevenir y aliviar el dolor de espalda común.',
      author: 'María Mercedes Lizalde',
      date: '8 de Abril, 2025',
      image: '/images/blog/back-pain.jpg',
      category: 'Ejercicios',
      slug: '5-ejercicios-aliviar-dolor-espalda'
    }
  ];

  const featuredBlog = blogs[0]; // El primer blog como destacado

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
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium">
                  {featuredBlog.category}
                </span>
                <span className="text-dark/60 text-sm ml-4">{featuredBlog.date}</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
                {featuredBlog.title}
              </h2>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                {featuredBlog.excerpt}
              </p>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mr-3">
                  <span className="font-semibold">{featuredBlog.author.charAt(0)}</span>
                </div>
                <span className="text-dark/80 font-medium">{featuredBlog.author}</span>
              </div>
              <Button href={`/blog/${featuredBlog.slug}`} variant="primary">
                Leer Artículo
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Articles Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-primary-800 mb-12 text-center">
            Artículos Recientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-2 left-2 z-10">
                    <span className="inline-block px-2 py-1 bg-primary-50 text-primary-800 rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-dark/60 text-sm mb-2">{blog.date}</div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3">{blog.title}</h3>
                  <p className="text-dark/70 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link href={`/blog/${blog.slug}`} className="inline-flex items-center text-primary-700 font-medium hover:text-primary-900 transition-colors">
                    <span>Leer más</span>
                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Article Section - Estiramientos Pasivos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium">
                  Técnicas de Masaje
                </span>
                <span className="text-dark/60 text-sm ml-4">22 de Abril, 2025</span>
              </div>
              
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Estiramientos Pasivos en el Masaje Clínico
              </h1>
              
              <div className="flex items-center mb-8">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mr-3">
                  <span className="font-semibold">M</span>
                </div>
                <span className="text-dark/80 font-medium">María Mercedes Lizalde</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-hover mb-8 h-80">
                <Image
                  src="/images/blog/stretching.jpg"
                  alt="Estiramientos Pasivos en el Masaje Clínico"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed">
                <p>
                  Cuando no manejamos los rangos de movimiento completos o bien nos mantenemos en movimientos con poco rango y constantes o en una postura sin movimiento y sostenida por largo tiempo, podemos provocar acortamiento muscular, y este nos lleva a posibles lesiones como: contracturas musculares, espasmos, puntos gatillo, etc.
                </p>
                
                <p>
                  Dentro del masaje clínico o terapéutico, podemos utilizar un sinfín de herramientas, técnicas y modalidades para obtener el objetivo deseado, existe una técnica no menos importante para obtener dichos resultados como son: <strong>los estiramientos</strong>. Es por ello, que en este artículo recalcamos <em>"La importancia del estiramiento en el masaje clínico"</em> (tema desarrollado en el Primer Congreso Internacional Latino de Bienestar y Belleza 2022, llevado a cabo en Pasadena, TX).
                </p>
                
                <p>
                  Los estiramientos generalmente no les tomamos en cuenta, los subestimamos y son una de las mejores opciones de terapia que podemos hacer por nuestro cuerpo y por el de nuestros pacientes.
                </p>
                
                <p>
                  Son diversos los argumentos para incluirlos en el masaje, por ejemplo:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Relajación muscular</li>
                  <li>Mejora de la circulación</li>
                  <li>Disminución del dolor</li>
                  <li>Aumento de rango de movimiento</li>
                  <li>Disminución de adherencias</li>
                </ul>
                
                <p>
                  Como Terapeutas o Terapistas, el masaje sirve como vehículo para el estiramiento, ¿de qué manera? al manipular los tejidos blandos estamos generando calor o calentamiento el cual provoca una relajación en el tejido permitiéndonos enlongar el músculo, lo cual nos ayuda a potencializar los efectos de la sesión, ya que con el masaje hemos creado el ambiente para obtener un mejor resultado.
                </p>
                
                <p>
                  Cuando el desarrollo del rango o amplitud del movimiento no es suficiente, al acortarse el músculo puede llegar a dificultar o impedir el aprendizaje de alguna habilidad motriz, así como impedir el desarrollo de carácter motor como los son la fuerza, coordinación, resistencia, velocidad.
                </p>
                
                <p>
                  Existen varios estiramientos que podemos realizar en nuestra cabina de trabajo, enfocados tanto en el tren superior como en el tren inferior (miembros superiores y miembros inferiores).
                </p>
                
                <p>
                  En <strong>Body Therapy LLC</strong>, somos Instructores, Proveedores de Clases Continuas, conferencias enfocadas en el área de la salud, manejando y ofreciendo nuestra línea de productos para cabinas de masaje, así como herramientas para poder ofrecer a tus pacientes un servicio de mejor calidad, o bien si eres paciente y necesitas nuestros servicios puedes contar con nosotros.
                </p>
              </div>
              
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                  ¿Te resultó útil este artículo?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="primary">
                    Contáctanos para más información
                  </Button>
                  <Button href="/services" variant="outline">
                    Explorar nuestros servicios
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        
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
// src/app/shop/page.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';

export const metadata = {
  title: 'Tienda - Body Therapy LLC',
  description: 'Descubre nuestra selección de productos terapéuticos de alta calidad para complementar tus tratamientos.',
};

// Lista mock de productos para la demostración
const products = [
  {
    id: 1,
    name: 'Aceite Terapéutico',
    description: 'Aceite para masaje con propiedades antiinflamatorias y relajantes.',
    price: 25.00,
    image: '/images/products/oil-1.jpg',
    category: 'Aceites',
  },
  {
    id: 2,
    name: 'Crema Descontracturante',
    description: 'Crema especializada para aliviar contracturas y tensión muscular.',
    price: 30.00,
    image: '/images/products/cream-1.jpg',
    category: 'Cremas',
  },
  {
    id: 3,
    name: 'Spray Relajante',
    description: 'Spray aromático con aceites esenciales para relajación inmediata.',
    price: 20.00,
    image: '/images/products/spray-1.jpg',
    category: 'Aromaterapia',
  },
  {
    id: 4,
    name: 'Bálsamo Muscular',
    description: 'Bálsamo de efecto calor para aliviar dolores musculares profundos.',
    price: 28.50,
    image: '/images/products/balm-1.jpg',
    category: 'Bálsamos',
  },
  {
    id: 5,
    name: 'Aceite de Lavanda',
    description: 'Aceite esencial de lavanda 100% puro para aromaterapia y relajación.',
    price: 18.00,
    image: '/images/products/oil-2.jpg',
    category: 'Aceites Esenciales',
  },
  {
    id: 6,
    name: 'Gel Frío Terapéutico',
    description: 'Gel de efecto frío para reducir inflamación y aliviar dolores agudos.',
    price: 22.00,
    image: '/images/products/gel-1.jpg',
    category: 'Geles',
  },
  {
    id: 7,
    name: 'Sales de Baño Relajantes',
    description: 'Sales minerales con aceites esenciales para un baño relajante.',
    price: 15.00,
    image: '/images/products/bath-1.jpg',
    category: 'Baño',
  },
  {
    id: 8,
    name: 'Kit de Aromaterapia',
    description: 'Set completo con difusor y 3 aceites esenciales para terapia en casa.',
    price: 45.00,
    image: '/images/products/kit-1.jpg',
    category: 'Kits',
  },
];

const ShopPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-4">Productos naturales</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">Nuestra Tienda</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Descubre nuestra selección de productos terapéuticos de alta calidad, elaborados con ingredientes naturales para complementar tus tratamientos.
          </p>
        </div>
      </section>

      {/* Products Feature Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary-200 rounded-xl -z-10"></div>
                
                <div className="relative rounded-xl overflow-hidden shadow-hover">
                  <Image
                    src="/images/products/featured-product.jpg"
                    alt="Producto Destacado"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-secondary-200 rounded-xl -z-10"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-8">
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium mb-4">Calidad premium</span>
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">Productos de Calidad Profesional</h2>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                Todos nuestros productos son fabricados en un laboratorio profesional con ingredientes naturales de la más alta calidad, diseñados para complementar nuestros tratamientos y potenciar sus beneficios.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-dark/80">100% Orgánicos</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-dark/80">Libres de Parabenos</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-dark/80">No Testados en Animales</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-4 text-dark/80">Elaborados con Ingredientes Naturales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products List Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-6 md:mb-0">
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium mb-4">Catálogo</span>
              <h2 className="font-heading text-3xl font-bold text-primary-800">Nuestros Productos</h2>
            </div>
            
            {/* Esta sería la implementación de un filtro de categorías */}
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-primary-800 text-white rounded-md shadow-sm transition-all hover:bg-primary-700">
                Todos
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-dark/80 rounded-md shadow-sm transition-all">
                Aceites
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-dark/80 rounded-md shadow-sm transition-all">
                Cremas
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-dark/80 rounded-md shadow-sm transition-all">
                Aromaterapia
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-4">Descubre</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">Colecciones Destacadas</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Descubre nuestras colecciones especiales diseñadas para necesidades específicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/collections/relaxation.jpg"
                  alt="Colección Relajación"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-800/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Relajación</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-dark/70 mb-6">
                  Productos diseñados para reducir el estrés y promover la calma y el bienestar.
                </p>
                <Button href="/shop/collection/relajacion" variant="outline" className="w-full group-hover:bg-primary-50">
                  <span className="flex items-center justify-center">
                    <span>Ver Colección</span>
                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
            
            {/* Collection 2 */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/collections/relief.jpg"
                  alt="Colección Alivio del Dolor"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-800/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Alivio del Dolor</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-dark/70 mb-6">
                  Soluciones efectivas para dolores musculares, articulares y tensiones.
                </p>
                <Button href="/shop/collection/alivio" variant="outline" className="w-full group-hover:bg-primary-50">
                  <span className="flex items-center justify-center">
                    <span>Ver Colección</span>
                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
            
            {/* Collection 3 */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/collections/aromatherapy.jpg"
                  alt="Colección Aromaterapia"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-800/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Aromaterapia</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-dark/70 mb-6">
                  Aceites esenciales y productos para terapia aromática en casa.
                </p>
                <Button href="/shop/collection/aromaterapia" variant="outline" className="w-full group-hover:bg-primary-50">
                  <span className="flex items-center justify-center">
                    <span>Ver Colección</span>
                    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-800 text-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Mantente Informado</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín para recibir información sobre nuevos productos, ofertas especiales y consejos de bienestar.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu dirección de email"
                className="px-4 py-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
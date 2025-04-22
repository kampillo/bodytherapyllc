// src/app/shop/page.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

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
      <section className="bg-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">Nuestra Tienda</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Descubre nuestra selección de productos terapéuticos de alta calidad, elaborados con ingredientes naturales para complementar tus tratamientos.
          </p>
        </div>
      </section>

      {/* Products Feature Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/products/featured-product.jpg"
                  alt="Producto Destacado"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Productos de Calidad Profesional</h2>
              <p className="text-lg text-gray-600 mb-6">
                Todos nuestros productos son fabricados en un laboratorio profesional con ingredientes naturales de la más alta calidad, diseñados para complementar nuestros tratamientos y potenciar sus beneficios.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">100% Orgánicos</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Libres de Parabenos</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">No Testados en Animales</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Elaborados con Ingredientes Naturales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products List Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4 md:mb-0">Nuestros Productos</h2>
            
            {/* Esta sería la implementación de un filtro de categorías */}
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-primary text-white rounded-md">
                Todos
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-md">
                Aceites
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-md">
                Cremas
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-md">
                Aromaterapia
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary font-bold">${product.price.toFixed(2)}</span>
                    <Button href={`/shop/product/${product.id}`} variant="outline" size="sm">
                      Ver Detalle
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Colecciones Destacadas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre nuestras colecciones especiales diseñadas para necesidades específicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/collections/relaxation.jpg"
                  alt="Colección Relajación"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Relajación</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Productos diseñados para reducir el estrés y promover la calma y el bienestar.
                </p>
                <Button href="/shop/collection/relajacion" variant="outline" className="w-full">
                  Ver Colección
                </Button>
              </div>
            </div>
            
            {/* Collection 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/collections/relief.jpg"
                  alt="Colección Alivio del Dolor"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Alivio del Dolor</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Soluciones efectivas para dolores musculares, articulares y tensiones.
                </p>
                <Button href="/shop/collection/alivio" variant="outline" className="w-full">
                  Ver Colección
                </Button>
              </div>
            </div>
            
            {/* Collection 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/collections/aromatherapy.jpg"
                  alt="Colección Aromaterapia"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Aromaterapia</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Aceites esenciales y productos para terapia aromática en casa.
                </p>
                <Button href="/shop/collection/aromaterapia" variant="outline" className="w-full">
                  Ver Colección
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Mantente Informado</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín para recibir información sobre nuevos productos, ofertas especiales y consejos de bienestar.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu dirección de email"
                className="px-4 py-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-md transition"
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
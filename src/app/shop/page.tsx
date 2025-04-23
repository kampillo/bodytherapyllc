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
    name: 'Divine Rest Spray',
    description: 'Una auténtica fusión de aceites orgánicos puros combinados para un descanso divino.',
    price: 39.00,
    image: '/images/products/divine.jpg',
    // category: 'Aceites',
  },
  {
    id: 2,
    name: 'Crema para Inflammation, Masaje, Decrease & Oxidation',
    description: 'Crema corporal enriquecida con cacao, almendra dulce y vitamina C, combinada con aceites de pomelo y pino, creando una crema de masaje antiinflamatoria y antioxidante que drena, nutre, suaviza y aporta luminosidad a la piel.',
    price: 39.99,
    image: '/images/products/oxidation.jpg',
    // category: 'Cremas',
  },
  {
    id: 3,
    name: 'Aceite para contracture masaje less',
    description: 'Aceite enriquecido con aceites vegetales de maíz, soja, sésamo y oliva combinados con aceites esenciales de menta, canela, romero y árnica, creando un aceite de masaje que ayuda a disminuir contracturas, nutre, hidrata y suaviza la piel.',
    price: 39.99,
    image: '/images/products/contracture-less.jpg',
    // category: 'Aromaterapia',
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
                    src="/images/products/productos.png"
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
                // category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default ShopPage;
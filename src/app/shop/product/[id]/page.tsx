'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useCartStore } from '@/lib/store/cartStore';

// Simulación de datos de productos (en un entorno real, esto vendría de una API o CMS)
const products = [
  {
    id: 1,
    name: 'Divine Rest Spray',
    description: 'Una auténtica fusión de aceites orgánicos puros combinados para un descanso divino. Formulado con lavanda, manzanilla y bergamota, este spray promueve la relajación profunda y mejora la calidad del sueño. Perfecto para aplicar en almohadas, ropa de cama o directamente en la piel para una experiencia calmante que prepara el cuerpo y la mente para un sueño reparador. Cada botella contiene ingredientes 100% naturales, sin parabenos ni químicos agresivos.',
    price: 39.00,
    image: '/images/products/divine.jpg',
    category: 'Aromaterapia',
    stock: 15,
    features: [
      'Aceites esenciales 100% orgánicos',
      'Promueve el sueño profundo y reparador',
      'Alivia el estrés y la ansiedad',
      'Fórmula libre de parabenos',
      'No testado en animales'
    ],
    instructions: 'Agitar bien antes de usar. Rociar en almohadas, sábanas o en el ambiente para crear una atmósfera relajante. Para uso en la piel, aplicar en muñecas, cuello o sienes.'
  },
  {
    id: 2,
    name: 'Crema para Inflammation, Masaje, Decrease & Oxidation',
    description: 'Crema corporal enriquecida con cacao, almendra dulce y vitamina C, combinada con aceites de pomelo y pino, creando una crema de masaje antiinflamatoria y antioxidante que drena, nutre, suaviza y aporta luminosidad a la piel. Esta fórmula profesional ayuda a reducir la hinchazón, mejora la circulación y combate los efectos de los radicales libres. Especialmente efectiva para masajes terapéuticos y tratamientos de recuperación muscular.',
    price: 39.99,
    image: '/images/products/oxidation.jpg',
    category: 'Cremas',
    stock: 10,
    features: [
      'Propiedades antiinflamatorias naturales',
      'Combate el estrés oxidativo',
      'Mejora la circulación sanguínea',
      'Hidratación profunda y duradera',
      'Ideal para masajes terapéuticos'
    ],
    instructions: 'Aplicar una cantidad generosa sobre la zona a tratar y masajear con movimientos circulares hasta su completa absorción. Para mejores resultados, utilizar diariamente o como parte de sesiones de masaje terapéutico.'
  },
  {
    id: 3,
    name: 'Aceite para contracture masaje less',
    description: 'Aceite enriquecido con aceites vegetales de maíz, soja, sésamo y oliva combinados con aceites esenciales de menta, canela, romero y árnica, creando un aceite de masaje que ayuda a disminuir contracturas, nutre, hidrata y suaviza la piel. Esta fórmula exclusiva penetra profundamente en el tejido muscular, proporcionando calor terapéutico y relajación instantánea. Ideal para tratar zonas de tensión crónica y prevenir lesiones musculares en deportistas.',
    price: 39.99,
    image: '/images/products/contracture-less.jpg',
    category: 'Aceites',
    stock: 8,
    features: [
      'Alivia contracturas y puntos de tensión',
      'Efecto térmico natural',
      'Mejora la flexibilidad muscular',
      'Acelera la recuperación deportiva',
      'Textura ligera de rápida absorción'
    ],
    instructions: 'Calentar una pequeña cantidad entre las manos y aplicar sobre la zona contracturada con movimientos firmes y profundos. Repetir el proceso según sea necesario. Evitar el contacto con ojos y mucosas.'
  }
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const productId = parseInt(params.id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();
  
  // Encontrar el producto por ID
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-primary-800 mb-4">Producto no encontrado</h1>
        <p className="text-dark/70 mb-8">Lo sentimos, el producto que buscas no existe o ha sido eliminado.</p>
        <Button href="/shop" variant="primary">Volver a la tienda</Button>
      </div>
    );
  }
  
  const handleIncreaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
    
    // Mostrar notificación o feedback
    alert('Producto añadido al carrito');
  };
  
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-dark/60">
            <a href="/shop" className="hover:text-primary-700 transition-colors">Tienda</a>
            <span className="mx-2">/</span>
            <span className="text-dark/80">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-hover h-[400px] md:h-[500px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-primary-800 mb-4">{product.name}</h1>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-secondary-700">${product.price.toFixed(2)}</p>
                <p className="text-sm text-dark/60 mt-1">
                  {product.stock > 0 ? (
                    <span className="text-green-600 font-medium">En stock ({product.stock} disponibles)</span>
                  ) : (
                    <span className="text-red-600 font-medium">Agotado</span>
                  )}
                </p>
              </div>
              
              <div className="prose prose-lg text-dark/70 mb-8 max-w-none">
                <p>{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary-800 mb-4">Características:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary-800 mb-4">Instrucciones de uso:</h3>
                <p className="text-dark/70">{product.instructions}</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary-800 mb-4">Cantidad:</h3>
                <div className="flex items-center">
                  <button 
                    onClick={handleDecreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center bg-light border border-gray-200 rounded-l-lg text-dark/80 hover:bg-primary-50 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  
                  <div className="w-14 h-10 flex items-center justify-center bg-white border-t border-b border-gray-200 text-dark font-medium">
                    {quantity}
                  </div>
                  
                  <button 
                    onClick={handleIncreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center bg-light border border-gray-200 rounded-r-lg text-dark/80 hover:bg-primary-50 transition-colors"
                    disabled={quantity >= product.stock}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Add To Cart Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart} 
                  variant="primary" 
                  size="lg" 
                  className="flex-1"
                  disabled={product.stock <= 0}
                >
                  <span className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Añadir al carrito
                  </span>
                </Button>
                
                <Button 
                  onClick={() => router.push('/shop/cart')}
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                >
                  Ver carrito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-800 mb-8">Productos relacionados</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-primary-800 mb-2">{relatedProduct.name}</h3>
                    <p className="text-dark/70 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl text-secondary-700 font-bold">${relatedProduct.price.toFixed(2)}</span>
                      <Button href={`/shop/product/${relatedProduct.id}`} variant="outline" size="sm" className="group-hover:bg-primary-50">
                        <span className="flex items-center">
                          <span>Ver Detalle</span>
                          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
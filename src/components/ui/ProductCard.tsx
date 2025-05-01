// src/components/ui/ProductCard.tsx - versión temporal
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  // category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  // category,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-2 right-2 z-10">
          {/* <span className="inline-block px-2 py-1 bg-primary-50 text-primary-800 rounded-full text-xs font-medium">
            {category}
          </span> */}
        </div>
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary-800 mb-2">{name}</h3>
        <p className="text-dark/70 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl text-secondary-700 font-bold">${price.toFixed(2)}</span>
          {/* Temporalmente cambiamos el destino a /shop */}
          <Button href="/shop" variant="outline" size="sm" className="group-hover:bg-primary-50">
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
  );
};

export default ProductCard;
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useCartStore } from '@/lib/store/cartStore';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  inStock?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
  featured = false,
  inStock = true,
}) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      quantity: 1
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-block px-2 py-1 bg-primary-50 text-primary-800 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Destacado
            </span>
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Agotado
            </span>
          </div>
        )}
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className={`group-hover:scale-105 transition-transform duration-500 ${!inStock ? 'grayscale' : ''}`}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary-800 mb-2 line-clamp-2">{name}</h3>
        <p className="text-dark/70 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl text-secondary-700 font-bold">${price.toFixed(2)}</span>
          <Button
            onClick={handleAddToCart}
            variant={inStock ? "primary" : "outline"}
            size="sm"
            className="group-hover:bg-primary-50"
            disabled={!inStock}
          >
            <span className="flex items-center">
              {inStock ? (
                <>
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Agregar</span>
                </>
              ) : (
                <span>No disponible</span>
              )}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
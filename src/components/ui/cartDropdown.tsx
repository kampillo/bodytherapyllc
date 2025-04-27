'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';
import Button from '@/components/ui/Button';

const CartDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { items, totalItems, totalPrice, removeFromCart } = useCartStore();
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // Cerrar dropdown cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-50 text-primary-800 hover:bg-primary-100 transition-colors relative"
        aria-label="Carrito"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-secondary-700 text-white text-xs flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-dark">Tu Carrito ({totalItems})</h3>
          </div>
          
          <div className="max-h-80 overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-6 text-center text-dark/60">
                <svg className="h-12 w-12 mx-auto text-dark/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-sm">Tu carrito está vacío</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {items.map((item) => (
                  <li key={item.id} className="px-4 py-3 flex items-center">
                    <div className="h-16 w-16 relative rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-medium text-dark">{item.name}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <div className="text-sm text-dark/70">
                          <span>{item.quantity} x </span>
                          <span className="font-medium text-secondary-700">${item.price.toFixed(2)}</span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-dark/50 hover:text-red-500 transition-colors"
                          aria-label="Eliminar producto"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-medium text-dark">Total:</span>
              <span className="font-bold text-secondary-700">${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button
                href="/shop/cart"
                variant="outline"
                size="sm"
                fullWidth
              >
                Ver carrito
              </Button>
              
              <Button
                href="/shop/checkout"
                variant="primary"
                size="sm"
                fullWidth
                disabled={items.length === 0}
              >
                Proceder al pago
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
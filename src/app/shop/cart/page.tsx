'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';
import Button from '@/components/ui/Button';

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCartStore();
  
  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <svg className="h-24 w-24 text-dark/30 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary-800 mb-4">Tu carrito está vacío</h1>
          <p className="text-dark/70 mb-8">Parece que aún no has agregado productos a tu carrito. Explora nuestra tienda para descubrir nuestros productos.</p>
          <Button href="/shop" variant="primary" size="lg">
            Explorar la tienda
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-dark/60">
            <Link href="/shop" className="hover:text-primary-700 transition-colors">
              Tienda
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark/80">Carrito</span>
          </div>
        </div>
      </div>
      
      {/* Cart Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-800 mb-8">Tu Carrito</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-8/12">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">
                          Producto
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">
                          Precio
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">
                          Cantidad
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">
                          Total
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-dark/60 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {items.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-16 w-16 flex-shrink-0 relative rounded overflow-hidden">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-dark">{item.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-dark">${item.price.toFixed(2)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center bg-light border border-gray-200 rounded-l-lg text-dark/80 hover:bg-primary-50 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              </button>
                              
                              <div className="w-10 h-8 flex items-center justify-center bg-white border-t border-b border-gray-200 text-dark font-medium">
                                {item.quantity}
                              </div>
                              
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center bg-light border border-gray-200 rounded-r-lg text-dark/80 hover:bg-primary-50 transition-colors"
                              >
                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-dark">${(item.price * item.quantity).toFixed(2)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <Button 
                  href="/shop" 
                  variant="outline" 
                  size="md"
                >
                  <span className="flex items-center">
                    <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Continuar comprando
                  </span>
                </Button>
                
                <Button
                  onClick={clearCart}
                  variant="outline"
                  size="md"
                  className="text-red-500 border-red-500 hover:bg-red-50"
                >
                  <span className="flex items-center">
                    <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Vaciar carrito
                  </span>
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-4/12">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-bold text-primary-800">Resumen del pedido</h2>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-dark/70">Subtotal ({totalItems} productos)</span>
                    <span className="font-medium text-dark">${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-dark/70">Envío</span>
                    <span className="font-medium text-dark">Calculado en el checkout</span>
                  </div>
                  
                  <div className="flex justify-between py-4 mt-2">
                    <span className="text-lg font-bold text-dark">Total</span>
                    <span className="text-lg font-bold text-secondary-700">${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <Button
                    href="/shop/checkout"
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="mt-4"
                  >
                    <span className="flex items-center justify-center">
                      Proceder al pago
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

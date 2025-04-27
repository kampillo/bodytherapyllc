'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js/pure';
import { Elements } from '@stripe/react-stripe-js';
import { useCartStore } from '@/lib/store/cartStore';
import Button from '@/components/ui/Button';
import CheckoutForm from '@/components/shop/CheckoutForm';

// Cargar Stripe fuera del componente para evitar recreaciones
// En un entorno real, deberías tener esta clave en variables de entorno
const stripePromise = loadStripe('pk_test_your_public_key');

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalItems, totalPrice } = useCartStore();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Si no hay productos en el carrito, redirigir al carrito
    if (items.length === 0) {
      router.push('/shop/cart');
      return;
    }

    // Crear el intent de pago al cargar la página
    const createPaymentIntent = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: items,
            currency: 'usd',
          }),
        });

        if (!response.ok) {
          throw new Error('Error al crear el intent de pago');
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error('Error:', err);
        setError('Hubo un problema al procesar tu pago. Por favor, inténtalo de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [items, router]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-700 mx-auto"></div>
        <p className="text-dark/70 mt-4">Cargando información de pago...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
          <p>{error}</p>
        </div>
        <Button href="/shop/cart" variant="primary">
          Volver al carrito
        </Button>
      </div>
    );
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#889535',
        colorBackground: '#ffffff',
        colorText: '#333333',
      },
    },
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-dark/60">
            <a href="/shop" className="hover:text-primary-700 transition-colors">
              Tienda
            </a>
            <span className="mx-2">/</span>
            <a href="/shop/cart" className="hover:text-primary-700 transition-colors">
              Carrito
            </a>
            <span className="mx-2">/</span>
            <span className="text-dark/80">Pago</span>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-800 mb-8">Finalizar Compra</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="lg:w-8/12">
              {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                  <CheckoutForm />
                </Elements>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:w-4/12">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden sticky top-24">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-bold text-primary-800">Resumen del pedido</h2>
                </div>

                <div className="px-6 py-4 max-h-80 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center py-3 border-b border-gray-100">
                      <div className="h-16 w-16 relative rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-dark">{item.name}</h4>
                        <div className="flex justify-between mt-1">
                          <div className="text-sm text-dark/70">
                            <span>{item.quantity} x </span>
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                          </div>
                          <div className="text-sm font-medium text-secondary-700">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-gray-200">
                  <div className="flex justify-between py-2">
                    <span className="text-dark/70">Subtotal ({totalItems} productos)</span>
                    <span className="font-medium text-dark">${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-dark/70">Envío</span>
                    <span className="font-medium text-dark">$5.00</span>
                  </div>

                  <div className="flex justify-between py-4 mt-2 border-t border-gray-100">
                    <span className="text-lg font-bold text-dark">Total</span>
                    <span className="text-lg font-bold text-secondary-700">${(totalPrice + 5).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
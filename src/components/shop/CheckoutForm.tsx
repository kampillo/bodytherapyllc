'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStripe, useElements, PaymentElement, AddressElement } from '@stripe/react-stripe-js';
import Button from '@/components/ui/Button';
import { useCartStore } from '@/lib/store/cartStore';

const CheckoutForm = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart } = useCartStore();
  
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js no ha cargado aún
      return;
    }

    setIsLoading(true);

    // Confirmar el pago con Stripe
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/shop/payment-success`,
        receipt_email: billingDetails.email,
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message || "Ocurrió un error con tu pago");
      } else {
        setMessage("Ocurrió un error inesperado");
      }
    } else {
      // El pago se procesó correctamente, limpiamos el carrito
      clearCart();
    }

    setIsLoading(false);
  };

  const handleBillingDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white rounded-xl shadow-soft overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-bold text-primary-800">Información de contacto</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark/80 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={billingDetails.name}
              onChange={handleBillingDetailsChange}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark/80 mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={billingDetails.email}
              onChange={handleBillingDetailsChange}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
              placeholder="tu@email.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark/80 mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={billingDetails.phone}
              onChange={handleBillingDetailsChange}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
              placeholder="(123) 456-7890"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-soft overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-bold text-primary-800">Dirección de envío</h2>
        </div>
        
        <div className="p-6">
          <AddressElement 
            options={{
              mode: 'shipping',
              allowedCountries: ['US', 'MX'],
              fields: {
                phone: 'always',
              },
              validation: {
                phone: {
                  required: 'always',
                },
              },
            }} 
          />
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-soft overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-bold text-primary-800">Información de pago</h2>
        </div>
        
        <div className="p-6">
          <PaymentElement />
        </div>
      </div>
      
      {message && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <p>{message}</p>
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <Button
          href="/shop/cart"
          variant="outline"
          type="button"
        >
          Volver al carrito
        </Button>
        
        <Button
          variant="primary"
          size="lg"
          type="submit"
          disabled={!stripe || isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
              <span className="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent mr-2"></span>
              Procesando...
            </span>
          ) : (
            "Completar pedido"
          )}
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;

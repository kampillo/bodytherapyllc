'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useStripe } from '@stripe/react-stripe-js';
import Button from '@/components/ui/Button';

// Definir nuestro propio tipo para PaymentIntent
interface StripePaymentIntent {
  id: string;
  amount: number;
  status: 'succeeded' | 'processing' | 'requires_payment_method' | string;
  receipt_email: string | null;
}

export default function PaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stripe = useStripe();
  
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [paymentDetails, setPaymentDetails] = useState<{
    id: string;
    amount: number;
    email: string;
    date: string;
  } | null>(null);
  
  useEffect(() => {
    if (!stripe) return;
    
    const clientSecret = searchParams.get('payment_intent_client_secret');
    
    if (!clientSecret) {
      setPaymentStatus('error');
      return;
    }
    
    // Recuperar detalles del pago
    stripe.retrievePaymentIntent(clientSecret).then((result: { paymentIntent?: StripePaymentIntent }) => {
      const { paymentIntent } = result;
      
      if (!paymentIntent) {
        setPaymentStatus('error');
        return;
      }
      
      switch (paymentIntent.status) {
        case 'succeeded':
          setPaymentStatus('success');
          setPaymentDetails({
            id: paymentIntent.id,
            amount: paymentIntent.amount / 100, // Convertir de centavos a dólares
            email: paymentIntent.receipt_email || '',
            date: new Date().toLocaleDateString(),
          });
          break;
        case 'processing':
          // El pago se está procesando. Podríamos mostrar un mensaje diferente o redirigir
          setPaymentStatus('success');
          setPaymentDetails({
            id: paymentIntent.id,
            amount: paymentIntent.amount / 100,
            email: paymentIntent.receipt_email || '',
            date: new Date().toLocaleDateString(),
          });
          break;
        case 'requires_payment_method':
          // El pago falló. Podríamos redirigir de vuelta al checkout
          setPaymentStatus('error');
          break;
        default:
          setPaymentStatus('error');
          break;
      }
    });
  }, [searchParams, stripe]);
  
  if (paymentStatus === 'loading') {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-700 mx-auto"></div>
        <p className="text-dark/70 mt-4">Verificando el estado de tu pago...</p>
      </div>
    );
  }
  
  if (paymentStatus === 'error') {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8 text-red-500">
            <svg className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary-800 mb-4">Hubo un problema con tu pago</h1>
          <p className="text-dark/70 mb-8">Lo sentimos, ocurrió un error al procesar tu pago. Por favor, intenta nuevamente o contacta con nuestro soporte.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/shop/checkout" variant="primary">
              Intentar nuevamente
            </Button>
            <Button href="/contact" variant="outline">
              Contactar soporte
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-soft p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary-100 text-primary-800 mb-6">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary-800 mb-2">¡Pago completado con éxito!</h1>
          <p className="text-dark/70">Gracias por tu compra. Tu pedido ha sido recibido.</p>
        </div>
        
        {paymentDetails && (
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-4">Detalles del pedido</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-dark/70">Número de orden:</span>
                <span className="font-medium">{paymentDetails.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark/70">Fecha:</span>
                <span className="font-medium">{paymentDetails.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark/70">Email:</span>
                <span className="font-medium">{paymentDetails.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark/70">Total:</span>
                <span className="font-bold text-secondary-700">${paymentDetails.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-dark/70 mb-6">
            Hemos enviado una confirmación a tu correo electrónico con los detalles de tu compra.
            Si tienes alguna pregunta, no dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/shop" variant="primary">
              Continuar comprando
            </Button>
            <Button href="/contact" variant="outline">
              Contactar soporte
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Stripe } from 'stripe';

// Inicializar Stripe con la clave secreta
// En un entorno real, deberías tener esta clave en variables de entorno
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_your_test_key', {
    apiVersion: '2025-03-31.basil', // O la versión más reciente que corresponda
});

import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/store/stripe';

export async function POST(req: NextRequest) {
  try {
    const { items, currency } = await req.json();
    
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Debe proporcionar al menos un producto' },
        { status: 400 }
      );
    }
    
    // Calcular el monto total en centavos (Stripe requiere centavos)
    const amount = items.reduce(
      (total: number, item: { price: number; quantity: number }) => 
        total + Math.round(item.price * 100) * item.quantity,
      0
    );
    
    // Costo de envío fijo (500 centavos = $5.00)
    const shippingCost = 500;
    const totalAmount = amount + shippingCost;
    
    // Crear un objeto para rastrear los productos comprados
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: currency || 'usd',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));
    
    // Crear el PaymentIntent con Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: currency || 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        order_items: JSON.stringify(items.map((item: any) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        }))),
      },
    });
    
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud de pago' },
      { status: 500 }
    );
  }
}

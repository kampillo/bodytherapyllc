declare module '@stripe/stripe-js' {
    interface StripeElements {
      getElement(elementType: 'payment' | 'address'): StripeElement | null;
    }
  }

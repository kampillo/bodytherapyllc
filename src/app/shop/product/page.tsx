import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-primary-800 mb-4">Productos</h1>
      <p className="text-dark/70 mb-8">
        Esta sección está en desarrollo.
      </p>
      <Link href="/shop" className="text-primary-700 underline">
        Volver a la tienda
      </Link>
    </div>
  );
}

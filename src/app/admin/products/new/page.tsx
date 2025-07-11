// src/app/admin/products/new/page.tsx
'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import ProductForm from '@/components/admin/ProductForm';

export default function NewProductPage() {
  return (
    <AdminLayout>
      <ProductForm />
    </AdminLayout>
  );
}

// src/app/admin/products/page.tsx
'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import ProductList from '@/components/admin/ProductList';

export default function AdminProductsPage() {
  return (
    <AdminLayout>
      <ProductList />
    </AdminLayout>
  );
}

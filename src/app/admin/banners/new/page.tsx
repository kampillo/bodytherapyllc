// src/app/admin/banners/new/page.tsx
'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import BannerForm from '@/components/admin/BannerForm';

export default function NewBannerPage() {
  return (
    <AdminLayout>
      <BannerForm />
    </AdminLayout>
  );
}

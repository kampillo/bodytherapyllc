'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import BannerList from '@/components/admin/BannerList';

export default function AdminBannersPage() {
  return (
    <AdminLayout>
      <BannerList />
    </AdminLayout>
  );
}
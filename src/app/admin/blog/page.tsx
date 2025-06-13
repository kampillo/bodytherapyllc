// src/app/admin/blog/page.tsx
'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import BlogList from '@/components/admin/BlogList';

export default function AdminBlogPage() {
  return (
    <AdminLayout>
      <BlogList />
    </AdminLayout>
  );
}

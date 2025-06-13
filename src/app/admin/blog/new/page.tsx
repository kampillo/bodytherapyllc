'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import BlogForm from '@/components/admin/BlogForm';

export default function NewBlogPostPage() {
  return (
    <AdminLayout>
      <BlogForm />
    </AdminLayout>
  );
}

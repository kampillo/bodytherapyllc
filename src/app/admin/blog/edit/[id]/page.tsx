// src/app/admin/blog/edit/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import BlogForm from '@/components/admin/BlogForm';
import { BlogPost } from '@/lib/blog';

export default function EditBlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.id) {
      fetchPost();
    }
  }, [params.id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data.post);
      } else {
        setError('Post no encontrado');
      }
    } catch (error) {
      setError('Error al cargar el post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-700"></div>
        </div>
      </AdminLayout>
    );
  }

  if (error || !post) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-red-600">{error || 'Post no encontrado'}</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <BlogForm post={post} isEdit={true} />
    </AdminLayout>
  );
}

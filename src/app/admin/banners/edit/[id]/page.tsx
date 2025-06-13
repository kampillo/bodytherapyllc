// src/app/admin/banners/edit/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import BannerForm from '@/components/admin/BannerForm';
import type { Banner } from '@prisma/client';

export default function EditBannerPage() {
  const params = useParams();
  const [banner, setBanner] = useState<Banner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.id) {
      fetchBanner();
    }
  }, [params.id]);

  const fetchBanner = async () => {
    try {
      const response = await fetch(`/api/banners/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setBanner(data.banner);
      } else {
        setError('Banner no encontrado');
      }
    } catch (error) {
      setError('Error al cargar el banner');
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

  if (error || !banner) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
            <p className="text-red-600">{error || 'Banner no encontrado'}</p>
            <div className="mt-4">
              <a
                href="/admin/banners"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a Banners
              </a>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <BannerForm banner={banner} isEdit={true} />
    </AdminLayout>
  );
}

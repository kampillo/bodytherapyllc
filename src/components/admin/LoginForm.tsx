// src/components/admin/LoginForm.tsx - Versión corregida
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: 'mercedes@bodytherapyllc.com', // Pre-llenar para testing
    password: 'admin123'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpiar error cuando el usuario empiece a escribir
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('🔐 Attempting login with:', formData.email);
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', // Importante para las cookies
        body: JSON.stringify(formData)
      });

      console.log('📡 Login response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Login successful:', data);
        
        // Pequeña pausa para asegurar que la cookie se establezca
        setTimeout(() => {
          // Usar replace en lugar de push para evitar volver al login
          router.replace('/admin/dashboard');
          // También forzar un refresh
          window.location.href = '/admin/dashboard';
        }, 100);
        
      } else {
        const data = await response.json();
        console.log('❌ Login failed:', data);
        setError(data.error || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('💥 Login error:', error);
      setError('Error de conexión. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl shadow-soft p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-primary-800 mb-2">Admin Login</h1>
            <p className="text-dark/70">Accede al panel de administración</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark/80 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                placeholder="mercedes@bodytherapyllc.com"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-dark/80 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent mr-2"></div>
                  Iniciando sesión...
                </span>
              ) : (
                'Iniciar Sesión'
              )}
            </Button>
          </form>

          {/* Debug info */}
          <div className="mt-6 p-3 bg-gray-50 rounded text-xs text-gray-600">
            <p><strong>Credenciales de prueba:</strong></p>
            <p>Email: mercedes@bodytherapyllc.com</p>
            <p>Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

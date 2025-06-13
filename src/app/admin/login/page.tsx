// src/app/admin/login/page.tsx
import React from 'react';
import LoginForm from '@/components/admin/LoginForm';

export const metadata = {
  title: 'Admin Login - Body Therapy LLC',
  description: 'Panel de administración',
};

export default function AdminLoginPage() {
  return <LoginForm />;
}

// next.config.ts - Actualizado para manejar imágenes correctamente

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Configuración mejorada para imágenes
  images: {
    // Permitir dominios externos si es necesario
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permitir cualquier dominio HTTPS
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
    // Formatos soportados
    formats: ['image/webp', 'image/avif'],
    // Calidades permitidas
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Deshabilitar optimización para desarrollo si hay problemas
    ...(process.env.NODE_ENV === 'development' && {
      unoptimized: false, // Cambiar a true si hay problemas en desarrollo
    }),
  },
  // Configuración adicional para archivos estáticos
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/images/:path*',
      },
    ];
  },
};

export default nextConfig;

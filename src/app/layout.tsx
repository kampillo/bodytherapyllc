// src/app/layout.tsx - versión modificada con soporte multiidioma
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackgroundShapes from '@/components/ui/BackgroundShapes';
import '../styles/globals.css';

// Fuente principal para párrafos y texto general
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

// Fuente elegante para títulos
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Body Therapy LLC - Terapia manual profesional',
  description: 'Servicios profesionales de terapia manual, masajes terapéuticos y holísticos para mejorar tu bienestar y calidad de vida.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${playfair.variable}`}>
      <body className={`font-sans bg-light text-dark antialiased relative`}>
        <LanguageProvider>
          <BackgroundShapes />
          <div className="flex flex-col min-h-screen relative z-10">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

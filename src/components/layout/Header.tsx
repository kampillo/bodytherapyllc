"use client";
// src/components/layout/Header.tsx
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import CartDropdown from '@/components/ui/cartDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Verificar si estamos en viewport móvil
  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Manejar la transparencia del encabezado al desplazarse
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    // Inicializar el estado de isMobile al cargar
    checkIsMobile();
    
    // Configurar los listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [handleScroll, checkIsMobile]);

  // Cerrar el menú cuando se cambia el tamaño de la ventana a desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  // Prevenir el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Body Therapy" 
            width={180} 
            height={60} 
            className="h-18 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <NavLink href="/" text="Inicio" />
            <NavLink href="/about" text="Sobre Nosotros" />
            <NavLink href="/services" text="Servicios" />
            <NavLink href="/shop" text="Tienda" />
            <NavLink href="/courses" text="Certificaciones" />
            <NavLink href="/blog" text="Blog" />
          </div>
          <div className="flex items-center space-x-4">
            <CartDropdown />
            <Button href="/contact" variant="primary" size="sm">
              Contacto
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button and Cart Icon - Visible ONLY on mobile */}
        {isMobile && (
          <div className="flex items-center space-x-2">
            <CartDropdown />
            <button
              onClick={toggleMenu}
              className="text-dark focus:outline-none focus:ring-2 focus:ring-primary p-1 rounded-md"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`md:hidden bg-white shadow-lg absolute top-full left-0 right-0 transition-all duration-300 ease-in-out z-20 ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 overflow-hidden transform -translate-y-4'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="px-4 py-6">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="/" text="Inicio" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/about" text="Sobre Nosotros" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/services" text="Servicios" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/shop" text="Tienda" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/courses" text="Cursos" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="/blog" text="Blog" onClick={() => setIsMenuOpen(false)} />
            <div className="pt-2">
              <Button 
                href="/contact" 
                variant="primary" 
                size="md" 
                fullWidth 
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Componente para enlaces de navegación de escritorio
const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link 
    href={href} 
    className="text-dark/80 hover:text-primary transition-colors duration-300 text-base font-medium"
  >
    {text}
  </Link>
);

// Componente para enlaces de navegación móvil
const MobileNavLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
  <Link 
    href={href} 
    className="text-dark hover:text-primary transition-colors pl-2 py-2 border-l-2 border-transparent hover:border-primary flex items-center text-base"
    onClick={onClick}
  >
    {text}
  </Link>
);

export default Header;
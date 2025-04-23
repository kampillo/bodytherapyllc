"use client";
// src/components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Manejar la transparencia del encabezado al desplazarse
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Body Therapy" 
            width={180} 
            height={60} 
            className="h-18 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link href="/" className="text-dark/80 hover:text-primary transition-colors duration-300 text-sm font-medium">
              Inicio
            </Link>
            <Link href="/about" className="text-dark/80 hover:text-primary transition-colors duration-300 text-sm font-medium">
              Sobre Nosotros
            </Link>
            <Link href="/services" className="text-dark/80 hover:text-primary transition-colors duration-300 text-sm font-medium">
              Servicios
            </Link>
            <Link href="/shop" className="text-dark/80 hover:text-primary transition-colors duration-300 text-sm font-medium">
              Tienda
            </Link>
            <Link href="/courses" className="text-dark/80 hover:text-primary transition-colors duration-300 text-sm font-medium">
              Cursos
            </Link>
            <Link href="/blog" className="text-dark/80 hover:text-primary transition-colors duration-300 text-sm font-medium">
              Blog
            </Link>
          </div>
          <Button href="/contact" variant="primary" size="sm">
            Contacto
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-dark focus:outline-none"
          aria-label="Menu"
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-6 shadow-lg absolute top-full left-0 right-0 transition-all duration-300 ease-in-out z-20">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-dark hover:text-primary transition-colors pl-2 py-2 border-l-2 border-transparent hover:border-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/about" 
              className="text-dark hover:text-primary transition-colors pl-2 py-2 border-l-2 border-transparent hover:border-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link 
              href="/services" 
              className="text-dark hover:text-primary transition-colors pl-2 py-2 border-l-2 border-transparent hover:border-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              href="/shop" 
              className="text-dark hover:text-primary transition-colors pl-2 py-2 border-l-2 border-transparent hover:border-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Tienda
            </Link>
            <Link 
              href="/courses" 
              className="text-dark hover:text-primary transition-colors pl-2 py-2 border-l-2 border-transparent hover:border-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </Link>
            <Link 
              href="/blog" 
              className="text-dark hover:text-primary transition-colors pl-2 py-2 border-l-2 border-transparent hover:border-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
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
      )}
    </header>
  );
};

export default Header;
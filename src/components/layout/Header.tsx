"use client";
// src/components/layout/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.svg" 
            alt="Body Therapy" 
            width={180} 
            height={60} 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary transition">
            Inicio
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary transition">
            Sobre Nosotros
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-primary transition">
            Servicios
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-primary transition">
            Tienda
          </Link>
          <Link href="/courses" className="text-gray-700 hover:text-primary transition">
            Cursos
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-primary transition">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary transition">
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
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
        <nav className="md:hidden bg-white px-4 py-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              href="/shop" 
              className="text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Tienda
            </Link>
            <Link 
              href="/courses" 
              className="text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-primary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
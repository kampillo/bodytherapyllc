'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage } from './LanguageContext';

// Tipos para las traducciones del blog
interface BlogTranslations {
  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  
  // Loading States
  loading: {
    loadingArticles: string;
    loadingArticle: string;
  };
  
  // Error States
  error: {
    loadError: string;
    connectionError: string;
    notFound: string;
    notFoundDesc: string;
    tryAgain: string;
  };
  
  // Empty State
  empty: {
    noArticles: string;
    noArticlesDesc: string;
  };
  
  // Blog Actions
  actions: {
    readArticle: string;
    readMore: string;
    backToBlog: string;
  };
  
  // Breadcrumb
  breadcrumb: {
    home: string;
    blog: string;
  };
  
  // Article Content
  article: {
    usefulArticle: string;
    usefulArticleDesc: string;
    contactForInfo: string;
    exploreServices: string;
  };
  
  // Related Posts
  related: {
    title: string;
    subtitle: string;
  };
  
  // CTA Section
  cta: {
    title: string;
    subtitle: string;
    exploreCourses: string;
    contactForInfo: string;
  };
}

interface BlogContextType {
  t: BlogTranslations;
}

// Crear el contexto
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

// Traducciones del blog
const blogTranslations = {
  es: {
    // Hero Section
    hero: {
      badge: 'Conocimientos y Consejos',
      title: 'Nuestro Blog',
      subtitle: 'Artículos, consejos y conocimientos sobre terapia manual, masaje terapéutico y bienestar integral.',
    },
    
    // Loading States
    loading: {
      loadingArticles: 'Cargando artículos...',
      loadingArticle: 'Cargando artículo...',
    },
    
    // Error States
    error: {
      loadError: 'Error al cargar los posts',
      connectionError: 'Error de conexión',
      notFound: 'Post no encontrado',
      notFoundDesc: 'El artículo que buscas no existe o ha sido eliminado.',
      tryAgain: 'Intentar de nuevo',
    },
    
    // Empty State
    empty: {
      noArticles: 'No hay artículos disponibles',
      noArticlesDesc: 'Próximamente tendremos contenido nuevo para ti.',
    },
    
    // Blog Actions
    actions: {
      readArticle: 'Leer Artículo',
      readMore: 'Leer más',
      backToBlog: 'Volver al Blog',
    },
    
    // Breadcrumb
    breadcrumb: {
      home: 'Inicio',
      blog: 'Blog',
    },
    
    // Article Content
    article: {
      usefulArticle: '¿Te resultó útil este artículo?',
      usefulArticleDesc: 'Si tienes preguntas o quieres saber más sobre nuestros servicios, estamos aquí para ayudarte.',
      contactForInfo: 'Contáctanos para más información',
      exploreServices: 'Explorar nuestros servicios',
    },
    
    // Related Posts
    related: {
      title: 'Artículos Relacionados',
      subtitle: 'Otros artículos que podrían interesarte',
    },
    
    // CTA Section
    cta: {
      title: '¿Quieres aprender más sobre terapia manual?',
      subtitle: 'Ofrecemos cursos y talleres para profesionales y entusiastas de la terapia manual y el masaje terapéutico.',
      exploreCourses: 'Explorar Cursos',
      contactForInfo: 'Contactar para Información',
    },
  },
  en: {
    // Hero Section
    hero: {
      badge: 'Knowledge and Tips',
      title: 'Our Blog',
      subtitle: 'Articles, tips, and knowledge about manual therapy, therapeutic massage, and integral wellbeing.',
    },
    
    // Loading States
    loading: {
      loadingArticles: 'Loading articles...',
      loadingArticle: 'Loading article...',
    },
    
    // Error States
    error: {
      loadError: 'Error loading posts',
      connectionError: 'Connection error',
      notFound: 'Post not found',
      notFoundDesc: 'The article you are looking for does not exist or has been removed.',
      tryAgain: 'Try again',
    },
    
    // Empty State
    empty: {
      noArticles: 'No articles available',
      noArticlesDesc: 'We will have new content for you soon.',
    },
    
    // Blog Actions
    actions: {
      readArticle: 'Read Article',
      readMore: 'Read more',
      backToBlog: 'Back to Blog',
    },
    
    // Breadcrumb
    breadcrumb: {
      home: 'Home',
      blog: 'Blog',
    },
    
    // Article Content
    article: {
      usefulArticle: 'Was this article helpful?',
      usefulArticleDesc: 'If you have questions or want to know more about our services, we are here to help you.',
      contactForInfo: 'Contact us for more information',
      exploreServices: 'Explore our services',
    },
    
    // Related Posts
    related: {
      title: 'Related Articles',
      subtitle: 'Other articles that might interest you',
    },
    
    // CTA Section
    cta: {
      title: 'Want to learn more about manual therapy?',
      subtitle: 'We offer courses and workshops for professionals and enthusiasts of manual therapy and therapeutic massage.',
      exploreCourses: 'Explore Courses',
      contactForInfo: 'Contact for Information',
    },
  },
};

interface BlogProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const { language } = useLanguage();
  
  const t = blogTranslations[language];

  const value: BlogContextType = {
    t,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}; 
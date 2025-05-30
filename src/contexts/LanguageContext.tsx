// src/contexts/LanguageContext.tsx - Actualizado con traducciones de About
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tipos para los idiomas soportados
export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Traducciones
const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.services': 'Servicios',
    'nav.shop': 'Tienda',
    'nav.courses': 'Certificaciones',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': '¿EL DOLOR TE IMPIDE REALIZAR TUS ACTIVIDADES DIARIAS?',
    'hero.subtitle': 'Atrévete a vivir sin dolor, transforma tus movimientos limitados en libertad.',
    'hero.services': 'Nuestros Servicios',
    'hero.appointment': 'Agenda una Cita',
    
    // Services Section
    'services.title': 'Servicios Diseñados para Tu Bienestar',
    'services.subtitle': 'Ofrecemos una amplia gama de servicios terapéuticos y de bienestar, adaptados a tus necesidades específicas.',
    'services.therapeutic': 'Masaje Terapéutico Especializado',
    'services.therapeutic.desc': 'Especializado en aliviar dolores crónicos, lesiones y problemas musculares específicos.',
    'services.clinical': 'Masajes Clínicos',
    'services.clinical.desc': 'Técnicas especializadas para condiciones médicas específicas, como descontracturante, tejido profundo y más.',
    'services.relaxing': 'Masajes Relajantes',
    'services.relaxing.desc': 'Diseñados para reducir el estrés, la ansiedad y promover una sensación de bienestar general.',
    'services.corporate': 'Masaje Corporativo',
    'services.corporate.desc': 'Servicio profesional de masaje Shiatsu para empresas, ideal para reducir el estrés laboral.',
    'services.holistic': 'Terapias Holísticas',
    'services.holistic.desc': 'Enfoque integral que combina diferentes técnicas para armonizar cuerpo, mente y espíritu.',
    'services.packages': 'Paquetes de Masaje',
    'services.packages.desc': 'Experiencias completas que combinan diferentes técnicas y extras para una experiencia integral.',
    'services.more.info': 'Más información',
    'services.view.all': 'Ver todos los servicios',
    
    // Products Section
    'products.title': 'Complementa Tu Tratamiento',
    'products.subtitle': 'Productos de alta calidad creados en laboratorio profesional con ingredientes naturales para complementar tu tratamiento.',
    'products.home.cabin': 'Para uso en casa y cabina de masaje',
    'products.visit.shop': 'Visitar tienda',
    'products.view.details': 'Ver detalles',
    
    // About Section
    'about.title': 'Sobre Nosotros',
    'about.subtitle': 'Conoce nuestra historia, misión y los valores que guían nuestro trabajo diario para ofrecerte la mejor experiencia terapéutica.',
    'about.history': 'Nuestra Historia',
    'about.history.desc': 'Body Therapy LLC es un centro especializado en terapia manual, fundado con la misión de proporcionar alivio, bienestar y una mejor calidad de vida a nuestros pacientes.',
    'about.founder.desc': 'Nuestra directora, María Mercedes Lizalde, combina años de experiencia con un enfoque personalizado que atiende las necesidades específicas de cada paciente.',
    'about.learn.more': 'Conoce nuestra historia',
    'about.commitment': 'Comprometidos con tu bienestar',
    'about.learn.about': 'Conoce más sobre nosotros',
    
    // About Page
    'about.hero.badge': 'Conócenos',
    'about.hero.title': 'Sobre Nosotros',
    'about.hero.subtitle': 'Conoce nuestra historia, misión y los valores que guían nuestro trabajo diario para ofrecerte la mejor experiencia terapéutica.',
    
    // Story Section
    'about.story.title': 'Nuestra Historia',
    'about.story.p1': 'Body Therapy LLC nació del sueño y la pasión de María Mercedes Lizalde, conocida cariñosamente como Mercy, una terapeuta que ha dedicado su vida a ayudar a los demás a través de la terapia manual.',
    'about.story.p2': 'Con años de experiencia y formación especializada, Mercy fundó Body Therapy LLC con la visión de crear un espacio donde las personas puedan encontrar alivio a su dolor y mejorar su calidad de vida a través de técnicas terapéuticas personalizadas.',
    'about.story.p3': 'Hoy, Body Therapy LLC se ha convertido en un referente en terapia manual, combinando técnicas tradicionales con enfoques innovadores para ofrecer el mejor servicio a nuestros clientes.',
    
    // Mission & Vision
    'about.mission.title': 'Misión',
    'about.mission.desc': 'Nuestra misión es brindar atención de terapia manual de alta calidad, personalizada y basada en la evidencia, con el objetivo de aliviar dolores, mejorar la movilidad y promover el bienestar integral de nuestros pacientes.',
    'about.vision.title': 'Visión',
    'about.vision.desc': 'Ser la principal referencia en terapia manual, apoyándonos en la naturaleza para mejorar tus movimientos, vivas libre de dolor y con mejor calidad de vida.',
    
    // Values
    'about.values.title': 'Nuestros Valores',
    'about.values.subtitle': 'Los principios que guían nuestras acciones y definen nuestra forma de trabajo',
    'about.values.service.title': 'Servicio',
    'about.values.service.desc': 'Nos dedicamos a ofrecer atención de calidad, poniendo siempre las necesidades y bienestar de nuestros pacientes en primer lugar. Nuestro objetivo es brindar una experiencia positiva y efectiva en cada sesión.',
    'about.values.respect.title': 'Respeto',
    'about.values.respect.desc': 'Valoramos y consideramos la individualidad de cada persona, tratando a todos con cortesía, dignidad y comprensión. Reconocemos la importancia de escuchar y aceptar diferentes perspectivas y condiciones.',
    'about.values.empathy.title': 'Empatía',
    'about.values.empathy.desc': 'Nos esforzamos por entender y compartir los sentimientos y experiencias de nuestros pacientes, creando un ambiente de confianza y apoyo para facilitar su proceso de recuperación.',
    'about.values.integrity.title': 'Integridad',
    'about.values.integrity.desc': 'Actuamos con honestidad, transparencia y ética en todas nuestras acciones, asegurando que nuestras prácticas sean responsables y confiables.',
    'about.values.commitment.title': 'Compromiso',
    'about.values.commitment.desc': 'Estamos dedicados a brindar lo mejor de nosotros, manteniendo una actitud comprometida con la salud y el bienestar de nuestros pacientes, y buscando siempre mejorar nuestros servicios.',
    'about.values.responsibility.title': 'Responsabilidad',
    'about.values.responsibility.desc': 'Asumimos la responsabilidad de nuestras acciones y decisiones, garantizando un trato profesional y seguro en cada intervención.',
    
    // CTA Section
    'about.cta.title': '¿Listo para mejorar tu bienestar?',
    'about.cta.subtitle': 'Agenda una consulta hoy mismo y comienza tu camino hacia una vida sin dolor y con mayor vitalidad.',
    'about.cta.button': 'Contáctanos Ahora',
    
    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'Experiencias reales de personas que han transformado su bienestar con nuestras terapias',
    'testimonials.view.all': 'Ver todos los testimonios',
    
    // Footer
    'footer.services': 'Servicios',
    'footer.links': 'Enlaces',
    'footer.contact': 'Contacto',
    'footer.follow': 'Síguenos',
    'footer.schedule': 'Horario',
    'footer.schedule.weekdays': 'Lunes - Viernes: 9:00 AM - 6:00 PM',
    'footer.schedule.saturday': 'Sábado: 9:00 AM - 5:00 PM',
    'footer.schedule.sunday': 'Domingo: Cerrado',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.save': 'Guardar',
    'common.cancel': 'Cancelar',
    'common.delete': 'Eliminar',
    'common.edit': 'Editar',
    'common.view': 'Ver',
    'common.back': 'Volver',
    'common.next': 'Siguiente',
    'common.previous': 'Anterior',
    'common.search': 'Buscar',
    'common.close': 'Cerrar',
    'common.open': 'Abrir',
    'common.yes': 'Sí',
    'common.no': 'No',
    'common.required': 'Requerido',
    'common.optional': 'Opcional',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Estamos aquí para ayudarte. Contáctanos para consultas, citas o cualquier información que necesites.',
    'contact.info': 'Información de Contacto',
    'contact.phone': 'Teléfono',
    'contact.email': 'Email',
    'contact.schedule': 'Horario',
    'contact.address': 'Dirección',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Teléfono',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.success': 'Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.',
    'contact.form.error': 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.',
    
    // Blog
    'blog.title': 'Nuestro Blog',
    'blog.subtitle': 'Artículos, consejos y conocimientos sobre terapia manual, masaje terapéutico y bienestar integral.',
    'blog.read.more': 'Leer más',
    'blog.read.article': 'Leer Artículo',
    'blog.related': 'Artículos Relacionados',
    'blog.no.posts': 'No hay artículos disponibles',
    'blog.no.posts.desc': 'Próximamente tendremos contenido nuevo para ti.',
    
    // Services Page
    'services.page.title': 'Nuestros Servicios',
    'services.page.subtitle': 'Ofrecemos una amplia gama de terapias manuales personalizadas para aliviar el dolor, mejorar la movilidad y promover el bienestar integral.',
    'services.reserve': 'Reservar',
    'services.duration': 'Duración',
    'services.price': 'Precio',
    
    // Shop
    'shop.title': 'Nuestra Tienda',
    'shop.subtitle': 'Descubre nuestra selección de productos terapéuticos de alta calidad, elaborados con ingredientes naturales para complementar tus tratamientos.',
    'shop.cart': 'Carrito',
    'shop.add.to.cart': 'Agregar al carrito',
    'shop.view.cart': 'Ver carrito',
    'shop.checkout': 'Proceder al pago',
    'shop.empty.cart': 'Tu carrito está vacío',
    'shop.total': 'Total',
    'shop.quantity': 'Cantidad',
    
    // Courses
    'courses.title': 'Certificaciones Especializados',
    'courses.subtitle': 'Explora nuestros cursos diseñados para profesionales del masaje y terapeutas',
    'courses.request.info': 'Solicitar Información',
    'courses.professional.training': 'Formación Profesional',
    'courses.training.desc': 'Amplía tus conocimientos y habilidades como masajista.',
    'courses.contact.us': 'Contáctanos Ahora',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.shop': 'Shop',
    'nav.courses': 'Certifications',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'DOES PAIN PREVENT YOU FROM PERFORMING YOUR DAILY ACTIVITIES?',
    'hero.subtitle': 'Dare to live without pain, transform your limited movements into freedom.',
    'hero.services': 'Our Services',
    'hero.appointment': 'Schedule an Appointment',
    
    // Services Section
    'services.title': 'Services Designed for Your Wellbeing',
    'services.subtitle': 'We offer a wide range of therapeutic and wellness services, adapted to your specific needs.',
    'services.therapeutic': 'Specialized Therapeutic Massage',
    'services.therapeutic.desc': 'Specialized in relieving chronic pain, injuries and specific muscular problems.',
    'services.clinical': 'Clinical Massages',
    'services.clinical.desc': 'Specialized techniques for specific medical conditions, such as trigger point, deep tissue and more.',
    'services.relaxing': 'Relaxing Massages',
    'services.relaxing.desc': 'Designed to reduce stress, anxiety and promote a general sense of wellbeing.',
    'services.corporate': 'Corporate Massage',
    'services.corporate.desc': 'Professional Shiatsu massage service for companies, ideal for reducing work stress.',
    'services.holistic': 'Holistic Therapies',
    'services.holistic.desc': 'Comprehensive approach that combines different techniques to harmonize body, mind and spirit.',
    'services.packages': 'Massage Packages',
    'services.packages.desc': 'Complete experiences that combine different techniques and extras for an integral experience.',
    'services.more.info': 'More information',
    'services.view.all': 'View all services',
    
    // Products Section
    'products.title': 'Complement Your Treatment',
    'products.subtitle': 'High quality products created in professional laboratory with natural ingredients to complement your treatment.',
    'products.home.cabin': 'For home and massage cabin use',
    'products.visit.shop': 'Visit shop',
    'products.view.details': 'View details',
    
    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Learn about our history, mission and the values that guide our daily work to offer you the best therapeutic experience.',
    'about.history': 'Our History',
    'about.history.desc': 'Body Therapy LLC is a center specialized in manual therapy, founded with the mission of providing relief, wellness and a better quality of life to our patients.',
    'about.founder.desc': 'Our director, María Mercedes Lizalde, combines years of experience with a personalized approach that addresses the specific needs of each patient.',
    'about.learn.more': 'Learn our history',
    'about.commitment': 'Committed to your wellbeing',
    'about.learn.about': 'Learn more about us',
    
    // About Page
    'about.hero.badge': 'Get to Know Us',
    'about.hero.title': 'About Us',
    'about.hero.subtitle': 'Learn about our history, mission and the values that guide our daily work to offer you the best therapeutic experience.',
    
    // Story Section
    'about.story.title': 'Our Story',
    'about.story.p1': 'Body Therapy LLC was born from the dream and passion of María Mercedes Lizalde, affectionately known as Mercy, a therapist who has dedicated her life to helping others through manual therapy.',
    'about.story.p2': 'With years of experience and specialized training, Mercy founded Body Therapy LLC with the vision of creating a space where people can find relief from their pain and improve their quality of life through personalized therapeutic techniques.',
    'about.story.p3': 'Today, Body Therapy LLC has become a reference in manual therapy, combining traditional techniques with innovative approaches to offer the best service to our clients.',
    
    // Mission & Vision
    'about.mission.title': 'Mission',
    'about.mission.desc': 'Our mission is to provide high-quality, personalized and evidence-based manual therapy care, with the goal of relieving pain, improving mobility and promoting the integral wellbeing of our patients.',
    'about.vision.title': 'Vision',
    'about.vision.desc': 'To be the main reference in manual therapy, relying on nature to improve your movements, live pain-free and with better quality of life.',
    
    // Values
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide our actions and define our way of working',
    'about.values.service.title': 'Service',
    'about.values.service.desc': 'We dedicate ourselves to offering quality care, always putting the needs and wellbeing of our patients first. Our goal is to provide a positive and effective experience in each session.',
    'about.values.respect.title': 'Respect',
    'about.values.respect.desc': 'We value and consider the individuality of each person, treating everyone with courtesy, dignity and understanding. We recognize the importance of listening and accepting different perspectives and conditions.',
    'about.values.empathy.title': 'Empathy',
    'about.values.empathy.desc': 'We strive to understand and share the feelings and experiences of our patients, creating an environment of trust and support to facilitate their recovery process.',
    'about.values.integrity.title': 'Integrity',
    'about.values.integrity.desc': 'We act with honesty, transparency and ethics in all our actions, ensuring that our practices are responsible and reliable.',
    'about.values.commitment.title': 'Commitment',
    'about.values.commitment.desc': 'We are dedicated to giving our best, maintaining a committed attitude to the health and wellbeing of our patients, and always seeking to improve our services.',
    'about.values.responsibility.title': 'Responsibility',
    'about.values.responsibility.desc': 'We take responsibility for our actions and decisions, guaranteeing professional and safe treatment in each intervention.',
    
    // CTA Section
    'about.cta.title': 'Ready to improve your wellbeing?',
    'about.cta.subtitle': 'Schedule a consultation today and begin your journey towards a life without pain and with greater vitality.',
    'about.cta.button': 'Contact Us Now',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real experiences from people who have transformed their wellbeing with our therapies',
    'testimonials.view.all': 'View all testimonials',
    
    // Footer
    'footer.services': 'Services',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
    'footer.schedule': 'Schedule',
    'footer.schedule.weekdays': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'footer.schedule.saturday': 'Saturday: 9:00 AM - 5:00 PM',
    'footer.schedule.sunday': 'Sunday: Closed',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.search': 'Search',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.required': 'Required',
    'common.optional': 'Optional',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'We are here to help you. Contact us for consultations, appointments or any information you need.',
    'contact.info': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.schedule': 'Schedule',
    'contact.address': 'Address',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Your message has been sent successfully. We will contact you soon.',
    'contact.form.error': 'There was an error sending your message. Please try again.',
    
    // Blog
    'blog.title': 'Our Blog',
    'blog.subtitle': 'Articles, tips and knowledge about manual therapy, therapeutic massage and integral wellness.',
    'blog.read.more': 'Read more',
    'blog.read.article': 'Read Article',
    'blog.related': 'Related Articles',
    'blog.no.posts': 'No articles available',
    'blog.no.posts.desc': 'We will soon have new content for you.',
    
    // Services Page
    'services.page.title': 'Our Services',
    'services.page.subtitle': 'We offer a wide range of personalized manual therapies to relieve pain, improve mobility and promote integral wellbeing.',
    'services.reserve': 'Reserve',
    'services.duration': 'Duration',
    'services.price': 'Price',
    
    // Shop
    'shop.title': 'Our Shop',
    'shop.subtitle': 'Discover our selection of high quality therapeutic products, made with natural ingredients to complement your treatments.',
    'shop.cart': 'Cart',
    'shop.add.to.cart': 'Add to cart',
    'shop.view.cart': 'View cart',
    'shop.checkout': 'Proceed to checkout',
    'shop.empty.cart': 'Your cart is empty',
    'shop.total': 'Total',
    'shop.quantity': 'Quantity',
    
    // Courses
    'courses.title': 'Specialized Certifications',
    'courses.subtitle': 'Explore our courses designed for massage professionals and therapists',
    'courses.request.info': 'Request Information',
    'courses.professional.training': 'Professional Training',
    'courses.training.desc': 'Expand your knowledge and skills as a massage therapist.',
    'courses.contact.us': 'Contact Us Now',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Cargar idioma desde localStorage al inicializar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Guardar idioma en localStorage cuando cambie
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Función de traducción
  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return translation || key; // Devolver la clave si no se encuentra la traducción
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
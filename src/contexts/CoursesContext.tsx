'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage } from './LanguageContext';

// Tipos para las traducciones de cursos
interface CoursesTranslations {
  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    credentials: string;
  };
  
  // Professional Training Section
  training: {
    title: string;
    expand: string;
    description: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
  };
  
  // Available Programs
  programs: {
    badge: string;
    title: string;
    subtitle: string;
  };
  
  // Individual Courses
  courses: {
    mti: {
      title: string;
      description: string;
      duration: string;
      level: string;
      price: string;
    };
    upper: {
      title: string;
      description: string;
      duration: string;
      level: string;
      price: string;
    };
    lower: {
      title: string;
      description: string;
      duration: string;
      level: string;
      price: string;
    };
  };
  
  // Course Details
  details: {
    duration: string;
    level: string;
    investment: string;
    requestInfo: string;
  };
  
  // Testimonials Section
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    testimonial1: {
      name: string;
      role: string;
      content: string;
    };
    testimonial2: {
      name: string;
      role: string;
      content: string;
    };
    testimonial3: {
      name: string;
      role: string;
      content: string;
    };
  };
  
  // Upcoming Courses Section
  upcoming: {
    badge: string;
    title: string;
    subtitle: string;
  };
  
  // Table Headers
  table: {
    course: string;
    start: string;
    duration: string;
    price: string;
    availability: string;
    action: string;
  };
  
  // Availability Status
  availability: {
    available: string;
    few: string;
    register: string;
  };
  
  // Course Schedule Entries
  schedule: {
    mti: {
      date: string;
      duration: string;
    };
    upper: {
      date: string;
      duration: string;
    };
    lower: {
      date: string;
      duration: string;
    };
  };
  
  // Package Deal
  package: {
    title: string;
    description: string;
    button: string;
  };
  
  // CTA Section
  cta: {
    title: string;
    subtitle: string;
    contact: string;
    phone: string;
  };
}

interface CoursesContextType {
  t: CoursesTranslations;
}

// Crear el contexto
const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (context === undefined) {
    throw new Error('useCourses must be used within a CoursesProvider');
  }
  return context;
};

// Traducciones de cursos
const coursesTranslations = {
  es: {
    // Hero Section
    hero: {
      badge: 'Formación Especializada',
      title: 'CERTIFICACIONES EN TÉCNICAS DE TERAPIA MANUAL PARA MASAJISTAS PROFESIONALES: TU CAMINO HACIA LA EXCELENCIA.',
      subtitle: 'Por: María Mercedes Lizalde',
      credentials: 'LMT-Instructor-Proveedor de Clases Continuas',
    },
    
    // Professional Training Section
    training: {
      title: 'Formación Profesional',
      expand: 'Amplía tus conocimientos y habilidades como masajista.',
      description: 'Nuestros cursos combinan teoría con práctica intensiva, en grupos reducidos para garantizar atención personalizada y un aprendizaje efectivo.',
      feature1: 'Instructores certificados con amplia experiencia',
      feature2: 'Materiales didácticos de alta calidad',
      feature3: 'Práctica supervisada en grupos reducidos',
      feature4: 'Certificación avalada',
    },
    
    // Available Programs
    programs: {
      badge: 'Programas Disponibles',
      title: 'Nuestros Certificaciones Especializados',
      subtitle: 'Explora nuestros cursos diseñados para profesionales del masaje y terapeutas',
    },
    
    // Individual Courses
    courses: {
      mti: {
        title: 'Curso de Terapia de Masaje MTI para Adultos',
        description: 'El curso incluye una descripción general completa de los desafíos de enseñar a estudiantes adultos. Habilidades prácticas requeridas para guiar a los estudiantes adultos. Una consideración detallada de un plan de estudios de terapia de masajes TDLR aprobado y requisitos.',
        duration: '30 horas',
        level: 'Profesional',
        price: '$450.00',
      },
      upper: {
        title: 'Estiramiento Deportivo Miembro Superior',
        description: 'Esta clase incluye anatomía de miembros superiores, manipulación de los tejidos blandos para realizar estiramientos de forma correcta y evitar lesiones. Cómo, cuándo y en qué momento se deben llevar a cabo.',
        duration: '6 horas',
        level: 'Intermedio',
        price: '$150.00',
      },
      lower: {
        title: 'Estiramiento Deportivo Miembro Inferior',
        description: 'Esta clase incluye anatomía de miembros inferiores, manipulación de los tejidos blandos para realizar estiramientos de forma correcta y evitar lesiones. Cómo, cuándo y en qué momento se deben llevar a cabo.',
        duration: '6 horas',
        level: 'Intermedio',
        price: '$150.00',
      },
    },
    
    // Course Details
    details: {
      duration: 'Duración',
      level: 'Nivel',
      investment: 'Inversión',
      requestInfo: 'Solicitar Información',
    },
    
    // Testimonials Section
    testimonials: {
      badge: 'Experiencias',
      title: 'Lo que Dicen Nuestros Estudiantes',
      subtitle: 'Experiencias de quienes han tomado nuestros cursos especializados',
      testimonial1: {
        name: 'Laura Martínez',
        role: 'Masajista profesional',
        content: '"El curso de Estiramiento Deportivo fue clave para mejorar mis servicios. Las técnicas aprendidas me permiten ofrecer un tratamiento más completo y efectivo a mis clientes deportistas."',
      },
      testimonial2: {
        name: 'Carlos Rodríguez',
        role: 'Fisioterapeuta',
        content: '"Como profesional de la fisioterapia, el curso de estiramiento me proporcionó nuevas herramientas para tratar lesiones deportivas. La metodología de enseñanza facilita la aplicación inmediata de lo aprendido."',
      },
      testimonial3: {
        name: 'Miguel Sánchez',
        role: 'Instructor de masaje',
        content: '"El curso MTI para enseñar a adultos transformó mi manera de impartir clases. Las estrategias pedagógicas y el conocimiento del plan TDLR son invaluables para cualquier instructor de masaje."',
      },
    },
    
    // Upcoming Courses Section
    upcoming: {
      badge: 'Calendario',
      title: 'Próximas Fechas',
      subtitle: 'Reserva tu lugar en nuestros próximos cursos y talleres',
    },
    
    // Table Headers
    table: {
      course: 'Curso',
      start: 'Fecha de Inicio',
      duration: 'Duración',
      price: 'Precio',
      availability: 'Disponibilidad',
      action: 'Acción',
    },
    
    // Availability Status
    availability: {
      available: 'Plazas disponibles',
      few: 'Pocas plazas',
      register: 'Inscribirse',
    },
    
    // Course Schedule Entries
    schedule: {
      mti: {
        date: '15 de Mayo, 2025',
        duration: '30 horas (5 días)',
      },
      upper: {
        date: '10 de Junio, 2025',
        duration: '6 horas (1 día)',
      },
      lower: {
        date: '11 de Junio, 2025',
        duration: '6 horas (1 día)',
      },
    },
    
    // Package Deal
    package: {
      title: '¿Interesado en un paquete completo?',
      description: 'Obtén un 10% de descuento al inscribirte en el paquete completo de Estiramiento Deportivo (miembro superior e inferior) por solo $270.00',
      button: 'Solicitar Paquete Completo',
    },
    
    // CTA Section
    cta: {
      title: '¿Quieres ampliar tus conocimientos?',
      subtitle: 'Contáctanos para obtener más información sobre nuestros cursos y programas de formación especializada.',
      contact: 'Contáctanos Ahora',
      phone: 'Llámanos: (713) 922-8973',
    },
  },
  en: {
    // Hero Section
    hero: {
      badge: 'Specialized Training',
      title: 'MANUAL THERAPY TECHNIQUE CERTIFICATIONS FOR PROFESSIONAL MASSAGE THERAPISTS: YOUR PATH TO EXCELLENCE.',
      subtitle: 'By: María Mercedes Lizalde',
      credentials: 'LMT-Instructor-Provider of Continuing Education',
    },
    
    // Professional Training Section
    training: {
      title: 'Professional Training',
      expand: 'Expand your knowledge and skills as a massage therapist.',
      description: 'Our courses combine theory with intensive practice, in small groups to ensure personalized attention and effective learning.',
      feature1: 'Certified instructors with extensive experience',
      feature2: 'High-quality teaching materials',
      feature3: 'Supervised practice in small groups',
      feature4: 'Accredited certification',
    },
    
    // Available Programs
    programs: {
      badge: 'Available Programs',
      title: 'Our Specialized Certifications',
      subtitle: 'Explore our courses designed for massage professionals and therapists',
    },
    
    // Individual Courses
    courses: {
      mti: {
        title: 'MTI Massage Therapy Course for Adults',
        description: 'The course includes a comprehensive overview of the challenges of teaching adult students. Practical skills required to guide adult students. A detailed consideration of an approved TDLR massage therapy curriculum and requirements.',
        duration: '30 hours',
        level: 'Professional',
        price: '$450.00',
      },
      upper: {
        title: 'Sports Stretching Upper Limb',
        description: 'This class includes upper limb anatomy, soft tissue manipulation to perform stretches correctly and avoid injuries. How, when, and at what moment they should be carried out.',
        duration: '6 hours',
        level: 'Intermediate',
        price: '$150.00',
      },
      lower: {
        title: 'Sports Stretching Lower Limb',
        description: 'This class includes lower limb anatomy, soft tissue manipulation to perform stretches correctly and avoid injuries. How, when, and at what moment they should be carried out.',
        duration: '6 hours',
        level: 'Intermediate',
        price: '$150.00',
      },
    },
    
    // Course Details
    details: {
      duration: 'Duration',
      level: 'Level',
      investment: 'Investment',
      requestInfo: 'Request Information',
    },
    
    // Testimonials Section
    testimonials: {
      badge: 'Experiences',
      title: 'What Our Students Say',
      subtitle: 'Experiences from those who have taken our specialized courses',
      testimonial1: {
        name: 'Laura Martínez',
        role: 'Professional massage therapist',
        content: '"The Sports Stretching course was key to improving my services. The techniques learned allow me to offer more complete and effective treatment to my sports clients."',
      },
      testimonial2: {
        name: 'Carlos Rodríguez',
        role: 'Physical therapist',
        content: '"As a physical therapy professional, the stretching course provided me with new tools to treat sports injuries. The teaching methodology facilitates the immediate application of what was learned."',
      },
      testimonial3: {
        name: 'Miguel Sánchez',
        role: 'Massage instructor',
        content: '"The MTI course for teaching adults transformed my way of teaching classes. The pedagogical strategies and knowledge of the TDLR plan are invaluable for any massage instructor."',
      },
    },
    
    // Upcoming Courses Section
    upcoming: {
      badge: 'Calendar',
      title: 'Upcoming Dates',
      subtitle: 'Reserve your spot in our upcoming courses and workshops',
    },
    
    // Table Headers
    table: {
      course: 'Course',
      start: 'Start Date',
      duration: 'Duration',
      price: 'Price',
      availability: 'Availability',
      action: 'Action',
    },
    
    // Availability Status
    availability: {
      available: 'Available spots',
      few: 'Few spots left',
      register: 'Register',
    },
    
    // Course Schedule Entries
    schedule: {
      mti: {
        date: 'May 15, 2025',
        duration: '30 hours (5 days)',
      },
      upper: {
        date: 'June 10, 2025',
        duration: '6 hours (1 day)',
      },
      lower: {
        date: 'June 11, 2025',
        duration: '6 hours (1 day)',
      },
    },
    
    // Package Deal
    package: {
      title: 'Interested in a complete package?',
      description: 'Get a 10% discount when enrolling in the complete Sports Stretching package (upper and lower limb) for only $270.00',
      button: 'Request Complete Package',
    },
    
    // CTA Section
    cta: {
      title: 'Want to expand your knowledge?',
      subtitle: 'Contact us for more information about our courses and specialized training programs.',
      contact: 'Contact Us Now',
      phone: 'Call us: (713) 922-8973',
    },
  },
};

interface CoursesProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
  const { language } = useLanguage();
  
  const t = coursesTranslations[language];

  const value: CoursesContextType = {
    t,
  };

  return (
    <CoursesContext.Provider value={value}>
      {children}
    </CoursesContext.Provider>
  );
}; 
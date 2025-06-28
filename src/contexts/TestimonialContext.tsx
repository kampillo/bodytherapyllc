'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage } from './LanguageContext';

// Tipos para los testimonios
export interface Testimonial {
  id: number;
  content: {
    es: string;
    en: string;
  };
  author: string;
  role: {
    es: string;
    en: string;
  };
}

// Tipo para testimonios traducidos (contenido ya traducido)
export interface TranslatedTestimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

interface TestimonialContextType {
  getTestimonials: () => TranslatedTestimonial[];
  getTestimonial: (id: number) => TranslatedTestimonial | undefined;
  getTestimonialTranslation: (key: string) => string;
}

// Crear el contexto
const TestimonialContext = createContext<TestimonialContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useTestimonials = () => {
  const context = useContext(TestimonialContext);
  if (context === undefined) {
    throw new Error('useTestimonials must be used within a TestimonialProvider');
  }
  return context;
};

// Lista completa de testimonios con traducciones
const testimonials: Testimonial[] = [
  {
    id: 1,
    content: {
      es: 'Quiero empezar agradeciendo el día que Dios me permitió conocer a Mercedes y su hermoso trabajo de masoterapia todo un arte en sus manos, Dios le bendijo con una habilidad en forma de caricia al alma, una terapia al corazón y a mis oídos. Sus manos van más allá de un simple masaje terrenal; es una caricia espiritual.',
      en: 'I want to start by thanking the day that God allowed me to meet Mercedes and her beautiful massage therapy work, truly an art in her hands. God blessed her with an ability in the form of a caress to the soul, a therapy to the heart and to my ears. Her hands go beyond a simple earthly massage; it is a spiritual caress.'
    },
    author: 'Nayeli Cruz',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 2,
    content: {
      es: 'No fué casualidad encontrar a una mujer extraordinaria, qué con sus manos ha sanado mi vida, con tal empeño, responsabilidad en lo qué hace y sobre todo llena de cariño, al poner sus manos en beneficio de quién sufre de dolor en el cuerpo y en el corazón...',
      en: 'It was no coincidence to find an extraordinary woman, who with her hands has healed my life, with such dedication, responsibility in what she does and above all full of love, by putting her hands to the benefit of those who suffer from pain in the body and heart...'
    },
    author: 'Martha Téllez',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 3,
    content: {
      es: 'Una maravilla de atención me encanta tu servicio excelente trabajo tu carisma me dejo muy relajada un ambiente tranquilo familiar me ayudaron mucho la terapia de masajes recomendaciones al 100%',
      en: 'Wonderful attention, I love your service, excellent work, your charisma left me very relaxed, a quiet family atmosphere, the massage therapy helped me a lot, 100% recommendations'
    },
    author: 'Mary Cota',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 4,
    content: {
      es: 'Si buscas algo más que un simple masaje, Mercedes es la persona a quien debes acudir. Ella no solo trabaja tus músculos: crea una experiencia que te hace sentir completamente renovado, tanto física como mentalmente. Tu técnica, atención al detalle y la energía que aportas a tu trabajo marcan la diferencia.',
      en: 'If you\'re looking for something more than a simple massage, Mercedes is the person you should turn to. She doesn\'t just work your muscles: she creates an experience that makes you feel completely renewed, both physically and mentally. Her technique, attention to detail, and the energy she brings to her work make the difference.'
    },
    author: 'Carlos Lizalde',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 5,
    content: {
      es: 'Hola Mercedes, ¡gracias! ¡Tus masajes son los MEJORES! A veces simplemente sabes que algo va a estar bien y desde el momento en que entré pude sentir que el estrés comenzaba a desvanecerse, y cuando me fui, ¡era como si fuera una persona completamente nueva!',
      en: 'Hello Mercedes, thank you! Your massages are the BEST! Sometimes you just know something is going to be good and from the moment I walked in I could feel the stress beginning to fade, and when I left, it was like I was a completely new person!'
    },
    author: 'Frank Tritico',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 6,
    content: {
      es: 'Body Therapy LLC no es solo un centro de terapia, es un lugar donde la esperanza se convierte en realidad. Después de pasar por dos cirugías de columna, enfrenté el mayor desafío de mi vida: volver a caminar. Gracias a su trabajo, logré caminar en tiempo récord, algo que muchos no creían posible.',
      en: 'Body Therapy LLC is not just a therapy center, it\'s a place where hope becomes reality. After going through two spine surgeries, I faced the biggest challenge of my life: walking again. Thanks to their work, I managed to walk in record time, something many didn\'t believe was possible.'
    },
    author: 'Grecia Berrios',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 7,
    content: {
      es: 'Body Therapy excelente servicio recomendado al 💯 súper profesional amo esos masajes',
      en: 'Body Therapy excellent service 100% recommended, super professional, I love those massages'
    },
    author: 'Lula Martínez',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 8,
    content: {
      es: 'Tuve una experiencia increíble con Mercy Lizalde. Desde el momento en que llegué, ella me hizo sentir cómoda y realmente escuchó mis necesidades. Lo que más destacó fue su profundo conocimiento del cuerpo y su capacidad para identificar exactamente de dónde venía la tensión.',
      en: 'I had an incredible experience with Mercy Lizalde. From the moment I arrived, she made me feel comfortable and really listened to my needs. What stood out most was her deep knowledge of the body and her ability to identify exactly where the tension was coming from.'
    },
    author: 'Héctor Sánchez',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 9,
    content: {
      es: 'Quiero tomarme un momento para agradecerte desde el fondo de mi corazón por todo lo que has hecho por mí. No solo eres una profesional increíble, con manos mágicas que alivian cualquier dolor, sino que también tienes un corazón enorme y un trato tan especial que cada sesión contigo es un verdadero regalo.',
      en: 'I want to take a moment to thank you from the bottom of my heart for everything you have done for me. You are not only an incredible professional, with magical hands that relieve any pain, but you also have a huge heart and such special treatment that every session with you is a true gift.'
    },
    author: 'Vicky Jiménez',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 10,
    content: {
      es: 'Recomiendo a la señora Mercedes por sus terapias a mí en lo personal me a ayudado muchísimo, tuve accidente y no quedé bien de mi lesión ella me ayudó mucho a recuperar mis movimientos de los brazos ya sin dolor.',
      en: 'I recommend Mrs. Mercedes for her therapies, she has helped me personally a lot, I had an accident and didn\'t recover well from my injury, she helped me a lot to recover my arm movements without pain.'
    },
    author: 'Marta Quiroa',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 11,
    content: {
      es: 'Recomiendo ampliamente a mi terapeuta enfocada en terapia manual María Mercedes. Sin duda la mejor. He mejorado mucho lo cual le agradezco.',
      en: 'I highly recommend my manual therapy focused therapist María Mercedes. Without a doubt the best. I have improved a lot which I thank her for.'
    },
    author: 'Ma Luisa Gaxiola',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 12,
    content: {
      es: 'Quiero expresar mi agradecimiento a Body Therapy LLC por su excelente atención al cliente y profesionalismo. Mercedes, quien ha sido una gran amiga durante más de 5 años, siempre ofrece un servicio excepcional. Su dedicación y calidez hacen que cada experiencia sea única.',
      en: 'I want to express my gratitude to Body Therapy LLC for their excellent customer service and professionalism. Mercedes, who has been a great friend for over 5 years, always provides exceptional service. Her dedication and warmth make every experience unique.'
    },
    author: 'Jenni Rodríguez',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 13,
    content: {
      es: 'El mejor masaje descontracturante y de relajación que he recibido es el de Mercedes Lizalde ❤️. He quedado encantada, hace un excelente trabajo. Recomendadisima',
      en: 'The best decontracting and relaxation massage I have received is from Mercedes Lizalde ❤️. I have been delighted, she does an excellent job. Highly recommended'
    },
    author: 'Alma Cecilia',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 14,
    content: {
      es: 'Como parte del riesgo de mi trabajo físico, me contracturo seguido, y había llegado a un punto en que los dolores musculares me estaban impidiendo seguir con mis funciones, pero gracias a la recomendacion de un amigo fui a tomar masajes a body therapy y he recuperado mi movilidad y el dolor desapareció, gracias por brindarme salud.',
      en: 'As part of the risk of my physical work, I get contractures frequently, and I had reached a point where muscle pain was preventing me from continuing with my functions, but thanks to a friend\'s recommendation I went to get massages at body therapy and I have recovered my mobility and the pain disappeared, thank you for providing me with health.'
    },
    author: 'Manuel Cázares',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 15,
    content: {
      es: 'Excelente servicio, realmente profesional, sin duda fue esencial para mi completa recuperación el haber contado con los servicios, principalmente en mi operación de las dos rodillas, las terapias que se ocuparon y terapia de mi brazo, sus manitas son expertas y Sanadoras al millón, Gracias Mechita por tanto DTB 🙏🙏🙏',
      en: 'Excellent service, truly professional, without a doubt it was essential for my complete recovery to have had the services, mainly in my operation of both knees, the therapies that were used and therapy for my arm, her little hands are expert and Healing to the million, Thank you Mechita for so much DTB 🙏🙏🙏'
    },
    author: 'Pita Vázquez',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 16,
    content: {
      es: 'Aqui llegue por mis bendiciones jajaja... **Excelente servicio, 100% recomendado**',
      en: 'I got here through my blessings hahaha... **Excellent service, 100% recommended**'
    },
    author: 'Norma Servin',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 17,
    content: {
      es: 'He tenido la oportunidad de recibir distintos tipos de masajes, relajantes, descontracturantes y hasta baño de novia!! Y todos tienen un factor común, que es el Amor y la entrega con el que los recibí. Altamente recomendable!! Todos merecemos el gran regalo de un masaje!!',
      en: 'I have had the opportunity to receive different types of massages, relaxing, decontracting and even a bridal bath!! And they all have a common factor, which is the Love and dedication with which I received them. Highly recommended!! We all deserve the great gift of a massage!!'
    },
    author: 'Maricela C',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 18,
    content: {
      es: 'Trabaja Exelente María Mercedes mi familia y yo quedamos súper contentos con sus masajes nos sentimos súper bien con esas manos santas que dios te dio como extrañamos los masajes tan bien que nos sentimos dios te siga bendiciendo',
      en: 'Excellent work María Mercedes, my family and I are super happy with her massages, we feel super good with those holy hands that God gave you, how we miss the massages so much that we feel, God continue to bless you'
    },
    author: 'Clara Nava',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 19,
    content: {
      es: 'Yo fui una de las primeras clientas de Maria Mercedes de verdad hace como 18 años desde entonces ya era excelente en su trabajo ya sabrás tu la experiencia que ahorita a adquirido a través de tanto tiempo y conocimiento',
      en: 'I was one of Maria Mercedes\' first clients, really about 18 years ago, since then she was already excellent in her work, you will know the experience she has now acquired through so much time and knowledge'
    },
    author: 'María Elsa Valenzuela',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  },
  {
    id: 20,
    content: {
      es: 'Thank you to Body therapy for their amazing services, physical therapy, very relaxing massage and wonderful oils, Mercedes did a great job, I highly recommend her services.',
      en: 'Thank you to Body therapy for their amazing services, physical therapy, very relaxing massage and wonderful oils, Mercedes did a great job, I highly recommend her services.'
    },
    author: 'Marielena Muñoz',
    role: {
      es: 'Cliente',
      en: 'Client'
    }
  }
];

// Traducciones específicas para testimonios
const testimonialTranslations: Record<string, Record<string, string>> = {
  es: {
    'view.all': 'Ver todos los testimonios',
    'title': 'Lo que dicen nuestros clientes',
    'subtitle': 'Descubre las experiencias transformadoras de quienes han confiado en nuestros servicios',
    'badge': 'Testimonios',
    'previous': 'Anterior',
    'next': 'Siguiente'
  },
  en: {
    'view.all': 'View all testimonials',
    'title': 'What our clients say',
    'subtitle': 'Discover the transformative experiences of those who have trusted our services',
    'badge': 'Testimonials',
    'previous': 'Previous',
    'next': 'Next'
  }
};

interface TestimonialProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const TestimonialProvider: React.FC<TestimonialProviderProps> = ({ children }) => {
  const { language } = useLanguage();

  // Función para obtener testimonios traducidos
  const getTestimonials = (): TranslatedTestimonial[] => {
    return testimonials.map(testimonial => ({
      id: testimonial.id,
      content: testimonial.content[language],
      author: testimonial.author,
      role: testimonial.role[language]
    }));
  };

  // Función para obtener un testimonio específico traducido
  const getTestimonial = (id: number): TranslatedTestimonial | undefined => {
    const testimonial = testimonials.find(t => t.id === id);
    if (!testimonial) return undefined;
    
    return {
      id: testimonial.id,
      content: testimonial.content[language],
      author: testimonial.author,
      role: testimonial.role[language]
    };
  };

  // Función para obtener traducciones específicas de testimonios
  const getTestimonialTranslation = (key: string): string => {
    return testimonialTranslations[language]?.[key] || key;
  };

  const value: TestimonialContextType = {
    getTestimonials,
    getTestimonial,
    getTestimonialTranslation,
  };

  return (
    <TestimonialContext.Provider value={value}>
      {children}
    </TestimonialContext.Provider>
  );
}; 
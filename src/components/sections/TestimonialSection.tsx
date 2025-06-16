'use client';
// src/components/sections/TestimonialCarousel.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
// import Image from 'next/image';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

// Agregar prop showAll a la interfaz del componente
interface TestimonialCarouselProps {
  showAll?: boolean; // Opcional con valor predeterminado false
}

// Lista completa de testimonios
const testimonials = [
  {
    id: 1,
    content: 'Quiero empezar agradeciendo el día que Dios me permitió conocer a Mercedes y su hermoso trabajo de masoterapia todo un arte en sus manos, Dios le bendijo con una habilidad en forma de caricia al alma, una terapia al corazón y a mis oídos. Sus manos van más allá de un simple masaje terrenal; es una caricia espiritual.',
    author: 'Nayeli Cruz',
    role: 'Cliente'
  },
  {
    id: 2,
    content: 'No fué casualidad encontrar a una mujer extraordinaria, qué con sus manos ha sanado mi vida, con tal empeño, responsabilidad en lo qué hace y sobre todo llena de cariño, al poner sus manos en beneficio de quién sufre de dolor en el cuerpo y en el corazón...',
    author: 'Martha Téllez',
    role: 'Cliente'
  },
  {
    id: 3,
    content: 'Una maravilla de atención me encanta tu servicio excelente trabajo tu carisma me dejo muy relajada un ambiente tranquilo familiar me ayudaron mucho la terapia de masajes recomendaciones al 100%',
    author: 'Mary Cota',
    role: 'Cliente'
  },
  {
    id: 4,
    content: 'Si buscas algo más que un simple masaje, Mercedes es la persona a quien debes acudir. Ella no solo trabaja tus músculos: crea una experiencia que te hace sentir completamente renovado, tanto física como mentalmente. Tu técnica, atención al detalle y la energía que aportas a tu trabajo marcan la diferencia.',
    author: 'Carlos Lizalde',
    role: 'Cliente'
  },
  {
    id: 5,
    content: 'Hola Mercedes, ¡gracias! ¡Tus masajes son los MEJORES! A veces simplemente sabes que algo va a estar bien y desde el momento en que entré pude sentir que el estrés comenzaba a desvanecerse, y cuando me fui, ¡era como si fuera una persona completamente nueva!',
    author: 'Frank Tritico',
    role: 'Cliente'
  },
  {
    id: 6,
    content: 'Body Therapy LLC no es solo un centro de terapia, es un lugar donde la esperanza se convierte en realidad. Después de pasar por dos cirugías de columna, enfrenté el mayor desafío de mi vida: volver a caminar. Gracias a su trabajo, logré caminar en tiempo récord, algo que muchos no creían posible.',
    author: 'Grecia Berrios',
    role: 'Cliente'
  },
  {
    id: 7,
    content: 'Body Therapy excelente servicio recomendado al 💯 súper profesional amo esos masajes',
    author: 'Lula Martínez',
    role: 'Cliente'
  },
  {
    id: 8,
    content: 'Tuve una experiencia increíble con Mercy Lizalde. Desde el momento en que llegué, ella me hizo sentir cómoda y realmente escuchó mis necesidades. Lo que más destacó fue su profundo conocimiento del cuerpo y su capacidad para identificar exactamente de dónde venía la tensión.',
    author: 'Héctor Sánchez',
    role: 'Cliente'
  },
  {
    id: 9,
    content: 'Quiero tomarme un momento para agradecerte desde el fondo de mi corazón por todo lo que has hecho por mí. No solo eres una profesional increíble, con manos mágicas que alivian cualquier dolor, sino que también tienes un corazón enorme y un trato tan especial que cada sesión contigo es un verdadero regalo.',
    author: 'Vicky Jiménez',
    role: 'Cliente'
  },
  {
    id: 10,
    content: 'Recomiendo a la señora Mercedes por sus terapias a mí en lo personal me a ayudado muchísimo, tuve accidente y no quedé bien de mi lesión ella me ayudó mucho a recuperar mis movimientos de los brazos ya sin dolor.',
    author: 'Marta Quiroa',
    role: 'Cliente'
  },
  {
    id: 11,
    content: 'Recomiendo ampliamente a mi terapeuta enfocada en terapia manual María Mercedes. Sin duda la mejor. He mejorado mucho lo cual le agradezco.',
    author: 'Ma Luisa Gaxiola',
    role: 'Cliente'
  },
  {
    id: 12,
    content: 'Quiero expresar mi agradecimiento a Body Therapy LLC por su excelente atención al cliente y profesionalismo. Mercedes, quien ha sido una gran amiga durante más de 5 años, siempre ofrece un servicio excepcional. Su dedicación y calidez hacen que cada experiencia sea única.',
    author: 'Jenni Rodríguez',
    role: 'Cliente'
  },
  {
    id: 13,
    content: 'El mejor masaje descontracturante y de relajación que he recibido es el de Mercedes Lizalde ❤️. He quedado encantada, hace un excelente trabajo. Recomendadisima',
    author: 'Alma Cecilia',
    role: 'Cliente'
  },
  {
    id: 14,
    content: 'Como parte del riesgo de mi trabajo físico, me contracturo seguido, y había llegado a un punto en que los dolores musculares me estaban impidiendo seguir con mis funciones, pero gracias a la recomendacion de un amigo fui a tomar masajes a body therapy y he recuperado mi movilidad y el dolor desapareció, gracias por brindarme salud.',
    author: 'Manuel Cázares',
    role: 'Cliente'
  },
  {
    id: 15,
    content: 'Excelente servicio, realmente profesional, sin duda fue esencial para mi completa recuperación el haber contado con los servicios, principalmente en mi operación de las dos rodillas, las terapias que se ocuparon y terapia de mi brazo, sus manitas son expertas y Sanadoras al millón, Gracias Mechita por tanto DTB 🙏🙏🙏',
    author: 'Pita Vázquez',
    role: 'Cliente'
  },
  {
    id: 16,
    content: 'Aqui llegue por mis bendiciones jajaja... **Excelente servicio, 100% recomendado**',
    author: 'Norma Servin',
    role: 'Cliente'
  },
  {
    id: 17,
    content: 'He tenido la oportunidad de recibir distintos tipos de masajes, relajantes, descontracturantes y hasta baño de novia!! Y todos tienen un factor común, que es el Amor y la entrega con el que los recibí. Altamente recomendable!! Todos merecemos el gran regalo de un masaje!!',
    author: 'Maricela C',
    role: 'Cliente'
  },
  {
    id: 18,
    content: 'Trabaja Exelente María Mercedes mi familia y yo quedamos súper contentos con sus masajes nos sentimos súper bien con esas manos santas que dios te dio como extrañamos los masajes tan bien que nos sentimos dios te siga bendiciendo',
    author: 'Clara Nava',
    role: 'Cliente'
  },
  {
    id: 19,
    content: 'Yo fui una de las primeras clientas de Maria Mercedes de verdad hace como 18 años desde entonces ya era excelente en su trabajo ya sabrás tu la experiencia que ahorita a adquirido a través de tanto tiempo y conocimiento',
    author: 'María Elsa Valenzuela',
    role: 'Cliente'
  },
  {
    id: 20,
    content: 'Thank you to Body therapy for their amazing services, physical therapy, very relaxing massage and wonderful oils, Mercedes did a great job, I highly recommend her services.',
    author: 'Marielena Muñoz',
    role: 'Cliente'
  }
];

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ showAll = false }) => {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 1; // Velocidad de desplazamiento en píxeles por frame
  
  // Duplicar testimonios para crear un efecto de carrusel infinito
  const extendedTestimonials = [...testimonials, ...testimonials.slice(0, 3)];
  
  // Lógica para mostrar todos los testimonios o solo el carrusel
  const testimonialsToDisplay = showAll ? testimonials : extendedTestimonials;

  useEffect(() => {
    // Solo aplicar el efecto de carrusel cuando showAll es false
    if (showAll) return;
    
    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      if (!isPaused && carouselRef.current) {
        // Calcular nueva posición de desplazamiento
        const newPosition = scrollPosition + scrollSpeed * (elapsed / 16); // Normalizado a ~60fps
        
        // Detectar si necesitamos reiniciar
        if (newPosition >= carouselRef.current.scrollWidth / 2) {
          // Reiniciar al principio cuando llegamos a la mitad (los testimonios duplicados)
          setScrollPosition(0);
        } else {
          setScrollPosition(newPosition);
        }
        
        // Aplicar transformación
        carouselRef.current.style.transform = `translateX(-${newPosition}px)`;
      }
      
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollPosition, isPaused, showAll]);

  // Renderizado diferente según showAll
  if (showAll) {
    return (
      <section className="py-20 bg-primary-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-secondary-100 rounded-full opacity-50 -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 translate-y-1/3 translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsToDisplay.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Versión de carrusel (original)
  return (
    <section className="py-20 bg-primary-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-secondary-100 rounded-full opacity-50 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 translate-y-1/3 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium mb-4">{t('testimonials.badge')}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botones de navegación */}
          <button 
            onClick={() => setScrollPosition(prev => Math.max(0, prev - 400))}
            className="absolute top-1/2 left-2 z-20 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-all"
            aria-label={t('testimonials.previous')}
          >
            <svg className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setScrollPosition(prev => prev + 400)}
            className="absolute top-1/2 right-2 z-20 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-all"
            aria-label={t('testimonials.next')}
          >
            <svg className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Contenedor del carrusel con desplazamiento suave */}
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex"
              style={{ willChange: 'transform' }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`} 
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de tarjeta de testimonio individual con comillas bien posicionadas
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-xl shadow-soft p-8 transition-all duration-300 hover:shadow-hover relative h-full">
      {/* Comillas correctamente posicionadas */}
      <div className="absolute top-8 right-8 text-primary-300 opacity-20">
        {/* <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
        </svg> */}
      </div>
      
      <div className="relative z-10">
        <p className="text-dark/80 mb-6 italic leading-relaxed ">
          "{testimonial.content}"
        </p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
            <span className="text-xl font-bold">{testimonial.author.charAt(0)}</span>
          </div>
          <div className="ml-4">
            <h4 className="font-bold text-primary-800">{testimonial.author}</h4>
            <p className="text-sm text-dark/60">{t('testimonials.client.role')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

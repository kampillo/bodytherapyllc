'use client';
// src/components/sections/TestimonialCarousel.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
  }
];

const TestimonialCarousel = ({ showAll = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsToShow = showAll ? testimonials : testimonials.slice(0, 6);
  const slidesCount = showAll ? 1 : Math.ceil(testimonialsToShow.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  useEffect(() => {
    if (!showAll) {
      const interval = setInterval(() => {
        nextSlide();
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, showAll]);

  return (
    <section className="py-20 bg-primary-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-secondary-100 rounded-full opacity-50 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 translate-y-1/3 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4">Testimonios</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            Experiencias reales de personas que han transformado su bienestar con nuestras terapias
          </p>
        </div>
        
        <div className="relative">
          {!showAll && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-all"
                aria-label="Testimonio anterior"
              >
                <svg className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-all"
                aria-label="Testimonio siguiente"
              >
                <svg className="h-6 w-6 text-primary-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          <div 
            className="transition-all duration-500 ease-in-out"
            style={{ transform: showAll ? 'none' : `translateX(-${currentSlide * 100}%)` }}
          >
            {showAll ? (
              // Grid view para "Sobre Nosotros" - muestra todos los testimonios
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            ) : (
              // Carousel view para Home page
              <div className="flex overflow-hidden">
                {Array.from({ length: slidesCount }).map((_, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 transition-all duration-500 ease-in-out grid grid-cols-1 md:grid-cols-3 gap-8"
                  >
                    {testimonialsToShow.slice(index * 3, index * 3 + 3).map((testimonial) => (
                      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {!showAll && (
            <div className="flex justify-center mt-8">
              {Array.from({ length: slidesCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 mx-1 rounded-full transition-all ${
                    currentSlide === index ? 'bg-primary-800 w-8' : 'bg-primary-200'
                  }`}
                  aria-label={`Ir al grupo de testimonios ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Componente de tarjeta de testimonio individual
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-8 transition-all duration-300 hover:shadow-hover relative h-full">
      <div className="absolute top-6 left-6 text-primary-300 opacity-30">
        <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        <p className="text-dark/80 mb-6 italic leading-relaxed line-clamp-5">
          "{testimonial.content}"
        </p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
            <span className="text-xl font-bold">{testimonial.author.charAt(0)}</span>
          </div>
          <div className="ml-4">
            <h4 className="font-bold text-primary-800">{testimonial.author}</h4>
            <p className="text-sm text-dark/60">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
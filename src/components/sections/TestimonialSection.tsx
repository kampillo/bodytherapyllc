// src/components/sections/TestimonialSection.tsx
import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: 'Quiero empezar agradeciendo el día que Dios me permitió conocer a Mercedes y su hermoso trabajo de masoterapia todo un arte en sus manos, Dios le bendijo con una habilidad en forma de caricia al alma, una terapia al corazón y a mis oídos. Sus manos van más allá de un simple masaje terrenal; es una caricia espiritual.',
    author: 'Nayeli Cruz',
    role: 'Cliente'
  },
  {
    id: 2,
    content: 'He tenido la oportunidad de recibir distintos tipos de masajes, relajantes, descontracturantes y hasta baño de novia! Y todos tienen un factor común, que es el Amor y la entrega con el que los recibí. Altamente recomendable! Todos merecemos el gran regalo de un masaje!',
    author: 'Maricela C',
    role: 'Cliente'
  },
  {
    id: 3,
    content: 'Como parte del riesgo de mi trabajo físico, me contracturo seguido, y había llegado a un punto en que los dolores musculares me estaban impidiendo seguir con mis funciones, pero gracias a Body Therapy he recuperado mi movilidad y el dolor desapareció.',
    author: 'Manuel Cázares',
    role: 'Cliente'
  }
];

const TestimonialSection = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-soft p-8 transition-all duration-300 hover:shadow-hover relative"
            >
              <div className="absolute top-6 left-6 text-primary-300 opacity-30">
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <p className="text-dark/80 mb-6 italic leading-relaxed">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
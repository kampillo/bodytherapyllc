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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Testimonios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lo que nuestros clientes dicen sobre nuestra terapia y servicios
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-4 text-secondary">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-primary">
                  <span className="text-xl font-semibold">{testimonial.author.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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
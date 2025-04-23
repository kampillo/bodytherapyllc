// src/app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import TestimonialCarousel from '@/components/sections/TestimonialSection';

export const metadata = {
  title: 'Sobre Nosotros - Body Therapy LLC',
  description: 'Conoce nuestra historia, misión, visión y los valores que guían nuestro trabajo en Body Therapy LLC.',
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-16 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Conócenos</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Conoce nuestra historia, misión y los valores que guían nuestro trabajo diario para ofrecerte la mejor experiencia terapéutica.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/home/Masajes-spa.jpg"
                  alt="María Mercedes Lizalde - Fundadora"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-primary-800 mb-4">Nuestra Historia</h2>
              <p className="text-lg text-dark/70 mb-6">
                Body Therapy LLC nació del sueño y la pasión de María Mercedes Lizalde, conocida cariñosamente como Mercy, una terapeuta dedicada que ha dedicado su vida a ayudar a los demás a través de la terapia manual.
              </p>
              <p className="text-lg text-dark/70 mb-6">
                Con años de experiencia y formación especializada, Mercy fundó Body Therapy LLC con la visión de crear un espacio donde las personas pudieran encontrar alivio a sus dolores y mejorar su calidad de vida a través de técnicas terapéuticas personalizadas.
              </p>
              <p className="text-lg text-dark/70">
                Hoy, Body Therapy LLC se ha convertido en un referente en terapia manual, combinando técnicas tradicionales con enfoques innovadores para ofrecer el mejor servicio a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Misión</h2>
              <p className="text-lg text-dark/70">
                "Nuestra misión es brindar atención de terapia manual de alta calidad, personalizada y basada en la evidencia, con el objetivo de aliviar dolores, mejorar la movilidad y promover el bienestar integral de nuestros pacientes. Nos comprometemos a ofrecer un trato cercano y profesional, ayudando a cada individuo a recuperar su salud y calidad de vida a través de técnicas manuales especializadas y un enfoque humano."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Visión</h2>
              <p className="text-lg text-dark/70">
                "Ser la principal referencia en terapia manual, logrando que más personas vivan libres de dolor y con una mejor calidad de vida. Nos comprometemos a contribuir al bienestar de nuestros pacientes a través de un servicio de excelencia, fundamentado en la educación continua, la innovación y el respeto por nuestros valores: servicio, respeto, empatía, integridad, compromiso y responsabilidad. Aspiramos a expandirnos como una franquicia reconocida en nuestro ramo, manteniendo siempre nuestro compromiso con la seguridad, la ética y la mejora constante para ofrecer un cuidado humano y efectivo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Nuestros Valores</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Los principios que guían nuestras acciones y definen nuestra forma de trabajo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Servicio</h3>
              <p className="text-dark/70">
                Nos dedicamos a ofrecer atención de calidad, poniendo siempre las necesidades y bienestar de nuestros pacientes en primer lugar. Nuestro objetivo es brindar una experiencia positiva y efectiva en cada sesión.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Respeto</h3>
              <p className="text-dark/70">
                Valoramos y consideramos la individualidad de cada persona, tratando a todos con cortesía, dignidad y comprensión. Reconocemos la importancia de escuchar y aceptar diferentes perspectivas y condiciones.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Empatía</h3>
              <p className="text-dark/70">
                Nos esforzamos por entender y compartir los sentimientos y experiencias de nuestros pacientes, creando un ambiente de confianza y apoyo para facilitar su proceso de recuperación.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Integridad</h3>
              <p className="text-dark/70">
                Actuamos con honestidad, transparencia y ética en todas nuestras acciones, asegurando que nuestras prácticas sean responsables y confiables.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Compromiso</h3>
              <p className="text-dark/70">
                Estamos dedicados a brindar lo mejor de nosotros, manteniendo una actitud comprometida con la salud y el bienestar de nuestros pacientes, y buscando siempre mejorar nuestros servicios.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">Responsabilidad</h3>
              <p className="text-dark/70">
                Asumimos la responsabilidad de nuestras acciones y decisiones, garantizando un trato profesional y seguro en cada intervención.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Testimonials Section - Usando el componente con showAll=true */}
      <div className="pt-10">
        <TestimonialCarousel showAll={true} />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para mejorar tu bienestar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda una consulta hoy mismo y comienza tu camino hacia una vida sin dolor y con mayor vitalidad.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="shadow-lg"
          >
            Contáctanos Ahora
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
// src/app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import TestimonialSection from '@/components/sections/TestimonialSection';

export const metadata = {
  title: 'Sobre Nosotros - Body Therapy LLC',
  description: 'Conoce nuestra historia, misión, visión y los valores que guían nuestro trabajo en Body Therapy LLC.',
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                  src="/images/about/founder.jpg"
                  alt="María Mercedes Lizalde - Fundadora"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Body Therapy LLC nació del sueño y la pasión de María Mercedes Lizalde, conocida cariñosamente como Mercy, una terapeuta dedicada que ha dedicado su vida a ayudar a los demás a través de la terapia manual.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Con años de experiencia y formación especializada, Mercy fundó Body Therapy LLC con la visión de crear un espacio donde las personas pudieran encontrar alivio a sus dolores y mejorar su calidad de vida a través de técnicas terapéuticas personalizadas.
              </p>
              <p className="text-lg text-gray-600">
                Hoy, Body Therapy LLC se ha convertido en un referente en terapia manual, combinando técnicas tradicionales con enfoques innovadores para ofrecer el mejor servicio a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Misión</h2>
              <p className="text-lg text-gray-600">
                "Nuestra misión es brindar atención de terapia manual de alta calidad, personalizada y basada en la evidencia, con el objetivo de aliviar dolores, mejorar la movilidad y promover el bienestar integral de nuestros pacientes. Nos comprometemos a ofrecer un trato cercano y profesional, ayudando a cada individuo a recuperar su salud y calidad de vida a través de técnicas manuales especializadas y un enfoque humano."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Visión</h2>
              <p className="text-lg text-gray-600">
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
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestras acciones y definen nuestra forma de trabajo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Servicio</h3>
              <p className="text-gray-600">
                Nos dedicamos a ofrecer atención de calidad, poniendo siempre las necesidades y bienestar de nuestros pacientes en primer lugar. Nuestro objetivo es brindar una experiencia positiva y efectiva en cada sesión.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Respeto</h3>
              <p className="text-gray-600">
                Valoramos y consideramos la individualidad de cada persona, tratando a todos con cortesía, dignidad y comprensión. Reconocemos la importancia de escuchar y aceptar diferentes perspectivas y condiciones.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Empatía</h3>
              <p className="text-gray-600">
                Nos esforzamos por entender y compartir los sentimientos y experiencias de nuestros pacientes, creando un ambiente de confianza y apoyo para facilitar su proceso de recuperación.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con honestidad, transparencia y ética en todas nuestras acciones, asegurando que nuestras prácticas sean responsables y confiables.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Compromiso</h3>
              <p className="text-gray-600">
                Estamos dedicados a brindar lo mejor de nosotros, manteniendo una actitud comprometida con la salud y el bienestar de nuestros pacientes, y buscando siempre mejorar nuestros servicios.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Responsabilidad</h3>
              <p className="text-gray-600">
                Asumimos la responsabilidad de nuestras acciones y decisiones, garantizando un trato profesional y seguro en cada intervención.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profesionales dedicados y apasionados por el bienestar y la salud
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-80">
                <Image
                  src="/images/team/mercedes.jpg"
                  alt="María Mercedes Lizalde"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">María Mercedes Lizalde</h3>
                <p className="text-gray-500 text-sm mb-4">Fundadora y Directora</p>
                <p className="text-gray-600 mb-4">
                  Con más de 15 años de experiencia en terapia manual, Mercedes ha ayudado a cientos de pacientes a recuperar su movilidad y aliviar sus dolores.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-primary hover:text-secondary transition">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Puedes agregar más miembros del equipo siguiendo el mismo patrón */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
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
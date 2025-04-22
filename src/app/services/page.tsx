// src/app/services/page.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ui/ServiceCard';

export const metadata = {
  title: 'Servicios - Body Therapy LLC',
  description: 'Descubre nuestra amplia gama de masajes terapéuticos y servicios de bienestar personalizados para tus necesidades.',
};

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Nuestras especialidades</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de terapias manuales personalizadas para aliviar el dolor, mejorar la movilidad y promover el bienestar integral.
          </p>
        </div>
      </section>

      {/* Therapeutic Massage Section - Usando el nuevo componente ServiceCard */}
      <ServiceCard 
        id="therapeutic"
        title="Masaje Terapéutico Especializado"
        description="Nuestro masaje terapéutico especializado está diseñado para abordar condiciones específicas y aliviar el dolor crónico, mejorando tu calidad de vida."
        imageSrc="/images/services/therapeutic-massage-detail.jpg"
        imageAlt="Masaje Terapéutico Especializado"
        price="$125.00"
        duration="75 min"
        features={[
          "Tendinopatías y Esguinces",
          "Recuperación de movimiento por fracturas",
          "Escoliosis y Fascitis plantar",
          "Lumbalgia, Ciatalgia y Cervicalgia",
          "Lesiones deportivas y neurológicas"
        ]}
        link="/contact"
      />

      {/* Clinical Massage Section */}
      <ServiceCard 
        id="clinical"
        title="Masajes Clínicos"
        description="Nuestros masajes clínicos están diseñados con un enfoque terapéutico específico para abordar diferentes problemas y necesidades."
        imageSrc="/images/services/clinical-massage.jpg"
        imageAlt="Masajes Clínicos"
        reversed={true}
        link="/contact"
      />

      {/* Relaxing Massage Section */}
      <ServiceCard 
        id="relaxing"
        title="Masajes Relajantes"
        description="Nuestros masajes relajantes están diseñados para aliviar el estrés, la ansiedad y promover un estado de bienestar general."
        imageSrc="/images/services/relaxing-massage-detail.jpg"
        imageAlt="Masajes Relajantes"
        link="/contact"
      />

      {/* Holistic Therapies Section */}
      <ServiceCard 
        id="holistic"
        title="Terapias Holísticas"
        description="Nuestras terapias holísticas buscan equilibrar el cuerpo, la mente y el espíritu, promoviendo la salud integral."
        imageSrc="/images/services/holistic-therapy-detail.jpg"
        imageAlt="Terapias Holísticas"
        reversed={true}
        link="/contact"
      />

      {/* Massage Packages Section */}
      <section id="packages" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-4">Experiencias completas</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">Paquetes de Masaje</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Experiencias completas de bienestar diseñadas para ofrecer un máximo beneficio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium">70 min</span>
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">RELAX BODYFACIAL</h3>
                <div className="flex justify-between items-center mb-6">
                  <div className="h-px w-16 bg-gray-200"></div>
                  <span className="text-2xl text-secondary-600 font-bold">$95.00</span>
                  <div className="h-px w-16 bg-gray-200"></div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Masaje relajante sueco</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Masaje facial</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Toallas calientes</span>
                  </li>
                </ul>
                <Button href="/contact" variant="outline" className="w-full group-hover:bg-primary-50">
                  Reservar
                </Button>
              </div>
            </div>
            
            {/* Package 2 */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium">75 min</span>
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">RELAX BODYFEET</h3>
                <div className="flex justify-between items-center mb-6">
                  <div className="h-px w-16 bg-gray-200"></div>
                  <span className="text-2xl text-secondary-600 font-bold">$110.00</span>
                  <div className="h-px w-16 bg-gray-200"></div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Masaje relajante sueco</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Exfoliante de pies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Aromaterapia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Toallas calientes</span>
                  </li>
                </ul>
                <Button href="/contact" variant="outline" className="w-full group-hover:bg-primary-50">
                  Reservar
                </Button>
              </div>
            </div>
            
            {/* Package 3 */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium">75 min</span>
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">TENSIONLESS</h3>
                <div className="flex justify-between items-center mb-6">
                  <div className="h-px w-16 bg-gray-200"></div>
                  <span className="text-2xl text-secondary-600 font-bold">$130.00</span>
                  <div className="h-px w-16 bg-gray-200"></div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Masaje descontracturante</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Guasha de acero inoxidable o percutor</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Toallas calientes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">Aceite especial para descontracturar</span>
                  </li>
                </ul>
                <Button href="/contact" variant="outline" className="w-full group-hover:bg-primary-50">
                  Reservar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">¿Necesitas un tratamiento personalizado?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contáctanos para diseñar un plan de tratamiento específico para tus necesidades.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="shadow-lg"
          >
            <span className="flex items-center">
              <span>Agenda una consulta</span>
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
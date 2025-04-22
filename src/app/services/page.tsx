// src/app/services/page.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Servicios - Body Therapy LLC',
  description: 'Descubre nuestra amplia gama de masajes terapéuticos y servicios de bienestar personalizados para tus necesidades.',
};

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de terapias manuales personalizadas para aliviar el dolor, mejorar la movilidad y promover el bienestar integral.
          </p>
        </div>
      </section>

      {/* Therapeutic Massage Section */}
      <section id="therapeutic" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-primary mb-4">Masaje Terapéutico Especializado</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro masaje terapéutico especializado está diseñado para abordar condiciones específicas y aliviar el dolor crónico, mejorando tu calidad de vida.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tendinopatías y Esguinces</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recuperación de movimiento por fracturas</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Escoliosis y Fascitis plantar</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lumbalgia, Ciatalgia y Cervicalgia</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lesiones deportivas y neurológicas</span>
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold">1 sesión (75 min)</p>
                  <p className="text-xl text-secondary font-bold">$125.00</p>
                </div>
                <div>
                  <p className="font-semibold">3 sesiones</p>
                  <p className="text-xl text-secondary font-bold">$355.00</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2 italic">La sesión se trabaja por región.</p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/services/therapeutic-massage-detail.jpg"
                  alt="Masaje Terapéutico Especializado"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Massage Section */}
      <section id="clinical" className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <h2 className="text-3xl font-bold text-primary mb-4">Masajes Clínicos</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros masajes clínicos están diseñados con un enfoque terapéutico específico para abordar diferentes problemas y necesidades.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-primary mb-2">Masaje Descontracturante</h3>
                  <p className="text-sm text-gray-600 mb-2">60 min</p>
                  <p className="text-lg text-secondary font-bold">$95.00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-primary mb-2">Masaje Deep Tissue</h3>
                  <p className="text-sm text-gray-600 mb-2">60 min</p>
                  <p className="text-lg text-secondary font-bold">$95.00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-primary mb-2">Masaje Linfático</h3>
                  <p className="text-sm text-gray-600 mb-2">60 min</p>
                  <p className="text-lg text-secondary font-bold">$100.00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-primary mb-2">Masaje Deportivo</h3>
                  <p className="text-sm text-gray-600 mb-2">70 min</p>
                  <p className="text-lg text-secondary font-bold">$140.00</p>
                </div>
              </div>
              <Button href="/contact" variant="primary">
                Agenda una cita
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/services/clinical-massage.jpg"
                  alt="Masajes Clínicos"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More service sections would follow similar patterns */}
      
      {/* Relaxing Massage Section */}
      <section id="relaxing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-primary mb-4">Masajes Relajantes</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros masajes relajantes están diseñados para aliviar el estrés, la ansiedad y promover un estado de bienestar general.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-primary mb-2">Masaje Aromaterapia</h3>
                  <p className="text-sm text-gray-600 mb-2">60 min</p>
                  <p className="text-lg text-secondary font-bold">$80.00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-primary mb-2">Masaje Sueco</h3>
                  <p className="text-sm text-gray-600 mb-2">60 min</p>
                  <p className="text-lg text-secondary font-bold">$80.00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-primary mb-2">Masaje Piedras Calientes</h3>
                  <p className="text-sm text-gray-600 mb-2">60 min</p>
                  <p className="text-lg text-secondary font-bold">$90.00</p>
                </div>
              </div>
              <Button href="/contact" variant="primary">
                Reserva tu sesión
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/services/relaxing-massage-detail.jpg"
                  alt="Masajes Relajantes"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Therapies Section */}
      <section id="holistic" className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <h2 className="text-3xl font-bold text-primary mb-4">Terapias Holísticas</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nuestras terapias holísticas buscan equilibrar el cuerpo, la mente y el espíritu, promoviendo la salud integral.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-primary mb-2">Access Bars</h3>
                  <p className="text-sm text-gray-600 mb-2">60 min</p>
                  <p className="text-lg text-secondary font-bold">$70.00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-primary mb-2">Reflexología Podal</h3>
                  <p className="text-sm text-gray-600 mb-2">45 min</p>
                  <p className="text-lg text-secondary font-bold">$70.00</p>
                </div>
              </div>
              <Button href="/contact" variant="primary">
                Consulta disponibilidad
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/services/holistic-therapy-detail.jpg"
                  alt="Terapias Holísticas"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Packages Section */}
      <section id="packages" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Paquetes de Masaje</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experiencias completas de bienestar diseñadas para ofrecer un máximo beneficio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">RELAX BODYFACIAL</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">70 min</span>
                  <span className="text-xl text-secondary font-bold">$95.00</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Masaje relajante sueco</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Masaje facial</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Toallas calientes</span>
                  </li>
                </ul>
                <Button href="/contact" variant="outline" className="w-full">
                  Reservar
                </Button>
              </div>
            </div>
            
            {/* Package 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">RELAX BODYFEET</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">75 min</span>
                  <span className="text-xl text-secondary font-bold">$110.00</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Masaje relajante sueco</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exfoliante de pies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Aromaterapia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Toallas calientes</span>
                  </li>
                </ul>
                <Button href="/contact" variant="outline" className="w-full">
                  Reservar
                </Button>
              </div>
            </div>
            
            {/* Package 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">TENSIONLESS</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">75 min</span>
                  <span className="text-xl text-secondary font-bold">$130.00</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Masaje descontracturante</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Guasha de acero inoxidable o percutor</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Toallas calientes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Aceite especial para descontracturar</span>
                  </li>
                </ul>
                <Button href="/contact" variant="outline" className="w-full">
                  Reservar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas un tratamiento personalizado?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para diseñar un plan de tratamiento específico para tus necesidades.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="shadow-lg"
          >
            Agenda una consulta
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
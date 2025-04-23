'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ui/ServiceCard';

// export const metadata = {
//   title: 'Servicios - Body Therapy LLC',
//   description: 'Descubre nuestra amplia gama de masajes terapéuticos y servicios de bienestar personalizados para tus necesidades.',
// };

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Nuestras especialidades</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de terapias manuales personalizadas para aliviar el dolor, mejorar la movilidad y promover el bienestar integral.
          </p>
        </div>
      </section>

      {/* Masaje Terapéutico Especializado */}
      <ServiceCard 
        id="therapeutic"
        title="Masaje Terapéutico Especializado PAIN"
        description="Nuestro masaje terapéutico especializado está diseñado para abordar condiciones específicas y aliviar el dolor crónico, mejorando tu calidad de vida."
        imageSrc="/images/services/therapeutic-massage-detail.jpg"
        imageAlt="Masaje Terapéutico Especializado"
        price="$125.00"
        duration="75 min"
        features={[
          "Tendinopatías y Esguinces",
          "Recuperación de movimiento por fracturas",
          "Escoliosis y Fascitis plantar",
          "Capsulitis articular",
          "Parálisis facial",
          "Lumbalgia, Ciatalgia y Cervicalgia",
          "Síndrome de latigazo",
          "Síndrome de tenista y golfista",
          "Lesiones deportivas y neurológicas"
        ]}
        link="/contact"
      />

      {/* Clinical Massage Section */}
      <section id="clinical" className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">Masajes Clínicos</h2>
            <p className="text-lg text-dark/70 mb-6 leading-relaxed">
              Nuestros masajes clínicos están diseñados con un enfoque terapéutico específico para abordar diferentes problemas y necesidades de salud.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Clinical Massage 1 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Descontracturante</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">60 min</span>
                </div>
                <span className="font-bold text-secondary-700">$95.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>
            {/* Clinical Massage 2 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Deep Tissue (Tejido profundo)</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">60 min</span>
                </div>
                <span className="font-bold text-secondary-700">$95.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>
            {/* ...otros Clinical Massage 3 a 10 (igual al original)... */}

            {/* Clinical Massage 3 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Linfático</h3>
              <p className="text-dark/70 text-sm mb-3">
                Con crema de masaje especial para desintoxicar
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">60 min</span>
                </div>
                <span className="font-bold text-secondary-700">$100.00</span>
              </div>
              <p className="text-sm text-secondary-700 mb-4">Paquete 3 masajes linfáticos: $280.00</p>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Clinical Massage 4 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Miofascial</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">60 min</span>
                </div>
                <span className="font-bold text-secondary-700">$90.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Clinical Massage 5 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Cambio Hormonal</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">60 min</span>
                </div>
                <span className="font-bold text-secondary-700">$90.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Clinical Massage 6 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Prenatal</h3>
              <p className="text-dark/70 text-sm mb-3">
                Con crema especial para reducir inflamación en piernas
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">60 min</span>
                </div>
                <span className="font-bold text-secondary-700">$95.00</span>
              </div>
              <p className="text-sm text-secondary-700 mb-4">Paquete 3 masajes prenatales: $270.00</p>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Clinical Massage 7 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Geriátrico</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">55 min</span>
                </div>
                <span className="font-bold text-secondary-700">$90.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Clinical Massage 8 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Oncológico</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">55 min</span>
                </div>
                <span className="font-bold text-secondary-700">$90.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Clinical Massage 9 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Deportivo</h3>
              <p className="text-dark/70 text-sm mb-3">
                Con aceite de aromaterapia especial para disminuir tensión, percutor, cupping
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">70 min</span>
                </div>
                <span className="font-bold text-secondary-700">$140.00</span>
              </div>
              <p className="text-sm text-secondary-700 mb-4">Paquete 3 masajes deportivos: $385.00</p>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Clinical Massage 10 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Metamérico</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">50 min</span>
                </div>
                <span className="font-bold text-secondary-700">$90.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>
          
          </div>
        </div>
      </section>

      {/* Relaxing Massage Section */}
      <section id="relaxing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">Masajes Relajantes</h2>
            <p className="text-lg text-dark/70 mb-6 leading-relaxed">
              Nuestros masajes relajantes están diseñados para aliviar el estrés, la ansiedad y promover un estado de bienestar general.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-light rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Aromaterapia</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">60 min</span>
                </div>
                <span className="font-bold text-secondary-700">$80.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Relaxing Massage 2 */}
            <div className="bg-light rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Sueco</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">60 min</span>
                </div>
                <span className="font-bold text-secondary-700">$80.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Relaxing Massage 3 */}
            <div className="bg-light rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Piedras Calientes</h3>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">60 min</span>
                </div>
                <span className="font-bold text-secondary-700">$90.00</span>
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Massage Section */}
      <section id="corporate" className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-xl overflow-hidden shadow-hover">
                <Image
                  src="/images/services/corporate-massage.jpg"
                  alt="Masaje Corporativo"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">Masaje Corporativo</h2>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                Ofrecemos servicios de masaje para empresas que buscan mejorar el bienestar de sus empleados, reducir el estrés laboral y aumentar la productividad.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-soft mb-6">
                <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Corporativo Shiatsu</h3>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark/70">60 min</span>
                  </div>
                  <span className="font-bold text-secondary-700">$120.00</span>
                </div>
                <p className="text-dark/70 mb-4">
                  El masaje Shiatsu se centra en puntos específicos para liberar la tensión y mejorar el flujo de energía en el cuerpo.
                </p>
                <Button href="/contact" variant="primary" size="sm">Solicitar información</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Therapies Section */}
      <section id="holistic" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-xl overflow-hidden shadow-hover">
                <Image
                  src="/images/services/holistic-therapy-detail.jpg"
                  alt="Terapias Holísticas"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pr-8">
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">Terapias Holísticas</h2>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                Nuestras terapias holísticas buscan equilibrar el cuerpo, la mente y el espíritu, promoviendo la salud integral y el bienestar.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Holistic Therapy 1 */}
<div className="bg-light rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Access Bars</h3>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 min</span>
                    </div>
                    <span className="font-bold text-secondary-700">$70.00</span>
                  </div>
                  <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                </div>
                
                {/* Holistic Therapy 2 */}
                <div className="bg-light rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Reflexología Podal</h3>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">45 min</span>
                    </div>
                    <span className="font-bold text-secondary-700">$70.00</span>
                  </div>
                  <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                </div>              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Packages Section */}
      <section id="packages" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* ... */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1-6 (con Package 2 corregido) */}
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Additional massage options... */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white relative overflow-hidden">
        {/* ... */}
      </section>
    </>
  );
};

export default ServicesPage;

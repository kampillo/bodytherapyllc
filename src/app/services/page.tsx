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
        imageSrc="/images/services/masaje-terapeutico-especializado.png"
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
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/descontracturante.png"
                      alt="Masaje Descontracturante"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Descontracturante</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$95.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Massage 2 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/deeptissue.png"
                      alt="Masaje Deep Tissue"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Deep Tissue (Tejido profundo)</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$95.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Massage 3 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/linfatico.png"
                      alt="Masaje Linfático"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Linfático</h3>
                  <p className="text-dark/70 text-sm mb-3">
                    Con crema de masaje especial para desintoxicar
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$100.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-700 mt-2">Paquete 3 masajes linfáticos: $280.00</p>
                </div>
              </div>
            </div>

            {/* Clinical Massage 4 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/miofascial.png"
                      alt="Masaje Miofascial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Miofascial</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$90.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Massage 5 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/hormonal.png"
                      alt="Masaje Cambio Hormonal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Cambio Hormonal</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$90.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Massage 6 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/prenatal.png"
                      alt="Masaje Prenatal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Prenatal</h3>
                  <p className="text-dark/70 text-sm mb-3">
                    Con crema especial para reducir inflamación en piernas
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$95.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-700 mt-2">Paquete 3 masajes prenatales: $270.00</p>
                </div>
              </div>
            </div>

            {/* Clinical Massage 7 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/geriatrico.png"
                      alt="Masaje Geriátrico"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Geriátrico</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">55 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$90.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Massage 8 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/oncologico.png"
                      alt="Masaje Oncológico"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Oncológico</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">55 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$90.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Massage 9 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/deportivo.png"
                      alt="Masaje Deportivo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Deportivo</h3>
                  <p className="text-dark/70 text-sm mb-3">
                    Con aceite de aromaterapia especial para disminuir tensión, percutor, cupping
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">70 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$140.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-700 mt-2">Paquete 3 masajes deportivos: $385.00</p>
                </div>
              </div>
            </div>

            {/* Clinical Massage 10 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <div className="relative rounded-lg overflow-hidden aspect-square">
                    <Image
                      src="/images/services/metamerico.png"
                      alt="Masaje Metamérico"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Metamérico</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">50 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$90.00</span>
                      <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                    </div>
                  </div>
                </div>
              </div>
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
            {/* Relaxing Massage 1 */}
            <div className="bg-light rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="mb-4">
                <div className="relative rounded-lg overflow-hidden h-48 mb-4">
                  <Image
                    src="/images/services/aroma.png"
                    alt="Masaje Aromaterapia"
                    fill
                    className="object-cover"
                  />
                </div>
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
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Relaxing Massage 2 */}
            <div className="bg-light rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="mb-4">
                <div className="relative rounded-lg overflow-hidden h-48 mb-4">
                  <Image
                    src="/images/services/sueco.png"
                    alt="Masaje Sueco"
                    fill
                    className="object-cover"
                  />
                </div>
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
              </div>
              <Button href="/contact" variant="outline" size="sm">Reservar</Button>
            </div>

            {/* Relaxing Massage 3 */}
            <div className="bg-light rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="mb-4">
                <div className="relative rounded-lg overflow-hidden h-48 mb-4">
                  <Image
                    src="/images/services/piedras.png"
                    alt="Masaje Piedras Calientes"
                    fill
                    className="object-cover"
                  />
                </div>
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
                  src="/images/services/masaje-corporativo.jpg"
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
                  src="/images/services/terapias-holisticas.jpg"
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

      {/* Massage Packages Section */}
      <section id="packages" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">Paquetes de Masajes</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Disfruta de nuestros paquetes especiales diseñados para brindar una experiencia completa de relajación y bienestar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-secondary-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                  Promoción
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 mb-6">
                  {/* <Image
                    src=""
                    alt=""
                    fill
                    className="object-cover"
                  /> */}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">RELAX BODYFACE</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Masaje relajante sueco</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Piedras calientes en espalda</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Masaje facial</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Toallas calientes</span>
                </li>
              </ul>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">75 min</span>
                </div>
                <div>
                  <span className="text-sm line-through text-dark/50 mr-2">$120.00</span>
                  <span className="text-xl font-bold text-secondary-700">$95.00</span>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="md" className="w-full">Reservar</Button>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-secondary-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                  Promoción
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 mb-6">
                  {/* <Image
                    src="/images/services/relax-bodyfeet.png"
                    alt="Relax BodyFeet"
                    fill
                    className="object-cover"
                  /> */}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">RELAX BODYFEET</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Masaje relajante sueco</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Botas de compresión</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exfoliante de pies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Aromaterapia y toallas calientes</span>
                </li>
              </ul>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">75 min</span>
                </div>
                <div>
                  <span className="text-sm line-through text-dark/50 mr-2">$110.00</span>
                  <span className="text-xl font-bold text-secondary-700">$100.00</span>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="md" className="w-full">Reservar</Button>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-secondary-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                  Promoción
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 mb-6">
                  {/* <Image
                    src="/images/services/tensionless.png"
                    alt="Tensionless"
                    fill
                    className="object-cover"
                  /> */}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">TENSIONLESS</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Masaje descontracturante</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Guasha de acero inoxidable o percutor o ventosas</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Toallas calientes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Aceite especial para descontracturar</span>
                </li>
              </ul>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">75 min</span>
                </div>
                <div>
                  <span className="text-sm line-through text-dark/50 mr-2">$130.00</span>
                  <span className="text-xl font-bold text-secondary-700">$110.00</span>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="md" className="w-full">Reservar</Button>
            </div>
          </div>

          {/* Couple Massage Packages */}
          <div className="mt-16">
            <h3 className="text-center font-heading text-2xl font-bold text-primary-800 mb-12">Masajes en Pareja</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Couple Package 1 */}
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-secondary-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                    Promoción
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-48 mb-6">
                    {/* <Image
                      src="/images/services/couple-body.png"
                      alt="Couple Massage Body"
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">COUPLE MASSAGE BODY</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Masaje relajante sueco</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Toallas calientes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Snack orgánico</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bebida natural</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark/70">65 min</span>
                  </div>
                  <div>
                    <span className="text-sm line-through text-dark/50 mr-2">$220.00</span>
                    <span className="text-xl font-bold text-secondary-700">$190.00</span>
                  </div>
                </div>
                <Button href="/contact" variant="primary" size="md" className="w-full">Reservar</Button>
              </div>

              {/* Couple Package 2 */}
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-secondary-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                    Promoción
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-48 mb-6">
                    {/* <Image
                      src="/images/services/couple-bodyfacial.png"
                      alt="Couple Massage BodyFacial"
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">COUPLE MASSAGE BODYFACIAL</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Masaje relajante sueco</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Masaje facial</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Toallas calientes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Snack orgánico y bebida natural</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark/70">75 min</span>
                  </div>
                  <div>
                    <span className="text-sm line-through text-dark/50 mr-2">$240.00</span>
                    <span className="text-xl font-bold text-secondary-700">$215.00</span>
                  </div>
                </div>
                <Button href="/contact" variant="primary" size="md" className="w-full">Reservar</Button>
              </div>

              {/* Couple Package 3 */}
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-secondary-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                    Promoción
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-48 mb-6">
                    {/* <Image
                      src="/images/services/couple-bodystone.png"
                      alt="Couple Massage BodyStone"
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">COUPLE MASSAGE BODYSTONE</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Masaje relajante sueco</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Piedras calientes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Aromaterapia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Snack orgánico y bebida natural</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark/70">90 min</span>
                  </div>
                  <div>
                    <span className="text-sm line-through text-dark/50 mr-2">$265.00</span>
                    <span className="text-xl font-bold text-secondary-700">$235.00</span>
                  </div>
                </div>
                <Button href="/contact" variant="primary" size="md" className="w-full">Reservar</Button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-center font-heading text-2xl font-bold text-primary-800 mb-12">Más Opciones</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Additional Option 1 */}
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* <div className="sm:w-1/3">
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/services/cuello-brazos-espalda.png"
                        alt="Masaje cuello, brazos y espalda"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div> */}
                  <div className="">
                    <h3 className="text-xl font-bold text-primary-800 mb-4">Masaje cuello, brazos y espalda</h3>
                    <p className="text-dark/70 mb-6">
                      Tratamiento rápido enfocado en liberar tensión de las zonas más propensas a acumular estrés.
                    </p>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-dark/70">30 min</span>
                      </div>
                      <span className="font-bold text-secondary-700">$50.00</span>
                    </div>
                    <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                  </div>
                </div>
              </div>

              {/* Additional Option 2 */}
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* <div className="sm:w-1/3">
                    <div className="relative rounded-lg overflow-hidden aspect-square">
                      <Image
                        src="/images/services/piernas-cansadas.png"
                        alt="Masaje piernas cansadas"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div> */}
                  <div className="">
                    <h3 className="text-xl font-bold text-primary-800 mb-4">Masaje piernas cansadas</h3>
                    <p className="text-dark/70 mb-6">
                      Tratamiento específico para piernas y pies, ideal para aliviar la fatiga y mejorar la circulación.
                    </p>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-dark/70">45 min</span>
                      </div>
                      <span className="font-bold text-secondary-700">$75.00</span>
                    </div>
                    <Button href="/contact" variant="outline" size="sm">Reservar</Button>
                  </div>
                </div>
              </div>
            </div>
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

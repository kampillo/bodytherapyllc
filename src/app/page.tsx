// src/app/page.tsx
import Image from 'next/image';
import Button from '@/components/ui/Button';
import TestimonialSection from '@/components/sections/TestimonialSection';

export default function Home() {
  return (
    <>
      {/* Hero Section - Con estilo minimalista y moderno */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-primary-50 rounded-bl-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/3 bg-secondary-50 rounded-tr-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight">
                Redescubre el <span className="relative inline-block">
                  bienestar
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-secondary-500"></span>
                </span> a través de nuestras manos
              </h1>
              <p className="text-lg md:text-xl text-dark/70 mb-8 leading-relaxed">
                En Body Therapy nos especializamos en terapia manual personalizada para aliviar dolores, mejorar tu movilidad y promover tu bienestar integral.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/services" variant="primary" size="lg">
                  Nuestros Servicios
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Agenda una Cita
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-hover">
                <Image
                  src="/images/hero/massage-therapy.jpg"
                  alt="Terapia de Masaje"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                {/* Elemento decorativo */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">Nuestras Especialidades</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">Servicios Diseñados para Tu Bienestar</h2>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios terapéuticos y de bienestar, adaptados a tus necesidades específicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/services/therapeutic-massage.jpg"
                alt="Masaje Terapéutico Especializado"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Terapéutico Especializado</h3>
              <p className="text-dark/70 mb-5">
                Especializado en aliviar dolores crónicos, lesiones y problemas musculares específicos.
              </p>
              <Button href="/services#therapeutic" variant="ghost" className="group-hover:text-primary-700">
                <span>Más información</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Service Card 2 */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/services/clinical-massage.jpg"
                alt="Masajes Clínicos"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masajes Clínicos</h3>
              <p className="text-dark/70 mb-5">
                Técnicas especializadas para condiciones médicas específicas, como descontracturante, tejido profundo y más.
              </p>
              <Button href="/services#clinical" variant="ghost" className="group-hover:text-primary-700">
                <span>Más información</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Service Card 3 */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/services/relaxing-massage.jpg"
                alt="Masajes Relajantes"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masajes Relajantes</h3>
              <p className="text-dark/70 mb-5">
                Diseñados para reducir el estrés, la ansiedad y promover una sensación de bienestar general.
              </p>
              <Button href="/services#relaxing" variant="ghost" className="group-hover:text-primary-700">
                <span>Más información</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Service Card 4 */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/services/corporate-massage.jpg"
                alt="Masaje Corporativo"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Masaje Corporativo</h3>
              <p className="text-dark/70 mb-5">
                Servicio profesional de masaje Shiatsu para empresas, ideal para reducir el estrés laboral.
              </p>
              <Button href="/services#corporate" variant="ghost" className="group-hover:text-primary-700">
                <span>Más información</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Service Card 5 */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/services/holistic-therapy.jpg"
                alt="Terapias Holísticas"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Terapias Holísticas</h3>
              <p className="text-dark/70 mb-5">
                Enfoque integral que combina diferentes técnicas para armonizar cuerpo, mente y espíritu.
              </p>
              <Button href="/services#holistic" variant="ghost" className="group-hover:text-primary-700">
                <span>Más información</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Service Card 6 */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/services/packages.jpg"
                alt="Paquetes de Masaje"
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Paquetes de Masaje</h3>
              <p className="text-dark/70 mb-5">
                Experiencias completas que combinan diferentes técnicas y extras para una experiencia integral.
              </p>
              <Button href="/services#packages" variant="ghost" className="group-hover:text-primary-700">
                <span>Más información</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button href="/services" variant="outline" size="lg">
            Ver todos los servicios
          </Button>
        </div>
      </div>
    </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary-200 rounded-xl -z-10"></div>
                <div className="relative rounded-xl overflow-hidden shadow-hover">
                  <Image
                    src="/images/about/therapist.jpg"
                    alt="Nuestra Terapeuta"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary-200 rounded-xl -z-10"></div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">Nuestra Historia</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-6">Sobre Nosotros</h2>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                Body Therapy LLC es un centro especializado en terapia manual, fundado con la misión de proporcionar alivio, bienestar y una mejor calidad de vida a nuestros pacientes.
              </p>
              <p className="text-lg text-dark/70 mb-8 leading-relaxed">
                Nuestra directora, María Mercedes Lizalde, combina años de experiencia con un enfoque personalizado que atiende las necesidades específicas de cada paciente.
              </p>
              <Button href="/about" variant="primary">
                Conoce nuestra historia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Se mantiene el componente pero se renderizará con el nuevo estilo */}
      <TestimonialSection />

      {/* Products Preview Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4">Productos de Calidad</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">Complementa Tu Tratamiento</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Productos de alta calidad creados en laboratorio profesional con ingredientes naturales para complementar tu tratamiento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Mostramos solo el primer producto como ejemplo */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/products/massage-oil.jpg"
                  alt="Aceite de Masaje"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary-800 mb-2">Aceite Terapéutico</h3>
                <p className="text-dark/70 text-sm mb-3">
                  Formulación especial para aliviar tensiones y dolores musculares.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-700 font-bold">$25.00</span>
                  <Button href="/shop" variant="ghost" size="sm" className="group-hover:text-primary-700">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Aquí irían los otros productos */}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/shop" variant="outline" size="lg">
              Visitar tienda
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary-800 text-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">¿Listo para mejorar tu bienestar?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
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
}
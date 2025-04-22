// src/app/page.tsx
import Image from 'next/image';
import Button from '@/components/ui/Button';
import TestimonialSection from '@/components/sections/TestimonialSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-light py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Terapia Manual Profesional
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                En Body Therapy nos especializamos en brindar atención personalizada para aliviar dolores, mejorar tu movilidad y promover tu bienestar integral.
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
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero/massage-therapy.jpg"
                  alt="Terapia de Masaje"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios terapéuticos y de bienestar, adaptados a tus necesidades específicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/images/services/therapeutic-massage.jpg"
                  alt="Masaje Terapéutico"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Masaje Terapéutico</h3>
                <p className="text-gray-600 mb-4">
                  Especializado en aliviar dolores crónicos, lesiones y problemas musculares específicos.
                </p>
                <Button href="/services#therapeutic" variant="outline">
                  Más información
                </Button>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/images/services/relaxing-massage.jpg"
                  alt="Masaje Relajante"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Masaje Relajante</h3>
                <p className="text-gray-600 mb-4">
                  Diseñado para reducir el estrés, la ansiedad y promover una sensación de bienestar general.
                </p>
                <Button href="/services#relaxing" variant="outline">
                  Más información
                </Button>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/images/services/holistic-therapy.jpg"
                  alt="Terapias Holísticas"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Terapias Holísticas</h3>
                <p className="text-gray-600 mb-4">
                  Enfoque integral que combina diferentes técnicas para armonizar cuerpo, mente y espíritu.
                </p>
                <Button href="/services#holistic" variant="outline">
                  Más información
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button href="/services" variant="secondary" size="lg">
              Ver todos los servicios
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about/therapist.jpg"
                  alt="Nuestra Terapeuta"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Sobre Nosotros</h2>
              <p className="text-lg text-gray-600 mb-6">
                Body Therapy LLC es un centro especializado en terapia manual, fundado con la misión de proporcionar alivio, bienestar y una mejor calidad de vida a nuestros pacientes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nuestra directora, María Mercedes Lizalde, combina años de experiencia con un enfoque personalizado que atiende las necesidades específicas de cada paciente.
              </p>
              <Button href="/about" variant="primary">
                Conoce nuestra historia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Products Preview Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Productos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Productos de alta calidad creados en laboratorio profesional con ingredientes naturales para complementar tu tratamiento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Product Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/images/products/massage-oil.jpg"
                  alt="Aceite de Masaje"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-1">Aceite Terapéutico</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Formulación especial para aliviar tensiones y dolores musculares.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-bold">$25.00</span>
                  <Button href="/shop" variant="outline" size="sm">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Repeat similar product cards for a total of 4 */}
          </div>
          
          <div className="text-center mt-10">
            <Button href="/shop" variant="secondary" size="lg">
              Visitar tienda
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
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
}
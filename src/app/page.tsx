// src/app/page.tsx
import Image from 'next/image';
import Button from '@/components/ui/Button';
import TestimonialSection from '@/components/sections/TestimonialSection';
import HeroCarousel from '@/components/ui/HeroCarousel';

export default function Home() {
  // Define las imágenes para el carrusel
  const heroImages = [
    {
      src: "/images/home/banner-1.png",
      alt: "Terapia de Masaje"
    },
    {
      src: "/images/home/banner-2.png",
      alt: "Masaje Terapéutico Especializado"
    },
    {
      src: "/images/home/banner-3.png",
      alt: "promocion 1"
    },
    {
      src: "/images/home/banner-4.jpg",
      alt: "promocion 2"
    },
    {
      src: "/images/home/banner-5.jpg",
      alt: "promocion 3"
    },
    {
      src: "/images/home/banner-6.jpg",
      alt: "promocion 4"
    },
    {
      src: "/images/home/banner-7.jpg",
      alt: "promocion 5"
    }
  ];

  return (
    <>
      {/* Hero Section - Con estilo minimalista y moderno */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-primary-50 rounded-bl-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/3 bg-secondary-50 rounded-tr-3xl opacity-70"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Texto: ocupa 4/12 del ancho en pantallas md+ */}
            <div className="md:w-4/12 mb-10 md:mb-0 md:pr-8">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight">
              ¿EL DOLOR   <span className="relative inline-block">
              TE IMPIDE REALIZAR TUS 
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-secondary-500"></span>
                </span> ACTIVIDADES DIARIAS?
              </h1>
              <p className="text-lg md:text-xl text-dark/70 mb-4 leading-relaxed">
               
              </p>
              <div className="my-5 pl-4 border-l-4 border-secondary-400 italic">
                <p className="text-lg md:text-xl font-medium text-primary-700">
                Atrévete a vivir sin dolor, transforma tus movimientos limitados en libertad.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/services" variant="primary" size="lg">
                  Nuestros Servicios
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Agenda una Cita
                </Button>
              </div>
            </div>
            {/* Carrusel de imágenes: ocupa 8/12 del ancho en pantallas md+ */}
            <div className="md:w-8/12 aspect-[2/1] rounded-xl overflow-hidden">
              <div className="w-full h-full relative">
                <HeroCarousel images={heroImages} interval={6000} />
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
                  src="/images/services/masaje-especializado.png"
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
                  src="/images/services/masaje-clinico.jpg"
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
                  src="/images/services/masajes-relajantes.jpg"
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
                  src="/images/services/masaje-corporativo.jpg"
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
                  src="/images/services/terapias-holisticas.jpg"
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
                  src="/images/services/paquetes.jpg"
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
                    src="/images/home/Masajes-spa.jpg"
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
      <div className="container mx-auto px-4 pb-12 -mt-8 text-center">
        <Button href="/about#testimonials" variant="outline" size="lg">
          Ver todos los testimonios
        </Button>
      </div>

    

      {/* Products Preview Section */}
      {/* Products Preview Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4">Productos de Calidad</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-4">Complementa Tu Tratamiento</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Productos de alta calidad creados en laboratorio profesional con ingredientes naturales para complementar tu tratamiento.
            </p>
            <h4 className="font-heading text-3xl md:text-4xl text-primary-600 mb-2">Para uso en casa y cabina de masaje</h4>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Producto 1 */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/products/divine.jpg"
                  alt="Divine Rest Spray"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary-800 mb-2">Divine Rest Spray</h3>
                <p className="text-dark/70 text-sm mb-3">
                  Una auténtica fusión de aceites orgánicos puros combinados para un descanso divino.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-700 font-bold">$39.00</span>
                  <Button href="/shop" variant="ghost" size="sm" className="group-hover:text-primary-700">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/products/oxidation.jpg"
                  alt="Crema para Inflammation, Masaje, Decrease & Oxidation"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary-800 mb-2">Crema para Inflammation, Masaje, Decrease & Oxidation</h3>
                <p className="text-dark/70 text-sm mb-3">
                  Crema corporal enriquecida con cacao, almendra dulce y vitamina C, combinada con aceites de pomelo y pino.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-700 font-bold">$39.99</span>
                  <Button href="/shop" variant="ghost" size="sm" className="group-hover:text-primary-700">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-hover group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/products/contracture-less.jpg"
                  alt="Aceite para contracture masaje less"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary-800 mb-2">Aceite para contracture masaje less</h3>
                <p className="text-dark/70 text-sm mb-3">
                  Aceite enriquecido con aceites vegetales y esenciales que ayuda a disminuir contracturas, nutre, hidrata y suaviza la piel.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-700 font-bold">$39.99</span>
                  <Button href="/shop" variant="ghost" size="sm" className="group-hover:text-primary-700">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/shop" variant="outline" size="lg">
              Visitar tienda
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Columna de la imagen */}
            <div className="lg:w-5/12 mb-10 lg:mb-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-secondary-200 rounded-xl -z-10"></div>
                <div className="relative rounded-xl overflow-hidden shadow-hover">
                  <Image
                    src="/images/home/mercy.jpg"
                    alt="María Mercedes Lizalde"
                    width={500}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary-200 rounded-xl -z-10"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white shadow-soft rounded-lg px-5 py-4 w-11/12 text-center">
                  <h4 className="font-bold text-primary-800 text-lg mb-1">MARÍA MERCEDES LIZALDE</h4>
                  <p className="text-dark/70 text-sm">LMT–Instructor-Proveedor de Clases Continuas</p>
                </div>
              </div>
            </div>

            {/* Columna del texto */}
            <div className="lg:w-7/12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-6">Comprometidos con tu bienestar</h2>

              <div className="space-y-4 text-dark/80 leading-relaxed">
                <p>
                  Mi mayor deseo es que podamos vivir sin dolor. Soy la segunda de 5 hermanos, nací con subluxación en una de mis caderas, era una bebé demasiado grande y el espacio en el vientre de mi Madre era pequeño, en mi infancia esto ocasionó secuelas en mis piernas, mis rodillas se vieron afectadas y se me desarrolló genu valgo, esta condición se caracteriza por una deformación en la que las rodillas se acercan entre sí, haciendo que los tobillos se desvíen hacia afuera, y perdida del arco plantar, lo cual no me permitía correr, pues me ocasionada caídas frecuentes.
                </p>
                <p>
                  Recibí atención medica en mi infancia gracias a mi Madre, estuve en tratamiento, use aparatos ortopédicos en las noches, plantilla y zapato ortopédico en el día, recuerdo los aparatos me que ocasionaban dolor, lloraba en silencio, esto fue para mí un período largo, intentaba aflojarlos para que no me presionaran y no lo lograba, y así caía agotada hasta altas horas de la noche.
                </p>
                <p>
                  Recuerdo, mi sueño se volvió liviano y podía escuchar a una de mis hermanas que lloraba en las noches por el dolor de piernas debido al desarrollo, me levantaba y le daba masaje hasta que se quedaba dormida.
                </p>
                <p>
                  A mi Madre le daba masaje en su espalda baja desde que tenía 6 años, le decía: Mamá déjame sobarte las bolitas que tienes en la espalda, me encantaba hacerlo, dejaba mis juegos de niña para apoyarla con ello, podía estar todo el tiempo tocándole y palpando sus bolitas, que hoy sé eran contracturas. A los 7 años puse mis primeras ventosas, también a mi Madre.
                </p>
                <p>
                  Ya adulta tuve otras secuelas, me hicieron dos cirugías, una en cada pie, estuve en silla de ruedas por casi 2 meses.
                </p>
                <p className="font-medium text-primary-700">
                  Estas experiencias generaron en mí una empatía por el dolor ajeno, por quienes enfrentan dificultades físicas. Esto es lo que me motiva a ofrecerles nuestros servicios, con la firme intención de ayudarles a mejorar su movimiento, y por ende su calidad de vida.
                </p>
                <p>
                Soy fiel creyente de Papá Dios, él tiene planes para cada uno de nosotros. Hoy reafirmo mi misión terrenal, encaminarte a que tu cuerpo este en equilibrio, ¡libre de dolor!
                ¡Por más vidas sanas, en movimiento, y libres de dolor!
                </p>
              </div>

              <div className="mt-8">
                <Button href="/about" variant="primary">
                  Conoce más sobre nosotros
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}



    </>
  );
}
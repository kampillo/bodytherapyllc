// src/app/courses/page.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Cursos - Body Therapy LLC',
  description: 'Explora nuestros cursos especializados en terapia manual, estiramiento deportivo y enseñanza de masaje terapéutico.',
};

// Lista actualizada de cursos disponibles
const courses = [
  {
    id: 1,
    title: 'Curso de Terapia de Masaje MTI para Adultos',
    description: 'El curso incluye una descripción general completa de los desafíos de enseñar a estudiantes adultos. Habilidades prácticas requeridas para guiar a los estudiantes adultos. Una consideración detallada de un plan de estudios de terapia de masajes TDLR aprobado y requisitos.',
    duration: '30 horas',
    level: 'Profesional',
    image: '/images/courses/mti-para-adultos.png',
    price: 450.00,
  },
  {
    id: 2,
    title: 'Estiramiento Deportivo Miembro Superior',
    description: 'Esta clase incluye anatomía de miembros superiores, manipulación de los tejidos blandos para realizar estiramientos de forma correcta y evitar lesiones. Cómo, cuándo y en qué momento se deben llevar a cabo.',
    duration: '6 horas',
    level: 'Intermedio',
    image: '/images/courses/estiramiento-deportivo-miembro-superior.jpg',
    price: 150.00,
  },
  {
    id: 3,
    title: 'Estiramiento Deportivo Miembro Inferior',
    description: 'Esta clase incluye anatomía de miembros inferiores, manipulación de los tejidos blandos para realizar estiramientos de forma correcta y evitar lesiones. Cómo, cuándo y en qué momento se deben llevar a cabo.',
    duration: '6 horas',
    level: 'Intermedio',
    image: '/images/courses/estiramiento-deportivo-miembro-inferior.png',
    price: 150.00,
  }
];

const CoursesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-16 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Formación Especializada</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">Nuestros Cursos</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Aprende con profesionales experimentados y expande tus conocimientos en terapia manual, estiramiento deportivo y enseñanza de masaje terapéutico.
          </p>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">Formación Profesional</h2>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                En Body Therapy LLC ofrecemos programas de formación especializados para profesionales del masaje, fisioterapeutas y entusiastas que desean ampliar sus conocimientos y habilidades en terapia manual y estiramiento deportivo.
              </p>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                Nuestros cursos combinan teoría con práctica intensiva, en grupos reducidos para garantizar atención personalizada y un aprendizaje efectivo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-dark/80">Instructores certificados con amplia experiencia</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-dark/80">Materiales didácticos de alta calidad</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-dark/80">Práctica supervisada en grupos reducidos</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-dark/80">Certificación avalada por organizaciones reconocidas</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-hover h-96">
              <Image
                src="/images/courses/courses.png"
                alt="Formación en Terapia Manual"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-secondary-200 rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium mb-4">Programas Disponibles</span>
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">Nuestros Cursos Especializados</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Explora nuestros cursos diseñados para profesionales del masaje y terapeutas
            </p>
          </div>
          
          {/* Detalle Individual de Cursos */}
          <div className="space-y-16">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all`}
              >
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="relative rounded-xl overflow-hidden h-72 w-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-primary-800 mb-3">{course.title}</h3>
                  <p className="text-dark/70 mb-4 leading-relaxed">{course.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-primary-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-dark/60 block">Duración</span>
                      <span className="text-primary-800 font-medium">{course.duration}</span>
                    </div>
                    <div className="bg-primary-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-dark/60 block">Nivel</span>
                      <span className="text-primary-800 font-medium">{course.level}</span>
                    </div>
                    {/* <div className="bg-primary-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-dark/60 block">Inversión</span>
                      <span className="text-primary-800 font-bold">${course.price.toFixed(2)} USD</span>
                    </div> */}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button href={`/contact?course=${course.title}`} variant="primary">
                      Solicitar Información
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium mb-4">Experiencias</span>
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">Lo que Dicen Nuestros Estudiantes</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Experiencias de quienes han tomado nuestros cursos especializados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-hover transition-all">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
                    <span className="text-xl font-semibold">L</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary-800">Laura Martínez</h4>
                  <p className="text-dark/60">Masajista profesional</p>
                </div>
              </div>
              <p className="text-dark/70">
                "El curso de Estiramiento Deportivo fue clave para mejorar mis servicios. Las técnicas aprendidas me permiten ofrecer un tratamiento más completo y efectivo a mis clientes deportistas."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-hover transition-all">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
                    <span className="text-xl font-semibold">C</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary-800">Carlos Rodríguez</h4>
                  <p className="text-dark/60">Fisioterapeuta</p>
                </div>
              </div>
              <p className="text-dark/70">
                "Como profesional de la fisioterapia, el curso de estiramiento me proporcionó nuevas herramientas para tratar lesiones deportivas. La metodología de enseñanza facilita la aplicación inmediata de lo aprendido."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-hover transition-all">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-800">
                    <span className="text-xl font-semibold">M</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary-800">Miguel Sánchez</h4>
                  <p className="text-dark/60">Instructor de masaje</p>
                </div>
              </div>
              <p className="text-dark/70">
                "El curso MTI para enseñar a adultos transformó mi manera de impartir clases. Las estrategias pedagógicas y el conocimiento del plan TDLR son invaluables para cualquier instructor de masaje."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium mb-4">Calendario</span>
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">Próximas Fechas</h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Reserva tu lugar en nuestros próximos cursos y talleres
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-primary-700 text-white">
                    <th className="py-3 px-6 text-left">Curso</th>
                    <th className="py-3 px-6 text-left">Fecha de Inicio</th>
                    <th className="py-3 px-6 text-left">Duración</th>
                    <th className="py-3 px-6 text-left">Precio</th>
                    <th className="py-3 px-6 text-left">Disponibilidad</th>
                    <th className="py-3 px-6 text-center">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-primary-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Terapia de Masaje MTI para Adultos</td>
                    <td className="py-4 px-6">15 de Mayo, 2025</td>
                    <td className="py-4 px-6">30 horas (5 días)</td>
                    <td className="py-4 px-6 font-medium">$450.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Plazas disponibles
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Button href="/contact?course=MTI" variant="outline" size="sm">
                        Inscribirse
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-primary-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Estiramiento Deportivo Miembro Superior</td>
                    <td className="py-4 px-6">10 de Junio, 2025</td>
                    <td className="py-4 px-6">6 horas (1 día)</td>
                    <td className="py-4 px-6 font-medium">$150.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        Pocas plazas
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Button href="/contact?course=UpperStretching" variant="outline" size="sm">
                        Inscribirse
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors">
                    <td className="py-4 px-6 font-medium">Estiramiento Deportivo Miembro Inferior</td>
                    <td className="py-4 px-6">11 de Junio, 2025</td>
                    <td className="py-4 px-6">6 horas (1 día)</td>
                    <td className="py-4 px-6 font-medium">$150.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        Pocas plazas
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Button href="/contact?course=LowerStretching" variant="outline" size="sm">
                        Inscribirse
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-soft p-6 mt-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-8/12">
                <h3 className="text-xl font-bold text-primary-800 mb-2">¿Interesado en un paquete completo?</h3>
                <p className="text-dark/70">
                  Obtén un 10% de descuento al inscribirte en el paquete completo de Estiramiento Deportivo (miembro superior e inferior) por solo $270.00
                </p>
              </div>
              <div className="md:w-4/12 text-center md:text-right">
                <Button href="/contact?course=FullPackage" variant="secondary">
                  Solicitar Paquete Completo
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">¿Quieres ampliar tus conocimientos?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contáctanos para obtener más información sobre nuestros cursos y programas de formación especializada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="shadow-lg"
            >
              Contáctanos Ahora
            </Button>
            <Button
              href="tel:+17139228973"
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10 shadow-lg"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llámanos: (713) 922-8973
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;
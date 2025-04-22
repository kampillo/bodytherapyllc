// src/app/courses/page.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Cursos - Body Therapy LLC',
  description: 'Explora nuestros cursos y talleres de terapia manual, masaje y técnicas holísticas para profesionales y entusiastas.',
};

// Lista mock de cursos para la demostración
const courses = [
  {
    id: 1,
    title: 'Fundamentos de Masaje Terapéutico',
    description: 'Aprende las técnicas básicas del masaje terapéutico para aliviar dolores y mejorar la movilidad.',
    duration: '40 horas',
    level: 'Principiante',
    image: '/images/courses/massage-basics.jpg',
    price: 350.00,
  },
  {
    id: 2,
    title: 'Masaje Descontracturante Avanzado',
    description: 'Profundiza en técnicas avanzadas para tratar contracturas musculares y tensiones crónicas.',
    duration: '30 horas',
    level: 'Intermedio',
    image: '/images/courses/advanced-massage.jpg',
    price: 450.00,
  },
  {
    id: 3,
    title: 'Terapia Miofascial',
    description: 'Especialízate en el tratamiento del sistema fascial para mejorar la movilidad y reducir el dolor.',
    duration: '25 horas',
    level: 'Avanzado',
    image: '/images/courses/myofascial.jpg',
    price: 500.00,
  },
  {
    id: 4,
    title: 'Aromaterapia en la Práctica Terapéutica',
    description: 'Incorpora los beneficios de los aceites esenciales en tus sesiones de terapia manual.',
    duration: '20 horas',
    level: 'Todos los niveles',
    image: '/images/courses/aromatherapy.jpg',
    price: 300.00,
  },
];

const CoursesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">Cursos y Formación</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Aprende de profesionales experimentados y expande tus conocimientos en terapia manual y técnicas holísticas.
          </p>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Formación Profesional</h2>
              <p className="text-lg text-gray-600 mb-6">
                En Body Therapy LLC ofrecemos programas de formación diseñados para profesionales del masaje, fisioterapeutas y entusiastas que desean ampliar sus conocimientos y habilidades en terapia manual.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nuestros cursos combinan teoría con práctica intensiva, en grupos reducidos para garantizar atención personalizada y un aprendizaje efectivo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Instructores certificados con amplia experiencia</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Materiales didácticos de alta calidad</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Práctica supervisada en grupos reducidos</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">Certificación avalada por organizaciones reconocidas</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-96">
              <Image
                src="/images/courses/training.jpg"
                alt="Formación en Terapia Manual"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Cursos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explora nuestra selección de cursos diseñados para diferentes niveles y necesidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <div className="relative h-64">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="bg-light p-2 rounded">
                      <span className="text-sm font-medium text-gray-600 block">Duración</span>
                      <span className="text-secondary font-medium">{course.duration}</span>
                    </div>
                    <div className="bg-light p-2 rounded">
                      <span className="text-sm font-medium text-gray-600 block">Nivel</span>
                      <span className="text-secondary font-medium">{course.level}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">${course.price.toFixed(2)}</span>
                    <Button href={`/courses/${course.id}`} variant="primary">
                      Más Información
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button href="/contact" variant="secondary" size="lg">
              Solicitar Información
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Lo que Dicen Nuestros Estudiantes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experiencias de quienes han tomado nuestros cursos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow p-8">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-xl font-semibold">L</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Laura Martínez</h4>
                  <p className="text-gray-500">Masajista profesional</p>
                </div>
              </div>
              <p className="text-gray-600">
                "El curso de Masaje Descontracturante Avanzado superó todas mis expectativas. Los conocimientos adquiridos han transformado mi práctica profesional, permitiéndome ofrecer un mejor servicio a mis clientes."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow p-8">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-xl font-semibold">C</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Carlos Rodríguez</h4>
                  <p className="text-gray-500">Fisioterapeuta</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Como profesional de la fisioterapia, el curso de Terapia Miofascial complementó perfectamente mis conocimientos previos. La calidad de la enseñanza y el enfoque práctico fueron excelentes."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow p-8">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-xl font-semibold">S</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Sofía García</h4>
                  <p className="text-gray-500">Terapeuta holística</p>
                </div>
              </div>
              <p className="text-gray-600">
                "El curso de Aromaterapia en la Práctica Terapéutica me brindó herramientas valiosas para enriquecer mis sesiones. Los instructores son muy profesionales y el material didáctico es de primera calidad."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Próximos Cursos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reserva tu lugar en nuestros próximos cursos y talleres
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-3 px-6 text-left">Curso</th>
                    <th className="py-3 px-6 text-left">Fecha de Inicio</th>
                    <th className="py-3 px-6 text-left">Duración</th>
                    <th className="py-3 px-6 text-left">Precio</th>
                    <th className="py-3 px-6 text-left">Disponibilidad</th>
                    <th className="py-3 px-6 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-light">
                    <td className="py-4 px-6">Fundamentos de Masaje Terapéutico</td>
                    <td className="py-4 px-6">15 de Mayo, 2025</td>
                    <td className="py-4 px-6">40 horas (10 semanas)</td>
                    <td className="py-4 px-6">$350.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Plazas disponibles
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <Button href="/contact" variant="outline" size="sm">
                        Inscribirse
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-light">
                    <td className="py-4 px-6">Masaje Descontracturante Avanzado</td>
                    <td className="py-4 px-6">2 de Junio, 2025</td>
                    <td className="py-4 px-6">30 horas (8 semanas)</td>
                    <td className="py-4 px-6">$450.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                        Pocas plazas
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <Button href="/contact" variant="outline" size="sm">
                        Inscribirse
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-light">
                    <td className="py-4 px-6">Terapia Miofascial</td>
                    <td className="py-4 px-6">10 de Julio, 2025</td>
                    <td className="py-4 px-6">25 horas (6 semanas)</td>
                    <td className="py-4 px-6">$500.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Plazas disponibles
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <Button href="/contact" variant="outline" size="sm">
                        Inscribirse
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-light">
                    <td className="py-4 px-6">Aromaterapia en la Práctica Terapéutica</td>
                    <td className="py-4 px-6">5 de Agosto, 2025</td>
                    <td className="py-4 px-6">20 horas (5 semanas)</td>
                    <td className="py-4 px-6">$300.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        Lista de espera
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <Button href="/contact" variant="outline" size="sm">
                        Unirse a lista de espera
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres ampliar tus conocimientos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para obtener más información sobre nuestros cursos y programas de formación.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/courses#upcoming"
              variant="secondary"
              size="lg"
              className="shadow-lg"
            >
              Ver Próximos Cursos
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10 shadow-lg"
            >
              Solicitar Información
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;
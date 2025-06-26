// src/app/courses/page.tsx - Versión traducida completa
'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const CoursesPage = () => {
  const { t } = useLanguage();

  // Lista de cursos disponibles (usando traducciones)
  const getCourses = () => [
    {
      id: 1,
      title: t('courses.mti.title'),
      description: t('courses.mti.description'),
      duration: t('courses.mti.duration'),
      level: t('courses.mti.level'),
      image: '/images/courses/mti-para-adultos.png',
      price: t('courses.mti.price'),
    },
    {
      id: 2,
      title: t('courses.upper.title'),
      description: t('courses.upper.description'),
      duration: t('courses.upper.duration'),
      level: t('courses.upper.level'),
      image: '/images/courses/estiramiento-deportivo-miembro-superior.jpg',
      price: t('courses.upper.price'),
    },
    {
      id: 3,
      title: t('courses.lower.title'),
      description: t('courses.lower.description'),
      duration: t('courses.lower.duration'),
      level: t('courses.lower.level'),
      image: '/images/courses/estiramiento-deportivo-miembro-inferior.png',
      price: t('courses.lower.price'),
    }
  ];

  const courses = getCourses();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-16 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            {t('courses.hero.badge')}
          </span>
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-black-800 uppercase mb-2">
            {t('courses.hero.title')}
          </h1>
          <h2 className="text-lg md:text-xl text-black-800 font-semibold mb-6">
            {t('courses.hero.subtitle')}<br />
            {t('courses.hero.credentials')}
          </h2>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">
                {t('courses.training.title')}
              </h2>
              <p className="text-lg text-black-800 font-medium mb-4">
                {t('courses.training.expand')}
              </p>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                {t('courses.training.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-dark/80">{t('courses.training.feature1')}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-dark/80">{t('courses.training.feature2')}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-dark/80">{t('courses.training.feature3')}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 text-secondary-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-dark/80">{t('courses.training.feature4')}</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-hover h-96">
              <Image
                src="/images/courses/courses.png"
                alt={t('courses.training.title')}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-secondary-200 rounded-xl -z-10"></div>
            </div>
          </div>

          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium mb-4">
              {t('courses.programs.badge')}
            </span>
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
              {t('courses.programs.title')}
            </h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              {t('courses.programs.subtitle')}
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
                      <span className="text-sm font-medium text-dark/60 block">{t('courses.duration')}</span>
                      <span className="text-primary-800 font-medium">{course.duration}</span>
                    </div>
                    <div className="bg-primary-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-dark/60 block">{t('courses.level')}</span>
                      <span className="text-primary-800 font-medium">{course.level}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button href={`/contact?course=${course.title}`} variant="primary">
                      {t('courses.request.infoo')}
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
            <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium mb-4">
              {t('courses.testimonials.badge')}
            </span>
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
              {t('courses.testimonials.title')}
            </h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              {t('courses.testimonials.subtitle')}
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
                  <h4 className="text-lg font-semibold text-primary-800">{t('courses.testimonial1.name')}</h4>
                  <p className="text-dark/60">{t('courses.testimonial1.role')}</p>
                </div>
              </div>
              <p className="text-dark/70">
                {t('courses.testimonial1.content')}
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
                  <h4 className="text-lg font-semibold text-primary-800">{t('courses.testimonial2.name')}</h4>
                  <p className="text-dark/60">{t('courses.testimonial2.role')}</p>
                </div>
              </div>
              <p className="text-dark/70">
                {t('courses.testimonial2.content')}
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
                  <h4 className="text-lg font-semibold text-primary-800">{t('courses.testimonial3.name')}</h4>
                  <p className="text-dark/60">{t('courses.testimonial3.role')}</p>
                </div>
              </div>
              <p className="text-dark/70">
                {t('courses.testimonial3.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-800 rounded-full text-sm font-medium mb-4">
              {t('courses.upcoming.badge')}
            </span>
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
              {t('courses.upcoming.title')}
            </h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              {t('courses.upcoming.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-primary-700 text-white">
                    <th className="py-3 px-6 text-left">{t('courses.table.course')}</th>
                    <th className="py-3 px-6 text-left">{t('courses.table.start')}</th>
                    <th className="py-3 px-6 text-left">{t('courses.table.duration')}</th>
                    <th className="py-3 px-6 text-left">{t('courses.table.price')}</th>
                    <th className="py-3 px-6 text-left">{t('courses.table.availability')}</th>
                    <th className="py-3 px-6 text-center">{t('courses.table.action')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-primary-50 transition-colors">
                    <td className="py-4 px-6 font-medium">{t('courses.mti.title')}</td>
                    <td className="py-4 px-6">{t('courses.schedule.mti.date')}</td>
                    <td className="py-4 px-6">{t('courses.schedule.mti.duration')}</td>
                    <td className="py-4 px-6 font-medium">$450.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {t('courses.available')}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Button href="/contact?course=MTI" variant="outline" size="sm">
                        {t('courses.register')}
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-primary-50 transition-colors">
                    <td className="py-4 px-6 font-medium">{t('courses.upper.title')}</td>
                    <td className="py-4 px-6">{t('courses.schedule.upper.date')}</td>
                    <td className="py-4 px-6">{t('courses.schedule.upper.duration')}</td>
                    <td className="py-4 px-6 font-medium">$150.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        {t('courses.few')}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Button href="/contact?course=UpperStretching" variant="outline" size="sm">
                        {t('courses.register')}
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary-50 transition-colors">
                    <td className="py-4 px-6 font-medium">{t('courses.lower.title')}</td>
                    <td className="py-4 px-6">{t('courses.schedule.lower.date')}</td>
                    <td className="py-4 px-6">{t('courses.schedule.lower.duration')}</td>
                    <td className="py-4 px-6 font-medium">$150.00</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        {t('courses.few')}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Button href="/contact?course=LowerStretching" variant="outline" size="sm">
                        {t('courses.register')}
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
                <h3 className="text-xl font-bold text-primary-800 mb-2">{t('courses.package.title')}</h3>
                <p className="text-dark/70">
                  {t('courses.package.description')}
                </p>
              </div>
              <div className="md:w-4/12 text-center md:text-right">
                <Button href="/contact?course=FullPackage" variant="secondary">
                  {t('courses.package.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-black relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">{t('courses.cta.title')}</h2>
          <p className="text-xl text-black/90 mb-10 max-w-2xl mx-auto">
            {t('courses.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="shadow-lg text-black"
            >
              {t('courses.cta.contact')}
            </Button>
            <Button
              href="tel:+17139228973"
              variant="outline"
              size="lg"
              className="text-black border-black hover:bg-black/10 shadow-lg"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('courses.cta.phone')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;

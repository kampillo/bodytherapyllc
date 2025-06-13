// src/app/about/page.tsx - Con soporte multiidioma
'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import TestimonialCarousel from '@/components/sections/TestimonialSection';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-16 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            {t('about.hero.badge')}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/home/Masajes-spa.jpg"
                  alt="María Mercedes Lizalde - Fundadora"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-primary-800 mb-4">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-dark/70 mb-6">
                {t('about.story.p1')}
              </p>
              <p className="text-lg text-dark/70 mb-6">
                {t('about.story.p2')}
              </p>
              <p className="text-lg text-dark/70">
                {t('about.story.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-dark/70">
                {t('about.mission.desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                {t('about.vision.title')}
              </h2>
              <p className="text-lg text-dark/70">
                {t('about.vision.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {t('about.values.service.title')}
              </h3>
              <p className="text-dark/70">
                {t('about.values.service.desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {t('about.values.respect.title')}
              </h3>
              <p className="text-dark/70">
                {t('about.values.respect.desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {t('about.values.empathy.title')}
              </h3>
              <p className="text-dark/70">
                {t('about.values.empathy.desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {t('about.values.integrity.title')}
              </h3>
              <p className="text-dark/70">
                {t('about.values.integrity.desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {t('about.values.commitment.title')}
              </h3>
              <p className="text-dark/70">
                {t('about.values.commitment.desc')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {t('about.values.responsibility.title')}
              </h3>
              <p className="text-dark/70">
                {t('about.values.responsibility.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Usando el componente con showAll=true */}
      <div className="pt-10" id="testimonials">
        <TestimonialCarousel showAll={true} />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('about.cta.subtitle')}
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="shadow-lg"
          >
            {t('about.cta.button')}
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

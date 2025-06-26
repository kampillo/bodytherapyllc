'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ui/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            {t('nav.services')}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            {t('services.page.title')}
          </h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            {t('services.page.subtitle')}
          </p>
        </div>
      </section>

      {/* Masaje Terapéutico Especializado */}
      <ServiceCard
        id="therapeutic"
        title={t('services.specialized.title')}
        description={t('services.specialized.desc')}
        imageSrc="/images/services/masaje-terapeutico-especializado.png"
        imageAlt={t('services.specialized.title')}
        price="$125.00"
        duration="75 min"
        features={[
          t('services.features.tendinopathies'),
          t('services.features.fractures'),
          t('services.features.scoliosis'),
          t('services.features.capsulitis'),
          t('services.features.facial'),
          t('services.features.back'),
          t('services.features.whiplash'),
          t('services.features.tennis'),
          t('services.features.sports'),
          t('services.features.toxins'),
          t('services.features.circulation'),
          t('services.features.oxygen'),
          t('services.features.mobility'),
          t('services.features.pain'),
          t('services.features.region')
        ]}
        link="/contact"
      />

      {/* Clinical Massage Section */}
      <section id="clinical" className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">
              {t('services.clinical.section.title')}
            </h2>
            <p className="text-lg text-dark/70 mb-6 leading-relaxed">
              {t('services.clinical.section.desc')}
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
                      alt={t('services.clinical.trigger.title')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">
                    {t('services.clinical.trigger.title')}
                  </h3>
                  <p className="text-dark/70 text-sm mb-3">
                    {t('services.clinical.trigger.desc')}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 {t('services.min')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$95.00</span>
                      <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
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
                      alt={t('services.clinical.deep.title')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">
                    {t('services.clinical.deep.title')}
                  </h3>
                  <p className="text-dark/70 text-sm mb-3">
                    {t('services.clinical.deep.desc')}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 {t('services.min')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$95.00</span>
                      <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
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
                      alt={t('services.clinical.lymphatic.title')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">
                    {t('services.clinical.lymphatic.title')}
                  </h3>
                  <p className="text-dark/70 text-sm mb-3">
                    {t('services.clinical.lymphatic.desc')}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 {t('services.min')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$100.00</span>
                      <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-700 mt-2">
                    {t('services.packages.three')} {t('services.clinical.lymphatic.title').toLowerCase()}: $280.00
                  </p>
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
                      alt={t('services.clinical.myofascial.title')}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:w-3/5">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">
                    {t('services.clinical.myofascial.title')}
                  </h3>
                  <p className="text-dark/70 text-sm mb-3">
                    {t('services.clinical.myofascial.desc')}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 {t('services.min')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-secondary-700">$90.00</span>
                      <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
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
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">
              {t('services.relaxing.section.title')}
            </h2>
            <p className="text-lg text-dark/70 mb-6 leading-relaxed">
              {t('services.relaxing.section.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Relaxing Massage 1 */}
            <div className="bg-light rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="mb-4">
                <div className="relative rounded-lg overflow-hidden h-48 mb-4">
                  <Image
                    src="/images/services/aroma.png"
                    alt={t('services.relaxing.aromatherapy.title')}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  {t('services.relaxing.aromatherapy.title')}
                </h3>
                <p className="text-dark/70 text-sm mb-3">
                  {t('services.relaxing.aromatherapy.desc')}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark/70">60 {t('services.min')}</span>
                  </div>
                  <span className="font-bold text-secondary-700">$80.00</span>
                </div>
              </div>
              <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
            </div>

            {/* Relaxing Massage 2 */}
            <div className="bg-light rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="mb-4">
                <div className="relative rounded-lg overflow-hidden h-48 mb-4">
                  <Image
                    src="/images/services/sueco.png"
                    alt={t('services.relaxing.swedish.title')}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  {t('services.relaxing.swedish.title')}
                </h3>
                <p className="text-dark/70 text-sm mb-3">
                  {t('services.relaxing.swedish.desc')}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark/70">60 {t('services.min')}</span>
                  </div>
                  <span className="font-bold text-secondary-700">$80.00</span>
                </div>
              </div>
              <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
            </div>

            {/* Relaxing Massage 3 */}
            <div className="bg-light rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="mb-4">
                <div className="relative rounded-lg overflow-hidden h-48 mb-4">
                  <Image
                    src="/images/services/piedras.png"
                    alt={t('services.relaxing.stones.title')}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  {t('services.relaxing.stones.title')}
                </h3>
                <p className="text-dark/70 text-sm mb-3">
                  {t('services.relaxing.stones.desc')}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark/70">60 {t('services.min')}</span>
                  </div>
                  <span className="font-bold text-secondary-700">$90.00</span>
                </div>
              </div>
              <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
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
                  alt={t('services.corporate.title')}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
                {t('services.corporate.title')}
              </h2>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                {t('services.corporate.descc')}
              </p>
              <div className="bg-white rounded-lg p-6 shadow-soft mb-6">
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  {t('services.corporate.shiatsu.title')}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark/70">60 {t('services.min')}</span>
                  </div>
                </div>
                <p className="text-dark/70 mb-4">
                  {t('services.corporate.shiatsu.desc')}
                </p>
                <Button href="/contact" variant="primary" size="sm">{t('services.request.info')}</Button>
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
                  alt={t('services.holistic.section.title')}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pr-8">
              <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">
                {t('services.holistic.section.title')}
              </h2>
              <p className="text-lg text-dark/70 mb-6 leading-relaxed">
                {t('services.holistic.section.desc')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Holistic Therapy 1 */}
                <div className="bg-light rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">
                    {t('services.holistic.bars.title')}
                  </h3>
                  <p className="text-dark/70 text-sm mb-4">
                    {t('services.holistic.bars.desc')}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">60 {t('services.min')}</span>
                    </div>
                    <span className="font-bold text-secondary-700">$70.00</span>
                  </div>
                  <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
                </div>

                {/* Holistic Therapy 2 */}
                <div className="bg-light rounded-lg p-6 shadow-soft">
                  <h3 className="text-xl font-bold text-primary-800 mb-3">
                    {t('services.holistic.reflexology.title')}
                  </h3>
                  <p className="text-dark/70 text-sm mb-4">
                    {t('services.holistic.reflexology.desc')}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-dark/70">45 {t('services.min')}</span>
                    </div>
                    <span className="font-bold text-secondary-700">$70.00</span>
                  </div>
                  <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Packages Section */}
      <section id="packages" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-6">
              {t('services.packages.section.title')}
            </h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              {t('services.packages.section.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-secondary-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                  {t('services.promotion')}
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 mb-6">
                  <Image
                    src="/images/services/71.png"
                    alt={t('services.packages.bodyface.title')}
                    fill
                    className="object-cover object-bottom"
                    priority
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                {t('services.packages.bodyface.title')}
              </h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.swedish')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.stones')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.facial')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.towels')}</span>
                </li>
              </ul>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">75 {t('services.min')}</span>
                </div>
                <div>
                  <span className="text-sm line-through text-dark/50 mr-2">$120.00</span>
                  <span className="text-xl font-bold text-secondary-700">$95.00</span>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="md" className="w-full">{t('services.book')}</Button>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-secondary-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                  {t('services.promotion')}
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 mb-6">
                  <Image
                    src="/images/services/72.png"
                    alt={t('services.packages.bodyfeet.title')}
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                {t('services.packages.bodyfeet.title')}
              </h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.swedish')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.boots')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.exfoliant')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.aromatherapy')}</span>
                </li>
              </ul>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">75 {t('services.min')}</span>
                </div>
                <div>
                  <span className="text-sm line-through text-dark/50 mr-2">$110.00</span>
                  <span className="text-xl font-bold text-secondary-700">$100.00</span>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="md" className="w-full">{t('services.book')}</Button>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-secondary-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                  {t('services.promotion')}
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 mb-6">
                  <Image
                    src="/images/services/73.png"
                    alt={t('services.packages.tensionless.title')}
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                {t('services.packages.tensionless.title')}
              </h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.trigger')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.tools')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.towels')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('services.package.oil')}</span>
                </li>
              </ul>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-dark/70">75 {t('services.min')}</span>
                </div>
                <div>
                  <span className="text-sm line-through text-dark/50 mr-2">$130.00</span>
                  <span className="text-xl font-bold text-secondary-700">$110.00</span>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="md" className="w-full">{t('services.book')}</Button>
            </div>
          </div>

          {/* Couple Massage Packages */}
       

          <div className="mt-16">
            <h3 className="text-center font-heading text-2xl font-bold text-primary-800 mb-12">
              {t('services.packages.more.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Additional Option 1 */}
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="">
                    <h3 className="text-xl font-bold text-primary-800 mb-4">
                      {t('services.packages.neck.title')}
                    </h3>
                    <p className="text-dark/70 mb-6">
                      {t('services.packages.neck.desc')}
                    </p>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-dark/70">30 {t('services.min')}</span>
                      </div>
                      <span className="font-bold text-secondary-700">$50.00</span>
                    </div>
                    <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
                  </div>
                </div>
              </div>

              {/* Additional Option 2 */}
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-hover transition-all">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="">
                    <h3 className="text-xl font-bold text-primary-800 mb-4">
                      {t('services.packages.legs.title')}
                    </h3>
                    <p className="text-dark/70 mb-6">
                      {t('services.packages.legs.desc')}
                    </p>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-secondary-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-dark/70">45 {t('services.min')}</span>
                      </div>
                      <span className="font-bold text-secondary-700">$75.00</span>
                    </div>
                    <Button href="/contact" variant="outline" size="sm">{t('services.book')}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-primary-700 rounded-bl-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/3 bg-primary-700 rounded-tr-3xl opacity-30"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-black">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-black/90 mb-10 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="shadow-lg"
            >
              {t('services.cta.button')}
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
              {t('common.call')}: (713) 922-8973
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

// src/components/ui/ServiceCard.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  price?: string;
  duration?: string;
  features?: string[];
  link: string;
  reversed?: boolean;
  id?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  price,
  duration,
  features,
  link,
  reversed = false,
  id
}) => {
  return (
    <section id={id} className={`py-16 ${reversed ? 'bg-primary-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              {/* Elementos decorativos */}
              <div className={`absolute -top-4 ${reversed ? '-right-4' : '-left-4'} w-24 h-24 border-2 ${reversed ? 'border-secondary-200' : 'border-primary-200'} rounded-xl -z-10`}></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-hover">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              
              <div className={`absolute -bottom-4 ${reversed ? '-left-4' : '-right-4'} w-24 h-24 border-2 ${reversed ? 'border-primary-200' : 'border-secondary-200'} rounded-xl -z-10`}></div>
            </div>
          </div>
          
          <div className={`md:w-1/2 ${reversed ? 'md:pr-8' : 'md:pl-8'}`}>
            <h2 className="font-heading text-3xl font-bold text-primary-800 mb-4">{title}</h2>
            <p className="text-lg text-dark/70 mb-6 leading-relaxed">
              {description}
            </p>
            
            {features && features.length > 0 && (
              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark/80">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {(price || duration) && (
              <div className="flex flex-wrap items-center gap-6 mb-6 p-4 bg-light rounded-lg border border-gray-100">
                {duration && (
                  <div>
                    <p className="text-sm text-dark/60 mb-1">Duración</p>
                    <p className="text-lg font-semibold text-primary-800">{duration}</p>
                  </div>
                )}
                
                {price && (
                  <div>
                    <p className="text-sm text-dark/60 mb-1">Precio</p>
                    <p className="text-xl font-bold text-secondary-600">{price}</p>
                  </div>
                )}
              </div>
            )}
            
            <Button href={link} variant="primary">
              Reservar cita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;

'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage } from './LanguageContext';

interface ContactTranslations {
  // Hero Section
  title: string;
  subtitle: string;
  
  // Contact Information
  info: string;
  phone: string;
  email: string;
  schedule: string;
  address: string;
  follow: string;
  
  // Form
  form: {
    title: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    send: string;
    success: string;
    error: string;
  };
  
  // Form Validation
  validation: {
    required: string;
    invalidEmail: string;
    nameRequired: string;
    emailRequired: string;
    messageRequired: string;
  };
  
  // Form Options
  options: {
    selectOption: string;
    generalInquiry: string;
    bookAppointment: string;
    requestInfo: string;
    other: string;
  };
  
  // Placeholders
  placeholders: {
    email: string;
    phone: string;
    message: string;
  };
  
  // Map Section
  map: {
    title: string;
    subtitle: string;
    placeholder: string;
  };
}

interface ContactContextType {
  t: ContactTranslations;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const useContact = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactProvider: React.FC<ContactProviderProps> = ({ children }) => {
  const { language } = useLanguage();

  const translations: Record<string, ContactTranslations> = {
    es: {
      // Hero Section
      title: 'Contacto',
      subtitle: 'Estamos aquí para ayudarte. Contáctanos para consultas, citas o cualquier información que necesites.',
      
      // Contact Information
      info: 'Información de Contacto',
      phone: 'Teléfono',
      email: 'Correo Electrónico',
      schedule: 'Horario',
      address: 'Body Therapy LLC\nKaty, TX',
      follow: 'Síguenos',
      
      // Form
      form: {
        title: 'Envíanos un mensaje',
        name: 'Nombre',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        success: 'Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo pronto.',
        error: 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.',
      },
      
      // Form Validation
      validation: {
        required: 'es requerido',
        invalidEmail: 'Por favor ingresa un email válido',
        nameRequired: 'Nombre es requerido',
        emailRequired: 'Correo electrónico es requerido',
        messageRequired: 'Mensaje es requerido',
      },
      
      // Form Options
      options: {
        selectOption: 'Selecciona una opción',
        generalInquiry: 'Consulta general',
        bookAppointment: 'Reservar cita',
        requestInfo: 'Solicitar información',
        other: 'Otro',
      },
      
      // Placeholders
      placeholders: {
        email: 'tu@email.com',
        phone: '(123) 456-7890',
        message: '¿Cómo podemos ayudarte?',
      },
      
      // Map Section
      map: {
        title: 'Contacto',
        subtitle: 'Estamos aquí para ayudarte. Contáctanos para consultas, citas o cualquier información que necesites.',
        placeholder: 'Mapa embebido iría aquí',
      },
    },
    en: {
      // Hero Section
      title: 'Contact',
      subtitle: 'We are here to help you. Contact us for inquiries, appointments, or any information you need.',
      
      // Contact Information
      info: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      schedule: 'Schedule',
      address: 'Body Therapy LLC\nKaty, TX',
      follow: 'Follow Us',
      
      // Form
      form: {
        title: 'Send us a message',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        success: 'Your message has been sent successfully. We will contact you soon.',
        error: 'There was an error sending your message. Please try again.',
      },
      
      // Form Validation
      validation: {
        required: 'is required',
        invalidEmail: 'Please enter a valid email',
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        messageRequired: 'Message is required',
      },
      
      // Form Options
      options: {
        selectOption: 'Select an option',
        generalInquiry: 'General inquiry',
        bookAppointment: 'Book appointment',
        requestInfo: 'Request information',
        other: 'Other',
      },
      
      // Placeholders
      placeholders: {
        email: 'your@email.com',
        phone: '(123) 456-7890',
        message: 'How can we help you?',
      },
      
      // Map Section
      map: {
        title: 'Contact',
        subtitle: 'We are here to help you. Contact us for inquiries, appointments, or any information you need.',
        placeholder: 'Embedded map would go here',
      },
    },
  };

  const t = translations[language] || translations.en;

  return (
    <ContactContext.Provider value={{ t }}>
      {children}
    </ContactContext.Provider>
  );
}; 
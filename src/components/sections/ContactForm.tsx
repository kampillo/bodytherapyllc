// src/components/sections/ContactForm.tsx - Con soporte multiidioma
'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useContact } from '@/contexts/ContactContext';

const ContactForm = () => {
  const { t } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    
    if (!formData.name.trim()) {
      newErrors.name = t.validation.nameRequired;
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.validation.emailRequired;
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.validation.invalidEmail;
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.validation.messageRequired;
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Cargando... / Loading...',
    });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: t.form.success,
        });
        
        // Resetear el formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: result.error || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
        });
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Error de conexión. Por favor, inténtalo de nuevo.',
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formStatus.submitted && (
        <div className={`p-4 rounded-xl ${
          formStatus.success 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-yellow-50 text-yellow-800 border border-yellow-200'
        }`}>
          <div className="flex items-center">
            {formStatus.success ? (
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {formStatus.message}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark/80 mb-2">
            {t.form.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
              errors.name ? 'border-red-300' : 'border-gray-200'
            }`}
            placeholder={t.form.name}
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-red-500 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark/80 mb-2">
            {t.form.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
              errors.email ? 'border-red-300' : 'border-gray-200'
            }`}
            placeholder={t.placeholders.email}
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-500 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark/80 mb-2">
            {t.form.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
            placeholder={t.placeholders.phone}
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-dark/80 mb-2">
            {t.form.subject}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all appearance-none"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
          >
            <option value="">{t.options.selectOption}</option>
            <option value="Consulta">{t.options.generalInquiry}</option>
            <option value="Cita">{t.options.bookAppointment}</option>
            <option value="Informacion">{t.options.requestInfo}</option>
            <option value="Otro">{t.options.other}</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark/80 mb-2">
          {t.form.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
            errors.message ? 'border-red-300' : 'border-gray-200'
          }`}
          placeholder={t.placeholders.message}
        ></textarea>
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-500 flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {errors.message}
          </p>
        )}
      </div>
      
      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full md:w-auto"
        >
          <span className="flex items-center">
            <span>{t.form.send}</span>
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

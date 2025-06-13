// src/app/policies/page.tsx
import React from 'react';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Políticas y Cancelaciones - Body Therapy LLC',
  description: 'Información sobre nuestras políticas, precios y cancelaciones para servicios de terapia.',
};

const PoliciesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-50 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full opacity-60 -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full opacity-60 translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-800 mb-6">Políticas, Precios y Cancelaciones</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Información importante sobre nuestras políticas de citas, cancelaciones y reembolsos.
          </p>
        </div>
      </section>

      {/* Policies Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {/* Citas */}
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">CITAS</h2>
                <p className="text-dark/80 mb-4">
                  RECOMENDAMOS RESERVAR CON ANTICIPACIÓN PARA ASEGURAR SU PLAZA.
                </p>
                <p className="text-dark/80 mb-4">
                  A LOS CLIENTES QUE LLEGUEN TARDE SE LES COBRARÁ EL PRECIO TOTAL DEL SERVICIO. 
                  LAMENTABLEMENTE, NO PODEMOS REPONER EL TIEMPO PERDIDO. NO QUEREMOS PERJUDICAR 
                  EL TIEMPO DE OTROS CLIENTES.
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="primary">
                    Agendar cita
                  </Button>
                </div>
              </div>

              {/* Cancelaciones */}
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">CANCELACIONES</h2>
                <p className="text-dark/80 mb-4">
                  SE REQUIERE UN AVISO DE CANCELACIÓN DE 24 HORAS PARA TODOS LOS CLIENTES.
                </p>
              </div>

              {/* Política de reembolso */}
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">POLÍTICA DE REEMBOLSO</h2>
                <p className="text-dark/80 mb-4">
                  NO SE REALIZARÁN REEMBOLSOS POR DEPÓSITOS DE ESPACIO Y TIEMPO DE LOS PROVEEDORES 
                  DE SERVICIO, A MENOS QUE SE AVISE CON 24 HORAS DE ANTICIPACIÓN.
                </p>
                <p className="text-dark/80 mb-4">
                  TODOS LOS PRODUCTOS SON DE VENTA FINAL Y NO SE REALIZARÁN REEMBOLSOS NI CAMBIOS. 
                  EL/LOS PROPIETARIO(S) SE RESERVA(N) EL DERECHO DE TOMAR LA DECISIÓN FINAL SOBRE 
                  TODOS LOS REEMBOLSOS EMITIDOS.
                </p>
              </div>

              {/* Quejas */}
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h2 className="text-2xl font-bold text-primary-800 mb-6">QUEJAS</h2>
                <p className="text-dark/80 mb-4">
                  POR FAVOR, DIRIJA TODAS SUS QUEJAS A:
                </p>
                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                  <p className="text-dark/80">
                    DEPARTAMENTO DE SERVICIOS ESTATALES DE SALUD, GRUPO DE INVESTIGACIÓN Y ASEGURAMIENTO DE CALIDAD.
                  </p>
                  <p className="text-dark/80 mt-2">
                    P.O. BOX 141369 MAICL CODE: 1982<br />
                    AUSTIN TX 78714-1369
                  </p>
                  <p className="text-dark/80 mt-2">
                    LÍNEA DIRECTA DE QUEJAS: 1 800 942 25540<br />
                    FAX: 512 834 6789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">¿Tienes alguna pregunta?</h2>
          <p className="text-lg text-dark/70 mb-8 max-w-2xl mx-auto">
            Si tienes dudas sobre nuestras políticas o necesitas más información, 
            no dudes en contactarnos y estaremos encantados de ayudarte.
          </p>
          <Button 
            href="/contact" 
            variant="primary" 
            size="lg"
          >
            Contáctanos
          </Button>
        </div>
      </section>
    </>
  );
};

export default PoliciesPage;

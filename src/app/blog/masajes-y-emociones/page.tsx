// src/app/blog/masajes-y-emociones/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Masajes y Emociones: Una Conexión Profunda - Body Therapy LLC',
  description: 'Descubre la profunda conexión entre los masajes y nuestras emociones, y cómo el masaje terapéutico puede ayudar a liberar emociones reprimidas.',
};

const BlogPostPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-dark/60">
            <Link href="/" className="hover:text-primary-700 transition-colors">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary-700 transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark/80">Masajes y Emociones: Una Conexión Profunda</span>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="inline-block px-3 py-1 bg-secondary-50 text-secondary-800 rounded-full text-sm font-medium">
                  Bienestar Emocional
                </span>
                <span className="text-dark/60 text-sm ml-4">Mayo 21, 2025</span>
              </div>
              
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Masajes y Emociones: Una Conexión Profunda
              </h1>
              
              <div className="flex items-center mb-8">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 mr-3">
                  <span className="font-semibold">M</span>
                </div>
                <span className="text-dark/80 font-medium">María Mercedes Lizalde</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-hover mb-8 h-80">
                <Image
                  src="/images/blog/masajes-emociones.jpg"
                  alt="Masajes y Emociones: Una Conexión Profunda"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-dark/80 leading-relaxed">
                <h2 className="font-bold text-primary-800 text-2xl mb-4">¿Has experimentado alguna vez una liberación emocional durante un masaje?</h2>
                
                <p>
                  Los masajes no solo alivian tensiones físicas; también son puentes hacia nuestras emociones más escondidas. Muchas veces, el estrés, la ansiedad o incluso la tristeza se acumulan en nuestro cuerpo como nudos invisibles, esperando ser liberados.
                </p>
                
                <p>
                  Cuando recibimos un masaje terapéutico, los músculos se relajan, pero también lo hace nuestra mente. El contacto humano consciente activa la producción de <strong>endorfinas</strong> (hormonas del bienestar) y reduce el <strong>cortisol</strong> (la hormona del estrés).
                </p>
                
                <p>
                  Es común que, durante o después de una sesión, surjan emociones reprimidas: llanto, alegría, nostalgia o una profunda calma.
                </p>
                
                <p>
                  Hay pacientes a quienes se les despiertan emociones que se les complica equilibrar, quizá tienen largo tiempo con ellas guardadas y hacemos ese ¨click¨ a través del contacto físico que generamos con el masaje.
                </p>
                
                <h2 className="font-bold text-primary-800 text-2xl mb-4 mt-8">¿Por qué sucede esto?</h2>
                
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>
                    <strong>Memoria corporal:</strong> El cuerpo guarda recuerdos emocionales, especialmente en zonas como el cuello, espalda o piernas. Un masaje puede "desbloquear" esas áreas.
                  </li>
                  <li>
                    <strong>Liberación somática:</strong> Al soltar tensiones físicas, el sistema nervioso se reequilibra, permitiendo que las emociones fluyan.
                  </li>
                  <li>
                    <strong>Conexión mente-cuerpo:</strong> El tacto terapéutico fomenta la conciencia emocional, ayudándonos a procesar lo que no habíamos podido verbalizar.
                  </li>
                </ul>
                
                <p>
                  Un masaje no es solo un lujo, es un <em>acto de <strong>autocuidado emocional</strong></em>. Permitirnos este espacio es darle voz a lo que el cuerpo ya sabía, pero la mente no había escuchado.
                </p>
                
                <p>
                  Como Terapeuta Manual, no tenemos la autoridad para invadir ese espacio íntimo y sensible que son nuestras emociones.
                </p>
                
                <p>
                  En <strong>Body Therapy</strong> te damos la opción de canalizarte con profesionales que te brindarán apoyo emocional.
                </p>
                
                <div className="my-8 p-6 bg-secondary-50 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <Image
                        src="/images/blog/logo-marie-solutions.png"
                        alt="Marie Solutions Logo"
                        width={200}
                        height={100}
                        className="h-auto w-full max-w-[200px]"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-primary-800 mb-2">Soluciones y bienestar para su vida</h3>
                      <p className="mb-4">
                        En <a href="https://solucionesandbienestar.com/contacto" target="_blank" rel="noopener noreferrer" className="text-secondary-700 hover:text-secondary-900 underline">solucionesandbienestar.com/contacto</a> encontrarás servicios de asesoría en el desarrollo personal, familiar y empresarial, abarcando tres aspectos importantes de la vida: el área profesional y social, el apoyo emocional y las finanzas. Estas asesorías se ofrecen de forma individual y grupal.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-bold text-primary-800 text-xl mb-4">Marie Solutions trabaja para ti</h3>
                
                <p>
                  Soy Marie y mis cursos de capacitación se centran en el desarrollo del individuo, la autoconfianza y la aceptación como base central, no solo en la carrera de ventas, sino en cualquier profesión y en nuestras relaciones con los demás.
                </p>
                
                <p>
                  Me sigo desarrollando constantemente, pues el proceso de aprendizaje es infinito. En mi pasión por ayudar a otros, me he comprometido a superarme a mí misma, aceptarme y convivir con mis propios miedos.
                </p>
                
                <p>
                  Recuerda: "Nobody is perfect," pero todos tenemos la oportunidad de levantarnos cada mañana, ser y hacerlo mejor que ayer, para seguir evolucionando. Caminemos con una mano hacia atrás para apoyar a quienes vienen detrás y con otra hacia adelante para pedir ayuda a quienes están adelante. Tienes mi apoyo.
                </p>
                
                <div className="my-8 p-6 bg-light rounded-lg">
                  <h4 className="font-bold text-primary-800 text-lg mb-4">En Marie Solutions encontrarás los siguientes servicios:</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4 grid grid-cols-1 md:grid-cols-2">
                    <li>Apoyo Emocional en Proceso de Duelo</li>
                    <li>Asesoría Psicológica</li>
                    <li>Orientación Vocacional</li>
                    <li>Consulta Familiar y de Pareja</li>
                    <li>Toma de Decisiones</li>
                    <li>Cambio de Hábitos</li>
                    <li>Control y Manejo de la Ira, Estrés y Ansiedad</li>
                    <li>Liderazgo</li>
                    <li>Capacitación a Vendedores</li>
                    <li>Protección de Bienes</li>
                    <li>Grupos de Autoayuda</li>
                    <li>Cambio Cultural</li>
                  </ul>
                </div>
                
                <div className="my-8 p-6 bg-secondary-50 rounded-lg text-center">
                  <h3 className="font-bold text-primary-800 text-xl mb-4">SOLICITA UNA CITA HOY MISMO</h3>
                  <p className="mb-2">Estamos a un clic de distancia</p>
                  <p className="font-bold mb-1">Marie Solutions</p>
                  <p className="mb-1">Los Angeles, California, United States</p>
                  <p className="mb-4">
                    E-mail: <a href="mailto:marie@solucionesandbienestar.com" className="text-secondary-700 hover:text-secondary-900">marie@solucionesandbienestar.com</a>
                  </p>
                  <Button 
                    href="https://solucionesandbienestar.com/contacto" 
                    variant="secondary"
                  >
                    Visitar Marie Solutions
                  </Button>
                </div>
                
                <div className="my-8">
                  <Image
                    src="/images/blog/escaleras.jpg"
                    alt="Una persona subiendo escaleras"
                    width={700}
                    height={490}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="font-heading text-xl font-bold text-primary-800 mb-4">
                  ¿Te resultó útil este artículo?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="primary">
                    Contáctanos para más información
                  </Button>
                  <Button href="/services" variant="outline">
                    Explorar nuestros servicios
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;

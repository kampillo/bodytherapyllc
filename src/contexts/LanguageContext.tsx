// src/contexts/LanguageContext.tsx - Actualizado con traducciones de About
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tipos para los idiomas soportados
export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Traducciones
const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.services': 'Servicios',
    'nav.shop': 'Tienda',
    'nav.courses': 'Certificaciones',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': '¿EL DOLOR TE IMPIDE REALIZAR TUS ACTIVIDADES DIARIAS?',
    'hero.subtitle': 'Atrévete a vivir sin dolor, transforma tus movimientos limitados en libertad.',
    'hero.services': 'Nuestros Servicios',
    'hero.appointment': 'Agenda una Cita',
    
    // Services Section
    'services.title': 'Servicios Diseñados para Tu Bienestar',
    'services.subtitle': 'Ofrecemos una amplia gama de servicios terapéuticos y de bienestar, adaptados a tus necesidades específicas.',
    'services.therapeutic': 'Masaje Terapéutico Especializado',
    'services.therapeutic.desc': 'Especializado en aliviar dolores crónicos, lesiones y problemas musculares específicos.',
    'services.clinical': 'Masajes Clínicos',
    'services.clinical.desc': 'Técnicas especializadas para condiciones médicas específicas, como descontracturante, tejido profundo y más.',
    'services.relaxing': 'Masajes Relajantes',
    'services.relaxing.desc': 'Diseñados para reducir el estrés, la ansiedad y promover una sensación de bienestar general.',
    'services.corporate': 'Masaje Corporativo',
    'services.corporate.desc': 'Servicio profesional de masaje Shiatsu para empresas, ideal para reducir el estrés laboral.',
    'services.holistic': 'Terapias Holísticas',
    'services.holistic.desc': 'Enfoque integral que combina diferentes técnicas para armonizar cuerpo, mente y espíritu.',
    'services.packages': 'Paquetes de Masaje',
    'services.packages.desc': 'Experiencias completas que combinan diferentes técnicas y extras para una experiencia integral.',
    'services.more.info': 'Más información',
    'services.view.all': 'Ver todos los servicios',
    
    // Products Section
    'products.title': 'Complementa Tu Tratamiento',
    'products.subtitle': 'Productos de alta calidad creados en laboratorio profesional con ingredientes naturales para complementar tu tratamiento.',
    'products.home.cabin': 'Para uso en casa y cabina de masaje',
    'products.visit.shop': 'Visitar tienda',
    'products.view.details': 'Ver detalles',
    
    // About Section
    'about.title': 'Sobre Nosotros',
    'about.subtitle': 'Conoce nuestra historia, misión y los valores que guían nuestro trabajo diario para ofrecerte la mejor experiencia terapéutica.',
    'about.history': 'Nuestra Historia',
    'about.history.desc': 'Body Therapy LLC es un centro especializado en terapia manual, fundado con la misión de proporcionar alivio, bienestar y una mejor calidad de vida a nuestros pacientes.',
    'about.founder.desc': 'Nuestra directora, María Mercedes Lizalde, combina años de experiencia con un enfoque personalizado que atiende las necesidades específicas de cada paciente.',
    'about.learn.more': 'Conoce nuestra historia',
    'about.commitment': 'Comprometidos con tu bienestar',
    'about.learn.about': 'Conoce más sobre nosotros',
    
    // About Page
    'about.hero.badge': 'Conócenos',
    'about.hero.title': 'Sobre Nosotros',
    'about.hero.subtitle': 'Conoce nuestra historia, misión y los valores que guían nuestro trabajo diario para ofrecerte la mejor experiencia terapéutica.',
    
    // Story Section
    'about.story.title': 'Nuestra Historia',
    'about.story.p1': 'Body Therapy LLC nació del sueño y la pasión de María Mercedes Lizalde, conocida cariñosamente como Mercy, una terapeuta que ha dedicado su vida a ayudar a los demás a través de la terapia manual.',
    'about.story.p2': 'Con años de experiencia y formación especializada, Mercy fundó Body Therapy LLC con la visión de crear un espacio donde las personas puedan encontrar alivio a su dolor y mejorar su calidad de vida a través de técnicas terapéuticas personalizadas.',
    'about.story.p3': 'Hoy, Body Therapy LLC se ha convertido en un referente en terapia manual, combinando técnicas tradicionales con enfoques innovadores para ofrecer el mejor servicio a nuestros clientes.',
    
    // Mission & Vision
    'about.mission.title': 'Misión',
    'about.mission.desc': 'Nuestra misión es brindar atención de terapia manual de alta calidad, personalizada y basada en la evidencia, con el objetivo de aliviar dolores, mejorar la movilidad y promover el bienestar integral de nuestros pacientes.',
    'about.vision.title': 'Visión',
    'about.vision.desc': 'Ser la principal referencia en terapia manual, apoyándonos en la naturaleza para mejorar tus movimientos, vivas libre de dolor y con mejor calidad de vida.',
    
    // Values
    'about.values.title': 'Nuestros Valores',
    'about.values.subtitle': 'Los principios que guían nuestras acciones y definen nuestra forma de trabajo',
    'about.values.service.title': 'Servicio',
    'about.values.service.desc': 'Nos dedicamos a ofrecer atención de calidad, poniendo siempre las necesidades y bienestar de nuestros pacientes en primer lugar. Nuestro objetivo es brindar una experiencia positiva y efectiva en cada sesión.',
    'about.values.respect.title': 'Respeto',
    'about.values.respect.desc': 'Valoramos y consideramos la individualidad de cada persona, tratando a todos con cortesía, dignidad y comprensión. Reconocemos la importancia de escuchar y aceptar diferentes perspectivas y condiciones.',
    'about.values.empathy.title': 'Empatía',
    'about.values.empathy.desc': 'Nos esforzamos por entender y compartir los sentimientos y experiencias de nuestros pacientes, creando un ambiente de confianza y apoyo para facilitar su proceso de recuperación.',
    'about.values.integrity.title': 'Integridad',
    'about.values.integrity.desc': 'Actuamos con honestidad, transparencia y ética en todas nuestras acciones, asegurando que nuestras prácticas sean responsables y confiables.',
    'about.values.commitment.title': 'Compromiso',
    'about.values.commitment.desc': 'Estamos dedicados a brindar lo mejor de nosotros, manteniendo una actitud comprometida con la salud y el bienestar de nuestros pacientes, y buscando siempre mejorar nuestros servicios.',
    'about.values.responsibility.title': 'Responsabilidad',
    'about.values.responsibility.desc': 'Asumimos la responsabilidad de nuestras acciones y decisiones, garantizando un trato profesional y seguro en cada intervención.',
    
    // CTA Section
    'about.cta.title': '¿Listo para mejorar tu bienestar?',
    'about.cta.subtitle': 'Agenda una consulta hoy mismo y comienza tu camino hacia una vida sin dolor y con mayor vitalidad.',
    'about.cta.button': 'Contáctanos Ahora',
    
    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'Experiencias reales de personas que han transformado su bienestar con nuestras terapias',
    'testimonials.view.all': 'Ver todos los testimonios',
    
    // Footer
    'footer.services': 'Servicios',
    'footer.links': 'Enlaces',
    'footer.contact': 'Contacto',
    'footer.follow': 'Síguenos',
    'footer.schedule': 'Horario',
    'footer.schedule.weekdays': 'Lunes - Viernes: 9:00 AM - 6:00 PM',
    'footer.schedule.saturday': 'Sábado: 9:00 AM - 5:00 PM',
    'footer.schedule.sunday': 'Domingo: Cerrado',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.save': 'Guardar',
    'common.cancel': 'Cancelar',
    'common.delete': 'Eliminar',
    'common.edit': 'Editar',
    'common.view': 'Ver',
    'common.back': 'Volver',
    'common.next': 'Siguiente',
    'common.previous': 'Anterior',
    'common.search': 'Buscar',
    'common.close': 'Cerrar',
    'common.open': 'Abrir',
    'common.yes': 'Sí',
    'common.no': 'No',
    'common.required': 'Requerido',
    'common.optional': 'Opcional',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Estamos aquí para ayudarte. Contáctanos para consultas, citas o cualquier información que necesites.',
    'contact.info': 'Información de Contacto',
    'contact.phone': 'Teléfono',
    'contact.email': 'Email',
    'contact.schedule': 'Horario',
    'contact.address': 'Dirección',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Teléfono',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.success': 'Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.',
    'contact.form.error': 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.',
    
    // Blog
    'blog.title': 'Nuestro Blog',
    'blog.subtitle': 'Artículos, consejos y conocimientos sobre terapia manual, masaje terapéutico y bienestar integral.',
    'blog.read.more': 'Leer más',
    'blog.read.article': 'Leer Artículo',
    'blog.related': 'Artículos Relacionados',
    'blog.no.posts': 'No hay artículos disponibles',
    'blog.no.posts.desc': 'Próximamente tendremos contenido nuevo para ti.',
    
    // Services Page
    'services.page.title': 'Nuestros Servicios',
    'services.page.subtitle': 'Ofrecemos una amplia gama de terapias manuales personalizadas para aliviar el dolor, mejorar la movilidad y promover el bienestar integral.',
    'services.reserve': 'Reservar',
    'services.duration': 'Duración',
    'services.price': 'Precio',
    
    // Shop
    'shop.title': 'Nuestra Tienda',
    'shop.subtitle': 'Descubre nuestra selección de productos terapéuticos de alta calidad, elaborados con ingredientes naturales para complementar tus tratamientos.',
    'shop.cart': 'Carrito',
    'shop.add.to.cart': 'Agregar al carrito',
    'shop.view.cart': 'Ver carrito',
    'shop.checkout': 'Proceder al pago',
    'shop.empty.cart': 'Tu carrito está vacío',
    'shop.total': 'Total',
    'shop.quantity': 'Cantidad',
    
    // Courses
    'courses.title': 'Certificaciones Especializados',
    'courses.subtitle': 'Explora nuestros cursos diseñados para profesionales del masaje y terapeutas',
    'courses.request.info': 'Solicitar Información',
    'courses.professional.training': 'Formación Profesional',
    'courses.training.desc': 'Amplía tus conocimientos y habilidades como masajista.',
    'courses.contact.us': 'Contáctanos Ahora',

    // Services Page - Títulos principales
  'services.specialized.title': 'Masaje Terapéutico Especializado PAIN',
  'services.specialized.desc': 'Nuestro masaje terapéutico especializado está diseñado para abordar trastornos neuromusculares y musculoesqueléticos, eliminando toxinas, activando la circulación sanguínea y linfática, mejorando el aporte de oxígeno a los tejidos, ampliando el arco de movilidad y disminuyendo el dolor.',
  
  // Clinical Massages
  'services.clinical.section.title': 'Masajes Clínicos',
  'services.clinical.section.desc': 'Nuestros masajes clínicos están diseñados con un enfoque terapéutico específico para abordar diferentes problemas y necesidades de salud.',
  'services.clinical.trigger.title': 'Masaje Descontracturante',
  'services.clinical.trigger.desc': 'Se centra en aplicar presión controlada sobre los puntos de tensión muscular, donde se concentran las contracturas. Se utiliza para tratar dolores musculares, tensiones crónicas o lesiones deportivas.',
  'services.clinical.deep.title': 'Masaje Deep Tissue (Tejido profundo)',
  'services.clinical.deep.desc': 'Se enfoca en las capas más profundas de los músculos, la fascia y ligamentos, utilizando presión firme para liberar áreas tensas. Ideal para tratar dolores crónicos y contracturas persistentes.',
  'services.clinical.lymphatic.title': 'Masaje Linfático',
  'services.clinical.lymphatic.desc': 'Se aplica sobre el sistema linfático para favorecer la circulación y eliminación de líquidos. Reduce inflamaciones y ayuda a la desintoxicación natural del cuerpo.',
  'services.clinical.myofascial.title': 'Masaje Miofascial',
  'services.clinical.myofascial.desc': 'Técnica especializada que trabaja sobre la fascia, el tejido conectivo que envuelve músculos y órganos. Ayuda a liberar restricciones, mejorando la movilidad y reduciendo el dolor crónico.',
  'services.clinical.hormonal.title': 'Masaje Cambio Hormonal',
  'services.clinical.hormonal.desc': 'Diseñado para mujeres en menopausia, ayuda a calmar síntomas como sofocos, problemas para dormir, depresión y ansiedad, mejorando la circulación y reduciendo el estrés.',
  'services.clinical.prenatal.title': 'Masaje Prenatal',
  'services.clinical.prenatal.desc': 'Terapia corporal enfocada en las necesidades de la embarazada, alivia molestias durante la gestación y ayuda a liberar endorfinas, compensando las energías que la madre pierde.',
  'services.clinical.geriatric.title': 'Masaje Geriátrico',
  'services.clinical.geriatric.desc': 'Mejora la circulación sanguínea, la flexibilidad articular y mantiene el equilibrio hormonal. Alivia problemas como artritis, reumatismo y fatiga muscular comunes en la edad avanzada.',
  'services.clinical.oncology.title': 'Masaje Oncológico',
  'services.clinical.oncology.desc': 'Tratamiento especializado para pacientes oncológicos que mejora su calidad de vida aliviando síntomas como dolor, fatiga, ansiedad, náuseas y depresión mediante técnicas específicas.',
  'services.clinical.sports.title': 'Masaje Deportivo',
  'services.clinical.sports.desc': 'Diseñado para atletas y personas activas, combina diferentes técnicas para preparar el cuerpo antes del ejercicio, acelerar la recuperación y prevenir lesiones.',
  'services.clinical.metameric.title': 'Masaje Metamérico',
  'services.clinical.metameric.desc': 'Trabaja específicamente sobre los segmentos neurológicos del cuerpo para aliviar dolores referidos. Ideal para problemas como ciáticas, lumbalgias y dolores articulares.',
  
  // Relaxing Massages
  'services.relaxing.section.title': 'Masajes Relajantes',
  'services.relaxing.section.desc': 'Nuestros masajes relajantes están diseñados para aliviar el estrés, la ansiedad y promover un estado de bienestar general.',
  'services.relaxing.aromatherapy.title': 'Masaje Aromaterapia',
  'services.relaxing.aromatherapy.desc': 'Utiliza aceites esenciales altamente concentrados de plantas medicinales para relajar y tratar dolores. Produce relajación profunda, ayuda a reducir el estrés y tiene propiedades antibacterianas y antiinflamatorias.',
  'services.relaxing.swedish.title': 'Masaje Sueco',
  'services.relaxing.swedish.desc': 'Masaje clásico que combina cinco técnicas fundamentales para eliminar toxinas, mejorar la circulación y oxigenar los tejidos. Ideal para reducir estrés, ansiedad y ayudar en procesos de duelo.',
  'services.relaxing.stones.title': 'Masaje Piedras Calientes',
  'services.relaxing.stones.desc': 'Combina técnicas de masaje manual con la aplicación de piedras calientes sobre puntos energéticos del cuerpo. Alivia tensiones profundas, mejora la circulación y proporciona una relajación intensa.',
  
  // Corporate Massage
  'services.corporate.title': 'Masaje Corporativo',
  'services.corporate.descc': 'Ofrecemos servicios de masaje para empresas que buscan mejorar el bienestar de sus empleados, reducir el estrés laboral y aumentar la productividad.',
  'services.corporate.shiatsu.title': 'Masaje Corporativo Shiatsu',
  'services.corporate.shiatsu.desc': 'El masaje Shiatsu se centra en puntos específicos para liberar la tensión y mejorar el flujo de energía en el cuerpo.',
  
  // Holistic Therapies
  'services.holistic.section.title': 'Terapias Holísticas',
  'services.holistic.section.desc': 'Nuestras terapias holísticas buscan equilibrar el cuerpo, la mente y el espíritu, promoviendo la salud integral y el bienestar.',
  'services.holistic.bars.title': 'Access Bars',
  'services.holistic.reflexology.title': 'Reflexología Podal',
  
  // Massage Packages
  'services.packages.section.title': 'Paquetes de Masajes',
  'services.packages.section.desc': 'Disfruta de nuestros paquetes especiales diseñados para brindar una experiencia completa de relajación y bienestar.',
  'services.packages.bodyface.title': 'RELAX BODYFACE',
  'services.packages.bodyfeet.title': 'RELAX BODYFEET',
  'services.packages.tensionless.title': 'TENSIONLESS',
  'services.packages.couple.title': 'Masajes en Pareja',
  'services.packages.couple.body.title': 'COUPLE MASSAGE BODY',
  'services.packages.couple.facial.title': 'COUPLE MASSAGE BODYFACIAL',
  'services.packages.couple.stone.title': 'COUPLE MASSAGE BODYSTONE',
  'services.packages.more.title': 'Más Opciones',
  'services.packages.neck.title': 'Masaje cuello, brazos y espalda',
  'services.packages.neck.desc': 'Tratamiento rápido enfocado en liberar tensión de las zonas más propensas a acumular estrés.',
  'services.packages.legs.title': 'Masaje piernas cansadas',
  'services.packages.legs.desc': 'Tratamiento específico para piernas y pies, ideal para aliviar la fatiga y mejorar la circulación.',
  
  // Package descriptions
  'services.package.swedish': 'Masaje relajante sueco',
  'services.package.stones': 'Piedras calientes en espalda',
  'services.package.facial': 'Masaje facial',
  'services.package.towels': 'Toallas calientes',
  'services.package.boots': 'Botas de compresión',
  'services.package.exfoliant': 'Exfoliante de pies',
  'services.package.aromatherapy': 'Aromaterapia y toallas calientes',
  'services.package.trigger': 'Masaje descontracturante',
  'services.package.tools': 'Guasha de acero inoxidable o percutor o ventosas',
  'services.package.oil': 'Aceite especial para descontracturar',
  'services.package.snack': 'Snack orgánico',
  'services.package.drink': 'Bebida natural',
  'services.package.stone.aromatherapy': 'Aromaterapia',
  
  // Common terms
  'services.min': 'min',
  'services.promotion': 'Promoción',
  'services.book': 'Reservar',
  'services.request.info': 'Solicitar información',
  'services.package.sessions': 'sesiones',
  'services.cta.title': '¿Listo para experimentar el alivio que mereces?',
  'services.cta.subtitle': 'Nuestro equipo de profesionales está listo para ayudarte a recuperar tu bienestar y mejorar tu calidad de vida.',
  'services.cta.button': 'Agenda tu cita hoy',

  // Courses Page - Hero Section
  'courses.hero.badge': 'Formación Especializada',
  'courses.hero.title': 'CERTIFICACIONES EN TÉCNICAS DE TERAPIA MANUAL PARA MASAJISTAS PROFESIONALES: TU CAMINO HACIA LA EXCELENCIA.',
  'courses.hero.subtitle': 'Por: María Mercedes Lizalde',
  'courses.hero.credentials': 'LMT-Instructor-Proveedor de Clases Continuas',
  
  // Professional Training Section
  'courses.training.title': 'Formación Profesional',
  'courses.training.expand': 'Amplía tus conocimientos y habilidades como masajista.',
  'courses.training.description': 'Nuestros cursos combinan teoría con práctica intensiva, en grupos reducidos para garantizar atención personalizada y un aprendizaje efectivo.',
  'courses.training.feature1': 'Instructores certificados con amplia experiencia',
  'courses.training.feature2': 'Materiales didácticos de alta calidad',
  'courses.training.feature3': 'Práctica supervisada en grupos reducidos',
  'courses.training.feature4': 'Certificación avalada',
  
  // Available Programs
  'courses.programs.badge': 'Programas Disponibles',
  'courses.programs.title': 'Nuestros Certificaciones Especializados',
  'courses.programs.subtitle': 'Explora nuestros cursos diseñados para profesionales del masaje y terapeutas',
  
  // Individual Courses
  'courses.mti.title': 'Curso de Terapia de Masaje MTI para Adultos',
  'courses.mti.description': 'El curso incluye una descripción general completa de los desafíos de enseñar a estudiantes adultos. Habilidades prácticas requeridas para guiar a los estudiantes adultos. Una consideración detallada de un plan de estudios de terapia de masajes TDLR aprobado y requisitos.',
  'courses.mti.duration': '30 horas',
  'courses.mti.level': 'Profesional',
  'courses.mti.price': '$450.00',
  
  'courses.upper.title': 'Estiramiento Deportivo Miembro Superior',
  'courses.upper.description': 'Esta clase incluye anatomía de miembros superiores, manipulación de los tejidos blandos para realizar estiramientos de forma correcta y evitar lesiones. Cómo, cuándo y en qué momento se deben llevar a cabo.',
  'courses.upper.duration': '6 horas',
  'courses.upper.level': 'Intermedio',
  'courses.upper.price': '$150.00',
  
  'courses.lower.title': 'Estiramiento Deportivo Miembro Inferior',
  'courses.lower.description': 'Esta clase incluye anatomía de miembros inferiores, manipulación de los tejidos blandos para realizar estiramientos de forma correcta y evitar lesiones. Cómo, cuándo y en qué momento se deben llevar a cabo.',
  'courses.lower.duration': '6 horas',
  'courses.lower.level': 'Intermedio',
  'courses.lower.price': '$150.00',
  
  // Course Details
  'courses.duration': 'Duración',
  'courses.level': 'Nivel',
  'courses.investment': 'Inversión',
  'courses.request.infoo': 'Solicitar Información',
  
  // Testimonials Section
  'courses.testimonials.badge': 'Experiencias',
  'courses.testimonials.title': 'Lo que Dicen Nuestros Estudiantes',
  'courses.testimonials.subtitle': 'Experiencias de quienes han tomado nuestros cursos especializados',
  
  'courses.testimonial1.name': 'Laura Martínez',
  'courses.testimonial1.role': 'Masajista profesional',
  'courses.testimonial1.content': '"El curso de Estiramiento Deportivo fue clave para mejorar mis servicios. Las técnicas aprendidas me permiten ofrecer un tratamiento más completo y efectivo a mis clientes deportistas."',
  
  'courses.testimonial2.name': 'Carlos Rodríguez',
  'courses.testimonial2.role': 'Fisioterapeuta',
  'courses.testimonial2.content': '"Como profesional de la fisioterapia, el curso de estiramiento me proporcionó nuevas herramientas para tratar lesiones deportivas. La metodología de enseñanza facilita la aplicación inmediata de lo aprendido."',
  
  'courses.testimonial3.name': 'Miguel Sánchez',
  'courses.testimonial3.role': 'Instructor de masaje',
  'courses.testimonial3.content': '"El curso MTI para enseñar a adultos transformó mi manera de impartir clases. Las estrategias pedagógicas y el conocimiento del plan TDLR son invaluables para cualquier instructor de masaje."',
  
  // Upcoming Courses Section
  'courses.upcoming.badge': 'Calendario',
  'courses.upcoming.title': 'Próximas Fechas',
  'courses.upcoming.subtitle': 'Reserva tu lugar en nuestros próximos cursos y talleres',
  
  // Table Headers
  'courses.table.course': 'Curso',
  'courses.table.start': 'Fecha de Inicio',
  'courses.table.duration': 'Duración',
  'courses.table.price': 'Precio',
  'courses.table.availability': 'Disponibilidad',
  'courses.table.action': 'Acción',
  
  // Availability Status
  'courses.available': 'Plazas disponibles',
  'courses.few': 'Pocas plazas',
  'courses.register': 'Inscribirse',
  
  // Course Schedule Entries
  'courses.schedule.mti.date': '15 de Mayo, 2025',
  'courses.schedule.mti.duration': '30 horas (5 días)',
  'courses.schedule.upper.date': '10 de Junio, 2025',
  'courses.schedule.upper.duration': '6 horas (1 día)',
  'courses.schedule.lower.date': '11 de Junio, 2025',
  'courses.schedule.lower.duration': '6 horas (1 día)',
  
  // Package Deal
  'courses.package.title': '¿Interesado en un paquete completo?',
  'courses.package.description': 'Obtén un 10% de descuento al inscribirte en el paquete completo de Estiramiento Deportivo (miembro superior e inferior) por solo $270.00',
  'courses.package.button': 'Solicitar Paquete Completo',
  
  // CTA Section
  'courses.cta.title': '¿Quieres ampliar tus conocimientos?',
  'courses.cta.subtitle': 'Contáctanos para obtener más información sobre nuestros cursos y programas de formación especializada.',
  'courses.cta.contact': 'Contáctanos Ahora',
  'courses.cta.phone': 'Llámanos: (713) 922-8973',

    
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.shop': 'Shop',
    'nav.courses': 'Certifications',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'DOES PAIN PREVENT YOU FROM PERFORMING YOUR DAILY ACTIVITIES?',
    'hero.subtitle': 'Dare to live without pain, transform your limited movements into freedom.',
    'hero.services': 'Our Services',
    'hero.appointment': 'Schedule an Appointment',
    
    // Services Section
    'services.title': 'Services Designed for Your Wellbeing',
    'services.subtitle': 'We offer a wide range of therapeutic and wellness services, adapted to your specific needs.',
    'services.therapeutic': 'Specialized Therapeutic Massage',
    'services.therapeutic.desc': 'Specialized in relieving chronic pain, injuries and specific muscular problems.',
    'services.clinical': 'Clinical Massages',
    'services.clinical.desc': 'Specialized techniques for specific medical conditions, such as trigger point, deep tissue and more.',
    'services.relaxing': 'Relaxing Massages',
    'services.relaxing.desc': 'Designed to reduce stress, anxiety and promote a general sense of wellbeing.',
    'services.corporate': 'Corporate Massage',
    'services.corporate.desc': 'Professional Shiatsu massage service for companies, ideal for reducing work stress.',
    'services.holistic': 'Holistic Therapies',
    'services.holistic.desc': 'Comprehensive approach that combines different techniques to harmonize body, mind and spirit.',
    'services.packages': 'Massage Packages',
    'services.packages.desc': 'Complete experiences that combine different techniques and extras for an integral experience.',
    'services.more.info': 'More information',
    'services.view.all': 'View all services',
    
    // Products Section
    'products.title': 'Complement Your Treatment',
    'products.subtitle': 'High quality products created in professional laboratory with natural ingredients to complement your treatment.',
    'products.home.cabin': 'For home and massage cabin use',
    'products.visit.shop': 'Visit shop',
    'products.view.details': 'View details',
    
    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Learn about our history, mission and the values that guide our daily work to offer you the best therapeutic experience.',
    'about.history': 'Our History',
    'about.history.desc': 'Body Therapy LLC is a center specialized in manual therapy, founded with the mission of providing relief, wellness and a better quality of life to our patients.',
    'about.founder.desc': 'Our director, María Mercedes Lizalde, combines years of experience with a personalized approach that addresses the specific needs of each patient.',
    'about.learn.more': 'Learn our history',
    'about.commitment': 'Committed to your wellbeing',
    'about.learn.about': 'Learn more about us',
    
    // About Page
    'about.hero.badge': 'Get to Know Us',
    'about.hero.title': 'About Us',
    'about.hero.subtitle': 'Learn about our history, mission and the values that guide our daily work to offer you the best therapeutic experience.',
    
    // Story Section
    'about.story.title': 'Our Story',
    'about.story.p1': 'Body Therapy LLC was born from the dream and passion of María Mercedes Lizalde, affectionately known as Mercy, a therapist who has dedicated her life to helping others through manual therapy.',
    'about.story.p2': 'With years of experience and specialized training, Mercy founded Body Therapy LLC with the vision of creating a space where people can find relief from their pain and improve their quality of life through personalized therapeutic techniques.',
    'about.story.p3': 'Today, Body Therapy LLC has become a reference in manual therapy, combining traditional techniques with innovative approaches to offer the best service to our clients.',
    
    // Mission & Vision
    'about.mission.title': 'Mission',
    'about.mission.desc': 'Our mission is to provide high-quality, personalized and evidence-based manual therapy care, with the goal of relieving pain, improving mobility and promoting the integral wellbeing of our patients.',
    'about.vision.title': 'Vision',
    'about.vision.desc': 'To be the main reference in manual therapy, relying on nature to improve your movements, live pain-free and with better quality of life.',
    
    // Values
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide our actions and define our way of working',
    'about.values.service.title': 'Service',
    'about.values.service.desc': 'We dedicate ourselves to offering quality care, always putting the needs and wellbeing of our patients first. Our goal is to provide a positive and effective experience in each session.',
    'about.values.respect.title': 'Respect',
    'about.values.respect.desc': 'We value and consider the individuality of each person, treating everyone with courtesy, dignity and understanding. We recognize the importance of listening and accepting different perspectives and conditions.',
    'about.values.empathy.title': 'Empathy',
    'about.values.empathy.desc': 'We strive to understand and share the feelings and experiences of our patients, creating an environment of trust and support to facilitate their recovery process.',
    'about.values.integrity.title': 'Integrity',
    'about.values.integrity.desc': 'We act with honesty, transparency and ethics in all our actions, ensuring that our practices are responsible and reliable.',
    'about.values.commitment.title': 'Commitment',
    'about.values.commitment.desc': 'We are dedicated to giving our best, maintaining a committed attitude to the health and wellbeing of our patients, and always seeking to improve our services.',
    'about.values.responsibility.title': 'Responsibility',
    'about.values.responsibility.desc': 'We take responsibility for our actions and decisions, guaranteeing professional and safe treatment in each intervention.',
    
    // CTA Section
    'about.cta.title': 'Ready to improve your wellbeing?',
    'about.cta.subtitle': 'Schedule a consultation today and begin your journey towards a life without pain and with greater vitality.',
    'about.cta.button': 'Contact Us Now',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real experiences from people who have transformed their wellbeing with our therapies',
    'testimonials.view.all': 'View all testimonials',
    
    // Footer
    'footer.services': 'Services',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
    'footer.schedule': 'Schedule',
    'footer.schedule.weekdays': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'footer.schedule.saturday': 'Saturday: 9:00 AM - 5:00 PM',
    'footer.schedule.sunday': 'Sunday: Closed',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.search': 'Search',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.required': 'Required',
    'common.optional': 'Optional',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'We are here to help you. Contact us for consultations, appointments or any information you need.',
    'contact.info': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.schedule': 'Schedule',
    'contact.address': 'Address',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Your message has been sent successfully. We will contact you soon.',
    'contact.form.error': 'There was an error sending your message. Please try again.',
    
    // Blog
    'blog.title': 'Our Blog',
    'blog.subtitle': 'Articles, tips and knowledge about manual therapy, therapeutic massage and integral wellness.',
    'blog.read.more': 'Read more',
    'blog.read.article': 'Read Article',
    'blog.related': 'Related Articles',
    'blog.no.posts': 'No articles available',
    'blog.no.posts.desc': 'We will soon have new content for you.',
    
    // Services Page
    'services.page.title': 'Our Services',
    'services.page.subtitle': 'We offer a wide range of personalized manual therapies to relieve pain, improve mobility and promote integral wellbeing.',
    'services.reserve': 'Reserve',
    'services.duration': 'Duration',
    'services.price': 'Price',
    
    // Shop
    'shop.title': 'Our Shop',
    'shop.subtitle': 'Discover our selection of high quality therapeutic products, made with natural ingredients to complement your treatments.',
    'shop.cart': 'Cart',
    'shop.add.to.cart': 'Add to cart',
    'shop.view.cart': 'View cart',
    'shop.checkout': 'Proceed to checkout',
    'shop.empty.cart': 'Your cart is empty',
    'shop.total': 'Total',
    'shop.quantity': 'Quantity',
    
    // Courses
    'courses.title': 'Specialized Certifications',
    'courses.subtitle': 'Explore our courses designed for massage professionals and therapists',
    'courses.request.info': 'Request Information',
    'courses.professional.training': 'Professional Training',
    'courses.training.desc': 'Expand your knowledge and skills as a massage therapist.',
    'courses.contact.us': 'Contact Us Now',

     // Services Page - Main titles
  'services.specialized.title': 'Specialized Therapeutic Massage PAIN',
  'services.specialized.desc': 'Our specialized therapeutic massage is designed to address neuromuscular and musculoskeletal disorders, eliminating toxins, activating blood and lymphatic circulation, improving oxygen supply to tissues, expanding range of motion and reducing pain.',
  
  // Clinical Massages
  'services.clinical.section.title': 'Clinical Massages',
  'services.clinical.section.desc': 'Our clinical massages are designed with a specific therapeutic approach to address different problems and health needs.',
  'services.clinical.trigger.title': 'Trigger Point Massage',
  'services.clinical.trigger.desc': 'Focuses on applying controlled pressure on muscle tension points where contractures are concentrated. Used to treat muscle pain, chronic tension or sports injuries.',
  'services.clinical.deep.title': 'Deep Tissue Massage',
  'services.clinical.deep.desc': 'Focuses on the deepest layers of muscles, fascia and ligaments, using firm pressure to release tense areas. Ideal for treating chronic pain and persistent contractures.',
  'services.clinical.lymphatic.title': 'Lymphatic Massage',
  'services.clinical.lymphatic.desc': 'Applied on the lymphatic system to promote circulation and fluid elimination. Reduces inflammation and helps the body\'s natural detoxification.',
  'services.clinical.myofascial.title': 'Myofascial Massage',
  'services.clinical.myofascial.desc': 'Specialized technique that works on fascia, the connective tissue that surrounds muscles and organs. Helps release restrictions, improving mobility and reducing chronic pain.',
  'services.clinical.hormonal.title': 'Hormonal Change Massage',
  'services.clinical.hormonal.desc': 'Designed for women in menopause, helps calm symptoms like hot flashes, sleep problems, depression and anxiety, improving circulation and reducing stress.',
  'services.clinical.prenatal.title': 'Prenatal Massage',
  'services.clinical.prenatal.desc': 'Body therapy focused on pregnant women\'s needs, relieves discomfort during pregnancy and helps release endorphins, compensating for energy the mother loses.',
  'services.clinical.geriatric.title': 'Geriatric Massage',
  'services.clinical.geriatric.desc': 'Improves blood circulation, joint flexibility and maintains hormonal balance. Relieves problems like arthritis, rheumatism and muscle fatigue common in advanced age.',
  'services.clinical.oncology.title': 'Oncology Massage',
  'services.clinical.oncology.desc': 'Specialized treatment for oncology patients that improves their quality of life by relieving symptoms like pain, fatigue, anxiety, nausea and depression through specific techniques.',
  'services.clinical.sports.title': 'Sports Massage',
  'services.clinical.sports.desc': 'Designed for athletes and active people, combines different techniques to prepare the body before exercise, accelerate recovery and prevent injuries.',
  'services.clinical.metameric.title': 'Metameric Massage',
  'services.clinical.metameric.desc': 'Works specifically on neurological segments of the body to relieve referred pain. Ideal for problems like sciatica, lumbago and joint pain.',
  
  // Relaxing Massages
  'services.relaxing.section.title': 'Relaxing Massages',
  'services.relaxing.section.desc': 'Our relaxing massages are designed to relieve stress, anxiety and promote a general state of wellbeing.',
  'services.relaxing.aromatherapy.title': 'Aromatherapy Massage',
  'services.relaxing.aromatherapy.desc': 'Uses highly concentrated essential oils from medicinal plants to relax and treat pain. Produces deep relaxation, helps reduce stress and has antibacterial and anti-inflammatory properties.',
  'services.relaxing.swedish.title': 'Swedish Massage',
  'services.relaxing.swedish.desc': 'Classic massage that combines five fundamental techniques to eliminate toxins, improve circulation and oxygenate tissues. Ideal for reducing stress, anxiety and helping in grief processes.',
  'services.relaxing.stones.title': 'Hot Stone Massage',
  'services.relaxing.stones.desc': 'Combines manual massage techniques with hot stone application on body energy points. Relieves deep tension, improves circulation and provides intense relaxation.',
  
  // Corporate Massage
  'services.corporate.title': 'Corporate Massage',
  'services.corporate.descc': 'We offer massage services for companies seeking to improve employee wellbeing, reduce work stress and increase productivity.',
  'services.corporate.shiatsu.title': 'Corporate Shiatsu Massage',
  'services.corporate.shiatsu.desc': 'Shiatsu massage focuses on specific points to release tension and improve energy flow in the body.',
  
  // Holistic Therapies
  'services.holistic.section.title': 'Holistic Therapies',
  'services.holistic.section.desc': 'Our holistic therapies seek to balance body, mind and spirit, promoting integral health and wellbeing.',
  'services.holistic.bars.title': 'Access Bars',
  'services.holistic.reflexology.title': 'Foot Reflexology',
  
  // Massage Packages
  'services.packages.section.title': 'Massage Packages',
  'services.packages.section.desc': 'Enjoy our special packages designed to provide a complete relaxation and wellness experience.',
  'services.packages.bodyface.title': 'RELAX BODYFACE',
  'services.packages.bodyfeet.title': 'RELAX BODYFEET',
  'services.packages.tensionless.title': 'TENSIONLESS',
  'services.packages.couple.title': 'Couple Massages',
  'services.packages.couple.body.title': 'COUPLE MASSAGE BODY',
  'services.packages.couple.facial.title': 'COUPLE MASSAGE BODYFACIAL',
  'services.packages.couple.stone.title': 'COUPLE MASSAGE BODYSTONE',
  'services.packages.more.title': 'More Options',
  'services.packages.neck.title': 'Neck, arms and back massage',
  'services.packages.neck.desc': 'Quick treatment focused on releasing tension from areas most prone to accumulating stress.',
  'services.packages.legs.title': 'Tired legs massage',
  'services.packages.legs.desc': 'Specific treatment for legs and feet, ideal for relieving fatigue and improving circulation.',
  
  // Package descriptions
  'services.package.swedish': 'Relaxing Swedish massage',
  'services.package.stones': 'Hot stones on back',
  'services.package.facial': 'Facial massage',
  'services.package.towels': 'Hot towels',
  'services.package.boots': 'Compression boots',
  'services.package.exfoliant': 'Foot exfoliant',
  'services.package.aromatherapy': 'Aromatherapy and hot towels',
  'services.package.trigger': 'Trigger point massage',
  'services.package.tools': 'Stainless steel Guasha or percussor or cups',
  'services.package.oil': 'Special oil for trigger points',
  'services.package.snack': 'Organic snack',
  'services.package.drink': 'Natural drink',
  'services.package.stone.aromatherapy': 'Aromatherapy',
  
  // Common terms
  'services.min': 'min',
  'services.promotion': 'Promotion',
  'services.book': 'Book',
  'services.request.info': 'Request information',
  'services.package.sessions': 'sessions',
  'services.cta.title': 'Ready to experience the relief you deserve?',
  'services.cta.subtitle': 'Our team of professionals is ready to help you recover your wellbeing and improve your quality of life.',
  'services.cta.button': 'Schedule your appointment today',

  // Courses Page - Hero Section
  'courses.hero.badge': 'Specialized Training',
  'courses.hero.title': 'CERTIFICATIONS IN MANUAL THERAPY TECHNIQUES FOR PROFESSIONAL MASSAGE THERAPISTS: YOUR PATH TO EXCELLENCE.',
  'courses.hero.subtitle': 'By: María Mercedes Lizalde',
  'courses.hero.credentials': 'LMT-Instructor-Continuing Education Provider',
  
  // Professional Training Section
  'courses.training.title': 'Professional Training',
  'courses.training.expand': 'Expand your knowledge and skills as a massage therapist.',
  'courses.training.description': 'Our courses combine theory with intensive practice, in small groups to guarantee personalized attention and effective learning.',
  'courses.training.feature1': 'Certified instructors with extensive experience',
  'courses.training.feature2': 'High quality educational materials',
  'courses.training.feature3': 'Supervised practice in small groups',
  'courses.training.feature4': 'Accredited certification',
  
  // Available Programs
  'courses.programs.badge': 'Available Programs',
  'courses.programs.title': 'Our Specialized Certifications',
  'courses.programs.subtitle': 'Explore our courses designed for massage professionals and therapists',
  
  // Individual Courses
  'courses.mti.title': 'MTI Massage Therapy Course for Adults',
  'courses.mti.description': 'The course includes a comprehensive overview of the challenges of teaching adult students. Practical skills required to guide adult students. A detailed consideration of a TDLR approved massage therapy curriculum and requirements.',
  'courses.mti.duration': '30 hours',
  'courses.mti.level': 'Professional',
  'courses.mti.price': '$450.00',
  
  'courses.upper.title': 'Sports Stretching Upper Body',
  'courses.upper.description': 'This class includes upper body anatomy, soft tissue manipulation to perform stretches correctly and prevent injuries. How, when and at what time they should be carried out.',
  'courses.upper.duration': '6 hours',
  'courses.upper.level': 'Intermediate',
  'courses.upper.price': '$150.00',
  
  'courses.lower.title': 'Sports Stretching Lower Body',
  'courses.lower.description': 'This class includes lower body anatomy, soft tissue manipulation to perform stretches correctly and prevent injuries. How, when and at what time they should be carried out.',
  'courses.lower.duration': '6 hours',
  'courses.lower.level': 'Intermediate',
  'courses.lower.price': '$150.00',
  
  // Course Details
  'courses.duration': 'Duration',
  'courses.level': 'Level',
  'courses.investment': 'Investment',
  'courses.request.infoo': 'Request Information',
  
  // Testimonials Section
  'courses.testimonials.badge': 'Experiences',
  'courses.testimonials.title': 'What Our Students Say',
  'courses.testimonials.subtitle': 'Experiences from those who have taken our specialized courses',
  
  'courses.testimonial1.name': 'Laura Martinez',
  'courses.testimonial1.role': 'Professional massage therapist',
  'courses.testimonial1.content': '"The Sports Stretching course was key to improving my services. The techniques learned allow me to offer a more complete and effective treatment to my athlete clients."',
  
  'courses.testimonial2.name': 'Carlos Rodriguez',
  'courses.testimonial2.role': 'Physical therapist',
  'courses.testimonial2.content': '"As a physical therapy professional, the stretching course provided me with new tools to treat sports injuries. The teaching methodology facilitates immediate application of what was learned."',
  
  'courses.testimonial3.name': 'Miguel Sanchez',
  'courses.testimonial3.role': 'Massage instructor',
  'courses.testimonial3.content': '"The MTI course for teaching adults transformed my way of teaching classes. The pedagogical strategies and knowledge of the TDLR plan are invaluable for any massage instructor."',
  
  // Upcoming Courses Section
  'courses.upcoming.badge': 'Calendar',
  'courses.upcoming.title': 'Upcoming Dates',
  'courses.upcoming.subtitle': 'Reserve your place in our upcoming courses and workshops',
  
  // Table Headers
  'courses.table.course': 'Course',
  'courses.table.start': 'Start Date',
  'courses.table.duration': 'Duration',
  'courses.table.price': 'Price',
  'courses.table.availability': 'Availability',
  'courses.table.action': 'Action',
  
  // Availability Status
  'courses.available': 'Spots available',
  'courses.few': 'Few spots left',
  'courses.register': 'Register',
  
  // Course Schedule Entries
  'courses.schedule.mti.date': 'May 15, 2025',
  'courses.schedule.mti.duration': '30 hours (5 days)',
  'courses.schedule.upper.date': 'June 10, 2025',
  'courses.schedule.upper.duration': '6 hours (1 day)',
  'courses.schedule.lower.date': 'June 11, 2025',
  'courses.schedule.lower.duration': '6 hours (1 day)',
  
  // Package Deal
  'courses.package.title': 'Interested in a complete package?',
  'courses.package.description': 'Get a 10% discount by enrolling in the complete Sports Stretching package (upper and lower body) for only $270.00',
  'courses.package.button': 'Request Complete Package',
  
  // CTA Section
  'courses.cta.title': 'Want to expand your knowledge?',
  'courses.cta.subtitle': 'Contact us for more information about our courses and specialized training programs.',
  'courses.cta.contact': 'Contact Us Now',
  'courses.cta.phone': 'Call us: (713) 922-8973',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Proveedor del contexto
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Cargar idioma desde localStorage al inicializar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Guardar idioma en localStorage cuando cambie
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Función de traducción
  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return translation || key; // Devolver la clave si no se encuentra la traducción
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
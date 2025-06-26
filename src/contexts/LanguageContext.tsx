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
    'nav.policies': 'Políticas y Cancelaciones',
    
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
    'services.holistic.bars.desc': 'Access Bars es un proceso manual que consiste en presionar suavemente con los dedos 32 puntos concretos de la cabeza, con el fin de liberar las cargas eléctricas acumuladas por todos los pensamientos, memorias y emociones negativas que nos suelen llevar a enfermar.',
    'services.holistic.reflexology.desc': 'La reflexología es una técnica terapéutica basada en la aplicación de presión en puntos específicos de los pies, manos y orejas que corresponden a diferentes órganos y sistemas del cuerpo. Esta práctica ayuda a estimular la circulación, reducir el estrés y promover la relajación profunda.',
    'services.holistic.reiki.desc': 'Técnica de sanación energética que promueve la relajación, reduce el estrés y apoya las capacidades naturales de sanación del cuerpo.',
    'services.holistic.meditation.desc': 'Te ayuda a lograr un estado de profunda relajación y claridad mental a través de técnicas guiadas de respiración y mindfulness.',
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
    
    // Mercy Section
    'mercy.title': 'MARÍA MERCEDES LIZALDE',
    'mercy.credentials': 'LMT–Instructor-Provider of Continuing Education',
    'mercy.story.p1': 'Mi mayor deseo es que podamos vivir sin dolor. Soy la segunda de 5 hermanos, nací con subluxación de cadera, era un bebé muy grande y el espacio en el vientre de mi Madre era pequeño. En mi infancia, esto causó consecuencias en mis piernas, mis rodillas se vieron afectadas y desarrollé genu valgum, una condición caracterizada por una deformación donde las rodillas se juntan, causando que los tobillos se desvíen hacia afuera, y pérdida del arco plantar, lo que me impedía correr ya que causaba caídas frecuentes.',
    'mercy.story.p2': 'Recibí atención médica en mi infancia gracias a mi Madre, estuve en tratamiento, usé dispositivos ortopédicos por la noche, plantillas y zapatos ortopédicos durante el día. Recuerdo que los dispositivos me causaban dolor, lloraba en silencio, este fue un período largo para mí, intentaba aflojarlos para que no me presionaran y no podía, y así caía exhausta hasta altas horas de la noche.',
    'mercy.story.p3': 'Recuerdo, mi sueño se volvió ligero y podía escuchar a una de mis hermanas llorando por la noche por dolor en las piernas debido al crecimiento, me levantaba y le daba un masaje hasta que se quedaba dormida.',
    'mercy.story.p4': 'Le daba masajes a mi Madre en la parte baja de la espalda desde que tenía 6 años, decía: Mamá, déjame masajear los nudos que tienes en la espalda, me encantaba hacerlo, dejaba mis juegos de infancia para ayudarla con eso, podía pasar todo el tiempo tocando y sintiendo sus nudos, que hoy sé que eran contracturas. A los 7 años, apliqué mi primera terapia de ventosas, también a mi Madre.',
    'mercy.story.p5': 'De adulta, tuve otras consecuencias, tuve dos cirugías, una en cada pie, estuve en silla de ruedas durante casi 2 meses.',
    'mercy.story.p6': 'Estas experiencias generaron en mí una empatía por el dolor de los demás, por aquellos que enfrentan dificultades físicas. Esto es lo que me motiva a ofrecer nuestros servicios, con la firme intención de ayudarlos a mejorar su movimiento, y por lo tanto, su calidad de vida.',
    'mercy.story.p7': 'Soy una fiel creyente en Dios, Él tiene planes para cada uno de nosotros. Hoy reafirmo mi misión terrenal, guiarte para que tu cuerpo esté en equilibrio, libre de dolor.',
    'mercy.story.p8': '¡Por más vidas saludables, en movimiento y libres de dolor!',
    
    // About Page
    'about.hero.badge': 'Conócenos',
    'about.hero.title': 'Sobre Nosotros',
    'about.hero.subtitle': 'Conoce nuestra historia, misión y los valores que guían nuestro trabajo diario para ofrecerte la mejor experiencia terapéutica.',
    
    // Story Section
    'about.story.title': 'Nuestra Historia',
    'about.story.p1': 'Body Therapy LLC nació del sueño y la pasión de María Mercedes Lizalde, cariñosamente conocida como Mercy, una terapeuta que ha dedicado su vida a ayudar a otros a través de la terapia manual.',
    'about.story.p2': 'Con años de experiencia y formación especializada, Mercy fundó Body Therapy LLC con la visión de crear un espacio donde las personas puedan encontrar alivio a su dolor y mejorar su calidad de vida a través de técnicas terapéuticas personalizadas.',
    'about.story.p3': 'Hoy, Body Therapy LLC se ha convertido en una referencia en terapia manual, combinando técnicas tradicionales con enfoques innovadores para ofrecer el mejor servicio a nuestros clientes.',
    
    // Mission & Vision
    'about.mission.title': 'Misión',
    'about.mission.desc': 'Nuestra misión es proporcionar atención de terapia manual de alta calidad, personalizada y basada en evidencia, con el objetivo de aliviar el dolor, mejorar la movilidad y promover el bienestar integral de nuestros pacientes.',
    'about.vision.title': 'Visión',
    'about.vision.desc': 'Ser la referencia líder en terapia manual, confiando en la naturaleza para mejorar tus movimientos, vivir libre de dolor y con una mejor calidad de vida.',
    
    // Values
    'about.values.title': 'Nuestros Valores',
    'about.values.subtitle': 'Los principios que guían nuestras acciones y definen nuestra forma de trabajar',
    'about.values.service.title': 'Servicio',
    'about.values.service.desc': 'Nos dedicamos a brindar una atención de calidad, siempre poniendo primero las necesidades y el bienestar de nuestros pacientes. Nuestro objetivo es proporcionar una experiencia positiva y efectiva en cada sesión.',
    'about.values.respect.title': 'Respeto',
    'about.values.respect.desc': 'Valoramos y consideramos la individualidad de cada persona, tratando a todos con cortesía, dignidad y comprensión. Reconocemos la importancia de escuchar y aceptar diferentes perspectivas y condiciones.',
    'about.values.empathy.title': 'Empatía',
    'about.values.empathy.desc': 'Nos esforzamos por entender y compartir los sentimientos y experiencias de nuestros pacientes, creando un ambiente de confianza y apoyo para facilitar su proceso de recuperación.',
    'about.values.integrity.title': 'Integridad',
    'about.values.integrity.desc': 'Actuamos con honestidad, transparencia y ética en todas nuestras acciones, asegurando que nuestras prácticas sean responsables y confiables.',
    'about.values.commitment.title': 'Compromiso',
    'about.values.commitment.desc': 'Nos dedicamos a dar lo mejor de nosotros, manteniendo una actitud comprometida con la salud y el bienestar de nuestros pacientes, y siempre buscando mejorar nuestros servicios.',
    'about.values.responsibility.title': 'Responsabilidad',
    'about.values.responsibility.desc': 'Asumimos la responsabilidad de nuestras acciones y decisiones, asegurando un tratamiento profesional y seguro en cada intervención.',
    
    // CTA Section
    'about.cta.title': '¿Listo para mejorar tu bienestar?',
    'about.cta.subtitle': 'Agenda una consulta hoy y comienza tu camino hacia una vida sin dolor y con mayor vitalidad.',
    'about.cta.button': 'Contáctanos Ahora',
    
    // Testimonials
    'testimonials.badge': 'Testimonios',
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'Experiencias reales de personas que han transformado su bienestar con nuestras terapias',
    'testimonials.client.role': 'Cliente',
    'testimonials.previous': 'Testimonio anterior',
    'testimonials.next': 'Testimonio siguiente',
    
    // Footer
    'footer.services': 'Services',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
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
    'contact.subtitle': 'We are here to help you. Contact us for inquiries, appointments, or any information you need.',
    'contact.info': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.schedule': 'Schedule',
    'contact.address': 'Body Therapy LLC\nKaty, TX',
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
    'blog.subtitle': 'Articles, tips, and knowledge about manual therapy, therapeutic massage, and integral wellbeing.',
    'blog.read.more': 'Read more',
    'blog.read.article': 'Read Article',
    'blog.related': 'Related Articles',
    'blog.no.posts': 'No articles available',
    'blog.no.posts.desc': 'We will have new content for you soon.',
    
    // Services Page
    'services.page.title': 'Nuestros Servicios',
    'services.page.subtitle': 'Descubre nuestra gama de masajes terapéuticos y relajantes diseñados para mejorar tu bienestar',
    'services.reserve': 'Reserve',
    'services.duration': 'Duration',
    'services.price': 'Price',
    
    // Shop
    'shop.title': 'Our Shop',
    'shop.subtitle': 'Discover our selection of high-quality therapeutic products, made with natural ingredients to complement your treatments.',
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

    // Services Page - Títulos principales
    'services.specialized.title': 'Masaje Terapéutico Especializado PAIN',
    'services.specialized.desc': 'Se utilizan en el tratamiento de trastornos neuromusculares y musculoesqueléticos, facilitando:\nEliminación de toxinas\nActiva la circulación sanguínea y linfática\nmejora el aporte de oxígeno a los tejidos,\namplía el arco de movilidad,\ndisminuye el dolor,\n\nNota: rehabilita las activdades de la vida diaria (dependiendo la patología).\n\nEl enfoque es en patologías donde el movimiento se ve afectado.',
    
    // Clinical Massages
    'services.clinical.section.title': 'Masajes Clínicos',
    'services.clinical.section.desc': 'Técnicas especializadas para condiciones médicas específicas',
    'services.clinical.trigger.title': 'Masaje Descontracturante',
    'services.clinical.trigger.desc': 'Se centra en aplicar presión controlada sobre los puntos de tensión muscular, donde se concentran las contracturas. Se utiliza para tratar dolores musculares, tensiones crónicas o lesiones deportivas. Se realiza con presión manual para reducir el estado de tensión y contracción permanente del músculo.',
    'services.clinical.deep.title': 'Masaje Deep Tissue',
    'services.clinical.deep.desc': 'Se enfoca principalmente en las capas más profundas de los músculos, la fascia y ligamentos, utilizando la presión más firme para alcanzar estas áreas clave y liberarlas. Trata dolores musculares crónicos, como contracturas, rigidez o dolores ocasionados por el estrés. Se realiza con movimientos intensos de presión. Por lo que este masaje en particular a menudo se recomienda para personas que se sienten cómodas con un toque más intenso.',
    'services.clinical.lymphatic.title': 'Drenaje Linfático',
    'services.clinical.lymphatic.desc': 'Se aplica sobre el sistema linfático para favorecer la circulación y la eliminación de líquidos. Mejora la circulación sanguínea y linfática. Produce un efecto calmante y relajante, restaura el flujo linfático, produciendo una reducción de volumen en caso de edema y en algunas inflamaciones.',
    'services.clinical.myofascial.title': 'Masaje Miofascial',
    'services.clinical.myofascial.desc': 'Recuperar y activa la musculatura, mediante la realización de presiones y leve estiramiento cutáneo sobre zonas concretas del cuerpo.  Provoca una relajación la cual reduce la fatiga muscular, previene posibles lesiones, mejora la flexibilidad y el rango articular. Ayuda en la recuperación después de un ejercicio intenso. Mejora la circulación, reduce los nudos que  se producen del sobre esfuerzo eliminando los puntos gatillo mitigando el dolor que producen. Liberación de toxinas acumuladas entre las capas de las fascias, favoreciendo una correcta higiene postural.',
    'services.clinical.hormonal.title': 'Hormonal Change Massage',
    'services.clinical.hormonal.desc': 'Designed for women in menopause, helps calm symptoms such as hot flashes, sleep problems, depression and anxiety, improving circulation and reducing stress.',
    'services.clinical.prenatal.title': 'Prenatal Massage',
    'services.clinical.prenatal.desc': 'Body therapy focused on the needs of pregnant women, relieves discomfort during pregnancy and helps release endorphins, compensating for the energy that the mother loses.',
    'services.clinical.geriatric.title': 'Geriatric Massage',
    'services.clinical.geriatric.desc': 'Improves blood circulation, joint flexibility and maintains hormonal balance. Relieves problems such as arthritis, rheumatism and muscle fatigue common in old age.',
    'services.clinical.oncology.title': 'Oncology Massage',
    'services.clinical.oncology.desc': 'Specialized treatment for oncology patients that improves their quality of life by relieving symptoms such as pain, fatigue, anxiety, nausea and depression through specific techniques.',
    'services.clinical.sports.title': 'Sports Massage',
    'services.clinical.sports.desc': 'Designed for athletes and active people, combines different techniques to prepare the body before exercise, accelerate recovery and prevent injuries.',
    'services.clinical.metameric.title': 'Metameric Massage',
    'services.clinical.metameric.desc': 'Works specifically on the neurological segments of the body to relieve referred pain. Ideal for problems such as sciatica, low back pain and joint pain.',
    
    // Relaxing Massages
    'services.relaxing.section.title': 'Masajes Relajantes',
    'services.relaxing.section.desc': 'Diseñados para reducir el estrés y promover el bienestar',
    'services.relaxing.swedish.title': 'Masaje Sueco',
    'services.relaxing.swedish.desc': 'El masaje sueco se basa en la combinación de cinco pasos fundamentales que producen los efectos de la eliminación de las toxinas acumuladas por la tensión en los músculos, la mejora de la circulación sanguínea y, por lo tanto, la oxigenación de los tejidos. Todo esto produce eficiencia muscular y relajación que contribuyen al bienestar psíquico y a la reducción del estrés.',
    'services.relaxing.aromatherapy.title': 'Masaje con Aromaterapia',
    'services.relaxing.aromatherapy.desc': 'Es un masaje relajante y que utiliza una secuencia de aceites esenciales altamente concentrados de grado terapéutico que se aplican sobre la piel y su función principal es antibacteriana y anti inflamatoria para ayudar a fortalecer las defensas en el cuerpo se aplica principalmente en los pies, espalda y columna vertebral con una presión media. Produce relajación profunda y ayuda a relajar músculos tensos y adoloridos, tendones y ligamentos. Ideal para calmar el estrés, realinear la columna, dolor de espalda, hombros contracturados, nervio ciático y fatiga o simplemente si necesitas salir de la rutina y consentirte.',
    'services.relaxing.hot_stones.title': 'Masaje con Piedras Calientes',
    'services.relaxing.hot_stones.desc': 'Terapia con piedras volcánicas calientes',
    'services.relaxing.stones.title': 'Masaje con Piedras Calientes',
    'services.relaxing.stones.desc': 'El masaje con piedras calientes, también llamado terapia geotérmica, estimula la circulación sanguínea y ayuda a eliminar toxinas, relaja los músculos, alivia la tension, relaja el cuerpo y mejora el estado de la piel. Combinado con aceites que agregan los beneficios de las piedras calientes con los de los masajes relajantes.',
    'services.relaxing.couples.title': 'Couples Massage',
    'services.relaxing.couples.desc': 'Share a relaxing experience with your partner in a private room. Perfect for special occasions or simply enjoying quality time together.',
    
    // Corporate Massage
    'services.corporate.title': 'Masaje Corporativo',
    'services.corporate.descc': 'Lleva el bienestar a tu lugar de trabajo con nuestros servicios de masaje corporativo',
    'services.corporate.shiatsu.title': 'Shiatsu / Masaje De Silla',
    'services.corporate.shiatsu.desc': 'El masaje Shiatsu implica aplicar presión con pulgares en puntos o áreas especificas del cuerpo para mantener el bienestar físico y mental, tratar enfermedades o calmar las molestias. Ayuda a liberar la tensión y reducir el estrés.',
    'services.corporate.section.title': 'Masaje Corporativo',
    'services.corporate.section.desc': 'Nuestros servicios de masaje corporativo están diseñados para mejorar el bienestar y la productividad en el lugar de trabajo.',
    'services.corporate.onsite.title': 'Masaje Corporativo In Situ',
    'services.corporate.onsite.desc': 'Llevamos nuestros servicios de masaje directamente a su lugar de trabajo. Ayuda a reducir el estrés, mejorar la concentración y aumentar la moral del equipo.',
    'services.corporate.team.title': 'Masaje para Formación de Equipos',
    'services.corporate.team.desc': 'Sesiones especiales diseñadas para actividades de formación de equipos. Promueve la relajación y la unión entre los miembros del equipo.',
    'services.corporate.executive.title': 'Masaje Ejecutivo',
    'services.corporate.executive.desc': 'Servicio premium de masaje para ejecutivos y gerentes. Ayuda a mantener el máximo rendimiento y gestionar el estrés laboral.',
    
    // Holistic Therapies (ESPAÑOL)
    'services.holistic.section.title': 'Terapias Holísticas',
    'services.holistic.section.desc': 'Enfoque integral para el bienestar total',
    'services.holistic.bars.title': 'Access Bars',
    'services.holistic.reflexology.title': 'Reflexología',
    'services.holistic.reiki.title': 'Terapia Reiki',
    'services.holistic.meditation.title': 'Meditación Guiada',
    
    // Massage Packages
    'services.packages.section.title': 'Paquetes Especiales',
    'services.packages.section.desc': 'Combinaciones de servicios para una experiencia completa',
    'services.packages.stress.title': 'Paquete Anti-Estrés',
    'services.packages.stress.desc': 'Un paquete completo diseñado para combatir el estrés y promover la relajación. Incluye masaje sueco, aromaterapia y meditación guiada.',
    'services.packages.pain.title': 'Paquete de Manejo del Dolor',
    'services.packages.pain.desc': 'Tratamiento dirigido para el dolor crónico y la tensión muscular. Combina masaje de tejido profundo, terapia de puntos gatillo y liberación miofascial.',
    'services.packages.wellness.title': 'Paquete de Bienestar',
    'services.packages.wellness.desc': 'Un enfoque holístico del bienestar. Incluye una combinación de masaje, sanación energética y prácticas de mindfulness.',
    'services.packages.couples.title': 'Paquete de Bienestar para Parejas',
    'services.packages.couples.desc': 'Perfecto para parejas que buscan relajarse y reconectarse. Incluye masajes lado a lado y una sesión privada de relajación.',
    'services.packages.bodyface.title': 'Cuerpo y Rostro',
    'services.packages.bodyfeet.title': 'Cuerpo y Pies',
    'services.packages.tensionless.title': 'Alivio de Tensión',
    'services.packages.couple.title': 'Masajes en Pareja',
    'services.packages.couple.body.title': 'COUPLE MASSAGE BODY',
    'services.packages.couple.facial.title': 'COUPLE MASSAGE BODYFACIAL',
    'services.packages.couple.stone.title': 'COUPLE MASSAGE BODYSTONE',
    'services.packages.more.title': 'Opciones Adicionales',
    'services.packages.neck.title': 'Cuello y Hombros',
    'services.packages.neck.desc': 'Tratamiento enfocado para la tensión de la parte superior del cuerpo',
    'services.packages.legs.title': 'Piernas y Pies',
    'services.packages.legs.desc': 'Alivio para piernas y pies cansados',
    
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
    'services.request.info': 'Solicitar Información',
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

    'services.features.tendinopathies': 'Tendinopatías y Esguinces',
    'services.features.fractures': 'Recuperación de movimiento por fracturas',
    'services.features.scoliosis': 'Escoliosis y Fascitis plantar',
    'services.features.capsulitis': 'Capsulitis articular',
    'services.features.facial': 'Parálisis facial',
    'services.features.back': 'Lumbalgia, Ciatalgia y Cervicalgia',
    'services.features.whiplash': 'Síndrome de latigazo',
    'services.features.tennis': 'Síndrome de tenista y golfista',
    'services.features.sports': 'Lesiones deportivas y neurológicas',
    'services.features.toxins': 'Eliminación de toxinas',
    'services.features.circulation': 'Activación de circulación sanguínea y linfática',
    'services.features.oxygen': 'Mejora del aporte de oxígeno a los tejidos',
    'services.features.mobility': 'Ampliación del arco de movilidad',
    'services.features.pain': 'Disminución del dolor',
    'services.features.region': '*Se trabaja por región',
    'services.features.packages.three': 'Paquete de 3',

    'services.packages.three': 'Paquete de 3'
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
    'nav.policies': 'Policies and Cancellations',
    
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
    'services.holistic.bars.desc': 'Access Bars is a manual technique that involves gently pressing 32 specific points on the head with the fingers, in order to release the electrical charges accumulated from thoughts, memories, and negative emotions that often lead to illness.',
    'services.holistic.reflexology.desc': 'Reflexology is a therapeutic technique based on applying pressure to specific points on the feet, hands, and ears that correspond to different organs and systems of the body. This practice helps stimulate circulation, reduce stress, and promote deep relaxation.',
    'services.holistic.reiki.desc': 'Energy healing technique that promotes relaxation, reduces stress, and supports the body\'s natural healing abilities.',
    'services.holistic.meditation.desc': 'Helps you achieve a state of deep relaxation and mental clarity through guided breathing and mindfulness techniques.',
    'services.packages': 'Massage Packages',
    'services.packages.desc': 'Complete experiences that combine different techniques and extras for an integral experience.',
    'services.more.info': 'More information',
    'services.view.all': 'View all services',
    
    // Products Section
    'products.title': 'Complement Your Treatment',
    'products.subtitle': 'High-quality products created in a professional laboratory with natural ingredients to complement your treatment.',
    'products.home.cabin': 'For home and massage cabin use',
    'products.visit.shop': 'Visit shop',
    'products.view.details': 'View details',
    
    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Learn about our history, mission, and the values that guide our daily work to provide you with the best therapeutic experience.',
    'about.history': 'Our History',
    'about.history.desc': 'Body Therapy LLC is a center specialized in manual therapy, founded with the mission of providing relief, wellbeing, and a better quality of life to our patients.',
    'about.founder.desc': 'Our director, María Mercedes Lizalde, combines years of experience with a personalized approach that addresses the specific needs of each patient.',
    'about.learn.more': 'Learn our story',
    'about.commitment': 'Committed to your wellbeing',
    'about.learn.about': 'Learn more about us',
    
    // Mercy Section
    'mercy.title': 'MARÍA MERCEDES LIZALDE',
    'mercy.credentials': 'LMT–Instructor-Provider of Continuing Education',
    'mercy.story.p1': 'My greatest wish is that we can live without pain. I am the second of 5 siblings, born with hip subluxation, I was a very large baby and the space in my Mother\'s womb was small. In my childhood, this caused consequences in my legs, my knees were affected and I developed genu valgum, a condition characterized by a deformation where the knees come together, causing the ankles to deviate outward, and loss of the plantar arch, which prevented me from running as it caused frequent falls.',
    'mercy.story.p2': 'I received medical attention in my childhood thanks to my Mother, I was in treatment, used orthopedic devices at night, insoles and orthopedic shoes during the day. I remember that the devices caused me pain, I cried silently, this was a long period for me, I tried to loosen them so they wouldn\'t press on me and I couldn\'t, and so I fell exhausted until late at night.',
    'mercy.story.p3': 'I remember, my sleep became light and I could hear one of my sisters crying at night from leg pain due to growth, I would get up and give her a massage until she fell asleep.',
    'mercy.story.p4': 'I gave my Mother a massage on her lower back since I was 6 years old, I would say: Mom, let me massage the knots you have in your back, I loved doing it, I would leave my childhood games to help her with it, I could spend all the time touching and feeling her knots, which today I know were contractures. At age 7, I applied my first cupping therapy, also to my Mother.',
    'mercy.story.p5': 'As an adult, I had other consequences, I had two surgeries, one on each foot, I was in a wheelchair for almost 2 months.',
    'mercy.story.p6': 'These experiences generated in me an empathy for others\' pain, for those facing physical difficulties. This is what motivates me to offer our services, with the firm intention of helping them improve their movement, and therefore their quality of life.',
    'mercy.story.p7': 'I am a faithful believer in God, He has plans for each of us. Today I reaffirm my earthly mission, to guide you so that your body is in balance, free of pain!',
    'mercy.story.p8': 'For more healthy lives, in movement, and free of pain!',
    
    // About Page
    'about.hero.badge': 'Get to Know Us',
    'about.hero.title': 'About Us',
    'about.hero.subtitle': 'Learn about our history, mission, and the values that guide our daily work to provide you with the best therapeutic experience.',
    
    // Story Section
    'about.story.title': 'Our History',
    'about.story.p1': 'Body Therapy LLC was born from the dream and passion of María Mercedes Lizalde, affectionately known as Mercy, a therapist who has dedicated her life to helping others through manual therapy.',
    'about.story.p2': 'With years of experience and specialized training, Mercy founded Body Therapy LLC with the vision of creating a space where people can find relief from their pain and improve their quality of life through personalized therapeutic techniques.',
    'about.story.p3': 'Today, Body Therapy LLC has become a reference in manual therapy, combining traditional techniques with innovative approaches to offer the best service to our clients.',
    
    // Mission & Vision
    'about.mission.title': 'Mission',
    'about.mission.desc': 'Our mission is to provide high-quality, personalized, and evidence-based manual therapy care, with the goal of relieving pain, improving mobility, and promoting the integral wellbeing of our patients.',
    'about.vision.title': 'Vision',
    'about.vision.desc': 'To be the leading reference in manual therapy, relying on nature to improve your movements, live free of pain, and with a better quality of life.',
    
    // Values
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide our actions and define our way of working',
    'about.values.service.title': 'Service',
    'about.values.service.desc': 'We are dedicated to providing quality care, always putting the needs and wellbeing of our patients first. Our goal is to provide a positive and effective experience in each session.',
    'about.values.respect.title': 'Respect',
    'about.values.respect.desc': 'We value and consider each person\'s individuality, treating everyone with courtesy, dignity, and understanding. We recognize the importance of listening to and accepting different perspectives and conditions.',
    'about.values.empathy.title': 'Empathy',
    'about.values.empathy.desc': 'We strive to understand and share the feelings and experiences of our patients, creating an environment of trust and support to facilitate their recovery process.',
    'about.values.integrity.title': 'Integrity',
    'about.values.integrity.desc': 'We act with honesty, transparency, and ethics in all our actions, ensuring that our practices are responsible and reliable.',
    'about.values.commitment.title': 'Commitment',
    'about.values.commitment.desc': 'We are dedicated to giving our best, maintaining a committed attitude to the health and wellbeing of our patients, and always seeking to improve our services.',
    'about.values.responsibility.title': 'Responsibility',
    'about.values.responsibility.desc': 'We take responsibility for our actions and decisions, ensuring professional and safe treatment in each intervention.',
    
    // CTA Section
    'about.cta.title': 'Ready to improve your wellbeing?',
    'about.cta.subtitle': 'Schedule a consultation today and begin your journey towards a pain-free life with greater vitality.',
    'about.cta.button': 'Contact Us Now',
    
    // Testimonials
    'testimonials.badge': 'Testimonials',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real experiences from people who have transformed their wellbeing with our therapies',
    'testimonials.client.role': 'Client',
    'testimonials.previous': 'Previous testimonial',
    'testimonials.next': 'Next testimonial',
    
    // Footer
    'footer.services': 'Services',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
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
    'contact.subtitle': 'We are here to help you. Contact us for inquiries, appointments, or any information you need.',
    'contact.info': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.schedule': 'Schedule',
    'contact.address': 'Body Therapy LLC\nKaty, TX',
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
    'blog.subtitle': 'Articles, tips, and knowledge about manual therapy, therapeutic massage, and integral wellbeing.',
    'blog.read.more': 'Read more',
    'blog.read.article': 'Read Article',
    'blog.related': 'Related Articles',
    'blog.no.posts': 'No articles available',
    'blog.no.posts.desc': 'We will have new content for you soon.',
    
    // Services Page
    'services.page.title': 'Our Services',
    'services.page.subtitle': 'Discover our range of therapeutic and relaxing massages designed to improve your wellbeing',
    'services.reserve': 'Reserve',
    'services.duration': 'Duration',
    'services.price': 'Price',
    
    // Shop
    'shop.title': 'Our Shop',
    'shop.subtitle': 'Discover our selection of high-quality therapeutic products, made with natural ingredients to complement your treatments.',
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

    // Services Page - Títulos principales
    'services.specialized.title': 'Specialized Therapeutic Massage',
    'services.specialized.desc': 'Used in the treatment of neuromuscular and musculoskeletal disorders, facilitating:\nToxin elimination\nActivates blood and lymphatic circulation\nimproves oxygen supply to tissues,\nexpands range of motion,\nreduces pain,\n\nNote: rehabilitates activities of daily living (depending on the pathology).',
    
    // Clinical Massages
    'services.clinical.section.title': 'Clinical Massages',
    'services.clinical.section.desc': 'Specialized techniques for specific medical conditions',
    'services.clinical.trigger.title': 'Deep Tissue Massage',
    'services.clinical.trigger.desc': 'This technique focuses on applying controlled pressure to areas of muscle tension, where knots or contractures accumulate. It is used to treat muscle pain, chronic tension, or sports injuries. The massage is performed with manual pressure to reduce the state of persistent tension and contraction in the muscle.',
    'services.clinical.deep.title': 'Deep Tissue Massage',
    'services.clinical.deep.desc': 'It primarily targets the deeper layers of muscles, fascia, and ligaments, using firmer pressure to reach and release these key areas. It treats chronic muscle pain such as contractures, stiffness, or pain caused by stress. The technique involves intense pressure movements. This type of massage is often recommended for individuals who are comfortable with a more intense touch.',
    'services.clinical.lymphatic.title': 'Lymphatic Drainage',
    'services.clinical.lymphatic.desc': 'It is applied to the lymphatic system to promote circulation and the elimination of fluids. It improves both blood and lymphatic circulation. It has a calming and relaxing effect, restores lymphatic flow, and helps reduce swelling in cases of edema and certain types of inflammation.',
    'services.clinical.myofascial.title': 'Myofascial Release',
    'services.clinical.myofascial.desc': 'It restores and activates the muscles through the application of pressure and gentle skin stretching on specific areas of the body. It induces relaxation, which reduces muscle fatigue, helps prevent potential injuries, and improves flexibility and joint range of motion. It supports recovery after intense exercise, enhances circulation, reduces knots caused by overexertion by releasing trigger points and easing their associated pain. It also facilitates the release of toxins accumulated between layers of fascia, promoting proper postural hygiene.',
    'services.clinical.hormonal.title': 'Hormonal Change Massage',
    'services.clinical.hormonal.desc': 'Designed for women in menopause, helps calm symptoms such as hot flashes, sleep problems, depression and anxiety, improving circulation and reducing stress.',
    'services.clinical.prenatal.title': 'Prenatal Massage',
    'services.clinical.prenatal.desc': 'Body therapy focused on the needs of pregnant women, relieves discomfort during pregnancy and helps release endorphins, compensating for the energy that the mother loses.',
    'services.clinical.geriatric.title': 'Geriatric Massage',
    'services.clinical.geriatric.desc': 'Improves blood circulation, joint flexibility and maintains hormonal balance. Relieves problems such as arthritis, rheumatism and muscle fatigue common in old age.',
    'services.clinical.oncology.title': 'Oncology Massage',
    'services.clinical.oncology.desc': 'Specialized treatment for oncology patients that improves their quality of life by relieving symptoms such as pain, fatigue, anxiety, nausea and depression through specific techniques.',
    'services.clinical.sports.title': 'Sports Massage',
    'services.clinical.sports.desc': 'Designed for athletes and active people, combines different techniques to prepare the body before exercise, accelerate recovery and prevent injuries.',
    'services.clinical.metameric.title': 'Metameric Massage',
    'services.clinical.metameric.desc': 'Works specifically on the neurological segments of the body to relieve referred pain. Ideal for problems such as sciatica, low back pain and joint pain.',
    
    // Relaxing Massages
    'services.relaxing.section.title': 'Relaxing Massages',
    'services.relaxing.section.desc': 'Designed to reduce stress and promote wellbeing',
    'services.relaxing.swedish.title': 'Swedish Massage',
    'services.relaxing.swedish.desc': 'Swedish massage is based on the combination of five fundamental steps that produce the effects of eliminating toxins accumulated due to muscle tension, improving blood circulation, and therefore, increasing oxygenation of the tissues. All of this results in muscular efficiency and relaxation, which contribute to psychological well-being and stress reduction.',
    'services.relaxing.aromatherapy.title': 'Aromatherapy Massage',
    'services.relaxing.aromatherapy.desc': 'It is a relaxing massage that uses a sequence of highly concentrated, therapeutic-grade essential oils applied to the skin. Its primary function is antibacterial and anti-inflammatory, helping to strengthen the bodys defenses. It is mainly applied to the feet, back, and spine with medium pressure. It produces deep relaxation and helps soothe tense and sore muscles, tendons, and ligaments. Ideal for relieving stress, realigning the spine, back pain, tight shoulders, sciatic nerve discomfort, fatigue, or simply if you need to break the routine and treat yourself.',
    'services.relaxing.hot_stones.title': 'Hot Stone Massage',
    'services.relaxing.hot_stones.desc': 'Therapy with hot volcanic stones',
    'services.relaxing.stones.title': 'Masaje con Piedras Calientes',
    'services.relaxing.stones.desc': 'Hot stone massage, also known as geothermal therapy, stimulates blood circulation and helps eliminate toxins, relaxes muscles, relieves tension, relaxes the body, and improves skin condition. Combined with oils, it enhances the benefits of hot stones with those of relaxing massages.',
    'services.relaxing.couples.title': 'Couples Massage',
    'services.relaxing.couples.desc': 'Share a relaxing experience with your partner in a private room. Perfect for special occasions or simply enjoying quality time together.',
    
    // Corporate Massage
    'services.corporate.title': 'Corporate Massage',
    'services.corporate.descc': 'Bring wellness to your workplace with our corporate massage services',
    'services.corporate.shiatsu.title': 'Shiatsu / Chair Massage',
    'services.corporate.shiatsu.desc': 'Shiatsu massage involves applying pressure with the thumbs on specific points or areas of the body to maintain physical and mental well-being, treat ailments, or relieve discomfort. It helps release tension and reduce stress.',
    'services.corporate.section.title': 'Corporate Massage',
    'services.corporate.section.desc': 'Our corporate massage services are designed to improve employee wellbeing and productivity in the workplace.',
    'services.corporate.onsite.title': 'On-site Corporate Massage',
    'services.corporate.onsite.desc': 'We bring our massage services directly to your workplace. Helps reduce stress, improve focus and boost team morale.',
    'services.corporate.team.title': 'Team Building Massage',
    'services.corporate.team.desc': 'Special sessions designed for team building activities. Promotes relaxation and bonding among team members.',
    'services.corporate.executive.title': 'Executive Massage',
    'services.corporate.executive.desc': 'Premium massage service for executives and managers. Helps maintain peak performance and manage work-related stress.',
    
    // Holistic Therapies (ENGLISH)
    'services.holistic.section.title': 'Holistic Therapies',
    'services.holistic.section.desc': 'Integral approach for total wellbeing',
    'services.holistic.bars.title': 'Access Bars',
    'services.holistic.bars.desc2': 'Access Bars is a manual technique that involves gently pressing 32 specific points on the head with the fingers, in order to release the electrical charges accumulated from thoughts, memories, and negative emotions that often lead to illness.',
    'services.holistic.reflexology.title': 'Reflexology',
    'services.holistic.reflexology.desc2': 'Reflexology is a therapeutic technique based on applying pressure to specific points on the feet, hands, and ears that correspond to different organs and systems of the body. This practice helps stimulate circulation, reduce stress, and promote deep relaxation.',
    'services.holistic.reiki.title': 'Reiki Therapy',
    'services.holistic.reiki.desc2': 'Energy healing technique that promotes relaxation, reduces stress, and supports the body\'s natural healing abilities.',
    'services.holistic.meditation.title': 'Guided Meditation',
    'services.holistic.meditation.desc2': 'Helps you achieve a state of deep relaxation and mental clarity through guided breathing and mindfulness techniques.',
    
    // Massage Packages
    'services.packages.section.title': 'Special Packages',
    'services.packages.section.desc': 'Service combinations for a complete experience',
    'services.packages.stress.title': 'Stress Relief Package',
    'services.packages.stress.desc': 'A comprehensive package designed to combat stress and promote relaxation. Includes Swedish massage, aromatherapy, and guided meditation.',
    'services.packages.pain.title': 'Pain Management Package',
    'services.packages.pain.desc': 'Targeted treatment for chronic pain and muscle tension. Combines deep tissue massage, trigger point therapy, and myofascial release.',
    'services.packages.wellness.title': 'Wellness Package',
    'services.packages.wellness.desc': 'A holistic approach to wellbeing. Includes a combination of massage, energy healing, and mindfulness practices.',
    'services.packages.couples.title': 'Couples Wellness Package',
    'services.packages.couples.desc': 'Perfect for couples looking to relax and reconnect. Includes side-by-side massages and a private relaxation session.',
    'services.packages.bodyface.title': 'Body and Face',
    'services.packages.bodyfeet.title': 'Body and Feet',
    'services.packages.tensionless.title': 'Tension Free',
    'services.packages.couple.title': 'Couple Packages',
    'services.packages.couple.body.title': 'COUPLE MASSAGE BODY',
    'services.packages.couple.facial.title': 'COUPLE MASSAGE BODYFACIAL',
    'services.packages.couple.stone.title': 'COUPLE MASSAGE BODYSTONE',
    'services.packages.more.title': 'Additional Options',
    'services.packages.neck.title': 'Neck Massage',
    'services.packages.neck.desc': 'Specific relief for neck and shoulder tension',
    'services.packages.legs.title': 'Leg Massage',
    'services.packages.legs.desc': 'Specialized treatment for tired legs and circulatory problems',
    
    // Package descriptions
    'services.package.swedish': 'Swedish Massage',
    'services.package.stones': 'Hot Stone Massage',
    'services.package.facial': 'Facial Massage',
    'services.package.towels': 'Hot Towels',
    'services.package.boots': 'Paraffin Boots',
    'services.package.exfoliant': 'Body Exfoliant',
    'services.package.aromatherapy': 'Aromatherapy',
    'services.package.trigger': 'Trigger Point Massage',
    'services.package.tools': 'Massage Tools',
    'services.package.oil': 'Essential Oil',
    'services.package.snack': 'Organic snack',
    'services.package.drink': 'Natural drink',
    'services.package.stone.aromatherapy': 'Aromatherapy',
    
    // Common terms
    'services.min': 'min',
    'services.promotion': 'Promotion',
    'services.book': 'Book',
    'services.request.info': 'Request Information',
    'services.package.sessions': 'sessions',
    'services.cta.title': 'Ready to Experience Relief?',
    'services.cta.subtitle': 'Book your appointment today and start your journey to a pain-free life',
    'services.cta.button': 'Book Appointment',

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

    'services.features.tendinopathies': 'Tendinopatías y Esguinces',
    'services.features.fractures': 'Movement Recovery from Fractures',
    'services.features.scoliosis': 'Scoliosis and Plantar Fasciitis',
    'services.features.capsulitis': 'Joint Capsulitis',
    'services.features.facial': 'Facial Paralysis',
    'services.features.back': 'Low Back Pain, Sciatica and Neck Pain',
    'services.features.whiplash': 'Whiplash Syndrome',
    'services.features.tennis': 'Tennis and Golfer\'s Elbow',
    'services.features.sports': 'Sports and Neurological Injuries',
    'services.features.toxins': 'Toxin Elimination',
    'services.features.circulation': 'Blood and Lymphatic Circulation Activation',
    'services.features.oxygen': 'Improved Oxygen Supply to Tissues',
    'services.features.mobility': 'Increased Range of Motion',
    'services.features.pain': 'Pain Reduction',
    'services.features.region': '*Worked by region',
    'services.features.packages.three': 'Paquete de 3',

    'services.packages.three': 'Paquete de 3'
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
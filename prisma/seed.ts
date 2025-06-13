// prisma/seed.ts - Actualizado para PostgreSQL
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed de la base de datos PostgreSQL...')

  // Limpiar datos existentes (orden importante por las relaciones)
  await prisma.banner.deleteMany()
  await prisma.product.deleteMany()
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()

  // Crear usuario administrador
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const admin = await prisma.user.create({
    data: {
      email: 'mercedes@bodytherapyllc.com',
      password: hashedPassword,
      name: 'María Mercedes Lizalde',
      role: 'admin',
    },
  })

  console.log('✅ Usuario admin creado:', admin.email)

  // Crear productos iniciales
  const products = await prisma.product.createMany({
    data: [
      {
        name: 'Divine Rest Spray',
        slug: 'divine-rest-spray',
        description: 'Una auténtica fusión de aceites orgánicos puros combinados para un descanso divino.',
        price: 39.00,
        image: '/images/products/divine.jpg',
        category: 'Aceites',
        featured: true,
      },
      {
        name: 'Crema para Inflammation, Masaje, Decrease & Oxidation',
        slug: 'crema-inflammation-masaje',
        description: 'Crema corporal enriquecida con cacao, almendra dulce y vitamina C, combinada con aceites de pomelo y pino, creando una crema de masaje antiinflamatoria y antioxidante que drena, nutre, suaviza y aporta luminosidad a la piel.',
        price: 39.99,
        image: '/images/products/oxidation.jpg',
        category: 'Cremas',
        featured: true,
      },
      {
        name: 'Aceite para contracture masaje less',
        slug: 'aceite-contracture-masaje',
        description: 'Aceite enriquecido con aceites vegetales de maíz, soja, sésamo y oliva combinados con aceites esenciales de menta, canela, romero y árnica, creando un aceite de masaje que ayuda a disminuir contracturas, nutre, hidrata y suaviza la piel.',
        price: 39.99,
        image: '/images/products/contracture-less.jpg',
        category: 'Aceites',
        featured: true,
      },
    ],
  })

  console.log('✅ Productos creados:', products.count)

  // Crear banners iniciales
  const banners = await prisma.banner.createMany({
    data: [
      {
        title: 'Terapia de Masaje',
        subtitle: 'Especializada en aliviar dolores crónicos',
        image: '/images/banners/banner-1.png',
        altText: 'Terapia de Masaje',
        order: 1,
        active: true,
      },
      {
        title: 'Masaje Terapéutico Especializado',
        subtitle: 'Técnicas avanzadas para tu bienestar',
        image: '/images/banners/banner-2.png',
        altText: 'Masaje Terapéutico Especializado',
        order: 2,
        active: true,
      },
      {
        title: 'Promoción Especial',
        subtitle: 'Descubre nuestros paquetes',
        image: '/images/banners/banner-3.png',
        altText: 'Promoción 1',
        order: 3,
        active: true,
      },
      {
        title: 'Bienestar Integral',
        subtitle: 'Servicios profesionales de calidad',
        image: '/images/banners/banner-4.jpg',
        altText: 'Promoción 2',
        order: 4,
        active: true,
      },
      {
        title: 'Relajación Profunda',
        subtitle: 'Experiencias transformadoras',
        image: '/images/banners/banner-5.jpg',
        altText: 'Promoción 3',
        order: 5,
        active: true,
      },
      {
        title: 'Terapias Holísticas',
        subtitle: 'Equilibrio para cuerpo y mente',
        image: '/images/banners/banner-6.jpg',
        altText: 'Promoción 4',
        order: 6,
        active: true,
      },
      {
        title: 'Productos Naturales',
        subtitle: 'Complementa tu tratamiento',
        image: '/images/banners/banner-7.jpg',
        altText: 'Promoción 5',
        order: 7,
        active: true,
      },
    ],
  })

  console.log('✅ Banners creados:', banners.count)

  // Crear post de ejemplo
  const samplePost = await prisma.post.create({
    data: {
      title: 'Masajes y Emociones: Una Conexión Profunda',
      slug: 'masajes-y-emociones-conexion-profunda',
      excerpt: 'Descubre la profunda conexión entre los masajes y nuestras emociones, y cómo el masaje terapéutico puede ayudar a liberar emociones reprimidas.',
      content: `¿Has experimentado alguna vez una liberación emocional durante un masaje?

Los masajes no solo alivian tensiones físicas; también son puentes hacia nuestras emociones más escondidas. Muchas veces, el estrés, la ansiedad o incluso la tristeza se acumulan en nuestro cuerpo como nudos invisibles, esperando ser liberados.

Cuando recibimos un masaje terapéutico, los músculos se relajan, pero también lo hace nuestra mente. El contacto humano consciente activa la producción de endorfinas (hormonas del bienestar) y reduce el cortisol (la hormona del estrés).

Es común que, durante o después de una sesión, surjan emociones reprimidas: llanto, alegría, nostalgia o una profunda calma.

Hay pacientes a quienes se les despiertan emociones que se les complica equilibrar, quizá tienen largo tiempo con ellas guardadas y hacemos ese "click" a través del contacto físico que generamos con el masaje.

¿Por qué sucede esto?

**Memoria corporal:** El cuerpo guarda recuerdos emocionales, especialmente en zonas como el cuello, espalda o piernas. Un masaje puede "desbloquear" esas áreas.

**Liberación somática:** Al soltar tensiones físicas, el sistema nervioso se reequilibra, permitiendo que las emociones fluyan.

**Conexión mente-cuerpo:** El tacto terapéutico fomenta la conciencia emocional, ayudándonos a procesar lo que no habíamos podido verbalizar.

Un masaje no es solo un lujo, es un acto de autocuidado emocional. Permitirnos este espacio es darle voz a lo que el cuerpo ya sabía, pero la mente no había escuchado.

Como Terapeuta Manual, no tenemos la autoridad para invadir ese espacio íntimo y sensible que son nuestras emociones.

En Body Therapy te damos la opción de canalizarte con profesionales que te brindarán apoyo emocional.`,
      image: '/images/blog/masajes-emociones.jpg',
      category: 'Bienestar Emocional',
      published: true,
      authorId: admin.id,
    },
  })

  console.log('✅ Post de ejemplo creado:', samplePost.title)

  // Crear configuraciones del sitio
  await prisma.siteConfig.createMany({
    data: [
      {
        key: 'site_title',
        value: 'Body Therapy LLC',
      },
      {
        key: 'site_description',
        value: 'Servicios profesionales de terapia manual, masajes terapéuticos y holísticos para mejorar tu bienestar y calidad de vida.',
      },
      {
        key: 'contact_phone',
        value: '+1 (713) 922-8973',
      },
      {
        key: 'contact_email',
        value: 'mercedes@bodytherapyllc.com',
      },
      {
        key: 'business_hours',
        value: 'Lunes - Viernes: 9:00 AM - 6:00 PM, Sábado: 9:00 AM - 5:00 PM, Domingo: Cerrado',
      },
    ],
  })

  console.log('✅ Configuraciones del sitio creadas')
  console.log('🎉 Seed completado exitosamente con PostgreSQL!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error durante el seed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })

// scripts/migrate-to-cloudinary.ts - Script para migrar imágenes locales a Cloudinary
import { PrismaClient } from '@prisma/client';
import CloudinaryService, { CLOUDINARY_FOLDERS } from '../src/lib/cloudinary';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();

interface MigrationResult {
  success: boolean;
  originalUrl: string;
  newUrl?: string;
  error?: string;
  type: 'blog' | 'banner' | 'product';
  id: number;
  title: string;
}

class ImageMigrator {
  private results: MigrationResult[] = [];
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  }

  async migrateAllImages(): Promise<void> {
    console.log('🚀 Iniciando migración de imágenes a Cloudinary...');
    console.log('🌐 URL base:', this.baseUrl);

    try {
      // Verificar configuración de Cloudinary
      if (!this.isCloudinaryConfigured()) {
        console.error('❌ Cloudinary no está configurado correctamente');
        console.log('Por favor configura las siguientes variables de entorno:');
        console.log('- CLOUDINARY_CLOUD_NAME');
        console.log('- CLOUDINARY_API_KEY'); 
        console.log('- CLOUDINARY_API_SECRET');
        return;
      }

      console.log('✅ Configuración de Cloudinary verificada');

      // Migrar imágenes de blog
      await this.migrateBlogImages();
      
      // Migrar imágenes de banners
      await this.migrateBannerImages();
      
      // Migrar imágenes de productos
      await this.migrateProductImages();

      // Mostrar resumen
      this.showSummary();

    } catch (error) {
      console.error('❌ Error durante la migración:', error);
    } finally {
      await prisma.$disconnect();
    }
  }

  private isCloudinaryConfigured(): boolean {
    return !!(
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
    );
  }

  private async migrateBlogImages(): Promise<void> {
    console.log('\n📝 Migrando imágenes de blog...');
    
    const posts = await prisma.post.findMany({
      select: { id: true, title: true, image: true }
    });

    console.log(`Encontrados ${posts.length} posts para revisar`);

    for (const post of posts) {
      if (this.isLocalImage(post.image)) {
        console.log(`📄 Migrando imagen del post: "${post.title}"`);
        
        const result = await this.migrateImage(
          post.image,
          CLOUDINARY_FOLDERS.BLOG,
          'blog',
          post.id,
          post.title
        );

        if (result.success && result.newUrl) {
          // Actualizar la base de datos
          await prisma.post.update({
            where: { id: post.id },
            data: { image: result.newUrl }
          });
          console.log(`✅ Post actualizado: ${result.newUrl}`);
        }

        this.results.push(result);
        
        // Pausa para evitar límites de rate
        await this.sleep(1000);
      } else {
        console.log(`⏭️  Post "${post.title}" ya usa Cloudinary o URL externa`);
      }
    }
  }

  private async migrateBannerImages(): Promise<void> {
    console.log('\n🎯 Migrando imágenes de banners...');
    
    const banners = await prisma.banner.findMany({
      select: { id: true, title: true, image: true }
    });

    console.log(`Encontrados ${banners.length} banners para revisar`);

    for (const banner of banners) {
      if (this.isLocalImage(banner.image)) {
        console.log(`🎪 Migrando imagen del banner: "${banner.title}"`);
        
        const result = await this.migrateImage(
          banner.image,
          CLOUDINARY_FOLDERS.BANNERS,
          'banner',
          banner.id,
          banner.title
        );

        if (result.success && result.newUrl) {
          // Actualizar la base de datos
          await prisma.banner.update({
            where: { id: banner.id },
            data: { image: result.newUrl }
          });
          console.log(`✅ Banner actualizado: ${result.newUrl}`);
        }

        this.results.push(result);
        
        // Pausa para evitar límites de rate
        await this.sleep(1000);
      } else {
        console.log(`⏭️  Banner "${banner.title}" ya usa Cloudinary o URL externa`);
      }
    }
  }

  private async migrateProductImages(): Promise<void> {
    console.log('\n🛍️  Migrando imágenes de productos...');
    
    const products = await prisma.product.findMany({
      select: { id: true, name: true, image: true }
    });

    console.log(`Encontrados ${products.length} productos para revisar`);

    for (const product of products) {
      if (this.isLocalImage(product.image)) {
        console.log(`📦 Migrando imagen del producto: "${product.name}"`);
        
        const result = await this.migrateImage(
          product.image,
          CLOUDINARY_FOLDERS.PRODUCTS,
          'product',
          product.id,
          product.name
        );

        if (result.success && result.newUrl) {
          // Actualizar la base de datos
          await prisma.product.update({
            where: { id: product.id },
            data: { image: result.newUrl }
          });
          console.log(`✅ Producto actualizado: ${result.newUrl}`);
        }

        this.results.push(result);
        
        // Pausa para evitar límites de rate
        await this.sleep(1000);
      } else {
        console.log(`⏭️  Producto "${product.name}" ya usa Cloudinary o URL externa`);
      }
    }
  }

  private async migrateImage(
    imagePath: string,
    cloudinaryFolder: string,
    type: 'blog' | 'banner' | 'product',
    id: number,
    title: string
  ): Promise<MigrationResult> {
    try {
      // Construir URL completa del archivo local
      const fullUrl = imagePath.startsWith('http') ? imagePath : `${this.baseUrl}${imagePath}`;
      
      console.log(`🔗 URL completa: ${fullUrl}`);

      // Generar public_id basado en el tipo y nombre
      const fileName = path.basename(imagePath, path.extname(imagePath));
      const timestamp = Date.now();
      const public_id = `${type}-${id}-${fileName}-${timestamp}`;

      // Intentar subir a Cloudinary
      const result = await CloudinaryService.uploadFromUrl(fullUrl, {
        folder: cloudinaryFolder,
        public_id,
        tags: [type, 'migrated', process.env.NODE_ENV || 'production'],
        quality: 'auto',
        format: 'auto'
      });

      console.log(`📤 Imagen subida exitosamente: ${result.secure_url}`);
      console.log(`📊 Dimensiones: ${result.width}x${result.height}, Formato: ${result.format}`);

      return {
        success: true,
        originalUrl: imagePath,
        newUrl: result.secure_url,
        type,
        id,
        title
      };

    } catch (error) {
      console.error(`❌ Error migrando imagen "${imagePath}":`, error);
      
      return {
        success: false,
        originalUrl: imagePath,
        error: error instanceof Error ? error.message : 'Error desconocido',
        type,
        id,
        title
      };
    }
  }

  private isLocalImage(imageUrl: string): boolean {
    // Es una imagen local si:
    // 1. Empieza con /images/
    // 2. No es una URL de Cloudinary
    // 3. No es una URL externa completa
    return (
      imageUrl.startsWith('/images/') &&
      !imageUrl.includes('res.cloudinary.com') &&
      !imageUrl.startsWith('http')
    );
  }

  private showSummary(): void {
    console.log('\n📊 RESUMEN DE MIGRACIÓN');
    console.log('========================');
    
    const successful = this.results.filter(r => r.success);
    const failed = this.results.filter(r => !r.success);
    
    console.log(`✅ Migraciones exitosas: ${successful.length}`);
    console.log(`❌ Migraciones fallidas: ${failed.length}`);
    console.log(`📊 Total procesadas: ${this.results.length}`);

    if (successful.length > 0) {
      console.log('\n🎉 MIGRACIONES EXITOSAS:');
      successful.forEach(result => {
        console.log(`  ${result.type.toUpperCase()} #${result.id}: "${result.title}"`);
        console.log(`    ${result.originalUrl} → ${result.newUrl}`);
      });
    }

    if (failed.length > 0) {
      console.log('\n💥 MIGRACIONES FALLIDAS:');
      failed.forEach(result => {
        console.log(`  ${result.type.toUpperCase()} #${result.id}: "${result.title}"`);
        console.log(`    ${result.originalUrl} - Error: ${result.error}`);
      });
    }

    // Estadísticas por tipo
    console.log('\n📈 ESTADÍSTICAS POR TIPO:');
    const typeStats = this.results.reduce((acc, result) => {
      if (!acc[result.type]) {
        acc[result.type] = { success: 0, failed: 0 };
      }
      if (result.success) {
        acc[result.type].success++;
      } else {
        acc[result.type].failed++;
      }
      return acc;
    }, {} as Record<string, { success: number; failed: number }>);

    Object.entries(typeStats).forEach(([type, stats]) => {
      console.log(`  ${type}: ${stats.success} exitosas, ${stats.failed} fallidas`);
    });

    // Recomendaciones
    console.log('\n💡 RECOMENDACIONES:');
    if (failed.length > 0) {
      console.log('  - Revisa las imágenes que fallaron y súbelas manualmente');
      console.log('  - Verifica que las URLs locales sean accesibles');
      console.log('  - Comprueba los límites de tu plan de Cloudinary');
    }
    
    if (successful.length > 0) {
      console.log('  - Las imágenes se han optimizado automáticamente para web');
      console.log('  - Ahora se entregan via CDN global para mejor rendimiento');
      console.log('  - Puedes eliminar las imágenes locales del directorio /public/images/');
    }

    console.log('\n🏁 Migración completada!');
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Método para validar que las imágenes migradas funcionan
  async validateMigration(): Promise<void> {
    console.log('\n🔍 Validando imágenes migradas...');
    
    const posts = await prisma.post.findMany({
      select: { id: true, title: true, image: true }
    });

    const banners = await prisma.banner.findMany({
      select: { id: true, title: true, image: true }
    });

    const products = await prisma.product.findMany({
      select: { id: true, name: true, image: true }
    });

    let cloudinaryCount = 0;
    let localCount = 0;
    let externalCount = 0;

    const allItems = [
      ...posts.map(p => ({ ...p, name: p.title, type: 'post' })),
      ...banners.map(b => ({ ...b, name: b.title, type: 'banner' })),
      ...products.map(p => ({ ...p, name: p.name, type: 'product' }))
    ];

    allItems.forEach(item => {
      if (item.image.includes('res.cloudinary.com')) {
        cloudinaryCount++;
      } else if (item.image.startsWith('/images/')) {
        localCount++;
        console.log(`⚠️  ${item.type} "${item.name}" aún usa imagen local: ${item.image}`);
      } else {
        externalCount++;
      }
    });

    console.log(`📊 Cloudinary: ${cloudinaryCount}`);
    console.log(`📂 Locales: ${localCount}`);
    console.log(`🌐 Externas: ${externalCount}`);

    if (localCount === 0) {
      console.log('✅ Todas las imágenes han sido migradas a Cloudinary!');
    } else {
      console.log(`⚠️  Quedan ${localCount} imágenes locales por migrar`);
    }
  }
}

// Función principal
async function main() {
  const migrator = new ImageMigrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'migrate':
      await migrator.migrateAllImages();
      break;
    case 'validate':
      await migrator.validateMigration();
      break;
    default:
      console.log('📖 Uso:');
      console.log('  npm run migrate:images migrate  - Migrar todas las imágenes a Cloudinary');
      console.log('  npm run migrate:images validate - Validar el estado de la migración');
      console.log('');
      console.log('🔧 Asegúrate de tener configuradas las variables de entorno:');
      console.log('  - CLOUDINARY_CLOUD_NAME');
      console.log('  - CLOUDINARY_API_KEY');
      console.log('  - CLOUDINARY_API_SECRET');
      console.log('  - NEXT_PUBLIC_BASE_URL (opcional, default: http://localhost:3000)');
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main().catch(console.error);
}

export default ImageMigrator;

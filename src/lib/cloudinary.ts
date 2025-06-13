// src/lib/cloudinary.ts - Librería para gestión de imágenes con Cloudinary
import { v2 as cloudinary } from 'cloudinary';

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Tipos para las respuestas
export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  bytes: number;
  folder?: string;
}

export interface UploadOptions {
  folder?: string;
  public_id?: string;
  overwrite?: boolean;
  tags?: string[];
  transformation?: any;
  quality?: string | number;
  format?: string;
}

// Clase principal para manejo de Cloudinary
export class CloudinaryService {
  
  /**
   * Subir una imagen desde un buffer
   */
  static async uploadFromBuffer(
    buffer: Buffer, 
    options: UploadOptions = {}
  ): Promise<CloudinaryUploadResult> {
    try {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: options.folder || 'body-therapy',
            public_id: options.public_id,
            overwrite: options.overwrite || false,
            tags: options.tags || [],
            transformation: options.transformation,
            quality: options.quality || 'auto',
            format: options.format,
            resource_type: 'auto', // Detecta automáticamente el tipo
          },
          (error, result) => {
            if (error) {
              console.error('❌ Cloudinary upload error:', error);
              reject(error);
            } else {
              console.log('✅ Cloudinary upload success:', result?.secure_url);
              resolve(result as CloudinaryUploadResult);
            }
          }
        ).end(buffer);
      });
    } catch (error) {
      console.error('❌ Error in uploadFromBuffer:', error);
      throw new Error('Failed to upload image to Cloudinary');
    }
  }

  /**
   * Subir una imagen desde una URL
   */
  static async uploadFromUrl(
    url: string, 
    options: UploadOptions = {}
  ): Promise<CloudinaryUploadResult> {
    try {
      const result = await cloudinary.uploader.upload(url, {
        folder: options.folder || 'body-therapy',
        public_id: options.public_id,
        overwrite: options.overwrite || false,
        tags: options.tags || [],
        transformation: options.transformation,
        quality: options.quality || 'auto',
        format: options.format,
      });

      console.log('✅ Cloudinary upload from URL success:', result.secure_url);
      return result as CloudinaryUploadResult;
    } catch (error) {
      console.error('❌ Error uploading from URL:', error);
      throw new Error('Failed to upload image from URL to Cloudinary');
    }
  }

  /**
   * Eliminar una imagen por public_id
   */
  static async deleteImage(publicId: string): Promise<boolean> {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      console.log('🗑️ Cloudinary delete result:', result);
      return result.result === 'ok';
    } catch (error) {
      console.error('❌ Error deleting image:', error);
      return false;
    }
  }

  /**
   * Obtener información de una imagen
   */
  static async getImageInfo(publicId: string): Promise<any> {
    try {
      const result = await cloudinary.api.resource(publicId);
      return result;
    } catch (error) {
      console.error('❌ Error getting image info:', error);
      return null;
    }
  }

  /**
   * Listar imágenes de una carpeta
   */
  static async listImages(folder: string = 'body-therapy', maxResults: number = 100): Promise<any[]> {
    try {
      const result = await cloudinary.api.resources({
        type: 'upload',
        prefix: folder,
        max_results: maxResults,
        resource_type: 'image'
      });
      return result.resources;
    } catch (error) {
      console.error('❌ Error listing images:', error);
      return [];
    }
  }

  /**
   * Generar URL optimizada con transformaciones
   */
  static generateOptimizedUrl(
    publicId: string, 
    options: {
      width?: number;
      height?: number;
      quality?: string | number;
      format?: string;
      crop?: string;
      gravity?: string;
      fetchFormat?: string;
    } = {}
  ): string {
    try {
      return cloudinary.url(publicId, {
        fetch_format: options.fetchFormat || 'auto',
        quality: options.quality || 'auto',
        width: options.width,
        height: options.height,
        crop: options.crop || 'fill',
        gravity: options.gravity || 'auto',
        format: options.format,
        secure: true,
      });
    } catch (error) {
      console.error('❌ Error generating optimized URL:', error);
      return '';
    }
  }

  /**
   * Generar múltiples tamaños de una imagen (responsive)
   */
  static generateResponsiveUrls(
    publicId: string,
    sizes: Array<{ width: number; height?: number; name: string }>
  ): Record<string, string> {
    const urls: Record<string, string> = {};
    
    sizes.forEach(size => {
      urls[size.name] = this.generateOptimizedUrl(publicId, {
        width: size.width,
        height: size.height,
        quality: 'auto',
        fetchFormat: 'auto'
      });
    });

    return urls;
  }

  /**
   * Validar archivo antes de subir
   */
  static validateFile(file: File): { valid: boolean; error?: string } {
    // Validar tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return {
        valid: false,
        error: 'Tipo de archivo no permitido. Solo se permiten imágenes (JPEG, PNG, WebP, GIF)'
      };
    }

    // Validar tamaño (10MB máximo para plan gratuito)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return {
        valid: false,
        error: 'El archivo es demasiado grande. Máximo 10MB permitido'
      };
    }

    return { valid: true };
  }

  /**
   * Extraer public_id de una URL de Cloudinary
   */
  static extractPublicId(cloudinaryUrl: string): string | null {
    try {
      // Patrón para URLs de Cloudinary
      // https://res.cloudinary.com/cloud-name/image/upload/v1234567890/folder/public_id.jpg
      const regex = /\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-z]+)?$/i;
      const match = cloudinaryUrl.match(regex);
      return match ? match[1] : null;
    } catch (error) {
      console.error('❌ Error extracting public_id:', error);
      return null;
    }
  }

  /**
   * Verificar si una URL es de Cloudinary
   */
  static isCloudinaryUrl(url: string): boolean {
    return url.includes('res.cloudinary.com');
  }

  /**
   * Migrar imagen local a Cloudinary
   */
  static async migrateLocalImage(
    localPath: string,
    folder: string = 'body-therapy'
  ): Promise<string | null> {
    try {
      // Si ya es una URL de Cloudinary, no hacer nada
      if (this.isCloudinaryUrl(localPath)) {
        return localPath;
      }

      // Construir URL completa del archivo local
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const fullUrl = localPath.startsWith('http') ? localPath : `${baseUrl}${localPath}`;

      // Generar public_id basado en la ruta del archivo
      const fileName = localPath.split('/').pop()?.split('.')[0] || 'image';
      const timestamp = Date.now();
      const public_id = `${fileName}-${timestamp}`;

      const result = await this.uploadFromUrl(fullUrl, {
        folder,
        public_id,
        tags: ['migrated']
      });

      return result.secure_url;
    } catch (error) {
      console.error('❌ Error migrating local image:', error);
      return null;
    }
  }

  /**
   * Limpiar imágenes huérfanas (no utilizadas)
   */
  static async cleanupUnusedImages(
    usedPublicIds: string[],
    folder: string = 'body-therapy'
  ): Promise<string[]> {
    try {
      const allImages = await this.listImages(folder);
      const deletedImages: string[] = [];

      for (const image of allImages) {
        if (!usedPublicIds.includes(image.public_id)) {
          const deleted = await this.deleteImage(image.public_id);
          if (deleted) {
            deletedImages.push(image.public_id);
          }
        }
      }

      console.log(`🧹 Cleaned up ${deletedImages.length} unused images`);
      return deletedImages;
    } catch (error) {
      console.error('❌ Error cleaning up images:', error);
      return [];
    }
  }

  /**
   * Obtener estadísticas de uso
   */
  static async getUsageStats(): Promise<any> {
    try {
      const result = await cloudinary.api.usage();
      return {
        transformations: result.transformations,
        objects: result.objects,
        bandwidth: result.bandwidth,
        storage: result.storage,
        credits: result.credits,
        plan: result.plan
      };
    } catch (error) {
      console.error('❌ Error getting usage stats:', error);
      return null;
    }
  }
}

// Exportar instancia por defecto
export default CloudinaryService;

// Constantes útiles
export const CLOUDINARY_FOLDERS = {
  BLOG: 'body-therapy/blog',
  BANNERS: 'body-therapy/banners',
  PRODUCTS: 'body-therapy/products',
  SERVICES: 'body-therapy/services',
  GENERAL: 'body-therapy/general'
} as const;

export const IMAGE_SIZES = {
  THUMBNAIL: { width: 150, height: 150, name: 'thumb' },
  SMALL: { width: 300, height: 300, name: 'small' },
  MEDIUM: { width: 600, height: 400, name: 'medium' },
  LARGE: { width: 1200, height: 800, name: 'large' },
  HERO: { width: 1920, height: 1080, name: 'hero' }
} as const;

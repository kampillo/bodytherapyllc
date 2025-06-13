// src/app/api/upload/route.ts - API de upload con Cloudinary
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import CloudinaryService, { CLOUDINARY_FOLDERS } from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      console.log('❌ Upload: No autorizado');
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const data = await request.formData();
    const file: File | null = data.get('image') as unknown as File;
    const folder = (data.get('folder') as string) || 'blog';

    console.log('📁 Upload: Carpeta destino:', folder);
    console.log('📄 Upload: Archivo recibido:', file ? file.name : 'ninguno');

    if (!file) {
      console.log('❌ Upload: No se encontró archivo');
      return NextResponse.json(
        { error: 'No se encontró el archivo' },
        { status: 400 }
      );
    }

    // Validar archivo
    const validation = CloudinaryService.validateFile(file);
    if (!validation.valid) {
      console.log('❌ Upload: Archivo inválido:', validation.error);
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    console.log('✅ Upload: Archivo válido, iniciando subida a Cloudinary...');

    // Convertir archivo a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Determinar carpeta de Cloudinary
    let cloudinaryFolder: string;
    switch (folder.toLowerCase()) {
      case 'blog':
        cloudinaryFolder = CLOUDINARY_FOLDERS.BLOG;
        break;
      case 'banners':
        cloudinaryFolder = CLOUDINARY_FOLDERS.BANNERS;
        break;
      case 'products':
        cloudinaryFolder = CLOUDINARY_FOLDERS.PRODUCTS;
        break;
      case 'services':
        cloudinaryFolder = CLOUDINARY_FOLDERS.SERVICES;
        break;
      default:
        cloudinaryFolder = CLOUDINARY_FOLDERS.GENERAL;
    }

    // Generar public_id único
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, '-').toLowerCase();
    const nameWithoutExt = originalName.split('.')[0];
    const public_id = `${nameWithoutExt}-${timestamp}`;

    console.log('📝 Upload: Subiendo a Cloudinary con public_id:', public_id);

    // Subir a Cloudinary
    const result = await CloudinaryService.uploadFromBuffer(buffer, {
      folder: cloudinaryFolder,
      public_id,
      tags: [folder, 'body-therapy', process.env.NODE_ENV || 'development'],
      quality: 'auto',
      format: 'auto' // Optimización automática de formato
    });

    console.log('✅ Upload: Imagen subida exitosamente a Cloudinary');
    console.log('🔗 Upload: URL generada:', result.secure_url);
    console.log('📊 Upload: Tamaño:', result.bytes, 'bytes');
    console.log('📐 Upload: Dimensiones:', `${result.width}x${result.height}`);

    // Generar URLs optimizadas para diferentes tamaños
    const optimizedUrls = CloudinaryService.generateResponsiveUrls(result.public_id, [
      { width: 150, height: 150, name: 'thumbnail' },
      { width: 400, height: 300, name: 'small' },
      { width: 800, height: 600, name: 'medium' },
      { width: 1200, height: 900, name: 'large' }
    ]);

    return NextResponse.json({
      success: true,
      imageUrl: result.secure_url,
      publicId: result.public_id,
      fileName: file.name,
      folder: cloudinaryFolder,
      optimizedUrls,
      metadata: {
        width: result.width,
        height: result.height,
        format: result.format,
        bytes: result.bytes,
        createdAt: result.created_at
      },
      message: 'Imagen subida exitosamente a Cloudinary'
    });

  } catch (error) {
    console.error('❌ Upload: Error interno:', error);
    
    // Manejar errores específicos de Cloudinary
    if (error instanceof Error) {
      if (error.message.includes('Invalid image file')) {
        return NextResponse.json(
          { error: 'Archivo de imagen inválido' },
          { status: 400 }
        );
      }
      if (error.message.includes('File size too large')) {
        return NextResponse.json(
          { error: 'El archivo es demasiado grande (máximo 10MB)' },
          { status: 400 }
        );
      }
      if (error.message.includes('Quota exceeded')) {
        return NextResponse.json(
          { error: 'Cuota de Cloudinary excedida. Contacta al administrador.' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Error interno del servidor al subir la imagen' },
      { status: 500 }
    );
  }
}

// GET - Obtener estadísticas de uso de Cloudinary (solo para administradores)
export async function GET(request: NextRequest) {
  try {
    // Verificar autenticación
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    // Obtener estadísticas de uso
    const stats = await CloudinaryService.getUsageStats();
    
    if (!stats) {
      return NextResponse.json(
        { error: 'No se pudieron obtener las estadísticas' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      usage: stats,
      message: 'Estadísticas de Cloudinary obtenidas exitosamente'
    });

  } catch (error) {
    console.error('❌ Error obteniendo estadísticas de Cloudinary:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar imagen de Cloudinary
export async function DELETE(request: NextRequest) {
  try {
    // Verificar autenticación
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get('publicId');
    const imageUrl = searchParams.get('imageUrl');

    if (!publicId && !imageUrl) {
      return NextResponse.json(
        { error: 'Se requiere publicId o imageUrl' },
        { status: 400 }
      );
    }

    let finalPublicId = publicId;

    // Si se proporciona imageUrl en lugar de publicId, extraerlo
    if (!finalPublicId && imageUrl) {
      finalPublicId = CloudinaryService.extractPublicId(imageUrl);
      if (!finalPublicId) {
        return NextResponse.json(
          { error: 'No se pudo extraer el publicId de la URL' },
          { status: 400 }
        );
      }
    }

    console.log('🗑️ Eliminando imagen de Cloudinary:', finalPublicId);

    const deleted = await CloudinaryService.deleteImage(finalPublicId!);

    if (deleted) {
      console.log('✅ Imagen eliminada exitosamente de Cloudinary');
      return NextResponse.json({
        success: true,
        message: 'Imagen eliminada exitosamente'
      });
    } else {
      return NextResponse.json(
        { error: 'No se pudo eliminar la imagen' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('❌ Error eliminando imagen:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
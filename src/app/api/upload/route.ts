// src/app/api/upload/route.ts - Con debug mejorado para banners
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { verifyToken } from '@/lib/auth';

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

    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      console.log('❌ Upload: Tipo de archivo inválido:', file.type);
      return NextResponse.json(
        { error: 'El archivo debe ser una imagen' },
        { status: 400 }
      );
    }

    // Validar tamaño (5MB máximo)
    if (file.size > 5 * 1024 * 1024) {
      console.log('❌ Upload: Archivo demasiado grande:', file.size);
      return NextResponse.json(
        { error: 'La imagen debe ser menor a 5MB' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generar nombre único para el archivo
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, '-').toLowerCase();
    const extension = path.extname(originalName);
    const nameWithoutExt = path.basename(originalName, extension);
    
    // Prefijo según la carpeta
    const prefix = folder === 'banners' ? 'banner' : 'blog';
    const fileName = `${prefix}-${timestamp}-${nameWithoutExt}${extension}`;
    
    console.log('📝 Upload: Nombre del archivo generado:', fileName);

    // Crear directorio de destino
    const uploadDir = path.join(process.cwd(), 'public/images', folder);
    console.log('📁 Upload: Directorio destino:', uploadDir);
    
    await mkdir(uploadDir, { recursive: true });

    // Guardar archivo
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    // Retornar URL de la imagen (sin /public)
    const imageUrl = `/images/${folder}/${fileName}`;

    console.log('✅ Upload: Imagen guardada exitosamente');
    console.log('🔗 Upload: URL generada:', imageUrl);
    console.log('📍 Upload: Ruta física:', filePath);

    return NextResponse.json({
      success: true,
      imageUrl,
      fileName,
      folder,
      message: 'Imagen subida exitosamente'
    });

  } catch (error) {
    console.error('❌ Upload: Error interno:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
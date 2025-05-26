// src/app/api/upload/route.ts - Arreglado para Next.js 15
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const data = await request.formData();
    const file: File | null = data.get('image') as unknown as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No se encontró el archivo' },
        { status: 400 }
      );
    }

    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'El archivo debe ser una imagen' },
        { status: 400 }
      );
    }

    // Validar tamaño (5MB máximo)
    if (file.size > 5 * 1024 * 1024) {
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
    const fileName = `blog-${timestamp}-${originalName}`;
    
    // Crear directorio si no existe
    const uploadDir = path.join(process.cwd(), 'public/images/blog');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      // El directorio ya existe, continuar
    }

    // Guardar archivo
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    // Retornar URL de la imagen
    const imageUrl = `/images/blog/${fileName}`;

    console.log('✅ Imagen guardada exitosamente:', imageUrl);

    return NextResponse.json({
      success: true,
      imageUrl,
      message: 'Imagen subida exitosamente'
    });

  } catch (error) {
    console.error('❌ Error uploading image:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
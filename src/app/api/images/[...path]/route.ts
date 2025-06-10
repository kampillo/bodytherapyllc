// src/app/api/images/[...path]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { readFile, existsSync } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const readFileAsync = promisify(readFile);

interface RouteParams {
  params: Promise<{ path: string[] }>;
}

export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { path } = await context.params;
    const imagePath = join(process.cwd(), 'public', 'images', ...path);
    
    // Verificar que el archivo existe
    if (!existsSync(imagePath)) {
      console.log('❌ Image not found:', imagePath);
      return new NextResponse('Image not found', { status: 404 });
    }
    
    // Determinar el tipo de contenido basado en la extensión
    const extension = path[path.length - 1].split('.').pop()?.toLowerCase();
    const contentType = getContentType(extension);
    
    if (!contentType) {
      return new NextResponse('Unsupported image type', { status: 415 });
    }
    
    try {
      // Leer el archivo de forma asíncrona
      const imageBuffer = await readFileAsync(imagePath);
      
      return new NextResponse(imageBuffer, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Length': imageBuffer.length.toString(),
        },
      });
      
    } catch (readError) {
      console.error('Error reading image file:', readError);
      return new NextResponse('Error reading image', { status: 500 });
    }
    
  } catch (error) {
    console.error('Error serving image:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

function getContentType(extension: string | undefined): string | null {
  switch (extension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'gif':
      return 'image/gif';
    case 'webp':
      return 'image/webp';
    case 'svg':
      return 'image/svg+xml';
    case 'bmp':
      return 'image/bmp';
    case 'ico':
      return 'image/x-icon';
    default:
      return null;
  }
}
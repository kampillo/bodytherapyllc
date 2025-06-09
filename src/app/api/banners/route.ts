// src/app/api/banners/route.ts - API principal de banners
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { 
  getAllBanners, 
  getActiveBanners,
  createBanner,
  getBannerStats
} from '@/lib/banners';

// GET - obtener banners
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const admin = searchParams.get('admin') === 'true';
    const active = searchParams.get('active') === 'true';
    
    console.log('📡 API Banners - Solicitud recibida:', { admin, active });
    
    if (admin) {
      // Verificar autenticación para admin
      const token = request.cookies.get('auth-token')?.value;
      if (!token || !verifyToken(token)) {
        console.log('❌ API Banners - Admin no autorizado');
        return NextResponse.json(
          { error: 'No autorizado' },
          { status: 401 }
        );
      }
      
      // Si se solicitan estadísticas
      if (searchParams.get('stats') === 'true') {
        const stats = await getBannerStats();
        console.log('✅ API Banners - Estadísticas devueltas:', stats);
        return NextResponse.json({ stats });
      }
      
      // Todos los banners para admin
      const banners = await getAllBanners();
      console.log('✅ API Banners - Banners admin devueltos:', banners.length);
      return NextResponse.json({ banners });
    } else {
      // Banners públicos (solo activos)
      const banners = await getActiveBanners();
      console.log('✅ API Banners - Banners activos devueltos:', banners.length);
      console.log('📝 Banners activos:', banners.map(b => ({ 
        id: b.id, 
        title: b.title, 
        active: b.active,
        order: b.order,
        image: b.image.substring(0, 50) + '...'
      })));
      
      return NextResponse.json({ banners });
    }
  } catch (error) {
    console.error('❌ API Banners - Error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST - crear nuevo banner
export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const token = request.cookies.get('auth-token')?.value;
    const decoded = verifyToken(token || '');
    
    if (!decoded) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { title, subtitle, image, altText, link, order, active } = body;
    
    console.log('📝 API Banners - Creando nuevo banner:', { 
      title, 
      active,
      order,
      image: image?.substring(0, 50) + '...' 
    });
    
    // Validaciones básicas
    if (!title || !image || !altText) {
      return NextResponse.json(
        { error: 'Título, imagen y texto alternativo son requeridos' },
        { status: 400 }
      );
    }
    
    // Normalizar el campo order. Si viene como 0 o cadena vacía, tratarlo
    // como undefined para que se asigne automáticamente el siguiente orden.
    const parsedOrder =
      order === undefined || order === '' || order === 0 || order === '0'
        ? undefined
        : parseInt(order);

    const newBanner = await createBanner({
      title,
      subtitle: subtitle || '',
      image,
      altText,
      link: link || '',
      order: parsedOrder,
      active: active !== undefined ? active : true
    });
    
    if (!newBanner) {
      return NextResponse.json(
        { error: 'Error al crear el banner' },
        { status: 500 }
      );
    }
    
    console.log('✅ API Banners - Banner creado:', { 
      id: newBanner.id, 
      title: newBanner.title, 
      active: newBanner.active,
      order: newBanner.order,
      image: newBanner.image
    });
    
    return NextResponse.json({ banner: newBanner }, { status: 201 });
  } catch (error) {
    console.error('❌ API Banners - Error creando banner:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
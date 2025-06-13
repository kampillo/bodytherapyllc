// src/app/api/banners/[id]/route.ts - API individual de banners
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import {
  getBannerById,
  updateBanner,
  deleteBanner,
  toggleActive,
  moveBannerUp,
  moveBannerDown,
  duplicateBanner,
  BannerOrderError
} from '@/lib/banners';

// Definir el tipo correcto para los parámetros
interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET - obtener banner por ID
export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params;
    const bannerId = parseInt(id);
    
    if (isNaN(bannerId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    const banner = await getBannerById(bannerId);
    if (!banner) {
      return NextResponse.json(
        { error: 'Banner no encontrado' },
        { status: 404 }
      );
    }
    
    console.log('✅ API Banners - Banner obtenido:', { 
      id: banner.id, 
      title: banner.title,
      active: banner.active,
      order: banner.order
    });
    
    return NextResponse.json({ banner });
  } catch (error) {
    console.error('❌ API Banners - Error getting banner:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT - actualizar banner
export async function PUT(
  request: NextRequest,
  context: RouteParams
) {
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
    
    const { id } = await context.params;
    const bannerId = parseInt(id);
    
    if (isNaN(bannerId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    // Verificar que el banner existe
    const existingBanner = await getBannerById(bannerId);
    if (!existingBanner) {
      return NextResponse.json(
        { error: 'Banner no encontrado' },
        { status: 404 }
      );
    }
    
    const body = await request.json();
    const { title, subtitle, image, altText, link, order, active } = body;
    
    console.log('📝 API Banners - Actualizando banner:', { 
      id: bannerId,
      title: title || existingBanner.title,
      active: active !== undefined ? active : existingBanner.active,
      order: order !== undefined ? order : existingBanner.order
    });
    
    // Validación de campos requeridos si se proporcionan
    if (title !== undefined && !title.trim()) {
      return NextResponse.json(
        { error: 'El título no puede estar vacío' },
        { status: 400 }
      );
    }
    
    if (image !== undefined && !image.trim()) {
      return NextResponse.json(
        { error: 'La imagen no puede estar vacía' },
        { status: 400 }
      );
    }
    
    if (altText !== undefined && !altText.trim()) {
      return NextResponse.json(
        { error: 'El texto alternativo no puede estar vacío' },
        { status: 400 }
      );
    }
    
    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (subtitle !== undefined) updateData.subtitle = subtitle;
    if (image !== undefined) updateData.image = image;
    if (altText !== undefined) updateData.altText = altText;
    if (link !== undefined) updateData.link = link;
    if (order !== undefined) updateData.order = parseInt(order);
    if (active !== undefined) updateData.active = active;
    
    const updatedBanner = await updateBanner(bannerId, updateData);

    if (!updatedBanner) {
      return NextResponse.json(
        { error: 'Error al actualizar el banner' },
        { status: 500 }
      );
    }
    
    console.log('✅ API Banners - Banner actualizado:', { 
      id: updatedBanner.id, 
      title: updatedBanner.title,
      active: updatedBanner.active,
      order: updatedBanner.order,
      image: updatedBanner.image
    });
    
    return NextResponse.json({ banner: updatedBanner });
  } catch (error) {
    if (error instanceof BannerOrderError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status }
      );
    }
    console.error('❌ API Banners - Error updating banner:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE - eliminar banner
export async function DELETE(
  request: NextRequest,
  context: RouteParams
) {
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
    
    const { id } = await context.params;
    const bannerId = parseInt(id);
    
    if (isNaN(bannerId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    // Verificar que el banner existe antes de eliminar
    const existingBanner = await getBannerById(bannerId);
    if (!existingBanner) {
      return NextResponse.json(
        { error: 'Banner no encontrado' },
        { status: 404 }
      );
    }
    
    console.log('🗑️ API Banners - Eliminando banner:', { 
      id: bannerId,
      title: existingBanner.title,
      order: existingBanner.order
    });
    
    const deleted = await deleteBanner(bannerId);
    
    if (!deleted) {
      return NextResponse.json(
        { error: 'Error al eliminar el banner' },
        { status: 500 }
      );
    }
    
    console.log('✅ API Banners - Banner eliminado exitosamente:', bannerId);
    
    return NextResponse.json({ message: 'Banner eliminado exitosamente' });
  } catch (error) {
    console.error('❌ API Banners - Error deleting banner:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PATCH - operaciones específicas (toggle active, mover, duplicar)
export async function PATCH(
  request: NextRequest,
  context: RouteParams
) {
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
    
    const { id } = await context.params;
    const bannerId = parseInt(id);
    
    if (isNaN(bannerId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const { action } = body;
    
    console.log('🔄 API Banners - Operación PATCH:', { 
      id: bannerId,
      action
    });
    
    let result;
    let message = '';
    
    switch (action) {
      case 'toggle-active':
        result = await toggleActive(bannerId);
        message = 'Estado de activación cambiado';
        break;
        
      case 'move-up':
        const movedUp = await moveBannerUp(bannerId);
        if (!movedUp) {
          return NextResponse.json(
            { error: 'No se puede mover hacia arriba (ya está en la primera posición o error)' },
            { status: 400 }
          );
        }
        result = await getBannerById(bannerId);
        message = 'Banner movido hacia arriba';
        break;
        
      case 'move-down':
        const movedDown = await moveBannerDown(bannerId);
        if (!movedDown) {
          return NextResponse.json(
            { error: 'No se puede mover hacia abajo (ya está en la última posición o error)' },
            { status: 400 }
          );
        }
        result = await getBannerById(bannerId);
        message = 'Banner movido hacia abajo';
        break;
        
      case 'duplicate':
        result = await duplicateBanner(bannerId);
        message = 'Banner duplicado exitosamente';
        break;
        
      default:
        return NextResponse.json(
          { error: 'Acción no válida. Usar: toggle-active, move-up, move-down, duplicate' },
          { status: 400 }
        );
    }
    
    if (!result) {
      return NextResponse.json(
        { error: 'Banner no encontrado o error al procesar la operación' },
        { status: 404 }
      );
    }
    
    console.log('✅ API Banners - Operación completada:', { 
      id: result.id, 
      title: result.title,
      action,
      newState: action === 'toggle-active' ? result.active : result.order
    });
    
    return NextResponse.json({ 
      banner: result,
      message
    });
  } catch (error) {
    console.error('❌ API Banners - Error in PATCH operation:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

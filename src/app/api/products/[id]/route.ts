// src/app/api/products/[id]/route.ts - API individual de productos
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { 
  getProductById, 
  updateProduct, 
  deleteProduct,
  toggleFeatured,
  toggleStock
} from '@/lib/products';

// Definir el tipo correcto para los parámetros
interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET - obtener producto por ID
export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params;
    const productId = parseInt(id);
    
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    const product = await getProductById(productId);
    if (!product) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }
    
    console.log('✅ API Products - Producto obtenido:', { 
      id: product.id, 
      name: product.name,
      price: product.price,
      inStock: product.inStock
    });
    
    return NextResponse.json({ product });
  } catch (error) {
    console.error('❌ API Products - Error getting product:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT - actualizar producto
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
    const productId = parseInt(id);
    
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    // Verificar que el producto existe
    const existingProduct = await getProductById(productId);
    if (!existingProduct) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }
    
    const body = await request.json();
    const { name, description, price, image, category, inStock, featured } = body;
    
    console.log('📝 API Products - Actualizando producto:', { 
      id: productId,
      name: name || existingProduct.name,
      price: price !== undefined ? price : existingProduct.price,
      inStock: inStock !== undefined ? inStock : existingProduct.inStock,
      featured: featured !== undefined ? featured : existingProduct.featured
    });
    
    // Validación de precio si se proporciona
    if (price !== undefined && price < 0) {
      return NextResponse.json(
        { error: 'El precio debe ser mayor o igual a 0' },
        { status: 400 }
      );
    }
    
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (price !== undefined) updateData.price = parseFloat(price);
    if (image !== undefined) updateData.image = image;
    if (category !== undefined) updateData.category = category;
    if (inStock !== undefined) updateData.inStock = inStock;
    if (featured !== undefined) updateData.featured = featured;
    
    const updatedProduct = await updateProduct(productId, updateData);
    
    if (!updatedProduct) {
      return NextResponse.json(
        { error: 'Error al actualizar el producto' },
        { status: 500 }
      );
    }
    
    console.log('✅ API Products - Producto actualizado:', { 
      id: updatedProduct.id, 
      name: updatedProduct.name,
      price: updatedProduct.price,
      slug: updatedProduct.slug,
      inStock: updatedProduct.inStock,
      featured: updatedProduct.featured
    });
    
    return NextResponse.json({ product: updatedProduct });
  } catch (error) {
    console.error('❌ API Products - Error updating product:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE - eliminar producto
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
    const productId = parseInt(id);
    
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    // Verificar que el producto existe antes de eliminar
    const existingProduct = await getProductById(productId);
    if (!existingProduct) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }
    
    console.log('🗑️ API Products - Eliminando producto:', { 
      id: productId,
      name: existingProduct.name,
      price: existingProduct.price
    });
    
    const deleted = await deleteProduct(productId);
    
    if (!deleted) {
      return NextResponse.json(
        { error: 'Error al eliminar el producto' },
        { status: 500 }
      );
    }
    
    console.log('✅ API Products - Producto eliminado exitosamente:', productId);
    
    return NextResponse.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    console.error('❌ API Products - Error deleting product:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PATCH - operaciones específicas (toggle featured, toggle stock)
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
    const productId = parseInt(id);
    
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const { action } = body;
    
    console.log('🔄 API Products - Operación PATCH:', { 
      id: productId,
      action
    });
    
    let updatedProduct;
    
    switch (action) {
      case 'toggle-featured':
        updatedProduct = await toggleFeatured(productId);
        break;
      case 'toggle-stock':
        updatedProduct = await toggleStock(productId);
        break;
      default:
        return NextResponse.json(
          { error: 'Acción no válida. Usar: toggle-featured, toggle-stock' },
          { status: 400 }
        );
    }
    
    if (!updatedProduct) {
      return NextResponse.json(
        { error: 'Producto no encontrado o error al actualizar' },
        { status: 404 }
      );
    }
    
    console.log('✅ API Products - Operación completada:', { 
      id: updatedProduct.id, 
      name: updatedProduct.name,
      action,
      newState: action === 'toggle-featured' ? updatedProduct.featured : updatedProduct.inStock
    });
    
    return NextResponse.json({ 
      product: updatedProduct,
      message: `${action} completado exitosamente`
    });
  } catch (error) {
    console.error('❌ API Products - Error in PATCH operation:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

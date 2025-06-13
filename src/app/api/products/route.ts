// src/app/api/products/route.ts - API principal de productos
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { 
  getAllProducts, 
  getAvailableProducts, 
  getFeaturedProducts,
  getProductsByCategory,
  searchProducts,
  createProduct 
} from '@/lib/products';

// GET - obtener productos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const admin = searchParams.get('admin') === 'true';
    const featured = searchParams.get('featured') === 'true';
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const inStock = searchParams.get('inStock') !== 'false'; // Default true
    
    console.log('📡 API Products - Solicitud recibida:', { 
      admin, featured, category, search, inStock 
    });
    
    if (admin) {
      // Verificar autenticación para admin
      const token = request.cookies.get('auth-token')?.value;
      if (!token || !verifyToken(token)) {
        console.log('❌ API Products - Admin no autorizado');
        return NextResponse.json(
          { error: 'No autorizado' },
          { status: 401 }
        );
      }
      
      const products = await getAllProducts();
      console.log('✅ API Products - Productos admin devueltos:', products.length);
      return NextResponse.json({ products });
    }
    
    let products;
    
    // Manejar diferentes tipos de consultas públicas
    if (search) {
      // Búsqueda de texto
      products = await searchProducts(search, inStock);
      console.log(`✅ API Products - Búsqueda "${search}":`, products.length);
    } else if (category) {
      // Filtrar por categoría
      products = await getProductsByCategory(category, inStock);
      console.log(`✅ API Products - Categoría "${category}":`, products.length);
    } else if (featured) {
      // Solo productos destacados
      products = await getFeaturedProducts();
      console.log('✅ API Products - Productos destacados:', products.length);
    } else {
      // Todos los productos disponibles
      products = await getAvailableProducts();
      console.log('✅ API Products - Productos disponibles:', products.length);
    }
    
    console.log('📝 Productos devueltos:', products.map(p => ({ 
      id: p.id, 
      name: p.name, 
      price: p.price,
      inStock: p.inStock,
      featured: p.featured,
      category: p.category
    })));
    
    return NextResponse.json({ products });
  } catch (error) {
    console.error('❌ API Products - Error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// POST - crear nuevo producto
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
    const { name, description, price, image, category, inStock, featured } = body;
    
    console.log('📝 API Products - Creando nuevo producto:', { 
      name, 
      price,
      category,
      inStock,
      featured,
      image: image?.substring(0, 50) + '...' 
    });
    
    // Validaciones básicas
    if (!name || !description || price === undefined) {
      return NextResponse.json(
        { error: 'Nombre, descripción y precio son requeridos' },
        { status: 400 }
      );
    }
    
    if (price < 0) {
      return NextResponse.json(
        { error: 'El precio debe ser mayor o igual a 0' },
        { status: 400 }
      );
    }
    
    const newProduct = await createProduct({
      name,
      description,
      price: parseFloat(price),
      image: image || '/images/products/default.jpg',
      category: category || 'General',
      inStock: inStock !== undefined ? inStock : true,
      featured: featured || false
    });
    
    if (!newProduct) {
      return NextResponse.json(
        { error: 'Error al crear el producto' },
        { status: 500 }
      );
    }
    
    console.log('✅ API Products - Producto creado:', { 
      id: newProduct.id, 
      name: newProduct.name, 
      price: newProduct.price,
      slug: newProduct.slug,
      inStock: newProduct.inStock,
      featured: newProduct.featured
    });
    
    return NextResponse.json({ product: newProduct }, { status: 201 });
  } catch (error) {
    console.error('❌ API Products - Error creando producto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

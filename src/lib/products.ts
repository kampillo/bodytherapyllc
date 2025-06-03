// src/lib/products.ts - Librería para gestión de productos
import { prisma } from './prisma';
import type { Product } from '@prisma/client';

// Tipo para crear producto (sin campos autogenerados)
export type CreateProductData = {
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  inStock?: boolean;
  featured?: boolean;
};

// Tipo para actualizar producto
export type UpdateProductData = Partial<CreateProductData>;

// Crear slug desde nombre
export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Remover guiones múltiples
    .trim();
}

// Generar slug único
async function generateUniqueSlug(name: string, excludeId?: number): Promise<string> {
  let baseSlug = createSlug(name);
  let finalSlug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await prisma.product.findUnique({
      where: { slug: finalSlug }
    });

    // Si no existe o es el mismo producto que estamos actualizando
    if (!existing || (excludeId && existing.id === excludeId)) {
      break;
    }

    finalSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  return finalSlug;
}

// Obtener todos los productos
export async function getAllProducts(): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      orderBy: [
        { featured: 'desc' }, // Productos destacados primero
        { createdAt: 'desc' }
      ]
    });

    return products;
  } catch (error) {
    console.error('Error getting all products:', error);
    return [];
  }
}

// Obtener productos disponibles (en stock)
export async function getAvailableProducts(): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        inStock: true
      },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return products;
  } catch (error) {
    console.error('Error getting available products:', error);
    return [];
  }
}

// Obtener productos destacados
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        featured: true,
        inStock: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return products;
  } catch (error) {
    console.error('Error getting featured products:', error);
    return [];
  }
}

// Obtener producto por ID
export async function getProductById(id: number): Promise<Product | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { id }
    });

    return product;
  } catch (error) {
    console.error('Error getting product by ID:', error);
    return null;
  }
}

// Obtener producto por slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { slug }
    });

    return product;
  } catch (error) {
    console.error('Error getting product by slug:', error);
    return null;
  }
}

// Crear nuevo producto
export async function createProduct(productData: CreateProductData): Promise<Product | null> {
  try {
    const slug = await generateUniqueSlug(productData.name);

    const product = await prisma.product.create({
      data: {
        name: productData.name,
        slug,
        description: productData.description,
        price: productData.price,
        image: productData.image || '/images/products/default.jpg',
        category: productData.category || 'General',
        inStock: productData.inStock !== undefined ? productData.inStock : true,
        featured: productData.featured || false,
      }
    });

    return product;
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}

// Actualizar producto
export async function updateProduct(id: number, updates: UpdateProductData): Promise<Product | null> {
  try {
    // Si se actualiza el nombre, generar nuevo slug
    let slug;
    if (updates.name) {
      slug = await generateUniqueSlug(updates.name, id);
    }

    const updateData: any = { ...updates };
    if (slug) {
      updateData.slug = slug;
    }

    const product = await prisma.product.update({
      where: { id },
      data: updateData
    });

    return product;
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
}

// Eliminar producto
export async function deleteProduct(id: number): Promise<boolean> {
  try {
    await prisma.product.delete({
      where: { id }
    });
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
}

// Obtener productos por categoría
export async function getProductsByCategory(category: string, inStockOnly: boolean = true): Promise<Product[]> {
  try {
    const whereCondition: any = { category };
    if (inStockOnly) {
      whereCondition.inStock = true;
    }

    const products = await prisma.product.findMany({
      where: whereCondition,
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return products;
  } catch (error) {
    console.error('Error getting products by category:', error);
    return [];
  }
}

// Buscar productos por texto
export async function searchProducts(query: string, inStockOnly: boolean = true): Promise<Product[]> {
  try {
    const whereCondition: any = {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { category: { contains: query, mode: 'insensitive' } },
      ]
    };

    if (inStockOnly) {
      whereCondition.inStock = true;
    }

    const products = await prisma.product.findMany({
      where: whereCondition,
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return products;
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
}

// Obtener categorías disponibles
export async function getProductCategories(): Promise<string[]> {
  try {
    const categories = await prisma.product.findMany({
      select: {
        category: true
      },
      distinct: ['category'],
      orderBy: {
        category: 'asc'
      }
    });

    return categories.map(c => c.category);
  } catch (error) {
    console.error('Error getting product categories:', error);
    return [];
  }
}

// Alternar estado destacado
export async function toggleFeatured(id: number): Promise<Product | null> {
  try {
    const product = await getProductById(id);
    if (!product) return null;

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        featured: !product.featured
      }
    });

    return updatedProduct;
  } catch (error) {
    console.error('Error toggling featured status:', error);
    return null;
  }
}

// Alternar estado de stock
export async function toggleStock(id: number): Promise<Product | null> {
  try {
    const product = await getProductById(id);
    if (!product) return null;

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        inStock: !product.inStock
      }
    });

    return updatedProduct;
  } catch (error) {
    console.error('Error toggling stock status:', error);
    return null;
  }
}

// Obtener estadísticas de productos
export async function getProductStats() {
  try {
    const [totalProducts, inStockProducts, outOfStockProducts, featuredProducts, categories] = await Promise.all([
      prisma.product.count(),
      prisma.product.count({ where: { inStock: true } }),
      prisma.product.count({ where: { inStock: false } }),
      prisma.product.count({ where: { featured: true } }),
      getProductCategories()
    ]);

    return {
      totalProducts,
      inStockProducts,
      outOfStockProducts,
      featuredProducts,
      categoriesCount: categories.length,
      categories
    };
  } catch (error) {
    console.error('Error getting product stats:', error);
    return {
      totalProducts: 0,
      inStockProducts: 0,
      outOfStockProducts: 0,
      featuredProducts: 0,
      categoriesCount: 0,
      categories: []
    };
  }
}
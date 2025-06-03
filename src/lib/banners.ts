// src/lib/banners.ts - Librería para gestión de banners
import { prisma } from './prisma';
import type { Banner } from '@prisma/client';

// Tipo para crear banner (sin campos autogenerados)
export type CreateBannerData = {
  title: string;
  subtitle?: string;
  image: string;
  altText: string;
  link?: string;
  order?: number;
  active?: boolean;
};

// Tipo para actualizar banner
export type UpdateBannerData = Partial<CreateBannerData>;

// Obtener todos los banners (admin)
export async function getAllBanners(): Promise<Banner[]> {
  try {
    const banners = await prisma.banner.findMany({
      orderBy: {
        order: 'asc'
      }
    });

    return banners;
  } catch (error) {
    console.error('Error getting all banners:', error);
    return [];
  }
}

// Obtener banners activos (público)
export async function getActiveBanners(): Promise<Banner[]> {
  try {
    const banners = await prisma.banner.findMany({
      where: {
        active: true
      },
      orderBy: {
        order: 'asc'
      }
    });

    return banners;
  } catch (error) {
    console.error('Error getting active banners:', error);
    return [];
  }
}

// Obtener banner por ID
export async function getBannerById(id: number): Promise<Banner | null> {
  try {
    const banner = await prisma.banner.findUnique({
      where: { id }
    });

    return banner;
  } catch (error) {
    console.error('Error getting banner by ID:', error);
    return null;
  }
}

// Crear nuevo banner
export async function createBanner(bannerData: CreateBannerData): Promise<Banner | null> {
  try {
    // Si no se especifica orden, obtener el siguiente disponible
    let order = bannerData.order;
    if (order === undefined) {
      const lastBanner = await prisma.banner.findFirst({
        orderBy: { order: 'desc' }
      });
      order = lastBanner ? lastBanner.order + 1 : 1;
    }

    const banner = await prisma.banner.create({
      data: {
        title: bannerData.title,
        subtitle: bannerData.subtitle || '',
        image: bannerData.image,
        altText: bannerData.altText,
        link: bannerData.link || '',
        order: order,
        active: bannerData.active !== undefined ? bannerData.active : true,
      }
    });

    return banner;
  } catch (error) {
    console.error('Error creating banner:', error);
    return null;
  }
}

// Actualizar banner
export async function updateBanner(id: number, updates: UpdateBannerData): Promise<Banner | null> {
  try {
    const banner = await prisma.banner.update({
      where: { id },
      data: updates
    });

    return banner;
  } catch (error) {
    console.error('Error updating banner:', error);
    return null;
  }
}

// Eliminar banner
export async function deleteBanner(id: number): Promise<boolean> {
  try {
    await prisma.banner.delete({
      where: { id }
    });
    return true;
  } catch (error) {
    console.error('Error deleting banner:', error);
    return false;
  }
}

// Alternar estado activo
export async function toggleActive(id: number): Promise<Banner | null> {
  try {
    const banner = await getBannerById(id);
    if (!banner) return null;

    const updatedBanner = await prisma.banner.update({
      where: { id },
      data: {
        active: !banner.active
      }
    });

    return updatedBanner;
  } catch (error) {
    console.error('Error toggling active status:', error);
    return null;
  }
}

// Reordenar banners
export async function reorderBanners(bannerOrders: { id: number; order: number }[]): Promise<boolean> {
  try {
    // Usar transacción para asegurar que todos los cambios se apliquen
    await prisma.$transaction(
      bannerOrders.map(({ id, order }) =>
        prisma.banner.update({
          where: { id },
          data: { order }
        })
      )
    );

    return true;
  } catch (error) {
    console.error('Error reordering banners:', error);
    return false;
  }
}

// Mover banner hacia arriba en el orden
export async function moveBannerUp(id: number): Promise<boolean> {
  try {
    const banner = await getBannerById(id);
    if (!banner) return false;

    // Encontrar el banner inmediatamente anterior
    const previousBanner = await prisma.banner.findFirst({
      where: {
        order: {
          lt: banner.order
        }
      },
      orderBy: {
        order: 'desc'
      }
    });

    if (!previousBanner) return false; // Ya está en la primera posición

    // Intercambiar órdenes
    await prisma.$transaction([
      prisma.banner.update({
        where: { id: banner.id },
        data: { order: previousBanner.order }
      }),
      prisma.banner.update({
        where: { id: previousBanner.id },
        data: { order: banner.order }
      })
    ]);

    return true;
  } catch (error) {
    console.error('Error moving banner up:', error);
    return false;
  }
}

// Mover banner hacia abajo en el orden
export async function moveBannerDown(id: number): Promise<boolean> {
  try {
    const banner = await getBannerById(id);
    if (!banner) return false;

    // Encontrar el banner inmediatamente posterior
    const nextBanner = await prisma.banner.findFirst({
      where: {
        order: {
          gt: banner.order
        }
      },
      orderBy: {
        order: 'asc'
      }
    });

    if (!nextBanner) return false; // Ya está en la última posición

    // Intercambiar órdenes
    await prisma.$transaction([
      prisma.banner.update({
        where: { id: banner.id },
        data: { order: nextBanner.order }
      }),
      prisma.banner.update({
        where: { id: nextBanner.id },
        data: { order: banner.order }
      })
    ]);

    return true;
  } catch (error) {
    console.error('Error moving banner down:', error);
    return false;
  }
}

// Obtener el siguiente orden disponible
export async function getNextOrder(): Promise<number> {
  try {
    const lastBanner = await prisma.banner.findFirst({
      orderBy: { order: 'desc' }
    });

    return lastBanner ? lastBanner.order + 1 : 1;
  } catch (error) {
    console.error('Error getting next order:', error);
    return 1;
  }
}

// Normalizar órdenes (reordenar secuencialmente: 1, 2, 3, ...)
export async function normalizeBannerOrders(): Promise<boolean> {
  try {
    const banners = await prisma.banner.findMany({
      orderBy: { order: 'asc' }
    });

    const updates = banners.map((banner, index) => ({
      id: banner.id,
      order: index + 1
    }));

    await reorderBanners(updates);
    return true;
  } catch (error) {
    console.error('Error normalizing banner orders:', error);
    return false;
  }
}

// Obtener estadísticas de banners
export async function getBannerStats() {
  try {
    const [totalBanners, activeBanners, inactiveBanners] = await Promise.all([
      prisma.banner.count(),
      prisma.banner.count({ where: { active: true } }),
      prisma.banner.count({ where: { active: false } })
    ]);

    return {
      totalBanners,
      activeBanners,
      inactiveBanners
    };
  } catch (error) {
    console.error('Error getting banner stats:', error);
    return {
      totalBanners: 0,
      activeBanners: 0,
      inactiveBanners: 0
    };
  }
}

// Duplicar banner
export async function duplicateBanner(id: number): Promise<Banner | null> {
  try {
    const originalBanner = await getBannerById(id);
    if (!originalBanner) return null;

    const nextOrder = await getNextOrder();

    const duplicatedBanner = await prisma.banner.create({
      data: {
        title: `${originalBanner.title} (Copia)`,
        subtitle: originalBanner.subtitle,
        image: originalBanner.image,
        altText: originalBanner.altText,
        link: originalBanner.link,
        order: nextOrder,
        active: false, // Las copias empiezan inactivas
      }
    });

    return duplicatedBanner;
  } catch (error) {
    console.error('Error duplicating banner:', error);
    return null;
  }
}
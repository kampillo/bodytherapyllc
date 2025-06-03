// src/lib/auth.ts - Actualizada para usar Prisma
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from './prisma';
import type { User } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

// Tipo para usuario sin contraseña (para respuestas)
export type SafeUser = Omit<User, 'password'>;

// Buscar usuario por email
export async function findUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });
    return user;
  } catch (error) {
    console.error('Error finding user by email:', error);
    return null;
  }
}

// Buscar usuario por ID
export async function findUserById(id: number): Promise<SafeUser | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      }
    });
    return user;
  } catch (error) {
    console.error('Error finding user by ID:', error);
    return null;
  }
}

// Verificar contraseña
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error('Error verifying password:', error);
    return false;
  }
}

// Hash de contraseña
export async function hashPassword(password: string): Promise<string> {
  try {
    return await bcrypt.hash(password, 12);
  } catch (error) {
    console.error('Error hashing password:', error);
    throw new Error('Failed to hash password');
  }
}

// Crear token JWT
export function createToken(userId: number, email: string): string {
  return jwt.sign(
    { userId, email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// Verificar token JWT
export function verifyToken(token: string): { userId: number; email: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
}

// Crear usuario administrador inicial si no existe
export async function createInitialAdmin(): Promise<void> {
  try {
    const userCount = await prisma.user.count();
    
    if (userCount === 0) {
      const adminEmail = process.env.ADMIN_EMAIL || 'mercedes@bodytherapyllc.com';
      const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
      
      const hashedPassword = await hashPassword(adminPassword);
      
      const adminUser = await prisma.user.create({
        data: {
          email: adminEmail,
          password: hashedPassword,
          name: 'María Mercedes Lizalde',
          role: 'admin',
        }
      });
      
      console.log('✅ Admin user created:', adminUser.email);
    }
  } catch (error) {
    console.error('❌ Error creating initial admin:', error);
    throw new Error('Failed to create initial admin');
  }
}

// Crear nuevo usuario
export async function createUser(userData: {
  email: string;
  password: string;
  name: string;
  role?: string;
}): Promise<SafeUser> {
  try {
    const hashedPassword = await hashPassword(userData.password);
    
    const user = await prisma.user.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        name: userData.name,
        role: userData.role || 'admin',
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      }
    });
    
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
}

// Actualizar usuario
export async function updateUser(
  id: number, 
  updates: Partial<{ email: string; name: string; role: string; password: string }>
): Promise<SafeUser | null> {
  try {
    const updateData: any = { ...updates };
    
    // Si se actualiza la contraseña, hashearla
    if (updates.password) {
      updateData.password = await hashPassword(updates.password);
    }
    
    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      }
    });
    
    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
}

// Eliminar usuario
export async function deleteUser(id: number): Promise<boolean> {
  try {
    await prisma.user.delete({
      where: { id }
    });
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
}

// Obtener todos los usuarios (sin contraseñas)
export async function getAllUsers(): Promise<SafeUser[]> {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return users;
  } catch (error) {
    console.error('Error getting all users:', error);
    return [];
  }
}
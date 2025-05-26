// src/lib/auth.ts - Sin importaciones de auth-edge para evitar conflictos
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  createdAt: string;
}

interface UsersData {
  users: User[];
}

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';
const usersPath = path.join(process.cwd(), 'src/data/users.json');

// Leer usuarios del archivo
export function getUsers(): UsersData {
  try {
    if (!fs.existsSync(usersPath)) {
      const initialData: UsersData = { users: [] };
      fs.writeFileSync(usersPath, JSON.stringify(initialData, null, 2));
      return initialData;
    }
    const data = fs.readFileSync(usersPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading users:', error);
    return { users: [] };
  }
}

// Escribir usuarios al archivo
export function saveUsers(data: UsersData): void {
  try {
    // Asegurar que el directorio existe
    const dir = path.dirname(usersPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving users:', error);
    throw new Error('Failed to save users');
  }
}

// Buscar usuario por email
export function findUserByEmail(email: string): User | null {
  const { users } = getUsers();
  return users.find(user => user.email === email) || null;
}

// Verificar contraseña
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Hash de contraseña
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Crear token JWT (duplicado aquí para las APIs)
export function createToken(userId: number, email: string): string {
  return jwt.sign(
    { userId, email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// Verificar token JWT (duplicado aquí para las APIs)
export function verifyToken(token: string): { userId: number; email: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
    return decoded;
  } catch (error) {
    return null;
  }
}

// Crear usuario inicial si no existe
export async function createInitialAdmin(): Promise<void> {
  const { users } = getUsers();
  
  if (users.length === 0) {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@bodytherapyllc.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    const hashedPassword = await hashPassword(adminPassword);
    
    const adminUser: User = {
      id: 1,
      email: adminEmail,
      password: hashedPassword,
      name: 'Administrador',
      role: 'admin',
      createdAt: new Date().toISOString()
    };
    
    saveUsers({ users: [adminUser] });
    console.log('Admin user created:', adminEmail);
  }
}
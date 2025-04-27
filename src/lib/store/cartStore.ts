import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  
  // Acciones
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

// Helper para calcular totales
const calculateTotals = (items: CartItem[]) => {
  return {
    totalItems: items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: items.reduce((total, item) => total + (item.price * item.quantity), 0),
  };
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      
      addToCart: (item) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex((i) => i.id === item.id);
        
        let newItems;
        
        if (existingItemIndex > -1) {
          // El artículo ya existe, actualizamos la cantidad
          newItems = [...currentItems];
          newItems[existingItemIndex] = {
            ...newItems[existingItemIndex],
            quantity: newItems[existingItemIndex].quantity + item.quantity,
          };
        } else {
          // El artículo no existe, lo añadimos
          newItems = [...currentItems, item];
        }
        
        const { totalItems, totalPrice } = calculateTotals(newItems);
        
        set({
          items: newItems,
          totalItems,
          totalPrice,
        });
      },
      
      removeFromCart: (itemId) => {
        const newItems = get().items.filter((item) => item.id !== itemId);
        const { totalItems, totalPrice } = calculateTotals(newItems);
        
        set({
          items: newItems,
          totalItems,
          totalPrice,
        });
      },
      
      updateQuantity: (itemId, quantity) => {
        const currentItems = get().items;
        const itemIndex = currentItems.findIndex((item) => item.id === itemId);
        
        if (itemIndex > -1) {
          const newItems = [...currentItems];
          newItems[itemIndex] = {
            ...newItems[itemIndex],
            quantity: quantity,
          };
          
          const { totalItems, totalPrice } = calculateTotals(newItems);
          
          set({
            items: newItems,
            totalItems,
            totalPrice,
          });
        }
      },
      
      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },
    }),
    {
      name: 'body-therapy-cart', // nombre para localStorage
    }
  )
);
'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';

export type CartItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  emoji: string;
  qty: number;
  code: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'qty'>) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
  toast: string | null;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const addItem = useCallback((newItem: Omit<CartItem, 'qty'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === newItem.id);
      if (existing) {
        showToast(`${newItem.name} (${newItem.size}) qty updated`);
        return prev.map(i => i.id === newItem.id ? { ...i, qty: i.qty + 1 } : i);
      }
      showToast(`${newItem.name} (${newItem.size}) added to cart`);
      return [...prev, { ...newItem, qty: 1 }];
    });
  }, [showToast]);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      setItems(prev => prev.filter(i => i.id !== id));
    } else {
      setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, total, count, toast }}>
      {children}
      {/* Global Toast */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: 'var(--burg)',
          color: 'var(--saff3)',
          padding: '12px 20px',
          borderRadius: '6px',
          fontSize: '0.82rem',
          fontFamily: '"Jost", sans-serif',
          fontWeight: 500,
          zIndex: 9999,
          boxShadow: '0 4px 20px rgba(59,13,13,0.4)',
          border: '1px solid rgba(200,134,10,0.3)',
          animation: 'toastIn 0.3s ease',
          maxWidth: '300px',
        }}>
          🛒 &nbsp;{toast}
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem } from "../types";

export type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  setItemQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  getItemQuantity: (productId: string) => number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "winter-shop:cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore persistence errors
    }
  }, [items]);

  const totalItems = useMemo(() => items.reduce((sum, it) => sum + it.quantity, 0), [items]);

  const addItem = (productId: string, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.productId === productId);
      if (existing) {
        return prev.map((p) => (p.productId === productId ? { ...p, quantity: p.quantity + quantity } : p));
      }
      return [...prev, { productId, quantity }];
    });
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((p) => p.productId !== productId));
  };

  const increment = (productId: string) => addItem(productId, 1);

  const decrement = (productId: string) => {
    setItems((prev) => {
      const found = prev.find((p) => p.productId === productId);
      if (!found) return prev;
      if (found.quantity <= 1) return prev.filter((p) => p.productId !== productId);
      return prev.map((p) => (p.productId === productId ? { ...p, quantity: p.quantity - 1 } : p));
    });
  };

  const setItemQuantity = (productId: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((p) => p.productId !== productId);
      const exists = prev.some((p) => p.productId === productId);
      if (!exists) return [...prev, { productId, quantity }];
      return prev.map((p) => (p.productId === productId ? { ...p, quantity } : p));
    });
  };

  const clear = () => setItems([]);

  const getItemQuantity = (productId: string) => items.find((p) => p.productId === productId)?.quantity ?? 0;

  const value: CartContextValue = useMemo(
    () => ({ items, totalItems, addItem, removeItem, increment, decrement, setItemQuantity, clear, getItemQuantity }),
    [items, totalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

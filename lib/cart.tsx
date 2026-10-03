"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "dioCart";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  totalQty: number;
  totalPrice: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (name: string, price: number, image?: string) => void;
  changeQty: (id: string, delta: number) => void;
  remove: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadCart(): CartItem[] {
  try {
    const stored: CartItem[] = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? "[]") || [];
    // Sacolas salvas pelo site antigo guardavam o caminho da foto sem a barra inicial.
    return stored.map((item) =>
      item.image && !item.image.startsWith("/") ? { ...item, image: `/${item.image}` } : item,
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setItems(loadCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const add = useCallback((name: string, price: number, image?: string) => {
    setItems((prev) =>
      prev.some((item) => item.id === name)
        ? prev.map((item) =>
            item.id === name ? { ...item, qty: item.qty + 1, image: item.image || image } : item,
          )
        : [...prev, { id: name, name, price, image, qty: 1 }],
    );
  }, []);

  const changeQty = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      items,
      totalQty: items.reduce((sum, item) => sum + item.qty, 0),
      totalPrice: items.reduce((sum, item) => sum + item.qty * item.price, 0),
      isOpen,
      open,
      close,
      add,
      changeQty,
      remove,
    }),
    [items, isOpen, open, close, add, changeQty, remove],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart precisa estar dentro de <CartProvider>");
  return ctx;
}

import { createContext, useState } from 'react'
import { CartItems, Dessert } from "../ts/types"

interface CartContextType {
  cart: CartItems[];
  setCart: React.Dispatch<React.SetStateAction<CartItems[]>>;
  addToCart: (dessert: Dessert) => void;
  removeFromCart: (dessert: Dessert) => void;
  updateQuantity: (name: string, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

import { ReactNode } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItems[]>([])

  const addToCart = (dessert: Dessert) => {
    setCart((prevItems) => {
      return [
        ...prevItems,
        {
          ...dessert,
          quantity: 1
        }
      ]
    })
  }

  const removeFromCart = (dessert: Dessert) => {
    setCart((prevItems) =>
      prevItems.filter((item) => item.name !== dessert.name)
    )
  }

  const updateQuantity = (name: string, quantity: number) => {
    setCart((prevItems) =>
      prevItems
        .map((item) =>
          item.name === name ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
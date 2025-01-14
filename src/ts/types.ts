export type CartItems = {
  image: any
  name: string,
  price: number,
  quantity: number,
}

export type Dessert = {
  image: any
  name: st
  ring,
  price: number,
}

export interface CartProps {
  cartItems: {
    name: string,
    price: number,
    quantity: number,
  }[]
}

export interface CartItemCardProps {
  name: string,
  price: number,
  quantity: number,
}

export interface ConfirmedItemCardProps {
  name: string,
  price: number,
  quantity: number,
  thumbnail: string
}

export interface DessertCardProps {
  srcMobile: string,
  srcTablet: string,
  srcDesktop: string,
  category: string,
  name: string,
  price: number,
  addToCart: () => void,
  cartQuantityMinus: () => void,
  cartQuantityPlus: () => void
}

export interface CartContextType {
  cartItems: CartItems[];
  addToCart: (item: CartItems) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
}
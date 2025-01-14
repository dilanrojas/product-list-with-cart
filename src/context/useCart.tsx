import { useContext } from 'react'
import { CartContext } from './CartContext'

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error ('UseCart must be used within a CartProvider')
  }

  return context
}
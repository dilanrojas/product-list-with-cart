import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <App />
  </CartProvider>
)
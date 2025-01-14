import './Cart.css'
import CartItemCard from './CartItemCard'
import ConfirmedItemCard from './ConfirmedItemCard'
import { useCart } from '../context/useCart'
import { useState } from 'react'

export default function Cart() {

  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirm = () => {
    setIsConfirmed(true)
  }

  const { cart, setCart } = useCart()

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const handleNewOrder = () => {
    setIsConfirmed(false)
    setCart([])
  }

  return (
    <div className="cart-wrapper">
      <aside className='cart'>
        <header className="cart-header">
          <h2>Your Cart</h2>
          <p>(<span className="cart-quantity">0</span>)</p>
        </header>
        {cart && cart.length <= 0
          ? (
            <div className='cart-empty'>
              <img
                src="/illustration-empty-cart.svg"
                alt="Chocolate cake"
                width="128"
                height="128"
              />
              <strong>Your added items will appear here</strong>
            </div>
          )
          : (
            <>
              <div className="cart-items-wrapper">
                {cart.map((dessert, index) => (
                  <CartItemCard
                    key={index}
                    name={dessert.name}
                    quantity={dessert.quantity}
                    price={dessert.price}
                  />
                ))}
              </div>
              <div className="order-total-wrapper">
                <p>Order Total</p>
                <span>$<span className="order-total">
                  {calculateTotal()}
                </span></span>
              </div>
              <div className="carbon-neutral-delivery">
                <img
                  src="/icon-carbon-neutral.svg"
                  alt="Green tree"
                  width="21"
                  height="20"
                />
                <p>This is a <strong>carbon-neutral</strong> delivery</p>
              </div>
              <button
                className="confirm-order-btn"
                onClick={handleConfirm}
              >
                Confirm Order
              </button>
            </>
          )
        }
      </aside>

      {isConfirmed && (
        <div className="order-confirmed-modal-wrapper no-scroll">
          <article className="order-confirmed-modal">
            <img src="/icon-order-confirmed.svg" alt="Green check" />
            <header className="order-confirmed-header">
              <h1>Order Confirmed</h1>
              <p>We hope you enjoy your food!</p>
            </header>
            <div className="order-confirmed-cart-products">
              {cart && cart.length > 0 &&
                cart.map((dessert, index) => (
                  <ConfirmedItemCard
                    key={index}
                    name={dessert.name}
                    quantity={dessert.quantity}
                    price={dessert.price}
                    thumbnail={dessert.image.thumbnail}
                  />
                ))
              }
              <div className="order-total-wrapper">
                <p>Order Total</p>
                <span>$<span className="order-total">
                  {calculateTotal()}
                </span></span>
              </div>
            </div>
            <button
                className="start-new-order-btn"
                onClick={handleNewOrder}
            >
              Start New Order
            </button>
          </article>
        </div>
      )}

    </div>
  )
}
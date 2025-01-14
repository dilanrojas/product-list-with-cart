import './CartItemCard.css'
import { CartItemCardProps } from '../ts/types'
import { useCart } from '../context/useCart'

const IconRemove = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
)

export default function CartItemCard({
  name,
  price,
  quantity,
}: CartItemCardProps ) {

  const { removeFromCart } = useCart()

  return (
    <article className='cart-item-card'>
      <h4>{name}</h4>
      <div className="cart-item-card-content">
        <span><span className="cart-item-quantity">{quantity}</span>x</span>
        <span>@ $<span className="cart-item-price">{price.toFixed(2)}</span></span>
        <span>$<span className="cart-item-price">{(price * quantity).toFixed(2)}</span></span>
        <aside className="cart-item-remove">
          <button onClick={() => removeFromCart({ name, price, image: '' })}>
            <span><IconRemove /></span>
          </button>
        </aside>
      </div>
    </article>
  )
}
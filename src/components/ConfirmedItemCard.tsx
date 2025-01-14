import './ConfirmedItemCard.css'
import { ConfirmedItemCardProps } from '../ts/types'

export default function ConfirmedItemCard({
  name,
  price,
  quantity,
  thumbnail
}: ConfirmedItemCardProps ) {

  return (
    <article className='confirmed-item-card'>
      <img src={thumbnail} alt={name} />
      <div className="confirmed-item-card-content">
        <h4>{name}</h4>
        <div className="confirmed-item-card-pricing">
          <span><span className="confirmed-item-card-quantity">{quantity}</span>x</span>
          <span>@ $<span className="confirmed-item-card-price">{price.toFixed(2)}</span></span>
        </div>
      </div>
      <aside className="confirmed-item-card-total-price">
        <span>$<span className="confirmed-item-card-price">{(price * quantity).toFixed(2)}</span></span>
      </aside>
    </article>
  )
}
import DessertCard from "./components/DessertCard"
import Cart from "./components/Cart"
import data from '../data.json'
import './App.css'
import { useCart } from "./context/useCart"

export default function App() {
  const { cart, addToCart, updateQuantity } = useCart()

  return (
    <>
      <div className="columns-layout">
        <main>
          <header className="primary-header">
            <h1>Desserts</h1>
          </header>
          <div className="desserts-grid">
            {data &&
              data.map((dessert) => {
                const cartItem = cart.find(
                  (item) => item.name === dessert.name
                );
                const quantity = cartItem?.quantity || 0;

                return (
                  <DessertCard
                    key={dessert.name}
                    srcMobile={dessert.image.mobile}
                    srcTablet={dessert.image.tablet}
                    srcDesktop={dessert.image.desktop}
                    category={dessert.category}
                    name={dessert.name}
                    price={dessert.price}
                    addToCart={() => addToCart(dessert)}
                    cartQuantityMinus={() =>
                      updateQuantity(dessert.name, Math.max(0, quantity - 1))
                    }
                    cartQuantityPlus={() =>
                      updateQuantity(dessert.name, quantity + 1)
                    }
                  />
                );
              })}
          </div>
        </main>

        <Cart />
      </div>
    </>
  );
};

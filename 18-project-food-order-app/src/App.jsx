import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  const [cart, setCart] = useState([]);
  const [test, setTest] = useState(false);

  const cartTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function handleAddToCart(meal) {
    setCart((prevCart) => {
      if (itemExistsInCart()) {
        return cart.map((item) => {
          if (item.id === meal.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...prevCart,
          { id: meal.id, price: meal.price, name: meal.name, quantity: 1 },
        ];
      }

      function itemExistsInCart() {
        return prevCart.find((item) => item.id === meal.id);
      }
    });
  }

  function handleRemoveFromCart(meal) {
    setCart(() => {
      return cart.map((item) => {
        if (item.id === meal.id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  }

  function openCartModal() {
    setTest(true);
  }

  function closeCartModal() {
    setTest(false);
  }

  return (
    <>
      <dialog className="modal" open={test} onClose={closeCartModal}>
        <ul className="cart">
          <h2>Your Cart</h2>
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              <p>
                {item.name} - {item.quantity} x ${item.price}
              </p>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item)}>-</button>
                {item.quantity}
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">{cartTotal}</div>
        <div className="modal-actions">
          <span className="text-button">Close</span>
          <button className="button">Go to checkout</button>
        </div>
      </dialog>
      <Header cartLength={cart.length} onCartClick={openCartModal} />
      <Meals onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;

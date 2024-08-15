import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);

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
    setCartModalOpen(true);
  }

  function closeCartModal() {
    setCartModalOpen(false);
  }

  return (
    <>
      <Modal open={cartModalOpen} onClose={closeCartModal}>
        <Cart
          cart={cart}
          total={cartTotal}
          onRemoveFromCart={handleRemoveFromCart}
          onAddToCart={handleAddToCart}
          onModalClose={closeCartModal}
        />
      </Modal>

      <Header cartLength={cart.length} onCartClick={openCartModal} />
      <Meals onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;

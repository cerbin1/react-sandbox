import { useContext, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartContextProvider } from "./store/CartContext";

function App() {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  function openCartModal() {
    setCartModalOpen(true);
  }

  function closeCartModal() {
    setCartModalOpen(false);
  }

  function openCheckoutModal() {
    setCheckoutModalOpen(true);
  }

  function closeCheckoutModal() {
    setCheckoutModalOpen(false);
  }

  function handleCheckout() {
    closeCartModal();
    openCheckoutModal();
  }

  return (
    <CartContextProvider>
      <Header onCartClick={openCartModal} />
      <Meals />
      <Modal open={cartModalOpen} onClose={closeCartModal}>
        <Cart onModalClose={closeCartModal} onCheckout={handleCheckout} />
      </Modal>
      <Modal open={checkoutModalOpen}>
        <Checkout onModalClose={closeCheckoutModal} />
      </Modal>
    </CartContextProvider>
  );
}

export default App;

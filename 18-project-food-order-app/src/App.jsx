import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState();

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

  function openCheckoutModal() {
    setCheckoutModalOpen(true);
  }

  function closeCheckoutModal() {
    setCheckoutModalOpen(false);
  }

  function handleCheckout() {
    if (cart.length > 0) {
      closeCartModal();
      openCheckoutModal();
    } else {
      alert("Your cart is empty!");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError();

    try {
      const formData = new FormData(event.target);
      const data = {
        order: { customer: Object.fromEntries(formData), items: { ...cart } },
      };
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        closeCheckoutModal();
        setCart([]);
        alert("Your order has been received!");
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      setSubmitError(error.message);
    }
    setSubmitting(false);
  }

  return (
    <>
      <Header cartLength={cart.length} onCartClick={openCartModal} />
      <Meals onAddToCart={handleAddToCart} />
      <Modal open={cartModalOpen} onClose={closeCartModal}>
        <Cart
          cart={cart}
          total={cartTotal}
          onRemoveFromCart={handleRemoveFromCart}
          onAddToCart={handleAddToCart}
          onModalClose={closeCartModal}
          onCheckout={handleCheckout}
        />
      </Modal>
      <Modal open={checkoutModalOpen}>
        <h2>Checkout</h2>
        <p>Total Amount: ${cartTotal}</p>
        <form onSubmit={handleSubmit}>
          <div className="control">
            <label htmlFor="name">Full Name</label>
            <input name="name" type="text" id="name" required />
          </div>
          <div className="control">
            <label htmlFor="email">E-Mail Address</label>
            <input name="email" type="email" id="email" required />
          </div>
          <div className="control">
            <label htmlFor="street">Street</label>
            <input name="street" type="text" id="street" required />
          </div>
          <div className="control-row">
            <div className="control">
              <label htmlFor="postal-code">Postal Code</label>
              <input name="postal-code" type="text" id="postal-code" required />
            </div>
            <div className="control">
              <label htmlFor="city">City</label>
              <input name="city" type="text" id="city" required />
            </div>
          </div>
          <div className="modal-actions">
            <span className="text-button" onClick={closeCheckoutModal}>
              Close
            </span>
            <button disabled={submitting} className="button">
              {submitting ? "Submitting..." : "Submit Order"}
            </button>
          </div>
        </form>

        {submitError && <p>{submitError}</p>}
      </Modal>
    </>
  );
}

export default App;

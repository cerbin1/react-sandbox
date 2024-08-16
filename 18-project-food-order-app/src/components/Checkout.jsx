import { useContext, useState } from "react";
import CartContext from "../store/CartContext";

export default function Checkout({ onModalClose }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState();
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items;
  const cartTotalValue = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError();

    try {
      const formData = new FormData(event.target);
      const data = {
        order: {
          customer: Object.fromEntries(formData),
          items: { ...cartItems },
        },
      };
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        handleFinish();
      } else {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      setSubmitError(error.message);
    }
    setSubmitting(false);
  }

  function handleFinish() {
    alert("Your order has been received!");
    onModalClose();
    cartContext.clearCart();
  }

  return (
    <>
      <h2>Checkout</h2>
      <p>Total Amount: ${cartTotalValue.toFixed(2)}</p>
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
          <span className="text-button" onClick={onModalClose}>
            Close
          </span>
          <button disabled={submitting} className="button">
            {submitting ? "Submitting..." : "Submit Order"}
          </button>
        </div>
      </form>

      {submitError && <p>{submitError}</p>}
    </>
  );
}

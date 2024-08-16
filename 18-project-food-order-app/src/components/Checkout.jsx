import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout({ onModalClose }) {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items;
  const cartTotalValue = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const {
    data,
    isLoading: isSubmitting,
    error,
    sendRequest,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      order: {
        customer: Object.fromEntries(formData),
        items: { ...cartItems },
      },
    };
    sendRequest(JSON.stringify(data));
  }

  if (data && !error) {
    handleFinish();
  }

  function handleFinish() {
    alert("Your order has been received!");
    onModalClose();
    cartContext.clearCart();
  }

  let actions = (
    <>
      <span className="text-button" onClick={onModalClose}>
        Close
      </span>
      <button disabled={isSubmitting} className="button">
        {isSubmitting ? "Submitting..." : "Submit Order"}
      </button>
    </>
  );

  if (isSubmitting) {
    actions = <span>Sending order data...</span>;
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
        {error && <Error title="Failed to submit order" message={error} />}
        <div className="modal-actions">{actions}</div>
      </form>
    </>
  );
}

import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function Cart({ onModalClose, onCheckout }) {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items;
  const cartTotalValue = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  function handleAddMealToCart(meal) {
    cartContext.addItem(meal);
  }
  function handleRemoveMealFromCart(id) {
    cartContext.removeItem(id);
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li className="cart-item" key={item.id}>
            <p>
              {item.name} - {item.quantity} x ${item.price}
            </p>
            <div className="cart-item-actions">
              <button onClick={() => handleRemoveMealFromCart(item.id)}>
                -
              </button>
              {item.quantity}
              <button onClick={() => handleAddMealToCart(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-total">{cartTotalValue.toFixed(2)}</div>
      <div className="modal-actions">
        <span className="text-button" onClick={onModalClose}>
          Close
        </span>
        {cartItems.length > 0 && (
          <button className="button" onClick={onCheckout}>
            Go to checkout
          </button>
        )}
      </div>
    </div>
  );
}

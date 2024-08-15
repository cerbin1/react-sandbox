export default function Cart({
  cart,
  total,
  onRemoveFromCart,
  onAddToCart,
  onModalClose,
}) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        <h2>Your Cart</h2>
        {cart.map((item) => (
          <li className="cart-item" key={item.id}>
            <p>
              {item.name} - {item.quantity} x ${item.price}
            </p>
            <div className="cart-item-actions">
              <button onClick={() => onRemoveFromCart(item)}>-</button>
              {item.quantity}
              <button onClick={() => onAddToCart(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-total">{total}</div>
      <div className="modal-actions">
        <span className="text-button" onClick={onModalClose}>
          Close
        </span>
        <button className="button">Go to checkout</button>
      </div>
    </div>
  );
}

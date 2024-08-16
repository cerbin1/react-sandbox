import { useContext } from "react";
import logo from "../assets/logo.jpg";
import CartContext from "../store/CartContext";

export default function Header({ onCartClick }) {
  const cartContext = useContext(CartContext);
  const cartSize = cartContext.items.reduce(
    (count, item) => count + item.quantity,
    0
  );
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <button onClick={onCartClick}>Cart ({cartSize})</button>
    </div>
  );
}

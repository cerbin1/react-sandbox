import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(meal) {
    if (!cart.includes(meal)) {
      setCart([...cart, meal]);
    }
  }

  return (
    <>
      <Header cartLength={cart.length} />
      <Meals onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;

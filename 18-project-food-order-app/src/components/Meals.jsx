import { useContext, useEffect } from "react";
import { useState } from "react";
import CartContext from "../store/CartContext";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const cartContext = useContext(CartContext);

  useEffect(() => {
    async function fetchMeals() {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setMeals(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
    fetchMeals();
  }, []);

  function handleAddMealToCart(meal) {
    cartContext.addItem(meal);
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && meals && (
        <ul id="meals">
          {meals.map((meal) => (
            <li className="meal-item" key={meal.id}>
              <article>
                <img
                  src={`http://localhost:3000/${meal.image}`}
                  alt={meal.name}
                />
                <div>
                  <h3>{meal.name}</h3>
                  <span className="meal-item-price">{meal.price}</span>
                  <p className="meal-item-description">{meal.description}</p>
                </div>
                <div className="meal-item-actions">
                  <button
                    className="button"
                    onClick={() => handleAddMealToCart(meal)}
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </>
  );
}

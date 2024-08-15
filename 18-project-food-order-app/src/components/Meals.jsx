import { useEffect } from "react";
import { useState } from "react";

export default function Meals({ onAddToCart }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

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
                  <button className="button" onClick={() => onAddToCart(meal)}>
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

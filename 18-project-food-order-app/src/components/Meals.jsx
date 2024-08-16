import { useContext } from "react";
import CartContext from "../store/CartContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  const cartContext = useContext(CartContext);

  function handleAddMealToCart(meal) {
    cartContext.addItem(meal);
  }

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <>
      {meals && (
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
    </>
  );
}

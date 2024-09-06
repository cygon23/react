import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  //used to prevent app from crash and to wait to receive data from api
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c346e9e23fca42bb8cea5c2a11ee8c62";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recepeName}>{food.title}</h1>
        <img className={styles.recepeImage} src={food.image} alt="" />

        <div className={styles.recepeDetails}>
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "Vegetarian" : "Non vegetarian"}</span>

          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>

        <div>
          $<span>{food.pricePerServing}</span>
        </div>

        {food.extendedIngredients.map((item) => (
          <div>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
              alt=""
            />
            <h2>{item.name}</h2>
            <h3>{item.amount} {item.unit}</h3>
          </div>
        ))}

        <h2>Instructions</h2>
        <div className={styles.resepeInstructions}>
          <ol className={styles.resepeInstructions}>
            {isLoading ? (
              <p>Loading.....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li className={styles.resepeInstructions} key={step.foodId}>
                  {step.step}
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

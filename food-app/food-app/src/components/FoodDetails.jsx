import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "20e4800974694e6b8ca403b0e20c135d"; // API key should be a string
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
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt={food.title} />
      </div>
      <span>
        <strong>{food.readyInMinutes}Minutes</strong>
      </span>
      <span>Serves: {food.serving}</span>
      <span>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
      <span>{food.vegan ? "Vegan" : " "}</span>
      <div>
        $<span>{food.pricePerServing} Per Serving</span>
      </div>
      <div>
        Instructions:
        {isLoading? <p>Loading....</p>:food.anaysedInstructions[0].steps.map((step) => (
          <li>{step.step}</li>
        ))}
       
      </div>
    </div>
  );
}

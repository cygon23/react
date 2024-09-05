import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c346e9e23fca42bb8cea5c2a11ee8c62";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
       
        <div>
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "Vegetarian" : "Non vegetarian"}</span>

          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>
      </div>
       <div>
        $<span>{food.pricePerServing}</span>
       </div>
    </div>
  );
}

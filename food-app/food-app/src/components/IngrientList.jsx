import Ingredient from "./Ingredient";

export default function IngrientList({food,isLoading}) {
  return (
    <div>
        {/* {isLoading?<p>Loading...</p>:} */}
      {food?.extendedIngredients?.map((item) => (
        <Ingredient item={item} />
      ))}
    </div>
  );
}

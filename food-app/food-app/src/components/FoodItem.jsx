export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.image} alt="" />
      <h5>{food.title}</h5>
      <button>View Prop</button>
    </div>
  );
}

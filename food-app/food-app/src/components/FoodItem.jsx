import styles from "./fooditem.module.css";
export default function FoodItem({ food,setFoodId }) {
  return (
    <div className={styles.temContainer}>
      <img className={styles.ItemImages} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={()=>{
           setFoodId(food.id)
        }} className={styles.itemButton}>View Prop</button>
      </div>
    </div>
  );
}

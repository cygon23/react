import styles from './igredient.module.css';
export default function Ingredient({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
            alt=""
          />
        </div>

        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}

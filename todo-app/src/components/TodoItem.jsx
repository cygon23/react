import styles from "./todoItem.module.css";

export default function TodoList({ item, todos, setTodos }) {
  function handleDelete(item) {
    // Ensure item comparison is based on a unique property like ID
    setTodos(todos.filter((todo) => todo.name !== item.name));
  }

  // handling status
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    )
    setTodos(newArray)
  }

  // Safely handle conditional class name s
  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)} 
            className={styles.deleteBtn}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

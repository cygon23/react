import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {

    /*
  for sorting the slice technique is what being used to take a copy from 
  the origal one 
  */
 const sortTodos = todos.slice().sort((a,b) => Number(a.done)- Number(b.done))
  return (
    <div className={styles.list}>
      {sortTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

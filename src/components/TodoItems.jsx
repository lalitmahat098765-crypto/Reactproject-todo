import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/store-todo-item";

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);
  console.log(todoItems);
  return (
    <div className={styles.todoItems}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          todoname={item.name}
          tododate={item.date}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;

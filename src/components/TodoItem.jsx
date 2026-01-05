import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/store-todo-item";

function TodoItem({ todoname, tododate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className={`${styles.kgContainer} container`}>
      <div className="row">
        <div className="col-6 todo-item">{todoname}</div>
        <div className="col-4 todo-item">{tododate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoname)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;

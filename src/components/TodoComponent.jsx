import { useRef } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/store-todo-item";
import { BiMessageAdd } from "react-icons/bi";

function TodoComponent() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  const handleButtonChange = (event) => {
    event.preventDefault();
    const newItem = todoNameElement.current.value;
    const newDueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(newItem, newDueDate);
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleButtonChange}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" type="submit">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoComponent;

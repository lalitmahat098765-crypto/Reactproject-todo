import AppName from "./components/AppName";
import TodoComponent from "./components/TodoComponent";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/store-todo-item";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewTodoItem = (todoName, todoDueDate) => {
    const newTodoItem = (currValue) => [
      ...currValue,
      { name: todoName, date: todoDueDate },
    ];
    setTodoItems(newTodoItem);
  };

  const deleteTodoItem = (todoname) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoname);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewTodoItem,
        deleteTodoItem,
      }}
    >
      <center>
        <AppName />
        <TodoComponent />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

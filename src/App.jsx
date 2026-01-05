import AppName from "./components/AppName";
import TodoComponent from "./components/TodoComponent";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState, useReducer } from "react";
import { TodoItemsContext } from "./store/store-todo-item";
import { use } from "react";

function todoItemReducer(currTodoItem, action) {
  let newTodoItem = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItem,
      { name: action.payload.newItem, date: action.payload.newDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currTodoItem.filter(
      (item) => item.name !== action.payload.newItem
    );
  }
  return newTodoItem;
}

function App() {
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const addNewItem = (newItem, newDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        newItem,
        newDueDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const deleteItem = (newItem) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        newItem,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
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

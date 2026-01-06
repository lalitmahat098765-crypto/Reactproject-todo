import { useReducer, createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

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

export const TodoItemContextProvider = ({ children }) => {
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
      {children}
    </TodoItemsContext.Provider>
  );
};

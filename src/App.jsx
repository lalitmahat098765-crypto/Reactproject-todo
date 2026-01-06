import AppName from "./components/AppName";
import TodoComponent from "./components/TodoComponent";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { TodoItemContextProvider } from "./store/store-todo-item";

function App() {
  return (
    <TodoItemContextProvider>
      <center>
        <AppName />
        <TodoComponent />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemContextProvider>
  );
}

export default App;

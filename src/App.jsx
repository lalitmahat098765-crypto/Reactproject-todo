import AppName from "./components/AppName"
import TodoComponent from "./components/TodoComponent"
import TodoItems from "./components/TodoItems"
import "./App.css"

function App(){
  const todoItems =[{
    name:"Buy Milk",
    date:"4/10/2023"},
    {
      name:"Go to College",
      date:"4/10/2023"
    },
  {
      name:"Like the Work",
      date:"4/10/2023"
    },
  { 
      name:"Good Work",
      date:"4/10/2023"
  }]
  return(
      <center>
        <AppName />
        <TodoComponent />
        <TodoItems todoitems={todoItems} /> 
      </center>
  )
}

export default App

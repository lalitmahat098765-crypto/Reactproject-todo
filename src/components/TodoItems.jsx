import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"
function TodoItems({todoitems}){
    return(
    <div className={styles.todoItems}>
            {todoitems.map(item => (<TodoItem todoname={item.name} tododate={item.date}></TodoItem>))}
        </div>
    )
}

export default TodoItems;
import styles from "./TodoItem.module.css"

function TodoItem({todoname, tododate}){
    return(
        <div className="container kg-container">
            <div className="row">
                <div className="col-6 todo-item">{todoname}</div>
                <div className="col-4 todo-item">{tododate}</div>
                <div className="col-2"><button className="btn btn-danger kg-button">Delete</button></div>
            </div>
    </div>
    )
}
export default TodoItem;
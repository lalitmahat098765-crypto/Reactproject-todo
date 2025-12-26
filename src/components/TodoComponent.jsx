function TodoComponent(){
    return(
        <div className="container text-center">
          <div className="row">
            <div className="col-6"><input type="text" name="" id=""placeholder="Enter Todo Here"/></div>
            <div className="col-4"><input type="date" name="" id="" /></div>
            <div className="col-2"><button className="btn btn-success kg-button">Add</button></div>
          </div>
        </div>
    ) 
}

export default TodoComponent;
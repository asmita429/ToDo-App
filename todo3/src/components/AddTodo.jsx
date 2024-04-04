import styles from "./AddTodo.module.css";
import { useState } from "react";

function AddTodo({onNewItem}) {

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) =>{
    setDueDate(event.target.value);
  };
  const handdleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input 
            className={styles.input} 
            type="text" 
            placeholder="Enter Todo Here" 
            onChange={handleNameChange}
            value={todoName}   
          />
        </div>
        <div className="col-4">
          <input 
            className={styles.input} 
            type="date" 
            onChange={handleDateChange}
            value={dueDate}
          />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" 
          onClick={handdleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
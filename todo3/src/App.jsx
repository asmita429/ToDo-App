import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelocomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Coding",
  //     dueDate: "4/4/2024",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`new item added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems, 
      {name:itemName, dueDate: itemDueDate}];
      setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    // console.log(`Item deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter(item => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems 
        todoItems={todoItems} 
        onDeleteClick={handleDeleteItem} 
      />
      
    </center>
  );
}

export default App;

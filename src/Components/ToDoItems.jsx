import React, { useContext } from "react";
import Data from "./Data";
import { TodoItemsContext } from "../store/todo-items-store";

function ToDoItems() {
  
  const {itemList} = useContext(TodoItemsContext)


  
  return (
    <>
      {itemList.map((item, index) => (
        <Data
          key={index}
          toDoItem={item.todo}
          toDoDate={item.todate}
        />
      ))}
    </>
  );
}

export default ToDoItems;

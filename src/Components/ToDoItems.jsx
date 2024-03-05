import React from "react";
import Data from "./Data";

function ToDoItems({ todoI, deleteItem }) {
  return (
    <>
      {todoI.map((item, index) => (
        <Data
          key={index}
          toDoItem={item.todo}
          toDoDate={item.todate}
          deleteToDoItem={deleteItem}
        />
      ))}
    </>
  );
}

export default ToDoItems;

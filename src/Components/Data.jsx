import React, { useContext } from "react";
import StyleData from "./Data.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function Data({ toDoItem, toDoDate}) {
  const {deleteItem} = useContext(TodoItemsContext)
  
  return (
    <>
      <div
        className={`${StyleData["dataContainer"]}  data rounded-md flex justify-around gap-x-3 items-center px-10 py-5  w-4/5 `}
      >
        <div
          className={`${StyleData["data-align"]} min-w-20 text-[12px] w-fit rounded-md  h-fit   text-black`}
        >
          {toDoItem}
        </div>
        <div
          className={`${StyleData["data-align"]} min-w-20 text-[12px] w-fit rounded-md  h-fit   text-black`}
        >
          {toDoDate}
        </div>
        <i
          className={`${StyleData["buttonContainer"]} bi bi-trash3-fill`}
          onClick={deleteItem}
        ></i>
      </div>
    </>
  );
}

export default Data;

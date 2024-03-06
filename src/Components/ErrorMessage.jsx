import React, { useContext } from "react";
import errMsg from "./ErrorMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function ErrorMessage() {
  const {itemList} = useContext(TodoItemsContext)
  
  
  return (
    <>
      {itemList.length === 0 ? (
        <img
          src="./NoData.jpg"
          alt=""
          className={`${errMsg["errContainer"]}`}
        />
      ) : null}
    </>
  );
}

export default ErrorMessage;

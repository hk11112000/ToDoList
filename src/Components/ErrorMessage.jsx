import React from "react";
import errMsg from "./ErrorMessage.module.css";

function ErrorMessage({ toDoItems }) {
  return (
    <>
      {toDoItems.length === 0 ? (
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

import React, { useState } from "react";
import formStyle from "./Form.module.css";

function Form({ value, addToDoItems }) {
  const [todoName, setToDoName] = useState("");
  const [todoDate, setToDoDate] = useState("");
  const getToDoName = (event) => {
    const newName = event.target.value;
    setToDoName(newName);
  };
  const getToDoDate = (event) => {
    const newDate = event.target.value;
    setToDoDate(newDate);
  };

  const handleAddButtonClicked = () => {
    addToDoItems(todoName, todoDate);
    setToDoDate("");
    setToDoName("");
  };

  return (
    <>
      <div className={`${formStyle["inputMainContainer"]}`}>
        <input
          type="text"
          required
          placeholder="To Do..."
          value={todoName}
          className={`${formStyle["inputContainer"]}`}
          onChange={getToDoName}
        />
        <input
          type="date"
          name="Date"
          required
          id="date"
          value={todoDate}
          className={`${formStyle["inputContainer"]}`}
          onChange={getToDoDate}
        />
        <button
          className="px-[10px] py-5px border-white rounded-md bg-green-400"
          type="submit"
          onClick={handleAddButtonClicked}
        >
          {value}
        </button>
      </div>
    </>
  );
}

export default Form;

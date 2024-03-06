import React, { useState ,useRef,useContext} from "react";
import formStyle from "./Form.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function Form({ value}) {
  const {addNewItem} = useContext(TodoItemsContext)
  
  // const [todoName, setToDoName] = useState("");
  // const [todoDate, setToDoDate] = useState("");
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  // const getToDoName = (event) => {
  //   const newName = event.target.value;
  //   setToDoName(newName);
  //   // numOfClicks.current += 1;
  // };
  // const getToDoDate = (event) => {
  //   const newDate = event.target.value;
  //   // console.log(`Num of clicks are ${numOfClicks.current}`)
  //   setToDoDate(newDate);
  // };

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value
    const todoDate = todoDateElement.current.value
    todoNameElement.current.value = ""
    todoDateElement.current.value = ""
    // console.log(todoDate,todoName)
    addNewItem(todoName, todoDate);
    // setToDoDate("");
    // setToDoName("");
  };

  return (
    <>
      <form
        className={`${formStyle["inputMainContainer"]}`}
        onSubmit={handleAddButtonClicked}
      >
        <input
          type="text"
          placeholder="To Do..."
          ref={todoNameElement}
          // value={todoName}
          className={`${formStyle["inputContainer"]}`}
          // onChange={getToDoName}
        />
        <input
          type="date"
          ref={todoDateElement}
          // value={todoDate}
          className={`${formStyle["inputContainer"]}`}
          // onChange={getToDoDate}
        />
        <button className="px-[10px] py-5px border-white rounded-md bg-green-400">
          {value}
        </button>
      </form>
    </>
  );
}

export default Form;

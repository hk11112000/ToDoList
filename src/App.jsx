import React, { useState } from "react";
import Form from "./Components/Form";
import Heading from "./Components/Heading";
import Data from "./Components/Data";
import appStyle from "./App.module.css";
import ToDoItems from "./Components/ToDoItems";
import ErrorMessage from "./Components/ErrorMessage";
import WelcomeMessage from "./Components/WelcomeMessage";
import FooterContainer from "./Components/FooterContainer";
function App() {
  const toDoItemList = [];

  const [itemList, setItemList] = useState(toDoItemList);

  const addToDo = (itemName, itemDueDate) => {
    if (itemName.length === 0 || itemDueDate.length === 0) {
      console.error(`Please Enter Task and Data`);
    } else {
      // console.log(`New item added: ${itemName} ${itemDueDate}`)
      const newListItem = [
        ...itemList,
        { todo: itemName, todate: itemDueDate },
      ];
      setItemList(newListItem);
      // console.log(itemList);
    }
  };
  const deleteI = (event) => {
    const fetchData = event.target.parentElement.firstChild.innerText;
    // console.log(fetchData)
    const newFetchList = itemList.filter((item) => {
      return item.todo != fetchData;
    });
    // console.log(newFetchList)
    setItemList(newFetchList);
  };

  return (
    <>
      <Heading headingValue="To Do List" />
      <main className={`${appStyle.mainContainer}`}>
        <WelcomeMessage />

        <Form value="Add" addToDoItems={addToDo} />
        <ErrorMessage toDoItems={itemList} />
        <div className="pt-[20px] pb-[10px] flex w-[95%] justify-center gap-1 flex-col m-auto items-center ">
          <ToDoItems todoI={itemList} deleteItem={deleteI} />
        </div>
      </main>
      <FooterContainer />
    </>
  );
}

export default App;

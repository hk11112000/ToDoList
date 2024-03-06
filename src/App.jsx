import React, { useState, useReducer } from "react";
import Form from "./Components/Form";
import Heading from "./Components/Heading";
import appStyle from "./App.module.css";
import ToDoItems from "./Components/ToDoItems";
import ErrorMessage from "./Components/ErrorMessage";
import WelcomeMessage from "./Components/WelcomeMessage";
import FooterContainer from "./Components/FooterContainer";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <>
        <Heading headingValue="To Do List" />
        <main className={`${appStyle.mainContainer}`}>
          <WelcomeMessage />
          <Form value="Add" />
          <ErrorMessage />
          <div className="pt-[20px] pb-[10px] flex w-[95%] justify-center gap-1 flex-col m-auto items-center ">
            <ToDoItems />
          </div>
        </main>
        <FooterContainer />
      </>
    </TodoItemsContextProvider>
  );
}

export default App;

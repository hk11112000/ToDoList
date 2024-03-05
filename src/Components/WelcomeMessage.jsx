import React, { useState } from "react";
import welStyle from "./WelcomeMessage.module.css";

function WelcomeMessage() {
  let value = true;
  const [initVal, setInitValue] = useState(value);

  setTimeout(() => {
    setInitValue(false);
  }, 3000);

  return (
    <>
      {initVal === true ? (
        <p className={`${welStyle["welContainer"]}`}>Welcome to my To Do App</p>
      ) : (
        <img src="/TODO.png" className={`${welStyle["welImage"]}`}></img>
      )}
    </>
  );
}

export default WelcomeMessage;

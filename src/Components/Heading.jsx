import React from "react";
import headingStyle from "./Heading.module.css";

function Heading({ headingValue }) {
  return (
    <h1 className={`${headingStyle["headingContainer"]}`}>{headingValue}</h1>
  );
}

export default Heading;

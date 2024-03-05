import React from "react";
import appStyle from "./FooterContainer.module.css";

function FooterContainer() {
  return (
    <div className={`${appStyle["footerContainer"]}`}>
      <p>
        Made with ❤️ by &nbsp;{" "}
        <a href="https://himanshukarpe.netlify.app/" target="_blank">
          Himanshu Karpe
        </a>
        &nbsp; |&nbsp; <img src="/vite.svg" alt="vite" /> &nbsp; + &nbsp;{" "}
        <img src="/react.svg" alt="" />
      </p>
    </div>
  );
}

export default FooterContainer;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import bookStore from "./bookStore";
import bookFacade from "./bookFacade";

ReactDOM.render(
  <App bookStore={bookStore} bookFacade={bookFacade} />,
  document.getElementById("root")
);

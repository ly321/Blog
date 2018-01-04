import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./components/Home/Home";

import "./assets/scss/reset.scss"
import "./assets/scss/util.scss"

ReactDOM.render(
  <Home/>,
  document.getElementById('root') as HTMLElement
);
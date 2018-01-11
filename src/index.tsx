import * as React from "react";
import * as ReactDOM from "react-dom";
import Index from "./View/Index";

import "./assets/scss/reset.scss"
import "./assets/scss/util.scss"

ReactDOM.render(
  <Index/>,
  document.getElementById('root') as HTMLElement
);
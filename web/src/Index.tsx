import * as React from "react";
import * as ReactDOM from "react-dom";


import "./assets/scss/reset.scss"
import "./assets/scss/util.scss"


import RouterConfig  from './router/router';
class Index extends React.Component<any,any>{
  render () {
      return (
        
          <RouterConfig></RouterConfig>
        
      )
  }
}


ReactDOM.render(
  <Index/>,
  document.getElementById('root') as HTMLElement
);
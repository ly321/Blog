import * as React from 'react';
import "./NavMenu.scss";
export default class NavMenu extends React.Component {
  onSelect() {

  }
  render() {
    return (
      <div className="navMenu">
          <ul className="nav">
              <li><img src="./src/assets/img/logo.png" alt=""/></li>
              <li>File</li>
              <li>Edit</li>
              <li>View</li>
              <li>Respository</li>
              <li>Branch</li>
              <li>Help</li>
          </ul>
          <ul className="setting nav">
            <li><img src="./src/assets/img/minimize.png" alt=""/></li>
            <li><img src="./src/assets/img/maximize.png" alt=""/></li>
            <li><img src="./src/assets/img/close.png" alt=""/></li>
          </ul>
      </div>
    )
  }
}
import * as React from 'react';

import {remote} from 'electron';
import "../assets/scss/menu.scss";
class Menu extends React.Component < any,
any > {
    constructor(props : any) {
        super(props);
    }
    minimize = () => {
        remote
            .getCurrentWindow()
            .minimize();
    }
    maximize = (e:any) => {
        var size = remote
            .getCurrentWindow()
            .getContentSize();
        if (size[0] > 1200 && size[1] > 800) {
            remote
                .getCurrentWindow()
                .unmaximize();
            e.target.className = "iconfont icon-msnui-maximize"
        } else {
            remote
                .getCurrentWindow()
                .maximize();
            e.target.className += " icon-zuidahua2";
        }
    }
    windowClose = () => {
        remote
            .getCurrentWindow()
            .close();
    }
    render() {
        return (
            <div className="menu">
                <div className="avatar">
                    <i className="iconfont icon-github"></i>
                </div>
                <div className="nav">
                    <ul>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Reponsitory</li>
                        <li>Branch</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="window">
                    <i className="iconfont icon-zuixiaohua" onClick={this.minimize}></i>
                    <i className="iconfont icon-msnui-maximize" onClick={this.maximize}></i>
                    <i className="iconfont icon-msnui-close" onClick={this.windowClose}></i>
                </div>
            </div>
        )
    }
}

export default Menu;
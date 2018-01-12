import * as React from 'react';
import "./login.scss";
import {shell,BrowserWindow} from 'electron';
import {Link} from 'react-router-dom';
// import win from '../../../main.js';
// const win=require('../../../main.js');
import 'whatwg-fetch';
class Login extends React.Component<any,any>{
    goGithub(e:any){
        e.preventDefault();
        shell.openExternal('https://github.com/join');
    }
    login(){
        window.location.href='https://github.com/login/oauth/authorize?client_id=0cacf631e36a12692407'; 
    }
    render(){
        return(
            <div className="login">
                <div className="loginBox">
                <p>
                    <img src="./src/assets/img/back-r-o.png" alt=""/>
                    <span>Log in</span>
                </p>
                <div className="inputs">
                    <p>
                        <span>GitHub</span>
                        <span>GitHub Enterprise</span>    
                    </p>
                    <input className="click" type="text" placeholder="Username or email"/>
                    <input className="click" type="text" placeholder="Password"/>
                    <p>The best way to build and ship software. <a className="click" href="#" onClick={this.goGithub}>Go to github.com</a> to sign up for an account</p>
                </div>
                <div className="btns">
                    <a className="click" href="#" onClick={this.login}>
                        <img src="./src/assets/img/complete-r-o.png" alt=""/>
                        <span>Log in</span>
                    </a>
                    <Link className="click" to={{pathname:'/callback'}}> 
                        <img src="./src/assets/img/error-r-o.png" alt=""/>
                        <span>Cancel</span>
                    </Link>
                </div> 
                </div>
            </div>
        )
    }  
}
export default Login;
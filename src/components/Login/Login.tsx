import * as React from 'react';
import "./login.scss";
export default class Login extends React.Component{
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
                    <input type="text" placeholder="Username or email"/>
                    <input type="text" placeholder="Password"/>
                    <p>The best way to build and ship software.<a href="https://github.com/join">Go to github.com</a>to sign up for an account</p>
                </div>
                <div className="btns">
                    <p>
                        <span><img src="./src/assets/img/complete-r-o.png" alt=""/></span>
                        <span>Log in</span>
                    </p>
                    <p> 
                        <span><img src="./src/assets/img/error-r-o.png" alt=""/></span>
                        <span>Cancel</span>
                    </p>
                </div> 
                </div>
            </div>
        )
    }  
}
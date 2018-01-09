import * as React from 'react';
import Login from "../../components/Login/Login"

import "./home.scss";

export default class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="hidden mask-gray"></div>
                <Login></Login>    
            </div>
        )
    }
}
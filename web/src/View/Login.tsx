import * as React from 'react';

import Menu from "../components/Menu";
import Hello from '../components/Hello';
class Login extends React.Component<any,any>{
    render () {
        return (
           <div className="login">
            <Menu />
            <Hello/>
           </div>
        )
    }
}
export default Login;
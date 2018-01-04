import * as React from 'react';
import NavMenu from '../NavMenu/NavMenu'

export default class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <NavMenu></NavMenu>
            </div>
        )
    }
}
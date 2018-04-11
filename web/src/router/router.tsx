import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import createHashHistory from 'history/createBrowserHistory'
const history = createHashHistory();
import Login from '../View/Login';
import Home from '../View/Home';

export default class RouterConfig extends React.Component<any, any>{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={ Login }/>
                    <Route path="/home" component={ Home }/>
                </Switch>
            </Router>
        )
    }
}
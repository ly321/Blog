import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import createHashHistory from 'history/createBrowserHistory'
const history = createHashHistory();
import Home from '../View/Home';

export default class RouterConfig extends React.Component<any, any>{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                </Switch>
            </Router>
        )
    }
}
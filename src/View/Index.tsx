import * as React from 'react';
import {Route,Router,Switch} from 'react-router-dom';
import createHashHistory from 'history/createBrowserHistory'
const history = createHashHistory();

import Home from  './Home/Home';
class Index extends React.Component<any,any>{
    render () {
        return (
            <Router history = {history}>
                    <Switch>
                        <Route path = '/' exact component = {Home}    />
                    
                    </Switch>
            </Router>
        )
    }
}
export default Index;
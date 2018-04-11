import * as React from 'react';

import Menu from '../components/Menu';

class Home extends React.Component<any,any>{
    render () {
        return (
           <div className="home">
                <Menu/>
           </div>
        )
    }
}
export default Home;
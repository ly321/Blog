import * as React from 'react';
import {withRouter} from "react-router-dom";

import axios from 'axios';
import '../assets/scss/hello.scss';

class Hello extends React.Component < any,
any > {
    constructor(props : any) {
        super(props);
        this.state = {
            username: '新用户',
            avatar: "./src/assets/img/avatar.svg"
        }
    }
    async componentDidMount() {
        var query = window.location.search;
        var arr = query.split('&'),
        code = arr[0].replace('?code=', '');
        var res = await axios(`http://localhost:8080/github/oauth/callback?code=${code}`);
        this.setState({avatar: res.data.avatar_url, username: res.data.name})
        window
            .localStorage
            .setItem('avatar', res.data.avatar_url)
        window
            .localStorage
            .setItem('username', res.data.name)
            this.props.history.push('/');
    }
    render() {
        return (
            <div className="hello">
                <div className="info">
                    <a href="http://localhost:8080/github/login"><img src={this.state.avatar} alt=""/></a>
                    <p className="username">{this.state.username}</p>
                </div>
                <div className="bottom">
                    Hello World
                </div>
            </div>

        )
    }
}

export default withRouter(Hello);
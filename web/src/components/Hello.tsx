import * as React from 'react';

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
    componentDidMount() {
        var query = window.location.search;
        if (query) {
            var arr = query.split('&'),
                code = arr[0].replace('?code=', "");
            axios(`http://localhost:8080/github/oauth/callback?code=${code}`).then((res : any) => {
                console.log(res);
                this.setState({avatar: res.data.avatar_url, username: res.data.name})

            }).catch((err : any) => {
                console.log(err);
            })
        }
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

export default Hello;
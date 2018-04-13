import * as React from 'react';
import {withRouter} from "react-router-dom";

import Menu from '../components/Menu';

import axios from 'axios';
import * as utf8 from 'utf8';
import * as base64 from 'base-64';
class Home extends React.Component < any,
any > {
    constructor(props : any) {
        super(props);
        this.state = {
            html: ''
        }
    }
    async componentDidMount() {
        var query = window.location.search;
        if (query) {
            var arr = query.split('&'),
                code = arr[0].replace('?code=', '');
            this
                .props
                .history
                .push(`/login?code=${code}`);
        } else {
            var avatar = window
                    .localStorage
                    .getItem('avatar'),
                username = window
                    .localStorage
                    .getItem('username');
            if (!avatar && !username || avatar === undefined && username === undefined) {
                window.location.href = "http://localhost:8080/github/login"
            } else {
                try {
                    var username =window.localStorage.getItem('username'),
                        url=`https://api.github.com/repos/${username}/${username.toLocaleLowerCase()}.github.io/contents/index.html`,
                        response= await axios(url);
                        var data =utf8.decode(base64.decode(response.data.content));
                        console.log(response);
                        
                        
                    this.setState({
                        html:data
                    })
                    } catch (error) {
                        console.log(error);
                    }
                }
            }

        }
        render() {
            return (
                <div className="home">
                    <Menu/>
                    <iframe srcDoc={this.state.html}></iframe>
                    
                </div>
            )
        }
    }
    export default withRouter(Home);

import * as React from 'react';
import {withRouter} from "react-router-dom";

import Menu from '../components/Menu';

import axios from 'axios';

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
            if (avatar && username && avatar !== undefined && username != undefined) {
                try {
                    var response = await
                        axios('https://api.github.com/users/sillyY/repos'),
                        repo = response
                            .data
                            .filter((data : any) => {
                                var name=`${username.toLowerCase()}.github.io`;
                                return data.name === name;
                            }),
                        blog= repo[0];
                        console.log(blog);
                        
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    window.location.href = "http://localhost:8080/github/login"
                }
            }

        }
        render() {
            return (
                <div className="home">
                    <Menu/>
                    1111
                </div>
            )
        }
    }
    export default withRouter(Home);

import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Users extends Component {

    constructor() {
        super();

        this.state = {
            users: [],
        };
    }

    componentDidMount() {

        async function fetchAsync () {
            return await (await fetch('http://127.0.0.1:8000/api/v1/users')).json();
        }

        fetchAsync().then(data => {
                    this.setState({ users: data.data })
                })
    }

    renderUsers() {

        return this.state.users.map(user => {
            return (
                <li key={user.id} >
                    { user.name }
                    <img src = {user.avatar} ></img>
                    { user.short_description }
                    {<Link to={`/detail/${user.id}`}>detail</Link>}
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

export default Users;



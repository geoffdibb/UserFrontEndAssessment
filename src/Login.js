import React, { Component } from 'react';
import axios from 'axios';


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            Username: "",
            Password: "",
            data: ""
        }
    }


    getone = (e) => {
        e.preventDefault();
        let newItem = {
            username: e.target[0].value,
            password: e.target[1].value
        }


        axios
            .get("http://localhost:5000/User/name/" + newItem.username + "/" + newItem.password)
            .then(response => {
                this.setState({
                    data: response.data
                });
            }).catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <form onSubmit={this.getone}>

                    <br></br>
                    <label for="Username">Username: </label>
                    <input type="text" id="Username" name="Username" required />
                    <br></br>

                    <label for="Password">Password: </label>
                    <input type="Password" id="Password" name="Password" required />
                    <br></br>

                    <input type="submit" value="Login" />
                    <p id="systemResponse"> </p>
                </form>

                {this.state.data.Status}

            </div>
        )

    }
}
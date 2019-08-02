import React, { Component } from 'react';
import axios from 'axios';


export default class Register extends Component {

    constructor() {
        super();
        this.state = {
            data: ""
        }
    }

    makeRequest = (event) => {
        event.preventDefault();
        let newItem = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            password2: event.target[3].value
        }

        axios
            .post("http://localhost:5000/User/createUser", newItem)
            .then(response => {
                this.setState({
                    data: response.data
                });
                // window.alert(this.state.data.password, this.state.data.username, this.state.data.email)
            }).catch(err => console.log(err));
            
    };


    checkpass = () => {
  if (this.state.data.password==="Passwords do not match") {

    return <div>{this.state.data.password}</div>
  }
}
    render() {
        return (

            <div >
                    
                <h2>Register a new account </h2>
                <form onSubmit={this.makeRequest}>

                    <br></br>
                    <label for="Username">Username: </label>
                    <input type="text" id="Username" name="Username" required />
                    <br></br>

                    <label for="Email">Email: </label>
                    <input type="Email" id="Email" name="Email" required />
                    <br></br>

                    <label for="Password">Password: </label>
                    <input type="Password" id="Password" name="Password" required />
                    <br></br>

                    <label for="Password2">Confirm Password: </label>
                    <input type="Password" id="Password2" name="Password2" />
                    <br></br>

                    <input type="submit" value="RegisterAccount" />
                    <p id="systemResponse"> </p>
                </form>

            {this.checkpass()}
                <br />
                {this.state.data.email}

            </div>
        );
    }
}

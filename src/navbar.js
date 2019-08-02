import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./Register";
import ViewUsers from "./ViewUsers";
import Home from "./Home";
import Login from "./Login";

export class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    render() {
        return (



            <div>
                <h1 backgroundcolor="black">Home
                  </h1>
                <Router>
                    <button>
                        <Link to="/Home">Home</Link>
                    </button>
                    <button>
                        <Link to="/Register">RegisterAccount</Link>
                    </button>
                    <button>
                        <Link to="/Login">Login</Link>
                    </button>
                    <button>
                        <Link to="/ViewUsers">View All Accounts</Link>
                    </button>
                    <Route path="/Home" render={(props) => <Home passedFunction={this.onLoad} dataSent={this.state.data} />} />

                    <Route path="/Register" render={(props) => <Register passedFunction={this.onLoad} dataSent={this.state.data} />} />
                    <Route path="/Login" render={(props) => <Login passedFunction={this.onLoad} dataSent={this.state.data} />} />
                    <Route path="/ViewUsers" render={(props) => <ViewUsers passedFunction={this.onLoad} dataSent={this.state.data} />} />



                </Router>
            </div>
        )
    }
}
export default Navbar;
import React, { Component } from 'react';
import Users from "./Users";
import axios from 'axios';
import { Table } from 'reactstrap';


export default class viewUsers extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getall = () => {

        axios
            .get("http://localhost:5000/User/all")
            .then(response => {
                this.setState({
                    data: response.data
                });
            }).catch(err => console.log(err));
    };

    componentDidMount() {
        this.getall();
    }


    render(props) {
        return (
            <div class="formDiv">
                <div id="random"> </div>
                <h2>Users</h2>
                <Table>
                        {this.state.data.map((item) => (

                                 <Users key={item.username} passedFunction={this.props.passedFunction} username={item.username}/>       

                        ))}
                </Table>
            </div>

        );
    }
}


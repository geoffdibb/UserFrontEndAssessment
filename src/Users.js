import React, { Component } from 'react';
import { Table } from 'reactstrap';



class Recipe extends Component {

    render() {

        return (

            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "white" }}>


                <Table >

                    <tbody><tr></tr>
                        <tr>
                            <td>{this.props.username}
                            </td>
                        </tr>


                    </tbody>

                </Table>

            </div>

        )
    }
}

export default Recipe;

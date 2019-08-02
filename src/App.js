import React, { Component } from 'react';
import './App.css';


import Navbar from "./navbar";
export class App extends Component {

  render() {
    return (
      <div  style={{ display: 'flex', justifyContent: 'center', backgroundColor: "black", color: "white" }}>
        <Navbar/>

        
      </div>
    );
  }


}

export default App;
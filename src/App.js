import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;

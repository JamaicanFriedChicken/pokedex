import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../layout/pokedex.png";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <img src={logo} height="30" width="150" />
        </nav>
      </div>
    );
  }
}

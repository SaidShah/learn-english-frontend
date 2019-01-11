import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarLoggedOut extends Component {
  render() {
    return (
      <>
        <li>
          <Link to="/signup">
            <span className="glyphicon glyphicon-user" /> Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span className="glyphicon glyphicon-log-in" /> Login
          </Link>
        </li>
      </>
    );
  }
}

export default NavBarLoggedOut;

import React, { Component } from "react";
import NavBarLoggedIn from "./NavBarLoggedIn";
import NavBarLoggedOut from "./NavBarLoggedOut";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-blue text-color">
          <div className="container-fluid ">
            <div className="navbar-header">
            <a className="navbar-brand text-color" href="/">
            ZaiN
            </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">
                  <span className="glyphicon glyphicon-home" /> Home
                </Link>
              </li>
              </ul>
              <ul className="nav navbar-nav navbar-right padding-right-navbar">
              {this.props.user.id ? <NavBarLoggedIn browserProps={this.props}/> : <NavBarLoggedOut />}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
  return{user: state.user}
}

export default connect(mapStateToProps)(Navbar);

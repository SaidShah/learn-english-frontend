import { Link, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {logout} from '../../redux/thunk/usersThunk'

import React, { Component } from 'react';

class NavBarLoggedIn extends Component {

  logout=(e)=>{

    this.props.logout()
    this.props.browserProps.browserProps.history.push("/")
  }

  render() {
    console.log(this.props);
    return (
      <>
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="/activities">Activities
        <span className="caret"></span>
        </a>
        <ul className="dropdown-menu ">
          <li><a href="/level1">Level 1</a></li>
          <li><a href="/level2">Level 2</a></li>
          <li><a href="/level3">Level 3</a></li>
        </ul>
      </li>
      <li>
        <Link to="/speech">
          <span className="glyphicon glyphicon-volume-up" /> Practice Speech
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <span className="glyphicon glyphicon-pushpin" /> Profile
        </Link>
      </li>
      <ul className="nav navbar-nav navbar-right">
      <li>
        <Link to="/" onClick={(e)=>this.logout(e)}>
          <span className="glyphicon glyphicon-log-out" /> Log out
        </Link>
      </li>
      </ul>
    </>


    );
  }

}

const mapDispatchToProps =(dispatch)=>{
  return {
    logout: (e)=>dispatch(logout(e))
  }
}

export default connect(null,mapDispatchToProps)(NavBarLoggedIn);

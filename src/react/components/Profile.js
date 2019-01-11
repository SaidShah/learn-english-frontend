import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Profile extends Component {

  render() {
    return (
      <div>
      {this.props.user ? <h2>Profile Page</h2>





        : <Redirect to="/"/>}

      </div>
    )

  }

}

export default Profile;

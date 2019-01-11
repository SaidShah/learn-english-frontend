// import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import WholePageContainer from './react/containers/WholePageContainer'
import './App.css';
import {withRouter, Redirect} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <WholePageContainer/>
      </div>
    );
  }
}

export default withRouter(App);

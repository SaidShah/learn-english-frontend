import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import {Switch, Route, withRouter} from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'
import LogInForm from '../components/LogInForm'
import Profile from '../components/Profile'
import Home from '../components/Home'
import SpeechContainer from './SpeechContainer'
import Level1 from './Level1'
import Level2 from './Level2'


class WholePageContainer extends Component {


  render() {

    return (
      <div>
      <div  className="app gray-background">
        <Navbar browserProps={this.props}/>
      </div>
        <div>
        <Switch>
         <Route  path="/signup" render={()=><SignUpForm browserProps={this.props}/>}/>
         <Route  path="/speech" render={()=><SpeechContainer browserProps={this.props}/>}/>
         <Route  path="/login" render={()=><LogInForm browserProps={this.props}/>}/>
         <Route  path="/profile" render={()=><Profile/>}/>
         <Route  path="/level1" render={()=><Level1 browserProps={this.props} />}/>
         <Route  path="/level2" render={()=><Level2 browserProps={this.props} />}/>
         <Route exact path="/" render={()=><Home/>}/>
        </Switch>
        </div>
      </div>
    );
  }

}


export default withRouter(WholePageContainer);

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signUp} from '../../redux/action/userActions'
import {createUser} from '../../redux/thunk/usersThunk'
import {Redirect} from 'react-router-dom'

class SignUpForm extends Component {
  state={
    first_name: '',
    last_name: '',
    age: '',
    username: '',
    password: ''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit=(e,user)=>{
    e.preventDefault()
    this.props.createUser(user)
    this.props.browserProps.history.push("/")
  }


  render() {

    return (
      <div className="center-div">
      <div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Sign Up To Continue</h1>
            <div className="account-wall">
                <img className="profile-img" src="" alt=""/>
                <form className="form-signin form-padding" onSubmit={(e)=>{this.handleSubmit(e,this.state)}}>
                <input type="text" className="form-control  form-padding" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange} required autoFocus/>
                <input type="text" className="form-control  form-padding" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange}  required autoFocus/>
                <input type="number" className="form-control form-padding" placeholder="Age" name="age" value={this.state.age}
                 onChange={this.handleChange}  required autoFocus/>
                <input type="text" className="form-control form-padding" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}  required autoFocus/>
                <input type="password" className="form-control form-padding" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}  required/>
                <button className="btn btn-lg btn-primary btn-block form-control" type="submit">
                    Create Account</button>
                <label className="checkbox pull-left clearfix checkbox-padding">
                    <input type="checkbox" value="remember-me"/>
                    Remember me
                </label>
                <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    );
  }

}


const mapDispatchToProps =(dispatch)=>{
  return{
      createUser: (e)=> dispatch(createUser(e))
  }
}

export default connect(null,mapDispatchToProps)(SignUpForm)

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {editUser} from '../../redux/thunk/usersThunk'
import logo from '../../images/logo.png'

class Profile extends Component {
  state={
    first_name: '',
    last_name: '',
    age: '',
    username: ''
  }

  componentDidMount() {
    this.setState({...this.props.user})
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.editUser(this.state)
  }

  render() {
    return (
      <div>
      {this.props.user.id ?

        <div className="container">
      <div className="row">
          <div className="col-sm-6 col-md-4 col-md-offset-4">
              <h1 className="text-center login-title">Profile</h1>
              <div className="account-wall">
                  <img className="profile-img" src={logo} alt=""/>
                  <form className="form-signin form-padding" onSubmit={(e)=>{this.handleSubmit(e,this.state)}}>
                  <input type="text" className="form-control  form-padding" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange} required autoFocus/>
                  <input type="text" className="form-control  form-padding" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange}  required autoFocus/>
                  <input type="number" className="form-control form-padding" placeholder="Age" name="age" value={this.state.age}
                   onChange={this.handleChange}  required autoFocus/>
                  <input type="text" className="form-control form-padding" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}  required autoFocus/>
                  <button className="btn btn-lg btn-primary btn-block form-control" type="submit">
                      Create Account</button>
                  <label className="checkbox pull-left clearfix checkbox-padding">
                      <input type="checkbox" value="remember-me"/>
                      Remember me
                  </label>
                  </form>
              </div>
          </div>
      </div>
  </div>

        : <Redirect to="/"/>}

      </div>
    )

  }

}

const mapStateToProps =(state) =>{
  return {user: state.user}
}

const mapDispatchToProps =(dispatch)=>{
  return {editUser: (e)=>dispatch(editUser(e))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

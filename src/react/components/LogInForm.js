import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/thunk/usersThunk";
import logo from "../../images/logo.png";

class LogInForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.props.browserProps.history.push("/");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Sign Up To Continue</h1>
            <div className="account-wall">
              <img className="profile-img" src={logo} alt="" />
              <form
                className="form-signin form-padding"
                onSubmit={e => {
                  this.handleSubmit(e);
                }}
              >
                <input
                  type="text"
                  className="form-control form-padding"
                  placeholder="Username"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  required
                  autoFocus
                />
                <input
                  type="password"
                  className="form-control form-padding"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  required
                />
                <button
                  className="btn btn-lg btn-primary btn-block form-control"
                  type="submit"
                >
                  Create Account
                </button>
                <label className="checkbox pull-left clearfix checkbox-padding">
                  <input type="checkbox" value="remember-me" />
                  Remember me
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: e => dispatch(login(e))
  };
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);

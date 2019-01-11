import React, { Component } from 'react';

class LogInForm extends Component {

  render() {
    return (
      <div className="center-div">
      <div className="container">
        <div className="row">
        <div className="col-sm-6 col-md-6 col-md-offset-4">
            <h1 className="text-center login-title">Sign Up To Continue</h1>
            <div className="account-wall">
                <img className="profile-img" src="" alt=""/>
                <form className="form-signin form-padding">
                <input type="text" className="form-control form-padding" placeholder="Username" name="username" required autoFocus/>
                <input type="password" className="form-control form-padding" placeholder="Password" required/>
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

export default LogInForm;

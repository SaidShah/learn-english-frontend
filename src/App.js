// import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import WholePageContainer from "./react/containers/WholePageContainer";
import "./App.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { resetUser } from "./redux/thunk/usersThunk";
import Footer from "./react/components/Footer";

class App extends Component {
  resetUser = () => {
    this.props.resetUser(localStorage.token);
  };

  render() {
    return (
      <div>
        {!this.props.user.id && localStorage.token ? this.resetUser() : null}
        <WholePageContainer />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { resetUser: e => dispatch(resetUser(e)) };
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

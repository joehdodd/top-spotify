import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../state/actions/auth";
import { Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  handleAuth = () => {
    const { authenticate } = this.props;
    authenticate();
  };

  render() {
    return (
      <div className="App">
        <Route path="/login" exact render={props => <Login {...props} />} />
        <Route path="/" exact render={props => <Main {...props} />} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => {
      return dispatch(authenticate());
    }
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

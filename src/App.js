import React from "react";
import { connect } from "react-redux";
import { authenticate } from "./state/actions/auth";
import { Route } from "react-router-dom";
import Main from "./Main";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    if (this.state.isLoggedIn) {
      console.log("logged in");
    } else {
      console.log("not logged in");
    }
  }

  handleAuth = () => {
    const { authenticate } = this.props;
    authenticate();
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/login"
          exact
          render={props => (
            <>
              <h1>Your Top Spotify</h1>
              <button onClick={() => this.handleAuth()}>Log In</button>
            </>
          )}
        />
        <Route path="/" exact render={props => <Main {...props} />} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => {
      return dispatch(authenticate());
    },
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

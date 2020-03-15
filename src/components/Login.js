import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../state/actions/auth";
import "./Login.css";

const spotifyLogo = require("../assets/Spotify_Icon_RGB_White.png");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleAuth = () => {
    const { authenticate } = this.props;
    authenticate();
  };
  render() {
    return (
      <div className="login-container">
        <div className="login-title-container">
          <img
            src={spotifyLogo}
            className="spotify-logo-login"
            alt="Spotify Logo"
          />
          <h1>Top Spotify</h1>
        </div>
        <button onClick={() => this.handleAuth()}>Log in With Spotify</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

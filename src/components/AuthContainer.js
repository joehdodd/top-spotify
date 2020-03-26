import React from "react";
import { connect } from "react-redux";
import { setAuth } from "../state/actions/auth";

class AuthContainer extends React.Component {
  componentDidMount() {
    const { hash } = this.props.location;
    this.props.setAuth(hash);
  }

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = dispatch => {
  return {
   setAuth: (token) => {
      return dispatch(setAuth(token));
    }
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../state/actions/auth";
import { Route, Switch } from "react-router-dom";
import AuthContainer from "./AuthContainer";
import SideBar from "./SideBar";
import Login from "./Login";
import ArtistsContainer from "./Artists/ArtistsContainer";
import ArtistContainer from "./Artists/ArtistContainer";
import "./App.css";

const MainContainer = props => (
  <div className="main-container">{props.children}</div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" exact render={props => <Login {...props} />} />
          <AuthContainer>
            <Route
              path="/"
              exact
              render={props => (
                <MainContainer>
                  <SideBar />
                  <ArtistsContainer {...props} />
                </MainContainer>
              )}
            />
            <Route
              path="/artist/:artistId"
              exact
              render={props => (
                <MainContainer>
                  <SideBar />
                  <ArtistContainer {...props} />
                </MainContainer>
              )}
            />
          </AuthContainer>
        </Switch>
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

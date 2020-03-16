import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../state/actions/auth";
import { Route, Link } from "react-router-dom";
import SideBar from "./SideBar";
import Login from "./Login";
import ArtistsContainer from "./ArtistsContainer";
import ArtistContainer from "./ArtistContainer";
import "./App.css";



const MainContainer = props => (
  <div className="main-container">{props.children}</div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        <Route path="/login" exact render={props => <Login {...props} />} />
        <Route
          path="/artists"
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

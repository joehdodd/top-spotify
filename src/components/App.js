import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../state/actions/auth";
import { Route, Switch } from "react-router-dom";
import AuthContainer from "./AuthContainer";
import SideBar from "./SideBar";
import Login from "./Login";
import InsightsContainer from "./Insights/InsightsContainer";
import ArtistsContainer from "./Artists/ArtistsContainer";
import ArtistContainer from "./Artists/ArtistContainer";
import "./App.css";

const MainContainer = props => (
  <div className="main-container">{props.children}</div>
);

// const ArtistsAuthContainer = props => {
//   return (
//     <AuthContainer {...props}>
//       <MainContainer>
//         <SideBar />
//         <div>
//           <InsightsContainer {...props} />
//           <ArtistsContainer {...props} />
//         </div>
//       </MainContainer>
//     </AuthContainer>
//   );
// };

const ArtistsAuthContainer = props => {
  return (
    <AuthContainer {...props}>
      <MainContainer>
        <SideBar />
        <ArtistsContainer {...props} />
      </MainContainer>
    </AuthContainer>
  );
};

const ArtistAuthContainer = props => {
  return (
    <AuthContainer {...props}>
      <MainContainer>
        <SideBar />
        <ArtistContainer {...props} />
      </MainContainer>
    </AuthContainer>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/artist/:artistId"
            render={props => <ArtistAuthContainer {...props} />}
          />
          <Route
            path="/"
            exact
            render={props => <ArtistsAuthContainer {...props} />}
          />
          <Route path="/login" render={props => <Login {...props} />} />
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

import React from "react";
import { connect } from "react-redux";
import { fetchArtists } from "../../state/actions/artists";
import { setAuth } from "../../state/actions/auth";
import Artists from "./Artists";
import "./Artists.css";

class ArtistsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      expires: null
    };
  }

  handleFetch = token => {
    this.props.fetchArtists(token);
  };

  componentDidMount() {
    const { token } = this.props;
    if (!!token) {
      this.handleFetch(token);
    }
  }

  componentDidUpdate(pP) {
    if (!pP.fetchError && !!this.props.fetchError) {
      this.props.history.push("/login");
    }
    if (!pP.token && pP.token === null && !!this.props.token) {
      this.handleFetch(this.props.token);
    }
  }

  render() {
    const { artists } = this.props;
    return (
      <div className="artists-cards-wrapper">
        <section className="artist-cards-container">
          {!!artists && !!artists.length && <Artists artists={artists} />}
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: token => {
      return dispatch(fetchArtists(token));
    },
    setAuth: hash => {
      return dispatch(setAuth(hash));
    }
  };
};

const mapStateToProps = state => {
  return {
    artists: state.artists.artists,
    fetchError: state.artists.fetchArtistsError,
    token: state.auth.tokenConfig.token
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsContainer);

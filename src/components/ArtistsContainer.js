import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchArtists } from "../state/actions/artists";
import "./Artists.css";

const Artists = ({ artists }) => {
  return (
    <>
      {artists.map(artist => (
        <div className="artist-card" key={artist.id}>
          <Link to={`/artist/${artist.id}`}>
            <img src={artist.images[2].url} alt="Artist" />
            <h3>{artist.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};

const getTokenConfig = (hash, time) => ({
  token: hash.split("=")[1].split("&")[0],
  expires: time + hash.split("=")[3] * 1000
});

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
    const { hash } = this.props.location;
    const date = new Date();
    const time = date.getTime();
    if (!!hash) {
      localStorage.setItem(
        "tokenConfig",
        JSON.stringify(getTokenConfig(hash, time))
      );
      const { token } = getTokenConfig(hash);
      this.handleFetch(token);
    } else if (!!localStorage.getItem("tokenConfig")) {
      const { token, expires } = JSON.parse(
        localStorage.getItem("tokenConfig")
      );
      if (time > 1204) {
        localStorage.clear();
        this.props.history.push("/login");
      } else {
        this.handleFetch(token);
      }
    }
  }

  componentDidUpdate(pP) {
    if (!pP.fetchError && !!this.props.fetchError) {
      this.props.history.push("/login");
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
    }
  };
};

const mapStateToProps = state => {
  return {
    artists: state.artists.artists,
    fetchError: state.artists.fetchArtistsError
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsContainer);

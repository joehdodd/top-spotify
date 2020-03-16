import React from "react";
import { connect } from "react-redux";
import "./Artist.css";

class ArtistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { artist } = this.props;
    return (
      <div
        className="artist-hero-container"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0), rgb(17, 17, 17) 100%), url(${artist.images[0].url})
          `
        }}
      >
        <h1>{artist.name}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchArtists: token => {
    //   return dispatch(fetchArtists(token));
    // }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    artist: state.artists.artists.find(
      artist => artist.id === ownProps.match.params.artistId
    ),
    fetchError: state.artists.fetchArtistsError
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);

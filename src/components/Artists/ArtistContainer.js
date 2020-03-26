import React from "react";
import { connect } from "react-redux";
import { fetchArtist } from "../../state/actions/artists";
import "./Artist.css";

class ArtistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { artistId } = this.props.match.params;
    this.props.fetchArtist(artistId);
  }
  
  render() {
    const { artistInit, artist } = this.props;
    console.log('artist', artist)
    return (
      <div
        className="artist-hero-container"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0), rgb(17, 17, 17) 100%), url(${
            artist !== null && artist.images[0].url 
          })
          `
        }}
      >
        <h1><a href={artist !== null && artist.external_urls.spotify}>{artist !== null && artist.name}</a></h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: artistId => {
      return dispatch(fetchArtist(artistId));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    artistInit: state.artists.artists.find(
      artist => artist.id === ownProps.match.params.artistId
    ),
    artist: state.artists.artist,
    fetchError: state.artists.fetchArtistsError
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);

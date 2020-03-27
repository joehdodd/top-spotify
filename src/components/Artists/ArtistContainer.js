import React from "react";
import { connect } from "react-redux";
import { fetchArtist, clearSelectedArtist } from "../../state/actions/artists";
import { fetchArtistAlbums } from "../../state/actions/albums";
import "./Artist.css";

class ArtistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { artistId } = this.props.match.params;
    console.log("artist container mounted");

    this.props.fetchArtist(artistId);
    this.props.fetchArtistAlbums(artistId);
  }

  componentWillUnmount() {
    console.log("unmount?");
    this.props.clearSelectedArtist();
  }

  render() {
    const { artistInit, artist, artistAlbums } = this.props;
    console.log("artist", artistAlbums);
    return (
      <section className="artist-container">
        <div
          className="artist-hero-container"
          style={{
            backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0), rgb(17, 17, 17) 100%), url(${artist !==
            null && artist.images[0].url})
          `
          }}
        >
          <h1>
            <a href={artist !== null && artist.external_urls.spotify}>
              {artist !== null && artist.name}
            </a>
          </h1>
        </div>
        <div className="artist-info-wrapper">
          <div className="artist-info-container">
            <h2>Albums</h2>
            <div className="artist-album-container">
              {artistAlbums !== null &&
                artistAlbums.map(album => (
                  <div
                    className="artist-album-card"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgb(4, 4, 4) 95%), url(${album.images[1].url})`
                    }}
                  >
                    <a href={album.external_urls.spotify}>
                      <h3>{album.name}</h3>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: artistId => {
      return dispatch(fetchArtist(artistId));
    },
    fetchArtistAlbums: artistId => {
      return dispatch(fetchArtistAlbums(artistId));
    },
    clearSelectedArtist: () => {
      return dispatch(clearSelectedArtist());
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    artistInit: state.artists.artists.find(
      artist => artist.id === ownProps.match.params.artistId
    ),
    artistAlbums: state.albums.artistAlbums,
    artist: state.artists.artist,
    fetchError: state.artists.fetchArtistsError
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);

import axios from "axios";

function setArtistAlbums(albums) {
  return {
    type: "SET_ARTIST_ALBUMS",
    albums
  };
}

function fetchArtistAlbumsError(error) {
  return {
    type: "FETCH_ARTIST_ALBUMS_ERROR",
    error
  };
}

export const fetchArtistAlbums = artistId => {
  return (dispatch, getState) => {
    const { token } = getState().auth.tokenConfig;
    axios
      .get(`https://api.spotify.com/v1/artists/${artistId}/albums?market=US&include_groups=album`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        dispatch(setArtistAlbums(res.data.items));
      })
      .catch(res => dispatch(fetchArtistAlbumsError(res)));
  };
};

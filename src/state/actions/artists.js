import axios from "axios";

function setArtists(artists) {
  return {
    type: "SET_ARTISTS",
    artists
  };
}

function fetchArtistsError(error) {
  return {
    type: "FETCH_ARTISTS_ERROR",
    error
  };
}

function setArtist(artist) {
  return {
    type: "SET_ARTIST",
    artist
  };
}

function fetchArtistError(error) {
  return {
    type: "FETCH_ARTIST_ERROR",
    error
  };
}

export const fetchArtists = () => {
  return (dispatch, getState) => {
    const {token } = getState().auth.tokenConfig;
    const type = "artists";
    axios
      .get(`https://api.spotify.com/v1/me/top/${type}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => dispatch(setArtists(res.data.items)))
      .catch(res => dispatch(fetchArtistsError(res)));
  };
};

export const fetchArtist = artistId => {
  return (dispatch, getState) => {
    const { token } = getState().auth.tokenConfig;
    axios
      .get(`https://api.spotify.com/v1/artists/${artistId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => dispatch(setArtist(res.data)))
      .catch(res => dispatch(fetchArtistError(res)));
  };
};

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

export const fetchArtists = token => {
  return dispatch => {
    const type = "artists";
    axios
      .get(`https://api.spotify.com/v1/me/top/${type}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => dispatch(setArtists(res.data.items)))
      .catch(res => dispatch(fetchArtistsError(res)));
  };
};

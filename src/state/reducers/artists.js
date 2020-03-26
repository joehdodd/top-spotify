const initialState = {
  fetchingArtists: false,
  fetchArtistsError: false,
  fetchArtistsErrorMsg: null,
  artists: [],
  artist: null
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING_ARTISTS":
      return {
        ...state,
        fetchingArtists: action.bool
      };
    case "FETCH_ARTISTS_ERROR":
      return {
        ...state,
        fetchArtistsError: true,
        fetchArtistsErrorMsg: action.error
      };
    case "SET_ARTISTS":
      return {
        ...state,
        artists: [...action.artists],
        fetchingArtists: false,
        fetchArtistsError: false
      };
    case "SET_ARTIST":
      return {
        ...state,
        artist: action.artist
      };
    default:
      return state;
  }
}

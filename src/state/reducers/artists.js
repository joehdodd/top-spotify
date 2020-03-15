const initialState = {
  fetchingArtists: false,
  fetchArtistsError: false,
  artists: []
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING_ARTISTS":
      return {
        ...state,
        fetchingArtists: action.bool
      };
    case "SET_ARTISTS":
      return {
        ...state,
        artists: [...action.artists],
        fetchingArtists: false,
        fetchArtistsError: false
      };
    default:
      return state;
  }
}

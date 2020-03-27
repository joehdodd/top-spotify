const initialState = {
    artistAlbums: []
  };
  
  export default function albumsReducer(state = initialState, action) {
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
      case "SET_ARTIST_ALBUMS":
        return {
          ...state,
          artistAlbums: [...action.albums],
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
  
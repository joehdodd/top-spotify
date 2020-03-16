function authenticating(bool) {
  return {
    type: "AUTHENTICATING",
    bool
  };
}

export const authenticate = () => {
  return dispatch => {
    dispatch(authenticating(true));
    const scopes = "user-read-private user-read-email user-top-read";
    const URI =
      "https://accounts.spotify.com/authorize" +
      "?response_type=token" +
      "&client_id=" +
      process.env.REACT_APP_SPOTIFY_CLIENT_ID +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent("http://localhost:3000/");
    window.open(URI, "_self");
  };
};

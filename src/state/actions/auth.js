const getTokenConfig = (hash, time) => ({
  token: hash.split("=")[1].split("&")[0],
  expires: time + hash.split("=")[3] * 1000
});

function authenticating(bool) {
  return {
    type: "AUTHENTICATING",
    bool
  };
}

function setTokenConfig(config) {
  return {
    type: "SET_TOKEN_CONFIG",
    config
  };
}

export const authenticate = () => {
  return dispatch => {
    dispatch(authenticating(true));
    const scopes = "user-read-private user-read-email user-top-read";
    const redirectURL =
      process.env.NODE_ENV === "production"
        ? "https://your-top-spotify.herokuapp.com/"
        : "http://localhost:3000/";
    const URI =
      "https://accounts.spotify.com/authorize" +
      "?response_type=token" +
      "&client_id=" +
      process.env.REACT_APP_SPOTIFY_CLIENT_ID +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirectURL);
    window.open(URI, "_self");
  };
};

export const setAuth = hash => {
  return dispatch => {
    const date = new Date();
    const time = date.getTime();
    if (!!hash) {
      localStorage.setItem(
        "tokenConfig",
        JSON.stringify(getTokenConfig(hash, time))
      );
      dispatch(setTokenConfig(getTokenConfig(hash, time)));
    } else if (!!localStorage.getItem("tokenConfig")) {
      const { token, expires } = JSON.parse(
        localStorage.getItem("tokenConfig")
      );
      dispatch(setTokenConfig({ token, expires }));
      // if (time > expires) {
      //   localStorage.clear();
      //   this.props.history.push("/login");
      // } else {
      //   this.handleFetch(token);
      // }
    }
  };
};

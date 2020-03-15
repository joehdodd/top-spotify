import React from "react";
import axios from "axios";

const getTokenConfig = (hash, time) => ({
  token: hash.split("=")[1].split("&")[0],
  expires: time + hash.split("=")[3] * 1000
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      expires: null
    };
  }

  handleFetch = token => {
    // const type = "artists";
    // axios
    //   .get(`https://api.spotify.com/v1/me/top/${type}`, {
    //     headers: { Authorization: `Bearer ${token}` }
    //   })
    //   .then(res => console.log("spotify res", res));
  };

  componentDidMount() {
    const { hash } = this.props.location;
    // const { token } = this.state;
    const date = new Date();
    const time = date.getTime();
    if (!!hash) {
      localStorage.setItem(
        "tokenConfig",
        JSON.stringify(getTokenConfig(hash, time))
      );
    } else if (!!localStorage.getItem("tokenConfig")) {
      const { token, expires } = JSON.parse(
        localStorage.getItem("tokenConfig")
      );
      if (time > expires) {
        localStorage.clear();
        this.props.history.push("/login");
      } else {
        this.handleFetch(token);
      }
    }
  }

  componentDidUpdate(pP, pS) {
    console.log(pP, pS);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Welcome!</h1>
      </div>
    );
  }
}

export default Main;

import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const spotifyLogo = require("../assets/Spotify_Icon_RGB_White.png");

export default props => (
  <div className="sidebar-container">
    <header>
      <img src={spotifyLogo} alt="Spotify Logo" />
      <h1>Top Spotify</h1>
    </header>
    <nav>
      <Link to="/" exact>
        Home
      </Link>
    </nav>
  </div>
);

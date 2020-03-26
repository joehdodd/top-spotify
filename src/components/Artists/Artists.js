import React from "react";
import { Link } from "react-router-dom";

export default ({ artists }) => {
  return (
    <>
      {artists.map(artist => (
        <div className="artist-card" key={artist.id}>
          <Link to={`/artist/${artist.id}`}>
            <img src={artist.images[2].url} alt="Artist" />
            <h3>{artist.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};
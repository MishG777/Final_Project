import React from "react";
import "../movies/movies.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movies = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={IMG_API + poster_path} alt={title} />
    <div className="movie-info">
      <h4>{title}</h4>
      <span>{vote_average}</span>
    </div>

    <div className="movie-over">
      <h3>Overview</h3>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movies;

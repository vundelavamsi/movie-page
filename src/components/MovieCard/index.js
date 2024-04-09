import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ title, poster_path, vote_average,id }) => {
  const SingleMovie = () => {};

  return (
    <Link to={`/movies/${id}`} className="link-class">
      <div className="movie-card" onClick={SingleMovie()}>
        <img src={API_IMG + poster_path} alt={title} className="movie-poster" />
        <h1 className="movie-title">{title}</h1>
        <p className="vote-average">{vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;

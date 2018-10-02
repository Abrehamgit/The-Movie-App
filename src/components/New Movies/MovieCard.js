import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import "./hover.css";

const MovieCard = ({ path, Id, title, overview }) => (
  <Link
    to={{
      pathname: `movie/${Id}`,
      state: {
        Id: Id
      }
    }}
  >
    <div
      className="movie-card-poster caption"
      title={title}
      overview={overview}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200/${path}`}
        className="z-depth-3"
        alt={"http://via.placeholder.com/300x300"}
      />
    </div>
  </Link>
);

export default MovieCard;

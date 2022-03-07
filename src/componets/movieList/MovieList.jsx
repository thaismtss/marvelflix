import "./MovieList.css";
import React from "react";
import MovieCard from "../movieCard/MovieCard";

const MovieList = (props) => {
  const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

  return (
    <div className="MovieList">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          image={getImage(movie.poster_path)}
          title={movie.title}
          rating={movie.vote_average}
          sinopse={movie.overview}
        />
      ))}
    </div>
  );
};

export default MovieList;

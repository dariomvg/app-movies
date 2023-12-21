import React from "react";
import { ratingMovies, ratingSeries } from "../constants/Constants";
import { CardMovie } from "./CardMovie";
import { CardRatingMovie } from "./CardRatingMovie";
import { CardRatingSerie } from "./CardRatingSerie";
import { MoviesApi } from "../services/MoviesApi";
import "../estilos/seccion.css";

function SeccionTodos() {
  const { movies, error } = MoviesApi();

  return (
    <section className="seccion1">
      {error && <h1>{error}</h1>}
      <h1 className="title-movies">Latest releases</h1>
      <div className="seccion">
        {movies &&
          movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </div>

      <h1 className="title-movies">Films most loved by the public</h1>
      <div className="seccion2">
        {ratingMovies &&
          ratingMovies.results.map((itemMovie) => (
            <CardRatingMovie key={itemMovie.id} itemMovie={itemMovie} />
          ))}
      </div>

      <h1 className="title-movies">Recommended series</h1>
      <div className="seccion">
        {ratingSeries &&
          ratingSeries.results.map((serie) => (
            <CardRatingSerie key={serie.id} serie={serie} />
          ))}
      </div>
    </section>
  );
}

export default React.memo(SeccionTodos);

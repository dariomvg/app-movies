import "../estilos/seccion.css";
import React from "react";
import {CardMovie} from "./CardMovie";
import {CardRatingMovie} from "./CardRatingMovie";
import {CardRatingSerie} from "./CardRatingSerie";
import { MoviesApi } from "../services/MoviesApi";
import { Constantes } from "../constants/Constants";

function Seccion() {

  const { movies, error } = MoviesApi();
  const {ratingMovies, ratingSeries} = Constantes();
  return (
    <div className="seccion1">

      <h1 className="title-movies" id="movies">Latest releases</h1>
      {error && <h1>{error}</h1>}
      <div className="seccion">
        {movies && (
          movies.map((movie) => <CardMovie key={movie.id} movie={movie} />))}
      </div>

      <h1 className="title-movies" id="topmovies">Films most loved by the public</h1>
      <div className="seccion2">
        {ratingMovies && (
          ratingMovies.results.map((itemMovie) => <CardRatingMovie key={itemMovie.id} itemMovie={itemMovie} />))}
      </div>

      <h1 className="title-movies" id="series">Recommended series</h1>
      <div className="seccion">
        {ratingSeries && (
          ratingSeries.results.map((serie) => <CardRatingSerie key={serie.id} serie={serie} />))}
      </div>
    </div>
  );
}

export default React.memo(Seccion)
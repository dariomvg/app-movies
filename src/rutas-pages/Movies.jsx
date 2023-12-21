import { MoviesApi } from "../services/MoviesApi";
import { CardMovie } from "../components/CardMovie";
import "../estilos/seccion.css";

function Movies() {
  const { movies } = MoviesApi();

  return (
    <section className="seccion1">
      <h1 className="title-movies-enl">Movies...</h1>
      <section className="seccion">
        {movies
          ? movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
          : null}
      </section>
    </section>
  );
}

export default Movies;

import { ratingMovies } from "../constants/Constants";
import "../estilos/seccion.css";
import { CardRatingMovie } from "../components/CardRatingMovie";

function TopMovies() {
  return (
    <section className="seccion1">
      <h1 className="title-movies-enl">Top movies...</h1>
      <section className="seccion">
        {ratingMovies
          ? ratingMovies.results.map((itemMovie) => <CardRatingMovie key={itemMovie.id} itemMovie={itemMovie} />)
          : null}
      </section>
    </section>
  );
}

export default TopMovies;

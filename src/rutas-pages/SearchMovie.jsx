import { useContext } from "react";
import { Link } from "react-router-dom";
import InfoContext from "../contexts/InfoContext";
import imgVolver from "../assets/images/icon-volver.png";
import { CardMovie } from "../components/CardMovie";
import "../estilos/searchMovie.css";

function SearchMovie() {
  const { datosMovie } = useContext(InfoContext);

  return (
    <section className="seccion-1">
      <div className="seccion-header">
        <h1 className="title-result">results</h1>
        <Link to="/" className="btn-principal">
          <img
            src={imgVolver}
            width={20}
            height={20}
            alt="imagen de flecha para volver"
          />
          return
        </Link>
      </div>
      <div className="seccion-2">
        {datosMovie.length > 0 ? (
          datosMovie.map((movie) => <CardMovie key={movie.id} movie={movie} />)
        ) : (
          <h1 className="title-result">no results</h1>
        )}
      </div>
    </section>
  );
}

export default SearchMovie;
